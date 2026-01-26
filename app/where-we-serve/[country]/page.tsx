import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LocationBreadcrumb from '@/components/pages/locations/LocationBreadcrumb';
import LocationHeroSection from '@/components/pages/locations/LocationHeroSection';
import LocationStatsSection from '@/components/pages/locations/LocationStatsSection';
import CTASection from '@/components/sections/CTASection';
import CaseStudiesSection from '@/components/sections/where-we-serve/CaseStudiesSection';
import TestimonialsSection from '@/components/sections/where-we-serve/TestimonialsSection';
import ServicesDirectorySection from '@/components/sections/where-we-serve/ServicesDirectorySection';
import OutcomesSection from '@/components/sections/where-we-serve/OutcomesSection';
import WebDevelopmentSection from '@/components/sections/where-we-serve/WebDevelopmentSection';
import MobileAppsSection from '@/components/sections/where-we-serve/MobileAppsSection';
import IndustryFitSection from '@/components/sections/where-we-serve/IndustryFitSection';
import LocalTeamsSection from '@/components/sections/where-we-serve/LocalTeamsSection';
import StatesOverviewSection from '@/components/sections/where-we-serve/StatesOverviewSection';
import { getAllCountriesAPI, getStatesByCountryAPI } from '@/lib/location-api';
import { fromCountrySlugMatch, toSlug } from '@/lib/slug';
import { getBaseUrl } from '@/lib/site-config';
import DynamicFAQ from '@/components/ui/DynamicFAQ';
import { staticCountries } from '@/lib/location-static-data';


interface CountryPageProps {
  params: Promise<{
    country: string;
  }>;
}

// ISR: Revalidate every 30 days (content doesn't change) - maximum cost savings
export const revalidate = 2592000;

// Generate static params at BUILD TIME - eliminates runtime function calls
export async function generateStaticParams() {
  return staticCountries.map((country) => ({
    country: toSlug(country.name),
  }));
}

export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const countries = await getAllCountriesAPI();
  const matchName = fromCountrySlugMatch(resolvedParams.country, countries.map((c) => c.name));
  const country = countries.find((c) => c.name === matchName);

  if (!country) {
    return {
      title: 'Country Not Found - Web On Dev',
      description: 'The requested country page could not be found.',
    };
  }

  const siteUrl = getBaseUrl();
  const path = `/where-we-serve/${toSlug(country.name)}`;
  const canonicalUrl = `${siteUrl}${path}`;

  return {
    title: `Software Development Services in ${country.name} - Web On Dev`,
    description: `Professional software development and IT services across ${country.name}. Local expertise with global standards.`,
    keywords: `${country.name}, software development, web development, IT services`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `Software Development Services in ${country.name}`,
      description: `Professional software development and IT services across ${country.name}.`,
      type: 'website',
      url: canonicalUrl,
    },
  };
}

export default async function CountryPage({ params }: CountryPageProps) {
  const resolvedParams = await params;
  const countries = await getAllCountriesAPI();
  const matchName = fromCountrySlugMatch(resolvedParams.country, countries.map((c) => c.name));
  const country = countries.find((c) => c.name === matchName);

  if (!country) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Where We Serve', href: '/where-we-serve' },
    { name: country.name, href: `/where-we-serve/${toSlug(country.name)}`, current: true }
  ];

  const states = await getStatesByCountryAPI(country.name);

  const siteUrl = getBaseUrl();
  const canonical = `${siteUrl}/where-we-serve/${toSlug(country.name)}`;

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        {/* 1) Breadcrumb */}
        <LocationBreadcrumb items={breadcrumbItems} />

        {/* 2) Hero Section */}
        <LocationHeroSection
          title={`Software Development Services in ${country.name}`}
          subtitle={`Local expertise and global standards in ${country.name}.`}
          flag={country.flag}
          currency={country.currencies.join(', ')}
          timezone={country.timezones[0] || ''}
        />

        {/* 3) States Overview */}
        <StatesOverviewSection
          states={states}
          countryName={country.name}
        />

        {/* 4) Outcomes Section */}
        <OutcomesSection />

        {/* 5) Web Development Section */}
        <WebDevelopmentSection />

        {/* 6) Mobile Apps Section */}
        <MobileAppsSection />

        {/* 7) Industry Fit Section */}
        <IndustryFitSection />

        {/* 8) Local Teams Section */}
        <LocalTeamsSection />

        {/* 9) Services Directory */}
        <ServicesDirectorySection
          title={`Explore services available in ${country.name}`}
          subtitle="Web, mobile, AI, design, outsourcing, cloud, DevOps, analytics, and more"
        />

        {/* 10) Stats */}
        <LocationStatsSection />

        {/* 11) Case Studies */}
        <CaseStudiesSection countryName={country.name} />

        {/* 12) Testimonials */}
        <TestimonialsSection />

        {/* 13) Dynamic FAQ */}
        <DynamicFAQ
          location={`in ${country.name}`}
          service="software development"
          city="major cities"
          state="various states"
          country={country.name}
        />

        {/* 14) Primary CTA */}
        <CTASection />

        {/* JSON-LD: Breadcrumbs and ItemList for states */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
                { '@type': 'ListItem', position: 2, name: 'Where We Serve', item: `${siteUrl}/where-we-serve` },
                { '@type': 'ListItem', position: 3, name: country.name, item: canonical },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: `States in ${country.name}`,
              itemListElement: states.map((s: any, index: number) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(s.name)}`,
                name: s.name,
              })),
            }),
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
