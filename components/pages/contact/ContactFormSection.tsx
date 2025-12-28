'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'E-commerce Solutions',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'contact' }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
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
    <section className="relative py-16 sm:py-20 lg:py-28 bg-slate-950 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get Your <span className="text-brand-400">Free Quote</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Tell us about your project and we&apos;ll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form - Takes 3 columns */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 sm:p-12 border border-slate-800 text-center"
                >
                  <motion.div
                    className="w-20 h-20 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    <CheckCircle className="w-10 h-10 text-brand-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
                  <p className="text-slate-400 mb-6">We&apos;ll be in touch within 24 hours.</p>
                  <Button
                    type="button"
                    onClick={() => setSubmitStatus('idle')}
                    variant="outline"
                    className="border-slate-700 text-white hover:bg-slate-800"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="bg-slate-900/50 backdrop-blur rounded-2xl p-6 sm:p-8 border border-slate-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="space-y-5">
                    {/* Name & Email Row */}
                    <div className="grid sm:grid-cols-2 gap-5">
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
                          className="w-full pt-6 pb-3 px-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50 outline-none transition-all"
                        />
                      </div>
                      <div className="relative">
                        <label
                          htmlFor="contact-email"
                          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
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
                          onBlur={() => setFocusedField(null)}
                          required
                          aria-label="Email address"
                          className="w-full pt-6 pb-3 px-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone & Service Row */}
                    <div className="grid sm:grid-cols-2 gap-5">
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
                          className="w-full pt-6 pb-3 px-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50 outline-none transition-all"
                        />
                      </div>
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
                          className="w-full pt-6 pb-3 px-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50 outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-slate-900">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-slate-900">{service}</option>
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
                        className="w-full pt-7 pb-3 px-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50 outline-none transition-all resize-none"
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
                      disabled={isSubmitting}
                      variant="glow"
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-gradient-to-br from-brand-500/10 to-teal-500/10 rounded-2xl p-6 sm:p-8 border border-slate-800 h-full">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-5 mb-8">
                {contactInfo.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                  >
                    <div className="w-11 h-11 bg-brand-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wider">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Benefits */}
              <div className="pt-6 border-t border-slate-800">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">What You Get</h4>
                <div className="space-y-3">
                  {['Free consultation call', 'Detailed project quote', 'Response within 24 hours'].map((item, idx) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-3 text-slate-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                    >
                      <CheckCircle className="w-4 h-4 text-brand-400 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </motion.div>
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
