import type { Messages } from '@/lib/i18n';

import HeroPhoneMockup from './HeroPhoneMockup';
import ScrollReveal from './ScrollReveal';
import StoreButtons from './StoreButtons';
import styles from './Hero.module.css';

const HERO_BG =
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=90';

type Props = { t: Messages };

export default function Hero({ t }: Props) {
  const pills = t.hero.pills ?? [];

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.mesh} aria-hidden />
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${HERO_BG})` }}
        role="img"
        aria-label=""
      />
      <div className={styles.overlay} />

      <div className={`container ${styles.inner}`}>
        <ScrollReveal className={styles.copy}>
          <p className={styles.eyebrow}>{t.hero.eyebrow}</p>
          <h1 className={styles.title}>
            {t.hero.titleLead}{' '}
            <span className="serif-accent">{t.hero.titleAccent}</span>
          </h1>
          <p className={styles.sub}>{t.hero.subtitle}</p>

          {pills.length > 0 && (
            <div className={styles.pills}>
              {pills.map((label) => (
                <span key={label} className="pill">
                  {label}
                </span>
              ))}
            </div>
          )}

          <StoreButtons
            primary={t.hero.ctaPrimary}
            secondary={t.hero.ctaSecondary}
            soonLabel={t.store.soonTooltip}
          />
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <HeroPhoneMockup badge={t.hero.badge} ui={t.hero.mockup} />
        </ScrollReveal>
      </div>
    </section>
  );
}
