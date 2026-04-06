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
import NearbyLocationsSection from '@/components/sections/where-we-serve/NearbyLocationsSection';
import ProcessSection from '@/components/sections/where-we-serve/ProcessSection';
import TechStackSection from '@/components/sections/where-we-serve/TechStackSection';
import PricingOverviewSection from '@/components/sections/where-we-serve/PricingOverviewSection';


interface CountryPageProps {
  params: Promise<{
    country: string;
  }>;
}

// ISR: Revalidate every 24 hours for better SEO indexing
export const revalidate = 86400;

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

  const title = `Software Development in ${country.name} - 500+ Projects (From $3K)`;
  const description = `Top-rated software development across ${country.name}. Web apps, mobile apps & custom software from $3,000. 4.9★ by 250+ clients. Next.js, React, Flutter experts. Free consultation for ${country.name} businesses.`;

  return {
    title,
    description,
    keywords: `${country.name} software development, ${country.name} web development, ${country.name} app development, hire developers ${country.name}, custom software ${country.name}`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonicalUrl,
      siteName: 'Web On Dev',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@webondev',
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
          title={`Software Development in ${country.name}`}
          subtitle={`Top-rated software development across ${country.name}. Web apps, mobile apps, and custom software from $3,000. 500+ projects delivered. 4.9★ by 250+ clients. React, Next.js, Flutter experts.`}
          flag={country.flag}
          currency={country.currencies.join(', ')}
          timezone={country.timezones[0] || ''}
          locationName={country.name}
        />

        {/* 3) Trust Stats */}
        <LocationStatsSection countryName={country.name} />

        {/* 4) States Overview */}
        <StatesOverviewSection states={states} countryName={country.name} />

        {/* 5) How We Work */}
        <ProcessSection countryName={country.name} />

        {/* 6) Outcomes */}
        <OutcomesSection countryName={country.name} />

        {/* 7) Web Development */}
        <WebDevelopmentSection countryName={country.name} />

        {/* 8) Mobile Apps */}
        <MobileAppsSection countryName={country.name} />

        {/* 9) Tech Stack */}
        <TechStackSection countryName={country.name} />

        {/* 10) Industry Fit */}
        <IndustryFitSection countryName={country.name} />

        {/* 11) Local Teams */}
        <LocalTeamsSection countryName={country.name} />

        {/* 12) Case Studies */}
        <CaseStudiesSection countryName={country.name} />

        {/* 13) Testimonials */}
        <TestimonialsSection countryName={country.name} />

        {/* 14) Pricing */}
        <PricingOverviewSection countryName={country.name} />

        {/* 15) Services Directory */}
        <ServicesDirectorySection
          title={`Explore services available in ${country.name}`}
          subtitle="Web, mobile, AI, design, outsourcing, cloud, DevOps, analytics, and more"
        />

        {/* 16) FAQ */}
        <DynamicFAQ
          location={`in ${country.name}`}
          service="software development"
          city="major cities"
          state="various states"
          country={country.name}
        />

        {/* 17) Cross-Links */}
        <NearbyLocationsSection
          currentName=""
          type="state"
          siblings={states.map((s: any) => s.name)}
          parentPath={`/where-we-serve/${toSlug(country.name)}`}
          parentName={country.name}
        />

        {/* 18) Final CTA */}
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
                { '@type': 'ListItem', position: 2, name: 'Where We Serve', item: `${siteUrl}/where-we-serve/` },
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
              itemListElement: states
                .filter((s: any) => s.name && s.name.trim().length > 0)
                .map((s: any, index: number) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  url: `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(s.name)}/`,
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
