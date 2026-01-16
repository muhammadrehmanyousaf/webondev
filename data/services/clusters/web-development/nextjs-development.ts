import { ServiceData } from '@/components/services/sections';

export const nextjsDevelopmentData: ServiceData = {
  // Basic Info
  slug: 'nextjs-development',
  name: 'Next.js Development Services',
  tagline: 'The React Framework for Production-Ready Web Applications',
  description: 'Build blazing-fast, SEO-optimized web applications with Next.js. We leverage server-side rendering, static generation, and the latest Next.js features to deliver exceptional digital experiences.',
  category: 'Web Development',

  // Hero Section
  hero: {
    headline: 'Next.js Development',
    subheadline: 'Full-Stack React, Production-Ready',
    description: 'Next.js is the industry standard for React development. We build SEO-friendly, lightning-fast web applications using server components, app router, and cutting-edge Next.js 14+ features. From landing pages to complex SaaS platforms.',
    keyFeatures: [
      'Server & Client Components',
      'App Router architecture',
      'Built-in SEO optimization',
      'Edge & serverless deployment',
      'Full-stack API routes',
    ],
    badges: ['Next.js 14+', 'SEO Optimized', 'Edge Ready'],
  },

  // Pain Points
  painPoints: [
    {
      icon: 'Search',
      title: 'Poor SEO Performance',
      description: 'Client-rendered React apps struggle with SEO. Search engines cannot index dynamic content, hurting your organic traffic.',
      stat: '68%',
      statLabel: 'of traffic comes from organic search',
    },
    {
      icon: 'Clock',
      title: 'Slow Initial Load',
      description: 'JavaScript-heavy apps have slow First Contentful Paint. Users bounce before your app even renders.',
      stat: '53%',
      statLabel: 'leave if load > 3 seconds',
    },
    {
      icon: 'Server',
      title: 'Backend Complexity',
      description: 'Separate backend servers add infrastructure complexity, DevOps overhead, and deployment headaches.',
      stat: '2x',
      statLabel: 'infrastructure to manage',
    },
    {
      icon: 'Globe',
      title: 'Global Latency',
      description: 'Single-region servers mean slow response times for users far from your data center.',
      stat: '100ms+',
      statLabel: 'per 1000 miles of distance',
    },
    {
      icon: 'FileCode',
      title: 'Complex Configuration',
      description: 'Setting up SSR, routing, code splitting, and build optimization from scratch is time-consuming.',
      stat: '40%',
      statLabel: 'of time on configuration',
    },
    {
      icon: 'Image',
      title: 'Unoptimized Assets',
      description: 'Large images, unoptimized fonts, and bloated bundles slow down your site.',
      stat: '50%',
      statLabel: 'of page weight is often images',
    },
  ],

  // Solutions/Features
  solutions: [
    {
      icon: 'Server',
      title: 'Server Components',
      description: 'Render components on the server for instant HTML, better SEO, and smaller JavaScript bundles.',
      highlights: [
        'Zero client-side JavaScript',
        'Instant HTML delivery',
        'Reduced bundle size',
        'Better SEO indexing',
      ],
    },
    {
      icon: 'Zap',
      title: 'Hybrid Rendering',
      description: 'Choose the right rendering strategy per page: SSR, SSG, ISR, or CSR. Optimize for both performance and fresh content.',
      highlights: [
        'Static Site Generation',
        'Server-Side Rendering',
        'Incremental Static Regeneration',
        'Client-Side Rendering option',
      ],
    },
    {
      icon: 'Route',
      title: 'App Router Architecture',
      description: 'Modern routing with nested layouts, loading states, and error boundaries.',
      highlights: [
        'File-based routing',
        'Nested layouts',
        'Parallel routes',
        'Built-in loading UI',
      ],
    },
    {
      icon: 'Plug',
      title: 'Full-Stack API Routes',
      description: 'Build APIs directly in your Next.js app. No separate backend needed.',
      highlights: [
        'API route handlers',
        'Server actions',
        'Form handling',
        'Database integration',
      ],
    },
    {
      icon: 'Globe2',
      title: 'Edge Deployment',
      description: 'Deploy to the edge for global performance. Your code runs close to your users.',
      highlights: [
        'Edge runtime support',
        'Global CDN deployment',
        'Sub-100ms responses',
        'Automatic scaling',
      ],
    },
    {
      icon: 'Image',
      title: 'Built-in Optimization',
      description: 'Automatic image optimization, font optimization, and script loading.',
      highlights: [
        'next/image component',
        'Automatic WebP/AVIF',
        'Font optimization',
        'Script optimization',
      ],
    },
  ],

  // Process Steps
  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Project Architecture',
        description: 'Plan the Next.js architecture - routing structure, rendering strategies, data fetching patterns.',
        duration: '1 week',
        deliverables: ['Architecture Document', 'Route Structure', 'Rendering Strategy'],
      },
      {
        icon: 'Settings',
        title: 'Foundation Setup',
        description: 'Initialize Next.js with TypeScript, configure App Router, set up authentication.',
        duration: '1 week',
        deliverables: ['Next.js Project', 'TypeScript Config', 'Auth System'],
      },
      {
        icon: 'Code',
        title: 'Core Development',
        description: 'Build layouts, implement routes, create server and client components.',
        duration: '3-6 weeks',
        deliverables: ['Page Components', 'Layouts', 'API Routes'],
      },
      {
        icon: 'Layers',
        title: 'Feature Implementation',
        description: 'Develop application features, implement server actions, add caching strategies.',
        duration: '3-6 weeks',
        deliverables: ['Feature Modules', 'Server Actions', 'Caching Layer'],
      },
      {
        icon: 'Gauge',
        title: 'Optimization & Testing',
        description: 'Performance optimization, SEO configuration, accessibility testing.',
        duration: '1-2 weeks',
        deliverables: ['Performance Report', 'SEO Audit', 'Accessibility Report'],
      },
      {
        icon: 'Rocket',
        title: 'Deployment & Launch',
        description: 'Deploy to Vercel or alternative hosting. Configure CDN and monitoring.',
        duration: '1 week',
        deliverables: ['Production Deploy', 'Monitoring Setup', 'Documentation'],
      },
    ],
    totalDuration: '10-18 weeks',
  },

  // Benefits
  benefits: [
    {
      icon: 'Search',
      title: 'SEO Excellence',
      description: 'Server rendering and static generation make your content fully indexable.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'SEO Indexable',
    },
    {
      icon: 'Zap',
      title: 'Blazing Performance',
      description: 'Automatic code splitting, image optimization, and edge deployment.',
      stat: '<1',
      statSuffix: 's',
      statLabel: 'Time to Interactive',
    },
    {
      icon: 'Server',
      title: 'Full-Stack Simplicity',
      description: 'Build APIs alongside your UI. No separate backend deployment needed.',
      stat: '50',
      statSuffix: '%',
      statLabel: 'Less Infrastructure',
    },
    {
      icon: 'Globe',
      title: 'Global Edge',
      description: 'Deploy to 100+ edge locations worldwide for fast responses.',
      stat: '100',
      statSuffix: '+',
      statLabel: 'Edge Locations',
    },
    {
      icon: 'RefreshCw',
      title: 'Instant Updates',
      description: 'Update static content without rebuilding with ISR.',
      stat: 'Real-time',
      statLabel: 'Content Updates',
    },
    {
      icon: 'Shield',
      title: 'Enterprise Ready',
      description: 'Used by Netflix, TikTok, and Hulu. Proven at massive scale.',
      stat: 'Fortune 500',
      statLabel: 'Companies Trust It',
    },
  ],

  // Tech Stack
  techStack: [
    {
      name: 'Next.js Core',
      description: 'Core Next.js technologies',
      technologies: [
        { name: 'Next.js 14+', icon: 'nextjs', category: 'Core', proficiency: 'expert' },
        { name: 'React 18+', icon: 'react', category: 'Core', proficiency: 'expert' },
        { name: 'TypeScript', icon: 'typescript', category: 'Core', proficiency: 'expert' },
        { name: 'App Router', icon: 'route', category: 'Core', proficiency: 'expert' },
      ],
    },
    {
      name: 'Data & State',
      description: 'Data fetching and state management',
      technologies: [
        { name: 'Server Actions', icon: 'server', category: 'Data', proficiency: 'expert' },
        { name: 'Prisma', icon: 'database', category: 'Data', proficiency: 'expert' },
        { name: 'Drizzle', icon: 'database', category: 'Data', proficiency: 'advanced' },
        { name: 'NextAuth.js', icon: 'auth', category: 'Data', proficiency: 'expert' },
      ],
    },
    {
      name: 'Deployment',
      description: 'Hosting and deployment platforms',
      technologies: [
        { name: 'Vercel', icon: 'vercel', category: 'Deployment', proficiency: 'expert' },
        { name: 'AWS Amplify', icon: 'aws', category: 'Deployment', proficiency: 'advanced' },
        { name: 'Cloudflare', icon: 'cloudflare', category: 'Deployment', proficiency: 'advanced' },
        { name: 'Docker', icon: 'docker', category: 'Deployment', proficiency: 'advanced' },
      ],
    },
    {
      name: 'Integrations',
      description: 'Popular integrations',
      technologies: [
        { name: 'Sanity', icon: 'sanity', category: 'CMS', proficiency: 'expert' },
        { name: 'Stripe', icon: 'stripe', category: 'Payments', proficiency: 'expert' },
        { name: 'Resend', icon: 'email', category: 'Email', proficiency: 'advanced' },
        { name: 'OpenAI', icon: 'ai', category: 'AI', proficiency: 'advanced' },
      ],
    },
  ],

  // Portfolio
  portfolio: [
    {
      title: 'SaaS Marketing Platform',
      client: 'MarketPro',
      industry: 'SaaS',
      description: 'Full-featured marketing automation platform with dashboard, analytics, and campaign management.',
      challenge: 'Build a high-performance SaaS platform that handles millions of page views monthly.',
      solution: 'Next.js 14 with App Router, server actions for mutations, and ISR for dashboard data.',
      results: ['99.9% uptime', '2M+ page views/month', '45% faster than competitor'],
      metrics: [
        { label: 'Page Views', value: '2M+/mo' },
        { label: 'Performance Gain', value: '45%' },
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['SaaS', 'Next.js 14', 'Server Actions', 'PostgreSQL', 'Vercel'],
    },
    {
      title: 'E-Commerce Marketplace',
      client: 'StyleHouse',
      industry: 'E-Commerce',
      description: 'High-traffic marketplace with 50K+ products, ISR for real-time pricing, and edge checkout.',
      challenge: 'Create a fast, SEO-optimized e-commerce site with dynamic pricing.',
      solution: 'Next.js with ISR for product pages, edge functions for personalization, and Stripe integration.',
      results: ['$10M+ GMV', '300ms avg load time', '15% conversion increase'],
      metrics: [
        { label: 'GMV', value: '$10M+' },
        { label: 'Load Time', value: '300ms' },
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['E-Commerce', 'Next.js', 'ISR', 'Stripe', 'Algolia'],
    },
    {
      title: 'Media Publishing Platform',
      client: 'TechScale Media',
      industry: 'Media',
      description: 'Content publishing platform handling millions of articles with perfect SEO.',
      challenge: 'Achieve 100% Lighthouse SEO scores while serving millions of articles.',
      solution: 'Next.js with SSG for articles, edge caching, and optimized images via next/image.',
      results: ['5M+ monthly visitors', '100% Lighthouse SEO', '95% Core Web Vitals'],
      metrics: [
        { label: 'Monthly Visitors', value: '5M+' },
        { label: 'Lighthouse SEO', value: '100%' },
      ],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      tags: ['Media', 'Next.js', 'Sanity CMS', 'Edge Functions', 'Vercel'],
    },
    {
      title: 'Corporate Enterprise Portal',
      client: 'GlobalTech Industries',
      industry: 'Enterprise',
      description: 'Internal enterprise portal with SSO authentication, document management, and team collaboration.',
      challenge: 'Build a secure, scalable portal that integrates with existing corporate systems.',
      solution: 'Next.js with middleware for authentication, server components for sensitive data, and Azure AD integration.',
      results: ['15K+ daily users', '80% faster than legacy', 'Zero security incidents'],
      metrics: [
        { label: 'Daily Users', value: '15K+' },
        { label: 'Performance Gain', value: '80%' },
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['Enterprise', 'Next.js', 'Azure AD', 'PostgreSQL', 'AWS'],
    },
  ],

  // Pricing
  pricing: {
    plans: [
      {
        name: 'Next.js Website',
        description: 'Marketing website or blog with Next.js',
        price: '$10,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Up to 15 pages', included: true },
          { name: 'App Router architecture', included: true },
          { name: 'Headless CMS integration', included: true },
          { name: 'SEO optimization', included: true },
          { name: 'Responsive design', included: true },
          { name: 'API routes', included: false },
          { name: 'Authentication', included: false },
        ],
        ctaText: 'Get Started',
      },
      {
        name: 'Next.js Application',
        description: 'Full-featured web application',
        price: '$30,000',
        priceNote: 'Starting price',
        highlighted: true,
        badge: 'Most Popular',
        features: [
          { name: 'Unlimited pages', included: true },
          { name: 'Full App Router features', included: true },
          { name: 'Server Actions', included: true },
          { name: 'Database integration', included: true },
          { name: 'Authentication system', included: true },
          { name: 'API development', included: true },
          { name: 'Admin dashboard', included: true },
        ],
        ctaText: 'Start Project',
      },
      {
        name: 'Enterprise Next.js',
        description: 'Large-scale enterprise applications',
        price: 'Custom',
        priceNote: 'Based on requirements',
        features: [
          { name: 'Multi-tenant architecture', included: true },
          { name: 'Advanced caching strategies', included: true },
          { name: 'Edge runtime optimization', included: true },
          { name: 'Custom integrations', included: true },
          { name: 'Performance SLAs', included: true },
          { name: 'Dedicated support', included: true },
          { name: '24/7 monitoring', included: true },
        ],
        ctaText: 'Contact Sales',
      },
    ],
    customNote: 'All Next.js projects include TypeScript, testing setup, and deployment to Vercel or your preferred platform.',
  },

  // Testimonials
  testimonials: [
    {
      quote: 'Moving to Next.js transformed our SEO. We went from page 3 to position 1 for our main keywords within 3 months.',
      author: 'Jennifer Lee',
      role: 'Head of Growth',
      company: 'TechScale Media',
      rating: 5,
      location: 'Los Angeles, CA',
    },
    {
      quote: 'They built our entire SaaS platform on Next.js and it handles our traffic beautifully. Server components made everything so much simpler.',
      author: 'Alex Rivera',
      role: 'Founder',
      company: 'CloudMetrics',
      rating: 5,
      location: 'Miami, FL',
    },
    {
      quote: 'Our e-commerce site went from 4-second load times to under 500ms. Sales increased 30% in the first month.',
      author: 'Marcus Johnson',
      role: 'E-commerce Director',
      company: 'StyleHouse',
      rating: 5,
      location: 'Atlanta, GA',
    },
  ],

  // FAQs
  faqs: [
    {
      question: 'What is Next.js and why should I use it?',
      answer: 'Next.js is the leading React framework for production websites. It provides server-side rendering, static generation, API routes, and automatic optimizations. It is the best choice for SEO-critical and performance-focused React projects.',
      category: 'General',
    },
    {
      question: 'Next.js vs plain React - what is the difference?',
      answer: 'Plain React is a UI library. Next.js is a full framework built on React. It adds routing, server rendering, API routes, image optimization, and more. For anything beyond a simple SPA, Next.js is the better choice.',
      category: 'Technical',
    },
    {
      question: 'Is Next.js good for SEO?',
      answer: 'Next.js is excellent for SEO. Server-side rendering and static generation make your content immediately visible to search engines. It is one of the best frameworks for SEO.',
      category: 'SEO',
    },
    {
      question: 'Can Next.js handle high traffic?',
      answer: 'Absolutely. Next.js powers some of the highest-traffic websites including Netflix, TikTok, and many more. With proper architecture and edge deployment, it handles millions of requests.',
      category: 'Performance',
    },
    {
      question: 'Do you deploy to Vercel or other platforms?',
      answer: 'We deploy to wherever makes sense for your project. Vercel is optimized for Next.js. We also deploy to AWS, Cloudflare, or self-hosted solutions based on your requirements.',
      category: 'Deployment',
    },
    {
      question: 'What is the App Router vs Pages Router?',
      answer: 'App Router is Next.js new architecture (Next.js 13+) with server components, nested layouts, and improved patterns. We build with App Router for new projects.',
      category: 'Technical',
    },
    {
      question: 'How does Next.js compare to other frameworks?',
      answer: 'Next.js leads in the React ecosystem. Compared to Gatsby, it offers more flexibility. Compared to Remix, it has a larger ecosystem. For React projects, Next.js is typically our recommendation.',
      category: 'Comparison',
    },
    {
      question: 'Can you migrate our existing site to Next.js?',
      answer: 'Yes. We migrate sites from various platforms to Next.js. Whether from WordPress, plain React, or another framework, we can plan and execute a migration with minimal disruption.',
      category: 'Migration',
    },
  ],

  // Related Services
  relatedServices: [
    {
      name: 'React Development',
      slug: 'react-development',
      description: 'Expert React.js development services',
      icon: 'Code',
    },
    {
      name: 'Custom Web Development',
      slug: 'custom-web-development',
      description: 'Bespoke web solutions from scratch',
      icon: 'Sparkles',
    },
    {
      name: 'E-commerce Development',
      slug: 'ecommerce-development',
      description: 'Online stores powered by Next.js',
      icon: 'ShoppingCart',
    },
    {
      name: 'API Development',
      slug: 'api-development',
      description: 'Full-stack API development',
      icon: 'Plug',
    },
  ],

  // SEO
  seo: {
    title: 'Next.js Development Services | Expert Next.js Developers',
    description: 'Professional Next.js development services. Build SEO-optimized, blazing-fast web applications with server components, App Router, and edge deployment.',
    keywords: [
      'next.js development',
      'nextjs development',
      'next.js developers',
      'next.js agency',
      'next.js consulting',
      'react framework development',
      'server-side rendering',
    ],
  },
};
