'use client';

import React from 'react';
import SectionHeader from './SectionHeader';

const STEPS = [
  {
    step: 1,
    title: 'Request a Quote',
    description: 'Share your vehicle details and get an instant, no-obligation quote.',
    icon: (
      <svg className="w-8 h-8 text-[#188A38] stroke-current stroke-[2]" viewBox="0 0 32 32" fill="none">
        {/* Document outline */}
        <path d="M6 5C6 3.9 6.9 3 8 3H20L26 9V27C26 28.1 25.1 29 24 29H8C6.9 29 6 28.1 6 27V5Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 3V9H26" strokeLinecap="round" strokeLinejoin="round" />
        {/* Text lines */}
        <path d="M10 11H18" strokeLinecap="round" />
        <path d="M10 15H15" strokeLinecap="round" />
        <path d="M10 19H13" strokeLinecap="round" />
        {/* Rupee badge circle at bottom right */}
        <circle cx="21" cy="22" r="5.5" fill="#188A38" stroke="white" strokeWidth="1.5" />
        <text x="21" y="25" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle" stroke="none">₹</text>
      </svg>
    ),
  },
  {
    step: 2,
    title: 'Verification through Parivahan',
    description: 'We verify your vehicle details with the official Parivahan database for a hassle-free process.',
    icon: (
      <svg className="w-9 h-9 text-[#188A38] stroke-current stroke-[2]" viewBox="0 0 36 36" fill="none">
        {/* Car body */}
        <path d="M6 18L9 11C9.6 9.6 11 8.7 12.6 8.7H21.4C23 8.7 24.4 9.6 25 11L28 18V25C28 25.6 27.6 26 27 26H25C24.4 26 24 25.6 24 25V24H10V25C10 25.6 9.6 26 9 26H7C6.4 26 6 25.6 6 25V18Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 14H25" strokeLinecap="round" />
        <circle cx="10.5" cy="20" r="1.5" fill="#188A38" />
        <circle cx="23.5" cy="20" r="1.5" fill="#188A38" />
        {/* Shield check badge on right */}
        <path d="M23 15C23 15 27 13 30.5 15V21.5C30.5 25.5 26.8 28 26.8 28C26.8 28 23 25.5 23 21.5V15Z" fill="#188A38" stroke="white" strokeWidth="1.5" />
        <path d="M25 21L26.5 22.5L29 19.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: 3,
    title: 'Vehicle Pickup',
    description: 'Our team schedules a convenient time and picks up your vehicle from your location.',
    icon: (
      <svg className="w-10 h-10 text-[#188A38] stroke-current stroke-[1.8]" viewBox="0 0 40 40" fill="none">
        {/* Car on the bed */}
        <path d="M9 16L11 12H17L19 16H9Z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="11.5" cy="18" r="1.5" fill="#188A38" />
        <circle cx="17" cy="18" r="1.5" fill="#188A38" />
        {/* Flatbed truck */}
        <path d="M4 21H23L27 16H34V26H4V21Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27 16V21H34" strokeLinecap="round" />
        <circle cx="9.5" cy="27" r="2.5" fill="none" strokeWidth="2" />
        <circle cx="29.5" cy="27" r="2.5" fill="none" strokeWidth="2" />
      </svg>
    ),
  },
  {
    step: 4,
    title: 'Prompt Payment',
    description: 'Get your agreed payment quickly, through secure and trusted channels.',
    icon: (
      <svg className="w-9 h-9 text-[#188A38] stroke-current stroke-[2]" viewBox="0 0 36 36" fill="none">
        {/* Movement speed lines on left */}
        <path d="M3 14H6" strokeLinecap="round" />
        <path d="M2 18H5" strokeLinecap="round" />
        <path d="M3 22H6" strokeLinecap="round" />
        {/* Cash sticking out with Rupee symbol */}
        <path d="M12 13V8C12 7.4 12.4 7 13 7H27C27.6 7 28 7.4 28 8V13" strokeLinecap="round" />
        <text x="20" y="12" fill="#188A38" fontSize="6.5" fontWeight="bold" textAnchor="middle" stroke="none">₹</text>
        {/* Wallet body */}
        <rect x="8" y="13" width="24" height="15" rx="3" strokeLinecap="round" strokeLinejoin="round" />
        {/* Wallet latch */}
        <path d="M25 17.5H32V23.5H25C23.3 23.5 23.3 17.5 25 17.5Z" fill="#E8F8EE" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="27" cy="20.5" r="1" fill="#188A38" />
      </svg>
    ),
  },
  {
    step: 5,
    title: 'Certificate Issued',
    description: 'Receive your official Certificate of Vehicle Scrapping (CVS) instantly.',
    icon: (
      <svg className="w-8 h-8 text-[#188A38] stroke-current stroke-[2]" viewBox="0 0 32 32" fill="none">
        {/* Certificate border */}
        <rect x="5" y="4" width="22" height="24" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Certificate content lines */}
        <path d="M9 9H16" strokeLinecap="round" strokeWidth="2.5" />
        <path d="M9 13H23" strokeLinecap="round" />
        <path d="M9 17H19" strokeLinecap="round" />
        <path d="M9 21H16" strokeLinecap="round" />
        {/* Ribbon Medal Seal */}
        <circle cx="22" cy="22" r="3.5" fill="#188A38" stroke="white" strokeWidth="1" />
        <path d="M20.5 25L19.5 29L22 27.5L24.5 29L23.5 25" fill="#188A38" stroke="none" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative py-10 sm:py-12 lg:py-16 bg-white overflow-hidden">
      {/* Ambient background soft light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-[#6FCF3C]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionHeader
          eyebrow="HOW IT WORKS"
          withBar={true}
          title="From Quote to Certificate,"
          highlight="in 5 Simple Steps"
          align="center"
          className="mb-8 sm:mb-10 max-w-3xl"
        />

        {/* 5-Step Process Flow */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-4 lg:gap-2">
          {STEPS.map((item, index) => (
            <React.Fragment key={item.step}>
              {/* Step Card */}
              <div className="flex-1 w-full bg-white rounded-2xl sm:rounded-3xl border border-[#E5E7EB] p-5 sm:p-6 flex flex-col items-center text-center shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#188A38]/40 transition-all group">

                {/* Circular Icon Container */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#E8F8EE] flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 group-hover:bg-[#DCF4E3] transition-all flex-shrink-0">
                  {item.icon}
                </div>

                {/* Step Number Badge */}
                <div className="w-6 h-6 rounded-full bg-[#188A38] text-white font-bold text-xs flex items-center justify-center mb-3 sm:mb-4 shadow-xs">
                  {item.step}
                </div>

                {/* Step Title */}
                <h3 className="text-base sm:text-[17px] font-extrabold text-[#111827] mb-2 tracking-tight">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-[13px] text-[#6B7280] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Connecting Arrow between cards (Visible on Large Screens) */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:flex items-center justify-center text-[#188A38] px-1 flex-shrink-0">
                  <svg className="w-5 h-5 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
