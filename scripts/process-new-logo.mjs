import sharp from 'sharp';

const raw =
  process.argv[2] ??
  'assets/c__Users_hp_AppData_Roaming_Cursor_User_workspaceStorage_41d136caf927b9f1b69ad2fd704e7780_images_IMG_9491-b794a06c-4450-43d6-a90c-cbcf5f9aa749.png';

const outLogo = 'public/pathera-logo.png';
const outIcon = 'public/icon.png';

function isPaperBg(r, g, b) {
  if (r > 248 && g > 248 && b > 248) return true;
  const light = (r + g + b) / 3;
  if (light < 175) return false;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const sat = max - min;
  if (light > 200 && sat < 42) return true;
  if (r > 205 && g > 198 && b > 175 && r - b < 55 && g - b < 45) return true;
  return false;
}

const { data, info } = await sharp(raw).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  if (isPaperBg(r, g, b)) data[i + 3] = 0;
}

const cut = await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .trim({ threshold: 12 })
  .png()
  .toBuffer();

await sharp(cut)
  .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(outLogo);

await sharp(cut)
  .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(outIcon);

console.log('Wrote', outLogo, outIcon);
