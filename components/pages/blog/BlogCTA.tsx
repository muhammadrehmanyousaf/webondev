'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

interface BlogCTAProps {
  title?: string;
  description?: string;
  variant?: 'primary' | 'secondary';
}

const BlogCTA: React.FC<BlogCTAProps> = ({
  title = "Ready to Start Your Web Development Project?",
  description = "Let's discuss how we can help you build a modern, high-performance website that drives results.",
  variant = 'primary'
}) => {
  if (variant === 'primary') {
    return (
      <section className="relative py-12 sm:py-16 lg:py-20 bg-[#030712] overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(16,185,129,0.1), transparent 70%)',
          }}
        />
        <div className="grain absolute inset-0" />

        {/* Top divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-6 sm:p-10 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(6,182,212,0.03) 100%)',
            }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <Button asChild className="bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white px-6 py-3 text-sm font-semibold">
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/[0.1] text-white hover:bg-white/[0.05] hover:border-brand-500/30 px-6 py-3 text-sm font-semibold">
                <Link href="/portfolio">
                  View Our Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-400" />
                <span>+92-310-6803687</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400" />
                <span>webondev786@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#030712] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 100%, rgba(6,182,212,0.04), transparent 70%)',
        }}
      />
      <div className="grain absolute inset-0" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white px-6 py-3 text-sm font-semibold">
            <Link href="/services">
              Explore Our Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-white/[0.1] text-white hover:bg-white/[0.05] hover:border-brand-500/30 px-6 py-3 text-sm font-semibold">
            <Link href="/about">
              Learn About Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogCTA;
