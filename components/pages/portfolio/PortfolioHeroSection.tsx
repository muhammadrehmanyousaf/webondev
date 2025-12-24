'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import {
  ExternalLink, ArrowRight, Award, Users, Globe, Zap, Sparkles,
  Play, Pause, ChevronLeft, ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/portfolio-data';

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

// Floating Particles
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-brand-400/20 to-teal-400/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const PortfolioHeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredProjects = projects.slice(0, 3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(titleRef.current,
        { opacity: 0, y: 100, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.6"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredProjects.length]);

  const nextProject = () => {
    setIsAutoPlaying(false);
    setActiveProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setIsAutoPlaying(false);
    setActiveProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const stats = [
    { icon: Award, value: 150, suffix: '+', label: 'Projects Delivered', gradient: 'from-brand-500 to-teal-500' },
    { icon: Users, value: 150, suffix: '+', label: 'Happy Clients', gradient: 'from-teal-500 to-cyan-500' },
    { icon: Globe, value: 5, suffix: '+', label: 'Countries Served', gradient: 'from-cyan-500 to-blue-500' },
    { icon: Zap, value: 99, suffix: '%', label: 'Success Rate', gradient: 'from-blue-500 to-brand-500' }
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[120px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dot Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <FloatingParticles />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <div className="max-w-5xl mx-auto mb-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Our Portfolio</span>
          </motion.div>

          {/* Hero Title */}
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="text-white">Our Work Speaks</span>
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Louder
            </span>
            <br />
            <span className="text-white">Than Words</span>
          </h1>

          {/* Hero Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Explore our portfolio of successful projects that showcase our expertise
            in delivering innovative software solutions across various industries.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              asChild
              variant="glow"
              size="xl"
              className="rounded-full px-10 group"
            >
              <Link href="/contact">
                <Sparkles className="w-5 h-5" />
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="rounded-full px-10 border-white/20 text-white hover:bg-white/10"
            >
              <Link href="#projects">
                Browse Projects
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Featured Project Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative max-w-5xl mx-auto mb-20"
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Project Image */}
                  <div className="relative h-64 md:h-96 overflow-hidden">
                    <img
                      src={featuredProjects[activeProject].image}
                      alt={featuredProjects[activeProject].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                    {/* Project Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div className="text-left">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-4">
                            {featuredProjects[activeProject].category}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {featuredProjects[activeProject].title}
                          </h3>
                          <p className="text-slate-300 max-w-xl line-clamp-2">
                            {featuredProjects[activeProject].description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {featuredProjects[activeProject].technologies.slice(0, 4).map((tech, idx) => (
                              <span key={idx} className="px-2 py-1 bg-white/10 rounded-lg text-xs text-slate-300">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <motion.a
                            href={featuredProjects[activeProject].liveUrl}
                            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-brand-500 to-teal-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-brand-500/25 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Project
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Controls */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                <motion.button
                  onClick={prevProject}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={nextProject}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Carousel Dots & Play/Pause */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
                <motion.button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                </motion.button>
                <div className="flex gap-2">
                  {featuredProjects.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setActiveProject(index);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeProject
                          ? 'w-8 bg-gradient-to-r from-brand-500 to-teal-500'
                          : 'w-2 bg-white/30 hover:bg-white/50'
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              <motion.div
                className="relative text-center bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-brand-500/50 transition-all duration-500"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-xl mx-auto mb-4 shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
};

export default PortfolioHeroSection;
