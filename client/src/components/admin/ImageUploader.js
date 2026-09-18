'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Upload, X, Image as ImageIcon, Check, Loader2, Plus, Sparkles } from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';

export function ThumbnailUploader({ value = '', onChange }) {
  const { token } = useAdmin();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef(null);

  const handleFileSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      setUploadError('File size exceeds 10MB limit.');
      return;
    }

    setIsUploading(true);
    setUploadError('');

    try {
      const formData = new FormData();
      formData.append('image', file);

      const currentToken =
        token ||
        (() => {
          try {
            return JSON.parse(localStorage.getItem('carcrush_admin_auth'))?.token;
          } catch {
            return null;
          }
        })();

      const res = await fetch('/api/admin/upload/single', {
        method: 'POST',
        headers: currentToken ? { Authorization: `Bearer ${currentToken}` } : {},
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.success && data.url) {
        onChange(data.url);
      } else {
        setUploadError(data.error || 'Failed to upload image.');
      }
    } catch (err) {
      setUploadError(err.message || 'Upload failed.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const presetImages = [
    { label: 'Blog 1 (Policy)', url: '/images/blogs/blog1.jpg' },
    { label: 'Blog 2 (Tax & CoD)', url: '/images/blogs/blog2.jpg' },
    { label: 'Blog 3 (NCR Rules)', url: '/images/blogs/blog3.jpg' },
    { label: 'Blog 4 (Fraud Safety)', url: '/images/blogs/blog4.jpg' },
    { label: 'Blog 5 (Recycling)', url: '/images/blogs/blog5.jpg' },
    { label: 'Blog 6 (RTO Vahan)', url: '/images/blogs/blog6.jpg' },
    { label: 'Blog 7 (Commercial)', url: '/images/blogs/blog7.jpg' },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-bold text-[#131A15]">
          Thumbnail Cover Image <span className="text-red-500">*</span>
        </label>
        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            className="text-[11px] text-red-600 hover:underline flex items-center gap-0.5"
          >
            <X className="w-3 h-3" />
            <span>Remove</span>
          </button>
        )}
      </div>

      {/* Upload Zone / Active Preview */}
      <div className="relative border-2 border-dashed border-[#D9E2DA] hover:border-[#188A38] rounded-2xl bg-[#FBFDFB] transition-colors p-4 flex flex-col items-center justify-center min-h-[160px] text-center overflow-hidden group">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png, image/jpeg, image/webp, image/jpg"
          onChange={handleFileSelect}
          className="hidden"
          id="thumbnail-file-upload"
        />

        {value ? (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xs group/img">
            {/* Display Image */}
            <img
              src={value}
              alt="Thumbnail preview"
              className="w-full h-full object-cover"
            />
            {/* Hover overlay with action buttons */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <label
                htmlFor="thumbnail-file-upload"
                className="px-3 py-1.5 rounded-full bg-white text-[#131A15] text-xs font-semibold hover:bg-gray-100 cursor-pointer shadow-sm flex items-center gap-1"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Replace</span>
              </label>
              <button
                type="button"
                onClick={() => onChange('')}
                className="px-3 py-1.5 rounded-full bg-red-600 text-white text-xs font-semibold hover:bg-red-700 shadow-sm flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                <span>Delete</span>
              </button>
            </div>
            <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded-md truncate max-w-[90%]">
              {value}
            </div>
          </div>
        ) : (
          <label
            htmlFor="thumbnail-file-upload"
            className="cursor-pointer flex flex-col items-center justify-center w-full py-4 space-y-2"
          >
            <div className="w-12 h-12 rounded-full bg-[#188A38]/10 text-[#188A38] flex items-center justify-center group-hover:scale-110 transition-transform">
              {isUploading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Upload className="w-6 h-6" />}
            </div>
            <div>
              <p className="text-xs font-bold text-[#131A15]">
                {isUploading ? 'Uploading image...' : 'Click to browse or drag & drop'}
              </p>
              <p className="text-[11px] text-[#5B6660]">PNG, JPG, WebP up to 10MB (16:9 ratio recommended)</p>
            </div>
          </label>
        )}
      </div>

      {uploadError && (
        <p className="text-[11px] text-red-600 bg-red-50 p-2 rounded-lg">{uploadError}</p>
      )}

      {/* Preset Fast Picker */}
      <div>
        <span className="text-[10px] font-semibold text-[#5B6660] uppercase tracking-wider block mb-1.5 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#188A38]" />
          <span>Or Choose from Website Presets:</span>
        </span>
        <div className="flex flex-wrap gap-1.5">
          {presetImages.map((p) => (
            <button
              key={p.url}
              type="button"
              onClick={() => onChange(p.url)}
              className={`px-2 py-1 rounded-lg text-[11px] font-medium border transition-colors flex items-center gap-1 ${
                value === p.url
                  ? 'border-[#188A38] bg-[#F1F8F3] text-[#188A38] font-bold'
                  : 'border-[#E4E7DE] bg-white text-[#5B6660] hover:border-gray-400'
              }`}
            >
              {value === p.url && <Check className="w-3 h-3" />}
              <span>{p.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function GalleryUploader({ images = [], onChange }) {
  const { token } = useAdmin();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const galleryInputRef = useRef(null);

  const handleFilesSelect = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setIsUploading(true);
    setUploadError('');

    try {
      const formData = new FormData();
      files.forEach((f) => formData.append('images', f));

      const currentToken =
        token ||
        (() => {
          try {
            return JSON.parse(localStorage.getItem('carcrush_admin_auth'))?.token;
          } catch {
            return null;
          }
        })();

      const res = await fetch('/api/admin/upload/multiple', {
        method: 'POST',
        headers: currentToken ? { Authorization: `Bearer ${currentToken}` } : {},
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.success && data.files) {
        const newItems = data.files.map((f) => ({
          url: f.url,
          caption: f.originalName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
        }));
        onChange([...images, ...newItems]);
      } else {
        setUploadError(data.error || 'Failed to upload gallery images.');
      }
    } catch (err) {
      setUploadError(err.message || 'Gallery upload failed.');
    } finally {
      setIsUploading(false);
      if (galleryInputRef.current) galleryInputRef.current.value = '';
    }
  };

  const updateCaption = (index, newCaption) => {
    const updated = [...images];
    updated[index] = { ...updated[index], caption: newCaption };
    onChange(updated);
  };

  const removeImage = (index) => {
    const updated = images.filter((_, i) => i !== index);
    onChange(updated);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <label className="block text-xs font-bold text-[#131A15]">
            Article Gallery Images ({images.length})
          </label>
          <p className="text-[11px] text-[#5B6660]">
            Upload inspection photos, facility dismantling, or circular recycling proof.
          </p>
        </div>
        <label
          htmlFor="gallery-files-upload"
          className="px-3 py-1.5 rounded-full bg-[#188A38] text-white text-xs font-semibold hover:bg-[#16311F] transition-colors cursor-pointer flex items-center gap-1 shadow-2xs"
        >
          {isUploading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Plus className="w-3.5 h-3.5" />}
          <span>Add Photos</span>
        </label>
      </div>

      <input
        ref={galleryInputRef}
        type="file"
        multiple
        accept="image/png, image/jpeg, image/webp, image/jpg"
        onChange={handleFilesSelect}
        className="hidden"
        id="gallery-files-upload"
      />

      {uploadError && (
        <p className="text-[11px] text-red-600 bg-red-50 p-2 rounded-lg">{uploadError}</p>
      )}

      {/* Gallery Grid */}
      {images.length === 0 ? (
        <label
          htmlFor="gallery-files-upload"
          className="border border-dashed border-[#D9E2DA] rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#188A38] bg-[#FBFDFB] transition-colors"
        >
          <ImageIcon className="w-8 h-8 text-gray-400 mb-2" />
          <span className="text-xs font-semibold text-[#131A15]">No gallery images added yet</span>
          <span className="text-[11px] text-[#5B6660]">Click to upload multiple vehicle or facility photos</span>
        </label>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="border border-[#E4E7DE] rounded-xl p-2.5 bg-white shadow-2xs flex gap-3 items-center relative group"
            >
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 relative">
                <img src={item.url} alt="Gallery item" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0 pr-6">
                <label className="text-[10px] font-bold text-[#5B6660] uppercase block mb-1">
                  Photo #{idx + 1} Caption
                </label>
                <input
                  type="text"
                  placeholder="Enter caption for readers..."
                  value={item.caption || ''}
                  onChange={(e) => updateCaption(idx, e.target.value)}
                  className="w-full px-2 py-1 text-xs border border-[#E4E7DE] rounded-lg focus:outline-none focus:border-[#188A38]"
                />
              </div>
              <button
                type="button"
                onClick={() => removeImage(idx)}
                className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                title="Remove photo"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
