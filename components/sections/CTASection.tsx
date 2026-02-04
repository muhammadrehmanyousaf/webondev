'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, MessageCircle, Calendar, Phone, Clock, User, Mail, Building2, DollarSign, Timer,
  Zap, CheckCircle2, Check, X, Send, Loader2, AlertCircle, CheckCircle, Lightbulb
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useEmailVerification } from '@/hooks/use-email-verification';
import { SOFTWARE_SERVICES, BUDGET_RANGES, PROJECT_TIMELINES } from '@/lib/constants';

// =============================================================================
// CTA SECTION
// =============================================================================

const CTASection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailTouched, setEmailTouched] = useState(false);
  const { toast } = useToast();

  // Email verification
  const {
    isVerifying: isVerifyingEmail,
    verificationResult: emailVerification,
    verifyEmail,
    clearVerification,
    applySuggestion,
  } = useEmailVerification();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'email' && emailVerification) {
      clearVerification();
    }
  };

  const handleEmailBlur = useCallback(() => {
    setEmailTouched(true);
    if (formData.email && formData.email.length >= 5) {
      verifyEmail(formData.email);
    }
  }, [formData.email, verifyEmail]);

  const handleApplySuggestion = useCallback(() => {
    const suggestion = applySuggestion();
    if (suggestion) {
      setFormData(prev => ({ ...prev, email: suggestion }));
      setTimeout(() => verifyEmail(suggestion), 100);
    }
  }, [applySuggestion, verifyEmail]);

  const handleEmailClick = () => {
    window.open('mailto:webondev786@gmail.com?subject=Project Inquiry');
  };

  const handlePhoneClick = () => {
    window.open('tel:+923106803687');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verify email before submission if not already verified
    if (!emailVerification?.isValid) {
      const result = await verifyEmail(formData.email);
      if (!result.isValid) {
        setEmailTouched(true);
        toast({
          title: "Invalid Email",
          description: result.message,
          variant: "destructive",
        });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'booking-modal' }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', timeline: '', message: '' });
        setEmailTouched(false);
        clearVerification();
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
      } else {
        throw new Error('Failed');
      }
    } catch {
      setSubmitStatus('error');
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
    setSubmitStatus('idle');
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isBookingModalOpen) {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isBookingModalOpen]);

  useEffect(() => {
    const handleOpenBookingModal = () => {
      setIsBookingModalOpen(true);
    };
    window.addEventListener('openBookingModal', handleOpenBookingModal);
    return () => window.removeEventListener('openBookingModal', handleOpenBookingModal);
  }, []);

  const inputClasses = "w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/30 text-white placeholder:text-slate-500 transition-all duration-200 text-sm";
  const labelClasses = "block text-xs font-medium text-slate-400 mb-1.5";

  return (
    <section id="book-meeting" className="relative py-12 sm:py-16 lg:py-24 bg-[#030712] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(16,185,129,0.08), transparent 70%)',
        }}
      />
      <div className="grain absolute inset-0" />

      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            Get Started
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-[1.1]">
            Let&apos;s build something{' '}
            <span className="gradient-text">great together</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-6 sm:mb-8">
            Get started with a free consultation. We&apos;ll help you find the best solution for your business.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              onClick={handleEmailClick}
              size="xl"
              className="w-full sm:w-auto rounded-full px-6 sm:px-8 lg:px-10 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
            >
              <span className="flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="w-full sm:w-auto rounded-full px-6 sm:px-8 lg:px-10 border-white/10 hover:border-white/20 hover:bg-white/[0.03]"
            >
              <Link href="/portfolio" className="flex items-center justify-center gap-2">
                View Our Work
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
          {/* Call */}
          <motion.button
            onClick={handlePhoneClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="group text-left"
          >
            <div className="relative h-full p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-5"
                style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-brand-400 transition-colors duration-200">Call Us</h3>
              <p className="text-slate-500 mb-2 sm:mb-3 text-xs sm:text-sm">Speak directly with our experts</p>
              <span className="text-brand-400 font-semibold text-sm flex items-center gap-2">
                +92 310 6803687
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </span>
            </div>
          </motion.button>

          {/* Email */}
          <motion.button
            onClick={handleEmailClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            viewport={{ once: true }}
            className="group text-left"
          >
            <div className="relative h-full p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-5"
                style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.1), rgba(16,185,129,0.05))' }}
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-brand-400 transition-colors duration-200">Email Us</h3>
              <p className="text-slate-500 mb-2 sm:mb-3 text-xs sm:text-sm">Get detailed project information</p>
              <span className="text-brand-400 font-semibold text-sm break-all">
                webondev786@gmail.com
              </span>
            </div>
          </motion.button>

          {/* Book Meeting */}
          <motion.button
            onClick={() => setIsBookingModalOpen(true)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16 }}
            viewport={{ once: true }}
            className="group text-left"
          >
            <div className="relative h-full p-5 sm:p-6 rounded-xl sm:rounded-2xl gradient-border">
              <div className="absolute inset-[1px] rounded-xl sm:rounded-2xl bg-[#060B18]" />
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-5"
                  style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.1))' }}
                >
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-brand-400 transition-colors duration-200">Book a Meeting</h3>
                <p className="text-slate-500 mb-2 sm:mb-3 text-xs sm:text-sm">Schedule a free consultation</p>
                <span className="text-brand-400 font-semibold text-sm flex items-center gap-2">
                  Book Now
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </span>
              </div>
            </div>
          </motion.button>
        </div>

        {/* Benefits Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {[
            { icon: Zap, text: 'Free Consultation' },
            { icon: Clock, text: '24/7 Support' },
            { icon: CheckCircle2, text: '100% Satisfaction' },
          ].map((benefit) => (
            <div key={benefit.text} className="flex items-center gap-2.5">
              <benefit.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-400" />
              <span className="text-xs sm:text-sm text-slate-400 font-medium">{benefit.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={handleCloseModal}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0A0F1E] rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/50"
              >
                {/* Modal Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between p-5 sm:p-6 border-b border-white/[0.06] bg-[#0A0F1E] rounded-t-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.1))' }}
                    >
                      <Calendar className="w-5 h-5 text-brand-400" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white">Book a Meeting</h2>
                      <p className="text-xs text-slate-500">Free consultation</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCloseModal}
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
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                          style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.1))' }}
                        >
                          <Check className="w-8 h-8 text-brand-400" strokeWidth={3} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                        <p className="text-slate-400 mb-1 text-sm">Your message has been sent successfully.</p>
                        <p className="text-slate-500 text-xs mb-6">We&apos;ll get back to you within 24 hours.</p>
                        <Button onClick={handleCloseModal} className="rounded-full px-8">
                          Close
                        </Button>
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="modal-name" className={labelClasses}>
                              <User className="w-3.5 h-3.5 inline mr-1 text-brand-400" />
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="modal-name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className={inputClasses}
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label htmlFor="modal-email" className={labelClasses}>
                              <Mail className="w-3.5 h-3.5 inline mr-1 text-brand-400" />
                              Email *
                            </label>
                            <div className="relative">
                              <input
                                type="email"
                                id="modal-email"
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

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="modal-phone" className={labelClasses}>
                              <Phone className="w-3.5 h-3.5 inline mr-1 text-brand-400" />
                              Phone
                            </label>
                            <input
                              type="tel"
                              id="modal-phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className={inputClasses}
                              placeholder="Your phone"
                            />
                          </div>
                          <div>
                            <label htmlFor="modal-company" className={labelClasses}>
                              <Building2 className="w-3.5 h-3.5 inline mr-1 text-brand-400" />
                              Company
                            </label>
                            <input
                              type="text"
                              id="modal-company"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              className={inputClasses}
                              placeholder="Your company"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="modal-service" className={labelClasses}>
                            <Zap className="w-3.5 h-3.5 inline mr-1 text-brand-400" />
                            Service *
                          </label>
                          <select
                            id="modal-service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            required
                            className={inputClasses}
                          >
                            <option value="" className="bg-[#0A0F1E]">Select service</option>
                            {SOFTWARE_SERVICES.map((service) => (
                              <option key={service} value={service} className="bg-[#0A0F1E]">{service}</option>
                            ))}
                          </select>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="modal-budget" className={labelClasses}>
                              <DollarSign className="w-3.5 h-3.5 inline mr-1 text-brand-400" />
                              Budget Range
                            </label>
                            <select
                              id="modal-budget"
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
                            <label htmlFor="modal-timeline" className={labelClasses}>
                              <Timer className="w-3.5 h-3.5 inline mr-1 text-brand-400" />
                              Timeline
                            </label>
                            <select
                              id="modal-timeline"
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

                        <div>
                          <label htmlFor="modal-message" className={labelClasses}>
                            <MessageCircle className="w-3.5 h-3.5 inline mr-1 text-brand-400" />
                            Project Details *
                          </label>
                          <textarea
                            id="modal-message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={3}
                            className={inputClasses}
                            placeholder="Tell us about your project..."
                          />
                        </div>

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

                        <Button
                          type="submit"
                          disabled={isSubmitting || isVerifyingEmail}
                          size="lg"
                          className="w-full rounded-full"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center justify-center gap-2">
                              <Send className="w-4 h-4" />
                              Send Message
                            </span>
                          )}
                        </Button>

                        <p className="text-center text-slate-600 text-[11px]">
                          We&apos;ll respond within 24 hours. Your information is secure.
                        </p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CTASection;
