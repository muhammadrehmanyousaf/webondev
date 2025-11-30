'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Code, Zap } from 'lucide-react';

const BlogSection1: React.FC = () => {
  return (
    <section id="introduction" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium mb-4">
              Introduction
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Evolution of Modern Web Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Web development has transformed from simple static pages to sophisticated, interactive applications that rival native software in functionality and performance.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                From Static Pages to Dynamic Applications
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The landscape of web development has undergone a revolutionary transformation over the past decade. What once required simple HTML and CSS knowledge has evolved into a complex ecosystem of frameworks, tools, and methodologies that demand continuous learning and adaptation.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                In 2024, web developers must navigate through an ever-expanding universe of technologies while maintaining focus on creating exceptional user experiences that drive business success.
              </p>
              
              {/* Key Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Modern Frameworks</h4>
                    <p className="text-gray-600">React, Vue, Angular, and Next.js provide powerful tools for building complex applications.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Performance Optimization</h4>
                    <p className="text-gray-600">Core Web Vitals, caching strategies, and code splitting are essential for success.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">SEO & Accessibility</h4>
                    <p className="text-gray-600">Search engine optimization and web accessibility are no longer optional.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Modern Technologies</h4>
                    <p className="text-gray-600 text-sm">HTML5, CSS3, JavaScript ES2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Performance First</h4>
                    <p className="text-gray-600 text-sm">Core Web Vitals & Optimization</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">User Experience</h4>
                    <p className="text-gray-600 text-sm">Accessibility & Responsive Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Mobile Usage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">3.2s</div>
              <div className="text-blue-100">Average Load Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">60%</div>
              <div className="text-blue-100">Bounce Rate Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection1;
