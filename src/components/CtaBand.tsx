import type { Messages } from '@/lib/i18n';
import { localePath } from '@/lib/paths';
import type { Locale } from '@/lib/theme';

import ScrollReveal from './ScrollReveal';
import styles from './CtaBand.module.css';

type Props = { t: Messages; locale: Locale };

export default function CtaBand({ t, locale }: Props) {
  const c = t.ctaBand;

  return (
    <section className={styles.wrap}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.inner}>
            <div>
              <h2 className={styles.title}>{c.title}</h2>
              <p className={styles.sub}>{c.subtitle}</p>
            </div>
            <a href={localePath(locale, 'features')} className={`btn btn-gold ${styles.btn}`}>
              {c.button}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
