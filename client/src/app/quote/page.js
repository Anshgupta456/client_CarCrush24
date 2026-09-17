'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import QuoteForm from '../../components/QuoteForm';
import TrustBar from '../../components/TrustBar';
import CtaBannerSection from '../../components/CtaBannerSection';
import Footer from '../../components/Footer';
import { 
  IndianRupee, 
  Scale, 
  Cog, 
  Truck, 
  Percent 
} from 'lucide-react';

export default function QuotePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benchmarks = [
    {
      type: 'Two-Wheelers',
      range: '₹8,000 - ₹22,000',
      popular: 'Splendor, Activa, Pulsar, Apache',
      desc: 'Based on engine alloy, kerb metal mass & usable parts condition.',
      icon: (
        <svg className="w-6 h-6 text-[#188A38]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="5.5" cy="17.5" r="3.5" />
          <circle cx="18.5" cy="17.5" r="3.5" />
          <path d="M15 6h-3l-3 6h7l3-3.5h2.5" />
          <path d="M9 17.5l2-5.5h4l2 5.5" />
        </svg>
      )
    },
    {
      type: 'Hatchbacks',
      range: '₹32,000 - ₹55,000',
      popular: 'WagonR, Alto, Swift, i10, Santro',
      desc: 'High demand for chassis steel, catalytic converters & suspension.',
      icon: (
        <svg className="w-6 h-6 text-[#188A38]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 17a2 2 0 104 0 2 2 0 00-4 0zM15 17a2 2 0 104 0 2 2 0 00-4 0z" />
          <path d="M5 17H3v-4l2.5-5.5a1 1 0 01.9-.5h11.2a1 1 0 01.9.5L21 13v4h-2M5 17h10" />
          <path d="M7 11h10" />
        </svg>
      )
    },
    {
      type: 'Sedans',
      range: '₹45,000 - ₹75,000',
      popular: 'Honda City, Verna, Dzire, Ciaz',
      desc: 'Heavier unladen weight with premium copper wiring & sheet metal.',
      icon: (
        <svg className="w-6 h-6 text-[#188A38]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 16a2 2 0 104 0 2 2 0 00-4 0zM16 16a2 2 0 104 0 2 2 0 00-4 0z" />
          <path d="M2 16h2v-3l3-4.5h10l3 4.5v3h2" />
        </svg>
      )
    },
    {
      type: 'SUVs & MUVs',
      range: '₹70,000 - ₹1,40,000',
      popular: 'Innova, Scorpio, Safari, Duster',
      desc: 'Heavy ladder-frame chassis, large diesel blocks & high scrap tonnage.',
      icon: (
        <svg className="w-6 h-6 text-[#188A38]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="6" width="20" height="10" rx="2" />
          <circle cx="6.5" cy="18" r="2.5" />
          <circle cx="17.5" cy="18" r="2.5" />
        </svg>
      )
    },
    {
      type: 'Commercial Fleets',
      range: '₹1,50,000 - ₹5,00,000+',
      popular: 'Tata 407, Eicher, Leyland, Ace',
      desc: 'Maximum industrial steel salvage value with bulk fleet clearance pricing.',
      icon: (
        <svg className="w-6 h-6 text-[#188A38]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="1" y="4" width="13" height="12" rx="1" />
          <path d="M14 8h4l3 3v5h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="17.5" cy="18.5" r="2.5" />
        </svg>
      )
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Submit Vehicle Details',
      desc: 'Fill out the registration number, vehicle condition, and your pickup pincode in the valuation form above.',
      badge: '~2 Mins'
    },
    {
      step: '02',
      title: 'MoRTH Verification & Quote',
      desc: 'Our appraiser verifies Parivahan records, calculates highest scrap index rate, and confirms your free pickup slot.',
      badge: 'Within 15 Mins'
    },
    {
      step: '03',
      title: 'Free Towing & Spot Payment',
      desc: 'Flatbed recovery truck arrives at your doorstep. We inspect chassis number and transfer 100% funds via UPI/NEFT on the spot.',
      badge: 'Zero Towing Fee'
    },
    {
      step: '04',
      title: 'Official CoD & Deregistration',
      desc: 'Your vehicle is recycled in our government RVSF. We issue the official Certificate of Deposit (CoD) for up to 25% road tax rebate.',
      badge: '100% Legal Indemnity'
    }
  ];

  const faqs = [
    {
      q: 'Does my vehicle need to be in running condition or have tyres?',
      a: 'No, not at all. CarCrush24 accepts vehicles in any state — whether running, non-running, accidental, seized, or without tyres. Our heavy-duty hydraulic flatbed recovery trucks are equipped with heavy winches to safely pull and recover vehicles directly from basements, driveways, and road edges.'
    },
    {
      q: 'Is doorstep towing really 100% free?',
      a: 'Yes, absolutely. We provide 100% free doorstep towing across Delhi NCR, Noida, Gurugram, Faridabad, Ghaziabad, Haryana, and Punjab. Unlike local scrap dealers who deduct ₹2,500 - ₹5,000 for transport, our quoted valuation is the exact amount transferred to your account.'
    },
    {
      q: 'What is a Certificate of Deposit (CoD) and what benefit does it provide?',
      a: 'A Certificate of Deposit (CoD) is an official digital certificate generated on the MoRTH Parivahan portal when a vehicle is scrapped at an authorized RVSF like CarCrush24. It legally transfers all liability away from you, and entitles you to up to a 25% discount on Road Tax (Motor Vehicle Tax) when purchasing a new personal vehicle, plus automaker scrap discounts!'
    },
    {
      q: 'What documents do I need to scrap my vehicle?',
      a: 'You only need 3 basic documents: (1) Original RC (Registration Certificate) or police lost report, (2) Copy of Aadhaar / PAN card of the registered owner, and (3) Bank account details or cancelled cheque for instant digital payout transfer.'
    },
    {
      q: 'Can I scrap a vehicle registered in another state (e.g. HR, UP, DL, PB)?',
      a: 'Yes. As a government-authorized RVSF facility, CarCrush24 is legally authorized to scrap and deregister vehicles from all Indian states and Union Territories. We coordinate directly with state RTOs to ensure hassle-free deregistration.'
    },
    {
      q: 'When and how will I receive the payment?',
      a: 'Payment is made instantly on the spot via UPI or instant NEFT/IMPS bank transfer before the vehicle is hooked onto our flatbed truck. You will receive immediate SMS/bank confirmation on your phone.'
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-[#F8F9F5]">
      {/* Floating Navbar */}
      <Navbar />

      <main className="flex-1 flex flex-col pt-24 sm:pt-28">

        {/* ================= HERO HEADER ================= */}
        <section className="relative py-10 sm:py-14 lg:py-16 overflow-hidden">
          {/* Ambient lighting accents */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#6FCF3C]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F5C33]/10 border border-[#1F5C33]/20 mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#188A38] animate-pulse" />
              <span className="text-[#1F5C33] text-xs sm:text-[13px] font-black tracking-wider uppercase">
                GOVERNMENT-AUTHORIZED RVSF VALUATION DESK • 100% FREE &amp; ZERO OBLIGATION
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131A15] tracking-tight leading-[1.12] max-w-4xl mx-auto">
              Get Your Guaranteed Scrap Value <span className="text-[#188A38]">In 60 Seconds</span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-3.5 sm:mt-4 text-[#5B6660] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
              North India’s highest vehicle scrap valuation with guaranteed transparent pricing. Free doorstep flatbed pickup, instant bank payout on pickup, and official MoRTH Certificate of Deposit (CoD).
            </p>



          </div>
        </section>

        {/* ================= MAIN 2-COLUMN VALUATION HUB ================= */}
        <section className="relative pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

              {/* LEFT COLUMN: THE STANDALONE QUOTE FORM (7 cols) */}
              <div className="lg:col-span-7">
                <div className="relative">
                  {/* Subtle decorative glow */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-[#188A38]/20 to-[#6FCF3C]/20 rounded-[32px] blur-lg opacity-40" />

                  {/* Standalone Quote Form */}
                  <QuoteForm isStandalone={true} className="w-full relative z-10" />
                </div>
              </div>

              {/* RIGHT COLUMN: VALUATION TRANSPARENCY & TRUST COMPANIONS (5 cols) */}
              <div className="lg:col-span-5 space-y-6">

                {/* CARD 1: How We Calculate Your Value */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E4E7DE] shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#188A38]/10 text-[#188A38] flex items-center justify-center">
                      <IndianRupee className="w-5 h-5 text-[#188A38]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-[#131A15] leading-tight">
                        Transparent Valuation Guarantee
                      </h3>
                      <p className="text-xs text-[#7A867F]">How we guarantee the highest scrap payout</p>
                    </div>
                  </div>

                  <div className="space-y-3.5 text-xs sm:text-[13px]">
                    <div className="flex items-start gap-3 p-3 bg-[#F8F9F5] rounded-xl border border-[#E4E7DE]">
                      <div className="w-7 h-7 rounded-lg bg-white border border-[#DCE1D7] flex items-center justify-center flex-shrink-0">
                        <Scale className="w-4 h-4 text-[#188A38]" />
                      </div>
                      <div>
                        <strong className="text-[#131A15] block font-bold">Unladen Kerb Weight Calculation</strong>
                        <span className="text-[#5B6660] leading-relaxed">
                          We use manufacturer kerb weight multiplied by live daily scrap steel and iron commodities indices.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-[#F8F9F5] rounded-xl border border-[#E4E7DE]">
                      <div className="w-7 h-7 rounded-lg bg-white border border-[#DCE1D7] flex items-center justify-center flex-shrink-0">
                        <Cog className="w-4 h-4 text-[#188A38]" />
                      </div>
                      <div>
                        <strong className="text-[#131A15] block font-bold">Salvageable Parts &amp; Alloys Credit</strong>
                        <span className="text-[#5B6660] leading-relaxed">
                          Bonus value awarded for intact catalytic converter, copper alternators, battery, and working components.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-[#F8F9F5] rounded-xl border border-[#E4E7DE]">
                      <div className="w-7 h-7 rounded-lg bg-white border border-[#DCE1D7] flex items-center justify-center flex-shrink-0">
                        <Truck className="w-4 h-4 text-[#188A38]" />
                      </div>
                      <div>
                        <strong className="text-[#131A15] block font-bold">Zero Towing Fees (Save ₹3,000+)</strong>
                        <span className="text-[#5B6660] leading-relaxed">
                          Local junkyards deduct ₹2,500–₹5,000 for towing. CarCrush24 doorstep recovery is always 100% free.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-[#F8F9F5] rounded-xl border border-[#E4E7DE]">
                      <div className="w-7 h-7 rounded-lg bg-white border border-[#DCE1D7] flex items-center justify-center flex-shrink-0">
                        <Percent className="w-4 h-4 text-[#188A38]" />
                      </div>
                      <div>
                        <strong className="text-[#131A15] block font-bold">MoRTH 25% Road Tax Savings</strong>
                        <span className="text-[#5B6660] leading-relaxed">
                          Our official Certificate of Deposit (CoD) earns you up to 25% road tax rebate on your next new vehicle purchase.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD 2: Need Immediate Phone / WhatsApp Assistance? */}
                <div className="bg-[#112317] rounded-3xl p-6 text-white border border-[#23452c] shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#6FCF3C]/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10">
                    <span className="text-[#6FCF3C] text-[11px] font-black uppercase tracking-wider block mb-1">
                      Prefer Instant On-Call Appraisal?
                    </span>
                    <h4 className="text-lg sm:text-xl font-black text-white leading-snug mb-2">
                      Speak Directly With Our Scrap Desk
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#A1B2A5] leading-relaxed mb-4">
                      Share your RC or photos on WhatsApp for a fast-track 5-minute valuation from our certified scrap engineers.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-2.5">
                      <a
                        href="https://wa.me/919876543210?text=Hi%20CarCrush24,%20I%20want%20to%20get%20an%20instant%20quote%20for%20my%20vehicle."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
                      >
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.09c-1.52 0-3.02-.41-4.32-1.18l-.31-.18-3.2.84.85-3.12-.2-.32c-.85-1.35-1.3-2.93-1.3-4.52 0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.2-8.2 8.2zm4.5-6.15c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
                        </svg>
                        <span>WhatsApp Photos for Quote</span>
                      </a>

                      {/* <a
                        href="tel:1800227278"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/15 transition-all cursor-pointer"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                        <span>1800-22-CRUSH</span>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Official Site Footer */}
      <Footer />
    </div>
  );
}
