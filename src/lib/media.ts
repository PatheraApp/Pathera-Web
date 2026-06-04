/** Yüksek çözünürlüklü Unsplash URL'leri (HEAD ile doğrulanmış) */
export function unsplash(id: string, width = 1200) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=90`;
}

export const GALLERY_IMAGES = {
  nature: [
    unsplash('photo-1506905925346-21bda4d32df4'),
    unsplash('photo-1469474968028-56623f02e42e'),
    unsplash('photo-1500530855697-b586d89ba3ee'),
    unsplash('photo-1439066615861-d1af74d74000'),
    unsplash('photo-1511497584788-876760111969'),
    unsplash('photo-1464822759023-fed622ff2c3b'),
  ],
  city: [
    unsplash('photo-1540959733332-eab4deabeeaf'),
    unsplash('photo-1496442226666-8d4d0e62e6e9'),
    unsplash('photo-1449824913935-59a10b8d2000'),
    unsplash('photo-1502602898657-3e91760cbb34'),
    unsplash('photo-1488646953014-85cb44e25828'),
    unsplash('photo-1537996194471-e657df975ab4'),
  ],
  coast: [
    unsplash('photo-1507525428034-b723cf961d3e'),
    unsplash('photo-1613395877344-13d4a8e0d49e'),
    unsplash('photo-1505142468610-359e7d316be0'),
    unsplash('photo-1571896349842-33c89424de2d'),
    unsplash('photo-1519681393784-d120267933ba'),
    unsplash('photo-1551698618-1dfe5d97d256'),
  ],
  adventure: [
    unsplash('photo-1464822759023-fed622ff2c3b'),
    unsplash('photo-1469854523086-cc02fe5d8800'),
    unsplash('photo-1454388683759-ee76c15fee26'),
    unsplash('photo-1500530855697-b586d89ba3ee'),
    unsplash('photo-1511497584788-876760111969'),
    unsplash('photo-1439066615861-d1af74d74000'),
  ],
} as const;

export type GalleryCategory = keyof typeof GALLERY_IMAGES;

export function galleryImagesFor(
  key: 'all' | GalleryCategory,
): { src: string; category: GalleryCategory; index: number }[] {
  if (key === 'all') {
    const cats = Object.keys(GALLERY_IMAGES) as GalleryCategory[];
    return cats.flatMap((category) =>
      [0, 1].map((index) => ({
        src: GALLERY_IMAGES[category][index],
        category,
        index,
      })),
    );
  }
  return GALLERY_IMAGES[key].map((src, index) => ({ src, category: key, index }));
}

/** Ana sayfa telefon ekranı — tek, yüksek çözünürlüklü görsel */
export const HERO_PHONE_SCREEN = unsplash('photo-1613395877344-13d4a8e0d49e', 1800);

export const FEATURE_PHOTOS = {
  memories: unsplash('photo-1613395877344-13d4a8e0d49e'),
  memoriesThumb1: unsplash('photo-1537996194471-e657df975ab4', 600),
  memoriesThumb2: unsplash('photo-1506905925346-21bda4d32df4', 600),
  discover1: unsplash('photo-1506905925346-21bda4d32df4', 600),
  discover2: unsplash('photo-1511497584788-876760111969', 600),
  heroThumb1: unsplash('photo-1613395877344-13d4a8e0d49e', 800),
  heroThumb2: unsplash('photo-1537996194471-e657df975ab4', 800),
  heroThumb3: unsplash('photo-1506905925346-21bda4d32df4', 800),
} as const;
