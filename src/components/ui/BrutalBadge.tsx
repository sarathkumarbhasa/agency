import React from 'react';

interface BrutalBadgeProps {
  children: React.ReactNode;
  accent?: 'yellow' | 'red' | 'blue' | 'green' | 'default';
  className?: string;
}

const BrutalBadge: React.FC<BrutalBadgeProps> = ({ children, accent = 'default', className = '' }) => {
  const styles: Record<string, string> = {
    default: 'bg-[#0D0D0D] text-[#F5F0E8] dark:bg-[#F5F0E8] dark:text-[#0D0D0D]',
    yellow: 'bg-[#FFE500] text-[#0D0D0D]',
    red: 'bg-[#FF2D2D] text-white',
    blue: 'bg-[#0066FF] text-white',
    green: 'bg-[#00FF88] text-[#0D0D0D]',
  };

  return (
    <span className={`inline-block font-display text-xs uppercase tracking-[0.15em] font-bold px-3 py-1 rounded-none border-2 border-brutal-black ${styles[accent]} ${className}`}>
      {children}
    </span>
  );
};

export default BrutalBadge;
