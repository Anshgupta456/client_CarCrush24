'use client';

import React from 'react';

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  className = '',
  titleClassName = '',
  descClassName = '',
  as = 'h2',
}) {
  const isCenter = align === 'center';
  const HeadingTag = as;

  return (
    <div
      className={`flex flex-col ${
        isCenter ? 'items-center text-center mx-auto' : 'items-start text-left'
      } ${className}`}
    >
      {/* Eyebrow badge with decorative green lines */}
      {eyebrow && (
        <div
          className={`inline-flex items-center ${
            isCenter ? 'justify-center' : 'justify-start'
          } gap-3 mb-3 sm:mb-4`}
        >
          <span className="w-8 sm:w-12 h-[2px] bg-[#6FCF3C]" />
          <span className="text-[#188A38] text-xs sm:text-[13px] font-black tracking-[0.25em] uppercase">
            {eyebrow}
          </span>
          <span className="w-8 sm:w-12 h-[2px] bg-[#6FCF3C]" />
        </div>
      )}

      {/* Main Headline */}
      {(title || highlight) && (
        <HeadingTag
          className={
            titleClassName ||
            'text-2xl sm:text-3xl lg:text-[42px] font-black text-[#111827] tracking-tight leading-[1.15]'
          }
        >
          {title}{' '}
          {highlight && (
            <span className="block text-[#6FCF3C] mt-1 sm:mt-1.5">
              {highlight}
            </span>
          )}
        </HeadingTag>
      )}

      {/* Optional Description / Subtitle Paragraph */}
      {description && (
        <p
          className={`mt-4 sm:mt-5 leading-relaxed max-w-2xl ${
            descClassName || 'text-[#5B6660] text-xs sm:text-[14px]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
