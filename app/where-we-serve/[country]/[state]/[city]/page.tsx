import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle } from 'lucide-react';
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
import { getAllCountriesAPI, getStatesByCountryAPI, getCitiesByStateAPI } from '@/lib/location-api';
import { fromSlugMatch, toSlug } from '@/lib/slug';
import Link from 'next/link';
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
  const matchCountry = fromSlugMatch(countrySlug, countries.map((c) => c.name));
  const country = countries.find((c) => c.name === matchCountry);
  if (!country) return { title: 'City Not Found - Solutions Indicator' };
  const states = await getStatesByCountryAPI(country.name);
  const matchState = fromSlugMatch(stateSlug, states.map((s) => s.name));
  const state = states.find((s) => s.name === matchState);
  if (!state) return { title: 'City Not Found - Solutions Indicator' };
  const cities = await getCitiesByStateAPI(country.name, state.name);
  const matchCity = fromSlugMatch(citySlug, cities.map((c) => c.name));
  const city = cities.find((c) => c.name === matchCity);
  if (!city) return { title: 'City Not Found - Solutions Indicator' };

  const siteUrl = getBaseUrl();
  const canonicalUrl = `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}`;

  return {
    title: `Software Development in ${city.name}, ${state.name} - Solutions Indicator`,
    description: `Professional software development and web development services in ${city.name}, ${state.name}, ${country.name}.`,
    keywords: `${city.name}, ${state.name}, ${country.name}, software development, web development`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `Software Development in ${city.name}, ${state.name}`,
      description: `Professional software development and web development services in ${city.name}, ${state.name}, ${country.name}.`,
      url: canonicalUrl,
      type: 'website',
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { country: countrySlug, state: stateSlug, city: citySlug } = await params;
  const countries = await getAllCountriesAPI();
  const matchCountry = fromSlugMatch(countrySlug, countries.map((c) => c.name));
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

  const SectionCTA = () => (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <Link href="#book-meeting" className="flex items-center gap-2">
              Book Meeting
              <Calendar className="w-5 h-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 rounded-full border-2 hover:bg-gray-50 transform hover:scale-105 transition-all duration-300">
            <Link href="#book-meeting" className="flex items-center gap-2">
              Let's Talk
              <MessageCircle className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <LocationBreadcrumb items={breadcrumbItems} />
        <LocationHeroSection
          title={`Software Development in ${city.name}`}
          subtitle={`Get expert software development services in ${city.name}, ${state.name}.`}
          flag={country.flag}
          currency={country.currencies.join(', ')}
          timezone={country.timezones[0] || ''}
        />
        <SectionCTA />

        {/* 1) All Services Overview */}
        <AllServicesSection 
          cityName={city.name}
          countryName={country.name}
          stateName={state.name}
        />
        <SectionCTA />

        {/* 2) Local Business Outcomes */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Local business <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">outcomes</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We deliver measurable results for businesses in {city.name}. From improved search visibility to increased conversions, our solutions are designed to drive real growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Local SEO Optimization',
                  'Performance & Speed',
                  'Conversion Optimization',
                  'Mobile-First Design',
                  'Analytics & Insights',
                  'Ongoing Support'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop"
                  alt={`Software development in ${city.name}`}
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Local Results</div>
                      <div className="text-sm text-gray-600">In {city.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SectionCTA />

        {/* SEO Section: Why Solutions Indicator in {city.name}, {state.name} */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solutions Indicator</span> in {city.name}?</h2>
              <p className="text-xl text-gray-600 leading-relaxed">We build search-first websites and apps that load fast, rank high, and convert for businesses in {city.name} and surrounding areas.</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>Our city-level pages are designed to match local search intent with clean information architecture, semantic headings, and structured data. We interlink nearby areas and services to improve crawl coverage and topical authority.</p>
              <p>From performance optimization to accessibility and analytics, we ship with the fundamentals required to consistently win in organic search and deliver delightful user experiences.</p>
            </div>
          </div>
        </section>

        {/* SEO Section: How We Execute in {city.name} */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How we deliver <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">measurable results</span> in {city.name}</h3>
              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>We target common People Also Ask questions and topical clusters relevant to {city.name}. Content remains natural and helpful while incorporating semantically related terms.</p>
                <p>Technical execution includes image optimization, caching, and Core Web Vitals monitoring. We validate accessibility to ensure inclusive user journeys.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">SEO levers in focus</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• LocalBusiness and Service schema</li>
                <li>• Internal links to services and nearby areas</li>
                <li>• Semantic H2/H3 sections and anchor links</li>
                <li>• CWV and accessibility best practices</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SEO Section: City FAQs (Search-led) */}
        {/* <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Frequently searched questions in {city.name}</h3>
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed max-w-4xl">
              <details className="group border border-gray-100 rounded-2xl p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                  <span className="font-semibold text-gray-900">How quickly can we start a project in {city.name}?</span>
                  <span className="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <div className="mt-4">We typically start within 3–5 business days after scope alignment and resourcing. You will get a clear roadmap and kickoff schedule.</div>
              </details>
              <details className="group border border-gray-100 rounded-2xl p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                  <span className="font-semibold text-gray-900">Can you support local language and payment preferences?</span>
                  <span className="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <div className="mt-4">Yes—multi-language UX, localized checkout, and regional analytics are part of our delivery options.</div>
              </details>
            </div>
          </div>
        </section> */}

        {/* Full Services Directory (100+ links) */}
        <ServicesDirectorySection title={`Explore services available in ${city.name}`} subtitle="Web, mobile, AI, design, outsourcing, cloud, DevOps, analytics, and more" />

        {/* 3) Value Props */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why choose us in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{city.name}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We combine local market understanding with world-class engineering practices to deliver solutions that drive real business results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Local SEO Wins', desc: 'Rank for city-intent queries with structured data and intent-led content.' },
                { title: 'Performance', desc: 'Faster loads drive engagement and conversion—validated with field data.' },
                { title: 'Reliability', desc: 'Stable, secure infrastructure prepared for local campaigns and spikes.' },
              ].map((f) => (
                <div key={f.title} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{f.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4) Nearby Areas */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Serving <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{city.name}</span> and nearby areas
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We work with businesses across metro and surrounding regions of {city.name}. Our local presence ensures we understand the unique needs and opportunities in your area.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: 'Local Market Knowledge', desc: 'Deep understanding of {city.name} business landscape and customer behavior.' },
                  { title: 'Regional SEO Expertise', desc: 'Optimized for local search intent and regional competition.' },
                  { title: 'Community Engagement', desc: 'Active participation in local business networks and events.' },
                ].map((f) => (
                  <div key={f.title} className="p-6 bg-white rounded-2xl shadow-lg">
                    <div className="text-lg font-semibold text-gray-900 mb-2">{f.title}</div>
                    <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop"
                  alt="Local market expertise"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5) Stats */}
        <LocationStatsSection />
        <SectionCTA />

        {/* 6) Case Studies */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Case studies in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{city.name}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore successful projects that demonstrate our expertise in delivering measurable outcomes for businesses in {city.name}.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  src: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop',
                  alt: `Modern workspace for software teams in ${city.name}`
                },
                {
                  src: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop',
                  alt: `Developers collaborating on a project in ${city.name}`
                },
                {
                  src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
                  alt: `Client workshop and planning session in ${city.name}`
                }
              ].map((card, idx) => (
                <div key={idx} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img src={card.src} alt={card.alt} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-8">
                    <div className="text-sm text-blue-600 font-medium mb-2">Case Study</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Project outcome</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">Proof of outcomes in {city.name} with measurable impact and growth.</p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all duration-300">
                      View Details
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials moved below EEAT for narrative flow */}

        {/* 8) Map */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our presence in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{city.name}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We serve businesses across {city.name} and the surrounding metropolitan area with local expertise and global delivery standards.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
              <iframe title="map" className="w-full h-96" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=${encodeURIComponent(city.name)}&output=embed`}></iframe>
            </div>
          </div>
        </section>

        {/* 9) FAQs (Accordion) */}
        {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                FAQs for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{city.name}</span>
              </h2>
            </div>
            <div className="space-y-4 max-w-4xl mx-auto">
              {[
                { q: 'Do you visit on-site?', a: 'We work remote-first with optional on-site sessions for discovery and key milestones.' },
                { q: 'Can you support local language?', a: 'Yes, multi-language UX and localized content models are available.' },
                { q: 'How fast to start?', a: 'Most projects start within 3–5 business days after scoping.' },
              ].map((f) => (
                <details key={f.q} className="group border border-gray-100 rounded-2xl p-6 open:shadow-lg bg-white">
                  <summary className="flex cursor-pointer items-center justify-between">
                    <span className="font-medium text-gray-900 text-lg">{f.q}</span>
                    <span className="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                  </summary>
                  <div className="text-gray-600 mt-4 leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section> */}

        {/* 10) Tooling & Reporting */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Tooling and <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">reporting</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Expect dashboards and updates covering {city.name} performance: rankings, traffic, conversions, and Core Web Vitals. We iterate based on field data, not assumptions.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {['Lighthouse', 'Search Console', 'GA4', 'BigQuery', 'Looker', 'SpeedCurve'].map((t) => (
                <span key={t} className="px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-900 font-medium shadow-sm">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* EEAT: Awards & Trust Signals for {city.name} */}
        {/* <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Awards and certifications</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['AWS Partner', 'Google Analytics', 'WCAG Accessibility', 'ISO-aligned Practices', 'Core Web Vitals'].map((b) => (
                <span key={b} className="px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-900 font-medium shadow-sm">{b}</span>
              ))}
            </div>
          </div>
        </section> */}

        {/* EEAT: Author Bio & Editorial Standards */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who writes and reviews our content</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">Content for {city.name} is created and reviewed by senior practitioners at Solutions Indicator, ensuring technical accuracy and SEO best practices.</p>
              <p className="text-lg text-gray-700 leading-relaxed">We prioritize helpfulness, accessibility, and verifiable claims aligned to local needs.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Editorial checklist</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• Clear intent and topical focus</li>
                <li>• Semantic headings and internal links</li>
                <li>• Accessibility validation</li>
                <li>• Citations where useful</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EEAT: Sources & Citations */}
        {/* <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Citations and references</h3>
            <p className="text-lg text-gray-700 leading-relaxed">Representative sources: Google Search Central, Chrome Web Vitals, W3C WCAG, and Next.js documentation.</p>
          </div>
        </section> */}

        {/* Testimonials (after EEAT for social proof near CTA) */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What clients in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{city.name}</span> say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Hear from businesses that have experienced our local expertise and delivery standards.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                'Our local leads doubled within 60 days.',
                'Rock-solid uptime and blazing performance.',
                'Fantastic collaboration and clear reporting.',
              ].map((t, idx) => (
                <div key={idx} className="p-8 bg-white rounded-2xl shadow-lg text-gray-700">
                  <p className="leading-relaxed text-lg">"{t}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Dynamic FAQ Section */}
        <DynamicFAQ 
          location={`in ${city.name}, ${state.name}`}
          service="software development"
          city={city.name}
          state={state.name}
          country={country.name}
        />

        {/* 11) Contact Form */}
        <CityContactFormSection 
          cityName={city.name}
          stateName={state.name}
          countryName={country.name}
        />

        {/* 12) Primary CTA */}
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
              areaServed: {
                '@type': 'City',
                name: `${city.name}`,
                containedInPlace: { '@type': 'AdministrativeArea', name: `${state.name}, ${country.name}` },
              },
              provider: { '@type': 'Organization', '@id': 'https://www.solutionsindicator.com/#organization' },
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


