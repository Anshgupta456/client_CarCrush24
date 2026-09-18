'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  LayoutDashboard,
  Inbox,
  FileText,
  BarChart3,
  LogOut,
  Bell,
  Menu,
  X,
  ShieldCheck,
  MessageSquareQuote,
  Building2,
  UserCog,
} from 'lucide-react';
import { AdminProvider, useAdmin } from '../../context/AdminContext';
import { useCompany } from '../../context/CompanyContext';

function AdminShell({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === '/admin/login';

  const {
    isAuthenticated,
    isLoadingAuth,
    adminUser,
    logout,
    activeTab,
    setActiveTab,
    leads,
    testimonials,
    blogs,
  } = useAdmin();
  const { company } = useCompany();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Unread/new leads count
  const newLeadsCount = leads.filter((l) => l.status === 'new').length;

  useEffect(() => {
    if (!isLoginPage && !isLoadingAuth && !isAuthenticated) {
      router.replace('/admin/login');
    }
  }, [isLoginPage, isLoadingAuth, isAuthenticated, router]);

  // If on login page, render child directly
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Loading state
  if (isLoadingAuth) {
    return (
      <div className="min-h-screen bg-[#F8F9F5] flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 border-3 border-[#1F5C33]/20 border-t-[#1F5C33] rounded-full animate-spin" />
        <span className="text-xs font-semibold text-[#1F5C33] tracking-wider uppercase">
          Loading CarCrush24 Admin...
        </span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const navItems = [
    {
      id: 'overview',
      label: 'Executive Overview',
      icon: LayoutDashboard,
      badge: null,
    },
    {
      id: 'leads',
      label: 'Scrap Leads Pipeline',
      icon: Inbox,
      badge: newLeadsCount > 0 ? `${newLeadsCount} new` : null,
      badgeColor: 'bg-[#6FCF3C] text-[#16311F]',
    },
    {
      id: 'blogs',
      label: 'Blog Management',
      icon: FileText,
      badge: `${blogs.length}`,
      badgeColor: 'bg-[#1F5C33]/10 text-[#1F5C33]',
    },
    {
      id: 'testimonials',
      label: 'Client Testimonials',
      icon: MessageSquareQuote,
      badge: `${testimonials.length}`,
      badgeColor: 'bg-[#6FCF3C]/20 text-[#16311F]',
    },
    {
      id: 'analytics',
      label: 'Funnel & Analytics',
      icon: BarChart3,
      badge: null,
    },
    {
      id: 'company',
      label: 'Company Profile',
      icon: Building2,
      badge: 'Live',
      badgeColor: 'bg-[#6FCF3C]/20 text-[#16311F]',
    },
    {
      id: 'legal',
      label: 'Legal & Policies',
      icon: ShieldCheck,
      badge: 'v1.2',
      badgeColor: 'bg-[#1F5C33]/15 text-[#1F5C33]',
    },
    {
      id: 'profile',
      label: 'Admin Profile',
      icon: UserCog,
      badge: 'Admin',
      badgeColor: 'bg-[#1F5C33]/15 text-[#1F5C33]',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9F5] flex flex-col lg:flex-row font-sans text-[#131A15]">
      {/* Mobile Top Header */}
      <header className="lg:hidden bg-white border-b border-[#E4E7DE] px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#131A15] hover:bg-[#F8F9F5] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <Image
            src="/images/logo-transparent.png"
            alt="CarCrush24"
            width={140}
            height={24}
            className="h-7 w-auto object-contain"
          />
        </div>

        <div className="flex items-center gap-2">
          {newLeadsCount > 0 && (
            <button
              onClick={() => {
                setActiveTab('leads');
                if (pathname !== '/admin') router.push('/admin');
              }}
              className="px-2.5 py-1 rounded-full bg-[#6FCF3C] text-[#16311F] text-[11px] font-bold"
            >
              {newLeadsCount} Leads
            </button>
          )}
        </div>
      </header>

      {/* Sidebar for Desktop & Mobile Overlay */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-[#E4E7DE] flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen lg:sticky lg:top-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Brand Header */}
          <div className="p-6 border-b border-[#E4E7DE]/80">
            <div className="block">
              <Image
                src="/logo/light_bg_logo.png"
                alt="CarCrush24"
                width={120}
                height={40}
                priority
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="px-4 py-6 flex-1 space-y-1">
            <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-[#5B6660]/80">
              Operations & Content
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isProfileActive = pathname === '/admin/profile' || (pathname === '/admin' && activeTab === 'profile');
              const isCompanyActive = pathname === '/admin/company' || (pathname === '/admin' && activeTab === 'company');
              const isLegalActive = pathname === '/admin/legal' || (pathname === '/admin' && activeTab === 'legal');
              const isAnalyticsActive = pathname === '/admin/analytics' || (pathname === '/admin' && activeTab === 'analytics');
              const isActive =
                item.id === 'profile'
                  ? isProfileActive
                  : item.id === 'company'
                  ? isCompanyActive
                  : item.id === 'legal'
                  ? isLegalActive
                  : item.id === 'analytics'
                  ? isAnalyticsActive
                  : pathname === '/admin' && activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                    if (item.id === 'profile') {
                      router.push('/admin/profile');
                    } else if (item.id === 'company') {
                      router.push('/admin/company');
                    } else if (item.id === 'legal') {
                      router.push('/admin/legal');
                    } else if (item.id === 'analytics') {
                      router.push('/admin/analytics');
                    } else {
                      if (pathname !== '/admin') {
                        router.push('/admin');
                      }
                    }
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all cursor-pointer ${isActive
                    ? 'bg-[#1F5C33] text-white shadow-sm'
                    : 'text-[#5B6660] hover:text-[#131A15] hover:bg-[#F8F9F5]'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-4 h-4 ${isActive ? 'text-[#6FCF3C]' : 'text-[#5B6660]'}`}
                    />
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${isActive
                        ? 'bg-[#6FCF3C] text-[#16311F]'
                        : item.badgeColor || 'bg-[#1F5C33]/10 text-[#1F5C33]'
                        }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* User Profile Card & Sign Out */}
          <div className="p-4 border-t border-[#E4E7DE] bg-gradient-to-b from-white to-[#F8F9F5]">
            <button
              onClick={() => {
                setActiveTab('profile');
                setMobileMenuOpen(false);
                router.push('/admin/profile');
              }}
              className={`w-full p-3 rounded-2xl border transition-all mb-3 flex items-center justify-between text-left cursor-pointer ${
                pathname === '/admin/profile' || (pathname === '/admin' && activeTab === 'profile')
                  ? 'bg-[#1F5C33]/10 border-[#1F5C33] shadow-xs'
                  : 'bg-white border-[#E4E7DE] hover:border-[#1F5C33]/50 hover:bg-[#F8F9F5]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1F5C33] text-white flex items-center justify-center font-bold text-xs tracking-wider">
                  {(adminUser?.name || 'Admin')
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .substring(0, 2)
                    .toUpperCase()}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-[#131A15] truncate max-w-[120px]">
                    {adminUser?.name || 'Sanjay Rawat'}
                  </span>
                  <span className="text-[10px] font-semibold text-[#1F5C33] truncate max-w-[120px] capitalize">
                    Role: {adminUser?.role === 'superadmin' ? 'Admin (Super)' : adminUser?.role || 'Admin'}
                  </span>
                </div>
              </div>

              <div
                title="RVSF Verified Admin"
                className="w-2.5 h-2.5 rounded-full bg-[#6FCF3C]"
              />
            </button>

            <button
              onClick={() => {
                logout();
                router.push('/admin/login');
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-full text-xs font-medium text-[#D9534F] hover:bg-[#D9534F]/10 transition-colors border border-transparent hover:border-[#D9534F]/20 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Backdrop for mobile */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-xs z-40 lg:hidden"
        />
      )}

      {/* Main Content Workspace */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="hidden lg:flex items-center justify-between px-8 py-4 bg-white border-b border-[#E4E7DE] sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1F5C33]/5 border border-[#1F5C33]/10 text-xs font-semibold text-[#1F5C33]">
              <span className="w-2 h-2 rounded-full bg-[#6FCF3C] animate-pulse" />
              <span>{company?.companyName ? `${company.companyName} Operations Console` : 'Fleet Operations Console'}</span>
            </div>
            {(() => {
              const facilityDisplay =
                (adminUser?.facility && adminUser.facility !== 'Mayapuri Authorized RVSF Unit #1')
                  ? adminUser.facility
                  : (company?.facilityAddress && company.facilityAddress !== 'Mayapuri Authorized RVSF Unit #1, New Delhi')
                  ? company.facilityAddress
                  : (company?.address && company.address !== 'Plot 42, Mayapuri Industrial Area, Phase II, New Delhi - 110064')
                  ? company.address
                  : null;

              return facilityDisplay ? (
                <span className="text-xs text-[#5B6660] max-w-sm truncate" title={facilityDisplay}>
                  Facility: {facilityDisplay}
                </span>
              ) : null;
            })()}
          </div>

          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-full hover:bg-[#F8F9F5] text-[#5B6660] hover:text-[#131A15] transition-colors border border-[#E4E7DE] cursor-pointer"
              >
                <Bell className="w-4 h-4" />
                {newLeadsCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#6FCF3C] text-[#16311F] text-[10px] font-bold flex items-center justify-center border border-white">
                    {newLeadsCount}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-[#E4E7DE] rounded-2xl shadow-lg p-4 z-50 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E4E7DE]">
                    <span className="text-xs font-bold text-[#131A15]">Recent Lead Alerts</span>
                    <span className="text-[10px] text-[#5B6660]">{newLeadsCount} pending</span>
                  </div>
                  <div className="divide-y divide-[#E4E7DE]/60 max-h-64 overflow-y-auto mt-2">
                    {leads
                      .filter((l) => l.status === 'new')
                      .slice(0, 3)
                      .map((lead) => (
                        <div
                          key={lead.id}
                          className="py-2.5 text-left cursor-pointer hover:bg-[#F8F9F5] px-2 rounded-lg"
                          onClick={() => {
                            setActiveTab('leads');
                            setShowNotifications(false);
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-[#1F5C33]">
                              {lead.regNumber}
                            </span>
                            <span className="text-[10px] text-[#5B6660]">New</span>
                          </div>
                          <p className="text-[11px] text-[#131A15] mt-0.5 font-medium">
                            {lead.customerName} - {lead.vehicleMakeModel}
                          </p>
                          <p className="text-[10px] text-[#5B6660]">{lead.location}</p>
                        </div>
                      ))}
                  </div>
                  <button
                    onClick={() => {
                      setActiveTab('leads');
                      setShowNotifications(false);
                    }}
                    className="w-full mt-3 py-1.5 rounded-full bg-[#F8F9F5] text-[11px] font-semibold text-[#1F5C33] hover:bg-[#1F5C33] hover:text-white transition-colors"
                  >
                    View All Leads Pipeline
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dynamic Admin Page Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function AdminLayout({ children }) {
  return (
    <AdminProvider>
      <AdminShell>{children}</AdminShell>
    </AdminProvider>
  );
}
