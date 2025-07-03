import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import NavbarPage from '@/components/Home/Navbar';
import { Analytics } from '@vercel/analytics/next';
import Footer from '@/components/Home/Footer';
import LogoWa from '@/components/Home/LogoWa';
import GoogleAnalytics from '@/components/Home/GoogleAnalytics';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} antialiased`}>
        <GoogleAnalytics />
        <NavbarPage />
        <main>{children}</main>
        <LogoWa />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
