'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

// =============================================================================
// ANIMATED MESH GRADIENT BACKGROUND
// =============================================================================

const MeshGradientBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary mesh gradient */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
          top: '-20%',
          left: '-10%',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.5) 0%, transparent 70%)',
          bottom: '-10%',
          right: '-5%',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
          top: '40%',
          right: '20%',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
};

// =============================================================================
// PARTICLE SYSTEM
// =============================================================================

const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

// =============================================================================
// FLOATING STATS BADGES
// =============================================================================

const FloatingStatBadge = ({
  value,
  label,
  icon,
  delay,
  position,
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
  delay: number;
  position: string;
}) => {
  return (
    <motion.div
      className={`absolute ${position} hidden lg:flex items-center gap-3 glass-card p-4 rounded-2xl shadow-glass`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/25">
        {icon}
      </div>
      <div>
        <div className="text-xl font-bold text-foreground">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </motion.div>
  );
};

// =============================================================================
// ROTATING TEXT COMPONENT
// =============================================================================

const RotatingText = () => {
  const words = ['Digital Vision', 'Business Growth', 'Online Success', 'Web Presence'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block min-w-[300px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

// =============================================================================
// MAIN HERO COMPONENT
// =============================================================================

const HeroSectionBeams = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(
          badgesRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.3'
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20 md:pt-16">
      {/* Background Layers */}
      <MeshGradientBackground />
      <ParticleField />

      {/* Floating Stat Badges */}
      <FloatingStatBadge
        value="500+"
        label="Projects"
        icon={<CheckCircle className="w-6 h-6" />}
        delay={1.5}
        position="top-[25%] left-[8%]"
      />
      <FloatingStatBadge
        value="4.9/5"
        label="Rating"
        icon={<Star className="w-6 h-6" />}
        delay={1.8}
        position="top-[35%] right-[8%]"
      />
      <FloatingStatBadge
        value="200+"
        label="Clients"
        icon={<Sparkles className="w-6 h-6" />}
        delay={2.1}
        position="bottom-[30%] left-[12%]"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-sm font-medium text-brand-400">
              Trusted by 200+ Companies Worldwide
            </span>
          </motion.div>

          {/* Hero Title */}
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            Transform Your
            <br />
            <RotatingText />
            <br />
            Into Reality
          </h1>

          {/* Hero Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            We deliver cutting-edge web development, mobile apps, and digital solutions
            that drive business growth. Your success is our mission.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              asChild
              size="xl"
              variant="glow"
              className="rounded-full group"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="glass"
              className="rounded-full group"
            >
              <Link href="/portfolio" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                View Our Work
              </Link>
            </Button>
          </div>

          {/* Trust Badges Row */}
          <div
            ref={badgesRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-slate-800/50"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-slate-950 bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-xs font-bold text-white"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-slate-400 text-sm ml-2">
                Join 200+ happy clients
              </span>
            </div>

            <div className="hidden sm:block w-px h-8 bg-slate-700" />

            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-500 fill-yellow-500"
                />
              ))}
              <span className="text-slate-400 text-sm ml-2">4.9/5 on Clutch</span>
            </div>

            <div className="hidden sm:block w-px h-8 bg-slate-700" />

            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <CheckCircle className="w-5 h-5 text-brand-500" />
              <span>10+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 border border-brand-500/10 rounded-full blur-xl" />
      <div className="absolute bottom-40 right-20 w-60 h-60 border border-brand-500/5 rounded-full blur-2xl" />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-brand-500/30 flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-brand-500 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSectionBeams;
