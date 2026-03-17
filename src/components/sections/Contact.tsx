import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import BrutalButton from '../ui/BrutalButton';

const schema = z.object({
  name: z.string().min(2, 'NAME_REQUIRED'),
  email: z.string().email('INVALID_EMAIL'),
  phone: z.string().min(5, 'PHONE_REQUIRED'),
  business: z.string().min(1, 'SELECT_ONE'),
  budget: z.string().min(1, 'SELECT_ONE'),
  message: z.string().min(10, 'MIN_10_CHARS'),
});

type FormData = z.infer<typeof schema>;

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    setSubmitted(true);
  };

  const inputClass =
    'w-full border-2 border-brutal-black dark:border-brutal-white bg-transparent font-body text-sm p-3 rounded-none focus:outline-none focus:border-brutal-blue';
  const labelClass = 'block font-display text-[10px] uppercase tracking-[0.2em] font-bold mb-1';
  const errorClass = 'font-body text-[10px] text-brutal-red mt-1';

  return (
    <section id="contact" className="border-b-4 border-brutal-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left — Black block */}
        <div className="bg-[#0D0D0D] text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between relative">
          <div>
            <SectionLabel>[ GET_IN_TOUCH ]</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[0.05em] leading-[1] mt-6">
              LET'S<br />BUILD<br />SOMETHING<br />UGLY-<br />BEAUTIFUL.
            </h2>

            <div className="h-1 bg-brutal-yellow w-16 my-8" />

            <ul className="space-y-2 font-body text-sm">
              <li>✦ hello@devcraft.agency</li>
              <li>✦ +91 98765 43210</li>
              <li>✦ Nellore, Andhra Pradesh</li>
            </ul>
          </div>

          <p className="font-body text-[10px] text-brutal-gray mt-8 lg:mt-0">
            // reply within 24h. no sales pitch. just talk.
          </p>
        </div>

        {/* Right — Form */}
        <div className="bg-brutal-white dark:bg-[#1A1A1A] p-8 md:p-12 lg:p-16 border-l-0 lg:border-l-4 border-brutal-black">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-brutal-black text-brutal-white p-8 font-body text-lg h-full flex flex-col justify-center rounded-none"
              >
                {['> MESSAGE_RECEIVED.', "> WE'LL REPLY WITHIN_24H.", '> STAND_BY.'].map((line, i) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.3, duration: 0.15 }}
                    className="mb-2"
                  >
                    {line}
                  </motion.p>
                ))}
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>
                  <label className={labelClass}>YOUR_NAME</label>
                  <input {...register('name')} className={inputClass} />
                  {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                </div>

                <div>
                  <label className={labelClass}>YOUR_EMAIL</label>
                  <input {...register('email')} type="email" className={inputClass} />
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>

                <div>
                  <label className={labelClass}>YOUR_PHONE</label>
                  <input {...register('phone')} type="tel" className={inputClass} />
                  {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                </div>

                <div>
                  <label className={labelClass}>BUSINESS_TYPE</label>
                  <select {...register('business')} className={inputClass}>
                    <option value="">SELECT</option>
                    <option value="startup">Startup</option>
                    <option value="small">Small Biz</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.business && <p className={errorClass}>{errors.business.message}</p>}
                </div>

                <div>
                  <label className={labelClass}>YOUR_BUDGET</label>
                  <select {...register('budget')} className={inputClass}>
                    <option value="">SELECT</option>
                    <option value="under10k">&lt;₹10k</option>
                    <option value="10k-25k">₹10k–₹25k</option>
                    <option value="25k-50k">₹25k–₹50k</option>
                    <option value="50k+">₹50k+</option>
                  </select>
                  {errors.budget && <p className={errorClass}>{errors.budget.message}</p>}
                </div>

                <div>
                  <label className={labelClass}>TELL_US_MORE</label>
                  <textarea {...register('message')} rows={4} className={inputClass} />
                  {errors.message && <p className={errorClass}>{errors.message.message}</p>}
                </div>

                <div className="pt-4">
                  <BrutalButton variant="primary" size="lg" fullWidth type="submit">
                    SEND_IT →
                  </BrutalButton>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Contact;
