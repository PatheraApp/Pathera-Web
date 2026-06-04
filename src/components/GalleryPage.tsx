import Link from 'next/link';

import type { Messages } from '@/lib/i18n';
import type { Locale } from '@/lib/theme';
import { localePath } from '@/lib/paths';

import GalleryAppShots from './GalleryAppShots';
import GalleryGrid from './GalleryGrid';
import { IconArrowRight } from './Icons';
import PageHero from './PageHero';
import ScrollReveal from './ScrollReveal';
import styles from './GalleryPage.module.css';

type Props = { locale: Locale; t: Messages };

export default function GalleryPage({ locale, t }: Props) {
  const page = t.pages.gallery;

  return (
    <>
      <PageHero title={page.heroTitle} subtitle={page.heroSubtitle} />

      <div className={styles.body}>
        <div className="container">
          <GalleryGrid page={page} />

          <GalleryAppShots section={page.appShots} />

          <ScrollReveal>
            <div className={styles.cta}>
              <p className={styles.ctaTitle}>{page.cta.title}</p>
              <p className={styles.ctaSub}>{page.cta.subtitle}</p>
              <Link href={localePath(locale, 'features')} className={`btn btn-gold ${styles.ctaBtn}`}>
                {page.cta.button}
                <IconArrowRight className={styles.ctaArrow} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
