'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

const REGIONS = [
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    type: 'Union Territory',
    image: '/images/cities/chandigarh.png',
    x: 87,
    y: 53,
  },
  {
    id: 'jammu_kashmir',
    name: 'Jammu & Kashmir',
    type: 'Union Territory',
    image: '/images/cities/jammu_kashmir.png',
    x: 79,
    y: 24,
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    type: 'State',
    image: '/images/cities/Uttarakhand.png',
    x: 50,
    y: 12,
  },
  {
    id: 'uttar_pradesh',
    name: 'Uttar Pradesh',
    type: 'State',
    image: '/images/cities/uttarpradesh.png',
    x: 68,
    y: 81,
  },
  {
    id: 'haryana',
    name: 'Haryana',
    type: 'State',
    image: '/images/cities/haryana.png',
    x: 32,
    y: 81,
  },
  {
    id: 'punjab',
    name: 'Punjab',
    type: 'State',
    image: '/images/cities/punjab.png',
    x: 13,
    y: 53,
  },
  {
    id: 'delhi',
    name: 'Delhi',
    type: 'Union Territory',
    image: '/images/cities/delhi.png',
    x: 21,
    y: 24,
  },
];

export default function ReachSection() {
  const [activeRegion, setActiveRegion] = useState(null);

  return (
    <section
      className="relative py-10 lg:py-14 bg-cover bg-right lg:bg-center bg-no-repeat overflow-hidden bg-white"
      style={{
        backgroundImage: "url('/images/location_bg.png')",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">

          {/* Left Column: Title, Subtitle */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <SectionHeader
              eyebrow="OUR REACH"
              title="Serving You Across"
              highlight="North India"
              description="CarCrush24 is operational across the entire North India, making vehicle recycling simple, accessible and convenient for everyone."
              align="left"
            />
          </div>

          {/* Right Column: Orbital Hub Layout */}
          <div className="lg:col-span-8 w-full flex items-center justify-center">

            {/* DESKTOP ORBITAL VIEW */}
            <div className="hidden lg:block relative w-[680px] h-[640px] select-none">

              {/* Concentric Base 3D Discs (Clean, white-green lighting matching reference) */}
              {/* Outer Dish Platter */}
              {/* <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[490px] h-[430px] rounded-full bg-white/70 border border-white shadow-[0_12px_45px_rgba(0,0,0,0.05)] pointer-events-none" /> */}

              {/* Inner Raised Circular Platter */}
              <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[370px] h-[320px] rounded-full bg-gradient-to-b from-white/90 to-white/60 border border-emerald-100/60 shadow-[inset_0_2px_10px_rgba(111,207,60,0.06),0_6px_25px_rgba(0,0,0,0.04)] pointer-events-none" />

              {/* Outer Dashed Green Orbit Ring Connecting Nodes */}
              <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[570px] h-[480px] rounded-full border-[1.5px] border-dashed border-[#6FCF3C]/55 pointer-events-none" />

              {/* Inner Subtle Ring */}
              <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[240px] rounded-full border border-[#6FCF3C]/25 pointer-events-none" />

              {/* CENTER HUB: Clean Vibrant Emerald Green Pin (No muddy black gradients) */}
              <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-[65%] z-30 flex flex-col items-center pointer-events-auto">
                <div className="relative w-[155px] h-[235px] flex items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer filter drop-shadow-[0_16px_32px_rgba(20,95,38,0.38)]">

                  {/* Clean Emerald Green Location Pin SVG */}
                  <svg
                    viewBox="0 0 200 250"
                    className="absolute inset-0 w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="cleanGreenPin" x1="100" y1="6" x2="100" y2="246" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#1E9B3E" />
                        <stop offset="65%" stopColor="#178835" />
                        <stop offset="100%" stopColor="#12732C" />
                      </linearGradient>
                    </defs>

                    {/* Smooth Pin Teardrop Shape */}
                    <path
                      d="M100 6 C48 6 6 48 6 100 C6 145 52 195 100 246 C148 195 194 145 194 100 C194 48 152 6 100 6 Z"
                      fill="url(#cleanGreenPin)"
                      stroke="#38B349"
                      strokeWidth="2.5"
                    />
                  </svg>

                  {/* Pin Content: White C-Recycle Emblem + CARCRUSH24 Text + Subtitle */}
                  <div className="relative z-10 flex flex-col items-center justify-center -translate-y-4 px-2 select-none">
                    {/* Clean Transparent C-Recycle Logo */}
                    <div className="relative w-[72px] h-[72px] flex items-center justify-center mb-1 drop-shadow-[0_3px_8px_rgba(0,0,0,0.3)]">
                      <Image
                        src="/logo/icon_logo.png"
                        alt="CarCrush Emblem"
                        width={72}
                        height={72}
                        className="object-contain"
                        priority
                      />
                    </div>

                    {/* CARCRUSH24 Title
                    <span className="text-white font-black text-[16px] tracking-wide uppercase leading-tight drop-shadow-xs">
                      CARCRUSH24
                    </span> */}
                  </div>

                  {/* Radiant Lime Spotlight Pulse at Needle Tip */}
                  <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
                    <span className="absolute w-12 h-12 rounded-full bg-[#6FCF3C]/35 blur-sm animate-pulse" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#6FCF3C] shadow-[0_0_18px_#6FCF3C] border border-white/80" />
                  </div>
                </div>
              </div>

              {/* 7 Regional Nodes (States & UTs with Real Images & Clean Badges) */}
              {REGIONS.map((region) => {
                const isHovered = activeRegion === region.id;

                return (
                  <div
                    key={region.id}
                    style={{
                      left: `${region.x}%`,
                      top: `${region.y}%`,
                    }}
                    onMouseEnter={() => setActiveRegion(region.id)}
                    onMouseLeave={() => setActiveRegion(null)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer"
                  >
                    {/* Landmark Circular Photo Thumbnail */}
                    <div
                      className={`relative w-[86px] h-[86px] rounded-full overflow-hidden border-4 transition-all duration-300 shadow-[0_6px_20px_rgba(0,0,0,0.15)] ${isHovered
                        ? 'border-[#6FCF3C] scale-110 shadow-[0_0_25px_rgba(111,207,60,0.45)]'
                        : 'border-white hover:border-[#6FCF3C] hover:scale-105'
                        }`}
                    >
                      <img
                        src={region.image}
                        alt={region.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Location Badge Pill with Actual State/UT & Subtitle */}
                    <div
                      className={`relative z-10 -mt-3.5 px-3 py-1.5 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.1)] border transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${isHovered
                        ? 'border-[#6FCF3C] scale-105 shadow-[0_4px_16px_rgba(111,207,60,0.28)]'
                        : 'border-[#E2E8F0]'
                        }`}
                    >
                      {/* Green Circle with White Map Pin Icon */}
                      <div className="w-5 h-5 rounded-full bg-[#188A38] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                        <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                      </div>

                      {/* State / UT Text Information */}
                      <div className="flex flex-col items-start text-left leading-tight">
                        <span className="text-[12px] font-extrabold text-[#131A15]">
                          {region.name}
                        </span>
                        <span className="text-[9.5px] font-medium text-[#717E76]">
                          {region.type}
                        </span>
                      </div>
                    </div>

                  </div>
                );
              })}

            </div>

            {/* MOBILE & TABLET VIEW */}
            <div className="lg:hidden w-full flex flex-col items-center">

              {/* Location Pin for Mobile */}
              <div className="relative mb-8 flex items-center justify-center">
                <div className="relative w-[160px] h-[200px] flex items-center justify-center filter drop-shadow-[0_12px_24px_rgba(20,95,38,0.35)]">
                  <svg viewBox="0 0 200 250" className="absolute inset-0 w-full h-full" fill="none">
                    <defs>
                      <linearGradient id="cleanGreenPinMob" x1="100" y1="6" x2="100" y2="246" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#1E9B3E" />
                        <stop offset="100%" stopColor="#12732C" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M100 6 C48 6 6 48 6 100 C6 145 52 195 100 246 C148 195 194 145 194 100 C194 48 152 6 100 6 Z"
                      fill="url(#cleanGreenPinMob)"
                      stroke="#38B349"
                      strokeWidth="2.5"
                    />
                  </svg>

                  <div className="relative z-10 flex flex-col items-center -translate-y-3 px-2 select-none">
                    <div className="w-14 h-14 relative mb-1">
                      <Image
                        src="/logo/icon_circle_transparent.png"
                        alt="CarCrush Emblem"
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-white font-black text-base tracking-wide uppercase leading-tight">
                      CARCRUSH24
                    </span>
                    <span className="text-white/95 text-[6.5px] font-bold tracking-[0.12em] uppercase whitespace-nowrap mt-0.5">
                      RECYCLE • REUSE • A CLEANER TOMORROW
                    </span>
                  </div>

                  <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2">
                    <span className="w-3 h-3 rounded-full bg-[#6FCF3C] shadow-[0_0_12px_#6FCF3C] block border border-white" />
                  </div>
                </div>
              </div>

              {/* Clean Grid of 7 States & UTs on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
                {REGIONS.map((region) => (
                  <div
                    key={region.id}
                    className="bg-white p-3.5 rounded-2xl border border-[#E2E8F0] shadow-xs flex items-center gap-3.5 hover:border-[#6FCF3C] transition-all"
                  >
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-xs flex-shrink-0">
                      <img
                        src={region.image}
                        alt={region.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#188A38] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                        <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                      </div>

                      <div className="flex flex-col text-left leading-tight">
                        <span className="text-sm font-extrabold text-[#131A15]">{region.name}</span>
                        <span className="text-[11px] text-[#717E76] font-medium">{region.type}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
