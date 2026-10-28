'use client';

import { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Commercial Film',
    budget: '₹25,000–₹50,000',
    details: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'demo-notice'

  const budgetOptions = [
    'Under ₹10,000',
    '₹10,000–₹25,000',
    '₹25,000–₹50,000',
    '₹50,000+',
  ];

  const projectTypes = [
    'Commercial Film',
    'Social Media / Reels Campaign',
    'Music Video',
    'Brand Documentary',
    'Motion & VFX Post-Production',
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.details.trim()) errs.details = 'Please briefly describe your project';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');

    // Simulate clean submission handling in Demo Mode
    setTimeout(() => {
      setStatus('demo-notice');
    }, 800);
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: 'Commercial Film',
      budget: '₹25,000–₹50,000',
      details: '',
    });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-secondary-bg overflow-hidden border-t border-border-gray/50">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-neon-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading, Direct CTAs & Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-gray bg-card-bg text-neon-red text-xs font-mono uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-neon-red animate-pulse" />
                <span>COMMISSION A PROJECT</span>
              </div>

              <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tighter uppercase text-white leading-tight">
                GOT A FRAME
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red via-rose-500 to-accent-orange">
                  IN MIND?
                </span>
              </h2>

              <p className="mt-4 text-secondary-text text-sm sm:text-base leading-relaxed">
                Tell us what you&apos;re building. Let&apos;s create something worth watching. We
                review all creative briefs within 24 business hours.
              </p>
            </div>

            {/* Direct Contact CTAs */}
            <div className="space-y-4 pt-4 border-t border-border-gray/50">
              <div className="text-xs font-mono uppercase tracking-widest text-secondary-text">
                DIRECT CHANNELS
              </div>

              {/* Email CTA */}
              <a
                href={`mailto:${SITE_CONFIG.contact.displayEmail}`}
                className="flex items-center justify-between p-4 rounded-xl bg-card-bg border border-border-gray hover:border-neon-red/80 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-dark-muted flex items-center justify-center text-neon-red">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-secondary-text font-mono">DIRECT INBOX</div>
                    <div className="text-sm font-semibold text-white group-hover:text-neon-red transition-colors">
                      {SITE_CONFIG.contact.displayEmail}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-secondary-text group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* WhatsApp CTA */}
              <a
                href={SITE_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-card-bg border border-border-gray hover:border-neon-green/80 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-dark-muted flex items-center justify-center text-neon-green">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-secondary-text font-mono">WHATSAPP CHAT (DEMO)</div>
                    <div className="text-sm font-semibold text-white group-hover:text-neon-green transition-colors">
                      Connect with Producer
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-secondary-text group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Studio Availability Notice */}
            <div className="p-4 rounded-xl bg-card-bg/60 border border-border-gray/60 text-xs font-mono text-secondary-text">
              <span className="text-neon-green font-bold mr-2">● STATUS:</span>
              {SITE_CONFIG.status}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-card-bg border border-border-gray shadow-2xl">
              {status === 'demo-notice' ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-neon-red/10 border border-neon-red text-neon-red mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-black text-2xl text-white">
                      CREATIVE BRIEF RECEIVED (DEMO MODE)
                    </h3>
                    <p className="text-secondary-text text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong>! This website is running in{' '}
                      <span className="text-neon-red font-mono font-bold">CLIENT DEMO MODE</span>. No backend email API is
                      currently attached.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-secondary-bg border border-border-gray/70 text-xs font-mono text-left max-w-md mx-auto space-y-1 text-secondary-text">
                    <div className="text-white font-bold mb-2">[ SUBMISSION PAYLOAD READY ]</div>
                    <div>• Name: {formData.name}</div>
                    <div>• Email: {formData.email}</div>
                    <div>• Company: {formData.company || 'N/A'}</div>
                    <div>• Project: {formData.projectType}</div>
                    <div>• Budget: {formData.budget}</div>
                  </div>

                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full bg-neon-red text-white text-xs font-mono uppercase tracking-wider font-bold shadow-glow-red hover:bg-red-600 transition-colors"
                  >
                    SUBMIT ANOTHER BRIEF
                  </button>
                </div>
              ) : (
                <form
                  suppressHydrationWarning
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono uppercase tracking-wider text-secondary-text mb-2"
                      >
                        YOUR NAME *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        suppressHydrationWarning
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maya Chen"
                        className={`w-full px-4 py-3 rounded-xl bg-secondary-bg border ${
                          errors.name ? 'border-neon-red' : 'border-border-gray'
                        } text-white placeholder-secondary-text/40 text-sm focus:outline-none focus:border-neon-red transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-neon-red mt-1 font-mono">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono uppercase tracking-wider text-secondary-text mb-2"
                      >
                        EMAIL ADDRESS *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        suppressHydrationWarning
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="maya@brand.com"
                        className={`w-full px-4 py-3 rounded-xl bg-secondary-bg border ${
                          errors.email ? 'border-neon-red' : 'border-border-gray'
                        } text-white placeholder-secondary-text/40 text-sm focus:outline-none focus:border-neon-red transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-neon-red mt-1 font-mono">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-mono uppercase tracking-wider text-secondary-text mb-2"
                    >
                      COMPANY OR BRAND (OPTIONAL)
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      suppressHydrationWarning
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Studio Arc / Independent"
                      className="w-full px-4 py-3 rounded-xl bg-secondary-bg border border-border-gray text-white placeholder-secondary-text/40 text-sm focus:outline-none focus:border-neon-red transition-colors"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label
                      htmlFor="contact-project-type"
                      className="block text-xs font-mono uppercase tracking-wider text-secondary-text mb-2"
                    >
                      PROJECT DISCIPLINE
                    </label>
                    <select
                      id="contact-project-type"
                      name="projectType"
                      suppressHydrationWarning
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary-bg border border-border-gray text-white text-sm focus:outline-none focus:border-neon-red transition-colors cursor-pointer"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-card-bg text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-secondary-text mb-2">
                      ESTIMATED PRODUCTION BUDGET
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {budgetOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          suppressHydrationWarning
                          onClick={() => setFormData({ ...formData, budget: opt })}
                          className={`py-2.5 px-2 rounded-lg text-xs font-mono tracking-tight transition-all border ${
                            formData.budget === opt
                              ? 'bg-neon-red text-white border-neon-red shadow-glow-red font-bold'
                              : 'bg-secondary-bg text-secondary-text border-border-gray hover:text-white hover:border-secondary-text'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label
                      htmlFor="contact-details"
                      className="block text-xs font-mono uppercase tracking-wider text-secondary-text mb-2"
                    >
                      PROJECT BRIEF & TIMELINE *
                    </label>
                    <textarea
                      id="contact-details"
                      name="details"
                      rows={4}
                      suppressHydrationWarning
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Tell us about your visual concept, target audience, deliverables, and timeline..."
                      className={`w-full px-4 py-3 rounded-xl bg-secondary-bg border ${
                        errors.details ? 'border-neon-red' : 'border-border-gray'
                      } text-white placeholder-secondary-text/40 text-sm focus:outline-none focus:border-neon-red transition-colors resize-none`}
                    />
                    {errors.details && (
                      <p className="text-[11px] text-neon-red mt-1 font-mono">{errors.details}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    suppressHydrationWarning
                    disabled={status === 'submitting'}
                    className="w-full py-4 rounded-xl bg-neon-red hover:bg-red-600 disabled:opacity-50 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-glow-red flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <span>TRANSMITTING BRIEF...</span>
                    ) : (
                      <>
                        <span>TRANSMIT BRIEF</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-secondary-text/60">
                    <AlertCircle className="w-3.5 h-3.5 text-secondary-text/50" />
                    <span>Demo Form: Validates locally with clear demo confirmation.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
