import React from 'react';
import { COMPANY_INFO } from '../../data/company';
import { Button } from '../common/Button';
import { TechEcosystemStrip } from '../common/TechEcosystemStrip';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenBookModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBookModal }) => {
  return (
    <section className="relative pt-36 pb-24 sm:pt-48 sm:pb-32 overflow-hidden">
      {/* Signature Teal / Cyan Ambient Radial Lighting Effects */}
      <div className="absolute top-1/4 right-1/4 -translate-y-1/2 w-96 sm:w-[650px] h-96 sm:h-[650px] bg-cyan-accent/[0.15] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -translate-y-1/2 w-80 sm:w-[550px] h-80 sm:h-[550px] bg-teal-accent/[0.14] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-teal-accent/[0.09] via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-teal-accent/30 text-xs font-semibold uppercase tracking-wider text-teal-accent shadow-[0_0_20px_-3px_rgba(0,245,212,0.25)] mb-8 sm:mb-10 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{COMPANY_INFO.tagline}</span>
        </div>

        {/* Large Focused Hero Headline — Main Visual Centerpiece */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-[-0.03em] text-white font-display leading-[1.05] sm:leading-[1.04] max-w-5xl mx-auto">
          Transform Your Business with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-accent via-cyan-300 to-sky-400">
            Intelligent Technology.
          </span>
        </h1>

        {/* CTA Buttons — Spaced cleanly below headline without any intervening paragraph */}
        <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            to="/contact"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Get Started
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={onOpenBookModal}
            icon={<Calendar className="w-4 h-4" />}
          >
            Book a Free Consultation
          </Button>
        </div>

        {/* Continuous Moving Technology Ribbon */}
        <div className="mt-20 sm:mt-24 pt-10 border-t border-white/[0.08]">
          <TechEcosystemStrip />
        </div>
      </div>
    </section>
  );
};
