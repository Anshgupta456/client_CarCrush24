'use client';

import React, { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { useAdmin } from '../../../../../context/AdminContext';
import BlogEditorForm from '../../../../../components/admin/BlogEditorForm';

export default function EditBlogPage({ params }) {
  const unwrappedParams = use(params);
  const blogId = unwrappedParams.id;
  const { blogs } = useAdmin();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Look up in loaded blogs from context
    const found = blogs.find(
      (b) => String(b.id) === String(blogId) || String(b._id) === String(blogId) || b.slug === blogId
    );

    if (found) {
      setBlog(found);
      setIsLoading(false);
    } else {
      // Fetch directly from API if refreshed directly on edit URL
      fetch('/api/blogs')
        .then((res) => res.json())
        .then((json) => {
          if (json.data) {
            const apiFound = json.data.find(
              (b) => String(b.id) === String(blogId) || String(b._id) === String(blogId) || b.slug === blogId
            );
            setBlog(apiFound || null);
          }
        })
        .catch(() => {})
        .finally(() => setIsLoading(false));
    }
  }, [blogId, blogs]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center text-center space-y-3">
        <Loader2 className="w-8 h-8 animate-spin text-[#188A38]" />
        <p className="text-xs text-[#5B6660]">Loading article details into editor...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-lg font-bold text-[#131A15]">Article Not Found</h2>
        <p className="text-xs text-[#5B6660]">
          The article you are trying to edit could not be found or has been removed.
        </p>
        <Link
          href="/admin"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#188A38] text-white text-xs font-semibold hover:bg-[#16311F]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Dashboard</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <BlogEditorForm initialBlog={blog} isEdit={true} />
    </div>
  );
}
