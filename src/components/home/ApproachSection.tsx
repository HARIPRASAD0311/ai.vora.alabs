import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Compass, Lightbulb, Code2, Rocket, ArrowRight } from 'lucide-react';

export const ApproachSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      icon: <Compass className="w-6 h-6 text-teal-accent" />,
      initial: { opacity: 0, x: -70, y: 0 }, // Move side from left
    },
    {
      number: '02',
      title: 'Strategize',
      icon: <Lightbulb className="w-6 h-6 text-cyan-accent" />,
      initial: { opacity: 0, x: 0, y: -60 }, // Pull down from top
    },
    {
      number: '03',
      title: 'Build',
      icon: <Code2 className="w-6 h-6 text-sky-400" />,
      initial: { opacity: 0, x: 0, y: 60 }, // Pull up from bottom
    },
    {
      number: '04',
      title: 'Launch & Support',
      icon: <Rocket className="w-6 h-6 text-teal-accent" />,
      initial: { opacity: 0, x: 70, y: 0 }, // Move side from right
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#05070e] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-teal-accent/[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading — Pull Down Animation */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            badge="How We Work"
            title="How We Work"
            className="mb-14 sm:mb-20 text-center"
          />
        </motion.div>

        {/* 4 Steps Visual Progression with Connecting Line */}
        <div className="relative">
          {/* Subtle Horizontal Connecting Line (Desktop) with ScaleX reveal */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute top-1/2 left-12 right-12 h-px bg-gradient-to-r from-transparent via-teal-accent/25 to-transparent -translate-y-10 z-0 pointer-events-none origin-left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={step.initial}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-3xl p-8 bg-[#0b1222]/85 border border-white/[0.08] hover:border-teal-accent/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between hover:shadow-[0_12px_30px_-10px_rgba(0,245,212,0.18)]"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 group-hover:border-teal-accent/40 flex items-center justify-center transition-colors shadow-inner">
                      {step.icon}
                    </div>
                    <span className="font-mono text-3xl font-extrabold text-slate-600 group-hover:text-teal-accent/90 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Clean Step Title Only — NO lengthy descriptions */}
                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-teal-accent transition-colors">
                    {step.title}
                  </h3>
                </div>

                {/* Micro Indicator Arrow for Flow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex justify-end pt-4 opacity-30 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 text-teal-accent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
