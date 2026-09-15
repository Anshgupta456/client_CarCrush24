'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#09120B] text-gray-300 overflow-hidden border-t border-[#1C3621]">
      {/* Background soft ambient green lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6FCF3C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* ================= LEFT SIDE: LOGO, ABOUT & ADDRESS ================= */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Logo */}
            <Link href="/" className="inline-block mb-5 hover:opacity-95 transition-opacity">
              <Image
                src="/images/logo-transparent.png"
                alt="CarCrush24 - Recycle • Reuse • A Cleaner Tomorrow"
                width={210}
                height={36}
                className="h-8 sm:h-9 w-auto object-contain brightness-105"
              />
            </Link>

            {/* About Company */}
            <p className="text-xs sm:text-[13.5px] text-[#A1B2A5] leading-relaxed max-w-md mb-6 font-normal">
              CarCrush24 is North India&apos;s leading government-authorized Registered Vehicle Scrapping Facility (RVSF). We make vehicle recycling simple, transparent, and eco-friendly with best scrap value, free doorstep towing, and authentic Certificate of Deposit (CoD) &amp; CVS.
            </p>

            {/* Address & Contact Details */}
            <div className="space-y-3.5 text-xs sm:text-[13px] text-[#C5D4C9]">
              {/* Location Address */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#188A38]/30 text-[#6FCF3C] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <span>
                  <strong className="text-white font-semibold">Corporate Office:</strong> Sector 62, Noida, Delhi NCR, Uttar Pradesh 201309
                </span>
              </div>

              {/* Phone Helpline */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#188A38]/30 text-[#6FCF3C] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <span>
                  <strong className="text-white font-semibold">Toll-Free Helpline:</strong>{' '}
                  <a href="tel:1800227278" className="hover:text-[#6FCF3C] transition-colors">
                    1800-22-CRUSH / +91 98765 43210
                  </a>
                </span>
              </div>

              {/* Email Support */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#188A38]/30 text-[#6FCF3C] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span>
                  <strong className="text-white font-semibold">Email:</strong>{' '}
                  <a href="mailto:support@carcrush24.com" className="hover:text-[#6FCF3C] transition-colors">
                    support@carcrush24.com
                  </a>
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5 mt-6">
              {[
                { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
                { name: 'LinkedIn', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z' },
                { name: 'Facebook', icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { name: 'Instagram', icon: 'M16 4H8C5.79 4 4 5.79 4 8v8c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-4 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4.5-6.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  aria-label={item.name}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-[#6FCF3C] hover:bg-[#188A38]/30 hover:text-[#6FCF3C] text-gray-400 flex items-center justify-center transition-all"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ================= RIGHT SIDE: QUICK LINKS & OPERATING HUBS ================= */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:pl-12">

            {/* Column 1: Quick Navigation */}
            <div>
              <h3 className="text-white text-xs sm:text-sm font-extrabold uppercase tracking-[0.14em] mb-4 text-[#6FCF3C]">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#A1B2A5]">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About CarCrush24
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/why-us" className="hover:text-white transition-colors">
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link href="/quote" className="hover:text-[#6FCF3C] font-semibold transition-colors flex items-center gap-1">
                    <span>Get Instant Quote</span>
                    <span className="text-[10px]">→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact &amp; Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Regional Coverage */}
            <div>
              <h3 className="text-white text-xs sm:text-sm font-extrabold uppercase tracking-[0.14em] mb-4 text-[#6FCF3C]">
                Operating Hubs
              </h3>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#A1B2A5]">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6FCF3C]" />
                  <span>Delhi NCR</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6FCF3C]" />
                  <span>Punjab</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6FCF3C]" />
                  <span>Haryana</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6FCF3C]" />
                  <span>Uttar Pradesh</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6FCF3C]" />
                  <span>Uttarakhand</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6FCF3C]" />
                  <span>Jammu &amp; Kashmir</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6FCF3C]" />
                  <span>Chandigarh</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* ================= BOTTOM COPYRIGHT BAR ================= */}
        <div className="mt-10 pt-6 border-t border-[#1C3621]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A8E7F] text-center sm:text-left">
          
          {/* Copyright Line */}
          <div>
            <p>
              &copy; {currentYear} <strong className="text-white font-semibold">CarCrush24</strong>. All rights reserved. Registered Vehicle Scrapping Facility (RVSF).
            </p>
          </div>

          {/* Legal Links & Tagline */}
          <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-[#6FCF3C] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#324D37]">•</span>
            <Link href="/terms" className="hover:text-[#6FCF3C] transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-[#324D37]">•</span>
            <span className="text-[#A1B2A5] font-medium">
              Recycle • Reuse • A Cleaner Tomorrow
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
