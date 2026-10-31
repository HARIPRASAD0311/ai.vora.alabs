import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SERVICES } from '../data/services';
import { COMPANY_INFO } from '../data/company';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { ContactFormData } from '../types';
import {
  Mail,
  Phone,
  MessageSquare,
  Linkedin,
  Instagram,
  Twitter,
  Github,
  CheckCircle2,
  Send,
  AlertCircle,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    serviceRequired: preselectedService || 'web-development',
    projectBudget: '$2,500 - $5,000',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const budgetOptions = [
    '< $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    'Flexible / Undetermined',
  ];

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.projectDetails.trim()) {
      errs.projectDetails = 'Please provide a brief description of your project';
    } else if (formData.projectDetails.trim().length < 15) {
      errs.projectDetails = 'Please write at least 15 characters to help us understand your needs';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic validation & processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 900);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      serviceRequired: 'web-development',
      projectBudget: '$2,500 - $5,000',
      projectDetails: '',
    });
  };

  return (
    <div className="relative pt-32 pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-teal-accent/[0.08] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-cyan-accent/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <Badge variant="teal" className="mb-6">
            Start a Conversation
          </Badge>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display text-white tracking-tight leading-[1.1]">
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-accent via-cyan-300 to-sky-400">
              Great Together.
            </span>
          </h1>
        </div>

        {/* Main Grid: Form + Direct Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl p-8 bg-[#091020]/90 border border-white/10 backdrop-blur-xl">
              <h2 className="text-xl font-bold font-display text-white mb-6">
                Direct Contact Channels
              </h2>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-teal-accent/30 flex items-center justify-center text-teal-accent shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-500 font-mono">
                      Project Inquiries & Email
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="text-sm sm:text-base font-medium text-white hover:text-teal-accent transition-colors"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-teal-accent/30 flex items-center justify-center text-teal-accent shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-500 font-mono">
                      Phone & Direct Voice
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-sm sm:text-base font-medium text-white hover:text-teal-accent transition-colors"
                    >
                      {COMPANY_INFO.contact.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-teal-accent/30 flex items-center justify-center text-teal-accent shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-500 font-mono">
                      Instant WhatsApp Chat
                    </span>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm sm:text-base font-medium text-teal-accent hover:underline inline-flex items-center gap-1"
                    >
                      Chat on WhatsApp ({COMPANY_INFO.contact.whatsapp}) <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-teal-accent/30 flex items-center justify-center text-teal-accent shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-500 font-mono">
                      Working Hours
                    </span>
                    <span className="text-sm text-slate-300">
                      {COMPANY_INFO.contact.workingHours}
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Socials Card */}
            <div className="rounded-3xl p-8 bg-[#091020]/90 border border-white/10 backdrop-blur-xl">
              <h3 className="text-base font-bold font-display text-white mb-4">
                Connect on Professional Networks
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={COMPANY_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-white/10 flex items-center gap-3 text-slate-300 hover:text-white hover:border-teal-accent/40 transition-colors text-xs font-medium"
                >
                  <Linkedin className="w-4 h-4 text-teal-accent" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-white/10 flex items-center gap-3 text-slate-300 hover:text-white hover:border-teal-accent/40 transition-colors text-xs font-medium"
                >
                  <Instagram className="w-4 h-4 text-teal-accent" />
                  <span>Instagram</span>
                </a>
                <a
                  href={COMPANY_INFO.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-white/10 flex items-center gap-3 text-slate-300 hover:text-white hover:border-teal-accent/40 transition-colors text-xs font-medium"
                >
                  <Twitter className="w-4 h-4 text-teal-accent" />
                  <span>X / Twitter</span>
                </a>
                <a
                  href={COMPANY_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-white/10 flex items-center gap-3 text-slate-300 hover:text-white hover:border-teal-accent/40 transition-colors text-xs font-medium"
                >
                  <Github className="w-4 h-4 text-teal-accent" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 bg-[#091020]/90 border border-white/10 backdrop-blur-xl relative">
              {submittedData ? (
                <div className="py-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-teal-accent/10 border border-teal-accent/30 flex items-center justify-center text-teal-accent mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white mb-2">
                    Project Enquiry Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-lg mx-auto mb-6 leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{submittedData.fullName}</span>. We have captured your enquiry for{' '}
                    <span className="text-teal-accent font-medium">
                      {SERVICES.find((s) => s.slug === submittedData.serviceRequired)?.title || submittedData.serviceRequired}
                    </span>.
                  </p>

                  <div className="p-4 rounded-2xl bg-navy-950/80 border border-white/10 text-left text-xs text-slate-400 space-y-1.5 max-w-md mx-auto mb-6">
                    <p><strong className="text-slate-200">Email:</strong> {submittedData.email}</p>
                    {submittedData.phone && <p><strong className="text-slate-200">Phone:</strong> {submittedData.phone}</p>}
                    {submittedData.companyName && <p><strong className="text-slate-200">Company:</strong> {submittedData.companyName}</p>}
                    <p><strong className="text-slate-200">Budget Range:</strong> {submittedData.projectBudget}</p>
                    <p className="pt-1 text-[11px] text-teal-accent font-mono border-t border-white/5">
                      ✓ Validation passed. Ready for dispatch to backend API handler.
                    </p>
                  </div>

                  <Button variant="primary" onClick={handleReset}>
                    Send Another Enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="mb-2">
                    <h2 className="text-2xl font-bold font-display text-white">
                      Tell Us About Your Project
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Fill out the form below and we will get back to you within 24 hours with an initial review.
                    </p>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-navy-900/90 border ${
                          errors.fullName ? 'border-rose-500' : 'border-white/10'
                        } text-white text-sm focus:border-teal-accent focus:ring-1 focus:ring-teal-accent outline-none transition-colors`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-navy-900/90 border ${
                          errors.email ? 'border-rose-500' : 'border-white/10'
                        } text-white text-sm focus:border-teal-accent focus:ring-1 focus:ring-teal-accent outline-none transition-colors`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-navy-900/90 border border-white/10 text-white text-sm focus:border-teal-accent focus:ring-1 focus:ring-teal-accent outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Your Company or Studio"
                        className="w-full px-4 py-3 rounded-xl bg-navy-900/90 border border-white/10 text-white text-sm focus:border-teal-accent focus:ring-1 focus:ring-teal-accent outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-navy-900/90 border border-white/10 text-white text-sm focus:border-teal-accent focus:ring-1 focus:ring-teal-accent outline-none transition-colors"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.slug} className="bg-navy-950 text-white">
                          {s.title}
                        </option>
                      ))}
                      <option value="custom" className="bg-navy-950 text-white">
                        Full-Stack / Custom Solution
                      </option>
                    </select>
                  </div>

                  {/* Project Budget (Optional) */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Estimated Project Budget (Optional)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {budgetOptions.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectBudget: budget })}
                          className={`px-3 py-2 rounded-xl text-xs font-medium border text-center transition-all ${
                            formData.projectBudget === budget
                              ? 'bg-teal-accent/20 border-teal-accent text-teal-accent font-semibold shadow-sm'
                              : 'bg-navy-900/60 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Project Details & Goals *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Please describe your project, desired features, goals, or timeline..."
                      className={`w-full px-4 py-3 rounded-xl bg-navy-900/90 border ${
                        errors.projectDetails ? 'border-rose-500' : 'border-white/10'
                      } text-white text-sm focus:border-teal-accent focus:ring-1 focus:ring-teal-accent outline-none transition-colors resize-none`}
                    />
                    {errors.projectDetails && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.projectDetails}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4"
                    icon={<Send className="w-4 h-4" />}
                  >
                    {isSubmitting ? 'Validating & Sending...' : 'Send Project Enquiry'}
                  </Button>

                  <p className="text-[11px] text-slate-500 text-center font-mono mt-3">
                    Submissions are verified with full client-side validation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
