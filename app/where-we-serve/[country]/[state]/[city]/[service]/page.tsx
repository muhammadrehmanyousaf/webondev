import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle } from 'lucide-react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LocationBreadcrumb from '@/components/pages/locations/LocationBreadcrumb';
import LocationHeroSection from '@/components/pages/locations/LocationHeroSection';
import CTASection from '@/components/sections/CTASection';
import Link from 'next/link';
import { getAllCountriesAPI, getStatesByCountryAPI, getCitiesByStateAPI } from '@/lib/location-api';
import { fromSlugMatch, toSlug } from '@/lib/slug';
import { getServiceBySlug, enrichedSiteStructure } from '@/lib/site-structure';
import { getBaseUrl } from '@/lib/site-config';
import ServicesDirectorySection from '@/components/sections/where-we-serve/ServicesDirectorySection';
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
  const matchCountry = fromSlugMatch(countrySlug, countries.map((c) => c.name));
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
  // derive LSI/semantic keywords for this service (top 20)
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

  const serviceTitle = service.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

  // Find the correct service URL from site structure
  const getServiceUrl = (serviceSlug: string) => {
    // Try to find the service in the site structure
    const pillars = ['web-development', 'mobile-development', 'software-development', 'ui-ux-design', 'digital-marketing', 'ecommerce-solutions', 'cloud-devops', 'consulting-strategy', 'outsourcing-services', 'maintenance-support'];
    
    for (const pillar of pillars) {
      const serviceData = getServiceBySlug(pillar, serviceSlug);
      if (serviceData && serviceData.cluster) {
        return `/${pillar}/${serviceSlug}`;
      }
    }
    
    // If service not found in clusters, check if it's a pillar page
    for (const pillar of pillars) {
      if (pillar === serviceSlug) {
        return `/${serviceSlug}`;
      }
    }
    
    // Fallback to services page if not found
    return '/services';
  };

  const serviceUrl = getServiceUrl(service);
  // Related services in the same pillar based on LSI overlap
  const allPillars = enrichedSiteStructure;
  const currentCluster = allPillars.flatMap(p => p.clusters.map(c => ({ pillar: p, cluster: c }))).find(c => c.cluster.slug === service);
  const related = (currentCluster ? currentCluster.pillar.clusters : [])
    .filter(c => c.slug !== service)
    .slice(0, 8);
  const relatedKeywords = (currentCluster?.cluster.keywords || []).slice(0, 40);

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Where We Serve', href: '/where-we-serve' },
    { name: country.name, href: `/where-we-serve/${toSlug(country.name)}` },
    { name: state.name, href: `/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}` },
    { name: city.name, href: `/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}` },
    { name: serviceTitle, href: `/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/${toSlug(serviceTitle)}`, current: true },
  ];

  const siteUrl = getBaseUrl();

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
          title={`${serviceTitle} in ${city.name}`}
          subtitle={`Professional ${serviceTitle.toLowerCase()} for businesses in ${city.name}, ${state.name}.`}
          flag={country.flag}
          currency={country.currencies.join(', ')}
          timezone={country.timezones[0] || ''}
        />
        <SectionCTA />

        {/* 1) Service Overview */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why choose us for <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{serviceTitle}</span> in {city.name}?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We combine local market understanding in {city.name} with world-class engineering practices to deliver {serviceTitle.toLowerCase()} that drive real business results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Mobile-first, SEO-optimized delivery',
                  'Local timezone collaboration and support',
                  'Performance, accessibility, and security best-practices',
                  'Transparent communication and agile delivery',
                  'Local market research and insights',
                  'Ongoing support and maintenance'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Get a free estimate</h3>
                <p className="text-gray-600 mb-4">Tell us about your {serviceTitle.toLowerCase()} needs in {city.name}.</p>
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition shadow-lg hover:shadow-xl transform hover:scale-105">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
                  alt={`${serviceTitle} services in ${city.name}`}
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Local Expertise</div>
                      <div className="text-sm text-gray-600">In {city.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SectionCTA />

        {/* Related Topics & Search Intents for {serviceTitle} in {city.name} */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-3">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border border-gray-200 text-gray-700 bg-white shadow-sm">Semantics</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">Related topics </span>
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">& search intents</span>
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">These semantically related terms help shape comprehensive, helpful coverage for users searching for {serviceTitle.toLowerCase()} in {city.name}.</p>
            <div className="flex flex-wrap gap-2">
              {relatedKeywords.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-2 rounded-full border border-gray-100 bg-white text-gray-900 text-sm shadow-sm hover:border-orange-200 hover:shadow transition"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </section>

        

        {/* 2) What You Get */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">What you </span>
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent font-black">get</span>
                <span className="text-gray-900"> with {serviceTitle}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our comprehensive {serviceTitle.toLowerCase()} service includes everything you need for success in {city.name}.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Local SEO', desc: 'Optimized for local search intent and conversions.' },
                { title: 'Performance', desc: 'Fast loads and smooth interactions across devices.' },
                { title: 'Security', desc: 'Hardened stack and secure deployment practices.' },
                { title: 'Scalability', desc: 'Built to scale with your growth and traffic.' },
              ].map((c, index) => (
                <div key={c.title} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{c.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3) Local Expertise */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">Local expertise meets </span>
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent font-black">global standards</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our {serviceTitle.toLowerCase()} practice is designed for local businesses in {city.name}. We apply modern UX, accessibility, and SEO best practices to ensure your product both delights users and ranks well.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: 'Local Market Research', desc: 'Deep understanding of {city.name} business landscape and customer behavior.' },
                  { title: 'Regional SEO Strategy', desc: 'Optimized for local search intent and regional competition.' },
                  { title: 'Community Engagement', desc: 'Active participation in local business networks and events.' },
                ].map((f) => (
                  <div key={f.title} className="p-6 bg-gray-50 rounded-2xl">
                    <div className="text-lg font-semibold text-gray-900 mb-2">{f.title}</div>
                    <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1600&auto=format&fit=crop"
                  alt="Local expertise meets global standards"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4) Process Steps */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Our </span>
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent font-black">process</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A proven methodology that ensures successful delivery of {serviceTitle.toLowerCase()} projects in {city.name}.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {['Discovery', 'Design', 'Build', 'Launch'].map((step, i) => (
                <div key={step} className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">{i+1}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{step}</h4>
                  <p className="text-gray-600 leading-relaxed">Comprehensive {step.toLowerCase()} phase with local market insights.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5) Tech Stack */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Modern </span>
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent font-black">tech stack</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We use cutting-edge technologies to deliver fast, scalable, and maintainable solutions.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'AWS'].map((t) => (
                <span key={t} className="px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-900 font-medium shadow-sm">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 6) Pricing Models */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Flexible </span>
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent font-black">pricing</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Choose the engagement model that best fits your {serviceTitle.toLowerCase()} needs and budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Fixed scope', desc: 'Best for well-defined projects with clear requirements.' },
                { title: 'Time & materials', desc: 'Flexible for evolving needs and iterative development.' },
                { title: 'Dedicated team', desc: 'Long-term velocity for product roadmaps and ongoing development.' },
              ].map((m) => (
                <div key={m.title} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{m.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Section: Why Web On Dev for {serviceTitle} in {city.name} */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Why choose </span>
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent font-black">Web On Dev</span>
                <span className="text-gray-900"> for {serviceTitle} in {city.name}?</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">We combine local market understanding in {city.name} with modern engineering and SEO, delivering {serviceTitle.toLowerCase()} that ranks and converts.</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>Our approach blends semantic HTML, topical clustering, and internal linking with performance-first builds. We implement JSON-LD for services, breadcrumb schema, and clear information architecture so search engines and users can navigate effortlessly.</p>
              <p>From analytics and A/B testing to accessibility and Core Web Vitals, we ship with the fundamentals required for sustainable growth.</p>
            </div>
          </div>
        </section>

        {/* SEO Section: How We Execute {serviceTitle} in {city.name} */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gray-900">How we deliver </span>
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent font-black">{serviceTitle.toLowerCase()} outcomes</span>
                <span className="text-gray-900"> in {city.name}</span>
              </h3>
              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>We shape content to answer People Also Ask queries and high-intent comparisons related to {serviceTitle.toLowerCase()} in {city.name}. Semantically related terms appear naturally within helpful, readable sections.</p>
                <p>We optimize images, scripts, and caching; validate accessibility; and add structured data to improve eligibility for rich results.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-2xl font-semibold mb-4">
                <span className="text-gray-900">SEO </span>
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent font-black">levers</span>
                <span className="text-gray-900"> for {serviceTitle}</span>
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li>• Service schema and breadcrumb schema</li>
                <li>• Internal links to related services and case studies</li>
                <li>• Semantic headings, anchor links, and descriptive copy</li>
                <li>• Core Web Vitals and accessibility best practices</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SEO Section: FAQs for {serviceTitle} in {city.name} */}
        {/* <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Frequently searched questions about {serviceTitle.toLowerCase()} in {city.name}</h3>
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed max-w-4xl">
              <details className="group border border-gray-100 rounded-2xl p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                  <span className="font-semibold text-gray-900">How long does {serviceTitle.toLowerCase()} typically take?</span>
                  <span className="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <div className="mt-4">Timelines vary by scope, but we define milestones upfront and report weekly with clear KPIs and risks.</div>
              </details>
              <details className="group border border-gray-100 rounded-2xl p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                  <span className="font-semibold text-gray-900">Do you provide ongoing optimization and support?</span>
                  <span className="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <div className="mt-4">Yes—retainers cover technical upkeep, SEO improvements, analytics insights, and CRO experiments.</div>
              </details>
              <details className="group border border-gray-100 rounded-2xl p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                  <span className="font-semibold text-gray-900">Do you serve neighborhoods near {city.name}?</span>
                  <span className="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <div className="mt-4">Yes—we support the broader {city.name} metro. Tell us your area when you reach out and we’ll align schedules and onsite availability.</div>
              </details>
              <details className="group border border-gray-100 rounded-2xl p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                  <span className="font-semibold text-gray-900">Can you integrate with our existing stack?</span>
                  <span className="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <div className="mt-4">We integrate with popular stacks across cloud, data, and frontend—minimizing change risk and preserving what works.</div>
              </details>
            </div>
          </div>
        </section> */}

        {/* EEAT: Awards & Trust Signals for {serviceTitle} */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-gray-900">Awards and </span>
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent font-black">certifications</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['AWS Partner', 'Google Analytics', 'WCAG Accessibility', 'ISO-aligned Practices', 'Core Web Vitals'].map((b) => (
                <span key={b} className="px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-900 font-medium shadow-sm">{b}</span>
              ))}
            </div>
          </div>
        </section>

        {/* EEAT: Author Bio & Editorial Standards */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gray-900">Our </span>
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent font-black">editorial standards</span>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">Content for {serviceTitle.toLowerCase()} is written and reviewed by senior practitioners at Web On Dev, with technical and SEO validation before publishing.</p>
              <p className="text-lg text-gray-700 leading-relaxed">We keep guidance accurate with periodic updates as standards evolve.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Checklist</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• Intent and topical coverage</li>
                <li>• Semantic headings and internal links</li>
                <li>• Accessibility and inclusive language</li>
                <li>• Citations to primary sources where useful</li>
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

        {/* Full Services Directory (100+ links) */}
        <ServicesDirectorySection title={`Explore more services related to ${serviceTitle}`} subtitle="Web, mobile, AI, design, outsourcing, cloud, DevOps, analytics, and more" />

        {/* 7) FAQs (Accordion) */}
        {/* <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently asked <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">questions</span>
              </h2>
            </div>
            <div className="space-y-4 max-w-4xl mx-auto">
              {[
                { q: 'How fast can you start?', a: 'We typically start within 3–5 business days after scoping and resourcing.' },
                { q: 'Do you support local languages?', a: 'Yes. We can implement multi-language UX and localized content delivery.' },
                { q: 'How do you ensure SEO?', a: 'Technical SEO, Core Web Vitals, structured data, and a content strategy mapped to intent.' },
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

        {/* 8) Map */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Servicing </span>
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent font-black">{city.name}</span>
                <span className="text-gray-900"> and nearby areas</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We provide {serviceTitle.toLowerCase()} services across {city.name} and the surrounding metropolitan area.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
              <iframe title="map" className="w-full h-96" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=${encodeURIComponent(city.name)}&output=embed`}></iframe>
            </div>
          </div>
        </section>

        {/* Related Services in {city.name} */}
        {/* <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-3">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border border-gray-200 text-gray-700 bg-white shadow-sm">Recommended</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-gray-900">Related services </span>
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">in {city.name}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  href={`/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/${c.slug}`}
                  className="group relative p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:border-blue-200 transition-all"
                >
                  <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: '0 0 0 1px rgba(59,130,246,0.15), 0 10px 25px rgba(17,24,39,0.06)' }} />
                  <div className="relative flex items-start justify-between gap-4">
                    <span className="text-gray-900 font-medium leading-snug group-hover:text-orange-600 transition-colors">{c.title}</span>
                    <span className="text-orange-500 group-hover:translate-x-0.5 transition-transform">→</span>
                  </div>
                  <span className="relative mt-2 inline-block text-[11px] text-gray-500">/{c.slug}</span>
                </Link>
              ))}
            </div>
          </div>
        </section> */}

        {/* 9) Awards & Certifications */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Awards and <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">certifications</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our {serviceTitle.toLowerCase()} teams maintain relevant certifications and follow proven delivery frameworks.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {['AWS Partner', 'Google Analytics', 'Scrum.Org', 'WCAG'].map((b) => (
                <span key={b} className="px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-900 font-medium shadow-sm">{b}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 10) CTA to Service Route */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Want to see full </span>
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent font-black">details</span>
              <span className="text-gray-900"> of our {serviceTitle} offering?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive {serviceTitle.toLowerCase()} service page for detailed information about our approach, technologies, and success stories.
            </p>
            <Link href={serviceUrl} className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition shadow-lg hover:shadow-xl transform hover:scale-105">
              View {serviceTitle} Service Page
            </Link>
          </div>
        </section>

        {/* Dynamic FAQ Section */}
        <DynamicFAQ 
          location={`in ${city.name}, ${state.name}`}
          service={serviceTitle.toLowerCase()}
          city={city.name}
          state={state.name}
          country={country.name}
        />

        {/* 11) Primary CTA */}
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
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: `How long does ${serviceTitle.toLowerCase()} typically take?`,
                  acceptedAnswer: { '@type': 'Answer', text: 'Timelines vary by scope, but we define milestones upfront and report weekly with clear KPIs and risks.' }
                },
                {
                  '@type': 'Question',
                  name: 'Do you provide ongoing optimization and support?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Yes—retainers cover technical upkeep, SEO improvements, analytics insights, and CRO experiments.' }
                },
                {
                  '@type': 'Question',
                  name: `Do you serve neighborhoods near ${city.name}?`,
                  acceptedAnswer: { '@type': 'Answer', text: `Yes—we support the broader ${city.name} metro. Tell us your area when you reach out and we’ll align schedules and onsite availability.` }
                },
                {
                  '@type': 'Question',
                  name: 'Can you integrate with our existing stack?',
                  acceptedAnswer: { '@type': 'Answer', text: 'We integrate with popular stacks across cloud, data, and frontend—minimizing change risk and preserving what works.' }
                }
              ]
            })
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


