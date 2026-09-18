'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Cookie,
  ShieldCheck,
  Check,
  X,
  Settings2,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

const STORAGE_KEY = 'carcrush_cookie_consent';

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true
    analytics: true,
    functional: true,
  });

  useEffect(() => {
    let timer;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        // Delay display slightly so it doesn't jarringly block initial render
        timer = setTimeout(() => setIsVisible(true), 1200);
      } else {
        const parsed = JSON.parse(stored);
        timer = setTimeout(() => setPreferences(parsed), 0);
      }
    } catch {}

    // Allow opening cookie preferences from anywhere (e.g. footer button)
    const handleOpenModal = () => {
      setIsVisible(true);
      setShowPreferences(true);
    };
    window.addEventListener('open_cookie_preferences', handleOpenModal);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('open_cookie_preferences', handleOpenModal);
    };
  }, []);

  const saveConsent = (updatedPreferences) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPreferences));
    } catch {}

    setPreferences(updatedPreferences);
    setIsVisible(false);
    setShowPreferences(false);

    // Notify GoogleAnalytics component and other listeners
    window.dispatchEvent(
      new CustomEvent('cookie_consent_updated', { detail: updatedPreferences })
    );
  };

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      functional: true,
      timestamp: new Date().toISOString(),
    });
  };

  const handleDeclineNonEssential = () => {
    saveConsent({
      essential: true,
      analytics: false,
      functional: false,
      timestamp: new Date().toISOString(),
    });
  };

  const handleSaveCustom = () => {
    saveConsent({
      ...preferences,
      essential: true,
      timestamp: new Date().toISOString(),
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-5 flex justify-center pointer-events-none animate-fadeIn">
      <div className="w-full max-w-4xl pointer-events-auto bg-[#0C1710]/95 backdrop-blur-xl border border-[#1E3B24] rounded-3xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-white space-y-4">
        {!showPreferences ? (
          /* ================= COMPACT NOTICE ================= */
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-start gap-3.5 max-w-2xl">
              <div className="w-10 h-10 rounded-2xl bg-[#188A38]/20 border border-[#6FCF3C]/30 text-[#6FCF3C] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold tracking-tight text-white font-heading">
                    We Value Your Privacy &amp; Data Transparency
                  </h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#188A38]/30 text-[#6FCF3C] font-semibold border border-[#6FCF3C]/20">
                    DPDP Act 2023
                  </span>
                </div>
                <p className="text-xs text-[#A1B2A5] leading-relaxed">
                  CarCrush24 uses first-party cookies and Google Analytics to evaluate visitor location trends, traffic sources, and quote calculator interactions. We never sell your personal records to third-party telemarketers. Learn more in our{' '}
                  <Link
                    href="/privacy"
                    target="_blank"
                    className="text-[#6FCF3C] underline hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2.5 w-full md:w-auto flex-wrap sm:flex-nowrap justify-end">
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-gray-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Settings2 className="w-3.5 h-3.5 text-[#6FCF3C]" />
                <span>Customize</span>
              </button>

              <button
                type="button"
                onClick={handleDeclineNonEssential}
                className="w-full sm:w-auto px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-300 transition-all cursor-pointer"
              >
                Decline Non-Essential
              </button>

              <button
                type="button"
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#188A38] hover:bg-[#167c32] active:scale-95 text-xs font-bold text-white transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Accept All Cookies</span>
              </button>
            </div>
          </div>
        ) : (
          /* ================= GRANULAR PREFERENCES MODAL ================= */
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#1E3B24]">
              <div className="flex items-center gap-2">
                <Settings2 className="w-4 h-4 text-[#6FCF3C]" />
                <h4 className="text-sm font-bold text-white font-heading">
                  Cookie &amp; Tracking Preferences
                </h4>
              </div>
              <button
                onClick={() => setShowPreferences(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs">
              {/* Essential */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">Strictly Necessary</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#188A38]/30 text-[#6FCF3C] font-semibold">
                    Always Active
                  </span>
                </div>
                <p className="text-[11px] text-[#A1B2A5] leading-relaxed">
                  Required for security, session verification, anti-fraud checks, and quote form calculations.
                </p>
              </div>

              {/* Analytics */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">Analytics &amp; Locations</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-8 h-4 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#188A38]" />
                  </label>
                </div>
                <p className="text-[11px] text-[#A1B2A5] leading-relaxed">
                  Allows Google Analytics 4 and server telemetry to measure search origins, visitor cities, and drop-offs.
                </p>
              </div>

              {/* Functional */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">Functional Integrations</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) =>
                        setPreferences({ ...preferences, functional: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-8 h-4 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#188A38]" />
                  </label>
                </div>
                <p className="text-[11px] text-[#A1B2A5] leading-relaxed">
                  Enables WhatsApp fast-connect, helpline click-to-call persistence, and preferred city caching.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between gap-3 flex-wrap">
              <Link
                href="/privacy"
                target="_blank"
                className="text-[11px] text-[#6FCF3C] flex items-center gap-1 hover:underline"
              >
                <span>Read Full Privacy Policy</span>
                <ExternalLink className="w-3 h-3" />
              </Link>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDeclineNonEssential}
                  className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs font-semibold text-gray-300 transition-colors cursor-pointer"
                >
                  Reject Non-Essential
                </button>
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="px-5 py-2 rounded-full bg-[#188A38] hover:bg-[#167c32] text-xs font-bold text-white transition-colors cursor-pointer"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
