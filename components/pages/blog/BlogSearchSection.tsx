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
    <section className="bg-slate-950 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3.5 bg-slate-900 border border-slate-800 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-500 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-slate-900/80 rounded-full border border-slate-800">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mt-6">
          <span className="text-sm text-gray-500">
            Showing <span className="text-white font-medium">{filteredPosts.length}</span> of {blogData.length} articles
          </span>
        </div>
      </div>
    </section>
  );
};

export default BlogSearchSection;
