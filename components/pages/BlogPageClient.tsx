'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { blogData, BlogPost } from '../../lib/blog-data';
import BlogSearchSection from '@/components/pages/blog/BlogSearchSection';
import BlogImage from '@/components/ui/BlogImage';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const BlogPageClient = () => {
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>(blogData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const featuredPosts = useMemo(() => displayedPosts.filter(post => post.featured).slice(0, 3), [displayedPosts]);
  const visiblePosts = useMemo(() => displayedPosts.slice(0, visibleCount), [displayedPosts, visibleCount]);

  const handleSearchResults = (posts: typeof blogData) => {
    setDisplayedPosts(posts);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(6);
  };

  return (
    <div className="min-h-screen bg-[#030712] w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(16,185,129,0.12), transparent 70%)',
          }}
        />
        <div className="grain absolute inset-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="gradient-border-subtle inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span className="text-brand-400 text-sm font-medium">Latest Insights</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-[1.1]">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Expert insights on web development, digital marketing, and technology trends.
              Stay ahead with our comprehensive guides and industry analysis.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
              {[
                { value: '100+', label: 'Articles' },
                { value: '50K+', label: 'Readers' },
                { value: '15+', label: 'Topics' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="relative bg-white/[0.02] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-slate-400">
            <li>
              <Link href="/" className="hover:text-brand-400 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-slate-600"> / </li>
            <li aria-current="page" className="text-white font-medium">Blog</li>
          </ol>
        </div>
      </nav>

      {/* Search and Filter Section */}
      <BlogSearchSection
        onSearchResults={handleSearchResults}
        onCategoryFilter={handleCategoryFilter}
      />

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="relative py-16 sm:py-20 overflow-hidden">
          {/* Background */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 50% 30% at 50% 100%, rgba(16,185,129,0.06), transparent 70%)',
            }}
          />
          <div className="grain absolute inset-0" />

          {/* Top divider */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10 sm:mb-14"
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5"
                style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}
              >
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-brand-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                Featured <span className="gradient-text">Articles</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
                Our most popular and insightful articles that provide valuable insights for your business growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl overflow-hidden hover:border-brand-500/20 transition-all duration-300">
                    <div className="relative">
                      <BlogImage src={post.featuredImage || post.image || '/images/blog/placeholder.svg'} alt={post.title} className="w-full h-44 sm:h-48 object-cover" />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-gradient-to-r from-brand-500 to-teal-500 text-white border-0 text-xs">
                          Featured
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-2.5">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-brand-400" />
                          <span className="text-slate-400">{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-teal-400" />
                          <span className="text-slate-400">{post.readTime}</span>
                        </div>
                      </div>

                      <Badge variant="outline" className="mb-2.5 border-white/[0.1] text-slate-400 text-xs">
                        {post.category}
                      </Badge>

                      <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 line-clamp-2 group-hover:text-brand-400 transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-slate-400 mb-4 line-clamp-2 text-sm">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <User className="w-3.5 h-3.5 text-cyan-400" />
                          <span className="text-slate-400">{post.author}</span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-brand-400 hover:text-brand-300 font-medium text-xs flex items-center gap-1 transition-colors"
                        >
                          Read More
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 50% 30% at 50% 0%, rgba(6,182,212,0.04), transparent 70%)',
          }}
        />
        <div className="grain absolute inset-0" />

        {/* Top divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-14"
          >
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5"
              style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}
            >
              <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-brand-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Latest <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
              Fresh insights and updates from our team of experts.
            </p>
          </motion.div>

          {visiblePosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-8 sm:p-10 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">No articles found</h3>
                <p className="text-slate-400 mb-5 text-sm">Try a different search or category filter.</p>
                <Button asChild className="bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white">
                  <Link href="/blog">Clear filters</Link>
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {visiblePosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="group"
                >
                  <div className="relative bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl overflow-hidden hover:border-brand-500/20 transition-all duration-300">
                    <div className="relative">
                      <BlogImage src={post.featuredImage || post.image || '/images/blog/placeholder.svg'} alt={post.title} className="w-full h-44 sm:h-48 object-cover" />
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-2.5">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-brand-400" />
                          <span className="text-slate-400">{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-teal-400" />
                          <span className="text-slate-400">{post.readTime}</span>
                        </div>
                      </div>

                      <Badge variant="outline" className="mb-2.5 border-white/[0.1] text-slate-400 text-xs">
                        {post.category}
                      </Badge>

                      <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 line-clamp-2 group-hover:text-brand-400 transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-slate-400 mb-4 line-clamp-2 text-sm">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <User className="w-3.5 h-3.5 text-cyan-400" />
                          <span className="text-slate-400">{post.author}</span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-brand-400 hover:text-brand-300 font-medium text-xs flex items-center gap-1 transition-colors"
                        >
                          Read More
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {visiblePosts.length > 0 && visiblePosts.length < displayedPosts.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-10 sm:mt-14"
            >
              <Button
                size="lg"
                onClick={() => setVisibleCount(v => v + 6)}
                className="bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white px-6 py-3 rounded-xl"
              >
                Load More Articles
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(16,185,129,0.08), transparent 70%)',
          }}
        />
        <div className="grain absolute inset-0" />

        {/* Top divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div
              className="bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-6 sm:p-10 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(16,185,129,0.04) 0%, rgba(6,182,212,0.02) 100%)',
              }}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mb-6 sm:mb-8 max-w-lg mx-auto">
                Get weekly updates on web development, digital marketing, and technology trends delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-500/50 focus:border-brand-500/30 transition-all duration-300 text-sm"
                />
                <Button className="w-full sm:w-auto bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white px-6 py-3 rounded-xl text-sm font-semibold">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPageClient;
