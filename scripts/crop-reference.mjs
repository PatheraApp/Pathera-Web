import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const src = path.join(root, 'public', 'reference-mockup.png');
const outDir = path.join(root, 'public', 'ref');

await mkdir(outDir, { recursive: true });

const image = sharp(src);
const { width, height } = await image.metadata();
console.log('Source:', width, 'x', height);

/* Oranlar — tam sayfa mockup üzerinden hero + telefon bölgesi */
/* Mockup dikey (682×1024) — üst şerit arka plan, ortada telefonlar */
const hero = {
  left: 0,
  top: 0,
  width,
  height: Math.round(height * 0.34),
};

const phones = {
  left: Math.round(width * 0.06),
  top: Math.round(height * 0.3),
  width: Math.round(width * 0.88),
  height: Math.round(height * 0.24),
};

const laurel = {
  left: Math.round(width * 0.52),
  top: Math.round(height * 0.5),
  width: Math.round(width * 0.44),
  height: Math.round(height * 0.07),
};

async function crop(name, region) {
  const dest = path.join(outDir, `${name}.webp`);
  await sharp(src).extract(region).webp({ quality: 90 }).toFile(dest);
  console.log('Wrote', dest, region);
}

await crop('hero-bg', hero);
await crop('phones', phones);
await crop('laurel-badge', laurel);

const cardY = Math.round(height * 0.57);
const cardH = Math.round(height * 0.145);
const colW = Math.floor(width / 4);
for (let i = 0; i < 4; i++) {
  await crop(`card-${i}`, {
    left: i * colW + 2,
    top: cardY,
    width: colW - 4,
    height: cardH,
  });
}
