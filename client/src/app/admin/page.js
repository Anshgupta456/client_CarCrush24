'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Inbox,
  FileText,
  BarChart3,
  Search,
  Filter,
  Phone,
  MessageSquare,
  CheckCircle2,
  Calendar,
  Truck,
  TrendingUp,
  ShieldCheck,
  MapPin,
  Car,
  Eye,
  Plus,
  X,
  ArrowUpRight,
  Edit,
  Trash2,
  Star,
  MessageSquareQuote,
  Sparkles,
  Key,
  Check,
  Building2,
  UserCog,
  Mail,
  Globe,
  Save,
  RefreshCw,
  Lock,
  EyeOff,
  ShieldAlert,
  ExternalLink,
} from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';
import { useCompany } from '../../context/CompanyContext';
import AdminProfileView from '../../components/admin/AdminProfileView';
import CompanyProfileView from '../../components/admin/CompanyProfileView';
import AnalyticsDashboardView from '../../components/admin/AnalyticsDashboardView';

export default function AdminDashboardPage() {
  const {
    adminUser,
    updateProfile,
    changePassword,
    leads,
    updateLeadStatus,
    blogs,
    addBlog,
    updateBlog,
    deleteBlog,
    testimonials,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
    metrics,
    activeTab,
    setActiveTab,
    selectedLead,
    setSelectedLead,
  } = useAdmin();

  const { company, updateCompany, resetCompanyToDefault } = useCompany();

  // Filter & Search states for Leads Tab
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  // Blog CMS states
  const [blogSearch, setBlogSearch] = useState('');
  const [blogCategoryFilter, setBlogCategoryFilter] = useState('all');
  const [previewBlog, setPreviewBlog] = useState(null);


  // Testimonials CMS states
  const [testimonialSearch, setTestimonialSearch] = useState('');
  const [isAddTestimonialOpen, setIsAddTestimonialOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [testimonialForm, setTestimonialForm] = useState({
    author: '',
    quote: '',
    location: '',
    vehicle: '',
    date: '',
    rating: 5,
  });

  // Filtered Leads calculation
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.regNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone?.includes(searchTerm) ||
      lead.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.vehicleMakeModel?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    const matchesType =
      typeFilter === 'all' ||
      lead.vehicleType?.toLowerCase().includes(typeFilter.toLowerCase());

    return matchesSearch && matchesStatus && matchesType;
  });

  // Filtered Blogs
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(blogSearch.toLowerCase()) ||
      blog.excerpt?.toLowerCase().includes(blogSearch.toLowerCase()) ||
      blog.tag?.toLowerCase().includes(blogSearch.toLowerCase());
    const matchesCategory =
      blogCategoryFilter === 'all' || blog.category === blogCategoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Filtered Testimonials
  const filteredTestimonials = testimonials.filter((t) => {
    return (
      t.author.toLowerCase().includes(testimonialSearch.toLowerCase()) ||
      t.quote.toLowerCase().includes(testimonialSearch.toLowerCase()) ||
      (t.location && t.location.toLowerCase().includes(testimonialSearch.toLowerCase())) ||
      (t.vehicle && t.vehicle.toLowerCase().includes(testimonialSearch.toLowerCase()))
    );
  });

  // Counts per status
  const countByStatus = {
    all: leads.length,
    new: leads.filter((l) => l.status === 'new').length,
    contacted: leads.filter((l) => l.status === 'contacted').length,
    scheduled: leads.filter((l) => l.status === 'scheduled').length,
    collected: leads.filter((l) => l.status === 'collected').length,
    paid: leads.filter((l) => l.status === 'paid').length,
  };

  const statusBadgeColors = {
    new: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    contacted: 'bg-blue-100 text-blue-800 border-blue-200',
    scheduled: 'bg-amber-100 text-amber-800 border-amber-200',
    collected: 'bg-purple-100 text-purple-800 border-purple-200',
    paid: 'bg-green-100 text-green-800 border-green-200',
  };

  const getWhatsAppLink = (lead) => {
    const cleanNumber = (lead.phone || '').replace(/[^0-9]/g, '');
    const message = `Hello ${lead.customerName}, this is CarCrush24 Operations regarding your scrap vehicle quote for ${lead.vehicleMakeModel} (Reg: ${lead.regNumber}). We are ready to assist with free doorstep towing & RTO deregistration. When is a convenient time to speak?`;
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  };



  // Testimonial form handlers
  const handleOpenAddTestimonial = () => {
    setEditingTestimonial(null);
    setTestimonialForm({
      author: '',
      quote: '',
      location: '',
      vehicle: '',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      rating: 5,
    });
    setIsAddTestimonialOpen(true);
  };

  const handleOpenEditTestimonial = (testimonial) => {
    setEditingTestimonial(testimonial);
    setTestimonialForm({
      author: testimonial.author,
      quote: testimonial.quote,
      location: testimonial.location || '',
      vehicle: testimonial.vehicle || '',
      date: testimonial.date || '',
      rating: testimonial.rating || 5,
    });
    setIsAddTestimonialOpen(true);
  };

  const handleSaveTestimonial = (e) => {
    e.preventDefault();
    if (!testimonialForm.author.trim() || !testimonialForm.quote.trim()) return;

    const words = testimonialForm.quote.trim().split(/\s+/).filter(Boolean).length;
    if (words > 50) {
      alert(`The review quote exceeds the 50-word limit (${words}/50 words). Please shorten the quote before saving.`);
      return;
    }

    const payload = {
      author: testimonialForm.author,
      quote: testimonialForm.quote,
      location: testimonialForm.location,
      vehicle: testimonialForm.vehicle,
      date: testimonialForm.date,
      rating: Number(testimonialForm.rating) || 5,
    };

    if (editingTestimonial) {
      updateTestimonial({ ...editingTestimonial, ...payload });
    } else {
      addTestimonial(payload);
    }
    setIsAddTestimonialOpen(false);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Dynamic Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#E4E7DE]">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#131A15] font-heading tracking-tight">
              {activeTab === 'overview' && 'Operations Dashboard'}
              {activeTab === 'leads' && 'Scrap Vehicle Inquiries'}
              {activeTab === 'blogs' && 'Blog Articles & SEO Management'}
              {activeTab === 'testimonials' && 'Client Reviews & Testimonials'}
              {activeTab === 'analytics' && 'Funnel & Analytics Performance'}
              {activeTab === 'company' && 'Company Profile & Website Information'}
              {activeTab === 'legal' && 'Legal Policies & Compliance Settings'}
              {activeTab === 'profile' && 'Admin Account & Security Settings'}
            </h1>
            {/* <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#1F5C33]/10 text-[#1F5C33] flex items-center gap-1">
              <Key className="w-3 h-3" />
              <span>Internal Terminal</span>
            </span> */}
          </div>
          {/* <p className="text-xs sm:text-sm text-[#5B6660] mt-1">
            Logged in as <span className="font-semibold text-[#131A15]">{adminUser?.name || 'Sanjay'}</span> ({adminUser?.email || 'admin@carcrush24.com'}).
            {countByStatus.new > 0 ? (
              <span className="text-[#1F5C33] font-medium ml-1">
                You have <span className="underline font-bold">{countByStatus.new} new quote submissions</span> awaiting action.
              </span>
            ) : (
              ' All pending tasks are up-to-date.'
            )}
          </p> */}
        </div>

        {/* Tab Navigation Quick Bar */}
        {/* <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E4E7DE] rounded-full overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'leads', label: `Leads (${leads.length})` },
            { id: 'blogs', label: `Blogs (${blogs.length})` },
            { id: 'testimonials', label: `Testimonials (${testimonials.length})` },
            { id: 'analytics', label: 'Analytics' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${activeTab === tab.id
                ? 'bg-[#1F5C33] text-white shadow-2xs'
                : 'text-[#5B6660] hover:text-[#131A15] hover:bg-[#F8F9F5]'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div> */}
      </div>

      {/* ======================= TAB 1: OVERVIEW ======================= */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Security & Terminal Notice */}
          {/* <div className="p-4 rounded-2xl bg-[#1F5C33]/5 border border-[#1F5C33]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#1F5C33]">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#1F5C33] flex-shrink-0" />
              <span>
                <strong className="font-semibold">Internal Operations Portal:</strong> Dedicated management for incoming vehicle scrap leads, published policy blogs, and client testimonials.
              </span>
            </div>
            <div className="flex items-center gap-2 self-end sm:self-auto font-mono text-[11px] text-[#5B6660]">
              <span className="w-2 h-2 rounded-full bg-[#6FCF3C] animate-pulse" />
              <span>Encrypted Session</span>
            </div>
          </div> */}

          {/* 4 Core Executive Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[#E4E7DE] shadow-2xs hover:border-[#1F5C33]/30 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5B6660]">
                  Total Inquiries
                </span>
                <div className="w-8 h-8 rounded-full bg-[#1F5C33]/10 text-[#1F5C33] flex items-center justify-center">
                  <Inbox className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#131A15] font-heading">
                  {leads.length}
                </span>
                <span className="text-xs font-bold text-emerald-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-0.5" />
                  {metrics.leadsGrowthPct}
                </span>
              </div>
              <span className="text-[11px] text-[#5B6660] mt-1 block">
                Logged in September 2026
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#6FCF3C]/40 bg-gradient-to-br from-white to-[#6FCF3C]/5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1F5C33]">
                  Awaiting Contact
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#6FCF3C] animate-ping" />
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#1F5C33] font-heading">
                  {countByStatus.new}
                </span>
                <span className="text-xs font-medium text-[#1F5C33]">High Priority</span>
              </div>
              <span className="text-[11px] text-[#5B6660] mt-1 block">
                Within target 30-min SLA
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E4E7DE] shadow-2xs hover:border-[#1F5C33]/30 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5B6660]">
                  Published Articles
                </span>
                <div className="w-8 h-8 rounded-full bg-[#1F5C33]/10 text-[#1F5C33] flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#131A15] font-heading">
                  {blogs.length}
                </span>
                <span className="text-xs text-[#1F5C33] font-semibold">Active CMS</span>
              </div>
              <span className="text-[11px] text-[#5B6660] mt-1 block">
                SEO Scrappage Guides
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E4E7DE] shadow-2xs hover:border-[#1F5C33]/30 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5B6660]">
                  Customer Reviews
                </span>
                <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <MessageSquareQuote className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#131A15] font-heading">
                  {testimonials.length}
                </span>
                <span className="text-xs font-semibold text-amber-600 flex items-center gap-0.5">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> 5.0
                </span>
              </div>
              <span className="text-[11px] text-[#5B6660] mt-1 block">
                Verified Customer Stories
              </span>
            </div>
          </div>

          {/* Quick Content Actions Ribbon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-white border border-[#E4E7DE] shadow-2xs flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-[#1F5C33] uppercase tracking-wider">
                  Content Publishing
                </span>
                <h3 className="text-base font-bold text-[#131A15] mt-1">SEO Blog CMS</h3>
                <p className="text-xs text-[#5B6660] mt-0.5">
                  Publish or edit vehicle scrappage guides and MoRTH legal alerts.
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveTab('blogs');
                  handleOpenAddBlog();
                }}
                className="px-4 py-2 rounded-full bg-[#1F5C33] text-white text-xs font-semibold hover:bg-[#16311F] transition-colors flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Write Blog</span>
              </button>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E4E7DE] shadow-2xs flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-[#1F5C33] uppercase tracking-wider">
                  Social Proof
                </span>
                <h3 className="text-base font-bold text-[#131A15] mt-1">Client Reviews</h3>
                <p className="text-xs text-[#5B6660] mt-0.5">
                  Add verified customer quotes displayed on the homepage.
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveTab('testimonials');
                  handleOpenAddTestimonial();
                }}
                className="px-4 py-2 rounded-full bg-[#1F5C33] text-white text-xs font-semibold hover:bg-[#16311F] transition-colors flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Review</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================= TAB 2: LEADS PIPELINE ======================= */}
      {activeTab === 'leads' && (
        <div className="space-y-6">
          <div className="bg-white border border-[#E4E7DE] rounded-3xl p-5 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E4E7DE]">
              {[
                { key: 'all', label: 'All Inquiries', count: countByStatus.all },
                { key: 'new', label: 'New Submissions', count: countByStatus.new },
                { key: 'contacted', label: 'Contacted', count: countByStatus.contacted },
                { key: 'scheduled', label: 'Scheduled', count: countByStatus.scheduled },
                { key: 'collected', label: 'Collected at Yard', count: countByStatus.collected },
                { key: 'paid', label: 'Settled / Paid', count: countByStatus.paid },
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setStatusFilter(filter.key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${statusFilter === filter.key
                    ? 'bg-[#1F5C33] text-white shadow-2xs'
                    : 'bg-[#F8F9F5] text-[#5B6660] hover:text-[#131A15]'
                    }`}
                >
                  <span>{filter.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${statusFilter === filter.key
                      ? 'bg-white/20 text-white'
                      : 'bg-[#E4E7DE] text-[#131A15]'
                      }`}
                  >
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-96">
                <Search className="w-4 h-4 text-[#5B6660] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search Reg No, Name, Phone, Location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-[#F8F9F5] border border-[#E4E7DE] text-xs text-[#131A15] placeholder:text-[#5B6660] focus:outline-none focus:border-[#1F5C33]"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#5B6660] hover:text-[#131A15]"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs text-[#5B6660]">Vehicle:</span>
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="py-1.5 px-3 rounded-full bg-[#F8F9F5] border border-[#E4E7DE] text-xs text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                >
                  <option value="all">All Vehicle Types</option>
                  <option value="car">Cars / Sedans</option>
                  <option value="suv">SUVs</option>
                  <option value="truck">Commercial Trucks</option>
                  <option value="wheeler">Two-Wheelers</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E4E7DE] rounded-3xl overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F8F9F5] border-b border-[#E4E7DE] text-[11px] font-bold text-[#5B6660] uppercase tracking-wider">
                    <th className="py-3.5 px-4">Registration & Vehicle</th>
                    <th className="py-3.5 px-4">Customer</th>
                    <th className="py-3.5 px-4">Location</th>
                    <th className="py-3.5 px-4">Lifecycle Status</th>
                    <th className="py-3.5 px-4 text-right">WhatsApp Contact</th>
                    <th className="py-3.5 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4E7DE] text-xs">
                  {filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-14 text-[#5B6660]">
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <div className="w-10 h-10 rounded-full bg-[#1F5C33]/10 text-[#1F5C33] flex items-center justify-center">
                            <Inbox className="w-5 h-5" />
                          </div>
                          <p className="font-semibold text-xs text-[#131A15]">No customer inquiries logged yet</p>
                          <p className="text-[11px] text-[#5B6660] max-w-sm">
                            New valuation and scrap requests submitted via website quote calculators will appear here in real time.
                          </p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((lead) => (
                      <tr
                        key={lead.id || lead._id}
                        className="hover:bg-[#F8F9F5]/60 transition-colors group"
                      >
                        <td className="py-3.5 px-4">
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-[#1F5C33]/10 text-[#1F5C33] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Car className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="font-mono font-bold text-[#131A15] bg-[#F8F9F5] px-2 py-0.5 rounded border border-[#E4E7DE] text-xs">
                                  {lead.regNumber}
                                </span>
                                <span className="text-[10px] text-[#5B6660] font-mono">
                                  {lead.id || lead._id}
                                </span>
                              </div>
                              <p className="text-xs font-semibold text-[#131A15] mt-1">
                                {lead.vehicleMakeModel}
                              </p>
                              <span className="text-[10px] text-[#5B6660] block">
                                {lead.condition}
                              </span>
                            </div>
                          </div>
                        </td>

                        <td className="py-3.5 px-4">
                          <p className="font-semibold text-[#131A15]">{lead.customerName}</p>
                          <p className="text-[11px] text-[#5B6660] font-mono">{lead.phone}</p>
                          <span className="text-[10px] text-[#5B6660] truncate max-w-[150px] block">
                            {lead.email}
                          </span>
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-1 text-[#131A15]">
                            <MapPin className="w-3.5 h-3.5 text-[#5B6660] flex-shrink-0" />
                            <span className="font-medium truncate max-w-[160px]">
                              {lead.location}
                            </span>
                          </div>
                          <span className="text-[10px] text-[#5B6660] block ml-4">
                            Pin: {lead.pincode}
                          </span>
                        </td>

                        <td className="py-3.5 px-4">
                          <select
                            value={lead.status}
                            onChange={(e) => updateLeadStatus(lead.id || lead._id, e.target.value)}
                            className={`text-xs font-bold px-2.5 py-1 rounded-full border cursor-pointer focus:outline-none ${statusBadgeColors[lead.status]
                              }`}
                          >
                            <option value="new">● New</option>
                            <option value="contacted">● Contacted</option>
                            <option value="scheduled">● Scheduled</option>
                            <option value="collected">● Collected</option>
                            <option value="paid">● Paid / Settled</option>
                          </select>
                        </td>

                        <td className="py-3.5 px-4 text-right">
                          <a
                            href={getWhatsAppLink(lead)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] text-xs font-bold transition-all shadow-2xs hover:scale-105 cursor-pointer"
                            title="Open WhatsApp chat with customer"
                          >
                            <MessageSquare className="w-3.5 h-3.5 fill-current" />
                            <span>WhatsApp</span>
                          </a>
                        </td>

                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => setSelectedLead(lead)}
                            className="p-1.5 rounded-lg hover:bg-[#E4E7DE] text-[#5B6660] hover:text-[#131A15] transition-colors cursor-pointer"
                            title="Inspect Vehicle & Notes"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-[#F8F9F5] border-t border-[#E4E7DE] flex flex-col sm:flex-row items-center justify-between text-xs text-[#5B6660] gap-2">
              <span>
                Showing <span className="font-bold text-[#131A15]">{filteredLeads.length}</span> of{' '}
                <span className="font-bold text-[#131A15]">{leads.length}</span> total inquiries
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ======================= TAB 3: BLOGS MANAGEMENT ======================= */}
      {activeTab === 'blogs' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-[#E4E7DE] rounded-3xl p-5 shadow-2xs">
            <div>
              <h2 className="text-lg font-bold text-[#131A15] font-heading">
                Blog & Legal Guides CMS
              </h2>
              <p className="text-xs text-[#5B6660]">
                Add, modify, and manage policy guides, scrappage rules, and legal compliance articles.
              </p>
            </div>
            <Link
              href="/admin/blogs/new"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F5C33] text-white text-xs font-semibold hover:bg-[#16311F] transition-colors cursor-pointer self-start sm:self-auto shadow-2xs"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Article</span>
            </Link>
          </div>

          {/* Search & Category Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white border border-[#E4E7DE] rounded-2xl p-3">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#5B6660] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles by title or keyword..."
                value={blogSearch}
                onChange={(e) => setBlogSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-full bg-[#F8F9F5] border border-[#E4E7DE] text-xs text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs text-[#5B6660]">Category:</span>
              <select
                value={blogCategoryFilter}
                onChange={(e) => setBlogCategoryFilter(e.target.value)}
                className="py-1 px-3 rounded-full bg-[#F8F9F5] border border-[#E4E7DE] text-xs text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
              >
                <option value="all">All Categories</option>
                {Array.from(new Set(blogs.map((b) => b.category).filter(Boolean))).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Blog Cards List */}
          <div className="grid grid-cols-1 gap-4">
            {filteredBlogs.length === 0 ? (
              <div className="bg-white border border-[#E4E7DE] rounded-3xl p-12 text-center text-xs text-[#5B6660]">
                No blog articles matched your search.
              </div>
            ) : (
              filteredBlogs.map((post) => (
                <div
                  key={post.id}
                  className="bg-white border border-[#E4E7DE] rounded-3xl p-5 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#1F5C33]/30 transition-all"
                >
                  <div className="space-y-1.5 max-w-3xl">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#1F5C33]/10 text-[#1F5C33]">
                        {post.category}
                      </span>
                      <span className="text-xs text-[#5B6660]">{post.date}</span>
                      <span className="text-xs text-[#5B6660]">• {post.readTime}</span>
                      {post.featured && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#6FCF3C]/20 text-[#16311F]">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#131A15]">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#5B6660] line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-[11px] font-semibold text-[#1F5C33]">
                        Keyword:
                      </span>
                      <span className="text-[11px] text-[#5B6660] bg-[#F8F9F5] px-2 py-0.5 rounded border border-[#E4E7DE]">
                        {post.tag}
                      </span>
                      <span className="text-[10px] text-[#5B6660] font-mono">
                        Slug: /{post.slug}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end md:self-center flex-shrink-0 flex-wrap">
                    <button
                      type="button"
                      onClick={() => setPreviewBlog(post)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8F9F5] hover:bg-[#E4E7DE] text-xs font-semibold text-[#131A15] transition-colors border border-[#E4E7DE] cursor-pointer shadow-2xs"
                      title="Quick in-dashboard article preview"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#188A38]" />
                      <span>Preview</span>
                    </button>

                    <a
                      href={`/blogs/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#188A38]/10 hover:bg-[#188A38] text-[#188A38] hover:text-white text-xs font-semibold transition-colors border border-[#188A38]/20 cursor-pointer shadow-2xs"
                      title="View published article on public website"
                    >
                      <span>View Live</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>

                    <Link
                      href={`/admin/blogs/edit/${post.id || post._id}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8F9F5] hover:bg-[#1F5C33] hover:text-white text-xs font-semibold text-[#131A15] transition-colors border border-[#E4E7DE] cursor-pointer shadow-2xs"
                    >
                      <Edit className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </Link>

                    <button
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete "${post.title}"?`)) {
                          deleteBlog(post.id);
                        }
                      }}
                      className="p-2 rounded-full hover:bg-[#D9534F]/10 text-[#5B6660] hover:text-[#D9534F] transition-colors cursor-pointer"
                      title="Delete Article"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* ======================= TAB 4: CLIENT TESTIMONIALS ======================= */}
      {activeTab === 'testimonials' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-[#E4E7DE] rounded-3xl p-5 shadow-2xs">
            <div>
              <h2 className="text-lg font-bold text-[#131A15] font-heading">
                Client Testimonials & Feedback
              </h2>
              <p className="text-xs text-[#5B6660]">
                Add and modify genuine vehicle scrapping customer reviews displayed on the website.
              </p>
            </div>
            <button
              onClick={handleOpenAddTestimonial}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F5C33] text-white text-xs font-semibold hover:bg-[#16311F] transition-colors cursor-pointer self-start sm:self-auto"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Testimonial</span>
            </button>
          </div>

          {/* Testimonial Search */}
          <div className="bg-white border border-[#E4E7DE] rounded-2xl p-3 max-w-md">
            <div className="relative">
              <Search className="w-4 h-4 text-[#5B6660] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search reviews by customer name or vehicle..."
                value={testimonialSearch}
                onChange={(e) => setTestimonialSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-full bg-[#F8F9F5] border border-[#E4E7DE] text-xs text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
              />
            </div>
          </div>

          {/* Testimonials Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTestimonials.length === 0 ? (
              <div className="col-span-full bg-white border border-[#E4E7DE] rounded-3xl p-12 text-center text-xs text-[#5B6660]">
                No customer testimonials matched your search.
              </div>
            ) : (
              filteredTestimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-white border border-[#E4E7DE] rounded-3xl p-5 shadow-2xs flex flex-col justify-between hover:border-[#1F5C33]/30 transition-all group relative"
                >
                  <div>
                    {/* Stars, Word Count and Date */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-0.5">
                        {[...Array(t.rating || 5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F8F9F5] border border-[#E4E7DE] text-[#5B6660] font-medium">
                          {t.quote ? t.quote.trim().split(/\s+/).filter(Boolean).length : 0} words
                        </span>
                        <span className="text-[11px] text-[#5B6660]">{t.date}</span>
                      </div>
                    </div>

                    {/* Review Quote */}
                    <p className="text-xs text-[#131A15] leading-relaxed italic mb-4">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  {/* Customer Meta & Actions */}
                  <div className="pt-3 border-t border-[#E4E7DE] flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-[#131A15]">{t.author}</h4>
                      <p className="text-[10px] text-[#5B6660]">
                        {t.location || t.vehicle || 'Verified Scrappage Client'}
                      </p>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleOpenEditTestimonial(t)}
                        className="p-1.5 rounded-lg hover:bg-[#F8F9F5] text-[#5B6660] hover:text-[#1F5C33] transition-colors cursor-pointer"
                        title="Edit Review"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete testimonial from ${t.author}?`)) {
                            deleteTestimonial(t.id);
                          }
                        }}
                        className="p-1.5 rounded-lg hover:bg-[#D9534F]/10 text-[#5B6660] hover:text-[#D9534F] transition-colors cursor-pointer"
                        title="Delete Review"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* ======================= TAB 5: ANALYTICS & FUNNEL ======================= */}
      {activeTab === 'analytics' && <AnalyticsDashboardView />}

      {/* ======================= TAB 6: COMPANY PROFILE ======================= */}
      {activeTab === 'company' && <CompanyProfileView />}

      {/* ======================= TAB 7: ADMIN PROFILE ======================= */}
      {activeTab === 'profile' && <AdminProfileView />}

      {selectedLead && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-[#E4E7DE] rounded-3xl max-w-xl w-full p-6 shadow-2xl relative animate-fadeIn max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#E4E7DE]">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-sm bg-[#1F5C33]/10 text-[#1F5C33] px-2.5 py-1 rounded-lg">
                  {selectedLead.regNumber}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border ${statusBadgeColors[selectedLead.status]
                    }`}
                >
                  {selectedLead.status}
                </span>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-1 rounded-full hover:bg-[#F8F9F5] text-[#5B6660] hover:text-[#131A15] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4 text-xs">
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#5B6660] mb-2">
                  Vehicle Specifications
                </h4>
                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-[#F8F9F5] border border-[#E4E7DE]">
                  <div>
                    <span className="text-[#5B6660] block">Make & Model</span>
                    <span className="font-bold text-[#131A15]">{selectedLead.vehicleMakeModel}</span>
                  </div>
                  <div>
                    <span className="text-[#5B6660] block">Vehicle Category</span>
                    <span className="font-bold text-[#131A15]">{selectedLead.vehicleType}</span>
                  </div>
                  <div>
                    <span className="text-[#5B6660] block">Condition / Policy Status</span>
                    <span className="font-bold text-[#131A15]">{selectedLead.condition}</span>
                  </div>
                  <div>
                    <span className="text-[#5B6660] block">Estimated Scrap Weight</span>
                    <span className="font-bold text-[#1F5C33]">{selectedLead.estimatedWeight}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#5B6660] mb-2">
                  Customer Information & Location
                </h4>
                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-[#F8F9F5] border border-[#E4E7DE]">
                  <div>
                    <span className="text-[#5B6660] block">Customer Name</span>
                    <span className="font-bold text-[#131A15]">{selectedLead.customerName}</span>
                  </div>
                  <div>
                    <span className="text-[#5B6660] block">Phone Contact</span>
                    <span className="font-bold font-mono text-[#131A15]">{selectedLead.phone}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[#5B6660] block">Pickup Address & District</span>
                    <span className="font-bold text-[#131A15]">
                      {selectedLead.location} (PIN: {selectedLead.pincode})
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#5B6660] mb-1.5">
                  Inspection Notes
                </h4>
                <p className="p-3 rounded-xl bg-white border border-[#E4E7DE] text-[#131A15] leading-relaxed">
                  {selectedLead.notes}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-[#5B6660] font-mono border-t border-[#E4E7DE]">
                <span>Attribution: {selectedLead.visitorId}</span>
                <span>ID: {selectedLead.id || selectedLead._id}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E4E7DE] flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedLead(null)}
                className="px-4 py-2 rounded-full border border-[#E4E7DE] text-xs font-semibold text-[#5B6660] hover:bg-[#F8F9F5] cursor-pointer"
              >
                Close
              </button>

              <a
                href={getWhatsAppLink(selectedLead)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#25D366] text-white font-bold text-xs hover:bg-[#20ba5a] transition-all shadow-sm cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ======================= ADD / EDIT TESTIMONIAL MODAL ======================= */}
      {isAddTestimonialOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-[#E4E7DE] rounded-3xl max-w-lg w-full p-6 shadow-2xl relative animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-[#E4E7DE]">
              <h3 className="text-base font-bold text-[#131A15] font-heading">
                {editingTestimonial ? 'Modify Testimonial' : 'Add Client Testimonial'}
              </h3>
              <button
                onClick={() => setIsAddTestimonialOpen(false)}
                className="p-1 rounded-full hover:bg-[#F8F9F5] text-[#5B6660]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveTestimonial} className="py-4 space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-[#131A15] mb-1">Customer / Client Name</label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Chandra"
                  value={testimonialForm.author}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, author: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-xs focus:outline-none focus:border-[#1F5C33]"
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block font-semibold text-[#131A15]">
                    Customer Review / Quote <span className="text-[#D9534F]">*</span>
                  </label>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-full transition-colors ${(testimonialForm.quote ? testimonialForm.quote.trim().split(/\s+/).filter(Boolean).length : 0) > 50
                      ? 'bg-[#D9534F]/15 text-[#D9534F]'
                      : (testimonialForm.quote ? testimonialForm.quote.trim().split(/\s+/).filter(Boolean).length : 0) >= 40
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-[#F8F9F5] text-[#5B6660]'
                      }`}
                  >
                    {testimonialForm.quote ? testimonialForm.quote.trim().split(/\s+/).filter(Boolean).length : 0} / 50 words
                  </span>
                </div>
                <textarea
                  rows={4}
                  placeholder="Quote from the customer about their vehicle scrapping experience (maximum 50 words)..."
                  value={testimonialForm.quote}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, quote: e.target.value })}
                  className={`w-full px-3 py-2 rounded-xl bg-[#F8F9F5] border text-xs focus:outline-none transition-colors ${(testimonialForm.quote ? testimonialForm.quote.trim().split(/\s+/).filter(Boolean).length : 0) > 50
                    ? 'border-[#D9534F] focus:border-[#D9534F] bg-[#FEF2F2]'
                    : 'border-[#E4E7DE] focus:border-[#1F5C33]'
                    }`}
                  required
                />
                {(testimonialForm.quote ? testimonialForm.quote.trim().split(/\s+/).filter(Boolean).length : 0) > 50 ? (
                  <p className="mt-1 text-[11px] text-[#D9534F] font-medium flex items-center gap-1">
                    <span>⚠️</span>
                    <span>
                      Review exceeds 50 words limit by{' '}
                      {(testimonialForm.quote ? testimonialForm.quote.trim().split(/\s+/).filter(Boolean).length : 0) - 50}{' '}
                      word
                      {(testimonialForm.quote ? testimonialForm.quote.trim().split(/\s+/).filter(Boolean).length : 0) - 50 === 1 ? '' : 's'}. Please shorten to save.
                    </span>
                  </p>
                ) : (
                  <p className="mt-1 text-[10.5px] text-[#5B6660]">
                    Recommended: 20–45 words. Keeps website testimonial cards balanced, punchy, and readable.
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#131A15] mb-1">Location / District</label>
                  <input
                    type="text"
                    placeholder="e.g. Roorkee, Uttarakhand"
                    value={testimonialForm.location}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, location: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-xs focus:outline-none focus:border-[#1F5C33]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#131A15] mb-1">Vehicle Details</label>
                  <input
                    type="text"
                    placeholder="e.g. Swift Dzire (15 Yr Petrol)"
                    value={testimonialForm.vehicle}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, vehicle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-xs focus:outline-none focus:border-[#1F5C33]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#131A15] mb-1">Date</label>
                  <input
                    type="text"
                    placeholder="e.g. June 12, 2025"
                    value={testimonialForm.date}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-xs focus:outline-none focus:border-[#1F5C33]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#131A15] mb-1">Star Rating</label>
                  <select
                    value={testimonialForm.rating}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, rating: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-xs focus:outline-none focus:border-[#1F5C33]"
                  >
                    <option value={5}>★★★★★ (5 Stars)</option>
                    <option value={4}>★★★★☆ (4 Stars)</option>
                    <option value={3}>★★★☆☆ (3 Stars)</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E4E7DE] flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddTestimonialOpen(false)}
                  className="px-4 py-2 rounded-full border border-[#E4E7DE] text-xs font-semibold text-[#5B6660] hover:bg-[#F8F9F5]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={(testimonialForm.quote ? testimonialForm.quote.trim().split(/\s+/).filter(Boolean).length : 0) > 50}
                  className="px-5 py-2 rounded-full bg-[#1F5C33] text-white text-xs font-semibold hover:bg-[#16311F] transition-colors cursor-pointer flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{editingTestimonial ? 'Save Changes' : 'Add Testimonial'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* ======================= QUICK VIEW BLOG PREVIEW MODAL ======================= */}
      {previewBlog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setPreviewBlog(null)}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E4E7DE] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Sticky Header */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#E4E7DE] flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#1F5C33]/10 text-[#1F5C33]">
                  {previewBlog.category}
                </span>
                <span className="text-xs text-[#5B6660]">
                  {previewBlog.date} • {previewBlog.readTime}
                </span>
                {previewBlog.featured && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#6FCF3C]/20 text-[#16311F]">
                    Featured
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`/blogs/${previewBlog.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#188A38] text-white text-xs font-semibold hover:bg-[#16311F] transition-all shadow-2xs"
                >
                  <span>Open Live Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  href={`/admin/blogs/edit/${previewBlog.id || previewBlog._id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E4E7DE] hover:bg-gray-50 text-xs font-semibold text-[#131A15]"
                >
                  <Edit className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </Link>
                <button
                  onClick={() => setPreviewBlog(null)}
                  className="p-1.5 rounded-full hover:bg-gray-100 text-[#5B6660] hover:text-[#131A15] transition-colors"
                  title="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Title & Metadata */}
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="px-2 py-0.5 rounded-md bg-[#F8F9F5] border border-[#E4E7DE] text-[11px] font-medium text-[#5B6660]">
                    Tag: {previewBlog.tag}
                  </span>
                  <span className="text-[11px] text-[#5B6660] font-mono">
                    Slug: /{previewBlog.slug}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-[#131A15] tracking-tight leading-snug">
                  {previewBlog.title}
                </h2>
                <p className="mt-2.5 text-xs sm:text-sm text-[#5B6660] italic border-l-4 border-[#6FCF3C] pl-3.5 py-1.5 bg-[#F8FAF8] rounded-r-xl">
                  {previewBlog.excerpt}
                </p>
              </div>

              {/* Hero Thumbnail Preview */}
              {previewBlog.image && (
                <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-[#E4E7DE] bg-gray-100 shadow-xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={previewBlog.image}
                    alt={previewBlog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold">
                      {previewBlog.tag}
                    </span>
                  </div>
                </div>
              )}

              {/* Article Content Preview */}
              {previewBlog.contentHtml ? (
                <div
                  className="blog-rich-content text-sm text-[#374151] leading-relaxed pt-4 border-t border-[#E4E7DE]"
                  dangerouslySetInnerHTML={{ __html: previewBlog.contentHtml }}
                />
              ) : previewBlog.sections && previewBlog.sections.length > 0 ? (
                <div className="space-y-6 pt-4 border-t border-[#E4E7DE]">
                  {previewBlog.sections.map((sec, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      {sec.heading && (
                        <h3 className="text-base font-bold text-[#111827] flex items-center gap-2">
                          <span className="w-2 h-4 bg-[#6FCF3C] rounded-full" />
                          <span>{sec.heading}</span>
                        </h3>
                      )}
                      {sec.paragraphs?.map((p, pIdx) => (
                        <p key={pIdx} className="text-xs sm:text-sm text-[#374151] leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-[#5B6660] italic pt-4 border-t border-[#E4E7DE]">
                  No rich body content available for this article.
                </p>
              )}

              {/* Photo & Document Gallery Preview */}
              {previewBlog.gallery && previewBlog.gallery.length > 0 && (
                <div className="pt-6 border-t border-[#E4E7DE]">
                  <h4 className="text-xs font-bold text-[#131A15] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-2 h-3.5 bg-[#6FCF3C] rounded-full" />
                    <span>Gallery Photos ({previewBlog.gallery.length})</span>
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {previewBlog.gallery.map((g, gIdx) => (
                      <div key={gIdx} className="space-y-1">
                        <div className="relative h-28 rounded-xl overflow-hidden border border-[#E4E7DE] bg-gray-50">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={g.url}
                            alt={g.caption || `Photo ${gIdx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {g.caption && (
                          <p className="text-[10px] text-[#5B6660] truncate italic">{g.caption}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

