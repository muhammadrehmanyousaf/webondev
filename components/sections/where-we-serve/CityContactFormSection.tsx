'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin, Clock, Shield, Award, Loader2, Lightbulb, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useEmailVerification } from '@/hooks/use-email-verification';
import { SOFTWARE_SERVICES, BUDGET_RANGES, PROJECT_TIMELINES } from '@/lib/constants';

// =============================================================================
// CITY CONTACT FORM SECTION - Updated Design Language
// =============================================================================

interface CityContactFormSectionProps {
  cityName: string;
  stateName: string;
  countryName: string;
}

const CityContactFormSection = ({ cityName, stateName, countryName }: CityContactFormSectionProps) => {
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

  const benefits = [
    { icon: Shield, text: 'Local market expertise' },
    { icon: Award, text: 'Proven track record' },
    { icon: Clock, text: '24/7 support' },
    { icon: CheckCircle, text: 'Competitive pricing' }
  ];

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'city-contact',
          location: `${cityName}, ${stateName}, ${countryName}`
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          timeline: '',
          message: ''
        });
        setEmailTouched(false);
        clearVerification();
        toast({
          title: "Success!",
          description: "Your message has been sent successfully. We'll get back to you within 24 hours.",
        });
      } else {
        setSubmitStatus('error');
        toast({
          title: "Error",
          description: "Something went wrong. Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch {
      setSubmitStatus('error');
      toast({
        title: "Error",
        description: "Network error. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/[0.02] border border-white/[0.06] rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-white placeholder:text-slate-400 transition-all duration-300 text-sm sm:text-base";
  const labelClasses = "block text-xs sm:text-sm font-medium text-slate-300 mb-1.5 sm:mb-2";

  return (
    <section id="contact-form" className="relative py-16 sm:py-20 lg:py-24 bg-[#030712] overflow-hidden">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 0%, rgba(6,182,212,0.06), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            <span>Get Started</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 leading-tight">
            <span className="text-white">Get Started in </span>
            <span className="gradient-text">
              {cityName}
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Ready to transform your business? Let&apos;s discuss your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Let&apos;s Connect</h3>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {/* Contact Items */}
              {[
                { icon: Phone, title: 'Call Us', content: '+92-310-6803687', sub: 'Mon-Fri 9AM-6PM' },
                { icon: Mail, title: 'Email Us', content: 'webondev786@gmail.com', sub: "We'll respond within 24 hours" },
                { icon: MapPin, title: 'Local Presence', content: `${cityName}, ${stateName}`, sub: 'Serving businesses in your area' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-3 sm:gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-0.5 sm:mb-1 group-hover:text-brand-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-sm sm:text-base truncate">{item.content}</p>
                    <p className="text-slate-400 text-xs sm:text-sm">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="relative bg-white/[0.02] rounded-2xl p-4 sm:p-6 border border-white/[0.06]">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Why Choose Us?</h4>
                <ul className="grid grid-cols-2 gap-2 sm:gap-3">
                  {benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 sm:gap-3 group"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-3 h-3 sm:w-4 sm:h-4 text-brand-400" />
                      </div>
                      <span className="text-slate-300 text-xs sm:text-sm group-hover:text-white transition-colors">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-white/[0.02] rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/[0.06]">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Get Free Consultation</h3>

              {submitStatus === 'success' ? (
                <motion.div
                  className="text-center py-8 sm:py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Thank You!</h4>
                  <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">Your message has been sent successfully.</p>
                  <p className="text-slate-400 text-xs sm:text-sm mb-4 sm:mb-6">We&apos;ll get back to you within 24 hours.</p>
                  <Button
                    type="button"
                    onClick={() => setSubmitStatus('idle')}
                    variant="default"
                    className="rounded-full text-sm"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={labelClasses}>Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={inputClasses}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClasses}>Email *</label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className={labelClasses}>Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={inputClasses}
                        placeholder="Your phone"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClasses}>Company</label>
                      <input
                        type="text"
                        id="company"
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
                    <label htmlFor="service" className={labelClasses}>Service *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className={inputClasses}
                    >
                      <option value="" className="bg-slate-900">Select service</option>
                      {SOFTWARE_SERVICES.map((service) => (
                        <option key={service} value={service} className="bg-slate-900">{service}</option>
                      ))}
                    </select>
                  </div>

                  {/* Budget & Timeline Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="budget" className={labelClasses}>Budget Range</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className={inputClasses}
                      >
                        <option value="" className="bg-slate-900">Select budget</option>
                        {BUDGET_RANGES.map((b) => (
                          <option key={b} value={b} className="bg-slate-900">{b}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className={labelClasses}>Timeline</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className={inputClasses}
                      >
                        <option value="" className="bg-slate-900">Select timeline</option>
                        {PROJECT_TIMELINES.map((t) => (
                          <option key={t} value={t} className="bg-slate-900">{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={labelClasses}>Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className={inputClasses}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || isVerifyingEmail}
                    variant="default"
                    size="lg"
                    className="w-full rounded-full text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>

                  {submitStatus === 'error' && (
                    <motion.div
                      className="flex items-center gap-2 text-red-400 text-xs sm:text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>Something went wrong. Please try again.</span>
                    </motion.div>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CityContactFormSection;
