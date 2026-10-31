import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { DotGridBackground } from '../components/home/DotGridBackground';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { ProjectsSection } from '../components/home/ProjectsSection';
import { ApproachSection } from '../components/home/ApproachSection';
import { ImpactStatsSection } from '../components/home/ImpactStatsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

interface ContextType {
  openBookModal: () => void;
}

export const HomePage: React.FC = () => {
  const { openBookModal } = useOutletContext<ContextType>();

  return (
    <div className="relative overflow-hidden">
      {/* Interactive 3D Dot Grid Background — Activated on Home Page Alone */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <DotGridBackground
          dotColor="#00f5d4"
          dotSize={2.4}
          dotSpacing={32}
          orbitSpeed={1.4}
          impactRadius={150}
          scaleOnHover={2.0}
          enableRevolve={true}
        />
      </div>

      {/* Content Sections */}
      <div className="relative z-10">
        {/* 1. Hero Section */}
        <HeroSection onOpenBookModal={openBookModal} />

        {/* 2. Services Section */}
        <ServicesSection onOpenBookModal={openBookModal} />

        {/* 3. Why Choose AI VORA LABS */}
        <WhyChooseUsSection />

        {/* 4. Selected Projects */}
        <ProjectsSection />

        {/* 5. Our Approach */}
        <ApproachSection />

        {/* 6. Business Impact / Statistics Section */}
        <ImpactStatsSection />

        {/* 7. Client Experiences / Testimonials */}
        <TestimonialsSection />

        {/* 8. Final Call to Action */}
        <FinalCtaSection onOpenBookModal={openBookModal} />
      </div>
    </div>
  );
};
