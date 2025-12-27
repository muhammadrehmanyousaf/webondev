'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Code,
  Palette,
  TrendingUp,
  Cloud,
  Building,
  Sparkles,
  Filter,
  LayoutGrid,
  List,
  Zap
} from 'lucide-react';

// =============================================================================
// MAGNETIC BUTTON
// =============================================================================

const MagneticButton = ({ children, className = '', onClick, isActive = false }: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.2;
    const deltaY = (e.clientY - centerY) * 0.2;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const springConfig = { stiffness: 150, damping: 15 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  return (
    <motion.button
      ref={ref}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

// =============================================================================
// GRADIENT TEXT
// =============================================================================

const GradientText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="absolute inset-0 bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent blur-xl opacity-50">
        {children}
      </span>
      <span className="relative bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
        {children}
      </span>
    </span>
  );
};

// =============================================================================
// CATEGORY DATA
// =============================================================================

const categories = [
  { id: 'all', name: 'All Projects', icon: LayoutGrid, count: 150, color: 'from-brand-500 to-teal-500', description: 'Browse our complete portfolio of successful projects' },
  { id: 'web', name: 'Web Development', icon: Globe, count: 45, color: 'from-blue-500 to-indigo-500', description: 'Modern, responsive web applications and websites' },
  { id: 'mobile', name: 'Mobile Apps', icon: Smartphone, count: 32, color: 'from-purple-500 to-pink-500', description: 'Native and cross-platform mobile applications' },
  { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart, count: 28, color: 'from-amber-500 to-orange-500', description: 'Online stores and marketplace platforms' },
  { id: 'saas', name: 'SaaS Platforms', icon: Code, count: 22, color: 'from-teal-500 to-cyan-500', description: 'Cloud-based software solutions' },
  { id: 'uiux', name: 'UI/UX Design', icon: Palette, count: 18, color: 'from-pink-500 to-rose-500', description: 'Beautiful and intuitive user interfaces' },
  { id: 'marketing', name: 'Digital Marketing', icon: TrendingUp, count: 15, color: 'from-green-500 to-emerald-500', description: 'Marketing campaigns and branding projects' },
  { id: 'enterprise', name: 'Enterprise', icon: Building, count: 12, color: 'from-slate-500 to-gray-600', description: 'Large-scale enterprise solutions' },
];

// =============================================================================
// MAIN COMPONENT
// =============================================================================

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
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    onCategoryChange?.(categoryId);
  };

  const selectedCategoryData = categories.find(c => c.id === selectedCategory);

  return (
    <section className="relative py-20 bg-[#030712] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 mb-6"
          >
            <Filter className="w-4 h-4 text-brand-400" />
            <span className="text-brand-400 font-semibold text-sm">Filter by Category</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Project <GradientText>Categories</GradientText>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Browse our diverse portfolio across different industries and technologies to see the breadth of our expertise.
          </p>
        </motion.div>

        {/* View Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 p-1 rounded-xl bg-white/5 border border-white/10">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                viewMode === 'grid'
                  ? 'bg-brand-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="text-sm font-medium">Grid</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                viewMode === 'list'
                  ? 'bg-brand-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <List className="w-4 h-4" />
              <span className="text-sm font-medium">List</span>
            </button>
          </div>
        </motion.div>

        {/* Categories Grid/List */}
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12"
            >
              {categories.map((category, index) => (
                <MagneticButton
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  isActive={selectedCategory === category.id}
                  className={`group relative p-4 rounded-2xl transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-br from-brand-500/20 to-teal-500/20 border-2 border-brand-500/50 shadow-lg shadow-brand-500/20'
                      : 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  {/* Glow Effect */}
                  {selectedCategory === category.id && (
                    <motion.div
                      layoutId="categoryGlow"
                      className="absolute inset-0 bg-gradient-to-r from-brand-500/20 to-teal-500/20 rounded-2xl blur-xl -z-10"
                    />
                  )}

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="relative"
                  >
                    {/* Icon */}
                    <motion.div
                      className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${category.color} p-[1px]`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`w-full h-full rounded-xl flex items-center justify-center ${
                        selectedCategory === category.id ? 'bg-transparent' : 'bg-slate-900 group-hover:bg-transparent'
                      } transition-colors duration-300`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>

                    {/* Name */}
                    <h3 className={`text-sm font-bold mb-1 text-center transition-colors ${
                      selectedCategory === category.id ? 'text-brand-400' : 'text-white group-hover:text-brand-400'
                    }`}>
                      {category.name}
                    </h3>

                    {/* Count */}
                    <p className="text-xs text-slate-500 text-center">
                      {category.count} projects
                    </p>

                    {/* Active Indicator */}
                    <AnimatePresence>
                      {selectedCategory === category.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="absolute -top-1 -right-1 w-4 h-4 bg-brand-500 rounded-full flex items-center justify-center"
                        >
                          <motion.div
                            className="w-2 h-2 bg-white rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </MagneticButton>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 10 }}
                  className={`group relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-brand-500/20 to-teal-500/20 border-2 border-brand-500/50'
                      : 'bg-white/5 border border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} p-[1px] shrink-0`}>
                    <div className={`w-full h-full rounded-xl flex items-center justify-center ${
                      selectedCategory === category.id ? 'bg-transparent' : 'bg-slate-900 group-hover:bg-transparent'
                    } transition-colors duration-300`}>
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-lg font-bold transition-colors ${
                      selectedCategory === category.id ? 'text-brand-400' : 'text-white group-hover:text-brand-400'
                    }`}>
                      {category.name}
                    </h3>
                    <p className="text-sm text-slate-500 truncate">
                      {category.description}
                    </p>
                  </div>

                  {/* Count Badge */}
                  <div className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-brand-500 text-white'
                      : 'bg-white/10 text-slate-400 group-hover:bg-brand-500/20 group-hover:text-brand-400'
                  }`}>
                    {category.count}
                  </div>

                  {/* Hover Effect */}
                  {hoveredCategory === category.id && selectedCategory !== category.id && (
                    <motion.div
                      layoutId="listHover"
                      className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-teal-500/5 rounded-2xl -z-10"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Selected Category Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/30 via-teal-500/30 to-cyan-500/30 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left Content */}
                <div className="flex items-center gap-6">
                  {selectedCategoryData && (
                    <>
                      <motion.div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedCategoryData.color} p-[2px]`}
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                          <selectedCategoryData.icon className="w-10 h-10 text-white" />
                        </div>
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {selectedCategoryData.name}
                        </h3>
                        <p className="text-slate-400 max-w-md">
                          {selectedCategoryData.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Quick Stats */}
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <motion.div
                      className="text-4xl font-bold text-white mb-1"
                      key={selectedCategoryData?.count}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                    >
                      {selectedCategoryData?.count || 150}
                    </motion.div>
                    <div className="text-sm text-slate-500">Projects</div>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brand-400 mb-1">98%</div>
                    <div className="text-sm text-slate-500">Success Rate</div>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-400 mb-1">4.9</div>
                    <div className="text-sm text-slate-500">Avg Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CSS for gradient animation */}
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default PortfolioCategoriesSection;
