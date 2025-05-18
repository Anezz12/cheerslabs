import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import NavbarPage from '@/components/Navbar';
import { Analytics } from '@vercel/analytics/next';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Cheers Labs | Digital Business Solution Provider',
  description:
    'Cheers Labs menawarkan solusi digital business terbaik untuk membantu perusahaan Anda berkembang di era digital.',
  keywords: [
    'digital business',
    'cheers labs',
    'solusi bisnis digital',
    'transformasi digital',
    'amikom yogyakarta',
  ],
  authors: [{ name: 'Tim Cheers Labs' }],
  creator: 'Tim Cheers Labs',
  publisher: 'Cheers Labs',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://www.cheerslabs.my.id',
    title: 'Cheers Labs | Digital Business Solution Provider',
    description:
      'Cheers Labs menawarkan solusi digital business terbaik untuk membantu perusahaan Anda berkembang di era digital.',
    siteName: 'Cheers Labs',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Cheers Labs - Digital Business Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cheers Labs | Digital Business Solution Provider',
    description:
      'Cheers Labs menawarkan solusi digital business terbaik untuk membantu perusahaan Anda berkembang di era digital.',
    images: ['/twitter-image.jpg'],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/apple-touch-icon.png',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#4CAF50',
  alternates: {
    canonical: 'https://www.cheerslabs.my.id',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} antialiased`}>
        <NavbarPage />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
