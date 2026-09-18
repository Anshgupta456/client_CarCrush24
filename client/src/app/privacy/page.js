'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useCompany } from '../../context/CompanyContext';
import { defaultPolicies } from '../../data/defaultPolicies';
import {
  ShieldCheck,
  FileCheck,
  Clock,
  Building2,
  Mail,
  Phone,
  MapPin,
  Lock,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

export default function PrivacyPolicyPage() {
  const { company } = useCompany();
  const [policy, setPolicy] = useState(defaultPolicies.privacy);
  const [activeSection, setActiveSection] = useState('');

  // Fetch updated policy from API
  useEffect(() => {
    let ignore = false;

    const fetchPolicy = async () => {
      try {
        const res = await fetch('/api/policies/privacy');
        if (res.ok && !ignore) {
          const json = await res.json();
          if (json.success && json.data) {
            setPolicy(json.data);
          }
        }
      } catch (err) {
        console.warn('[Privacy] Fetch failed, using default template:', err.message);
      }
    };

    fetchPolicy();

    return () => {
      ignore = true;
    };
  }, []);

  const sections = policy?.sections || defaultPolicies.privacy.sections;

  return (
    <div className="min-h-screen bg-[#F8F9F5] text-[#131A15] flex flex-col selection:bg-[#6FCF3C]/30 selection:text-[#16311F]">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-14 sm:pt-36 sm:pb-20 bg-gradient-to-b from-[#112317] via-[#0E1C12] to-[#0A150D] text-white overflow-hidden border-b border-[#1C3621]">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#6FCF3C]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#188A38]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#188A38]/20 border border-[#6FCF3C]/30 text-[#6FCF3C] text-xs font-semibold tracking-wide uppercase shadow-2xs">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Legal Disclosure • RVSF Regulatory Document</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading leading-tight text-white">
            {policy?.title || 'Privacy Policy'}
          </h1>

          <p className="text-sm sm:text-base text-[#A1B2A5] max-w-2xl mx-auto leading-relaxed">
            {policy?.summary ||
              'How CarCrush24 handles your personal information, vehicle registration documents, and MoRTH Parivahan compliance data.'}
          </p>

          {/* Meta Ribbon */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#C5D4C9]">
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <FileCheck className="w-3.5 h-3.5 text-[#6FCF3C]" />
              <span>
                Version: <strong className="text-white font-mono">{policy?.version || '1.2.0'}</strong>
              </span>
            </div>

            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <Clock className="w-3.5 h-3.5 text-[#6FCF3C]" />
              <span>
                Effective Date: <strong className="text-white">{policy?.effectiveDate || 'September 18, 2026'}</strong>
              </span>
            </div>

            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <Lock className="w-3.5 h-3.5 text-[#6FCF3C]" />
              <span>DPDP Act 2023 &amp; IT Act 2000 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Quick Clause Navigator (Sticky on desktop) */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white border border-[#E4E7DE] rounded-3xl p-6 shadow-2xs">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#1F5C33] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-3.5 bg-[#6FCF3C] rounded-full" />
                  <span>Table of Contents</span>
                </h3>

                <nav className="space-y-1">
                  {sections.map((sec, idx) => (
                    <a
                      key={sec.id || idx}
                      href={`#${sec.id || `clause-${idx}`}`}
                      onClick={() => setActiveSection(sec.id || `clause-${idx}`)}
                      className={`block px-3 py-2 rounded-xl text-xs transition-all leading-snug ${
                        activeSection === (sec.id || `clause-${idx}`)
                          ? 'bg-[#1F5C33] text-white font-semibold shadow-xs'
                          : 'text-[#5B6660] hover:text-[#131A15] hover:bg-[#F8F9F5]'
                      }`}
                    >
                      {sec.heading}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Verified Entity Badge */}
              <div className="bg-[#112317] text-white border border-[#1C3621] rounded-3xl p-6 shadow-2xs space-y-3">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#6FCF3C]" />
                  <span className="text-xs font-bold tracking-wider uppercase text-[#6FCF3C]">
                    Authorized Entity
                  </span>
                </div>
                <h4 className="text-sm font-bold font-heading">
                  {company?.companyName || 'CarCrush24'}
                  {company?.legalName ? ` (${company.legalName})` : ''}
                </h4>
                <p className="text-[11.5px] text-[#A1B2A5] leading-relaxed">
                  Govt-authorized Registered Vehicle Scrapping Facility (RVSF) operating under Central MoRTH Notification &amp; Parivahan database.
                </p>
                <div className="pt-2 border-t border-white/10 text-[11px] text-[#C5D4C9] space-y-1.5">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#6FCF3C] flex-shrink-0" />
                    <span className="truncate">{company?.address || 'Roorkee, Uttarakhand'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#6FCF3C] flex-shrink-0" />
                    <span>{company?.tollFreePhone || '1800-22-CRUSH'}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Column: Policy Document Clauses */}
          <article className="lg:col-span-8 order-1 lg:order-2 space-y-8 bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-10 shadow-2xs">
            {sections.map((sec, idx) => (
              <section
                key={sec.id || idx}
                id={sec.id || `clause-${idx}`}
                className="scroll-mt-32 space-y-3 pb-8 border-b border-[#E4E7DE]/80 last:border-b-0 last:pb-0"
              >
                <h2 className="text-base sm:text-lg font-bold text-[#131A15] font-heading tracking-tight flex items-start gap-2.5">
                  <span className="inline-block w-2 h-4 bg-[#1F5C33] rounded-full mt-1 flex-shrink-0" />
                  <span>{sec.heading}</span>
                </h2>

                <div className="text-xs sm:text-[13.5px] text-[#4A5568] leading-relaxed whitespace-pre-line pl-4 sm:pl-5 border-l border-[#E4E7DE]/70 font-normal">
                  {sec.content}
                </div>
              </section>
            ))}

            {/* Compliance & Grievance Box */}
            <div className="p-6 rounded-2xl bg-[#F8F9F5] border border-[#E4E7DE] space-y-3 mt-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#188A38]" />
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#131A15]">
                  Need Assistance or Data Correction?
                </h4>
              </div>
              <p className="text-xs text-[#5B6660] leading-relaxed">
                If you have questions regarding personal records submitted for your Certificate of Deposit (CoD), reach out directly to our compliance desk at{' '}
                <a
                  href={`mailto:${company?.email || 'support@carcrush24.com'}`}
                  className="text-[#1F5C33] font-semibold underline underline-offset-2"
                >
                  {company?.email || 'support@carcrush24.com'}
                </a>{' '}
                or call Toll-Free{' '}
                <a
                  href={`tel:${company?.tollFreeTel || '1800227278'}`}
                  className="text-[#1F5C33] font-semibold"
                >
                  {company?.tollFreePhone || '1800-22-CRUSH'}
                </a>.
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
