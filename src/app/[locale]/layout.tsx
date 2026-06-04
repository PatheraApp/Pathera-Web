import { notFound } from 'next/navigation';

import { getMessages, isLocale } from '@/lib/i18n';
import type { Locale } from '@/lib/theme';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }];
}

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const t = getMessages(raw);
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      languages: {
        tr: '/tr',
        en: '/en',
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  return <div lang={raw as Locale}>{children}</div>;
}
