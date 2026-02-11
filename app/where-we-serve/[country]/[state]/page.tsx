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
import NearbyLocationsSection from '@/components/sections/where-we-serve/NearbyLocationsSection';
import ProcessSection from '@/components/sections/where-we-serve/ProcessSection';
import TechStackSection from '@/components/sections/where-we-serve/TechStackSection';
import PricingOverviewSection from '@/components/sections/where-we-serve/PricingOverviewSection';

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
  const title = `Software Development in ${state.name}, ${country.name} (4.9★ Agency)`;
  const description = `Hire expert developers in ${state.name}, ${country.name}. Web development, mobile apps & custom software from $3,000. 500+ projects delivered. Free consultation for ${state.name} businesses.`;

  return {
    title,
    description,
    keywords: `${state.name} software development, ${state.name} web development, ${state.name} ${country.name} developers, hire developers ${state.name}, custom software ${state.name}`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
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
          title={(() => {
            const h1s = [
              `Software Development in ${state.name}`,
              `Top Software Agency in ${state.name}`,
              `${state.name} Development Services`,
            ];
            return h1s[(state.name.length + country.name.length) % h1s.length];
          })()}
          subtitle={`Delivering high-performance websites, mobile apps, and custom software across ${state.name}, ${country.name}. 500+ projects delivered. 4.9★ rated by 250+ clients. Free consultation available.`}
          flag={country.flag}
          currency={country.currencies.join(', ')}
          timezone={country.timezones[0] || ''}
          locationName={state.name}
        />

        {/* 3) Trust Stats — immediate social proof */}
        <LocationStatsSection stateName={state.name} countryName={country.name} />

        {/* 4) Cities Overview — answers "what cities do you serve" */}
        <CitiesOverviewSection cities={cities} countryName={country.name} stateName={state.name} />

        {/* 5) How We Work */}
        <ProcessSection stateName={state.name} countryName={country.name} />

        {/* 6) Outcomes */}
        <OutcomesSection stateName={state.name} countryName={country.name} />

        {/* 7) Web Development */}
        <WebDevelopmentSection stateName={state.name} countryName={country.name} />

        {/* 8) Mobile Apps */}
        <MobileAppsSection stateName={state.name} countryName={country.name} />

        {/* 9) Tech Stack */}
        <TechStackSection stateName={state.name} countryName={country.name} />

        {/* 10) Industry Fit */}
        <IndustryFitSection stateName={state.name} countryName={country.name} />

        {/* 11) Local Teams */}
        <LocalTeamsSection stateName={state.name} countryName={country.name} />

        {/* 12) Case Studies */}
        <CaseStudiesSection stateName={state.name} countryName={country.name} />

        {/* 13) Testimonials */}
        <TestimonialsSection stateName={state.name} countryName={country.name} />

        {/* 14) Pricing */}
        <PricingOverviewSection stateName={state.name} countryName={country.name} />

        {/* 15) Services Directory */}
        <ServicesDirectorySection
          title={`Explore services for ${state.name}, ${country.name}`}
          subtitle="Web, mobile, AI, design, outsourcing, cloud, DevOps, analytics, and more"
        />

        {/* 16) FAQ */}
        <DynamicFAQ
          location={`in ${state.name}, ${country.name}`}
          service="software development"
          city="major cities"
          state={state.name}
          country={country.name}
        />

        {/* 17) Cross-Links */}
        <NearbyLocationsSection
          currentName={state.name}
          type="state"
          siblings={states.map((s: any) => s.name)}
          parentPath={`/where-we-serve/${toSlug(country.name)}`}
          parentName={country.name}
        />

        {/* 18) Final CTA */}
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
