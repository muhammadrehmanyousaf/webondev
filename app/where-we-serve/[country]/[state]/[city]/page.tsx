import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LocationBreadcrumb from '@/components/pages/locations/LocationBreadcrumb';
import LocationHeroSection from '@/components/pages/locations/LocationHeroSection';
import LocationStatsSection from '@/components/pages/locations/LocationStatsSection';
import CTASection from '@/components/sections/CTASection';
import AllServicesSection from '@/components/sections/where-we-serve/AllServicesSection';
import CityContactFormSection from '@/components/sections/where-we-serve/CityContactFormSection';
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
import { getBaseUrl } from '@/lib/site-config';
import DynamicFAQ from '@/components/ui/DynamicFAQ';

interface CityPageProps {
  params: Promise<{
    country: string;
    state: string;
    city: string;
  }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { country: countrySlug, state: stateSlug, city: citySlug } = await params;
  const countries = await getAllCountriesAPI();
  const matchCountry = fromCountrySlugMatch(countrySlug, countries.map((c) => c.name));
  const country = countries.find((c) => c.name === matchCountry);
  if (!country) return { title: 'City Not Found - Web On Dev' };
  const states = await getStatesByCountryAPI(country.name);
  const matchState = fromSlugMatch(stateSlug, states.map((s) => s.name));
  const state = states.find((s) => s.name === matchState);
  if (!state) return { title: 'City Not Found - Web On Dev' };
  const cities = await getCitiesByStateAPI(country.name, state.name);
  const matchCity = fromSlugMatch(citySlug, cities.map((c) => c.name));
  const city = cities.find((c) => c.name === matchCity);
  if (!city) return { title: 'City Not Found - Web On Dev' };

  const siteUrl = getBaseUrl();
  const canonicalUrl = `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}`;

  const imageUrl = `${siteUrl}/api/images/og?title=${encodeURIComponent(`Software Development in ${city.name}`)}&subtitle=${encodeURIComponent(state.name)}`;

  return {
    title: `Software Development in ${city.name}, ${state.name} | Web On Dev`,
    description: `Professional software development, web development, and mobile app services in ${city.name}, ${state.name}, ${country.name}. Local expertise with global standards. Free consultation available.`,
    keywords: `${city.name} software development, ${city.name} web development, ${state.name} IT services, ${country.name} tech company, mobile app development ${city.name}, custom software ${city.name}`,
    authors: [{ name: 'Web On Dev', url: siteUrl }],
    alternates: { canonical: `${canonicalUrl}/` },
    openGraph: {
      title: `Software Development Services in ${city.name}, ${state.name}`,
      description: `Professional software development, web development, and mobile app services in ${city.name}, ${state.name}, ${country.name}.`,
      url: `${canonicalUrl}/`,
      type: 'website',
      siteName: 'Web On Dev',
      locale: 'en_US',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `Software Development in ${city.name} – Web On Dev`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Software Development in ${city.name}, ${state.name}`,
      description: `Professional software development services in ${city.name}, ${state.name}, ${country.name}.`,
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

export default async function CityPage({ params }: CityPageProps) {
  const { country: countrySlug, state: stateSlug, city: citySlug } = await params;
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

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Where We Serve', href: '/where-we-serve' },
    { name: country.name, href: `/where-we-serve/${toSlug(country.name)}` },
    { name: state.name, href: `/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}` },
    { name: city.name, href: `/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}`, current: true },
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
          title={`Software Development in ${city.name}`}
          subtitle={`Get expert software development services in ${city.name}, ${state.name}.`}
          flag={country.flag}
          currency={country.currencies.join(', ')}
          timezone={country.timezones[0] || ''}
        />

        {/* 3) All Services Overview */}
        <AllServicesSection
          cityName={city.name}
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
          title={`Explore services available in ${city.name}`}
          subtitle="Web, mobile, AI, design, outsourcing, cloud, DevOps, analytics, and more"
        />

        {/* 10) Stats */}
        <LocationStatsSection />

        {/* 11) Case Studies */}
        <CaseStudiesSection countryName={city.name} />

        {/* 12) Testimonials */}
        <TestimonialsSection />

        {/* 13) Dynamic FAQ */}
        <DynamicFAQ
          location={`in ${city.name}, ${state.name}`}
          service="software development"
          city={city.name}
          state={state.name}
          country={country.name}
        />

        {/* 14) Contact Form */}
        <CityContactFormSection
          cityName={city.name}
          stateName={state.name}
          countryName={country.name}
        />

        {/* 15) Primary CTA */}
        <CTASection />

        {/* JSON-LD Structured Data - Comprehensive SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
                { '@type': 'ListItem', position: 2, name: 'Where We Serve', item: `${siteUrl}/where-we-serve/` },
                { '@type': 'ListItem', position: 3, name: country.name, item: `${siteUrl}/where-we-serve/${toSlug(country.name)}/` },
                { '@type': 'ListItem', position: 4, name: state.name, item: `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/` },
                { '@type': 'ListItem', position: 5, name: city.name, item: `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/` },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              '@id': `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/#localbusiness`,
              name: `Web On Dev - ${city.name}`,
              description: `Professional software development and web development services in ${city.name}, ${state.name}, ${country.name}.`,
              url: `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/`,
              image: `${siteUrl}/images/branding/logo.png`,
              telephone: '+92-310-6803687',
              email: 'webondev@gmail.com',
              priceRange: '$$',
              areaServed: {
                '@type': 'City',
                name: city.name,
                containedInPlace: {
                  '@type': 'AdministrativeArea',
                  name: state.name,
                  containedInPlace: {
                    '@type': 'Country',
                    name: country.name,
                  },
                },
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '150',
                bestRating: '5',
                worstRating: '1',
              },
              sameAs: [
                'https://www.youtube.com/@webondev',
                'https://x.com/webon_dev',
                'https://www.facebook.com/people/Web-On-Dev/61584774954945/',
                'https://www.instagram.com/webondev/',
              ],
              parentOrganization: {
                '@type': 'Organization',
                '@id': 'https://www.webondev.com/#organization',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              '@id': `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/#service`,
              name: `Software Development Services in ${city.name}`,
              description: `Comprehensive software development, web development, mobile app development, and digital solutions in ${city.name}, ${state.name}.`,
              url: `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/`,
              areaServed: {
                '@type': 'City',
                name: city.name,
                containedInPlace: { '@type': 'AdministrativeArea', name: `${state.name}, ${country.name}` },
              },
              provider: { '@type': 'Organization', '@id': 'https://www.webondev.com/#organization' },
              serviceType: ['Web Development', 'Mobile App Development', 'Software Development', 'UI/UX Design', 'Digital Marketing'],
              offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              '@id': `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/#webpage`,
              url: `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/`,
              name: `Software Development in ${city.name}, ${state.name}`,
              description: `Professional software development services in ${city.name}, ${state.name}, ${country.name}.`,
              isPartOf: { '@id': `${siteUrl}/#website` },
              inLanguage: 'en-US',
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['h1', '.hero-subtitle', 'h2'],
              },
            }),
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
