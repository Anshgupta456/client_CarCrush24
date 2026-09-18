'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-CC24ANALYTICS';
const STORAGE_KEY = 'carcrush_cookie_consent';

// Helper to track user actions both in Google Analytics and backend telemetry
export const trackVisitorEvent = async (eventName, params = {}) => {
  if (typeof window === 'undefined') return;

  // 1. Google Analytics gtag event
  if (typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, params);
    } catch {}
  }

  // 2. Server-side event tracking for reliable admin funnel analytics
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
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    let timer;
    // Check initial cookie consent
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const consent = Boolean(parsed.analytics);
        timer = setTimeout(() => setHasConsent(consent), 0);
      }
    } catch {}

    // Listen for cookie consent updates
    const handleConsentUpdate = (e) => {
      const detail = e.detail || {};
      setHasConsent(Boolean(detail.analytics));
    };

    window.addEventListener('cookie_consent_updated', handleConsentUpdate);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('cookie_consent_updated', handleConsentUpdate);
    };
  }, []);

  // Track page views on route changes
  useEffect(() => {
    if (!pathname) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

    trackVisitorEvent('page_view', {
      page_path: url,
      page_title: document.title || 'CarCrush24',
      category: 'navigation',
    });
  }, [pathname, searchParams]);

  if (!hasConsent || !GA_MEASUREMENT_ID) {
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
              anonymize_ip: true
            });
          `,
        }}
      />
    </>
  );
}
