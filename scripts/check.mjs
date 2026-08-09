import { access, readFile } from 'node:fs/promises';
import { build, transform } from 'esbuild';
import { NAV_ITEMS } from '../src/space-navigation/config.js';

await build({
  entryPoints: ['./src/space-navigation/main.js'],
  absWorkingDir: process.cwd(),
  bundle: true,
  write: false,
  target: ['es2020'],
  logLevel: 'silent'
});

const html = await readFile('index.html', 'utf8');
const lifeScript = await readFile('life.js', 'utf8');
const sceneSource = await readFile('src/space-navigation/Scene.js', 'utf8');
const configSource = await readFile('src/space-navigation/config.js', 'utf8');
const serviceWorker = await readFile('sw.js', 'utf8');
const themeScript = await readFile('theme.js', 'utf8');
const baseStyles = await readFile('style.css', 'utf8');
const archiveStyles = await readFile('orbital-archive.css', 'utf8');
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
await Promise.all(inlineScripts.map((source) => transform(source, { loader: 'js', logLevel: 'silent' })));

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

for (const required of ['style.css?v=27', 'life.css?v=27', 'space-navigation.css?v=27', 'orbital-archive.css?v=27', 'theme.js?v=27', 'life.js?v=27', 'space-navigation.bundle.js?v=27', 'images/space/earth_day.webp']) {
  if (!html.includes(required)) throw new Error(`index.html is missing ${required}`);
}

for (const legacyMarker of ['data-space-fallback', 'view-life', 'view-moments', 'legacy-btn-', 'targetId:', 'vehicle:']) {
  if (`${html}\n${sceneSource}\n${configSource}`.includes(legacyMarker)) {
    throw new Error(`Legacy navigation marker remains: ${legacyMarker}`);
  }
}

if (!serviceWorker.includes("shell-v27") ||
    !serviceWorker.includes("images-v2") ||
    !serviceWorker.includes("assets-v2") ||
    !serviceWorker.includes('freshNetworkFirst') ||
    !themeScript.includes("updateViaCache: 'none'")) {
  throw new Error('Fresh service worker policy is not active');
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
    !archiveStyles.includes('grid-template-columns: repeat(2, minmax(0, 1fr))')) {
  throw new Error('Responsive twelve-photo gallery layout is missing');
}

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
