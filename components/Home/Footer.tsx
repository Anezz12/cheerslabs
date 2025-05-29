import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e3c63] text-white pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Cheers Labs Logo"
                width={40}
                height={40}
                className="rounded-full bg-white p-1"
              />
              <h2 className="text-2xl font-bold">Cheers Labs</h2>
            </div>
            <p className="mt-4 text-gray-300">
              Solusi digital business terbaik untuk membantu perusahaan Anda
              berkembang di era digital.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="text-blue-300">✉️</span>
              <Link
                href="mailto:contact@cheerslabs.com"
                className="hover:text-blue-300 transition-colors"
              >
                contact@cheerslabs.com
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-600 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  <span>Portfolio</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Coffee Menu - Replaced Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-600 pb-2">
              Our Coffee Menu
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/menu/espresso"
                  className="hover:text-blue-300 transition-colors"
                >
                  Espresso Based
                </Link>
              </li>
              <li>
                <Link
                  href="/menu/manual-brew"
                  className="hover:text-blue-300 transition-colors"
                >
                  Manual Brew
                </Link>
              </li>
              <li>
                <Link
                  href="/menu/signature"
                  className="hover:text-blue-300 transition-colors"
                >
                  Signature Coffee
                </Link>
              </li>
              <li>
                <Link
                  href="/menu/non-coffee"
                  className="hover:text-blue-300 transition-colors"
                >
                  Non-Coffee Drinks
                </Link>
              </li>
              <li>
                <Link
                  href="/menu/desserts"
                  className="hover:text-blue-300 transition-colors"
                >
                  Pastries & Desserts
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-600 pb-2">
              Connect With Us
            </h3>
            <p className="text-gray-300 mb-4">
              Follow us on social media to get the latest updates.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/cheerslabs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-blue-800 hover:bg-blue-300 transition-colors"
              >
                <span className="block w-5 h-5 text-center font-semibold">
                  IG
                </span>
              </Link>
              <Link
                href="https://linkedin.com/company/cheerslabs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-blue-800 hover:bg-blue-300 transition-colors"
              >
                <span className="block w-5 h-5 text-center font-semibold">
                  LI
                </span>
              </Link>
              <Link
                href="https://twitter.com/cheerslabs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-blue-800 hover:bg-blue-300 transition-colors"
              >
                <span className="block w-5 h-5 text-center font-semibold">
                  X
                </span>
              </Link>
              <Link
                href="https://github.com/cheerslabs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-blue-800 hover:bg-blue-300 transition-colors"
              >
                <span className="block w-5 h-5 text-center font-semibold">
                  GH
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-blue-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            © {currentYear} Cheers Labs. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-300">
            <Link
              href="/privacy-policy"
              className="hover:text-blue-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-blue-300 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-blue-300 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
