import React, { useState } from 'react';
import { X, CheckCircle2, MessageSquare, Mail, Send } from 'lucide-react';
import { Button } from './Button';
import { SERVICES } from '../../data/services';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookCallModal: React.FC<BookCallModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'web-dev',
    preferredTime: 'morning',
    projectNote: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notificationUrls, setNotificationUrls] = useState<{ whatsapp: string; mailto: string } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceTitle =
      SERVICES.find((s) => s.id === formData.service)?.title || 'Technology Consulting';

    const slotLabel =
      formData.preferredTime === 'morning'
        ? 'Morning (9:00 AM - 12:00 PM)'
        : formData.preferredTime === 'afternoon'
        ? 'Afternoon (12:00 PM - 4:00 PM)'
        : 'Evening (4:00 PM - 7:00 PM)';

    // WhatsApp alert message for +91 9442636873
    const textLines = [
      `*NEW STRATEGY CALL BOOKING — AI VORA LABS*`,
      `--------------------------------`,
      `👤 *Name:* ${formData.name}`,
      `📧 *Email:* ${formData.email}`,
      `📱 *Phone:* ${formData.phone || 'Not provided'}`,
      `🏢 *Company:* ${formData.company || 'Not provided'}`,
      `🛠 *Service:* ${serviceTitle}`,
      `⏰ *Preferred Time Slot:* ${slotLabel}`,
      formData.projectNote ? `📝 *Note:* ${formData.projectNote}` : null,
      `--------------------------------`,
      `📅 *Booked At:* ${new Date().toLocaleString()}`,
    ];
    const encodedText = encodeURIComponent(textLines.filter(Boolean).join('\n'));
    const waUrl = `https://wa.me/919442636873?text=${encodedText}`;

    // Email alert link
    const mailtoSubject = encodeURIComponent(`New Strategy Call Booking: ${formData.name} (${serviceTitle})`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nService: ${serviceTitle}\nPreferred Time Slot: ${slotLabel}\n\nNote:\n${formData.projectNote}`
    );
    const mailUrl = `mailto:ai.vora.labs.team@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setNotificationUrls({ whatsapp: waUrl, mailto: mailUrl });

    // Send payload to backend
    try {
      await fetch('/api/book-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          serviceTitle,
          slotLabel,
        }),
      });
    } catch (err) {
      console.log('[Backend] Dispatched via client handler', err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Open WhatsApp directly
    try {
      window.open(waUrl, '_blank');
    } catch {}
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setNotificationUrls(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-[#0c1324] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden text-slate-100">
        {/* Glow ambient background inside modal */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-teal-accent/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-cyan-accent/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-accent/10 border border-teal-accent/30 flex items-center justify-center text-teal-accent">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-2">
              Consultation Scheduled!
            </h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Thank you, <span className="text-white font-medium">{formData.name}</span>. We have received your booking request for{' '}
              <span className="text-teal-accent">
                {SERVICES.find((s) => s.id === formData.service)?.title || 'Technology Consulting'}
              </span>.
            </p>
            <div className="bg-navy-900/80 border border-white/10 rounded-2xl p-4 text-left text-xs text-slate-400 mb-6 space-y-1.5">
              <p><strong className="text-slate-200">Email:</strong> {formData.email}</p>
              {formData.phone && <p><strong className="text-slate-200">Phone:</strong> {formData.phone}</p>}
              <p><strong className="text-slate-200">Preferred Slot:</strong> {formData.preferredTime.toUpperCase()}</p>
              <p className="pt-2 text-[11px] text-teal-accent font-mono border-t border-white/10 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-teal-accent animate-pulse" />
                Notification routed to WhatsApp (+91 9442636873) & team email.
              </p>
            </div>

            {notificationUrls && (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
                <a
                  href={notificationUrls.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 font-semibold text-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Notify via WhatsApp (+91 9442636873)</span>
                </a>
                <a
                  href={notificationUrls.mailto}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-navy-900 border border-white/15 text-slate-200 hover:text-white hover:border-teal-accent text-xs font-medium transition-colors"
                >
                  <Mail className="w-4 h-4 text-teal-accent" />
                  <span>Email Copy</span>
                </a>
              </div>
            )}

            <Button variant="primary" onClick={handleReset} className="w-full">
              Done
            </Button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-accent mb-1">
                Direct Engineering Consultation
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                Book a Free Strategy Call
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Speak directly with our technical team. 30 minutes, zero sales pressure.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-900/90 border border-white/10 text-white text-sm focus:border-teal-accent focus:ring-1 focus:ring-teal-accent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-900/90 border border-white/10 text-white text-sm focus:border-teal-accent focus:ring-1 focus:ring-teal-accent outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-900/90 border border-white/10 text-white text-sm focus:border-teal-accent focus:ring-1 focus:ring-teal-accent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Company / Project</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-900/90 border border-white/10 text-white text-sm focus:border-teal-accent focus:ring-1 focus:ring-teal-accent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Primary Area of Interest</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-navy-900/90 border border-white/10 text-white text-sm focus:border-teal-accent focus:ring-1 focus:ring-teal-accent outline-none"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id} className="bg-navy-950 text-white">
                      {s.title}
                    </option>
                  ))}
                  <option value="other" className="bg-navy-950 text-white">
                    Full-Stack Digital Partnership / Other
                  </option>
                </select>
              </div>

              {/* Time Preference */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Time Preference</label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-navy-900/90 border border-white/10 text-white text-sm focus:border-teal-accent focus:ring-1 focus:ring-teal-accent outline-none"
                >
                  <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                  <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                  <option value="evening">Evening (4:00 PM - 7:00 PM)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Brief note or requirements (optional)</label>
                <textarea
                  rows={2}
                  value={formData.projectNote}
                  onChange={(e) => setFormData({ ...formData, projectNote: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-navy-900/90 border border-white/10 text-white text-sm focus:border-teal-accent focus:ring-1 focus:ring-teal-accent outline-none resize-none"
                />
              </div>

              <Button
                variant="primary"
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2"
                icon={<Send className="w-4 h-4" />}
              >
                {isSubmitting ? 'Scheduling Consultation...' : 'Confirm Call Booking'}
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
