'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  FileText,
  Save,
  CheckCircle2,
  AlertCircle,
  Clock,
  ExternalLink,
  RotateCcw,
  Plus,
  Trash2,
  Eye,
  Edit3,
  Layers,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';
import { defaultPolicies } from '../../data/defaultPolicies';

export default function PoliciesManagementView() {
  const { token } = useAdmin();

  const [activePolicyType, setActivePolicyType] = useState('privacy'); // 'privacy' | 'terms'
  const [policies, setPolicies] = useState(defaultPolicies);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });
  const [viewMode, setViewMode] = useState('edit'); // 'edit' | 'preview'

  // Editable form state for current policy
  const [formData, setFormData] = useState({
    title: defaultPolicies.privacy.title,
    version: defaultPolicies.privacy.version,
    effectiveDate: defaultPolicies.privacy.effectiveDate,
    summary: defaultPolicies.privacy.summary,
    sections: defaultPolicies.privacy.sections,
  });

  // Fetch policies on mount
  useEffect(() => {
    let ignore = false;

    const fetchPolicies = async () => {
      try {
        const res = await fetch('/api/admin/policies');
        if (res.ok && !ignore) {
          const json = await res.json();
          if (json.success && json.data) {
            setPolicies(json.data);
            const current = json.data.privacy || defaultPolicies.privacy;
            setFormData({
              title: current.title || '',
              version: current.version || '1.0.0',
              effectiveDate: current.effectiveDate || '',
              summary: current.summary || '',
              sections: current.sections || [],
            });
          }
        }
      } catch (err) {
        console.warn('[PoliciesView] Failed to fetch server policies:', err.message);
      } finally {
        if (!ignore) setIsLoading(false);
      }
    };

    fetchPolicies();

    return () => {
      ignore = true;
    };
  }, []);

  // When policy type switches, load corresponding policy into form
  const handleSwitchType = (type) => {
    setActivePolicyType(type);
    const target = policies[type] || defaultPolicies[type];
    setFormData({
      title: target.title || '',
      version: target.version || '1.0.0',
      effectiveDate: target.effectiveDate || '',
      summary: target.summary || '',
      sections: target.sections ? JSON.parse(JSON.stringify(target.sections)) : [],
    });
    setStatusMessage({ type: '', text: '' });
  };

  // Section manipulation
  const handleSectionChange = (index, field, value) => {
    const next = [...formData.sections];
    next[index] = { ...next[index], [field]: value };
    setFormData({ ...formData, sections: next });
  };

  const handleAddSection = () => {
    const newIndex = formData.sections.length + 1;
    const newSection = {
      id: `clause-${Date.now()}`,
      heading: `${newIndex}. New Clause Heading`,
      content: 'Enter the policy clause details, guidelines, or regulatory obligations here...',
    };
    setFormData({ ...formData, sections: [...formData.sections, newSection] });
  };

  const handleRemoveSection = (index) => {
    if (formData.sections.length <= 1) {
      alert('A policy must have at least one clause.');
      return;
    }
    const next = formData.sections.filter((_, i) => i !== index);
    setFormData({ ...formData, sections: next });
  };

  const handleMoveSection = (index, direction) => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= formData.sections.length) return;
    const next = [...formData.sections];
    const temp = next[index];
    next[index] = next[targetIndex];
    next[targetIndex] = temp;
    setFormData({ ...formData, sections: next });
  };

  // Release/Publish new version
  const handlePublish = async (e) => {
    e?.preventDefault();
    setStatusMessage({ type: '', text: '' });

    if (!formData.title.trim() || !formData.version.trim()) {
      setStatusMessage({
        type: 'error',
        text: 'Policy Title and Version number are required.',
      });
      return;
    }

    setIsSaving(true);

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

      const res = await fetch(`/api/admin/policies/${activePolicyType}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...(currentToken ? { Authorization: `Bearer ${currentToken}` } : {}),
        },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      setIsSaving(false);

      if (res.ok && json.success && json.data) {
        setPolicies((prev) => ({
          ...prev,
          [activePolicyType]: json.data,
        }));
        setStatusMessage({
          type: 'success',
          text: `Successfully released ${json.data.title} (${json.data.version})! Public page is now updated.`,
        });
        setTimeout(() => setStatusMessage({ type: '', text: '' }), 7000);
      } else {
        setStatusMessage({
          type: 'error',
          text: json.error || 'Failed to release policy update.',
        });
      }
    } catch (err) {
      setIsSaving(false);
      setStatusMessage({
        type: 'error',
        text: 'Network error connecting to API server.',
      });
    }
  };

  // Reset to standard template
  const handleResetToTemplate = async () => {
    const confirmReset = window.confirm(
      `Are you sure you want to reset the ${activePolicyType === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'} to the standard legal template? Any unsaved edits will be replaced.`
    );
    if (!confirmReset) return;

    const template = defaultPolicies[activePolicyType];
    setFormData({
      title: template.title,
      version: template.version,
      effectiveDate: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      summary: template.summary,
      sections: JSON.parse(JSON.stringify(template.sections)),
    });

    setStatusMessage({
      type: 'info',
      text: 'Loaded standard legal template into form. Click "Release / Publish New Version" to apply live.',
    });
  };

  const currentPolicyMeta = policies[activePolicyType] || defaultPolicies[activePolicyType];

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-8 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-[#1F5C33]/10 text-[#1F5C33] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#131A15] font-heading">
              Legal Policies &amp; Regulatory Compliance
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-[#5B6660] mt-1.5 max-w-2xl leading-relaxed">
            Manage, update, and release versioned legal agreements. Changes published here are reflected live on the public{' '}
            <Link
              href={activePolicyType === 'privacy' ? '/privacy' : '/terms'}
              target="_blank"
              className="text-[#1F5C33] font-semibold underline underline-offset-2 hover:text-[#16311F]"
            >
              {activePolicyType === 'privacy' ? '/privacy' : '/terms'}
            </Link>{' '}
            pages with verified effective dates.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto flex-wrap">
          <Link
            href={activePolicyType === 'privacy' ? '/privacy' : '/terms'}
            target="_blank"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#E4E7DE] bg-white hover:bg-[#F8F9F5] text-xs font-semibold text-[#131A15] transition-all shadow-2xs"
          >
            <span>View Live Public Page</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#5B6660]" />
          </Link>

          <button
            type="button"
            onClick={handlePublish}
            disabled={isSaving}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F5C33] hover:bg-[#16311F] text-white text-xs font-bold transition-all shadow-sm active:scale-95 disabled:opacity-60 cursor-pointer"
          >
            {isSaving ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Publishing...</span>
              </>
            ) : (
              <>
                <Save className="w-3.5 h-3.5 text-[#6FCF3C]" />
                <span>Release / Publish New Version</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Policy Selection Tabs & Version Ribbon */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E4E7DE] pb-3">
        {/* Type Switcher */}
        <div className="flex items-center gap-2 bg-[#F0F2EB] p-1.5 rounded-2xl self-start">
          <button
            onClick={() => handleSwitchType('privacy')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activePolicyType === 'privacy'
                ? 'bg-white text-[#1F5C33] shadow-xs'
                : 'text-[#5B6660] hover:text-[#131A15]'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Privacy Policy</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1F5C33]/10 text-[#1F5C33]">
              {policies.privacy?.version || 'v1.2.0'}
            </span>
          </button>

          <button
            onClick={() => handleSwitchType('terms')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activePolicyType === 'terms'
                ? 'bg-white text-[#1F5C33] shadow-xs'
                : 'text-[#5B6660] hover:text-[#131A15]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Terms &amp; Conditions (T&amp;C)</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1F5C33]/10 text-[#1F5C33]">
              {policies.terms?.version || 'v1.2.0'}
            </span>
          </button>
        </div>

        {/* View Mode Switcher (Edit vs Preview) */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white border border-[#E4E7DE] rounded-xl p-1 text-xs">
            <button
              onClick={() => setViewMode('edit')}
              className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'edit'
                  ? 'bg-[#1F5C33] text-white shadow-2xs'
                  : 'text-[#5B6660] hover:text-[#131A15]'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Editor</span>
            </button>
            <button
              onClick={() => setViewMode('preview')}
              className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'preview'
                  ? 'bg-[#1F5C33] text-white shadow-2xs'
                  : 'text-[#5B6660] hover:text-[#131A15]'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Live Preview</span>
            </button>
          </div>

          <button
            onClick={handleResetToTemplate}
            title="Reset form to default legal template"
            className="p-2 rounded-xl border border-[#E4E7DE] bg-white hover:bg-[#F8F9F5] text-[#5B6660] hover:text-[#131A15] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Alert Notices */}
      {statusMessage.text && (
        <div
          className={`p-4 rounded-2xl border text-xs font-medium flex items-center gap-3 animate-fadeIn ${
            statusMessage.type === 'success'
              ? 'bg-[#EBF7EE] border-[#BCE4C6] text-[#165A28]'
              : statusMessage.type === 'info'
              ? 'bg-[#EFF6FF] border-[#BFDBFE] text-[#1E40AF]'
              : 'bg-[#FDF2F2] border-[#F8B4B4] text-[#9B1C1C]'
          }`}
        >
          {statusMessage.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-[#165A28] flex-shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
          )}
          <span>{statusMessage.text}</span>
        </div>
      )}

      {/* Current Version Ribbon */}
      <div className="px-5 py-3 rounded-2xl bg-[#1F5C33]/5 border border-[#1F5C33]/15 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-bold text-[#1F5C33] uppercase tracking-wider text-[11px]">
            Currently Live:
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#1F5C33]/20 font-bold text-[#1F5C33]">
            {currentPolicyMeta.version || 'v1.0.0'}
          </span>
          <span className="text-[#5B6660]">
            Effective Date: <strong className="text-[#131A15]">{currentPolicyMeta.effectiveDate}</strong>
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-[#5B6660]">
          <Clock className="w-3.5 h-3.5 text-[#1F5C33]" />
          <span>
            Last published:{' '}
            {currentPolicyMeta.lastUpdated
              ? new Date(currentPolicyMeta.lastUpdated).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })
              : 'Default System Release'}
          </span>
        </div>
      </div>

      {viewMode === 'edit' ? (
        /* ================= EDIT MODE ================= */
        <form onSubmit={handlePublish} className="space-y-6">
          {/* Section 1: Version Metadata */}
          <div className="bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-[#E4E7DE]">
              <Layers className="w-4 h-4 text-[#1F5C33]" />
              <h2 className="text-sm font-bold text-[#131A15] font-heading">
                Release Version &amp; Metadata
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                  Policy Display Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Privacy Policy"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                  Version Identifier (e.g. v1.3.0)
                </label>
                <input
                  type="text"
                  value={formData.version}
                  onChange={(e) => setFormData({ ...formData, version: e.target.value })}
                  placeholder="v1.3.0"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] font-mono focus:outline-none focus:border-[#1F5C33]"
                  required
                />
                <span className="text-[10px] text-[#5B6660] mt-1 block">
                  Increment when issuing updated terms or statutory clauses.
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                  Effective Date
                </label>
                <input
                  type="text"
                  value={formData.effectiveDate}
                  onChange={(e) => setFormData({ ...formData, effectiveDate: e.target.value })}
                  placeholder="September 18, 2026"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                />
                <span className="text-[10px] text-[#5B6660] mt-1 block">
                  The date when this version officially enters legal force.
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#131A15] uppercase tracking-wider mb-1.5">
                Executive Summary / Regulatory Overview
              </label>
              <textarea
                rows={2}
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                placeholder="Brief summary explaining the scope and legal purpose of this document..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
              />
            </div>
          </div>

          {/* Section 2: Clauses & Content Sections */}
          <div className="bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E4E7DE]">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#1F5C33]" />
                <h2 className="text-sm font-bold text-[#131A15] font-heading">
                  Document Clauses &amp; Policy Sections ({formData.sections.length})
                </h2>
              </div>

              <button
                type="button"
                onClick={handleAddSection}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1F5C33]/10 hover:bg-[#1F5C33]/20 text-[#1F5C33] text-xs font-semibold transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Clause</span>
              </button>
            </div>

            <div className="space-y-4">
              {formData.sections.map((section, idx) => (
                <div
                  key={section.id || idx}
                  className="p-5 rounded-2xl border border-[#E4E7DE] bg-[#FDFEFC] hover:border-[#1F5C33]/40 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-1">
                      <label className="block text-[10px] font-bold text-[#5B6660] uppercase tracking-wider mb-1">
                        Clause #{idx + 1} Heading
                      </label>
                      <input
                        type="text"
                        value={section.heading}
                        onChange={(e) => handleSectionChange(idx, 'heading', e.target.value)}
                        placeholder={`e.g. ${idx + 1}. Clause Title`}
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E4E7DE] text-sm font-semibold text-[#131A15] focus:outline-none focus:border-[#1F5C33]"
                      />
                    </div>

                    <div className="flex items-center gap-1 self-end pb-0.5">
                      <button
                        type="button"
                        onClick={() => handleMoveSection(idx, 'up')}
                        disabled={idx === 0}
                        title="Move Up"
                        className="p-1.5 rounded-lg border border-[#E4E7DE] hover:bg-[#F8F9F5] text-[#5B6660] disabled:opacity-30 cursor-pointer"
                      >
                        <ChevronUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleMoveSection(idx, 'down')}
                        disabled={idx === formData.sections.length - 1}
                        title="Move Down"
                        className="p-1.5 rounded-lg border border-[#E4E7DE] hover:bg-[#F8F9F5] text-[#5B6660] disabled:opacity-30 cursor-pointer"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRemoveSection(idx)}
                        title="Delete Clause"
                        className="p-1.5 rounded-lg border border-red-200 hover:bg-red-50 text-red-600 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#5B6660] uppercase tracking-wider mb-1">
                      Clause Body / Text (Use new lines for bullet points • or paragraphs)
                    </label>
                    <textarea
                      rows={5}
                      value={section.content}
                      onChange={(e) => handleSectionChange(idx, 'content', e.target.value)}
                      placeholder="Write full legal text for this clause..."
                      className="w-full p-3.5 rounded-xl bg-white border border-[#E4E7DE] text-xs sm:text-sm text-[#131A15] leading-relaxed focus:outline-none focus:border-[#1F5C33] font-sans"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={handleAddSection}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dashed border-[#1F5C33]/40 bg-[#1F5C33]/5 hover:bg-[#1F5C33]/10 text-[#1F5C33] text-xs font-semibold transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Append Another Clause</span>
              </button>

              <button
                type="submit"
                disabled={isSaving}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F5C33] hover:bg-[#16311F] text-white text-xs font-bold transition-all shadow-sm active:scale-95 disabled:opacity-60 cursor-pointer"
              >
                <Save className="w-4 h-4 text-[#6FCF3C]" />
                <span>Release Version {formData.version}</span>
              </button>
            </div>
          </div>
        </form>
      ) : (
        /* ================= PREVIEW MODE ================= */
        <div className="bg-white border border-[#E4E7DE] rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          {/* Public Hero Preview */}
          <div className="text-center max-w-2xl mx-auto space-y-3 pb-6 border-b border-[#E4E7DE]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F5C33]/10 text-[#1F5C33] text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#188A38]" />
              <span>Preview Mode • Public Layout</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#131A15] font-heading tracking-tight">
              {formData.title}
            </h1>
            <p className="text-xs sm:text-sm text-[#5B6660] leading-relaxed">
              {formData.summary}
            </p>
            <div className="flex items-center justify-center gap-3 text-xs text-[#5B6660]">
              <span className="font-semibold text-[#1F5C33]">Version {formData.version}</span>
              <span>•</span>
              <span>Effective Date: {formData.effectiveDate}</span>
            </div>
          </div>

          {/* Clauses list */}
          <div className="max-w-3xl mx-auto space-y-8">
            {formData.sections.map((sec, i) => (
              <div key={sec.id || i} className="space-y-2.5">
                <h3 className="text-base font-bold text-[#131A15] font-heading flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-[#188A38] rounded-full" />
                  <span>{sec.heading}</span>
                </h3>
                <div className="text-xs sm:text-[13.5px] text-[#4A5568] leading-relaxed whitespace-pre-line pl-3.5 border-l border-[#E4E7DE]">
                  {sec.content}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[#E4E7DE] text-center">
            <button
              onClick={() => setViewMode('edit')}
              className="px-6 py-2.5 rounded-full bg-[#1F5C33] text-white text-xs font-bold hover:bg-[#16311F] transition-all cursor-pointer"
            >
              Return to Editor to Modify Clauses
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
