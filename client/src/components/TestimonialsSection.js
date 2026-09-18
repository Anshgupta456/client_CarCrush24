'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import SectionHeader from './SectionHeader';
import { initialTestimonials as TESTIMONIALS } from '../data/testimonialsData';

export default function TestimonialsSection() {
  const scrollRef = useRef(null);
  const [testimonials, setTestimonials] = useState(TESTIMONIALS);

  const fetchTestimonials = useCallback(async () => {
    try {
      const res = await fetch('/api/testimonials');
      if (res.ok) {
        const json = await res.json();
        if (json.data && json.data.length > 0) {
          setTestimonials(json.data);
        }
      }
    } catch {
      // Fallback stays active gracefully
    }
  }, []);

  useEffect(() => {
    fetchTestimonials();

    // Listen for real-time admin content updates
    const handleUpdate = () => fetchTestimonials();
    window.addEventListener('testimonials_updated', handleUpdate);
    return () => window.removeEventListener('testimonials_updated', handleUpdate);
  }, [fetchTestimonials]);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-10 sm:py-12 lg:py-16 bg-[#FBFDFB] overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6FCF3C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header (Left Aligned like Reference) */}
        <div className="mb-6 sm:mb-8">
          <SectionHeader
            eyebrow="WHAT OUR CUSTOMERS SAY"
            title="Real People."
            highlight="Real Impact."
            align="left"
          />
        </div>

        {/* Testimonials Horizontal Scrollable Track */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-3 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="w-[285px] sm:w-[310px] lg:w-[315px] flex-shrink-0 bg-white rounded-2xl sm:rounded-3xl border border-[#E5E7EB] p-5 sm:p-6 flex flex-col justify-between shadow-[0_2px_14px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#188A38]/40 transition-all group"
            >
              <div>
                {/* Green Double Quote Icon */}
                <div className="text-3xl sm:text-4xl text-[#188A38] font-serif font-black leading-none mb-3 select-none">
                  “
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-[13.5px] text-[#4B5563] leading-relaxed line-clamp-4">
                  {t.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-5 pt-1">
                {/* Green Accent Dash */}
                <div className="w-5 h-1 bg-[#188A38] rounded-full mb-2.5" />

                <h4 className="text-sm sm:text-[15px] font-extrabold text-[#111827] leading-tight">
                  {t.author}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#9CA3AF] mt-0.5 font-medium">
                  {t.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Trust Score & Carousel Navigation */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">

          {/* Left: CarCrush24 + 4.8 Rating badge + verified reviews text */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-3 text-center sm:text-left">
            <span className="text-xl font-black text-[#111827] tracking-tight">
              CarCrush24
            </span>

            <div className="h-4 w-px bg-gray-300 hidden sm:block" />

            <div className="flex items-center gap-2">
              <span className="bg-[#188A38] text-white text-xs font-black px-2 py-0.5 rounded-md shadow-2xs">
                4.8
              </span>
              <span className="text-xs sm:text-[13px] text-[#6B7280] font-medium">
                Rating based on 1,200+ verified reviews
              </span>
            </div>
          </div>

          {/* Right: Prev & Next Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll('left')}
              aria-label="Previous Testimonials"
              className="w-11 h-11 rounded-full border border-gray-300 bg-white text-gray-700 flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-all shadow-xs cursor-pointer"
            >
              <svg className="w-5 h-5 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              onClick={() => handleScroll('right')}
              aria-label="Next Testimonials"
              className="w-11 h-11 rounded-full bg-[#188A38] text-white flex items-center justify-center hover:bg-[#157931] active:scale-95 transition-all shadow-xs cursor-pointer"
            >
              <svg className="w-5 h-5 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
