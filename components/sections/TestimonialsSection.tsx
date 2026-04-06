'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// =============================================================================
// TESTIMONIALS DATA
// =============================================================================

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    company: 'TechStart Inc.',
    rating: 5,
    text: 'Web On Dev transformed our business with their exceptional web development services. Their team delivered a scalable, modern platform that exceeded our expectations.',
    avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    date: '2024-11-15',
    service: 'Web Development',
    featured: true,
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Founder, E-Shop Solutions',
    company: 'E-Shop Solutions',
    rating: 5,
    text: 'Outstanding mobile app development! They created a beautiful, user-friendly app that our customers love. The project was completed on time and within budget.',
    avatar: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    date: '2024-10-28',
    service: 'Mobile App Development',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Marketing Director, Growth Co.',
    company: 'Growth Co.',
    rating: 5,
    text: 'Their digital marketing expertise helped us increase our online presence by 300%. The team is professional, creative, and results-driven.',
    avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    date: '2024-12-01',
    service: 'Digital Marketing',
  },
  {
    id: 4,
    name: 'David Park',
    position: 'CTO, InnovateLab',
    company: 'InnovateLab',
    rating: 5,
    text: 'Excellent cloud infrastructure setup and DevOps implementation. Our deployment process is now 10x faster and more reliable. Highly recommended!',
    avatar: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    date: '2024-09-20',
    service: 'Cloud & DevOps',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    position: 'Product Manager, FinTech Pro',
    company: 'FinTech Pro',
    rating: 5,
    text: 'The UI/UX design they created for our fintech platform is simply amazing. User engagement increased by 250% after the redesign. Fantastic work!',
    avatar: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    date: '2024-08-15',
    service: 'UI/UX Design',
  },
];


// =============================================================================
// TESTIMONIAL CARD
// =============================================================================

const TestimonialCard = ({ testimonial, index }: { testimonial: (typeof testimonials)[0]; index: number }) => {
  const isFeatured = 'featured' in testimonial && testimonial.featured;

  return (
    <motion.div
      className={`group ${isFeatured ? 'md:col-span-2' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className={`relative h-full rounded-xl sm:rounded-2xl ${isFeatured ? 'gradient-border' : ''} overflow-hidden`}>
        <div className={`relative h-full ${isFeatured ? 'bg-[#060B18]' : 'bg-white/[0.02] border border-white/[0.06]'} rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 ${isFeatured ? 'sm:p-6 lg:p-8' : ''} hover:border-brand-500/20 transition-colors duration-300`}>
          {/* Background quote mark for featured */}
          {isFeatured && (
            <span className="absolute right-6 top-4 text-[120px] font-serif text-white/[0.02] leading-none select-none pointer-events-none">
              &ldquo;
            </span>
          )}

          {/* Top row - stars + service */}
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="flex gap-0.5">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              {testimonial.service}
            </span>
          </div>

          {/* Quote */}
          <p className={`text-slate-300 leading-relaxed mb-4 sm:mb-5 ${isFeatured ? 'text-sm sm:text-base lg:text-lg' : 'text-xs sm:text-sm'}`}>
            &ldquo;{testimonial.text}&rdquo;
          </p>

          {/* Author */}
          <div className="flex items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-white/[0.06]">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-white text-xs sm:text-sm">
                {testimonial.name}
              </div>
              <div className="text-slate-500 text-xs">{testimonial.position}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// =============================================================================
// MAIN COMPONENT
// =============================================================================

const TestimonialsSection = () => {
  return (
    <section
      className="relative py-12 sm:py-14 lg:py-20 overflow-hidden bg-[#030712]"
    >

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 40% at 80% 20%, rgba(6,182,212,0.04), transparent 70%)',
        }}
      />

      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <Quote className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            Testimonials
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-[1.1]">
            Hear it straight from{' '}
            <span className="gradient-text">our clients</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it — here&apos;s what our satisfied clients have to say.
          </p>
        </motion.div>

        {/* Testimonials Grid - Featured takes 2 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mb-6 sm:mb-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Bottom aggregate stats */}
        <motion.div
          className="grid grid-cols-3 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {[
            { value: '99%', label: 'Satisfaction' },
            { value: '4.9/5', label: 'Avg. Rating' },
            { value: '200+', label: 'Reviews' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-4 sm:py-5 ${i < 2 ? 'border-r border-white/[0.06]' : ''}`}
            >
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
