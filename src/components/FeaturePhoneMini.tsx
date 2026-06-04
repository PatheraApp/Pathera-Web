import Image from 'next/image';

import type { Messages } from '@/lib/i18n';
import { FEATURE_PHOTOS } from '@/lib/media';

import styles from './FeaturePhoneMini.module.css';

export type FeatureScreenVariant =
  | 'map'
  | 'memories'
  | 'chat'
  | 'privacy'
  | 'route'
  | 'discover';

type Screens = Messages['pages']['features']['screens'];

type Props = {
  variant: FeatureScreenVariant;
  screen: Screens[FeatureScreenVariant];
};

export default function FeaturePhoneMini({ variant, screen }: Props) {
  const header = screen.header;
  return (
    <div className={styles.wrap} aria-hidden>
      <div className={styles.device}>
        <div className={styles.screen}>
          <div className={styles.status} />
          <div className={styles.appHeader}>{header}</div>

          {variant === 'map' && (
            <div className={styles.map}>
              <span className={`${styles.pin} ${styles.p1}`} />
              <span className={`${styles.pin} ${styles.p2}`} />
              <span className={`${styles.pin} ${styles.p3}`} />
              <svg className={styles.routeLine} viewBox="0 0 120 160">
                <path d="M20 130 Q60 80 100 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 5" />
              </svg>
            </div>
          )}

          {variant === 'memories' && (
            <div className={styles.memories}>
              <Image
                src={FEATURE_PHOTOS.memories}
                alt=""
                width={400}
                height={280}
                className={styles.heroPhoto}
                quality={90}
              />
              <p className={styles.place}>{(screen as Screens['memories']).place}</p>
              <div className={styles.thumbRow}>
                <Image src={FEATURE_PHOTOS.memoriesThumb1} alt="" width={120} height={80} className={styles.thumb} quality={90} />
                <Image src={FEATURE_PHOTOS.memoriesThumb2} alt="" width={120} height={80} className={styles.thumb} quality={90} />
                <span className={styles.thumbEmpty} />
              </div>
            </div>
          )}

          {variant === 'chat' && (
            <ul className={styles.chatList}>
              {(screen as Screens['chat']).threads.map((t) => (
                <li key={t.name}>
                  <span className={styles.avatar} />
                  <span className={styles.chatMeta}>
                    <strong>{t.name}</strong>
                    <em>{t.preview}</em>
                  </span>
                </li>
              ))}
            </ul>
          )}

          {variant === 'privacy' && (
            <ul className={styles.toggles}>
              {(screen as Screens['privacy']).rows.map((row) => (
                <li key={row.label}>
                  <span>{row.label}</span>
                  <span className={`${styles.toggle} ${row.on ? styles.on : ''}`} />
                </li>
              ))}
            </ul>
          )}

          {variant === 'route' && (
            <div className={styles.form}>
              {(screen as Screens['route']).fields.map((f) => (
                <label key={f}>
                  <span>{f}</span>
                  <span className={styles.field} />
                </label>
              ))}
              <span className={styles.formBtn}>{(screen as Screens['route']).button}</span>
            </div>
          )}

          {variant === 'discover' && (
            <div className={styles.discover}>
              <span className={styles.search}>{(screen as Screens['discover']).search}</span>
              <div className={styles.destGrid}>
                {(screen as Screens['discover']).destinations.map((d, i) => (
                  <div key={d.name} className={styles.destCard}>
                    <Image
                      src={i === 0 ? FEATURE_PHOTOS.discover1 : FEATURE_PHOTOS.discover2}
                      alt=""
                      fill
                      className={styles.destImg}
                      sizes="120px"
                      quality={90}
                    />
                    <span>{d.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
