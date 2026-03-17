import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverable = false }) => {
  const baseClasses = 'glass-card p-6';
  const hoverClasses = hoverable ? 'hover:-translate-y-1 hover:shadow-lg hover:border-brand/20 dark:hover:border-brand/30 transition-all duration-200 cursor-pointer' : '';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
