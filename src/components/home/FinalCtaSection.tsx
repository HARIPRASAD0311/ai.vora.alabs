import React from 'react';
import { Button } from '../common/Button';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenBookModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenBookModal }) => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#04060d] overflow-hidden">
      {/* Intense Ambient Glow Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-72 bg-gradient-to-r from-teal-accent/[0.15] via-cyan-accent/[0.18] to-sky-500/[0.12] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-[#080d1c]/90 border border-teal-accent/30 text-center shadow-[0_0_60px_-15px_rgba(0,245,212,0.2)] overflow-hidden backdrop-blur-xl">
          {/* Subtle decorative vector lines */}
          <div className="absolute inset-0 bg-subtle-grid opacity-20 pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-accent/10 border border-teal-accent/30 text-xs font-semibold uppercase tracking-wider text-teal-accent mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Building Today</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Ready to Take Your Business Forward?
          </h2>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Let's turn your ideas into powerful digital solutions. Tell us what you want to build, and we'll help you find the right way forward.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start Your Project
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
        </div>
      </div>
    </section>
  );
};

