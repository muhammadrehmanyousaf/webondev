// Legacy System Modernization - Software Development Cluster
// Comprehensive service data for legacy system modernization services

import { ServiceData } from '@/components/services/sections';

export const legacySystemModernizationData: ServiceData = {
  slug: 'legacy-system-modernization',
  name: 'Legacy System Modernization',
  tagline: 'Transform outdated systems into modern, competitive advantages',
  description: 'Breathe new life into your legacy applications. We modernize outdated systems using proven strategies—from incremental refactoring to complete rewrites—while preserving your business logic and minimizing operational risk.',
  category: 'Software Development',

  hero: {
    headline: 'Legacy System Modernization',
    subheadline: 'Transform Technical Debt into Competitive Advantage',
    description: 'Stop letting legacy systems hold your business back. We modernize outdated applications with minimal disruption, preserving decades of business logic while unlocking modern capabilities, cloud scalability, and reduced maintenance costs.',
    keyFeatures: [
      'Risk-Mitigated Migration Strategies',
      'Business Logic Preservation',
      'Cloud-Native Transformation',
      'Zero-Downtime Transitions'
    ],
    badges: ['COBOL', 'Mainframe', 'VB6', 'On-Premise to Cloud']
  },

  painPoints: [
    {
      icon: 'Clock',
      title: 'Maintenance Costs Skyrocketing',
      description: 'Legacy systems consume 60-80% of IT budgets just to maintain, leaving little room for innovation.',
      stat: '75%',
      statLabel: 'budget on maintenance'
    },
    {
      icon: 'Users',
      title: 'Talent Scarcity',
      description: 'Finding developers who know COBOL, VB6, or legacy frameworks is increasingly impossible and expensive.',
      stat: '50%',
      statLabel: 'skills retired'
    },
    {
      icon: 'AlertTriangle',
      title: 'Security Vulnerabilities',
      description: 'Outdated systems lack modern security features, leaving your business exposed to breaches.',
      stat: '60%',
      statLabel: 'of breaches'
    },
    {
      icon: 'Plug',
      title: 'Integration Roadblocks',
      description: 'Legacy systems can\'t integrate with modern APIs, cloud services, or partner systems.',
      stat: '3x',
      statLabel: 'integration cost'
    },
    {
      icon: 'TrendingDown',
      title: 'Business Agility Lost',
      description: 'Simple changes take months instead of days, competitors move faster while you\'re stuck.',
      stat: '10x',
      statLabel: 'slower delivery'
    },
    {
      icon: 'Server',
      title: 'Infrastructure Lock-in',
      description: 'Tied to expensive, end-of-life hardware and on-premise infrastructure with no cloud path.',
      stat: '40%',
      statLabel: 'hardware costs'
    }
  ],

  solutions: [
    {
      icon: 'RefreshCw',
      title: 'Incremental Modernization',
      description: 'Gradually modernize systems piece by piece using the strangler fig pattern, minimizing risk.',
      highlights: [
        'Strangler fig pattern',
        'API wrapping strategy',
        'Gradual replacement',
        'Continuous operation'
      ]
    },
    {
      icon: 'Cloud',
      title: 'Cloud Migration',
      description: 'Move legacy applications to cloud infrastructure with lift-and-shift or cloud-native approaches.',
      highlights: [
        'Lift-and-shift migration',
        'Containerization (Docker/K8s)',
        'Cloud-native refactoring',
        'Hybrid cloud strategies'
      ]
    },
    {
      icon: 'Code',
      title: 'Language & Framework Migration',
      description: 'Migrate from obsolete languages like COBOL, VB6, or PowerBuilder to modern tech stacks.',
      highlights: [
        'COBOL to Java/.NET/Python',
        'VB6 to .NET Core',
        'PowerBuilder to web',
        'Automated code conversion'
      ]
    },
    {
      icon: 'Database',
      title: 'Database Modernization',
      description: 'Migrate from legacy databases to modern, scalable database solutions.',
      highlights: [
        'Mainframe DB to cloud DB',
        'Oracle to PostgreSQL',
        'Schema modernization',
        'Data migration & validation'
      ]
    },
    {
      icon: 'Layers',
      title: 'Architecture Transformation',
      description: 'Transform monolithic applications into modern, maintainable architectures.',
      highlights: [
        'Monolith to microservices',
        'Event-driven architecture',
        'API-first design',
        'Modular boundaries'
      ]
    },
    {
      icon: 'Monitor',
      title: 'UI/UX Modernization',
      description: 'Transform outdated terminal or desktop UIs into modern web and mobile interfaces.',
      highlights: [
        'Green screen to web UI',
        'Desktop to responsive web',
        'Mobile enablement',
        'Accessibility compliance'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'System Assessment',
        description: 'Comprehensive analysis of legacy systems, dependencies, business logic, and technical debt.',
        duration: '2-4 weeks',
        deliverables: ['System inventory', 'Dependency mapping', 'Risk assessment', 'Business logic documentation']
      },
      {
        icon: 'Target',
        title: 'Strategy Development',
        description: 'Define modernization approach—refactor, replatform, rearchitect, or rebuild—based on business goals.',
        duration: '2-3 weeks',
        deliverables: ['Modernization strategy', 'Technology selection', 'Migration roadmap', 'ROI analysis']
      },
      {
        icon: 'Layout',
        title: 'Architecture Design',
        description: 'Design target architecture with modern patterns, cloud infrastructure, and integration points.',
        duration: '3-4 weeks',
        deliverables: ['Target architecture', 'Integration design', 'Security framework', 'Infrastructure plan']
      },
      {
        icon: 'Code',
        title: 'Incremental Migration',
        description: 'Execute migration in phases, validating each step while maintaining system operation.',
        duration: '12-24 weeks',
        deliverables: ['Migrated components', 'Automated tests', 'Data migration', 'Integration validation']
      },
      {
        icon: 'CheckCircle',
        title: 'Validation & Testing',
        description: 'Comprehensive testing ensuring business logic preservation and performance improvement.',
        duration: '3-4 weeks',
        deliverables: ['Regression testing', 'Performance benchmarks', 'User acceptance', 'Security audit']
      },
      {
        icon: 'Rocket',
        title: 'Cutover & Optimization',
        description: 'Final transition to modern system with monitoring, optimization, and knowledge transfer.',
        duration: '2-3 weeks',
        deliverables: ['Production cutover', 'Performance optimization', 'Documentation', 'Team training']
      }
    ],
    totalDuration: '24-42 weeks'
  },

  benefits: [
    {
      icon: 'DollarSign',
      title: 'Reduced IT Costs',
      description: 'Modern systems cost 60% less to maintain and operate than legacy equivalents.',
      stat: '60',
      statSuffix: '%',
      statLabel: 'cost reduction'
    },
    {
      icon: 'Zap',
      title: 'Accelerated Delivery',
      description: 'New features and changes delivered in days instead of months.',
      stat: '10',
      statSuffix: 'x',
      statLabel: 'faster delivery'
    },
    {
      icon: 'Shield',
      title: 'Enhanced Security',
      description: 'Modern security practices protect against contemporary threats.',
      stat: '90',
      statSuffix: '%',
      statLabel: 'risk reduction'
    },
    {
      icon: 'Cloud',
      title: 'Cloud Scalability',
      description: 'Scale resources on demand without expensive hardware investments.',
      stat: 'Auto',
      statLabel: 'scaling enabled'
    },
    {
      icon: 'Users',
      title: 'Talent Availability',
      description: 'Modern tech stacks attract and retain skilled developers.',
      stat: '100',
      statSuffix: 'x',
      statLabel: 'more developers'
    },
    {
      icon: 'Plug',
      title: 'API Integration',
      description: 'Connect with any modern service, partner, or platform via standard APIs.',
      stat: 'Any',
      statLabel: 'integration possible'
    }
  ],

  techStack: [
    {
      name: 'Source Platforms',
      description: 'Legacy systems we modernize',
      technologies: [
        { name: 'COBOL/Mainframe', category: 'Legacy', proficiency: 'advanced' },
        { name: 'VB6/VB.NET', category: 'Legacy', proficiency: 'expert' },
        { name: 'PowerBuilder', category: 'Legacy', proficiency: 'advanced' },
        { name: 'Classic ASP', category: 'Legacy', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Target Platforms',
      description: 'Modern technology targets',
      technologies: [
        { name: '.NET Core/6+', category: 'Backend', proficiency: 'expert' },
        { name: 'Java/Spring Boot', category: 'Backend', proficiency: 'expert' },
        { name: 'Node.js', category: 'Backend', proficiency: 'expert' },
        { name: 'Python', category: 'Backend', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Cloud Platforms',
      description: 'Cloud migration targets',
      technologies: [
        { name: 'AWS', category: 'Cloud', proficiency: 'expert' },
        { name: 'Azure', category: 'Cloud', proficiency: 'expert' },
        { name: 'Google Cloud', category: 'Cloud', proficiency: 'advanced' },
        { name: 'Kubernetes', category: 'Orchestration', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Database Migration',
      description: 'Database modernization targets',
      technologies: [
        { name: 'PostgreSQL', category: 'Database', proficiency: 'expert' },
        { name: 'SQL Server', category: 'Database', proficiency: 'expert' },
        { name: 'MongoDB', category: 'Database', proficiency: 'advanced' },
        { name: 'AWS RDS/Aurora', category: 'Cloud DB', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Frontend Modern',
      description: 'Modern UI frameworks',
      technologies: [
        { name: 'React', category: 'Frontend', proficiency: 'expert' },
        { name: 'Angular', category: 'Frontend', proficiency: 'advanced' },
        { name: 'Vue.js', category: 'Frontend', proficiency: 'advanced' },
        { name: 'Next.js', category: 'Framework', proficiency: 'expert' }
      ]
    },
    {
      name: 'DevOps & CI/CD',
      description: 'Modern delivery pipelines',
      technologies: [
        { name: 'Docker', category: 'Containers', proficiency: 'expert' },
        { name: 'GitHub Actions', category: 'CI/CD', proficiency: 'expert' },
        { name: 'Terraform', category: 'IaC', proficiency: 'advanced' },
        { name: 'ArgoCD', category: 'GitOps', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Assessment',
        description: 'Comprehensive legacy system analysis and modernization roadmap',
        price: "$15,000",
        priceNote: 'Fixed price',
        features: [
          { name: 'System Inventory & Analysis', included: true },
          { name: 'Technical Debt Assessment', included: true },
          { name: 'Business Logic Documentation', included: true },
          { name: 'Modernization Strategy', included: true },
          { name: 'ROI Analysis', included: true },
          { name: 'Migration Execution', included: false },
          { name: 'Implementation Support', included: false },
          { name: 'Ongoing Maintenance', included: false }
        ],
        ctaText: 'Start Assessment'
      },
      {
        name: 'Modernization',
        description: 'Complete legacy system modernization implementation',
        price: "$150,000",
        priceNote: 'Starting price',
        features: [
          { name: 'Full Assessment Included', included: true },
          { name: 'Architecture Design', included: true },
          { name: 'Incremental Migration', included: true },
          { name: 'Data Migration', included: true },
          { name: 'Testing & Validation', included: true },
          { name: 'Production Cutover', included: true },
          { name: '6 Months Support', included: true },
          { name: 'Team Training', included: false }
        ],
        highlighted: true,
        badge: 'Most Popular',
        ctaText: 'Start Project'
      },
      {
        name: 'Enterprise Transformation',
        description: 'Large-scale enterprise modernization program',
        price: "$500,000",
        priceNote: 'Starting price',
        features: [
          { name: 'Multi-System Assessment', included: true },
          { name: 'Enterprise Architecture', included: true },
          { name: 'Phased Migration Program', included: true },
          { name: 'Cloud Infrastructure Setup', included: true },
          { name: 'DevOps Implementation', included: true },
          { name: 'Security & Compliance', included: true },
          { name: 'Dedicated Team', included: true },
          { name: '12 Months Support + Training', included: true }
        ],
        ctaText: 'Contact Us'
      }
    ],
    customNote: 'Every legacy modernization is unique. Contact us for a detailed assessment and customized proposal.'
  },

  portfolio: [
    {
      title: 'Mainframe to Cloud Migration',
      client: 'National Insurance Corp',
      industry: 'Insurance',
      description: 'Migrated 40-year-old COBOL mainframe system processing $5B in annual premiums to cloud-native microservices.',
      challenge: 'Critical insurance processing system on end-of-life mainframe with 3 million lines of COBOL and dwindling expertise.',
      solution: 'Incremental migration using strangler fig pattern, converting COBOL to Java microservices on AWS over 18 months.',
      results: [
        '$4M annual cost savings',
        '40x faster policy processing',
        'Zero data loss during migration',
        '99.99% uptime achieved'
      ],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      tags: ['COBOL', 'Java', 'AWS', 'Microservices'],
      testimonial: {
        quote: 'They turned our biggest liability into our competitive advantage. Remarkable transformation.',
        author: 'Robert Williams',
        role: 'CIO'
      }
    },
    {
      title: 'VB6 to .NET Core Migration',
      client: 'Manufacturing Systems Inc',
      industry: 'Manufacturing',
      description: 'Modernized mission-critical VB6 ERP system to .NET Core with web interface and mobile access.',
      challenge: 'VB6 desktop application running core business operations with no modern alternative and high risk of Windows compatibility issues.',
      solution: 'Rebuilt with .NET Core backend, React frontend, preserving all business logic through automated testing.',
      results: [
        'Web and mobile access enabled',
        '70% reduction in maintenance',
        'Modern API integrations',
        'Cloud deployment option'
      ],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      tags: ['VB6', '.NET Core', 'React', 'Azure'],
      testimonial: {
        quote: 'Our 20-year-old system is now a modern web application. Operations haven\'t missed a beat.',
        author: 'Patricia Chen',
        role: 'VP Operations'
      }
    },
    {
      title: 'Oracle to PostgreSQL Migration',
      client: 'HealthData Systems',
      industry: 'Healthcare',
      description: 'Migrated complex healthcare analytics platform from Oracle to PostgreSQL with zero downtime.',
      challenge: 'Oracle licensing costs consuming 40% of IT budget while limiting scalability and cloud options.',
      solution: 'Comprehensive migration to PostgreSQL on AWS RDS with schema optimization and query rewriting.',
      results: [
        '$2M annual license savings',
        '3x query performance',
        'HIPAA compliance maintained',
        'Auto-scaling enabled'
      ],
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop',
      tags: ['Oracle', 'PostgreSQL', 'AWS RDS', 'Healthcare'],
      testimonial: {
        quote: 'Better performance at a fraction of the cost. The migration paid for itself in 6 months.',
        author: 'Dr. James Liu',
        role: 'Chief Data Officer'
      }
    },
    {
      title: 'PowerBuilder to Web Modernization',
      client: 'RegionalBank Corp',
      industry: 'Banking',
      description: 'Transformed legacy PowerBuilder banking application into modern web platform with mobile banking capabilities.',
      challenge: 'PowerBuilder expertise scarce, system incompatible with modern security requirements, and customers demanding mobile access.',
      solution: 'Phased migration to Angular frontend with .NET Core microservices, maintaining 24/7 banking operations throughout.',
      results: [
        'Mobile banking launched',
        '60% faster transactions',
        'Modern security standards',
        'Customer satisfaction up 45%'
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['PowerBuilder', 'Angular', '.NET Core', 'Banking'],
      testimonial: {
        quote: 'Our customers finally have the mobile banking experience they deserve. Seamless transition.',
        author: 'Sandra Kim',
        role: 'Digital Banking Director'
      }
    }
  ],

  testimonials: [
    {
      quote: 'We thought our 30-year-old system was unmigrateable. They proved us wrong and saved us $3M annually.',
      author: 'Michael Torres',
      role: 'VP Technology',
      company: 'National Logistics Corp',
      rating: 5,
      location: 'Chicago, IL'
    },
    {
      quote: 'The strangler fig approach let us modernize without any business disruption. Zero downtime during the entire migration.',
      author: 'Sandra Kim',
      role: 'CTO',
      company: 'Regional Bank Holdings',
      rating: 5,
      location: 'Atlanta, GA'
    },
    {
      quote: 'Finding COBOL developers was impossible. Now we have a modern system any developer can work on.',
      author: 'David Patel',
      role: 'IT Director',
      company: 'Government Services Agency',
      rating: 5,
      location: 'Washington, DC'
    }
  ],

  faqs: [
    {
      question: 'How do you preserve business logic during modernization?',
      answer: 'We use multiple approaches: extensive documentation through reverse engineering, automated test generation from existing systems, parallel running of old and new systems, and domain expert involvement throughout. Business logic is extracted, tested, and validated before any code is deprecated.'
    },
    {
      question: 'What is the strangler fig pattern?',
      answer: 'The strangler fig pattern gradually replaces legacy system components with modern alternatives while both systems run in parallel. New features are built in the modern system, and legacy features are migrated piece by piece. This minimizes risk and allows continuous operation throughout the migration.'
    },
    {
      question: 'How long does legacy modernization typically take?',
      answer: 'Timelines vary significantly based on system complexity. Simple applications might modernize in 3-6 months. Complex enterprise systems typically require 12-24 months using phased approaches. We provide detailed timeline estimates after assessment.'
    },
    {
      question: 'Can you modernize COBOL mainframe systems?',
      answer: 'Yes, we have extensive experience modernizing COBOL mainframe systems. We can migrate to Java, .NET, or cloud-native architectures using automated conversion tools supplemented by manual optimization. We preserve business logic while enabling modern capabilities.'
    },
    {
      question: 'What about data migration from legacy databases?',
      answer: 'Data migration is carefully planned with schema mapping, data cleansing, validation rules, and rollback procedures. We use incremental migration strategies with continuous synchronization until cutover, ensuring zero data loss and minimal downtime.'
    },
    {
      question: 'How do you handle risk during modernization?',
      answer: 'Risk mitigation is built into every phase: comprehensive testing, parallel running, feature flags, gradual rollout, automated rollback capabilities, and continuous validation. We never take a big-bang approach—every step is reversible and validated.'
    }
  ],

  relatedServices: [
    {
      name: 'Custom Software Development',
      slug: 'custom-software-development',
      description: 'Build new features on modernized platforms',
      icon: 'Code'
    },
    {
      name: 'Cloud & DevOps',
      slug: '/cloud-devops',
      description: 'Cloud migration and infrastructure automation',
      icon: 'Cloud'
    },
    {
      name: 'Database Development',
      slug: 'database-development',
      description: 'Database modernization and migration',
      icon: 'Database'
    },
    {
      name: 'Microservices Architecture',
      slug: 'microservices-architecture',
      description: 'Transform monoliths to microservices',
      icon: 'Layers'
    }
  ],

  seo: {
    title: 'Legacy System Modernization Services | COBOL, Mainframe, VB6 Migration',
    description: 'Transform legacy systems into modern, cloud-ready applications. Expert COBOL mainframe migration, VB6 modernization, and database migration with zero-downtime strategies.',
    keywords: [
      'legacy system modernization',
      'cobol migration',
      'mainframe modernization',
      'vb6 migration',
      'legacy application modernization',
      'application modernization',
      'cloud migration',
      'database migration',
      'strangler fig pattern',
      'technical debt reduction'
    ]
  }
};
