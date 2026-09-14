import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Bengali + Latin webfonts are self-hosted from node_modules so the site needs
// no connection to Google Fonts at build or run time.
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/hind-siliguri/300.css';
import '@fontsource/hind-siliguri/400.css';
import '@fontsource/hind-siliguri/500.css';
import '@fontsource/hind-siliguri/600.css';
import '@fontsource/hind-siliguri/700.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ponderalo.example'),
  title: {
    default: 'পনডার আলো | PonDer Alo — বাংলা সংবাদপত্র',
    template: '%s | পনডার আলো',
  },
  description:
    'পনডার আলো — বাংলাদেশ ও বিশ্বের সর্বশেষ খবর, রাজনীতি, খেলা, বিনোদন, মতামত, শিক্ষা ও প্রযুক্তির নির্ভরযোগ্য সংবাদমাধ্যম।',
  keywords: ['পনডার আলো', 'PonDer Alo', 'বাংলা খবর', 'Bangla news', 'Rajit Chakladar'],
  authors: [{ name: 'Rajit Chakladar' }],
  openGraph: {
    title: 'পনডার আলো | PonDer Alo',
    description: 'দেশ, বিশ্ব, খেলা, বিনোদন ও মতামতের নির্ভরযোগ্য সংবাদ।',
    type: 'website',
    locale: 'bn_BD',
  },
};

/** Applies the saved theme before paint so dark mode never flashes. */
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('pa-theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <meta name="theme-color" content="#d31217" />
      </head>
      <body className="min-h-screen bg-white dark:bg-[#0d0f13]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
