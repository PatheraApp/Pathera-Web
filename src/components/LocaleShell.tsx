import Footer from '@/components/Footer';
import SiteChrome from '@/components/SiteChrome';
import { getMessages } from '@/lib/i18n';
import type { Locale } from '@/lib/theme';

type Props = {
  locale: Locale;
  children: React.ReactNode;
};

export default function LocaleShell({ locale, children }: Props) {
  const t = getMessages(locale);

  return (
    <>
      <SiteChrome locale={locale} t={t} />
      {children}
      <Footer locale={locale} t={t} />
    </>
  );
}
