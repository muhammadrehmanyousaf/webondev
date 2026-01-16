// Service Page Sections - World Class Components
// Export all 12 world-class sections for service pages

export { default as ServiceHeroWithForm } from './ServiceHeroWithForm';
export { default as ServicePainPoints } from './ServicePainPoints';
export { default as ServiceSolutions } from './ServiceSolutions';
export { default as ServiceProcess } from './ServiceProcess';
export { default as ServiceBenefits } from './ServiceBenefits';
export { default as ServiceTechStack } from './ServiceTechStack';
export { default as ServicePortfolio } from './ServicePortfolio';
export { default as ServicePricing } from './ServicePricing';
export { default as ServiceTestimonials } from './ServiceTestimonials';
export { default as ServiceFAQ } from './ServiceFAQ';
export { default as ServiceRelated } from './ServiceRelated';
export { default as ServiceCTA } from './ServiceCTA';

// Types for service data
export interface ServiceData {
  // Basic info
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;

  // Hero section
  hero: {
    headline: string;
    subheadline: string;
    description: string;
    keyFeatures: string[];
    badges: string[];
  };

  // Pain points
  painPoints: Array<{
    icon: string;
    title: string;
    description: string;
    stat?: string;
    statLabel?: string;
  }>;

  // Solutions/Features
  solutions: Array<{
    icon: string;
    title: string;
    description: string;
    highlights?: string[];
  }>;

  // Process
  process: {
    steps: Array<{
      icon: string;
      title: string;
      description: string;
      duration?: string;
      deliverables?: string[];
    }>;
    totalDuration: string;
  };

  // Benefits
  benefits: Array<{
    icon: string;
    title: string;
    description: string;
    stat?: string;
    statSuffix?: string;
    statLabel?: string;
  }>;

  // Tech Stack
  techStack: Array<{
    name: string;
    description?: string;
    technologies: Array<{
      name: string;
      icon?: string;
      category: string;
      proficiency?: 'expert' | 'advanced' | 'proficient';
    }>;
  }>;

  // Portfolio/Case Studies
  portfolio: Array<{
    title: string;
    client: string;
    industry: string;
    description: string;
    challenge?: string;
    solution?: string;
    results: string[];
    metrics?: Array<{ label: string; value: string }>;
    image?: string;
    tags: string[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  }>;

  // Pricing
  pricing: {
    plans: Array<{
      name: string;
      description: string;
      price: string;
      priceNote?: string;
      billingPeriod?: string;
      features: Array<{
        name: string;
        included: boolean;
        tooltip?: string;
      }>;
      highlighted?: boolean;
      badge?: string;
      ctaText?: string;
    }>;
    customNote?: string;
  };

  // Testimonials
  testimonials: Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar?: string;
    rating: number;
    location?: string;
  }>;

  // FAQs
  faqs: Array<{
    question: string;
    answer: string;
    category?: string;
  }>;

  // Related Services
  relatedServices: Array<{
    name: string;
    slug: string;
    description: string;
    icon?: string;
  }>;

  // SEO
  seo: {
    title: string;
    description: string;
    keywords: string[];
    schema?: Record<string, unknown>;
  };
}
