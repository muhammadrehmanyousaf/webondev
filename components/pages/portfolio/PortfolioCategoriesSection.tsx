'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, ShoppingCart, Code, Palette, TrendingUp, Building, Sparkles, Check, Star } from 'lucide-react';

interface PortfolioCategoriesSectionProps {
  onCategoryChange?: (category: string) => void;
}

const PortfolioCategoriesSection = ({ onCategoryChange }: PortfolioCategoriesSectionProps) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', icon: Globe, count: 150, gradient: 'from-brand-500 to-teal-500' },
    { name: 'Web Development', icon: Globe, count: 45, gradient: 'from-teal-500 to-cyan-500' },
    { name: 'Mobile Apps', icon: Smartphone, count: 32, gradient: 'from-cyan-500 to-blue-500' },
    { name: 'E-commerce', icon: ShoppingCart, count: 28, gradient: 'from-blue-500 to-purple-500' },
    { name: 'SaaS', icon: Code, count: 22, gradient: 'from-purple-500 to-pink-500' },
    { name: 'UI/UX Design', icon: Palette, count: 18, gradient: 'from-pink-500 to-rose-500' },
    { name: 'Digital Marketing', icon: TrendingUp, count: 15, gradient: 'from-rose-500 to-orange-500' },
    { name: 'Enterprise', icon: Building, count: 12, gradient: 'from-orange-500 to-brand-500' }
  ];

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
    onCategoryChange?.(categoryName);
  };

  const stats = [
    { value: categories.find(cat => cat.name === activeCategory)?.count || 150, label: 'Projects' },
    { value: '98%', label: 'Success Rate' },
    { value: '4.9', label: 'Avg Rating' }
  ];

  return (
    <section id="projects" className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px]"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dot Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Project Categories</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Browse By</span>
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse portfolio across different industries and technologies
            to see the breadth of our expertise.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-16">
          {categories.map((category, index) => {
            const isActive = activeCategory === category.name;

            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleCategoryClick(category.name)}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-0 ${isActive ? 'opacity-40' : 'group-hover:opacity-30'} transition-opacity duration-500`} />

                <motion.div
                  className={`relative text-center p-4 rounded-2xl border transition-all duration-500 ${
                    isActive
                      ? 'bg-white/10 border-brand-500/50 shadow-lg shadow-brand-500/10'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl mx-auto mb-3 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <h3 className={`text-sm font-bold mb-1 line-clamp-1 ${
                    isActive ? 'text-brand-400' : 'text-white group-hover:text-brand-400'
                  } transition-colors`}>
                    {category.name}
                  </h3>

                  <p className="text-xs text-slate-500">
                    {category.count} projects
                  </p>

                  {/* Active Indicator */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Check className="w-3 h-3 text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.button>
            );
          })}
        </div>

        {/* Category Description Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {activeCategory === 'All' ? 'Complete ' : ''}
                        <span className="bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent">
                          {activeCategory === 'All' ? 'Portfolio' : activeCategory}
                        </span>
                      </h3>
                      <p className="text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        {activeCategory === 'All'
                          ? 'Explore our complete portfolio showcasing projects across all categories and industries. Each project represents our commitment to excellence and innovation.'
                          : `Discover our ${activeCategory.toLowerCase()} projects that demonstrate our expertise in this domain. We deliver solutions that exceed expectations and drive business growth.`
                        }
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={`${activeCategory}-${index}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center group"
                    >
                      <motion.div
                        className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent mb-1"
                        whileHover={{ scale: 1.1 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioCategoriesSection;
