import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import { useScrollReveal, snapIn } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import BrutalCard from '../ui/BrutalCard';

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="testimonials" className="border-b-4 border-brutal-black py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel>[ WHAT THEY SAID ]</SectionLabel>
        <h2 className="font-display text-[clamp(36px,8vw,72px)] font-bold uppercase tracking-[0.05em] mt-4 leading-[0.95] max-w-2xl">
          DON'T TAKE<br />OUR WORD FOR IT.
        </h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16"
        >
          {testimonials.map((t, idx) => (
            <motion.div key={idx} variants={snapIn}>
              <BrutalCard accent={t.accent === 'default' ? 'default' : t.accent} hoverable>
                {/* Quote mark */}
                <span className="block font-display text-[80px] leading-[0.5] text-brutal-yellow select-none">"</span>

                {/* Quote */}
                <p className="font-body text-base italic mt-4 leading-relaxed">
                  {t.quote}
                </p>

                {/* Divider */}
                <div className="border-t-2 border-brutal-black dark:border-brutal-white mt-6 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Initials stamp */}
                    <div className="w-10 h-10 bg-brutal-black dark:bg-brutal-white text-brutal-white dark:text-brutal-black flex items-center justify-center font-display text-sm font-bold rounded-none border-2 border-brutal-black">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-display text-xs font-bold uppercase">{t.name}</div>
                      <div className="font-body text-[10px] text-brutal-gray uppercase">{t.role}</div>
                    </div>
                  </div>
                  <div className="text-brutal-yellow text-sm tracking-wider">
                    {'★'.repeat(t.stars)}
                  </div>
                </div>
              </BrutalCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
