import { ServiceData } from '@/components/services/sections';
export const fullstackDevelopmentData: ServiceData = {
  name: 'Full-Stack Development',
  slug: 'fullstack-development',
  tagline: 'Professional Development Services',
  category: 'Web Development',
  description: 'Complete full-stack development services from frontend to backend. We build entire web applications with seamless integration between beautiful user interfaces and powerful server-side systems.',
  hero: {
    headline: 'Full-Stack Development Services',
    subheadline: 'Complete Web Applications From Frontend to Backend',
    description: 'Get your entire web application built by a unified team. We handle everything from stunning user interfaces to robust APIs, databases, and cloud deployment. One team, one vision, seamless execution.',
    keyFeatures: [
      'React & Next.js',
      'Node.js & Python',
      'Database Design',
      'Cloud Deployment'
    ],
    badges: ['End-to-End Experts', '100+ Apps Launched', '99% Client Satisfaction']
  },
  painPoints: [
    {
      icon: 'Users',
      title: 'Team Coordination Chaos',
      description: 'Separate frontend and backend teams create integration nightmares and finger-pointing.',
      stat: '35%',
      statLabel: 'Time lost to coordination'
    },
    {
      icon: 'GitBranch',
      title: 'Integration Failures',
      description: 'Disconnected development leads to APIs that do not match frontend needs.',
      stat: '40%',
      statLabel: 'Rework on integration'
    },
    {
      icon: 'Clock',
      title: 'Missed Deadlines',
      description: 'Multiple vendor handoffs and miscommunication delay project completion.',
      stat: '60%',
      statLabel: 'Projects run late'
    },
    {
      icon: 'DollarSign',
      title: 'Budget Overruns',
      description: 'Scope creep and coordination overhead inflate costs beyond estimates.',
      stat: '50%',
      statLabel: 'Over budget'
    },
    {
      icon: 'AlertTriangle',
      title: 'Quality Inconsistency',
      description: 'Different teams produce inconsistent code quality and architecture.',
      stat: '45%',
      statLabel: 'Technical debt'
    },
    {
      icon: 'RefreshCw',
      title: 'Maintenance Nightmares',
      description: 'No single owner means ongoing support becomes fragmented and expensive.',
      stat: '2x',
      statLabel: 'Maintenance cost'
    }
  ],
  solutions: [
    {
      icon: 'Layout',
      title: 'Modern Frontend',
      description: 'Beautiful, responsive interfaces built with React, Vue, or Angular for exceptional user experiences.',
      highlights: ['React/Next.js', 'Responsive Design', 'State Management', 'Performance Optimized']
    },
    {
      icon: 'Server',
      title: 'Robust Backend',
      description: 'Scalable server architecture with Node.js or Python, handling your business logic securely.',
      highlights: ['Node.js/Python', 'RESTful APIs', 'GraphQL', 'Microservices']
    },
    {
      icon: 'Database',
      title: 'Database Architecture',
      description: 'Optimized database design with proper schemas, indexing, and query performance.',
      highlights: ['PostgreSQL/MongoDB', 'Data Modeling', 'Query Optimization', 'Migrations']
    },
    {
      icon: 'Lock',
      title: 'Authentication & Security',
      description: 'Complete security implementation from user auth to data encryption.',
      highlights: ['OAuth/JWT', 'Role-based Access', 'Data Encryption', 'Security Audits']
    },
    {
      icon: 'Cloud',
      title: 'Cloud Deployment',
      description: 'Production-ready deployment on AWS, Azure, or GCP with CI/CD pipelines.',
      highlights: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'CI/CD Pipelines', 'Auto-scaling']
    },
    {
      icon: 'BarChart',
      title: 'Analytics & Monitoring',
      description: 'Comprehensive observability for your application from user analytics to server metrics.',
      highlights: ['User Analytics', 'Error Tracking', 'Performance Monitoring', 'Log Management']
    }
  ],
  process: {
    steps: [
      {
        icon: 'MessageSquare',
        title: 'Discovery & Planning',
        description: 'Deep dive into your requirements, user needs, and business goals to create a comprehensive project roadmap.',
        duration: '1-2 weeks',
        deliverables: ['Requirements Document', 'Technical Specification', 'Project Timeline']
      },
      {
        icon: 'Pencil',
        title: 'Design & Architecture',
        description: 'Design the user interface and system architecture in parallel for seamless integration.',
        duration: '2-3 weeks',
        deliverables: ['UI/UX Designs', 'System Architecture', 'Database Schema']
      },
      {
        icon: 'Code',
        title: 'Sprint Development',
        description: 'Build frontend and backend together in coordinated sprints with continuous integration.',
        duration: '6-12 weeks',
        deliverables: ['Working Features', 'API Integration', 'Regular Demos']
      },
      {
        icon: 'TestTube',
        title: 'Testing & QA',
        description: 'Comprehensive testing across the full stack including unit, integration, and E2E tests.',
        duration: '1-2 weeks',
        deliverables: ['Test Suite', 'Bug Fixes', 'Performance Report']
      },
      {
        icon: 'Rocket',
        title: 'Deployment',
        description: 'Production deployment with monitoring, backups, and operational documentation.',
        duration: '1 week',
        deliverables: ['Production Environment', 'CI/CD Pipeline', 'Runbook']
      },
      {
        icon: 'Headphones',
        title: 'Launch & Support',
        description: 'Go live with monitoring, rapid response support, and continuous improvement.',
        duration: 'Ongoing',
        deliverables: ['Live Application', 'Support Access', 'Enhancement Planning']
      }
    ],
    totalDuration: '12-20 weeks'
  },
  benefits: [
    {
      icon: 'Users',
      title: 'Single Team, Unified Vision',
      description: 'One team owning the entire stack eliminates coordination overhead and ensures consistency.',
      stat: '35%',
      statSuffix: '',
      statLabel: 'Faster Delivery'
    },
    {
      icon: 'Zap',
      title: 'Seamless Integration',
      description: 'Frontend and backend designed together means perfect API contracts and smooth data flow.',
      stat: '0',
      statSuffix: '',
      statLabel: 'Integration Issues'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Efficiency',
      description: 'Single vendor with full-stack expertise reduces overhead and eliminates coordination costs.',
      stat: '30%',
      statSuffix: '',
      statLabel: 'Cost Savings'
    },
    {
      icon: 'Code',
      title: 'Consistent Quality',
      description: 'Unified coding standards and architecture decisions across the entire application.',
      stat: '90%',
      statSuffix: '',
      statLabel: 'Code Quality Score'
    },
    {
      icon: 'RefreshCw',
      title: 'Easy Maintenance',
      description: 'One team knowing the entire codebase makes ongoing support efficient and effective.',
      stat: '50%',
      statSuffix: '',
      statLabel: 'Faster Bug Fixes'
    },
    {
      icon: 'TrendingUp',
      title: 'Future-Ready Architecture',
      description: 'Scalable design that grows with your business without major rewrites.',
      stat: '10x',
      statSuffix: '',
      statLabel: 'Scale Potential'
    }
  ],
  techStack: [
    {
      name: 'Frontend Stack',
      description: 'Modern frontend technologies',
      technologies: [
        { name: 'React', icon: 'react', category: 'Framework', proficiency: 'expert' },
        { name: 'Next.js', icon: 'nextjs', category: 'Framework', proficiency: 'expert' },
        { name: 'TypeScript', icon: 'typescript', category: 'Language', proficiency: 'expert' },
        { name: 'Tailwind CSS', icon: 'tailwind', category: 'Styling', proficiency: 'expert' }
      ]
    },
    {
      name: 'Backend Stack',
      description: 'Robust server-side technologies',
      technologies: [
        { name: 'Node.js', icon: 'nodejs', category: 'Runtime', proficiency: 'expert' },
        { name: 'NestJS', icon: 'nestjs', category: 'Framework', proficiency: 'expert' },
        { name: 'Python/FastAPI', icon: 'python', category: 'Framework', proficiency: 'expert' },
        { name: 'GraphQL', icon: 'graphql', category: 'API', proficiency: 'expert' }
      ]
    },
    {
      name: 'Database & Cache',
      description: 'Data layer technologies',
      technologies: [
        { name: 'PostgreSQL', icon: 'postgresql', category: 'Database', proficiency: 'expert' },
        { name: 'MongoDB', icon: 'mongodb', category: 'Database', proficiency: 'expert' },
        { name: 'Redis', icon: 'redis', category: 'Cache', proficiency: 'expert' },
        { name: 'Prisma', icon: 'prisma', category: 'ORM', proficiency: 'expert' }
      ]
    },
    {
      name: 'DevOps & Cloud',
      description: 'Infrastructure and deployment',
      technologies: [
        { name: 'AWS', icon: 'aws', category: 'Cloud', proficiency: 'expert' },
        { name: 'Vercel', icon: 'vercel', category: 'Hosting', proficiency: 'expert' },
        { name: 'Docker', icon: 'docker', category: 'Container', proficiency: 'expert' },
        { name: 'GitHub Actions', icon: 'github', category: 'CI/CD', proficiency: 'expert' }
      ]
    }
  ],
  pricing: {
    plans: [
      {
        name: 'MVP Package',
        description: 'Launch your minimum viable product',
        price: '$25,000',
        priceNote: 'One-time payment',
        features: [
          { name: 'Custom Frontend', included: true },
          { name: 'Backend API', included: true },
          { name: 'Database Setup', included: true },
          { name: 'User Authentication', included: true },
          { name: 'Core Features', included: true },
          { name: '30-Day Support', included: true },
          { name: 'Advanced Features', included: false },
          { name: 'Admin Dashboard', included: false }
        ],
        ctaText: 'Start MVP',
        highlighted: false
      },
      {
        name: 'Complete Application',
        description: 'Full-featured web application',
        price: '$60,000',
        priceNote: 'One-time payment',
        badge: 'Most Popular',
        features: [
          { name: 'Custom UI/UX Design', included: true },
          { name: 'Full Backend System', included: true },
          { name: 'Database Architecture', included: true },
          { name: 'Advanced Auth & Roles', included: true },
          { name: 'Admin Dashboard', included: true },
          { name: 'Third-party Integrations', included: true },
          { name: '90-Day Support', included: true },
          { name: 'CI/CD & Monitoring', included: true }
        ],
        ctaText: 'Start Project',
        highlighted: true
      },
      {
        name: 'Enterprise Platform',
        description: 'Complex enterprise applications',
        price: '$150,000+',
        priceNote: 'Starting price',
        features: [
          { name: 'Enterprise Architecture', included: true },
          { name: 'Microservices Backend', included: true },
          { name: 'Multi-tenant Support', included: true },
          { name: 'Advanced Security', included: true },
          { name: 'Real-time Features', included: true },
          { name: 'Analytics & Reporting', included: true },
          { name: '12-Month Support', included: true },
          { name: 'Dedicated Team', included: true }
        ],
        ctaText: 'Contact Sales',
        highlighted: false
      }
    ],
    customNote: 'All packages include responsive design, testing, documentation, and deployment to production.'
  },
  portfolio: [
    {
      title: 'TaskFlow Project Management',
      client: 'TaskFlow Inc',
      industry: 'SaaS',
      description: 'Full-stack project management platform with real-time collaboration and advanced reporting.',
      challenge: 'TaskFlow needed a complete project management solution competing with established players like Asana and Monday.com.',
      solution: 'We built a React/Next.js frontend with real-time updates, a Node.js backend with WebSocket support, and a PostgreSQL database optimized for complex queries.',
      results: [
        '50,000 active users',
        '99.9% uptime',
        '<100ms response times',
        '4.8 star rating'
      ],
      metrics: [
        { label: 'Active Users', value: '50K' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Response Time', value: '<100ms' }
      ],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'WebSocket', 'SaaS']
    },
    {
      title: 'PropertyHub Real Estate Platform',
      client: 'PropertyHub Group',
      industry: 'Real Estate',
      description: 'Comprehensive real estate platform with property listings, virtual tours, and CRM integration.',
      challenge: 'PropertyHub needed to digitize their entire operation from property listings to agent management and client communication.',
      solution: 'We developed a full-stack platform with a public property portal, agent dashboard, CRM integration, and automated email campaigns.',
      results: [
        '10,000+ property listings',
        '300% lead generation increase',
        '50% agent time savings',
        '$10M+ in transactions'
      ],
      metrics: [
        { label: 'Listings', value: '10K+' },
        { label: 'Lead Increase', value: '300%' },
        { label: 'Transactions', value: '$10M+' }
      ],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      tags: ['React', 'Python', 'MongoDB', 'AWS', 'CRM Integration']
    },
    {
      title: 'LearnPath Education Platform',
      client: 'LearnPath Education',
      industry: 'EdTech',
      description: 'Online learning platform with courses, assessments, certifications, and progress tracking.',
      challenge: 'LearnPath needed a platform that could deliver video content, track student progress, issue certifications, and handle thousands of concurrent users.',
      solution: 'We built a Next.js frontend with video streaming, a NestJS backend with microservices architecture, and integrated payment processing for course purchases.',
      results: [
        '100,000 enrolled students',
        '500+ courses delivered',
        '95% completion rate',
        '40% MoM growth'
      ],
      metrics: [
        { label: 'Students', value: '100K' },
        { label: 'Courses', value: '500+' },
        { label: 'Completion Rate', value: '95%' }
      ],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Video Streaming', 'EdTech']
    },
    {
      title: 'WealthTrack Finance Dashboard',
      client: 'WealthTrack Advisors',
      industry: 'Finance',
      description: 'Full-stack financial planning platform with portfolio management, analytics, and client portal.',
      challenge: 'WealthTrack needed a secure platform for financial advisors to manage client portfolios and provide real-time market insights.',
      solution: 'We developed a full-stack solution with React frontend, NestJS backend, real-time market data integration, and bank-level security.',
      results: [
        '$500M+ AUM managed',
        '99.99% uptime',
        '200+ advisory firms',
        'SOC 2 compliant'
      ],
      metrics: [
        { label: 'AUM Managed', value: '$500M+' },
        { label: 'Uptime', value: '99.99%' },
        { label: 'Advisory Firms', value: '200+' }
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      tags: ['React', 'NestJS', 'PostgreSQL', 'Finance', 'Security']
    }
  ],
  testimonials: [
    {
      quote: 'Having one team handle our entire platform was a game changer. No more coordination nightmares between vendors.',
      author: 'Emily Roberts',
      role: 'CEO',
      company: 'TaskFlow Inc',
      rating: 5,
      location: 'San Francisco, USA'
    },
    {
      quote: 'They delivered our entire real estate platform in 4 months. The quality exceeded our expectations.',
      author: 'James Wilson',
      role: 'Managing Director',
      company: 'PropertyHub Group',
      rating: 5,
      location: 'Dubai, UAE'
    },
    {
      quote: 'From zero to 100,000 students in one year. The platform they built scaled beautifully.',
      author: 'Dr. Linda Chen',
      role: 'Founder',
      company: 'LearnPath Education',
      rating: 5,
      location: 'Singapore'
    }
  ],
  faqs: [
    {
      question: 'Why choose full-stack development over separate frontend and backend teams?',
      answer: 'Full-stack development from a single team eliminates coordination overhead, ensures seamless integration, and provides consistent quality across your application. You get faster delivery, lower costs, and a codebase that is easier to maintain. One team owns everything, so there is no finger-pointing when issues arise, and they can make holistic decisions that benefit the entire application.'
    },
    {
      question: 'What technologies do you use for full-stack development?',
      answer: 'Our primary stack is React/Next.js for frontend, Node.js (NestJS) or Python (FastAPI) for backend, and PostgreSQL or MongoDB for databases. We also work with TypeScript throughout, use Prisma or TypeORM for database access, and deploy on AWS, Vercel, or your preferred cloud. We select specific technologies based on your project requirements and team preferences.'
    },
    {
      question: 'How long does it take to build a complete web application?',
      answer: 'Timeline depends on complexity. A straightforward MVP with core features takes 8-12 weeks. A full-featured application with custom design, multiple integrations, and advanced features typically requires 16-24 weeks. Complex enterprise platforms may take 6-12 months. We provide detailed timelines after understanding your requirements and prioritize features for incremental delivery.'
    },
    {
      question: 'Do you handle design or just development?',
      answer: 'We offer both. Our team includes UX/UI designers who work alongside developers from day one. This tight integration ensures designs are practical to implement and development matches the design vision perfectly. You can also bring your own designs or work with a design agency - we integrate smoothly with external design teams.'
    },
    {
      question: 'Can you take over an existing project?',
      answer: 'Yes, we frequently take over existing codebases. We start with a thorough code audit to understand the current state, identify technical debt, and plan improvements. We can refactor incrementally while adding new features, or recommend a strategic rebuild if the existing codebase is beyond repair. We are transparent about what we find and recommend the most cost-effective path forward.'
    },
    {
      question: 'What about ongoing maintenance after launch?',
      answer: 'We offer flexible maintenance arrangements from hourly support to dedicated retainers. Post-launch support typically includes monitoring and alerting, bug fixes, security updates, performance optimization, and feature enhancements. Many clients keep us engaged for continuous improvement because our full-stack knowledge of their application makes us highly efficient at maintenance and new features.'
    }
  ],
  relatedServices: [
    {
      name: 'Frontend Development',
      slug: 'frontend-development',
      description: 'Specialized frontend development',
      icon: 'Layout'
    },
    {
      name: 'Backend Development',
      slug: 'backend-development',
      description: 'Robust server-side development',
      icon: 'Server'
    },
    {
      name: 'Next.js Development',
      slug: 'nextjs-development',
      description: 'Full-stack Next.js applications',
      icon: 'Code'
    },
    {
      name: 'Cloud & DevOps',
      slug: 'cloud-devops',
      description: 'Cloud infrastructure and deployment',
      icon: 'Cloud'
    }
  ],
  seo: {
    title: 'Full-Stack Development Services | Complete Web Application Development',
    description: 'Expert full-stack development services from frontend to backend. Build complete web applications with React, Node.js, and cloud deployment from a unified development team.',
    keywords: [
      'full stack development',
      'full-stack developer',
      'web application development',
      'react node development',
      'full stack services',
      'end to end development',
      'complete web development',
      'full stack agency',
      'full stack company',
      'full stack experts'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Full-Stack Development',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Full-Stack Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'MVP Development'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Complete Web Application'
            }
          }
        ]
      }
    }
  }
};
