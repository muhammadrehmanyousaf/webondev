import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHeroSection from '@/components/pages/service/ServiceHeroSection';
import ServiceFeaturesSection from '@/components/pages/service/ServiceFeaturesSection';
import ServiceProcessSection from '@/components/pages/service/ServiceProcessSection';
import ServicePricingSection from '@/components/pages/service/ServicePricingSection';
import ServiceFAQSection from '@/components/pages/service/ServiceFAQSection';
import CTASection from '@/components/sections/CTASection';
import { getServiceBySlug, getAllSlugs } from '@/lib/site-structure';

interface ServicePageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
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
  const keywords = cluster ? cluster.keywords.join(', ') : `${pillar.title}, software development, technology solutions`;

  return {
    title: `${title} - SoftwareAgency | Professional Software Development`,
    description: `${description} - Expert ${title.toLowerCase()} services from SoftwareAgency.`,
    keywords,
    openGraph: {
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/images/og?title=${encodeURIComponent(title)}&subtitle=Solutions%20Indicator`,
          width: 1200,
          height: 630,
          alt: `${title} – Web On Dev`
        }
      ]
    }
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug[0], resolvedParams.slug[1]);
  
  if (!service) {
    notFound();
  }

  const { pillar, cluster } = service;
  const isClusterPage = !!cluster;
<<<<<<< Updated upstream
=======
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
      ratingCount: '250',
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
>>>>>>> Stashed changes

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ServiceHeroSection pillar={pillar} cluster={cluster} />
        <ServiceFeaturesSection pillar={pillar} cluster={cluster} />
        {/* <ServiceProcessSection pillar={pillar} cluster={cluster} /> */}
        <ServicePricingSection pillar={pillar} cluster={cluster} />
        <ServiceFAQSection pillar={pillar} cluster={cluster} />
        <CTASection />
      </main>
      <Footer />
    </div>
  ); 
}