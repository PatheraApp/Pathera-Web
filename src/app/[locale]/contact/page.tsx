import { notFound } from 'next/navigation';

import ContactPage from '@/components/ContactPage';
import LocaleShell from '@/components/LocaleShell';
import { getMessages, isLocale } from '@/lib/i18n';
import type { Locale } from '@/lib/theme';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const t = getMessages(raw);
  return {
    title: t.pages.contact.metaTitle,
    description: t.pages.contact.metaDescription,
  };
}

export default async function ContactRoute({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale = raw as Locale;
  const t = getMessages(locale);

  return (
    <LocaleShell locale={locale}>
      <main>
        <ContactPage t={t} />
      </main>
    </LocaleShell>
  );
}
