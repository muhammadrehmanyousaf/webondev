/**
 * SOFTWARE APPLICATION SCHEMA
 * For tools, apps, and software products built by Web On Dev
 */

import { getBaseUrl } from '@/lib/site-config';

export interface SoftwareApp {
  id: string;
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string[];
  offers: {
    price: number | string;
    priceCurrency: string;
  };
  aggregateRating?: {
    ratingValue: number;
    ratingCount: number;
  };
  screenshot?: string;
  featureList?: string[];
  softwareVersion?: string;
  releaseNotes?: string;
  downloadUrl?: string;
}

export const softwareApps: SoftwareApp[] = [
  {
    id: 'webondev-starter',
    name: 'Web On Dev Next.js Starter',
    description: 'Production-ready Next.js 15 starter template with TypeScript, Tailwind CSS, SEO optimization, and best practices built-in.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: ['Windows', 'macOS', 'Linux'],
    offers: {
      price: 0,
      priceCurrency: 'USD',
    },
    aggregateRating: {
      ratingValue: 4.9,
      ratingCount: 150,
    },
    featureList: [
      'Next.js 15 App Router',
      'TypeScript Configuration',
      'Tailwind CSS Setup',
      'SEO Optimization',
      'Performance Optimized',
      'Dark Mode Support',
    ],
    softwareVersion: '2.0.0',
  },
  {
    id: 'seo-analyzer',
    name: 'Web On Dev SEO Analyzer',
    description: 'Free SEO analysis tool that checks your website for technical SEO issues, content optimization, and provides actionable recommendations.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: ['Web Browser'],
    offers: {
      price: 0,
      priceCurrency: 'USD',
    },
    aggregateRating: {
      ratingValue: 4.8,
      ratingCount: 320,
    },
    featureList: [
      'Technical SEO Audit',
      'Content Analysis',
      'Keyword Optimization',
      'Mobile Friendliness Check',
      'Page Speed Analysis',
      'Schema Validation',
    ],
    softwareVersion: '1.5.0',
  },
  {
    id: 'mobile-app-calculator',
    name: 'Mobile App Cost Calculator',
    description: 'Estimate the cost of your mobile app development project based on features, platforms, and complexity.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: ['Web Browser'],
    offers: {
      price: 0,
      priceCurrency: 'USD',
    },
    aggregateRating: {
      ratingValue: 4.7,
      ratingCount: 89,
    },
    featureList: [
      'Platform Selection',
      'Feature Estimation',
      'Complexity Assessment',
      'Timeline Projection',
      'Instant Quote Generation',
    ],
    softwareVersion: '1.0.0',
  },
];

/**
 * Generate SoftwareApplication schema
 */
export function generateSoftwareSchema(app: SoftwareApp) {
  const siteUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${siteUrl}/tools/${app.id}/#software`,
    name: app.name,
    description: app.description,
    applicationCategory: app.applicationCategory,
    operatingSystem: app.operatingSystem.join(', '),
    offers: {
      '@type': 'Offer',
      price: app.offers.price,
      priceCurrency: app.offers.priceCurrency,
    },
    ...(app.aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: app.aggregateRating.ratingValue,
        ratingCount: app.aggregateRating.ratingCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
    ...(app.featureList && { featureList: app.featureList.join(', ') }),
    ...(app.softwareVersion && { softwareVersion: app.softwareVersion }),
    ...(app.screenshot && { screenshot: `${siteUrl}${app.screenshot}` }),
    ...(app.downloadUrl && { downloadUrl: app.downloadUrl }),
    creator: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Web On Dev',
    },
  };
}

export default softwareApps;
