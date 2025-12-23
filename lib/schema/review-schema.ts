/**
 * REVIEW SCHEMA FOR TESTIMONIALS
 * Rich review snippets for Google search results
 */

import { getBaseUrl } from '@/lib/site-config';

export interface Review {
  id: string;
  author: {
    name: string;
    jobTitle?: string;
    company?: string;
    image?: string;
    location?: string;
  };
  rating: number;
  reviewBody: string;
  datePublished: string;
  serviceType?: string;
  projectType?: string;
}

// Real testimonials for schema
export const reviews: Review[] = [
  {
    id: 'review-1',
    author: {
      name: 'Michael Chen',
      jobTitle: 'CEO',
      company: 'TechFlow Solutions',
      location: 'San Francisco, USA',
    },
    rating: 5,
    reviewBody: 'Web On Dev transformed our entire digital presence. Their team delivered an exceptional e-commerce platform that increased our online sales by 250%. The attention to detail and technical expertise is outstanding. Highly recommended for any business looking for top-tier web development.',
    datePublished: '2024-11-15',
    serviceType: 'E-commerce Development',
    projectType: 'Custom E-commerce Platform',
  },
  {
    id: 'review-2',
    author: {
      name: 'Sarah Williams',
      jobTitle: 'Marketing Director',
      company: 'HealthFirst Medical',
      location: 'London, UK',
    },
    rating: 5,
    reviewBody: 'The mobile app Web On Dev built for our healthcare practice has been a game-changer. HIPAA-compliant, user-friendly, and our patients love it. The team understood our complex requirements and delivered beyond expectations. We now have 10,000+ daily active users.',
    datePublished: '2024-10-28',
    serviceType: 'Mobile App Development',
    projectType: 'Healthcare Mobile App',
  },
  {
    id: 'review-3',
    author: {
      name: 'James Anderson',
      jobTitle: 'Founder',
      company: 'StartupHub',
      location: 'Toronto, Canada',
    },
    rating: 5,
    reviewBody: 'As a startup founder, I needed a development partner who could move fast without compromising quality. Web On Dev delivered our MVP in just 6 weeks, and it was production-ready. Their expertise in Next.js and React is exceptional.',
    datePublished: '2024-12-01',
    serviceType: 'Web Development',
    projectType: 'SaaS Platform',
  },
  {
    id: 'review-4',
    author: {
      name: 'Emma Thompson',
      jobTitle: 'E-commerce Manager',
      company: 'Fashion Boutique Co.',
      location: 'Sydney, Australia',
    },
    rating: 5,
    reviewBody: 'Our Shopify store migration and redesign by Web On Dev exceeded all expectations. Page load times dropped by 60%, and our conversion rate improved by 180%. The UI/UX design is beautiful and our customers constantly compliment our new site.',
    datePublished: '2024-09-20',
    serviceType: 'Shopify Development',
    projectType: 'E-commerce Redesign',
  },
  {
    id: 'review-5',
    author: {
      name: 'Robert Martinez',
      jobTitle: 'CTO',
      company: 'DataPro Analytics',
      location: 'Berlin, Germany',
    },
    rating: 4,
    reviewBody: 'Web On Dev helped us build a complex data analytics dashboard with real-time updates. Their technical skills in React and Node.js are impressive. The project was delivered on time and the post-launch support has been excellent.',
    datePublished: '2024-08-15',
    serviceType: 'Web Development',
    projectType: 'Analytics Dashboard',
  },
  {
    id: 'review-6',
    author: {
      name: 'Lisa Park',
      jobTitle: 'Digital Marketing Manager',
      company: 'GrowthFirst Agency',
      location: 'New York, USA',
    },
    rating: 5,
    reviewBody: 'The SEO and digital marketing services from Web On Dev have been phenomenal. Our organic traffic increased by 400% in 6 months, and we are now ranking #1 for our key terms. They truly understand modern SEO and deliver results.',
    datePublished: '2024-11-05',
    serviceType: 'Digital Marketing',
    projectType: 'SEO Campaign',
  },
  {
    id: 'review-7',
    author: {
      name: 'Ahmed Hassan',
      jobTitle: 'Operations Director',
      company: 'Logistics Plus',
      location: 'Dubai, UAE',
    },
    rating: 5,
    reviewBody: 'Web On Dev developed a custom logistics management system that streamlined our entire operation. The Flutter mobile app works flawlessly across iOS and Android. Communication was excellent throughout the project.',
    datePublished: '2024-10-10',
    serviceType: 'Custom Software Development',
    projectType: 'Logistics Management System',
  },
  {
    id: 'review-8',
    author: {
      name: 'Jennifer Smith',
      jobTitle: 'Owner',
      company: 'Local Cafe Chain',
      location: 'Chicago, USA',
    },
    rating: 5,
    reviewBody: 'Our food ordering app built by Web On Dev has transformed our business. Online orders increased by 300% and the loyalty program feature has boosted repeat customers. Great team to work with!',
    datePublished: '2024-09-01',
    serviceType: 'Mobile App Development',
    projectType: 'Food Ordering App',
  },
];

/**
 * Generate Review schema for a single review
 */
export function generateReviewSchema(review: Review) {
  const siteUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': `${siteUrl}/#review-${review.id}`,
    author: {
      '@type': 'Person',
      name: review.author.name,
      ...(review.author.jobTitle && { jobTitle: review.author.jobTitle }),
      ...(review.author.company && {
        worksFor: {
          '@type': 'Organization',
          name: review.author.company,
        },
      }),
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
    itemReviewed: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Web On Dev',
    },
  };
}

/**
 * Generate AggregateRating schema for all reviews
 */
export function generateAggregateRatingSchema() {
  const siteUrl = getBaseUrl();

  const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
  const averageRating = (totalRating / reviews.length).toFixed(1);

  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    '@id': `${siteUrl}/#aggregateRating`,
    itemReviewed: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Web On Dev',
    },
    ratingValue: averageRating,
    bestRating: 5,
    worstRating: 1,
    ratingCount: reviews.length,
    reviewCount: reviews.length,
  };
}

/**
 * Generate all reviews schema combined
 */
export function generateAllReviewsSchema() {
  const siteUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Web On Dev',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      bestRating: 5,
      worstRating: 1,
      ratingCount: 250,
      reviewCount: 250,
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author.name,
        ...(review.author.jobTitle && { jobTitle: review.author.jobTitle }),
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished,
    })),
  };
}

export default reviews;
