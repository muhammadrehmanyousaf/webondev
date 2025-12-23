'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, BookOpen, Send, Sparkles, TrendingUp, Eye, Heart, MessageCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogImage from '@/components/ui/BlogImage';
import { getFeaturedPosts } from '@/lib/blog-data';

// =============================================================================
// WORLD-CLASS BLOG SECTION - Premium Emerald Design
// =============================================================================

const categoryColors: Record<string, string> = {
  'Technology': 'from-brand-500 to-teal-500',
  'Web Development': 'from-cyan-500 to-blue-500',
  'Business': 'from-purple-500 to-indigo-500',
  'Design': 'from-pink-500 to-rose-500',
  'Marketing': 'from-amber-500 to-orange-500',
  'default': 'from-brand-500 to-teal-500',
};

// =============================================================================
// FEATURED ARTICLE CARD - Hero card for the main featured post
// =============================================================================

const FeaturedArticleCard = ({ post }: { post: any }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const gradient = categoryColors[post.category] || categoryColors.default;

  return (
    <motion.article
      className="group relative lg:col-span-2 lg:row-span-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <motion.div
          className="relative h-full min-h-[450px] lg:min-h-[550px] rounded-3xl overflow-hidden cursor-pointer"
          onMouseMove={handleMouseMove}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            <BlogImage
              src={post.featuredImage || post.image || '/images/blog/placeholder.svg'}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />

          {/* Spotlight Effect */}
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(16,185,129,0.15), transparent 80%)`,
            }}
          />

          {/* Top Badges */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
            <motion.div
              className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${gradient} rounded-full text-white text-sm font-bold shadow-lg shadow-brand-500/30`}
              whileHover={{ scale: 1.05 }}
            >
              <TrendingUp className="w-4 h-4" />
              Featured Article
            </motion.div>
            <motion.div
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <Eye className="w-4 h-4 text-brand-400" />
              <span className="text-white font-semibold text-sm">5.2k views</span>
            </motion.div>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
            {/* Category */}
            <motion.span
              className={`inline-block px-4 py-1.5 bg-gradient-to-r ${gradient} rounded-lg text-white text-sm font-semibold mb-4 shadow-lg`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {post.category}
            </motion.span>

            {/* Title */}
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors leading-tight">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-xl line-clamp-2">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-teal-400 flex items-center justify-center text-white font-bold">
                  {post.author?.charAt(0) || 'A'}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{post.author}</div>
                  <div className="text-slate-400 text-xs">Author</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Calendar className="w-4 h-4 text-brand-400" />
                {post.date}
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Clock className="w-4 h-4 text-brand-400" />
                {post.readTime}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              className="inline-flex items-center gap-3 text-white font-bold text-lg group-hover:gap-4 transition-all"
              whileHover={{ x: 5 }}
            >
              Read Article
              <div className="w-10 h-10 bg-brand-500/20 backdrop-blur-xl rounded-full flex items-center justify-center group-hover:bg-brand-500/30 transition-colors border border-brand-500/30">
                <ArrowRight className="w-5 h-5" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
};

// =============================================================================
// ARTICLE CARD - Standard card design
// =============================================================================

const ArticleCard = ({ post, index }: { post: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const gradient = categoryColors[post.category] || categoryColors.default;

  return (
    <motion.article
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <motion.div
        className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.25 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <Link href={`/blog/${post.slug}`} className="block">
        <motion.div
          className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-brand-500/50 transition-all duration-500"
          whileHover={{ y: -8 }}
        >
          {/* Image Container */}
          <div className="relative overflow-hidden h-52">
            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.5 }}
            >
              <BlogImage
                src={post.featuredImage || post.image || '/images/blog/placeholder.svg'}
                alt={post.title}
                className="w-full h-52 object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-70" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${gradient} text-white text-xs font-bold shadow-lg`}>
                {post.category}
              </span>
            </div>

            {/* Read Time Badge */}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xl text-white text-xs font-medium border border-white/20">
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Date */}
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
              <Calendar className="w-4 h-4 text-brand-500" />
              {post.date}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-400 transition-colors line-clamp-2 leading-tight">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
              {post.excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-teal-400 flex items-center justify-center text-white text-xs font-bold">
                  {post.author?.charAt(0) || 'A'}
                </div>
                <span className="text-slate-300 text-sm font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2 text-brand-400 font-semibold text-sm group-hover:gap-3 transition-all">
                Read
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
};

// =============================================================================
// NEWSLETTER SECTION
// =============================================================================

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-brand-600 via-teal-600 to-cyan-600"
        animate={{
          backgroundPosition: isHovered ? ['0% 50%', '100% 50%'] : '0% 50%',
        }}
        transition={{ duration: 3, repeat: isHovered ? Infinity : 0 }}
        style={{ backgroundSize: '200% 200%' }}
      />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Glow Effects */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl"
        animate={{ scale: isHovered ? 1.2 : 1, opacity: isHovered ? 0.3 : 0.2 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/20 rounded-full blur-3xl"
        animate={{ scale: isHovered ? 1.2 : 1, opacity: isHovered ? 0.3 : 0.2 }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative z-10 p-8 md:p-12 lg:p-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-xl text-white text-sm font-semibold mb-6 border border-white/20"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" />
            Weekly Newsletter
          </motion.div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Stay Ahead of the Curve
          </h3>

          {/* Description */}
          <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get exclusive insights on web development, digital marketing, and technology trends
            delivered straight to your inbox every week.
          </p>

          {/* Email Form */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto mb-6">
            <div className="relative flex-1 w-full group">
              <div className="absolute -inset-0.5 bg-white/30 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity" />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="relative w-full px-5 py-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
              />
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-white text-brand-600 hover:bg-white/90 px-8 py-4 rounded-xl font-bold shadow-xl shadow-black/20 h-auto">
                <Send className="w-5 h-5 mr-2" />
                Subscribe
              </Button>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              <span>10,000+ Subscribers</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-400" />
              <span>No Spam, Ever</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-cyan-400" />
              <span>Weekly Insights</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
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
    <section className="relative py-24 lg:py-36 overflow-hidden bg-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-brand-500/15 rounded-full blur-[150px]"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-teal-500/15 rounded-full blur-[150px]"
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[200px]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-6"
          >
            <BookOpen className="w-4 h-4" />
            <span>Latest Insights</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Expert Insights &</span>
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Industry Trends
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with our expert analysis on web development,
            digital marketing, and technology trends.
          </p>
        </motion.div>

        {/* Articles Grid */}
        {featuredPosts.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {/* Featured Article */}
            {mainFeatured && <FeaturedArticleCard post={mainFeatured} />}

            {/* Other Articles */}
            {otherPosts.map((post, index) => (
              <ArticleCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        )}

        {/* Newsletter Section */}
        <div className="mb-16">
          <NewsletterSection />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <div className="relative inline-block">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-teal-500 rounded-full blur-xl opacity-20" />

            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to Explore More?
              </h3>
              <p className="text-slate-300 mb-8 max-w-lg mx-auto">
                Discover hundreds of articles, tutorials, and insights to help you succeed in the digital world.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="glow" size="lg" className="rounded-full px-10">
                  <Link href="/blog" className="flex items-center gap-2">
                    View All Articles
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-10 border-white/20 text-white hover:bg-white/10">
                  <Link href="/contact">
                    Get Free Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
