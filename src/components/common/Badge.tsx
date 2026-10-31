import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'teal' | 'cyan' | 'slate';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  icon,
  variant = 'teal',
  className,
}) => {
  const variantStyles = {
    teal: 'bg-teal-950/60 border-teal-accent/30 text-teal-accent shadow-[0_0_15px_-3px_rgba(0,245,212,0.25)]',
    cyan: 'bg-cyan-950/60 border-cyan-400/30 text-cyan-300 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)]',
    slate: 'bg-slate-900/60 border-white/15 text-slate-300',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border backdrop-blur-md',
        variantStyles[variant],
        className
      )}
    >
      {icon ? (
        <span>{icon}</span>
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-teal-accent animate-pulse" />
      )}
      <span>{children}</span>
    </div>
  );
};

