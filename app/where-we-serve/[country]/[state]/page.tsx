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
import CitiesOverviewSection from '@/components/sections/where-we-serve/CitiesOverviewSection';
import CaseStudiesSection from '@/components/sections/where-we-serve/CaseStudiesSection';
import TestimonialsSection from '@/components/sections/where-we-serve/TestimonialsSection';
import ServicesDirectorySection from '@/components/sections/where-we-serve/ServicesDirectorySection';
import { getAllCountriesAPI, getStatesByCountryAPI, getCitiesByStateAPI } from '@/lib/location-api';
import { fromSlugMatch, toSlug } from '@/lib/slug';
import { getBaseUrl } from '@/lib/site-config';
import DynamicFAQ from '@/components/ui/DynamicFAQ';
import Link from 'next/link';
interface StatePageProps {
  params: Promise<{
    country: string;
    state: string;
  }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: StatePageProps): Promise<Metadata> {
  const { country: countrySlug, state: stateSlug } = await params;
  const countries = await getAllCountriesAPI();
  const matchCountry = fromSlugMatch(countrySlug, countries.map((c) => c.name));
  const country = countries.find((c) => c.name === matchCountry);
  if (!country) return { title: 'State Not Found - Solutions Indicator' };
  const states = await getStatesByCountryAPI(country.name);
  const matchState = fromSlugMatch(stateSlug, states.map((s) => s.name));
  const state = states.find((s) => s.name === matchState);
  if (!state) return { title: 'State Not Found - Solutions Indicator' };
  const siteUrl = getBaseUrl();
  const canonicalUrl = `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}`;
  return {
    title: `Software Development in ${state.name}, ${country.name} - Solutions Indicator`,
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
  const matchCountry = fromSlugMatch(countrySlug, countries.map((c) => c.name));
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
          title={`Software Development in ${state.name}`}
          subtitle={`Local expertise in ${state.name}, ${country.name}.`}
          flag={country.flag}
          currency={country.currencies.join(', ')}
          timezone={country.timezones[0] || ''}
        />
        <SectionCTA />

        {/* 1) Cities Overview */}
        <CitiesOverviewSection 
          cities={cities} 
          countryName={country.name} 
          stateName={state.name} 
        />
        <SectionCTA />

        {/* 2) Regional Expertise */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Regional expertise in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{state.name}</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We tailor delivery to regional realities—devices, bandwidth, and search behavior—while keeping a consistent engineering baseline. Our teams understand local market dynamics and user expectations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Local Market Research',
                  'Regional SEO Strategy',
                  'Compliance & Regulations',
                  'Time Zone Optimization',
                  'Local Payment Integration',
                  'Regional Analytics'
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
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop"
                  alt={`Software development in ${state.name}`}
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
                      <div className="font-bold text-gray-900">Regional Delivery</div>
                      <div className="text-sm text-gray-600">Tailored to {state.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SectionCTA />

        {/* SEO Section: Why Solutions Indicator in {state.name}, {country.name} */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why partner with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solutions Indicator</span> in {state.name}?</h2>
              <p className="text-xl text-gray-600 leading-relaxed">We align engineering, design, and SEO to the realities of {state.name}. From local intent to accessibility, our builds are crafted to rank and convert.</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>We map service clusters to search demand in {state.name} and interlink cities to strengthen topical authority. Semantic headings, internal anchors, and descriptive copy make it easier for users and crawlers to understand your offering.</p>
              <p>Our delivery includes Core Web Vitals optimization, structured data for services and locations, and analytics instrumentation to measure the impact of content and UX improvements.</p>
            </div>
          </div>
        </section>

        {/* SEO Section: How We Execute in {state.name} */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How we achieve <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">results</span> across {state.name}
              </h3>
              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>We structure pages to capture featured snippets and PAA questions relevant to {state.name}. Content blocks target LSI themes without keyword stuffing, keeping copy natural and helpful.</p>
                <p>Technical execution covers asset optimization, caching, and accessibility. We test on real devices and networks common in {state.name} to ensure consistent performance.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">SEO levers in focus</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• Topical clustering and internal linking</li>
                <li>• JSON-LD for Service, Breadcrumb, and LocalBusiness</li>
                <li>• CWV budgets and image optimization</li>
                <li>• Accessible components and semantic HTML</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SEO Section: FAQs for {state.name} */}
        {/* <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Frequently searched questions about {state.name}</h3>
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed max-w-4xl">
              <details className="group border border-gray-100 rounded-2xl p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                  <span className="font-semibold text-gray-900">How quickly can we kick off in {state.name}?</span>
                  <span className="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <div className="mt-4">Most engagements start within 3–5 business days. We finalize scope, schedule overlap hours, and begin sprint 0.</div>
              </details>
              <details className="group border border-gray-100 rounded-2xl p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                  <span className="font-semibold text-gray-900">Do you support regional pricing and currency?</span>
                  <span className="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <div className="mt-4">Yes—where applicable, we present invoices and pricing in local currency with compliant tax handling.</div>
              </details>
            </div>
          </div>
        </section> */}

        {/* Full Services Directory (100+ links) */}
        <ServicesDirectorySection title={`Explore services for ${state.name}, ${country.name}`} subtitle="Web, mobile, AI, design, outsourcing, cloud, DevOps, analytics, and more" />
        <SectionCTA />

        {/* 3) Services Overview */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Popular services in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{state.name}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our core services are engineered for discoverability, speed, and conversion—backed by a modern toolchain and rigorous QA.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Web Development', desc: 'SEO-first websites meeting Core Web Vitals with localized content structures.' },
                { title: 'Mobile Apps', desc: 'Android/iOS tailored to regional needs, accessibility, and analytics.' },
                { title: 'UI/UX Design', desc: 'Research-backed, inclusive design for conversion and retention.' },
                { title: 'Analytics', desc: 'Privacy-aware measurement with actionable growth insights.' },
              ].map((s, index) => (
                <div key={s.title} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{s.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5) Stats */}
        <LocationStatsSection />
        <SectionCTA />

        {/* 6) Case Studies (with modal) */}
        <CaseStudiesSection countryName={state.name} />
        <SectionCTA />

        {/* EEAT: Awards & Trust Signals */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Awards and certifications</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['AWS Partner', 'Google Analytics', 'WCAG Accessibility', 'ISO-aligned Practices', 'Core Web Vitals'].map((b) => (
                <span key={b} className="px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-900 font-medium shadow-sm">{b}</span>
              ))}
            </div>
          </div>
        </section>

        {/* EEAT: Author Bio & Editorial Standards */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our editorial standards</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">Solutions Indicator content is produced and reviewed by senior practitioners. Each page for {state.name} undergoes technical, SEO, and accessibility checks.</p>
              <p className="text-lg text-gray-700 leading-relaxed">We update content as standards evolve to keep guidance accurate and useful.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Checklist</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• Search intent and topical alignment</li>
                <li>• Semantic headings and internal linking</li>
                <li>• Accessibility and inclusive UX</li>
                <li>• References to primary sources where helpful</li>
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

        {/* 7) Testimonials (homepage-style slider) */}
        <TestimonialsSection />
        <SectionCTA />

        {/* Dynamic FAQ Section */}
        <DynamicFAQ 
          location={`in ${state.name}, ${country.name}`}
          service="software development"
          city="major cities"
          state={state.name}
          country={country.name}
        />

        {/* 9) Primary CTA */}
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: `Which cities in ${state.name} are supported?`,
                  acceptedAnswer: { '@type': 'Answer', text: `We serve all major cities across ${state.name} with local alignment and consistent delivery.` }
                },
                {
                  '@type': 'Question',
                  name: 'Do you support local compliance and payments?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Yes—regional compliance and currency/tax settings are supported.' }
                },
                {
                  '@type': 'Question',
                  name: 'How soon can we start?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Most engagements start in 3–5 business days post-scope alignment.' }
                }
              ]
            })
          }}
        />
      </main>
      <Footer />
    </div>
  );
}


