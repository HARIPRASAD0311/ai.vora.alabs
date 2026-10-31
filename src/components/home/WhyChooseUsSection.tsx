import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { DollarSign, Sliders, Layers, Cpu, ShieldCheck } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#05070e]">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-teal-accent/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-accent/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading — Pull Down Animation */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            badge="Why Choose Us"
            title="Why Choose Us?"
            className="mb-14 sm:mb-20 text-center"
          />
        </motion.div>

        {/* Minimalist Bento Grid communicating through design & short headings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Affordable Solutions — Move side from left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-3xl p-8 bg-[#0b1222]/80 border border-white/[0.08] hover:border-teal-accent/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between hover:shadow-[0_10px_30px_-10px_rgba(0,245,212,0.15)]"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-2xl bg-teal-accent/10 border border-teal-accent/30 flex items-center justify-center text-teal-accent shadow-inner">
                <DollarSign className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-slate-500 font-semibold tracking-wider">01</span>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-teal-accent block mb-1">
                Value-Driven
              </span>
              <h3 className="text-2xl font-bold font-display text-white group-hover:text-teal-accent transition-colors">
                Affordable Solutions
              </h3>
            </div>
          </motion.div>

          {/* Card 2: Custom-Built Solutions — Pull down from top */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-3xl p-8 bg-[#0b1222]/80 border border-white/[0.08] hover:border-teal-accent/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between hover:shadow-[0_10px_30px_-10px_rgba(0,245,212,0.15)]"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-2xl bg-cyan-accent/10 border border-cyan-accent/30 flex items-center justify-center text-cyan-300 shadow-inner">
                <Sliders className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-slate-500 font-semibold tracking-wider">02</span>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-300 block mb-1">
                Bespoke Architecture
              </span>
              <h3 className="text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                Custom-Built Solutions
              </h3>
            </div>
          </motion.div>

          {/* Card 3: All-in-One Technology Partner — Move side from right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-3xl p-8 bg-[#0b1222]/80 border border-white/[0.08] hover:border-teal-accent/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between hover:shadow-[0_10px_30px_-10px_rgba(0,245,212,0.15)] md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-2xl bg-sky-accent/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-inner">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-slate-500 font-semibold tracking-wider">03</span>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-sky-400 block mb-1">
                Unified Expertise
              </span>
              <h3 className="text-2xl font-bold font-display text-white group-hover:text-sky-300 transition-colors">
                All-in-One Technology Partner
              </h3>
            </div>
          </motion.div>

          {/* Card 4: Modern Technology — Pull up from bottom */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-3xl p-8 bg-[#0b1222]/80 border border-white/[0.08] hover:border-teal-accent/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between hover:shadow-[0_10px_30px_-10px_rgba(0,245,212,0.15)] lg:col-span-2"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-2xl bg-emerald-accent/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shadow-inner">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-slate-500 font-semibold tracking-wider">04</span>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 block mb-1">
                Next-Gen Engineering
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-emerald-300 transition-colors">
                Modern Technology
              </h3>
            </div>
          </motion.div>

          {/* Card 5: End-to-End Support — Move side from right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-3xl p-8 bg-[#0b1222]/80 border border-white/[0.08] hover:border-teal-accent/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between hover:shadow-[0_10px_30px_-10px_rgba(0,245,212,0.15)]"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-2xl bg-teal-accent/10 border border-teal-accent/30 flex items-center justify-center text-teal-accent shadow-inner">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-slate-500 font-semibold tracking-wider">05</span>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-teal-accent block mb-1">
                Continuous Care
              </span>
              <h3 className="text-2xl font-bold font-display text-white group-hover:text-teal-accent transition-colors">
                End-to-End Support
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
