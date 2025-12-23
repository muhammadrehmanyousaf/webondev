'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Sparkles, Shield, Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactFormSection = () => {
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
    'Under 1 Lac',
    '1 Lac - 5 Lacs',
    '5 Lacs - 10 Lacs',
    '10 Lacs - 25 Lacs',
    '25 Lacs - 50 Lacs',
    '50 Lacs - 1 Crore',
    'Over 1 Crore',
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
    {
      icon: Shield,
      title: 'Free Consultation',
      description: 'Get expert advice and project estimation at no cost'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: '150+ successful projects delivered on time and budget'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '50+ skilled developers, designers, and strategists'
    },
    {
      icon: CheckCircle,
      title: 'Transparent Process',
      description: 'Clear communication and regular project updates'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance'
    },
    {
      icon: Sparkles,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee with quality assurance'
    }
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
          formType: 'contact'
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
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const inputClasses = "w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all duration-300 backdrop-blur-sm";
  const labelClasses = "block text-sm font-semibold text-gray-300 mb-2";
  const selectClasses = "w-full px-4 py-3.5 bg-slate-900 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all duration-300";

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get Your Free
                <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"> Consultation</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Tell us about your project and we'll get back to you within 24 hours with a detailed proposal and timeline.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={inputClasses}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={inputClasses}
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Company and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className={labelClasses}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={inputClasses}
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={inputClasses}
                    placeholder="+92 310 6803687"
                  />
                </div>
              </div>

              {/* Service and Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className={labelClasses}>
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className={selectClasses}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className={labelClasses}>
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className={selectClasses}
                  >
                    <option value="">Select budget range</option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className={labelClasses}>
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className={selectClasses}
                >
                  <option value="">Select timeline</option>
                  {timelines.map((timeline) => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClasses}>
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={`${inputClasses} resize-vertical`}
                  placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </div>
                )}
              </Button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-brand-400 bg-brand-500/10 border border-brand-500/20 p-4 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Thank you! We'll get back to you within 24 hours.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 p-4 rounded-xl"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Something went wrong. Please try again or contact us directly at muhammadrehmanyousaf786@gmail.com</span>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50" />

              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Why Choose Web On Dev?
                </h3>

                <div className="space-y-6">
                  {benefits.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-brand-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Response Guarantee */}
                <div className="mt-8 p-6 bg-slate-900/50 rounded-2xl border border-white/5">
                  <h4 className="font-bold text-white mb-3">Quick Response Guarantee</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    We understand that time is crucial for your business. That's why we guarantee:
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand-400 rounded-full"></div>
                      <span className="text-gray-300">Response within 2 hours during business hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-gray-300">Detailed proposal within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Project kickoff within 1 week</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-400 mb-2">Or email us directly:</p>
                  <a
                    href="mailto:muhammadrehmanyousaf786@gmail.com"
                    className="text-brand-400 hover:text-brand-300 font-semibold transition-colors"
                  >
                    muhammadrehmanyousaf786@gmail.com
                  </a>
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
