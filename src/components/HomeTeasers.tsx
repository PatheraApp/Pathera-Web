import Link from 'next/link';

import type { Messages } from '@/lib/i18n';
import type { Locale } from '@/lib/theme';
import { localePath } from '@/lib/paths';

import ScrollReveal from './ScrollReveal';
import styles from './HomeTeasers.module.css';

type Props = { locale: Locale; t: Messages };

const KEYS = ['features', 'about', 'gallery', 'contact'] as const;

export default function HomeTeasers({ locale, t }: Props) {
  const teasers = t.home.teasers;

  return (
    <section className={`section ${styles.wrap}`}>
      <div className="container">
        <ScrollReveal>
          <h2 className={styles.title}>
            {teasers.titleLead}{' '}
            <span className="serif-accent">{teasers.titleAccent}</span>
          </h2>
        </ScrollReveal>
        <div className={styles.grid}>
          {KEYS.map((key, i) => {
            const item = teasers.items[key];
            return (
              <ScrollReveal key={key} delay={i * 70}>
                <Link href={localePath(locale, key)} className={styles.card}>
                  <span className={styles.label}>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <span className={styles.arrow}>→</span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
