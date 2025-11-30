'use client';

import React, { useState } from 'react';
import { Globe, Smartphone, ShoppingCart, Code, Palette, TrendingUp, Cloud, Building } from 'lucide-react';

const PortfolioCategoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', icon: Globe, count: 150, color: 'from-blue-500 to-purple-500' },
    { name: 'Web Development', icon: Globe, count: 45, color: 'from-green-500 to-blue-500' },
    { name: 'Mobile Apps', icon: Smartphone, count: 32, color: 'from-purple-500 to-pink-500' },
    { name: 'E-commerce', icon: ShoppingCart, count: 28, color: 'from-orange-500 to-red-500' },
    { name: 'SaaS Platforms', icon: Code, count: 22, color: 'from-teal-500 to-green-500' },
    { name: 'UI/UX Design', icon: Palette, count: 18, color: 'from-indigo-500 to-purple-500' },
    { name: 'Digital Marketing', icon: TrendingUp, count: 15, color: 'from-pink-500 to-rose-500' },
    { name: 'Enterprise', icon: Building, count: 12, color: 'from-gray-500 to-gray-700' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Categories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our diverse portfolio across different industries and technologies to see the breadth of our expertise.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category.name)}
              className={`group relative p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                activeCategory === category.name
                  ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-lg'
                  : 'bg-white border border-gray-200 hover:shadow-lg'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className={`text-sm font-bold mb-1 ${
                activeCategory === category.name ? 'text-blue-600' : 'text-gray-900'
              }`}>
                {category.name}
              </h3>
              
              <p className="text-xs text-gray-500">
                {category.count} projects
              </p>

              {/* Active Indicator */}
              {activeCategory === category.name && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {activeCategory === 'All' ? 'Complete Portfolio' : activeCategory}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {activeCategory === 'All' 
                ? 'Explore our complete portfolio showcasing projects across all categories and industries.'
                : `Discover our ${activeCategory.toLowerCase()} projects that demonstrate our expertise in this domain.`
              }
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {categories.find(cat => cat.name === activeCategory)?.count || 150}
                </div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">4.9</div>
                <div className="text-sm text-gray-600">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCategoriesSection;