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
import NearbyLocationsSection from '@/components/sections/where-we-serve/NearbyLocationsSection';
import ProcessSection from '@/components/sections/where-we-serve/ProcessSection';
import TechStackSection from '@/components/sections/where-we-serve/TechStackSection';
import PricingOverviewSection from '@/components/sections/where-we-serve/PricingOverviewSection';

interface CityPageProps {
  params: Promise<{
    country: string;
    state: string;
    city: string;
  }>;
}

// ISR: Revalidate every 24 hours for better SEO indexing
export const revalidate = 86400;

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

  // Varied title/description templates based on location hash for uniqueness
  const locationHash = (city.name.length + state.name.length + country.name.length) % 5;
  const titles = [
    `#1 Software Development in ${city.name}, ${state.name} (From $3K)`,
    `${city.name} Software Development - 500+ Projects Delivered`,
    `Web & App Development in ${city.name} - 4.9★ Rated Agency`,
    `Hire ${city.name} Developers - Web, Mobile & Custom Software`,
    `Software Development Company in ${city.name} (Free Quote)`,
  ];
  const descriptions = [
    `Top-rated software development in ${city.name}, ${state.name}. We build websites, mobile apps & custom software from $3,000. 500+ projects across ${country.name}. React, Next.js, Flutter experts. Free consultation.`,
    `Looking for developers in ${city.name}? Web On Dev delivers websites, apps & custom software rated 4.9★ by 250+ clients. Serving ${city.name}, ${state.name} with ${country.name}-wide support. Get your free quote.`,
    `${city.name}'s trusted software agency. Web development, mobile apps, UI/UX & digital marketing starting $3K. 500+ projects in 50+ countries incl. ${country.name}. Book free 30-min consultation today.`,
    `Expert web & mobile app development for ${city.name} businesses. Next.js, React, Flutter specialists. 4.9★ rated, 250+ happy clients. Local ${state.name} team, global quality. Free project estimate.`,
    `Custom software solutions in ${city.name}, ${state.name}. From startup MVPs to enterprise platforms. Rated 4.9/5 by 250+ clients in ${country.name} & 50+ countries. Schedule your free strategy call.`,
  ];

  return {
    title: titles[locationHash],
    description: descriptions[locationHash],
    keywords: `${city.name} software development, ${city.name} web development, ${city.name} app development, web developer ${city.name}, mobile app developer ${city.name} ${state.name}, custom software ${city.name} ${country.name}`,
    authors: [{ name: 'Web On Dev', url: siteUrl }],
    alternates: { canonical: `${canonicalUrl}/` },
    openGraph: {
      title: titles[locationHash],
      description: descriptions[locationHash],
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
      title: titles[locationHash],
      description: descriptions[locationHash],
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
          title={(() => {
            const h1s = [
              `Software Development in ${city.name}`,
              `Top Developers in ${city.name}`,
              `${city.name} Software Agency`,
              `Web & App Development in ${city.name}`,
              `Hire Developers in ${city.name}`,
            ];
            return h1s[(city.name.length + state.name.length + country.name.length) % h1s.length];
          })()}
          subtitle={(() => {
            const subs = [
              `Delivering high-performance websites, mobile apps, and custom software for ${city.name}, ${state.name} businesses. 500+ projects. 4.9★ rated. From $3,000.`,
              `Your trusted ${city.name} software partner. We build scalable web apps, native mobile apps, and enterprise platforms that drive revenue across ${state.name}.`,
              `Expert developers serving ${city.name}, ${state.name}. From startup MVPs to enterprise systems—on time, on budget, built to scale.`,
              `Full-stack development for ${city.name} companies. React, Next.js, Flutter, Node.js specialists with 250+ happy clients across ${country.name}.`,
              `Looking for developers in ${city.name}? We deliver SEO-optimized websites, cross-platform apps, and custom software rated 4.9/5 by clients worldwide.`,
            ];
            return subs[(city.name.length + state.name.length + country.name.length) % subs.length];
          })()}
          flag={country.flag}
          currency={country.currencies.join(', ')}
          timezone={country.timezones[0] || ''}
          locationName={city.name}
        />

        {/* 3) Trust Stats — immediate social proof after hero */}
        <LocationStatsSection cityName={city.name} stateName={state.name} countryName={country.name} />

        {/* 4) Services Overview — answers search intent */}
        <AllServicesSection cityName={city.name} countryName={country.name} stateName={state.name} />

        {/* 5) How We Work — reduces uncertainty, builds confidence */}
        <ProcessSection cityName={city.name} stateName={state.name} countryName={country.name} />

        {/* 6) Outcomes — why choose us, measurable results */}
        <OutcomesSection cityName={city.name} stateName={state.name} countryName={country.name} />

        {/* 7) Web Development — service deep-dive */}
        <WebDevelopmentSection cityName={city.name} stateName={state.name} countryName={country.name} />

        {/* 8) Mobile Apps — service deep-dive */}
        <MobileAppsSection cityName={city.name} stateName={state.name} countryName={country.name} />

        {/* 9) Tech Stack — credibility with technical buyers */}
        <TechStackSection cityName={city.name} stateName={state.name} countryName={country.name} />

        {/* 10) Industry Fit — vertical expertise */}
        <IndustryFitSection cityName={city.name} stateName={state.name} countryName={country.name} />

        {/* 11) Local Teams — local relevance */}
        <LocalTeamsSection cityName={city.name} stateName={state.name} countryName={country.name} />

        {/* 12) Case Studies — proof of delivery */}
        <CaseStudiesSection cityName={city.name} stateName={state.name} countryName={country.name} />

        {/* 13) Testimonials — voice of the customer */}
        <TestimonialsSection cityName={city.name} stateName={state.name} countryName={country.name} />

        {/* 14) Pricing — transparency drives leads */}
        <PricingOverviewSection cityName={city.name} stateName={state.name} countryName={country.name} />

        {/* 15) Services Directory — deep navigation */}
        <ServicesDirectorySection
          title={`Explore services available in ${city.name}`}
          subtitle="Web, mobile, AI, design, outsourcing, cloud, DevOps, analytics, and more"
        />

        {/* 16) FAQ — long-tail SEO + objection handling */}
        <DynamicFAQ
          location={`in ${city.name}, ${state.name}`}
          service="software development"
          city={city.name}
          state={state.name}
          country={country.name}
        />

        {/* 17) Cross-Links — internal linking for SEO */}
        <NearbyLocationsSection
          currentName={city.name}
          type="city"
          siblings={cities.map((c: any) => c.name)}
          parentPath={`/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}`}
          parentName={state.name}
        />

        {/* 18) Contact Form — lead capture */}
        <CityContactFormSection cityName={city.name} stateName={state.name} countryName={country.name} />

        {/* 19) Final CTA */}
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
              email: 'webondev786@gmail.com',
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
