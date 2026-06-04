import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';

import { ThemeProvider } from '@/components/ThemeProvider';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('pathera-theme');var d=t||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',d);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
      </head>
      <body className={`${sans.variable} ${serif.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
