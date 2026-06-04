'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import type { Messages } from '@/lib/i18n';
import { activeNavKey, localePath, NAV_KEYS, switchLocaleHref } from '@/lib/paths';
import type { Locale } from '@/lib/theme';
import { LOCALE_LABELS, LOCALES } from '@/lib/theme';

import LogoMark from './LogoMark';
import { useTheme } from './ThemeProvider';
import styles from './SiteChrome.module.css';

type Props = { locale: Locale; t: Messages };

export default function SiteChrome({ locale, t }: Props) {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const menuOpen = menuPath === pathname;
  const [scrolled, setScrolled] = useState(false);

  const current = activeNavKey(pathname, locale);
  const onHome = current === 'home';

  const closeMenu = () => setMenuPath(null);
  const toggleMenu = () => setMenuPath(menuOpen ? null : pathname);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLabels: Record<(typeof NAV_KEYS)[number], string> = {
    home: t.nav.home,
    features: t.nav.features,
    about: t.nav.about,
    gallery: t.nav.gallery,
    contact: t.nav.contact,
  };

  return (
    <header
      className={`${styles.header} ${scrolled || !onHome ? styles.scrolled : ''}`}
    >
      <div className={`container ${styles.bar}`}>
        <Link href={localePath(locale, 'home')} className={styles.logo}>
          <LogoMark size={38} />
          <span className={styles.logoText}>PATHERA</span>
        </Link>

        <nav className={styles.navDesktop} aria-label="Main">
          {NAV_KEYS.map((key) => (
            <Link
              key={key}
              href={localePath(locale, key)}
              className={current === key ? styles.active : undefined}
              aria-current={current === key ? 'page' : undefined}
            >
              {navLabels[key]}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <div className={styles.lang}>
            {LOCALES.map((loc) => (
              <Link
                key={loc}
                href={switchLocaleHref(pathname, locale, loc)}
                className={loc === locale ? styles.langOn : undefined}
                onClick={closeMenu}
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
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button
            type="button"
            className={styles.menuBtn}
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label={t.nav.menu}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobilePanel}>
          <nav className={styles.mobileNav}>
            {NAV_KEYS.map((key) => (
              <Link
                key={key}
                href={localePath(locale, key)}
                onClick={closeMenu}
                className={current === key ? styles.mobileActive : undefined}
              >
                {navLabels[key]}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
