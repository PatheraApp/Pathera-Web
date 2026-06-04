import type { Locale } from './theme';

export const NAV_KEYS = [
  'home',
  'features',
  'about',
  'gallery',
  'contact',
] as const;

export type NavKey = (typeof NAV_KEYS)[number];

const SEGMENTS: Record<NavKey, string> = {
  home: '',
  features: 'features',
  about: 'about',
  gallery: 'gallery',
  contact: 'contact',
};

export function localePath(locale: Locale, key: NavKey): string {
  const seg = SEGMENTS[key];
  return seg ? `/${locale}/${seg}` : `/${locale}`;
}

export const LEGAL_KEYS = ['terms', 'privacy', 'kvkk'] as const;
export type LegalKey = (typeof LEGAL_KEYS)[number];

const LEGAL_SEGMENTS: Record<LegalKey, string> = {
  terms: 'terms',
  privacy: 'privacy',
  kvkk: 'kvkk',
};

export function legalPath(locale: Locale, key: LegalKey): string {
  return `/${locale}/${LEGAL_SEGMENTS[key]}`;
}

export function switchLocaleHref(pathname: string, from: Locale, to: Locale): string {
  if (pathname.startsWith(`/${from}`)) {
    return pathname.replace(`/${from}`, `/${to}`) || `/${to}`;
  }
  return `/${to}`;
}

export function activeNavKey(pathname: string, locale: Locale): NavKey {
  for (const key of NAV_KEYS) {
    if (key === 'home') {
      if (pathname === `/${locale}` || pathname === `/${locale}/`) return 'home';
      continue;
    }
    if (pathname.startsWith(localePath(locale, key))) return key;
  }
  return 'home';
}
