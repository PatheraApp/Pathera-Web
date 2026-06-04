/** Logo paleti */
export const PATHERA = {
  olive: '#434f33',
  sage: '#8e914d',
  cream: '#d4d6cb',
  creamSoft: '#c8cac0',
  creamCard: '#dddfd4',
  text: '#2a2e24',
  muted: '#6b6f5c',
} as const;

/** Dark mod yüzeyleri */
export const DARK_THEME = {
  accent: '#8e914d',
  accentDeep: '#434f33',
  bg: '#050505',
  bgCard: '#111111',
  text: '#fafafa',
  textMuted: 'rgba(250, 250, 250, 0.5)',
} as const;

export type ThemeMode = 'light' | 'dark';

export const LOCALES = ['tr', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  tr: 'TR',
  en: 'EN',
};
