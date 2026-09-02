import * as THREE from 'three';
import { gsap } from 'gsap';

const SUN_DIRECTION = new THREE.Vector3(-5, 3.2, 7).normalize();

const WORLD_SPECS = Object.freeze({
  family: { radius: 0.38, seed: 17, style: 'warm-rock', bumpScale: 0.038 },
  thoughts: { radius: 0.42, seed: 31, style: 'gas-giant', bumpScale: 0.012 },
  keepsakes: { radius: 0.35, seed: 47, style: 'teal-stone', bumpScale: 0.032 },
  friends: { radius: 0.39, seed: 61, style: 'blue-world', bumpScale: 0.03 },
  campus: { radius: 0.34, seed: 79, style: 'cold-world', bumpScale: 0.034 },
  cooking: { radius: 0.4, seed: 97, style: 'volcanic', bumpScale: 0.048 },
  upload: { radius: 0.37, seed: 113, style: 'ice-world', bumpScale: 0.044 },
  feedback: { radius: 0.33, seed: 137, style: 'cratered', bumpScale: 0.052 }
});

function clamp(value, minimum = 0, maximum = 1) {
  return Math.max(minimum, Math.min(maximum, value));
}

function mix(start, end, amount) {
  return start + (end - start) * amount;
}

function mixColor(colorA, colorB, amount) {
  return [
    Math.round(mix(colorA[0], colorB[0], amount)),
    Math.round(mix(colorA[1], colorB[1], amount)),
    Math.round(mix(colorA[2], colorB[2], amount))
  ];
}

function hashCell(x, y, seed) {
  let value = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(seed, 1442695041);
  value = Math.imul(value ^ (value >>> 13), 1274126177);
  return ((value ^ (value >>> 16)) >>> 0) / 4294967295;
}

function smooth(value) {
  return value * value * (3 - 2 * value);
}

function valueNoise(u, v, seed, period) {
  const x = u * period;
  const y = v * period * 0.5;
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const x1 = (x0 + 1) % period;
  const wrappedX0 = ((x0 % period) + period) % period;
  const fx = smooth(x - x0);
  const fy = smooth(y - y0);
  const top = mix(hashCell(wrappedX0, y0, seed), hashCell(x1, y0, seed), fx);
  const bottom = mix(hashCell(wrappedX0, y0 + 1, seed), hashCell(x1, y0 + 1, seed), fx);
  return mix(top, bottom, fy);
}

function fbm(u, v, seed, octaves = 5) {
  let sum = 0;
  let amplitude = 0.55;
  let normalizer = 0;
  let period = 4;
  for (let octave = 0; octave < octaves; octave += 1) {
    sum += valueNoise(u, v, seed + octave * 19, period) * amplitude;
    normalizer += amplitude;
    amplitude *= 0.5;
    period *= 2;
  }
  return sum / normalizer;
}

function ridgeNoise(u, v, seed) {
  return 1 - Math.abs(fbm(u, v, seed, 5) * 2 - 1);
}

function createCraters(seed, count) {
  const craters = [];
  for (let index = 0; index < count; index += 1) {
    craters.push({
      u: hashCell(index, seed, seed + 3),
      v: 0.08 + hashCell(index + 7, seed, seed + 11) * 0.84,
      radius: 0.012 + hashCell(index + 13, seed, seed + 19) * 0.045
    });
  }
  return craters;
}

function sampleCraters(u, v, craters) {
  let depression = 0;
  let rim = 0;
  craters.forEach((crater) => {
    const deltaU = Math.min(Math.abs(u - crater.u), 1 - Math.abs(u - crater.u));
    const deltaV = v - crater.v;
    const distance = Math.hypot(deltaU, deltaV) / crater.radius;
    if (distance < 1) depression = Math.max(depression, 1 - smooth(distance));
    if (distance >= 0.82 && distance < 1.24) {
      rim = Math.max(rim, 1 - Math.abs(distance - 1.02) / 0.22);
    }
  });
  return { depression, rim };
}

function createCanvasTexture(width, height, pixels, colorTexture = false) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  const image = context.createImageData(width, height);
  image.data.set(pixels);
  context.putImageData(image, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.colorSpace = colorTexture ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function createWorldTextures(spec, lowPower) {
  const width = lowPower ? 256 : 512;
  const height = width / 2;
  const albedoPixels = new Uint8ClampedArray(width * height * 4);
  const bumpPixels = new Uint8ClampedArray(width * height * 4);
  const roughnessPixels = new Uint8ClampedArray(width * height * 4);
  const emissivePixels = new Uint8ClampedArray(width * height * 4);
  const craters = spec.style === 'cratered' ? createCraters(spec.seed, 26) : [];
  let hasEmissive = false;

  for (let y = 0; y < height; y += 1) {
    const v = y / (height - 1);
    const latitude = Math.abs(v - 0.5) * 2;
    for (let x = 0; x < width; x += 1) {
      const u = x / (width - 1);
      const broad = fbm(u, v, spec.seed, 5);
      const detail = fbm(u, v, spec.seed + 41, 6);
      const ridges = ridgeNoise(u, v, spec.seed + 83);
      let color;
      let bump = broad;
      let roughness = 205;
      let emissive = [0, 0, 0];

      if (spec.style === 'warm-rock') {
        const land = smooth(clamp((broad - 0.38) * 3.4));
        const warmth = clamp(broad * 0.68 + detail * 0.32);
        color = mixColor([79, 53, 35], [181, 116, 55], warmth);
        color = mixColor(color, [208, 151, 78], land * 0.28);
        bump = broad * 0.72 + detail * 0.28;
        roughness = Math.round(196 + detail * 38);
        const cityChance = hashCell(x, y, spec.seed + 151);
        if (land > 0.42 && cityChance > 0.992 && latitude < 0.84) {
          emissive = [255, 171, 83];
          hasEmissive = true;
        }
      } else if (spec.style === 'gas-giant') {
        const swirl = Math.sin(v * Math.PI * 28 + broad * 8 + Math.sin(u * Math.PI * 6) * 0.8) * 0.5 + 0.5;
        const storm = clamp(ridges * 0.72 + swirl * 0.38);
        color = mixColor([48, 55, 91], [104, 92, 133], storm);
        color = mixColor(color, [59, 91, 123], clamp(detail * 0.8));
        bump = 0.44 + storm * 0.18;
        roughness = Math.round(194 + storm * 34);
      } else if (spec.style === 'teal-stone') {
        const mineral = clamp(broad * 0.78 + ridges * 0.32);
        color = mixColor([28, 68, 66], [71, 133, 118], mineral);
        color = mixColor(color, [113, 133, 112], clamp((detail - 0.62) * 2));
        bump = broad * 0.62 + ridges * 0.38;
        roughness = Math.round(205 + detail * 32);
      } else if (spec.style === 'blue-world') {
        const continent = smooth(clamp((broad - 0.48) * 4.2));
        color = mixColor([23, 50, 72], [46, 91, 118], detail);
        color = mixColor(color, [91, 119, 125], continent * 0.5);
        bump = broad * 0.7 + detail * 0.3;
        roughness = Math.round(182 + continent * 42);
      } else if (spec.style === 'cold-world') {
        const plate = clamp(broad * 0.74 + ridges * 0.3);
        color = mixColor([30, 39, 48], [85, 99, 107], plate);
        color = mixColor(color, [119, 130, 132], clamp((detail - 0.68) * 2.2));
        bump = broad * 0.6 + ridges * 0.4;
        roughness = Math.round(198 + detail * 38);
      } else if (spec.style === 'volcanic') {
        const crack = smooth(clamp((ridges - 0.86) * 9));
        const char = clamp(broad * 0.64 + detail * 0.36);
        color = mixColor([38, 25, 22], [104, 52, 31], char);
        color = mixColor(color, [143, 65, 30], crack * 0.34);
        bump = clamp(broad * 0.72 + detail * 0.3 - crack * 0.28);
        roughness = Math.round(218 + detail * 25);
        if (crack > 0.72) {
          emissive = [255, Math.round(72 + crack * 82), 22];
          hasEmissive = true;
        }
      } else if (spec.style === 'ice-world') {
        const fissure = smooth(clamp((ridges - 0.88) * 10));
        const ice = clamp(broad * 0.56 + detail * 0.44);
        color = mixColor([95, 139, 158], [184, 206, 211], ice);
        color = mixColor(color, [48, 96, 126], fissure * 0.8);
        bump = clamp(0.54 + detail * 0.28 - fissure * 0.34);
        roughness = Math.round(151 + detail * 56);
      } else {
        const crater = sampleCraters(u, v, craters);
        const rock = clamp(broad * 0.58 + detail * 0.42);
        color = mixColor([55, 57, 58], [134, 130, 119], rock);
        color = mixColor(color, [169, 157, 128], clamp((broad - 0.72) * 2.8) * 0.36);
        bump = clamp(broad * 0.62 + detail * 0.3 - crater.depression * 0.36 + crater.rim * 0.24);
        roughness = Math.round(215 + detail * 28);
      }

      const offset = (y * width + x) * 4;
      albedoPixels[offset] = color[0];
      albedoPixels[offset + 1] = color[1];
      albedoPixels[offset + 2] = color[2];
      albedoPixels[offset + 3] = 255;
      const bumpValue = Math.round(clamp(bump) * 255);
      bumpPixels[offset] = bumpValue;
      bumpPixels[offset + 1] = bumpValue;
      bumpPixels[offset + 2] = bumpValue;
      bumpPixels[offset + 3] = 255;
      roughnessPixels[offset] = roughness;
      roughnessPixels[offset + 1] = roughness;
      roughnessPixels[offset + 2] = roughness;
      roughnessPixels[offset + 3] = 255;
      emissivePixels[offset] = emissive[0];
      emissivePixels[offset + 1] = emissive[1];
      emissivePixels[offset + 2] = emissive[2];
      emissivePixels[offset + 3] = 255;
    }
  }

  return {
    albedo: createCanvasTexture(width, height, albedoPixels, true),
    bump: createCanvasTexture(width, height, bumpPixels),
    roughness: createCanvasTexture(width, height, roughnessPixels),
    emissive: hasEmissive ? createCanvasTexture(width, height, emissivePixels, true) : null
  };
}

function createCloudTexture(seed, lowPower) {
  const width = lowPower ? 256 : 512;
  const height = width / 2;
  const pixels = new Uint8ClampedArray(width * height * 4);
  for (let y = 0; y < height; y += 1) {
    const v = y / (height - 1);
    for (let x = 0; x < width; x += 1) {
      const u = x / (width - 1);
      const cloudNoise = fbm(u, v, seed, 6);
      const wisps = ridgeNoise(u, v, seed + 43);
      const alpha = Math.round(smooth(clamp((cloudNoise * 0.75 + wisps * 0.25 - 0.58) * 3.8)) * 205);
      const offset = (y * width + x) * 4;
      pixels[offset] = alpha;
      pixels[offset + 1] = alpha;
      pixels[offset + 2] = alpha;
      pixels[offset + 3] = 255;
    }
  }
  return createCanvasTexture(width, height, pixels);
}

function createRingTextures(seed, lowPower) {
  const size = lowPower ? 128 : 256;
  const albedoPixels = new Uint8ClampedArray(size * size * 4);
  const bumpPixels = new Uint8ClampedArray(size * size * 4);
  const roughnessPixels = new Uint8ClampedArray(size * size * 4);
  const alphaPixels = new Uint8ClampedArray(size * size * 4);

  for (let y = 0; y < size; y += 1) {
    const v = y / (size - 1);
    for (let x = 0; x < size; x += 1) {
      const u = x / (size - 1);
      const dust = fbm(u, v, seed, 6);
      const fragments = ridgeNoise(u, v, seed + 67);
      const grain = clamp(dust * 0.68 + fragments * 0.32);
      const color = mixColor([71, 63, 53], [139, 124, 101], grain);
      const alpha = Math.round(clamp((dust - 0.18) * 1.35) * (178 + fragments * 67));
      const offset = (y * size + x) * 4;
      albedoPixels[offset] = color[0];
      albedoPixels[offset + 1] = color[1];
      albedoPixels[offset + 2] = color[2];
      albedoPixels[offset + 3] = 255;
      const bump = Math.round(grain * 255);
      bumpPixels[offset] = bump;
      bumpPixels[offset + 1] = bump;
      bumpPixels[offset + 2] = bump;
      bumpPixels[offset + 3] = 255;
      const roughness = Math.round(218 + dust * 35);
      roughnessPixels[offset] = roughness;
      roughnessPixels[offset + 1] = roughness;
      roughnessPixels[offset + 2] = roughness;
      roughnessPixels[offset + 3] = 255;
      alphaPixels[offset] = alpha;
      alphaPixels[offset + 1] = alpha;
      alphaPixels[offset + 2] = alpha;
      alphaPixels[offset + 3] = 255;
    }
  }

  return {
    albedo: createCanvasTexture(size, size, albedoPixels, true),
    bump: createCanvasTexture(size, size, bumpPixels),
    roughness: createCanvasTexture(size, size, roughnessPixels),
    alpha: createCanvasTexture(size, size, alphaPixels)
  };
}

function applyNightMask(material) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.navigationSunDirection = { value: SUN_DIRECTION };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vNavigationWorldNormal;')
      .replace('#include <beginnormal_vertex>', '#include <beginnormal_vertex>\nvNavigationWorldNormal = normalize(mat3(modelMatrix) * objectNormal);');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform vec3 navigationSunDirection;\nvarying vec3 vNavigationWorldNormal;')
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
         float navigationNight = 1.0 - smoothstep(-0.16, 0.22, dot(normalize(vNavigationWorldNormal), navigationSunDirection));
         totalEmissiveRadiance *= navigationNight;`
      );
  };
  material.customProgramCacheKey = () => 'timebox-miniature-world-night-v1';
}

function createAtmosphere(radius, color, intensity = 0.09) {
  const geometry = new THREE.SphereGeometry(radius * 1.035, 64, 64);
  const material = new THREE.ShaderMaterial({
    uniforms: {
      atmosphereColor: { value: new THREE.Color(color) },
      atmosphereIntensity: { value: intensity }
    },
    vertexShader: `
      varying float vWorldFresnel;
      void main() {
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        vec3 viewNormal = normalize(normalMatrix * normal);
        vec3 viewDirection = normalize(-viewPosition.xyz);
        vWorldFresnel = pow(1.0 - clamp(abs(dot(viewNormal, viewDirection)), 0.0, 1.0), 4.2);
        gl_Position = projectionMatrix * viewPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 atmosphereColor;
      uniform float atmosphereIntensity;
      varying float vWorldFresnel;
      void main() {
        gl_FragColor = vec4(atmosphereColor, vWorldFresnel * atmosphereIntensity);
      }
    `,
    side: THREE.BackSide,
    transparent: true,
    depthWrite: false,
    blending: THREE.NormalBlending,
    toneMapped: false
  });
  return { mesh: new THREE.Mesh(geometry, material), geometry, material };
}

export class NavigationNode {
  constructor(item, lowPower = false) {
    this.item = item;
    this.spec = WORLD_SPECS[item.id] || WORLD_SPECS.feedback;
    this.group = new THREE.Group();
    this.depthGroup = new THREE.Group();
    this.model = new THREE.Group();
    this.group.add(this.depthGroup);
    this.depthGroup.add(this.model);
    this.group.userData.navigationNode = this;
    this.hovered = false;
    this.active = false;
    this.reducedMotion = false;
    this.lowPower = lowPower;
    this.baseScale = lowPower ? 0.94 : 1;
    this.disposables = [];
    this.textures = [];
    this.moons = [];
    this.rings = [];

    this.createWorld();
    this.model.scale.setScalar(this.baseScale);
  }

  track(...resources) {
    resources.forEach((resource) => {
      if (resource) this.disposables.push(resource);
    });
  }

  createWorld() {
    const { radius, seed, style, bumpScale } = this.spec;
    const textures = createWorldTextures(this.spec, this.lowPower);
    this.textures.push(textures.albedo, textures.bump, textures.roughness);
    if (textures.emissive) this.textures.push(textures.emissive);

    const geometry = new THREE.SphereGeometry(radius, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      map: textures.albedo,
      bumpMap: textures.bump,
      bumpScale,
      roughnessMap: textures.roughness,
      roughness: style === 'ice-world' ? 0.72 : 0.88,
      metalness: 0,
      emissive: textures.emissive ? 0xffffff : 0x101318,
      emissiveMap: textures.emissive,
      emissiveIntensity: style === 'volcanic' ? 0.42 : (style === 'warm-rock' ? 0.18 : 0.035)
    });
    if (style === 'warm-rock') applyNightMask(material);
    this.surfaceMaterial = material;
    this.baseEmissiveIntensity = material.emissiveIntensity;
    this.surface = new THREE.Mesh(geometry, material);
    this.model.add(this.surface);
    this.track(geometry, material);

    if (style === 'warm-rock') {
      this.addCloudLayer(0xf2d8b5, seed + 181, 0.31);
      this.addAtmosphere(0xd59a63, 0.075);
    } else if (style === 'gas-giant') {
      this.addCloudLayer(0xb8b5cc, seed + 181, 0.2);
      this.addAtmosphere(0x7180aa, 0.095);
    } else if (style === 'teal-stone') {
      this.addCrossedRings();
      this.addAtmosphere(0x5c9b91, 0.055);
    } else if (style === 'blue-world') {
      this.addMoons();
      this.addAtmosphere(0x5a88a4, 0.06);
    } else if (style === 'cold-world') {
      this.addSilverRing();
      this.addAtmosphere(0x658ca2, 0.07);
    } else if (style === 'volcanic') {
      this.addAtmosphere(0xa34e2e, 0.045);
    } else if (style === 'ice-world') {
      this.addAtmosphere(0x82b8c8, 0.085);
      this.addAuroraBands();
    } else if (style === 'cratered') {
      this.addAtmosphere(0x9b9688, 0.035);
      this.addSignalWaves();
    }
    this.addHoloReticle();
  }

  addHoloReticle() {
    this.holoGroup = new THREE.Group();
    const color = new THREE.Color(this.item.color || '#38bdf8');

    const innerGeo = new THREE.RingGeometry(this.spec.radius * 1.25, this.spec.radius * 1.32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    this.holoInner = new THREE.Mesh(innerGeo, innerMat);
    this.holoInner.rotation.x = Math.PI / 2;
    this.holoGroup.add(this.holoInner);

    const outerGeo = new THREE.RingGeometry(this.spec.radius * 1.44, this.spec.radius * 1.54, 40);
    const outerMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    this.holoOuter = new THREE.Mesh(outerGeo, outerMat);
    this.holoOuter.rotation.x = Math.PI / 2;
    this.holoGroup.add(this.holoOuter);

    this.depthGroup.add(this.holoGroup);
    this.track(innerGeo, innerMat, outerGeo, outerMat);
  }

  addCloudLayer(color, seed, opacity) {
    const texture = createCloudTexture(seed, this.lowPower);
    const geometry = new THREE.SphereGeometry(this.spec.radius * 1.014, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color,
      alphaMap: texture,
      transparent: true,
      opacity,
      roughness: 1,
      metalness: 0,
      alphaTest: 0.02,
      depthWrite: false
    });
    this.clouds = new THREE.Mesh(geometry, material);
    this.model.add(this.clouds);
    this.textures.push(texture);
    this.track(geometry, material);
  }

  addAtmosphere(color, intensity) {
    const atmosphere = createAtmosphere(this.spec.radius, color, intensity);
    this.atmosphere = atmosphere.mesh;
    this.atmosphereMaterial = atmosphere.material;
    this.baseAtmosphereIntensity = intensity;
    this.model.add(atmosphere.mesh);
    this.track(atmosphere.geometry, atmosphere.material);
  }

  createRingMaterial(color, opacity, maps = {}) {
    const material = new THREE.MeshStandardMaterial({
      color,
      map: maps.albedo || null,
      bumpMap: maps.bump || null,
      bumpScale: maps.bump ? 0.012 : 0,
      roughnessMap: maps.roughness || null,
      alphaMap: maps.alpha || null,
      roughness: 0.96,
      metalness: 0.02,
      transparent: true,
      opacity,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    this.track(material);
    return material;
  }

  addCrossedRings() {
    const textures = createRingTextures(this.spec.seed + 211, this.lowPower);
    this.textures.push(textures.albedo, textures.bump, textures.roughness, textures.alpha);
    const material = this.createRingMaterial(0xc3b69c, 0.62, textures);
    const createRing = (rotationZ) => {
      const geometry = new THREE.RingGeometry(this.spec.radius * 1.34, this.spec.radius * 1.62, 96, 4);
      const ring = new THREE.Mesh(geometry, material);
      ring.rotation.set(1.18, 0.18, rotationZ);
      this.model.add(ring);
      this.rings.push(ring);
      this.track(geometry);
    };
    createRing(0.48);
    createRing(-0.48);
  }

  addSilverRing() {
    const geometry = new THREE.RingGeometry(this.spec.radius * 1.38, this.spec.radius * 1.62, 96, 4);
    const material = this.createRingMaterial(0xa6a8a5, 0.64);
    const ring = new THREE.Mesh(geometry, material);
    ring.rotation.set(1.3, 0.12, -0.18);
    this.model.add(ring);
    this.rings.push(ring);
    this.track(geometry);
  }

  addMoons() {
    const moonGeometry = new THREE.SphereGeometry(this.spec.radius * 0.19, 24, 24);
    const moonMaterial = new THREE.MeshStandardMaterial({
      map: this.textures[0],
      bumpMap: this.textures[1],
      bumpScale: 0.018,
      color: 0xa8a5a0,
      roughness: 0.94,
      metalness: 0
    });
    this.track(moonGeometry, moonMaterial);
    [
      { distance: this.spec.radius * 1.62, speed: 0.32, inclination: 0.24, phase: 0.6 },
      { distance: this.spec.radius * 1.95, speed: -0.24, inclination: -0.32, phase: 3.4 }
    ].forEach((moonSpec) => {
      const moon = new THREE.Mesh(moonGeometry, moonMaterial);
      moon.position.set(
        Math.cos(moonSpec.phase) * moonSpec.distance,
        Math.sin(moonSpec.phase) * moonSpec.distance * moonSpec.inclination,
        Math.sin(moonSpec.phase) * moonSpec.distance * 0.72
      );
      this.model.add(moon);
      this.moons.push({ mesh: moon, ...moonSpec });
    });
  }

  addAuroraBands() {
    const material = new THREE.MeshBasicMaterial({
      color: 0x75b7b0,
      transparent: true,
      opacity: 0.08,
      blending: THREE.NormalBlending,
      depthWrite: false,
      toneMapped: false
    });
    this.track(material);
    [-1, 1].forEach((direction) => {
      const geometry = new THREE.TorusGeometry(this.spec.radius * 0.54, this.spec.radius * 0.018, 8, 72);
      const band = new THREE.Mesh(geometry, material);
      band.position.y = direction * this.spec.radius * 0.72;
      band.rotation.x = Math.PI / 2;
      this.model.add(band);
      this.rings.push(band);
      this.track(geometry);
    });
  }

  addSignalWaves() {
    const material = new THREE.MeshBasicMaterial({
      color: 0xc4bda9,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      toneMapped: false
    });
    this.track(material);
    for (let index = 0; index < 2; index += 1) {
      const geometry = new THREE.TorusGeometry(this.spec.radius * (1.18 + index * 0.16), 0.006, 6, 64);
      const wave = new THREE.Mesh(geometry, material.clone());
      wave.rotation.x = Math.PI / 2;
      wave.userData.waveOffset = index * Math.PI;
      this.model.add(wave);
      this.signalWaves = this.signalWaves || [];
      this.signalWaves.push(wave);
      this.track(geometry, wave.material);
    }
  }

  setHovered(value) {
    this.hovered = value;
    this.updateState();
  }

  setActive(value) {
    this.active = value;
    this.updateState();
  }

  updateState() {
    const emphasized = this.hovered || this.active;
    const scaleMultiplier = this.active ? 1.19 : (this.hovered ? 1.07 : 1);
    const targetScale = this.baseScale * scaleMultiplier;
    const motionDuration = this.reducedMotion ? 0 : 0.42;
    const materialDuration = this.reducedMotion ? 0 : 0.3;
    gsap.to(this.model.scale, {
      x: targetScale,
      y: targetScale,
      z: targetScale,
      duration: motionDuration,
      ease: 'power3.out',
      overwrite: true
    });
    gsap.to(this.surfaceMaterial, {
      emissiveIntensity: this.baseEmissiveIntensity + (emphasized ? 0.055 : 0),
      duration: materialDuration,
      overwrite: true
    });
    if (this.atmosphereMaterial) {
      gsap.to(this.atmosphereMaterial.uniforms.atmosphereIntensity, {
        value: this.baseAtmosphereIntensity + (emphasized ? 0.025 : 0),
        duration: materialDuration,
        overwrite: true
      });
    }
  }

  update(delta, depthFactor, reducedMotion) {
    if (this.reducedMotion !== reducedMotion) {
      this.reducedMotion = reducedMotion;
      if (reducedMotion) {
        gsap.killTweensOf(this.model.scale);
        gsap.killTweensOf(this.surfaceMaterial);
        if (this.atmosphereMaterial) {
          gsap.killTweensOf(this.atmosphereMaterial.uniforms.atmosphereIntensity);
        }
        this.updateState();
      }
    }
    this.depthGroup.scale.setScalar(0.94 + depthFactor * 0.06);
    const elapsed = performance.now() * 0.001;
    if (this.signalWaves) {
      this.signalWaves.forEach((wave) => {
        const pulse = reducedMotion ? 0.5 : (Math.sin(elapsed * 3.2 + wave.userData.waveOffset) * 0.5 + 0.5);
        wave.material.opacity = this.hovered ? 0.035 + pulse * 0.075 : 0;
        wave.scale.setScalar(0.96 + pulse * 0.12);
      });
    }
    if (this.holoGroup) {
      if (this.holoInner) this.holoInner.rotation.z += delta * 0.45;
      if (this.holoOuter) this.holoOuter.rotation.z -= delta * 0.32;
      const targetOpacity = this.active ? 0.85 : (this.hovered ? 0.52 : 0.16);
      if (this.holoInner) {
        this.holoInner.material.opacity += (targetOpacity - this.holoInner.material.opacity) * Math.min(1, delta * 6);
      }
      if (this.holoOuter) {
        this.holoOuter.material.opacity += (targetOpacity * 0.7 - this.holoOuter.material.opacity) * Math.min(1, delta * 6);
      }
      const targetScale = this.active ? 1.22 : (this.hovered ? 1.14 : 1.0);
      const currentScale = this.holoGroup.scale.x;
      const nextScale = currentScale + (targetScale - currentScale) * Math.min(1, delta * 6);
      this.holoGroup.scale.setScalar(nextScale);
    }
    if (reducedMotion) return;
    this.surface.rotation.y += delta * (this.spec.style === 'gas-giant' ? 0.08 : 0.055);
    if (this.clouds) this.clouds.rotation.y += delta * 0.036;
    this.rings.forEach((ring, index) => {
      ring.rotation.z += delta * (index % 2 === 0 ? 0.012 : -0.009);
    });
    this.moons.forEach((moon) => {
      const angle = elapsed * moon.speed + moon.phase;
      moon.mesh.position.set(
        Math.cos(angle) * moon.distance,
        Math.sin(angle) * moon.distance * moon.inclination,
        Math.sin(angle) * moon.distance * 0.72
      );
      moon.mesh.rotation.y += delta * 0.18;
    });
  }

  dispose() {
    gsap.killTweensOf(this.model.scale);
    if (this.surfaceMaterial) gsap.killTweensOf(this.surfaceMaterial);
    if (this.atmosphereMaterial) gsap.killTweensOf(this.atmosphereMaterial.uniforms.atmosphereIntensity);
    new Set(this.textures).forEach((texture) => {
      texture.dispose();
      texture.image = null;
    });
    new Set(this.disposables).forEach((item) => item.dispose());
    this.model.clear();
    this.depthGroup.clear();
    this.group.clear();
    delete this.group.userData.navigationNode;
    this.textures.length = 0;
    this.disposables.length = 0;
    this.moons.length = 0;
    this.rings.length = 0;
    if (this.signalWaves) this.signalWaves.length = 0;
    this.holoGroup = null;
    this.holoInner = null;
    this.holoOuter = null;
    this.surface = null;
    this.surfaceMaterial = null;
    this.clouds = null;
    this.atmosphere = null;
    this.atmosphereMaterial = null;
  }
}
