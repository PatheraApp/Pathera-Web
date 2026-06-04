import { notFound } from 'next/navigation';

import FeaturesPage from '@/components/FeaturesPage';
import LocaleShell from '@/components/LocaleShell';
import { getMessages, isLocale } from '@/lib/i18n';
import type { Locale } from '@/lib/theme';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const t = getMessages(raw);
  return {
    title: t.pages.features.metaTitle,
    description: t.pages.features.metaDescription,
  };
}

export default async function FeaturesRoute({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale = raw as Locale;
  const t = getMessages(locale);

  return (
    <LocaleShell locale={locale}>
      <main>
        <FeaturesPage locale={locale} t={t} />
      </main>
    </LocaleShell>
  );
}
