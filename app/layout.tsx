import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import NavbarPage from '@/components/Home/Navbar';
import { Analytics } from '@vercel/analytics/next';
import Footer from '@/components/Home/Footer';
import LogoWa from '@/components/Home/LogoWa';
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
        <LogoWa />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
