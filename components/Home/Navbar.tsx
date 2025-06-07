'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function NavbarPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Track scrolling to adjust background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
        } left-1/2 -translate-x-1/2 flex items-center rounded-[100px] py-2.5 px-[15px] md:px-[30px] transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-lg'
            : 'bg-transparent backdrop-blur-sm'
        }`}
      >
        <Link
          href="/"
          className="shrink-0 relative w-[120px] h-[35px] flex items-center justify-center"
        >
          <Image
            src="/logo-remove.png"
            alt="Logo Cheerslabs"
            height={400}
            width={120}
            style={{ objectFit: 'contain' }}
            className=""
            priority
          />
        </Link>

        {/* Mobile menu button */}
        {isMobile && (
          <button
            className="ml-auto p-2 text-[#1e3c63]"
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
            <div className="bg-[#1e3c63]/20 w-[1px] h-[50px] ml-[30px]"></div>
            <ul className="flex items-center gap-5 md:gap-10 ml-[30px]">
              <li>
                <Link
                  href="/menu"
                  className="text-[#1e3c63] text-[16px] font-semibold transition-all duration-300 hover:text-[#004AAD] hover:underline"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#1e3c63] text-[16px] font-semibold transition-all duration-300 hover:text-[#004AAD] hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="text-[#1e3c63] text-[16px] font-semibold transition-all duration-300 hover:text-[#004AAD] hover:underline"
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#1e3c63] text-[16px] font-semibold transition-all duration-300 hover:text-[#004AAD] hover:underline"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/media-press"
                  className="text-[#1e3c63] text-[16px] font-semibold transition-all duration-300 hover:text-[#004AAD] hover:underline"
                >
                  Media Press
                </Link>
              </li>
            </ul>
            <div className="ml-auto flex items-center gap-3.5">
              <Link
                href="#"
                className="px-5 h-[43px] flex items-center rounded-[100px]  border border-[#1e3c63] text-[#1e3c63] text-[16px] font-bold leading-[19px] transition-all duration-300 hover:bg-[#1e3c63] hover:text-white text-center"
              >
                Order Online
              </Link>
              <Link
                href="#"
                className="bg-[#1e3c63] text-white text-[16px] font-semibold px-5 h-[43px] flex items-center rounded-[100px] transition-all duration-300 hover:bg-[#004AAD]"
              >
                Book a Table
              </Link>
            </div>
          </>
        )}

        {/* Mobile dropdown menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-[#1e3c63]/10">
            <ul className="flex flex-col space-y-4 mb-4">
              <li>
                <Link
                  href="/menu"
                  className="block text-[#1e3c63] text-[16px] font-semibold transition-all duration-300 hover:text-[#004AAD]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-[#1e3c63] text-[16px] font-semibold transition-all duration-300 hover:text-[#004AAD]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="block text-[#1e3c63] text-[16px] font-semibold transition-all duration-300 hover:text-[#004AAD]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-[#1e3c63] text-[16px] font-semibold transition-all duration-300 hover:text-[#004AAD]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/media-press"
                  className="block text-[#1e3c63] text-[16px] font-semibold transition-all duration-300 hover:text-[#004AAD]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Media Press
                </Link>
              </li>
            </ul>
            <div className="flex flex-col gap-3">
              <Link
                href="#"
                className="text-[#1e3c63] border border-[#1e3c63] text-center text-[16px] font-semibold px-5 py-3 rounded-[100px] transition-all duration-300 hover:bg-[#1e3c63]/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Order Online
              </Link>
              <Link
                href="#"
                className="bg-[#1e3c63] text-white text-center text-[16px] font-semibold px-5 py-3 rounded-[100px] transition-all duration-300 hover:bg-[#004AAD]"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Table
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
