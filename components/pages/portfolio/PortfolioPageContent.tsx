'use client';

import React, { useState } from 'react';
import PortfolioHeroSection from '@/components/pages/portfolio/PortfolioHeroSection';
import PortfolioGridSection from '@/components/pages/portfolio/PortfolioGridSection';
import PortfolioCategoriesSection from '@/components/pages/portfolio/PortfolioCategoriesSection';
import PortfolioStatsSection from '@/components/pages/portfolio/PortfolioStatsSection';
import CTASection from '@/components/sections/CTASection';

const PortfolioPageContent = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <>
      <PortfolioHeroSection />
      <PortfolioCategoriesSection onCategoryChange={setSelectedCategory} />
      <PortfolioGridSection selectedCategory={selectedCategory} />
      <PortfolioStatsSection />
      <CTASection />
    </>
  );
};

export default PortfolioPageContent;
