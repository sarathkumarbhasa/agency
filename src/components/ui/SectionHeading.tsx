import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = true, className = '' }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
