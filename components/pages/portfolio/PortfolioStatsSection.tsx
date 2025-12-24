'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp, Users, Award, Clock, Globe, Code, Smartphone, Zap,
  Sparkles, Star, Quote, ChevronLeft, ChevronRight, Trophy
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Animated Counter
const AnimatedCounter = ({ target, suffix = '', duration = 2 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTime: number;
            const animate = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
              setCount(Math.floor(progress * target));
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const PortfolioStatsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const stats = [
    { icon: Award, value: 150, suffix: '+', label: 'Projects Completed', description: 'Successfully delivered across all categories', gradient: 'from-brand-500 to-teal-500' },
    { icon: Users, value: 150, suffix: '+', label: 'Happy Clients', description: 'Satisfied customers worldwide', gradient: 'from-teal-500 to-cyan-500' },
    { icon: Globe, value: 5, suffix: '+', label: 'Countries Served', description: 'Global reach and impact', gradient: 'from-cyan-500 to-blue-500' },
    { icon: TrendingUp, value: 99, suffix: '%', label: 'Success Rate', description: 'Projects delivered on time and budget', gradient: 'from-blue-500 to-purple-500' },
    { icon: Clock, value: 98, suffix: '%', label: 'On-Time Delivery', description: 'Consistent project timeline adherence', gradient: 'from-purple-500 to-pink-500' },
    { icon: Code, value: 50, suffix: '+', label: 'Technologies', description: 'Diverse tech stack expertise', gradient: 'from-pink-500 to-rose-500' },
    { icon: Smartphone, value: 50, suffix: '+', label: 'Mobile Apps', description: 'iOS and Android applications', gradient: 'from-rose-500 to-orange-500' },
    { icon: Zap, value: 24, suffix: '/7', label: 'Support', description: 'Round-the-clock assistance', gradient: 'from-orange-500 to-brand-500' }
  ];

  const testimonials = [
    {
      quote: "Web On Dev delivered our e-commerce platform ahead of schedule. The results exceeded our expectations with a 300% increase in sales.",
      author: "Sarah Johnson",
      position: "CEO, RetailCorp",
      avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5
    },
    {
      quote: "The mobile app they developed for our healthcare platform has been a game-changer. User engagement increased by 250%.",
      author: "Dr. Michael Chen",
      position: "CTO, HealthTech Solutions",
      avatar: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5
    },
    {
      quote: "Their analytics dashboard transformed how we make business decisions. The insights are invaluable and the interface is beautiful.",
      author: "Emily Rodriguez",
      position: "VP Analytics, DataInsights Inc",
      avatar: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5
    }
  ];

  const recognition = [
    { value: 15, suffix: '+', label: 'Awards Won' },
    { value: 4.9, suffix: '/5', label: 'Client Rating' },
    { value: 95, suffix: '%', label: 'Client Retention' },
    { value: 100, suffix: '%', label: 'Satisfaction Rate' }
  ];

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[150px]"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px]"
          animate={{
            y: [0, -30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
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
            <Trophy className="w-4 h-4" />
            <span>Portfolio Impact</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Numbers That</span>
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Speak For Themselves
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our portfolio speaks for itself. Here are the numbers that showcase
            our commitment to excellence and client success.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              <motion.div
                className="relative text-center bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-brand-500/50 transition-all duration-500 h-full"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-xl mx-auto mb-4 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <stat.icon className="w-7 h-7 text-white" />
                </motion.div>

                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>

                <h3 className="text-sm font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                  {stat.label}
                </h3>

                <p className="text-slate-500 text-xs leading-relaxed hidden sm:block">
                  {stat.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
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
                  What Our <span className="bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent">Clients Say</span>
                </h3>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
                </p>
              </div>

              <div className="relative max-w-4xl mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <motion.div
                        className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center shadow-lg shadow-brand-500/20"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Quote className="w-10 h-10 text-white" />
                      </motion.div>

                      <div className="flex-1 text-center md:text-left">
                        {/* Stars */}
                        <div className="flex justify-center md:justify-start gap-1 mb-4">
                          {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        <blockquote className="text-lg md:text-xl text-white mb-6 leading-relaxed">
                          &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                        </blockquote>

                        <div className="flex items-center justify-center md:justify-start gap-4">
                          <motion.img
                            src={testimonials[activeTestimonial].avatar}
                            alt={testimonials[activeTestimonial].author}
                            className="w-12 h-12 rounded-full object-cover border-2 border-brand-500/30"
                            whileHover={{ scale: 1.1 }}
                          />
                          <div className="text-left">
                            <div className="font-bold text-white">{testimonials[activeTestimonial].author}</div>
                            <div className="text-slate-400 text-sm">{testimonials[activeTestimonial].position}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex justify-center items-center gap-4 mt-6">
                  <motion.button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>

                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === activeTestimonial
                            ? 'w-8 bg-gradient-to-r from-brand-500 to-teal-500'
                            : 'w-2 bg-white/20 hover:bg-white/40'
                        }`}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>

                  <motion.button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Industry Recognition */}
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
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Industry <span className="bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent">Recognition</span>
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {recognition.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <motion.div
                      className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      <AnimatedCounter target={item.value} suffix={item.suffix} />
                    </motion.div>
                    <div className="text-slate-400 font-medium">{item.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center mt-10">
                <Button
                  asChild
                  variant="glow"
                  size="lg"
                  className="rounded-full px-10 group"
                >
                  <Link href="/contact">
                    <Sparkles className="w-5 h-5" />
                    Start Your Project
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioStatsSection;
