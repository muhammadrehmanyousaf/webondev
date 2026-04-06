'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  Users,
  Award,
  Clock,
  Globe,
  Code,
  Smartphone,
  Zap,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Heart,
  Shield,
  Sparkles
} from 'lucide-react';

// =============================================================================
// DATA
// =============================================================================

const stats = [
  {
    icon: Award,
    value: '150+',
    label: 'Projects Completed',
    description: 'Successfully delivered across all categories',
  },
  {
    icon: Users,
    value: '150+',
    label: 'Happy Clients',
    description: 'Satisfied customers worldwide',
  },
  {
    icon: Globe,
    value: '5+',
    label: 'Countries Served',
    description: 'Global reach and impact',
  },
  {
    icon: TrendingUp,
    value: '99%',
    label: 'Success Rate',
    description: 'Projects delivered on time and budget',
  },
  {
    icon: Clock,
    value: '98%',
    label: 'On-Time Delivery',
    description: 'Consistent project timeline adherence',
  },
  {
    icon: Code,
    value: '50+',
    label: 'Technologies',
    description: 'Diverse tech stack expertise',
  },
  {
    icon: Smartphone,
    value: '50+',
    label: 'Mobile Apps',
    description: 'iOS and Android applications',
  },
  {
    icon: Zap,
    value: '24/7',
    label: 'Support',
    description: 'Round-the-clock assistance',
  }
];

const testimonials = [
  {
    id: 1,
    quote: "Web On Dev delivered our e-commerce platform ahead of schedule. The results exceeded our expectations with a 300% increase in sales.",
    author: "Sarah Johnson",
    position: "CEO, RetailCorp",
    avatar: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    quote: "The mobile app they developed for our healthcare platform has been a game-changer. User engagement increased by 250%.",
    author: "Dr. Michael Chen",
    position: "CTO, HealthTech Solutions",
    avatar: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    quote: "Their analytics dashboard transformed how we make business decisions. The insights are invaluable and the interface is beautiful.",
    author: "Emily Rodriguez",
    position: "VP Analytics, DataInsights Inc",
    avatar: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: 4,
    quote: "Working with Web On Dev was a pleasure. They understood our vision perfectly and delivered a product that exceeded expectations.",
    author: "James Wilson",
    position: "Founder, StartupX",
    avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    rating: 5,
  }
];

const achievements = [
  { icon: Award, value: '15+', label: 'Awards Won' },
  { icon: Star, value: '4.9/5', label: 'Client Rating' },
  { icon: Heart, value: '95%', label: 'Client Retention' },
  { icon: Shield, value: '100%', label: 'Satisfaction Rate' }
];

// =============================================================================
// MAIN COMPONENT
// =============================================================================

const PortfolioStatsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-[#030712] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 0%, rgba(16,185,129,0.06), transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

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
            Our Impact
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-[1.1]">
            Portfolio <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Our portfolio speaks for itself. Here are the numbers that showcase our commitment to excellence and client success.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="h-full bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4"
                  style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                >
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
                </div>

                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>

                <h3 className="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-brand-400 transition-colors duration-200">
                  {stat.label}
                </h3>

                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed hidden sm:block">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                What Our <span className="gradient-text">Clients</span> Say
              </h3>
              <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
                Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
              </p>
            </div>

            {/* Testimonial Carousel */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-3xl mx-auto text-center"
                >
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-5">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                    >
                      <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 leading-relaxed italic">
                    &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                  </blockquote>

                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          i < testimonials[activeTestimonial].rating
                            ? 'fill-brand-400 text-brand-400'
                            : 'text-slate-600'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <img
                      src={testimonials[activeTestimonial].avatar}
                      alt={testimonials[activeTestimonial].author}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white/[0.08]"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-white text-sm sm:text-base">{testimonials[activeTestimonial].author}</div>
                      <div className="text-xs sm:text-sm text-slate-500">{testimonials[activeTestimonial].position}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  title="Previous testimonial"
                  aria-label="Previous testimonial"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:border-brand-500/20 transition-all"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Go to testimonial ${index + 1}`}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setActiveTestimonial(index);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeTestimonial
                          ? 'bg-brand-400 w-6'
                          : 'bg-white/20 w-2 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextTestimonial}
                  title="Next testimonial"
                  aria-label="Next testimonial"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:border-brand-500/20 transition-all"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Industry Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Industry Recognition
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group"
              >
                <div className="bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center transition-all duration-300">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-lg sm:rounded-xl flex items-center justify-center mb-3"
                    style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                  >
                    <achievement.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">{achievement.value}</div>
                  <div className="text-xs sm:text-sm text-slate-400">{achievement.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioStatsSection;
