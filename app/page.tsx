import React from 'react';
import { Metadata } from 'next';
import HomePageClient from '@/components/pages/HomePageClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Solutions Indicator - Professional Software Development Services',
  description: 'Leading software development company providing web development, mobile apps, UI/UX design, digital marketing, and comprehensive software solutions for businesses worldwide.',
  keywords: 'software development, web development, mobile apps, UI/UX design, digital marketing, software agency, custom software, SEO, Next.js, React, cloud, DevOps',
  alternates: {
    canonical: `https://www.solutionsindicator.com/`,
  },
  openGraph: {
    title: 'Solutions Indicator - Professional Software Development Services',
    description: 'Leading software development company providing web development, mobile apps, UI/UX design, digital marketing, and comprehensive software solutions for businesses worldwide.',
    url: `https://www.solutionsindicator.com/`,
    type: 'website',
    siteName: 'Solutions Indicator',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions Indicator - Professional Software Development Services',
    description: 'Leading software development company providing web development, mobile apps, UI/UX design, digital marketing, and comprehensive software solutions for businesses worldwide.',
    creator: '@solutionsindicator',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}