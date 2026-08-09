import { build } from 'esbuild';

await build({
  entryPoints: ['./src/space-navigation/main.js'],
  absWorkingDir: process.cwd(),
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['es2020'],
  format: 'iife',
  outfile: 'space-navigation.bundle.js',
  legalComments: 'none',
  banner: { js: '/* Timebox 3D navigation — Three.js + GSAP */' }
});

console.log('Built space-navigation.bundle.js');
