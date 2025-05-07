'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function NavbarPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header>
      <nav
        className={`fixed z-50 ${
          isMobile ? 'top-[15px] w-[calc(100%-30px)]' : 'top-[30px] w-[1130px]'
        } left-1/2 -translate-x-1/2 flex items-center bg-[#1e3c63] rounded-[100px] py-2.5 px-[15px] md:px-[30px] transition-all`}
      >
        <Link href="#" className="shrink-0 relative w-[120px] h-[35px]">
          <Image
            src="/images/icons/logo.svg"
            alt="Logo Cheerslabs"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>

        {/* Mobile menu button */}
        {isMobile && (
          <button
            className="ml-auto p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            )}
          </button>
        )}

        {/* Desktop navigation */}
        {!isMobile && (
          <>
            <div className="bg-[#6C8079] w-[1px] h-[50px] ml-[30px]"></div>
            <ul className="flex items-center gap-5 md:gap-10 ml-[30px]">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary hover:underline text-white text-[16px] font-semibold transition-all duration-300"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary hover:underline text-white text-[16px] font-semibold transition-all duration-300"
                >
                  vs. Slock
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary hover:underline text-white text-[16px] font-semibold transition-all duration-300"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary hover:underline text-white text-[16px] font-semibold transition-all duration-300"
                >
                  Showcase
                </Link>
              </li>
            </ul>
            <div className="ml-auto flex items-center gap-3.5">
              <Link
                href="#"
                className="bg-background text-[16px] font-semibold px-5 h-[43px] flex items-center rounded-[100px] transition-all duration-300 hover:shadow-secondary"
              >
                Call Sales
              </Link>
              <Link
                href="#"
                className="border border-white text-white text-[16px] font-semibold px-5 h-[43px] flex items-center rounded-[100px] transition-all duration-300 hover:ring-2 hover:ring-primary hover:bg-primary hover:border-primary hover:text-foreground hover:bg-background"
              >
                My Account
              </Link>
            </div>
          </>
        )}

        {/* Mobile dropdown menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#1e3c63] rounded-2xl p-4 shadow-lg">
            <ul className="flex flex-col space-y-4 mb-4">
              <li>
                <Link
                  href="#"
                  className="block hover:text-primary hover:underline text-white text-[16px] font-semibold transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:text-primary hover:underline text-white text-[16px] font-semibold transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  vs. Slock
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:text-primary hover:underline text-white text-[16px] font-semibold transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:text-primary hover:underline text-white text-[16px] font-semibold transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Showcase
                </Link>
              </li>
            </ul>
            <div className="flex flex-col gap-3">
              <Link
                href="#"
                className="bg-background text-center text-[16px] font-semibold px-5 py-3 rounded-[100px] transition-all duration-300 hover:shadow-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Call Sales
              </Link>
              <Link
                href="#"
                className="border border-white text-center text-white text-[16px] font-semibold px-5 py-3 rounded-[100px] transition-all duration-300 hover:ring-2 hover:ring-primary hover:bg-background hover:border-primary hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                My Account
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
