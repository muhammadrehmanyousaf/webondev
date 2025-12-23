/**
 * TOPIC CLUSTER / PILLAR PAGE SYSTEM
 * Content SEO strategy for topical authority
 */

import { getBaseUrl } from '@/lib/site-config';

export interface TopicCluster {
  id: string;
  pillarPage: {
    title: string;
    slug: string;
    description: string;
    keywords: string[];
  };
  clusterContent: {
    title: string;
    slug: string;
    type: 'blog' | 'guide' | 'faq' | 'case-study';
    keywords: string[];
  }[];
  relatedServices: string[];
}

// =============================================================================
// TOPIC CLUSTERS DEFINITION
// =============================================================================

export const topicClusters: TopicCluster[] = [
  {
    id: 'web-development',
    pillarPage: {
      title: 'Complete Guide to Web Development in 2025',
      slug: 'web-development-guide',
      description:
        'The ultimate guide to web development covering technologies, best practices, costs, timelines, and how to choose the right development partner.',
      keywords: [
        'web development',
        'website development',
        'web application',
        'frontend development',
        'backend development',
      ],
    },
    clusterContent: [
      {
        title: 'Next.js vs React: Which to Choose in 2025',
        slug: 'nextjs-vs-react',
        type: 'blog',
        keywords: ['next.js vs react', 'react framework', 'nextjs benefits'],
      },
      {
        title: 'How Much Does a Website Cost? Complete Pricing Guide',
        slug: 'website-cost-guide',
        type: 'guide',
        keywords: ['website cost', 'web development pricing', 'website budget'],
      },
      {
        title: 'Web Development Process: From Idea to Launch',
        slug: 'web-development-process',
        type: 'guide',
        keywords: ['web development process', 'website development steps', 'development lifecycle'],
      },
      {
        title: 'E-commerce Platform Success Story: 250% Sales Increase',
        slug: 'ecommerce-case-study',
        type: 'case-study',
        keywords: ['ecommerce success', 'web development case study'],
      },
      {
        title: 'Web Development FAQ: Common Questions Answered',
        slug: 'web-development-faq',
        type: 'faq',
        keywords: ['web development questions', 'website faq'],
      },
    ],
    relatedServices: ['web-development', 'nextjs-development', 'react-development'],
  },
  {
    id: 'mobile-development',
    pillarPage: {
      title: 'Mobile App Development: Complete 2025 Guide',
      slug: 'mobile-app-development-guide',
      description:
        'Everything you need to know about mobile app development including platforms, costs, timelines, technologies, and choosing between native and cross-platform.',
      keywords: [
        'mobile app development',
        'ios app development',
        'android app development',
        'cross-platform apps',
      ],
    },
    clusterContent: [
      {
        title: 'React Native vs Flutter: Complete Comparison',
        slug: 'react-native-vs-flutter',
        type: 'blog',
        keywords: ['react native vs flutter', 'cross-platform comparison'],
      },
      {
        title: 'How Much Does an App Cost? 2025 Pricing Guide',
        slug: 'app-cost-guide',
        type: 'guide',
        keywords: ['app cost', 'mobile app pricing', 'app development budget'],
      },
      {
        title: 'Native vs Cross-Platform: Which to Choose',
        slug: 'native-vs-cross-platform',
        type: 'blog',
        keywords: ['native app', 'cross-platform app', 'mobile development choice'],
      },
      {
        title: 'Healthcare App Case Study: 10,000 Daily Users',
        slug: 'healthcare-app-case-study',
        type: 'case-study',
        keywords: ['healthcare app', 'medical app development'],
      },
    ],
    relatedServices: ['mobile-app-development', 'react-native-development', 'flutter-development'],
  },
  {
    id: 'seo-marketing',
    pillarPage: {
      title: 'SEO & Digital Marketing Guide for 2025',
      slug: 'seo-digital-marketing-guide',
      description:
        'Comprehensive guide to SEO and digital marketing covering on-page SEO, technical SEO, content marketing, PPC, and social media strategies.',
      keywords: ['seo', 'digital marketing', 'search engine optimization', 'online marketing'],
    },
    clusterContent: [
      {
        title: 'Technical SEO Checklist: 50+ Points',
        slug: 'technical-seo-checklist',
        type: 'guide',
        keywords: ['technical seo', 'seo checklist', 'website optimization'],
      },
      {
        title: 'Content Marketing Strategy That Works',
        slug: 'content-marketing-strategy',
        type: 'guide',
        keywords: ['content marketing', 'content strategy', 'blog strategy'],
      },
      {
        title: 'Local SEO: How to Rank in Your City',
        slug: 'local-seo-guide',
        type: 'guide',
        keywords: ['local seo', 'google my business', 'local search'],
      },
      {
        title: 'SEO Success Story: 400% Traffic Increase',
        slug: 'seo-case-study',
        type: 'case-study',
        keywords: ['seo success', 'traffic increase', 'seo results'],
      },
    ],
    relatedServices: ['digital-marketing', 'seo-optimization'],
  },
  {
    id: 'ecommerce',
    pillarPage: {
      title: 'E-commerce Development Guide 2025',
      slug: 'ecommerce-development-guide',
      description:
        'Complete guide to e-commerce development covering platforms, features, integrations, costs, and strategies for building successful online stores.',
      keywords: ['ecommerce development', 'online store', 'ecommerce platform', 'shopify development'],
    },
    clusterContent: [
      {
        title: 'Shopify vs WooCommerce vs Custom: Comparison',
        slug: 'shopify-vs-woocommerce',
        type: 'blog',
        keywords: ['shopify vs woocommerce', 'ecommerce platform comparison'],
      },
      {
        title: 'E-commerce Features That Increase Conversions',
        slug: 'ecommerce-features-guide',
        type: 'guide',
        keywords: ['ecommerce features', 'conversion optimization'],
      },
      {
        title: 'Payment Gateway Integration Guide',
        slug: 'payment-gateway-guide',
        type: 'guide',
        keywords: ['payment gateway', 'stripe integration', 'ecommerce payments'],
      },
      {
        title: 'Shopify Store Success: $1M Revenue',
        slug: 'shopify-case-study',
        type: 'case-study',
        keywords: ['shopify success', 'ecommerce case study'],
      },
    ],
    relatedServices: ['ecommerce-development', 'shopify-development'],
  },
];

// =============================================================================
// INTERNAL LINKING FOR TOPIC CLUSTERS
// =============================================================================

/**
 * Get related cluster content for internal linking
 */
export function getClusterContent(clusterId: string): TopicCluster['clusterContent'] {
  const cluster = topicClusters.find((c) => c.id === clusterId);
  return cluster?.clusterContent || [];
}

/**
 * Get pillar page for a cluster
 */
export function getPillarPage(clusterId: string) {
  const cluster = topicClusters.find((c) => c.id === clusterId);
  return cluster?.pillarPage;
}

/**
 * Find which cluster a page belongs to
 */
export function findClusterBySlug(slug: string): TopicCluster | undefined {
  return topicClusters.find(
    (cluster) =>
      cluster.pillarPage.slug === slug ||
      cluster.clusterContent.some((content) => content.slug === slug)
  );
}

/**
 * Generate internal links for a page
 */
export function generateClusterLinks(currentSlug: string, clusterId: string) {
  const siteUrl = getBaseUrl();
  const cluster = topicClusters.find((c) => c.id === clusterId);

  if (!cluster) return [];

  const links = [];

  // Link to pillar page if not current page
  if (cluster.pillarPage.slug !== currentSlug) {
    links.push({
      title: cluster.pillarPage.title,
      url: `${siteUrl}/guides/${cluster.pillarPage.slug}/`,
      type: 'pillar',
    });
  }

  // Link to cluster content
  for (const content of cluster.clusterContent) {
    if (content.slug !== currentSlug) {
      const basePath = content.type === 'blog' ? '/blog/' : content.type === 'case-study' ? '/portfolio/' : '/guides/';
      links.push({
        title: content.title,
        url: `${siteUrl}${basePath}${content.slug}/`,
        type: content.type,
      });
    }
  }

  return links;
}

// =============================================================================
// SCHEMA FOR TOPIC CLUSTERS
// =============================================================================

/**
 * Generate ItemList schema for cluster content
 */
export function generateClusterSchema(cluster: TopicCluster) {
  const siteUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${cluster.pillarPage.title} - Related Content`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Article',
          name: cluster.pillarPage.title,
          url: `${siteUrl}/guides/${cluster.pillarPage.slug}/`,
          description: cluster.pillarPage.description,
        },
      },
      ...cluster.clusterContent.map((content, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        item: {
          '@type': 'Article',
          name: content.title,
          url: `${siteUrl}/${content.type === 'blog' ? 'blog' : 'guides'}/${content.slug}/`,
        },
      })),
    ],
  };
}

export default {
  topicClusters,
  getClusterContent,
  getPillarPage,
  findClusterBySlug,
  generateClusterLinks,
  generateClusterSchema,
};
