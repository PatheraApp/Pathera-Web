import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { DM_Sans, Playfair_Display } from 'next/font/google';

import { ThemeProvider } from '@/components/ThemeProvider';
import { parseThemeCookie, THEME_COOKIE, themeCookieScript } from '@/lib/theme-cookie';
import type { ThemeMode } from '@/lib/theme';

import './globals.css';

const sans = DM_Sans({
  variable: '--font-sans',
  subsets: ['latin', 'latin-ext'],
});

const serif = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin', 'latin-ext'],
  style: ['italic', 'normal'],
});

const HERO_BG =
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=90';

export const metadata: Metadata = {
  metadataBase: new URL('https://pathera.net'),
  title: {
    default: 'Pathera — Yolculuğunu paylaş',
    template: '%s | Pathera',
  },
  description:
    'Pathera — konumunu, anılarını ve yolculuklarını paylaştığın sosyal seyahat uygulaması.',
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/pathera-logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://pathera.net',
    siteName: 'Pathera',
    title: 'Pathera — Yolculuğunu paylaş',
    description: 'Sosyal seyahat uygulaması. Yakında iOS ve Android.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pathera',
    description: 'Yolculuğunu paylaş — sosyal seyahat uygulaması',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const stored = parseThemeCookie(cookieStore.get(THEME_COOKIE)?.value);
  const initialTheme: ThemeMode = stored ?? 'dark';

  return (
    <html lang="tr" data-theme={initialTheme} suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href={HERO_BG} />
        <script
          dangerouslySetInnerHTML={{
            __html: themeCookieScript(),
          }}
        />
      </head>
      <body className={`${sans.variable} ${serif.variable}`}>
        <ThemeProvider initialTheme={initialTheme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
