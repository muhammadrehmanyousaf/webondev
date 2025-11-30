import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LocationHeroSection from '@/components/pages/locations/LocationHeroSection';
import CTASection from '@/components/sections/CTASection';
import LocalTeamsSection from '@/components/sections/where-we-serve/LocalTeamsSection';
import OutcomesSection from '@/components/sections/where-we-serve/OutcomesSection';
import WebDevelopmentSection from '@/components/sections/where-we-serve/WebDevelopmentSection';
import MobileAppsSection from '@/components/sections/where-we-serve/MobileAppsSection';
import IndustryFitSection from '@/components/sections/where-we-serve/IndustryFitSection';
import ValuePropsSection from '@/components/sections/where-we-serve/ValuePropsSection';
import TestimonialsSection from '@/components/sections/where-we-serve/TestimonialsSection';
import ServicesDirectorySection from '@/components/sections/where-we-serve/ServicesDirectorySection';
import { getAllCountriesAPI } from '@/lib/location-api';
import LocationCountriesSection from '@/components/pages/locations/LocationCountriesSection';
import LocationStatsSection from '@/components/pages/locations/LocationStatsSection';
import { toSlug } from '@/lib/slug';
import { getBaseUrl } from '@/lib/site-config';
import WhereWeServeSchema from '@/components/schema/WhereWeServeSchema';
import DynamicFAQ from '@/components/ui/DynamicFAQ';

const siteUrl = getBaseUrl();

export const metadata: Metadata = {
  title: 'Where We Serve - Global Software Development Services | Solutions Indicator',
  description: 'Explore our global presence with software development services across multiple countries. Local expertise with global standards in web development, mobile apps, and digital solutions.',
  keywords: 'global software development, international IT services, software development worldwide, web development services, mobile app development, digital solutions',
  alternates: { canonical: `${siteUrl}/where-we-serve/` },
  openGraph: {
    title: 'Where We Serve - Global Software Development Services',
    description: 'Explore our global presence with software development services across multiple countries.',
    url: `${siteUrl}/where-we-serve/`,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/api/images/og?title=Where%20We%20Serve&subtitle=Solutions%20Indicator`,
        width: 1200,
        height: 630,
        alt: 'Where We Serve – Solutions Indicator'
      }
    ]
  },
};

export const dynamic = 'force-dynamic';

export default async function WhereWeServePage() {
  const countries = await getAllCountriesAPI();

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
        <LocationHeroSection />
        <SectionCTA />

        {/* 1) Countries Grid */}
        <LocationCountriesSection countries={countries} />
        <SectionCTA />

        {/* 2) Local Teams Section */}
        <LocalTeamsSection />
        <SectionCTA />

        {/* 3) Outcomes Section */}
        <OutcomesSection />
        <SectionCTA />

        {/* 4) Web Development Section */}
        <WebDevelopmentSection />
        <SectionCTA />

        {/* 5) Mobile Apps Section */}
        <MobileAppsSection />
        <SectionCTA />

        {/* 6) Industry Fit Section */}
        <IndustryFitSection />
        <SectionCTA />

        {/* 7) Stats */}
        <LocationStatsSection />
        <SectionCTA />

        {/* 8) Value Props Section */}
        <ValuePropsSection />
        <SectionCTA />

        {/* 9) Testimonials Section (moved below EEAT for stronger narrative) */}
        

        {/* SEO Section: Why Choose Solutions Indicator */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solutions Indicator</span> for global delivery?</h2>
              <p className="text-xl text-gray-600 leading-relaxed">We specialize in search-first, conversion-focused software that pairs modern engineering with market-aware content. Our team builds websites, apps, and analytics pipelines that rank, load fast, and convert—across languages, currencies, and regulations.</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>Across countries and regions, businesses need a partner who understands technical SEO, Core Web Vitals, accessibility, and structured data. We architect scalable Next.js experiences with server rendering, progressive enhancement, and schema markup to help you win featured snippets, People Also Ask, and map packs. Our playbook blends on-page optimization with clean information architecture, internal linking, and semantic headings that search engines understand.</p>
              <p className="font-semibold">Semantic & LSI coverage we target:</p>
              <ul>
                <li>Entity-driven content (organization, service, city, state, country) with JSON-LD</li>
                <li>Programmatic SEO patterns (country → state → city → service) with canonical logic</li>
                <li>Topical clustering and related services interlinking</li>
                <li>Local SEO: NAP consistency, GMB alignment, local citations, regional intent</li>
                <li>Performance (LCP, INP, CLS), accessibility (WCAG), mobile-first UX</li>
                <li>Image optimization, alt text, captions, and media schema</li>
              </ul>
              <p>Whether launching a new product or expanding into new markets, we align content, design, and engineering to commercial outcomes. From programmatic location pages to localized service clusters, we create durable content assets that compound results over time.</p>
            </div>
          </div>
        </section>
        <SectionCTA />

        {/* SEO Section: How We Deliver Results */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How we deliver measurable search and revenue outcomes</h3>
              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>We start with intent research and entity mapping to align your pages to search demand. Each page gets a clear topical focus with semantically related terms (LSI) woven naturally into headings and paragraphs. We use internal links, breadcrumbs, and blocks like FAQs to improve discoverability and crawl paths.</p>
                <p>On the technical side, we optimize image delivery, caching, and streaming to pass Core Web Vitals in field data. Our components are accessible by default, meeting WCAG guidance for keyboard navigation, contrast, and screen readers.</p>
                <p>We add Organization, Service, and LocalBusiness schema where applicable to strengthen your Knowledge Graph presence and improve eligibility for rich results. We also add BreadcrumbList, ItemList, and FAQPage schema to enhance SERP presence.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">SEO levers we focus on</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• Semantic headings (H2/H3), anchor links, and internal linking</li>
                <li>• JSON-LD for Organization, Service, BreadcrumbList, ItemList, FAQPage</li>
                <li>• Programmatic SEO models (country/state/city/service)</li>
                <li>• Performance budgets and CWV monitoring (LCP, INP, CLS)</li>
                <li>• Multilingual and regional compliance (hreflang, currency, tax)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SEO Section: Comprehensive Local & Service LSI Glossary */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Local & service LSI glossary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Local signals</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>city service providers, near me solutions, regional agency</li>
                  <li>local SEO, Google Business Profile optimization, citations</li>
                  <li>reviews & reputation, directions, contact, opening hours</li>
                  <li>service availability by neighborhood/metro, multilingual support</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Service semantics</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>custom development, integration, migration, optimization</li>
                  <li>performance, accessibility, security, scalability</li>
                  <li>analytics, experimentation, CRO, A/B testing</li>
                  <li>architecture, cloud, automation, observability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Section: Top Global Services */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Top services we deliver worldwide</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
                title: 'SEO-first Web Development',
                desc: 'Accessible, fast, and crawlable websites engineered to rank and convert.'
              },{
                title: 'Mobile App Development',
                desc: 'Native and cross-platform apps with analytics and growth built-in.'
              },{
                title: 'Ecommerce & Payments',
                desc: 'Localized catalog, tax, and checkout for cross-border growth.'
              }].map((s) => (
                <div key={s.title} className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{s.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Services Directory (100+ links) */}
        <ServicesDirectorySection />
        <SectionCTA />

        {/* EEAT Section: Awards & Trust Signals (Global) */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Awards, certifications, and trust signals</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['AWS Partner', 'Google Analytics', 'WCAG Accessibility', 'ISO-aligned Practices', 'Core Web Vitals'].map((b) => (
                <span key={b} className="px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-900 font-medium shadow-sm">{b}</span>
              ))}
            </div>
          </div>
        </section>

        {/* EEAT Section: Author Bio & Editorial Standards */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who writes and reviews our content</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">Our content is produced by senior engineers and growth strategists at Solutions Indicator, and reviewed for technical accuracy, accessibility, and SEO best practices.</p>
              <p className="text-lg text-gray-700 leading-relaxed">We maintain an editorial process that prioritizes helpfulness and clarity: research → drafting → technical review → SEO and accessibility checks → final approval.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Editorial checklist</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• Align to search intent and user tasks</li>
                <li>• Use semantic headings and descriptive links</li>
                <li>• Validate accessibility and inclusive language</li>
                <li>• Provide sources for claims where applicable</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EEAT Section: Sources & Citations */}
        {/* <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Citations and references</h3>
            <div className="text-gray-700 text-lg leading-relaxed space-y-3">
              <p>We reference primary documentation and industry standards to ensure accuracy. Representative sources include: Next.js docs, W3C WCAG, Google Search Central, and Chrome Web Vitals guidance.</p>
            </div>
          </div>
        </section> */}

        {/* Dynamic FAQ Section */}
        <DynamicFAQ 
          location="globally"
          service="software development"
          city="New York"
          state="NY"
          country="United States"
        />

        {/* Testimonials Section (after EEAT and FAQs for social proof near CTA) */}
        <TestimonialsSection />
        <SectionCTA />

        {/* 10) Primary CTA */}
        <CTASection />

        {/* Comprehensive Schema Markup */}
        <WhereWeServeSchema countries={countries} siteUrl={siteUrl} />
        
        {/* Additional Page-Specific Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Where We Serve',
              description: 'Global locations where Solutions Indicator delivers software development services.',
              hasPart: countries.map((c: any) => ({
                '@type': 'WebPage',
                name: `Software Development in ${c.name}`,
                url: `${siteUrl}/where-we-serve/${toSlug(c.name)}`,
              })),
              publisher: {
                '@type': 'Organization',
                name: 'Solutions Indicator',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Supported Countries',
              itemListElement: countries.map((c: any, index: number) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: c.name,
                url: `${siteUrl}/where-we-serve/${toSlug(c.name)}`,
              })),
            }),
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
