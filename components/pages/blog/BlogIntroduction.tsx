'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface BlogIntroductionProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const BlogIntroduction: React.FC<BlogIntroductionProps> = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  tags
}) => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#030712] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(16,185,129,0.12), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Category Badge */}
          <div className="mb-5">
            <Badge className="bg-gradient-to-r from-brand-500 to-teal-500 text-white px-4 py-1.5 text-xs sm:text-sm font-medium border-0">
              {category}
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-6 leading-[1.15]">
            {title}
          </h1>

          {/* Excerpt */}
          <p className="text-base sm:text-lg text-slate-400 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            {excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-slate-500 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-brand-400" />
              <span className="text-sm text-slate-300 font-medium">{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-slate-400">{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-slate-400">{readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-white/[0.1] text-slate-400 hover:border-brand-500/30 hover:text-brand-400 transition-colors cursor-pointer text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Quick Navigation */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-5 sm:p-6">
            <h3 className="text-sm sm:text-base font-semibold text-white mb-4">Quick Navigation</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <Link
                href="#introduction"
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-brand-500 to-teal-500 text-white rounded-lg hover:from-brand-600 hover:to-teal-600 transition-all text-xs sm:text-sm font-medium"
              >
                Introduction
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="#key-concepts"
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/[0.05] border border-white/[0.1] text-white rounded-lg hover:bg-white/[0.08] hover:border-brand-500/30 transition-all text-xs sm:text-sm font-medium"
              >
                Key Concepts
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="#best-practices"
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/[0.05] border border-white/[0.1] text-white rounded-lg hover:bg-white/[0.08] hover:border-brand-500/30 transition-all text-xs sm:text-sm font-medium"
              >
                Best Practices
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogIntroduction;
