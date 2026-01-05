import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LocationHeroSection from '@/components/pages/locations/LocationHeroSection';
import CTASection from '@/components/sections/CTASection';
import LocalTeamsSection from '@/components/sections/where-we-serve/LocalTeamsSection';
import OutcomesSection from '@/components/sections/where-we-serve/OutcomesSection';
import WebDevelopmentSection from '@/components/sections/where-we-serve/WebDevelopmentSection';
import MobileAppsSection from '@/components/sections/where-we-serve/MobileAppsSection';
import IndustryFitSection from '@/components/sections/where-we-serve/IndustryFitSection';
import ValuePropsSection from '@/components/sections/where-we-serve/ValuePropsSection';
import TestimonialsSection from '@/components/sections/where-we-serve/TestimonialsSection';
import ServicesDirectorySection from '@/components/sections/where-we-serve/ServicesDirectorySection';
import { getAllCountriesAPI } from '@/lib/location-api';
import LocationCountriesSection from '@/components/pages/locations/LocationCountriesSection';
import LocationStatsSection from '@/components/pages/locations/LocationStatsSection';
import { toSlug } from '@/lib/slug';
import { getBaseUrl } from '@/lib/site-config';
import WhereWeServeSchema from '@/components/schema/WhereWeServeSchema';
import DynamicFAQ from '@/components/ui/DynamicFAQ';

const siteUrl = getBaseUrl();

export const metadata: Metadata = {
  title: 'Where We Serve - Global Software Development Services | Web On Dev',
  description: 'Explore our global presence with software development services across multiple countries. Local expertise with global standards in web development, mobile apps, and digital solutions.',
  keywords: 'global software development, international IT services, software development worldwide, web development services, mobile app development, digital solutions',
  alternates: { canonical: `${siteUrl}/where-we-serve/` },
  openGraph: {
    title: 'Where We Serve - Global Software Development Services',
    description: 'Explore our global presence with software development services across multiple countries.',
    url: `${siteUrl}/where-we-serve/`,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/api/images/og?title=Where%20We%20Serve&subtitle=Solutions%20Indicator`,
        width: 1200,
        height: 630,
        alt: 'Where We Serve – Web On Dev'
      }
    ]
  },
};

// ISR: Revalidate every 24 hours for better SEO indexing
export const revalidate = 86400;

export default async function WhereWeServePage() {
  const countries = await getAllCountriesAPI();

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        {/* 1) Hero Section */}
        <LocationHeroSection />

        {/* 2) Countries Grid */}
        <LocationCountriesSection countries={countries} />

        {/* 3) Local Teams Section */}
        <LocalTeamsSection />

        {/* 4) Outcomes Section */}
        <OutcomesSection />

        {/* 5) Web Development Section */}
        <WebDevelopmentSection />

        {/* 6) Mobile Apps Section */}
        <MobileAppsSection />

        {/* 7) Industry Fit Section */}
        <IndustryFitSection />

        {/* 8) Stats Section */}
        <LocationStatsSection />

        {/* 9) Value Props Section */}
        <ValuePropsSection />

        {/* 10) Services Directory */}
        <ServicesDirectorySection />

        {/* 11) Dynamic FAQ Section */}
        <DynamicFAQ
          location="globally"
          service="software development"
          city="New York"
          state="NY"
          country="United States"
        />

        {/* 12) Testimonials Section */}
        <TestimonialsSection />

        {/* 13) Primary CTA */}
        <CTASection />

        {/* Comprehensive Schema Markup */}
        <WhereWeServeSchema countries={countries} siteUrl={siteUrl} />
        
        {/* Additional Page-Specific Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Where We Serve',
              description: 'Global locations where Web On Dev delivers software development services.',
              hasPart: countries.map((c: any) => ({
                '@type': 'WebPage',
                name: `Software Development in ${c.name}`,
                url: `${siteUrl}/where-we-serve/${toSlug(c.name)}`,
              })),
              publisher: {
                '@type': 'Organization',
                name: 'Web On Dev',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Supported Countries',
              itemListElement: countries.map((c: any, index: number) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: c.name,
                url: `${siteUrl}/where-we-serve/${toSlug(c.name)}`,
              })),
            }),
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
