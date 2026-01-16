import { ServiceData } from '@/components/services/sections';
export const apiDevelopmentData: ServiceData = {
  name: 'API Development',
  slug: 'api-development',
  tagline: 'Professional Development Services',
  category: 'Web Development',
  description: 'Professional API development services for RESTful and GraphQL APIs. We build scalable, secure, and well-documented APIs that power your applications and enable seamless integrations.',
  hero: {
    headline: 'API Development Services',
    subheadline: 'Build Robust APIs That Power Your Digital Ecosystem',
    description: 'Create powerful, scalable APIs that connect your applications, enable third-party integrations, and drive your business forward. We specialize in REST, GraphQL, and custom API architectures with comprehensive documentation and security.',
    keyFeatures: [
      'RESTful APIs',
      'GraphQL APIs',
      'API Security',
      'Documentation'
    ],
    badges: ['OpenAPI Certified', '99.99% Uptime', '500+ APIs Built']
  },
  painPoints: [
    {
      icon: 'Link',
      title: 'Integration Chaos',
      description: 'Your systems cannot talk to each other, creating data silos and manual workarounds.',
      stat: '65%',
      statLabel: 'Time on manual data transfer'
    },
    {
      icon: 'Gauge',
      title: 'Performance Bottlenecks',
      description: 'Slow APIs frustrate users and create cascading failures across your applications.',
      stat: '40%',
      statLabel: 'Users lost to slow APIs'
    },
    {
      icon: 'Shield',
      title: 'Security Vulnerabilities',
      description: 'Poorly secured APIs expose sensitive data and create compliance risks.',
      stat: '83%',
      statLabel: 'Breaches via APIs'
    },
    {
      icon: 'FileText',
      title: 'Documentation Nightmares',
      description: 'Incomplete or outdated docs make integration painful for your team and partners.',
      stat: '70%',
      statLabel: 'Dev time on doc issues'
    },
    {
      icon: 'RefreshCw',
      title: 'Version Management',
      description: 'Breaking changes disrupt existing integrations and require costly migrations.',
      stat: '30%',
      statLabel: 'Budget on version issues'
    },
    {
      icon: 'AlertTriangle',
      title: 'Unreliable Uptime',
      description: 'API outages bring down dependent applications and damage customer trust.',
      stat: '99.9%',
      statLabel: 'Expected uptime'
    }
  ],
  solutions: [
    {
      icon: 'Layout',
      title: 'RESTful API Design',
      description: 'Clean, intuitive REST APIs following best practices for resource design and HTTP semantics.',
      highlights: ['Resource Modeling', 'HTTP Standards', 'HATEOAS', 'Pagination']
    },
    {
      icon: 'GitBranch',
      title: 'GraphQL Development',
      description: 'Flexible GraphQL APIs that let clients request exactly the data they need.',
      highlights: ['Schema Design', 'Resolvers', 'Subscriptions', 'Federation']
    },
    {
      icon: 'Shield',
      title: 'API Security',
      description: 'Enterprise-grade security with authentication, authorization, and threat protection.',
      highlights: ['OAuth 2.0/JWT', 'Rate Limiting', 'Input Validation', 'API Gateway']
    },
    {
      icon: 'FileText',
      title: 'Documentation',
      description: 'Comprehensive, auto-generated documentation that stays in sync with your API.',
      highlights: ['OpenAPI/Swagger', 'Interactive Docs', 'Code Samples', 'Postman Collections']
    },
    {
      icon: 'BarChart',
      title: 'Monitoring & Analytics',
      description: 'Real-time visibility into API performance, usage patterns, and error rates.',
      highlights: ['Request Logging', 'Performance Metrics', 'Error Tracking', 'Usage Analytics']
    },
    {
      icon: 'RefreshCw',
      title: 'Version Management',
      description: 'Thoughtful versioning strategies that evolve APIs without breaking clients.',
      highlights: ['Semantic Versioning', 'Deprecation Policy', 'Migration Guides', 'Backward Compatibility']
    }
  ],
  process: {
    steps: [
      {
        icon: 'MessageSquare',
        title: 'Requirements Analysis',
        description: 'We work with stakeholders to understand data needs, use cases, and integration requirements.',
        duration: '1 week',
        deliverables: ['Requirements Document', 'Use Case Mapping', 'Data Model Draft']
      },
      {
        icon: 'Layout',
        title: 'API Design',
        description: 'Design API schema, endpoints, authentication, and error handling before writing code.',
        duration: '1-2 weeks',
        deliverables: ['API Specification', 'Schema Design', 'Security Plan']
      },
      {
        icon: 'Code',
        title: 'Development',
        description: 'Build your API with clean code, comprehensive testing, and performance optimization.',
        duration: '3-6 weeks',
        deliverables: ['API Implementation', 'Unit Tests', 'Integration Tests']
      },
      {
        icon: 'FileText',
        title: 'Documentation',
        description: 'Create thorough documentation with examples, tutorials, and interactive testing.',
        duration: '1 week',
        deliverables: ['API Documentation', 'Developer Guide', 'Postman Collection']
      },
      {
        icon: 'Shield',
        title: 'Security & Testing',
        description: 'Security audit, penetration testing, and load testing to ensure production readiness.',
        duration: '1 week',
        deliverables: ['Security Report', 'Load Test Results', 'Vulnerability Assessment']
      },
      {
        icon: 'Rocket',
        title: 'Deployment & Support',
        description: 'Deploy to production with monitoring, alerting, and ongoing support.',
        duration: 'Ongoing',
        deliverables: ['Production Deployment', 'Monitoring Setup', 'Support Access']
      }
    ],
    totalDuration: '8-12 weeks'
  },
  benefits: [
    {
      icon: 'Zap',
      title: 'High Performance',
      description: 'Optimized APIs with sub-100ms response times and efficient data handling.',
      stat: '<100',
      statSuffix: 'ms',
      statLabel: 'Response Time'
    },
    {
      icon: 'Shield',
      title: 'Enterprise Security',
      description: 'OAuth 2.0, JWT tokens, rate limiting, and encryption protect your data.',
      stat: '100%',
      statSuffix: '',
      statLabel: 'Security Coverage'
    },
    {
      icon: 'FileText',
      title: 'Complete Documentation',
      description: 'Interactive docs with examples make integration fast for any developer.',
      stat: '70%',
      statSuffix: '',
      statLabel: 'Faster Integration'
    },
    {
      icon: 'TrendingUp',
      title: 'Infinite Scalability',
      description: 'Architecture designed to handle millions of requests without degradation.',
      stat: '10M+',
      statSuffix: '',
      statLabel: 'Requests/Day'
    },
    {
      icon: 'Clock',
      title: 'Maximum Uptime',
      description: 'Redundant architecture with automatic failover ensures constant availability.',
      stat: '99.99%',
      statSuffix: '',
      statLabel: 'Uptime SLA'
    },
    {
      icon: 'RefreshCw',
      title: 'Easy Maintenance',
      description: 'Clean code and comprehensive tests make updates and enhancements painless.',
      stat: '50%',
      statSuffix: '',
      statLabel: 'Less Maintenance Time'
    }
  ],
  techStack: [
    {
      name: 'Backend Frameworks',
      description: 'Production-grade API frameworks',
      technologies: [
        { name: 'Node.js/Express', icon: 'nodejs', category: 'Backend', proficiency: 'expert' },
        { name: 'NestJS', icon: 'nestjs', category: 'Backend', proficiency: 'expert' },
        { name: 'Python/FastAPI', icon: 'python', category: 'Backend', proficiency: 'expert' },
        { name: 'Go', icon: 'go', category: 'Backend', proficiency: 'advanced' }
      ]
    },
    {
      name: 'API Protocols',
      description: 'Modern API standards',
      technologies: [
        { name: 'REST', icon: 'api', category: 'Protocol', proficiency: 'expert' },
        { name: 'GraphQL', icon: 'graphql', category: 'Protocol', proficiency: 'expert' },
        { name: 'gRPC', icon: 'google', category: 'Protocol', proficiency: 'advanced' },
        { name: 'WebSocket', icon: 'socket', category: 'Protocol', proficiency: 'expert' }
      ]
    },
    {
      name: 'Database & Cache',
      description: 'Data layer technologies',
      technologies: [
        { name: 'PostgreSQL', icon: 'postgresql', category: 'Database', proficiency: 'expert' },
        { name: 'MongoDB', icon: 'mongodb', category: 'Database', proficiency: 'expert' },
        { name: 'Redis', icon: 'redis', category: 'Cache', proficiency: 'expert' },
        { name: 'Elasticsearch', icon: 'elasticsearch', category: 'Search', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Infrastructure',
      description: 'API infrastructure and tooling',
      technologies: [
        { name: 'AWS API Gateway', icon: 'aws', category: 'Gateway', proficiency: 'expert' },
        { name: 'Kong', icon: 'kong', category: 'Gateway', proficiency: 'advanced' },
        { name: 'Docker', icon: 'docker', category: 'Container', proficiency: 'expert' },
        { name: 'Kubernetes', icon: 'kubernetes', category: 'Orchestration', proficiency: 'expert' }
      ]
    }
  ],
  pricing: {
    plans: [
      {
        name: 'Simple API',
        description: 'Basic REST API for straightforward use cases',
        price: '$8,000',
        priceNote: 'One-time payment',
        features: [
          { name: 'Up to 10 Endpoints', included: true },
          { name: 'JWT Authentication', included: true },
          { name: 'Basic Documentation', included: true },
          { name: 'Unit Testing', included: true },
          { name: '30-Day Support', included: true },
          { name: 'Rate Limiting', included: true },
          { name: 'GraphQL Support', included: false },
          { name: 'Real-time WebSocket', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Professional API',
        description: 'Full-featured API with GraphQL option',
        price: '$20,000',
        priceNote: 'One-time payment',
        badge: 'Most Popular',
        features: [
          { name: 'Unlimited Endpoints', included: true },
          { name: 'REST or GraphQL', included: true },
          { name: 'OAuth 2.0/JWT Auth', included: true },
          { name: 'Interactive Docs', included: true },
          { name: 'Full Test Coverage', included: true },
          { name: 'Rate Limiting & Throttling', included: true },
          { name: '90-Day Support', included: true },
          { name: 'Performance Optimization', included: true }
        ],
        ctaText: 'Start Project',
        highlighted: true
      },
      {
        name: 'Enterprise API',
        description: 'Complex APIs with advanced requirements',
        price: '$50,000+',
        priceNote: 'Starting price',
        features: [
          { name: 'Custom Architecture', included: true },
          { name: 'Microservices Support', included: true },
          { name: 'Real-time Subscriptions', included: true },
          { name: 'Multi-region Deployment', included: true },
          { name: 'Advanced Analytics', included: true },
          { name: 'SLA Guarantee', included: true },
          { name: '12-Month Support', included: true },
          { name: 'Dedicated Team', included: true }
        ],
        ctaText: 'Contact Sales',
        highlighted: false
      }
    ],
    customNote: 'All APIs include monitoring setup, error tracking, and deployment documentation.'
  },
  portfolio: [
    {
      title: 'FinConnect Banking API',
      client: 'FinConnect Services',
      industry: 'Financial Services',
      description: 'PSD2-compliant banking API enabling secure third-party access to account data.',
      challenge: 'FinConnect needed a secure API that met strict banking regulations while enabling fintech partners to build innovative apps.',
      solution: 'We built a comprehensive REST API with OAuth 2.0, certificate-based auth, strict rate limiting, and real-time transaction webhooks.',
      results: [
        '50+ fintech integrations',
        '99.99% uptime achieved',
        'PSD2/GDPR compliant',
        '200M transactions/month'
      ],
      metrics: [
        { label: 'Integrations', value: '50+' },
        { label: 'Uptime', value: '99.99%' },
        { label: 'Monthly Transactions', value: '200M' }
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      tags: ['REST API', 'Node.js', 'PostgreSQL', 'OAuth 2.0', 'Banking']
    },
    {
      title: 'DataSync Platform API',
      client: 'DataSync Corp',
      industry: 'Enterprise Software',
      description: 'GraphQL API powering a data synchronization platform with real-time updates.',
      challenge: 'DataSync needed flexible data queries across complex schemas with real-time sync across thousands of connected clients.',
      solution: 'We built a GraphQL API with Apollo Federation, enabling clients to query exactly what they need, plus subscriptions for real-time updates.',
      results: [
        '80% less data transfer',
        '5,000 concurrent clients',
        '<50ms query response',
        '99.9% reliability'
      ],
      metrics: [
        { label: 'Data Reduction', value: '80%' },
        { label: 'Concurrent Clients', value: '5K' },
        { label: 'Query Response', value: '<50ms' }
      ],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      tags: ['GraphQL', 'Apollo', 'Node.js', 'Redis', 'WebSocket']
    },
    {
      title: 'HealthBridge Integration API',
      client: 'HealthBridge Systems',
      industry: 'Healthcare',
      description: 'FHIR-compliant healthcare API connecting hospitals, clinics, and insurance providers.',
      challenge: 'HealthBridge needed to connect disparate healthcare systems with strict HIPAA compliance and audit requirements.',
      solution: 'We developed a FHIR R4-compliant REST API with end-to-end encryption, comprehensive audit logging, and HL7 message transformation.',
      results: [
        '100+ healthcare partners',
        'Full HIPAA compliance',
        '1M+ patient records synced',
        'Zero security incidents'
      ],
      metrics: [
        { label: 'Partners', value: '100+' },
        { label: 'Records Synced', value: '1M+' },
        { label: 'Security Incidents', value: '0' }
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      tags: ['FHIR', 'REST API', 'Python', 'HIPAA', 'Healthcare']
    },
    {
      title: 'PropConnect Real Estate API',
      client: 'PropConnect Technologies',
      industry: 'Real Estate',
      description: 'Unified real estate API aggregating MLS listings, property data, and market analytics.',
      challenge: 'PropConnect needed to aggregate data from 500+ MLS systems with different formats into a single, standardized API.',
      solution: 'We created a robust API layer with data normalization, intelligent caching, and real-time listing updates across all connected MLS systems.',
      results: [
        '500+ MLS integrations',
        '10M+ listings available',
        '<100ms response time',
        '99.95% uptime'
      ],
      metrics: [
        { label: 'MLS Integrations', value: '500+' },
        { label: 'Listings', value: '10M+' },
        { label: 'Response Time', value: '<100ms' }
      ],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      tags: ['REST API', 'Node.js', 'MongoDB', 'Real Estate', 'Data Aggregation']
    }
  ],
  testimonials: [
    {
      quote: 'Their API documentation was so good that partners integrated in days instead of weeks. The self-service approach saved us countless support hours.',
      author: 'Thomas Chen',
      role: 'API Product Manager',
      company: 'FinConnect Services',
      rating: 5,
      location: 'London, UK'
    },
    {
      quote: 'Moving from REST to GraphQL with their team cut our mobile app data usage by 80%. Users love the faster load times.',
      author: 'Patricia Murphy',
      role: 'CTO',
      company: 'DataSync Corp',
      rating: 5,
      location: 'Boston, USA'
    },
    {
      quote: 'Building a HIPAA-compliant API seemed impossible until we worked with them. Three years and zero security incidents.',
      author: 'Dr. Michael Foster',
      role: 'Chief Medical Information Officer',
      company: 'HealthBridge Systems',
      rating: 5,
      location: 'Chicago, USA'
    }
  ],
  faqs: [
    {
      question: 'Should I choose REST or GraphQL for my API?',
      answer: 'REST is ideal for simple, resource-based APIs with predictable queries and caching needs. GraphQL excels when clients need flexible queries, you have mobile apps with bandwidth concerns, or you are building dashboards with complex data relationships. Many projects use both: REST for simple operations and GraphQL for complex queries. We analyze your use cases to recommend the best approach.'
    },
    {
      question: 'How do you ensure API security?',
      answer: 'Security is built into every layer. We implement OAuth 2.0 or JWT for authentication, role-based access control for authorization, HTTPS everywhere, input validation to prevent injection attacks, rate limiting to prevent abuse, and API gateways for additional protection. We follow OWASP API Security guidelines and conduct penetration testing before launch.'
    },
    {
      question: 'How do you handle API versioning and breaking changes?',
      answer: 'We use semantic versioning with clear deprecation policies. New versions are introduced through URL paths or headers while maintaining backward compatibility as long as possible. Breaking changes include migration guides and extended deprecation periods. We help you communicate changes to API consumers and provide support during transitions.'
    },
    {
      question: 'What kind of documentation do you provide?',
      answer: 'We create comprehensive documentation including OpenAPI/Swagger specifications for REST, GraphQL schema docs, interactive API explorers where developers can test endpoints, code samples in multiple languages, tutorials for common use cases, authentication guides, and Postman collections. Documentation auto-generates from code to stay in sync.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Yes, integration is our specialty. We work with legacy systems, third-party services, databases, message queues, and more. We build middleware when needed to bridge incompatible systems. Our APIs often serve as the integration layer that connects your entire technology ecosystem, from ERP systems to mobile apps.'
    },
    {
      question: 'How do you handle API monitoring and reliability?',
      answer: 'We set up comprehensive monitoring including request logging, performance metrics, error tracking, and uptime monitoring. Alerts notify your team of issues before users notice. We implement circuit breakers, retries, and failover strategies for high availability. Post-launch, we provide dashboards showing API health, usage patterns, and performance trends.'
    }
  ],
  relatedServices: [
    {
      name: 'Backend Development',
      slug: 'backend-development',
      description: 'Full backend systems with APIs',
      icon: 'Server'
    },
    {
      name: 'Microservices Architecture',
      slug: 'microservices-architecture',
      description: 'Scalable distributed systems',
      icon: 'GitBranch'
    },
    {
      name: 'Database Development',
      slug: 'database-development',
      description: 'Database design and optimization',
      icon: 'Database'
    },
    {
      name: 'Cloud Services',
      slug: 'cloud-devops',
      description: 'API hosting and infrastructure',
      icon: 'Cloud'
    }
  ],
  seo: {
    title: 'API Development Services | REST & GraphQL API Development',
    description: 'Professional API development services for REST and GraphQL APIs. Build secure, scalable, well-documented APIs that power your applications and enable seamless integrations.',
    keywords: [
      'api development',
      'rest api development',
      'graphql api development',
      'api design',
      'api security',
      'api documentation',
      'api integration',
      'web api development',
      'api developers',
      'api consulting'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'API Development',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'API Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'REST API Development'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'GraphQL API Development'
            }
          }
        ]
      }
    }
  }
};
