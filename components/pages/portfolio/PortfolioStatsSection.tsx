'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
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
  Sparkles,
  BarChart3
} from 'lucide-react';

// =============================================================================
// GRADIENT TEXT
// =============================================================================

const GradientText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="absolute inset-0 bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent blur-xl opacity-50">
        {children}
      </span>
      <span className="relative bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
        {children}
      </span>
    </span>
  );
};

// =============================================================================
// ANIMATED COUNTER
// =============================================================================

const AnimatedCounter = ({ value, suffix = '', prefix = '', duration = 2 }: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

// =============================================================================
// 3D TILT CARD
// =============================================================================

const TiltCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateXValue = ((e.clientY - centerY) / (rect.height / 2)) * -5;
    const rotateYValue = ((e.clientX - centerX) / (rect.width / 2)) * 5;
    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// =============================================================================
// DATA
// =============================================================================

const stats = [
  {
    icon: Award,
    value: 150,
    suffix: '+',
    label: 'Projects Completed',
    description: 'Successfully delivered across all categories',
    color: 'from-brand-500 to-teal-500'
  },
  {
    icon: Users,
    value: 150,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Satisfied customers worldwide',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Globe,
    value: 5,
    suffix: '+',
    label: 'Countries Served',
    description: 'Global reach and impact',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: TrendingUp,
    value: 99,
    suffix: '%',
    label: 'Success Rate',
    description: 'Projects delivered on time and budget',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Clock,
    value: 98,
    suffix: '%',
    label: 'On-Time Delivery',
    description: 'Consistent project timeline adherence',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Code,
    value: 50,
    suffix: '+',
    label: 'Technologies',
    description: 'Diverse tech stack expertise',
    color: 'from-rose-500 to-red-500'
  },
  {
    icon: Smartphone,
    value: 50,
    suffix: '+',
    label: 'Mobile Apps',
    description: 'iOS and Android applications',
    color: 'from-indigo-500 to-violet-500'
  },
  {
    icon: Zap,
    value: 24,
    suffix: '/7',
    label: 'Support',
    description: 'Round-the-clock assistance',
    color: 'from-emerald-500 to-green-500'
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
    company: "RetailCorp"
  },
  {
    id: 2,
    quote: "The mobile app they developed for our healthcare platform has been a game-changer. User engagement increased by 250%.",
    author: "Dr. Michael Chen",
    position: "CTO, HealthTech Solutions",
    avatar: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    rating: 5,
    company: "HealthTech"
  },
  {
    id: 3,
    quote: "Their analytics dashboard transformed how we make business decisions. The insights are invaluable and the interface is beautiful.",
    author: "Emily Rodriguez",
    position: "VP Analytics, DataInsights Inc",
    avatar: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    rating: 5,
    company: "DataInsights"
  },
  {
    id: 4,
    quote: "Working with Web On Dev was a pleasure. They understood our vision perfectly and delivered a product that exceeded expectations.",
    author: "James Wilson",
    position: "Founder, StartupX",
    avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    rating: 5,
    company: "StartupX"
  }
];

const achievements = [
  { icon: Award, value: '15+', label: 'Awards Won', color: 'text-amber-400' },
  { icon: Star, value: '4.9/5', label: 'Client Rating', color: 'text-yellow-400' },
  { icon: Heart, value: '95%', label: 'Client Retention', color: 'text-red-400' },
  { icon: Shield, value: '100%', label: 'Satisfaction Rate', color: 'text-green-400' }
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
    <section className="relative py-20 bg-[#030712] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 mb-6"
          >
            <BarChart3 className="w-4 h-4 text-brand-400" />
            <span className="text-brand-400 font-semibold text-sm">Our Impact</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Portfolio <GradientText>Impact</GradientText>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Our portfolio speaks for itself. Here are the numbers that showcase our commitment to excellence and client success.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className="group relative h-full">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500`} />

                  {/* Card */}
                  <div className="relative h-full bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-brand-500/30 transition-all duration-500 text-center">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} p-[2px]`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Value */}
                    <div className="text-4xl font-bold text-white mb-2">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>

                    {/* Label */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                      {stat.label}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          {/* Testimonials Card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/30 via-teal-500/30 to-cyan-500/30 rounded-3xl blur-xl opacity-50" />
          <div className="relative bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/10 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-500/10 to-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />

            {/* Header */}
            <div className="text-center mb-12 relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                What Our <GradientText>Clients</GradientText> Say
              </h3>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
              </p>
            </div>

            {/* Testimonial Carousel */}
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-3xl mx-auto"
                >
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500/20 to-teal-500/20 flex items-center justify-center border border-brand-500/20">
                      <Quote className="w-8 h-8 text-brand-400" />
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-center text-white mb-8 leading-relaxed">
                    &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                  </blockquote>

                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[activeTestimonial].rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-slate-600'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonials[activeTestimonial].avatar}
                      alt={testimonials[activeTestimonial].author}
                      className="w-14 h-14 rounded-full object-cover border-2 border-brand-500/30"
                    />
                    <div className="text-left">
                      <div className="font-bold text-white">{testimonials[activeTestimonial].author}</div>
                      <div className="text-sm text-slate-400">{testimonials[activeTestimonial].position}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-brand-500/30 transition-all"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </motion.button>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Go to testimonial ${index + 1}`}
                      title={`Go to testimonial ${index + 1}`}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setActiveTestimonial(index);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeTestimonial
                          ? 'bg-brand-500 w-8'
                          : 'bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-brand-500/30 transition-all"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Industry Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-brand-400 font-semibold text-sm">Industry Recognition</span>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/30 to-teal-500/30 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-300" />
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-brand-500/30 transition-all">
                  <achievement.icon className={`w-8 h-8 mx-auto mb-4 ${achievement.color}`} />
                  <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                  <div className="text-sm text-slate-400">{achievement.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CSS for gradient animation */}
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default PortfolioStatsSection;
