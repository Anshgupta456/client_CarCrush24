import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SectionHeader from '../../../components/SectionHeader';
import { blogs, getBlogBySlug } from '../../../data/blogsData';

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: 'Blog Not Found | CarCrush24',
      description: 'The requested blog article could not be found.',
    };
  }

  return {
    title: `${blog.title} | CarCrush24 Knowledge Hub`,
    description: blog.excerpt,
  };
}

export default async function SingleBlogPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FBFDFB]">
      {/* Floating Pill Navbar */}
      <Navbar />

      <main className="flex-1 flex flex-col pt-24 sm:pt-28">

        {/* ================= BREADCRUMB & HEADER ================= */}
        <section className="relative py-8 sm:py-12 bg-white border-b border-[#E8ECE4] overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#6FCF3C]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Links */}
            <nav className="flex items-center gap-2 text-xs text-[#6B7280] mb-4 sm:mb-6 font-medium">
              <Link href="/" className="hover:text-[#188A38] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/blogs" className="hover:text-[#188A38] transition-colors">
                Knowledge Hub
              </Link>
              <span>/</span>
              <span className="text-[#188A38] font-bold truncate max-w-xs sm:max-w-md">
                {blog.category}
              </span>
            </nav>

            {/* Meta Tags Row */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#E8F8ED] text-[#188A38] border border-[#D1F2D9]">
                {blog.category}
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#F3F4F6] text-[#4B5563]">
                {blog.tag}
              </span>
              <span className="text-xs text-[#6B7280]">
                {blog.date} • {blog.readTime}
              </span>
            </div>

            {/* Article Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-[42px] font-black text-[#111827] tracking-tight leading-[1.18] mb-6">
              {blog.title}
            </h1>

            {/* Excerpt / Lead Paragraph */}
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-3xl border-l-4 border-[#6FCF3C] pl-4 sm:pl-5 py-1 italic bg-[#F8FAF8] rounded-r-2xl">
              {blog.excerpt}
            </p>
          </div>
        </section>


        {/* ================= ARTICLE MAIN CONTENT & SIDEBAR ================= */}
        <section className="relative py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

              {/* LEFT: MAIN ARTICLE CONTENT (8 COLS) */}
              <article className="lg:col-span-8 flex flex-col">

                {/* Main Hero Thumbnail Image */}
                <div className="relative w-full h-64 sm:h-96 lg:h-[420px] rounded-3xl overflow-hidden mb-10 shadow-md border border-[#E5EAE5] bg-gray-100">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-xs text-white text-[11px] font-bold">
                      {blog.tag}
                    </span>
                  </div>
                </div>

                {/* Rendered Sections */}
                <div className="space-y-10 sm:space-y-12">
                  {blog.sections.map((sec) => (
                    <div key={sec.id} id={sec.id} className="scroll-mt-32">
                      
                      {/* Section Heading */}
                      {sec.heading && (
                        <h2 className="text-xl sm:text-2xl lg:text-[26px] font-black text-[#111827] tracking-tight mb-4 flex items-center gap-3">
                          <span className="w-2.5 h-6 bg-[#6FCF3C] rounded-full flex-shrink-0" />
                          <span>{sec.heading}</span>
                        </h2>
                      )}

                      {/* Paragraphs */}
                      {sec.paragraphs && sec.paragraphs.length > 0 && (
                        <div className="space-y-3.5 text-sm sm:text-[15.5px] text-[#374151] leading-relaxed">
                          {sec.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      )}

                      {/* Callout / Alert Box */}
                      {sec.callout && (
                        <div
                          className={`mt-5 p-5 rounded-2xl border flex items-start gap-3.5 ${
                            sec.callout.type === 'warning'
                              ? 'bg-[#FEF3F2] border-[#FECDCA] text-[#B42318]'
                              : 'bg-[#ECFDF3] border-[#A6F4C5] text-[#027A48]'
                          }`}
                        >
                          <span className="text-xl flex-shrink-0 mt-0.5">
                            {sec.callout.type === 'warning' ? '⚠️' : '💡'}
                          </span>
                          <div>
                            <h4 className="font-black text-xs sm:text-sm tracking-tight mb-1">
                              {sec.callout.title}
                            </h4>
                            <p className="text-xs sm:text-[13px] leading-relaxed opacity-95">
                              {sec.callout.message}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Bulleted / Checked List */}
                      {sec.list && sec.list.length > 0 && (
                        <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-[#374151]">
                          {sec.list.map((item, lIdx) => (
                            <li key={lIdx} className="flex items-start gap-2.5 bg-[#FAFDFB] p-3 rounded-xl border border-[#E9EFE9]">
                              <span className="w-5 h-5 rounded-full bg-[#E8F8ED] text-[#188A38] flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">
                                ✓
                              </span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Data & Compliance Table */}
                      {sec.table && (
                        <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E2E8F0] shadow-2xs">
                          <table className="w-full text-left text-xs sm:text-[13px]">
                            <thead className="bg-[#F8FAF8] border-b border-[#E2E8F0] text-[#111827] font-black uppercase tracking-wider text-[11px]">
                              <tr>
                                {sec.table.headers.map((h, hIdx) => (
                                  <th key={hIdx} className="p-3 sm:p-4 whitespace-nowrap">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#E2E8F0] text-[#374151]">
                              {sec.table.rows.map((row, rIdx) => (
                                <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-[#FAFCFA] hover:bg-[#F2F7F2]'}>
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className={`p-3 sm:p-4 leading-relaxed ${cIdx === 0 ? 'font-bold text-[#111827]' : ''}`}>
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Gallery Images */}
                      {sec.gallery && sec.gallery.length > 0 && (
                        <div className="mt-8">
                          <div className={`grid grid-cols-1 ${sec.gallery.length > 1 ? 'sm:grid-cols-2' : ''} gap-4 sm:gap-6`}>
                            {sec.gallery.map((imgItem, gIdx) => (
                              <figure key={gIdx} className="flex flex-col">
                                <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden shadow-xs border border-[#E5EAE5] bg-gray-100 group">
                                  <Image
                                    src={imgItem.url}
                                    alt={imgItem.caption}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                                <figcaption className="mt-2 text-[11px] sm:text-xs text-[#6B7280] italic leading-tight">
                                  {imgItem.caption}
                                </figcaption>
                              </figure>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* In-Content CTA Box */}
                      {sec.inContentCta && (
                        <div className="my-8 sm:my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0F1F13] to-[#08130A] text-white border-2 border-[#6FCF3C]/40 shadow-[0_8px_30px_rgba(111,207,60,0.12)] relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-[#6FCF3C]/10 rounded-full blur-2xl pointer-events-none" />
                          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="max-w-xl text-center sm:text-left">
                              <span className="text-[10.5px] font-black uppercase tracking-[0.2em] text-[#6FCF3C] mb-1 block">
                                INSTANT SCRAP QUOTE
                              </span>
                              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                                {sec.inContentCta.title}
                              </h3>
                              <p className="mt-1.5 text-xs text-gray-300 leading-relaxed">
                                {sec.inContentCta.subtitle}
                              </p>
                            </div>

                            <Link
                              href={sec.inContentCta.link || '/quote'}
                              className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#6FCF3C] hover:bg-[#5ec22b] text-[#08130a] font-black text-xs sm:text-sm tracking-tight transition-all shadow-md hover:scale-105 active:scale-95 whitespace-nowrap"
                            >
                              <span>{sec.inContentCta.buttonText}</span>
                              <span>→</span>
                            </Link>
                          </div>
                        </div>
                      )}

                    </div>
                  ))}
                </div>

                {/* Back to Blogs link */}
                <div className="mt-12 pt-6 border-t border-[#E8ECE4] flex items-center justify-between">
                  <Link
                    href="/blogs"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#188A38] hover:underline"
                  >
                    <span>←</span>
                    <span>Back to all Knowledge Hub articles</span>
                  </Link>

                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-[#111827] hover:text-[#188A38] transition-colors"
                  >
                    <span>Ready to scrap? Get an instant quote</span>
                    <span>→</span>
                  </Link>
                </div>

              </article>


              {/* RIGHT: STICKY SIDEBAR (4 COLS) */}
              <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">

                {/* Quick Valuation CTA Card */}
                <div className="rounded-3xl bg-[#09120B] border-2 border-[#2EE060]/50 p-6 sm:p-7 shadow-[0_0_35px_rgba(46,224,96,0.12)] text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#2EE060]/15 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10">
                    <span className="px-2.5 py-1 rounded-full bg-[#188A38]/40 border border-[#2EE060]/40 text-[#2EE060] text-[10px] font-extrabold uppercase tracking-wider mb-3 inline-block">
                      ⚡ Free Online Valuation
                    </span>

                    <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mb-2">
                      Get Real Value For Your Old Vehicle
                    </h3>

                    <p className="text-xs text-gray-300 leading-relaxed mb-4">
                      Get fair commodity-indexed payouts, free doorstep flatbed towing, and official Parivahan deregistration.
                    </p>

                    <div className="space-y-2 mb-6 text-[11.5px] text-gray-300">
                      <div className="flex items-center gap-2">
                        <span className="text-[#2EE060]">✓</span> 100% Legal MoRTH RVSF Certified
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#2EE060]">✓</span> Valid Certificate of Deposit (CoD)
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#2EE060]">✓</span> Zero Towing Charges Across 7 States
                      </div>
                    </div>

                    <Link
                      href="/quote"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#6FCF3C] to-[#22C55E] text-[#070D09] font-black text-xs sm:text-sm tracking-tight hover:scale-105 active:scale-95 transition-all shadow-md"
                    >
                      <span>Calculate Scrap Value Now</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Table of Contents Box */}
                {blog.tableOfContents && blog.tableOfContents.length > 0 && (
                  <div className="rounded-3xl bg-white border border-[#E2E8F0] p-6 shadow-xs">
                    <h4 className="text-xs sm:text-[13px] font-black text-[#111827] uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span>📑</span>
                      <span>Table of Contents</span>
                    </h4>
                    <nav className="space-y-2 text-xs">
                      {blog.tableOfContents.map((toc) => (
                        <a
                          key={toc.id}
                          href={`#${toc.id}`}
                          className="block text-[#4B5563] hover:text-[#188A38] hover:translate-x-1 transition-all py-1 border-b border-gray-100 last:border-none font-medium"
                        >
                          {toc.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Direct Toll-Free Helpline Support */}
                <div className="rounded-2xl bg-[#F8FAF8] border border-[#E2E8F0] p-5 text-center">
                  <span className="text-2xl block mb-1.5">📞</span>
                  <h4 className="text-xs sm:text-[13px] font-black text-[#111827]">
                    Need Immediate Advice?
                  </h4>
                  <p className="text-[11px] text-[#6B7280] mt-1 mb-3">
                    Speak directly with an authorized scrappage compliance specialist.
                  </p>
                  <a
                    href="tel:18002022424"
                    className="inline-block w-full py-2 px-4 rounded-full bg-white border border-[#D9E2DA] hover:border-[#188A38] text-[#111827] hover:text-[#188A38] text-xs font-bold transition-all shadow-2xs"
                  >
                    Call 1800-202-2424 (Toll-Free)
                  </a>
                </div>

              </aside>

            </div>
          </div>
        </section>


        {/* ================= RELATED ARTICLES GRID ================= */}
        {relatedBlogs.length > 0 && (
          <section className="relative py-12 sm:py-16 bg-white border-t border-[#E8ECE4] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <SectionHeader
                eyebrow="CONTINUE READING"
                title="Related Guides &"
                highlight="Automotive Insights."
                description="Explore more verified articles on India’s scrappage policy, road-tax incentives, and eco-friendly vehicle recycling."
                align="center"
                className="mb-10 max-w-3xl"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {relatedBlogs.map((rel) => (
                  <article
                    key={rel.id}
                    className="rounded-3xl bg-[#FAFDFB] border border-[#E5EAE5] p-5 sm:p-6 flex flex-col justify-between hover:shadow-xl hover:border-[#188A38]/50 transition-all duration-300 group overflow-hidden"
                  >
                    <div>
                      <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 bg-gray-100">
                        <Image
                          src={rel.image}
                          alt={rel.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 z-10">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#09120B] bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-xs border border-white/40">
                            {rel.category}
                          </span>
                        </div>
                      </div>

                      <h4 className="text-sm sm:text-base font-black text-[#111827] tracking-tight group-hover:text-[#188A38] transition-colors mb-2 leading-snug line-clamp-2">
                        {rel.title}
                      </h4>

                      <p className="text-xs text-[#4B5563] leading-relaxed mb-4 line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </div>

                    <div className="pt-3.5 border-t border-[#E8ECE4] flex items-center justify-between text-xs">
                      <span className="text-[11.5px] text-[#9CA3AF] font-medium">
                        {rel.date}
                      </span>
                      <Link
                        href={`/blogs/${rel.slug}`}
                        className="text-[11.5px] font-bold text-[#188A38] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                      >
                        Read Guide <span>→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

            </div>
          </section>
        )}


        {/* ================= CLOSING CTA BANNER (REDIRECT TO QUOTE) ================= */}
        <section className="relative py-14 sm:py-20 bg-[#FBFDFB] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl sm:rounded-[36px] bg-[#0A160D] border-2 border-[#1E3B23] p-8 sm:p-12 lg:p-14 shadow-[0_16px_50px_rgba(0,0,0,0.12)] text-white overflow-hidden">
              
              <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#6FCF3C]/12 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-[#188A38]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto text-center">
                
                <div className="inline-flex items-center justify-center gap-3 mb-3 sm:mb-4">
                  <span className="w-8 sm:w-12 h-[2px] bg-[#6FCF3C]" />
                  <span className="text-[#6FCF3C] text-xs sm:text-[13px] font-black tracking-[0.25em] uppercase">
                    READY TO RETIRE YOUR VEHICLE?
                  </span>
                  <span className="w-8 sm:w-12 h-[2px] bg-[#6FCF3C]" />
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-white tracking-tight leading-[1.15]">
                  Turn Your Old Vehicle Into Value.{' '}
                  <span className="block text-[#6FCF3C] mt-1.5 sm:mt-2">
                    100% Safe, Legal &amp; Guaranteed Indemnity.
                  </span>
                </h2>

                <p className="mt-4 sm:mt-5 text-gray-300 text-xs sm:text-[14px] leading-relaxed max-w-2xl mx-auto font-normal">
                  Calculate your vehicle scrap value in under 2 minutes. Free doorstep towing, on-spot bank transfer, and official Certificate of Deposit (CoD) issued directly via MoRTH databases.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/quote"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6FCF3C] to-[#22C55E] text-[#070D09] font-black text-sm sm:text-base tracking-tight hover:scale-105 active:scale-95 transition-all shadow-[0_4px_24px_rgba(111,207,60,0.35)] cursor-pointer"
                  >
                    <span>Get Your Free Scrap Quote Now</span>
                    <span className="text-lg leading-none">→</span>
                  </Link>

                  <a
                    href="tel:18002022424"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-sm sm:text-base tracking-tight transition-all cursor-pointer"
                  >
                    <span>📞 1800-202-2424</span>
                  </a>
                </div>

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
