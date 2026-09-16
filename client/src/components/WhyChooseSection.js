'use client';

import React from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

export default function WhyChooseSection() {
  const traditionalPoints = [
    {
      id: 'paperwork',
      title: 'Complex Paperwork',
      desc: 'Multiple intermediaries, lengthy documentation and approvals.',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </svg>
      ),
    },
    {
      id: 'payout',
      title: 'Lower Payout',
      desc: 'Value gets reduced due to multiple middlemen and hidden charges.',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      ),
    },
    {
      id: 'time',
      title: 'Time-Consuming',
      desc: 'Manual processes, follow-ups and unnecessary delays.',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </svg>
      ),
    },
    {
      id: 'risk',
      title: 'Higher Risk',
      desc: 'Chance of fraud, incorrect weight and unclear procedures.',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v6h-2V7zm0 8h2v2h-2v-2z" />
        </svg>
      ),
    },
    {
      id: 'disposal',
      title: 'Irresponsible Disposal',
      desc: 'Often leads to improper handling, causing environmental harm.',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
    },
  ];

  const carcrushPoints = [
    {
      id: 'hassle-free',
      title: 'Hassle-Free Process',
      desc: 'Simple online process with minimal documentation and quick approvals.',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1.79 14.41L8.8 13l1.41-1.41 2 2 4.2-4.2 1.41 1.41-5.61 5.61zM13 9V3.5L18.5 9H13z" />
        </svg>
      ),
    },
    {
      id: 'better-payout',
      title: 'Better Payout',
      desc: 'Fair and competitive rates with no hidden charges.',
      icon: (
        <span className="font-black text-sm leading-none">₹</span>
      ),
    },
    {
      id: 'fast-convenient',
      title: 'Fast & Convenient',
      desc: 'Quick pickup, instant evaluation and timely payment.',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M7 2v11h3v9l7-12h-4l4-8z" />
        </svg>
      ),
    },
    {
      id: 'safe-transparent',
      title: 'Safe & Transparent',
      desc: 'Verified process, accurate weighing and complete transparency.',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
        </svg>
      ),
    },
    {
      id: 'eco-friendly',
      title: 'Eco-Friendly Recycling',
      desc: 'Responsible dismantling and recycling for a cleaner, greener future.',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19H10v-5.65l-1.63 1.63C7.54 13.93 7 12.53 7 11c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.32 2-.87 2.79l1.46 1.46C18.42 14.07 19 12.61 19 11c0-4.97-4.03-9-9-9z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#FBFDFB] overflow-hidden">
      {/* Ambient background wash */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-[#6FCF3C]/6 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-[#188A38]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionHeader
          eyebrow="WHY CHOOSE CARCRUSH24?"
          title="A smarter, safer way to scrap"
          highlight="your vehicle."
          align="center"
          titleClassName="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#111827] tracking-tight"
          descClassName="text-sm sm:text-base text-[#4B5563] mt-2 sm:mt-3"
          className="mb-10 sm:mb-14 max-w-3xl"
        />

        {/* ================= COMPARISON CONTAINER WITH CENTER "VS" BADGE ================= */}
        <div className="relative">

          {/* Center Circular "VS" Badge (Desktop overlay) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden lg:flex w-14 h-14 rounded-full bg-[#188A38] text-white font-black text-sm items-center justify-center shadow-[0_4px_16px_rgba(24,138,56,0.4)] border-4 border-white">
            VS
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

            {/* ================= CARD 1: TRADITIONAL WAY (SAGE / FOREST-TINTED) ================= */}
            <div className="rounded-3xl border-2 border-[#BCD1C2] p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow relative overflow-hidden">
              <div>
                {/* Top Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-[#182C1E] text-white text-[10.5px] font-black uppercase tracking-wider shadow-xs">
                    TRADITIONAL WAY
                  </span>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight">
                  The Old Scrapping Process
                </h3>
                <p className="text-xs sm:text-sm text-[#4E6152] font-medium mt-1 mb-6 sm:mb-8">
                  More effort. More uncertainty. Less value.
                </p>

                {/* Content: List + Illustration */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

                  {/* 5 Points (7 Columns) */}
                  <div className="md:col-span-7 space-y-4">
                    {traditionalPoints.map((pt) => (
                      <div key={pt.id} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-white border border-[#CBDCCF] text-[#2F4434] flex items-center justify-center flex-shrink-0 shadow-2xs mt-0.5">
                          {pt.icon}
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-[13.5px] font-black text-[#111827] leading-tight">
                            {pt.title}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-[#526456] leading-relaxed mt-0.5">
                            {pt.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Graphic Illustration (5 Columns) - No background or container box */}
                  <div className="md:col-span-5 relative w-full h-52 sm:h-64 lg:h-72 flex items-center justify-center">
                    <Image
                      src="/images/why-choose/traditional_scrap.jpg"
                      alt="Traditional Scrapping Process"
                      fill
                      className="object-contain mix-blend-multiply drop-shadow-sm"
                    />
                  </div>

                </div>
              </div>
            </div>


            {/* Mobile "VS" separator */}
            <div className="flex lg:hidden justify-center -my-3 z-20 relative">
              <div className="w-11 h-11 rounded-full bg-[#188A38] text-white font-black text-xs flex items-center justify-center shadow-md border-2 border-white">
                VS
              </div>
            </div>


            {/* ================= CARD 2: CARCRUSH24 WAY (CRISP WHITE & GREEN GLOW) ================= */}
            <div className="rounded-3xl bg-white border-2 border-[#6FCF3C] p-6 sm:p-8 flex flex-col justify-between shadow-[0_8px_32px_rgba(24,138,56,0.10)] hover:shadow-lg transition-shadow relative overflow-hidden">
              {/* Soft ambient corner glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#6FCF3C]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                {/* Top Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-[#188A38] text-white text-[10.5px] font-black uppercase tracking-wider shadow-xs">
                    CARCRUSH24 WAY
                  </span>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight">
                  A Smarter Scrapping Experience
                </h3>
                <p className="text-xs sm:text-sm text-[#188A38] font-bold mt-1 mb-6 sm:mb-8">
                  Fast. Transparent. Responsible.
                </p>

                {/* Content: List + Illustration */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

                  {/* 5 Points (7 Columns) */}
                  <div className="md:col-span-7 space-y-4">
                    {carcrushPoints.map((pt) => (
                      <div key={pt.id} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#E8F8ED] border border-[#BCE7C6] text-[#188A38] flex items-center justify-center flex-shrink-0 shadow-2xs mt-0.5">
                          {pt.icon}
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-[13.5px] font-black text-[#111827] leading-tight">
                            {pt.title}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-[#4B5563] leading-relaxed mt-0.5">
                            {pt.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Graphic Illustration (5 Columns) - No background or container box */}
                  <div className="md:col-span-5 relative w-full h-52 sm:h-64 lg:h-72 flex items-center justify-center">
                    <Image
                      src="/images/why-choose/carcrush_eco_recycle.jpg"
                      alt="CarCrush24 Eco Friendly Recycling"
                      fill
                      className="object-contain mix-blend-multiply drop-shadow-sm"
                    />
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
