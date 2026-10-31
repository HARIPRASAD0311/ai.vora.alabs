import React from 'react';

interface CurvedHorizonGlowProps {
  className?: string;
  intensity?: 'normal' | 'high';
}

export const CurvedHorizonGlow: React.FC<CurvedHorizonGlowProps> = ({
  className = '',
  intensity = 'high',
}) => {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none select-none ${className}`}>
      {/* Intense Ambient Radial Bloom */}
      <div
        className={`absolute left-1/2 -top-12 -translate-x-1/2 w-[90%] max-w-4xl h-48 rounded-[100%] bg-gradient-to-b from-teal-accent/35 via-cyan-accent/20 to-transparent blur-3xl ${
          intensity === 'high' ? 'opacity-90' : 'opacity-60'
        }`}
      />

      {/* Vector Arc */}
      <svg
        viewBox="0 0 1200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-24 sm:max-h-28 overflow-visible"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Main glowing line gradient */}
          <linearGradient id="arcGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="20%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#00f5d4" stopOpacity="1" />
            <stop offset="80%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>

          {/* Diffuse glow underneath curve */}
          <linearGradient id="arcFillGlow" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#00f5d4" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#05070e" stopOpacity="0" />
          </linearGradient>

          <filter id="neonBlur" x="-10%" y="-100%" width="120%" height="300%">
            <feGaussianBlur stdDeviation="6" result="blur1" />
            <feGaussianBlur stdDeviation="2" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Soft fill under arc */}
        <path
          d="M 0,110 Q 600,-20 1200,110 L 1200,120 L 0,120 Z"
          fill="url(#arcFillGlow)"
        />

        {/* Outer neon glow curve */}
        <path
          d="M 0,110 Q 600,-20 1200,110"
          stroke="url(#arcGlow)"
          strokeWidth="3.5"
          filter="url(#neonBlur)"
        />

        {/* Crisp core white-hot highlight curve */}
        <path
          d="M 150,95 Q 600,-15 1050,95"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeOpacity="0.85"
        />
      </svg>
    </div>
  );
};

