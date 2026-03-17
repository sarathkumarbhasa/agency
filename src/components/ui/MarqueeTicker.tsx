import React from 'react';

const TICKER_TEXT = '50+ CLIENTS ✦ 100% ON-TIME ✦ 4.9★ RATING ✦ STATIC SITES ✦ DYNAMIC SITES ✦ FAST DELIVERY ✦ ';

const MarqueeTicker: React.FC = () => {
  return (
    <div className="w-full bg-[#FFE500] border-y-3 border-[#0D0D0D] overflow-hidden select-none">
      <div className="marquee-inner">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="flex-shrink-0 font-display text-sm font-bold uppercase tracking-[0.15em] text-[#0D0D0D] py-4 whitespace-nowrap px-4"
          >
            {TICKER_TEXT}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
