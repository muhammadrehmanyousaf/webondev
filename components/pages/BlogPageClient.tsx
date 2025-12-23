'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Sparkles } from 'lucide-react';
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
    <div className="min-h-screen bg-slate-950 w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[150px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[150px]"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-8">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span className="text-brand-400 text-sm font-medium">Latest Insights</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Our <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-4xl mx-auto leading-relaxed">
              Expert insights on web development, digital marketing, and technology trends.
              Stay ahead with our comprehensive guides and industry analysis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-slate-900/50 backdrop-blur-xl w-full border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
          <ol className="flex items-center gap-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-brand-400 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-gray-600"> / </li>
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
        <section className="py-20 lg:py-24 bg-slate-900 w-full relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-500/10 rounded-full blur-[120px]" />

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Articles</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Our most popular and insightful articles that provide valuable insights for your business growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-400 to-teal-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                  <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-brand-500/30 transition-all duration-500">
                    <div className="relative">
                      <BlogImage src={post.featuredImage || post.image || '/images/blog/placeholder.svg'} alt={post.title} className="w-full h-48 object-cover" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-brand-500 to-teal-500 text-white border-0">
                          Featured
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-brand-400" />
                          <span className="text-gray-400">{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-teal-400" />
                          <span className="text-gray-400">{post.readTime}</span>
                        </div>
                      </div>

                      <Badge variant="outline" className="mb-3 border-white/20 text-gray-300">
                        {post.category}
                      </Badge>

                      <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-brand-400 transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-gray-400 mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <User className="w-4 h-4 text-cyan-400" />
                          <span className="text-gray-400">{post.author}</span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-brand-400 hover:text-brand-300 font-medium text-sm flex items-center gap-1 transition-colors"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
      <section className="py-20 lg:py-24 bg-slate-950 w-full relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Articles</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Fresh insights and updates from our team of experts.
            </p>
          </motion.div>

          {visiblePosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative max-w-2xl mx-auto"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-16 text-center border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-4">No articles found</h3>
                <p className="text-gray-400 mb-6">Try a different search or category filter.</p>
                <Button asChild className="bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white">
                  <Link href="/blog">Clear filters</Link>
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {visiblePosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-400 to-teal-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                  <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-brand-500/30 transition-all duration-500">
                    <div className="relative">
                      <BlogImage src={post.featuredImage || post.image || '/images/blog/placeholder.svg'} alt={post.title} className="w-full h-48 object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-brand-400" />
                          <span className="text-gray-400">{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-teal-400" />
                          <span className="text-gray-400">{post.readTime}</span>
                        </div>
                      </div>

                      <Badge variant="outline" className="mb-3 border-white/20 text-gray-300">
                        {post.category}
                      </Badge>

                      <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-brand-400 transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-gray-400 mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <User className="w-4 h-4 text-cyan-400" />
                          <span className="text-gray-400">{post.author}</span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-brand-400 hover:text-brand-300 font-medium text-sm flex items-center gap-1 transition-colors"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              className="text-center mt-16"
            >
              <Button
                size="lg"
                onClick={() => setVisibleCount(v => v + 6)}
                className="bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl shadow-lg shadow-brand-500/25"
              >
                Load More Articles
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-24 bg-slate-900 w-full relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Get weekly updates on web development, digital marketing, and technology trends delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all duration-300"
                />
                <Button size="lg" className="bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl shadow-lg shadow-brand-500/25 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-6">
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
