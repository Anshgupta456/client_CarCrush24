'use client';

import React from 'react';
import { Phone } from 'lucide-react';
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
      {showIcon && <Phone className="w-4 h-4 flex-shrink-0" />}
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
        <Phone className="w-4 h-4" />
      </div>
      <h4 className="text-xs font-bold text-[#111827]">Need Immediate Advice?</h4>
      <p className="text-[11px] text-[#6B7280] mt-1 mb-3">
        Speak directly with an authorized scrappage compliance specialist.
      </p>
      <a
        href={`tel:${tel}`}
        className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 rounded-full bg-white border border-[#D9E2DA] hover:border-[#188A38] text-[#111827] hover:text-[#188A38] text-xs font-bold transition-all shadow-2xs"
      >
        <Phone className="w-3.5 h-3.5 text-[#188A38]" />
        <span>Contact: {phone}</span>
      </a>
    </div>
  );
}

export default HelplineButton;
