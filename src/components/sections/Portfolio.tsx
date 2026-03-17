import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolio } from '../../data/portfolio';
import { useScrollReveal, snapIn } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import BrutalBadge from '../ui/BrutalBadge';

type Filter = 'All' | 'Static' | 'Dynamic';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('All');
  const { ref, isVisible } = useScrollReveal();

  const filtered = portfolio.filter((item) => filter === 'All' || item.category === filter);

  return (
    <section id="work" className="border-b-4 border-brutal-black bg-brutal-white dark:bg-brutal-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionLabel>[ WORK ]</SectionLabel>
        <h2 className="font-display text-[clamp(36px,8vw,72px)] font-bold uppercase tracking-[0.05em] mt-4 leading-[0.95]">
          PROOF,<br />NOT PROMISES.
        </h2>

        {/* Filter tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-0 mt-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex">
            {(['All', 'Static', 'Dynamic'] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-display text-xs font-bold uppercase tracking-[0.1em] px-5 py-2 border-2 border-brutal-black dark:border-brutal-white rounded-none whitespace-nowrap ${
                  filter === f
                    ? 'bg-brutal-black text-brutal-yellow dark:bg-brutal-white dark:text-brutal-black'
                    : 'bg-transparent text-brutal-black dark:text-brutal-white'
                }`}
                style={{ transitionDuration: '0ms', marginLeft: f !== 'All' ? '-2px' : '0' }}
              >
                [ {f.toUpperCase()} ]
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t-3 border-brutal-black dark:border-brutal-white gap-0"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              variants={snapIn}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              layout
              className="group relative border-b-3 border-r-3 border-brutal-black overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={`https://picsum.photos/seed/${item.seed}/600/450`}
                  alt={item.title}
                  loading="lazy"
                  className="object-cover w-full h-full"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 bg-brutal-yellow/90 flex items-center justify-center opacity-0 group-hover:opacity-100"
                  style={{ transitionDuration: '80ms' }}
                >
                  <span className="font-display text-lg font-bold text-brutal-black uppercase tracking-[0.1em]">
                    VIEW PROJECT →
                  </span>
                </div>
              </div>

              {/* Info bar */}
              <div className="bg-brutal-white dark:bg-[#1A1A1A] border-t-3 border-brutal-black p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-sm font-bold uppercase">{item.title}</h3>
                  <BrutalBadge accent="blue" className="mt-1">{item.category}</BrutalBadge>
                </div>
                <span className="font-display text-xs font-bold text-brutal-gray group-hover:text-brutal-black dark:group-hover:text-brutal-white uppercase" style={{ transitionDuration: '0ms' }}>
                  VIEW →
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Portfolio;
