import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Figma, Code2, Rocket } from 'lucide-react';
import { processSteps } from '../../data/process';
import { useScrollReveal, snapIn } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';

const iconMap: Record<string, React.ReactNode> = {
  Phone: <Phone size={28} />,
  Figma: <Figma size={28} />,
  Code2: <Code2 size={28} />,
  Rocket: <Rocket size={28} />,
};

const Process: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="process" className="border-b-4 border-brutal-black py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel>[ HOW_WE_WORK ]</SectionLabel>
        <h2 className="font-display text-[clamp(36px,10vw,72px)] font-bold uppercase tracking-[0.05em] mt-4 leading-[0.95]">
          NO FLUFF.<br />JUST STEPS.
        </h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-0 mt-16"
        >
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              variants={snapIn}
              className="flex flex-col md:flex-row items-center"
            >
              <div className="flex flex-col items-center text-center w-full px-4">
                {/* Step number */}
                <span className="font-display text-xs font-bold border-2 border-brutal-black dark:border-brutal-white px-2 py-0.5 rounded-none inline-block">
                  {step.step}
                </span>

                {/* Icon */}
                <div className="bg-brutal-black text-brutal-yellow p-4 rounded-none mt-4">
                  {iconMap[step.icon]}
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold uppercase tracking-[0.05em] mt-4">
                  {step.title}
                </h3>

                {/* Desc */}
                <p className="font-body text-sm italic text-brutal-gray mt-2 max-w-[200px]">
                  {step.desc}
                </p>
              </div>

              {/* Arrow separator */}
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:flex flex-col justify-center h-full">
                  <span className="font-display text-4xl text-[#FFE500] font-bold px-4 select-none leading-none">
                    →
                  </span>
                </div>
              )}
              {idx < processSteps.length - 1 && (
                <div className="lg:hidden flex justify-center w-full py-6">
                  <span className="font-display text-4xl text-[#FFE500] font-bold rotate-90 select-none leading-none">
                    →
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
