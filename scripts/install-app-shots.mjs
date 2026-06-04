import { mkdirSync } from 'fs';
import sharp from 'sharp';

const assets =
  'C:/Users/hp/.cursor/projects/c-Users-hp-Desktop-pathera-web/assets';

const shots = [
  {
    file: 'c__Users_hp_AppData_Roaming_Cursor_User_workspaceStorage_41d136caf927b9f1b69ad2fd704e7780_images_IMG_9511-1fa29943-42dc-42c3-a396-30c196d8585f.png',
    out: 'shot-01.png',
  },
  {
    file: 'c__Users_hp_AppData_Roaming_Cursor_User_workspaceStorage_41d136caf927b9f1b69ad2fd704e7780_images_IMG_9512-27d53826-9841-4a23-b222-9ee5a9ed9137.png',
    out: 'shot-02.png',
  },
  {
    file: 'c__Users_hp_AppData_Roaming_Cursor_User_workspaceStorage_41d136caf927b9f1b69ad2fd704e7780_images_IMG_9513-7f24aec2-2ec8-4268-8580-b0143c67645e.png',
    out: 'shot-03.png',
  },
  {
    file: 'c__Users_hp_AppData_Roaming_Cursor_User_workspaceStorage_41d136caf927b9f1b69ad2fd704e7780_images_IMG_9514-ed18d6ff-7072-45b6-896f-bc1c2deb6f4c.png',
    out: 'shot-04.png',
  },
  {
    file: 'c__Users_hp_AppData_Roaming_Cursor_User_workspaceStorage_41d136caf927b9f1b69ad2fd704e7780_images_IMG_9516-f21ec51e-0d78-4c02-a7c0-f20b8b87521d.png',
    out: 'shot-05.png',
  },
  {
    file: 'c__Users_hp_AppData_Roaming_Cursor_User_workspaceStorage_41d136caf927b9f1b69ad2fd704e7780_images_IMG_9522-6d9c4f99-65b9-4853-929c-035087152abc.png',
    out: 'shot-06.png',
  },
  {
    file: 'c__Users_hp_AppData_Roaming_Cursor_User_workspaceStorage_41d136caf927b9f1b69ad2fd704e7780_images_IMG_9521-42ae9d64-3cd9-45ad-bab0-2e93afa7f7fc.png',
    out: 'shot-07.png',
  },
  {
    file: 'c__Users_hp_AppData_Roaming_Cursor_User_workspaceStorage_41d136caf927b9f1b69ad2fd704e7780_images_IMG_9519-41228fdf-edca-4c50-92b3-320918f34b38.png',
    out: 'shot-08.png',
  },
];

mkdirSync('public/gallery/app', { recursive: true });

for (const { file, out } of shots) {
  const src = `${assets}/${file}`;
  const dest = `public/gallery/app/${out}`;
  await sharp(src)
    .resize(780, null, { withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toFile(dest);
  console.log(out);
}
