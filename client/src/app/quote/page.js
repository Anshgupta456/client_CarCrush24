import React from 'react';
import Navbar from '../../components/Navbar';
import QuoteForm from '../../components/QuoteForm';
import TrustBar from '../../components/TrustBar';

export const metadata = {
  title: 'Get an Instant Quote | CarCrush - Vehicle Recycling & Scrapping',
  description: 'Get an instant valuation quote for your personal car, two-wheeler, or commercial truck fleet. Free doorstep pickup & instant payment.',
};

export default function QuotePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07130a]">
      {/* Floating Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 flex flex-col items-center justify-center pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6FCF3C]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl w-full mx-auto text-center mb-6 sm:mb-8">
          <span className="text-[#6FCF3C] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
            Instant Online Valuation
          </span>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">
            Get an Instant Cash Quote
          </h1>
          <p className="text-[#a5b8ac] text-sm sm:text-base mt-2 max-w-lg mx-auto">
            Select your vehicle category and condition to receive our highest guaranteed scrap or resale valuation.
          </p>
        </div>

        {/* Form */}
        <div className="relative z-10 w-full max-w-xl mx-auto">
          <QuoteForm />
        </div>
      </main>

      {/* Trust bar */}
      <TrustBar />
    </div>
  );
}
