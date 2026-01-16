import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
// Legacy sections (fallback)
import ServiceHeroSection from '@/components/pages/service/ServiceHeroSection';
import ServiceFeaturesSection from '@/components/pages/service/ServiceFeaturesSection';
import ServiceProcessSection from '@/components/pages/service/ServiceProcessSection';
import ServicePricingSection from '@/components/pages/service/ServicePricingSection';
import ServiceFAQSection from '@/components/pages/service/ServiceFAQSection';
import CTASection from '@/components/sections/CTASection';
// New World-Class Sections
import {
  ServiceHeroWithForm,
  ServicePainPoints,
  ServiceSolutions,
  ServiceProcess,
  ServiceBenefits,
  ServiceTechStack,
  ServicePortfolio,
  ServicePricing,
  ServiceTestimonials,
  ServiceFAQ,
  ServiceRelated,
  ServiceCTA,
} from '@/components/services/sections';
// Data
import { getServiceBySlug, getAllSlugs, enrichedSiteStructure } from '@/lib/site-structure';
import { getBaseUrl } from '@/lib/site-config';
import { getPillarServiceData, hasPillarServiceData } from '@/data/services/pillars';
import { getClusterServiceData, hasClusterServiceData } from '@/data/services/clusters';

const siteUrl = getBaseUrl();

interface ServicePageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  // Filter out paths that should be handled by other routes
  return slugs
    .filter(slug => !slug.startsWith('api/') && !slug.startsWith('sitemaps/'))
    .map((slug) => ({
      slug: slug.split('/'),
    }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug.join('/');
  const service = getServiceBySlug(resolvedParams.slug[0], resolvedParams.slug[1]);

  if (!service) {
    return {
      title: 'Service Not Found - Web On Dev',
      description: 'The requested service page could not be found.',
    };
  }

  const { pillar, cluster } = service;
  const title = cluster ? cluster.title : pillar.title;
  const description = cluster ? cluster.description : pillar.description;
  const keywords = cluster ? cluster.keywords.join(', ') : `${pillar.title}, software development, technology solutions, web development agency`;

  // Build canonical URL with trailing slash
  const canonicalUrl = cluster
    ? `${siteUrl}/${pillar.slug}/${cluster.slug}/`
    : `${siteUrl}/${pillar.slug}/`;

  const imageUrl = `${siteUrl}/api/images/og?title=${encodeURIComponent(title)}&subtitle=Professional%20Services`;

  return {
    title: `${title} Services | Professional ${pillar.title} - Web On Dev`,
    description: `${description} Expert ${title.toLowerCase()} services from Web On Dev. Trusted by 500+ clients worldwide.`,
    keywords,
    authors: [{ name: 'Web On Dev', url: siteUrl }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} - Professional ${pillar.title} Services`,
      description: `${description} Expert ${title.toLowerCase()} services from Web On Dev.`,
      url: canonicalUrl,
      type: 'website',
      siteName: 'Web On Dev',
      locale: 'en_US',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} Services – Web On Dev`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - Web On Dev`,
      description: `${description} Expert ${title.toLowerCase()} services from Web On Dev.`,
      creator: '@webondev',
      site: '@webondev',
      images: [imageUrl],
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
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug.join('/');

  // Exclude paths that should be handled by other routes
  if (slugPath.startsWith('api/') || slugPath.startsWith('sitemaps/') || slugPath.endsWith('.xml')) {
    notFound();
  }

  const service = getServiceBySlug(resolvedParams.slug[0], resolvedParams.slug[1]);

  if (!service) {
    notFound();
  }

  const { pillar, cluster } = service;
  const isClusterPage = !!cluster;
  const title = cluster ? cluster.title : pillar.title;
  const description = cluster ? cluster.description : pillar.description;
  const keywords = cluster ? cluster.keywords : [];

  const canonicalUrl = cluster
    ? `${siteUrl}/${pillar.slug}/${cluster.slug}/`
    : `${siteUrl}/${pillar.slug}/`;

  // Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: title,
    description: description,
    url: canonicalUrl,
    provider: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Web On Dev',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    serviceType: pillar.title,
    category: pillar.title,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  };

  // Breadcrumb Schema
  const breadcrumbItems = cluster
    ? [
        { name: 'Home', url: `${siteUrl}/` },
        { name: pillar.title, url: `${siteUrl}/${pillar.slug}/` },
        { name: cluster.title, url: canonicalUrl },
      ]
    : [
        { name: 'Home', url: `${siteUrl}/` },
        { name: pillar.title, url: canonicalUrl },
      ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  // HowTo Schema for the service process
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Get ${title} Services`,
    description: `Step-by-step guide to getting professional ${title.toLowerCase()} services from Web On Dev.`,
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Schedule Consultation',
        text: 'Book a free consultation call to discuss your project requirements and goals.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Receive Proposal',
        text: 'Get a detailed proposal with timeline, deliverables, and transparent pricing.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Development Phase',
        text: 'Our expert team builds your solution with regular updates and feedback loops.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Launch & Support',
        text: 'We deploy your project and provide ongoing maintenance and support.',
      },
    ],
    totalTime: 'P4W',
  };

  // WebPage Schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: `${title} Services - Web On Dev`,
    description: description,
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${canonicalUrl}#service` },
    inLanguage: 'en-US',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.service-intro', 'h2'],
    },
  };

  // Speakable Schema for AI/Voice Search
  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.service-description', '.feature-title'],
  };

  // Check if we have rich service data for world-class sections
  // For cluster pages, check cluster data first, then fall back to pillar
  // For pillar pages, use pillar data
  const clusterData = cluster ? getClusterServiceData(cluster.slug) : null;
  const pillarData = getPillarServiceData(pillar.slug);
  const serviceData = clusterData || pillarData;
  const useWorldClassSections = !!serviceData;

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        {useWorldClassSections && serviceData ? (
          <>
            {/* World-Class 12-Section Layout */}
            <ServiceHeroWithForm data={serviceData} />
            <ServicePainPoints data={serviceData} />
            <ServiceSolutions data={serviceData} />
            <ServiceProcess data={serviceData} />
            <ServiceBenefits data={serviceData} />
            <ServiceTechStack data={serviceData} />
            <ServicePortfolio data={serviceData} />
            <ServicePricing data={serviceData} />
            <ServiceTestimonials data={serviceData} />
            <ServiceFAQ data={serviceData} />
            <ServiceRelated data={serviceData} />
            <ServiceCTA data={serviceData} />
          </>
        ) : (
          <>
            {/* Legacy Sections (fallback for services without rich data) */}
            <ServiceHeroSection pillar={pillar} cluster={cluster} />
            <ServiceFeaturesSection pillar={pillar} cluster={cluster} />
            <ServicePricingSection pillar={pillar} cluster={cluster} />
            <ServiceFAQSection pillar={pillar} cluster={cluster} />
            <CTASection />
          </>
        )}
      </main>

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <Footer />
    </div>
  );
}