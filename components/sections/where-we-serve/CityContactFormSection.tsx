'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin, Clock, Shield, Award, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// =============================================================================
// CITY CONTACT FORM SECTION - Simplified Smooth Design
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
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'E-commerce Solutions',
    'Other'
  ];

  const benefits = [
    { icon: Shield, text: 'Local market expertise' },
    { icon: Award, text: 'Proven track record' },
    { icon: Clock, text: '24/7 support' },
    { icon: CheckCircle, text: 'Competitive pricing' }
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
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
          service: '',
          message: ''
        });
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

  const inputClasses = "w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-white placeholder:text-slate-400 transition-all duration-300 text-sm sm:text-base";
  const labelClasses = "block text-xs sm:text-sm font-medium text-slate-300 mb-1.5 sm:mb-2";

  return (
    <section id="contact-form" className="relative py-12 sm:py-16 lg:py-24 bg-slate-950 overflow-hidden">
      {/* Background Effects - Simplified for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-brand-500/10 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-teal-500/10 rounded-full blur-[80px] sm:blur-[120px]" />
      </div>

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
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Get Started</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 leading-tight">
            <span className="text-white">Get Started in </span>
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
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
                { icon: Phone, title: 'Call Us', content: '+92-310-6803687', sub: 'Mon-Fri 9AM-6PM', gradient: 'from-brand-500 to-teal-500' },
                { icon: Mail, title: 'Email Us', content: 'webondev786@gmail.com', sub: "We'll respond within 24 hours", gradient: 'from-teal-500 to-cyan-500' },
                { icon: MapPin, title: 'Local Presence', content: `${cityName}, ${stateName}`, sub: 'Serving businesses in your area', gradient: 'from-cyan-500 to-brand-500' }
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
                    className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
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
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-2xl blur opacity-20" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Why Choose Us?</h4>
                <ul className="grid grid-cols-2 gap-2 sm:gap-3">
                  {benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 sm:gap-3 group"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-brand-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span className="text-slate-300 text-xs sm:text-sm group-hover:text-white transition-colors">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Simplified */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-2xl blur opacity-20" />
            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/10">
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
                    variant="glow"
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
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={inputClasses}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Service Row */}
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
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-slate-900">{service}</option>
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
                    disabled={isSubmitting}
                    variant="glow"
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
