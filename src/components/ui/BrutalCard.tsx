import React from 'react';
import { motion } from 'framer-motion';

interface BrutalCardProps {
  children: React.ReactNode;
  accent?: 'yellow' | 'red' | 'blue' | 'default';
  hoverable?: boolean;
  className?: string;
}

const BrutalCard: React.FC<BrutalCardProps> = ({ children, accent = 'default', hoverable = false, className = '' }) => {
  const shadowColors: Record<string, string> = {
    default: '#0D0D0D',
    yellow: '#FFE500',
    red: '#FF2D2D',
    blue: '#0066FF',
  };

  const borderColors: Record<string, string> = {
    default: '#0D0D0D',
    yellow: '#FFE500',
    red: '#FF2D2D',
    blue: '#0066FF',
  };

  const shadow = shadowColors[accent];
  const border = borderColors[accent];

  if (hoverable) {
    return (
      <motion.div
        className={`bg-brutal-white dark:bg-[#1A1A1A] p-6 rounded-none ${className}`}
        style={{
          border: `3px solid ${border}`,
          boxShadow: `4px 4px 0px ${shadow}`,
        }}
        whileHover={{ x: -3, y: -3 }}
        transition={{ duration: 0.08 }}
        onHoverStart={(e) => {
          const el = e.target as HTMLElement;
          if (el) el.style.boxShadow = `7px 7px 0px ${shadow}`;
        }}
        onHoverEnd={(e) => {
          const el = e.target as HTMLElement;
          if (el) el.style.boxShadow = `4px 4px 0px ${shadow}`;
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={`bg-brutal-white dark:bg-[#1A1A1A] p-6 rounded-none ${className}`}
      style={{
        border: `3px solid ${border}`,
        boxShadow: `4px 4px 0px ${shadow}`,
      }}
    >
      {children}
    </div>
  );
};

export default BrutalCard;
