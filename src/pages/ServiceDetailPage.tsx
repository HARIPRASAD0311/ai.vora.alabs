import React from 'react';
import { useParams, Link, Navigate, useOutletContext } from 'react-router-dom';
import { SERVICES } from '../data/services';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import {
  PanelsTopLeft,
  Smartphone,
  BrainCircuit,
  Workflow,
  BriefcaseBusiness,
  Cable,
  TrendingUp,
  Share2,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Sparkles,
} from 'lucide-react';

interface ContextType {
  openBookModal: () => void;
}

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openBookModal } = useOutletContext<ContextType>();

  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const getIcon = (name: string) => {
    const props = { className: 'w-8 h-8 text-teal-accent' };
    switch (name) {
      case 'PanelsTopLeft':
      case 'Globe':
      case 'Monitor':
        return <PanelsTopLeft {...props} />;
      case 'Smartphone':
        return <Smartphone {...props} />;
      case 'BrainCircuit':
      case 'Bot':
        return <BrainCircuit {...props} />;
      case 'Workflow':
      case 'Zap':
        return <Workflow {...props} />;
      case 'BriefcaseBusiness':
      case 'LayoutDashboard':
        return <BriefcaseBusiness {...props} />;
      case 'Cable':
      case 'Cpu':
        return <Cable {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      case 'Share2':
        return <Share2 {...props} />;
      default:
        return <PanelsTopLeft {...props} />;
    }
  };

  return (
    <div className="relative pt-36 pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-teal-accent/[0.08] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-cyan-accent/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-teal-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-teal-accent/30 flex items-center justify-center shadow-glow-sm">
              {getIcon(service.iconName)}
            </div>
            <Badge variant="teal">{service.title}</Badge>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display text-white tracking-tight leading-[1.08]">
            {service.heroHeadline}
          </h1>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              to={`/contact?service=${service.slug}`}
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start {service.title} Project
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={openBookModal}
              icon={<Calendar className="w-4 h-4" />}
            >
              Book Strategy Call
            </Button>
          </div>
        </div>

        {/* Visual Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Capabilities */}
          <div className="rounded-3xl p-8 sm:p-10 bg-[#091020]/90 border border-white/10 backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-teal-accent" />
              <h2 className="text-xl font-bold font-display text-white">
                Capabilities & Scope
              </h2>
            </div>
            <ul className="space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                  <span className="text-sm text-slate-200 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Impact */}
          <div className="rounded-3xl p-8 sm:p-10 bg-[#091020]/90 border border-white/10 backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-cyan-accent" />
              <h2 className="text-xl font-bold font-display text-white">
                Business Value
              </h2>
            </div>
            <ul className="space-y-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <span className="text-cyan-accent font-bold text-lg leading-none">✓</span>
                  <span className="text-sm text-slate-300 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Deliverables Tags */}
        <div className="rounded-3xl p-8 sm:p-10 bg-[#060a14] border border-white/[0.08] mb-16">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Project Deliverables
          </h3>
          <div className="flex flex-wrap gap-3">
            {service.deliverables.map((deliv) => (
              <span
                key={deliv}
                className="px-4 py-2.5 rounded-2xl bg-slate-900 border border-white/10 text-xs sm:text-sm text-slate-200 font-medium flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-accent" />
                {deliv}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="rounded-3xl p-10 sm:p-14 bg-gradient-to-r from-navy-900 via-[#0a1329] to-navy-900 border border-teal-accent/30 text-center relative overflow-hidden">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
            Ready to Build Your {service.title} Solution?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to={`/contact?service=${service.slug}`}
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get Started
            </Button>
            <Button variant="secondary" size="lg" onClick={openBookModal}>
              Book Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
