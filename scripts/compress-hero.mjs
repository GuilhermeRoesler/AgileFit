import sharp from "sharp";
import { copyFile, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

async function replaceFile(tmp, dest) {
  await copyFile(tmp, dest);
  await unlink(tmp);
}

async function logSize(label, filePath, meta) {
  const after = await stat(filePath);
  const dims = meta?.width ? `${meta.width}x${meta.height} ` : "";
  console.log(`Wrote ${label}: ${dims}${(after.size / 1024).toFixed(0)} KB`);
}

async function writeWebpVariants(input, { outDir, basename, widths, quality = 78 }) {
  const meta = await sharp(input).metadata();

  for (const width of widths) {
    const out = path.join(outDir, `${basename}-${width}.webp`);
    const tmp = `${out}.tmp`;
    const info = await sharp(input)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toFile(tmp);
    await replaceFile(tmp, out);
    await logSize(path.basename(out), out, info);
  }

  console.log(`Source ${path.basename(input)}: ${meta.width}x${meta.height}`);
}

async function compressPng(input, { width, quality = 80, palette = true } = {}) {
  const original = await sharp(input).metadata();
  const pipeline = sharp(input).resize(width ?? null, null, { withoutEnlargement: true });
  const tmp = `${input}.tmp`;

  await pipeline.png({ quality, compressionLevel: 9, palette }).toFile(tmp);
  await replaceFile(tmp, input);
  await logSize(path.basename(input), input, original);
}

async function compressWebp(input, { width, quality = 75 } = {}) {
  const original = await sharp(input).metadata();
  const tmp = `${input}.tmp`;
  const info = await sharp(input)
    .resize(width ?? null, null, { withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(tmp);
  await replaceFile(tmp, input);
  await logSize(path.basename(input), input, { ...original, width: info.width, height: info.height });
}

async function removeIfPresent(filePath) {
  try {
    await unlink(filePath);
    console.log(`Removed ${path.basename(filePath)}`);
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code !== "ENOENT") {
      throw error;
    }
  }
}

await writeWebpVariants("src/assets/hero-fitness.png", {
  outDir: "src/assets",
  basename: "hero-fitness",
  widths: [800, 1200, 1600],
  quality: 76,
});

await writeWebpVariants("src/assets/transformation.jpg", {
  outDir: "src/assets",
  basename: "transformation",
  widths: [600, 900, 1200],
  quality: 78,
});

await compressWebp("public/demo.webp", { width: 1200, quality: 75 });
await compressPng("public/favicon.png", { width: 180, quality: 90, palette: false });

for (const name of ["maria", "joao", "ana"]) {
  const input = `src/assets/testimonial-${name}.webp`;
  try {
    const buffer = await sharp(input)
      .resize(384, 384, { fit: "cover" })
      .webp({ quality: 82, effort: 6 })
      .toBuffer();
    await writeFile(input, buffer);
    await logSize(`testimonial-${name}.webp`, input);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`Skipped testimonial-${name}.webp (${message})`);
  }
}

// Masters PNG/JPG ficam no repo para regenerar WebP; não entram no bundle.
await removeIfPresent("src/assets/hero-fitness.webp");
await removeIfPresent("src/assets/transformation.webp");
await removeIfPresent("src/assets/testimonial-maria.webp.tmp");
await removeIfPresent("src/assets/testimonial-joao.webp.tmp");
await removeIfPresent("src/assets/testimonial-ana.webp.tmp");
