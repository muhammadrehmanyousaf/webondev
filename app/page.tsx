import React from 'react';
import { Metadata } from 'next';
import HomePageClient from '@/components/pages/HomePageClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Web On Dev - Professional Software Development Services',
  description: 'Leading software development company providing web development, mobile apps, UI/UX design, digital marketing, and comprehensive software solutions for businesses worldwide.',
  keywords: 'software development, web development, mobile apps, UI/UX design, digital marketing, software agency, custom software, SEO, Next.js, React, cloud, DevOps',
  alternates: {
    canonical: `https://www.webondev.com/`,
  },
  openGraph: {
    title: 'Web On Dev - Professional Software Development Services',
    description: 'Leading software development company providing web development, mobile apps, UI/UX design, digital marketing, and comprehensive software solutions for businesses worldwide.',
    url: `https://www.webondev.com/`,
    type: 'website',
    siteName: 'Web On Dev',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web On Dev - Professional Software Development Services',
    description: 'Leading software development company providing web development, mobile apps, UI/UX design, digital marketing, and comprehensive software solutions for businesses worldwide.',
    creator: '@webondev',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}