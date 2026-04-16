import { AOSInit } from '@/utils/aos';
import '../app/globals.css';
import Providers from './providers';
import Link from 'next/link';
import { Sora } from 'next/font/google'
import _customFont from '@/app/font'
import Footer from '@/components/Global/Footer';
import Header from '@/components/Global/Header';

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
        <!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-XRX99390SS"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XRX99390SS');
</script>
      </head>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
