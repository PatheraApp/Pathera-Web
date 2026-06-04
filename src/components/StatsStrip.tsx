import type { Messages } from '@/lib/i18n';

import ScrollReveal from './ScrollReveal';
import styles from './StatsStrip.module.css';

type Props = { t: Messages };

export default function StatsStrip({ t }: Props) {
  return (
    <section className={styles.wrap} aria-label="Stats">
      <div className="container">
        <ScrollReveal>
          <ul className={styles.grid}>
            {t.stats.map((item) => (
              <li key={item.label}>
                <span className={styles.value}>{item.value}</span>
                <span className={styles.label}>{item.label}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
