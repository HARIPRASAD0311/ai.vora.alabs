import React from 'react';
import { PROJECTS } from '../../data/projects';
import { SectionHeading } from '../common/SectionHeading';
import { DepthCarousel } from './DepthCarousel';
import { Button } from '../common/Button';
import { LayoutGrid } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#060a14] border-t border-b border-white/[0.06] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-teal-accent/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[550px] h-[550px] bg-cyan-accent/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading — NO introductory paragraph */}
        <SectionHeading
          badge="Selected Projects"
          title="Selected Projects"
          className="mb-8 sm:mb-12 text-center"
        />

        {/* 3D Depth Carousel Showcase */}
        <DepthCarousel projects={PROJECTS} />

        {/* View All Projects CTA */}
        <div className="mt-14 sm:mt-16 text-center">
          <Button
            to="/work"
            variant="secondary"
            size="lg"
            icon={<LayoutGrid className="w-4 h-4" />}
          >
            Explore All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
