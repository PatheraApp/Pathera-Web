'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { Messages } from '@/lib/i18n';
import type { Locale } from '@/lib/theme';
import { LOCALE_LABELS, LOCALES } from '@/lib/theme';

import { useTheme } from './ThemeProvider';
import styles from './LocaleThemeBar.module.css';

type Props = {
  locale: Locale;
  t: Messages;
};

/** Referans header’da yok — dil/tema footer alt şeridinde */
export default function LocaleThemeBar({ locale, t }: Props) {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  return (
    <div className={styles.bar}>
      <div className={styles.lang}>
        {LOCALES.map((loc) => (
          <Link
            key={loc}
            href={pathname.replace(`/${locale}`, `/${loc}`) || `/${loc}`}
            className={loc === locale ? styles.active : undefined}
            aria-current={loc === locale ? 'true' : undefined}
          >
            {LOCALE_LABELS[loc]}
          </Link>
        ))}
      </div>
      <button
        type="button"
        className={styles.themeBtn}
        onClick={toggle}
        aria-label={theme === 'dark' ? t.theme.light : t.theme.dark}
      >
        {theme === 'dark' ? t.theme.light : t.theme.dark}
      </button>
    </div>
  );
}
