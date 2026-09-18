'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export const initialCompanyDetails = {
  companyName: 'CarCrush24',
  legalName: 'Garhwal Scrape',
  tagline: 'Recycle • Reuse • A Cleaner Tomorrow',
  rvsfRegistration: 'MoRTH / RVSF / DL / 2024 / 0089',
  tollFreePhone: '1800-22-CRUSH',
  tollFreeTel: '1800227278',
  phone: '+91 7310756278',
  phoneTel: '+919876543210',
  whatsappNumber: '917310756278',
  whatsappDisplay: '+91 73102 42424',
  email: 'support@carcrush24.com',
  corporateEmail: 'info@carcrush24.com',
  address: 'Devbhoomi Industrial Areas, Khasra no. 216, Khatakhedi, Roorkee, Uttarakhand, 247667',
  facilityAddress: 'Devbhoomi Industrial Areas, Khasra no. 216, Khatakhedi, Roorkee, Uttarakhand, 247667',
  operatingHours: 'Monday – Sunday: 8:00 AM – 8:00 PM (24/7 Helpline Desk)',
  operatingHubs: [
    'Delhi NCR',
    'Punjab',
    'Haryana',
    'Uttar Pradesh',
    'Uttarakhand',
    'Jammu & Kashmir',
    'Chandigarh',
  ],
  socialLinks: {
    twitter: 'https://twitter.com/carcrush24',
    linkedin: 'https://linkedin.com/company/carcrush24',
    facebook: 'https://facebook.com/carcrush24',
    instagram: 'https://instagram.com/carcrush24',
  },
};

const CompanyContext = createContext({
  company: initialCompanyDetails,
  isLoadingCompany: false,
  updateCompany: async () => {},
  refreshCompany: async () => {},
  resetCompanyToDefault: async () => {},
});

const STORAGE_KEY = 'carcrush_company_profile';

export function CompanyProvider({ children }) {
  const [company, setCompany] = useState(initialCompanyDetails);
  const [isLoadingCompany, setIsLoadingCompany] = useState(false);

  // Fetch company details from backend API
  const refreshCompany = useCallback(async () => {
    try {
      setIsLoadingCompany(true);
      const res = await fetch('/api/company');
      if (res && res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          const merged = { ...initialCompanyDetails, ...json.data };
          setCompany(merged);
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
          } catch {}
        }
      }
    } catch (err) {
      console.warn('[CompanyContext] Network error fetching company details:', err.message);
    } finally {
      setIsLoadingCompany(false);
    }
  }, []);

  useEffect(() => {
    let ignore = false;

    const fetchInitialData = async () => {
      // Load cached profile asynchronously without triggering synchronous setState in effect
      await Promise.resolve();
      try {
        const cached = localStorage.getItem(STORAGE_KEY);
        if (cached && !ignore) {
          const parsed = JSON.parse(cached);
          if (parsed.facilityAddress === 'Mayapuri Authorized RVSF Unit #1, New Delhi') {
            parsed.facilityAddress = 'Devbhoomi Industrial Areas, Khasra no. 216, Khatakhedi, Roorkee, Uttarakhand, 247667';
          }
          if (parsed.address === 'Plot 42, Mayapuri Industrial Area, Phase II, New Delhi - 110064') {
            parsed.address = 'Devbhoomi Industrial Areas, Khasra no. 216, Khatakhedi, Roorkee, Uttarakhand, 247667';
          }
          setCompany((prev) => ({ ...prev, ...parsed }));
        }
      } catch {}
      try {
        const res = await fetch('/api/company');
        if (res && res.ok && !ignore) {
          const json = await res.json();
          if (json.success && json.data) {
            const merged = { ...initialCompanyDetails, ...json.data };
            setCompany(merged);
            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
            } catch {}
          }
        }
      } catch (err) {
        console.warn('[CompanyContext] Network error fetching company details:', err.message);
      }
    };

    fetchInitialData();

    // Listen for real-time company updates
    const handleUpdate = () => {
      fetchInitialData();
    };
    window.addEventListener('company_updated', handleUpdate);
    return () => {
      ignore = true;
      window.removeEventListener('company_updated', handleUpdate);
    };
  }, []);

  // Update company profile from admin
  const updateCompany = async (updatedData, authToken = null) => {
    const merged = { ...company, ...updatedData };
    setCompany(merged);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    } catch {}

    let apiSucceeded = false;
    try {
      let token = authToken;
      if (!token && typeof window !== 'undefined') {
        try {
          const rawAuth = localStorage.getItem('carcrush_admin_auth');
          token = rawAuth ? JSON.parse(rawAuth)?.token : null;
        } catch {}
      }

      const headers = {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      };

      const res = await fetch('/api/admin/company', {
        method: 'PUT',
        headers,
        body: JSON.stringify(merged),
      });

      if (res && res.ok) {
        const json = await res.json();
        if (json.data) {
          setCompany({ ...initialCompanyDetails, ...json.data });
          apiSucceeded = true;
        }
      }
    } catch (err) {
      console.warn('[CompanyContext] Could not persist company details to server:', err.message);
    }

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('company_updated'));
    }

    return { success: true, company: merged, persisted: apiSucceeded };
  };

  const resetCompanyToDefault = async (authToken = null) => {
    return updateCompany(initialCompanyDetails, authToken);
  };

  return (
    <CompanyContext.Provider
      value={{
        company,
        isLoadingCompany,
        updateCompany,
        refreshCompany,
        resetCompanyToDefault,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  const ctx = useContext(CompanyContext);
  if (!ctx) {
    return {
      company: initialCompanyDetails,
      isLoadingCompany: false,
      updateCompany: async () => {},
      refreshCompany: async () => {},
      resetCompanyToDefault: async () => {},
    };
  }
  return ctx;
}

export default CompanyContext;
