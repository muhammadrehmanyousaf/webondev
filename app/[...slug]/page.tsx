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