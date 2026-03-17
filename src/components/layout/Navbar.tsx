import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import BrutalButton from '../ui/BrutalButton';

const navLinks = [
  { name: 'SERVICES', href: '#services' },
  { name: 'PROCESS', href: '#process' },
  { name: 'WORK', href: '#work' },
  { name: 'TESTIMONIALS', href: '#testimonials' },
  { name: 'CONTACT', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 0;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-[#FFE500] border-b-4 border-[#0D0D0D]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="font-display font-bold text-lg md:text-xl text-[#0D0D0D] tracking-tight">
          DEVCRAFT<span className="animate-pulse">_</span>AGENCY
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <React.Fragment key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="font-display text-xs font-bold uppercase tracking-[0.1em] px-3 py-2 text-brutal-black hover:bg-brutal-black hover:text-brutal-yellow rounded-none"
                style={{ transitionDuration: '0ms' }}
              >
                {link.name}
              </a>
              {i < navLinks.length - 1 && (
                <span className="text-brutal-black/30 font-display text-xs">/</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="font-display text-xs font-bold uppercase tracking-[0.1em] px-3 py-1 text-brutal-black underline underline-offset-4"
          >
            {theme === 'dark' ? 'LIGHT' : 'DARK'}
          </button>
          <BrutalButton variant="primary" size="sm" href="#contact">
            GET_QUOTE
          </BrutalButton>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brutal-black p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 z-50 bg-brutal-black flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-brutal-white p-2"
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="font-display text-4xl font-bold text-brutal-white uppercase tracking-[0.05em] hover:text-brutal-yellow"
                style={{ transitionDuration: '0ms' }}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="font-display text-sm font-bold uppercase tracking-[0.1em] text-brutal-gray underline underline-offset-4 mt-8"
            >
              {theme === 'dark' ? 'LIGHT_MODE' : 'DARK_MODE'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
