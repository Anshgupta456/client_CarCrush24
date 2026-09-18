'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Check,
  Save,
  Eye,
  ArrowUpRight,
  FileText,
  Calendar,
  Clock,
  Tag,
  Folder,
  Globe,
  Star,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';
import RichTextEditor from './RichTextEditor';
import { ThumbnailUploader, GalleryUploader } from './ImageUploader';

export default function BlogEditorForm({ initialBlog = null, isEdit = false }) {
  const router = useRouter();
  const { blogs, addBlog, updateBlog } = useAdmin();

  const [title, setTitle] = useState(initialBlog?.title || '');
  const [slug, setSlug] = useState(initialBlog?.slug || '');
  const [isSlugCustom, setIsSlugCustom] = useState(!!initialBlog?.slug);
  const [category, setCategory] = useState(initialBlog?.category || 'Policy & Rules');
  const [tag, setTag] = useState(initialBlog?.tag || 'MoRTH Compliance');
  const [readTime, setReadTime] = useState(initialBlog?.readTime || '5 min read');
  const [date, setDate] = useState(
    initialBlog?.date ||
      new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  );
  const [featured, setFeatured] = useState(!!initialBlog?.featured);
  const [image, setImage] = useState(initialBlog?.image || '/images/blogs/blog1.jpg');
  const [excerpt, setExcerpt] = useState(initialBlog?.excerpt || '');

  // Initialize contentHtml from existing sections or html
  const initialHtml =
    initialBlog?.contentHtml ||
    initialBlog?.sections
      ?.map((s) => `<h2>${s.heading}</h2>${s.paragraphs ? s.paragraphs.map((p) => `<p>${p}</p>`).join('') : ''}`)
      .join('') ||
    (initialBlog?.excerpt ? `<p>${initialBlog.excerpt}</p>` : '');

  const [contentHtml, setContentHtml] = useState(initialHtml);
  const [gallery, setGallery] = useState(initialBlog?.gallery || []);

  const [isSaving, setIsSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Auto-generate slug when title changes unless manually edited
  const handleTitleChange = (val) => {
    setTitle(val);
    if (!isSlugCustom) {
      const generated = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
      setSlug(generated);
    }
  };

  // Existing dynamic categories list
  const existingCategories = Array.from(new Set(blogs.map((b) => b.category).filter(Boolean)));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorMsg('Please enter an article title.');
      return;
    }
    if (!excerpt.trim()) {
      setErrorMsg('Please enter an article excerpt or meta summary.');
      return;
    }

    setIsSaving(true);
    setErrorMsg('');
    setSuccessMsg('');

    const cleanSlug =
      slug.trim() ||
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

    const blogPayload = {
      title: title.trim(),
      slug: cleanSlug,
      category: category.trim() || 'General',
      tag: tag.trim() || 'Automotive Advisory',
      readTime: readTime.trim() || '5 min read',
      date: date.trim(),
      featured,
      image: image || '/images/blogs/blog1.jpg',
      excerpt: excerpt.trim(),
      contentHtml,
      gallery,
      // Backward compatibility with sections array for website
      sections: [
        {
          id: 'overview',
          heading: title,
          paragraphs: [excerpt],
        },
      ],
    };

    try {
      if (isEdit && initialBlog) {
        await updateBlog({ ...initialBlog, ...blogPayload });
        setSuccessMsg('Article updated successfully!');
      } else {
        await addBlog(blogPayload);
        setSuccessMsg('Article published successfully!');
      }

      setTimeout(() => {
        router.push('/admin');
      }, 700);
    } catch (err) {
      setErrorMsg(err.message || 'Failed to save article.');
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pb-16 animate-fadeIn">
      {/* Sticky Top Action Header */}
      <div className="sticky top-16 z-30 bg-[#FBFDFB]/95 backdrop-blur-md border-b border-[#E4E7DE] -mx-4 px-4 sm:-mx-8 sm:px-8 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="p-2 rounded-xl border border-[#E4E7DE] bg-white hover:bg-gray-50 text-[#5B6660] hover:text-[#131A15] transition-colors"
            title="Back to Admin Dashboard"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-[#131A15] font-heading flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#188A38]" />
              <span>{isEdit ? 'Edit Blog Article' : 'Create New Blog Article'}</span>
            </h1>
            <p className="text-xs text-[#5B6660]">
              Full-page authoring with Rich Text, dynamic categories & media uploads.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          {isEdit && slug && (
            <a
              href={`/blogs/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-full border border-[#188A38]/30 bg-[#188A38]/10 hover:bg-[#188A38] text-[#188A38] hover:text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-2xs"
              title="Open published article in new tab"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">View Live</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
          <Link
            href="/admin"
            className="px-4 py-2 rounded-full border border-[#E4E7DE] bg-white text-xs font-semibold text-[#5B6660] hover:bg-gray-50"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isSaving}
            className="px-5 py-2 rounded-full bg-[#188A38] text-white text-xs font-bold hover:bg-[#16311F] transition-all flex items-center gap-1.5 shadow-sm disabled:opacity-50 cursor-pointer"
          >
            {isSaving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : isEdit ? (
              <Save className="w-4 h-4" />
            ) : (
              <Check className="w-4 h-4" />
            )}
            <span>{isSaving ? 'Saving...' : isEdit ? 'Save Changes' : 'Publish Article'}</span>
          </button>
        </div>
      </div>

      {/* Status Alerts */}
      {errorMsg && (
        <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}
      {successMsg && (
        <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
          <Check className="w-4 h-4 flex-shrink-0" />
          <span>{successMsg} Redirecting to dashboard...</span>
        </div>
      )}

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Primary Column: Title, Content Editor, Excerpt */}
        <div className="lg:col-span-8 space-y-6">
          {/* Article Title Card */}
          <div className="bg-white border border-[#E4E7DE] rounded-3xl p-5 sm:p-6 shadow-2xs space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#131A15] uppercase tracking-wider mb-2">
                Article Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g. The Comprehensive Guide to India's Vehicle Scrappage Policy (2025–2026)"
                className="w-full px-4 py-3 rounded-2xl bg-[#F8F9F5] border border-[#E4E7DE] text-sm sm:text-base font-bold text-[#131A15] placeholder-gray-400 focus:outline-none focus:border-[#188A38] focus:bg-white transition-all"
                required
              />
            </div>

            {/* URL Slug & Permalink */}
            <div>
              <label className="block text-[11px] font-semibold text-[#5B6660] mb-1 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-[#188A38]" />
                  <span>Permalink Slug</span>
                </span>
                <span className="text-[10px] text-gray-400 font-normal">
                  /blogs/{slug || 'article-slug'}
                </span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => {
                    setSlug(e.target.value);
                    setIsSlugCustom(true);
                  }}
                  placeholder="auto-generated-from-title"
                  className="w-full px-3 py-2 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-xs font-mono text-[#131A15] focus:outline-none focus:border-[#188A38]"
                />
              </div>
            </div>

            {/* Excerpt / Search Summary */}
            <div>
              <label className="block text-xs font-bold text-[#131A15] mb-1">
                Excerpt &amp; Meta Description <span className="text-red-500">*</span>
              </label>
              <p className="text-[11px] text-[#5B6660] mb-2">
                A concise summary displayed on blog listings, search engine results, and social cards.
              </p>
              <textarea
                rows={3}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Understand the end-of-life vehicle mandates, 10-year diesel and 15-year petrol rules, and how to claim tax rebates..."
                className="w-full px-3.5 py-2.5 rounded-2xl bg-[#F8F9F5] border border-[#E4E7DE] text-xs sm:text-sm text-[#131A15] focus:outline-none focus:border-[#188A38] focus:bg-white transition-all"
                required
              />
            </div>
          </div>

          {/* Rich Text WYSIWYG Editor Card */}
          <div className="bg-white border border-[#E4E7DE] rounded-3xl p-5 sm:p-6 shadow-2xs space-y-3">
            <div>
              <h3 className="text-sm font-bold text-[#131A15] font-heading flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#188A38]" />
                <span>Article Body Content</span>
              </h3>
              <p className="text-xs text-[#5B6660]">
                Use the visual formatting toolbar below to insert headings, bullet lists, numbered lists, alerts, and tables.
              </p>
            </div>

            {/* The Rich Text Editor */}
            <RichTextEditor
              value={contentHtml}
              onChange={setContentHtml}
              placeholder="Write the comprehensive policy walkthrough, vehicle eligibility details, required RTO documents, and step-by-step guidance..."
            />
          </div>

          {/* Article Gallery Images Card */}
          <div className="bg-white border border-[#E4E7DE] rounded-3xl p-5 sm:p-6 shadow-2xs">
            <GalleryUploader images={gallery} onChange={setGallery} />
          </div>
        </div>

        {/* Right Sidebar: Categories, Tags, Thumbnail Cover, Publication Settings */}
        <div className="lg:col-span-4 space-y-6">
          {/* Publication Metadata Card */}
          <div className="bg-white border border-[#E4E7DE] rounded-3xl p-5 shadow-2xs space-y-4">
            <h3 className="text-xs font-bold text-[#131A15] uppercase tracking-wider border-b border-[#E4E7DE] pb-2.5 flex items-center gap-1.5">
              <Folder className="w-3.5 h-3.5 text-[#188A38]" />
              <span>Taxonomy &amp; Metadata</span>
            </h3>

            {/* Dynamic Category Input */}
            <div>
              <label className="block text-xs font-bold text-[#131A15] mb-1">
                Category <span className="text-[10px] text-[#188A38] font-normal">(Dynamic - Type or pick)</span>
              </label>
              <input
                type="text"
                list="editor-blog-categories"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="e.g. Policy & Rules, EV Recycling..."
                className="w-full px-3 py-2 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-xs text-[#131A15] focus:outline-none focus:border-[#188A38]"
                required
              />
              <datalist id="editor-blog-categories">
                {existingCategories.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </div>

            {/* Keyword / Tag */}
            <div>
              <label className="block text-xs font-bold text-[#131A15] mb-1 flex items-center gap-1">
                <Tag className="w-3 h-3 text-[#188A38]" />
                <span>Primary Keyword Tag</span>
              </label>
              <input
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="e.g. MoRTH Compliance"
                className="w-full px-3 py-2 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-xs text-[#131A15] focus:outline-none focus:border-[#188A38]"
              />
            </div>

            {/* Read Time & Publish Date */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#131A15] mb-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#188A38]" />
                  <span>Read Time</span>
                </label>
                <input
                  type="text"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  placeholder="5 min read"
                  className="w-full px-3 py-2 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-xs text-[#131A15] focus:outline-none focus:border-[#188A38]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#131A15] mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#188A38]" />
                  <span>Date</span>
                </label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Sept 18, 2026"
                  className="w-full px-3 py-2 rounded-xl bg-[#F8F9F5] border border-[#E4E7DE] text-xs text-[#131A15] focus:outline-none focus:border-[#188A38]"
                />
              </div>
            </div>

            {/* Featured Article Checkbox */}
            <div className="pt-2 border-t border-[#E4E7DE]">
              <label className="flex items-start gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="mt-0.5 rounded border-[#E4E7DE] text-[#188A38] focus:ring-[#188A38]"
                />
                <div>
                  <span className="text-xs font-bold text-[#131A15] flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>Feature as Spotlight Guide</span>
                  </span>
                  <p className="text-[11px] text-[#5B6660] mt-0.5">
                    Highlights this article in the black & neon hero banner on the public blog hub.
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Thumbnail Cover Image Card */}
          <div className="bg-white border border-[#E4E7DE] rounded-3xl p-5 shadow-2xs">
            <ThumbnailUploader value={image} onChange={setImage} />
          </div>

          {/* SEO Card Preview */}
          <div className="bg-white border border-[#E4E7DE] rounded-3xl p-5 shadow-2xs space-y-2.5">
            <h3 className="text-xs font-bold text-[#131A15] uppercase tracking-wider flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#188A38]" />
              <span>Public Hub Preview</span>
            </h3>
            <div className="border border-[#E4E7DE] rounded-2xl overflow-hidden bg-[#FBFDFB]">
              <div className="aspect-video w-full relative bg-gray-100">
                <img
                  src={image || '/images/blogs/blog1.jpg'}
                  alt="Card preview"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 text-white text-[10px] font-bold">
                  {category || 'General'}
                </span>
              </div>
              <div className="p-3">
                <h4 className="text-xs font-extrabold text-[#111827] line-clamp-2 leading-snug">
                  {title || 'Article title will appear here'}
                </h4>
                <p className="text-[11px] text-[#5B6660] line-clamp-2 mt-1">
                  {excerpt || 'Meta summary will appear here on the public listings card.'}
                </p>
                <div className="flex items-center justify-between text-[10px] text-gray-400 mt-2 pt-2 border-t border-gray-100">
                  <span>{date}</span>
                  <span>{readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
