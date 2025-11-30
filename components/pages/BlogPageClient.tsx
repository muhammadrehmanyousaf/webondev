'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { blogData, BlogPost } from '../../lib/blog-data';
import BlogSearchSection from '@/components/pages/blog/BlogSearchSection';
import BlogImage from '@/components/ui/BlogImage';

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
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-24 lg:py-32 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
              Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Expert insights on web development, digital marketing, and technology trends. 
              Stay ahead with our comprehensive guides and industry analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 w-full border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                Home
              </Link>
            </li>
            <li aria-hidden> / </li>
            <li aria-current="page" className="text-gray-900 font-medium">Blog</li>
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
        <section className="py-20 lg:py-28 bg-white w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Featured Articles
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our most popular and insightful articles that provide valuable insights for your business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 lg:gap-10">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative">
                    <BlogImage src={post.featuredImage || post.image || '/images/blog/placeholder.svg'} alt={post.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <Badge variant="outline" className="mb-3">
                      {post.category}
                    </Badge>
                    
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3 text-base lg:text-lg">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-20 lg:py-28 bg-gray-50 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Latest Articles
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fresh insights and updates from our team of experts.
            </p>
          </div>
          
          {visiblePosts.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-16 text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">No articles found</h3>
              <p className="text-gray-600 mb-6">Try a different search or category filter.</p>
              <Button asChild>
                <Link href="/blog">Clear filters</Link>
              </Button>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 lg:gap-10">
            {visiblePosts.map((post) => (
              <article key={post.slug} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500">
                <div className="relative">
                                      <BlogImage src={post.featuredImage || post.image || '/images/blog/placeholder.svg'} alt={post.title} className="w-full h-48 object-cover" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="mb-3">
                    {post.category}
                  </Badge>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 text-base lg:text-lg">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          )}
          
          {visiblePosts.length > 0 && visiblePosts.length < displayedPosts.length && (
            <div className="text-center mt-16">
              <Button size="lg" onClick={() => setVisibleCount(v => v + 6)} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Load more
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Get weekly updates on web development, digital marketing, and technology trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-lg"
            />
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogPageClient;
