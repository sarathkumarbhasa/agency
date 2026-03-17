import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import { useScrollReveal, snapIn } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import BrutalBadge from '../ui/BrutalBadge';
import BrutalButton from '../ui/BrutalButton';

const Services: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="border-b-4 border-brutal-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionLabel>[ SERVICES ]</SectionLabel>
        <h2 className="font-display text-[clamp(36px,10vw,72px)] font-bold uppercase tracking-[0.05em] mt-4 leading-[0.95]">
          TWO SERVICES.<br />ONE GOAL.
        </h2>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 lg:grid-cols-2 border-t-4 border-brutal-black"
      >
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            variants={snapIn}
            className={`p-8 md:p-12 ${idx === 0 ? 'md:border-r-3 border-brutal-black' : ''}`}
          >
            {/* Big number */}
            <span className="font-display text-[120px] leading-none font-bold text-brutal-gray/30 select-none block">
              {service.number}
            </span>

            {/* Title */}
            <h3 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-[0.05em] mt-2 whitespace-pre-line leading-[0.95]">
              {service.title}
            </h3>

            {/* Badge */}
            <div className="mt-4">
              {service.popular ? (
                <BrutalBadge accent="red">MOST POPULAR</BrutalBadge>
              ) : null}
              <div className="mt-2">
                <BrutalBadge>{service.badge}</BrutalBadge>
              </div>
            </div>

            {/* Benefits */}
            <ul className="mt-8 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 font-body text-sm">
                  <span className="text-brutal-yellow font-bold text-lg leading-none mt-0.5">→</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="mt-8">
              <span className="inline-block font-display text-3xl font-bold">
                <mark className="bg-[#FFE500] text-[#0D0D0D] px-2 rounded-none">{service.price}</mark>
              </span>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <BrutalButton
                variant={service.popular ? 'primary' : 'outline'}
                href="#contact"
              >
                {service.cta}
              </BrutalButton>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
