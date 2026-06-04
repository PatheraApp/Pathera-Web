import type { Messages } from '@/lib/i18n';

import { FEATURE_ICONS } from './Icons';
import ScrollReveal from './ScrollReveal';
import styles from './Features.module.css';

type Props = { t: Messages };

export default function Features({ t }: Props) {
  return (
    <section id="features" className={`section ${styles.wrap}`}>
      <div className="container">
        <ScrollReveal>
          <header className={styles.head}>
            <h2 className={styles.title}>
              {t.features.titleLead}{' '}
              <span className="serif-accent">{t.features.titleAccent}</span>
            </h2>
            <p className={styles.sub}>{t.features.subtitle}</p>
          </header>
        </ScrollReveal>

        <div className={styles.grid}>
          {t.features.items.slice(0, 4).map((item, i) => {
            const Icon = FEATURE_ICONS[i];
            return (
              <ScrollReveal key={item.title} delay={i * 80}>
                <article className={styles.card}>
                  <div className={styles.iconWrap}>
                    <Icon className={styles.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
