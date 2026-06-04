import type { Locale } from './theme';
import { LOCALES } from './theme';

import en from '@/messages/en.json';
import tr from '@/messages/tr.json';

export type Messages = typeof tr;

const catalogs: Record<Locale, Messages> = { tr, en };

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function getMessages(locale: Locale): Messages {
  return catalogs[locale];
}

export function defaultLocale(): Locale {
  return 'tr';
}
