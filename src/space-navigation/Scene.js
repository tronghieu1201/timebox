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

/* =========================================================================
   1. CIRCULAR SOFT GLOW STAR BACKGROUND
   ========================================================================= */
function createCircleParticleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.35, 'rgba(255, 255, 255, 0.85)');
  gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.25)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

function createStarLayer({ count, spread, depthStart, depthRange, size, opacity, color, seed, circleTexture }) {
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
    map: circleTexture || null,
    transparent: true,
    opacity,
    sizeAttenuation: true,
    depthTest: true,
    depthWrite: false,
    toneMapped: false,
    blending: THREE.AdditiveBlending
  });
  const points = new THREE.Points(geometry, material);
  points.renderOrder = -18;
  return { points, geometry, material };
}

/* =========================================================================
   2. SMALL SQUARE COSMIC PARTICLES / DISTANT SPACE DUST (3 DEPTH LAYERS)
   ========================================================================= */
class CosmicDustSystem {
  constructor(scene, lowPower = false) {
    this.scene = scene;
    this.lowPower = lowPower;
    this.layers = [];

    // 3 True Depth Layers: Far, Mid, Near
    const layerConfigs = [
      {
        name: 'far',
        count: lowPower ? 90 : 220,
        spread: 52,
        depthMin: -16,
        depthMax: -32,
        size: 0.08,
        baseOpacity: 0.55,
        driftSpeed: 0.002,
        parallaxFactor: 0.016,
        seed: 48921
      },
      {
        name: 'mid',
        count: lowPower ? 60 : 140,
        spread: 38,
        depthMin: -8,
        depthMax: -16,
        size: 0.13,
        baseOpacity: 0.70,
        driftSpeed: 0.005,
        parallaxFactor: 0.045,
        seed: 73939
      },
      {
        name: 'near',
        count: lowPower ? 25 : 65,
        spread: 26,
        depthMin: -1,
        depthMax: -8,
        size: 0.18,
        baseOpacity: 0.85,
        driftSpeed: 0.008,
        parallaxFactor: 0.090,
        seed: 12053
      }
    ];

    // Palette:
    // 65% Neutral / Cool gray-blue whites
    // 15% Very soft cyan
    // 10% Very soft lavender / purple
    // 10% Very soft warm gold
    const palette = [
      new THREE.Color(0xf0f4ff), // Brilliant cool white
      new THREE.Color(0xd1d5db), // Soft gray-white
      new THREE.Color(0x94a3b8), // Subtle blue-gray
      new THREE.Color(0xb0c4de), // Light steel blue
      new THREE.Color(0x38bdf8), // Soft electric cyan
      new THREE.Color(0xc084fc), // Soft lavender
      new THREE.Color(0xfde047)  // Soft warm gold
    ];

    layerConfigs.forEach((cfg) => {
      let seed = cfg.seed;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };

      const positions = new Float32Array(cfg.count * 3);
      const colors = new Float32Array(cfg.count * 3);
      const initialPositions = new Float32Array(cfg.count * 3);
      const driftPhases = new Float32Array(cfg.count);

      let placed = 0;
      let attempts = 0;
      while (placed < cfg.count && attempts < cfg.count * 4) {
        attempts += 1;
        const x = (rnd() - 0.5) * cfg.spread;
        const y = (rnd() - 0.5) * cfg.spread * 0.65;
        const z = cfg.depthMin - rnd() * Math.abs(cfg.depthMax - cfg.depthMin);

        // Density reduction in central core to keep Earth clean and focal
        const distXY = Math.sqrt(x * x + y * y);
        if (distXY < 3.8 && z > -12) {
          continue;
        }

        positions[placed * 3] = x;
        positions[placed * 3 + 1] = y;
        positions[placed * 3 + 2] = z;

        initialPositions[placed * 3] = x;
        initialPositions[placed * 3 + 1] = y;
        initialPositions[placed * 3 + 2] = z;

        driftPhases[placed] = rnd() * Math.PI * 2;

        // Weighted color distribution
        const cRoll = rnd();
        let color;
        if (cRoll < 0.65) {
          color = palette[Math.floor(rnd() * 4)];
        } else if (cRoll < 0.80) {
          color = palette[4];
        } else if (cRoll < 0.90) {
          color = palette[5];
        } else {
          color = palette[6];
        }

        colors[placed * 3] = color.r;
        colors[placed * 3 + 1] = color.g;
        colors[placed * 3 + 2] = color.b;

        placed += 1;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions.subarray(0, placed * 3), 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors.subarray(0, placed * 3), 3));

      // PointsMaterial without map renders crisp tiny square pixel dust
      const material = new THREE.PointsMaterial({
        size: cfg.size,
        vertexColors: true,
        transparent: true,
        opacity: cfg.baseOpacity,
        sizeAttenuation: true,
        depthTest: true,
        depthWrite: false,
        toneMapped: false,
        blending: THREE.AdditiveBlending
      });

      const points = new THREE.Points(geometry, material);
      points.renderOrder = -15;
      this.scene.add(points);

      this.layers.push({
        points,
        geometry,
        material,
        config: cfg,
        initialPositions: initialPositions.subarray(0, placed * 3),
        driftPhases: driftPhases.subarray(0, placed),
        count: placed
      });
    });
  }

  update(delta, time, camera) {
    const elapsed = time * 0.001;

    this.layers.forEach((layer) => {
      const cfg = layer.config;
      const positions = layer.geometry.attributes.position.array;
      const init = layer.initialPositions;
      const phases = layer.driftPhases;

      // Organic subtle floating drift
      for (let i = 0; i < layer.count; i += 1) {
        const phase = phases[i];
        const driftX = Math.sin(elapsed * cfg.driftSpeed * 8 + phase) * (0.3 + cfg.size * 2);
        const driftY = Math.cos(elapsed * cfg.driftSpeed * 6 + phase * 1.3) * (0.2 + cfg.size * 2);
        positions[i * 3] = init[i * 3] + driftX;
        positions[i * 3 + 1] = init[i * 3 + 1] + driftY;
      }
      layer.geometry.attributes.position.needsUpdate = true;

      // Parallax response to camera
      layer.points.position.set(
        -camera.position.x * cfg.parallaxFactor,
        -camera.position.y * cfg.parallaxFactor,
        0
      );
    });
  }

  dispose() {
    this.layers.forEach((layer) => {
      this.scene.remove(layer.points);
      layer.geometry.dispose();
      layer.material.dispose();
    });
    this.layers.length = 0;
  }
}

/* =========================================================================
   3. NATURAL SHOOTING STARS / METEOR STREAKS (OBJECT POOL & WEIGHTED TIMING)
   ========================================================================= */
class NaturalShootingStars {
  constructor(scene, lowPower = false, mobile = false, circleTexture = null) {
    this.scene = scene;
    this.lowPower = lowPower;
    this.mobile = mobile;
    this.circleTexture = circleTexture;
    this.maxActive = mobile || lowPower ? 1 : 2;
    this.poolSize = 3;
    this.pool = [];
    // Spawn first shooting star right after 0.9s on launch for instant visual feedback
    this.nextSpawn = performance.now() + 900;
    this.pendingTandem = false;

    // Create pooled shooting star line & glowing head objects
    for (let i = 0; i < this.poolSize; i += 1) {
      const segmentCount = 4;
      const positions = new Float32Array(segmentCount * 3);
      const colors = new Float32Array(segmentCount * 3);

      // Tail to Head gradient: Tail is faint blue-cyan, Head is brilliant white
      colors[0] = 0.15; colors[1] = 0.45; colors[2] = 0.78;
      colors[3] = 0.38; colors[4] = 0.75; colors[5] = 0.98;
      colors[6] = 0.75; colors[7] = 0.92; colors[8] = 1.0;
      colors[9] = 1.0; colors[10] = 1.0; colors[11] = 1.0;

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false
      });

      const line = new THREE.Line(geometry, material);
      line.visible = false;
      line.renderOrder = 5;
      line.frustumCulled = false;
      this.scene.add(line);

      // Glowing head orb sprite
      let headSprite = null;
      if (this.circleTexture) {
        const spriteMat = new THREE.SpriteMaterial({
          map: this.circleTexture,
          color: 0xffffff,
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          toneMapped: false
        });
        headSprite = new THREE.Sprite(spriteMat);
        headSprite.visible = false;
        headSprite.renderOrder = 6;
        headSprite.frustumCulled = false;
        headSprite.scale.set(0.55, 0.55, 1);
        this.scene.add(headSprite);
      }

      this.pool.push({
        line,
        geometry,
        material,
        headSprite,
        active: false,
        progress: 0,
        duration: 1.3,
        startPos: new THREE.Vector3(),
        endPos: new THREE.Vector3(),
        dir: new THREE.Vector3(),
        totalDist: 0,
        trailLength: 5.5,
        baseOpacity: 0.95
      });
    }
  }

  getRandomInterval(isTandem = false) {
    if (isTandem) {
      return 500 + Math.random() * 300;
    }
    const intervals = [4500, 7500, 5500, 9000, 6000, 8000, 10000];
    const base = intervals[Math.floor(Math.random() * intervals.length)];
    const jitter = (Math.random() - 0.5) * 2000;
    return Math.max(3500, base + jitter);
  }

  spawn(isCinematic = false) {
    if (this.lowPower && Math.random() < 0.15) return;
    const activeCount = this.pool.filter((s) => s.active).length;
    if (activeCount >= this.maxActive) return;

    const star = this.pool.find((s) => !s.active);
    if (!star) return;

    // Diagonal flight across screen
    const directionSign = Math.random() > 0.5 ? 1 : -1;
    const angle = (25 + Math.random() * 25) * (Math.PI / 180);

    const isFar = Math.random() < 0.35;
    const depthZ = isFar
      ? -6 - Math.random() * 5
      : -1 - Math.random() * 3;

    // View dimensions at depthZ
    const distFromCam = 18 - depthZ;
    const halfH = distFromCam * Math.tan(THREE.MathUtils.degToRad(20));
    const halfW = halfH * 1.77;

    const startX = directionSign > 0
      ? -halfW * 0.95 - Math.random() * 3
      : halfW * 0.95 + Math.random() * 3;
    const startY = (Math.random() * 0.5 + 0.5) * halfH;
    const endY = -halfH * 0.95 - Math.random() * 3;
    const travelY = endY - startY;
    const travelX = (directionSign * Math.abs(travelY)) / Math.tan(angle);
    const endX = startX + travelX;

    star.startPos.set(startX, startY, depthZ);
    star.endPos.set(endX, endY, depthZ);
    star.dir.copy(star.endPos).sub(star.startPos);
    star.totalDist = star.dir.length();
    star.dir.normalize();

    star.duration = isCinematic
      ? 1.8 + Math.random() * 0.3
      : (isFar ? 1.4 + Math.random() * 0.25 : 1.05 + Math.random() * 0.25);

    const baseTrail = isCinematic ? 7.5 : (isFar ? 4.2 : (this.mobile ? 4.5 : 5.8));
    star.trailLength = baseTrail * (0.9 + Math.random() * 0.2);

    star.baseOpacity = isCinematic ? 1.0 : (isFar ? 0.75 : 0.95);

    star.progress = 0;
    star.active = true;
    star.line.visible = true;
    if (star.headSprite) {
      star.headSprite.visible = true;
      const headScale = isCinematic ? 0.75 : (isFar ? 0.42 : 0.55);
      star.headSprite.scale.set(headScale, headScale, 1);
    }
  }

  update(delta, now) {
    if (now >= this.nextSpawn) {
      if (this.pendingTandem) {
        this.pendingTandem = false;
        this.spawn(false);
        this.nextSpawn = now + this.getRandomInterval(false);
      } else {
        const roll = Math.random();
        if (roll < 0.22 && !this.mobile) {
          this.spawn(false);
          this.pendingTandem = true;
          this.nextSpawn = now + this.getRandomInterval(true);
        } else if (roll < 0.35) {
          this.spawn(true);
          this.nextSpawn = now + this.getRandomInterval(false) + 3000;
        } else {
          this.spawn(false);
          this.nextSpawn = now + this.getRandomInterval(false);
        }
      }
    }

    this.pool.forEach((star) => {
      if (!star.active) return;

      star.progress += delta / star.duration;
      if (star.progress >= 1.0) {
        star.active = false;
        star.line.visible = false;
        if (star.headSprite) star.headSprite.visible = false;
        return;
      }

      let alpha = 0;
      if (star.progress < 0.12) {
        alpha = Math.sin((star.progress / 0.12) * (Math.PI / 2));
      } else if (star.progress > 0.75) {
        alpha = Math.cos(((star.progress - 0.75) / 0.25) * (Math.PI / 2));
      } else {
        alpha = 1.0;
      }
      const finalOpacity = star.baseOpacity * Math.max(0, Math.min(1, alpha));
      star.material.opacity = finalOpacity;
      if (star.headSprite) {
        star.headSprite.material.opacity = finalOpacity;
      }

      const currentDist = star.totalDist * star.progress;
      const headX = star.startPos.x + star.dir.x * currentDist;
      const headY = star.startPos.y + star.dir.y * currentDist;
      const headZ = star.startPos.z + star.dir.z * currentDist;

      if (star.headSprite) {
        star.headSprite.position.set(headX, headY, headZ);
      }

      const positions = star.geometry.attributes.position.array;
      const segments = 4;
      for (let s = 0; s < segments; s += 1) {
        const t = s / (segments - 1);
        const offset = (1 - t) * star.trailLength;
        positions[s * 3] = headX - star.dir.x * offset;
        positions[s * 3 + 1] = headY - star.dir.y * offset;
        positions[s * 3 + 2] = headZ - star.dir.z * offset;
      }
      star.geometry.attributes.position.needsUpdate = true;
    });
  }

  dispose() {
    this.pool.forEach((star) => {
      this.scene.remove(star.line);
      star.geometry.dispose();
      star.material.dispose();
      if (star.headSprite) {
        this.scene.remove(star.headSprite);
        star.headSprite.material.dispose();
      }
    });
    this.pool.length = 0;
  }
}

/* =========================================================================
   4. SUN GLOW CORONA
   ========================================================================= */
function createSunGlow(sunDirection) {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(255, 245, 220, 0.9)');
  gradient.addColorStop(0.2, 'rgba(255, 200, 120, 0.45)');
  gradient.addColorStop(0.6, 'rgba(255, 140, 60, 0.12)');
  gradient.addColorStop(1, 'rgba(255, 100, 30, 0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({
    map: texture,
    color: 0xffffff,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const sprite = new THREE.Sprite(material);
  sprite.position.copy(sunDirection).multiplyScalar(22);
  sprite.scale.set(16, 16, 1);
  return { sprite, texture, material };
}

/* =========================================================================
   5. MAIN SPACE SCENE
   ========================================================================= */
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
    this.renderer.toneMappingExposure = 0.96;
    this.renderer.domElement.className = 'space-navigation__canvas';
    this.renderer.domElement.setAttribute('aria-hidden', 'true');
    this.stage.prepend(this.renderer.domElement);

    const ambient = new THREE.AmbientLight(0x73839b, 0.08);
    this.sunDirection = new THREE.Vector3(-5, 3.2, 7).normalize();
    const sunlight = new THREE.DirectionalLight(0xfff4df, 3.2);
    sunlight.position.copy(this.sunDirection).multiplyScalar(10);
    sunlight.target.position.set(0, 0, 0);
    this.scene.add(ambient, sunlight, sunlight.target);

    this.sunGlow = createSunGlow(this.sunDirection);
    this.scene.add(this.sunGlow.sprite);

    this.circleParticleTexture = createCircleParticleTexture();

    // 1. Deep space background
    this.createDeepSpaceBackground();

    // 2. Soft round distant stars
    this.starLayers = [
      createStarLayer({
        count: this.lowPower ? 160 : 420,
        spread: 46,
        depthStart: -6,
        depthRange: 16,
        size: 0.22,
        opacity: 0.85,
        color: 0xf0f4ff,
        seed: 9471,
        circleTexture: this.circleParticleTexture
      }),
      createStarLayer({
        count: this.lowPower ? 220 : 750,
        spread: 66,
        depthStart: -16,
        depthRange: 38,
        size: 0.32,
        opacity: 0.65,
        color: 0xcfd8dc,
        seed: 1201,
        circleTexture: this.circleParticleTexture
      })
    ];
    this.starLayers.forEach((layer) => this.scene.add(layer.points));

    // 3. Small square cosmic particles / distant space dust (Far, Mid, Near)
    this.cosmicDust = new CosmicDustSystem(this.scene, this.lowPower);

    // 4. Natural shooting stars / meteor streaks
    this.mobile = window.innerWidth < 640;
    this.shootingStars = new NaturalShootingStars(this.scene, this.lowPower, this.mobile, this.circleParticleTexture);

    // 5. Earth and orbital navigation
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
    window.removeEventListener('beforeunload', this.handleBeforeUnload, { once: true });

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
    this.backgroundSphere.renderOrder = -50;
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

    // Update Cosmic Dust 3D layers and Natural Shooting Stars
    if (this.cosmicDust) {
      this.cosmicDust.update(delta, time, this.camera);
    }
    if (this.shootingStars) {
      this.shootingStars.update(delta, time);
    }

    // Parallax on distant star layers and background
    this.starLayers[0].points.position.set(-this.camera.position.x * 0.08, -this.camera.position.y * 0.08, 0);
    this.starLayers[1].points.position.set(-this.camera.position.x * 0.025, -this.camera.position.y * 0.025, 0);
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
    if (this.cosmicDust) this.cosmicDust.dispose();
    if (this.shootingStars) this.shootingStars.dispose();
    if (this.circleParticleTexture) this.circleParticleTexture.dispose();
    if (this.sunGlow) {
      this.sunGlow.texture.dispose();
      this.sunGlow.material.dispose();
      this.scene.remove(this.sunGlow.sprite);
    }
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
