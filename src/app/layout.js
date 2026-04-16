import { AOSInit } from '@/utils/aos';
import '../app/globals.css';
import Providers from './providers';
import Link from 'next/link';
import { Sora } from 'next/font/google'
import _customFont from '@/app/font'
import Footer from '@/components/Global/Footer';
import Header from '@/components/Global/Header';
import Script from 'next/script';

const _sora = Sora({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  varibale: '--font-sora'
})

export const metadata = {
  title: 'Genki Ramune',
  description: 'Refreshing soda drinks for all ages!',
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <AOSInit />
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XRX99390SS"
        strategy="afterInteractive"
        />

      <Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XRX99390SS');
  `}
</Script>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
