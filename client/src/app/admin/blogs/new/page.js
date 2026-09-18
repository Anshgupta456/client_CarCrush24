'use client';

import React from 'react';
import BlogEditorForm from '../../../../components/admin/BlogEditorForm';

export default function NewBlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <BlogEditorForm isEdit={false} />
    </div>
  );
}
