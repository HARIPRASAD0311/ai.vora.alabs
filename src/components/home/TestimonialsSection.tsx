import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../../data/testimonials';
import { SectionHeading } from '../common/SectionHeading';
import { Quote, Star, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="client-experience" className="relative py-24 sm:py-32 bg-[#05070e] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-accent/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-accent/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            badge="Client Experiences"
            title="What Founders Say About Us"
            className="mb-14 sm:mb-20 text-center"
          />
        </motion.div>

        {/* Real Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{
                opacity: 0,
                y: index % 2 === 0 ? 50 : -40,
                x: index % 3 === 0 ? -30 : index % 3 === 2 ? 30 : 0,
              }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative p-7 sm:p-8 rounded-3xl bg-[#09101f]/85 border border-white/[0.08] hover:border-teal-accent/40 transition-all duration-500 backdrop-blur-md flex flex-col justify-between hover:shadow-[0_16px_40px_-15px_rgba(0,245,212,0.2)] hover:-translate-y-1"
            >
              <div>
                {/* Header: Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-teal-accent/10 border border-teal-accent/25 flex items-center justify-center text-teal-accent shadow-inner">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>

                {/* Project Tag Pill */}
                {t.projectType && (
                  <div className="mb-4 inline-block">
                    <span className="text-[11px] font-mono font-medium text-teal-accent/90 bg-teal-accent/[0.08] border border-teal-accent/20 px-2.5 py-1 rounded-full">
                      {t.projectType}
                    </span>
                  </div>
                )}

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Client Info with Avatar Initials & Verification */}
              <div className="pt-5 border-t border-white/[0.07] flex items-center gap-3.5">
                <div
                  className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${
                    t.avatarColor || 'from-teal-accent to-cyan-500'
                  } p-[1px] shadow-glow-sm shrink-0`}
                >
                  <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center font-display font-bold text-sm text-white">
                    {t.avatarInitials || t.name.slice(0, 2).toUpperCase()}
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-white font-display truncate">
                      {t.name}
                    </h4>
                    {t.verified && (
                      <span title="Verified Client">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-accent shrink-0" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 truncate">
                    {t.role} · <span className="text-slate-300">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Metric Strip */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-8 text-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold font-display text-white">4.97</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-mono text-slate-400 ml-1">Overall Client Rating</span>
          </div>

          <div className="hidden sm:block w-px h-6 bg-white/10" />

          <div className="text-xs font-mono text-slate-400">
            <span className="text-teal-accent font-semibold">100%</span> Verified Project Delivery
          </div>

          <div className="hidden sm:block w-px h-6 bg-white/10" />

          <div className="text-xs font-mono text-slate-400">
            <span className="text-cyan-accent font-semibold">24/7</span> Ongoing Support & Maintenance
          </div>
        </div>
      </div>
    </section>
  );
};
