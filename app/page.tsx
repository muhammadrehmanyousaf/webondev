import React from 'react';
import { Metadata } from 'next';
import HomePageClient from '@/components/pages/HomePageClient';
import { getBaseUrl } from '@/lib/site-config';

const siteUrl = getBaseUrl();

export const metadata: Metadata = {
  title: 'Web On Dev - Professional Software Development & Digital Solutions',
  description: 'Transform your digital vision into reality with Web On Dev. Award-winning software development company offering web development, mobile apps, UI/UX design, digital marketing, and custom software solutions. 500+ projects delivered worldwide.',
  keywords: [
    'software development company',
    'web development agency',
    'mobile app development',
    'UI/UX design services',
    'digital marketing agency',
    'custom software solutions',
    'Next.js development',
    'React development',
    'cloud solutions',
    'DevOps services',
    'e-commerce development',
    'Shopify development',
    'enterprise software',
    'startup development',
  ].join(', '),
  authors: [{ name: 'Web On Dev', url: siteUrl }],
  creator: 'Web On Dev',
  publisher: 'Web On Dev',
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    title: 'Web On Dev - Professional Software Development & Digital Solutions',
    description: 'Transform your digital vision into reality. Award-winning software development company offering web development, mobile apps, UI/UX design, and custom software solutions.',
    url: `${siteUrl}/`,
    type: 'website',
    siteName: 'Web On Dev',
    locale: 'en_US',
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Web On Dev - Professional Software Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web On Dev - Professional Software Development & Digital Solutions',
    description: 'Transform your digital vision into reality. Award-winning software development company with 500+ projects delivered worldwide.',
    creator: '@webondev',
    site: '@webondev',
    images: [`${siteUrl}/images/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

// Homepage JSON-LD Schema
const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${siteUrl}/#webpage`,
  url: siteUrl,
  name: 'Web On Dev - Professional Software Development & Digital Solutions',
  description: 'Transform your digital vision into reality with Web On Dev. Award-winning software development company.',
  isPartOf: { '@id': `${siteUrl}/#website` },
  about: { '@id': `${siteUrl}/#organization` },
  inLanguage: 'en-US',
  datePublished: '2015-01-01',
  dateModified: new Date().toISOString().split('T')[0],
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.hero-description', 'h2'],
  },
  mainEntity: {
    '@id': `${siteUrl}/#organization`,
  },
};

// FAQ Schema for homepage
const homeFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Web On Dev offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Web On Dev offers comprehensive software development services including web development, mobile app development, UI/UX design, digital marketing, e-commerce solutions, cloud services, DevOps, and custom software development.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to develop a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website development costs vary based on complexity. Simple websites start from $3,000, business websites from $5,000-$15,000, and complex web applications can range from $20,000 to $100,000+. Contact us for a free quote tailored to your requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with international clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Web On Dev serves clients worldwide. We have delivered 500+ projects across multiple countries including the United States, United Kingdom, Canada, Australia, and more. Our team works across time zones to ensure seamless communication.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies do you use for web development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use modern technologies including Next.js, React, TypeScript, Node.js, Python, PostgreSQL, MongoDB, AWS, Vercel, and more. Our tech stack is chosen based on project requirements to ensure optimal performance and scalability.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <HomePageClient />
      {/* Homepage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFAQSchema) }}
      />
    </>
  );
}