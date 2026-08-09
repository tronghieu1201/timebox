import * as THREE from 'three';
import { Earth } from './Earth.js';
import { OrbitNavigation } from './OrbitNavigation.js';
import { InfoPanel } from './InfoPanel.js';

function hasWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(window.WebGLRenderingContext && (canvas.getContext('webgl2') || canvas.getContext('webgl')));
  } catch {
    return false;
  }
}

function createStarLayer({ count, spread, depthStart, depthRange, size, opacity, color, seed }) {
  const positions = new Float32Array(count * 3);
  let randomSeed = seed;
  const random = () => {
    randomSeed = (randomSeed * 16807) % 2147483647;
    return (randomSeed - 1) / 2147483646;
  };
  for (let index = 0; index < count; index += 1) {
    positions[index * 3] = (random() - 0.5) * spread;
    positions[index * 3 + 1] = (random() - 0.5) * spread * 0.6;
    positions[index * 3 + 2] = depthStart - random() * depthRange;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
    color,
    size,
    transparent: true,
    opacity,
    sizeAttenuation: true,
    depthTest: true,
    depthWrite: false,
    toneMapped: false
  });
  const points = new THREE.Points(geometry, material);
  points.renderOrder = -20;
  return { points, geometry, material };
}

export class SpaceScene {
  constructor({ root, items, orbits, settings }) {
    if (!root || !hasWebGL()) throw new Error('WebGL is not available');
    this.root = root;
    this.stage = root.querySelector('[data-space-stage]');
    this.nodeLayer = root.querySelector('[data-space-nodes]');
    this.homeView = root.closest('.spa-view');
    this.settings = settings;
    this.assetBase = './images/space';
    this.reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.reducedMotion = this.reducedMotionQuery.matches;
    this.lowPower = Boolean(
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
      (navigator.deviceMemory && navigator.deviceMemory <= 4)
    );
    this.running = false;
    this.frameId = 0;
    this.lastFrame = performance.now();
    this.backgroundTexture = null;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(40, 1, 0.1, 90);
    this.camera.position.set(0, 0, settings.cameraZ);

    this.renderer = new THREE.WebGLRenderer({
      antialias: !this.lowPower,
      alpha: false,
      powerPreference: this.lowPower ? 'low-power' : 'high-performance'
    });
    this.renderer.setClearColor(0x010205, 1);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.92;
    this.renderer.domElement.className = 'space-navigation__canvas';
    this.renderer.domElement.setAttribute('aria-hidden', 'true');
    this.stage.prepend(this.renderer.domElement);

    const ambient = new THREE.AmbientLight(0x73839b, 0.065);
    this.sunDirection = new THREE.Vector3(-5, 3.2, 7).normalize();
    const sunlight = new THREE.DirectionalLight(0xfff4df, 3.05);
    sunlight.position.copy(this.sunDirection).multiplyScalar(10);
    sunlight.target.position.set(0, 0, 0);
    this.scene.add(ambient, sunlight, sunlight.target);

    this.createDeepSpaceBackground();
    this.starLayers = [
      createStarLayer({
        count: this.lowPower ? 120 : 340,
        spread: 42,
        depthStart: -7,
        depthRange: 14,
        size: 0.035,
        opacity: 0.42,
        color: 0xe8edf4,
        seed: 9471
      }),
      createStarLayer({
        count: this.lowPower ? 190 : 620,
        spread: 62,
        depthStart: -18,
        depthRange: 35,
        size: 0.075,
        opacity: 0.24,
        color: 0xb7c1cf,
        seed: 1201
      })
    ];
    this.starLayers.forEach((layer) => this.scene.add(layer.points));

    this.earth = new Earth({
      radius: settings.earthRadius,
      assetBase: this.assetBase,
      sunDirection: this.sunDirection,
      anisotropy: Math.min(8, this.renderer.capabilities.getMaxAnisotropy()),
      lowPower: this.lowPower,
      onCriticalError: () => this.activateFallback('earth-textures')
    });
    this.scene.add(this.earth.group);

    this.infoPanel = new InfoPanel(this.stage, (item) => this.explore(item));
    this.navigation = new OrbitNavigation({
      scene: this.scene,
      camera: this.camera,
      stage: this.stage,
      nodeLayer: this.nodeLayer,
      items,
      orbits,
      settings,
      reducedMotion: this.reducedMotion,
      lowPower: this.lowPower,
      onExplore: (item) => this.explore(item),
      onSelect: (item) => item ? this.infoPanel.show(item) : this.infoPanel.hide()
    });

    this.handleResize = () => this.resize();
    this.handleMotionChange = (event) => {
      this.reducedMotion = event.matches;
      this.navigation.reducedMotion = event.matches;
      if (event.matches) {
        this.navigation.resumeAt = Number.POSITIVE_INFINITY;
      } else if (this.navigation.activeIndex < 0) {
        this.navigation.resumeAt = performance.now() + this.settings.resumeDelay;
      }
    };
    this.handleVisibility = () => this.syncRunningState();
    this.handleBeforeUnload = () => this.destroy({ preserveLayout: true });
    this.resizeObserver = new ResizeObserver(this.handleResize);
    this.resizeObserver.observe(this.stage);
    this.viewObserver = new MutationObserver(this.handleVisibility);
    if (this.homeView) this.viewObserver.observe(this.homeView, { attributes: true, attributeFilter: ['class'] });
    this.reducedMotionQuery.addEventListener('change', this.handleMotionChange);
    document.addEventListener('visibilitychange', this.handleVisibility);
    window.addEventListener('beforeunload', this.handleBeforeUnload, { once: true });

    this.root.classList.add('is-webgl-ready');
    this.resize();
    document.body.classList.add('space-navigation-ready');
    this.syncRunningState();
  }

  createDeepSpaceBackground() {
    const geometry = new THREE.SphereGeometry(48, this.lowPower ? 36 : 64, this.lowPower ? 24 : 40);
    const material = new THREE.MeshBasicMaterial({
      color: 0x2a2d31,
      side: THREE.BackSide,
      depthTest: false,
      depthWrite: false,
      fog: false
    });
    this.backgroundSphere = new THREE.Mesh(geometry, material);
    this.backgroundSphere.rotation.y = Math.PI * 0.64;
    this.backgroundSphere.renderOrder = -100;
    this.backgroundGeometry = geometry;
    this.backgroundMaterial = material;
    this.scene.add(this.backgroundSphere);

    const loader = new THREE.TextureLoader();
    loader.load(`${this.assetBase}/milky_way.webp`, (texture) => {
      if (this.destroyed) {
        texture.dispose();
        return;
      }
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.wrapS = THREE.RepeatWrapping;
      material.map = texture;
      material.color.set(0x81858b);
      material.needsUpdate = true;
      this.backgroundTexture = texture;
    }, undefined, () => this.activateFallback('deep-space-texture'));
  }

  activateFallback(reason) {
    if (this.assetFailed || this.destroyed) return;
    this.assetFailed = reason;
    this.running = false;
    cancelAnimationFrame(this.frameId);
    this.root.classList.remove('is-webgl-ready');
    this.root.classList.add('is-unavailable');
    document.body.classList.remove('space-navigation-ready');
  }

  explore(item) {
    window.dispatchEvent(new window.CustomEvent('timebox:navigate', {
      detail: { id: item.id }
    }));
  }

  resize() {
    const rect = this.stage.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    const mobile = width < 640;
    const tablet = width >= 640 && width < 980;
    this.viewport = { width, height, mobile, tablet };
    this.camera.aspect = width / height;
    this.camera.fov = mobile ? 45 : (tablet ? 43 : 40);
    this.camera.updateProjectionMatrix();
    const dprCap = this.lowPower || mobile ? 1.35 : 1.8;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, dprCap));
    this.renderer.setSize(width, height, false);
    const horizontalWorldRadius = Math.tan(THREE.MathUtils.degToRad(this.camera.fov * 0.5)) * this.settings.cameraZ * this.camera.aspect;
    const orbitScale = THREE.MathUtils.clamp(horizontalWorldRadius / 7.75, 0.4, 1);
    const earthScale = mobile
      ? Math.min(0.67, orbitScale + 0.22)
      : (tablet ? Math.min(0.84, orbitScale + 0.16) : 1);
    this.earth.group.scale.setScalar(earthScale);
    this.navigation.setScale(orbitScale);
    this.navigation.setEarthOcclusionRadius(this.settings.earthRadius * earthScale * 1.015);
  }

  syncRunningState() {
    const homeVisible = !this.homeView || !this.homeView.classList.contains('is-hidden');
    const shouldRun = !this.assetFailed && !document.hidden && homeVisible;
    document.body.classList.toggle('space-nav-home-visible', homeVisible);
    if (shouldRun && !this.running) {
      this.running = true;
      this.lastFrame = performance.now();
      this.frameId = requestAnimationFrame((time) => this.render(time));
    } else if (!shouldRun && this.running) {
      this.running = false;
      cancelAnimationFrame(this.frameId);
    }
  }

  render(time) {
    if (!this.running) return;
    const delta = Math.min(0.05, Math.max(0, (time - this.lastFrame) / 1000));
    this.lastFrame = time;
    this.earth.update(delta, this.reducedMotion);
    this.navigation.update(delta, time, this.viewport);
    this.starLayers[0].points.position.set(-this.camera.position.x * 0.12, -this.camera.position.y * 0.12, 0);
    this.starLayers[1].points.position.set(-this.camera.position.x * 0.035, -this.camera.position.y * 0.035, 0);
    this.backgroundSphere.position.set(this.camera.position.x * 0.012, this.camera.position.y * 0.012, 0);
    this.renderer.render(this.scene, this.camera);
    this.frameId = requestAnimationFrame((nextTime) => this.render(nextTime));
  }

  destroy({ preserveLayout = false } = {}) {
    if (this.destroyed) return;
    this.destroyed = true;
    this.running = false;
    cancelAnimationFrame(this.frameId);
    this.resizeObserver.disconnect();
    this.viewObserver.disconnect();
    this.reducedMotionQuery.removeEventListener('change', this.handleMotionChange);
    document.removeEventListener('visibilitychange', this.handleVisibility);
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
    this.navigation.destroy();
    this.infoPanel.destroy();
    this.earth.dispose();
    this.starLayers.forEach((layer) => {
      layer.geometry.dispose();
      layer.material.dispose();
    });
    if (this.backgroundTexture) this.backgroundTexture.dispose();
    this.backgroundGeometry.dispose();
    this.backgroundMaterial.dispose();
    this.scene.clear();
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    this.renderer.domElement.remove();
    document.body.classList.remove('space-navigation-ready');
    if (!preserveLayout) document.body.classList.remove('space-nav-home-visible');
  }
}
