import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface BrutalButtonProps extends Omit<HTMLMotionProps<'button'>, 'className'> {
  variant?: 'primary' | 'danger' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const BrutalButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, BrutalButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, href, fullWidth, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center font-display uppercase tracking-[0.1em] font-bold rounded-none';

    const variants: Record<string, string> = {
      primary: 'bg-[#FFE500] text-[#0D0D0D] border-3 border-[#0D0D0D] shadow-[4px_4px_0px_#0D0D0D] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_#0D0D0D]',
      danger: 'bg-[#FF2D2D] text-white border-3 border-[#0D0D0D] shadow-[4px_4px_0px_#0D0D0D] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_#0D0D0D]',
      outline: 'bg-transparent text-[#0D0D0D] dark:text-[#F5F0E8] border-3 border-[#0D0D0D] dark:border-[#F5F0E8] hover:bg-[#0D0D0D] hover:text-[#FFE500] dark:hover:bg-[#F5F0E8] dark:hover:text-[#0D0D0D]',
      ghost: 'bg-transparent text-[#0D0D0D] dark:text-[#F5F0E8] underline underline-offset-4 border-none',
    };

    const sizes: Record<string, string> = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    };

    const classes = `${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

    if (href) {
      const isExternal = !href.startsWith('#');
      return (
        <motion.a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={classes}
          whileTap={{ scale: 0.96 }}
          style={{ transitionDuration: '80ms' }}
          {...(props as Record<string, unknown>)}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        whileTap={{ scale: 0.96 }}
        style={{ transitionDuration: '80ms' }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

BrutalButton.displayName = 'BrutalButton';
export default BrutalButton;
