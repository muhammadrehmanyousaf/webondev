'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';

// Canvas Beams Component - Professional animated background
const BeamsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId: number;
    let time = 0;

    const drawBeams = () => {
      // Dark background with slight transparency
      ctx.fillStyle = 'rgba(15, 23, 42, 0.98)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.008; // Very slow, professional rotation

      const beamCount = 12; // Elegant fewer beams
      const centerX = canvas.width / 2;
      const centerY = canvas.height * 0.6; // Position beams in upper-middle area

      for (let i = 0; i < beamCount; i++) {
        // Very slow, smooth rotation - more professional
        const angle = (i / beamCount) * Math.PI * 2 + time * 0.15;
        const length = 280 + Math.sin(time * 0.25 + i) * 60;
        
        // Beam start and end
        const startX = centerX + Math.cos(angle) * 40;
        const startY = centerY + Math.sin(angle) * 40;
        const endX = centerX + Math.cos(angle) * length;
        const endY = centerY + Math.sin(angle) * length;

        // Elegant orange gradient with subtle fade
        const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
        gradient.addColorStop(0, 'rgba(249, 115, 22, 0.5)');
        gradient.addColorStop(0.4, 'rgba(249, 115, 22, 0.25)');
        gradient.addColorStop(1, 'rgba(249, 115, 22, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5 + Math.sin(time * 0.3 + i) * 0.6;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(drawBeams);
    };

    drawBeams();

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
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.35 }}
    />
  );
};

const HeroSectionBeams = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20 md:pt-16">
      {/* Animated Beams Background */}
      <BeamsBackground />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 70%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Title */}
          <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent"> Digital Vision </span>
            Into Reality
          </h1>

          {/* Hero Subtitle */}
          <p ref={subtitleRef} className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            We deliver cutting-edge software solutions, web development, mobile apps, and digital marketing services that drive business growth and innovation. Your success is our mission.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-orange-500 text-orange-400 hover:bg-orange-500/10 text-lg px-8 py-4 rounded-full transition-all duration-300">
              <Link href="/portfolio" className="flex items-center gap-2">
                View Our Work
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-slate-800">
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-orange-500">500+</div>
              <div className="text-slate-400 text-sm">Projects Delivered</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-700"></div>
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-orange-500">98%</div>
              <div className="text-slate-400 text-sm">Client Satisfaction</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-700"></div>
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-orange-500">10+</div>
              <div className="text-slate-400 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating accent elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-orange-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 border border-orange-500/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default HeroSectionBeams;
