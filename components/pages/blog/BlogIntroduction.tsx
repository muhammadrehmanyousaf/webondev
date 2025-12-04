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
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Category Badge */}
          <div className="mb-6">
            <Badge className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-2 text-sm font-semibold">
              {category}
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            {title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            {excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-orange-600" />
              <span className="font-medium">{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-orange-600" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-600" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="border-orange-200 text-blue-700 hover:bg-blue-50 transition-colors cursor-pointer"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Quick Navigation */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                href="#introduction" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Introduction
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="#key-concepts" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
              >
                Key Concepts
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="#best-practices" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium"
              >
                Best Practices
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogIntroduction;

