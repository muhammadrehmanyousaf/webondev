'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Code, Zap } from 'lucide-react';

const BlogSection1: React.FC = () => {
  return (
    <section id="introduction" className="relative py-12 sm:py-16 lg:py-20 bg-[#030712] overflow-hidden">
      {/* Background */}

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="gradient-border-subtle inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-400" />
            <span className="text-brand-400 text-xs sm:text-sm font-medium">Introduction</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            The Evolution of Modern Web Development
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Web development has transformed from simple static pages to sophisticated, interactive applications that rival native software in functionality and performance.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center mb-10 sm:mb-14">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5">
              From Static Pages to Dynamic Applications
            </h3>
            <p className="text-sm sm:text-base text-slate-400 mb-4 leading-relaxed">
              The landscape of web development has undergone a revolutionary transformation over the past decade. What once required simple HTML and CSS knowledge has evolved into a complex ecosystem of frameworks, tools, and methodologies that demand continuous learning and adaptation.
            </p>
            <p className="text-sm sm:text-base text-slate-400 mb-6 leading-relaxed">
              In 2024, web developers must navigate through an ever-expanding universe of technologies while maintaining focus on creating exceptional user experiences that drive business success.
            </p>

            {/* Key Points */}
            <div className="space-y-3 sm:space-y-4">
              {[
                { title: 'Modern Frameworks', desc: 'React, Vue, Angular, and Next.js provide powerful tools for building complex applications.' },
                { title: 'Performance Optimization', desc: 'Core Web Vitals, caching strategies, and code splitting are essential for success.' },
                { title: 'SEO & Accessibility', desc: 'Search engine optimization and web accessibility are no longer optional.' },
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-0.5 text-sm">{point.title}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-5 sm:p-6">
            <div className="space-y-4 sm:space-y-5">
              {[
                { icon: Code, title: 'Modern Technologies', desc: 'HTML5, CSS3, JavaScript ES2024' },
                { icon: Zap, title: 'Performance First', desc: 'Core Web Vitals & Optimization' },
                { icon: CheckCircle, title: 'User Experience', desc: 'Accessibility & Responsive Design' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4">
                  <div
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                    <p className="text-slate-400 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 rounded-xl sm:rounded-2xl p-5 sm:p-6"
          style={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(6,182,212,0.05) 100%)',
          }}
        >
          {[
            { value: '95%', label: 'Mobile Usage' },
            { value: '3.2s', label: 'Average Load Time' },
            { value: '60%', label: 'Bounce Rate Reduction' },
          ].map((stat, index) => (
            <div key={index} className="text-center py-3 sm:py-4">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection1;
