import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'About Us | CarCrush24 - India’s Premier Vehicle Recycling Facility',
  description: 'Learn about CarCrush24, North India’s government-authorized Registered Vehicle Scrapping Facility (RVSF). Discover our mission, vision, core values, and environmental impact.',
};

export default function AboutPage() {
  const impacts = [
    {
      metric: '15,000+',
      label: 'Vehicles Recycled',
      detail: 'Cars, two-wheelers & commercial fleets safely retired with zero environmental damage.',
      icon: (
        <svg className="w-6 h-6 text-[#188A38]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 3c-.1.2-.1.5-.1.7V16c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      ),
    },
    {
      metric: '85,000+ T',
      label: 'CO₂ Emissions Prevented',
      detail: 'Direct carbon reduction achieved through automated green dismantling & recycling.',
      icon: (
        <svg className="w-6 h-6 text-[#188A38]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      ),
    },
    {
      metric: '90%+',
      label: 'Material Recovery Rate',
      detail: 'High-grade steel, aluminium, rubber, and glass reclaimed for the circular economy.',
      icon: (
        <svg className="w-6 h-6 text-[#188A38]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
          <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
          <path d="m14 16 3 3 3-3" />
          <path d="M8.294 4.5h7.412a1.83 1.83 0 0 1 1.57.882 1.785 1.785 0 0 1 .004 1.783L13.8 13.5" />
          <path d="m10 8-3-3.5L10 1" />
        </svg>
      ),
    },
    {
      metric: '₹50+ Cr',
      label: 'Scrap Value Delivered',
      detail: 'Fair, transparent, direct-to-bank compensation paid out to vehicle owners on the spot.',
      icon: (
        <svg className="w-6 h-6 text-[#188A38]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 3h12" />
          <path d="M6 8h12" />
          <path d="m6 13 8.5 8" />
          <path d="M6 13h3a4 4 0 0 0 0-8" />
        </svg>
      ),
    },
  ];

  const leftValues = [
    {
      number: '01',
      title: 'Uncompromising Transparency',
      desc: 'No arbitrary deductions, surprise towing fees, or shadowy middlemen. Every quote is backed by genuine scrap metal metrics and vehicle inspection data.',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#16A34A]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66 1-2.3c.42.19.88.3 1.29.3 11 0 14-17 14-17-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Certified Legal Authenticity',
      desc: 'Direct integration with MoRTH and Parivahan Vahan databases guarantees legitimate Certificate of Deposit (CoD) and CVS issuance for total legal indemnity.',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#16A34A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Industrial Circularity',
      desc: 'We feed up to 90% of recovered scrap steel, copper, and secondary materials back into domestic industrial production, reducing primary mineral mining.',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#16A34A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
  ];

  const rightValues = [
    {
      number: '02',
      title: 'Eco-First Depollution',
      desc: 'Before any metal is shredded, our facility safely purges engine oils, battery acids, coolant fluids, and Freon AC gases with zero ground leakage.',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#16A34A]" viewBox="0 0 512 512" fill="currentColor">
          <path d="M410.6 302.3c-7.9 0-15.6 3.1-21.2 8.7l-4.5 4.5-12.7-22-24.2 14 15.6 27c2.8 4.8 7.3 8.3 12.6 9.8s11 .6 15.8-2.2l14.7-8.5c5.6-3.2 12.4-3.2 18 0l21.3 12.3c5.6 3.2 9 9.2 9 15.6s-3.4 12.4-9 15.6l-50 28.9c-5.6 3.2-12.4 3.2-18 0l-50-28.9c-5.6-3.2-9-9.2-9-15.6 0-3.3.9-6.5 2.5-9.3l-24.2-14c-4.3 7.5-6.6 16-6.6 24.7 0 16.7 8.9 32.2 23.4 40.5l50 28.9c7.2 4.2 15.3 6.3 23.4 6.3s16.1-2.1 23.4-6.3l50-28.9c14.5-8.4 23.4-23.8 23.4-40.5s-8.9-32.2-23.4-40.5l-21.3-12.3c-7.3-4.2-15.3-6.4-23.4-6.4zm-209.2-94.6l-14.7 8.5c-5.6 3.2-9 9.2-9 15.6l-.1 24.6c0 6.4-3.4 12.4-9 15.6s-12.4 3.2-18 0l-50-28.9c-5.6-3.2-9-9.2-9-15.6s3.4-12.4 9-15.6l50-28.9c5.6-3.2 12.4-3.2 18 0 2.8 1.6 5.2 4 6.8 6.8l24.2-14c-4.3-7.5-10.7-13.6-18.4-18l-50-28.9c-14.5-8.4-32.3-8.4-46.8 0s-23.4 23.8-23.4 40.5 8.9 32.2 23.4 40.5l50 28.9c7.2 4.2 15.3 6.3 23.4 6.3 3.9 0 7.9-.5 11.7-1.6l-7.2 27.1 27 7.2 9.5-35.4c1.7-6.3.3-13.1-3.7-18.4s-10.3-8.4-16.9-8.4h-17.1l.1-14.5 12.7-7.3 14.7-8.5c7.2-4.2 11.7-11.8 11.7-20.2s-4.4-16.1-11.7-20.2zM279.4 66.8c-14.5-8.4-32.3-8.4-46.8 0l-21.3 12.3c-7.2 4.2-11.7 11.8-11.7 20.2s4.4 16.1 11.7 20.2l14.7 8.5c5.6 3.2 9 9.2 9 15.6s-3.4 12.4-9 15.6l-21.3 12.3c-5.6 3.2-12.4 3.2-18 0s-9-9.2-9-15.6l.1-57.7c0-6.4 3.4-12.4 9-15.6l50-28.9c14.5-8.4 32.3-8.4 46.8 0l50 28.9c7.2 4.2 12.8 10.2 16.6 17.5l-24.2 14c-2.3-4.4-5.8-8-10-10.4l-50-28.9zm-2.4 139.1l-11.4 31.3 26.2 9.5 13.9-38.1c2.5-6.8 1.4-14.4-2.9-20.2s-11.2-9.1-18.4-8.8l-29.2 1.3 7.3 12.7 14.5 25.1z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Customer-First Convenience',
      desc: 'Free doorstep pickup across 7 North Indian States and UTs, on-spot digital payment settlement, and complete RTO deregistrations handled end-to-end.',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#16A34A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-1.3-1.3a1 1 0 0 0-1.4 0L14 14" />
          <path d="m13 14 2.5-2.5a1 1 0 0 0 0-1.4l-1.3-1.3a1 1 0 0 0-1.4 0L9.5 12" />
          <path d="M9 13.5 4 8.5a2.12 2.12 0 0 1 0-3 2.12 2.12 0 0 1 3 0l3 3" />
          <path d="M15 10.5 18.5 7a2.12 2.12 0 0 1 3 0 2.12 2.12 0 0 1 0 3L16 15.5" />
        </svg>
      ),
    },
    {
      number: '06',
      title: 'Regulatory Excellence',
      desc: 'Fully compliant with the Motor Vehicles (Vehicle Scrapping Facility) Rules, 2021, and authorized as a Registered Vehicle Scrapping Facility (RVSF).',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#16A34A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7" />
          <path d="M14 2v6h6" />
          <path d="M14 2l6 6" />
          <path d="M8 10h4" />
          <path d="M8 14h3" />
          <path d="M17.5 22s4.5-2 4.5-5.5V13l-4.5-1.5-4.5 1.5v3.5c0 3.5 4.5 5.5 4.5 5.5z" />
          <path d="m15.5 16.5 1.5 1.5 3-3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FBFDFB]">
      {/* Floating Pill Navbar */}
      <Navbar />

      <main className="flex-1 flex flex-col pt-24 sm:pt-28">

        {/* ================= HERO & ABOUT US PARAGRAPH ================= */}
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
          {/* Subtle Ambient Background Wash */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
            <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-[#6FCF3C]/8 blur-3xl" />
            <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-[#188A38]/5 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Left Column: Narrative & Accreditation */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                {/* Eyebrow badge with decorative green lines */}
                <div className="inline-flex items-center gap-3 mb-3 sm:mb-4">
                  <span className="w-8 sm:w-12 h-[2px] bg-[#6FCF3C]" />
                  <span className="text-[#188A38] text-xs sm:text-[13px] font-black tracking-[0.25em] uppercase">
                    ABOUT CARCRUSH24
                  </span>
                  <span className="w-8 sm:w-12 h-[2px] bg-[#6FCF3C]" />
                </div>

                {/* Main Headline */}
                <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#131A15] tracking-tight leading-[1.16]">
                  Pioneering Sustainable Mobility &amp;{' '}
                  <span className="block text-[#6FCF3C] mt-1 sm:mt-1.5">
                    Responsible Vehicle Recycling.
                  </span>
                </h1>

                {/* About Us Detailed Story */}
                <div className="mt-5 space-y-3.5 text-[#4B5563] text-xs sm:text-[13.5px] leading-relaxed">
                  <p>
                    <strong className="text-[#111827] font-bold">CarCrush24</strong> was founded with a singular, vital mission: to transform India&apos;s unorganized automotive scrap landscape into a modern, transparent, and environmentally certified circular ecosystem.
                  </p>
                  <p>
                    For decades, retiring an end-of-life vehicle meant navigating shady local scrap yards, risking illegal resale of chassis numbers, facing delayed RTO deregistrations, and watching toxic vehicle pollutants seep into local groundwater.
                  </p>
                  <p>
                    As an authorized <strong className="text-[#188A38]">Registered Vehicle Scrapping Facility (RVSF)</strong> operating under the Government of India’s Vehicle Scrappage Policy, CarCrush24 provides vehicle owners with an ethical, hassle-free alternative. We combine automated depollution technology, instantaneous Parivahan database verification, fair market payouts, and legally certified Certificate of Deposit (CoD) &amp; CVS documentation.
                  </p>
                </div>

                {/* Government Trust Badges */}
                <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                  <div className="p-3 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-xl bg-[#E8F8ED] text-[#188A38] flex items-center justify-center font-black text-xs flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-[11.5px] sm:text-xs font-bold text-[#111827] leading-tight">
                      Govt. Approved RVSF
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-xl bg-[#E8F8ED] text-[#188A38] flex items-center justify-center font-black text-xs flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-[11.5px] sm:text-xs font-bold text-[#111827] leading-tight">
                      Valid CoD &amp; CVS
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-2.5 col-span-2 sm:col-span-1">
                    <span className="w-7 h-7 rounded-xl bg-[#E8F8ED] text-[#188A38] flex items-center justify-center font-black text-xs flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-[11.5px] sm:text-xs font-bold text-[#111827] leading-tight">
                      Zero Middlemen
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Facility / Trust Showcase Card */}
              <div className="lg:col-span-5 w-full flex justify-center">
                <div className="relative w-full max-w-md rounded-3xl bg-[#09120B] border-2 border-[#2EE060]/60 p-6 sm:p-8 shadow-[0_0_40px_rgba(46,224,96,0.15)] text-white overflow-hidden">
                  {/* Internal Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#2EE060]/15 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#188A38]/30 border border-[#2EE060]/40 text-[#2EE060] text-[11px] font-bold uppercase tracking-wider mb-4">
                      <span className="w-2 h-2 rounded-full bg-[#2EE060] animate-pulse" />
                      Certified Scrappage Facility
                    </div>

                    <h3 className="text-xl sm:text-[22px] font-black text-white tracking-tight mb-2.5">
                      Clean Scrappage, Maximum Value
                    </h3>

                    <p className="text-[11.5px] sm:text-xs text-gray-300 leading-relaxed mb-5 font-normal">
                      Every vehicle processed at CarCrush24 undergoes a scientific 4-stage depollution cycle—recovering refrigerants, batteries, hydraulic oils, and rubber before industrial metal shearing.
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-white/10 text-[11px] sm:text-xs text-gray-300">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">MoRTH Compliance</span>
                        <span className="font-bold text-[#2EE060]">100% Certified</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">RTO De-Registration</span>
                        <span className="font-bold text-[#2EE060]">Full Legal Support</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Payout Speed</span>
                        <span className="font-bold text-[#2EE060]">Instant Bank Transfer</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Doorstep Pickup</span>
                        <span className="font-bold text-[#2EE060]">100% Free across North India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ================= IMPACT CREATED ================= */}
        <section className="relative py-10 sm:py-14 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              {/* Eyebrow badge with decorative green lines */}
              <div className="inline-flex items-center justify-center gap-3 mb-3 sm:mb-4">
                <span className="w-8 sm:w-12 h-[2px] bg-[#6FCF3C]" />
                <span className="text-[#188A38] text-xs sm:text-[13px] font-black tracking-[0.25em] uppercase">
                  OUR ENVIRONMENTAL &amp; ECONOMIC IMPACT
                </span>
                <span className="w-8 sm:w-12 h-[2px] bg-[#6FCF3C]" />
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#131A15] tracking-tight leading-tight">
                Real Numbers. Measurable Impact.{' '}
                <span className="block text-[#6FCF3C] mt-1 sm:mt-1.5">
                  A Cleaner Tomorrow.
                </span>
              </h2>
            </div>

            {/* 4 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {impacts.map((item) => (
                <div
                  key={item.label}
                  className="bg-[#F8FAF8] rounded-3xl border border-[#E5EAE5] p-5 sm:p-6 flex flex-col items-start text-left shadow-xs hover:shadow-md hover:border-[#188A38]/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E8F8ED] flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform flex-shrink-0">
                    {item.icon}
                  </div>

                  <span className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight group-hover:text-[#188A38] transition-colors">
                    {item.metric}
                  </span>

                  <h4 className="text-xs sm:text-[13px] font-bold text-[#111827] mt-1 mb-1.5">
                    {item.label}
                  </h4>

                  <p className="text-[11px] sm:text-xs text-[#6B7280] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ================= MISSION & VISION ================= */}
        <section className="relative py-14 sm:py-20 bg-[#FBFDFB] overflow-hidden">
          {/* Subtle Ambient Background Wash */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#188A38]/4 blur-3xl" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[#6FCF3C]/6 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              {/* Eyebrow badge with decorative green lines */}
              <div className="inline-flex items-center justify-center gap-3 mb-3 sm:mb-4">
                <span className="w-8 sm:w-12 h-[2px] bg-[#6FCF3C]" />
                <span className="text-[#188A38] text-xs sm:text-[13px] font-black tracking-[0.25em] uppercase">
                  PURPOSE &amp; DIRECTION
                </span>
                <span className="w-8 sm:w-12 h-[2px] bg-[#6FCF3C]" />
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#111827] tracking-tight leading-[1.15]">
                Driven by Purpose.{' '}
                <span className="block text-[#6FCF3C] mt-1 sm:mt-1.5">
                  Guided by Vision.
                </span>
              </h2>

              {/* Subtitle */}
              <p className="mt-4 sm:mt-5 text-[#5B6660] text-xs sm:text-[14px] leading-relaxed max-w-2xl mx-auto">
                Building India’s most trusted automotive circular infrastructure through scientific depollution, complete legal indemnity, and environmental stewardship.
              </p>
            </div>

            {/* Mission & Vision Side-by-Side Masterclass Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

              {/* 1. Mission Card */}
              <div className="relative rounded-3xl bg-white border border-[#D9E2DA] p-7 sm:p-9 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-[#188A38]/50 transition-all duration-300 group overflow-hidden">
                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Headline & Narrative */}
                  <h3 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight">
                    Our Mission
                  </h3>
                  <span className="text-xs sm:text-[12.5px] font-bold text-[#188A38] uppercase tracking-wider mt-1 mb-3">
                    Zero-Landfill Certified Scrappage
                  </span>

                  <p className="text-xs sm:text-[13.5px] text-[#4B5563] leading-relaxed mb-6 font-normal">
                    To provide every vehicle owner across North India with a safe, transparent, and financially rewarding pathway to retire end-of-life vehicles, while enforcing zero-leakage depollution and circular resource recovery.
                  </p>

                  {/* 3 Structured Pillar Rows */}
                  <div className="space-y-3 mb-6 flex-1">
                    <div className="p-3.5 rounded-2xl bg-[#F8FAF8] border border-[#E9EFE9] flex items-start gap-3 group/item hover:bg-[#F2F7F2] transition-colors">
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs sm:text-[13px] font-bold text-[#111827] mb-0.5">
                          Direct MoRTH &amp; Parivahan Integration
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#6B7280] leading-relaxed">
                          Instant database synchronization guaranteeing legitimate Certificate of Deposit (CoD) &amp; CVS documents for total legal indemnity.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#F8FAF8] border border-[#E9EFE9] flex items-start gap-3 group/item hover:bg-[#F2F7F2] transition-colors">
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs sm:text-[13px] font-bold text-[#111827] mb-0.5">
                          Scientific 4-Stage Depollution
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#6B7280] leading-relaxed">
                          Automated containment of toxic battery acids, AC Freon refrigerants, hydraulic oils, and fluids before industrial shredding.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#F8FAF8] border border-[#E9EFE9] flex items-start gap-3 group/item hover:bg-[#F2F7F2] transition-colors">

                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs sm:text-[13px] font-bold text-[#111827] mb-0.5">
                          Zero-Middleman Direct Valuation
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#6B7280] leading-relaxed">
                          Transparent algorithmic scrap evaluation based on actual metal metrics with free doorstep pickup &amp; instant payment.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Highlight Strip */}
                  <div className="pt-4 border-t border-[#E8ECE4] flex items-center justify-between text-xs">
                    <span className="font-bold text-[#111827]">Core Objective</span>
                    <span className="text-[#188A38] font-bold">100% Legal Indemnity for Owners</span>
                  </div>
                </div>
              </div>

              {/* 2. Vision Card */}
              <div className="relative rounded-3xl bg-white border border-[#D9E2DA] p-7 sm:p-9 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-[#16A34A]/50 transition-all duration-300 group overflow-hidden">
                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Headline & Narrative */}
                  <h3 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight">
                    Our Vision
                  </h3>
                  <span className="text-xs sm:text-[12.5px] font-bold text-[#16A34A] uppercase tracking-wider mt-1 mb-3">
                    India’s Circular Automotive Economy
                  </span>

                  <p className="text-xs sm:text-[13.5px] text-[#4B5563] leading-relaxed mb-6 font-normal">
                    To pioneer India’s closed-loop automotive manufacturing ecosystem by constructing a technology-first network of automated RVSF mega-hubs—returning 90%+ of scrap metals directly into clean domestic industrial production.
                  </p>

                  {/* 3 Structured Pillar Rows */}
                  <div className="space-y-3 mb-6 flex-1">
                    <div className="p-3.5 rounded-2xl bg-[#F8FAF8] border border-[#E9EFE9] flex items-start gap-3 group/item hover:bg-[#F2F7F2] transition-colors">

                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs sm:text-[13px] font-bold text-[#111827] mb-0.5">
                          Closed-Loop Secondary Metal Recovery
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#6B7280] leading-relaxed">
                          Channeling recycled high-purity steel, copper, and aluminum directly back into domestic manufacturing to reduce primary mineral mining.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#F8FAF8] border border-[#E9EFE9] flex items-start gap-3 group/item hover:bg-[#F2F7F2] transition-colors">

                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs sm:text-[13px] font-bold text-[#111827] mb-0.5">
                          Next-Gen EV Battery Decommissioning
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#6B7280] leading-relaxed">
                          Building specialized infrastructure to recycle electric vehicle lithium-ion battery modules with advanced chemical containment.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#F8FAF8] border border-[#E9EFE9] flex items-start gap-3 group/item hover:bg-[#F2F7F2] transition-colors">

                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs sm:text-[13px] font-bold text-[#111827] mb-0.5">
                          Pan-North India Scrappage Network
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#6B7280] leading-relaxed">
                          Scaling connected, automated RVSF mega-centers to process 50,000+ end-of-life vehicles annually by 2028.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Highlight Strip */}
                  <div className="pt-4 border-t border-[#E8ECE4] flex items-center justify-between text-xs">
                    <span className="font-bold text-[#111827]">Impact Target</span>
                    <span className="text-[#16A34A] font-bold">200,000+ Tons CO₂ Prevented</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ================= OUR CORE VALUES ================= */}
        <section className="relative py-14 sm:py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header matching exact user reference design */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              {/* Eyebrow badge with decorative green lines */}
              <div className="inline-flex items-center justify-center gap-3 mb-3 sm:mb-4">
                <span className="w-8 sm:w-12 h-[2px] bg-[#6FCF3C]" />
                <span className="text-[#188A38] text-xs sm:text-[13px] font-black tracking-[0.25em] uppercase">
                  OUR FOUNDATION
                </span>
                <span className="w-8 sm:w-12 h-[2px] bg-[#6FCF3C]" />
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#111827] tracking-tight leading-[1.15]">
                Our Core Values That{' '}
                <span className="block text-[#6FCF3C] mt-1 sm:mt-1.5">
                  Drive Every Scrap.
                </span>
              </h2>

              {/* Subtitle */}
              <p className="mt-4 sm:mt-5 text-[#5B6660] text-xs sm:text-[14px] leading-relaxed max-w-2xl mx-auto">
                We don&apos;t just recycle metal — we uphold values that build a cleaner, safer and more sustainable future.
              </p>
            </div>

            {/* Core Values 3-Column Layout: Left 3 | Center 3D Recycle | Right 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center">

              {/* Left Column: 01, 03, 05 */}
              <div className="lg:col-span-4 space-y-8 sm:space-y-10 lg:space-y-12">
                {leftValues.map((item) => (
                  <div key={item.number} className="flex items-start gap-4 sm:gap-5 group">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EAF7EE] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-2xs">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs sm:text-[13px] font-black text-[#16A34A] tracking-wider">
                          {item.number}
                        </span>
                        <span className="w-5 h-[2px] bg-[#16A34A]" />
                      </div>
                      <h3 className="text-base sm:text-[17px] font-black text-[#111827] tracking-tight mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[12.5px] text-[#6B7280] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Center Column: 3D Recycle Graphic */}
              <div className="lg:col-span-4 flex items-center justify-center py-4 sm:py-6 lg:py-0 order-first lg:order-none">
                <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 flex items-center justify-center">
                  {/* Subtle soft ambient glow behind recycle icon */}
                  <div className="absolute inset-4 bg-[#16A34A]/8 rounded-full blur-2xl pointer-events-none" />
                  <Image
                    src="/images/recycle-3d-transparent.png"
                    alt="CarCrush24 Circular Scrappage Core Values"
                    width={280}
                    height={280}
                    className="relative z-10 object-contain w-auto h-auto max-w-[200px] sm:max-w-[250px] lg:max-w-[280px] drop-shadow-[0_12px_24px_rgba(22,163,74,0.18)] hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Right Column: 02, 04, 06 */}
              <div className="lg:col-span-4 space-y-8 sm:space-y-10 lg:space-y-12">
                {rightValues.map((item) => (
                  <div key={item.number} className="flex items-start gap-4 sm:gap-5 group">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EAF7EE] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-2xs">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs sm:text-[13px] font-black text-[#16A34A] tracking-wider">
                          {item.number}
                        </span>
                        <span className="w-5 h-[2px] bg-[#16A34A]" />
                      </div>
                      <h3 className="text-base sm:text-[17px] font-black text-[#111827] tracking-tight mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[12.5px] text-[#6B7280] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>


        {/* ================= ABOUT US DEDICATED CTA SECTION ================= */}
        <section className="relative py-14 sm:py-20 bg-[#FBFDFB] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl sm:rounded-[36px] bg-[#0A160D] border-2 border-[#1E3B23] p-8 sm:p-12 lg:p-14 shadow-[0_16px_50px_rgba(0,0,0,0.12)] text-white overflow-hidden">

              {/* Internal Ambient Radial Lighting */}
              <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#6FCF3C]/12 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-[#188A38]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-4xl mx-auto text-center">

                {/* Eyebrow badge with decorative green lines */}
                <div className="inline-flex items-center justify-center gap-3 mb-3 sm:mb-4">
                  <span className="w-8 sm:w-12 h-[2px] bg-[#6FCF3C]" />
                  <span className="text-[#6FCF3C] text-xs sm:text-[13px] font-black tracking-[0.25em] uppercase">
                    JOIN THE SUSTAINABLE MOVEMENT
                  </span>
                  <span className="w-8 sm:w-12 h-[2px] bg-[#6FCF3C]" />
                </div>

                {/* Main Headline */}
                <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-black text-white tracking-tight leading-[1.15]">
                  Ready to Retire Your Vehicle Responsibly?{' '}
                  <span className="block text-[#6FCF3C] mt-1.5 sm:mt-2">
                    Get Maximum Value &amp; 100% Legal Indemnity.
                  </span>
                </h2>

                {/* Subtitle */}
                <p className="mt-4 sm:mt-5 text-gray-300 text-xs sm:text-[14px] leading-relaxed max-w-2xl mx-auto font-normal">
                  Say goodbye to unregulated scrap yards and legal liabilities. Partner with North India&apos;s authorized RVSF for transparent algorithmic payouts, free doorstep towing, and instant MoRTH Parivahan deregistration.
                </p>

                {/* 3 Core Value Feature Cards */}
                <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xs hover:border-[#6FCF3C]/40 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-[#6FCF3C]/15 text-[#6FCF3C] flex items-center justify-center font-bold text-sm mb-3">
                      ✓
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      100% Legal Indemnity
                    </h4>
                    <p className="text-[11.5px] text-gray-400 leading-relaxed">
                      Instant Certificate of Deposit (CoD) &amp; CVS documents issued directly via MoRTH databases.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xs hover:border-[#6FCF3C]/40 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-[#6FCF3C]/15 text-[#6FCF3C] flex items-center justify-center font-bold text-sm mb-3">
                      ₹
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      Algorithmic Scrap Pricing
                    </h4>
                    <p className="text-[11.5px] text-gray-400 leading-relaxed">
                      Transparent rates linked to real-time commodity metal markets with instant direct-to-bank payout.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xs hover:border-[#6FCF3C]/40 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-[#6FCF3C]/15 text-[#6FCF3C] flex items-center justify-center font-bold text-sm mb-3">
                      ⚡
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      Free Doorstep Towing
                    </h4>
                    <p className="text-[11.5px] text-gray-400 leading-relaxed">
                      Zero pickup or towing charges across Delhi NCR, Haryana, Punjab, UP, Rajasthan, and HP.
                    </p>
                  </div>
                </div>

                {/* Action Buttons Row */}
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/quote"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6FCF3C] to-[#22C55E] text-[#070D09] font-black text-sm sm:text-base tracking-tight hover:scale-105 active:scale-95 transition-all shadow-[0_4px_24px_rgba(111,207,60,0.35)] cursor-pointer"
                  >
                    <span>Calculate Scrap Value Now</span>
                    <span className="text-lg leading-none">→</span>
                  </Link>

                  <a
                    href="tel:18002022424"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-sm sm:text-base tracking-tight transition-all cursor-pointer"
                  >
                    <svg className="w-4 h-4 text-[#6FCF3C]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <span>Helpline: 1800-202-2424</span>
                  </a>
                </div>

                {/* Micro trust guarantee strip */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] sm:text-xs text-gray-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#6FCF3C]">✓</span> MoRTH Approved RVSF
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#6FCF3C]">✓</span> Zero Hidden Towing Charges
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#6FCF3C]">✓</span> 15,000+ Vehicles Safely Retired
                  </span>
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
