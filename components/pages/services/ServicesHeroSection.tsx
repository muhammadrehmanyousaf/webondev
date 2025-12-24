'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import {
  Code, Smartphone, Palette, TrendingUp, Cloud, Users, Building, Settings, Globe, ShoppingCart,
  Sparkles, ArrowRight, CheckCircle2, Zap, Award, Shield, Clock
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Floating Particles Component
const FloatingParticles = () => {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-brand-400/30 to-teal-400/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.3, 1],
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

// Animated Counter Component
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

// Interactive Service Icon Component
const ServiceIcon = ({ icon: Icon, color, index, delay }: {
  icon: React.ElementType;
  color: string;
  index: number;
  delay: number;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });
  const rotateX = useTransform(springY, [-50, 50], [15, -15]);
  const rotateY = useTransform(springX, [-50, 50], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: delay
      }}
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="service-icon group relative cursor-pointer"
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-2 bg-gradient-to-r ${color} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

      <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-brand-500/50 transition-all duration-300 group-hover:scale-110">
        <motion.div
          className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${color} rounded-xl shadow-lg`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const ServicesHeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

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

  const serviceIcons = [
    { icon: Globe, color: 'from-brand-500 to-teal-500' },
    { icon: Smartphone, color: 'from-teal-500 to-cyan-500' },
    { icon: Code, color: 'from-cyan-500 to-blue-500' },
    { icon: Palette, color: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, color: 'from-pink-500 to-rose-500' },
    { icon: ShoppingCart, color: 'from-orange-500 to-amber-500' },
    { icon: Cloud, color: 'from-blue-500 to-brand-500' },
    { icon: Users, color: 'from-brand-500 to-teal-500' },
    { icon: Building, color: 'from-slate-500 to-gray-500' },
    { icon: Settings, color: 'from-gray-500 to-brand-500' }
  ];

  const stats = [
    { value: 10, suffix: '+', label: 'Service Categories', icon: Sparkles },
    { value: 100, suffix: '+', label: 'Specialized Services', icon: Zap },
    { value: 150, suffix: '+', label: 'Projects Delivered', icon: Award },
    { value: 24, suffix: '/7', label: 'Support Available', icon: Clock },
  ];

  const trustBadges = [
    { icon: Shield, text: 'Quality Guaranteed' },
    { icon: CheckCircle2, text: '100% Satisfaction' },
    { icon: Award, text: 'Industry Certified' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
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
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* Dot Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Floating Particles */}
        <FloatingParticles />

        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <div className="max-w-5xl mx-auto mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Complete Software Solutions</span>
          </motion.div>

          {/* Hero Title */}
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="text-white">Complete Software</span>
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
            <br />
            <span className="text-white">for Your Business</span>
          </h1>

          {/* Hero Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            From web development to mobile apps, from design to marketing - we provide
            end-to-end digital solutions that drive growth and innovation for businesses of all sizes.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              asChild
              variant="glow"
              size="xl"
              className="rounded-full px-10 group"
            >
              <Link href="/contact">
                <Sparkles className="w-5 h-5" />
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="rounded-full px-10 border-white/20 text-white hover:bg-white/10"
            >
              <Link href="/portfolio">
                View Our Work
              </Link>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex items-center gap-2 text-slate-400"
              >
                <badge.icon className="w-4 h-4 text-brand-400" />
                <span className="text-sm font-medium">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Service Icons Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-5 md:grid-cols-10 gap-4 md:gap-6 max-w-5xl mx-auto mb-20"
        >
          {serviceIcons.map((service, index) => (
            <ServiceIcon
              key={index}
              icon={service.icon}
              color={service.color}
              index={index}
              delay={0.6 + index * 0.08}
            />
          ))}
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.7 + index * 0.1 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

              <motion.div
                className="relative text-center bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-brand-500/50 transition-all duration-500"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-brand-500 to-teal-500 rounded-xl mx-auto mb-4 shadow-lg shadow-brand-500/20">
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

export default ServicesHeroSection;
