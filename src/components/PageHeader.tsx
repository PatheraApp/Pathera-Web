import Link from 'next/link';

import type { Locale } from '@/lib/theme';
import { localePath } from '@/lib/paths';

import styles from './PageHeader.module.css';

type Props = {
  locale: Locale;
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  compact?: boolean;
};

export default function PageHeader({ locale, eyebrow, title, subtitle, compact }: Props) {
  return (
    <header className={`${styles.wrap} ${compact ? styles.compact : ''}`}>
      <div className="container">
        <Link href={localePath(locale, 'home')} className={styles.back}>
          ← {locale === 'tr' ? 'Ana sayfa' : locale === 'en' ? 'Home' : 'Главная'}
        </Link>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.sub}>{subtitle}</p>}
      </div>
    </header>
  );
}
