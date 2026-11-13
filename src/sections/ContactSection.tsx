import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { OWNER } from '../data/content';
import { copyToClipboard } from '../lib/utils';
import { Copy, Check, Send, AlertCircle, MapPin, Mail, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  _gotcha: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please provide a subject';
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide your message';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCopyEmail = async () => {
    const ok = await copyToClipboard(OWNER.email);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const fallbackToMailto = () => {
    const subjectParam = encodeURIComponent(`[Portfolio] ${formData.subject}`);
    const bodyParam = encodeURIComponent(
      `Hello Abnish,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:${OWNER.email}?subject=${subjectParam}&body=${bodyParam}`;
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '', _gotcha: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._gotcha) {
      setIsSuccess(true);
      return;
    }
    if (!validate()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
    if (endpoint && endpoint.trim().length > 0 && !endpoint.includes('YOUR_FORM_ID')) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        });
        if (response.ok) {
          setIsSuccess(true);
          setFormData({ name: '', email: '', subject: '', message: '', _gotcha: '' });
          setIsSubmitting(false);
          return;
        }
        throw new Error('Non-200 status');
      } catch {
        fallbackToMailto();
      }
    } else {
      fallbackToMailto();
    }
  };

  return (
    <section id="contact" aria-label="Contact Abnish Kumar" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="08 // GET IN TOUCH"
          title="Let's Build Something Real"
          description="Open to full-stack internships, hackathon collaborations, and interesting software engineering problems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/75 dark:bg-zinc-900/65 backdrop-blur-md space-y-5">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-zinc-400 block">Location</span>
                  <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {OWNER.location}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-cyanaccent-500/10 border border-cyanaccent-500/20 text-cyanaccent-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-mono uppercase text-zinc-400 block">Direct Email</span>
                  <a
                    href={`mailto:${OWNER.email}`}
                    className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-accent-500 break-all"
                  >
                    {OWNER.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-800/70 hover:border-accent-500/40 text-zinc-800 dark:text-zinc-200 transition"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-500">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-accent-500" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/75 dark:bg-zinc-900/65 backdrop-blur-md space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-accent-500 uppercase font-semibold">
                <MessageSquare className="w-4 h-4" />
                <span>Profiles</span>
              </div>
              <div className="grid grid-cols-1 gap-2 text-xs font-mono">
                <a
                  href={OWNER.social.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-white/5 hover:border-accent-500/40 flex justify-between"
                >
                  <span className="text-zinc-500">GitHub</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">@AbnishAIML</span>
                </a>
                <a
                  href={OWNER.social.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-white/5 hover:border-accent-500/40 flex justify-between"
                >
                  <span className="text-zinc-500">LinkedIn</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">ABNISHAIML</span>
                </a>
                <a
                  href={OWNER.social.leetcode}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-white/5 hover:border-accent-500/40 flex justify-between"
                >
                  <span className="text-zinc-500">LeetCode</span>
                  <span className="font-semibold text-amber-500">@ABNISHAIML</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-6 sm:p-8 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/75 dark:bg-zinc-900/65 backdrop-blur-md space-y-5"
            >
              <input
                type="text"
                name="_gotcha"
                value={formData._gotcha}
                onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-500 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Abnish Kumar"
                    className="w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-500 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-zinc-500 mb-1.5">
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Internship / Collaboration / Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-500 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the role, project, or idea..."
                  className="w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 resize-y"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.message}
                  </p>
                )}
              </div>

              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-500">
                  {errorMessage}
                </div>
              )}

              {isSuccess && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                  Message ready! If an email client did not open automatically, please email {OWNER.email}.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-accent-600 hover:bg-accent-700 disabled:opacity-60 text-white shadow-lg shadow-accent-500/25 transition"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

