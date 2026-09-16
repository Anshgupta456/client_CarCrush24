'use client';

import React from 'react';
import Link from 'next/link';

import QuoteForm from './QuoteForm';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#07130a]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-right sm:bg-center scale-100 transition-transform duration-1000"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        />

        {/* Gradient Vignettes & Contrast Overlays */}
        {/* Left-side subtle gradient to ensure text readability without darkening background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061409]/75 via-[#08180c]/45 to-transparent sm:w-[55%] w-full z-[1]" />

        {/* Bottom fade into trustbar */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#08150c]/80 to-transparent z-[1]" />

        {/* Subtle top fade for navbar */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#061409]/40 to-transparent z-[1]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-16 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Headlines, Info, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-[#6FCF3C] text-[11px] sm:text-[13px] font-bold tracking-[0.22em] uppercase">
                Vehicle Recycling &amp; Scrapping Services
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-white text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-[1.08] tracking-tight text-left">
              Turn your old vehicle
              <span className="text-[#6FCF3C] block mt-1">
                into real value
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 text-[#c7d6cc] text-base sm:text-[17px] leading-relaxed max-w-xl">
              We recycle two-wheelers, cars and commercial trucks for both individual and business clients.
            </p>

            {/* Vehicle Type Badges */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl">

              {/* Two-Wheelers */}
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#0e2415]/60 backdrop-blur-sm border border-[#1f4228]/60">
                <div className="w-9 h-9 rounded-full border-[1.8px] border-[#6FCF3C] flex items-center justify-center flex-shrink-0 bg-[#0d2214]/80">
                  <svg className="w-4 h-4 text-[#6FCF3C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="5.5" cy="17.5" r="3.5" />
                    <circle cx="18.5" cy="17.5" r="3.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 6h-3l-3 6h7l3-3.5h2.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.5l2-5.5h4l2 5.5" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xs font-bold leading-tight">Two-Wheelers</span>
                  <span className="text-[#8ba292] text-[10px] font-normal leading-tight mt-0.5">Recycle &bull; Get Paid</span>
                </div>
              </div>

              {/* Cars */}
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#0e2415]/60 backdrop-blur-sm border border-[#1f4228]/60">
                <div className="w-9 h-9 rounded-full border-[1.8px] border-[#6FCF3C] flex items-center justify-center flex-shrink-0 bg-[#0d2214]/80">
                  <svg className="w-4 h-4 text-[#6FCF3C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 17a2 2 0 104 0 2 2 0 00-4 0zM15 17a2 2 0 104 0 2 2 0 00-4 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 17H3v-4l2-5h14l2 5v4h-2M5 17h10" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xs font-bold leading-tight">Cars &amp; SUVs</span>
                  <span className="text-[#8ba292] text-[10px] font-normal leading-tight mt-0.5">Eco-Friendly Disposal</span>
                </div>
              </div>

              {/* Commercial Trucks */}
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#0e2415]/60 backdrop-blur-sm border border-[#1f4228]/60">
                <div className="w-9 h-9 rounded-full border-[1.8px] border-[#6FCF3C] flex items-center justify-center flex-shrink-0 bg-[#0d2214]/80">
                  <svg className="w-4 h-4 text-[#6FCF3C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M1 3h15v13H1zM16 8h4l3 3v5h-7z" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xs font-bold leading-tight">Commercial Trucks</span>
                  <span className="text-[#8ba292] text-[10px] font-normal leading-tight mt-0.5">Fleets &amp; Businesses</span>
                </div>
              </div>

            </div>

            {/* Quick trust points */}
            {/* <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-[#a5b8ac]">
              <span className="flex items-center gap-1.5">
                <span className="text-[#6FCF3C]">✓</span> Govt. Authorized Scrapper
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#6FCF3C]">✓</span> Free Doorstep Towing
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#6FCF3C]">✓</span> Instant Cash/UPI Settlement
              </span>
            </div> */}

          </div>

          {/* Right Column: Instant Get a Quote Form Widget */}
          <div id="quote-form" className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <QuoteForm />
          </div>

        </div>
      </div>
    </section>
  );
}
