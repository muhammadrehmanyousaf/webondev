import { ServiceData } from '@/components/services/sections';
export const frontendDevelopmentData: ServiceData = {
  name: 'Frontend Development',
  slug: 'frontend-development',
  tagline: 'Professional Development Services',
  category: 'Web Development',
  description: 'Expert frontend development services that create beautiful, performant, and accessible user interfaces. We build responsive web experiences using React, Vue, Angular, and modern web technologies.',
  hero: {
    headline: 'Frontend Development Services',
    subheadline: 'Beautiful, Fast, Accessible Web Interfaces',
    description: 'Create exceptional user experiences with modern frontend development. We specialize in React, Vue, Angular, and cutting-edge web technologies to build responsive, performant, and accessible interfaces that users love.',
    keyFeatures: [
      'React & Vue & Angular',
      'Responsive Design',
      'Performance Optimized',
      'Accessible (WCAG)'
    ],
    badges: ['React Certified', 'WCAG Compliant', '200+ UIs Built']
  },
  painPoints: [
    {
      icon: 'Smartphone',
      title: 'Broken Mobile Experience',
      description: 'Your website looks terrible on phones, losing the 60%+ of visitors who browse on mobile devices.',
      stat: '60%',
      statLabel: 'Mobile traffic lost'
    },
    {
      icon: 'Gauge',
      title: 'Slow Page Loads',
      description: 'Heavy, unoptimized code frustrates users and tanks your search rankings.',
      stat: '3s',
      statLabel: 'Max load time tolerance'
    },
    {
      icon: 'Eye',
      title: 'Accessibility Failures',
      description: 'Inaccessible interfaces exclude users and expose you to legal liability.',
      stat: '98%',
      statLabel: 'Sites fail accessibility'
    },
    {
      icon: 'Code',
      title: 'Unmaintainable Code',
      description: 'Spaghetti code makes updates expensive and introduces bugs with every change.',
      stat: '70%',
      statLabel: 'Time on technical debt'
    },
    {
      icon: 'Layers',
      title: 'Inconsistent UI',
      description: 'Without a design system, your interface looks fragmented and unprofessional.',
      stat: '40%',
      statLabel: 'Less user trust'
    },
    {
      icon: 'RefreshCw',
      title: 'Outdated Stack',
      description: 'Legacy frameworks limit features and make hiring developers difficult.',
      stat: '2x',
      statLabel: 'Higher hiring costs'
    }
  ],
  solutions: [
    {
      icon: 'Layout',
      title: 'Component Architecture',
      description: 'Modular, reusable component systems that scale with your application.',
      highlights: ['Atomic Design', 'Design Systems', 'Component Libraries', 'Storybook']
    },
    {
      icon: 'Smartphone',
      title: 'Responsive Development',
      description: 'Fluid layouts that provide optimal experiences on any screen size.',
      highlights: ['Mobile-First', 'Fluid Grids', 'Responsive Images', 'Touch Optimization']
    },
    {
      icon: 'Zap',
      title: 'Performance Engineering',
      description: 'Blazing-fast interfaces optimized for Core Web Vitals and user experience.',
      highlights: ['Code Splitting', 'Lazy Loading', 'Image Optimization', 'Bundle Analysis']
    },
    {
      icon: 'Eye',
      title: 'Accessibility (a11y)',
      description: 'Inclusive interfaces that work for everyone, meeting WCAG 2.1 AA standards.',
      highlights: ['Screen Reader Support', 'Keyboard Navigation', 'Color Contrast', 'ARIA Labels']
    },
    {
      icon: 'Palette',
      title: 'Modern Styling',
      description: 'Maintainable CSS architecture using modern tools and methodologies.',
      highlights: ['Tailwind CSS', 'CSS Modules', 'Styled Components', 'Design Tokens']
    },
    {
      icon: 'GitBranch',
      title: 'State Management',
      description: 'Robust application state handling for complex, interactive interfaces.',
      highlights: ['Redux/Zustand', 'React Query', 'Context API', 'Server State']
    }
  ],
  process: {
    steps: [
      {
        icon: 'FileText',
        title: 'Requirements & Design Review',
        description: 'We analyze designs, user requirements, and technical constraints to plan the frontend architecture.',
        duration: '1 week',
        deliverables: ['Technical Requirements', 'Component Plan', 'Tech Stack Recommendation']
      },
      {
        icon: 'Layers',
        title: 'Design System Setup',
        description: 'Establish foundations: typography, colors, spacing, and base components.',
        duration: '1 week',
        deliverables: ['Design Tokens', 'Base Components', 'Storybook Setup']
      },
      {
        icon: 'Code',
        title: 'Component Development',
        description: 'Build all UI components with proper typing, testing, and documentation.',
        duration: '2-4 weeks',
        deliverables: ['Component Library', 'Unit Tests', 'Component Docs']
      },
      {
        icon: 'Layout',
        title: 'Page Integration',
        description: 'Assemble components into pages with routing, state management, and API integration.',
        duration: '2-3 weeks',
        deliverables: ['Complete Pages', 'API Integration', 'State Management']
      },
      {
        icon: 'TestTube',
        title: 'Testing & Optimization',
        description: 'Comprehensive testing across browsers and devices plus performance optimization.',
        duration: '1 week',
        deliverables: ['Test Suite', 'Performance Report', 'Accessibility Audit']
      },
      {
        icon: 'Rocket',
        title: 'Launch & Support',
        description: 'Deploy with monitoring and provide ongoing support for updates and enhancements.',
        duration: 'Ongoing',
        deliverables: ['Production Build', 'CI/CD Pipeline', 'Documentation']
      }
    ],
    totalDuration: '8-12 weeks'
  },
  benefits: [
    {
      icon: 'Zap',
      title: 'Lightning Performance',
      description: 'Optimized bundles and smart loading strategies achieve sub-second interactions.',
      stat: '90+',
      statSuffix: '',
      statLabel: 'PageSpeed Score'
    },
    {
      icon: 'Eye',
      title: 'Full Accessibility',
      description: 'WCAG 2.1 AA compliance ensures your interface works for all users.',
      stat: '100%',
      statSuffix: '',
      statLabel: 'WCAG Compliant'
    },
    {
      icon: 'Smartphone',
      title: 'Pixel-Perfect Responsive',
      description: 'Flawless layouts on every device from mobile phones to ultra-wide monitors.',
      stat: '100%',
      statSuffix: '',
      statLabel: 'Device Coverage'
    },
    {
      icon: 'Layers',
      title: 'Scalable Components',
      description: 'Reusable component libraries accelerate future development significantly.',
      stat: '50%',
      statSuffix: '',
      statLabel: 'Faster New Features'
    },
    {
      icon: 'Code',
      title: 'Clean Codebase',
      description: 'TypeScript, comprehensive tests, and documentation make maintenance effortless.',
      stat: '80%',
      statSuffix: '',
      statLabel: 'Less Bug Fixing'
    },
    {
      icon: 'Users',
      title: 'Better UX Metrics',
      description: 'Fast, intuitive interfaces increase engagement and conversion rates.',
      stat: '35%',
      statSuffix: '',
      statLabel: 'Higher Conversion'
    }
  ],
  techStack: [
    {
      name: 'Frontend Frameworks',
      description: 'Modern JavaScript frameworks',
      technologies: [
        { name: 'React', icon: 'react', category: 'Framework', proficiency: 'expert' },
        { name: 'Vue.js', icon: 'vue', category: 'Framework', proficiency: 'expert' },
        { name: 'Angular', icon: 'angular', category: 'Framework', proficiency: 'advanced' },
        { name: 'Svelte', icon: 'svelte', category: 'Framework', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Styling Solutions',
      description: 'Modern CSS and design systems',
      technologies: [
        { name: 'Tailwind CSS', icon: 'tailwind', category: 'CSS', proficiency: 'expert' },
        { name: 'CSS Modules', icon: 'css', category: 'CSS', proficiency: 'expert' },
        { name: 'Styled Components', icon: 'styled', category: 'CSS-in-JS', proficiency: 'expert' },
        { name: 'Sass/SCSS', icon: 'sass', category: 'CSS', proficiency: 'expert' }
      ]
    },
    {
      name: 'Build & Testing',
      description: 'Development tooling',
      technologies: [
        { name: 'TypeScript', icon: 'typescript', category: 'Language', proficiency: 'expert' },
        { name: 'Vite', icon: 'vite', category: 'Build', proficiency: 'expert' },
        { name: 'Jest/Vitest', icon: 'jest', category: 'Testing', proficiency: 'expert' },
        { name: 'Playwright', icon: 'playwright', category: 'E2E Testing', proficiency: 'expert' }
      ]
    },
    {
      name: 'State & Data',
      description: 'State management solutions',
      technologies: [
        { name: 'Redux Toolkit', icon: 'redux', category: 'State', proficiency: 'expert' },
        { name: 'Zustand', icon: 'zustand', category: 'State', proficiency: 'expert' },
        { name: 'TanStack Query', icon: 'react', category: 'Data', proficiency: 'expert' },
        { name: 'Apollo Client', icon: 'apollo', category: 'GraphQL', proficiency: 'expert' }
      ]
    }
  ],
  pricing: {
    plans: [
      {
        name: 'Small Project',
        description: 'Simple frontend with limited pages',
        price: '$8,000',
        priceNote: 'One-time payment',
        features: [
          { name: 'Up to 10 Pages', included: true },
          { name: 'Responsive Design', included: true },
          { name: 'Basic Components', included: true },
          { name: 'Performance Optimization', included: true },
          { name: '30-Day Support', included: true },
          { name: 'Basic Accessibility', included: true },
          { name: 'Design System', included: false },
          { name: 'Advanced State Management', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Standard Project',
        description: 'Full-featured frontend application',
        price: '$25,000',
        priceNote: 'One-time payment',
        badge: 'Most Popular',
        features: [
          { name: 'Unlimited Pages', included: true },
          { name: 'Complete Design System', included: true },
          { name: 'Custom Component Library', included: true },
          { name: 'Full Accessibility (WCAG 2.1 AA)', included: true },
          { name: 'State Management', included: true },
          { name: 'API Integration', included: true },
          { name: '90-Day Support', included: true },
          { name: 'Storybook Documentation', included: true }
        ],
        ctaText: 'Start Project',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Complex applications and platforms',
        price: '$60,000+',
        priceNote: 'Starting price',
        features: [
          { name: 'Complex Application', included: true },
          { name: 'Enterprise Design System', included: true },
          { name: 'Micro-frontend Architecture', included: true },
          { name: 'Real-time Features', included: true },
          { name: 'Advanced Performance', included: true },
          { name: 'Full Test Coverage', included: true },
          { name: '12-Month Support', included: true },
          { name: 'Dedicated Team', included: true }
        ],
        ctaText: 'Contact Sales',
        highlighted: false
      }
    ],
    customNote: 'All projects include TypeScript, modern build tools, and cross-browser testing.'
  },
  portfolio: [
    {
      title: 'TradePro Trading Platform',
      client: 'TradePro Financial',
      industry: 'Financial Services',
      description: 'Real-time trading dashboard with complex charts, order management, and live market data.',
      challenge: 'TradePro needed a frontend that could display real-time data for thousands of instruments without lag or memory leaks.',
      solution: 'We built a React application with virtualized lists, WebSocket data handling, optimized re-renders, and D3.js charts.',
      results: [
        '60fps rendering maintained',
        '<100ms data latency',
        '10,000+ concurrent users',
        '4.8 user satisfaction'
      ],
      metrics: [
        { label: 'Render Performance', value: '60fps' },
        { label: 'Data Latency', value: '<100ms' },
        { label: 'Concurrent Users', value: '10K+' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['React', 'TypeScript', 'D3.js', 'WebSocket', 'Trading']
    },
    {
      title: 'MediCare Patient Portal',
      client: 'MediCare Health',
      industry: 'Healthcare',
      description: 'Accessible patient portal with appointment booking, records, and telehealth integration.',
      challenge: 'MediCare needed a fully accessible frontend that elderly patients with various disabilities could easily navigate.',
      solution: 'We developed a Vue.js application with comprehensive WCAG 2.1 AA compliance, large touch targets, and screen reader optimization.',
      results: [
        '100% WCAG compliant',
        '92% patient satisfaction',
        '50% fewer support calls',
        '3x mobile usage'
      ],
      metrics: [
        { label: 'WCAG Compliance', value: '100%' },
        { label: 'Patient Satisfaction', value: '92%' },
        { label: 'Mobile Growth', value: '3x' }
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      tags: ['Vue.js', 'Accessibility', 'Healthcare', 'WCAG', 'Telehealth']
    },
    {
      title: 'RetailHub Dashboard',
      client: 'RetailHub Inc',
      industry: 'Retail Technology',
      description: 'Multi-tenant retail analytics dashboard with customizable widgets and real-time KPIs.',
      challenge: 'RetailHub needed a white-label dashboard that different retail clients could customize without code changes.',
      solution: 'We created an Angular application with a drag-and-drop widget system, theme customization, and real-time data visualization.',
      results: [
        '200+ retail clients',
        '40% faster insights',
        '95% customization coverage',
        'Zero-code theming'
      ],
      metrics: [
        { label: 'Retail Clients', value: '200+' },
        { label: 'Faster Insights', value: '40%' },
        { label: 'Customization', value: '95%' }
      ],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['Angular', 'TypeScript', 'Dashboard', 'White-label', 'Analytics']
    },
    {
      title: 'StartupLaunch Marketing Site',
      client: 'StartupLaunch Accelerator',
      industry: 'Startup',
      description: 'High-converting marketing site with interactive demos, testimonials carousel, and lead capture forms.',
      challenge: 'StartupLaunch needed a visually stunning site that converted visitors into accelerator applicants.',
      solution: 'We built a React-based marketing site with smooth animations, A/B tested forms, and optimized Core Web Vitals.',
      results: [
        '150% conversion increase',
        '98 PageSpeed score',
        '45% lower bounce rate',
        '2x application volume'
      ],
      metrics: [
        { label: 'Conversion Increase', value: '150%' },
        { label: 'PageSpeed Score', value: '98' },
        { label: 'Application Growth', value: '2x' }
      ],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Marketing', 'Startup']
    }
  ],
  testimonials: [
    {
      quote: 'Our trading platform now handles 10,000 users without a hiccup. The performance optimization they did was incredible.',
      author: 'Richard Taylor',
      role: 'VP of Engineering',
      company: 'TradePro Financial',
      rating: 5,
      location: 'New York, USA'
    },
    {
      quote: 'The accessibility work transformed our patient portal. We have received zero ADA complaints since launch.',
      author: 'Dr. Sarah Patel',
      role: 'Chief Digital Officer',
      company: 'MediCare Health',
      rating: 5,
      location: 'Boston, USA'
    },
    {
      quote: 'The component library they built cut our feature development time in half. It is a game changer.',
      author: 'Mark Anderson',
      role: 'Product Director',
      company: 'RetailHub Inc',
      rating: 5,
      location: 'Seattle, USA'
    }
  ],
  faqs: [
    {
      question: 'Which frontend framework do you recommend?',
      answer: 'It depends on your needs. React is excellent for complex applications and has the largest ecosystem. Vue.js offers a gentler learning curve and is great for progressive enhancement. Angular suits enterprise applications with strict structure requirements. We evaluate your project requirements, team skills, and long-term maintenance needs to recommend the best fit. We are experts in all major frameworks.'
    },
    {
      question: 'How do you ensure frontend performance?',
      answer: 'Performance is built into our process. We implement code splitting to load only what is needed, lazy loading for images and components, optimized bundle sizes through tree shaking, efficient re-render strategies, and proper caching. We target Core Web Vitals metrics and regularly test with Lighthouse. Every project achieves 90+ performance scores.'
    },
    {
      question: 'Do you build mobile apps or just websites?',
      answer: 'We focus on web frontends, including Progressive Web Apps (PWAs) that provide app-like experiences. For native mobile apps, we offer React Native development which shares code with React web apps. If you need a native iOS/Android app, we can build it separately or recommend our mobile development team.'
    },
    {
      question: 'How do you handle frontend accessibility?',
      answer: 'Accessibility is not an afterthought, it is built into every component. We follow WCAG 2.1 AA standards, implementing proper semantic HTML, ARIA labels, keyboard navigation, focus management, color contrast, and screen reader support. We test with assistive technologies and conduct accessibility audits before launch.'
    },
    {
      question: 'Can you work with our existing backend team?',
      answer: 'Absolutely. We frequently collaborate with in-house backend teams or other vendors. We establish clear API contracts early, use TypeScript for type-safe integration, and maintain excellent communication. Our developers are experienced with various API patterns including REST, GraphQL, and WebSocket.'
    },
    {
      question: 'Do you provide design services or just development?',
      answer: 'While we specialize in development, we collaborate closely with designers. We can work with your design team, recommend design partners, or our UX team can handle design. When designs come from elsewhere, we provide implementation feedback and ensure pixel-perfect execution while maintaining performance and accessibility.'
    }
  ],
  relatedServices: [
    {
      name: 'React Development',
      slug: 'react-development',
      description: 'Specialized React development services',
      icon: 'Code'
    },
    {
      name: 'UI/UX Design',
      slug: 'ui-ux-design',
      description: 'User interface and experience design',
      icon: 'Palette'
    },
    {
      name: 'Full-Stack Development',
      slug: 'fullstack-development',
      description: 'Complete frontend and backend solutions',
      icon: 'Layers'
    },
    {
      name: 'Progressive Web Apps',
      slug: 'progressive-web-apps',
      description: 'Installable, offline-capable web apps',
      icon: 'Smartphone'
    }
  ],
  seo: {
    title: 'Frontend Development Services | React, Vue, Angular Development',
    description: 'Expert frontend development services using React, Vue, Angular, and modern web technologies. Build beautiful, performant, accessible web interfaces that users love.',
    keywords: [
      'frontend development',
      'react development',
      'vue development',
      'angular development',
      'frontend developer',
      'web development',
      'responsive design',
      'accessibility development',
      'ui development',
      'javascript development'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Frontend Development',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Frontend Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'React Development'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Vue.js Development'
            }
          }
        ]
      }
    }
  }
};
