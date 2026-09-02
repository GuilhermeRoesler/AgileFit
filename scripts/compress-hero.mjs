import sharp from "sharp";
import { rename, stat } from "node:fs/promises";
import path from "node:path";

async function compressPng(input, { width, quality = 80, palette = true } = {}) {
  const original = await sharp(input).metadata();
  const pipeline = sharp(input).resize(width ?? null, null, { withoutEnlargement: true });
  const tmp = `${input}.tmp`;

  await pipeline.png({ quality, compressionLevel: 9, palette }).toFile(tmp);
  await rename(tmp, input);

  const after = await stat(input);
  console.log(
    `Compressed ${path.basename(input)}: ${original.width}x${original.height} -> ${(after.size / 1024).toFixed(0)} KB`,
  );
}

async function compressJpeg(input, { width, quality = 78 } = {}) {
  const original = await sharp(input).metadata();
  const pipeline = sharp(input).resize(width ?? null, null, { withoutEnlargement: true });
  const tmp = `${input}.tmp`;

  await pipeline.jpeg({ quality, mozjpeg: true }).toFile(tmp);
  await rename(tmp, input);

  const after = await stat(input);
  console.log(
    `Compressed ${path.basename(input)}: ${original.width}x${original.height} -> ${(after.size / 1024).toFixed(0)} KB`,
  );
}

await compressPng("src/assets/hero-fitness.png", { width: 1600 });
await compressJpeg("src/assets/transformation.jpg", { width: 1200 });
await compressPng("public/demo.png", { width: 1200, quality: 75 });
await compressPng("public/favicon.png", { width: 180, quality: 90, palette: false });
