'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const STORAGE_KEY = 'carcrush_cookie_consent';

// Helper to track user actions: Internal tracker receives all events; GA4 receives lightweight hits
export const trackVisitorEvent = async (eventName, params = {}) => {
  if (typeof window === 'undefined') return;

  // 1. Google Analytics gtag event (optional mirror if GA4 is enabled)
  if (typeof window.gtag === 'function' && GA_MEASUREMENT_ID) {
    try {
      window.gtag('event', eventName, params);
    } catch {}
  }

  // 2. Primary Server-Side Internal Tracker (AdBlock-proof, direct database telemetry)
  try {
    const payload = {
      eventName,
      category: params.category || 'interaction',
      label: params.label || '',
      value: params.value || 0,
      page: window.location.pathname || '/',
      source: document.referrer ? new URL(document.referrer, window.location.origin).hostname : 'Direct',
      device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
      ...params,
    };

    fetch('/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
  } catch {}
};

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [hasConsent, setHasConsent] = useState(true);

  useEffect(() => {
    // Check cookie consent preferences
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.analytics !== undefined) {
          setHasConsent(Boolean(parsed.analytics));
        }
      }
    } catch {}

    const handleConsentUpdate = (e) => {
      const detail = e.detail || {};
      setHasConsent(Boolean(detail.analytics));
    };

    window.addEventListener('cookie_consent_updated', handleConsentUpdate);
    return () => {
      window.removeEventListener('cookie_consent_updated', handleConsentUpdate);
    };
  }, []);

  // Track page views on route changes for SEO search landing analytics
  useEffect(() => {
    if (!pathname) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

    // Send page_view to GA4 for SEO keyword/landing attribution
    if (typeof window !== 'undefined' && typeof window.gtag === 'function' && GA_MEASUREMENT_ID) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
        page_title: document.title || 'CarCrush24',
      });
    }

    // Send to internal tracker
    trackVisitorEvent('page_view', {
      page_path: url,
      page_title: document.title || 'CarCrush24',
      category: 'navigation',
    });
  }, [pathname, searchParams]);

  // Don't render GA script if no real measurement ID is provided or user rejected consent
  if (!GA_MEASUREMENT_ID || !hasConsent) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              send_page_view: true
            });
          `,
        }}
      />
    </>
  );
}
