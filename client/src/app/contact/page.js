'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SectionHeader from '../../components/SectionHeader';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    inquiryType: 'Individual Vehicle Scrappage',
    vehicleNumber: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'How is the scrap metal price calculated for my vehicle?',
      a: 'CarCrush24 uses an algorithmic, transparent pricing model based on your car’s actual kerb weight, current scrap steel & copper index prices, engine condition, and recoverable metal weight. We never deduct arbitrary fees or allow middlemen cuts.',
    },
    {
      q: 'Can I scrap a vehicle with an existing bank loan or hypothecation?',
      a: 'To legally scrap a vehicle, all financial liens must be settled. You will need a Form 35 (NOC) and a Loan Closure / Foreclosure certificate from your bank. Our compliance team can assist you through this step.',
    },
    {
      q: 'What is a Certificate of Deposit (CoD) and how does it save me money?',
      a: 'A Certificate of Deposit (CoD) is an official government-issued digital document generated on Parivahan upon scrapping. It entitles you to up to a 25% concession on Motor Vehicle Road Tax on new personal cars (and up to 15% on commercial vehicles), plus additional automaker discounts!',
    },
    {
      q: 'Is doorstep vehicle towing genuinely 100% free?',
      a: 'Yes, absolutely. CarCrush24 operates a dedicated fleet of flatbed recovery trucks across Delhi NCR, Haryana, Punjab, Chandigarh, Uttar Pradesh, Uttarakhand, and Jammu & Kashmir. Doorstep pickup is completely free with zero hidden towing charges.',
    },
    {
      q: 'What happens if my car is not in running condition or has flat tires?',
      a: 'Our hydraulic flatbed trucks and winches can safely recover non-running, accidental, rusty, or stranded vehicles directly from basements, driveways, or roadside parking spots without any damage to your property.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FBFDFB]">
      {/* Floating Pill Navbar */}
      <Navbar />

      <main className="flex-1 flex flex-col pt-24 sm:pt-28">

        {/* ================= HERO SECTION ================= */}
        <section className="relative py-12 sm:py-16 overflow-hidden">
          {/* Subtle Ambient Background Wash */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
            <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-[#6FCF3C]/8 blur-3xl" />
            <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-[#188A38]/5 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionHeader
              as="h1"
              eyebrow="AUTHORIZED SCRAPPAGE HELPDESK"
              title="We're Here to Help You Retire"
              highlight="Your Vehicle Safely & Legally."
              description="Speak directly with certified vehicle compliance officers, schedule free doorstep flatbed towing, or get answers on Parivahan RTO de-registration and Certificate of Deposit (CoD)."
              align="center"
              titleClassName="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#111827] tracking-tight leading-[1.15] max-w-4xl mx-auto"
            />
          </div>
        </section>


        {/* ================= 4 DIRECT CONTACT CHANNELS ================= */}
        <section className="relative pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

            {/* Channel 1: Toll Free Phone */}
            <div className="rounded-3xl bg-white border border-[#E8ECE4] p-6 shadow-xs hover:shadow-md hover:border-[#188A38]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8ED] text-[#188A38] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <h3 className="text-base font-black text-[#111827] tracking-tight">Toll-Free Helpline</h3>
                <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                  Call our advisory desk for instant RTO guidance &amp; impound protection.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-gray-100">
                <a
                  href="tel:1800227278"
                  className="text-sm font-black text-[#188A38] hover:underline flex items-center gap-1.5"
                >
                  <span>1800-22-CRUSH</span>
                  <span>→</span>
                </a>
                <span className="text-[11px] text-[#9CA3AF] block mt-0.5">Toll-free across India</span>
              </div>
            </div>

            {/* Channel 2: WhatsApp Desk */}
            <div className="rounded-3xl bg-white border border-[#E8ECE4] p-6 shadow-xs hover:shadow-md hover:border-[#188A38]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8ED] text-[#188A38] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.09c-1.52 0-3.02-.41-4.32-1.18l-.31-.18-3.2.84.85-3.12-.2-.32c-.85-1.35-1.3-2.93-1.3-4.52 0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.2-8.2 8.2zm4.5-6.15c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
                  </svg>
                </div>
                <h3 className="text-base font-black text-[#111827] tracking-tight">WhatsApp Scrap Desk</h3>
                <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                  Send car photos &amp; RC copy for a 5-minute photo valuation report.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-gray-100">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-black text-[#188A38] hover:underline flex items-center gap-1.5"
                >
                  <span>Chat on WhatsApp</span>
                  <span>→</span>
                </a>
                <span className="text-[11px] text-[#9CA3AF] block mt-0.5">Average reply in 3 mins</span>
              </div>
            </div>

            {/* Channel 3: Fleet & Corporate */}
            <div className="rounded-3xl bg-white border border-[#E8ECE4] p-6 shadow-xs hover:shadow-md hover:border-[#188A38]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8ED] text-[#188A38] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <h3 className="text-base font-black text-[#111827] tracking-tight">Email Support</h3>
                <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                  Send official RTO de-registration documents or corporate inquiries.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-gray-100">
                <a
                  href="mailto:support@carcrush24.com"
                  className="text-sm font-black text-[#188A38] hover:underline flex items-center gap-1.5"
                >
                  <span>support@carcrush24.com</span>
                  <span>→</span>
                </a>
                <span className="text-[11px] text-[#9CA3AF] block mt-0.5">Monitored 24/7</span>
              </div>
            </div>

            {/* Channel 4: Corporate Head Office */}
            <div className="rounded-3xl bg-white border border-[#E8ECE4] p-6 shadow-xs hover:shadow-md hover:border-[#188A38]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8ED] text-[#188A38] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <h3 className="text-base font-black text-[#111827] tracking-tight">HQ &amp; Facility</h3>
                <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                  Sector 62, Electronic City, Noida, Delhi-NCR, UP 201309.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-gray-100">
                <a
                  href="tel:1800227278"
                  className="text-sm font-black text-[#188A38] hover:underline flex items-center gap-1.5"
                >
                  <span>1800-22-CRUSH</span>
                  <span>→</span>
                </a>
                <span className="text-[11px] text-[#9CA3AF] block mt-0.5">Open 7 days a week</span>
              </div>
            </div>

          </div>
        </section>


        {/* ================= MAIN INTERACTIVE CONTACT FORM ================= */}
        <section className="relative py-10 sm:py-16 bg-white border-y border-[#E8ECE4]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#FAFDFB] border border-[#E2E8F0] p-6 sm:p-10 lg:p-12 shadow-xs">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F8ED] text-[#188A38] text-xs font-bold uppercase tracking-wider w-fit mb-4">
                <span className="w-2 h-2 rounded-full bg-[#188A38] animate-pulse" />
                Rapid Inquiry Routing
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight mb-2">
                Send a Message to Our Compliance Team
              </h2>
              <p className="text-xs sm:text-[13.5px] text-[#4B5563] leading-relaxed mb-8">
                Fill out your vehicle details or questions below. A certified CarCrush24 specialist will review your request and call back within 15 minutes.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#E8F8ED] border-2 border-[#6FCF3C] text-center">
                  <div className="w-14 h-14 rounded-full bg-[#188A38] text-white flex items-center justify-center mx-auto text-2xl mb-4 shadow-sm">
                    ✓
                  </div>
                  <h3 className="text-xl font-black text-[#111827]">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#374151] mt-2 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#188A38]">{formData.name}</strong>. A dedicated compliance officer has been assigned to your case and will call you on <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        city: '',
                        inquiryType: 'Individual Vehicle Scrappage',
                        vehicleNumber: '',
                        message: '',
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-[#188A38] text-white font-bold text-xs hover:bg-[#157831] transition-all shadow-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#D9E2DA] focus:border-[#188A38] focus:outline-none text-xs sm:text-sm text-[#111827] placeholder-gray-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#D9E2DA] focus:border-[#188A38] focus:outline-none text-xs sm:text-sm text-[#111827] placeholder-gray-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#D9E2DA] focus:border-[#188A38] focus:outline-none text-xs sm:text-sm text-[#111827] placeholder-gray-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                        City / Location
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Noida, Delhi, Gurugram, Jaipur"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#D9E2DA] focus:border-[#188A38] focus:outline-none text-xs sm:text-sm text-[#111827] placeholder-gray-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type & Vehicle Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#D9E2DA] focus:border-[#188A38] focus:outline-none text-xs sm:text-sm text-[#111827] transition-colors"
                      >
                        <option>Individual Vehicle Scrappage</option>
                        <option>RTO / Parivahan Deregistration Issue</option>
                        <option>Certificate of Deposit (CoD) Query</option>
                        <option>Commercial Fleet / Bulk Scrappage</option>
                        <option>Bank Seized / Impounded Vehicle</option>
                        <option>Other Legal / Technical Inquiries</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                        Vehicle Plate / Reg No. (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.vehicleNumber}
                        onChange={(e) => setFormData({ ...formData, vehicleNumber: e.target.value })}
                        placeholder="e.g. DL 3C AB 1234"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#D9E2DA] focus:border-[#188A38] focus:outline-none text-xs sm:text-sm text-[#111827] placeholder-gray-400 uppercase transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                      How Can We Help You?
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your vehicle status, registration state, missing papers, or any specific questions..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D9E2DA] focus:border-[#188A38] focus:outline-none text-xs sm:text-sm text-[#111827] placeholder-gray-400 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#188A38] to-[#157831] hover:from-[#157831] hover:to-[#126227] text-white font-black text-xs sm:text-sm tracking-tight transition-all shadow-md hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Connect With Compliance Specialist</span>
                    <span>→</span>
                  </button>

                  <p className="text-[11px] text-[#9CA3AF] text-center">
                    🔒 We strictly adhere to MoRTH privacy protocols. Your contact details will never be shared with brokers.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>


        {/* ================= FREQUENTLY ASKED QUESTIONS ================= */}
        <section className="relative py-12 sm:py-16 bg-[#F8FAF8] overflow-hidden border-b border-[#E8ECE4]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="COMMON QUESTIONS"
              title="Frequently Asked"
              highlight="Questions."
              description="Everything you need to know about vehicle scrappage, legal indemnity, and Parivahan regulations."
              align="center"
              className="mb-10 max-w-3xl"
              titleClassName="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight"
            />

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-white border border-[#E5EAE5] overflow-hidden shadow-2xs transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#111827] hover:text-[#188A38] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <span className="w-6 h-6 rounded-full bg-[#F2F4F2] flex items-center justify-center text-xs text-[#188A38] flex-shrink-0">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-xs text-[#5B6660] leading-relaxed border-t border-gray-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ================= CLOSING INSTANT VALUATION CTA BANNER ================= */}
        <section className="relative py-14 sm:py-18 bg-[#FBFDFB] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl sm:rounded-[36px] bg-[#0A160D] border-2 border-[#1E3B23] p-8 sm:p-12 lg:p-14 shadow-[0_16px_50px_rgba(0,0,0,0.12)] text-white overflow-hidden">

              <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#6FCF3C]/12 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-[#188A38]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center gap-3 mb-3 sm:mb-4">
                  <span className="w-8 sm:w-12 h-[2px] bg-[#6FCF3C]" />
                  <span className="text-[#6FCF3C] text-xs sm:text-[13px] font-black tracking-[0.25em] uppercase">
                    WANT A SCRAP ESTIMATE NOW?
                  </span>
                  <span className="w-8 sm:w-12 h-[2px] bg-[#6FCF3C]" />
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-white tracking-tight leading-[1.15]">
                  Get an Instant Online Valuation in Under 2 Minutes.
                </h2>

                <p className="mt-4 sm:mt-5 text-gray-300 text-xs sm:text-[14px] leading-relaxed max-w-2xl mx-auto font-normal">
                  Calculate your vehicle’s fair commodity scrap price online right now without waiting for a callback.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/quote"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6FCF3C] to-[#22C55E] text-[#070D09] font-black text-sm sm:text-base tracking-tight hover:scale-105 active:scale-95 transition-all shadow-[0_4px_24px_rgba(111,207,60,0.35)] cursor-pointer"
                  >
                    <span>Calculate Scrap Value Online</span>
                    <span className="text-lg leading-none">→</span>
                  </Link>

                  <a
                    href="tel:1800227278"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-sm sm:text-base tracking-tight transition-all cursor-pointer"
                  >
                    <span>1800-22-CRUSH</span>
                  </a>
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
