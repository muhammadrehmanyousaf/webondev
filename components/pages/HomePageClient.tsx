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
import { SchemaScript } from '@/components/seo/SchemaScript';
import type { FAQItem } from '@/lib/schema';

// =============================================================================
// HOME PAGE FAQS FOR SCHEMA
// =============================================================================

const homeFAQs: FAQItem[] = [
  {
    question: 'What services does Web On Dev offer?',
    answer:
      'Web On Dev provides comprehensive digital solutions including custom web development, mobile app development, e-commerce solutions, SEO optimization, digital marketing, and UI/UX design.',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'Project timelines vary based on complexity. A simple business website typically takes 4-6 weeks, while complex web applications can take 12-16 weeks or more.',
  },
  {
    question: 'What is your development process?',
    answer:
      'We follow an agile methodology with four main phases: Discovery & Planning, Design & Prototyping, Development & Testing, and Launch & Support.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer:
      'Yes, we offer comprehensive post-launch support including bug fixes, security updates, performance monitoring, and feature enhancements.',
  },
  {
    question: 'How much does a custom website cost?',
    answer:
      'Pricing depends on project scope. Basic websites start from $5,000, business websites range from $10,000-$25,000, and enterprise solutions can exceed $50,000.',
  },
];

// =============================================================================
// HOME PAGE CLIENT COMPONENT
// =============================================================================

export default function HomePageClient() {
  return (
    <>
      {/* Home Page Schema */}
      <SchemaScript
        pageType="home"
        pageData={{
          url: 'https://www.webondev.com',
          title: 'Web On Dev - Premium Web Development & Digital Solutions',
          description:
            'Transform your digital vision into reality with Web On Dev. We deliver cutting-edge web development, mobile apps, and digital solutions that drive business growth.',
          faqs: homeFAQs,
        }}
      />

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
          <FAQSection faqs={homeFAQs} showSchema={false} />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
}
