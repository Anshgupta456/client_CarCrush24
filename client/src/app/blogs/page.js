'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SectionHeader from '../../components/SectionHeader';

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Policy & Rules', 'Scrappage Guides', 'Tax & Savings', 'Eco Impact'];

  const blogs = [
    {
      id: 1,
      slug: 'indias-vehicle-scrappage-policy-guide',
      title: "The Comprehensive Guide to India's Vehicle Scrappage Policy (2024–2025)",
      excerpt: 'Understand the end-of-life vehicle mandates, the 10-year diesel and 15-year petrol rules in Delhi NCR, and how to stay legally compliant while maximizing your vehicle scrap value.',
      category: 'Policy & Rules',
      readTime: '6 min read',
      date: 'Sept 12, 2026',
      featured: true,
      image: '/images/blogs/blog1.jpg',
      tag: 'MoRTH Compliance',
    },
    {
      id: 2,
      slug: 'claim-25-percent-road-tax-concession-cod',
      title: 'How to Claim Up to 25% Motor Vehicle Tax Concession with Certificate of Deposit (CoD)',
      excerpt: 'Did you know retiring your end-of-life car unlocks massive road-tax rebates on your next new vehicle? Here is a step-by-step walkthrough to redeem your Parivahan CoD voucher.',
      category: 'Tax & Savings',
      readTime: '5 min read',
      date: 'Sept 10, 2026',
      featured: false,
      image: '/images/blogs/blog2.jpg',
      tag: 'Tax Benefits',
    },
    {
      id: 3,
      slug: 'delhi-ncr-10-15-year-rule-penalties',
      title: 'Delhi-NCR 10/15-Year Rule: What Happens If Your End-of-Life Vehicle Is Seized?',
      excerpt: 'Navigating municipal impound yards and police challans is costly. Learn how automated enforcement cameras flag deregistered cars and why proactive RVSF scrappage is your safest choice.',
      category: 'Policy & Rules',
      readTime: '4 min read',
      date: 'Sept 06, 2026',
      featured: false,
      image: '/images/blogs/blog3.jpg',
      tag: 'Legal Advisory',
    },
    {
      id: 4,
      slug: 'dangers-of-unauthorized-kabadiwala-scrappage',
      title: 'Why Selling to Unorganized Scrap Yards Exposes You to Chassis Identity Theft',
      excerpt: 'Local uncertified scrap dealers often resell vehicle chassis numbers to stolen cars or skip RTO deregistrations entirely, leaving original owners legally liable for accidents or crimes.',
      category: 'Scrappage Guides',
      readTime: '5 min read',
      date: 'Aug 29, 2026',
      featured: false,
      image: '/images/blogs/blog4.jpg',
      tag: 'Safety & Fraud',
    },
    {
      id: 5,
      slug: 'how-to-deregister-car-parivahan-vahan-portal',
      title: 'Step-by-Step Guide: Complete Vehicle Deregistration on the Parivahan Portal',
      excerpt: 'A clear guide explaining Form 35, NOC requirements, chassis verification, and how CarCrush24 automates the official RTO cancellation so you never have to visit an RTO office.',
      category: 'Scrappage Guides',
      readTime: '7 min read',
      date: 'Aug 21, 2026',
      featured: false,
      image: '/images/blogs/blog6.jpg',
      tag: 'RTO Guide',
    },
    {
      id: 6,
      slug: 'environmental-impact-automotive-steel-recycling',
      title: 'Behind the Industrial Shredder: How CarCrush24 Recycles 90%+ of Automotive Steel',
      excerpt: 'Explore our scientific 4-stage depollution protocol that prevents hazardous freon gas, battery acids, and engine fluids from contaminating North India’s groundwater.',
      category: 'Eco Impact',
      readTime: '4 min read',
      date: 'Aug 14, 2026',
      featured: false,
      image: '/images/blogs/blog5.jpg',
      tag: 'Circularity',
    },
    {
      id: 7,
      slug: 'commercial-fleet-scrappage-mandates-2026',
      title: 'Commercial Fleet Scrappage Mandates: What Truck, Bus & Taxi Operators Must Know',
      excerpt: 'Government policies now require automated fitness testing and mandatory scrappage for 15+ year commercial fleets. Discover how fleet managers can claim maximum scrap value.',
      category: 'Policy & Rules',
      readTime: '6 min read',
      date: 'Aug 08, 2026',
      featured: false,
      image: '/images/blogs/blog7.jpg',
      tag: 'Fleet Solutions',
    },
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogs.find((b) => b.featured) || blogs[0];

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FBFDFB]">
      {/* Floating Pill Navbar */}
      <Navbar />

      <main className="flex-1 flex flex-col pt-24 sm:pt-28">

        {/* ================= HERO HEADER ================= */}
        <section className="relative py-12 sm:py-16 overflow-hidden">
          {/* Subtle Ambient Background Wash */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
            <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-[#6FCF3C]/8 blur-3xl" />
            <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-[#188A38]/5 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionHeader
              as="h1"
              eyebrow="AUTOMOTIVE INSIGHTS &amp; POLICY GUIDES"
              title="CarCrush24 Knowledge Hub:"
              highlight="Guides, Policies &amp; Green Mobility."
              description="Stay ahead with verified insights on India’s vehicle scrappage laws, road-tax rebates, RTO de-registration tutorials, and sustainable circular recycling."
              align="center"
              titleClassName="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#111827] tracking-tight leading-[1.14] max-w-4xl mx-auto"
            />

            {/* Search & Filter Container */}
            <div className="mt-8 max-w-xl mx-auto">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search policy guides, tax tips, RTO rules..."
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-[#D9E2DA] focus:border-[#188A38] focus:outline-none text-xs sm:text-sm text-[#111827] placeholder-[#9CA3AF] shadow-xs transition-all"
                />
                <svg
                  className="w-5 h-5 text-gray-400 absolute left-4 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${selectedCategory === cat
                      ? 'bg-[#188A38] text-white shadow-xs'
                      : 'bg-white border border-[#E2E8F0] text-[#4B5563] hover:border-[#188A38]/50 hover:text-[#188A38]'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </section>


        {/* ================= FEATURED POST SPOTLIGHT ================= */}
        {selectedCategory === 'All' && !searchQuery && (
          <section className="relative pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="rounded-3xl bg-[#09120B] border-2 border-[#2EE060]/50 p-6 sm:p-10 shadow-[0_0_35px_rgba(46,224,96,0.12)] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#2EE060]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#188A38]/40 border border-[#2EE060]/50 text-[#2EE060] text-[11px] font-extrabold uppercase tracking-wider">
                      ★ Featured Master Guide
                    </span>
                    <span className="text-xs text-gray-400">
                      {featuredPost.date} • {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug mb-3">
                    <Link href={`/blogs/${featuredPost.slug}`} className="hover:text-[#2EE060] transition-colors">
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-[13.5px] text-gray-300 leading-relaxed max-w-2xl mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-white/10">
                    <span className="text-xs text-gray-400 font-medium">
                      Category: <span className="text-[#2EE060] font-bold">{featuredPost.category}</span>
                    </span>

                    <div className="flex items-center gap-2.5 flex-wrap">
                      <Link
                        href={`/blogs/${featuredPost.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all border border-white/20"
                      >
                        <span>Read Full Guide</span>
                        <span>→</span>
                      </Link>
                      <Link
                        href="/quote"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2EE060] hover:bg-[#25b54e] text-[#09120B] font-extrabold text-xs transition-all shadow-sm"
                      >
                        <span>Get Instant Scrappage Quote</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative w-full h-56 sm:h-72 lg:h-80 rounded-2xl overflow-hidden border border-white/15 shadow-md">
                  <Link href={`/blogs/${featuredPost.slug}`} className="block relative w-full h-full">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      priority
                    />
                  </Link>
                  <div className="absolute top-3 right-3 z-10 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-xs text-[#2EE060] text-[10.5px] font-black uppercase tracking-wider border border-white/10">
                      {featuredPost.tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}


        {/* ================= ARTICLES GRID ================= */}
        <section className="relative py-10 sm:py-14 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8ECE4]">
              <h3 className="text-lg sm:text-xl font-black text-[#111827] tracking-tight">
                {selectedCategory === 'All' ? 'Latest Publications' : `${selectedCategory} Articles`}
                <span className="ml-2 text-xs font-bold text-[#188A38] bg-[#E8F8ED] px-2.5 py-0.5 rounded-full">
                  {filteredBlogs.length}
                </span>
              </h3>
              <span className="text-xs text-[#6B7280]">
                Updated weekly with verified RTO updates
              </span>
            </div>

            {filteredBlogs.length === 0 ? (
              <div className="py-16 text-center">
                <span className="text-4xl">🔍</span>
                <h4 className="text-base font-bold text-[#111827] mt-3">No articles match your search</h4>
                <p className="text-xs text-[#6B7280] mt-1">Try searching for &quot;Parivahan&quot;, &quot;Tax&quot;, or &quot;Chassis&quot;.</p>
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  className="mt-4 px-4 py-2 rounded-full bg-[#188A38] text-white text-xs font-bold"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredBlogs.map((blog) => (
                  <article
                    key={blog.id}
                    className="rounded-3xl bg-white border border-[#E5EAE5] p-5 sm:p-6 flex flex-col justify-between hover:shadow-xl hover:border-[#188A38]/50 transition-all duration-300 group overflow-hidden"
                  >
                    <div>
                      {/* Blog Cover Image */}
                      <Link href={`/blogs/${blog.slug}`} className="block relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden mb-4 bg-gray-100">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Floating Category Badge */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#09120B] bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-xs border border-white/40">
                            {blog.category}
                          </span>
                        </div>
                        {/* Floating Read Time */}
                        <div className="absolute bottom-3 right-3 z-10">
                          <span className="text-[10px] font-bold text-white bg-black/65 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                            {blog.readTime}
                          </span>
                        </div>
                      </Link>

                      {/* Title */}
                      <Link href={`/blogs/${blog.slug}`}>
                        <h4 className="text-base sm:text-[17px] font-black text-[#111827] tracking-tight group-hover:text-[#188A38] transition-colors mb-2 leading-snug line-clamp-2">
                          {blog.title}
                        </h4>
                      </Link>

                      {/* Excerpt */}
                      <p className="text-xs text-[#4B5563] leading-relaxed mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>
                    </div>

                    {/* Card Footer (Author Tag Removed) */}
                    <div className="pt-3.5 border-t border-[#E8ECE4] flex items-center justify-between text-xs">
                      <span className="text-[11.5px] text-[#9CA3AF] font-medium">
                        {blog.date}
                      </span>
                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="text-[11.5px] font-bold text-[#188A38] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                      >
                        Read Guide <span>→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}

          </div>
        </section>


        {/* ================= EXPERT SCRAP ADVISORY CALLOUT ================= */}
        <section className="relative py-12 sm:py-16 bg-[#F8FAF8] overflow-hidden border-t border-[#E8ECE4]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-white border border-[#D9E2DA] p-6 sm:p-10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="max-w-xl text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F8ED] text-[#188A38] text-xs font-bold uppercase tracking-wider mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#188A38] animate-pulse" />
                  Free RTO Scrappage Advisory Desk
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight mb-2">
                  Unsure About Your Car’s Scrappage Status?
                </h3>
                <p className="text-xs sm:text-[13px] text-[#5B6660] leading-relaxed">
                  Call our certified compliance specialists for free guidance on NOCs, lost registration certificates, pending challans, and claiming your Certificate of Deposit.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto flex-shrink-0">
                <a
                  href="tel:1800227278"
                  className="px-5 py-3 rounded-full bg-[#188A38] hover:bg-[#157831] text-white text-xs font-bold text-center transition-all shadow-xs"
                >
                  1800-22-CRUSH
                </a>
                <Link
                  href="/quote"
                  className="px-5 py-3 rounded-full bg-white border border-[#D9E2DA] hover:border-[#188A38] text-[#111827] hover:text-[#188A38] text-xs font-bold text-center transition-all"
                >
                  Check Car Scrap Value
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
