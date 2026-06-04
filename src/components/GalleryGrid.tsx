'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

import type { Messages } from '@/lib/i18n';
import { galleryImagesFor, type GalleryCategory } from '@/lib/media';

import ScrollReveal from './ScrollReveal';
import styles from './GalleryPage.module.css';

type FilterKey = 'all' | GalleryCategory;

type Props = {
  page: Messages['pages']['gallery'];
};

export default function GalleryGrid({ page }: Props) {
  const keys = page.filterKeys as FilterKey[];
  const [active, setActive] = useState<FilterKey>('all');

  const slides = useMemo(() => {
    if (active === 'all') {
      const picks = galleryImagesFor('all');
      return picks.map(({ src, category, index }) => {
        const item = page.categories[category][index];
        return { ...item, src, key: `${category}-${index}` };
      });
    }
    const images = galleryImagesFor(active);
    return images.map(({ src, index }) => {
      const item = page.categories[active][index];
      return { ...item, src, key: `${active}-${index}` };
    });
  }, [active, page.categories]);

  return (
    <>
      <ScrollReveal>
        <div className={styles.filters} role="tablist" aria-label={page.heroTitle}>
          {page.filters.map((label, i) => {
            const key = keys[i];
            const isOn = active === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={isOn}
                className={isOn ? styles.filterActive : styles.filter}
                onClick={() => setActive(key)}
              >
                {label}
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      <div className={styles.grid} key={active}>
        {slides.map((item, i) => (
          <ScrollReveal key={item.key} delay={(i % 4) * 50}>
            <article className={`${styles.card} ${i === 0 && active !== 'all' ? styles.featured : ''}`}>
              <Image
                src={item.src}
                alt={item.place}
                width={800}
                height={1066}
                className={styles.img}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={90}
                priority={i < 2}
              />
              <div className={styles.overlay}>
                <span className={styles.tag}>{item.tag}</span>
                <div className={styles.meta}>
                  <span className={styles.avatar} aria-hidden />
                  <div>
                    <strong>{item.place}</strong>
                    <span>{item.user}</span>
                    <time>{item.time}</time>
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}
