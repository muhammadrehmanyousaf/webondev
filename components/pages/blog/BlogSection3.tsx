'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Code, CheckCircle, Zap, Palette, Grid, Smartphone } from 'lucide-react';

const BlogSection3: React.FC = () => {
  return (
    <section id="css3-modern-layouts" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 px-4 py-2 text-sm font-medium mb-4">
              CSS3 & Modern Layouts
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              CSS3: Beyond Basic Styling
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              CSS3 has evolved into a powerful styling language that goes far beyond simple color and layout changes. Modern CSS features like Flexbox and Grid have revolutionized how we approach responsive design and complex layouts.
            </p>
          </div>

          {/* CSS Grid Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  CSS Grid: The Ultimate Layout System
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  CSS Grid provides a two-dimensional layout system that gives developers unprecedented control over both rows and columns. Unlike Flexbox, which is primarily one-dimensional, Grid allows for complex layouts that were previously impossible or required extensive JavaScript manipulation.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Two-Dimensional Control</h4>
                      <p className="text-gray-600">Control both rows and columns simultaneously for complex layouts.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Responsive Design</h4>
                      <p className="text-gray-600">Create responsive layouts that adapt to different screen sizes automatically.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Grid Areas</h4>
                      <p className="text-gray-600">Define named grid areas for semantic and maintainable layouts.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-white mb-4">CSS Grid Example</h4>
                <div className="bg-gray-800 rounded-lg p-4 text-sm text-green-400 font-mono overflow-x-auto">
                  <pre>{`.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.grid-item {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Responsive grid with named areas */
.layout {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Flexbox Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Grid className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold">Flexbox: One-Dimensional Layouts</h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Flexbox is perfect for one-dimensional layouts where you need to align items along a single axis. It's ideal for navigation bars, card layouts, and form elements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Justify Content</h4>
                <p className="text-blue-100 text-sm">Control alignment along the main axis</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Align Items</h4>
                <p className="text-blue-100 text-sm">Control alignment along the cross axis</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Flex Properties</h4>
                <p className="text-blue-100 text-sm">Control how items grow and shrink</p>
              </div>
            </div>
          </div>

          {/* CSS Custom Properties */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">CSS Custom Properties (Variables)</h4>
              <div className="bg-gray-900 rounded-lg p-4 text-sm text-green-400 font-mono overflow-x-auto">
                <pre>{`:root {
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --text-color: #1f2937;
  --background-color: #ffffff;
  --border-radius: 8px;
  --spacing-unit: 1rem;
}

.button {
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--border-radius);
  padding: var(--spacing-unit);
}

/* Dark theme override */
[data-theme="dark"] {
  --text-color: #f9fafb;
  --background-color: #111827;
}`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                CSS Custom Properties and Modern Features
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                CSS Custom Properties (CSS Variables) have transformed how we manage design systems and theming. By defining reusable values, we can create consistent, maintainable stylesheets that adapt to different themes or user preferences.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Dynamic Theming</h4>
                    <p className="text-gray-600">Switch between light and dark themes with simple variable changes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Design System Consistency</h4>
                    <p className="text-gray-600">Maintain consistent spacing, colors, and typography across components.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Runtime Updates</h4>
                    <p className="text-gray-600">Update styles dynamically with JavaScript for interactive experiences.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern CSS Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-6 h-6 text-purple-600" />
                <h4 className="font-semibold text-gray-900">Modern Features</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  CSS Grid for complex layouts
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Flexbox for one-dimensional layouts
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Custom properties for theming
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  CSS animations and transitions
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Media queries for responsiveness
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-6 h-6 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Responsive Design</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Mobile-first approach
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Fluid typography with clamp()
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Container queries for component-level responsiveness
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Aspect ratio utilities
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Logical properties for internationalization
                </li>
              </ul>
            </div>
          </div>

          {/* Performance Tips */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-yellow-300" />
              <h3 className="text-2xl font-bold">CSS Performance Best Practices</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Optimization Techniques</h4>
                <ul className="space-y-2 text-green-100">
                  <li>• Use CSS Grid and Flexbox instead of floats</li>
                  <li>• Minimize CSS specificity conflicts</li>
                  <li>• Leverage CSS containment for performance</li>
                  <li>• Use will-change property sparingly</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Modern Approaches</h4>
                <ul className="space-y-2 text-green-100">
                  <li>• Implement CSS-in-JS for component isolation</li>
                  <li>• Use CSS modules for scoped styling</li>
                  <li>• Leverage CSS custom properties for dynamic theming</li>
                  <li>• Optimize critical CSS for above-the-fold content</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection3;
