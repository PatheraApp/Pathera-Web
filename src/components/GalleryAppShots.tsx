import type { Messages } from '@/lib/i18n';
import { appGalleryShotPaths } from '@/lib/gallery-app-shots';

import ScrollReveal from './ScrollReveal';
import styles from './GalleryPage.module.css';

type Props = {
  section: Messages['pages']['gallery']['appShots'];
};

export default function GalleryAppShots({ section }: Props) {
  const paths = appGalleryShotPaths();

  return (
    <section className={styles.appSection} aria-labelledby="gallery-app-shots">
      <ScrollReveal>
        <header className={styles.appHeader}>
          <p className={styles.appEyebrow}>{section.eyebrow}</p>
          <h2 id="gallery-app-shots" className={styles.appTitle}>
            {section.titleLead}{' '}
            <span className="serif-accent">{section.titleAccent}</span>
          </h2>
          <p className={styles.appSub}>{section.subtitle}</p>
        </header>
      </ScrollReveal>

      <ul className={styles.appGrid}>
        {paths.map((src, i) => {
          const alt = section.alts[i] ?? `Pathera ${i + 1}`;
          return (
            <li key={src} className={styles.appGridItem}>
              <figure className={styles.appPhone}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  className={styles.appPhoneImg}
                  width={390}
                  height={844}
                  loading={i < 4 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </figure>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
