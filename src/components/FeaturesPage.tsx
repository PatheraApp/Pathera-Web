import Link from 'next/link';

import type { Messages } from '@/lib/i18n';
import type { Locale } from '@/lib/theme';
import { localePath } from '@/lib/paths';

import FeaturePhoneMini, { type FeatureScreenVariant } from './FeaturePhoneMini';
import { FEATURE_ICONS, IconArrowRight, IconCrown } from './Icons';
import PageHero from './PageHero';
import ScrollReveal from './ScrollReveal';
import styles from './FeaturesPage.module.css';

const VARIANTS: FeatureScreenVariant[] = [
  'map',
  'memories',
  'chat',
  'privacy',
  'route',
  'discover',
];

type Props = { locale: Locale; t: Messages };

export default function FeaturesPage({ locale, t }: Props) {
  const page = t.pages.features;

  return (
    <>
      <PageHero title={page.heroTitle} subtitle={page.heroSubtitle} />

      <div className={styles.body}>
        <div className="container">
          <div className={styles.grid}>
            {t.features.items.map((item, i) => {
              const Icon = FEATURE_ICONS[i];
              const variant = VARIANTS[i];
              const screen = page.screens[variant];

              return (
                <ScrollReveal key={item.title} delay={i * 70}>
                  <article className={styles.card}>
                    <div className={styles.cardInner}>
                      <div className={styles.copy}>
                        <div className={styles.iconBadge}>
                          <Icon className={styles.icon} />
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                      </div>
                      <FeaturePhoneMini variant={variant} screen={screen} />
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal>
            <div className={styles.cta}>
              <div className={styles.ctaIcon} aria-hidden>
                <IconCrown className={styles.crown} />
              </div>
              <div className={styles.ctaText}>
                <p className={styles.ctaTitle}>{page.cta.title}</p>
                <p className={styles.ctaSub}>{page.cta.subtitle}</p>
              </div>
              <Link href={localePath(locale, 'gallery')} className={`btn btn-gold ${styles.ctaBtn}`}>
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
