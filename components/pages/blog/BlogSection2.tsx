'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Code, CheckCircle, AlertTriangle } from 'lucide-react';

const BlogSection2: React.FC = () => {
  return (
    <section id="html5-semantic" className="relative py-12 sm:py-16 lg:py-20 bg-[#030712] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 100%, rgba(6,182,212,0.04), transparent 70%)',
        }}
      />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="gradient-border-subtle inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span className="text-teal-400 text-xs sm:text-sm font-medium">HTML5 & Semantic Markup</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            The Foundation: HTML5 and Semantic Markup
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            HTML5 represents more than just an update to the markup language—it's a fundamental shift in how we structure web content for better accessibility and SEO.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start mb-10 sm:mb-14">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5">
              Semantic HTML5 Elements
            </h3>
            <p className="text-sm sm:text-base text-slate-400 mb-5 leading-relaxed">
              Semantic HTML5 elements like <code className="bg-white/[0.08] px-1.5 py-0.5 rounded text-brand-400 text-xs">&lt;header&gt;</code>, <code className="bg-white/[0.08] px-1.5 py-0.5 rounded text-brand-400 text-xs">&lt;nav&gt;</code>, <code className="bg-white/[0.08] px-1.5 py-0.5 rounded text-brand-400 text-xs">&lt;main&gt;</code>, <code className="bg-white/[0.08] px-1.5 py-0.5 rounded text-brand-400 text-xs">&lt;article&gt;</code>, <code className="bg-white/[0.08] px-1.5 py-0.5 rounded text-brand-400 text-xs">&lt;section&gt;</code>, and <code className="bg-white/[0.08] px-1.5 py-0.5 rounded text-brand-400 text-xs">&lt;footer&gt;</code> provide meaning to both browsers and assistive technologies.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {[
                { title: 'Better SEO Rankings', desc: 'Search engines can better understand your content structure, leading to improved rankings.' },
                { title: 'Enhanced Accessibility', desc: 'Screen readers and assistive technologies can navigate your content more effectively.' },
                { title: 'Cleaner Code Structure', desc: 'More maintainable and readable code that clearly indicates content purpose.' },
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
            <h4 className="text-sm sm:text-base font-semibold text-white mb-4">Example Semantic Structure</h4>
            <div className="bg-[#0a0f1a] rounded-lg p-4 text-xs text-brand-400 font-mono overflow-x-auto">
              <pre className="whitespace-pre-wrap">{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Website</title>
</head>
<body>
  <header>
    <nav>
      <!-- Navigation content -->
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h1>Article Title</h1>
      </header>
      <section>
        <!-- Article content -->
      </section>
    </article>
  </main>

  <footer>
    <!-- Footer content -->
  </footer>
</body>
</html>`}</pre>
            </div>
          </div>
        </div>

        {/* Accessibility Section */}
        <div
          className="rounded-xl sm:rounded-2xl p-5 sm:p-8 mb-10 sm:mb-14"
          style={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(6,182,212,0.05) 100%)',
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Accessibility and Web Standards</h3>
          </div>
          <p className="text-slate-300 mb-5 leading-relaxed text-sm">
            Web accessibility isn't just a legal requirement—it's a moral imperative and a business advantage. The Web Content Accessibility Guidelines (WCAG) 2.1 provide comprehensive standards for creating accessible web content.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'ARIA Attributes', desc: 'Implement proper ARIA attributes for enhanced accessibility' },
              { title: 'Keyboard Navigation', desc: 'Ensure all interactive elements are keyboard accessible' },
              { title: 'Alt Text', desc: 'Provide descriptive alternative text for all images' },
            ].map((item, index) => (
              <div key={index} className="bg-white/[0.05] rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1.5 text-sm">{item.title}</h4>
                <p className="text-slate-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-500/20 flex items-center justify-center">
                <Code className="w-4 h-4 text-brand-400" />
              </div>
              <h4 className="font-semibold text-white text-sm">Do's</h4>
            </div>
            <ul className="space-y-2">
              {[
                'Use semantic HTML elements appropriately',
                'Include proper heading hierarchy (H1-H6)',
                'Add alt text to all images',
                'Ensure keyboard navigation works',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-400 text-xs sm:text-sm">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-red-500/20 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-red-400" />
              </div>
              <h4 className="font-semibold text-white text-sm">Don'ts</h4>
            </div>
            <ul className="space-y-2">
              {[
                'Use divs for everything instead of semantic elements',
                'Skip heading levels (H1 to H3)',
                'Leave images without alt text',
                'Rely solely on color for information',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-400 text-xs sm:text-sm">
                  <div className="w-4 h-4 rounded-full bg-red-500/30 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection2;
