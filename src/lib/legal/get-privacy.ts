import type { Locale } from '@/lib/theme';

import { privacyEn } from './privacy-en';
import { privacyTr } from './privacy-tr';
import type { LegalDocument } from './types';

export function getPrivacyDocument(locale: Locale): LegalDocument | null {
  if (locale === 'tr') return privacyTr;
  if (locale === 'en') return privacyEn;
  return null;
}
