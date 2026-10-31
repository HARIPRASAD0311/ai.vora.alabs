import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/common/Badge';
import {
  PanelsTopLeft,
  Smartphone,
  BrainCircuit,
  Workflow,
  Cable,
  BriefcaseBusiness,
  TrendingUp,
  Share2,
  ArrowUpRight,
} from 'lucide-react';

interface BentoServiceItem {
  id: string;
  title: string;
  slug: string;
  icon: React.ReactNode;
  colSpan: string;
  heightClass: string;
  decorType: 'browser' | 'mobile' | 'neural' | 'pipeline' | 'sync' | 'dashboard' | 'growth' | 'broadcast';
  accentGlow: string;
}

export const ServicesPage: React.FC = () => {
  const services: BentoServiceItem[] = [
    {
      id: 'web-dev',
      title: 'Website Development',
      slug: 'web-development',
      icon: <PanelsTopLeft className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />,
      colSpan: 'col-span-12 lg:col-span-7',
      heightClass: 'min-h-[280px] sm:min-h-[310px]',
      decorType: 'browser',
      accentGlow: 'from-teal-accent/20 via-cyan-400/10 to-transparent',
    },
    {
      id: 'app-dev',
      title: 'App Development',
      slug: 'app-development',
      icon: <Smartphone className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />,
      colSpan: 'col-span-12 lg:col-span-5',
      heightClass: 'min-h-[280px] sm:min-h-[310px]',
      decorType: 'mobile',
      accentGlow: 'from-cyan-400/20 via-sky-500/10 to-transparent',
    },
    {
      id: 'ai-agents',
      title: 'AI Agents & Assistants',
      slug: 'ai-solutions',
      icon: <BrainCircuit className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />,
      colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
      heightClass: 'min-h-[250px] sm:min-h-[280px]',
      decorType: 'neural',
      accentGlow: 'from-teal-accent/20 via-emerald-400/10 to-transparent',
    },
    {
      id: 'automation',
      title: 'Automation',
      slug: 'automation',
      icon: <Workflow className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />,
      colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
      heightClass: 'min-h-[250px] sm:min-h-[280px]',
      decorType: 'pipeline',
      accentGlow: 'from-cyan-accent/20 via-teal-accent/10 to-transparent',
    },
    {
      id: 'technical-integration',
      title: 'Technical Integration & Maintenance',
      slug: 'technical-integration',
      icon: <Cable className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />,
      colSpan: 'col-span-12 lg:col-span-4',
      heightClass: 'min-h-[250px] sm:min-h-[280px]',
      decorType: 'sync',
      accentGlow: 'from-sky-400/20 via-blue-500/10 to-transparent',
    },
    {
      id: 'business-management',
      title: 'Business Management Solutions',
      slug: 'business-management',
      icon: <BriefcaseBusiness className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />,
      colSpan: 'col-span-12 lg:col-span-5',
      heightClass: 'min-h-[260px] sm:min-h-[290px]',
      decorType: 'dashboard',
      accentGlow: 'from-teal-accent/20 via-cyan-accent/10 to-transparent',
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      slug: 'digital-marketing',
      icon: <TrendingUp className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />,
      colSpan: 'col-span-12 sm:col-span-6 lg:col-span-3',
      heightClass: 'min-h-[260px] sm:min-h-[290px]',
      decorType: 'growth',
      accentGlow: 'from-cyan-400/25 via-teal-accent/10 to-transparent',
    },
    {
      id: 'content-social',
      title: 'Content & Social Media Marketing',
      slug: 'content-social-marketing',
      icon: <Share2 className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />,
      colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
      heightClass: 'min-h-[260px] sm:min-h-[290px]',
      decorType: 'broadcast',
      accentGlow: 'from-teal-accent/20 via-sky-400/10 to-transparent',
    },
  ];

  // Subtle integrated vector decoration for each service card
  const renderDecoration = (type: BentoServiceItem['decorType']) => {
    switch (type) {
      case 'browser':
        return (
          <div className="absolute top-6 right-6 w-52 sm:w-64 h-36 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-3 pointer-events-none opacity-40 group-hover:opacity-80 group-hover:border-teal-accent/30 transition-all duration-500">
            <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-white/[0.06]">
              <span className="w-2 h-2 rounded-full bg-rose-500/40" />
              <span className="w-2 h-2 rounded-full bg-amber-500/40" />
              <span className="w-2 h-2 rounded-full bg-teal-accent/60" />
              <div className="ml-auto w-20 h-1.5 rounded-full bg-white/[0.08]" />
            </div>
            <div className="space-y-2">
              <div className="w-3/4 h-2 rounded bg-white/[0.06]" />
              <div className="w-1/2 h-2 rounded bg-teal-accent/[0.15]" />
              <div className="w-5/6 h-2 rounded bg-white/[0.04]" />
            </div>
          </div>
        );

      case 'mobile':
        return (
          <div className="absolute top-5 right-6 w-24 sm:w-28 h-44 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-2 pointer-events-none opacity-40 group-hover:opacity-85 group-hover:border-cyan-400/30 transition-all duration-500">
            <div className="w-8 h-1 rounded-full bg-white/20 mx-auto mb-3" />
            <div className="w-full h-16 rounded-xl bg-cyan-400/[0.08] mb-2" />
            <div className="w-2/3 h-1.5 rounded bg-white/[0.08] mx-auto mb-1" />
            <div className="w-1/2 h-1.5 rounded bg-teal-accent/[0.2] mx-auto" />
          </div>
        );

      case 'neural':
        return (
          <div className="absolute top-4 right-4 w-32 h-32 pointer-events-none opacity-30 group-hover:opacity-75 transition-opacity duration-500">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-teal-accent/40">
              <circle cx="20" cy="20" r="4" fill="#00f5d4" fillOpacity="0.6" />
              <circle cx="80" cy="25" r="4" fill="#06b6d4" fillOpacity="0.6" />
              <circle cx="50" cy="55" r="5" fill="#00f5d4" fillOpacity="0.9" />
              <circle cx="25" cy="80" r="4" fill="#06b6d4" fillOpacity="0.6" />
              <circle cx="80" cy="75" r="4" fill="#00f5d4" fillOpacity="0.6" />
              <line x1="20" y1="20" x2="50" y2="55" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="80" y1="25" x2="50" y2="55" strokeWidth="1" />
              <line x1="50" y1="55" x2="25" y2="80" strokeWidth="1" />
              <line x1="50" y1="55" x2="80" y2="75" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>
        );

      case 'pipeline':
        return (
          <div className="absolute top-5 right-5 w-32 h-28 pointer-events-none opacity-30 group-hover:opacity-80 transition-opacity duration-500">
            <svg viewBox="0 0 100 80" fill="none" className="w-full h-full stroke-cyan-400/50">
              <rect x="10" y="10" width="22" height="20" rx="6" strokeWidth="1.2" />
              <rect x="68" y="10" width="22" height="20" rx="6" strokeWidth="1.2" fill="rgba(0,245,212,0.1)" />
              <rect x="39" y="50" width="22" height="20" rx="6" strokeWidth="1.2" />
              <path d="M 32,20 L 68,20" strokeWidth="1" strokeDasharray="2 2" />
              <path d="M 79,30 L 79,40 L 50,40 L 50,50" strokeWidth="1" />
            </svg>
          </div>
        );

      case 'sync':
        return (
          <div className="absolute top-4 right-4 w-32 h-32 pointer-events-none opacity-30 group-hover:opacity-75 transition-opacity duration-500">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-sky-400/40">
              <circle cx="50" cy="50" r="32" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="50" cy="50" r="18" strokeWidth="1.2" fill="rgba(6,182,212,0.06)" />
              <circle cx="50" cy="18" r="3" fill="#00f5d4" />
              <circle cx="82" cy="50" r="3" fill="#06b6d4" />
              <circle cx="50" cy="82" r="3" fill="#00f5d4" />
            </svg>
          </div>
        );

      case 'dashboard':
        return (
          <div className="absolute top-6 right-6 w-44 sm:w-56 h-28 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-3 pointer-events-none opacity-35 group-hover:opacity-80 transition-all duration-500">
            <div className="flex items-end gap-2.5 h-14 pt-3 border-b border-white/[0.06] px-1">
              <div className="w-1/5 h-6 rounded-t bg-teal-accent/30" />
              <div className="w-1/5 h-10 rounded-t bg-cyan-400/40" />
              <div className="w-1/5 h-4 rounded-t bg-white/20" />
              <div className="w-1/5 h-12 rounded-t bg-teal-accent/60" />
              <div className="w-1/5 h-8 rounded-t bg-cyan-400/30" />
            </div>
            <div className="flex justify-between items-center pt-2 px-1">
              <span className="w-10 h-1.5 rounded bg-white/10" />
              <span className="w-6 h-1.5 rounded bg-teal-accent/40" />
            </div>
          </div>
        );

      case 'growth':
        return (
          <div className="absolute top-4 right-4 w-28 h-28 pointer-events-none opacity-30 group-hover:opacity-85 transition-opacity duration-500">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
              <path
                d="M 15,80 Q 45,75 60,45 T 90,15"
                stroke="#00f5d4"
                strokeWidth="2"
                strokeLinecap="round"
                className="opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <path
                d="M 15,80 Q 45,75 60,45 T 90,15 L 90,85 L 15,85 Z"
                fill="url(#growthGrad)"
                opacity="0.25"
              />
              <circle cx="90" cy="15" r="4" fill="#00f5d4" className="animate-ping" />
              <circle cx="90" cy="15" r="3" fill="#ffffff" />
              <defs>
                <linearGradient id="growthGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00f5d4" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#00f5d4" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        );

      case 'broadcast':
        return (
          <div className="absolute top-4 right-4 w-32 h-32 pointer-events-none opacity-30 group-hover:opacity-75 transition-opacity duration-500">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-teal-accent/40">
              <circle cx="50" cy="50" r="12" strokeWidth="1.2" fill="rgba(0,245,212,0.1)" />
              <circle cx="50" cy="50" r="24" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="36" strokeWidth="1" strokeOpacity="0.4" />
              <circle cx="50" cy="50" r="4" fill="#00f5d4" />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative pt-36 pb-32 sm:pt-44 sm:pb-36 bg-[#05070e] overflow-hidden">
      {/* Background Ambient Lighting Blooms */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-cyan-accent/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[550px] h-[550px] bg-teal-accent/[0.06] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-sky-500/[0.05] rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-subtle-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header — Section Label & Primary Headline Only */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="mb-5 inline-block">
            <Badge variant="teal">What We Do</Badge>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display text-white tracking-tight leading-[1.08]">
            Technology Solutions{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-accent via-cyan-300 to-sky-400">
              Without Limits.
            </span>
          </h1>
        </div>

        {/* Asymmetric Bento Composition Grid */}
        <div className="grid grid-cols-12 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className={`group relative rounded-3xl p-7 sm:p-9 bg-[#080e1c]/85 border border-white/[0.08] hover:border-teal-accent/50 hover:bg-[#0b1429] transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden shadow-[0_12px_40px_-15px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_-10px_rgba(0,245,212,0.25)] hover:-translate-y-1 ${service.colSpan} ${service.heightClass}`}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {/* Top ambient hover glow gradient */}
              <div
                className={`absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-br ${service.accentGlow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
              />

              {/* Integrated Vector Decoration */}
              {renderDecoration(service.decorType)}

              {/* Top Row: Service Icon & Arrow */}
              <div className="relative z-10 flex items-center justify-between">
                {/* Icon Container: White Icon with Subtle Teal/Cyan Accent */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-900/90 border border-white/10 group-hover:border-teal-accent/40 flex items-center justify-center shadow-inner transition-colors duration-300">
                  <div className="relative">
                    {service.icon}
                    <span className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-teal-accent shadow-[0_0_8px_#00f5d4] opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Subtle Directional Arrow */}
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] group-hover:border-teal-accent/50 group-hover:bg-teal-accent/15 flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Bottom Row: ONLY Service Title */}
              <div className="relative z-10 pt-8 sm:pt-10">
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-teal-accent transition-colors duration-300 tracking-tight leading-tight">
                  {service.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
