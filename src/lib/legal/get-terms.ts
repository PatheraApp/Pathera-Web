import type { Locale } from '@/lib/theme';

import { termsEn } from './terms-en';
import { termsTr } from './terms-tr';
import type { LegalDocument } from './types';

export function getTermsDocument(locale: Locale): LegalDocument | null {
  if (locale === 'tr') return termsTr;
  if (locale === 'en') return termsEn;
  return null;
}
