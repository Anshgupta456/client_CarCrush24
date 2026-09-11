'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CarCrushLogo from './CarCrushLogo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
              className="text-[#6FCF3C] relative py-1 hover:text-[#7ee247] transition-colors font-semibold"
            >
              Home
              <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#6FCF3C] rounded-full" />
            </Link>

            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 hover:text-white transition-colors py-1 cursor-pointer"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-[#6FCF3C]' : 'text-[#8ca394]'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl bg-[#112317]/95 backdrop-blur-lg border border-[#23452c] p-2 shadow-2xl flex flex-col gap-1 text-sm">
                  <Link href="/services/scrapping" className="px-3 py-2 rounded-xl hover:bg-[#1a3823] hover:text-[#6FCF3C] transition-colors">
                    Vehicle Scrapping
                  </Link>
                  <Link href="/services/recycling" className="px-3 py-2 rounded-xl hover:bg-[#1a3823] hover:text-[#6FCF3C] transition-colors">
                    Eco Recycling
                  </Link>
                  <Link href="/services/parts-sales" className="px-3 py-2 rounded-xl hover:bg-[#1a3823] hover:text-[#6FCF3C] transition-colors">
                    Reusable Parts Sales
                  </Link>
                  <Link href="/services/free-collection" className="px-3 py-2 rounded-xl hover:bg-[#1a3823] hover:text-[#6FCF3C] transition-colors">
                    Free Vehicle Towing
                  </Link>
                  <Link href="/services/paperwork" className="px-3 py-2 rounded-xl hover:bg-[#1a3823] hover:text-[#6FCF3C] transition-colors">
                    RTO Certificate &amp; Paperwork
                  </Link>
                </div>
              )}
            </div>

            <Link href="/how-it-works" className="hover:text-white transition-colors">
              How It Works
            </Link>

            <Link href="/why-us" className="hover:text-white transition-colors">
              Why Us
            </Link>

            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
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
            <Link href="/" className="px-3 py-2 rounded-xl text-[#6FCF3C] font-semibold bg-[#193622]">
              Home
            </Link>
            <Link href="/about" className="px-3 py-2 rounded-xl hover:bg-white/5">
              About
            </Link>
            <Link href="/services" className="px-3 py-2 rounded-xl hover:bg-white/5">
              Services
            </Link>
            <Link href="/how-it-works" className="px-3 py-2 rounded-xl hover:bg-white/5">
              How It Works
            </Link>
            <Link href="/why-us" className="px-3 py-2 rounded-xl hover:bg-white/5">
              Why Us
            </Link>
            <Link href="/contact" className="px-3 py-2 rounded-xl hover:bg-white/5">
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
