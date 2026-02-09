'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSectionBeams from '@/components/sections/HeroSectionBeams';
import TrustSignalsBar from '@/components/sections/TrustSignalsBar';
import ServicesBento from '@/components/sections/ServicesBento';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import StatsSection from '@/components/sections/StatsSection';
import CTASection from '@/components/sections/CTASection';
import BlogSection from '@/components/sections/BlogSection';
import FAQSection from '@/components/sections/FAQSection';

// =============================================================================
// HOME PAGE CLIENT COMPONENT
// =============================================================================

export default function HomePageClient() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <main>
          <HeroSectionBeams />
          <TrustSignalsBar />
          <ServicesBento />
          <AboutSection />
          <StatsSection />
          <PortfolioSection />
          <TestimonialsSection />
          <BlogSection />
          <FAQSection showSchema={false} />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
}
