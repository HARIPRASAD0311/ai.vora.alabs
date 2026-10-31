import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'teal' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconPosition = 'right',
  className,
  children,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full select-none cursor-pointer group focus:outline-none focus:ring-2 focus:ring-teal-accent/50 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses = {
    sm: 'text-xs px-4 py-1.5 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5 font-semibold',
  };

  const variantClasses = {
    primary:
      'bg-white text-navy-950 hover:bg-slate-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.45)] hover:scale-[1.02] active:scale-[0.98]',
    teal:
      'bg-gradient-to-r from-teal-accent to-cyan-accent text-navy-950 hover:shadow-[0_0_30px_rgba(0,245,212,0.5)] hover:scale-[1.02] active:scale-[0.98]',
    secondary:
      'bg-white/[0.07] border border-white/15 text-white hover:bg-white/[0.12] hover:border-white/30 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]',
    outline:
      'border border-teal-accent/30 text-teal-accent hover:border-teal-accent hover:bg-teal-accent/10 hover:shadow-glow-sm',
    ghost:
      'text-slate-300 hover:text-white hover:bg-white/5',
  };

  const combinedClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

