'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

gsap.registerPlugin(ScrollTrigger);

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
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize GSAP animations
    const ctx = gsap.context(() => {
      // Smooth scroll animations for sections
      gsap.utils.toArray<HTMLElement>('.animate-on-scroll').forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Parallax effect for background elements
      gsap.utils.toArray<HTMLElement>('.parallax').forEach((element) => {
        gsap.to(element, {
          yPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

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

      <div
        ref={mainRef}
        className="min-h-screen bg-background text-foreground transition-colors duration-300"
      >
        <Header />

        <main>
          {/* Section 1: Hero with particle effects & mesh gradient */}
          <HeroSectionBeams />

          {/* Section 2: Trust Signals Bar - Client logos & certifications */}
          <TrustSignalsBar />

          {/* Section 3: Services Bento Grid */}
          <ServicesBento />

          {/* Section 4: About Preview with stats */}
          <AboutSection />

          {/* Section 5: Stats Section */}
          <StatsSection />

          {/* Section 6: Portfolio Showcase */}
          <PortfolioSection />

          {/* Section 7: Testimonials */}
          <TestimonialsSection />

          {/* Section 8: Blog Preview */}
          <BlogSection />

          {/* Section 9: FAQ Section with schema */}
          <FAQSection faqs={homeFAQs} showSchema={false} />

          {/* Section 10: CTA Section */}
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
}
