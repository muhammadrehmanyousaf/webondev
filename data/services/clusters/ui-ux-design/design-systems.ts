// Design Systems - UI/UX Design Cluster
// Comprehensive service data for design system services

import { ServiceData } from '@/components/services/sections';

export const designSystemsData: ServiceData = {
  slug: 'design-systems',
  name: 'Design Systems',
  tagline: 'Scalable design infrastructure that accelerates your product',
  description: 'Build comprehensive design systems that ensure consistency, accelerate development, and scale with your organization. We create the design infrastructure that enables teams to build products faster while maintaining quality and brand coherence.',
  category: 'UI/UX Design',

  hero: {
    headline: 'Design Systems',
    subheadline: 'Your Product\'s Design Infrastructure',
    description: 'Stop recreating the wheel with every feature. A design system is the single source of truth that aligns design and development, ensures consistency, and dramatically accelerates how fast your team can ship quality products.',
    keyFeatures: [
      'Component Libraries',
      'Design Tokens',
      'Documentation & Guidelines',
      'Design-Dev Synchronization'
    ],
    badges: ['Figma', 'Storybook', 'Design Tokens', 'Component Library']
  },

  painPoints: [
    {
      icon: 'Shuffle',
      title: 'Inconsistent Product',
      description: 'Every screen looks different because designers recreate components each time.',
      stat: '40%',
      statLabel: 'design time on recreating'
    },
    {
      icon: 'Clock',
      title: 'Slow Design & Development',
      description: 'Building from scratch every time wastes hours that could be spent on innovation.',
      stat: '4x',
      statLabel: 'longer without system'
    },
    {
      icon: 'Code',
      title: 'Design-Dev Disconnect',
      description: 'Designs don\'t match implementation because there\'s no shared component language.',
      stat: '30%',
      statLabel: 'dev rework'
    },
    {
      icon: 'Users',
      title: 'Team Scaling Issues',
      description: 'New team members can\'t maintain consistency without documented standards.',
      stat: '6',
      statLabel: 'months to full productivity'
    },
    {
      icon: 'TrendingDown',
      title: 'Technical Debt',
      description: 'Multiple versions of the same component create maintenance nightmares.',
      stat: '50+',
      statLabel: 'button variants'
    },
    {
      icon: 'RefreshCw',
      title: 'Rebranding Nightmares',
      description: 'Updating brand requires touching every screen because nothing is connected.',
      stat: '6-12',
      statLabel: 'months to rebrand'
    }
  ],

  solutions: [
    {
      icon: 'Layers',
      title: 'Component Library',
      description: 'Comprehensive library of reusable UI components with variants and states.',
      highlights: [
        'Atomic design structure',
        'Component variants',
        'All interaction states',
        'Responsive behavior'
      ]
    },
    {
      icon: 'Code',
      title: 'Design Tokens',
      description: 'Centralized design decisions that sync between design tools and code.',
      highlights: [
        'Color tokens',
        'Typography scales',
        'Spacing system',
        'Motion values'
      ]
    },
    {
      icon: 'Book',
      title: 'Documentation',
      description: 'Clear guidelines for when and how to use each component.',
      highlights: [
        'Usage guidelines',
        'Do\'s and don\'ts',
        'Pattern documentation',
        'Accessibility notes'
      ]
    },
    {
      icon: 'Box',
      title: 'Figma Library',
      description: 'Production-ready Figma library with auto-layout and variants.',
      highlights: [
        'Auto-layout components',
        'Variant properties',
        'Slot patterns',
        'Team library'
      ]
    },
    {
      icon: 'Terminal',
      title: 'Code Component Library',
      description: 'React/Vue/Angular components that match design specifications exactly.',
      highlights: [
        'Framework components',
        'Storybook integration',
        'Accessibility built-in',
        'TypeScript support'
      ]
    },
    {
      icon: 'RefreshCw',
      title: 'Governance & Evolution',
      description: 'Processes for maintaining and evolving the system over time.',
      highlights: [
        'Contribution guidelines',
        'Version control',
        'Change management',
        'Feedback loops'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Audit & Discovery',
        description: 'Analyze existing design and code to understand current state and needs.',
        duration: '1-2 weeks',
        deliverables: ['Design audit', 'Code audit', 'Component inventory', 'Gap analysis']
      },
      {
        icon: 'Target',
        title: 'Strategy & Architecture',
        description: 'Define system architecture, token structure, and component hierarchy.',
        duration: '1-2 weeks',
        deliverables: ['System architecture', 'Token schema', 'Component structure', 'Naming conventions']
      },
      {
        icon: 'Palette',
        title: 'Foundation Design',
        description: 'Establish foundational elements: tokens, colors, typography, spacing.',
        duration: '2-3 weeks',
        deliverables: ['Design tokens', 'Color system', 'Type scale', 'Spacing system']
      },
      {
        icon: 'Layers',
        title: 'Component Design',
        description: 'Design core components with all variants, states, and responsive behavior.',
        duration: '4-6 weeks',
        deliverables: ['Core components', 'Component variants', 'Interaction states', 'Documentation']
      },
      {
        icon: 'Code',
        title: 'Code Implementation',
        description: 'Build coded component library with Storybook documentation.',
        duration: '4-6 weeks',
        deliverables: ['React/Vue components', 'Storybook', 'npm package', 'API documentation']
      },
      {
        icon: 'Users',
        title: 'Launch & Training',
        description: 'Roll out system to team with training and adoption support.',
        duration: '2 weeks',
        deliverables: ['Team training', 'Adoption guide', 'Support materials', 'Governance docs']
      }
    ],
    totalDuration: '14-21 weeks'
  },

  benefits: [
    {
      icon: 'Zap',
      title: 'Faster Design',
      description: 'Designers build screens 4x faster using pre-built components.',
      stat: '4',
      statSuffix: 'x',
      statLabel: 'faster design'
    },
    {
      icon: 'Code',
      title: 'Faster Development',
      description: 'Developers implement designs faster with ready-to-use components.',
      stat: '47',
      statSuffix: '%',
      statLabel: 'faster development'
    },
    {
      icon: 'Layers',
      title: 'Perfect Consistency',
      description: 'Every screen maintains brand and UX consistency automatically.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'consistency'
    },
    {
      icon: 'Users',
      title: 'Team Scalability',
      description: 'New team members become productive much faster.',
      stat: '60',
      statSuffix: '%',
      statLabel: 'faster onboarding'
    },
    {
      icon: 'RefreshCw',
      title: 'Easy Updates',
      description: 'Update once, propagate everywhere—rebrands in days, not months.',
      stat: '90',
      statSuffix: '%',
      statLabel: 'faster updates'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Savings',
      description: 'Reduce design and development costs through reuse.',
      stat: '$1M',
      statSuffix: '+',
      statLabel: 'annual savings'
    }
  ],

  techStack: [
    {
      name: 'Design Tools',
      description: 'System design software',
      technologies: [
        { name: 'Figma', category: 'Design', proficiency: 'expert' },
        { name: 'Figma Variables', category: 'Tokens', proficiency: 'expert' },
        { name: 'Tokens Studio', category: 'Design Tokens', proficiency: 'expert' },
        { name: 'Supernova', category: 'Documentation', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Component Frameworks',
      description: 'UI component libraries',
      technologies: [
        { name: 'React', category: 'Framework', proficiency: 'expert' },
        { name: 'Vue.js', category: 'Framework', proficiency: 'expert' },
        { name: 'Tailwind CSS', category: 'Styling', proficiency: 'expert' },
        { name: 'Radix UI', category: 'Primitives', proficiency: 'expert' }
      ]
    },
    {
      name: 'Documentation',
      description: 'System documentation tools',
      technologies: [
        { name: 'Storybook', category: 'Component Docs', proficiency: 'expert' },
        { name: 'Docusaurus', category: 'Documentation', proficiency: 'advanced' },
        { name: 'Notion', category: 'Guidelines', proficiency: 'expert' },
        { name: 'Zeroheight', category: 'Design Docs', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Token Infrastructure',
      description: 'Design token tools',
      technologies: [
        { name: 'Style Dictionary', category: 'Tokens', proficiency: 'expert' },
        { name: 'Token Studio', category: 'Figma Plugin', proficiency: 'expert' },
        { name: 'CSS Variables', category: 'Implementation', proficiency: 'expert' },
        { name: 'Theo', category: 'Token Transform', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Testing & QA',
      description: 'Component testing',
      technologies: [
        { name: 'Chromatic', category: 'Visual Testing', proficiency: 'expert' },
        { name: 'Jest', category: 'Unit Testing', proficiency: 'expert' },
        { name: 'Playwright', category: 'E2E Testing', proficiency: 'advanced' },
        { name: 'Axe', category: 'Accessibility', proficiency: 'expert' }
      ]
    },
    {
      name: 'Distribution',
      description: 'Package management',
      technologies: [
        { name: 'npm', category: 'Package Manager', proficiency: 'expert' },
        { name: 'GitHub Packages', category: 'Registry', proficiency: 'expert' },
        { name: 'Changesets', category: 'Versioning', proficiency: 'advanced' },
        { name: 'Turborepo', category: 'Monorepo', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Starter System',
        description: 'Essential design system for small teams',
        price: '$25,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Design Tokens', included: true },
          { name: 'Core Components (15-20)', included: true },
          { name: 'Figma Library', included: true },
          { name: 'Basic Documentation', included: true },
          { name: 'Team Training Session', included: true },
          { name: 'Coded Components', included: false },
          { name: 'Storybook', included: false },
          { name: 'Ongoing Support', included: false }
        ],
        ctaText: 'Start Project'
      },
      {
        name: 'Complete System',
        description: 'Full design system with code implementation',
        price: '$75,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Complete Token System', included: true },
          { name: 'Full Component Library (40+)', included: true },
          { name: 'Production Figma Library', included: true },
          { name: 'React Component Library', included: true },
          { name: 'Storybook Documentation', included: true },
          { name: 'Comprehensive Guidelines', included: true },
          { name: 'Multi-Platform Support', included: false },
          { name: 'Long-term Partnership', included: false }
        ],
        highlighted: true,
        badge: 'Most Popular',
        ctaText: 'Start Project'
      },
      {
        name: 'Enterprise System',
        description: 'Enterprise-scale design infrastructure',
        price: '$200,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Multi-Brand Support', included: true },
          { name: 'Unlimited Components', included: true },
          { name: 'Multiple Framework Support', included: true },
          { name: 'Token Sync Pipeline', included: true },
          { name: 'Governance Framework', included: true },
          { name: 'Dedicated Training Program', included: true },
          { name: 'Annual Maintenance', included: true },
          { name: '12-Month Support', included: true }
        ],
        ctaText: 'Contact Us'
      }
    ],
    customNote: 'Design system scope varies by organization size and needs. Contact us for a detailed proposal.'
  },

  portfolio: [
    {
      title: 'FinTech Design System',
      client: 'PaymentPro',
      industry: 'Financial Services',
      description: 'Comprehensive design system for a suite of financial products used by millions.',
      challenge: '5 products with inconsistent UIs, slow feature development, and a planned rebrand.',
      solution: 'Unified design system with design tokens, 60+ components, and React implementation.',
      results: [
        '47% faster feature development',
        'Rebrand completed in 2 weeks',
        'Unified 5 products',
        '$2M annual savings'
      ],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['FinTech', 'React', 'Storybook', 'Enterprise'],
      testimonial: {
        quote: 'The design system transformed how we build products. Updates that took months now take days.',
        author: 'Jennifer Adams',
        role: 'VP Design'
      }
    },
    {
      title: 'SaaS Product System',
      client: 'CloudOps',
      industry: 'Technology',
      description: 'Design system for complex B2B SaaS platform with 200+ screens.',
      challenge: 'Growing team couldn\'t maintain consistency. Each designer created different component versions.',
      solution: 'Figma library with variables, documented guidelines, and Vue.js component library.',
      results: [
        '4x faster design velocity',
        '100% design consistency',
        'Designer onboarding: 6 weeks → 2 weeks',
        'Zero design debt'
      ],
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
      tags: ['SaaS', 'Vue.js', 'Figma', 'B2B'],
      testimonial: {
        quote: 'New designers are productive in weeks, not months. The system pays for itself.',
        author: 'Michael Chen',
        role: 'Head of Design'
      }
    },
    {
      title: 'Multi-Brand E-commerce',
      client: 'RetailGroup',
      industry: 'Retail',
      description: 'Shared design system supporting 3 distinct retail brands.',
      challenge: '3 brands sharing engineering but needing distinct visual identities.',
      solution: 'Token-based multi-brand system with shared components and brand-specific theming.',
      results: [
        '3 brands, 1 codebase',
        '60% development cost reduction',
        'Brand consistency enforced',
        'New brand launch: 6 months → 6 weeks'
      ],
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Multi-Brand', 'Design Tokens', 'Retail'],
      testimonial: {
        quote: 'We launched a new brand in 6 weeks using the same system. Incredible efficiency.',
        author: 'Sarah Kim',
        role: 'CTO'
      }
    },
    {
      title: 'Healthcare Component Library',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      description: 'Accessible design system for healthcare applications meeting HIPAA and WCAG standards.',
      challenge: 'Multiple healthcare apps with inconsistent accessibility and compliance issues.',
      solution: 'Comprehensive component library with built-in accessibility, documentation, and Angular implementation.',
      results: [
        '100% WCAG AA compliance',
        '55% faster development cycles',
        'Unified 8 healthcare apps',
        'Zero accessibility violations'
      ],
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'Angular', 'Accessibility', 'Enterprise'],
      testimonial: {
        quote: 'The design system ensured all our apps meet strict healthcare compliance requirements effortlessly.',
        author: 'Dr. Robert Chen',
        role: 'Chief Digital Officer'
      }
    }
  ],

  testimonials: [
    {
      quote: 'The design system was the best investment we\'ve made. Our team ships 4x faster now.',
      author: 'David Park',
      role: 'VP Engineering',
      company: 'TechProduct Inc',
      rating: 5,
      location: 'San Francisco, CA'
    },
    {
      quote: 'Finally, design and development speak the same language. Handoff issues disappeared.',
      author: 'Lisa Thompson',
      role: 'Design Lead',
      company: 'Enterprise Software Co',
      rating: 5,
      location: 'New York, NY'
    },
    {
      quote: 'The documentation is exceptional. Anyone can understand when and how to use each component.',
      author: 'James Wilson',
      role: 'Frontend Lead',
      company: 'StartupX',
      rating: 5,
      location: 'Austin, TX'
    }
  ],

  faqs: [
    {
      question: 'What\'s the ROI of a design system?',
      answer: 'Studies show 47% faster development, 4x faster design, and significant cost savings. A design system typically pays for itself within 6-12 months through efficiency gains. Enterprise organizations often save $1M+ annually once systems are mature.'
    },
    {
      question: 'How long does it take to build a design system?',
      answer: 'A starter system takes 8-12 weeks. A comprehensive system with coded components takes 14-21 weeks. Enterprise systems with multiple brands can take 6+ months. We recommend starting with core components and expanding iteratively.'
    },
    {
      question: 'Do you build coded components or just design?',
      answer: 'We offer both. Many clients start with design systems in Figma, then add coded components. We build production-ready React, Vue, or Angular component libraries with Storybook documentation and full TypeScript support.'
    },
    {
      question: 'How do design tokens work?',
      answer: 'Design tokens are the atomic building blocks—colors, spacing, typography—defined once and used everywhere. When you change a token, it updates across Figma and code automatically. This makes rebranding or theme changes trivial.'
    },
    {
      question: 'Can you help maintain the system ongoing?',
      answer: 'Yes, we offer ongoing maintenance and evolution partnerships. Design systems need care—new components, updates, governance. We can serve as your design system team or train your internal team to maintain it.'
    },
    {
      question: 'What if we already have some components?',
      answer: 'We audit existing components and incorporate what works. Often we can rationalize and unify existing components rather than starting from scratch. Your existing investment isn\'t wasted—it\'s refined.'
    }
  ],

  relatedServices: [
    {
      name: 'User Interface Design',
      slug: 'user-interface-design',
      description: 'Product UI built on your design system',
      icon: 'Palette'
    },
    {
      name: 'Web Development',
      slug: '/web-development',
      description: 'Frontend development using your system',
      icon: 'Code'
    },
    {
      name: 'Web Design',
      slug: 'web-design',
      description: 'Website design with system components',
      icon: 'Monitor'
    },
    {
      name: 'Mobile App Design',
      slug: 'mobile-app-design',
      description: 'Mobile design extending your system',
      icon: 'Smartphone'
    }
  ],

  seo: {
    title: 'Design System Services | Component Libraries, Design Tokens, Storybook',
    description: 'Professional design system services including component libraries, design tokens, Figma libraries, and coded React/Vue components. Accelerate development and ensure consistency.',
    keywords: [
      'design system',
      'component library',
      'design tokens',
      'ui component library',
      'figma design system',
      'storybook',
      'react components',
      'design system consulting',
      'atomic design',
      'design infrastructure'
    ]
  }
};
