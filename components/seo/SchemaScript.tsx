import {
  generateSchemaGraph,
  type PageType,
  type BreadcrumbItem,
  type FAQItem,
  type ArticleData,
  type ServiceData,
  type HowToStep,
  type PersonData,
  type ReviewData,
} from '@/lib/schema';

// =============================================================================
// SCHEMA SCRIPT COMPONENT
// =============================================================================

interface SchemaScriptProps {
  pageType: PageType;
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
  };
}

export function SchemaScript({ pageType, pageData }: SchemaScriptProps) {
  const schema = generateSchemaGraph(pageType, pageData);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// =============================================================================
// FAQ SCHEMA COMPONENT (Standalone)
// =============================================================================

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// =============================================================================
// BREADCRUMB SCHEMA COMPONENT (Standalone)
// =============================================================================

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// =============================================================================
// ARTICLE SCHEMA COMPONENT (Standalone)
// =============================================================================

interface ArticleSchemaProps {
  article: ArticleData;
}

export function ArticleSchema({ article }: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: article.author.url,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Web On Dev',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.webondev.com/images/branding/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
    wordCount: article.wordCount,
    keywords: article.keywords?.join(', '),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// =============================================================================
// HOWTO SCHEMA COMPONENT (Standalone)
// =============================================================================

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
  image?: string;
}

export function HowToSchema({ name, description, steps, totalTime, image }: HowToSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    image,
    totalTime,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
      url: step.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// =============================================================================
// LOCAL BUSINESS SCHEMA COMPONENT (Standalone for location pages)
// =============================================================================

interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  phone?: string;
  email?: string;
  url: string;
  image?: string;
  rating?: {
    ratingValue: number;
    ratingCount: number;
  };
}

export function LocalBusinessSchema({
  name,
  description,
  address,
  geo,
  phone,
  email,
  url,
  image,
  rating,
}: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    url,
    image,
    telephone: phone,
    email,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    ...(geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
    }),
    ...(rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: rating.ratingValue,
        ratingCount: rating.ratingCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// =============================================================================
// SERVICE SCHEMA COMPONENT (Standalone)
// =============================================================================

interface ServiceSchemaProps {
  service: ServiceData;
}

export function ServiceSchema({ service }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    image: service.image,
    provider: {
      '@type': 'Organization',
      name: 'Web On Dev',
      url: 'https://www.webondev.com',
    },
    areaServed: service.areaServed || 'Worldwide',
    serviceType: service.serviceType || service.name,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// =============================================================================
// EXPORT ALL
// =============================================================================

export default SchemaScript;
