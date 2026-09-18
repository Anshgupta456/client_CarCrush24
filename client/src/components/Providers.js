'use client';

import React, { Suspense } from 'react';
import { CompanyProvider } from '../context/CompanyContext';
import GoogleAnalytics from './GoogleAnalytics';
import CookieConsentBanner from './CookieConsentBanner';

export default function Providers({ children }) {
  return (
    <CompanyProvider>
      <Suspense fallback={null}>
        <GoogleAnalytics />
      </Suspense>
      {children}
      <CookieConsentBanner />
    </CompanyProvider>
  );
}
