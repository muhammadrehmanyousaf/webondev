'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Search, TrendingUp, Target, Globe, BarChart3, CheckCircle } from 'lucide-react';

const BlogSection7: React.FC = () => {
  return (
    <section id="seo-optimization" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 px-4 py-2 text-sm font-medium mb-4">
              SEO
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              SEO and Search Engine Optimization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Search engine optimization is crucial for web visibility and organic traffic generation. Modern SEO goes beyond keywords to encompass technical performance, user experience, and content quality.
            </p>
          </div>

          {/* Technical SEO Fundamentals */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Technical SEO: The Foundation of Success
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Technical SEO ensures that search engines can crawl, index, and understand your website effectively. It's the foundation upon which all other SEO efforts are built, focusing on the technical aspects that impact search engine visibility.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Site Architecture & URL Structure</h4>
                      <p className="text-gray-600">Clean, logical URL structures that are both user and search engine friendly.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">XML Sitemaps & Robots.txt</h4>
                      <p className="text-gray-600">Proper sitemap generation and robots.txt configuration for optimal crawling.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Schema Markup & Structured Data</h4>
                      <p className="text-gray-600">Rich snippets and structured data to enhance search result appearance.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-white mb-4">Technical SEO Implementation</h4>
                <div className="bg-gray-800 rounded-lg p-4 text-sm text-green-400 font-mono overflow-x-auto">
                  <pre>{`// Next.js SEO optimization
import Head from 'next/head';
import { NextSeo } from 'next-seo';

export default function BlogPost({ post }) {
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        canonical={post.url}
        openGraph={{
          title: post.title,
          description: post.excerpt,
          images: [{ url: post.featuredImage }],
          type: 'article',
          article: {
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt,
            authors: [post.author],
            tags: post.tags,
          },
        }}
        twitter={{
          handle: '@yourhandle',
          site: '@yoursite',
          cardType: 'summary_large_image',
        }}
      />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "datePublished": post.publishedAt,
            "dateModified": post.updatedAt,
            "publisher": {
              "@type": "Organization",
              "name": "Your Company",
              "logo": {
                "@type": "ImageObject",
                "url": "/logo.png"
              }
            }
          })
        }}
      />
    </>
  );
}

// robots.txt configuration
export const robots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
};

// sitemap generation
export async function generateSitemap() {
  const posts = await getPosts();
  
  return posts.map((post) => ({
    url: \`https://yoursite.com/blog/\${post.slug}\`,
    lastModified: post.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* On-Page Optimization */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Search className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold">On-Page SEO: Content & User Experience</h3>
            </div>
            <p className="text-orange-100 mb-6 leading-relaxed">
              On-page SEO focuses on optimizing individual pages to rank higher and earn more relevant traffic. This includes content optimization, user experience improvements, and technical elements that affect search rankings.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Content Optimization</h4>
                <p className="text-orange-100 text-sm">Keyword research, content quality, and user intent matching</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">User Experience</h4>
                <p className="text-orange-100 text-sm">Page speed, mobile-friendliness, and navigation structure</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Technical Elements</h4>
                <p className="text-orange-100 text-sm">Meta tags, headers, internal linking, and image optimization</p>
              </div>
            </div>
          </div>

          {/* Content Strategy & Keywords */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Content Strategy & Keyword Research
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Modern SEO content strategy goes beyond keyword stuffing to focus on user intent, topic clusters, and comprehensive content that answers user questions and provides genuine value.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Topic Clusters & Pillar Pages</h4>
                    <p className="text-gray-600">Create comprehensive content hubs that cover topics thoroughly and establish authority.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">User Intent Optimization</h4>
                    <p className="text-gray-600">Match content to different types of user intent: informational, navigational, commercial, and transactional.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Long-tail Keywords</h4>
                    <p className="text-gray-600">Target specific, less competitive keywords that often convert better.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Content Strategy Framework</h4>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-900 mb-2">1. Research Phase</h5>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Competitor analysis and gap identification</li>
                    <li>• Keyword research with search volume and difficulty</li>
                    <li>• User persona development and journey mapping</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h5 className="font-semibold text-green-900 mb-2">2. Planning Phase</h5>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Content calendar and topic prioritization</li>
                    <li>• Content format selection (blog, video, infographic)</li>
                    <li>• Internal linking strategy development</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-semibold text-purple-900 mb-2">3. Creation Phase</h5>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• High-quality, comprehensive content creation</li>
                    <li>• SEO optimization and technical implementation</li>
                    <li>• Visual elements and multimedia integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Local SEO & E-A-T */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold">Local SEO & E-A-T Principles</h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Local SEO and E-A-T (Expertise, Authoritativeness, Trustworthiness) are crucial for businesses targeting local markets and building credibility with both users and search engines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Local SEO Strategies</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Google My Business optimization and management</li>
                  <li>• Local keyword targeting and location-based content</li>
                  <li>• Local citations and directory listings</li>
                  <li>• Customer reviews and reputation management</li>
                  <li>• Local link building and community engagement</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">E-A-T Implementation</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Author credentials and expertise demonstration</li>
                  <li>• Content accuracy and fact-checking processes</li>
                  <li>• Transparent business information and policies</li>
                  <li>• Professional website design and user experience</li>
                  <li>• Regular content updates and maintenance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO Analytics & Monitoring */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
                <h4 className="font-semibold text-gray-900">SEO Analytics & KPIs</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Organic traffic growth and conversion rates
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Keyword rankings and search visibility
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Click-through rates and bounce rates
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Page speed and Core Web Vitals
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Backlink profile and domain authority
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
                <h4 className="font-semibold text-gray-900">Modern SEO Trends</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Voice search optimization and conversational queries
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  AI-powered content and personalization
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Mobile-first indexing and optimization
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Featured snippets and zero-click searches
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  Core Web Vitals and page experience signals
                </li>
              </ul>
            </div>
          </div>

          {/* Advanced SEO Techniques */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold">Advanced SEO Techniques & Future Trends</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Technical SEO Advanced</h4>
                <ul className="space-y-2 text-purple-100">
                  <li>• JavaScript SEO and dynamic content optimization</li>
                  <li>• International SEO and hreflang implementation</li>
                  <li>• Advanced schema markup and rich snippets</li>
                  <li>• Core Web Vitals optimization strategies</li>
                  <li>• Progressive Web App SEO considerations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Content & User Experience</h4>
                <ul className="space-y-2 text-purple-100">
                  <li>• Interactive content and multimedia optimization</li>
                  <li>• User-generated content and community building</li>
                  <li>• Personalization and AI-driven content</li>
                  <li>• Accessibility and inclusive design for SEO</li>
                  <li>• Social media integration and social signals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection7;
