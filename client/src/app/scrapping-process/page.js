import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ExternalLink, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Detailed Vehicle Scrapping Process Guide | VScrap Parivahan Steps | CarCrush24',
  description:
    'Follow these detailed steps to legally scrap your old vehicle using the official VScrap Parivahan system. From RVSF inspection to instant payout, CoD issuance, and RTO deregistration.',
  alternates: {
    canonical: 'https://carcrush24.com/scrapping-process',
  },
  openGraph: {
    title: 'Detailed Vehicle Scrapping Process Guide | VScrap Parivahan Steps | CarCrush24',
    description:
      'Follow these detailed steps to legally scrap your old vehicle using the official VScrap Parivahan system. From RVSF inspection to instant payout, CoD issuance, and RTO deregistration.',
    url: 'https://carcrush24.com/scrapping-process',
    siteName: 'CarCrush24',
    type: 'article',
  },
};

const processSteps = [
  {
    step: 1,
    title: 'Contact a Registered Vehicle Scrapping Facility (RVSF)',
    description:
      'Begin by reaching out to an authorized RVSF listed on the VScrap Portal. The vehicle owner must share the following essential documents:',
    bullets: [
      'Registration Certificate (RC)',
      'Registration number',
      'Chassis number',
      'Mobile number linked to the vehicle registration',
    ],
  },
  {
    step: 2,
    title: 'Physical Vehicle Inspection by RVSF',
    description: 'The RVSF conducts a physical inspection to verify:',
    bullets: [
      'Chassis/VIN number matches the RC',
      'Registration Certificate details',
    ],
    note: 'Note: This inspection is mandatory before initiating the online scrapping request on the VScrap Parivahan Portal.',
  },
  {
    step: 3,
    title: 'Visit VAHAN Scrapping Portal',
    description: 'Access the official government portal:',
    link: {
      url: 'https://vscrap.parivahan.gov.in/',
      label: 'https://vscrap.parivahan.gov.in/',
    },
    subtext: 'The RVSF (or vehicle owner) initiates the process with an OTP sent to the registered mobile number.',
  },
  {
    step: 4,
    title: 'Enter Vehicle Details & Submit OTP',
    bullets: [
      'Select "Apply for Vehicle Scrapping" on the portal',
      'Enter the vehicle registration number',
      'Enter the last 5 digits of the chassis number',
      'Submit the OTP received on the registered mobile number',
      "Once verified, you'll be able to access the vehicle details",
    ],
  },
  {
    step: 5,
    title: 'Fill (Application Form 2 For Vehicle Scrapping)',
    description: 'Complete the application Form 2 For Vehicle Scrapping with the following details:',
    bullets: [
      'PAN number',
      'Aadhaar number',
      'Current address',
      'Contact information',
      'Bank account details (for receiving payment)',
    ],
    subSection: {
      heading: 'Upload the required documents:',
      bullets: [
        'Registration Certificate (RC)',
        'ID/address proof',
        'Cancelled cheque or bank passbook',
      ],
    },
  },
  {
    step: 6,
    title: 'Select RVSF Centre & Submit',
    bullets: [
      'Choose your preferred Registered Vehicle Scrapping Facility (RVSF) yard through the VScrap Parivahan portal.',
      'Carefully review all entered details for accuracy.',
      'Submit the online application for vehicle scrapping.',
    ],
  },
  {
    step: 7,
    title: 'RVSF Accepts Request & Makes Payment',
    bullets: [
      'The RVSF verifies your application on the VScrap Portal.',
      "Once approved, the scrapping centre transfers the agreed amount directly to the vehicle owner's bank account.",
    ],
  },
  {
    step: 8,
    title: 'Generate Certificate of Deposit (COD)',
    bullets: [
      'RVSF confirms the application in the portal',
      'RVSF enters the scrap value of the vehicle',
      'The Certificate of Deposit (COD) is generated through the portal',
    ],
    note: 'Note: You can use the COD to claim incentives or benefits when purchasing a new vehicle.',
  },
  {
    step: 9,
    title: 'Vehicle Handover',
    bullets: [
      'The vehicle owner submits the original RC, keys, and required documents to the RVSF.',
      'The vehicle status is updated to "received for scrapping" in the official VScrap Portal database.',
    ],
  },
  {
    step: 10,
    title: 'De-register Vehicle at RTO',
    bullets: [
      'The CVS is submitted via the VAHAN portal or physically at the respective RTO office.',
      'The RTO then cancels the registration, completing the legal scrapping process.',
    ],
  },
];

export default function ScrappingProcessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9F5]">
      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Schema.org HowTo Structured Data for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Legally Scrap Your Old Vehicle on VScrap Parivahan',
            description:
              'Step-by-step guide explaining the legal end-of-life vehicle scrapping process in India using an authorized RVSF and MoRTH VScrap Parivahan portal.',
            step: processSteps.map((item) => ({
              '@type': 'HowToStep',
              position: item.step,
              name: item.title,
              itemListElement: [
                {
                  '@type': 'HowToDirection',
                  text: item.description || item.bullets?.[0] || item.title,
                },
              ],
            })),
          }),
        }}
      />

      <main className="flex-1 pt-28 sm:pt-32 pb-16">
        {/* ================= PAGE HERO HEADER ================= */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E8F8ED] border border-[#BCE7C6] text-[#188A38] text-xs font-bold tracking-wide mb-3">
            <span>Step by Step</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#131A15] tracking-tight leading-tight">
            Detailed Process Guide
          </h1>

          <p className="mt-3 text-sm sm:text-base text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            Follow these detailed steps to legally scrap your old vehicle using the VScrap Parivahan system
          </p>

          <div className="mt-6 flex items-center justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#188A38] hover:bg-[#157931] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all"
            >
              <span>Get Instant Scrap Valuation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ================= 10-STEP VERTICAL TIMELINE ================= */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Continuous Vertical Timeline Line on Left */}
            <div className="absolute left-[19px] sm:left-[23px] top-6 bottom-6 w-[2px] bg-[#E2E8F0] pointer-events-none" />

            <div className="space-y-6 sm:space-y-8">
              {processSteps.map((item) => (
                <div key={item.step} className="relative flex items-start gap-4 sm:gap-6">
                  {/* Step Number Badge */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#22C55E] text-white font-black text-sm sm:text-base flex items-center justify-center shadow-xs flex-shrink-0 z-10 border-4 border-[#F8F9F5]">
                    {item.step}
                  </div>

                  {/* Step Detail Card */}
                  <div className="flex-1 bg-white rounded-2xl border border-[#E5E9E2] p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow">
                    <h2 className="text-base sm:text-lg font-bold text-[#111827] tracking-tight">
                      {item.title}
                    </h2>

                    {/* Introductory text if present */}
                    {item.description && (
                      <p className="mt-2 text-xs sm:text-[13.5px] text-[#4B5563] leading-relaxed">
                        {item.description}
                      </p>
                    )}

                    {/* Government Link if present */}
                    {item.link && (
                      <div className="mt-2">
                        <a
                          href={item.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#188A38] hover:text-[#126829] hover:underline"
                        >
                          <span>{item.link.label}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}

                    {/* Subtext if present */}
                    {item.subtext && (
                      <p className="mt-2 text-xs sm:text-[13.5px] text-[#4B5563] leading-relaxed">
                        {item.subtext}
                      </p>
                    )}

                    {/* Primary bullet points */}
                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="mt-3 space-y-1.5 pl-1">
                        {item.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#4B5563] leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-1.5 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Sub-section (like Form 2 upload documents in step 5) */}
                    {item.subSection && (
                      <div className="mt-4 pt-3 border-t border-gray-100">
                        <p className="text-xs sm:text-[13px] font-bold text-[#111827] mb-2">
                          {item.subSection.heading}
                        </p>
                        <ul className="space-y-1.5 pl-1">
                          {item.subSection.bullets.map((docBullet, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#4B5563] leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-1.5 flex-shrink-0" />
                              <span>{docBullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Highlighted Warning/Information Note */}
                    {item.note && (
                      <div className="mt-3.5 pt-3 border-t border-gray-100">
                        <p className="text-xs sm:text-[12.5px] font-bold text-[#15803D] leading-relaxed">
                          {item.note}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ASSISTANCE HELPDESK BANNER ================= */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#EAF7EE] border border-[#BCE7C6] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#188A38] text-white flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#111827]">
                  Need Help With the VScrap Portal Application?
                </h3>
                <p className="text-xs text-[#4B5563] mt-0.5">
                  Our certified compliance officers complete the entire Parivahan submission on your behalf.
                </p>
              </div>
            </div>

            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#188A38] hover:bg-[#157931] text-white font-bold text-xs sm:text-sm tracking-tight transition-all flex-shrink-0"
            >
              <span>Start Free Assisted Scrappage</span>
              <span>→</span>
            </Link>
          </div>
        </div>

      </main>

      {/* Official Site Footer */}
      <Footer />
    </div>
  );
}
