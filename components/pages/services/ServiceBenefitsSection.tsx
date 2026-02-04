'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, DollarSign, Users, Award, Zap, Globe, HeartHandshake } from 'lucide-react';
import InlineCTA from '@/components/ui/inline-cta';

const benefits = [
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'We stand behind our work with a 100% satisfaction guarantee and comprehensive quality assurance.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Strict adherence to deadlines with transparent project tracking and regular milestone updates.',
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective Solutions',
    description: 'Competitive pricing with no hidden costs. Get maximum value for your investment.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Work with experienced professionals who are experts in their respective fields.',
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Award-winning solutions that meet industry standards and best practices.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Quick project initiation and efficient development cycles to get you to market faster.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients worldwide with 24/7 support and multi-timezone coverage.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-term Partnership',
    description: 'Building lasting relationships with ongoing support and continuous improvement.',
  },
];

const testimonialStats = [
  { number: '200+', label: 'Happy Clients' },
  { number: '150+', label: 'Projects Completed' },
  { number: '99%', label: 'Client Retention' },
  { number: '24/7', label: 'Support Available' },
];

const ServiceBenefitsSection = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-[#030712] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 70% 50%, rgba(16,185,129,0.04), transparent 70%)',
        }}
      />
      <div className="grain absolute inset-0" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            Why Choose Us
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-[1.1]">
            Why Choose <span className="gradient-text">Web On Dev</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            We deliver exceptional value through our commitment to quality, innovation, and client success.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="h-full bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4"
                  style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                >
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2 group-hover:text-brand-400 transition-colors duration-200">
                  {benefit.title}
                </h3>

                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 sm:p-6 lg:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                Trusted by Businesses Worldwide
              </h3>
              <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
                Our track record speaks for itself. Join hundreds of satisfied clients who have transformed their businesses with our solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {testimonialStats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center py-4 sm:py-5 ${index < 3 ? 'md:border-r md:border-white/[0.06]' : ''} ${index < 2 ? 'border-r border-white/[0.06] md:border-r' : ''} ${index >= 2 ? 'border-t md:border-t-0 border-white/[0.06]' : ''}`}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 text-xs sm:text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Client Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            <blockquote className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed italic text-center mb-5 sm:mb-6">
              &ldquo;Web On Dev transformed our business with their comprehensive digital solutions. Their expertise, professionalism, and commitment to quality are unmatched.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="Sarah Johnson"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white/[0.08]"
              />
              <div className="text-left">
                <div className="text-white font-semibold text-sm sm:text-base">Sarah Johnson</div>
                <div className="text-slate-500 text-xs sm:text-sm">CEO, TechStart Inc.</div>
              </div>
            </div>
          </div>
        </motion.div>

        <InlineCTA
          title="Experience Our Quality First-Hand"
          description="Start your project with our expert team today."
          buttonText="Get Free Consultation"
        />
      </div>
    </section>
  );
};

export default ServiceBenefitsSection;
