import React from 'react';

const trustItems = [
  {
    title: "Environmentally Responsible",
    description: "Reduce waste, conserve resources",
    icon: (
      <svg className="w-5 h-5 text-[#6FCF3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9c0 4.97 4.03 9 9 9Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c3-3 6-1 6 2s-3 4-6 4" />
      </svg>
    ),
  },
  {
    title: "Hassle-Free Process",
    description: "Quick pickup & documentation",
    icon: (
      <svg className="w-5 h-5 text-[#6FCF3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Best Value for Your Scrap",
    description: "Competitive & transparent pricing",
    icon: (
      <svg className="w-5 h-5 text-[#6FCF3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "A Greener Future",
    description: "Together for a sustainable planet",
    icon: (
      <svg className="w-5 h-5 text-[#6FCF3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-7m0 0a5 5 0 0 1 5-5c1.5 0 3 .8 3.5 2.2a5 5 0 0 1-5 5h-3.5Zm0 0a5 5 0 0 0-5-5c-1.5 0-3 .8-3.5 2.2a5 5 0 0 0 5 5H12Z" />
      </svg>
    ),
  },
];

export default function TrustBar() {
  return (
    <div className="relative w-full bg-[#08150c] pt-2 pb-8 sm:pb-10 border-t border-[#1d3d24]/50 z-20">
      {/* Subtle organic neon wave line accent across the top */}
      <div className="absolute -top-[18px] left-0 right-0 w-full overflow-hidden leading-none pointer-events-none opacity-80">
        <svg
          viewBox="0 0 1440 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-7 object-cover"
          preserveAspectRatio="none"
        >
          <path
            d="M0 24C240 10 480 30 720 18C960 6 1200 28 1440 14"
            stroke="#6FCF3C"
            strokeWidth="2"
            strokeOpacity="0.85"
            className="filter drop-shadow-[0_0_8px_rgba(111,207,60,0.6)]"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 p-2 rounded-2xl transition-all duration-300 hover:bg-white/[0.03] group"
            >
              {/* Circular Badge with Accent Green Border */}
              <div className="w-11 h-11 rounded-full border-[1.8px] border-[#6FCF3C] flex items-center justify-center flex-shrink-0 bg-[#0d2214]/70 shadow-[0_0_12px_rgba(111,207,60,0.2)] group-hover:scale-105 group-hover:shadow-[0_0_18px_rgba(111,207,60,0.4)] transition-all">
                {item.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <h4 className="text-white text-[13.5px] font-bold leading-snug tracking-tight group-hover:text-[#6FCF3C] transition-colors">
                  {item.title}
                </h4>
                <p className="text-[#809687] text-[11.5px] font-normal leading-relaxed mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
