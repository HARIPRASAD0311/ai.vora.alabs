import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../types';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  const [imgError, setImgError] = useState(false);

  const cardInner = (
    <>
      {/* Large Project Image Container */}
      <div className="relative w-full aspect-[16/10] bg-slate-900 overflow-hidden">
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900/90 text-slate-500 p-6 text-center">
            <Sparkles className="w-8 h-8 text-teal-accent/50 mb-2" />
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-400">
              {project.title}
            </p>
          </div>
        )}

        {/* Ambient Gradient Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a101f] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />

        {/* Live Project Indicator Pill */}
        {project.liveUrl && (
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-teal-accent/50 text-[11px] font-mono text-teal-accent font-semibold shadow-[0_0_15px_rgba(0,245,212,0.25)]">
            <span className="w-2 h-2 rounded-full bg-teal-accent animate-pulse" />
            <span>Live Website</span>
          </div>
        )}
      </div>

      {/* ONLY Project Title Underneath Image */}
      <div className="p-6 sm:p-7 flex items-center justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-teal-accent transition-colors duration-300">
            {project.title}
          </h3>
          {project.liveUrl && (
            <span className="text-xs font-mono text-slate-400 group-hover:text-teal-accent transition-colors block mt-1">
              Click to open live site ↗
            </span>
          )}
        </div>

        <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 group-hover:border-teal-accent group-hover:bg-teal-accent group-hover:text-slate-950 flex items-center justify-center transition-all duration-300 shrink-0 text-slate-400">
          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.2]" />
        </div>
      </div>
    </>
  );

  const sharedClasses = `group block relative rounded-3xl bg-[#0a101f]/90 border border-white/[0.08] hover:border-teal-accent/50 transition-all duration-500 overflow-hidden hover:shadow-[0_16px_40px_-12px_rgba(0,245,212,0.25)] hover:-translate-y-1 ${className}`;

  if (project.liveUrl) {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClasses}
        title={`Visit live website for ${project.title}`}
      >
        {cardInner}
      </a>
    );
  }

  return (
    <Link
      to={`/work/${project.slug}`}
      className={sharedClasses}
    >
      {cardInner}
    </Link>
  );
};
