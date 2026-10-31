import React from 'react';
import { Button } from '../components/common/Button';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 relative pt-32 pb-24 text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-accent/[0.08] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto">
        <span className="text-sm font-mono text-teal-accent uppercase tracking-widest font-semibold block mb-3">
          404 — Page Not Found
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight mb-4">
          Lost in Digital Space
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
          The page you are looking for doesn't exist, has been removed, or moved to a new route.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/" variant="primary" icon={<Home className="w-4 h-4" />}>
            Back to Homepage
          </Button>
          <Button to="/services" variant="secondary" icon={<ArrowLeft className="w-4 h-4" />}>
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
};
