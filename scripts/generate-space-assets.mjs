import sharp from 'sharp';

const sourceDirectory = 'images/space';
const daySource = `${sourceDirectory}/earth_day.webp`;

const { data: dayPixels, info } = await sharp(daySource)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const pixelCount = width * height;
const heights = new Float32Array(pixelCount);
const roughness = Buffer.alloc(pixelCount);
const specular = Buffer.alloc(pixelCount);

for (let index = 0; index < pixelCount; index += 1) {
  const offset = index * channels;
  const red = dayPixels[offset];
  const green = dayPixels[offset + 1];
  const blue = dayPixels[offset + 2];
  const luminance = red * 0.2126 + green * 0.7152 + blue * 0.0722;
  const ocean = blue > 52 && blue > red * 1.18 && blue > green * 1.05;
  const ice = luminance > 205 && Math.abs(red - blue) < 34;

  if (ocean) {
    heights[index] = 0.16 + luminance / 2550;
    roughness[index] = Math.round(52 + luminance * 0.12);
    specular[index] = Math.round(212 + Math.min(36, luminance * 0.12));
  } else if (ice) {
    heights[index] = 0.62 + luminance / 1275;
    roughness[index] = 142;
    specular[index] = 72;
  } else {
    heights[index] = 0.4 + luminance / 720;
    roughness[index] = Math.round(176 + Math.min(58, luminance * 0.2));
    specular[index] = 28;
  }
}

const normal = Buffer.alloc(pixelCount * 3);
const sampleHeight = (x, y) => {
  const wrappedX = (x + width) % width;
  const clampedY = Math.max(0, Math.min(height - 1, y));
  return heights[clampedY * width + wrappedX];
};

for (let y = 0; y < height; y += 1) {
  for (let x = 0; x < width; x += 1) {
    const left = sampleHeight(x - 1, y);
    const right = sampleHeight(x + 1, y);
    const up = sampleHeight(x, y - 1);
    const down = sampleHeight(x, y + 1);
    let normalX = (left - right) * 2.6;
    let normalY = (up - down) * 2.6;
    let normalZ = 1;
    const length = Math.hypot(normalX, normalY, normalZ) || 1;
    normalX /= length;
    normalY /= length;
    normalZ /= length;
    const offset = (y * width + x) * 3;
    normal[offset] = Math.round((normalX * 0.5 + 0.5) * 255);
    normal[offset + 1] = Math.round((normalY * 0.5 + 0.5) * 255);
    normal[offset + 2] = Math.round((normalZ * 0.5 + 0.5) * 255);
  }
}

await Promise.all([
  sharp(normal, { raw: { width, height, channels: 3 } }).png({ compressionLevel: 9 }).toFile(`${sourceDirectory}/earth_normal.png`),
  sharp(roughness, { raw: { width, height, channels: 1 } }).png({ compressionLevel: 9 }).toFile(`${sourceDirectory}/earth_roughness.png`),
  sharp(specular, { raw: { width, height, channels: 1 } }).png({ compressionLevel: 9 }).toFile(`${sourceDirectory}/earth_specular.png`)
]);

console.log(`Generated PBR Earth maps at ${width}x${height}.`);
