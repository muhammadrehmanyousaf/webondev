'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin, Clock, Shield, Award, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// =============================================================================
// CITY CONTACT FORM SECTION - Premium Emerald Green Design
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
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const services = [
    'Web Development',
    'Mobile App Development',
    'Software Development',
    'UI/UX Design',
    'Digital Marketing',
    'E-commerce Solutions',
    'Cloud Services',
    'Consulting',
    'Other'
  ];

  const budgets = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000',
    'Let\'s Discuss'
  ];

  const timelines = [
    'ASAP',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    'More than 12 months',
    'Flexible'
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
          company: formData.company,
          phone: formData.phone,
          service: formData.service,
          budget: formData.budget,
          timeline: formData.timeline,
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
          company: '',
          phone: '',
          service: '',
          budget: '',
          timeline: '',
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
    } catch (error) {
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

  const inputClasses = "w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-white placeholder:text-slate-400 transition-all duration-300";
  const labelClasses = "block text-sm font-medium text-slate-300 mb-2";

  return (
    <section id="contact-form" className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-500/15 rounded-full blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-teal-500/15 rounded-full blur-[120px]"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Get Started</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Get Started in </span>
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {cityName}
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let&apos;s discuss your project and how we can help you succeed in {cityName}.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Let&apos;s Connect</h3>

            <div className="space-y-6 mb-8">
              {/* Contact Items */}
              {[
                { icon: Phone, title: 'Call Us', content: '+1 (555) 123-4567', sub: 'Mon-Fri 9AM-6PM EST', gradient: 'from-brand-500 to-teal-500' },
                { icon: Mail, title: 'Email Us', content: 'muhammadrehmanyousaf786@gmail.com', sub: "We'll respond within 24 hours", gradient: 'from-teal-500 to-cyan-500' },
                { icon: MapPin, title: 'Local Presence', content: `${cityName}, ${stateName}`, sub: 'Serving businesses in your area', gradient: 'from-cyan-500 to-brand-500' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-brand-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-300">{item.content}</p>
                    <p className="text-slate-400 text-sm">{item.sub}</p>
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
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">Why Choose Us?</h4>
                <ul className="space-y-3">
                  {benefits.map((benefit, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-3 group"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-brand-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-300 group-hover:text-white transition-colors">{benefit.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-2xl blur opacity-20" />
            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Get Free Consultation</h3>

              {submitStatus === 'success' ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-brand-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                  <p className="text-slate-300 mb-4">Your message has been sent successfully.</p>
                  <p className="text-slate-400 text-sm mb-6">We&apos;ll get back to you within 24 hours.</p>
                  <Button
                    onClick={() => setSubmitStatus('idle')}
                    variant="glow"
                    className="rounded-full"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClasses}>Email Address *</label>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className={labelClasses}>Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={inputClasses}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClasses}>Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={inputClasses}
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className={labelClasses}>Service Interested In *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className={inputClasses}
                    >
                      <option value="" className="bg-slate-900">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-slate-900">{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                        {budgets.map((budget) => (
                          <option key={budget} value={budget} className="bg-slate-900">{budget}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className={labelClasses}>Project Timeline</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className={inputClasses}
                      >
                        <option value="" className="bg-slate-900">Select timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline} className="bg-slate-900">{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClasses}>Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className={inputClasses}
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="glow"
                      size="lg"
                      className="w-full rounded-full"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </motion.div>

                  {submitStatus === 'error' && (
                    <motion.div
                      className="flex items-center gap-2 text-red-400 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <AlertCircle className="w-4 h-4" />
                      Something went wrong. Please try again.
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
