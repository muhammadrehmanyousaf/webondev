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

  const title = `${serviceTitle} in ${cityName}, ${stateName} (4.9★ From $3K)`;
  const description = `Expert ${serviceTitle.toLowerCase()} in ${cityName}, ${stateName}, ${countryName}. 500+ projects delivered. React, Next.js, Flutter specialists. Rated 4.9/5 by 250+ clients. Get your free ${serviceTitle.toLowerCase()} quote today.`;

  return {
    title,
    description,
    keywords: `${serviceTitle} ${cityName}, ${serviceTitle} ${stateName}, ${cityName} ${serviceTitle.toLowerCase()} company, ${countryName} ${serviceTitle.toLowerCase()}, ${lsi.join(', ')}`,
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

  // Sibling cities for cross-linking (same service in nearby cities)
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
          serviceName={serviceName}
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
          serviceName={serviceName}
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
          serviceName={serviceName}
        />

        {/* === CROSS-SELL: Related Services === */}
        {relatedServices.length > 0 && (
          <ServiceRelated
            services={relatedServices}
            baseUrl={relatedBaseUrl}
            currentService={resolvedServiceSlug}
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
          serviceSlug={service}
          stateName={state.name}
        />

        {/* === FINAL CONVERT: CTA === */}
        <ServiceCTA
          data={pageServiceData}
          city={city.name}
          state={state.name}
          country={country.name}
          serviceName={serviceName}
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
                { '@type': 'ListItem', position: 6, name: serviceTitle, item: `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/${toSlug(serviceTitle)}` },
              ],
            }),
          }}
        />

        {/* Service (enhanced with offers, rating, FAQ) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              '@id': `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/${toSlug(serviceTitle)}#service`,
              name: `${serviceName} in ${city.name}`,
              description: `Professional ${serviceName.toLowerCase()} services in ${city.name}, ${state.name}. Expert development team delivering world-class solutions.`,
              serviceType: serviceName,
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
                  'https://twitter.com/webondev',
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
                name: `${serviceName} Plans`,
                itemListElement: (pageServiceData?.pricing?.plans || []).map((plan, i) => ({
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: `${plan.name} - ${serviceName}`,
                    description: plan.description,
                  },
                  price: plan.price.replace(/[^0-9.]/g, '') || '0',
                  priceCurrency: 'USD',
                  priceSpecification: {
                    '@type': 'PriceSpecification',
                    price: plan.price.replace(/[^0-9.]/g, '') || '0',
                    priceCurrency: 'USD',
                    ...(plan.billingPeriod ? { unitText: plan.billingPeriod } : {}),
                  },
                })),
              },
              ...(pageServiceData?.faqs && pageServiceData.faqs.length > 0
                ? {}
                : {}),
            }),
          }}
        />

        {/* FAQPage schema for rich results */}
        {pageServiceData?.faqs && pageServiceData.faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: pageServiceData.faqs.slice(0, 10).map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
        )}

        {/* SpeakableSpecification */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['h1', '.prose p:first-of-type'],
              },
            }),
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
