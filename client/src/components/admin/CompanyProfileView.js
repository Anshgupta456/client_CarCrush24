'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Globe,
  Save,
  RefreshCw,
  ExternalLink,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
  Calendar,
  MessageSquare,
  Truck,
} from 'lucide-react';
import { useCompany } from '../../context/CompanyContext';

export default function CompanyProfileView() {
  const { company, updateCompany, resetCompanyToDefault } = useCompany();

  const [companyForm, setCompanyForm] = useState({
    companyName: company?.companyName || 'CarCrush24',
    tagline: company?.tagline || 'Authorized Vehicle Scrappage Facility (RVSF)',
    tollFreePhone: company?.tollFreePhone || '1800-22-CRUSH',
    phone: company?.phone || '',
    email: company?.email || 'support@carcrush24.com',
    corporateEmail: company?.corporateEmail || 'info@carcrush24.com',
    address: company?.address || '',
    facilityAddress: company?.facilityAddress || company?.address || '',
    registeredOfficeAddress: company?.registeredOfficeAddress || '',
    whatsappNumber: company?.whatsappNumber || '',
    operatingHours: company?.operatingHours || 'Mon - Sat: 9:00 AM - 7:30 PM (Sunday Closed)',
    operatingHubs: company?.operatingHubs ? (Array.isArray(company.operatingHubs) ? company.operatingHubs.join(', ') : company.operatingHubs) : '',
    facebookUrl: company?.socialLinks?.facebook || company?.facebookUrl || '',
    twitterUrl: company?.socialLinks?.twitter || company?.twitterUrl || '',
    instagramUrl: company?.socialLinks?.instagram || company?.instagramUrl || '',
    linkedinUrl: company?.socialLinks?.linkedin || company?.linkedinUrl || '',
    youtubeUrl: company?.socialLinks?.youtube || company?.youtubeUrl || '',
  });

  const [companySaving, setCompanySaving] = useState(false);
  const [companyStatus, setCompanyStatus] = useState({ success: '', error: '' });

  // Sync form when context data updates
  useEffect(() => {
    if (company) {
      queueMicrotask(() => {
        setCompanyForm((prev) => ({
          ...prev,
          ...company,
          facilityAddress: company.facilityAddress || company.address || prev.facilityAddress || '',
          operatingHubs: Array.isArray(company.operatingHubs)
            ? company.operatingHubs.join(', ')
            : company.operatingHubs || prev.operatingHubs || '',
        }));
      });
    }
  }, [company]);

  const handleSaveCompany = async (e) => {
    e.preventDefault();
    setCompanyStatus({ success: '', error: '' });

    if (!companyForm.companyName.trim() || !companyForm.tollFreePhone.trim() || !companyForm.email.trim()) {
      setCompanyStatus({ error: 'Company Name, Toll-free Phone, and Support Email are required.' });
      return;
    }

    setCompanySaving(true);
    try {
      const res = await updateCompany(companyForm);
      setCompanySaving(false);
      if (res.success) {
        setCompanyStatus({
          success: 'Company profile updated successfully! All website pages are now updated dynamically.',
        });
        setTimeout(() => setCompanyStatus({ success: '', error: '' }), 6000);
      } else {
        setCompanyStatus({ error: res.error || 'Failed to update company details.' });
      }
    } catch {
      setCompanySaving(false);
      setCompanyStatus({ error: 'Failed to communicate with company configuration server.' });
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all company details back to official CarCrush24 defaults?')) {
      const def = resetCompanyToDefault();
      setCompanyForm(def);
      setCompanyStatus({ success: 'Reset to default company configuration.' });
      setTimeout(() => setCompanyStatus({ success: '', error: '' }), 4000);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Header Card */}
      <div className="bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-8 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6FCF3C]/20 text-[#16311F] text-xs font-semibold mb-2">
            <Building2 className="w-3.5 h-3.5 text-[#1F5C33]" />
            Dynamic Content Management
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#131A15] tracking-tight font-heading">
            Company Profile
          </h1>
          <p className="text-xs sm:text-sm text-[#5B6660] mt-1">
            Edit contact phone, email, addresses, WhatsApp, hubs, and socials. Changes instantly update the live website!
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <button
            type="button"
            onClick={handleResetDefaults}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F8F9F5] border border-[#E4E7DE] hover:border-[#1F5C33] text-xs font-semibold text-[#5B6660] hover:text-[#131A15] transition-all cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <Link
            href="/contact"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1F5C33] hover:bg-[#16311F] text-white text-xs font-semibold transition-all cursor-pointer shadow-xs"
          >
            <span>View Live Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Alert Notices */}
      {companyStatus.success && (
        <div className="p-4 rounded-2xl bg-[#188A38]/10 border border-[#188A38]/20 text-[#188A38] text-xs flex items-center gap-2.5 font-medium animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-[#188A38] flex-shrink-0" />
          <span>{companyStatus.success}</span>
        </div>
      )}
      {companyStatus.error && (
        <div className="p-4 rounded-2xl bg-[#D9534F]/10 border border-[#D9534F]/20 text-[#D9534F] text-xs flex items-center gap-2.5 font-medium animate-fadeIn">
          <ShieldAlert className="w-4 h-4 text-[#D9534F] flex-shrink-0" />
          <span>{companyStatus.error}</span>
        </div>
      )}

      {/* Main Grid: Form (8 cols) + Live Preview (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Container */}
        <div className="lg:col-span-8 space-y-6">
          <form onSubmit={handleSaveCompany} className="space-y-6">
            {/* Section 1: Brand & Identity */}
            <div className="bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#E4E7DE]">
                <Building2 className="w-4 h-4 text-[#1F5C33]" />
                <h2 className="text-sm font-bold text-[#131A15] font-heading">
                  Brand & Organization Identity
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                    Official Company Name
                  </label>
                  <input
                    type="text"
                    value={companyForm.companyName}
                    onChange={(e) => setCompanyForm({ ...companyForm, companyName: e.target.value })}
                    placeholder="CarCrush24 Pvt Ltd"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                    Tagline / RVSF Clearance Title
                  </label>
                  <input
                    type="text"
                    value={companyForm.tagline}
                    onChange={(e) => setCompanyForm({ ...companyForm, tagline: e.target.value })}
                    placeholder="Authorized Vehicle Scrappage Facility (RVSF)"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Contact Phone Numbers */}
            <div className="bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#E4E7DE]">
                <Phone className="w-4 h-4 text-[#1F5C33]" />
                <h2 className="text-sm font-bold text-[#131A15] font-heading">
                  Contact Phone & Helpline Details
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                    Toll-Free Helpline (Navbar / Footer / CTAs)
                  </label>
                  <input
                    type="text"
                    value={companyForm.tollFreePhone}
                    onChange={(e) => setCompanyForm({ ...companyForm, tollFreePhone: e.target.value })}
                    placeholder="1800-22-CRUSH"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                    required
                  />
                  <span className="text-[10px] text-[#5B6660] mt-1 block">
                    Shown in Header callout, Footer, Contact banner, and Blog sidebar.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                    Direct Operations Desk Phone
                  </label>
                  <input
                    type="text"
                    value={companyForm.phone}
                    onChange={(e) => setCompanyForm({ ...companyForm, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                  />
                  <span className="text-[10px] text-[#5B6660] mt-1 block">
                    Direct line for yard operations & pickup scheduling.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                    WhatsApp Chat Desk Number
                  </label>
                  <input
                    type="text"
                    value={companyForm.whatsappNumber}
                    onChange={(e) => setCompanyForm({ ...companyForm, whatsappNumber: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                  />
                  <span className="text-[10px] text-[#5B6660] mt-1 block">
                    Powers the WhatsApp buttons on Quote, Contact, and Lead cards.
                  </span>
                </div>
              </div>
            </div>

            {/* Section 3: Official Email Addresses */}
            <div className="bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#E4E7DE]">
                <Mail className="w-4 h-4 text-[#1F5C33]" />
                <h2 className="text-sm font-bold text-[#131A15] font-heading">
                  Official Email Addresses
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                    Customer Support Email
                  </label>
                  <input
                    type="email"
                    value={companyForm.email}
                    onChange={(e) => setCompanyForm({ ...companyForm, email: e.target.value })}
                    placeholder="support@carcrush24.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                    required
                  />
                  <span className="text-[10px] text-[#5B6660] mt-1 block">
                    Displayed in Footer, Contact Us card, and Certificate communications.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                    Corporate / Business Inquiries Email
                  </label>
                  <input
                    type="email"
                    value={companyForm.corporateEmail}
                    onChange={(e) => setCompanyForm({ ...companyForm, corporateEmail: e.target.value })}
                    placeholder="info@carcrush24.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                  />
                  <span className="text-[10px] text-[#5B6660] mt-1 block">
                    Used for bulk fleet scraping inquiries and OEM alliances.
                  </span>
                </div>
              </div>
            </div>

            {/* Section 4: Physical Addresses & Yard Locations */}
            <div className="bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#E4E7DE]">
                <MapPin className="w-4 h-4 text-[#1F5C33]" />
                <h2 className="text-sm font-bold text-[#131A15] font-heading">
                  Physical Office & RVSF Facility Addresses
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                    Registered Corporate HQ Address
                  </label>
                  <textarea
                    rows={2}
                    value={companyForm.registeredOfficeAddress}
                    onChange={(e) => setCompanyForm({ ...companyForm, registeredOfficeAddress: e.target.value })}
                    placeholder="Enter registered corporate HQ address"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                    Primary RVSF Processing Yard Address
                  </label>
                  <textarea
                    rows={2}
                    value={companyForm.address}
                    onChange={(e) => setCompanyForm({ ...companyForm, address: e.target.value, facilityAddress: e.target.value })}
                    placeholder="Enter primary RVSF processing yard address"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                  />
                  <span className="text-[10px] text-[#5B6660] mt-1 block">
                    Publicly visible in Footer, Contact page address block, and Pickup dispatch slips.
                  </span>
                </div>
              </div>
            </div>

            {/* Section 5: Hours, Hubs & Social Handles */}
            <div className="bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#E4E7DE]">
                <Globe className="w-4 h-4 text-[#1F5C33]" />
                <h2 className="text-sm font-bold text-[#131A15] font-heading">
                  Working Hours, Operating Hubs & Social Handles
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                    Facility Operating Hours
                  </label>
                  <input
                    type="text"
                    value={companyForm.operatingHours}
                    onChange={(e) => setCompanyForm({ ...companyForm, operatingHours: e.target.value })}
                    placeholder="Mon - Sat: 9:00 AM - 7:30 PM (Sunday Closed)"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                    Operating Hubs / Cities (Comma separated)
                  </label>
                  <input
                    type="text"
                    value={companyForm.operatingHubs}
                    onChange={(e) => setCompanyForm({ ...companyForm, operatingHubs: e.target.value })}
                    placeholder="Delhi NCR, Gurugram, Noida, Faridabad, Ghaziabad, Jaipur, Chandigarh, Lucknow"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                    Facebook URL
                  </label>
                  <input
                    type="url"
                    value={companyForm.facebookUrl}
                    onChange={(e) => setCompanyForm({ ...companyForm, facebookUrl: e.target.value })}
                    placeholder="https://facebook.com/carcrush24"
                    className="w-full px-4 py-2 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-xs text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                    Instagram URL
                  </label>
                  <input
                    type="url"
                    value={companyForm.instagramUrl}
                    onChange={(e) => setCompanyForm({ ...companyForm, instagramUrl: e.target.value })}
                    placeholder="https://instagram.com/carcrush24"
                    className="w-full px-4 py-2 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-xs text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                    LinkedIn URL
                  </label>
                  <input
                    type="url"
                    value={companyForm.linkedinUrl}
                    onChange={(e) => setCompanyForm({ ...companyForm, linkedinUrl: e.target.value })}
                    placeholder="https://linkedin.com/company/carcrush24"
                    className="w-full px-4 py-2 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-xs text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                  />
                </div>
              </div>
            </div>

            {/* Submit Bar */}
            <div className="p-4 bg-white border border-[#E4E7DE] rounded-3xl shadow-xs flex items-center justify-end flex-wrap gap-4">

              <button
                type="submit"
                disabled={companySaving}
                className="px-8 py-3 rounded-full bg-[#1F5C33] text-white text-xs font-bold hover:bg-[#16311F] transition-all flex items-center gap-2 cursor-pointer shadow-md disabled:opacity-60"
              >
                {companySaving ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                <span>Save Company Profile</span>
              </button>
            </div>
          </form>
        </div>

        {/* Live Website Preview Card (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#16311F] text-white rounded-3xl p-6 shadow-lg border border-[#23452C] sticky top-24 space-y-6">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6FCF3C] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#6FCF3C]">
                  Live Website Preview
                </span>
              </div>
              <span className="text-[10px] text-gray-300 font-mono">Dynamic</span>
            </div>

            {/* Header / Helpline snippet preview */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold block">
                Helpline & Header Callout:
              </span>
              <div className="flex items-center gap-2 text-sm font-black text-white">
                <Phone className="w-4 h-4 text-[#6FCF3C]" />
                <span>{companyForm.tollFreePhone || '1800-22-CRUSH'}</span>
              </div>
            </div>

            {/* Contact Card snippet preview */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold block">
                Official Contact Inquiries:
              </span>
              <div className="text-xs space-y-1.5">
                <div className="flex items-center gap-2 text-gray-200">
                  <Mail className="w-3.5 h-3.5 text-[#6FCF3C] flex-shrink-0" />
                  <span className="truncate">{companyForm.email || 'support@carcrush24.com'}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-200">
                  <Phone className="w-3.5 h-3.5 text-[#6FCF3C] flex-shrink-0" />
                  <span>{companyForm.phone || '+91 98765 43210'}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-200">
                  <MessageSquare className="w-3.5 h-3.5 text-[#6FCF3C] flex-shrink-0" />
                  <span>WhatsApp: {companyForm.whatsappNumber || '+91 98765 43210'}</span>
                </div>
              </div>
            </div>

            {/* Footer Address snippet preview */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold block">
                Primary Scrap Facility:
              </span>
              <p className="text-xs text-gray-300 leading-relaxed">
                {companyForm.address || 'Address not yet entered'}
              </p>
            </div>

            {/* Operating Hours preview */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold block">
                Hours & Regional Hubs:
              </span>
              <p className="text-xs text-[#6FCF3C] font-medium">
                {companyForm.operatingHours || 'Mon - Sat: 9:00 AM - 7:30 PM'}
              </p>
              <p className="text-[11px] text-gray-300">
                {companyForm.operatingHubs || 'Delhi NCR, Gurugram, Noida, Faridabad'}
              </p>
            </div>

            <div className="pt-2 text-center">
              <span className="text-[11px] text-gray-300">
                Instant real-time sync across all site components.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
