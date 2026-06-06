import Link from 'next/link';

import type { Messages } from '@/lib/i18n';
import type { Locale } from '@/lib/theme';
import { localePath } from '@/lib/paths';

import { FEATURE_ICONS, IconArrowRight } from './Icons';
import PageHero from './PageHero';
import ScrollReveal from './ScrollReveal';
import styles from './AboutPage.module.css';

type Props = { locale: Locale; t: Messages };

export default function AboutPage({ locale, t }: Props) {
  const page = t.pages.about;

  return (
    <>
      <PageHero title={page.heroTitle} subtitle={page.heroSubtitle} />

      <div className={styles.body}>
        <div className="container">
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>
              {page.valuesTitleLead}{' '}
              <span className="serif-accent">{page.valuesTitleAccent}</span>
            </h2>
          </ScrollReveal>

          <div className={styles.valuesGrid}>
            {page.values.map((item, i) => {
              const Icon = FEATURE_ICONS[i];
              return (
                <ScrollReveal key={item.title} delay={i * 60}>
                  <article className={styles.valueCard}>
                    <div className={styles.valueIcon}>
                      <Icon className={styles.icon} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>

          <div className={styles.blocks}>
            {page.blocks.map((block, i) => (
              <ScrollReveal key={block.title} delay={i * 80}>
                <article className={styles.block}>
                  <h2>{block.title}</h2>
                  <p>{block.body}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <ul className={styles.stats}>
              {page.stats.map((s) => (
                <li key={s.label}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <div className={styles.cta}>
              <p>{page.cta.text}</p>
              <Link href={localePath(locale, 'contact')} className={`btn btn-gold ${styles.ctaBtn}`}>
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
