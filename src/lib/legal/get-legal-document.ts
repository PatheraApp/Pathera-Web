import type { LegalKey } from '@/lib/paths';
import type { Locale } from '@/lib/theme';

import { getKvkkDocument } from './get-kvkk';
import { getPrivacyDocument } from './get-privacy';
import { getTermsDocument } from './get-terms';
import type { LegalDocument } from './types';

export function getLegalDocument(locale: Locale, key: LegalKey): LegalDocument | null {
  if (key === 'terms') return getTermsDocument(locale);
  if (key === 'kvkk') return getKvkkDocument(locale);
  return getPrivacyDocument(locale);
}
