'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-72 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-xl w-full text-center">
        {/* 404 Message */}
        <h1 className="text-6xl font-bold text-[#1e3c63] mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Page Not Found
        </h2>

        {/* Coffee themed message */}
        <p className="text-gray-600 mb-8 text-lg">
          {
            " Oops! Looks like our barista couldn't brew this page. The page you're looking for might have been moved, renamed, or might not exist."
          }
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="bg-[#1e3c63] hover:bg-blue-900 text-white px-8 py-3 rounded-md transition-colors duration-300 font-medium"
          >
            Back to Homepage
          </Link>
          <Link
            href="/menu"
            className="bg-white border-2 border-[#1e3c63] hover:bg-gray-50 text-[#1e3c63] px-8 py-3 rounded-md transition-colors duration-300 font-medium"
          >
            View Our Menu
          </Link>
        </div>

        {/* Coffee facts - animated appearance */}
        {mounted && (
          <div className="mt-16 bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-fadeIn">
            <h3 className="text-lg font-medium text-[#1e3c63] mb-2">
              {" While you're here..."}
            </h3>
            <p className="text-gray-600 italic">
              {' "Coffee is a language in itself." - Jackie Chan'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
