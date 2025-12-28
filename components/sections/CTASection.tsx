'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, MessageCircle, Calendar, Phone, Clock, User, Mail,
  Sparkles, Zap, CheckCircle2, Check, X, Send, Loader2, AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// =============================================================================
// CTA SECTION - Clean Design with Simple Booking Modal
// =============================================================================

const CTASection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

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

  const handleEmailClick = () => {
    window.open('mailto:webondev786@gmail.com?subject=Project Inquiry');
  };

  const handlePhoneClick = () => {
    window.open('tel:+923106803687');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'booking-modal' }),
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

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
    setSubmitStatus('idle');
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isBookingModalOpen) {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isBookingModalOpen]);

  // Listen for global event to open booking modal (from Navbar "Get Started" button)
  useEffect(() => {
    const handleOpenBookingModal = () => {
      setIsBookingModalOpen(true);
    };
    window.addEventListener('openBookingModal', handleOpenBookingModal);
    return () => window.removeEventListener('openBookingModal', handleOpenBookingModal);
  }, []);

  const benefits = [
    { icon: Zap, text: 'Free Consultation', gradient: 'from-brand-500 to-teal-500' },
    { icon: Clock, text: '24/7 Support', gradient: 'from-teal-500 to-cyan-500' },
    { icon: CheckCircle2, text: '100% Satisfaction', gradient: 'from-cyan-500 to-brand-500' },
  ];

  const inputClasses = "w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-white placeholder:text-slate-500 transition-all duration-300 text-sm sm:text-base";
  const labelClasses = "block text-xs sm:text-sm font-medium text-slate-300 mb-1.5 sm:mb-2";

  return (
    <section id="book-meeting" className="relative py-16 sm:py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-brand-500/20 rounded-full blur-[80px] sm:blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-teal-500/20 rounded-full blur-[80px] sm:blur-[120px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Let&apos;s Connect</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-white">Ready to Transform</span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Your Business?
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 sm:px-0">
            Let&apos;s discuss how our comprehensive software solutions can help you achieve your business goals.
            Get started with a free consultation today.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={handleEmailClick}
                variant="glow"
                size="lg"
                className="rounded-full px-6 sm:px-10 group w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Start Your Project</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-6 sm:px-10 border-white/20 text-white hover:bg-white/10 w-full sm:w-auto"
              >
                <Link href="/portfolio" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">View Our Work</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Options Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Call Us Card */}
          <motion.button
            onClick={handlePhoneClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative text-left"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <motion.div
              className="relative h-full bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-white/10 hover:border-brand-500/50 transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-500 to-teal-500 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-lg shadow-brand-500/25"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-brand-400 transition-colors">Call Us Now</h3>
              <p className="text-slate-400 mb-3 sm:mb-4 text-xs sm:text-base">Speak directly with our experts</p>
              <span className="text-brand-400 font-semibold text-sm sm:text-lg group-hover:text-brand-300 transition-colors flex items-center gap-2">
                +92 310 6803687
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </span>
            </motion.div>
          </motion.button>

          {/* Email Us Card */}
          <motion.button
            onClick={handleEmailClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative text-left"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <motion.div
              className="relative h-full bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-white/10 hover:border-teal-500/50 transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-lg shadow-teal-500/25"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-teal-400 transition-colors">Email Us</h3>
              <p className="text-slate-400 mb-3 sm:mb-4 text-xs sm:text-base">Get detailed project information</p>
              <span className="text-teal-400 font-semibold text-xs sm:text-sm group-hover:text-teal-300 transition-colors break-all">
                webondev786@gmail.com
              </span>
            </motion.div>
          </motion.button>

          {/* Book Meeting Card */}
          <motion.button
            onClick={() => setIsBookingModalOpen(true)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative text-left"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-brand-500 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <motion.div
              className="relative h-full bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-brand-500 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-lg shadow-cyan-500/25"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors">Book Meeting</h3>
              <p className="text-slate-400 mb-3 sm:mb-4 text-xs sm:text-base">Schedule a free consultation</p>
              <span className="text-cyan-400 font-semibold text-sm sm:text-lg group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                Book Now
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </span>
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Bottom Benefits */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-white/10">
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-sm sm:text-lg text-slate-300">
                Join <span className="text-brand-400 font-bold">500+</span> satisfied clients who trust us with their digital transformation
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 10 }}
                  >
                    <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </motion.div>
                  <span className="text-white font-medium text-sm sm:text-base group-hover:text-brand-400 transition-colors">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Simple Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={handleCloseModal}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-700/50 shadow-2xl shadow-black/50"
              >
                {/* Modal Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between p-4 sm:p-6 border-b border-slate-700/50 bg-slate-900/95 backdrop-blur-sm rounded-t-2xl sm:rounded-t-3xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center shadow-lg shadow-brand-500/25">
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-white">Book a Meeting</h2>
                      <p className="text-xs sm:text-sm text-slate-400">Free consultation</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={handleCloseModal}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </div>

                {/* Modal Content */}
                <div className="p-4 sm:p-6">
                  <AnimatePresence mode="wait">
                    {submitStatus === 'success' ? (
                      <motion.div
                        key="success"
                        className="text-center py-6 sm:py-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                      >
                        <motion.div
                          className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Check className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={3} />
                        </motion.div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Thank You!</h3>
                        <p className="text-slate-300 mb-4 text-sm sm:text-base">Your message has been sent successfully.</p>
                        <p className="text-slate-400 text-xs sm:text-sm mb-6">We&apos;ll get back to you within 24 hours.</p>
                        <Button
                          onClick={handleCloseModal}
                          variant="glow"
                          className="rounded-full"
                        >
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
                        {/* Name & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="modal-name" className={labelClasses}>
                              <User className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1.5 text-brand-400" />
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
                              <Mail className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1.5 text-brand-400" />
                              Email *
                            </label>
                            <input
                              type="email"
                              id="modal-email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className={inputClasses}
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>

                        {/* Phone & Service */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="modal-phone" className={labelClasses}>
                              <Phone className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1.5 text-brand-400" />
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
                            <label htmlFor="modal-service" className={labelClasses}>
                              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1.5 text-brand-400" />
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
                              <option value="" className="bg-slate-900">Select service</option>
                              {services.map((service) => (
                                <option key={service} value={service} className="bg-slate-900">{service}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="modal-message" className={labelClasses}>
                            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1.5 text-brand-400" />
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

                        {/* Error */}
                        <AnimatePresence>
                          {submitStatus === 'error' && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="flex items-center gap-2 text-red-400 text-xs sm:text-sm"
                            >
                              <AlertCircle className="w-4 h-4" />
                              <span>Something went wrong. Please try again.</span>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          variant="glow"
                          size="lg"
                          className="w-full rounded-full text-sm sm:text-base"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center justify-center gap-2">
                              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                              Send Message
                            </span>
                          )}
                        </Button>

                        {/* Trust Note */}
                        <p className="text-center text-slate-500 text-xs">
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
