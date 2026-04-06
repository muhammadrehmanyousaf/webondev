'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin, Loader2, Lightbulb, Building2, DollarSign, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useEmailVerification } from '@/hooks/use-email-verification';
import { SOFTWARE_SERVICES, BUDGET_RANGES, PROJECT_TIMELINES } from '@/lib/constants';

const ContactFormSection = () => {
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'email' && emailVerification) {
      clearVerification();
    }
  };

  const handleEmailBlur = useCallback(() => {
    setFocusedField(null);
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
        body: JSON.stringify({ ...formData, formType: 'contact' }),
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

  const contactInfo = [
    { icon: Phone, label: 'Call', value: '+92-310-6803687' },
    { icon: Mail, label: 'Email', value: 'webondev786@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan' },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-[#030712] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 30% 50%, rgba(16,185,129,0.04), transparent 70%)',
        }}
      />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            Get In Touch
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-[1.1]">
            Get Your <span className="gradient-text">Free Quote</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Tell us about your project and we&apos;ll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
          {/* Form - Takes 3 columns */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-6 sm:p-10 text-center"
                >
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-brand-400" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-slate-400 mb-5 text-sm sm:text-base">We&apos;ll be in touch within 24 hours.</p>
                  <Button
                    type="button"
                    onClick={() => setSubmitStatus('idle')}
                    variant="outline"
                    className="border-white/[0.1] text-white hover:bg-white/[0.05]"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="space-y-4 sm:space-y-5">
                    {/* Name & Email Row */}
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="relative">
                        <label
                          htmlFor="contact-name"
                          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                            focusedField === 'name' || formData.name
                              ? 'top-2 text-xs text-brand-400'
                              : 'top-1/2 -translate-y-1/2 text-slate-500'
                          }`}
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          aria-label="Your name"
                          className="w-full pt-6 pb-3 px-4 bg-white/[0.02] border border-white/[0.08] rounded-xl text-white focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30 outline-none transition-all"
                        />
                      </div>
                      <div className="relative">
                        <label
                          htmlFor="contact-email"
                          className={`absolute left-4 transition-all duration-200 pointer-events-none z-10 ${
                            focusedField === 'email' || formData.email
                              ? 'top-2 text-xs text-brand-400'
                              : 'top-1/2 -translate-y-1/2 text-slate-500'
                          }`}
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={handleEmailBlur}
                          required
                          aria-label="Email address"
                          className={`w-full pt-6 pb-3 px-4 pr-10 bg-white/[0.02] border rounded-xl text-white focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30 outline-none transition-all ${
                            emailTouched && emailVerification?.isValid
                              ? 'border-green-500/50'
                              : emailTouched && emailVerification && !emailVerification.isValid
                                ? 'border-red-500/50'
                                : 'border-white/[0.08]'
                          }`}
                        />
                        {/* Email verification status icon */}
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <AnimatePresence mode="wait">
                            {isVerifyingEmail && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                              >
                                <Loader2 className="w-4 h-4 text-brand-400 animate-spin" />
                              </motion.div>
                            )}
                            {!isVerifyingEmail && emailTouched && emailVerification?.isValid && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                              >
                                <CheckCircle className="w-4 h-4 text-green-400" />
                              </motion.div>
                            )}
                            {!isVerifyingEmail && emailTouched && emailVerification && !emailVerification.isValid && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                              >
                                <AlertCircle className="w-4 h-4 text-red-400" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        {/* Email verification feedback */}
                        <AnimatePresence>
                          {emailTouched && emailVerification && !emailVerification.isValid && (
                            <motion.div
                              initial={{ opacity: 0, y: -5, height: 0 }}
                              animate={{ opacity: 1, y: 0, height: 'auto' }}
                              exit={{ opacity: 0, y: -5, height: 0 }}
                              className="mt-2"
                            >
                              {emailVerification.suggestion ? (
                                <div className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                                  <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                  <div className="flex-1 min-w-0">
                                    <p className="text-xs text-amber-200">{emailVerification.message}</p>
                                    <button
                                      type="button"
                                      onClick={handleApplySuggestion}
                                      className="mt-1 text-xs font-medium text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
                                    >
                                      Use {emailVerification.suggestion}
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <div className="flex items-center gap-2 text-red-400">
                                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                                  <p className="text-xs">{emailVerification.message}</p>
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Phone & Company Row */}
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="relative">
                        <label
                          htmlFor="contact-phone"
                          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                            focusedField === 'phone' || formData.phone
                              ? 'top-2 text-xs text-brand-400'
                              : 'top-1/2 -translate-y-1/2 text-slate-500'
                          }`}
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          aria-label="Phone number"
                          className="w-full pt-6 pb-3 px-4 bg-white/[0.02] border border-white/[0.08] rounded-xl text-white focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30 outline-none transition-all"
                        />
                      </div>
                      <div className="relative">
                        <label
                          htmlFor="contact-company"
                          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                            focusedField === 'company' || formData.company
                              ? 'top-2 text-xs text-brand-400'
                              : 'top-1/2 -translate-y-1/2 text-slate-500'
                          }`}
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="contact-company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField(null)}
                          aria-label="Company name"
                          className="w-full pt-6 pb-3 px-4 bg-white/[0.02] border border-white/[0.08] rounded-xl text-white focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div className="relative">
                      <label htmlFor="contact-service" className="absolute left-4 top-2 text-xs text-brand-400 pointer-events-none">
                        Service Required *
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        aria-label="Service required"
                        className="w-full pt-6 pb-3 px-4 bg-white/[0.02] border border-white/[0.08] rounded-xl text-white focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#0a0f1a]">Select a service</option>
                        {SOFTWARE_SERVICES.map((service) => (
                          <option key={service} value={service} className="bg-[#0a0f1a]">{service}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {/* Budget & Timeline Row */}
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="relative">
                        <label htmlFor="contact-budget" className="absolute left-4 top-2 text-xs text-brand-400 pointer-events-none">
                          Budget Range
                        </label>
                        <select
                          id="contact-budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          aria-label="Budget range"
                          className="w-full pt-6 pb-3 px-4 bg-white/[0.02] border border-white/[0.08] rounded-xl text-white focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30 outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-[#0a0f1a]">Select budget</option>
                          {BUDGET_RANGES.map((b) => (
                            <option key={b} value={b} className="bg-[#0a0f1a]">{b}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      <div className="relative">
                        <label htmlFor="contact-timeline" className="absolute left-4 top-2 text-xs text-brand-400 pointer-events-none">
                          Project Timeline
                        </label>
                        <select
                          id="contact-timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          aria-label="Project timeline"
                          className="w-full pt-6 pb-3 px-4 bg-white/[0.02] border border-white/[0.08] rounded-xl text-white focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30 outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-[#0a0f1a]">Select timeline</option>
                          {PROJECT_TIMELINES.map((t) => (
                            <option key={t} value={t} className="bg-[#0a0f1a]">{t}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <label
                        htmlFor="contact-message"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === 'message' || formData.message
                            ? 'top-2 text-xs text-brand-400'
                            : 'top-4 text-slate-500'
                        }`}
                      >
                        Tell us about your project *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={4}
                        aria-label="Project details"
                        className="w-full pt-7 pb-3 px-4 bg-white/[0.02] border border-white/[0.08] rounded-xl text-white focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30 outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Error Message */}
                    <AnimatePresence>
                      {submitStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2 text-red-400 text-sm"
                        >
                          <AlertCircle className="w-4 h-4" />
                          <span>Something went wrong. Please try again.</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting || isVerifyingEmail}
                      variant="default"
                      size="lg"
                      className="w-full rounded-xl h-12 sm:h-14 text-base font-semibold"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Get Free Quote
                        </span>
                      )}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Info - Takes 2 columns */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div
              className="bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 h-full"
              style={{
                background: 'linear-gradient(135deg, rgba(16,185,129,0.04) 0%, rgba(6,182,212,0.02) 100%)',
              }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-5 sm:mb-6">Contact Information</h3>

              <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 sm:gap-4">
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                    >
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wider">{item.label}</p>
                      <p className="text-white font-medium text-sm sm:text-base">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Benefits */}
              <div className="pt-5 sm:pt-6 border-t border-white/[0.06]">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 sm:mb-4">What You Get</h4>
                <div className="space-y-2.5 sm:space-y-3">
                  {['Free consultation call', 'Detailed project quote', 'Response within 24 hours'].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 sm:gap-3 text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
