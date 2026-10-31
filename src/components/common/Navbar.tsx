import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import { Button } from './Button';
import { BookCallModal } from './BookCallModal';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Monitor scroll for styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 ${
          isScrolled
            ? 'bg-navy-950/80 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="AI VORA LABS Homepage"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl bg-slate-900 border border-teal-accent/30 group-hover:border-teal-accent transition-colors duration-300 overflow-hidden shadow-glow-sm">
              <img
                src="/assets/logo/rellogo.jpeg"
                alt="AI VORA LABS"
                onError={(e) => {
                  // Fallback if needed
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.src.includes('reallogo.jpeg')) {
                    target.src = '/assets/logo/reallogo.jpeg';
                  } else {
                    target.src = '/assets/logo/logo.svg';
                  }
                }}
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold tracking-wider text-base sm:text-lg text-white group-hover:text-teal-accent transition-colors">
                AI VORA <span className="text-teal-accent font-semibold">LABS</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 font-mono hidden sm:inline">
                Technology Partner
              </span>
            </div>
          </Link>

          {/* Center Navigation Links - Floating Pill Container */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-slate-900/60 border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white/10 text-white font-semibold shadow-sm text-teal-accent'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action: Book a Call Button & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => setIsBookModalOpen(true)}
              className="hidden sm:inline-flex"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Book a Call
            </Button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full md:hidden bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 px-4 py-5 rounded-2xl bg-navy-900/95 border border-white/15 backdrop-blur-2xl shadow-2xl space-y-3">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-teal-accent/15 text-teal-accent font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="pt-3 border-t border-white/10">
              <Button
                variant="primary"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsBookModalOpen(true);
                }}
                className="w-full"
                icon={<PhoneCall className="w-4 h-4" />}
              >
                Book a Call
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Book A Call Modal */}
      <BookCallModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
    </>
  );
};

