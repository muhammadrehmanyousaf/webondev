'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Star, Users, Award } from 'lucide-react';
import Link from 'next/link';

interface BlogConclusionProps {
  title?: string;
  summary?: string;
  keyTakeaways?: string[];
  nextSteps?: string[];
}

const BlogConclusion: React.FC<BlogConclusionProps> = ({
  title = "Conclusion: The Future of Web Development",
  summary = "Web development in 2024 represents an exciting intersection of technology, creativity, and user experience. The tools and techniques available today enable developers to create applications that were unimaginable just a few years ago.",
  keyTakeaways = [
    "Modern web development requires mastery of multiple technologies and frameworks",
    "Performance optimization is crucial for user experience and SEO success",
    "Security and accessibility are no longer optional but essential requirements",
    "Continuous learning and adaptation are key to staying competitive",
    "User-centered design and business goals must work together"
  ],
  nextSteps = [
    "Start with the fundamentals: HTML5, CSS3, and modern JavaScript",
    "Choose a framework that aligns with your project requirements",
    "Implement performance optimization from day one",
    "Focus on security best practices and accessibility standards",
    "Stay updated with industry trends and emerging technologies"
  ]
}) => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#030712] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 100%, rgba(16,185,129,0.06), transparent 70%)',
        }}
      />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="gradient-border-subtle inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-400" />
            <span className="text-brand-400 text-xs sm:text-sm font-medium">Conclusion</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            {summary}
          </p>
        </div>

        {/* Key Takeaways */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(234,179,8,0.2), rgba(234,179,8,0.1))' }}
            >
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Key Takeaways</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {keyTakeaways.map((takeaway, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-400 mt-0.5 flex-shrink-0" />
                <p className="text-slate-300 text-sm leading-relaxed">{takeaway}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div
          className="rounded-xl sm:rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8"
          style={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(6,182,212,0.05) 100%)',
          }}
        >
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-brand-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Next Steps</h3>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {nextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold text-brand-400 mt-0.5 flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {[
            { icon: Users, title: 'User Experience', desc: 'Focus on creating intuitive, accessible, and engaging user experiences' },
            { icon: Award, title: 'Performance', desc: 'Optimize for speed, Core Web Vitals, and search engine rankings' },
            { icon: Star, title: 'Quality', desc: 'Maintain high standards in code quality, security, and maintainability' },
          ].map((item, index) => (
            <div key={index} className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 text-center hover:border-brand-500/20 transition-colors">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
              >
                <item.icon className="w-5 h-5 text-brand-400" />
              </div>
              <h4 className="font-semibold text-white mb-1.5 text-sm">{item.title}</h4>
              <p className="text-slate-400 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
            Ready to Start Your Web Development Journey?
          </h3>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto text-sm">
            Whether you're a beginner looking to learn or a business seeking professional web development services, we're here to help you succeed in the digital world.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white px-6 py-3 text-sm font-semibold">
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/[0.1] text-white hover:bg-white/[0.05] hover:border-brand-500/30 px-6 py-3 text-sm font-semibold">
              <Link href="/services">
                Explore Our Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <p className="mt-5 text-xs text-slate-500">
            Join hundreds of satisfied clients who have transformed their digital presence with our expertise
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogConclusion;
