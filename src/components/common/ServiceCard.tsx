import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../../types';
import {
  Globe,
  Smartphone,
  Bot,
  Zap,
  LayoutDashboard,
  Cpu,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0 }) => {
  const getIcon = (name: string) => {
    const props = { className: 'w-6 h-6 text-teal-accent' };
    switch (name) {
      case 'Globe':
        return <Globe {...props} />;
      case 'Smartphone':
        return <Smartphone {...props} />;
      case 'Bot':
        return <Bot {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'LayoutDashboard':
        return <LayoutDashboard {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      default:
        return <Globe {...props} />;
    }
  };

  return (
    <div
      className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-[#0b1222]/70 border border-white/[0.08] hover:border-teal-accent/35 transition-all duration-300 backdrop-blur-md flex flex-col justify-between overflow-hidden hover:shadow-[0_10px_30px_-10px_rgba(0,245,212,0.15)]"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Top right subtle glow on hover */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-teal-accent/[0.08] rounded-full blur-2xl group-hover:bg-teal-accent/[0.18] transition-all duration-500 pointer-events-none" />

      <div>
        {/* Icon container */}
        <div className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-white/10 group-hover:border-teal-accent/40 flex items-center justify-center mb-5 transition-colors duration-300 shadow-inner">
          {getIcon(service.iconName)}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-display text-white group-hover:text-teal-accent transition-colors duration-200 mb-2.5">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
          {service.shortDesc}
        </p>
      </div>

      {/* Link / CTA */}
      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-300 group-hover:text-teal-accent transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <span className="text-[11px] font-mono text-slate-600">
          0{index + 1}
        </span>
      </div>
    </div>
  );
};

