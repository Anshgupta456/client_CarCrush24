import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { HelplineButton } from '../../components/HelplineCallout';
import { Car, Leaf, Recycle, IndianRupee, Eye, Droplets, ShieldCheck, Truck, Factory, FileCheck } from 'lucide-react';

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
      icon: <Car className="w-5 h-5 text-[#188A38]" strokeWidth={2.2} />,
    },
    {
      metric: '85,000+ T',
      label: 'CO₂ Emissions Prevented',
      detail: 'Direct carbon reduction achieved through automated green dismantling & recycling.',
      icon: <Leaf className="w-5 h-5 text-[#188A38]" strokeWidth={2.2} />,
    },
    {
      metric: '90%+',
      label: 'Material Recovery Rate',
      detail: 'High-grade steel, aluminium, rubber, and glass reclaimed for the circular economy.',
      icon: <Recycle className="w-5 h-5 text-[#188A38]" strokeWidth={2.2} />,
    },
    {
      metric: '₹50+ Cr',
      label: 'Scrap Value Delivered',
      detail: 'Fair, transparent, direct-to-bank compensation paid out to vehicle owners on the spot.',
      icon: <IndianRupee className="w-5 h-5 text-[#188A38]" strokeWidth={2.2} />,
    },
  ];

  const leftValues = [
    {
      number: '01',
      title: 'Uncompromising Transparency',
      desc: 'No arbitrary deductions, surprise towing fees, or shadowy middlemen. Every quote is backed by genuine scrap metal metrics and vehicle inspection data.',
      icon: <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-[#16A34A]" strokeWidth={2} />,
    },
    {
      number: '03',
      title: 'Certified Legal Authenticity',
      desc: 'Direct integration with MoRTH and Parivahan Vahan databases guarantees legitimate Certificate of Deposit (CoD) and CVS issuance for total legal indemnity.',
      icon: <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#16A34A]" strokeWidth={2} />,
    },
    {
      number: '05',
      title: 'Industrial Circularity',
      desc: 'We feed up to 90% of recovered scrap steel, copper, and secondary materials back into domestic industrial production, reducing primary mineral mining.',
      icon: <Factory className="w-7 h-7 sm:w-8 sm:h-8 text-[#16A34A]" strokeWidth={2} />,
    },
  ];

  const rightValues = [
    {
      number: '02',
      title: 'Eco-First Depollution',
      desc: 'Before any metal is shredded, our facility safely purges engine oils, battery acids, coolant fluids, and Freon AC gases with zero ground leakage.',
      icon: <Droplets className="w-7 h-7 sm:w-8 sm:h-8 text-[#16A34A]" strokeWidth={2} />,
    },
    {
      number: '04',
      title: 'Customer-First Convenience',
      desc: 'Free doorstep pickup across 7 North Indian States and UTs, on-spot digital payment settlement, and complete RTO deregistrations handled end-to-end.',
      icon: <Truck className="w-7 h-7 sm:w-8 sm:h-8 text-[#16A34A]" strokeWidth={2} />,
    },
    {
      number: '06',
      title: 'Regulatory Excellence',
      desc: 'Fully compliant with the Motor Vehicles (Vehicle Scrapping Facility) Rules, 2021, and authorized as a Registered Vehicle Scrapping Facility (RVSF).',
      icon: <FileCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#16A34A]" strokeWidth={2} />,
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

              {/* Center Column: Recycle Graphic */}
              <div className="lg:col-span-4 flex items-center justify-center py-4 sm:py-6 lg:py-0 order-first lg:order-none">
                <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 flex items-center justify-center">
                  {/* Subtle soft ambient glow behind recycle icon */}
                  <div className="absolute inset-4 bg-[#16A34A]/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-[#EAF7EE] via-[#E2F5E7] to-[#D4EED9] border border-[#16A34A]/25 flex items-center justify-center shadow-[0_12px_36px_rgba(22,163,74,0.18)] group hover:scale-105 transition-all duration-500">
                    <Recycle
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-[#16A34A] transition-transform duration-700 group-hover:rotate-180"
                      strokeWidth={1.75}
                    />
                  </div>
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

                    <h4 className="text-sm font-bold text-white mb-1">
                      100% Legal Indemnity
                    </h4>
                    <p className="text-[11.5px] text-gray-400 leading-relaxed">
                      Instant Certificate of Deposit (CoD) &amp; CVS documents issued directly via MoRTH databases.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xs hover:border-[#6FCF3C]/40 transition-colors">

                    <h4 className="text-sm font-bold text-white mb-1">
                      Algorithmic Scrap Pricing
                    </h4>
                    <p className="text-[11.5px] text-gray-400 leading-relaxed">
                      Transparent rates linked to real-time commodity metal markets with instant direct-to-bank payout.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xs hover:border-[#6FCF3C]/40 transition-colors">
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

                  <HelplineButton prefix="Helpline: " />
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
