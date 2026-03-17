import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ children }) => {
  return (
    <span className="inline-block font-display text-xs uppercase tracking-[0.2em] font-bold px-3 py-1 bg-[#0D0D0D] text-[#FFE500] border-2 border-[#0D0D0D] rounded-none mb-6">
      {children}
    </span>
  );
};

export default SectionLabel;
