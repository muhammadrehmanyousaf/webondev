/**
 * Comprehensive SEO Schema Library for Web On Dev
 * Provides structured data generators for all page types
 * Following Google's structured data guidelines and AI SEO best practices
 */

const SITE_URL = 'https://www.webondev.com';
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// ============================================================================
// BASE ORGANIZATION SCHEMA
// ============================================================================
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: 'Web On Dev',
  alternateName: ['webondev', 'Web On Development', 'WOD'],
  legalName: 'Web On Dev',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    '@id': `${SITE_URL}/#logo`,
    url: `${SITE_URL}/images/branding/logo.png`,
    contentUrl: `${SITE_URL}/images/branding/logo.png`,
    width: 512,
    height: 512,
    caption: 'Web On Dev Logo',
  },
  image: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/og-image.png`,
    width: 1200,
    height: 630,
  },
  foundingDate: '2015-01-01',
  founders: [
    { '@type': 'Person', name: 'Muhammad Rehman Yousaf' },
    { '@type': 'Person', name: 'Daniyal Bahadur' },
    { '@type': 'Person', name: 'Waheed UI Islam' },
    { '@type': 'Person', name: 'Ihtisham UL Haq' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'G8JX+CMF, Main Gulberg, Mota Singh Wala',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    postalCode: '54660',
    addressCountry: 'PK',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+92-310-6803687',
      email: 'webondev@gmail.com',
      availableLanguage: ['English', 'Urdu', 'Hindi'],
      areaServed: 'Worldwide',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+92-310-6803687',
      email: 'webondev@gmail.com',
      availableLanguage: ['English', 'Urdu'],
      areaServed: 'Worldwide',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'technical support',
      telephone: '+92-310-6803687',
      email: 'webondev@gmail.com',
      availableLanguage: ['English'],
      areaServed: 'Worldwide',
    },
  ],
  sameAs: [
    'https://www.youtube.com/@webondev',
    'https://x.com/webon_dev',
    'https://www.facebook.com/people/Web-On-Dev/61584774954945/',
    'https://www.instagram.com/webondev/',
    'https://www.linkedin.com/company/webondev/',
    'https://github.com/webondev',
    'https://www.designrush.com/agency/profile/solutions-indicators',
    'https://clutch.co/profile/solutions-indicator',
    'https://www.goodfirms.co/company/solutions-indicator',
  ],
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 11,
    maxValue: 50,
  },
  slogan: 'Transforming Digital Vision Into Reality',
  description: 'Web On Dev is a premium digital transformation agency helping businesses achieve measurable growth through innovative software development, marketing, and data-driven strategies.',
  knowsAbout: [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'SEO',
    'E-commerce Development',
    'Cloud Computing',
    'DevOps',
    'Next.js',
    'React',
    'Node.js',
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Google Cloud Partner' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'AWS Partner' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Shopify Partner' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Vercel Partner' },
  ],
});

// ============================================================================
// SERVICE SCHEMA GENERATOR
// ============================================================================
interface ServiceSchemaOptions {
  name: string;
  description: string;
  url: string;
  image?: string;
  areaServed?: string;
  priceRange?: string;
  keywords?: string[];
}

export const getServiceSchema = (options: ServiceSchemaOptions) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${options.url}#service`,
  name: options.name,
  description: options.description,
  url: options.url,
  image: options.image || `${SITE_URL}/images/og-image.png`,
  provider: { '@id': ORGANIZATION_ID },
  areaServed: options.areaServed || {
    '@type': 'Place',
    name: 'Worldwide',
  },
  serviceType: options.name,
  termsOfService: `${SITE_URL}/terms`,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: `${options.name} Services`,
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: options.name,
          description: options.description,
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          price: 'Contact for quote',
        },
      },
    ],
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Businesses, Startups, Enterprises',
  },
});

// ============================================================================
// LOCAL BUSINESS SCHEMA FOR LOCATION PAGES
// ============================================================================
interface LocalBusinessSchemaOptions {
  city: string;
  state: string;
  country: string;
  service?: string;
}

export const getLocalBusinessSchema = (options: LocalBusinessSchemaOptions) => {
  const locationName = `${options.city}, ${options.state}, ${options.country}`;
  const serviceName = options.service || 'Web Development';

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/where-we-serve/#localbusiness`,
    name: `Web On Dev - ${serviceName} in ${options.city}`,
    image: `${SITE_URL}/images/branding/logo.png`,
    description: `Professional ${serviceName.toLowerCase()} services for businesses in ${locationName}. Expert solutions with local understanding and global quality standards.`,
    url: SITE_URL,
    telephone: '+92-310-6803687',
    email: 'webondev@gmail.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: options.city,
      addressRegion: options.state,
      addressCountry: options.country,
    },
    areaServed: {
      '@type': 'City',
      name: options.city,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: `${options.state}, ${options.country}`,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '250',
      bestRating: '5',
      worstRating: '1',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    parentOrganization: { '@id': ORGANIZATION_ID },
  };
};

// ============================================================================
// ARTICLE SCHEMA FOR BLOG POSTS
// ============================================================================
interface ArticleSchemaOptions {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  category?: string;
  keywords?: string[];
  wordCount?: number;
}

export const getArticleSchema = (options: ArticleSchemaOptions) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${options.url}#article`,
  headline: options.title,
  description: options.description,
  image: {
    '@type': 'ImageObject',
    url: options.image,
    width: 1200,
    height: 630,
  },
  datePublished: options.datePublished,
  dateModified: options.dateModified || options.datePublished,
  author: {
    '@type': 'Person',
    name: options.author,
    url: `${SITE_URL}/about`,
  },
  publisher: { '@id': ORGANIZATION_ID },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': options.url,
  },
  keywords: options.keywords?.join(', '),
  articleSection: options.category,
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  wordCount: options.wordCount,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.article-intro', 'h2', '.prose p:first-of-type'],
  },
  copyrightHolder: { '@id': ORGANIZATION_ID },
  copyrightYear: new Date().getFullYear(),
});

// ============================================================================
// FAQ SCHEMA GENERATOR
// ============================================================================
interface FAQItem {
  question: string;
  answer: string;
}

export const getFAQSchema = (faqs: FAQItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

// ============================================================================
// HOWTO SCHEMA FOR TUTORIALS
// ============================================================================
interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

interface HowToSchemaOptions {
  name: string;
  description: string;
  url: string;
  image: string;
  totalTime?: string;
  estimatedCost?: string;
  steps: HowToStep[];
}

export const getHowToSchema = (options: HowToSchemaOptions) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: options.name,
  description: options.description,
  url: options.url,
  image: options.image,
  totalTime: options.totalTime || 'PT30M',
  estimatedCost: options.estimatedCost
    ? {
        '@type': 'MonetaryAmount',
        currency: 'USD',
        value: options.estimatedCost,
      }
    : undefined,
  step: options.steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
    image: step.image,
  })),
});

// ============================================================================
// BREADCRUMB SCHEMA GENERATOR
// ============================================================================
interface BreadcrumbItem {
  name: string;
  url: string;
}

export const getBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// ============================================================================
// SOFTWARE APPLICATION SCHEMA FOR PORTFOLIO
// ============================================================================
interface SoftwareSchemaOptions {
  name: string;
  description: string;
  url: string;
  image: string;
  category: string;
  operatingSystem?: string;
  applicationCategory?: string;
}

export const getSoftwareApplicationSchema = (options: SoftwareSchemaOptions) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: options.name,
  description: options.description,
  url: options.url,
  image: options.image,
  applicationCategory: options.applicationCategory || options.category,
  operatingSystem: options.operatingSystem || 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  author: { '@id': ORGANIZATION_ID },
  creator: { '@id': ORGANIZATION_ID },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
});

// ============================================================================
// REVIEW SCHEMA
// ============================================================================
interface ReviewSchemaOptions {
  author: string;
  reviewBody: string;
  ratingValue: number;
  datePublished?: string;
  itemReviewed?: string;
}

export const getReviewSchema = (options: ReviewSchemaOptions) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  author: {
    '@type': 'Person',
    name: options.author,
  },
  reviewBody: options.reviewBody,
  reviewRating: {
    '@type': 'Rating',
    ratingValue: options.ratingValue,
    bestRating: 5,
    worstRating: 1,
  },
  datePublished: options.datePublished || new Date().toISOString().split('T')[0],
  itemReviewed: {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: options.itemReviewed || 'Web On Dev',
  },
});

// ============================================================================
// AGGREGATE RATING SCHEMA
// ============================================================================
export const getAggregateRatingSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  itemReviewed: {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: 'Web On Dev',
  },
  ratingValue: '4.9',
  bestRating: '5',
  worstRating: '1',
  ratingCount: '250',
  reviewCount: '180',
});

// ============================================================================
// WEBPAGE SCHEMA
// ============================================================================
interface WebPageSchemaOptions {
  name: string;
  description: string;
  url: string;
  type?: string;
}

export const getWebPageSchema = (options: WebPageSchemaOptions) => ({
  '@context': 'https://schema.org',
  '@type': options.type || 'WebPage',
  '@id': options.url,
  name: options.name,
  description: options.description,
  url: options.url,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORGANIZATION_ID },
  inLanguage: 'en-US',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.prose p:first-of-type', 'h2'],
  },
});

// ============================================================================
// CONTACT PAGE SCHEMA
// ============================================================================
export const getContactPageSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${SITE_URL}/contact#contactpage`,
  name: 'Contact Web On Dev',
  description: 'Get in touch with Web On Dev for your web development, mobile app, and digital marketing needs.',
  url: `${SITE_URL}/contact`,
  mainEntity: {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
  },
});

// ============================================================================
// ABOUT PAGE SCHEMA
// ============================================================================
export const getAboutPageSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${SITE_URL}/about#aboutpage`,
  name: 'About Web On Dev',
  description: 'Learn about Web On Dev, our team, mission, and values. Premium web development agency since 2015.',
  url: `${SITE_URL}/about`,
  mainEntity: { '@id': ORGANIZATION_ID },
});

// ============================================================================
// COLLECTION PAGE SCHEMA (for portfolio, services listing)
// ============================================================================
interface CollectionPageSchemaOptions {
  name: string;
  description: string;
  url: string;
  items?: Array<{ name: string; url: string }>;
}

export const getCollectionPageSchema = (options: CollectionPageSchemaOptions) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${options.url}#collectionpage`,
  name: options.name,
  description: options.description,
  url: options.url,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORGANIZATION_ID },
  hasPart: options.items?.map(item => ({
    '@type': 'WebPage',
    name: item.name,
    url: item.url,
  })),
});

// ============================================================================
// SPEAKABLE SPECIFICATION (for voice search / AI assistants)
// ============================================================================
export const getSpeakableSchema = (selectors: string[] = ['h1', '.prose p:first-of-type']) => ({
  '@context': 'https://schema.org',
  '@type': 'SpeakableSpecification',
  cssSelector: selectors,
});

// ============================================================================
// COMBINED GRAPH SCHEMA HELPER
// ============================================================================
export const combineSchemas = (...schemas: object[]) => ({
  '@context': 'https://schema.org',
  '@graph': schemas.filter(Boolean),
});

// ============================================================================
// EXPORTS
// ============================================================================
export const SITE_CONFIG = {
  url: SITE_URL,
  name: 'Web On Dev',
  organizationId: ORGANIZATION_ID,
  websiteId: WEBSITE_ID,
};
