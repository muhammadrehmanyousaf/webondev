import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LocationBreadcrumb from '@/components/pages/locations/LocationBreadcrumb';
import LocationHeroSection from '@/components/pages/locations/LocationHeroSection';
import LocationStatsSection from '@/components/pages/locations/LocationStatsSection';
import CTASection from '@/components/sections/CTASection';
import CitiesOverviewSection from '@/components/sections/where-we-serve/CitiesOverviewSection';
import CaseStudiesSection from '@/components/sections/where-we-serve/CaseStudiesSection';
import TestimonialsSection from '@/components/sections/where-we-serve/TestimonialsSection';
import ServicesDirectorySection from '@/components/sections/where-we-serve/ServicesDirectorySection';
import OutcomesSection from '@/components/sections/where-we-serve/OutcomesSection';
import WebDevelopmentSection from '@/components/sections/where-we-serve/WebDevelopmentSection';
import MobileAppsSection from '@/components/sections/where-we-serve/MobileAppsSection';
import IndustryFitSection from '@/components/sections/where-we-serve/IndustryFitSection';
import LocalTeamsSection from '@/components/sections/where-we-serve/LocalTeamsSection';
import { getAllCountriesAPI, getStatesByCountryAPI, getCitiesByStateAPI } from '@/lib/location-api';
import { fromSlugMatch, fromCountrySlugMatch, toSlug } from '@/lib/slug';
import { getBaseUrl } from '@/lib/site-config';
import DynamicFAQ from '@/components/ui/DynamicFAQ';

interface StatePageProps {
  params: Promise<{
    country: string;
    state: string;
  }>;
}

// ISR: Revalidate every 24 hours for better SEO indexing
export const revalidate = 86400;

export async function generateMetadata({ params }: StatePageProps): Promise<Metadata> {
  const { country: countrySlug, state: stateSlug } = await params;
  const countries = await getAllCountriesAPI();
  const matchCountry = fromCountrySlugMatch(countrySlug, countries.map((c) => c.name));
  const country = countries.find((c) => c.name === matchCountry);
  if (!country) return { title: 'State Not Found - Web On Dev' };
  const states = await getStatesByCountryAPI(country.name);
  const matchState = fromSlugMatch(stateSlug, states.map((s) => s.name));
  const state = states.find((s) => s.name === matchState);
  if (!state) return { title: 'State Not Found - Web On Dev' };
  const siteUrl = getBaseUrl();
  const canonicalUrl = `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}`;
  return {
    title: `Software Development in ${state.name}, ${country.name} - Web On Dev`,
    description: `Professional software development services in ${state.name}, ${country.name}.`,
    keywords: `${state.name}, ${country.name}, software development, web development`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `Software Development in ${state.name}, ${country.name}`,
      description: `Professional software development services in ${state.name}, ${country.name}.`,
      url: canonicalUrl,
      type: 'website',
    },
  };
}

export default async function StatePage({ params }: StatePageProps) {
  const { country: countrySlug, state: stateSlug } = await params;
  const countries = await getAllCountriesAPI();
  const matchCountry = fromCountrySlugMatch(countrySlug, countries.map((c) => c.name));
  const country = countries.find((c) => c.name === matchCountry);
  if (!country) notFound();
  const states = await getStatesByCountryAPI(country.name);
  const matchState = fromSlugMatch(stateSlug, states.map((s) => s.name));
  const state = states.find((s) => s.name === matchState);
  if (!state) notFound();
  const cities = await getCitiesByStateAPI(country.name, state.name);

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Where We Serve', href: '/where-we-serve' },
    { name: country.name, href: `/where-we-serve/${toSlug(country.name)}` },
    { name: state.name, href: `/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}`, current: true },
  ];

  const siteUrl = getBaseUrl();
  const canonical = `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}`;

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        {/* 1) Breadcrumb */}
        <LocationBreadcrumb items={breadcrumbItems} />

        {/* 2) Hero Section */}
        <LocationHeroSection
          title={`Software Development in ${state.name}`}
          subtitle={`Local expertise in ${state.name}, ${country.name}.`}
          flag={country.flag}
          currency={country.currencies.join(', ')}
          timezone={country.timezones[0] || ''}
        />

        {/* 3) Cities Overview */}
        <CitiesOverviewSection
          cities={cities}
          countryName={country.name}
          stateName={state.name}
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
          title={`Explore services for ${state.name}, ${country.name}`}
          subtitle="Web, mobile, AI, design, outsourcing, cloud, DevOps, analytics, and more"
        />

        {/* 10) Stats */}
        <LocationStatsSection />

        {/* 11) Case Studies */}
        <CaseStudiesSection countryName={state.name} />

        {/* 12) Testimonials */}
        <TestimonialsSection />

        {/* 13) Dynamic FAQ */}
        <DynamicFAQ
          location={`in ${state.name}, ${country.name}`}
          service="software development"
          city="major cities"
          state={state.name}
          country={country.name}
        />

        {/* 14) Primary CTA */}
        <CTASection />

        {/* JSON-LD: Breadcrumbs and ItemList for cities */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
                { '@type': 'ListItem', position: 2, name: 'Where We Serve', item: `${siteUrl}/where-we-serve` },
                { '@type': 'ListItem', position: 3, name: country.name, item: `${siteUrl}/where-we-serve/${toSlug(country.name)}` },
                { '@type': 'ListItem', position: 4, name: state.name, item: canonical },
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
              name: `Cities in ${state.name}, ${country.name}`,
              itemListElement: cities.map((c: any, index: number) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: c.name,
                url: `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(c.name)}`,
              })),
            }),
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
