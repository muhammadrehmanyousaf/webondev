'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Clock, DollarSign, Users, Award, Zap, Globe, HeartHandshake,
  Sparkles, Star, Quote, ChevronLeft, ChevronRight
} from 'lucide-react';

const ServiceBenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const benefits = [
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'We stand behind our work with a 100% satisfaction guarantee and comprehensive quality assurance.',
      gradient: 'from-brand-500 to-teal-500'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Strict adherence to deadlines with transparent project tracking and regular milestone updates.',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective',
      description: 'Competitive pricing with no hidden costs. Get maximum value for your investment.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with experienced professionals who are experts in their respective fields.',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning solutions that meet industry standards and best practices.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Quick project initiation and efficient development cycles to get you to market faster.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support and multi-timezone coverage.',
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      icon: HeartHandshake,
      title: 'Long-term Partnership',
      description: 'Building lasting relationships with ongoing support and continuous improvement.',
      gradient: 'from-orange-500 to-brand-500'
    }
  ];

  const testimonialStats = [
    { number: '150+', label: 'Happy Clients', gradient: 'from-brand-400 to-teal-400' },
    { number: '150+', label: 'Projects Completed', gradient: 'from-teal-400 to-cyan-400' },
    { number: '99%', label: 'Client Retention', gradient: 'from-cyan-400 to-blue-400' },
    { number: '24/7', label: 'Support Available', gradient: 'from-blue-400 to-brand-400' }
  ];

  const testimonials = [
    {
      quote: "Web On Dev transformed our business with their comprehensive digital solutions. Their expertise, professionalism, and commitment to quality are unmatched.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5
    },
    {
      quote: "Outstanding mobile app development! They created a beautiful, user-friendly app that our customers love. The project was completed on time and within budget.",
      author: "Michael Chen",
      position: "Founder, E-Shop Solutions",
      avatar: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5
    },
    {
      quote: "Their digital marketing expertise helped us increase our online presence by 300%. The team is professional, creative, and results-driven.",
      author: "Emily Rodriguez",
      position: "Marketing Director, Growth Co.",
      avatar: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dot Pattern */}
        <div
          className="absolute inset-0 opacity-10"
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
            <span>Why Choose Us</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Why Choose</span>
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Web On Dev
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We deliver exceptional value through our commitment to quality,
            innovation, and client success.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${benefit.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              <motion.div
                className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-brand-500/50 transition-all duration-500"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl mb-4 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="relative group">
            {/* Animated Border */}
            <motion.div
              className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 opacity-30"
              animate={{
                background: [
                  'linear-gradient(0deg, #10B981, #14B8A6, #06B6D4)',
                  'linear-gradient(120deg, #10B981, #14B8A6, #06B6D4)',
                  'linear-gradient(240deg, #10B981, #14B8A6, #06B6D4)',
                  'linear-gradient(360deg, #10B981, #14B8A6, #06B6D4)',
                ],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ filter: 'blur(8px)' }}
            />

            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Trusted by <span className="bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent">Businesses Worldwide</span>
                </h3>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Our track record speaks for itself. Join hundreds of satisfied clients who have transformed their businesses with our solutions.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {testimonialStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <motion.div
                      className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-slate-400 font-medium text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Quote Icon */}
                <motion.div
                  className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center shadow-lg shadow-brand-500/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Quote className="w-10 h-10 text-white" />
                </motion.div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center lg:text-left">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Stars */}
                      <div className="flex justify-center lg:justify-start gap-1 mb-4">
                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-xl md:text-2xl font-medium text-white mb-6 leading-relaxed">
                        &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center justify-center lg:justify-start gap-4">
                        <motion.img
                          src={testimonials[activeTestimonial].avatar}
                          alt={testimonials[activeTestimonial].author}
                          className="w-14 h-14 rounded-full object-cover border-2 border-brand-500/30"
                          whileHover={{ scale: 1.1 }}
                        />
                        <div>
                          <div className="font-bold text-white">{testimonials[activeTestimonial].author}</div>
                          <div className="text-slate-400 text-sm">{testimonials[activeTestimonial].position}</div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <motion.button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial
                        ? 'w-8 bg-gradient-to-r from-brand-500 to-teal-500'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceBenefitsSection;
