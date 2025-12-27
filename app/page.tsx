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

// Video Schema for Testimonials
const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Web On Dev - Client Success Stories',
  description: 'Hear from our satisfied clients about their experience working with Web On Dev on web development, mobile app, and digital marketing projects.',
  thumbnailUrl: `${siteUrl}/images/video-thumbnail.jpg`,
  uploadDate: '2024-01-15',
  duration: 'PT5M30S',
  contentUrl: 'https://www.youtube.com/@webondev',
  embedUrl: 'https://www.youtube.com/embed/webondev',
  publisher: {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Web On Dev',
  },
};

// Event Schema for Free Consultation
const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Free Software Development Consultation',
  description: 'Schedule a free 30-60 minute consultation with our experts to discuss your software development project requirements.',
  startDate: new Date().toISOString(),
  endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  location: {
    '@type': 'VirtualLocation',
    url: `${siteUrl}/contact/`,
  },
  organizer: {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Web On Dev',
    url: siteUrl,
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: `${siteUrl}/contact/`,
    validFrom: '2024-01-01',
  },
  performer: {
    '@type': 'Organization',
    name: 'Web On Dev Expert Team',
  },
};

// Service Catalog with Pricing
const serviceCatalogSchema = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  '@id': `${siteUrl}/#offercatalog`,
  name: 'Web On Dev Services',
  provider: { '@id': `${siteUrl}/#organization` },
  itemListElement: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Web Development',
        description: 'Custom websites and web applications built with Next.js, React, and modern technologies.',
        url: `${siteUrl}/web-development/`,
      },
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: '3000', maxPrice: '100000' },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Mobile App Development',
        description: 'Native and cross-platform mobile apps for iOS and Android.',
        url: `${siteUrl}/mobile-development/`,
      },
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: '10000', maxPrice: '150000' },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'UI/UX Design',
        description: 'User-centric designs that enhance engagement and conversions.',
        url: `${siteUrl}/ui-ux-design/`,
      },
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: '2000', maxPrice: '25000' },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Digital Marketing',
        description: 'SEO, PPC, social media marketing, and content strategies.',
        url: `${siteUrl}/digital-marketing/`,
      },
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: '500', maxPrice: '10000', unitText: 'MONTH' },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'E-commerce Development',
        description: 'Shopify, WooCommerce, and custom e-commerce solutions.',
        url: `${siteUrl}/ecommerce-solutions/`,
      },
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: '5000', maxPrice: '75000' },
    },
  ],
};

// Aggregate Rating Schema
const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'Web On Dev',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '250',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Michael Thompson' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Web On Dev delivered an exceptional e-commerce platform. Our sales increased by 200% within the first quarter.',
      datePublished: '2024-08-15',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Jennifer Adams' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Their mobile app development team created a flawless cross-platform solution. Highly recommend!',
      datePublished: '2024-07-20',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Robert Chen' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Outstanding SEO results - we now rank #1 for all our target keywords. Traffic increased 400%.',
      datePublished: '2024-06-10',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
    </>
  );
}