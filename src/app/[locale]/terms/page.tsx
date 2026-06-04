import { notFound } from 'next/navigation';

import LegalDocumentPage from '@/components/LegalDocumentPage';
import LocaleShell from '@/components/LocaleShell';
import { getMessages, isLocale } from '@/lib/i18n';
import type { Locale } from '@/lib/theme';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const t = getMessages(raw);
  return {
    title: t.pages.terms.metaTitle,
    description: t.pages.terms.metaDescription,
  };
}

export default async function TermsRoute({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale = raw as Locale;
  const t = getMessages(locale);

  return (
    <LocaleShell locale={locale}>
      <main>
        <LegalDocumentPage locale={locale} t={t} kind="terms" />
      </main>
    </LocaleShell>
  );
}
