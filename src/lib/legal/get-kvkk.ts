import type { Locale } from '@/lib/theme';

import { kvkkEn } from './kvkk-en';
import { kvkkTr } from './kvkk-tr';
import type { LegalDocument } from './types';

export function getKvkkDocument(locale: Locale): LegalDocument | null {
  if (locale === 'tr') return kvkkTr;
  if (locale === 'en') return kvkkEn;
  return null;
}
