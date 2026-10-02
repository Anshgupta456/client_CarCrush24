'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCompany } from '../context/CompanyContext';
import { trackVisitorEvent } from './GoogleAnalytics';

export default function Footer() {
  const { company } = useCompany();
  const currentYear = new Date().getFullYear();

  const hubs = Array.isArray(company?.operatingHubs)
    ? company.operatingHubs
    : typeof company?.operatingHubs === 'string'
    ? company.operatingHubs.split(',').map((h) => h.trim()).filter(Boolean)
    : [
        'Delhi NCR',
        'Punjab',
        'Haryana',
        'Uttar Pradesh',
        'Uttarakhand',
        'Jammu & Kashmir',
        'Chandigarh',
      ];

  const socialItems = [
    {
      name: 'Facebook',
      href: company?.socialLinks?.facebook || 'https://facebook.com/carcrush24',
      renderIcon: () => (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: company?.socialLinks?.instagram || 'https://instagram.com/carcrush24',
      renderIcon: () => (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: company?.socialLinks?.youtube || 'https://youtube.com/@carcrush24',
      renderIcon: () => (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

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
                alt={`${company?.companyName || 'CarCrush24'} - ${company?.tagline || 'Recycle • Reuse • A Cleaner Tomorrow'}`}
                width={210}
                height={36}
                className="h-8 sm:h-9 w-auto object-contain brightness-105"
              />
            </Link>

            {/* About Company */}
            <p className="text-xs sm:text-[13.5px] text-[#A1B2A5] leading-relaxed max-w-md mb-6 font-normal">
              {company?.companyName || 'CarCrush24'} is North India&apos;s leading government-authorized Registered Vehicle Scrapping Facility (RVSF). We make vehicle recycling simple, transparent, and eco-friendly with best scrap value, free doorstep towing, and authentic Certificate of Deposit (CoD) &amp; CVS.
            </p>

            {/* Address & Contact Details */}
            <div className="space-y-3.5 text-xs sm:text-[13px] text-[#C5D4C9]">
              {/* Registered Address */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#188A38]/30 text-[#6FCF3C] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <span>
                  <strong className="text-white font-semibold">Registered Address:</strong>{' '}
                  {company?.registeredOfficeAddress || company?.address || 'Devbhoomi Industrial Areas, Khasra no. 216, Khatakhedi, Roorkee, Uttarakhand, 247667'}
                </span>
              </div>

              {/* Primary Unit Address */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#188A38]/30 text-[#6FCF3C] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <span>
                  <strong className="text-white font-semibold">Primary Unit Address:</strong>{' '}
                  {company?.facilityAddress || company?.address || 'Devbhoomi Industrial Areas, Khasra no. 216, Khatakhedi, Roorkee, Uttarakhand, 247667'}
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
                  <strong className="text-white font-semibold">Contact Number:</strong>{' '}
                  <a
                    href={`tel:${company?.tollFreeTel || '1800227278'}`}
                    onClick={() => {
                      trackVisitorEvent('phone_call_click', {
                        category: 'Inquiry',
                        label: 'Footer Contact Call',
                      });
                    }}
                    className="hover:text-[#6FCF3C] transition-colors"
                  >
                    {company?.tollFreePhone || '1800-22-CRUSH'} {company?.phone ? `/ ${company.phone}` : ''}
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
                  <a
                    href={`mailto:${company?.email || 'support@carcrush24.com'}`}
                    className="hover:text-[#6FCF3C] transition-colors"
                  >
                    {company?.email || 'support@carcrush24.com'}
                  </a>
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-[#6FCF3C] hover:bg-[#188A38]/30 hover:text-[#6FCF3C] text-gray-400 flex items-center justify-center transition-all cursor-pointer"
                >
                  {item.renderIcon()}
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
                  <Link href="/scrapping-process" className="hover:text-white transition-colors">
                    Detailed Scrapping Process
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-white transition-colors">
                    Blogs &amp; Vehicle Guides
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
                <li>
                  <Link href="/sitemap" className="hover:text-white transition-colors">
                    Sitemap
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
                {hubs.map((hub) => (
                  <li key={hub} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6FCF3C]" />
                    <span>{hub}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* ================= BOTTOM COPYRIGHT BAR ================= */}
        <div className="mt-10 pt-6 border-t border-[#1C3621]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A8E7F] text-center sm:text-left">
          
          {/* Copyright Line */}
          <div>
            <p>
              &copy; {currentYear}{' '}
              <strong className="text-white font-semibold">
                {company?.companyName || 'CarCrush24'}
              </strong>
              {company?.legalName ? ` (${company.legalName})` : ''}. All rights reserved. Registered Vehicle Scrapping Facility (RVSF).
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
            <Link href="/sitemap" className="hover:text-[#6FCF3C] transition-colors">
              Sitemap
            </Link>
            <span className="text-[#324D37]">•</span>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('open_cookie_preferences'));
                }
              }}
              className="hover:text-[#6FCF3C] transition-colors cursor-pointer text-xs"
            >
              Cookie Preferences
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}

