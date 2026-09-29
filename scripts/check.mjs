import { readFile } from 'node:fs/promises';
import { transform } from 'esbuild';

const html = await readFile('index.html', 'utf8');
const lifeScript = await readFile('life.js', 'utf8');
const serviceWorker = await readFile('sw.js', 'utf8');
const workerScript = await readFile('worker/index.js', 'utf8');
const themeScript = await readFile('theme.js', 'utf8');
const baseStyles = await readFile('style.css', 'utf8');
const lifeStyles = await readFile('life.css', 'utf8');
const spaceNavigationStyles = await readFile('space-navigation.css', 'utf8');
const archiveStyles = await readFile('orbital-archive.css', 'utf8');

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
  serviceWorker,
  workerScript
].map((source) => transform(source, { loader: 'js', logLevel: 'silent' })));

if (duplicateHtmlIds.length) {
  throw new Error(`Duplicate HTML ids: ${[...new Set(duplicateHtmlIds)].join(', ')}`);
}

for (const world of ['family', 'friends', 'keepsakes', 'cooking', 'campus']) {
  if (!html.includes(`class="bio-card album-page world-album" data-world="${world}"`)) {
    throw new Error(`Missing world container for ${world}`);
  }
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

console.log('Neumorphic Timebox UI and scripts checked successfully!');
