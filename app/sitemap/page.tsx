import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Map, Globe, ArrowRight, Home, User, Briefcase, Phone, FileText, Shield, Cookie, Flag } from 'lucide-react';
import { siteStructure } from '@/lib/site-structure';
import { getAllCountriesAPI } from '@/lib/location-api';
import LocationsSitemap from '@/components/pages/sitemap/LocationsSitemap';

export const metadata: Metadata = {
  title: 'Sitemap - Web On Dev | Website Navigation & Page Directory',
  description: 'Complete sitemap of Web On Dev website. Find all pages, services, and resources in one organized directory.',
  keywords: 'sitemap, website map, navigation, page directory, site structure',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/sitemap/`,
  },
  openGraph: {
    title: 'Sitemap - Web On Dev | Website Navigation & Page Directory',
    description: 'Complete sitemap of Web On Dev website. Find all pages, services, and resources in one organized directory.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/sitemap`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitemap - Web On Dev | Website Navigation & Page Directory',
    description: 'Complete sitemap of Web On Dev website. Find all pages, services, and resources in one organized directory.',
  },
};

export default async function SitemapPage() {
  const mainPages = [
    { name: 'Home', href: '/', icon: Home, description: 'Welcome to Web On Dev' },
    { name: 'About Us', href: '/about', icon: User, description: 'Learn about our company and team' },
    { name: 'Services', href: '/services', icon: Briefcase, description: 'Our comprehensive service offerings' },
    { name: 'Portfolio', href: '/portfolio', icon: Globe, description: 'Showcase of our successful projects' },
    { name: 'Contact', href: '/contact', icon: Phone, description: 'Get in touch with our team' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy', icon: Shield, description: 'How we protect your privacy' },
    { name: 'Terms of Service', href: '/terms', icon: FileText, description: 'Legal terms and conditions' },
    { name: 'Cookie Policy', href: '/cookies', icon: Cookie, description: 'Our cookie usage policy' },
    { name: 'Sitemap', href: '/sitemap', icon: Map, description: 'Complete website navigation' },
  ];

  // Pillar slugs for pillar-level services under each city
  const pillarSlugs = siteStructure.map((p) => p.slug);

  // Fetch only countries on the server; states/cities will be lazy-fetched client-side for speed
  const countries = await getAllCountriesAPI();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
              <Map className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Website Sitemap
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Complete directory of all pages and services on our website. Find exactly what you're looking for.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Main Pages */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Home className="w-8 h-8 text-blue-600" />
                Main Pages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mainPages.map((page, index) => (
                  <Link
                    key={index}
                    href={page.href}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 block"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <page.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {page.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{page.description}</p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all duration-300">
                      Visit Page
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-green-600" />
                Services Directory
              </h2>
              <div className="space-y-12">
                {siteStructure.map((pillar, pillarIndex) => (
                  <div key={pillarIndex} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-blue-100">
                    <Link
                      href={`/${pillar.slug}`}
                      className="group block mb-6"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                        {pillar.title}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </h3>
                      <p className="text-gray-600">{pillar.description}</p>
                    </Link>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {pillar.clusters.map((cluster, clusterIndex) => (
                        <Link
                          key={clusterIndex}
                          href={`/${pillar.slug}/${cluster.slug}`}
                          className="group bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-200 block"
                        >
                          <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {cluster.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-3">{cluster.description}</p>
                          <div className="flex items-center text-blue-600 text-sm font-medium group-hover:gap-1 transition-all duration-300">
                            Learn More
                            <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Locations Hierarchy (Client, lazy-loaded) */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Flag className="w-8 h-8 text-red-600" />
                Locations Directory
              </h2>
              <LocationsSitemap countries={countries} servicePillars={pillarSlugs} />
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Website Overview</h2>
                <p className="text-gray-300">Complete breakdown of our website structure</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">{mainPages.length}</div>
                  <div className="text-gray-300">Main Pages</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">{siteStructure.length}</div>
                  <div className="text-gray-300">Service Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    {siteStructure.reduce((total, pillar) => total + pillar.clusters.length, 0)}
                  </div>
                  <div className="text-gray-300">Specialized Services</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">{legalPages.length}</div>
                  <div className="text-gray-300">Legal Pages</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}