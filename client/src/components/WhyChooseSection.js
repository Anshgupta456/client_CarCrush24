'use client';

import React from 'react';
import SectionHeader from './SectionHeader';

export default function WhyChooseSection() {
  return (
    <section className="relative py-10 sm:py-12 lg:py-16 bg-[#FBFDFB] overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-[#6FCF3C]/5 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-[#188A38]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header (reused from ReachSection) */}
        <SectionHeader
          eyebrow="WHY CHOOSE CARCRUSH24?"
          title="A smarter, safer way to scrap"
          highlight="your vehicle."
          align="center"
          className="mb-8 sm:mb-10 max-w-3xl"
        />

        {/* Two Comparison Cards Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-8 sm:mb-10">

          {/* ================= CARD 1: TRADITIONAL SCRAPPING (RED) ================= */}
          <div className="rounded-3xl bg-[#FAF9F8] border border-[#EBE6E3] p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
            <div>
              {/* Card Header */}
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-11 h-11 rounded-full bg-[#E11D48] text-white flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(225,29,72,0.3)]">
                  <svg className="w-5 h-5 stroke-current stroke-[3]" viewBox="0 0 24 24" fill="none">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight">
                    Traditional Scrapping
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7280] mt-0.5">
                    Indirect route through third-party agents
                  </p>
                </div>
              </div>

              {/* Horizontal Stepper Flow (5 Steps) */}
              <div className="py-4 px-2 sm:px-3 bg-white/70 rounded-2xl border border-[#EDE8E5] mb-8">
                <div className="flex items-start justify-between relative">
                  {/* Step 1: Your Vehicle */}
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#E2E8F0] shadow-2xs flex items-center justify-center text-[#4B5563]">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-4.66l.12-.34h13.77l.11.34V17z"/>
                        <circle cx="7.5" cy="14.5" r="1.5"/>
                        <circle cx="16.5" cy="14.5" r="1.5"/>
                      </svg>
                    </div>
                    <span className="text-[10.5px] sm:text-[11.5px] font-semibold text-[#374151] mt-2 leading-tight">
                      Your Vehicle
                    </span>
                  </div>

                  {/* Arrow 1 */}
                  <div className="text-[#9CA3AF] text-sm font-bold pt-3 sm:pt-3.5">→</div>

                  {/* Step 2: Multiple Middlemen */}
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#E2E8F0] shadow-2xs flex items-center justify-center text-[#4B5563]">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                      </svg>
                    </div>
                    <span className="text-[10.5px] sm:text-[11.5px] font-semibold text-[#374151] mt-2 leading-tight">
                      Multiple<br className="hidden sm:inline" /> Middlemen
                    </span>
                  </div>

                  {/* Arrow 2 */}
                  <div className="text-[#9CA3AF] text-sm font-bold pt-3 sm:pt-3.5">→</div>

                  {/* Step 3: Uncertain Pricing */}
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#E2E8F0] shadow-2xs flex items-center justify-center text-[#4B5563] font-bold text-lg">
                      ₹
                    </div>
                    <span className="text-[10.5px] sm:text-[11.5px] font-semibold text-[#374151] mt-2 leading-tight">
                      Uncertain<br className="hidden sm:inline" /> Pricing
                    </span>
                  </div>

                  {/* Arrow 3 */}
                  <div className="text-[#9CA3AF] text-sm font-bold pt-3 sm:pt-3.5">→</div>

                  {/* Step 4: Fake / Invalid Documents */}
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#E2E8F0] shadow-2xs flex items-center justify-center text-[#4B5563]">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                      </svg>
                      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#E11D48] text-white flex items-center justify-center text-[9px] font-bold">
                        ✕
                      </div>
                    </div>
                    <span className="text-[10.5px] sm:text-[11.5px] font-semibold text-[#374151] mt-2 leading-tight">
                      Fake / Invalid<br className="hidden sm:inline" /> Documents
                    </span>
                  </div>

                  {/* Arrow 4 */}
                  <div className="text-[#9CA3AF] text-sm font-bold pt-3 sm:pt-3.5">→</div>

                  {/* Step 5: Risk of Fraud & Delays */}
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#E2E8F0] shadow-2xs flex items-center justify-center text-[#4B5563]">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v6h-2V7zm0 8h2v2h-2v-2z"/>
                      </svg>
                    </div>
                    <span className="text-[10.5px] sm:text-[11.5px] font-semibold text-[#374151] mt-2 leading-tight">
                      Risk of Fraud<br className="hidden sm:inline" /> &amp; Delays
                    </span>
                  </div>
                </div>
              </div>

              {/* Negative Bullet Points */}
              <ul className="space-y-3.5 text-xs sm:text-[13px] text-[#4B5563] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#E11D48] font-black text-sm flex-shrink-0 mt-0.5">✕</span>
                  <span>
                    Your vehicle passes through multiple hands (dealer/third-party website → agent → unknown scrap yard).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E11D48] font-black text-sm flex-shrink-0 mt-0.5">✕</span>
                  <span>
                    Not all platforms offering vehicle scrapping services are government-authorized to issue Certificate of Deposit (CoD) or Certificate of Vehicle Scrapping (CVS) certificates.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E11D48] font-black text-sm flex-shrink-0 mt-0.5">✕</span>
                  <span>
                    Lower scrap value due to commissions charged by multiple middlemen.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E11D48] font-black text-sm flex-shrink-0 mt-0.5">✕</span>
                  <span>
                    Risk of improper disposal, unsafe dismantling, and environmental harm.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E11D48] font-black text-sm flex-shrink-0 mt-0.5">✕</span>
                  <span>
                    Delays in pickup, documentation, and vehicle deregistration.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* ================= CARD 2: THE CARCRUSH24 ADVANTAGE (GREEN) ================= */}
          <div className="rounded-3xl bg-white border-2 border-[#D1F2D9] p-6 sm:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(24,138,56,0.06)] hover:shadow-lg transition-shadow relative">
            {/* Soft Green Glow Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#6FCF3C]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              {/* Card Header */}
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-11 h-11 rounded-full bg-[#16A34A] text-white flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(22,163,74,0.35)]">
                  <svg className="w-5 h-5 stroke-current stroke-[3]" viewBox="0 0 24 24" fill="none">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight">
                    The CarCrush24 Advantage
                  </h3>
                  <p className="text-xs sm:text-sm text-[#16A34A] font-medium mt-0.5">
                    Direct, authorized vehicle scrapping
                  </p>
                </div>
              </div>

              {/* Horizontal Stepper Flow (5 Steps) */}
              <div className="py-4 px-2 sm:px-3 bg-[#F4FAF5] rounded-2xl border border-[#D5EED9] mb-8">
                <div className="flex items-start justify-between relative">
                  {/* Step 1: Your Vehicle */}
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#BCE7C6] shadow-2xs flex items-center justify-center text-[#16A34A]">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-4.66l.12-.34h13.77l.11.34V17z"/>
                        <circle cx="7.5" cy="14.5" r="1.5"/>
                        <circle cx="16.5" cy="14.5" r="1.5"/>
                      </svg>
                    </div>
                    <span className="text-[10.5px] sm:text-[11.5px] font-semibold text-[#1F2937] mt-2 leading-tight">
                      Your Vehicle
                    </span>
                  </div>

                  {/* Arrow 1 */}
                  <div className="text-[#16A34A] text-sm font-bold pt-3 sm:pt-3.5">→</div>

                  {/* Step 2: Authorized & Transparent Process */}
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#BCE7C6] shadow-2xs flex items-center justify-center text-[#16A34A]">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                      </svg>
                    </div>
                    <span className="text-[10.5px] sm:text-[11.5px] font-semibold text-[#1F2937] mt-2 leading-tight">
                      Authorized &amp;<br className="hidden sm:inline" /> Transparent
                    </span>
                  </div>

                  {/* Arrow 2 */}
                  <div className="text-[#16A34A] text-sm font-bold pt-3 sm:pt-3.5">→</div>

                  {/* Step 3: Valid CoD & CVS Certificates */}
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#BCE7C6] shadow-2xs flex items-center justify-center text-[#16A34A]">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-4-4 1.41-1.41L12 14.17l5.59-5.59L19 10l-7 7z"/>
                      </svg>
                    </div>
                    <span className="text-[10.5px] sm:text-[11.5px] font-semibold text-[#1F2937] mt-2 leading-tight">
                      Valid CoD &amp;<br className="hidden sm:inline" /> CVS Certs
                    </span>
                  </div>

                  {/* Arrow 3 */}
                  <div className="text-[#16A34A] text-sm font-bold pt-3 sm:pt-3.5">→</div>

                  {/* Step 4: Maximum Scrap Value */}
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#BCE7C6] shadow-2xs flex items-center justify-center text-[#16A34A] font-bold text-lg">
                      ₹
                    </div>
                    <span className="text-[10.5px] sm:text-[11.5px] font-semibold text-[#1F2937] mt-2 leading-tight">
                      Maximum<br className="hidden sm:inline" /> Scrap Value
                    </span>
                  </div>

                  {/* Arrow 4 */}
                  <div className="text-[#16A34A] text-sm font-bold pt-3 sm:pt-3.5">→</div>

                  {/* Step 5: Responsible Recycling */}
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#BCE7C6] shadow-2xs flex items-center justify-center text-[#16A34A]">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                    <span className="text-[10.5px] sm:text-[11.5px] font-semibold text-[#1F2937] mt-2 leading-tight">
                      Responsible<br className="hidden sm:inline" /> Recycling
                    </span>
                  </div>
                </div>
              </div>

              {/* Positive Bullet Points */}
              <ul className="space-y-3.5 text-xs sm:text-[13px] text-[#374151] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#16A34A] font-black text-sm flex-shrink-0 mt-0.5">✓</span>
                  <span>
                    Direct path from the vehicle owner to an authorized RVSF (CarCrush24 – a trusted and government-approved scrapping service provider).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#16A34A] font-black text-sm flex-shrink-0 mt-0.5">✓</span>
                  <span>
                    Legally valid Certificate of Deposit (CoD) and Certificate of Vehicle Scrapping (CVS).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#16A34A] font-black text-sm flex-shrink-0 mt-0.5">✓</span>
                  <span>
                    Maximum scrap value with no unnecessary middlemen involved.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#16A34A] font-black text-sm flex-shrink-0 mt-0.5">✓</span>
                  <span>
                    Environmentally responsible scrapping with up to 90% material recovery and recycling.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#16A34A] font-black text-sm flex-shrink-0 mt-0.5">✓</span>
                  <span>
                    Fast processing, transparent payments, and timely certificate issuance.
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM 6 FEATURE CARDS / RIBBON ================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5 pt-2">

          {/* Feature 1: Legally Valid Documentation */}
          <div className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-white hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-full bg-[#E8F8ED] text-[#16A34A] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
              </svg>
            </div>
            <div className="flex flex-col text-left leading-tight">
              <h4 className="text-[12px] sm:text-[13px] font-extrabold text-[#111827]">
                Legally Valid Documentation
              </h4>
              <p className="text-[10px] sm:text-[11px] text-[#6B7280] mt-0.5">
                Get CoD &amp; CVS, hassle-free
              </p>
            </div>
          </div>

          {/* Feature 2: Best Value for Your Scrap */}
          <div className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-white hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-full bg-[#E8F8ED] text-[#16A34A] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              </svg>
            </div>
            <div className="flex flex-col text-left leading-tight">
              <h4 className="text-[12px] sm:text-[13px] font-extrabold text-[#111827]">
                Best Value for Your Scrap
              </h4>
              <p className="text-[10px] sm:text-[11px] text-[#6B7280] mt-0.5">
                No unnecessary middlemen
              </p>
            </div>
          </div>

          {/* Feature 3: Environmentally Responsible */}
          <div className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-white hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-full bg-[#E8F8ED] text-[#16A34A] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div className="flex flex-col text-left leading-tight">
              <h4 className="text-[12px] sm:text-[13px] font-extrabold text-[#111827]">
                Environmentally Responsible
              </h4>
              <p className="text-[10px] sm:text-[11px] text-[#6B7280] mt-0.5">
                Reduce waste, conserve resources
              </p>
            </div>
          </div>

          {/* Feature 4: Fast Processing */}
          <div className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-white hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-full bg-[#E8F8ED] text-[#16A34A] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
              </svg>
            </div>
            <div className="flex flex-col text-left leading-tight">
              <h4 className="text-[12px] sm:text-[13px] font-extrabold text-[#111827]">
                Fast Processing
              </h4>
              <p className="text-[10px] sm:text-[11px] text-[#6B7280] mt-0.5">
                Quick pickup &amp; documentation
              </p>
            </div>
          </div>

          {/* Feature 5: Transparent Payment */}
          <div className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-white hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-full bg-[#E8F8ED] text-[#16A34A] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
              </svg>
            </div>
            <div className="flex flex-col text-left leading-tight">
              <h4 className="text-[12px] sm:text-[13px] font-extrabold text-[#111827]">
                Transparent Payment
              </h4>
              <p className="text-[10px] sm:text-[11px] text-[#6B7280] mt-0.5">
                No hidden charges
              </p>
            </div>
          </div>

          {/* Feature 6: Peace of Mind */}
          <div className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-white hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-full bg-[#E8F8ED] text-[#16A34A] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
            </div>
            <div className="flex flex-col text-left leading-tight">
              <h4 className="text-[12px] sm:text-[13px] font-extrabold text-[#111827]">
                Peace of Mind
              </h4>
              <p className="text-[10px] sm:text-[11px] text-[#6B7280] mt-0.5">
                Safe, secure and trustworthy
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
