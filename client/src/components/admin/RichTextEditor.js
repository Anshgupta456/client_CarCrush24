'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Table as TableIcon,
  Plus,
  Trash2,
  Columns,
  Rows,
  Quote,
  Code,
  Link as LinkIcon,
  RotateCcw,
  RotateCw,
  Eye,
  Edit3,
  Code2,
} from 'lucide-react';

export default function RichTextEditor({ value = '', onChange, placeholder = 'Write your article content here...' }) {
  const editorRef = useRef(null);
  const [activeTab, setActiveTab] = useState('visual'); // 'visual' | 'html' | 'preview'
  const [htmlContent, setHtmlContent] = useState(value);
  const isUpdatingFromProp = useRef(false);

  useEffect(() => {
    if (value !== htmlContent) {
      isUpdatingFromProp.current = true;
      setHtmlContent(value || '');
      if (editorRef.current && activeTab === 'visual') {
        editorRef.current.innerHTML = value || '';
      }
      isUpdatingFromProp.current = false;
    }
  }, [value]);

  useEffect(() => {
    if (editorRef.current && activeTab === 'visual' && editorRef.current.innerHTML !== htmlContent) {
      editorRef.current.innerHTML = htmlContent || '';
    }
  }, [activeTab]);

  const handleInput = () => {
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      setHtmlContent(html);
      if (onChange) onChange(html);
    }
  };

  const handleHtmlChange = (e) => {
    const val = e.target.value;
    setHtmlContent(val);
    if (onChange) onChange(val);
  };

  const execCmd = (cmd, arg = null) => {
    if (activeTab !== 'visual') return;
    if (editorRef.current) {
      editorRef.current.focus();
    }
    document.execCommand(cmd, false, arg);
    handleInput();
  };

  const insertHeading = (tag) => {
    execCmd('formatBlock', `<${tag}>`);
  };

  const insertCallout = (type = 'info') => {
    const colors = {
      info: 'border-[#188A38] bg-[#F1F8F3] text-[#131A15]',
      warning: 'border-amber-500 bg-amber-50/70 text-[#131A15]',
      tip: 'border-emerald-500 bg-emerald-50/60 text-[#131A15]',
    };

    const calloutHtml = `
      <div class="my-4 p-4 border-l-4 rounded-r-xl ${colors[type]}" data-callout="${type}">
        <p class="font-bold text-xs uppercase tracking-wider mb-1">${type.toUpperCase()} NOTICE</p>
        <p class="text-sm">Enter callout advisory information or statutory notice here...</p>
      </div>
      <p><br></p>
    `;
    execCmd('insertHTML', calloutHtml);
  };

  const insertTable = () => {
    const tableHtml = `
      <div class="my-4 overflow-x-auto">
        <table class="w-full border-collapse border border-gray-300 text-xs text-left" style="width: 100%; border: 1px solid #d1d5db;">
          <thead>
            <tr class="bg-gray-100 font-bold">
              <th class="border border-gray-300 p-2.5">Category / Parameter</th>
              <th class="border border-gray-300 p-2.5">Applicability</th>
              <th class="border border-gray-300 p-2.5">Compliance Rule</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 p-2.5">Private Diesel Vehicle</td>
              <td class="border border-gray-300 p-2.5">Delhi NCR Perimeter</td>
              <td class="border border-gray-300 p-2.5">10-Year Mandatory Deregistration</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2.5">Private Petrol Vehicle</td>
              <td class="border border-gray-300 p-2.5">Delhi NCR Perimeter</td>
              <td class="border border-gray-300 p-2.5">15-Year Mandatory Deregistration</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><br></p>
    `;
    execCmd('insertHTML', tableHtml);
  };

  const addTableRow = () => {
    if (!editorRef.current) return;
    const sel = window.getSelection();
    if (!sel || !sel.rangeCount) return;
    const node = sel.anchorNode;
    const tr = node?.nodeType === 1 ? node.closest('tr') : node?.parentElement?.closest('tr');
    if (tr) {
      const colCount = tr.children.length;
      const newTr = document.createElement('tr');
      for (let i = 0; i < colCount; i++) {
        const td = document.createElement('td');
        td.className = 'border border-gray-300 p-2.5';
        td.innerHTML = 'New cell';
        newTr.appendChild(td);
      }
      tr.parentNode.insertBefore(newTr, tr.nextSibling);
      handleInput();
    }
  };

  const addTableColumn = () => {
    if (!editorRef.current) return;
    const sel = window.getSelection();
    if (!sel || !sel.rangeCount) return;
    const node = sel.anchorNode;
    const table = node?.nodeType === 1 ? node.closest('table') : node?.parentElement?.closest('table');
    if (table) {
      const rows = table.querySelectorAll('tr');
      rows.forEach((r, idx) => {
        const cell = idx === 0 ? document.createElement('th') : document.createElement('td');
        cell.className = `border border-gray-300 p-2.5 ${idx === 0 ? 'bg-gray-100 font-bold' : ''}`;
        cell.innerHTML = idx === 0 ? 'Header' : 'Cell';
        r.appendChild(cell);
      });
      handleInput();
    }
  };

  const deleteTableRow = () => {
    if (!editorRef.current) return;
    const sel = window.getSelection();
    if (!sel || !sel.rangeCount) return;
    const node = sel.anchorNode;
    const tr = node?.nodeType === 1 ? node.closest('tr') : node?.parentElement?.closest('tr');
    if (tr && tr.parentElement.children.length > 1) {
      tr.remove();
      handleInput();
    }
  };

  const deleteTable = () => {
    if (!editorRef.current) return;
    const sel = window.getSelection();
    if (!sel || !sel.rangeCount) return;
    const node = sel.anchorNode;
    const table = node?.nodeType === 1 ? node.closest('table') : node?.parentElement?.closest('table');
    if (table) {
      const wrapper = table.closest('.overflow-x-auto') || table;
      wrapper.remove();
      handleInput();
    }
  };

  const promptLink = () => {
    const url = prompt('Enter link URL (e.g. https://... or /contact):');
    if (url) {
      execCmd('createLink', url);
    }
  };

  return (
    <div className="border border-[#E4E7DE] rounded-2xl bg-white shadow-2xs overflow-hidden flex flex-col">
      {/* Top Toolbar Header */}
      <div className="bg-[#F8F9F5] border-b border-[#E4E7DE] p-2 flex flex-wrap items-center justify-between gap-2 select-none">
        {/* Left Toolbar Controls */}
        <div className="flex flex-wrap items-center gap-1">
          {/* Heading Options */}
          <div className="flex items-center bg-white border border-[#E4E7DE] rounded-lg p-0.5 mr-1">
            <button
              type="button"
              onClick={() => insertHeading('h1')}
              title="Heading 1"
              className="p-1.5 rounded hover:bg-gray-100 text-[#131A15] text-xs font-bold"
            >
              <Heading1 className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => insertHeading('h2')}
              title="Heading 2"
              className="p-1.5 rounded hover:bg-gray-100 text-[#131A15] text-xs font-bold"
            >
              <Heading2 className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => insertHeading('h3')}
              title="Heading 3"
              className="p-1.5 rounded hover:bg-gray-100 text-[#131A15] text-xs font-bold"
            >
              <Heading3 className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => insertHeading('p')}
              title="Normal Paragraph"
              className="px-2 py-0.5 rounded hover:bg-gray-100 text-[#5B6660] text-[11px] font-semibold"
            >
              P
            </button>
          </div>

          {/* Inline Formats */}
          <div className="flex items-center bg-white border border-[#E4E7DE] rounded-lg p-0.5">
            <button
              type="button"
              onClick={() => execCmd('bold')}
              title="Bold (Ctrl+B)"
              className="p-1.5 rounded hover:bg-gray-100 text-[#131A15]"
            >
              <Bold className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => execCmd('italic')}
              title="Italic (Ctrl+I)"
              className="p-1.5 rounded hover:bg-gray-100 text-[#131A15]"
            >
              <Italic className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => execCmd('underline')}
              title="Underline (Ctrl+U)"
              className="p-1.5 rounded hover:bg-gray-100 text-[#131A15]"
            >
              <Underline className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => execCmd('strikeThrough')}
              title="Strikethrough"
              className="p-1.5 rounded hover:bg-gray-100 text-[#5B6660]"
            >
              <Strikethrough className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Lists */}
          <div className="flex items-center bg-white border border-[#E4E7DE] rounded-lg p-0.5">
            <button
              type="button"
              onClick={() => execCmd('insertUnorderedList')}
              title="Bulleted List"
              className="p-1.5 rounded hover:bg-gray-100 text-[#131A15]"
            >
              <List className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => execCmd('insertOrderedList')}
              title="Numbered List"
              className="p-1.5 rounded hover:bg-gray-100 text-[#131A15]"
            >
              <ListOrdered className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Table Tools */}
          <div className="flex items-center bg-white border border-[#E4E7DE] rounded-lg p-0.5 gap-0.5">
            <button
              type="button"
              onClick={insertTable}
              title="Insert Table (3x2)"
              className="flex items-center gap-1 px-2 py-1 rounded bg-[#188A38]/10 text-[#188A38] text-[11px] font-bold hover:bg-[#188A38]/20"
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Table</span>
            </button>
            <button
              type="button"
              onClick={addTableRow}
              title="Add Row Below Cursor"
              className="p-1.5 rounded hover:bg-gray-100 text-[#5B6660]"
            >
              <Rows className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={addTableColumn}
              title="Add Column to Right"
              className="p-1.5 rounded hover:bg-gray-100 text-[#5B6660]"
            >
              <Columns className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={deleteTableRow}
              title="Delete Active Row"
              className="p-1.5 rounded hover:bg-amber-100 text-amber-700"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={deleteTable}
              title="Delete Entire Table"
              className="p-1.5 rounded hover:bg-red-100 text-red-600"
            >
              <span className="text-[10px] font-bold">✕ Tbl</span>
            </button>
          </div>

          {/* Callouts & Extras */}
          <div className="flex items-center bg-white border border-[#E4E7DE] rounded-lg p-0.5 gap-0.5">
            <button
              type="button"
              onClick={() => insertCallout('info')}
              title="Insert Information Callout"
              className="px-2 py-1 rounded hover:bg-gray-100 text-[#188A38] text-[11px] font-bold"
            >
              <Quote className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => insertCallout('warning')}
              title="Insert Warning Callout"
              className="px-2 py-1 rounded hover:bg-amber-50 text-amber-700 text-[11px] font-bold"
            >
              Alert
            </button>
            <button
              type="button"
              onClick={promptLink}
              title="Insert Link"
              className="p-1.5 rounded hover:bg-gray-100 text-[#5B6660]"
            >
              <LinkIcon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Undo / Redo */}
          <div className="flex items-center bg-white border border-[#E4E7DE] rounded-lg p-0.5">
            <button
              type="button"
              onClick={() => execCmd('undo')}
              title="Undo"
              className="p-1.5 rounded hover:bg-gray-100 text-[#5B6660]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => execCmd('redo')}
              title="Redo"
              className="p-1.5 rounded hover:bg-gray-100 text-[#5B6660]"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* View Mode Tabs (Visual / HTML / Preview) */}
        <div className="flex items-center bg-white border border-[#E4E7DE] rounded-xl p-0.5">
          <button
            type="button"
            onClick={() => setActiveTab('visual')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'visual' ? 'bg-[#188A38] text-white shadow-2xs' : 'text-[#5B6660] hover:text-[#131A15]'
            }`}
          >
            <Edit3 className="w-3 h-3" />
            <span>Editor</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('html')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'html' ? 'bg-[#188A38] text-white shadow-2xs' : 'text-[#5B6660] hover:text-[#131A15]'
            }`}
          >
            <Code2 className="w-3 h-3" />
            <span>HTML</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('preview')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'preview' ? 'bg-[#188A38] text-white shadow-2xs' : 'text-[#5B6660] hover:text-[#131A15]'
            }`}
          >
            <Eye className="w-3 h-3" />
            <span>Preview</span>
          </button>
        </div>
      </div>

      {/* Editor Main Content Area */}
      <div className="relative flex-1 min-h-[360px]">
        {/* Visual WYSIWYG Tab */}
        <div
          ref={editorRef}
          contentEditable={activeTab === 'visual'}
          onInput={handleInput}
          data-placeholder={placeholder}
          className={`p-5 min-h-[360px] text-xs sm:text-sm text-[#131A15] leading-relaxed focus:outline-none overflow-y-auto max-h-[600px] prose prose-green max-w-none ${
            activeTab === 'visual' ? 'block' : 'hidden'
          }`}
          style={{ minHeight: '360px' }}
        />

        {/* HTML Source Tab */}
        {activeTab === 'html' && (
          <textarea
            value={htmlContent}
            onChange={handleHtmlChange}
            rows={15}
            className="w-full h-full min-h-[360px] p-4 text-xs font-mono text-[#131A15] bg-[#FBFDFB] focus:outline-none resize-y"
            placeholder="<p>Enter or edit raw HTML content here...</p>"
          />
        )}

        {/* Live Reader Preview Tab */}
        {activeTab === 'preview' && (
          <div className="p-6 bg-white min-h-[360px] text-xs sm:text-sm leading-relaxed overflow-y-auto max-h-[600px]">
            <div className="border border-dashed border-[#188A38]/30 rounded-xl p-4 bg-[#F1F8F3]/30 mb-4">
              <span className="text-[11px] font-bold text-[#188A38] uppercase tracking-wider block mb-1">
                Reader Mode Preview
              </span>
              <p className="text-xs text-[#5B6660]">
                This is how the formatted headings, lists, tables, and callouts will look to visitors on the website.
              </p>
            </div>
            <div
              className="prose prose-sm sm:prose-base max-w-none text-[#374151]"
              dangerouslySetInnerHTML={{ __html: htmlContent || '<p class="text-gray-400 italic">No content written yet.</p>' }}
            />
          </div>
        )}
      </div>

      {/* Bottom Status Bar */}
      <div className="bg-[#F8F9F5] border-t border-[#E4E7DE] px-4 py-2 flex items-center justify-between text-[11px] text-[#5B6660]">
        <span>Rich Text WYSIWYG Engine (Supports Headings, Lists, Tables & Formatted text)</span>
        <span>{htmlContent ? htmlContent.replace(/<[^>]*>/g, '').trim().split(/\s+/).filter(Boolean).length : 0} Words</span>
      </div>
    </div>
  );
}
