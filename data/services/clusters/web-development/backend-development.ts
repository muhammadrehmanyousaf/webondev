import { ServiceData } from '@/components/services/sections';
export const backendDevelopmentData: ServiceData = {
  name: 'Backend Development',
  slug: 'backend-development',
  tagline: 'Professional Development Services',
  category: 'Web Development',
  description: 'Robust backend development services that power your applications with scalable APIs, efficient databases, and secure server architecture. We build the engine that drives your digital products.',
  hero: {
    headline: 'Backend Development Services',
    subheadline: 'Powerful Server Architecture That Scales',
    description: 'Build the backbone of your application with expert backend development. We create robust APIs, efficient databases, secure authentication, and scalable server infrastructure that handles millions of requests while maintaining lightning-fast performance.',
    keyFeatures: [
      'Node.js & Python',
      'Database Design',
      'API Development',
      'Cloud Architecture'
    ],
    badges: ['AWS Certified', '99.99% Uptime', '200+ Systems Built']
  },
  painPoints: [
    {
      icon: 'Server',
      title: 'Server Crashes',
      description: 'Your backend cannot handle traffic spikes, causing outages during critical business moments.',
      stat: '60%',
      statLabel: 'Revenue lost in outages'
    },
    {
      icon: 'Database',
      title: 'Slow Queries',
      description: 'Poorly designed databases create bottlenecks that slow down your entire application.',
      stat: '5s+',
      statLabel: 'Query response times'
    },
    {
      icon: 'Shield',
      title: 'Security Breaches',
      description: 'Vulnerable backends expose customer data and create costly compliance failures.',
      stat: '$4.5M',
      statLabel: 'Avg breach cost'
    },
    {
      icon: 'Code',
      title: 'Spaghetti Code',
      description: 'Unmaintainable backend code makes every update risky and expensive.',
      stat: '80%',
      statLabel: 'Time on legacy fixes'
    },
    {
      icon: 'Link',
      title: 'Integration Failures',
      description: 'Your backend cannot connect reliably with third-party services and internal systems.',
      stat: '35%',
      statLabel: 'Integration errors'
    },
    {
      icon: 'DollarSign',
      title: 'Infrastructure Costs',
      description: 'Inefficient architecture burns through cloud resources unnecessarily.',
      stat: '40%',
      statLabel: 'Wasted cloud spend'
    }
  ],
  solutions: [
    {
      icon: 'Server',
      title: 'Scalable Architecture',
      description: 'Server infrastructure designed to handle growth from hundreds to millions of users.',
      highlights: ['Horizontal Scaling', 'Load Balancing', 'Auto-scaling', 'Microservices']
    },
    {
      icon: 'Database',
      title: 'Database Engineering',
      description: 'Optimized database design, queries, and infrastructure for maximum performance.',
      highlights: ['Schema Design', 'Query Optimization', 'Indexing Strategy', 'Replication']
    },
    {
      icon: 'Layout',
      title: 'API Development',
      description: 'Well-designed REST and GraphQL APIs with comprehensive documentation.',
      highlights: ['RESTful APIs', 'GraphQL', 'API Versioning', 'Documentation']
    },
    {
      icon: 'Shield',
      title: 'Security Implementation',
      description: 'Enterprise-grade security protecting data at rest and in transit.',
      highlights: ['Authentication', 'Authorization', 'Encryption', 'Audit Logging']
    },
    {
      icon: 'RefreshCw',
      title: 'Background Processing',
      description: 'Efficient handling of long-running tasks, scheduled jobs, and event processing.',
      highlights: ['Message Queues', 'Job Scheduling', 'Event Sourcing', 'Webhooks']
    },
    {
      icon: 'Cloud',
      title: 'Cloud Infrastructure',
      description: 'Optimized cloud deployments on AWS, Azure, or GCP with cost efficiency.',
      highlights: ['AWS/Azure/GCP', 'Containerization', 'Serverless', 'CDN Setup']
    }
  ],
  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Architecture Discovery',
        description: 'Analyze requirements, existing systems, and scale needs to design the optimal architecture.',
        duration: '1-2 weeks',
        deliverables: ['System Requirements', 'Architecture Diagram', 'Tech Stack Selection']
      },
      {
        icon: 'Database',
        title: 'Database Design',
        description: 'Create efficient database schemas with proper normalization, indexing, and relationships.',
        duration: '1 week',
        deliverables: ['Database Schema', 'ER Diagrams', 'Migration Strategy']
      },
      {
        icon: 'Code',
        title: 'Core Development',
        description: 'Build the backend application with clean code, proper patterns, and comprehensive testing.',
        duration: '4-8 weeks',
        deliverables: ['Backend Application', 'API Endpoints', 'Unit Tests']
      },
      {
        icon: 'Link',
        title: 'Integration Layer',
        description: 'Connect with third-party services, internal systems, and frontend applications.',
        duration: '1-2 weeks',
        deliverables: ['API Integrations', 'Webhooks', 'Event Handlers']
      },
      {
        icon: 'TestTube',
        title: 'Testing & Security',
        description: 'Comprehensive testing including load tests, security audits, and penetration testing.',
        duration: '1 week',
        deliverables: ['Test Results', 'Security Report', 'Performance Benchmarks']
      },
      {
        icon: 'Rocket',
        title: 'Deployment & Monitoring',
        description: 'Deploy to production with CI/CD pipelines, monitoring, and alerting.',
        duration: 'Ongoing',
        deliverables: ['Production Deployment', 'CI/CD Pipeline', 'Monitoring Dashboard']
      }
    ],
    totalDuration: '10-14 weeks'
  },
  benefits: [
    {
      icon: 'TrendingUp',
      title: 'Infinite Scalability',
      description: 'Architecture that grows seamlessly from startup to enterprise scale.',
      stat: '10M+',
      statSuffix: '',
      statLabel: 'Requests/Day'
    },
    {
      icon: 'Zap',
      title: 'Lightning Response',
      description: 'Optimized queries and caching deliver sub-100ms API responses.',
      stat: '<100',
      statSuffix: 'ms',
      statLabel: 'Response Time'
    },
    {
      icon: 'Shield',
      title: 'Enterprise Security',
      description: 'Bank-grade security with encryption, audit trails, and compliance.',
      stat: '100%',
      statSuffix: '',
      statLabel: 'Security Compliance'
    },
    {
      icon: 'Clock',
      title: 'Maximum Uptime',
      description: 'Redundant architecture with automatic failover for continuous availability.',
      stat: '99.99%',
      statSuffix: '',
      statLabel: 'Uptime SLA'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Efficiency',
      description: 'Optimized infrastructure reduces cloud spend while improving performance.',
      stat: '40%',
      statSuffix: '',
      statLabel: 'Lower Cloud Costs'
    },
    {
      icon: 'Code',
      title: 'Maintainable Code',
      description: 'Clean architecture and comprehensive tests make updates safe and efficient.',
      stat: '60%',
      statSuffix: '',
      statLabel: 'Faster Development'
    }
  ],
  techStack: [
    {
      name: 'Backend Languages',
      description: 'Server-side programming languages',
      technologies: [
        { name: 'Node.js', icon: 'nodejs', category: 'Runtime', proficiency: 'expert' },
        { name: 'Python', icon: 'python', category: 'Language', proficiency: 'expert' },
        { name: 'Go', icon: 'go', category: 'Language', proficiency: 'advanced' },
        { name: 'Java', icon: 'java', category: 'Language', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Frameworks',
      description: 'Backend application frameworks',
      technologies: [
        { name: 'NestJS', icon: 'nestjs', category: 'Framework', proficiency: 'expert' },
        { name: 'Express.js', icon: 'express', category: 'Framework', proficiency: 'expert' },
        { name: 'FastAPI', icon: 'python', category: 'Framework', proficiency: 'expert' },
        { name: 'Django', icon: 'django', category: 'Framework', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Databases',
      description: 'Data storage solutions',
      technologies: [
        { name: 'PostgreSQL', icon: 'postgresql', category: 'SQL', proficiency: 'expert' },
        { name: 'MongoDB', icon: 'mongodb', category: 'NoSQL', proficiency: 'expert' },
        { name: 'Redis', icon: 'redis', category: 'Cache', proficiency: 'expert' },
        { name: 'Elasticsearch', icon: 'elasticsearch', category: 'Search', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Infrastructure',
      description: 'Cloud and deployment tools',
      technologies: [
        { name: 'AWS', icon: 'aws', category: 'Cloud', proficiency: 'expert' },
        { name: 'Docker', icon: 'docker', category: 'Container', proficiency: 'expert' },
        { name: 'Kubernetes', icon: 'kubernetes', category: 'Orchestration', proficiency: 'expert' },
        { name: 'Terraform', icon: 'terraform', category: 'IaC', proficiency: 'advanced' }
      ]
    }
  ],
  pricing: {
    plans: [
      {
        name: 'Standard Backend',
        description: 'Backend for small to medium applications',
        price: '$15,000',
        priceNote: 'One-time payment',
        features: [
          { name: 'RESTful API', included: true },
          { name: 'Database Design', included: true },
          { name: 'User Authentication', included: true },
          { name: 'Basic CRUD Operations', included: true },
          { name: 'API Documentation', included: true },
          { name: '30-Day Support', included: true },
          { name: 'Background Jobs', included: false },
          { name: 'Microservices', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Professional Backend',
        description: 'Full-featured backend system',
        price: '$35,000',
        priceNote: 'One-time payment',
        badge: 'Most Popular',
        features: [
          { name: 'REST or GraphQL API', included: true },
          { name: 'Advanced Database Architecture', included: true },
          { name: 'OAuth 2.0 / JWT Auth', included: true },
          { name: 'Background Processing', included: true },
          { name: 'Third-party Integrations', included: true },
          { name: 'Comprehensive Testing', included: true },
          { name: '90-Day Support', included: true },
          { name: 'Performance Optimization', included: true }
        ],
        ctaText: 'Start Project',
        highlighted: true
      },
      {
        name: 'Enterprise Backend',
        description: 'Complex distributed systems',
        price: '$80,000+',
        priceNote: 'Starting price',
        features: [
          { name: 'Microservices Architecture', included: true },
          { name: 'Event-driven Design', included: true },
          { name: 'Multi-region Deployment', included: true },
          { name: 'Advanced Security', included: true },
          { name: 'Real-time Features', included: true },
          { name: 'Custom Integrations', included: true },
          { name: '12-Month Support', included: true },
          { name: 'SLA Guarantee', included: true }
        ],
        ctaText: 'Contact Sales',
        highlighted: false
      }
    ],
    customNote: 'All backends include Docker containerization, CI/CD setup, and monitoring configuration.'
  },
  portfolio: [
    {
      title: 'LogiTrack Supply Chain Platform',
      client: 'LogiTrack Systems',
      industry: 'Logistics',
      description: 'Real-time logistics backend processing millions of shipment events daily.',
      challenge: 'LogiTrack needed a backend that could process 5M+ daily events from IoT devices while providing real-time tracking.',
      solution: 'We built an event-driven microservices architecture with Kafka, processing events in real-time with sub-second latency.',
      results: [
        '5M+ events/day processed',
        '99.99% uptime achieved',
        '<500ms event latency',
        '70% infrastructure cost reduction'
      ],
      metrics: [
        { label: 'Events/Day', value: '5M+' },
        { label: 'Uptime', value: '99.99%' },
        { label: 'Cost Reduction', value: '70%' }
      ],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      tags: ['Node.js', 'Kafka', 'PostgreSQL', 'Kubernetes', 'IoT']
    },
    {
      title: 'PayFlow Payment Gateway',
      client: 'PayFlow Inc',
      industry: 'Financial Technology',
      description: 'PCI-compliant payment processing backend handling $50M+ monthly transactions.',
      challenge: 'PayFlow needed a highly secure, PCI-compliant backend that could process thousands of transactions per second.',
      solution: 'We developed a multi-layered security architecture with encryption at rest and transit, comprehensive audit logging, and automated fraud detection.',
      results: [
        '$50M+ monthly volume',
        '0 security incidents',
        '99.999% transaction success',
        'Full PCI DSS compliance'
      ],
      metrics: [
        { label: 'Monthly Volume', value: '$50M+' },
        { label: 'Security Incidents', value: '0' },
        { label: 'Transaction Success', value: '99.999%' }
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      tags: ['Python', 'PostgreSQL', 'Redis', 'AWS', 'PCI DSS']
    },
    {
      title: 'MediaStream Content Platform',
      client: 'MediaStream Entertainment',
      industry: 'Media & Entertainment',
      description: 'Content management backend serving 2M+ users with personalized recommendations.',
      challenge: 'MediaStream needed a backend that could serve personalized content to millions of users with minimal latency.',
      solution: 'We built a content delivery system with intelligent caching, ML-powered recommendations, and edge computing for global performance.',
      results: [
        '2M+ daily active users',
        '<200ms content delivery',
        '35% higher engagement',
        '60% cache hit rate'
      ],
      metrics: [
        { label: 'Daily Users', value: '2M+' },
        { label: 'Content Delivery', value: '<200ms' },
        { label: 'Engagement Lift', value: '35%' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['NestJS', 'MongoDB', 'Redis', 'AWS CloudFront', 'ML']
    },
    {
      title: 'HealthSync Medical Backend',
      client: 'HealthSync Solutions',
      industry: 'Healthcare',
      description: 'HIPAA-compliant backend system connecting hospitals, labs, and patient apps.',
      challenge: 'HealthSync needed a secure backend that could handle sensitive medical data across multiple healthcare providers.',
      solution: 'We developed a microservices backend with end-to-end encryption, HL7 FHIR compliance, and real-time data synchronization.',
      results: [
        '150+ healthcare facilities',
        'Full HIPAA compliance',
        '<100ms API response',
        'Zero data breaches'
      ],
      metrics: [
        { label: 'Facilities', value: '150+' },
        { label: 'API Response', value: '<100ms' },
        { label: 'Data Breaches', value: '0' }
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      tags: ['NestJS', 'PostgreSQL', 'Redis', 'HIPAA', 'Healthcare']
    }
  ],
  testimonials: [
    {
      quote: 'Our backend now handles 5 million events daily without breaking a sweat. The architecture they designed is bulletproof.',
      author: 'Jason Kim',
      role: 'CTO',
      company: 'LogiTrack Systems',
      rating: 5,
      location: 'Singapore'
    },
    {
      quote: 'Three years of processing $50M monthly with zero security incidents. Their security expertise is exceptional.',
      author: 'Alexandra Davis',
      role: 'VP of Engineering',
      company: 'PayFlow Inc',
      rating: 5,
      location: 'San Francisco, USA'
    },
    {
      quote: 'The recommendation engine they built increased our user engagement by 35%. The backend scales beautifully.',
      author: 'Michael Chang',
      role: 'Head of Technology',
      company: 'MediaStream Entertainment',
      rating: 5,
      location: 'Los Angeles, USA'
    }
  ],
  faqs: [
    {
      question: 'What backend technologies do you specialize in?',
      answer: 'We are experts in Node.js (Express, NestJS), Python (FastAPI, Django), and Go for high-performance needs. For databases, we work with PostgreSQL, MongoDB, Redis, and Elasticsearch. We select technologies based on your specific requirements such as team familiarity, performance needs, and ecosystem requirements. All our developers are full-stack capable with deep backend expertise.'
    },
    {
      question: 'How do you ensure backend security?',
      answer: 'Security is built into every layer. We implement secure authentication (OAuth 2.0, JWT), role-based access control, input validation, SQL injection prevention, encryption for data at rest and in transit, comprehensive audit logging, and rate limiting. We conduct security audits and can achieve compliance certifications like SOC 2, HIPAA, and PCI DSS.'
    },
    {
      question: 'Can you work with our existing database?',
      answer: 'Yes, we regularly work with existing databases. We can optimize queries, add proper indexing, refactor schemas for better performance, and migrate data if needed. We have experience with legacy databases from Oracle to MySQL and can integrate new backend code with existing data structures while improving performance and maintainability.'
    },
    {
      question: 'How do you handle high-traffic scaling?',
      answer: 'We design for scale from day one. This includes horizontal scaling with load balancing, database read replicas and sharding, caching strategies with Redis, message queues for async processing, and auto-scaling cloud infrastructure. We have built backends handling 10M+ requests daily. Our architecture decisions are always informed by your growth projections.'
    },
    {
      question: 'Do you provide API documentation?',
      answer: 'Comprehensive documentation is standard with every project. We create OpenAPI/Swagger specifications for REST APIs, GraphQL schema documentation, interactive API explorers, code examples in multiple languages, integration tutorials, and Postman collections. Documentation auto-generates from code to stay in sync.'
    },
    {
      question: 'What about ongoing maintenance and support?',
      answer: 'We offer various support arrangements from ad-hoc assistance to dedicated support contracts. This includes monitoring and alerting, performance optimization, security updates, feature enhancements, and 24/7 emergency support for critical systems. Many clients keep us on retainer for continuous improvement and rapid response.'
    }
  ],
  relatedServices: [
    {
      name: 'API Development',
      slug: 'api-development',
      description: 'RESTful and GraphQL API development',
      icon: 'Layout'
    },
    {
      name: 'Database Development',
      slug: 'database-development',
      description: 'Database design and optimization',
      icon: 'Database'
    },
    {
      name: 'Cloud & DevOps',
      slug: 'cloud-devops',
      description: 'Cloud infrastructure and deployment',
      icon: 'Cloud'
    },
    {
      name: 'Full-Stack Development',
      slug: 'fullstack-development',
      description: 'Complete frontend and backend solutions',
      icon: 'Layers'
    }
  ],
  seo: {
    title: 'Backend Development Services | Node.js, Python, API Development',
    description: 'Expert backend development services for scalable APIs, databases, and server architecture. Build robust backends with Node.js, Python, and cloud technologies that power your applications.',
    keywords: [
      'backend development',
      'server development',
      'api development',
      'nodejs development',
      'python backend',
      'database development',
      'microservices development',
      'backend developer',
      'server architecture',
      'backend engineer'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Backend Development',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Backend Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Node.js Backend Development'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Python Backend Development'
            }
          }
        ]
      }
    }
  }
};
