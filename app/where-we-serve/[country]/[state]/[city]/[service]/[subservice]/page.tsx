import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LocationBreadcrumb from '@/components/pages/locations/LocationBreadcrumb';
import { getAllCountriesAPI, getStatesByCountryAPI, getCitiesByStateAPI } from '@/lib/location-api';
import { fromSlugMatch, fromCountrySlugMatch, toSlug } from '@/lib/slug';
import { getServiceBySlug } from '@/lib/site-structure';
import { getBaseUrl } from '@/lib/site-config';
import {
  ServiceHeroWithForm,
  ServiceTrustBar,
  ServicePainPoints,
  ServiceSolutions,
  ServiceWhyChooseUs,
  ServiceProcess,
  ServiceBenefits,
  ServiceTechStack,
  ServicePortfolio,
  ServicePricing,
  ServiceTestimonials,
  ServiceFAQ,
  ServiceRelated,
  ServiceCityLinks,
  ServiceCTA,
} from '@/components/services/sections';
import { getPillarServiceData } from '@/data/services/pillars';
import { getClusterServiceData } from '@/data/services/clusters';

// ISR: Revalidate every 24 hours for better SEO indexing
export const revalidate = 86400;

const serviceSlugAliases: Record<string, string> = {
  'uiux-design': 'ui-ux-design',
};

const subserviceSlugAliases: Record<string, string> = {
  'e-commerce-development': 'ecommerce-development',
  'ios-app-development': 'ios-development',
  'android-app-development': 'android-development',
  'mobile-app-maintenance': 'app-maintenance-support',
  'brand-identity-design': 'logo-design-branding',
  'prototyping': 'prototyping-wireframing',
  'search-engine-optimization': 'seo-services',
  'local-seo': 'seo-services',
  'pay-per-click-advertising': 'ppc-advertising',
  'database-design': 'database-development',
  'cloud-solutions': 'cloud-infrastructure',
  'devops-services': 'devops-automation',
  'it-consulting': 'technology-consulting',
  'custom-e-commerce-platforms': 'ecommerce-website-development',
  'inventory-management': 'inventory-management-systems',
};

const toTitleCase = (value: string) =>
  value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

interface SubServicePageProps {
  params: Promise<{
    country: string;
    state: string;
    city: string;
    service: string;
    subservice: string;
  }>;
}

export async function generateMetadata({ params }: SubServicePageProps): Promise<Metadata> {
  const { country: countrySlug, state: stateSlug, city: citySlug, service, subservice } = await params;
  const resolvedServiceSlug = serviceSlugAliases[service] || service;
  const resolvedSubserviceSlug = subserviceSlugAliases[subservice] || subservice;

  const countries = await getAllCountriesAPI();
  const matchCountry = fromCountrySlugMatch(countrySlug, countries.map((c) => c.name));
  const countryName = matchCountry || toTitleCase(countrySlug);

  const states = countryName ? await getStatesByCountryAPI(countryName) : [];
  const matchState = fromSlugMatch(stateSlug, states.map((s) => s.name));
  const stateName = matchState || toTitleCase(stateSlug);

  const cities = countryName ? await getCitiesByStateAPI(countryName, stateName) : [];
  const matchCity = fromSlugMatch(citySlug, cities.map((c) => c.name));
  const cityName = matchCity || toTitleCase(citySlug);

  // Get service info from site structure
  const serviceData = getServiceBySlug(resolvedServiceSlug, resolvedSubserviceSlug);
  const serviceTitle = serviceData?.cluster?.title ||
    subservice.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  const parentServiceTitle = serviceData?.pillar?.title ||
    service.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

  const lsi = (serviceData?.cluster?.keywords || []).slice(0, 20);
  const siteUrl = getBaseUrl();
  const canonicalUrl = `${siteUrl}/where-we-serve/${toSlug(countryName)}/${toSlug(stateName)}/${toSlug(cityName)}/${service}/${subservice}`;

  const title = `${serviceTitle} in ${cityName}, ${stateName} (4.9★ From $3K)`;
  const description = `Expert ${serviceTitle.toLowerCase()} in ${cityName}, ${stateName}, ${countryName}. Part of our ${parentServiceTitle.toLowerCase()} solutions. 500+ projects delivered. Rated 4.9/5 by 250+ clients. Get your free quote today.`;

  return {
    title,
    description,
    keywords: `${serviceTitle} ${cityName}, ${serviceTitle} ${stateName}, ${parentServiceTitle} ${cityName}, ${cityName} ${serviceTitle.toLowerCase()} company, ${countryName} ${serviceTitle.toLowerCase()}, ${lsi.join(', ')}`,
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

export default async function SubServiceInCityPage({ params }: SubServicePageProps) {
  const { country: countrySlug, state: stateSlug, city: citySlug, service, subservice } = await params;
  const resolvedServiceSlug = serviceSlugAliases[service] || service;
  const resolvedSubserviceSlug = subserviceSlugAliases[subservice] || subservice;

  const countries = await getAllCountriesAPI();
  const matchCountry = fromCountrySlugMatch(countrySlug, countries.map((c) => c.name));
  const countryName = matchCountry || toTitleCase(countrySlug);
  const country = countries.find((c) => c.name === countryName) || {
    name: countryName,
    code: countrySlug.toUpperCase(),
    flag: '',
    currencies: [],
    timezones: [],
  };

  const states = countryName ? await getStatesByCountryAPI(countryName) : [];
  const matchState = fromSlugMatch(stateSlug, states.map((s) => s.name));
  const state = states.find((s) => s.name === matchState) || { name: toTitleCase(stateSlug) };

  const cities = countryName ? await getCitiesByStateAPI(countryName, state.name) : [];
  const matchCity = fromSlugMatch(citySlug, cities.map((c) => c.name));
  const city = cities.find((c) => c.name === matchCity) || { name: toTitleCase(citySlug) };

  // Get service info from site structure
  const serviceData = getServiceBySlug(resolvedServiceSlug, resolvedSubserviceSlug);
  const serviceTitle = serviceData?.cluster?.title ||
    subservice.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  const parentServiceTitle = serviceData?.pillar?.title ||
    service.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Where We Serve', href: '/where-we-serve' },
    { name: country.name, href: `/where-we-serve/${toSlug(country.name)}` },
    { name: state.name, href: `/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}` },
    { name: city.name, href: `/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}` },
    { name: parentServiceTitle, href: `/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/${service}` },
    { name: serviceTitle, href: `/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/${service}/${subservice}`, current: true },
  ];

  const siteUrl = getBaseUrl();
  const namespacedClusterKey = `${resolvedServiceSlug}/${resolvedSubserviceSlug}`;
  const clusterData =
    getClusterServiceData(resolvedSubserviceSlug) ||
    getClusterServiceData(namespacedClusterKey) ||
    getClusterServiceData(subservice);
  const pillarData = getPillarServiceData(resolvedServiceSlug) || getPillarServiceData(service);
  const pageServiceData = clusterData || pillarData;
  const locationBaseUrl = `/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}`;
  const relatedBaseUrl = `${locationBaseUrl}/${service}`;
  const relatedServices = clusterData?.relatedServices.map((relatedService) => ({
    ...relatedService,
    slug: relatedService.slug.startsWith('/') ? relatedService.slug.slice(1) : relatedService.slug,
  })) || [];

  if (!pageServiceData) {
    notFound();
  }

  // Sibling cities for cross-linking (same subservice in nearby cities)
  const siblingCityNames = cities.map((c) => c.name);

  return (
    <div className="min-h-screen bg-[#030712]">
      <Header />
      <main>
        {/* === HOOK: Capture Attention === */}
        <LocationBreadcrumb items={breadcrumbItems} />
        <ServiceHeroWithForm
          data={pageServiceData}
          city={city.name}
          state={state.name}
          country={country.name}
        />

        {/* === TRUST: Immediate Social Proof === */}
        <ServiceTrustBar
          serviceName={serviceTitle}
          city={city.name}
          state={state.name}
          country={country.name}
        />

        {/* === AGITATE: Show the Problem === */}
        <ServicePainPoints data={pageServiceData} city={city.name} state={state.name} country={country.name} />

        {/* === SOLVE: Present Solutions === */}
        <ServiceSolutions data={pageServiceData} city={city.name} state={state.name} country={country.name} />

        {/* === DIFFERENTIATE: Why Choose Us === */}
        <ServiceWhyChooseUs
          serviceName={serviceTitle}
          city={city.name}
          state={state.name}
          country={country.name}
        />

        {/* === EDUCATE: Our Process === */}
        <ServiceProcess data={pageServiceData} city={city.name} state={state.name} country={country.name} />

        {/* === PROVE: Results & Benefits === */}
        <ServiceBenefits data={pageServiceData} city={city.name} state={state.name} country={country.name} />

        {/* === CREDENTIAL: Tech Stack === */}
        <ServiceTechStack data={pageServiceData} city={city.name} state={state.name} country={country.name} />

        {/* === SOCIAL PROOF: Portfolio === */}
        <ServicePortfolio data={pageServiceData} city={city.name} state={state.name} country={country.name} />

        {/* === CONVERT: Pricing === */}
        <ServicePricing data={pageServiceData} city={city.name} state={state.name} country={country.name} />

        {/* === VALIDATE: Testimonials === */}
        <ServiceTestimonials data={pageServiceData} city={city.name} state={state.name} country={country.name} />

        {/* === OVERCOME OBJECTIONS: FAQ === */}
        <ServiceFAQ
          data={pageServiceData}
          city={city.name}
          state={state.name}
          country={country.name}
          serviceName={serviceTitle}
        />

        {/* === CROSS-SELL: Related Services === */}
        {relatedServices.length > 0 && (
          <ServiceRelated
            services={relatedServices}
            baseUrl={relatedBaseUrl}
            currentService={resolvedSubserviceSlug}
            city={city.name}
            state={state.name}
            country={country.name}
          />
        )}

        {/* === SEO: Same Service in Sibling Cities === */}
        <ServiceCityLinks
          currentCity={city.name}
          siblingCities={siblingCityNames}
          countrySlug={toSlug(country.name)}
          stateSlug={toSlug(state.name)}
          serviceSlug={`${service}/${subservice}`}
          stateName={state.name}
        />

        {/* === FINAL CONVERT: CTA === */}
        <ServiceCTA
          data={pageServiceData}
          city={city.name}
          state={state.name}
          country={country.name}
          serviceName={serviceTitle}
        />

        {/* ============================================================ */}
        {/* JSON-LD Structured Data (Enhanced for SERP Rich Results)     */}
        {/* ============================================================ */}

        {/* BreadcrumbList */}
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
                { '@type': 'ListItem', position: 6, name: parentServiceTitle, item: `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/${service}` },
                { '@type': 'ListItem', position: 7, name: serviceTitle, item: `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/${service}/${subservice}` },
              ],
            }),
          }}
        />

        {/* Service (enhanced with offers, rating, parent service type) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              '@id': `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/${service}/${subservice}#service`,
              name: `${serviceTitle} in ${city.name}`,
              description: `Professional ${serviceTitle.toLowerCase()} services in ${city.name}, ${state.name}. Part of our ${parentServiceTitle.toLowerCase()} solutions.`,
              serviceType: serviceTitle,
              category: parentServiceTitle,
              areaServed: {
                '@type': 'City',
                name: city.name,
                containedInPlace: {
                  '@type': 'AdministrativeArea',
                  name: state.name,
                  containedInPlace: { '@type': 'Country', name: country.name },
                },
              },
              provider: {
                '@type': 'Organization',
                '@id': 'https://www.webondev.com/#organization',
                name: 'Web On Dev',
                url: 'https://www.webondev.com',
                logo: `${siteUrl}/logo.png`,
                sameAs: [
                  'https://www.linkedin.com/company/webondev',
                  'https://x.com/webon_dev',
                  'https://github.com/webondev',
                ],
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                bestRating: '5',
                worstRating: '1',
                ratingCount: '250',
                reviewCount: '250',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: `${serviceTitle} Plans`,
                itemListElement: (pageServiceData?.pricing?.plans || []).map((plan) => ({
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: `${plan.name} - ${serviceTitle}`,
                    description: plan.description,
                  },
                  price: plan.price.replace(/[^0-9.]/g, '') || '0',
                  priceCurrency: 'USD',
                })),
              },
              isRelatedTo: {
                '@type': 'Service',
                name: parentServiceTitle,
                url: `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/${service}`,
              },
            }),
          }}
        />

      </main>
      <Footer />
    </div>
  );
}
