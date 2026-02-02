'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MessageSquare, Globe, Users, Award } from 'lucide-react';

// =============================================================================
// TESTIMONIALS SECTION (Location Pages)
// =============================================================================

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      location: 'New York, USA',
      rating: 5,
      text: 'Web On Dev transformed our business with their exceptional web development services. Their team delivered a scalable, modern platform that exceeded our expectations and helped us expand globally.',
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Founder, E-Shop Solutions',
      company: 'E-Shop Solutions',
      location: 'London, UK',
      rating: 5,
      text: 'Outstanding mobile app development! They created a beautiful, user-friendly app that our customers love. The project was completed on time and within budget, with excellent local market adaptation.',
      avatar: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Marketing Director, Growth Co.',
      company: 'Growth Co.',
      location: 'Toronto, Canada',
      rating: 5,
      text: 'Their digital marketing expertise helped us increase our online presence by 300%. The team is professional, creative, and results-driven with deep understanding of local markets.',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    },
    {
      id: 4,
      name: 'David Park',
      position: 'CTO, InnovateLab',
      company: 'InnovateLab',
      location: 'Sydney, Australia',
      rating: 5,
      text: 'Excellent cloud infrastructure setup and DevOps implementation. Our deployment process is now 10x faster and more reliable. Their global expertise with local delivery is unmatched.',
      avatar: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      position: 'Product Manager, FinTech Pro',
      company: 'FinTech Pro',
      location: 'Berlin, Germany',
      rating: 5,
      text: 'The UI/UX design they created for our fintech platform is simply amazing. User engagement increased by 250% after the redesign. Their compliance expertise was invaluable.',
      avatar: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    },
    {
      id: 6,
      name: 'Robert Wilson',
      position: 'Operations Head, LogiFlow',
      company: 'LogiFlow',
      location: 'Singapore',
      rating: 5,
      text: 'Their custom software solution streamlined our operations perfectly. The team understood our needs and delivered exactly what we needed with excellent regional adaptation.',
      avatar: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    }
  ];

  const stats = [
    { value: '99%', label: 'Client Satisfaction', icon: Award },
    { value: '4.9/5', label: 'Average Rating', icon: Star },
    { value: '30+', label: 'Countries Served', icon: Globe },
    { value: '150+', label: 'Happy Clients', icon: Users }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4" />
            <span>Global Testimonials</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">What Our Global Clients </span>
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients from around the world have to say about our services and results.
          </p>
        </motion.div>
      </div>

      {/* Testimonials - CSS Marquee */}
      <div className="relative z-10 mb-16 overflow-hidden">
        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[400px] mx-3 group"
            >
              <div className="relative bg-slate-900/50 rounded-2xl p-8 border border-white/5 hover:border-brand-500/20 transition-colors duration-200 h-full">
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-brand-400" />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white/10"
                  />
                  <div>
                    <div className="font-bold text-white text-sm">{testimonial.name}</div>
                    <div className="text-slate-400 text-xs">{testimonial.position}</div>
                    <div className="text-brand-400 text-xs font-medium">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-slate-900/50 rounded-2xl p-6 border border-white/5 hover:border-brand-500/20 transition-colors duration-200"
            >
              <div className="w-10 h-10 mx-auto bg-brand-500/10 rounded-xl flex items-center justify-center mb-4">
                <stat.icon className="w-5 h-5 text-brand-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-400 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
