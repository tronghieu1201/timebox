import * as THREE from 'three';
import { gsap } from 'gsap';
import { NavigationNode } from './NavigationNode.js';

function normalizeAngle(angle) {
  return Math.atan2(Math.sin(angle), Math.cos(angle));
}

export class OrbitNavigation {
  constructor({ scene, camera, stage, nodeLayer, items, orbits, settings, reducedMotion, lowPower, onExplore, onSelect }) {
    this.scene = scene;
    this.camera = camera;
    this.stage = stage;
    this.nodeLayer = nodeLayer;
    this.items = items;
    this.orbits = orbits;
    this.settings = settings;
    this.reducedMotion = reducedMotion;
    this.lowPower = lowPower;
    this.onExplore = onExplore;
    this.onSelect = onSelect;
    this.system = new THREE.Group();
    this.nodes = [];
    this.domButtons = [];
    this.pickSurfaces = [];
    this.isDragging = false;
    this.dragMoved = false;
    this.hoverCount = 0;
    this.pointerHoveredIndex = -1;
    this.focusedIndex = -1;
    this.pressedNodeIndex = -1;
    this.resumeAt = 0;
    this.activeIndex = -1;
    this.pointerStartX = 0;
    this.pointerStartY = 0;
    this.rotationStart = 0;
    this.hoverFrame = 0;
    this.pendingHoverEvent = null;
    this.parallaxTarget = new THREE.Vector2();
    this.pointerNdc = new THREE.Vector2();
    this.projectedPosition = new THREE.Vector3();
    this.worldPosition = new THREE.Vector3();
    this.rayToNode = new THREE.Vector3();
    this.closestPoint = new THREE.Vector3();
    this.raycaster = new THREE.Raycaster();
    this.earthOcclusionRadius = settings.earthRadius;
    this.scene.add(this.system);
    this.createOrbits();
    this.createNodes();
    this.bindEvents();
  }

  createOrbits() {
    this.orbits.forEach((orbit) => {
      const points = [];
      const euler = new THREE.Euler(orbit.tiltX, 0, orbit.tiltZ);
      for (let step = 0; step <= 180; step += 1) {
        const angle = (step / 180) * Math.PI * 2;
        points.push(new THREE.Vector3(
          Math.cos(angle) * orbit.radiusX,
          0,
          Math.sin(angle) * orbit.radiusZ
        ).applyEuler(euler));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color: orbit.color,
        transparent: true,
        opacity: 0.085,
        blending: THREE.NormalBlending,
        depthTest: true,
        depthWrite: false
      });
      const line = new THREE.LineLoop(geometry, material);
      this.system.add(line);
      this.nodes.push({ orbitLine: line, disposables: [geometry, material] });
    });
    this.nodes = [];
  }

  createNodes() {
    this.items.forEach((item, index) => {
      const orbit = this.orbits[item.orbit];
      const euler = new THREE.Euler(orbit.tiltX, 0, orbit.tiltZ);
      const position = new THREE.Vector3(
        Math.cos(item.phase) * orbit.radiusX,
        0,
        Math.sin(item.phase) * orbit.radiusZ
      ).applyEuler(euler);
      const node = new NavigationNode(item, this.lowPower);
      node.group.position.copy(position);
      this.system.add(node.group);

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'space-node';
      button.setAttribute('aria-label', item.label);
      button.setAttribute('aria-pressed', 'false');
      button.style.setProperty('--node-color', item.color);
      button.innerHTML = `
        <span class="space-node__core" aria-hidden="true"><i class="${item.iconClass}"></i></span>
        <span class="space-node__label">${item.label}</span>
      `;
      this.nodeLayer.appendChild(button);
      node.surface.userData.navigationIndex = index;

      const focus = () => {
        this.focusedIndex = index;
        this.syncHoverState();
      };
      const blur = () => {
        if (this.focusedIndex === index) this.focusedIndex = -1;
        this.syncHoverState();
        this.resumeAt = performance.now() + this.settings.resumeDelay;
      };
      const click = () => {
        if (this.dragMoved) return;
        if (this.activeIndex === index) {
          this.onExplore(item);
        } else {
          this.focus(index);
        }
      };
      const keydown = (event) => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
          event.preventDefault();
          this.focus(this.getAdjacentFocusableIndex(index, 1), true);
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
          event.preventDefault();
          this.focus(this.getAdjacentFocusableIndex(index, -1), true);
        }
      };
      button.addEventListener('focus', focus);
      button.addEventListener('blur', blur);
      button.addEventListener('click', click);
      button.addEventListener('keydown', keydown);

      this.nodes.push({
        node,
        button,
        item,
        position,
        orbit,
        orbitEuler: euler,
        angle: item.phase,
        angularSpeed: 0.016 * (item.orbitSpeed || 1),
        listeners: { focus, blur, click, keydown },
        occluded: false,
        mobileHidden: false
      });
      this.pickSurfaces.push(node.surface);
      this.domButtons.push(button);
    });
  }

  isInterfaceTarget(target) {
    return Boolean(target?.closest?.('.space-info'));
  }

  pickNodeIndex(event) {
    if (this.isInterfaceTarget(event.target)) return -1;
    const rect = this.stage.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return -1;
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) return -1;

    this.pointerNdc.set(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      -((event.clientY - rect.top) / rect.height) * 2 + 1
    );
    this.camera.updateMatrixWorld();
    this.system.updateMatrixWorld(true);
    this.raycaster.setFromCamera(this.pointerNdc, this.camera);
    const intersections = this.raycaster.intersectObjects(this.pickSurfaces, false);
    const match = intersections.find((intersection) => {
      const index = intersection.object.userData.navigationIndex;
      const entry = this.nodes[index];
      return entry && !entry.mobileHidden && !this.isOccludedByEarth(intersection.point);
    });
    return match ? match.object.userData.navigationIndex : -1;
  }

  syncHoverState() {
    let hasHover = false;
    this.nodes.forEach((entry, index) => {
      const hovered = index === this.pointerHoveredIndex || index === this.focusedIndex;
      entry.node.setHovered(hovered);
      entry.button.classList.toggle('is-hovered', hovered);
      hasHover ||= hovered;
    });
    this.hoverCount = hasHover ? 1 : 0;
    this.stage.classList.toggle('has-node-hover', this.pointerHoveredIndex >= 0);
  }

  setPointerHoveredIndex(index) {
    if (this.pointerHoveredIndex === index) return;
    this.pointerHoveredIndex = index;
    this.syncHoverState();
  }

  activateIndex(index) {
    const selected = this.nodes[index];
    if (!selected) return;
    if (this.activeIndex === index) {
      this.onExplore(selected.item);
    } else {
      this.focus(index);
    }
  }

  getAdjacentFocusableIndex(index, direction) {
    for (let offset = 1; offset <= this.nodes.length; offset += 1) {
      const candidate = (index + direction * offset + this.nodes.length) % this.nodes.length;
      const entry = this.nodes[candidate];
      if (entry && !entry.occluded && !entry.mobileHidden) return candidate;
    }
    return index;
  }

  bindEvents() {
    this.handlePointerDown = (event) => {
      if (event.button !== undefined && event.button !== 0) return;
      if (this.isInterfaceTarget(event.target)) return;
      this.isDragging = true;
      this.dragMoved = false;
      this.pendingHoverEvent = null;
      if (this.hoverFrame) cancelAnimationFrame(this.hoverFrame);
      this.hoverFrame = 0;
      this.pressedNodeIndex = this.pickNodeIndex(event);
      this.setPointerHoveredIndex(this.pressedNodeIndex);
      this.pointerStartX = event.clientX;
      this.pointerStartY = event.clientY;
      this.rotationStart = this.system.rotation.y;
      this.stage.classList.add('is-dragging');
      gsap.killTweensOf(this.system.rotation);
      if (this.stage.setPointerCapture) this.stage.setPointerCapture(event.pointerId);
    };
    this.queuePointerHover = (event) => {
      this.pendingHoverEvent = {
        clientX: event.clientX,
        clientY: event.clientY,
        target: event.target
      };
      if (this.hoverFrame) return;
      this.hoverFrame = requestAnimationFrame(() => {
        this.hoverFrame = 0;
        const pointer = this.pendingHoverEvent;
        this.pendingHoverEvent = null;
        if (!pointer || this.isDragging) return;
        const rect = this.stage.getBoundingClientRect();
        if (!this.reducedMotion && rect.width > 0 && rect.height > 0) {
          this.parallaxTarget.set(
            ((pointer.clientX - rect.left) / rect.width - 0.5) * 0.42,
            -((pointer.clientY - rect.top) / rect.height - 0.5) * 0.24
          );
        }
        this.setPointerHoveredIndex(this.pickNodeIndex(pointer));
      });
    };
    this.handlePointerMove = (event) => {
      if (!this.isDragging) {
        this.queuePointerHover(event);
        return;
      }
      const rect = this.stage.getBoundingClientRect();
      if (!this.reducedMotion && rect.width > 0 && rect.height > 0) {
        this.parallaxTarget.set(
          ((event.clientX - rect.left) / rect.width - 0.5) * 0.42,
          -((event.clientY - rect.top) / rect.height - 0.5) * 0.24
        );
      }
      const deltaX = event.clientX - this.pointerStartX;
      const deltaY = event.clientY - this.pointerStartY;
      const dragThreshold = event.pointerType === 'touch' ? 10 : 5;
      if (Math.hypot(deltaX, deltaY) > dragThreshold) {
        this.dragMoved = true;
        this.setPointerHoveredIndex(-1);
      }
      this.system.rotation.y = this.rotationStart + deltaX * this.settings.dragSensitivity;
    };
    const finishPointer = (event, canActivate) => {
      if (!this.isDragging) return;
      const releasedNodeIndex = canActivate && !this.dragMoved ? this.pickNodeIndex(event) : -1;
      const activateIndex = releasedNodeIndex === this.pressedNodeIndex ? releasedNodeIndex : -1;
      this.isDragging = false;
      this.stage.classList.remove('is-dragging');
      this.resumeAt = performance.now() + this.settings.resumeDelay;
      if (this.stage.releasePointerCapture && this.stage.hasPointerCapture(event.pointerId)) {
        this.stage.releasePointerCapture(event.pointerId);
      }
      this.pressedNodeIndex = -1;
      this.setPointerHoveredIndex(releasedNodeIndex);
      if (activateIndex >= 0) this.activateIndex(activateIndex);
      window.setTimeout(() => { this.dragMoved = false; }, 0);
    };
    this.handlePointerUp = (event) => finishPointer(event, true);
    this.handlePointerCancel = (event) => finishPointer(event, false);
    this.handlePointerLeave = () => {
      if (!this.isDragging) {
        this.pendingHoverEvent = null;
        if (this.hoverFrame) cancelAnimationFrame(this.hoverFrame);
        this.hoverFrame = 0;
        this.setPointerHoveredIndex(-1);
      }
    };
    this.handleStageKeydown = (event) => {
      if (event.key === 'Escape' && this.activeIndex >= 0) this.clearSelection();
    };
    this.stage.addEventListener('pointerdown', this.handlePointerDown);
    this.stage.addEventListener('pointermove', this.handlePointerMove);
    this.stage.addEventListener('pointerup', this.handlePointerUp);
    this.stage.addEventListener('pointercancel', this.handlePointerCancel);
    this.stage.addEventListener('pointerleave', this.handlePointerLeave);
    this.stage.addEventListener('keydown', this.handleStageKeydown);
  }

  focus(index, moveFocus = false) {
    const selected = this.nodes[index];
    if (!selected) return;
    this.nodes.forEach((entry, nodeIndex) => {
      const isActive = nodeIndex === index;
      entry.node.setActive(isActive);
      entry.button.classList.toggle('is-active', isActive);
      entry.button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    this.activeIndex = index;
    const alpha = Math.atan2(selected.position.x, selected.position.z);
    const delta = normalizeAngle(-alpha - this.system.rotation.y);
    const targetRotation = this.system.rotation.y + delta;
    this.resumeAt = Number.POSITIVE_INFINITY;

    if (this.reducedMotion) {
      this.system.rotation.y = targetRotation;
      this.camera.position.z = this.settings.cameraFocusZ;
    } else {
      gsap.to(this.system.rotation, {
        y: targetRotation,
        duration: this.settings.focusDuration,
        ease: 'expo.inOut',
        overwrite: true
      });
      gsap.to(this.camera.position, {
        z: this.settings.cameraFocusZ,
        duration: this.settings.focusDuration,
        ease: 'power3.inOut',
        overwrite: true
      });
    }
    this.onSelect(selected.item);
    if (moveFocus) selected.button.focus({ preventScroll: true });
  }

  clearSelection() {
    this.nodes.forEach((entry) => {
      entry.node.setActive(false);
      entry.button.classList.remove('is-active');
      entry.button.setAttribute('aria-pressed', 'false');
    });
    this.activeIndex = -1;
    this.resumeAt = performance.now() + this.settings.resumeDelay;
    this.onSelect(null);
    gsap.to(this.camera.position, {
      z: this.settings.cameraZ,
      duration: this.reducedMotion ? 0 : 0.7,
      ease: 'power3.out',
      overwrite: true
    });
  }

  update(delta, now, viewport) {
    const canAutoRotate = !this.reducedMotion && !this.isDragging && this.hoverCount === 0 && this.activeIndex < 0 && now >= this.resumeAt;
    if (canAutoRotate) {
      this.system.rotation.y += delta * this.settings.autoRotateSpeed;
      this.nodes.forEach((entry) => {
        entry.angle += delta * entry.angularSpeed;
        entry.position.set(
          Math.cos(entry.angle) * entry.orbit.radiusX,
          0,
          Math.sin(entry.angle) * entry.orbit.radiusZ
        ).applyEuler(entry.orbitEuler);
        entry.node.group.position.copy(entry.position);
      });
    }

    this.camera.position.x += (this.parallaxTarget.x - this.camera.position.x) * Math.min(1, delta * 2.5);
    this.camera.position.y += (this.parallaxTarget.y - this.camera.position.y) * Math.min(1, delta * 2.5);
    this.camera.lookAt(0, 0, 0);

    const projected = this.projectedPosition;
    const world = this.worldPosition;

    this.nodes.forEach((entry, index) => {
      entry.node.group.getWorldPosition(world);
      const depth = THREE.MathUtils.clamp((world.z + 5.2) / 10.4, 0, 1);
      entry.node.update(delta, depth, this.reducedMotion);
      projected.copy(world).project(this.camera);
      const x = (projected.x * 0.5 + 0.5) * viewport.width;
      const y = (-projected.y * 0.5 + 0.5) * viewport.height;
      const scale = (0.9 + depth * 0.1) * (viewport.mobile ? 0.92 : 1);
      const opacity = 0.56 + depth * 0.44;
      const occluded = this.isOccludedByEarth(world);
      const mobileHidden = viewport.mobile && depth < 0.3 && index !== this.activeIndex;
      entry.occluded = occluded;
      entry.mobileHidden = mobileHidden;
      entry.button.style.setProperty('--screen-x', `${x}px`);
      entry.button.style.setProperty('--screen-y', `${y}px`);
      entry.button.style.setProperty('--depth-scale', scale.toFixed(3));
      entry.button.style.setProperty('--depth-opacity', opacity.toFixed(3));
      entry.button.style.zIndex = String(20 + Math.round(depth * 50));
      entry.button.classList.toggle('is-occluded', occluded);
      entry.button.classList.toggle('is-behind', depth < 0.42);
      entry.button.classList.toggle('is-mobile-hidden', mobileHidden);
    });
  }

  setScale(scale) {
    this.system.scale.setScalar(scale);
  }

  setEarthOcclusionRadius(radius) {
    this.earthOcclusionRadius = radius;
  }

  isOccludedByEarth(worldPosition) {
    const rayToNode = this.rayToNode.copy(worldPosition).sub(this.camera.position);
    const nodeDistance = rayToNode.length();
    if (nodeDistance <= 0) return false;
    const direction = rayToNode.multiplyScalar(1 / nodeDistance);
    const closestDistance = -this.camera.position.dot(direction);
    if (closestDistance <= 0 || closestDistance >= nodeDistance) return false;
    const closestPoint = this.closestPoint.copy(this.camera.position).addScaledVector(direction, closestDistance);
    return closestPoint.lengthSq() < this.earthOcclusionRadius * this.earthOcclusionRadius;
  }

  destroy() {
    if (this.hoverFrame) cancelAnimationFrame(this.hoverFrame);
    this.hoverFrame = 0;
    this.pendingHoverEvent = null;
    gsap.killTweensOf(this.system.rotation);
    gsap.killTweensOf(this.camera.position);
    this.stage.removeEventListener('pointerdown', this.handlePointerDown);
    this.stage.removeEventListener('pointermove', this.handlePointerMove);
    this.stage.removeEventListener('pointerup', this.handlePointerUp);
    this.stage.removeEventListener('pointercancel', this.handlePointerCancel);
    this.stage.removeEventListener('pointerleave', this.handlePointerLeave);
    this.stage.removeEventListener('keydown', this.handleStageKeydown);
    this.stage.classList.remove('has-node-hover', 'is-dragging');
    this.nodes.forEach((entry) => {
      const { button, listeners, node } = entry;
      button.removeEventListener('focus', listeners.focus);
      button.removeEventListener('blur', listeners.blur);
      button.removeEventListener('click', listeners.click);
      button.removeEventListener('keydown', listeners.keydown);
      button.remove();
      node.dispose();
    });
    this.system.traverse((object) => {
      if (object.isLine) {
        object.geometry.dispose();
        object.material.dispose();
      }
    });
    this.scene.remove(this.system);
    this.system.clear();
    this.pickSurfaces.length = 0;
  }
}
