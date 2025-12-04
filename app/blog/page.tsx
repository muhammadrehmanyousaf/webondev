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
  return <BlogPageClient />;
}
