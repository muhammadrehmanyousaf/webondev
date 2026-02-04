'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Code, CheckCircle, Zap, Gauge, Target } from 'lucide-react';

const BlogSection6: React.FC = () => {
  return (
    <section id="performance-optimization" className="relative py-12 sm:py-16 lg:py-20 bg-[#030712] overflow-hidden">
      <div className="grain absolute inset-0" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 30% at 50% 0%, rgba(16,185,129,0.04), transparent 70%)' }} />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="gradient-border-subtle text-brand-400 px-4 py-2 text-sm font-medium mb-4">
              Performance
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Performance Optimization: The Key to Success
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              In today's competitive digital landscape, performance is not just a technical consideration—it's a business imperative. Users expect fast, responsive experiences, and search engines reward websites that deliver them.
            </p>
          </div>

          {/* Core Web Vitals */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Core Web Vitals: The New Performance Standard
                </h3>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  Google's Core Web Vitals have become the gold standard for measuring web performance. These metrics focus on user experience rather than just technical performance, measuring how users actually perceive the speed and responsiveness of your website.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Largest Contentful Paint (LCP)</h4>
                      <p className="text-slate-400">Measures loading performance and should be under 2.5 seconds.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">First Input Delay (FID)</h4>
                      <p className="text-slate-400">Measures interactivity and should be under 100 milliseconds.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Cumulative Layout Shift (CLS)</h4>
                      <p className="text-slate-400">Measures visual stability and should be under 0.1.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0a0f1a] rounded-2xl p-6 shadow-lg border border-white/[0.06]">
                <h4 className="text-lg font-semibold text-white mb-4">Performance Monitoring Example</h4>
                <div className="bg-[#030712] rounded-lg p-4 text-sm text-brand-400 font-mono overflow-x-auto">
                  <pre>{`// Performance monitoring with Web Vitals
import { getCLS, getFID, getLCP } from 'web-vitals';

function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  const url = '/analytics';

  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: 'POST', keepalive: true });
  }
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);

// Next.js performance optimization
export default function MyPage() {
  return (
    <div>
      <Image
        src="/hero-image.jpg"
        alt="Hero"
        width={1200}
        height={600}
        priority
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,..."
      />
    </div>
  );
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Image Optimization */}
          <div className="rounded-2xl p-8 text-white mb-16 border border-white/[0.06]" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(6,182,212,0.05) 100%)' }}>
                                <div className="flex items-center gap-3 mb-6">
                      <Gauge className="w-8 h-8 text-brand-400" />
                      <h3 className="text-2xl font-bold">Image Optimization: The Visual Performance Frontier</h3>
                    </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Images often account for the largest portion of a webpage's size. Modern image optimization techniques can dramatically improve loading times while maintaining visual quality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-white">Modern Formats</h4>
                <p className="text-slate-400 text-sm">WebP, AVIF, and JPEG XL for better compression</p>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-white">Responsive Images</h4>
                <p className="text-slate-400 text-sm">Serve different sizes based on device and screen</p>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-white">Lazy Loading</h4>
                <p className="text-slate-400 text-sm">Load images only when they're needed</p>
              </div>
            </div>
          </div>

          {/* Code Splitting and Bundling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Code Splitting and Bundle Optimization
              </h3>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Modern bundlers like Webpack, Vite, and esbuild provide powerful tools for optimizing JavaScript bundles. Code splitting allows you to load only the code that's needed for each page or feature.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Dynamic Imports</h4>
                    <p className="text-slate-400">Load components and modules on-demand to reduce initial bundle size.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Tree Shaking</h4>
                    <p className="text-slate-400">Remove unused code from production bundles automatically.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Route-Based Splitting</h4>
                    <p className="text-slate-400">Split code by routes to load only necessary JavaScript per page.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.02] rounded-2xl p-8 shadow-lg border border-white/[0.06]">
              <h4 className="text-lg font-semibold text-white mb-6">Code Splitting Examples</h4>
              <div className="bg-[#0a0f1a] rounded-lg p-4 text-sm text-brand-400 font-mono overflow-x-auto">
                <pre>{`// React.lazy for component splitting
const LazyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

// Dynamic imports for modules
const loadAnalytics = async () => {
  const { default: analytics } = await import('./analytics');
  return analytics;
};

// Next.js dynamic imports
import dynamic from 'next/dynamic';

const DynamicChart = dynamic(() => import('./Chart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false
});

// Webpack bundle analysis
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  plugins: [new BundleAnalyzerPlugin()]
};`}</pre>
              </div>
            </div>
          </div>

          {/* Caching Strategies */}
           <div className="rounded-2xl p-8 text-white mb-16 border border-white/[0.06]" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(6,182,212,0.05) 100%)' }}>
            <div className="flex items-center gap-3 mb-6">
              <Gauge className="w-8 h-8 text-brand-400" />
              <h3 className="text-2xl font-bold">Caching Strategies for Optimal Performance</h3>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Effective caching can dramatically improve performance by serving content from memory or disk instead of making network requests. Understanding different caching strategies is crucial for building fast web applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-white">Browser Caching</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>• HTTP cache headers for static assets</li>
                  <li>• Service Worker for offline functionality</li>
                  <li>• IndexedDB for large data storage</li>
                  <li>• localStorage for small persistent data</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-white">Server-Side Caching</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>• Redis for session and data caching</li>
                  <li>• CDN caching for global distribution</li>
                  <li>• Database query optimization</li>
                  <li>• API response caching</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Performance Monitoring */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/[0.02] rounded-xl sm:rounded-2xl p-6 border border-white/[0.06]">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-teal-400" />
                <h4 className="font-semibold text-white">Performance Monitoring Tools</h4>
              </div>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Lighthouse for comprehensive audits
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  WebPageTest for detailed analysis
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Chrome DevTools Performance tab
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Real User Monitoring (RUM)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Bundle analyzers for size optimization
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.02] rounded-xl sm:rounded-2xl p-6 border border-white/[0.06]">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-teal-400" />
                <h4 className="font-semibold text-white">Optimization Techniques</h4>
              </div>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Minification and compression
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Critical CSS inlining
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Resource hints (preload, prefetch)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  HTTP/2 and HTTP/3 adoption
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                  Progressive Web App features
                </li>
              </ul>
            </div>
          </div>

          {/* Advanced Performance */}
          <div className="rounded-2xl p-8 text-white border border-white/[0.06]" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(6,182,212,0.05) 100%)' }}>
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-brand-400" />
              <h3 className="text-2xl font-bold">Advanced Performance Optimization</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-white">Modern Performance Features</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>• Web Workers for background processing</li>
                  <li>• WebAssembly for performance-critical code</li>
                  <li>• Intersection Observer for lazy loading</li>
                  <li>• RequestIdleCallback for non-critical tasks</li>
                  <li>• Virtual scrolling for large datasets</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-white">Performance Best Practices</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>• Optimize for mobile-first performance</li>
                  <li>• Implement proper error boundaries</li>
                  <li>• Use performance budgets</li>
                  <li>• Monitor Core Web Vitals continuously</li>
                  <li>• Implement progressive enhancement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection6;
