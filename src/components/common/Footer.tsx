import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../data/company';
import { Mail, Phone, MessageSquare, Linkedin, Instagram, Twitter, Github, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#04060b] border-t border-white/[0.08] text-slate-400 overflow-hidden pt-16 pb-12">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-48 bg-teal-accent/[0.04] blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-8 h-8 rounded-xl bg-slate-900 border border-teal-accent/30 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/logo/rellogo.jpeg"
                  alt="AI VORA LABS"
                  onError={(e) => {
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
              <span className="font-display font-extrabold tracking-wider text-lg text-white">
                AI VORA <span className="text-teal-accent font-semibold">LABS</span>
              </span>
            </Link>

            <p className="text-sm font-medium text-teal-accent tracking-wide">
              "{COMPANY_INFO.tagline}"
            </p>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {COMPANY_INFO.description}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-teal-accent hover:border-teal-accent/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-teal-accent hover:border-teal-accent/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-teal-accent hover:border-teal-accent/40 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-teal-accent hover:border-teal-accent/40 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-200 mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/web-development" className="hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services/app-development" className="hover:text-white transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/services/ai-solutions" className="hover:text-white transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/automation" className="hover:text-white transition-colors">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link to="/services/business-management" className="hover:text-white transition-colors">
                  Business Management
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Placeholders */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-200 mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-slate-500 uppercase tracking-wider">Email</span>
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-slate-500 uppercase tracking-wider">Phone</span>
                  <a
                    href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {COMPANY_INFO.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-slate-500 uppercase tracking-wider">WhatsApp</span>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {COMPANY_INFO.contact.whatsapp} <ArrowUpRight className="w-3 h-3 text-teal-accent" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Engineered with modern full-stack web and AI standards.
          </p>
        </div>
      </div>
    </footer>
  );
};

