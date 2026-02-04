'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Code,
  Palette,
  TrendingUp,
  Building,
  Filter,
  LayoutGrid,
  List
} from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Projects', icon: LayoutGrid, count: 150, description: 'Browse our complete portfolio of successful projects' },
  { id: 'web', name: 'Web Development', icon: Globe, count: 45, description: 'Modern, responsive web applications and websites' },
  { id: 'mobile', name: 'Mobile Apps', icon: Smartphone, count: 32, description: 'Native and cross-platform mobile applications' },
  { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart, count: 28, description: 'Online stores and marketplace platforms' },
  { id: 'saas', name: 'SaaS Platforms', icon: Code, count: 22, description: 'Cloud-based software solutions' },
  { id: 'uiux', name: 'UI/UX Design', icon: Palette, count: 18, description: 'Beautiful and intuitive user interfaces' },
  { id: 'marketing', name: 'Digital Marketing', icon: TrendingUp, count: 15, description: 'Marketing campaigns and branding projects' },
  { id: 'enterprise', name: 'Enterprise', icon: Building, count: 12, description: 'Large-scale enterprise solutions' },
];

interface PortfolioCategoriesSectionProps {
  onCategoryChange?: (category: string) => void;
  activeCategory?: string;
}

const PortfolioCategoriesSection: React.FC<PortfolioCategoriesSectionProps> = ({
  onCategoryChange,
  activeCategory = 'all'
}) => {
  const [selectedCategory, setSelectedCategory] = useState(activeCategory);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    onCategoryChange?.(categoryId);
  };

  const selectedCategoryData = categories.find(c => c.id === selectedCategory);

  return (
    <section className="relative py-16 sm:py-20 bg-[#030712] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 0%, rgba(16,185,129,0.06), transparent 70%)',
        }}
      />
      <div className="grain absolute inset-0" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            <Filter className="w-6 h-6 sm:w-7 sm:h-7 text-brand-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Project <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Browse our diverse portfolio across different industries and technologies to see the breadth of our expertise.
          </p>
        </motion.div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 text-sm ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-brand-500 to-teal-500 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Grid</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 text-sm ${
                viewMode === 'list'
                  ? 'bg-gradient-to-r from-brand-500 to-teal-500 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">List</span>
            </button>
          </div>
        </div>

        {/* Categories Grid/List */}
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 mb-8 sm:mb-10"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategoryClick(category.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className={`group relative p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-brand-500/10 border-2 border-brand-500/30'
                      : 'bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 hover:bg-white/[0.04]'
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-br from-brand-500 to-teal-500'
                        : 'bg-white/[0.05] group-hover:bg-brand-500/20'
                    }`}
                  >
                    <category.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                      selectedCategory === category.id ? 'text-white' : 'text-slate-400 group-hover:text-brand-400'
                    }`} />
                  </div>

                  {/* Name */}
                  <h3 className={`text-xs sm:text-sm font-semibold text-center transition-colors ${
                    selectedCategory === category.id ? 'text-brand-400' : 'text-white group-hover:text-brand-400'
                  }`}>
                    {category.name}
                  </h3>

                  {/* Count */}
                  <p className="text-[10px] sm:text-xs text-slate-500 text-center mt-1">
                    {category.count} projects
                  </p>

                  {/* Active Indicator */}
                  {selectedCategory === category.id && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-brand-500 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
                    </div>
                  )}
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategoryClick(category.id)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className={`group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 text-left ${
                    selectedCategory === category.id
                      ? 'bg-brand-500/10 border-2 border-brand-500/30'
                      : 'bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 hover:bg-white/[0.04]'
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-br from-brand-500 to-teal-500'
                        : 'bg-white/[0.05] group-hover:bg-brand-500/20'
                    }`}
                  >
                    <category.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${
                      selectedCategory === category.id ? 'text-white' : 'text-slate-400 group-hover:text-brand-400'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-sm sm:text-base font-semibold transition-colors ${
                      selectedCategory === category.id ? 'text-brand-400' : 'text-white group-hover:text-brand-400'
                    }`}>
                      {category.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 truncate">
                      {category.description}
                    </p>
                  </div>

                  {/* Count Badge */}
                  <div className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-brand-500 text-white'
                      : 'bg-white/[0.05] text-slate-400 group-hover:bg-brand-500/20 group-hover:text-brand-400'
                  }`}>
                    {category.count}
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Selected Category Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-5 sm:p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(16,185,129,0.04) 0%, rgba(6,182,212,0.02) 100%)',
              }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
                {/* Left Content */}
                <div className="flex items-center gap-4 sm:gap-6">
                  {selectedCategoryData && (
                    <>
                      <div
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(6,182,212,0.1))' }}
                      >
                        <selectedCategoryData.icon className="w-8 h-8 sm:w-10 sm:h-10 text-brand-400" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                          {selectedCategoryData.name}
                        </h3>
                        <p className="text-slate-400 max-w-md text-sm">
                          {selectedCategoryData.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Quick Stats */}
                <div className="flex items-center gap-6 sm:gap-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5 sm:mb-1">
                      {selectedCategoryData?.count || 150}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500">Projects</div>
                  </div>
                  <div className="w-px h-10 sm:h-12 bg-white/[0.06]" />
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-brand-400 mb-0.5 sm:mb-1">98%</div>
                    <div className="text-xs sm:text-sm text-slate-500">Success Rate</div>
                  </div>
                  <div className="w-px h-10 sm:h-12 bg-white/[0.06]" />
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-teal-400 mb-0.5 sm:mb-1">4.9</div>
                    <div className="text-xs sm:text-sm text-slate-500">Avg Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioCategoriesSection;
