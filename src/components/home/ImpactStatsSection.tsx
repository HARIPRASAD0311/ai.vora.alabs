import React from 'react';
import { COMPANY_INFO } from '../../data/company';
import { CurvedHorizonGlow } from '../common/CurvedHorizonGlow';
import { Badge } from '../common/Badge';
import { CheckCircle, ShieldCheck, Zap, Code, Sparkles } from 'lucide-react';

export const ImpactStatsSection: React.FC = () => {
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-5 h-5 text-teal-accent" />;
      case 1:
        return <Zap className="w-5 h-5 text-cyan-accent" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-sky-400" />;
      case 3:
        return <ShieldCheck className="w-5 h-5 text-teal-accent" />;
      default:
        return <CheckCircle className="w-5 h-5 text-teal-accent" />;
    }
  };

  return (
    <section className="relative pt-24 pb-32 bg-[#04070f] overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Header — Clean without paragraph */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="mb-4">
            <Badge variant="teal">Business Impact</Badge>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
            Your Growth Is Our Priority
          </h2>
        </div>

        {/* The Signature Glowing Cyan/Teal Horizon Arc */}
        <div className="relative my-4 sm:my-8">
          <CurvedHorizonGlow intensity="high" />
        </div>

        {/* Qualitative Impact Pillars — Clean, minimal & impactful */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mt-10">
          {COMPANY_INFO.impactPillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="relative p-7 rounded-3xl bg-[#09101f]/90 border border-white/[0.08] hover:border-teal-accent/40 transition-all duration-300 backdrop-blur-md shadow-lg group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-teal-accent/40 transition-colors shadow-inner">
                    {getPillarIcon(index)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-teal-accent px-2.5 py-1 rounded-full bg-teal-accent/10 border border-teal-accent/20">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-white group-hover:text-teal-accent transition-colors">
                  {pillar.title}
                </h3>
              </div>

              <div className="pt-6 border-t border-white/[0.06] text-xs text-slate-400 font-mono flex items-center gap-2 mt-6">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-accent shrink-0" />
                <span>{pillar.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
