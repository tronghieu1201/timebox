import { access, readFile } from 'node:fs/promises';
import { build, transform } from 'esbuild';
import { NAV_ITEMS } from '../src/space-navigation/config.js';

const bundleCheck = await build({
  entryPoints: ['./src/space-navigation/main.js'],
  absWorkingDir: process.cwd(),
  bundle: true,
  minify: true,
  sourcemap: true,
  format: 'iife',
  outfile: 'space-navigation.bundle.js',
  write: false,
  target: ['es2020'],
  legalComments: 'none',
  banner: { js: '/* Timebox 3D navigation - Three.js + GSAP */' },
  logLevel: 'silent'
});

const html = await readFile('index.html', 'utf8');
const lifeScript = await readFile('life.js', 'utf8');
const sceneSource = await readFile('src/space-navigation/Scene.js', 'utf8');
const configSource = await readFile('src/space-navigation/config.js', 'utf8');
const serviceWorker = await readFile('sw.js', 'utf8');
const themeScript = await readFile('theme.js', 'utf8');
const baseStyles = await readFile('style.css', 'utf8');
const lifeStyles = await readFile('life.css', 'utf8');
const spaceNavigationStyles = await readFile('space-navigation.css', 'utf8');
const archiveStyles = await readFile('orbital-archive.css', 'utf8');
const spaceNavigationMain = await readFile('src/space-navigation/main.js', 'utf8');
const deployedBundle = await readFile('space-navigation.bundle.js');
const generatedBundle = bundleCheck.outputFiles.find((file) => /space-navigation\.bundle\.js$/.test(file.path));
const ids = NAV_ITEMS.map((item) => item.id);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
const actionSource = `${html}\n${lifeScript}`;
const missingActions = NAV_ITEMS.filter((item) => !actionSource.includes(`navigationId === '${item.id}'`));
const htmlIds = Array.from(html.matchAll(/\sid="([^"]+)"/g), (match) => match[1]);
const duplicateHtmlIds = htmlIds.filter((id, index) => htmlIds.indexOf(id) !== index);
const inlineScripts = Array.from(html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi))
  .filter((match) => !/\bsrc\s*=/.test(match[1]))
  .map((match) => match[2]);

await transform(archiveStyles, { loader: 'css', logLevel: 'silent' });
await transform(baseStyles, { loader: 'css', logLevel: 'silent' });
await transform(lifeStyles, { loader: 'css', logLevel: 'silent' });
await transform(spaceNavigationStyles, { loader: 'css', logLevel: 'silent' });
await Promise.all([
  ...inlineScripts,
  themeScript,
  lifeScript,
  serviceWorker
].map((source) => transform(source, { loader: 'js', logLevel: 'silent' })));

if (!generatedBundle || !Buffer.from(generatedBundle.contents).equals(deployedBundle)) {
  throw new Error('space-navigation.bundle.js is stale; run npm run build');
}

if (NAV_ITEMS.length !== 8 || duplicateIds.length || missingActions.length || !sceneSource.includes("new window.CustomEvent('timebox:navigate'")) {
  throw new Error(`Planet navigation mismatch: ${[...duplicateIds, ...missingActions.map((item) => item.id)].join(', ')}`);
}

if (duplicateHtmlIds.length) {
  throw new Error(`Duplicate HTML ids: ${[...new Set(duplicateHtmlIds)].join(', ')}`);
}

for (const world of ['family', 'friends', 'keepsakes', 'cooking', 'campus']) {
  if (!html.includes(`class="bio-card album-page world-album" data-world="${world}"`)) {
    throw new Error(`Missing orbital archive shell for ${world}`);
  }
}

if (!html.includes('class="timebox-cinematic space-nav-home-visible"') ||
    !html.includes("document.body.classList.remove('space-nav-home-visible')") ||
    !html.includes('<h1 class="space-home__eyebrow">Timebox</h1>')) {
  throw new Error('Initial home loading state or compact Timebox wordmark is missing');
}

for (const required of ['style.css?v=44', 'life.css?v=41', 'space-navigation.css?v=42', 'orbital-archive.css?v=44', 'theme.js?v=44', 'life.js?v=41', 'space-navigation.bundle.js?v=42', 'images/space/earth_day.webp']) {
  if (!html.includes(required)) throw new Error(`index.html is missing ${required}`);
}

if (/<link[^>]+rel=["']preload["'][^>]+earth_day\.webp/i.test(html) ||
    !html.includes('data-space-action="family"') ||
    !spaceNavigationStyles.includes('.space-navigation.is-unavailable .space-navigation__fallback') ||
    !spaceNavigationMain.includes("classList.contains('is-hidden')")) {
  throw new Error('Lazy 3D loading or the WebGL fallback is missing');
}

for (const legacyMarker of ['data-space-fallback', 'view-life', 'view-moments', 'legacy-btn-', 'targetId:', 'vehicle:']) {
  if (`${html}\n${sceneSource}\n${configSource}`.includes(legacyMarker)) {
    throw new Error(`Legacy navigation marker remains: ${legacyMarker}`);
  }
}

const shellUrls = serviceWorker.match(/var SHELL_URLS = \[([\s\S]*?)\];/);
if (!serviceWorker.includes("shell-v43") ||
    !serviceWorker.includes("static-v43") ||
    !serviceWorker.includes("images-v2") ||
    !serviceWorker.includes("assets-v2") ||
    !serviceWorker.includes('cacheFirst(request, STATIC_CACHE') ||
    !serviceWorker.includes('freshNetworkFirst') ||
    !shellUrls ||
    /space-navigation\.bundle|images\/space/.test(shellUrls[1]) ||
    !themeScript.includes("updateViaCache: 'none'")) {
  throw new Error('Versioned and on-demand service worker policy is not active');
}

if (baseStyles.includes('backgrod.webp') ||
    serviceWorker.includes('backgrod.webp') ||
    !sceneSource.includes('const homeVisible =') ||
    !sceneSource.includes('destroy({ preserveLayout = false } = {})')) {
  throw new Error('Legacy tree background or reload layout regression remains');
}

if (!themeScript.includes('function getPerPage()') ||
    !themeScript.includes('return 12;') ||
    !archiveStyles.includes('--archive-thumb-size: clamp(') ||
    !archiveStyles.includes('grid-template-columns: repeat(4, var(--archive-thumb-size))') ||
    !archiveStyles.includes('@media (min-width: 700px) and (max-width: 899px)') ||
    !archiveStyles.includes('grid-template-columns: repeat(3, minmax(0, 1fr))') ||
    !themeScript.includes('window.visualViewport.addEventListener') ||
    !themeScript.includes("gallery.setAttribute('aria-label', 'Trang ảnh '")) {
  throw new Error('Responsive twelve-photo gallery layout is missing');
}

if (!html.includes('<button type="button" class="upload-modal__dropzone"') ||
    !themeScript.includes('function syncModalState()') ||
    !lifeScript.includes('window.prepareTimeboxDialogClose')) {
  throw new Error('Keyboard-safe dialog interactions are missing');
}

const legacyRedirects = new Map([
  ['family.html', './?view=family'],
  ['friends.html', './?view=friends'],
  ['keepsakes.html', './?view=keepsakes'],
  ['cooking.html', './?view=cooking'],
  ['campus.html', './?view=campus'],
  ['life.html', './'],
  ['moments.html', './'],
  ['memories.html', './']
]);
await Promise.all(Array.from(legacyRedirects, async ([filename, route]) => {
  const source = await readFile(filename, 'utf8');
  if (!source.includes(`window.location.replace('${route}')`)) {
    throw new Error(`${filename} does not redirect to ${route}`);
  }
}));

const spaceAssets = [
  'earth_day.webp',
  'earth_night.webp',
  'earth_normal.png',
  'earth_roughness.png',
  'earth_specular.png',
  'earth_clouds.webp',
  'milky_way.webp'
];
await Promise.all(spaceAssets.map((asset) => access(`images/space/${asset}`)));

console.log(`Checked ${NAV_ITEMS.length} direct planet actions, ${spaceAssets.length} local PBR assets and bundled source successfully.`);
