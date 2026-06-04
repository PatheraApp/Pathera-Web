import Link from 'next/link';

import type { Messages } from '@/lib/i18n';
import { legalPath, localePath } from '@/lib/paths';
import type { Locale } from '@/lib/theme';

import { IconInstagram, IconX } from './Icons';
import LogoMark from './LogoMark';
import styles from './Footer.module.css';

type Props = { locale: Locale; t: Messages };

export default function Footer({ locale, t }: Props) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <div className={styles.brandRow}>
            <LogoMark size={40} />
            <span className={styles.brand}>PATHERA</span>
          </div>
          <p className={styles.copy}>{t.footer.copyright}</p>
        </div>

        <div>
          <p className={styles.colTitle}>{t.footer.links}</p>
          <nav className={styles.links}>
            <Link href={localePath(locale, 'home')}>{t.nav.home}</Link>
            <Link href={localePath(locale, 'features')}>{t.nav.features}</Link>
            <Link href={localePath(locale, 'about')}>{t.nav.about}</Link>
            <Link href={localePath(locale, 'gallery')}>{t.nav.gallery}</Link>
            <Link href={localePath(locale, 'contact')}>{t.nav.contact}</Link>
          </nav>
        </div>

        <div>
          <p className={styles.colTitle}>{t.footer.legal}</p>
          <nav className={styles.links}>
            <Link href={legalPath(locale, 'privacy')}>{t.footer.privacy}</Link>
            <Link href={legalPath(locale, 'terms')}>{t.footer.terms}</Link>
            <Link href={legalPath(locale, 'kvkk')}>{t.footer.kvkk}</Link>
          </nav>
        </div>

        <div>
          <p className={styles.colTitle}>{t.footer.follow}</p>
          <div className={styles.social} aria-label="Social">
            <a
              href="https://www.instagram.com/PatheraApp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @PatheraApp"
            >
              <IconInstagram className={styles.socialIcon} />
            </a>
            <a
              href="https://x.com/PatheraApp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X @PatheraApp"
            >
              <IconX className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
