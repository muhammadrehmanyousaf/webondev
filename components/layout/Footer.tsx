'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Github,
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  Globe,
  Shield,
  Award,
  Send,
  Code2,
  ExternalLink,
  Heart,
  Sparkles,
  Zap,
  Clock,
  Users,
  Star,
  CheckCircle,
  Headphones,
  MessageCircle,
  ChevronRight,
  Rocket,
  TrendingUp,
  Building2,
  Smartphone,
  Palette,
  BarChart3,
  Cloud,
  Cpu,
  Play,
  MousePointer,
  Waves,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

// =============================================================================
// MAGNETIC BUTTON COMPONENT
// =============================================================================

const MagneticButton = ({ children, className = '', href, onClick, external = false }: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  external?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.3;
    const deltaY = (e.clientY - centerY) * 0.3;
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

  const content = (
    <motion.div
      ref={ref}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>
    ) : (
      <Link href={href}>{content}</Link>
    );
  }

  return content;
};

// =============================================================================
// 3D TILT CARD COMPONENT
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
// ANIMATED GRADIENT TEXT
// =============================================================================

const GradientText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="absolute inset-0 bg-gradient-to-r from-brand-400 via-teal-400 via-cyan-400 to-brand-400 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent blur-xl opacity-50">
        {children}
      </span>
      <span className="relative bg-gradient-to-r from-brand-400 via-teal-400 via-cyan-400 to-brand-400 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
        {children}
      </span>
    </span>
  );
};

// =============================================================================
// FLOATING PARTICLES
// =============================================================================

const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
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
// ANIMATED WAVE
// =============================================================================

const AnimatedWave = () => {
  return (
    <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
      <svg
        className="absolute bottom-0 w-full h-32"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z"
          fill="url(#wave-gradient)"
          animate={{
            d: [
              "M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z",
              "M0,80 C360,20 720,100 1080,40 C1260,60 1380,80 1440,40 L1440,120 L0,120 Z",
              "M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.1)" />
            <stop offset="50%" stopColor="rgba(20, 184, 166, 0.15)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
          </linearGradient>
        </defs>
      </svg>
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
// MARQUEE COMPONENT
// =============================================================================

const Marquee = ({ children, speed = 30, direction = 'left' }: {
  children: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
}) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-flex"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

// =============================================================================
// INTERACTIVE GLOBE
// =============================================================================

const InteractiveGlobe = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-48 h-48 mx-auto">
      {/* Globe Base */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-brand-500/30"
        style={{ transform: `rotateY(${rotation}deg)` }}
      />
      {/* Latitude Lines */}
      {[20, 40, 60, 80].map((deg, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-brand-500/20"
          style={{
            inset: `${deg / 2}%`,
            transform: `rotateX(60deg) rotateZ(${rotation + i * 20}deg)`,
          }}
        />
      ))}
      {/* Longitude Lines */}
      {[0, 45, 90, 135].map((deg, i) => (
        <motion.div
          key={`long-${i}`}
          className="absolute inset-0 rounded-full border border-brand-500/20"
          style={{
            transform: `rotateY(${deg + rotation}deg)`,
          }}
        />
      ))}
      {/* Center Glow */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-500/30 to-teal-500/30 blur-xl" />
      {/* Location Dots */}
      {[
        { top: '30%', left: '25%' },
        { top: '45%', left: '75%' },
        { top: '60%', left: '40%' },
        { top: '35%', left: '60%' },
        { top: '55%', left: '20%' },
      ].map((pos, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 rounded-full bg-brand-400"
          style={pos}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
          }}
        >
          <div className="absolute inset-0 rounded-full bg-brand-400 animate-ping" />
        </motion.div>
      ))}
    </div>
  );
};

// =============================================================================
// BACK TO TOP WITH ROCKET
// =============================================================================

const BackToTopRocket = () => {
  const [show, setShow] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsLaunching(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setIsLaunching(false), 1000);
    }, 300);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Back to top"
        >
          <div className="relative">
            {/* Circular Progress */}
            <svg className="w-16 h-16 -rotate-90">
              <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none" />
              <motion.circle
                cx="32" cy="32" r="28"
                stroke="url(#progress-gradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                style={{ pathLength: scrollYProgress }}
                strokeDasharray="1 1"
              />
              <defs>
                <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Rocket Button */}
            <motion.div
              className="absolute inset-2 bg-slate-900/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 group-hover:border-brand-500/50 transition-all duration-300 overflow-hidden"
              animate={isLaunching ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Rocket className="w-6 h-6 text-brand-400 group-hover:text-brand-300 transition-colors transform -rotate-45" />
              {/* Flame Effect */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3 h-6 bg-gradient-to-t from-orange-500 via-yellow-500 to-transparent rounded-full opacity-0 group-hover:opacity-100"
                animate={{ scaleY: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 0.3, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// =============================================================================
// DATA
// =============================================================================

const companyInfo = {
  name: 'Web On Dev',
  tagline: 'Transforming Ideas Into Digital Reality',
  description: 'Award-winning software development company delivering cutting-edge web applications, mobile apps, and digital transformation solutions. Trusted by 500+ clients across 50+ countries.',
};

const services = [
  { name: 'Web Development', href: '/web-development', icon: Code2, color: 'from-brand-500 to-teal-500' },
  { name: 'Mobile Apps', href: '/mobile-development', icon: Smartphone, color: 'from-teal-500 to-cyan-500' },
  { name: 'UI/UX Design', href: '/ui-ux-design', icon: Palette, color: 'from-cyan-500 to-blue-500' },
  { name: 'Digital Marketing', href: '/digital-marketing', icon: BarChart3, color: 'from-purple-500 to-pink-500' },
  { name: 'Cloud & DevOps', href: '/cloud-devops', icon: Cloud, color: 'from-blue-500 to-indigo-500' },
  { name: 'AI Solutions', href: '/consulting-strategy', icon: Cpu, color: 'from-pink-500 to-rose-500' },
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
  { name: 'Where We Serve', href: '/where-we-serve' },
];

const locations = [
  { name: 'United States', flag: '🇺🇸', cities: '50+ Cities' },
  { name: 'United Kingdom', flag: '🇬🇧', cities: '30+ Cities' },
  { name: 'Canada', flag: '🇨🇦', cities: '20+ Cities' },
  { name: 'Australia', flag: '🇦🇺', cities: '15+ Cities' },
  { name: 'UAE', flag: '🇦🇪', cities: '7 Emirates' },
  { name: 'Germany', flag: '🇩🇪', cities: '25+ Cities' },
];

const socialLinks = [
  { icon: Youtube, href: 'https://www.youtube.com/@webondev', label: 'YouTube', color: '#FF0000' },
  { icon: Twitter, href: 'https://x.com/webon_dev', label: 'X', color: '#1DA1F2' },
  { icon: Facebook, href: 'https://www.facebook.com/people/Web-On-Dev/61584774954945/', label: 'Facebook', color: '#1877F2' },
  { icon: Instagram, href: 'https://www.instagram.com/webondev/', label: 'Instagram', color: '#E4405F' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/webondev', label: 'LinkedIn', color: '#0A66C2' },
  { icon: Github, href: 'https://github.com/webondev', label: 'GitHub', color: '#ffffff' },
];

const stats = [
  { value: '500+', label: 'Projects Delivered', icon: Rocket },
  { value: '50+', label: 'Countries Served', icon: Globe },
  { value: '99%', label: 'Client Satisfaction', icon: Heart },
  { value: '24/7', label: 'Support Available', icon: Headphones },
];

const clients = [
  'TechCorp', 'InnovateLab', 'StartupX', 'GlobalTech', 'FutureCo', 'DigitalFirst',
  'SmartSolutions', 'NextGen', 'CloudPro', 'DataDriven', 'AI Dynamics', 'CodeCraft'
];

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Flutter', 'PostgreSQL',
  'MongoDB', 'GraphQL', 'Docker', 'Kubernetes', 'TailwindCSS', 'Figma', 'Vercel', 'Redis'
];

// =============================================================================
// MAIN FOOTER COMPONENT
// =============================================================================

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const footerRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (footerRef.current) {
      const rect = footerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  }, []);

  useEffect(() => {
    const footer = footerRef.current;
    if (footer) {
      footer.addEventListener('mousemove', handleMouseMove);
      return () => footer.removeEventListener('mousemove', handleMouseMove);
    }
  }, [handleMouseMove]);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({ title: 'Invalid Email', description: 'Please enter a valid email.', variant: 'destructive' });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Newsletter', email, formType: 'newsletter', message: `Newsletter: ${email}` }),
      });
      if (response.ok) {
        toast({ title: '🎉 Welcome Aboard!', description: 'You\'re now part of our community!' });
        setEmail('');
      }
    } catch {
      toast({ title: 'Oops!', description: 'Something went wrong. Try again!', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.webondev.com/#organization',
    name: 'Web On Dev',
    url: 'https://www.webondev.com',
    logo: 'https://www.webondev.com/images/branding/logo.png',
    description: companyInfo.description,
    foundingDate: '2020',
    address: { '@type': 'PostalAddress', addressLocality: 'Lahore', addressCountry: 'PK' },
    contactPoint: [
      { '@type': 'ContactPoint', telephone: '+92-310-6803687', contactType: 'sales' },
      { '@type': 'ContactPoint', email: 'webondev786@gmail.com', contactType: 'customer service' },
    ],
    sameAs: socialLinks.map(s => s.href),
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '250', bestRating: '5' },
  };

  return (
    <>
      <footer
        ref={footerRef}
        className="relative bg-[#030712] text-white overflow-hidden"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
          <GlowingOrb color="bg-brand-500/20" size={800} position={{ top: '-20%', left: '-10%' }} />
          <GlowingOrb color="bg-teal-500/20" size={600} position={{ top: '30%', right: '-15%' }} delay={2} />
          <GlowingOrb color="bg-cyan-500/20" size={500} position={{ bottom: '-10%', left: '30%' }} delay={4} />
          <GlowingOrb color="bg-purple-500/15" size={400} position={{ bottom: '20%', right: '20%' }} delay={3} />
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

        {/* Wave Separator */}
        <AnimatedWave />

        <div className="relative z-10 pt-32">
          {/* Hero CTA Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="relative">
              {/* Main CTA Card */}
              <TiltCard className="relative group cursor-default">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
                <div className="relative bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-8 md:p-12 lg:p-16 border border-white/10 overflow-hidden">
                  {/* Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-teal-500/5" />

                  <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 mb-8"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        >
                          <Sparkles className="w-4 h-4 text-brand-400" />
                        </motion.div>
                        <span className="text-brand-400 font-semibold text-sm">Join 10,000+ Innovators</span>
                      </motion.div>

                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                      >
                        <span className="text-white">Let&apos;s Build</span>
                        <br />
                        <GradientText>Something Epic</GradientText>
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-400 mb-8 leading-relaxed"
                      >
                        Get weekly insights on web development, AI, and digital innovation.
                        No spam, just pure value.
                      </motion.p>

                      {/* Newsletter Form */}
                      <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        onSubmit={handleNewsletterSubmit}
                        className="space-y-4"
                      >
                        <div className="flex flex-col sm:flex-row gap-3">
                          <div className="flex-1 relative group/input">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-2xl blur opacity-0 group-focus-within/input:opacity-50 transition duration-300" />
                            <div className="relative flex items-center">
                              <Mail className="absolute left-5 w-5 h-5 text-slate-500" />
                              <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full pl-14 pr-5 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500/50 transition-all text-lg"
                                required
                              />
                            </div>
                          </div>
                          <MagneticButton>
                            <Button
                              type="submit"
                              disabled={isSubmitting}
                              variant="glow"
                              size="lg"
                              className="rounded-2xl px-8 py-5 text-lg h-auto whitespace-nowrap"
                            >
                              {isSubmitting ? (
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                />
                              ) : (
                                <>
                                  <span>Subscribe</span>
                                  <ArrowRight className="w-5 h-5 ml-2" />
                                </>
                              )}
                            </Button>
                          </MagneticButton>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <CheckCircle className="w-4 h-4 text-brand-500" />
                          <span>Free forever. Unsubscribe anytime.</span>
                        </div>
                      </motion.form>
                    </div>

                    {/* Right - Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="group relative"
                        >
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/50 to-teal-500/50 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-300" />
                          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-brand-500/30 transition-all text-center">
                            <motion.div
                              className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-brand-500/20 to-teal-500/20 flex items-center justify-center"
                              whileHover={{ rotate: [0, -10, 10, 0] }}
                              transition={{ duration: 0.5 }}
                            >
                              <stat.icon className="w-7 h-7 text-brand-400" />
                            </motion.div>
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-slate-400">{stat.label}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Client Logos Marquee */}
          <div className="border-y border-white/5 py-8 bg-white/[0.02]">
            <Marquee speed={40}>
              <div className="flex items-center gap-16 px-8">
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="text-2xl font-bold text-slate-700 hover:text-slate-500 transition-colors whitespace-nowrap"
                  >
                    {client}
                  </div>
                ))}
              </div>
            </Marquee>
          </div>

          {/* Main Footer Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
              {/* Company Info */}
              <div className="lg:col-span-4">
                <Link href="/" className="inline-flex items-center gap-4 group mb-8">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-teal-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition" />
                    <div className="relative w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center border border-white/10">
                      <Code2 className="w-8 h-8 text-brand-400" />
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white" itemProp="name">{companyInfo.name}</h3>
                    <p className="text-sm text-brand-400">{companyInfo.tagline}</p>
                  </div>
                </Link>

                <p className="text-slate-400 mb-8 leading-relaxed" itemProp="description">
                  {companyInfo.description}
                </p>

                {/* Contact */}
                <div className="space-y-4 mb-8">
                  {[
                    { icon: Mail, text: 'webondev786@gmail.com', href: 'mailto:webondev786@gmail.com', color: 'brand' },
                    { icon: Phone, text: '+92 310 6803687', href: 'tel:+923106803687', color: 'teal' },
                    { icon: MapPin, text: 'Pakistan • UAE • USA • UK', color: 'cyan' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center`}>
                        <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                      </div>
                      {item.href ? (
                        <a href={item.href} className="text-slate-400 hover:text-white transition-colors">
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-slate-400">{item.text}</span>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <MagneticButton key={index} href={social.href} external>
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group hover:border-white/30 transition-all"
                        whileHover={{ scale: 1.1 }}
                        style={{ '--hover-color': social.color } as React.CSSProperties}
                      >
                        <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                      </motion.div>
                    </MagneticButton>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="lg:col-span-3">
                <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-brand-400" />
                  Services
                </h4>
                <nav aria-label="Services">
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li key={index}>
                        <motion.div whileHover={{ x: 10 }}>
                          <Link
                            href={service.href}
                            className="flex items-center gap-3 text-slate-400 hover:text-white transition-all group"
                          >
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${service.color} p-[1px]`}>
                              <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-transparent transition-colors">
                                <service.icon className="w-4 h-4 text-white" />
                              </div>
                            </div>
                            <span>{service.name}</span>
                            <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </motion.div>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-2">
                <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-teal-400" />
                  Company
                </h4>
                <nav aria-label="Company">
                  <ul className="space-y-3">
                    {quickLinks.map((link, index) => (
                      <li key={index}>
                        <motion.div whileHover={{ x: 10 }}>
                          <Link
                            href={link.href}
                            className="text-slate-400 hover:text-white transition-all flex items-center gap-2 group"
                          >
                            <ChevronRight className="w-4 h-4 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            {link.name}
                          </Link>
                        </motion.div>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Globe & Locations */}
              <div className="lg:col-span-3">
                <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  Global Presence
                </h4>

                <InteractiveGlobe />

                <div className="grid grid-cols-2 gap-2 mt-6">
                  {locations.map((loc, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-brand-500/30 transition-all cursor-pointer"
                    >
                      <span className="text-lg">{loc.flag}</span>
                      <div className="text-xs">
                        <div className="text-white font-medium">{loc.name}</div>
                        <div className="text-slate-500">{loc.cities}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="border-t border-white/5 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-6">
                <span className="text-xs text-slate-500 uppercase tracking-wider">Powered by Modern Technology</span>
              </div>
              <Marquee speed={50} direction="right">
                <div className="flex items-center gap-8 px-4">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-400 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 bg-black/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                {/* Copyright */}
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <span>&copy; {currentYear} {companyInfo.name}.</span>
                  <span>All rights reserved.</span>
                  <span className="hidden sm:inline-flex items-center gap-1">
                    Made with
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                    </motion.span>
                    in Pakistan
                  </span>
                </div>

                {/* Legal Links */}
                <div className="flex items-center gap-6 text-sm">
                  {['Privacy', 'Terms', 'Cookies', 'Sitemap'].map((link, index) => (
                    <Link
                      key={index}
                      href={`/${link.toLowerCase()}`}
                      className="text-slate-500 hover:text-brand-400 transition-colors"
                    >
                      {link}
                    </Link>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="flex gap-3">
                  {[
                    { icon: Shield, label: 'SSL', color: 'text-green-400' },
                    { icon: Award, label: 'ISO', color: 'text-amber-400' },
                    { icon: Star, label: '5.0', color: 'text-yellow-400' },
                  ].map((badge, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs"
                    >
                      <badge.icon className={`w-3.5 h-3.5 ${badge.color}`} />
                      <span className="text-slate-400">{badge.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <BackToTopRocket />

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
    </>
  );
};

export default Footer;
