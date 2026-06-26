import React from 'react';
import { Metadata } from 'next';
import HomePageClient from '@/components/pages/HomePageClient';
import { getBaseUrl } from '@/lib/site-config';

export const revalidate = 86400;

const siteUrl = getBaseUrl();

export const metadata: Metadata = {
  title: 'Web On Dev - Custom Software Development Company (500+ Projects)',
  description: 'Web On Dev builds websites, mobile apps & custom software starting from $3,000. Next.js, React & Flutter experts based in Lahore, serving clients worldwide. Book your free consultation now.',
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
    title: 'Web On Dev - Custom Software Development Company (500+ Projects)',
    description: 'Web On Dev builds websites, mobile apps & custom software starting from $3,000. Next.js, React & Flutter experts serving clients worldwide. Book your free consultation now.',
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
    title: 'Web On Dev - Custom Software Development Company (500+ Projects)',
    description: 'Custom websites, mobile apps & software starting from $3,000. Next.js, React & Flutter experts serving clients worldwide. Free consultation available.',
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
  description: 'Transform your digital vision into reality with Web On Dev, a software development company building web, mobile, and custom software since 2015.',
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

// FAQ Schema for homepage - Comprehensive for AI Search
const homeFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Web On Dev?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Web On Dev is a professional software development company founded in 2015, headquartered in Lahore, Pakistan. We specialize in web development, mobile app development, UI/UX design, digital marketing, and custom software solutions for businesses worldwide, building with Next.js, React, React Native, and Flutter.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does Web On Dev offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Web On Dev offers comprehensive software development services including: Web Development (Next.js, React, Vue.js - $3,000-$100,000), Mobile App Development (iOS, Android, React Native, Flutter - $10,000-$150,000), UI/UX Design ($2,000-$25,000), Digital Marketing & SEO ($500-$10,000/month), E-commerce Development (Shopify, WooCommerce - $5,000-$75,000), and Cloud & DevOps (AWS, Azure, GCP).',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to develop a website with Web On Dev?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website development costs at Web On Dev range from $3,000 for simple websites to $100,000+ for complex enterprise applications. Landing pages: $3,000-$5,000. Business websites: $5,000-$15,000. E-commerce sites: $5,000-$75,000. Web applications: $20,000-$100,000+. We offer free consultations and transparent pricing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Web On Dev work with international clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Web On Dev works with international clients including those in the United States, United Kingdom, Canada, Australia, Germany, the UAE, and India. We work across time zones and our Lahore base gives convenient overlap with US, UK, and UAE business hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies does Web On Dev use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Web On Dev uses modern technologies: Frontend (React, Next.js, TypeScript, Vue.js, Tailwind CSS), Backend (Node.js, Python, PHP, Go, Java), Databases (PostgreSQL, MongoDB, MySQL, Redis), Mobile (React Native, Flutter, Swift, Kotlin), Cloud (AWS, Vercel, Google Cloud, Azure), and DevOps (Docker, Kubernetes, CI/CD).',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website development timelines at Web On Dev: Simple websites take 2-4 weeks, business websites 4-8 weeks, e-commerce sites 6-12 weeks, and complex web applications 8-16+ weeks. We follow agile methodology with weekly updates and milestone deliveries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Web On Dev offer free consultations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Web On Dev offers free 30-60 minute consultations. During the consultation, we discuss your project requirements, provide technical recommendations, share relevant case studies, and give you a detailed quote. No commitment required. Schedule via our contact form, email (webondev786@gmail.com), or WhatsApp (+92-310-6803687).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Web On Dev\'s payment structure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Web On Dev uses a milestone-based payment structure: 30% upfront deposit, 40% at project milestones (design approval, development phases), and 30% upon project completion. We accept bank transfers, PayPal, Wise, and Payoneer. Monthly retainers are available for ongoing work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Web On Dev provide ongoing support and maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Web On Dev offers ongoing support and maintenance packages. Options include: Bug fixes and security updates, Performance monitoring, Content updates, Feature additions, 24/7 emergency support, and Hosting management. Maintenance plans start from $200/month depending on project complexity.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I contact Web On Dev?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contact Web On Dev through: Email (webondev786@gmail.com), Phone (+92-310-6803687), WhatsApp (+92-310-6803687), or our website contact form at webondev.com/contact. We respond within 24 hours. Office: G8JX+CMF, Main Gulberg, Lahore, Pakistan.',
      },
    },
  ],
};

// NOTE: Removed fabricated VideoObject schema — it described a testimonial video
// that does not exist (placeholder thumbnail + invalid embed URL), which is a
// Google rich-result spam risk. Re-add only with a real, published video.

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