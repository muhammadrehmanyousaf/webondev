'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PortfolioHeroSection from '@/components/pages/portfolio/PortfolioHeroSection';
import PortfolioGridSection from '@/components/pages/portfolio/PortfolioGridSection';
import PortfolioCategoriesSection from '@/components/pages/portfolio/PortfolioCategoriesSection';
import PortfolioStatsSection from '@/components/pages/portfolio/PortfolioStatsSection';
import CTASection from '@/components/sections/CTASection';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-[#030712]">
      <Header />
      <main>
        <PortfolioHeroSection />
        <PortfolioCategoriesSection
          onCategoryChange={setSelectedCategory}
          activeCategory={selectedCategory}
        />
        <PortfolioGridSection selectedCategory={selectedCategory} />
        <PortfolioStatsSection />
        <CTASection />
        {/* JSON-LD: Portfolio CollectionPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              '@id': 'https://www.webondev.com/portfolio/#collectionpage',
              name: 'Our Portfolio - Web Development Projects & Case Studies',
              description: 'Showcase of 500+ successful projects by Web On Dev. Browse our portfolio of web development, mobile apps, e-commerce, and enterprise software solutions.',
              url: 'https://www.webondev.com/portfolio/',
              inLanguage: 'en-US',
              isPartOf: { '@id': 'https://www.webondev.com/#website' },
              about: { '@id': 'https://www.webondev.com/#organization' },
              publisher: { '@id': 'https://www.webondev.com/#organization' },
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['h1', '.prose p:first-of-type']
              },
              mainEntity: {
                '@type': 'ItemList',
                numberOfItems: 50,
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Web Development Projects',
                    description: 'Modern, responsive web applications built with Next.js, React, and cutting-edge technologies',
                    url: 'https://www.webondev.com/portfolio/?category=web'
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Mobile App Projects',
                    description: 'Native iOS, Android, and cross-platform mobile applications using React Native and Flutter',
                    url: 'https://www.webondev.com/portfolio/?category=mobile'
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'E-commerce Solutions',
                    description: 'Online stores, marketplace platforms, and Shopify/WooCommerce implementations',
                    url: 'https://www.webondev.com/portfolio/?category=ecommerce'
                  },
                  {
                    '@type': 'ListItem',
                    position: 4,
                    name: 'SaaS Platforms',
                    description: 'Cloud-based software solutions and enterprise applications',
                    url: 'https://www.webondev.com/portfolio/?category=saas'
                  },
                  {
                    '@type': 'ListItem',
                    position: 5,
                    name: 'UI/UX Design Projects',
                    description: 'User interface and experience design showcasing modern design systems',
                    url: 'https://www.webondev.com/portfolio/?category=design'
                  }
                ]
              }
            })
          }}
        />
        {/* JSON-LD: Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.webondev.com/' },
                { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://www.webondev.com/portfolio/' }
              ]
            })
          }}
        />
        {/* JSON-LD: Aggregate Rating */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'Web On Dev Portfolio Services',
              description: 'Professional software development services showcased through 500+ successful projects',
              brand: { '@id': 'https://www.webondev.com/#organization' },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '250',
                bestRating: '5',
                worstRating: '1'
              },
              review: [
                {
                  '@type': 'Review',
                  author: { '@type': 'Person', name: 'John Smith' },
                  reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                  reviewBody: 'Exceptional work on our e-commerce platform. Sales increased by 150% within 6 months.'
                },
                {
                  '@type': 'Review',
                  author: { '@type': 'Person', name: 'Sarah Johnson' },
                  reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                  reviewBody: 'The mobile app they built exceeded our expectations. Highly professional team.'
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
