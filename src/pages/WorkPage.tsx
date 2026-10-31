import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from '../components/common/ProjectCard';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { ArrowRight } from 'lucide-react';

export const WorkPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filterOptions = [
    { label: 'All Projects', value: 'all' },
    { label: 'Websites', value: 'websites' },
    { label: 'Applications', value: 'applications' },
    { label: 'AI Solutions', value: 'ai' },
    { label: 'Automation', value: 'automation' },
    { label: 'Business Management', value: 'business' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.filterCategory === selectedCategory);

  return (
    <div className="relative pt-36 pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-teal-accent/[0.08] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-cyan-accent/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header — Clean & Impactful without paragraph */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <Badge variant="teal" className="mb-6">
            Selected Works
          </Badge>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display text-white tracking-tight leading-[1.1]">
            Real Solutions.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-accent via-cyan-300 to-sky-400">
              Creative Thinking.
            </span>
          </h1>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {filterOptions.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setSelectedCategory(filter.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                selectedCategory === filter.value
                  ? 'bg-white text-navy-950 shadow-[0_0_20px_rgba(255,255,255,0.4)] font-bold scale-105'
                  : 'bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-white/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid — Large Visuals with Titles Only */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 rounded-3xl p-12 bg-[#080d1c] border border-white/10 text-center">
          <h2 className="text-3xl font-bold font-display text-white mb-6">
            Have a Unique Project in Mind?
          </h2>
          <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  );
};
