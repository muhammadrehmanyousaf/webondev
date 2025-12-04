import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, Archive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BlogImage from '@/components/ui/BlogImage';
import { blogData } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog Archive - All Articles by Date | Web On Dev',
  description: 'Browse our complete collection of articles, tutorials, and expert insights organized by date. Find valuable content on web development, digital marketing, and technology.',
  keywords: 'blog archive, articles, tutorials, web development, digital marketing, technology insights',
  openGraph: {
    title: 'Blog Archive - All Articles by Date | Web On Dev',
    description: 'Browse our complete collection of articles, tutorials, and expert insights organized by date.',
    type: 'website',
    url: 'https://webondev.com/blog/archive/',
  },
  alternates: {
    canonical: 'https://webondev.com/blog/archive/',
  },
};

const BlogArchivePage = () => {
  // Group posts by year and month
  const groupedPosts = blogData.reduce((acc, post) => {
    const date = new Date(post.date);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    
    if (!acc[year]) {
      acc[year] = {};
    }
    if (!acc[year][month]) {
      acc[year][month] = [];
    }
    acc[year][month].push(post);
    return acc;
  }, {} as Record<number, Record<string, typeof blogData>>);

  const years = Object.keys(groupedPosts).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Archive className="w-6 h-6" />
              <Badge className="bg-white/20 text-white border-white/30">
                Archive
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog Archive
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Browse our complete collection of articles, tutorials, and expert insights organized by date.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span>{blogData.length} Total Articles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {years.map((year) => (
            <div key={year} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {year}
              </h2>
              
              {Object.entries(groupedPosts[parseInt(year)])
                .sort(([a], [b]) => {
                  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                                'July', 'August', 'September', 'October', 'November', 'December'];
                  return months.indexOf(b) - months.indexOf(a);
                })
                .map(([month, posts]) => (
                  <div key={month} className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-2">
                      {month} {year}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {posts.map((post) => (
                        <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                          <div className="relative">
                            <BlogImage
                              src={post.featuredImage || post.image || '/images/blog/placeholder.svg'}
                              alt={post.title}
                              className="w-full h-40 object-cover"
                            />
                            {post.featured && (
                              <div className="absolute top-2 left-2">
                                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs">
                                  Featured
                                </Badge>
                              </div>
                            )}
                          </div>
                          <div className="p-4">
                            <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {post.date}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.readTime}
                              </div>
                            </div>
                            
                            <Badge variant="outline" className="mb-2 text-xs">
                              {post.category}
                            </Badge>
                            
                            <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group">
                              <Link href={`/blog/${post.slug}`} className="group-hover:text-blue-600 transition-colors">
                                {post.title}
                              </Link>
                            </h4>
                            
                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1 text-xs text-gray-500">
                                <User className="w-3 h-3" />
                                {post.author}
                              </div>
                              <Link
                                href={`/blog/${post.slug}`}
                                className="text-blue-600 hover:text-blue-700 font-medium text-xs flex items-center gap-1"
                              >
                                Read More
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Navigation
            </h2>
            <p className="text-lg text-gray-600">
              Find what you're looking for quickly with these shortcuts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Latest Articles</h3>
                <p className="text-sm text-gray-600">Browse our most recent posts</p>
              </div>
            </Link>
            
            <Link href="/blog?category=featured">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Featured Posts</h3>
                <p className="text-sm text-gray-600">Our most popular articles</p>
              </div>
            </Link>
            
            <Link href="/blog/category/web-development">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Web Development</h3>
                <p className="text-sm text-gray-600">Programming and development guides</p>
              </div>
            </Link>
            
            <Link href="/blog/category/digital-marketing">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Digital Marketing</h3>
                <p className="text-sm text-gray-600">Marketing strategies and tips</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you achieve your digital goals with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">
                Get Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/blog">
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArchivePage;
