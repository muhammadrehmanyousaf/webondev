import React from 'react';
import Link from 'next/link';
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
import CaseStudiesSection from '@/components/sections/where-we-serve/CaseStudiesSection';
import TestimonialsSection from '@/components/sections/where-we-serve/TestimonialsSection';
import ServicesDirectorySection from '@/components/sections/where-we-serve/ServicesDirectorySection';
import { getAllCountriesAPI, getStatesByCountryAPI } from '@/lib/location-api';
import { fromSlugMatch, toSlug } from '@/lib/slug';
import { getBaseUrl } from '@/lib/site-config';
import DynamicFAQ from '@/components/ui/DynamicFAQ';


interface CountryPageProps {
  params: Promise<{
    country: string;
  }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const countries = await getAllCountriesAPI();
  const matchName = fromSlugMatch(resolvedParams.country, countries.map((c) => c.name));
  const country = countries.find((c) => c.name === matchName);
  
  if (!country) {
    return {
      title: 'Country Not Found - Web On Dev',
      description: 'The requested country page could not be found.',
    };
  }

  const siteUrl = getBaseUrl();
  const path = `/where-we-serve/${toSlug(country.name)}`;
  const canonicalUrl = `${siteUrl}${path}`;

  return {
    title: `Software Development Services in ${country.name} - Web On Dev`,
    description: `Professional software development and IT services across ${country.name}. Local expertise with global standards.`,
    keywords: `${country.name}, software development, web development, IT services`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `Software Development Services in ${country.name}`,
      description: `Professional software development and IT services across ${country.name}.`,
      type: 'website',
      url: canonicalUrl,
    },
  };
}

export default async function CountryPage({ params }: CountryPageProps) {
  const resolvedParams = await params;
  const countries = await getAllCountriesAPI();
  const matchName = fromSlugMatch(resolvedParams.country, countries.map((c) => c.name));
  const country = countries.find((c) => c.name === matchName);
  
  if (!country) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Where We Serve', href: '/where-we-serve' },
    { name: country.name, href: `/where-we-serve/${toSlug(country.name)}`, current: true }
  ];

  const states = await getStatesByCountryAPI(country.name);

  const siteUrl = getBaseUrl();
  const canonical = `${siteUrl}/where-we-serve/${toSlug(country.name)}`;

  const SectionCTA = () => (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
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
          title={`Software Development Services in ${country.name}`}
          subtitle={`Local expertise and global standards in ${country.name}.`}
          flag={country.flag}
          currency={country.currencies.join(', ')}
          timezone={country.timezones[0] || ''}
        />
        <SectionCTA />

        {/* 1) States Overview */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Technology hubs in <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{country.name}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore major regions where we deliver. Each hub has unique sector strengths and infrastructure. We align delivery with local markets, languages, and compliance expectations to ensure a product experience that feels truly native.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {states.slice(0,6).map((s) => (
                <Link key={s.name} href={`/where-we-serve/${toSlug(country.name)}/${toSlug(s.name)}`} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl mb-6 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-orange-600 transition-colors">{s.name}</h3>
                    <p className="text-gray-600 text-center mb-6">Explore cities and services in {s.name}</p>
                    <div className="flex items-center justify-center text-orange-600 font-semibold group-hover:gap-2 transition-all duration-300">
                      Explore Services
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <SectionCTA />

        {/* 2) Local Expertise */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Local expertise in <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">{country.name}</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We tailor delivery to regional realities—devices, bandwidth, and search behavior—while keeping a consistent engineering baseline. Our teams understand local market dynamics and user expectations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {[
                  'Localized Content Strategy',
                  'Regional SEO Optimization',
                  'Compliance & Regulations',
                  'Time Zone Alignment',
                  'Currency & Payment Integration',
                  'Local Analytics & Insights'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
                  alt={`Software development in ${country.name}`}
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
                      <div className="font-bold text-gray-900">Local Delivery</div>
                      <div className="text-sm text-gray-600">Tailored to {country.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3) Services Overview */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Services tailored to <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">{country.name}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our delivery model incorporates localization from day one—addressing language, currency, tax, and regulatory needs while maintaining world-class performance and accessibility.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Local SEO Websites', desc: 'Websites optimized for local search intent and Core Web Vitals.', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                { title: 'eCommerce', desc: 'Localized payments, currency, and tax handling with frictionless UX.', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01' },
                { title: 'Mobile Apps', desc: 'Android/iOS with regional content, performance tuning, and analytics.', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
                { title: 'Analytics', desc: 'Privacy-aware measurement aligned with local data regulations.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
              ].map((s, index) => (
                <div key={s.title} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{s.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4) Compliance & Localization */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Built for <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">localization</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From currency and tax settings to language, accessibility, and data residency, we design your product to operate seamlessly across borders. Our teams factor in regional legal frameworks and user expectations.
              </p>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: 'Localization', desc: 'Time zone alignment, currency, date/number formats, and language coverage built-in.', icon: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129' },
                  { title: 'Compliance', desc: 'Delivery aligned to regional privacy, security, and industry standards.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                  { title: 'Accessibility', desc: 'WCAG-guided UX ensuring inclusive, keyboard- and screen-reader-friendly design.', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
                ].map((f) => (
                  <div key={f.title} className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                        </svg>
                      </div>
                      <div className="text-xl font-bold text-gray-900">{f.title}</div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop"
                  alt="Localization and compliance"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Full Services Directory (100+ links) */}
        <ServicesDirectorySection title={`Explore services available in ${country.name}`} subtitle="Web, mobile, AI, design, outsourcing, cloud, DevOps, analytics, and more" />
        <SectionCTA />

        {/* 5) Stats */}
        <LocationStatsSection />
        <SectionCTA />

        {/* 6) Case Studies */}
        <CaseStudiesSection countryName={country.name} />
        <SectionCTA />

        {/* EEAT: Awards & Trust for {country.name} */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Services tailored to <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">{country.name}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our engineers and analysts maintain recognized certifications and follow best practices validated by industry standards.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {['AWS Partner', 'Google Analytics', 'WCAG Accessibility', 'ISO-aligned Practices', 'Core Web Vitals'].map((b) => (
                <div key={b} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-semibold text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EEAT: Author Bio & Editorial Standards */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who writes and reviews our content</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">Senior engineers and growth strategists at Web On Dev create and review content for {country.name}. Each page undergoes technical, SEO, and accessibility checks.</p>
              <p className="text-lg text-gray-700 leading-relaxed">We favor helpful, evidence-based writing and revise regularly to reflect changing standards.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Editorial checklist</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• Search intent alignment</li>
                <li>• Semantic headings and internal links</li>
                <li>• Accessibility validation</li>
                <li>• Source citations where useful</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EEAT: Sources & Citations */}
        {/* <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Citations and references</h3>
            <p className="text-lg text-gray-700 leading-relaxed">Representative sources: Next.js docs, Google Search Central, Chrome Web Vitals, and W3C WCAG. We link to primary documentation in detailed guides.</p>
          </div>
        </section> */}

        {/* 7) Testimonials */}
        <TestimonialsSection />
        <SectionCTA />

        {/* SEO Section: Why Web On Dev in {country.name}? */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why choose <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">Web On Dev</span> in {country.name}?</h2>
              <p className="text-xl text-gray-600 leading-relaxed">We help organizations in {country.name} launch search-first, conversion-focused products. Our engineering and SEO practice ensures your site loads fast, ranks high, and turns traffic into revenue.</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>From multilingual content to currency and compliance, our team adapts delivery to the realities of {country.name}. We align your information architecture with local search intent and craft structured content that captures featured snippets and local packs.</p>
              <p>Our approach blends semantic HTML, JSON-LD schema, optimized media, and robust internal linking. The result: durable rankings and a user experience that boosts engagement and conversion.</p>
            </div>
          </div>
        </section>

        {/* SEO Section: How We Execute in {country.name} */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How we deliver measurable results in {country.name}</h3>
              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>We map People Also Ask queries and long-tail LSI terms to on-page sections and FAQs. Each page has clear topical focus reinforced by semantic headings and descriptive anchor links.</p>
                <p>Technical execution covers Core Web Vitals, accessibility, and structured data. We ship with performance budgets, image optimization, and caching tuned for reliability in {country.name} networks and devices.</p>
                <p>We instrument analytics to track search visibility, page experience, and conversions—so you can see the lift in real terms.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 md:mt-16">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">SEO levers for {country.name}</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• Localized keyword research and intent mapping</li>
                <li>• JSON-LD for Organization, LocalBusiness, and Services</li>
                <li>• Internal linking across states and cities</li>
                <li>• Performance tuning for mobile networks</li>
                <li>• Accessibility and inclusive UX by default</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SEO Section: Top Services in {country.name} */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Top services we deliver in <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">{country.name}</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our comprehensive suite of services designed specifically for businesses operating in {country.name} and surrounding regions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
                title: 'SEO-first Web Development',
                desc: 'Accessible, fast, and crawlable websites engineered to rank and convert.',
                icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              },{
                title: 'Mobile App Development',
                desc: 'Android/iOS apps built for performance, analytics, and growth.',
                icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
              },{
                title: 'Analytics & Reporting',
                desc: 'Dashboards and KPIs to monitor rankings, traffic, and conversions.',
                icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
              }].map((s) => (
                <div key={s.title} className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{s.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-center">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Section: FAQs for {country.name} (Search-led) */}
        {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Frequently searched questions in {country.name}</h3>
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed max-w-4xl">
              <details className="group border border-gray-100 rounded-2xl p-6 bg-white">
                <summary className="flex cursor-pointer items-center justify-between">
                  <span className="font-semibold text-gray-900">How fast can we launch with Web On Dev in {country.name}?</span>
                  <span className="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <div className="mt-4">Most projects kick off within 3–5 business days after scope alignment. We set milestones and SLAs to keep delivery predictable.</div>
              </details>
              <details className="group border border-gray-100 rounded-2xl p-6 bg-white">
                <summary className="flex cursor-pointer items-center justify-between">
                  <span className="font-semibold text-gray-900">Do you support local languages and currency?</span>
                  <span className="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <div className="mt-4">Yes—language routing, localized content models, and currency presentation are built into our architecture.</div>
              </details>
              <details className="group border border-gray-100 rounded-2xl p-6 bg-white">
                <summary className="flex cursor-pointer items-center justify-between">
                  <span className="font-semibold text-gray-900">What SEO elements are included?</span>
                  <span className="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <div className="mt-4">Semantic headings, internal linking, structured data, automated sitemaps, and Core Web Vitals optimization.</div>
              </details>
            </div>
          </div>
        </section> */}

        {/* 8) FAQs (Accordion) */}
        {/* <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                FAQs for <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">{country.name}</span>
              </h2>
            </div>
            <div className="space-y-4 max-w-4xl mx-auto">
              {[
                { q: 'Which cities do you cover?', a: 'We support major cities and numerous regional hubs, with delivery aligned to local languages and working hours.' },
                { q: 'How do you handle time zones?', a: 'We schedule overlap hours and provide async workflows to maintain velocity without compromising quality.' },
                { q: 'Is pricing localized?', a: 'Yes, we offer options in local currency where applicable and provide region-specific invoicing.' },
              ].map((f) => (
                <details key={f.q} className="group border border-gray-100 rounded-2xl p-6 open:shadow-lg">
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


        {/* Dynamic FAQ Section */}
        <DynamicFAQ 
          location={`in ${country.name}`}
          service="software development"
          city="major cities"
          state="various states"
          country={country.name}
        />

        {/* 10) Primary CTA */}
        <CTASection />

        {/* JSON-LD: Breadcrumbs and ItemList for states */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
                { '@type': 'ListItem', position: 2, name: 'Where We Serve', item: `${siteUrl}/where-we-serve` },
                { '@type': 'ListItem', position: 3, name: country.name, item: canonical },
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
              name: `States in ${country.name}`,
              itemListElement: states.map((s: any, index: number) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: `${siteUrl}/where-we-serve/${toSlug(country.name)}/${toSlug(s.name)}`,
                name: s.name,
              })),
            }),
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
