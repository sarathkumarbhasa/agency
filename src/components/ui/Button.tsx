import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'className'> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, href, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center transition-all duration-200 rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-dark';
    
    const variants = {
      primary: 'bg-brand text-white hover:bg-brand/90 active:scale-[0.98] shadow-sm',
      outline: 'border border-black/10 dark:border-white/10 text-dark dark:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.04] active:scale-[0.98]',
      ghost: 'text-text-muted hover:text-dark dark:hover:text-white',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    const MotionTag = motion.button;

    if (href) {
      if (href.startsWith('#')) {
        return (
          <motion.a
            href={href}
            className={classes}
            whileTap={{ scale: 0.95 }}
            {...(props as any)}
          >
            {children}
          </motion.a>
        );
      }
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          whileTap={{ scale: 0.95 }}
          {...(props as any)}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <MotionTag
        ref={ref as any}
        className={classes}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </MotionTag>
    );
  }
);

Button.displayName = 'Button';

export default Button;
