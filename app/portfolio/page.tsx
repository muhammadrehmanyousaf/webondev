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
              name: 'Our Portfolio',
              description: 'Showcase of successful projects by Web On Dev. Browse our portfolio of web development, mobile apps, e-commerce, and enterprise software solutions.',
              publisher: {
                '@type': 'Organization',
                name: 'Web On Dev',
                url: 'https://www.webondev.com',
                logo: 'https://www.webondev.com/images/branding/logo.png'
              },
              mainEntity: {
                '@type': 'ItemList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Web Development Projects',
                    description: 'Modern, responsive web applications'
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Mobile App Projects',
                    description: 'Native and cross-platform mobile applications'
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'E-commerce Solutions',
                    description: 'Online stores and marketplace platforms'
                  },
                  {
                    '@type': 'ListItem',
                    position: 4,
                    name: 'SaaS Platforms',
                    description: 'Cloud-based software solutions'
                  }
                ]
              }
            })
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
