'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Code, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

const BlogSection2: React.FC = () => {
  return (
    <section id="html5-semantic" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 px-4 py-2 text-sm font-medium mb-4">
              HTML5 & Semantic Markup
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Foundation: HTML5 and Semantic Markup
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              HTML5 represents more than just an update to the markup language—it's a fundamental shift in how we structure web content for better accessibility and SEO.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Semantic HTML5 Elements
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Semantic HTML5 elements like <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">&lt;header&gt;</code>, <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">&lt;nav&gt;</code>, <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">&lt;main&gt;</code>, <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">&lt;article&gt;</code>, <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">&lt;section&gt;</code>, and <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">&lt;footer&gt;</code> provide meaning to both browsers and assistive technologies.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Better SEO Rankings</h4>
                    <p className="text-gray-600">Search engines can better understand your content structure, leading to improved rankings.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Enhanced Accessibility</h4>
                    <p className="text-gray-600">Screen readers and assistive technologies can navigate your content more effectively.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Cleaner Code Structure</h4>
                    <p className="text-gray-600">More maintainable and readable code that clearly indicates content purpose.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Example Semantic Structure</h4>
              <div className="bg-gray-900 rounded-lg p-4 text-sm text-green-400 font-mono overflow-x-auto">
                <pre>{`&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;My Website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;nav&gt;
      &lt;!-- Navigation content --&gt;
    &lt;/nav&gt;
  &lt;/header&gt;
  
  &lt;main&gt;
    &lt;article&gt;
      &lt;header&gt;
        &lt;h1&gt;Article Title&lt;/h1&gt;
      &lt;/header&gt;
      &lt;section&gt;
        &lt;!-- Article content --&gt;
      &lt;/section&gt;
    &lt;/article&gt;
  &lt;/main&gt;
  
  &lt;footer&gt;
    &lt;!-- Footer content --&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;`}</pre>
              </div>
            </div>
          </div>

          {/* Accessibility Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-yellow-300" />
              <h3 className="text-2xl font-bold">Accessibility and Web Standards</h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Web accessibility isn't just a legal requirement—it's a moral imperative and a business advantage. The Web Content Accessibility Guidelines (WCAG) 2.1 provide comprehensive standards for creating accessible web content.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">ARIA Attributes</h4>
                <p className="text-blue-100 text-sm">Implement proper ARIA attributes for enhanced accessibility</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Keyboard Navigation</h4>
                <p className="text-blue-100 text-sm">Ensure all interactive elements are keyboard accessible</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Alt Text</h4>
                <p className="text-blue-100 text-sm">Provide descriptive alternative text for all images</p>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Do's</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Use semantic HTML elements appropriately
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Include proper heading hierarchy (H1-H6)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Add alt text to all images
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Ensure keyboard navigation works
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h4 className="font-semibold text-gray-900">Don'ts</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full mt-1 flex-shrink-0" />
                  Use divs for everything instead of semantic elements
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full mt-1 flex-shrink-0" />
                  Skip heading levels (H1 to H3)
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full mt-1 flex-shrink-0" />
                  Leave images without alt text
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full mt-1 flex-shrink-0" />
                  Rely solely on color for information
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection2;
