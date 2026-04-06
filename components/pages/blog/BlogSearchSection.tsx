'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { blogData } from '@/lib/blog-data';

interface BlogSearchSectionProps {
  onSearchResults: (posts: typeof blogData) => void;
  onCategoryFilter: (category: string) => void;
}

const BlogSearchSection = ({ onSearchResults, onCategoryFilter }: BlogSearchSectionProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Digital Marketing', 'Mobile Apps', 'UI/UX Design', 'SEO', 'E-commerce'];

  const filteredPosts = useMemo(() => {
    return blogData.filter(post => {
      const matchesSearch = searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  useEffect(() => {
    onSearchResults(filteredPosts);
  }, [filteredPosts, onSearchResults]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onCategoryFilter(category);
  };

  return (
    <section className="relative py-6 sm:py-8 bg-[#030712]">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 sm:pl-12 pr-11 sm:pr-12 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-500/50 focus:border-brand-500/30 transition-all duration-300 text-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center overflow-x-auto scrollbar-hide">
          <div className="inline-flex flex-nowrap gap-2 p-1 bg-white/[0.02] rounded-xl border border-white/[0.06]">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-brand-500 to-teal-500 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mt-5">
          <span className="text-xs sm:text-sm text-slate-500">
            Showing <span className="text-white font-medium">{filteredPosts.length}</span> of {blogData.length} articles
          </span>
        </div>
      </div>
    </section>
  );
};

export default BlogSearchSection;
