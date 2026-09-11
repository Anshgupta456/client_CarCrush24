import React from 'react';
import Image from 'next/image';

export default function CarCrushLogo({ className = "", isDark = true }) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <Image
        src="/images/logo-transparent.png"
        alt="CarCrush24 - Recycle • Reuse • A Cleaner Tomorrow"
        width={220}
        height={34}
        priority
        className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 hover:scale-[1.02]"
      />
    </div>
  );
}
