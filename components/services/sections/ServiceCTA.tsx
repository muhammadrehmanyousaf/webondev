'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Phone, Mail, MessageSquare, Calendar, CheckCircle,
  Rocket, User, Building2, DollarSign, Timer, Zap, MessageCircle,
  Send, Loader2, AlertCircle, Lightbulb, X, Shield, Clock,
} from 'lucide-react';
import { useEmailVerification } from '@/hooks/use-email-verification';
import { SOFTWARE_SERVICES, BUDGET_RANGES, PROJECT_TIMELINES } from '@/lib/constants';

// =============================================================================
// SERVICE CTA - World-class CTA with popup booking modal
// =============================================================================

interface ServiceCTAProps {
  data?: import('./index').ServiceData;
  headline?: string;
  subheadline?: string;
  description?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  trustPoints?: string[];
  phone?: string;
  email?: string;
  city?: string;
  state?: string;
  country?: string;
  serviceName?: string;
}

const inputClasses = 'w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/30 text-white placeholder:text-slate-500 transition-all duration-200 text-sm';
const labelClasses = 'block text-xs font-medium text-slate-400 mb-1.5';

const ServiceCTA: React.FC<ServiceCTAProps> = (props) => {
  const {
    data,
    headline: propHeadline = 'Ready to Transform Your Business?',
    subheadline = "Let's build something amazing together",
    description = 'Get a free consultation and project estimate. No commitment required.',
    primaryCtaText = 'Start Your Project',
    secondaryCtaText = 'Schedule a Call',
    trustPoints = [
      'Free consultation',
      'No hidden fees',
      '24-hour response',
      '100% satisfaction guarantee',
    ],
    phone = '+92-310-6803687',
    email = 'webondev786@gmail.com',
    city,
    state,
    country,
    serviceName: propServiceName,
  } = props;

  const serviceName = data?.name || propServiceName;
  const locationLabel = city || state || country || '';
  const locationHeadline = locationLabel && serviceName
    ? `Ready for ${serviceName} in ${locationLabel}?`
    : propHeadline;

  // Modal + form state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailTouched, setEmailTouched] = useState(false);

  const {
    isVerifying: isVerifyingEmail,
    verificationResult: emailVerification,
    verifyEmail,
    clearVerification,
    applySuggestion,
  } = useEmailVerification();

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '',
    service: serviceName || '', budget: '', timeline: '', message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'email' && emailVerification) clearVerification();
  };

  const handleEmailBlur = useCallback(() => {
    setEmailTouched(true);
    if (formData.email && formData.email.length >= 5) verifyEmail(formData.email);
  }, [formData.email, verifyEmail]);

  const handleApplySuggestion = useCallback(() => {
    const suggestion = applySuggestion();
    if (suggestion) {
      setFormData(prev => ({ ...prev, email: suggestion }));
      setTimeout(() => verifyEmail(suggestion), 100);
    }
  }, [applySuggestion, verifyEmail]);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSubmitStatus('idle');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!emailVerification?.isValid) {
      const result = await verifyEmail(formData.email);
      if (!result.isValid) {
        setEmailTouched(true);
        return;
      }
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formType: 'service-cta',
          source: `Service CTA - ${serviceName || 'General'}${locationLabel ? ` (${locationLabel})` : ''}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', service: serviceName || '', budget: '', timeline: '', message: '' });
        setEmailTouched(false);
        clearVerification();
      } else {
        throw new Error('Failed');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Listen for openBookingModal from ANY section on the page
  useEffect(() => {
    window.addEventListener('openBookingModal', openModal);
    return () => window.removeEventListener('openBookingModal', openModal);
  }, [openModal]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) closeModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen, closeModal]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen]);

  return (
    <>
      {/* ================================================================ */}
      {/* CTA Section                                                      */}
      {/* ================================================================ */}
      <section className="py-20 sm:py-24 lg:py-32 bg-[#030712] relative overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(16,185,129,0.08), transparent 60%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 50% at 80% 80%, rgba(6,182,212,0.05), transparent 60%)' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-8"
            >
              <Rocket className="w-4 h-4" />
              Let&apos;s Get Started
            </motion.span>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-bold mb-6 leading-[1.15] tracking-tight">
              <span className="text-white">{locationHeadline.split(' ').slice(0, -1).join(' ')} </span>
              <span className="gradient-text">{locationHeadline.split(' ').slice(-1)}</span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl text-emerald-400/80 font-medium mb-4">
              {subheadline}
            </p>

            {/* Description */}
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                type="button"
                onClick={openModal}
                className="group px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30"
              >
                {primaryCtaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={openModal}
                className="px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 bg-white/[0.04] text-white hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15]"
              >
                <Calendar className="w-5 h-5" />
                {secondaryCtaText}
              </button>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/[0.04] via-transparent to-cyan-500/[0.04]" />
              <div className="relative flex flex-wrap items-center justify-center gap-8 py-6 px-8">
                <a href={`tel:${phone}`} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-emerald-500/20 transition-colors">
                    <Phone className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-slate-600 uppercase tracking-wider">Call us</p>
                    <p className="text-sm font-medium">{phone}</p>
                  </div>
                </a>

                <a href={`mailto:${email}`} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-emerald-500/20 transition-colors">
                    <Mail className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-slate-600 uppercase tracking-wider">Email us</p>
                    <p className="text-sm font-medium">{email}</p>
                  </div>
                </a>

                <a href="https://wa.me/923106803687" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-emerald-500/20 transition-colors">
                    <MessageSquare className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-slate-600 uppercase tracking-wider">WhatsApp</p>
                    <p className="text-sm font-medium">Chat Now</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* Booking Modal Popup                                              */}
      {/* ================================================================ */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0A0F1E] rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/50"
              >
                {/* Modal Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between p-5 sm:p-6 border-b border-white/[0.06] bg-[#0A0F1E] rounded-t-2xl">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.1))' }}
                    >
                      <Calendar className="w-5 h-5 text-brand-400" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white">Get Your Free Quote</h2>
                      <p className="text-xs text-slate-500">No commitment required</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={closeModal}
                    aria-label="Close modal"
                    className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-5 sm:p-6">
                  <AnimatePresence mode="wait">
                    {submitStatus === 'success' ? (
                      <motion.div
                        key="success"
                        className="text-center py-8"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                      >
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                          style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.1))' }}
                        >
                          <CheckCircle className="w-8 h-8 text-brand-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                        <p className="text-slate-400 mb-1 text-sm">Your message has been sent successfully.</p>
                        <p className="text-slate-500 text-xs mb-6">We&apos;ll get back to you within 24 hours.</p>
                        <button
                          type="button"
                          onClick={closeModal}
                          className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-sm hover:from-emerald-400 hover:to-teal-400 transition-all"
                        >
                          Close
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {/* Name + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="modal-cta-name" className={labelClasses}>
                              <User className="w-3.5 h-3.5 inline mr-1 text-brand-400" />
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="modal-cta-name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className={inputClasses}
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label htmlFor="modal-cta-email" className={labelClasses}>
                              <Mail className="w-3.5 h-3.5 inline mr-1 text-brand-400" />
                              Email *
                            </label>
                            <div className="relative">
                              <input
                                type="email"
                                id="modal-cta-email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                onBlur={handleEmailBlur}
                                required
                                className={`${inputClasses} pr-10 ${
                                  emailTouched && emailVerification?.isValid
                                    ? 'border-green-500/50'
                                    : emailTouched && emailVerification && !emailVerification.isValid
                                      ? 'border-red-500/50'
                                      : ''
                                }`}
                                placeholder="your@email.com"
                              />
                              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                <AnimatePresence mode="wait">
                                  {isVerifyingEmail && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                      <Loader2 className="w-4 h-4 text-brand-400 animate-spin" />
                                    </motion.div>
                                  )}
                                  {!isVerifyingEmail && emailTouched && emailVerification?.isValid && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                      <CheckCircle className="w-4 h-4 text-green-400" />
                                    </motion.div>
                                  )}
                                  {!isVerifyingEmail && emailTouched && emailVerification && !emailVerification.isValid && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                      <AlertCircle className="w-4 h-4 text-red-400" />
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                            <AnimatePresence>
                              {emailTouched && emailVerification && !emailVerification.isValid && (
                                <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="mt-2">
                                  {emailVerification.suggestion ? (
                                    <div className="flex items-start gap-2 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                                      <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                      <div className="flex-1">
                                        <p className="text-xs text-amber-200">{emailVerification.message}</p>
                                        <button type="button" onClick={handleApplySuggestion} className="mt-1 text-xs font-medium text-amber-400 hover:text-amber-300 underline">
                                          Use {emailVerification.suggestion}
                                        </button>
                                      </div>
                                    </div>
                                  ) : (
                                    <p className="text-xs text-red-400 flex items-center gap-1.5">
                                      <AlertCircle className="w-3.5 h-3.5" />
                                      {emailVerification.message}
                                    </p>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        {/* Phone + Company */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="modal-cta-phone" className={labelClasses}>
                              <Phone className="w-3.5 h-3.5 inline mr-1 text-brand-400" />
                              Phone
                            </label>
                            <input
                              type="tel"
                              id="modal-cta-phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className={inputClasses}
                              placeholder="Your phone"
                            />
                          </div>
                          <div>
                            <label htmlFor="modal-cta-company" className={labelClasses}>
                              <Building2 className="w-3.5 h-3.5 inline mr-1 text-brand-400" />
                              Company
                            </label>
                            <input
                              type="text"
                              id="modal-cta-company"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              className={inputClasses}
                              placeholder="Your company"
                            />
                          </div>
                        </div>

                        {/* Service */}
                        <div>
                          <label htmlFor="modal-cta-service" className={labelClasses}>
                            <Zap className="w-3.5 h-3.5 inline mr-1 text-brand-400" />
                            Service *
                          </label>
                          <select
                            id="modal-cta-service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            required
                            className={inputClasses}
                          >
                            <option value="" className="bg-[#0A0F1E]">Select service</option>
                            {SOFTWARE_SERVICES.map((s) => (
                              <option key={s} value={s} className="bg-[#0A0F1E]">{s}</option>
                            ))}
                          </select>
                        </div>

                        {/* Budget + Timeline */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="modal-cta-budget" className={labelClasses}>
                              <DollarSign className="w-3.5 h-3.5 inline mr-1 text-brand-400" />
                              Budget Range
                            </label>
                            <select
                              id="modal-cta-budget"
                              name="budget"
                              value={formData.budget}
                              onChange={handleInputChange}
                              className={inputClasses}
                            >
                              <option value="" className="bg-[#0A0F1E]">Select budget</option>
                              {BUDGET_RANGES.map((b) => (
                                <option key={b} value={b} className="bg-[#0A0F1E]">{b}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label htmlFor="modal-cta-timeline" className={labelClasses}>
                              <Timer className="w-3.5 h-3.5 inline mr-1 text-brand-400" />
                              Timeline
                            </label>
                            <select
                              id="modal-cta-timeline"
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleInputChange}
                              className={inputClasses}
                            >
                              <option value="" className="bg-[#0A0F1E]">Select timeline</option>
                              {PROJECT_TIMELINES.map((t) => (
                                <option key={t} value={t} className="bg-[#0A0F1E]">{t}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="modal-cta-message" className={labelClasses}>
                            <MessageCircle className="w-3.5 h-3.5 inline mr-1 text-brand-400" />
                            Project Details *
                          </label>
                          <textarea
                            id="modal-cta-message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={3}
                            className={inputClasses}
                            placeholder="Tell us about your project..."
                          />
                        </div>

                        {/* Error */}
                        <AnimatePresence>
                          {submitStatus === 'error' && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="flex items-center gap-2 text-red-400 text-xs"
                            >
                              <AlertCircle className="w-4 h-4" />
                              <span>Something went wrong. Please try again.</span>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={isSubmitting || isVerifyingEmail}
                          className="w-full py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-emerald-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Send Message
                            </>
                          )}
                        </button>

                        {/* Trust footer */}
                        <div className="flex items-center justify-center gap-4 pt-2 text-sm text-slate-500">
                          <div className="flex items-center gap-1.5">
                            <Shield className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-xs">100% Secure</span>
                          </div>
                          <div className="w-px h-3 bg-slate-700" />
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-xs">24h Response</span>
                          </div>
                          <div className="w-px h-3 bg-slate-700" />
                          <div className="flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-xs">No Spam</span>
                          </div>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceCTA;
