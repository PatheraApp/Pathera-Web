import { mkdirSync } from 'fs';
import sharp from 'sharp';

const dir = 'public/gallery/app';
mkdirSync(dir, { recursive: true });

const w = 390;
const h = 844;

for (let i = 1; i <= 8; i++) {
  const label = String(i);
  const svg = `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1c18"/>
      <stop offset="100%" style="stop-color:#0c0e0a"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle"
    font-family="system-ui,sans-serif" font-size="48" font-weight="600" fill="#8e914d" opacity="0.35">${label}</text>
</svg>`;

  const n = String(i).padStart(2, '0');
  await sharp(Buffer.from(svg)).png().toFile(`${dir}/shot-${n}.png`);
  console.log('shot-' + n + '.png');
}
