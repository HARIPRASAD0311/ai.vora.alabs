import React from 'react';
import { Code2, Server, Database, Cloud, Cpu, Sparkles } from 'lucide-react';

interface TechEcosystemStripProps {
  className?: string;
}

export const TechEcosystemStrip: React.FC<TechEcosystemStripProps> = ({ className = '' }) => {
  const technologies = [
    { name: 'React', icon: <Code2 className="w-4 h-4 text-cyan-400" /> },
    { name: 'Next.js', icon: <Server className="w-4 h-4 text-white" /> },
    { name: 'Python', icon: <Cpu className="w-4 h-4 text-yellow-400" /> },
    { name: 'AWS', icon: <Cloud className="w-4 h-4 text-amber-400" /> },
    { name: 'Node.js', icon: <Database className="w-4 h-4 text-emerald-400" /> },
    { name: 'OpenAI', icon: <Sparkles className="w-4 h-4 text-teal-accent" /> },
    { name: 'Google Gemini', icon: <Sparkles className="w-4 h-4 text-sky-400" /> },
  ];

  // Tripled for perfectly seamless infinite looping across all viewport widths
  const loopedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <div className={`w-full max-w-6xl mx-auto ${className}`}>
      <div className="text-center mb-6">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold font-mono">
          Technologies We Work With
        </p>
      </div>

      {/* Infinite Moving Ribbon Container with Gradient Fade Edges */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex items-center gap-4 py-2 w-max animate-tech-marquee hover:[animation-play-state:paused]">
          {loopedTechs.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-2.5 px-5 py-2 rounded-full bg-slate-900/60 border border-white/[0.08] hover:border-teal-accent/50 hover:bg-slate-900/90 transition-all duration-300 backdrop-blur-md cursor-default select-none shadow-sm group"
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
