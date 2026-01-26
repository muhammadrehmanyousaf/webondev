import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LocationBreadcrumb from '@/components/pages/locations/LocationBreadcrumb';
import { getAllCountriesAPI, getStatesByCountryAPI, getCitiesByStateAPI } from '@/lib/location-api';
import { fromSlugMatch, fromCountrySlugMatch, toSlug } from '@/lib/slug';
import { enrichedSiteStructure } from '@/lib/site-structure';
import { getBaseUrl } from '@/lib/site-config';
import {
  ServiceHeroWithForm,
  ServicePainPoints,
  ServiceSolutions,
  ServiceProcess,
  ServiceBenefits,
  ServiceTechStack,
  ServicePortfolio,
  ServicePricing,
  ServiceTestimonials,
  ServiceFAQ,
  ServiceRelated,
  ServiceCTA,
} from '@/components/services/sections';
import { getPillarServiceData } from '@/data/services/pillars';
import { getClusterServiceData } from '@/data/services/clusters';
import { staticCities, staticCountries } from '@/lib/location-static-data';

// ISR: Revalidate every 30 days (content doesn't change) - maximum cost savings
export const revalidate = 2592000;

// Allow dynamic pages for services not in staticParams
export const dynamicParams = true;

// Generate static params for TOP cities + all pillar services at BUILD TIME
export async function generateStaticParams() {
  const params: { country: string; state: string; city: string; service: string }[] = [];

  // Get all pillar service slugs (main services)
  const pillarSlugs = enrichedSiteStructure.map(p => p.slug);

  // Generate for top 50 cities (most important for SEO)
  const topCities = staticCities.slice(0, 50);

  for (const city of topCities) {
    const country = staticCountries.find(c => c.name === city.countryName);
    if (country) {
      for (const serviceSlug of pillarSlugs) {
        params.push({
          country: toSlug(country.name),
          state: toSlug(city.stateName),
          city: toSlug(city.name),
          service: serviceSlug,
        });
      }
    }
  }

  return params;
}

type ServiceAlias = {
  slug: string;
  pillarSlug?: string;
};

const serviceSlugAliases: Record<string, ServiceAlias> = {
  'e-commerce-development': { slug: 'ecommerce-development', pillarSlug: 'web-development' },
  'ios-app-development': { slug: 'ios-development', pillarSlug: 'mobile-development' },
  'android-app-development': { slug: 'android-development', pillarSlug: 'mobile-development' },
  'mobile-app-maintenance': { slug: 'app-maintenance-support', pillarSlug: 'mobile-development' },
  'uiux-design': { slug: 'ui-ux-design', pillarSlug: 'ui-ux-design' },
  'brand-identity-design': { slug: 'logo-design-branding', pillarSlug: 'ui-ux-design' },
  'prototyping': { slug: 'prototyping-wireframing', pillarSlug: 'ui-ux-design' },
  'search-engine-optimization': { slug: 'seo-services', pillarSlug: 'digital-marketing' },
  'local-seo': { slug: 'seo-services', pillarSlug: 'digital-marketing' },
  'pay-per-click-advertising': { slug: 'ppc-advertising', pillarSlug: 'digital-marketing' },
  'database-design': { slug: 'database-development', pillarSlug: 'software-development' },
  'cloud-solutions': { slug: 'cloud-infrastructure', pillarSlug: 'cloud-devops' },
  'devops-services': { slug: 'devops-automation', pillarSlug: 'cloud-devops' },
  'it-consulting': { slug: 'technology-consulting', pillarSlug: 'consulting-strategy' },
  'custom-e-commerce-platforms': { slug: 'ecommerce-website-development', pillarSlug: 'ecommerce-solutions' },
  'inventory-management': { slug: 'inventory-management-systems', pillarSlug: 'ecommerce-solutions' },
};

const toTitleCase = (value: string) =>
  value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

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
  const serviceAlias = serviceSlugAliases[service];
  const resolvedServiceSlug = serviceAlias?.slug || service;
  const countries = await getAllCountriesAPI();
  const matchCountry = fromCountrySlugMatch(countrySlug, countries.map((c) => c.name));
  const countryName = matchCountry || toTitleCase(countrySlug);
  const states = countryName ? await getStatesByCountryAPI(countryName) : [];
  const matchState = fromSlugMatch(stateSlug, states.map((s) => s.name));
  const stateName = matchState || toTitleCase(stateSlug);
  const cities = countryName ? await getCitiesByStateAPI(countryName, stateName) : [];
  const matchCity = fromSlugMatch(citySlug, cities.map((c) => c.name));
  const cityName = matchCity || toTitleCase(citySlug);
  const serviceTitle = service.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  const allClusters = enrichedSiteStructure.flatMap(p => p.clusters.map(c => ({ pillar: p.slug, ...c })));
  const matched = allClusters.find(c => c.slug === resolvedServiceSlug);
  const lsi = (matched?.keywords || []).slice(0, 20);

  const siteUrl = getBaseUrl();
  const canonicalUrl = `${siteUrl}/where-we-serve/${toSlug(countryName)}/${toSlug(stateName)}/${toSlug(cityName)}/${toSlug(serviceTitle)}`;

  return {
    title: `${serviceTitle} in ${cityName}, ${stateName} - Web On Dev`,
    description: `Hire expert ${serviceTitle.toLowerCase()} services in ${cityName}, ${stateName}, ${countryName}. Local expertise with global standards.`,
    keywords: `${serviceTitle}, ${cityName}, ${stateName}, ${countryName}, ${lsi.join(', ')}`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${serviceTitle} in ${cityName}, ${stateName}`,
      description: `Hire expert ${serviceTitle.toLowerCase()} services in ${cityName}, ${stateName}, ${countryName}.`,
      url: canonicalUrl,
      type: 'website',
    },
  };
}

export default async function ServiceInCityPage({ params }: ServicePageProps) {
  const { country: countrySlug, state: stateSlug, city: citySlug, service } = await params;
  const serviceAlias = serviceSlugAliases[service];
  const resolvedServiceSlug = serviceAlias?.slug || service;
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

  const serviceTitle = service.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  const allClusters = enrichedSiteStructure.flatMap((pillar) =>
    pillar.clusters.map((cluster) => ({ pillarSlug: pillar.slug, cluster }))
  );
  const matchedPillar = enrichedSiteStructure.find((pillar) => pillar.slug === resolvedServiceSlug);
  const matchedCluster = allClusters.find((item) => item.cluster.slug === resolvedServiceSlug);
  const pillarSlug = serviceAlias?.pillarSlug || matchedCluster?.pillarSlug || matchedPillar?.slug || resolvedServiceSlug;

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Where We Serve', href: '/where-we-serve' },
    { name: country.name, href: `/where-we-serve/${toSlug(country.name)}` },
    { name: state.name, href: `/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}` },
    { name: city.name, href: `/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}` },
    { name: serviceTitle, href: `/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/${toSlug(serviceTitle)}`, current: true },
  ];

  const siteUrl = getBaseUrl();
  const namespacedClusterKey = matchedCluster
    ? `${matchedCluster.pillarSlug}/${resolvedServiceSlug}`
    : serviceAlias?.pillarSlug
    ? `${serviceAlias.pillarSlug}/${resolvedServiceSlug}`
    : null;
  const clusterData =
    getClusterServiceData(resolvedServiceSlug) ||
    (namespacedClusterKey ? getClusterServiceData(namespacedClusterKey) : null) ||
    (matchedCluster ? getClusterServiceData(matchedCluster.cluster.slug) : null);
  const pillarData = getPillarServiceData(pillarSlug) || getPillarServiceData(resolvedServiceSlug);
  const pageServiceData = clusterData || pillarData;
  const locationBaseUrl = `/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}`;
  const relatedBaseUrl = matchedCluster || clusterData ? `${locationBaseUrl}/${pillarSlug}` : locationBaseUrl;
  const relatedServices = pageServiceData?.relatedServices?.map((relatedService) => ({
    ...relatedService,
    slug: relatedService.slug.startsWith('/') ? relatedService.slug.slice(1) : relatedService.slug,
  })) || [];
  const serviceName = pageServiceData?.name || matchedCluster?.cluster.title || matchedPillar?.title || serviceTitle;

  if (!pageServiceData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        {/* 1) Breadcrumb */}
        <LocationBreadcrumb items={breadcrumbItems} />

        <>
          {/* Service Sections */}
          <ServiceHeroWithForm
            data={pageServiceData}
            city={city.name}
            state={state.name}
            country={country.name}
          />
          <ServicePainPoints data={pageServiceData} />
          <ServiceSolutions data={pageServiceData} />
          <ServiceProcess data={pageServiceData} />
          <ServiceBenefits data={pageServiceData} />
          <ServiceTechStack data={pageServiceData} />
          <ServicePortfolio data={pageServiceData} />
          <ServicePricing data={pageServiceData} />
          <ServiceTestimonials data={pageServiceData} />
          <ServiceFAQ
            data={pageServiceData}
            city={city.name}
            state={state.name}
            country={country.name}
            serviceName={serviceName}
          />
          {relatedServices.length > 0 && (
            <ServiceRelated
              services={relatedServices}
              baseUrl={relatedBaseUrl}
              currentService={resolvedServiceSlug}
            />
          )}
          <ServiceCTA
            data={pageServiceData}
            city={city.name}
            serviceName={serviceName}
          />
        </>

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
              name: serviceName,
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
