/**
 * PRODUCT/OFFER SCHEMA FOR SERVICES
 * Rich results for service pricing in Google
 */

import { getBaseUrl } from '@/lib/site-config';

export interface ServiceProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  image?: string;
  offers: {
    priceRange: string;
    priceCurrency: string;
    lowPrice?: number;
    highPrice?: number;
    availability: string;
    validFrom?: string;
    priceValidUntil?: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
    worstRating: number;
  };
  features?: string[];
}

export const serviceProducts: ServiceProduct[] = [
  {
    id: 'web-development',
    name: 'Professional Web Development Services',
    description: 'Custom website and web application development using Next.js, React, and modern technologies. SEO-optimized, responsive, and scalable solutions.',
    category: 'Web Development',
    image: '/images/services/web-development.jpg',
    offers: {
      priceRange: '$3,000 - $100,000',
      priceCurrency: 'USD',
      lowPrice: 3000,
      highPrice: 100000,
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      ratingValue: 4.9,
      reviewCount: 127,
      bestRating: 5,
      worstRating: 1,
    },
    features: [
      'Custom Design & Development',
      'Mobile Responsive',
      'SEO Optimization Included',
      'Performance Optimization',
      '30-Day Post-Launch Support',
    ],
  },
  {
    id: 'mobile-app-development',
    name: 'Mobile App Development Services',
    description: 'Native and cross-platform mobile app development for iOS and Android using React Native and Flutter.',
    category: 'Mobile Development',
    image: '/images/services/mobile-development.jpg',
    offers: {
      priceRange: '$10,000 - $150,000',
      priceCurrency: 'USD',
      lowPrice: 10000,
      highPrice: 150000,
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      ratingValue: 4.8,
      reviewCount: 89,
      bestRating: 5,
      worstRating: 1,
    },
    features: [
      'iOS & Android Development',
      'Cross-Platform (React Native/Flutter)',
      'App Store Optimization',
      'Push Notifications',
      'Analytics Integration',
    ],
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design Services',
    description: 'User interface and experience design including user research, wireframing, prototyping, and visual design.',
    category: 'Design',
    image: '/images/services/ui-ux-design.jpg',
    offers: {
      priceRange: '$2,000 - $30,000',
      priceCurrency: 'USD',
      lowPrice: 2000,
      highPrice: 30000,
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      ratingValue: 4.9,
      reviewCount: 76,
      bestRating: 5,
      worstRating: 1,
    },
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design',
      'Usability Testing',
      'Design System Creation',
    ],
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing Services',
    description: 'Comprehensive digital marketing including SEO, PPC, social media marketing, and content marketing.',
    category: 'Marketing',
    image: '/images/services/digital-marketing.jpg',
    offers: {
      priceRange: '$1,000 - $10,000/month',
      priceCurrency: 'USD',
      lowPrice: 1000,
      highPrice: 10000,
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      ratingValue: 4.7,
      reviewCount: 54,
      bestRating: 5,
      worstRating: 1,
    },
    features: [
      'SEO Optimization',
      'PPC Campaign Management',
      'Social Media Marketing',
      'Content Marketing',
      'Monthly Reporting',
    ],
  },
  {
    id: 'ecommerce-development',
    name: 'E-commerce Development Services',
    description: 'End-to-end e-commerce development including Shopify, WooCommerce, and custom solutions.',
    category: 'E-commerce',
    image: '/images/services/ecommerce.jpg',
    offers: {
      priceRange: '$5,000 - $80,000',
      priceCurrency: 'USD',
      lowPrice: 5000,
      highPrice: 80000,
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      ratingValue: 4.8,
      reviewCount: 63,
      bestRating: 5,
      worstRating: 1,
    },
    features: [
      'Custom E-commerce Platform',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Processing System',
      'Analytics Dashboard',
    ],
  },
];

/**
 * Generate Product schema for a service
 */
export function generateProductSchema(service: ServiceProduct) {
  const siteUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${siteUrl}/services/${service.id}/#product`,
    name: service.name,
    description: service.description,
    category: service.category,
    image: service.image ? `${siteUrl}${service.image}` : undefined,
    brand: {
      '@type': 'Organization',
      name: 'Web On Dev',
      url: siteUrl,
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: service.offers.priceCurrency,
      lowPrice: service.offers.lowPrice,
      highPrice: service.offers.highPrice,
      offerCount: 1,
      availability: service.offers.availability,
      seller: {
        '@type': 'Organization',
        name: 'Web On Dev',
        url: siteUrl,
      },
    },
    ...(service.aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: service.aggregateRating.ratingValue,
        reviewCount: service.aggregateRating.reviewCount,
        bestRating: service.aggregateRating.bestRating,
        worstRating: service.aggregateRating.worstRating,
      },
    }),
  };
}

/**
 * Generate Offer schema for service pricing
 */
export function generateOfferSchema(service: ServiceProduct) {
  const siteUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    '@id': `${siteUrl}/services/${service.id}/#offer`,
    name: service.name,
    description: service.description,
    priceCurrency: service.offers.priceCurrency,
    price: service.offers.lowPrice,
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: service.offers.priceCurrency,
      minPrice: service.offers.lowPrice,
      maxPrice: service.offers.highPrice,
    },
    availability: service.offers.availability,
    seller: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Web On Dev',
    },
    itemOffered: {
      '@type': 'Service',
      name: service.name,
      description: service.description,
    },
  };
}

export default serviceProducts;
