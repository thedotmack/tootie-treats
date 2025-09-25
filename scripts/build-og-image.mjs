import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const source = resolve(projectRoot, 'assets/og-image.svg');
const outputDir = resolve(projectRoot, 'public');
const output = resolve(outputDir, 'og-image.png');

async function generate() {
  try {
    await mkdir(outputDir, { recursive: true });
    await sharp(source, { density: 240 })
      .resize(1200, 630, { fit: 'cover' })
      .png({ compressionLevel: 9, quality: 90 })
      .toFile(output);
    console.log(`Generated Open Graph image at ${output}`);
  } catch (error) {
    console.error('Failed to generate og-image.png');
    console.error(error);
    process.exitCode = 1;
  }
}

generate();
