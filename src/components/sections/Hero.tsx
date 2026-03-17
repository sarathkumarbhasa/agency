import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import BrutalButton from '../ui/BrutalButton';
import MarqueeTicker from '../ui/MarqueeTicker';

const Hero: React.FC = () => {
  return (
    <>
      <section id="hero" className="border-b-4 border-brutal-black">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh]">
            {/* Left — 7 cols */}
            <div className="lg:col-span-7 flex flex-col justify-center py-12 md:py-16 lg:py-24 lg:pr-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <SectionLabel>[ WE BUILD WEBSITES ]</SectionLabel>
              </motion.div>

              <motion.h1
                className="font-display font-bold uppercase tracking-[0.05em] leading-[0.9] mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut', delay: 0.05 }}
              >
                <span className="block text-[clamp(40px,12vw,140px)] text-brutal-black dark:text-brutal-white">
                  WEBSITES
                </span>
                <span className="block text-[clamp(40px,12vw,140px)] text-outlined">
                  THAT
                </span>
                <span className="block text-[clamp(40px,12vw,140px)] text-brutal-black dark:text-brutal-white">
                  <mark className="bg-brutal-yellow text-brutal-black px-2 rounded-none">CONVERT.</mark>
                </span>
              </motion.h1>

              <motion.p
                className="font-body text-lg text-brutal-black/70 dark:text-brutal-white/70 mt-6 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut', delay: 0.1 }}
              >
                Static & dynamic web development for businesses that can't afford to be forgettable.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut', delay: 0.15 }}
              >
                <BrutalButton variant="primary" size="lg" href="#contact">
                  GET A FREE QUOTE →
                </BrutalButton>
                <BrutalButton variant="outline" size="lg" href="#contact">
                  BOOK A CALL
                </BrutalButton>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="flex flex-col sm:flex-row mt-12 border-3 border-brutal-black dark:border-brutal-white divide-y-3 sm:divide-y-0 sm:divide-x-3 divide-brutal-black dark:divide-brutal-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut', delay: 0.2 }}
              >
                {[
                  { num: '50+', label: 'CLIENTS' },
                  { num: '4.9★', label: 'RATING' },
                  { num: '4 DAYS', label: 'AVG DELIVERY' },
                ].map((stat) => (
                  <div key={stat.label} className="flex-1 px-4 py-4 text-center">
                    <div className="font-display text-3xl sm:text-4xl font-bold text-brutal-black dark:text-brutal-white">{stat.num}</div>
                    <div className="font-display text-[10px] uppercase tracking-[0.15em] text-[#C8C4BB] mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — 5 cols */}
            <div className="hidden lg:flex lg:col-span-5 bg-[#0D0D0D] relative overflow-hidden items-center justify-center border-l-4 border-[#0D0D0D]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="font-display text-[100px] xl:text-[120px] leading-[0.85] font-bold text-white/[0.06] uppercase text-center select-none">
                  WEB<br />DEV<br />AGENCY
                </div>
              </div>
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-3 bg-[#FFE500]" />
              <div className="absolute bottom-0 left-0 right-0 bg-[#0D0D0D]/80 border-t-2 border-[#FFE500] py-2 overflow-hidden">
                <div className="marquee-inner">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="flex-shrink-0 w-1/3 font-body text-[10px] text-[#C8C4BB] whitespace-nowrap tracking-[0.2em]">
                      HTML — CSS — REACT — NODE — NEXT — FIGMA — STRIPE — POSTGRES —{' '}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee below hero */}
      <MarqueeTicker />
    </>
  );
};

export default Hero;
