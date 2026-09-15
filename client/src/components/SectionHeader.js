'use client';

import React from 'react';

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
  withBar = false,
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`flex flex-col ${
        isCenter ? 'items-center text-center mx-auto' : 'items-start text-left'
      } ${className}`}
    >
      {/* Eyebrow badge with glowing green pulse dot */}
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#6FCF3C] animate-ping" />
          <span className="text-[#188A38] text-xs sm:text-sm font-extrabold tracking-[0.22em] uppercase">
            {eyebrow}
          </span>
        </div>
      )}

      {/* Optional Decorative Accent Bar */}
      {withBar && (
        <div className="w-12 h-1 bg-[#188A38] rounded-full mx-auto mt-1 mb-3.5" />
      )}

      {/* Main Headline */}
      {(title || highlight) && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#131A15] tracking-tight leading-[1.12]">
          {title}{' '}
          {highlight && (
            <span className="text-[#6FCF3C] block mt-1.5 sm:mt-2">
              {highlight}
            </span>
          )}
        </h2>
      )}

      {/* Optional Description / Subtitle Paragraph */}
      {description && (
        <p className="mt-5 text-[#5B6660] text-base sm:text-[17px] leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
