/** Uygulama ekran görüntüleri — dosyaları public/gallery/app/ altına koy (shot-01 … shot-08) */
export const APP_GALLERY_SHOT_COUNT = 8;

export function appGalleryShotPath(index: number): string {
  const n = String(index).padStart(2, '0');
  return `/gallery/app/shot-${n}.png`;
}

export function appGalleryShotPaths(): string[] {
  return Array.from({ length: APP_GALLERY_SHOT_COUNT }, (_, i) =>
    appGalleryShotPath(i + 1),
  );
}
