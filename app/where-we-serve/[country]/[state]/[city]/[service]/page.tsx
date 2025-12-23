import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LocationBreadcrumb from '@/components/pages/locations/LocationBreadcrumb';
import LocationHeroSection from '@/components/pages/locations/LocationHeroSection';
import LocationStatsSection from '@/components/pages/locations/LocationStatsSection';
import CTASection from '@/components/sections/CTASection';
import ServicesDirectorySection from '@/components/sections/where-we-serve/ServicesDirectorySection';
import OutcomesSection from '@/components/sections/where-we-serve/OutcomesSection';
import WebDevelopmentSection from '@/components/sections/where-we-serve/WebDevelopmentSection';
import MobileAppsSection from '@/components/sections/where-we-serve/MobileAppsSection';
import IndustryFitSection from '@/components/sections/where-we-serve/IndustryFitSection';
import LocalTeamsSection from '@/components/sections/where-we-serve/LocalTeamsSection';
import TestimonialsSection from '@/components/sections/where-we-serve/TestimonialsSection';
import CaseStudiesSection from '@/components/sections/where-we-serve/CaseStudiesSection';
import { getAllCountriesAPI, getStatesByCountryAPI, getCitiesByStateAPI } from '@/lib/location-api';
import { fromSlugMatch, fromCountrySlugMatch, toSlug } from '@/lib/slug';
import { getServiceBySlug, enrichedSiteStructure } from '@/lib/site-structure';
import { getBaseUrl } from '@/lib/site-config';
import DynamicFAQ from '@/components/ui/DynamicFAQ';

export const dynamic = 'force-dynamic';

interface ServicePageProps {
  params: Promise<{
    country: string;
    state: string;
    city: string;
    service: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { country: countrySlug, state: stateSlug, city: citySlug, service } = await params;
  const countries = await getAllCountriesAPI();
  const matchCountry = fromCountrySlugMatch(countrySlug, countries.map((c) => c.name));
  const country = countries.find((c) => c.name === matchCountry);
  if (!country) return { title: 'Service Not Found - Web On Dev' };
  const states = await getStatesByCountryAPI(country.name);
  const matchState = fromSlugMatch(stateSlug, states.map((s) => s.name));
  const state = states.find((s) => s.name === matchState);
  if (!state) return { title: 'Service Not Found - Web On Dev' };
  const cities = await getCitiesByStateAPI(country.name, state.name);
  const matchCity = fromSlugMatch(citySlug, cities.map((c) => c.name));
  const city = cities.find((c) => c.name === matchCity);
  if (!city) return { title: 'Service Not Found - Web On Dev' };
  const serviceTitle = service.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  const allClusters = enrichedSiteStructure.flatMap(p => p.clusters.map(c => ({ pillar: p.slug, ...c })));
  const matched = allClusters.find(c => c.slug === service);
  const lsi = (matched?.keywords || []).slice(0, 20);

  const siteUrl = getBaseUrl();
  const canonicalUrl = `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/${toSlug(serviceTitle)}`;

  return {
    title: `${serviceTitle} in ${city.name}, ${state.name} - Web On Dev`,
    description: `Hire expert ${serviceTitle.toLowerCase()} services in ${city.name}, ${state.name}, ${country.name}. Local expertise with global standards.`,
    keywords: `${serviceTitle}, ${city.name}, ${state.name}, ${country.name}, ${lsi.join(', ')}`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${serviceTitle} in ${city.name}, ${state.name}`,
      description: `Hire expert ${serviceTitle.toLowerCase()} services in ${city.name}, ${state.name}, ${country.name}.`,
      url: canonicalUrl,
      type: 'website',
    },
  };
}

export default async function ServiceInCityPage({ params }: ServicePageProps) {
  const { country: countrySlug, state: stateSlug, city: citySlug, service } = await params;
  const countries = await getAllCountriesAPI();
  const matchCountry = fromCountrySlugMatch(countrySlug, countries.map((c) => c.name));
  const country = countries.find((c) => c.name === matchCountry);
  if (!country) notFound();
  const states = await getStatesByCountryAPI(country.name);
  const matchState = fromSlugMatch(stateSlug, states.map((s) => s.name));
  const state = states.find((s) => s.name === matchState);
  if (!state) notFound();
  const cities = await getCitiesByStateAPI(country.name, state.name);
  const matchCity = fromSlugMatch(citySlug, cities.map((c) => c.name));
  const city = cities.find((c) => c.name === matchCity);
  if (!city) notFound();

  const serviceTitle = service.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Where We Serve', href: '/where-we-serve' },
    { name: country.name, href: `/where-we-serve/${toSlug(country.name)}` },
    { name: state.name, href: `/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}` },
    { name: city.name, href: `/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}` },
    { name: serviceTitle, href: `/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/${toSlug(serviceTitle)}`, current: true },
  ];

  const siteUrl = getBaseUrl();

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        {/* 1) Breadcrumb */}
        <LocationBreadcrumb items={breadcrumbItems} />

        {/* 2) Hero Section */}
        <LocationHeroSection
          title={`${serviceTitle} in ${city.name}`}
          subtitle={`Professional ${serviceTitle.toLowerCase()} for businesses in ${city.name}, ${state.name}.`}
          flag={country.flag}
          currency={country.currencies.join(', ')}
          timezone={country.timezones[0] || ''}
        />

        {/* 3) Outcomes Section */}
        <OutcomesSection />

        {/* 4) Web Development Section */}
        <WebDevelopmentSection />

        {/* 5) Mobile Apps Section */}
        <MobileAppsSection />

        {/* 6) Industry Fit Section */}
        <IndustryFitSection />

        {/* 7) Local Teams Section */}
        <LocalTeamsSection />

        {/* 8) Services Directory */}
        <ServicesDirectorySection
          title={`Explore more services related to ${serviceTitle}`}
          subtitle="Web, mobile, AI, design, outsourcing, cloud, DevOps, analytics, and more"
        />

        {/* 9) Stats */}
        <LocationStatsSection />

        {/* 10) Case Studies */}
        <CaseStudiesSection countryName={city.name} />

        {/* 11) Testimonials */}
        <TestimonialsSection />

        {/* 12) Dynamic FAQ */}
        <DynamicFAQ
          location={`in ${city.name}, ${state.name}`}
          service={serviceTitle.toLowerCase()}
          city={city.name}
          state={state.name}
          country={country.name}
        />

        {/* 13) Primary CTA */}
        <CTASection />

        {/* JSON-LD Structured Data */}
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
                { '@type': 'ListItem', position: 4, name: state.name, item: `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}` },
                { '@type': 'ListItem', position: 5, name: city.name, item: `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}` },
                { '@type': 'ListItem', position: 6, name: serviceTitle, item: `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/${toSlug(serviceTitle)}` },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: serviceTitle,
              areaServed: {
                '@type': 'City',
                name: `${city.name}`,
                containedInPlace: { '@type': 'AdministrativeArea', name: `${state.name}, ${country.name}` },
              },
              provider: { '@type': 'Organization', '@id': 'https://www.webondev.com/#organization' },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', '.prose p:first-of-type']
            })
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
