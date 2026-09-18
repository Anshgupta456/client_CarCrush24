'use client';

import React from 'react';
import { useCompany } from '../context/CompanyContext';
import { trackVisitorEvent } from './GoogleAnalytics';

export function HelplineButton({ className = '', showIcon = true, prefix = '' }) {
  const { company } = useCompany();
  const phone = company?.tollFreePhone || '1800-22-CRUSH';
  const tel = company?.tollFreeTel || '1800227278';

  return (
    <a
      href={`tel:${tel}`}
      onClick={() => {
        trackVisitorEvent('phone_call_click', {
          category: 'Inquiry',
          label: phone,
        });
      }}
      className={
        className ||
        'w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-sm sm:text-base tracking-tight transition-all cursor-pointer'
      }
    >
      {showIcon && (
        <svg className="w-4 h-4 text-[#6FCF3C]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      )}
      <span>{prefix}{phone}</span>
    </a>
  );
}

export function SidebarHelplineCard() {
  const { company } = useCompany();
  const phone = company?.tollFreePhone || '1800-22-CRUSH';
  const tel = company?.tollFreeTel || '1800227278';

  return (
    <div className="p-4 rounded-2xl bg-[#F4F8F5] border border-[#D9E6DC] text-center">
      <div className="w-8 h-8 rounded-full bg-[#188A38]/10 text-[#188A38] flex items-center justify-center mx-auto mb-2">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </div>
      <h4 className="text-xs font-bold text-[#111827]">Need Immediate Advice?</h4>
      <p className="text-[11px] text-[#6B7280] mt-1 mb-3">
        Speak directly with an authorized scrappage compliance specialist.
      </p>
      <a
        href={`tel:${tel}`}
        className="inline-block w-full py-2 px-4 rounded-full bg-white border border-[#D9E2DA] hover:border-[#188A38] text-[#111827] hover:text-[#188A38] text-xs font-bold transition-all shadow-2xs"
      >
        Call {phone} (Toll-Free)
      </a>
    </div>
  );
}

export default HelplineButton;
