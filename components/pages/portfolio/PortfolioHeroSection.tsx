'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowDown,
  Play,
  Star,
  Zap,
  Award,
  Users,
  Globe,
  TrendingUp,
  Rocket,
  Code2,
  Eye,
  Heart
} from 'lucide-react';

// =============================================================================
// FLOATING PARTICLES
// =============================================================================

const FloatingParticles = () => {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-brand-500/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

// =============================================================================
// GLOWING ORB
// =============================================================================

const GlowingOrb = ({ color, size, position, delay = 0 }: {
  color: string;
  size: number;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  delay?: number;
}) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-[100px] ${color}`}
      style={{
        width: size,
        height: size,
        ...position,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
        x: [0, 30, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

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
// MAGNETIC ELEMENT
// =============================================================================

const MagneticElement = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.2;
    const deltaY = (e.clientY - centerY) * 0.2;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const springConfig = { stiffness: 150, damping: 15 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  return (
    <motion.div
      ref={ref}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// =============================================================================
// 3D TILT CARD
// =============================================================================

const TiltCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
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
// ANIMATED COUNTER
// =============================================================================

const AnimatedCounter = ({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
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

  return <span ref={ref}>{count}{suffix}</span>;
};

// =============================================================================
// MAIN HERO COMPONENT
// =============================================================================

const PortfolioHeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, [handleMouseMove]);

  const stats = [
    { icon: Rocket, value: 150, suffix: '+', label: 'Projects Delivered', color: 'from-brand-500 to-teal-500' },
    { icon: Users, value: 150, suffix: '+', label: 'Happy Clients', color: 'from-teal-500 to-cyan-500' },
    { icon: Globe, value: 5, suffix: '+', label: 'Countries Served', color: 'from-cyan-500 to-blue-500' },
    { icon: TrendingUp, value: 99, suffix: '%', label: 'Success Rate', color: 'from-purple-500 to-pink-500' },
  ];

  const featuredProject = {
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB'],
    stats: { views: '50K+', likes: '2.5K' }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#030712] pt-24 pb-32"
    >
      {/* Mouse Follower Gradient */}
      <div
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[100px] transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)',
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
      />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GlowingOrb color="bg-brand-500/20" size={800} position={{ top: '-20%', right: '-10%' }} />
        <GlowingOrb color="bg-teal-500/20" size={600} position={{ bottom: '-10%', left: '-15%' }} delay={2} />
        <GlowingOrb color="bg-cyan-500/20" size={500} position={{ top: '40%', left: '50%' }} delay={4} />
        <GlowingOrb color="bg-purple-500/15" size={400} position={{ bottom: '20%', right: '10%' }} delay={3} />
        <FloatingParticles />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-4 h-4 text-brand-400" />
              </motion.div>
              <span className="text-brand-400 font-semibold text-sm">Award-Winning Portfolio</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Our Work{' '}
              <GradientText>Speaks</GradientText>
              <br />
              <span className="text-white">Louder Than</span>{' '}
              <span className="relative">
                <span className="text-white">Words</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Explore our portfolio of successful projects that showcase our expertise in delivering
              innovative software solutions across various industries.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <MagneticElement>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 bg-[length:200%_auto] animate-gradient-x" />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-600 via-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    View Projects
                  </span>
                </motion.button>
              </MagneticElement>

              <MagneticElement>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 rounded-2xl font-semibold text-white border border-white/20 hover:border-brand-500/50 bg-white/5 backdrop-blur-sm transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <Play className="w-5 h-5 group-hover:text-brand-400 transition-colors" />
                    Watch Showreel
                  </span>
                </motion.button>
              </MagneticElement>
            </motion.div>
          </div>

          {/* Right - Featured Project Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <TiltCard className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative bg-slate-900/80 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                  {/* Play Button Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-brand-500/90 backdrop-blur-sm text-white font-semibold text-sm">
                    {featuredProject.category}
                  </div>

                  {/* Stats */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                      <Eye className="w-4 h-4" />
                      {featuredProject.stats.views}
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                      <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                      {featuredProject.stats.likes}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{featuredProject.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/50 to-teal-500/50 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-300" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-brand-500/30 transition-all text-center">
                <motion.div
                  className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} p-[1px]`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                </motion.div>
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-500"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>

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

export default PortfolioHeroSection;
