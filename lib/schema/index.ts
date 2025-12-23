/**
 * COMPREHENSIVE SCHEMA GENERATOR
 * Web On Dev - World-Class SEO Schema Markup System
 *
 * Generates 18+ Schema.org structured data types for maximum SEO impact.
 */

// =============================================================================
// CONFIGURATION
// =============================================================================

export const siteConfig = {
  url: 'https://www.webondev.com',
  name: 'Web On Dev',
  legalName: 'Web On Dev',
  alternateName: 'WebOnDev',
  description: 'Leading software development company providing web development, mobile apps, UI/UX design, digital marketing, cloud solutions, and comprehensive software services worldwide.',
  foundingDate: '1999-05-18',
  founders: [
    { name: 'Muhammad Rehman Yousaf', role: 'Founder & CEO' },
    { name: 'Daniyal Bahadur', role: 'Co-Founder & CTO' },
    { name: 'Waheed UI Islam', role: 'Co-Founder' },
    { name: 'Ihtisham UL Haq', role: 'Co-Founder' },
  ],
  address: {
    streetAddress: 'G8JX+CMF, Main Gulberg, Mota Singh Wala',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    postalCode: '54660',
    addressCountry: 'PK',
  },
  geo: {
    latitude: 31.440541451082733,
    longitude: 74.44466607506611,
  },
  phone: '+92 310 6803687',
  email: 'webondev@gmail.com',
  logo: 'https://www.webondev.com/images/branding/logo.png',
  image: 'https://www.webondev.com/og-image.jpg',
  socialProfiles: [
    'https://www.youtube.com/@webondev',
    'https://x.com/webon_dev',
    'https://www.facebook.com/people/Web-On-Dev/61584774954945/',
    'https://www.instagram.com/webondev/',
    'https://clutch.co/profile/web-dev-1',
    'https://www.goodfirms.co/company/web-on-dev',
  ],
  services: [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'Cloud Solutions',
    'DevOps Services',
    'E-commerce Development',
    'Custom Software Development',
    'API Development',
    'Maintenance & Support',
  ],
};

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

export interface PersonData {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
  url?: string;
  email?: string;
  sameAs?: string[];
}

export interface ReviewData {
  author: string;
  reviewBody: string;
  ratingValue: number;
  datePublished: string;
}

export interface ArticleData {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: {
    name: string;
    url?: string;
    image?: string;
  };
  wordCount?: number;
  keywords?: string[];
}

export interface ServiceData {
  name: string;
  description: string;
  url: string;
  image?: string;
  serviceType?: string;
  areaServed?: string | string[];
  price?: string;
  priceCurrency?: string;
}

// =============================================================================
// SCHEMA GENERATORS
// =============================================================================

/**
 * 1. Organization Schema
 */
export function generateOrganizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      '@id': `${siteConfig.url}/#logo`,
      url: siteConfig.logo,
      width: '512',
      height: '512',
      caption: siteConfig.name,
    },
    image: siteConfig.image,
    foundingDate: siteConfig.foundingDate,
    founders: siteConfig.founders.map(f => ({
      '@type': 'Person',
      name: f.name,
      jobTitle: f.role,
    })),
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: siteConfig.phone,
        email: siteConfig.email,
        availableLanguage: ['English', 'Urdu'],
        areaServed: 'Worldwide',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: siteConfig.phone,
        email: siteConfig.email,
        availableLanguage: ['English', 'Urdu'],
        areaServed: 'Worldwide',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'technical support',
        telephone: siteConfig.phone,
        email: siteConfig.email,
        availableLanguage: ['English', 'Urdu'],
        areaServed: 'Worldwide',
      },
    ],
    sameAs: siteConfig.socialProfiles,
    knowsAbout: siteConfig.services,
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 50,
    },
    slogan: 'Building Digital Excellence',
  };
}

/**
 * 2. WebSite Schema with SearchAction
 */
export function generateWebSiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { '@id': `${siteConfig.url}/#organization` },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * 3. LocalBusiness Schema
 */
export function generateLocalBusinessSchema() {
  return {
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: siteConfig.image,
    logo: siteConfig.logo,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '150',
      reviewCount: '85',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services',
      itemListElement: siteConfig.services.map((service, index) => ({
        '@type': 'OfferCatalog',
        name: service,
        position: index + 1,
      })),
    },
  };
}

/**
 * 4. WebPage Schema
 */
export function generateWebPageSchema(pageData: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'FAQPage' | 'ItemPage';
}) {
  return {
    '@type': pageData.type || 'WebPage',
    '@id': `${pageData.url}/#webpage`,
    url: pageData.url,
    name: pageData.title,
    description: pageData.description,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: { '@id': `${siteConfig.url}/#organization` },
    datePublished: pageData.datePublished,
    dateModified: pageData.dateModified || pageData.datePublished,
    inLanguage: 'en-US',
    potentialAction: [
      {
        '@type': 'ReadAction',
        target: [pageData.url],
      },
    ],
  };
}

/**
 * 5. BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${items[items.length - 1].url}/#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * 6. Article/BlogPosting Schema
 */
export function generateArticleSchema(data: ArticleData) {
  return {
    '@type': 'Article',
    '@id': `${data.url}/#article`,
    headline: data.title,
    description: data.description,
    image: {
      '@type': 'ImageObject',
      url: data.image,
      width: '1200',
      height: '630',
    },
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    author: {
      '@type': 'Person',
      name: data.author.name,
      url: data.author.url,
      image: data.author.image,
    },
    publisher: { '@id': `${siteConfig.url}/#organization` },
    mainEntityOfPage: { '@id': `${data.url}/#webpage` },
    wordCount: data.wordCount,
    keywords: data.keywords?.join(', '),
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.article-summary', '.article-intro', 'h2'],
    },
  };
}

/**
 * 7. FAQPage Schema
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * 8. HowTo Schema
 */
export function generateHowToSchema(data: {
  name: string;
  description: string;
  image?: string;
  totalTime?: string;
  estimatedCost?: { currency: string; value: string };
  steps: HowToStep[];
}) {
  return {
    '@type': 'HowTo',
    name: data.name,
    description: data.description,
    image: data.image,
    totalTime: data.totalTime,
    estimatedCost: data.estimatedCost
      ? {
          '@type': 'MonetaryAmount',
          currency: data.estimatedCost.currency,
          value: data.estimatedCost.value,
        }
      : undefined,
    step: data.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
      url: step.url,
    })),
  };
}

/**
 * 9. Service Schema
 */
export function generateServiceSchema(data: ServiceData) {
  return {
    '@type': 'Service',
    '@id': `${data.url}/#service`,
    name: data.name,
    description: data.description,
    url: data.url,
    image: data.image,
    provider: { '@id': `${siteConfig.url}/#organization` },
    areaServed: Array.isArray(data.areaServed)
      ? data.areaServed.map(area => ({ '@type': 'Place', name: area }))
      : data.areaServed || 'Worldwide',
    serviceType: data.serviceType || data.name,
    offers: data.price
      ? {
          '@type': 'Offer',
          price: data.price,
          priceCurrency: data.priceCurrency || 'USD',
          availability: 'https://schema.org/InStock',
        }
      : undefined,
  };
}

/**
 * 10. Person Schema (for team members)
 */
export function generatePersonSchema(data: PersonData) {
  return {
    '@type': 'Person',
    name: data.name,
    jobTitle: data.jobTitle,
    description: data.description,
    image: data.image,
    url: data.url,
    email: data.email,
    worksFor: { '@id': `${siteConfig.url}/#organization` },
    sameAs: data.sameAs,
  };
}

/**
 * 11. AggregateRating Schema
 */
export function generateAggregateRatingSchema(data: {
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
  ratingCount: number;
  reviewCount?: number;
}) {
  return {
    '@type': 'AggregateRating',
    ratingValue: data.ratingValue.toString(),
    bestRating: (data.bestRating || 5).toString(),
    worstRating: (data.worstRating || 1).toString(),
    ratingCount: data.ratingCount.toString(),
    reviewCount: data.reviewCount?.toString(),
  };
}

/**
 * 12. Review Schema
 */
export function generateReviewSchema(data: ReviewData) {
  return {
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: data.author,
    },
    reviewBody: data.reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: data.ratingValue.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    datePublished: data.datePublished,
    itemReviewed: { '@id': `${siteConfig.url}/#organization` },
  };
}

/**
 * 13. VideoObject Schema
 */
export function generateVideoSchema(data: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
}) {
  return {
    '@type': 'VideoObject',
    name: data.name,
    description: data.description,
    thumbnailUrl: data.thumbnailUrl,
    uploadDate: data.uploadDate,
    duration: data.duration,
    contentUrl: data.contentUrl,
    embedUrl: data.embedUrl,
    publisher: { '@id': `${siteConfig.url}/#organization` },
  };
}

/**
 * 14. ImageObject Schema
 */
export function generateImageSchema(data: {
  url: string;
  caption: string;
  width?: number;
  height?: number;
}) {
  return {
    '@type': 'ImageObject',
    url: data.url,
    caption: data.caption,
    width: data.width?.toString(),
    height: data.height?.toString(),
    author: { '@id': `${siteConfig.url}/#organization` },
  };
}

/**
 * 15. SpeakableSpecification Schema
 */
export function generateSpeakableSchema(selectors: string[]) {
  return {
    '@type': 'SpeakableSpecification',
    cssSelector: selectors,
  };
}

/**
 * 16. ItemList Schema (for collections)
 */
export function generateItemListSchema(items: { name: string; url: string; image?: string; position: number }[]) {
  return {
    '@type': 'ItemList',
    numberOfItems: items.length,
    itemListElement: items.map(item => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      url: item.url,
      image: item.image,
    })),
  };
}

/**
 * 17. OfferCatalog Schema
 */
export function generateOfferCatalogSchema(services: ServiceData[]) {
  return {
    '@type': 'OfferCatalog',
    name: `${siteConfig.name} Services`,
    itemListElement: services.map((service, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        url: service.url,
      },
      position: index + 1,
    })),
  };
}

/**
 * 18. CollectionPage Schema
 */
export function generateCollectionPageSchema(data: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string }[];
}) {
  return {
    '@type': 'CollectionPage',
    '@id': `${data.url}/#collectionpage`,
    name: data.name,
    description: data.description,
    url: data.url,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: data.items.length,
      itemListElement: data.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}

// =============================================================================
// GRAPH GENERATOR - Combines all schemas
// =============================================================================

export type PageType = 'home' | 'about' | 'contact' | 'services' | 'service' | 'blog' | 'blog-post' | 'portfolio' | 'portfolio-item' | 'location';

export function generateSchemaGraph(
  pageType: PageType,
  pageData: {
    url: string;
    title: string;
    description: string;
    breadcrumb?: BreadcrumbItem[];
    faqs?: FAQItem[];
    article?: ArticleData;
    service?: ServiceData;
    howTo?: { name: string; description: string; steps: HowToStep[] };
    team?: PersonData[];
    reviews?: ReviewData[];
    items?: { name: string; url: string }[];
  }
) {
  // Base schemas present on all pages
  const graph: object[] = [
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateLocalBusinessSchema(),
  ];

  // Add breadcrumb if provided (all pages except home)
  if (pageData.breadcrumb && pageData.breadcrumb.length > 0) {
    graph.push(generateBreadcrumbSchema(pageData.breadcrumb));
  }

  // Page-specific schemas
  switch (pageType) {
    case 'home':
      graph.push(
        generateWebPageSchema({
          ...pageData,
          type: 'WebPage',
        })
      );
      break;

    case 'about':
      graph.push(
        generateWebPageSchema({
          ...pageData,
          type: 'AboutPage',
        })
      );
      if (pageData.team) {
        pageData.team.forEach(person => graph.push(generatePersonSchema(person)));
      }
      break;

    case 'contact':
      graph.push(
        generateWebPageSchema({
          ...pageData,
          type: 'ContactPage',
        })
      );
      break;

    case 'services':
      graph.push(
        generateWebPageSchema({
          ...pageData,
          type: 'CollectionPage',
        })
      );
      if (pageData.items) {
        graph.push(
          generateCollectionPageSchema({
            name: pageData.title,
            description: pageData.description,
            url: pageData.url,
            items: pageData.items,
          })
        );
      }
      break;

    case 'service':
      graph.push(
        generateWebPageSchema({
          ...pageData,
          type: 'ItemPage',
        })
      );
      if (pageData.service) {
        graph.push(generateServiceSchema(pageData.service));
      }
      if (pageData.howTo) {
        graph.push(
          generateHowToSchema({
            ...pageData.howTo,
          })
        );
      }
      break;

    case 'blog':
      graph.push(
        generateWebPageSchema({
          ...pageData,
          type: 'CollectionPage',
        })
      );
      break;

    case 'blog-post':
      graph.push(
        generateWebPageSchema({
          ...pageData,
          type: 'WebPage',
        })
      );
      if (pageData.article) {
        graph.push(generateArticleSchema(pageData.article));
      }
      break;

    case 'portfolio':
      graph.push(
        generateWebPageSchema({
          ...pageData,
          type: 'CollectionPage',
        })
      );
      if (pageData.items) {
        graph.push(
          generateCollectionPageSchema({
            name: pageData.title,
            description: pageData.description,
            url: pageData.url,
            items: pageData.items,
          })
        );
      }
      break;

    case 'portfolio-item':
      graph.push(
        generateWebPageSchema({
          ...pageData,
          type: 'ItemPage',
        })
      );
      break;

    case 'location':
      graph.push(
        generateWebPageSchema({
          ...pageData,
          type: 'WebPage',
        })
      );
      if (pageData.service) {
        graph.push(generateServiceSchema(pageData.service));
      }
      break;
  }

  // Add FAQ if provided
  if (pageData.faqs && pageData.faqs.length > 0) {
    graph.push(generateFAQSchema(pageData.faqs));
  }

  // Add reviews if provided
  if (pageData.reviews && pageData.reviews.length > 0) {
    pageData.reviews.forEach(review => graph.push(generateReviewSchema(review)));
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

// =============================================================================
// SCHEMA SCRIPT COMPONENT HELPER
// =============================================================================

export function schemaToScript(schema: object): string {
  return JSON.stringify(schema);
}

export default {
  siteConfig,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateLocalBusinessSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateFAQSchema,
  generateHowToSchema,
  generateServiceSchema,
  generatePersonSchema,
  generateAggregateRatingSchema,
  generateReviewSchema,
  generateVideoSchema,
  generateImageSchema,
  generateSpeakableSchema,
  generateItemListSchema,
  generateOfferCatalogSchema,
  generateCollectionPageSchema,
  generateSchemaGraph,
  schemaToScript,
};
