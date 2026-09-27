'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  BarChart3,
  TrendingUp,
  Users,
  MousePointerClick,
  MapPin,
  Search,
  ArrowDownRight,
  ArrowUpRight,
  RefreshCw,
  Globe2,
  FileCheck,
  PhoneCall,
  MessageSquare,
  Info,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Activity,
  Layers,
  Clock,
  Car,
} from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';

export default function AnalyticsDashboardView() {
  const { token } = useAdmin();

  const [timeRange, setTimeRange] = useState('30d');
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedFunnelStep, setSelectedFunnelStep] = useState(null);

  const fetchAnalyticsData = useCallback(async (range, isManual = false) => {
    if (isManual) setIsRefreshing(true);
    try {
      const currentToken =
        token ||
        (() => {
          try {
            return JSON.parse(localStorage.getItem('carcrush_admin_auth'))?.token;
          } catch {
            return null;
          }
        })();

      const res = await fetch(`/api/admin/analytics?range=${range}`, {
        headers: currentToken ? { Authorization: `Bearer ${currentToken}` } : {},
      });

      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          setData(json.data);
        }
      }
    } catch (err) {
      console.warn('[AnalyticsDashboard] Error fetching report:', err.message);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, [token]);

  useEffect(() => {
    let ignore = false;
    async function loadData() {
      try {
        const currentToken =
          token ||
          (() => {
            try {
              return JSON.parse(localStorage.getItem('carcrush_admin_auth'))?.token;
            } catch {
              return null;
            }
          })();

        const res = await fetch(`/api/admin/analytics?range=${timeRange}`, {
          headers: currentToken ? { Authorization: `Bearer ${currentToken}` } : {},
        });

        if (res.ok) {
          const json = await res.json();
          if (!ignore && json.success && json.data) {
            setData(json.data);
          }
        }
      } catch (err) {
        console.warn('[AnalyticsDashboard] Error fetching report:', err.message);
      } finally {
        if (!ignore) {
          setIsLoading(false);
          setIsRefreshing(false);
        }
      }
    }

    loadData();

    const handleEventTracked = () => {
      loadData();
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('analytics_event_tracked', handleEventTracked);
    }

    const intervalId = setInterval(() => {
      loadData();
    }, 15000);

    return () => {
      ignore = true;
      clearInterval(intervalId);
      if (typeof window !== 'undefined') {
        window.removeEventListener('analytics_event_tracked', handleEventTracked);
      }
    };
  }, [timeRange, token]);

  if (isLoading && !data) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 border-3 border-[#1F5C33]/20 border-t-[#1F5C33] rounded-full animate-spin" />
        <span className="text-xs font-semibold text-[#1F5C33] tracking-wider uppercase">
          Synthesizing Real-time Analytics &amp; Funnel Metrics...
        </span>
      </div>
    );
  }

  const kpis = data?.kpis || {};
  const funnel = data?.funnel || [];
  const geographic = data?.geographic || [];
  const trafficSources = data?.trafficSources || [];
  const userActions = data?.userActions || [];
  const meta = data?.meta || {};
  const liveEvents = data?.recentLiveEvents || [];

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-8 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2.5 flex-wrap">
            <div className="w-9 h-9 rounded-2xl bg-[#1F5C33]/10 text-[#1F5C33] flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#131A15] font-heading">
              Conversion Funnel &amp; Visitor Intelligence
            </h1>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#188A38]/10 text-[#188A38] text-[11px] font-semibold border border-[#188A38]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#188A38] animate-pulse" />
              <span>{meta.mode || 'Google Analytics Data API'}</span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#5B6660] mt-1.5 max-w-2xl leading-relaxed">
            Measuring customer search discovery, regional vehicle volume, scrap quote calculator drop-offs, and Certificate of Deposit (CoD) conversions.
          </p>
        </div>

        {/* Date Range & Controls */}
        <div className="flex items-center gap-3 self-start md:self-auto flex-wrap">
          {/* Range Selector */}
          <div className="flex items-center bg-[#F8F9F5] border border-[#E4E7DE] rounded-2xl p-1 text-xs">
            {[
              { id: '7d', label: '7 Days' },
              { id: '30d', label: '30 Days' },
              { id: '90d', label: '90 Days' },
              { id: '1y', label: '1 Year' },
            ].map((r) => (
              <button
                key={r.id}
                onClick={() => setTimeRange(r.id)}
                className={`px-3 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
                  timeRange === r.id
                    ? 'bg-[#1F5C33] text-white shadow-2xs'
                    : 'text-[#5B6660] hover:text-[#131A15]'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => fetchAnalyticsData(timeRange, true)}
            disabled={isRefreshing}
            title="Refresh Analytics Dataset"
            className="p-2.5 rounded-2xl border border-[#E4E7DE] bg-white hover:bg-[#F8F9F5] text-[#5B6660] hover:text-[#131A15] transition-all cursor-pointer shadow-2xs"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-[#1F5C33]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Top Metric KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="bg-white border border-[#E4E7DE] rounded-3xl p-5 sm:p-6 shadow-2xs hover:border-[#1F5C33]/40 transition-all">
          <div className="flex items-center justify-between text-xs text-[#5B6660]">
            <span className="font-semibold uppercase tracking-wider">Total Visitors</span>
            <div className="w-8 h-8 rounded-full bg-[#1F5C33]/10 text-[#1F5C33] flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#131A15] font-heading">
              {kpis.totalVisitors ? kpis.totalVisitors.toLocaleString() : '0'}
            </span>
            <span className="text-xs font-semibold text-[#188A38] flex items-center gap-0.5">
              <ArrowUpRight className="w-3.5 h-3.5" /> Live
            </span>
          </div>
          <span className="text-[11px] text-[#5B6660] mt-1 block">
            {kpis.totalVisitors ? kpis.totalVisitors.toLocaleString() : '0'} tracked visitor sessions
          </span>
        </div>

        {/* Metric 2 */}
        <div className="bg-white border border-[#E4E7DE] rounded-3xl p-5 sm:p-6 shadow-2xs hover:border-[#1F5C33]/40 transition-all">
          <div className="flex items-center justify-between text-xs text-[#5B6660]">
            <span className="font-semibold uppercase tracking-wider">Lead Conversion Rate</span>
            <div className="w-8 h-8 rounded-full bg-[#188A38]/10 text-[#188A38] flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#188A38] font-heading">
              {kpis.conversionRate || '0.0%'}
            </span>
            <span className="text-xs font-semibold text-[#188A38] flex items-center gap-0.5">
              <ArrowUpRight className="w-3.5 h-3.5" /> Real-time
            </span>
          </div>
          <span className="text-[11px] text-[#5B6660] mt-1 block">
            {kpis.totalLeads ?? 0} authentic vehicle quote submissions
          </span>
        </div>

        {/* Metric 3 */}
        <div className="bg-white border border-[#E4E7DE] rounded-3xl p-5 sm:p-6 shadow-2xs hover:border-[#1F5C33]/40 transition-all">
          <div className="flex items-center justify-between text-xs text-[#5B6660]">
            <span className="font-semibold uppercase tracking-wider">Helpline Inquiries</span>
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#131A15] font-heading">
              {kpis.helplineInquiries ?? 0}
            </span>
            <span className="text-xs text-[#5B6660]">WhatsApp &amp; Calls</span>
          </div>
          <span className="text-[11px] text-[#5B6660] mt-1 block">
            Direct clicks on WhatsApp chat and phone lines
          </span>
        </div>

        {/* Metric 4 */}
        <div className="bg-white border border-[#E4E7DE] rounded-3xl p-5 sm:p-6 shadow-2xs hover:border-[#1F5C33]/40 transition-all">
          <div className="flex items-center justify-between text-xs text-[#5B6660]">
            <span className="font-semibold uppercase tracking-wider">Pipeline Active Leads</span>
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <FileCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#131A15] font-heading">
              {kpis.inProgressLeads ?? 0}
            </span>
            <span className="text-xs font-semibold text-emerald-600 flex items-center gap-0.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Progressed
            </span>
          </div>
          <span className="text-[11px] text-[#5B6660] mt-1 block">
            {kpis.newLeads ?? 0} new leads waiting in pipeline
          </span>
        </div>
      </div>

      {/* ======================= INTERACTIVE 5-STAGE CONVERSION FUNNEL ======================= */}
      <div className="bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E4E7DE]">
          <div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#1F5C33]" />
              <h2 className="text-base font-bold text-[#131A15] font-heading">
                Customer Acquisition &amp; Scrappage Funnel
              </h2>
            </div>
            <p className="text-xs text-[#5B6660] mt-0.5">
              Tracks live visitor progression from initial landing to quote calculation, lead submission, and pipeline qualification.
            </p>
          </div>
          <span className="text-[11px] font-semibold text-[#1F5C33] bg-[#1F5C33]/10 px-3 py-1 rounded-full self-start sm:self-auto">
            Overall Funnel Efficiency: {kpis.conversionRate || '0.0%'}
          </span>
        </div>

        {/* Funnel Visual Bars */}
        <div className="space-y-3.5">
          {funnel.map((step, idx) => {
            const isSelected = selectedFunnelStep === step.id;
            const barWidth = Math.max(12, step.percentage);

            return (
              <div
                key={step.id}
                onClick={() => setSelectedFunnelStep(isSelected ? null : step.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#1F5C33] bg-[#1F5C33]/5 shadow-xs'
                    : 'border-[#E4E7DE] bg-white hover:border-[#1F5C33]/30 hover:bg-[#F8F9F5]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#1F5C33] text-white text-[11px] font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#131A15]">
                        {step.name}
                      </h4>
                      <p className="text-[11px] text-[#5B6660]">{step.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-right self-end sm:self-auto">
                    <div>
                      <span className="text-base sm:text-lg font-bold text-[#131A15] font-heading">
                        {step.count.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-[#5B6660] ml-1.5">
                        ({step.percentage}%)
                      </span>
                    </div>

                    {idx > 0 && (
                      <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        Drop-off: {step.dropOff}%
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress bar fill */}
                <div className="w-full bg-[#E4E7DE] rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${barWidth}%`,
                      backgroundColor: step.color || '#1F5C33',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ======================= GEOGRAPHIC & TRAFFIC ACQUISITION ======================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left 7 Cols: Geographic Search Origins */}
        <div className="lg:col-span-7 bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-7 shadow-2xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#E4E7DE]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#1F5C33]" />
              <h3 className="text-sm font-bold text-[#131A15] font-heading">
                Visitor Geographic Search Origins &amp; Hubs
              </h3>
            </div>
            <span className="text-[11px] text-[#5B6660]">By regional volume</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E4E7DE] text-[11px] font-bold text-[#5B6660] uppercase tracking-wider">
                  <th className="pb-3 pl-1">State / Region</th>
                  <th className="pb-3">Primary City Search</th>
                  <th className="pb-3 text-right">Visitors</th>
                  <th className="pb-3 text-right">Leads</th>
                  <th className="pb-3 text-right pr-1">Conv. Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E7DE] text-xs">
                {geographic.map((geo, idx) => (
                  <tr key={idx} className="hover:bg-[#F8F9F5] transition-colors">
                    <td className="py-3 pl-1 font-semibold text-[#131A15]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#188A38]" />
                        <span>{geo.state}</span>
                      </div>
                    </td>
                    <td className="py-3 text-[#5B6660]">{geo.city}</td>
                    <td className="py-3 text-right font-medium text-[#131A15]">
                      {geo.visitors.toLocaleString()}
                    </td>
                    <td className="py-3 text-right font-bold text-[#1F5C33]">
                      {geo.leads}
                    </td>
                    <td className="py-3 text-right pr-1">
                      <span className="px-2 py-0.5 rounded-full bg-[#188A38]/10 text-[#188A38] text-[11px] font-bold">
                        {geo.conversionRate}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[11px] text-[#5B6660] italic pt-2 border-t border-[#E4E7DE]">
            * Location data derived from customer submitted vehicle quotes and visitor telemetry sessions.
          </p>
        </div>

        {/* Right 5 Cols: Acquisition Channels */}
        <div className="lg:col-span-5 bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-7 shadow-2xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#E4E7DE]">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[#1F5C33]" />
              <h3 className="text-sm font-bold text-[#131A15] font-heading">
                Traffic Acquisition Channels
              </h3>
            </div>
            <span className="text-[11px] text-[#5B6660]">Organic vs Direct</span>
          </div>

          <div className="space-y-4">
            {trafficSources.map((source, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-[#F8F9F5] border border-[#E4E7DE] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#131A15]">{source.channel}</span>
                  <span className="font-bold text-[#1F5C33]">{source.percentage}%</span>
                </div>

                <div className="w-full bg-[#E4E7DE] rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-[#1F5C33] rounded-full"
                    style={{ width: `${source.percentage}%` }}
                  />
                </div>

                {source.topKeywords && (
                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {source.topKeywords.slice(0, 2).map((kw, kIdx) => (
                      <span
                        key={kIdx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-[#E4E7DE] text-[#5B6660]"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======================= USER ACTIONS & LIVE TELEMETRY ======================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* User Actions */}
        <div className="lg:col-span-7 bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-7 shadow-2xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#E4E7DE]">
            <div className="flex items-center gap-2">
              <MousePointerClick className="w-4 h-4 text-[#1F5C33]" />
              <h3 className="text-sm font-bold text-[#131A15] font-heading">
                Top User Actions Performed On Site
              </h3>
            </div>
            <span className="text-[11px] text-[#5B6660]">Engagements</span>
          </div>

          <div className="space-y-3">
            {userActions.map((action, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3.5 rounded-2xl border border-[#E4E7DE] hover:border-[#1F5C33]/30 transition-all bg-[#FDFEFC]"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#131A15]">{action.label}</span>
                    <span className="text-[10px] px-2 py-0.2 rounded-full bg-[#1F5C33]/10 text-[#1F5C33] font-semibold">
                      {action.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#5B6660] block">
                    event: {action.event}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-sm font-bold text-[#131A15]">
                    {action.count.toLocaleString()}
                  </span>
                  <span className="text-[11px] font-semibold text-[#188A38] ml-1 block">
                    {action.growth}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Event Stream */}
        <div className="lg:col-span-5 bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-7 shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E4E7DE]">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#188A38]" />
              <h3 className="text-sm font-bold text-[#131A15] font-heading">
                Live Visitor Activity Stream
              </h3>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#188A38]/10 text-[#188A38] font-bold">
              Real-time
            </span>
          </div>

          <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1 divide-y divide-[#E4E7DE]/60">
            {liveEvents.length === 0 ? (
              <p className="text-xs text-[#5B6660] italic py-8 text-center">
                Waiting for incoming visitor interactions...
              </p>
            ) : (
              liveEvents.map((ev) => (
                <div key={ev.id} className="pt-2.5 first:pt-0 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#1F5C33]">
                      {ev.eventName.replace(/_/g, ' ')}
                    </span>
                    <span className="text-[10px] text-[#5B6660]">
                      {ev.timestamp
                        ? new Date(ev.timestamp).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                          })
                        : 'just now'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#5B6660]">
                    <span>{ev.location || 'Roorkee, Uttarakhand'}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 font-mono">
                      {ev.device || 'Mobile'}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
