'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CarCrushLogo from './CarCrushLogo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#112317]/90 backdrop-blur-md border border-[#23452c]/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
          {/* Logo */}
          <Link href="/" className="hover:opacity-95 transition-opacity">
            <CarCrushLogo isDark={true} />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-[#d1ded6]">
            <Link
              href="/"
              className={`relative py-1 transition-colors font-semibold ${
                pathname === '/' ? 'text-[#6FCF3C]' : 'hover:text-white'
              }`}
            >
              Home
              {pathname === '/' && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#6FCF3C] rounded-full" />
              )}
            </Link>

            <Link
              href="/about"
              className={`relative py-1 transition-colors font-semibold ${
                pathname === '/about' ? 'text-[#6FCF3C]' : 'hover:text-white'
              }`}
            >
              About
              {pathname === '/about' && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#6FCF3C] rounded-full" />
              )}
            </Link>

            <Link
              href="/how-it-works"
              className={`relative py-1 transition-colors font-semibold ${
                pathname === '/how-it-works' ? 'text-[#6FCF3C]' : 'hover:text-white'
              }`}
            >
              How It Works
              {pathname === '/how-it-works' && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#6FCF3C] rounded-full" />
              )}
            </Link>

            <Link
              href="/blogs"
              className={`relative py-1 transition-colors font-semibold ${
                pathname === '/blogs' ? 'text-[#6FCF3C]' : 'hover:text-white'
              }`}
            >
              Blogs
              {pathname === '/blogs' && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#6FCF3C] rounded-full" />
              )}
            </Link>

            <Link
              href="/contact"
              className={`relative py-1 transition-colors font-semibold ${
                pathname === '/contact' ? 'text-[#6FCF3C]' : 'hover:text-white'
              }`}
            >
              Contact
              {pathname === '/contact' && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#6FCF3C] rounded-full" />
              )}
            </Link>
          </nav>

          {/* Desktop Right CTA: Get a Quote */}
          <div className="hidden sm:flex items-center">
            <Link
              href="/quote"
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-[#6FCF3C]/60 hover:border-[#6FCF3C] bg-[#16311F]/70 hover:bg-[#1f472a] text-white text-xs font-semibold tracking-wide transition-all shadow-[0_0_15px_rgba(111,207,60,0.15)] hover:shadow-[0_0_20px_rgba(111,207,60,0.3)]"
            >
              <svg
                className="w-3.5 h-3.5 text-[#6FCF3C] group-hover:rotate-12 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Get a Quote</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="/quote"
              className="sm:hidden px-3 py-1.5 rounded-full border border-[#6FCF3C]/60 text-white text-[11px] font-semibold bg-[#16311F]"
            >
              Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-3xl bg-[#112317]/95 backdrop-blur-xl border border-[#23452c] shadow-2xl flex flex-col gap-3 text-sm font-medium text-gray-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-xl font-semibold transition-colors ${
                pathname === '/' ? 'text-[#6FCF3C] bg-[#193622]' : 'hover:bg-white/5'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-xl font-semibold transition-colors ${
                pathname === '/about' ? 'text-[#6FCF3C] bg-[#193622]' : 'hover:bg-white/5'
              }`}
            >
              About
            </Link>
            <Link
              href="/how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-xl font-semibold transition-colors ${
                pathname === '/how-it-works' ? 'text-[#6FCF3C] bg-[#193622]' : 'hover:bg-white/5'
              }`}
            >
              How It Works
            </Link>
            <Link
              href="/blogs"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-xl font-semibold transition-colors ${
                pathname === '/blogs' ? 'text-[#6FCF3C] bg-[#193622]' : 'hover:bg-white/5'
              }`}
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-xl font-semibold transition-colors ${
                pathname === '/contact' ? 'text-[#6FCF3C] bg-[#193622]' : 'hover:bg-white/5'
              }`}
            >
              Contact
            </Link>
            <Link
              href="/quote"
              className="mt-2 text-center py-2.5 rounded-full bg-[#6FCF3C] text-[#0f2615] font-bold"
            >
              Get a Quote ↗
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
