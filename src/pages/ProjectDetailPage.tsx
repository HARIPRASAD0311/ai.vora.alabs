import React, { useState } from 'react';
import { useParams, Link, Navigate, useOutletContext } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
  Code2,
  ExternalLink,
} from 'lucide-react';

interface ContextType {
  openBookModal: () => void;
}

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openBookModal } = useOutletContext<ContextType>();
  const [imgError, setImgError] = useState(false);

  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex];

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : PROJECTS[0];

  return (
    <div className="relative pt-36 pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-teal-accent/[0.08] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-cyan-accent/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-teal-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Selected Projects</span>
          </Link>
        </div>

        {/* Project Header — Visual & Focused with Live Link Button */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="teal">{project.category}</Badge>
              {project.liveUrl && (
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-accent/10 border border-teal-accent/30 text-[11px] font-mono text-teal-accent font-semibold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-teal-accent animate-pulse" />
                  Live Deployment
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight leading-[1.1]">
              {project.title}
            </h1>
          </div>

          {/* Prominent Live Link CTA */}
          {project.liveUrl && (
            <div className="shrink-0">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-teal-accent to-cyan-400 text-slate-950 font-display font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(0,245,212,0.4)] hover:shadow-[0_0_45px_rgba(0,245,212,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Launch Live Project</span>
                <ExternalLink className="w-4 h-4 text-slate-950 stroke-[2.5]" />
              </a>
            </div>
          )}
        </div>

        {/* Hero Screenshot / Visual Presentation */}
        <div className="mb-16 rounded-3xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl relative group">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative cursor-pointer"
              title="Click to visit live deployment"
            >
              {!imgError ? (
                <img
                  src={project.image}
                  alt={project.title}
                  onError={() => setImgError(true)}
                  className="w-full h-auto max-h-[640px] object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="w-full h-96 flex flex-col items-center justify-center bg-navy-950 p-8 text-center">
                  <Sparkles className="w-12 h-12 text-teal-accent mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                </div>
              )}

              {/* Floating Live Badge on Image */}
              <div className="absolute top-5 right-5 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-white group-hover:border-teal-accent group-hover:text-teal-accent transition-all duration-300 shadow-xl">
                <span>View Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ) : !imgError ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImgError(true)}
              className="w-full h-auto max-h-[640px] object-cover object-top"
            />
          ) : (
            <div className="w-full h-96 flex flex-col items-center justify-center bg-navy-950 p-8 text-center">
              <Sparkles className="w-12 h-12 text-teal-accent mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
            </div>
          )}
        </div>

        {/* Technical Architecture & Key Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-3xl p-8 sm:p-10 bg-[#091020]/90 border border-white/10 backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="w-5 h-5 text-teal-accent" />
              <h3 className="text-xl font-bold font-display text-white">
                Technologies & Stack
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-slate-200"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl p-8 sm:p-10 bg-[#091020]/90 border border-white/10 backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-6">
              <Layers className="w-5 h-5 text-cyan-accent" />
              <h3 className="text-xl font-bold font-display text-white">
                Key Features Delivered
              </h3>
            </div>
            <ul className="space-y-3.5">
              {project.keyFeatures.map((feat) => (
                <li key={feat} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-300 font-medium">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-between mb-16">
          <Link
            to={`/work/${prevProject.slug}`}
            className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-xs font-medium text-slate-300 hidden sm:inline">{prevProject.title}</span>
          </Link>

          <Link
            to={`/work/${nextProject.slug}`}
            className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
          >
            <span className="text-xs font-medium text-slate-300 hidden sm:inline">{nextProject.title}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl p-10 sm:p-14 bg-gradient-to-r from-navy-900 via-[#0a1329] to-navy-900 border border-teal-accent/30 text-center">
          <h2 className="text-3xl font-bold font-display text-white mb-6">
            Ready to Build a Similar Experience?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Start Your Project
            </Button>
            <Button variant="secondary" size="lg" onClick={openBookModal}>
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
