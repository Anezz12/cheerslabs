import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import NavbarPage from '@/components/Home/Navbar';
import Footer from '@/components/Home/Footer';
import LogoWa from '@/components/Home/LogoWa';
import Script from 'next/script';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Cheers Labs | Coffee Shop Yogyakarta',
  description:
    'Cheers Labs menawarkan kopi terbaik di Yogyakarta dengan cita rasa yang unik dan pengalaman ngopi yang tak terlupakan.',
  keywords: [
    'coffee shop yogyakarta',
    'cheers labs',
    'kopi yogyakarta',
    'cita rasa kopi',
    'amikom yogyakarta',
  ],
  authors: [{ name: 'Tim Cheers Labs' }],
  creator: 'Tim Cheers Labs',
  publisher: 'Cheers Labs',
  robots: 'index, follow',
};

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Google Analytics */}
        {GA_TRACKING_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <NavbarPage />
        <main>{children}</main>
        <LogoWa />
        <Footer />
      </body>
    </html>
  );
}
