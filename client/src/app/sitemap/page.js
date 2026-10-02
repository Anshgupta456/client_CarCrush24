'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useCompany } from '../../context/CompanyContext';
export default function SitemapPage() {
  const { company } = useCompany();
  const [blogsList, setBlogsList] = useState([]);

  useEffect(() => {
    let ignore = false;
    const loadBlogs = async () => {
      try {
        const res = await fetch('/api/blogs');
        if (res.ok && !ignore) {
          const json = await res.json();
          if (json.data && Array.isArray(json.data)) {
            setBlogsList(json.data);
          }
        }
      } catch {
        // Graceful error handling
      }
    };
    loadBlogs();
    return () => {
      ignore = true;
    };
  }, []);

  const generalPages = [
    { title: 'Home', href: '/', desc: 'Authorized vehicle scrapping portal' },
    { title: 'Get an Instant Quote', href: '/quote', desc: 'Online valuation & pickup booking' },
    { title: 'How It Works', href: '/how-it-works', desc: '4-step vehicle recycling process' },
    { title: 'Detailed Scrapping Process', href: '/scrapping-process', desc: '10-step legal VScrap Parivahan workflow' },
    { title: 'About CarCrush24', href: '/about', desc: 'RVSF facility, mission & team' },
    { title: 'Blogs & Guides', href: '/blogs', desc: 'RTO policy updates & vehicle guides' },
    { title: 'Contact & Support', href: '/contact', desc: 'Helpdesk lines & locations' },
  ];

  const legalPages = [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms & Conditions', href: '/terms' },
    { title: 'Sitemap', href: '/sitemap' },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9F5] text-[#131A15] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
        {/* Simple Minimal Header */}
        <div className="pb-8 border-b border-[#E4E7DE]">
          <span className="text-xs font-semibold text-[#1F5C33] uppercase tracking-wider">
            Index
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#131A15] tracking-tight mt-1 font-heading">
            Sitemap
          </h1>
          <p className="text-sm text-[#5B6660] mt-2">
            A simple overview of all pages, legal documents, and guides on {company?.companyName || 'CarCrush24'}.
          </p>
        </div>

        {/* 2-Column Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 py-10 border-b border-[#E4E7DE]">
          {/* Main Pages */}
          <section>
            <h2 className="text-sm font-bold text-[#131A15] uppercase tracking-wider pb-3 border-b border-[#E4E7DE]">
              Main Pages
            </h2>
            <ul className="mt-4 space-y-3">
              {generalPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm font-medium text-[#131A15] hover:text-[#1F5C33] hover:underline transition-colors block"
                  >
                    {page.title}
                  </Link>
                  <span className="text-xs text-[#5B6660] block mt-0.5">
                    {page.desc}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Legal & Compliance */}
          <section>
            <h2 className="text-sm font-bold text-[#131A15] uppercase tracking-wider pb-3 border-b border-[#E4E7DE]">
              Legal &amp; Policy
            </h2>
            <ul className="mt-4 space-y-3">
              {legalPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm font-medium text-[#131A15] hover:text-[#1F5C33] hover:underline transition-colors block"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="text-sm font-bold text-[#131A15] uppercase tracking-wider pb-3 border-b border-[#E4E7DE] mt-8">
              Operating Hubs
            </h2>
            <ul className="mt-3 space-y-1.5 text-xs text-[#5B6660]">
              {(Array.isArray(company?.operatingHubs)
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
                  ]
              ).map((hub) => (
                <li key={hub}>• {hub}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Blog Guides List */}
        {blogsList && blogsList.length > 0 && (
          <section className="py-10 border-b border-[#E4E7DE]">
            <div className="flex items-center justify-between pb-3 border-b border-[#E4E7DE]">
              <h2 className="text-sm font-bold text-[#131A15] uppercase tracking-wider">
                Articles &amp; Guides ({blogsList.length})
              </h2>
              <Link
                href="/blogs"
                className="text-xs font-semibold text-[#1F5C33] hover:underline"
              >
                View all blogs →
              </Link>
            </div>
            <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {blogsList.map((b) => (
                <li key={b.slug || b.id}>
                  <Link
                    href={`/blogs/${b.slug}`}
                    className="text-sm text-[#131A15] hover:text-[#1F5C33] hover:underline transition-colors line-clamp-1 block"
                  >
                    • {b.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Minimal Office & Facility Footer note */}
        <section className="pt-8 text-xs text-[#5B6660] space-y-2">
          <div>
            <strong className="text-[#131A15]">Registered Address: </strong>
            <span>{company?.registeredOfficeAddress || company?.address || 'Devbhoomi Industrial Areas, Khasra no. 216, Khatakhedi, Roorkee, Uttarakhand, 247667'}</span>
          </div>
          <div>
            <strong className="text-[#131A15]">Primary Unit Address: </strong>
            <span>{company?.facilityAddress || company?.address || 'Devbhoomi Industrial Areas, Khasra no. 216, Khatakhedi, Roorkee, Uttarakhand, 247667'}</span>
          </div>
          <div className="pt-1">
            <span>Contact Number: </span>
            <a href={`tel:${company?.tollFreeTel || '1800227278'}`} className="text-[#1F5C33] font-medium hover:underline">
              {company?.tollFreePhone || '1800-22-CRUSH'}
            </a>
            <span className="mx-2">•</span>
            <span>Email: </span>
            <a href={`mailto:${company?.email || 'support@carcrush24.com'}`} className="text-[#1F5C33] font-medium hover:underline">
              {company?.email || 'support@carcrush24.com'}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
