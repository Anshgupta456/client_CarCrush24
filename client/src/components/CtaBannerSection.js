'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CtaBannerSection() {
  return (
    <section className="relative py-8 sm:py-10 bg-[#FBFDFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Deep Black Banner with Neon Green Border */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#070D09] border-[2.5px] border-[#2EE060] p-6 sm:p-8 lg:p-9 shadow-[0_0_36px_rgba(46,224,96,0.16)] overflow-hidden">

          {/* Subtle green ambient lighting in the dark container */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-[#2EE060]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#2EE060]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">

            {/* Left Content Block (Image + Divider + Text) */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-6 text-center sm:text-left flex-1">

              {/* 3D Green Recycle Emblem Image */}
              <div className="relative w-18 h-18 sm:w-22 sm:h-22 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/recycle-3d-transparent.png"
                  alt="Recycle 3D Icon"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Vertical Divider */}
              <div className="hidden sm:block w-[1px] h-20 bg-white/15 mx-1 flex-shrink-0 self-center" />

              {/* Text Block */}
              <div className="flex flex-col">
                <span className="text-[#2EE060] text-xs sm:text-[13px] font-extrabold tracking-[0.2em] uppercase mb-1.5">
                  READY TO RECYCLE YOUR VEHICLE?
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-white tracking-tight leading-tight">
                  Get Your <span className="text-[#2EE060]">Free Quote</span> Today
                </h2>

                <p className="text-xs sm:text-[13.5px] text-gray-300 max-w-xl mt-2 leading-relaxed font-normal">
                  Quick, easy and hassle-free. Turn your old vehicle into value — and help build a cleaner tomorrow.
                </p>
              </div>

            </div>

            {/* Right CTA Button */}
            <div className="flex-shrink-0 w-full sm:w-auto flex justify-center lg:justify-end">
              <Link
                href="/quote"
                className="group inline-flex items-center justify-center gap-3 px-5 py-1 sm:px-6 sm:py-2.5 rounded-full bg-gradient-to-r from-[#2EE060] to-[#22C55E] text-[#070D09] font-black text-base sm:text-[17px] tracking-tight hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>Get Free Quote</span>
                <svg
                  className="w-5 h-5 stroke-current stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
