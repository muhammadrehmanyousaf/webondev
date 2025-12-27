import React from 'react';
import { Metadata } from 'next';
import BlogPageClient from '@/components/pages/BlogPageClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Blog - Web On Dev | Expert Insights on Software Development',
  description: 'Stay updated with the latest insights on web development, digital marketing, and technology trends. Expert analysis and comprehensive guides from our team.',
  keywords: 'software development blog, web development insights, digital marketing tips, technology trends, programming guides',
  alternates: {
    canonical: `${siteUrl}/blog/`,
  },
  openGraph: {
    title: 'Blog - Web On Dev | Expert Insights on Software Development',
    description: 'Stay updated with the latest insights on web development, digital marketing, and technology trends. Expert analysis and comprehensive guides from our team.',
    url: `${siteUrl}/blog/`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Web On Dev | Expert Insights on Software Development',
    description: 'Stay updated with the latest insights on web development, digital marketing, and technology trends. Expert analysis and comprehensive guides from our team.',
  },
};

export default function BlogPage() {
  return (
    <>
      <BlogPageClient />

      {/* JSON-LD: Blog CollectionPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            '@id': `${siteUrl}/blog/#collectionpage`,
            name: 'Web On Dev Blog - Expert Software Development Insights',
            description: 'Expert insights on web development, mobile apps, UI/UX design, digital marketing, and technology trends.',
            url: `${siteUrl}/blog/`,
            isPartOf: { '@id': `${siteUrl}/#website` },
            about: { '@id': `${siteUrl}/#organization` },
            publisher: { '@id': `${siteUrl}/#organization` },
            inLanguage: 'en-US',
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', '.blog-intro', 'h2']
            }
          })
        }}
      />

      {/* JSON-LD: Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog/` }
            ]
          })
        }}
      />

      {/* JSON-LD: Blog ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Latest Blog Posts',
            description: 'Expert articles on software development, web development, and digital solutions',
            itemListOrder: 'https://schema.org/ItemListOrderDescending',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@type': 'BlogPosting',
                  headline: 'Complete Guide to Web Development in 2024',
                  url: `${siteUrl}/blog/complete-guide-web-development-2024/`,
                  author: { '@type': 'Organization', name: 'Web On Dev' }
                }
              },
              {
                '@type': 'ListItem',
                position: 2,
                item: {
                  '@type': 'BlogPosting',
                  headline: 'React Performance Optimization Guide',
                  url: `${siteUrl}/blog/react-performance-optimization-guide/`,
                  author: { '@type': 'Organization', name: 'Web On Dev' }
                }
              },
              {
                '@type': 'ListItem',
                position: 3,
                item: {
                  '@type': 'BlogPosting',
                  headline: 'Next.js 14 Features Complete Guide',
                  url: `${siteUrl}/blog/nextjs-14-features-complete-guide/`,
                  author: { '@type': 'Organization', name: 'Web On Dev' }
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
