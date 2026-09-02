import * as THREE from 'three';

function loadTexture(loader, url, { color = false, anisotropy = 1 } = {}) {
  return new Promise((resolve, reject) => {
    loader.load(url, (texture) => {
      if (color) texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = anisotropy;
      texture.wrapS = THREE.RepeatWrapping;
      texture.needsUpdate = true;
      resolve(texture);
    }, undefined, reject);
  });
}

function applyNightTerminator(material, sunDirection) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.sunDirectionWorld = { value: sunDirection };
    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        '#include <common>\nvarying vec3 vEarthWorldNormal;'
      )
      .replace(
        '#include <beginnormal_vertex>',
        '#include <beginnormal_vertex>\nvEarthWorldNormal = normalize(mat3(modelMatrix) * objectNormal);'
      );
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        '#include <common>\nuniform vec3 sunDirectionWorld;\nvarying vec3 vEarthWorldNormal;'
      )
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
         float earthSunDot = dot(normalize(vEarthWorldNormal), normalize(sunDirectionWorld));
         float earthNightMask = 1.0 - smoothstep(-0.18, 0.2, earthSunDot);
         totalEmissiveRadiance *= earthNightMask;`
      );
    material.userData.shader = shader;
  };
  material.customProgramCacheKey = () => 'timebox-earth-day-night-v2';
}

function createAtmosphere(radius, sunDirection, lowPower) {
  const geometry = new THREE.SphereGeometry(radius * 1.035, lowPower ? 64 : 128, lowPower ? 48 : 96);
  const material = new THREE.ShaderMaterial({
    uniforms: {
      sunDirectionWorld: { value: sunDirection }
    },
    vertexShader: `
      uniform vec3 sunDirectionWorld;
      varying float vFresnel;
      varying float vSunAmount;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vec3 viewNormal = normalize(normalMatrix * normal);
        vec3 viewDirection = normalize(-mvPosition.xyz);
        vec3 worldNormal = normalize(mat3(modelMatrix) * normal);
        vFresnel = pow(1.0 - clamp(abs(dot(viewNormal, viewDirection)), 0.0, 1.0), 4.4);
        vSunAmount = smoothstep(-0.12, 0.55, dot(worldNormal, normalize(sunDirectionWorld)));
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      varying float vFresnel;
      varying float vSunAmount;
      void main() {
        float alpha = vFresnel * mix(0.055, 0.28, vSunAmount);
        vec3 atmosphereColor = mix(vec3(0.06, 0.42, 0.88), vec3(0.12, 0.72, 1.0), vSunAmount);
        gl_FragColor = vec4(atmosphereColor, alpha);
      }
    `,
    side: THREE.BackSide,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false
  });
  return { mesh: new THREE.Mesh(geometry, material), geometry, material };
}

export class Earth {
  constructor({ radius, assetBase, sunDirection, anisotropy = 1, lowPower = false, onCriticalError }) {
    this.group = new THREE.Group();
    this.axialGroup = new THREE.Group();
    this.axialGroup.rotation.z = THREE.MathUtils.degToRad(-23.4);
    this.group.add(this.axialGroup);
    this.radius = radius;
    this.disposables = [];
    this.textures = [];
    this.disposed = false;

    const widthSegments = 128;
    const heightSegments = 128;
    const surfaceGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
    const surfaceMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x889bb2,
      roughness: 0.72,
      metalness: 0.04,
      clearcoat: 0.12,
      clearcoatRoughness: 0.6,
      specularIntensity: 0.55,
      emissive: new THREE.Color(0xffb85c),
      emissiveIntensity: 0.85
    });
    applyNightTerminator(surfaceMaterial, sunDirection);
    this.surface = new THREE.Mesh(surfaceGeometry, surfaceMaterial);
    this.axialGroup.add(this.surface);
    this.disposables.push(surfaceGeometry, surfaceMaterial);

    const loader = new THREE.TextureLoader();
    Promise.all([
      loadTexture(loader, `${assetBase}/earth_day.webp`, { color: true, anisotropy }),
      loadTexture(loader, `${assetBase}/earth_night.webp`, { color: true, anisotropy }),
      loadTexture(loader, `${assetBase}/earth_normal.png`, { anisotropy }),
      loadTexture(loader, `${assetBase}/earth_roughness.png`, { anisotropy }),
      loadTexture(loader, `${assetBase}/earth_specular.png`, { anisotropy })
    ]).then(([day, night, normal, roughness, specular]) => {
      if (this.disposed) {
        [day, night, normal, roughness, specular].forEach((texture) => texture.dispose());
        return;
      }
      this.textures.push(day, night, normal, roughness, specular);
      surfaceMaterial.map = day;
      surfaceMaterial.emissiveMap = night;
      surfaceMaterial.normalMap = normal;
      surfaceMaterial.normalScale.set(0.08, 0.08);
      surfaceMaterial.roughnessMap = roughness;
      surfaceMaterial.specularIntensityMap = specular;
      surfaceMaterial.color.set(0xffffff);
      surfaceMaterial.needsUpdate = true;
      this.group.userData.mapsReady = true;
    }).catch((error) => {
      this.group.userData.textureFallback = true;
      if (onCriticalError) onCriticalError(error);
    });

    const cloudGeometry = new THREE.SphereGeometry(radius * 1.012, lowPower ? 64 : 128, lowPower ? 48 : 96);
    const cloudMaterial = new THREE.MeshStandardMaterial({
      color: 0xf4f6f7,
      roughness: 1,
      metalness: 0,
      transparent: true,
      opacity: lowPower ? 0.42 : 0.54,
      alphaTest: 0.025,
      depthWrite: false
    });
    this.clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    this.axialGroup.add(this.clouds);
    this.disposables.push(cloudGeometry, cloudMaterial);
    loadTexture(loader, `${assetBase}/earth_clouds.webp`, { anisotropy }).then((cloudTexture) => {
      if (this.disposed) {
        cloudTexture.dispose();
        return;
      }
      this.textures.push(cloudTexture);
      cloudMaterial.alphaMap = cloudTexture;
      cloudMaterial.needsUpdate = true;
    }).catch(() => {
      this.clouds.visible = false;
    });

    const atmosphere = createAtmosphere(radius, sunDirection, lowPower);
    this.atmosphere = atmosphere.mesh;
    this.group.add(this.atmosphere);
    this.disposables.push(atmosphere.geometry, atmosphere.material);
  }

  update(delta, reducedMotion) {
    if (reducedMotion) return;
    this.surface.rotation.y += delta * 0.018;
    this.clouds.rotation.y += delta * 0.013;
  }

  dispose() {
    this.disposed = true;
    this.textures.forEach((texture) => texture.dispose());
    this.disposables.forEach((item) => item && item.dispose && item.dispose());
    this.group.clear();
  }
}
