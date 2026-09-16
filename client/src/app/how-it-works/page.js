'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CtaBannerSection from '../../components/CtaBannerSection';
import SectionHeader from '../../components/SectionHeader';

export default function HowItWorksPage() {
  const [activeDocTab, setActiveDocTab] = useState('individual');

  const steps = [
    {
      number: '01',
      title: 'Request an Instant Online Quote',
      subtitle: 'Free & No-Obligation Market Valuation',
      time: '~2 Mins',
      desc: 'Share your vehicle details (Make, Model, Year, Fuel Type, and City) through our online quote form or direct helpline. Our algorithmic valuation engine calculates the highest scrap metal value based on real-time commodity scrap indices and vehicle kerb weight.',
      icon: (
        <svg className="w-8 h-8 text-[#188A38]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 5C6 3.9 6.9 3 8 3H20L26 9V27C26 28.1 25.1 29 24 29H8C6.9 29 6 28.1 6 27V5Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 3V9H26" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 11H18" strokeLinecap="round" />
          <path d="M10 15H15" strokeLinecap="round" />
          <path d="M10 19H13" strokeLinecap="round" />
          <circle cx="21" cy="22" r="5.5" fill="#188A38" stroke="white" strokeWidth="1.5" />
          <text x="21" y="25" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle" stroke="none">₹</text>
        </svg>
      ),
      highlights: [
        'Algorithmic transparent pricing',
        'Zero hidden towing or inspection fees',
        'Direct phone or WhatsApp support',
      ],
    },
    {
      number: '02',
      title: 'Digital Parivahan & RTO Verification',
      subtitle: 'Government Database Authentication',
      time: 'Instant Sync',
      desc: 'We cross-verify your vehicle registration directly with the Ministry of Road Transport and Highways (MoRTH) Parivahan database. Our compliance team verifies chassis numbers, engine stamps, ownership legality, and checks for any pending hypothecation/bank liens.',
      icon: (
        <svg className="w-9 h-9 text-[#188A38]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 18L9 11C9.6 9.6 11 8.7 12.6 8.7H21.4C23 8.7 24.4 9.6 25 11L28 18V25C28 25.6 27.6 26 27 26H25C24.4 26 24 25.6 24 25V24H10V25C10 25.6 9.6 26 9 26H7C6.4 26 6 25.6 6 25V18Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 14H25" strokeLinecap="round" />
          <circle cx="10.5" cy="20" r="1.5" fill="#188A38" />
          <circle cx="23.5" cy="20" r="1.5" fill="#188A38" />
          <path d="M23 15C23 15 27 13 30.5 15V21.5C30.5 25.5 26.8 28 26.8 28C26.8 28 23 25.5 23 21.5V15Z" fill="#188A38" stroke="white" strokeWidth="1.5" />
          <path d="M25 21L26.5 22.5L29 19.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      highlights: [
        'Direct API handshake with Parivahan Vahan',
        'Complete legal title & loan NOC clearance',
        'Guaranteed indemnity against misuse of chassis',
      ],
    },
    {
      number: '03',
      title: 'Free Doorstep Inspection & Pickup',
      subtitle: 'Zero Towing Fee Across 7 States & UTs',
      time: 'At Your Convenience',
      desc: 'Our certified recovery drivers arrive at your home, office, or garage with specialized hydraulic flatbed towing trucks. We complete a quick 5-minute physical chassis check, collect the physical registration documents, and securely load the vehicle.',
      icon: (
        <svg className="w-10 h-10 text-[#188A38]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M9 16L11 12H17L19 16H9Z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="11.5" cy="18" r="1.5" fill="#188A38" />
          <circle cx="17" cy="18" r="1.5" fill="#188A38" />
          <path d="M4 21H23L27 16H34V26H4V21Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M27 16V21H34" strokeLinecap="round" />
          <circle cx="9.5" cy="27" r="2.5" fill="none" strokeWidth="2" />
          <circle cx="29.5" cy="27" r="2.5" fill="none" strokeWidth="2" />
        </svg>
      ),
      highlights: [
        'Free flatbed towing across 7 North Indian States & UTs',
        'Zero physical effort required from car owner',
        'Digital receipt issued on pickup',
      ],
    },
    {
      number: '04',
      title: 'On-Spot Instant Payment Settlement',
      subtitle: 'Funds Transferred Before Vehicle Leaves',
      time: 'Immediate',
      desc: 'Before our towing truck leaves your premises, our finance desk releases the agreed scrap payout directly to your bank account via instant IMPS, NEFT, or UPI transfer. You verify payment receipt right on your phone in real time.',
      icon: (
        <svg className="w-9 h-9 text-[#188A38]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 14H6" strokeLinecap="round" />
          <path d="M2 18H5" strokeLinecap="round" />
          <path d="M3 22H6" strokeLinecap="round" />
          <path d="M12 13V8C12 7.4 12.4 7 13 7H27C27.6 7 28 7.4 28 8V13" strokeLinecap="round" />
          <text x="20" y="12" fill="#188A38" fontSize="6.5" fontWeight="bold" textAnchor="middle" stroke="none">₹</text>
          <rect x="8" y="13" width="24" height="15" rx="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M25 17.5H32V23.5H25C23.3 23.5 23.3 17.5 25 17.5Z" fill="#E8F8EE" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="27" cy="20.5" r="1" fill="#188A38" />
        </svg>
      ),
      highlights: [
        '100% digital bank transfer (IMPS / UPI)',
        'Guaranteed zero post-pickup deductions',
        'Instant payment voucher & acknowledgment',
      ],
    },
    {
      number: '05',
      title: 'Official CVS & CoD Issuance',
      subtitle: 'Government RTO Deregistration & Road-Tax Rebates',
      time: 'Within 24-48 Hours',
      desc: 'Once received at our Registered Vehicle Scrapping Facility (RVSF), the vehicle is officially scrapped under CCTV monitoring. The MoRTH Parivahan portal issues your Certificate of Deposit (CoD) and Certificate of Vehicle Scrapping (CVS), permanently striking off the vehicle from RTO databases.',
      icon: (
        <svg className="w-8 h-8 text-[#188A38]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="4" width="22" height="24" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 9H16" strokeLinecap="round" strokeWidth="2.5" />
          <path d="M9 13H23" strokeLinecap="round" />
          <path d="M9 17H19" strokeLinecap="round" />
          <path d="M9 21H16" strokeLinecap="round" />
          <circle cx="22" cy="22" r="3.5" fill="#188A38" stroke="white" strokeWidth="1" />
          <path d="M20.5 25L19.5 29L22 27.5L24.5 29L23.5 25" fill="#188A38" stroke="none" />
        </svg>
      ),
      highlights: [
        'Legally certified CVS & Certificate of Deposit (CoD)',
        'Up to 25% road-tax concession on new vehicle purchase',
        'Permanent deregistration with zero owner liability',
      ],
    },
  ];

  const depollutionStages = [
    {
      stage: 'Stage 01',
      title: 'Eco-Depollution & Fluid Purge',
      desc: 'Automated evacuation of engine oil, transmission fluid, battery acid, AC Freon refrigerants, and coolant with zero ground contamination.',
    },
    {
      stage: 'Stage 02',
      title: 'Hazardous Parts Dismantling',
      desc: 'Lead-acid / EV lithium-ion batteries, catalytic converters, airbags, and pyrotechnic seatbelts are dismantled by certified technicians.',
    },
    {
      stage: 'Stage 03',
      title: 'Material Segregation',
      desc: 'Tires, windscreens, seat foam, and copper wiring harnesses are sorted for secondary industrial re-processing.',
    },
    {
      stage: 'Stage 04',
      title: 'Industrial Baling & Metal Shearing',
      desc: 'The clean automotive chassis is compressed and sheared into clean steel scrap cubes, returned 90%+ into domestic steel making.',
    },
  ];

  const documentChecklist = {
    individual: [
      { name: 'Original Registration Certificate (RC)', req: 'Mandatory', note: 'If RC is lost, duplicate RC copy or Police NCR/FIR is accepted.' },
      { name: 'Aadhaar Card of Registered Owner', req: 'Mandatory', note: 'Self-attested copy for identity & ownership verification.' },
      { name: 'PAN Card of Registered Owner', req: 'Mandatory', note: 'Required for official banking payout records & TDS compliance.' },
      { name: 'Bank Details (Cancelled Cheque / Passbook)', req: 'Mandatory', note: 'Direct bank transfer of scrap valuation funds.' },
      { name: 'Car Physical Keys (Set of 2 or 1)', req: 'Mandatory', note: 'Required at time of doorstep towing.' },
    ],
    commercial: [
      { name: 'Original Commercial RC Book', req: 'Mandatory', note: 'Valid vehicle registration certificate.' },
      { name: 'Fitness & Tax Clearance Certificate', req: 'Mandatory', note: 'Confirmation of commercial status and road tax history.' },
      { name: 'RTO Permit Surrender Slip', req: 'Mandatory', note: 'Issued by issuing RTO authority.' },
      { name: 'Company Pan & Authorization Letter', req: 'If Fleet', note: 'Board resolution or letterhead authorization if company-owned.' },
      { name: 'Bank Account Cancelled Cheque', req: 'Mandatory', note: 'Must be in the name of the registered owner/firm.' },
    ],
    financed: [
      { name: 'Bank Loan Foreclosure Letter', req: 'Mandatory', note: 'Official letter from lender confirming total loan closure.' },
      { name: 'Form 35 (NOC from Financier)', req: 'Mandatory', note: 'Signed & stamped NOC from bank/NBFC removing hypothecation.' },
      { name: 'Original Registration Certificate (RC)', req: 'Mandatory', note: 'Original RC with active loan note.' },
      { name: 'Registered Owner KYC (Aadhaar & PAN)', req: 'Mandatory', note: 'Self-attested copy of registered car owner.' },
      { name: 'Bank Details for Payout', req: 'Mandatory', note: 'For instantaneous payout deposit.' },
    ],
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FBFDFB]">
      {/* Floating Pill Navbar */}
      <Navbar />

      <main className="flex-1 flex flex-col pt-24 sm:pt-28">

        {/* ================= HERO SECTION ================= */}
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
          {/* Subtle Ambient Background Wash */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
            <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-[#6FCF3C]/8 blur-3xl" />
            <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-[#188A38]/5 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionHeader
              as="h1"
              eyebrow="5-STEP RVSF VEHICLE SCRAPPAGE JOURNEY"
              title="How CarCrush24 Works:"
              highlight="Simple, Transparent &amp; Legally Certified."
              description="From instant digital valuation to doorstep towing and official MoRTH Parivahan RTO deregistrations—we handle every step so you can retire your end-of-life vehicle with total peace of mind."
              align="center"
              titleClassName="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#111827] tracking-tight leading-[1.14] max-w-4xl mx-auto"
            />

            {/* 3 Core Guarantees Banner */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-3.5 text-left">
                <span className="w-10 h-10 rounded-xl bg-[#E8F8ED] text-[#188A38] flex items-center justify-center font-black text-base flex-shrink-0">
                  🚚
                </span>
                <div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#111827]">Free Doorstep Towing</h4>
                  <p className="text-[11px] text-[#6B7280]">Across 7 North Indian States &amp; UTs</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-3.5 text-left">
                <span className="w-10 h-10 rounded-xl bg-[#E8F8ED] text-[#188A38] flex items-center justify-center font-black text-base flex-shrink-0">
                  ⚡
                </span>
                <div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#111827]">Instant Bank Transfer</h4>
                  <p className="text-[11px] text-[#6B7280]">On-spot before vehicle departs</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-3.5 text-left">
                <span className="w-10 h-10 rounded-xl bg-[#E8F8ED] text-[#188A38] flex items-center justify-center font-black text-base flex-shrink-0">
                  📜
                </span>
                <div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#111827]">MoRTH CoD &amp; CVS</h4>
                  <p className="text-[11px] text-[#6B7280]">100% legal indemnity &amp; tax rebates</p>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ================= THE 5-STEP JOURNEY SECTION ================= */}
        <section className="relative py-12 sm:py-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <SectionHeader
              eyebrow="STEP-BY-STEP WORKFLOW"
              title="From Instant Valuation to"
              highlight="Official MoRTH Certificate."
              description="A hassle-free, completely digital 5-step process designed for maximum transparency and convenience."
              align="center"
              className="mb-12 sm:mb-16 max-w-3xl"
              titleClassName="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#111827] tracking-tight leading-tight"
            />

            {/* Process Cards Container */}
            <div className="space-y-6 sm:space-y-8">
              {steps.map((item, index) => (
                <div
                  key={item.number}
                  className="relative rounded-3xl bg-[#FAFDFB] border border-[#E2E8F0] hover:border-[#188A38]/50 p-6 sm:p-8 transition-all duration-300 shadow-xs hover:shadow-lg group overflow-hidden"
                >
                  {/* Subtle Background Step Number */}
                  <span className="absolute top-4 right-6 text-6xl sm:text-8xl font-black text-[#E8ECE4]/50 pointer-events-none select-none leading-none">
                    {item.number}
                  </span>

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    {/* Left: Icon & Step Badge */}
                    <div className="lg:col-span-4 flex items-start sm:items-center gap-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#EAF7EE] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                        {item.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#188A38] text-white text-[11px] font-extrabold tracking-wider">
                            STEP {item.number}
                          </span>
                          <span className="text-[11px] font-bold text-[#188A38] bg-[#E8F8ED] px-2 py-0.5 rounded-full">
                            ⏱ {item.time}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-black text-[#111827] tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#188A38] font-bold mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Middle: Narrative Description */}
                    <div className="lg:col-span-5">
                      <p className="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Right: Key Highlights */}
                    <div className="lg:col-span-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#E5EAE5] lg:pl-6">
                      <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[#111827] mb-2">
                        Key Guarantees
                      </h4>
                      <ul className="space-y-1.5 text-[11px] text-[#374151]">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#16A34A] font-bold">✓</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ================= 4-STAGE RVSF DEPOLLUTION PROCESS ================= */}
        <section className="relative py-12 sm:py-16 bg-[#F8FAF8] overflow-hidden border-y border-[#E8ECE4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <SectionHeader
              eyebrow="BEHIND THE SCENES"
              title="What Happens at Our"
              highlight="Certified RVSF Facility?"
              description="Every vehicle processed at CarCrush24 undergoes a scientific 4-stage depollution protocol meeting zero-landfill standards."
              align="center"
              className="mb-10 sm:mb-12 max-w-3xl"
              titleClassName="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {depollutionStages.map((s, idx) => (
                <div
                  key={s.stage}
                  className="p-5 sm:p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#188A38]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-black text-[#188A38] uppercase tracking-wider bg-[#E8F8ED] px-2.5 py-1 rounded-full">
                        {s.stage}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-[#111827] mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs text-[#6B7280] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ================= REQUIRED DOCUMENTS CHECKLIST ================= */}
        <section className="relative py-12 sm:py-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <SectionHeader
              eyebrow="DOCUMENT CHECKLIST"
              title="Hassle-Free Verification:"
              highlight="What Documents Do You Need?"
              description="Keep these simple documents handy for instantaneous Parivahan verification and payment release."
              align="center"
              className="mb-8 sm:mb-10 max-w-3xl"
              titleClassName="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight"
            />

            {/* Document Tabs */}
            <div className="flex justify-center gap-2 sm:gap-3 mb-8">
              {[
                { id: 'individual', label: 'Private Cars' },
                { id: 'commercial', label: 'Commercial Vehicles' },
                { id: 'financed', label: 'Financed / Loan Vehicles' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveDocTab(tab.id)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all ${activeDocTab === tab.id
                    ? 'bg-[#188A38] text-white shadow-md'
                    : 'bg-[#F2F4F2] text-[#4B5563] hover:bg-[#E5EAE5]'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Checklist Table / List */}
            <div className="max-w-4xl mx-auto bg-[#FAFDFB] rounded-3xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs">
              <div className="space-y-4">
                {documentChecklist[activeDocTab].map((doc, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white border border-[#E9EFE9] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#E8F8ED] text-[#188A38] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-[13.5px] font-bold text-[#111827]">
                          {doc.name}
                        </h4>
                        <p className="text-[11px] text-[#6B7280] mt-0.5">
                          {doc.note}
                        </p>
                      </div>
                    </div>
                    <span className="self-start sm:self-center px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider bg-[#E8F8ED] text-[#188A38]">
                      {doc.req}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>


        {/* ================= CTA BANNER SECTION ================= */}
        <CtaBannerSection />

      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
