import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { COMPANY_INFO } from '../data/company';
import { Target, Eye, Cpu, ShieldCheck, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';

interface ContextType {
  openBookModal: () => void;
}

export const AboutPage: React.FC = () => {
  const { openBookModal } = useOutletContext<ContextType>();

  const capabilities = [
    { title: 'Full-Stack Web Development', tag: 'Next.js • React • TypeScript' },
    { title: 'Mobile Applications', tag: 'iOS • Android • React Native' },
    { title: 'AI Engineering & Agents', tag: 'LLMs • RAG • Autonomous Agents' },
    { title: 'Workflow & WhatsApp Automation', tag: 'n8n • Webhooks • Official API' },
    { title: 'Custom Business Portals', tag: 'Dashboards • RBAC • Cloud DB' },
    { title: 'Digital Growth Strategy', tag: 'SEO • Attribution • CRO' },
  ];

  return (
    <div className="relative pt-36 pb-28 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-teal-accent/[0.08] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-cyan-accent/[0.07] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header — Spacious & Impactful */}
        <div className="max-w-4xl mx-auto text-center mb-20 sm:mb-24">
          <Badge variant="teal" className="mb-6">
            About AI VORA LABS
          </Badge>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display text-white tracking-tight leading-[1.1]">
            Building Technology That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-accent to-cyan-400">
              Empowers Businesses.
            </span>
          </h1>
        </div>

        {/* Company Overview Visual Card */}
        <div className="mb-24 rounded-3xl p-8 sm:p-14 bg-[#091020]/80 border border-white/10 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-accent/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-teal-accent block mb-3">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
                A Senior Technology Team with Global Standards.
              </h2>
              <div className="flex flex-wrap gap-3">
                <Button to="/contact" variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Work With Us
                </Button>
                <Button variant="secondary" size="sm" onClick={openBookModal} icon={<Calendar className="w-3.5 h-3.5" />}>
                  Book Call
                </Button>
              </div>
            </div>

            {/* Core Values 2x2 Visual Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-navy-900/90 border border-white/10 hover:border-teal-accent/30 transition-colors">
                <Target className="w-6 h-6 text-teal-accent mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">Our Mission</h3>
                <p className="text-xs text-slate-400">
                  Democratizing enterprise software & automation for ambitious businesses.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-navy-900/90 border border-white/10 hover:border-cyan-accent/30 transition-colors">
                <Eye className="w-6 h-6 text-cyan-accent mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">Our Vision</h3>
                <p className="text-xs text-slate-400">
                  Powering end-to-end digital transformation from launch to market leadership.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-navy-900/90 border border-white/10 hover:border-sky-400/30 transition-colors">
                <Cpu className="w-6 h-6 text-sky-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">Modern Stack</h3>
                <p className="text-xs text-slate-400">
                  Next.js, TypeScript, Python, and cutting-edge LLM frameworks.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-navy-900/90 border border-white/10 hover:border-emerald-400/30 transition-colors">
                <ShieldCheck className="w-6 h-6 text-emerald-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">Direct Access</h3>
                <p className="text-xs text-slate-400">
                  Collaborate directly with engineers — no agency bureaucracy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Section — Visual Badges & Cards */}
        <div className="mb-24">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-accent block mb-3 font-mono">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              End-to-End Technical Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-6 rounded-3xl bg-[#0a101f]/80 border border-white/10 hover:border-teal-accent/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                  <h3 className="text-lg font-bold text-white font-display">
                    {cap.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-white/[0.04] px-3 py-1.5 rounded-xl border border-white/[0.06] w-fit">
                  {cap.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Steps How We Work Visual */}
        <div className="mb-24 rounded-3xl p-8 sm:p-12 bg-[#060a14] border border-white/10">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <Badge variant="cyan" className="mb-3">
              Methodology
            </Badge>
            <h2 className="text-3xl font-bold font-display text-white">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.approachSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-navy-900/60 border border-white/[0.08] hover:border-teal-accent/30 transition-colors"
              >
                <span className="text-xs font-mono text-teal-accent font-semibold block mb-2">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold text-white font-display">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Final Clean CTA */}
        <div className="rounded-3xl p-10 sm:p-14 bg-gradient-to-r from-navy-900 via-[#0a1329] to-navy-900 border border-teal-accent/30 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Let's Build Your Next Digital Advantage
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/contact" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Get in Touch
              </Button>
              <Button variant="secondary" onClick={openBookModal} icon={<Calendar className="w-4 h-4" />}>
                Book a Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
