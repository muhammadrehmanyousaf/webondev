'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogImage from '@/components/ui/BlogImage';
import { getFeaturedPosts } from '@/lib/blog-data';

// =============================================================================
// FEATURED ARTICLE - HORIZONTAL HERO CARD
// =============================================================================

const FeaturedArticle = ({ post }: { post: any }) => {
  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300 bg-white/[0.02]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-44 sm:h-56 lg:h-72 overflow-hidden">
              <BlogImage
                src={post.featuredImage || post.image || '/images/blog/placeholder.svg'}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#030712]/80 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/60 to-transparent lg:hidden" />

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-brand-500/90 text-white text-xs font-semibold">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 lg:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3 text-xs text-slate-500">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
              </div>

              <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-brand-400 transition-colors duration-200 leading-tight">
                {post.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-400 text-[10px] font-bold">
                    {post.author?.charAt(0) || 'W'}
                  </div>
                  <span className="text-slate-500 text-xs font-medium">{post.author}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-brand-400 font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

// =============================================================================
// COMPACT ARTICLE CARD
// =============================================================================

const CompactCard = ({ post, index }: { post: any; index: number }) => {
  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="flex gap-3 p-3 sm:gap-4 sm:p-4 rounded-xl border border-white/[0.06] hover:border-brand-500/20 bg-white/[0.02] transition-all duration-300">
          {/* Thumbnail */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0">
            <BlogImage
              src={post.featuredImage || post.image || '/images/blog/placeholder.svg'}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-400">
                {post.category}
              </span>
              <span className="text-slate-600 text-[10px]">&bull;</span>
              <span className="text-[11px] text-slate-500">{post.readTime}</span>
            </div>

            <h3 className="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-brand-400 transition-colors duration-200 line-clamp-2 leading-snug">
              {post.title}
            </h3>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">{post.date}</span>
              <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-brand-400 transition-colors" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

// =============================================================================
// MAIN COMPONENT
// =============================================================================

const BlogSection = () => {
  const featuredPosts = getFeaturedPosts(4);
  const mainFeatured = featuredPosts[0];
  const otherPosts = featuredPosts.slice(1);

  return (
    <section className="relative py-12 sm:py-14 lg:py-20 overflow-hidden bg-[#030712]">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 70% 60%, rgba(16,185,129,0.04), transparent 70%)',
        }}
      />

      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-5 mb-5 sm:mb-6 lg:mb-8">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              Blog
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 leading-[1.1]">
              Insights for{' '}
              <span className="gradient-text">modern builders</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Expert analysis on web development, digital marketing, and technology trends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-400 font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Layout: Featured hero + compact list */}
        {featuredPosts.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 mb-5 sm:mb-6 lg:mb-8">
            {/* Featured - takes 3 cols */}
            <div className="lg:col-span-3">
              {mainFeatured && <FeaturedArticle post={mainFeatured} />}
            </div>

            {/* Compact cards - takes 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              {otherPosts.map((post, index) => (
                <CompactCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA - Compact inline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button asChild size="lg" className="rounded-full px-8 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
            <Link href="/blog" className="flex items-center gap-2">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-white/10 hover:border-white/20 hover:bg-white/[0.03]">
            <Link href="/contact">
              Get Consultation
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
