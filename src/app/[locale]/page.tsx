import { notFound } from 'next/navigation';

import CtaBand from '@/components/CtaBand';
import Hero from '@/components/Hero';
import HomeTeasers from '@/components/HomeTeasers';
import LocaleShell from '@/components/LocaleShell';
import StatsStrip from '@/components/StatsStrip';
import { getMessages, isLocale } from '@/lib/i18n';
import type { Locale } from '@/lib/theme';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const t = getMessages(raw);
  return { title: t.meta.title, description: t.meta.description };
}

export default async function HomePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale = raw as Locale;
  const t = getMessages(locale);

  return (
    <LocaleShell locale={locale}>
      <main>
        <Hero t={t} />
        <StatsStrip t={t} />
        <HomeTeasers locale={locale} t={t} />
        <CtaBand t={t} locale={locale} />
      </main>
    </LocaleShell>
  );
}
