import { ServiceData } from '@/components/services/sections';

export const magentoDevelopmentData: ServiceData = {
  name: 'Magento Development',
  slug: 'magento-development',
  tagline: 'Build enterprise-grade e-commerce with Adobe Commerce (Magento) for complex catalogs, B2B requirements, and global scale',
  category: 'E-commerce Solutions',
  description: 'Our Magento/Adobe Commerce development services deliver powerful enterprise e-commerce solutions for businesses with complex requirements. We build, customize, and optimize Magento stores that handle large catalogs, B2B functionality, and high-volume transactions.',

  hero: {
    headline: 'Enterprise E-commerce with Magento/Adobe Commerce',
    subheadline: 'Powerful, scalable Magento solutions for businesses that need enterprise features, complex B2B functionality, and unlimited customization.',
    description: 'Magento (now Adobe Commerce) is the platform of choice for enterprise e-commerce—powering major brands with complex requirements. Our Magento developers have deep expertise in building, customizing, and maintaining Magento stores that handle thousands of products, sophisticated B2B workflows, and millions in transactions. When your business outgrows simpler platforms, Magento delivers.',
    keyFeatures: [
      'Adobe Commerce implementations',
      'B2B e-commerce solutions',
      'Custom module development',
      'Multi-store management',
      'ERP & system integration',
      'Performance optimization'
    ],
    badges: ['Adobe Commerce Partners', 'Certified Developers', 'B2B Specialists', 'Enterprise Experts']
  },

  painPoints: [
    {
      icon: 'clock',
      title: 'Severe Performance Issues',
      description: 'Your Magento store is painfully slow. Page loads take 5+ seconds, and checkout abandonment is through the roof.',
      stat: '70%',
      statLabel: 'of Magento sites have significant performance issues'
    },
    {
      icon: 'dollar-sign',
      title: 'High Total Cost of Ownership',
      description: 'Development costs spiral, hosting is expensive, and every change requires significant developer time.',
      stat: '2-3x',
      statLabel: 'higher development costs than other platforms'
    },
    {
      icon: 'alert-triangle',
      title: 'Upgrade Complexity',
      description: 'You\'re stuck on an old Magento version because upgrades are risky, expensive, and time-consuming.',
      stat: '45%',
      statLabel: 'of Magento stores on outdated versions'
    },
    {
      icon: 'puzzle',
      title: 'Extension Conflicts',
      description: 'Third-party extensions conflict with each other and core functionality, causing bugs and security issues.',
      stat: '60%',
      statLabel: 'of Magento issues from extension conflicts'
    },
    {
      icon: 'users',
      title: 'Finding Qualified Developers',
      description: 'Experienced Magento developers are rare and expensive. Many agencies deliver subpar work that creates technical debt.',
      stat: '35%',
      statLabel: 'of Magento projects fail due to poor development'
    },
    {
      icon: 'refresh-cw',
      title: 'Magento 1 End of Life',
      description: 'Your Magento 1 store is unsupported and insecure. You need to migrate but it\'s a massive undertaking.',
      stat: '20%',
      statLabel: 'of stores still on unsupported Magento 1'
    }
  ],

  solutions: [
    {
      icon: 'box',
      title: 'Adobe Commerce Implementation',
      description: 'New Adobe Commerce/Magento 2 implementations with proper architecture for your business requirements.',
      highlights: [
        'Platform setup & configuration',
        'Custom theme development',
        'Multi-store setup',
        'Payment & shipping integration',
        'Performance optimization',
        'Security hardening'
      ]
    },
    {
      icon: 'briefcase',
      title: 'B2B E-commerce',
      description: 'Complete B2B functionality with customer accounts, pricing, quotes, and approval workflows.',
      highlights: [
        'Company accounts & hierarchies',
        'Customer-specific pricing',
        'Quote management system',
        'Purchase order workflows',
        'Requisition lists',
        'Credit limits & payment terms'
      ]
    },
    {
      icon: 'code',
      title: 'Custom Module Development',
      description: 'Custom Magento modules that add exactly the functionality you need without third-party extension risks.',
      highlights: [
        'Custom functionality',
        'Checkout modifications',
        'Product configurators',
        'Integration modules',
        'Admin extensions',
        'API development'
      ]
    },
    {
      icon: 'link',
      title: 'System Integration',
      description: 'Connect Magento with your ERP, CRM, PIM, and other enterprise systems for unified operations.',
      highlights: [
        'ERP integration (SAP, Oracle, NetSuite)',
        'PIM integration',
        'CRM integration',
        'Warehouse management',
        'Accounting systems',
        'Custom API development'
      ]
    },
    {
      icon: 'refresh-cw',
      title: 'Migration Services',
      description: 'Migrate from Magento 1, other platforms, or upgrade to latest Magento 2/Adobe Commerce versions.',
      highlights: [
        'Magento 1 to 2 migration',
        'Platform migrations',
        'Version upgrades',
        'Data migration',
        'Extension replacement',
        'SEO preservation'
      ]
    },
    {
      icon: 'zap',
      title: 'Performance & Optimization',
      description: 'Speed up and stabilize your existing Magento store with expert optimization.',
      highlights: [
        'Performance audit',
        'Code optimization',
        'Database tuning',
        'Caching optimization',
        'Infrastructure review',
        'Ongoing monitoring'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'clipboard-list',
        title: 'Discovery & Architecture',
        description: 'Deep dive into your requirements to design optimal Magento architecture.',
        duration: '2-3 weeks',
        deliverables: [
          'Business requirements',
          'Technical specification',
          'Architecture design',
          'Integration mapping',
          'Extension recommendations',
          'Infrastructure plan'
        ]
      },
      {
        icon: 'figma',
        title: 'UX/UI Design',
        description: 'Create conversion-focused designs for your Magento store.',
        duration: '2-4 weeks',
        deliverables: [
          'Wireframes',
          'Visual designs',
          'Mobile designs',
          'Component library',
          'Admin customizations',
          'Design documentation'
        ]
      },
      {
        icon: 'code',
        title: 'Development',
        description: 'Build your Magento store with custom theme, modules, and integrations.',
        duration: '8-16 weeks',
        deliverables: [
          'Theme development',
          'Module development',
          'Integration development',
          'Admin configuration',
          'Performance optimization',
          'Code review'
        ]
      },
      {
        icon: 'database',
        title: 'Data Migration',
        description: 'Migrate products, customers, orders, and other data to your new store.',
        duration: '2-4 weeks',
        deliverables: [
          'Data mapping',
          'Migration scripts',
          'Test migrations',
          'Data validation',
          'URL redirects',
          'Final migration'
        ]
      },
      {
        icon: 'check-circle',
        title: 'Testing & QA',
        description: 'Comprehensive testing across all functionality, devices, and scenarios.',
        duration: '2-4 weeks',
        deliverables: [
          'Functional testing',
          'Integration testing',
          'Performance testing',
          'Security testing',
          'UAT support',
          'Bug fixes'
        ]
      },
      {
        icon: 'rocket',
        title: 'Launch & Support',
        description: 'Production deployment with ongoing maintenance and optimization.',
        duration: 'Ongoing',
        deliverables: [
          'Production deployment',
          'Performance monitoring',
          'Security monitoring',
          'Bug support',
          'Version updates',
          'Optimization'
        ]
      }
    ],
    totalDuration: '16-32 weeks for enterprise implementations'
  },

  benefits: [
    {
      icon: 'layers',
      title: 'Enterprise Capabilities',
      description: 'Native features for complex catalogs, multi-store, B2B, and advanced promotions.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'enterprise feature coverage'
    },
    {
      icon: 'globe',
      title: 'Global Scalability',
      description: 'Handle millions of products, thousands of transactions, and global traffic.',
      stat: '10M+',
      statSuffix: '',
      statLabel: 'products supported'
    },
    {
      icon: 'settings',
      title: 'Unlimited Customization',
      description: 'Open-source flexibility to build exactly what your business needs.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'customizable platform'
    },
    {
      icon: 'link',
      title: 'Enterprise Integration',
      description: 'Robust APIs and integration capabilities for complex enterprise ecosystems.',
      stat: '1000+',
      statSuffix: '',
      statLabel: 'integration possibilities'
    },
    {
      icon: 'briefcase',
      title: 'B2B Native',
      description: 'Built-in B2B functionality for complex business-to-business selling.',
      stat: '#1',
      statSuffix: '',
      statLabel: 'B2B e-commerce platform'
    },
    {
      icon: 'shield',
      title: 'Adobe Ecosystem',
      description: 'Integration with Adobe Experience Cloud for enterprise marketing capabilities.',
      stat: '360°',
      statSuffix: '',
      statLabel: 'customer experience capabilities'
    }
  ],

  techStack: [
    {
      name: 'Magento Core',
      description: 'Core Magento/Adobe Commerce technologies.',
      technologies: [
        { name: 'Adobe Commerce', icon: '/icons/tech/magento.svg', category: 'Platform', proficiency: 'expert' },
        { name: 'Magento 2', icon: '/icons/tech/magento.svg', category: 'Platform', proficiency: 'expert' },
        { name: 'PHP', icon: '/icons/tech/php.svg', category: 'Language', proficiency: 'expert' },
        { name: 'MySQL', icon: '/icons/tech/mysql.svg', category: 'Database', proficiency: 'expert' },
        { name: 'Elasticsearch', icon: '/icons/tech/elasticsearch.svg', category: 'Search', proficiency: 'expert' },
        { name: 'Redis', icon: '/icons/tech/redis.svg', category: 'Caching', proficiency: 'expert' }
      ]
    },
    {
      name: 'Frontend Technologies',
      description: 'Frontend development for Magento stores.',
      technologies: [
        { name: 'JavaScript', icon: '/icons/tech/javascript.svg', category: 'Language', proficiency: 'expert' },
        { name: 'KnockoutJS', icon: '/icons/tech/knockoutjs.svg', category: 'Framework', proficiency: 'expert' },
        { name: 'RequireJS', icon: '/icons/tech/requirejs.svg', category: 'Module Loader', proficiency: 'expert' },
        { name: 'LESS', icon: '/icons/tech/less.svg', category: 'Styling', proficiency: 'expert' },
        { name: 'PWA Studio', icon: '/icons/tech/magento.svg', category: 'PWA', proficiency: 'advanced' },
        { name: 'GraphQL', icon: '/icons/tech/graphql.svg', category: 'API', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Infrastructure',
      description: 'Enterprise hosting and infrastructure.',
      technologies: [
        { name: 'AWS', icon: '/icons/tech/aws.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Adobe Commerce Cloud', icon: '/icons/tech/magento.svg', category: 'PaaS', proficiency: 'expert' },
        { name: 'Docker', icon: '/icons/tech/docker.svg', category: 'Containers', proficiency: 'expert' },
        { name: 'Varnish', icon: '/icons/tech/varnish.svg', category: 'Caching', proficiency: 'expert' },
        { name: 'RabbitMQ', icon: '/icons/tech/rabbitmq.svg', category: 'Queue', proficiency: 'advanced' },
        { name: 'New Relic', icon: '/icons/tech/newrelic.svg', category: 'Monitoring', proficiency: 'expert' }
      ]
    },
    {
      name: 'Integration Tools',
      description: 'Common enterprise integrations.',
      technologies: [
        { name: 'SAP', icon: '/icons/tech/sap.svg', category: 'ERP', proficiency: 'advanced' },
        { name: 'NetSuite', icon: '/icons/tech/netsuite.svg', category: 'ERP', proficiency: 'expert' },
        { name: 'Salesforce', icon: '/icons/tech/salesforce.svg', category: 'CRM', proficiency: 'advanced' },
        { name: 'Akeneo', icon: '/icons/tech/akeneo.svg', category: 'PIM', proficiency: 'expert' },
        { name: 'Dotdigital', icon: '/icons/tech/dotdigital.svg', category: 'Marketing', proficiency: 'advanced' },
        { name: 'Avalara', icon: '/icons/tech/avalara.svg', category: 'Tax', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Magento Optimization',
        description: 'Performance and functionality optimization for existing Magento stores.',
        price: '$15,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Performance Audit', included: true },
          { name: 'Speed Optimization', included: true },
          { name: 'Extension Audit', included: true },
          { name: 'Security Hardening', included: true },
          { name: 'Database Optimization', included: true },
          { name: 'Caching Setup', included: true },
          { name: 'Bug Fixes', included: true },
          { name: '60-Day Support', included: true }
        ],
        ctaText: 'Optimize Store',
        highlighted: false
      },
      {
        name: 'Mid-Market Implementation',
        description: 'Full Magento 2 implementation for growing businesses.',
        price: '$75,000',
        priceNote: 'Starting price',
        badge: 'Most Popular',
        features: [
          { name: 'Custom Theme Development', included: true },
          { name: 'Module Development', included: true },
          { name: 'Payment & Shipping Setup', included: true },
          { name: 'Basic ERP Integration', included: true },
          { name: 'Data Migration', included: true },
          { name: 'Performance Optimization', included: true },
          { name: 'Training & Documentation', included: true },
          { name: '90-Day Support', included: true }
        ],
        ctaText: 'Start Implementation',
        highlighted: true
      },
      {
        name: 'Enterprise Solution',
        description: 'Complex Adobe Commerce implementations for large enterprises.',
        price: '$200,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Adobe Commerce Cloud', included: true },
          { name: 'B2B Module Implementation', included: true },
          { name: 'Multi-Store/Website', included: true },
          { name: 'Complex ERP Integration', included: true },
          { name: 'Custom Module Suite', included: true },
          { name: 'PIM Integration', included: true },
          { name: 'Dedicated Team', included: true },
          { name: '12-Month Support', included: true }
        ],
        ctaText: 'Contact for Enterprise',
        highlighted: false
      }
    ],
    customNote: 'Magento projects vary significantly in scope. Contact us for detailed discovery and accurate estimation for your specific requirements.'
  },

  portfolio: [
    {
      title: 'Industrial B2B E-commerce',
      client: 'TechParts Global',
      industry: 'Industrial Manufacturing',
      description: 'Full B2B Adobe Commerce implementation with complex pricing and SAP integration.',
      challenge: 'Global industrial parts manufacturer needed B2B platform with customer-specific pricing for 50,000+ SKUs, quote management, and real-time SAP inventory sync.',
      solution: 'Implemented Adobe Commerce B2B with custom pricing engine, integrated quote system, SAP middleware for real-time sync, and punchout catalog support for enterprise customers.',
      results: [
        '$15M first year revenue',
        '3000+ B2B customers',
        '99.9% uptime achieved',
        '45% order digitization'
      ],
      metrics: [
        { label: 'Year 1 Revenue', value: '$15M' },
        { label: 'B2B Customers', value: '3000+' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Digital Orders', value: '45%' }
      ],
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop',
      tags: ['Adobe Commerce', 'B2B', 'SAP Integration', 'Enterprise']
    },
    {
      title: 'Global Fashion Retailer',
      client: 'ModaLux International',
      industry: 'Fashion & Apparel',
      description: 'Multi-store Magento implementation for fashion brand operating in 15 countries.',
      challenge: 'Fashion brand needed single platform for 15 country-specific stores with localized pricing, content, and fulfillment. Required integration with multiple 3PLs and return management.',
      solution: 'Built multi-website Magento architecture with shared catalog and localized storefronts, integrated multiple regional fulfillment partners, implemented comprehensive returns management.',
      results: [
        '15 country stores',
        '$50M annual e-commerce',
        '40% international growth',
        '2.4s average load time'
      ],
      metrics: [
        { label: 'Countries', value: '15' },
        { label: 'Annual Revenue', value: '$50M' },
        { label: 'Growth', value: '40%' },
        { label: 'Load Time', value: '2.4s' }
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      tags: ['Magento 2', 'Multi-Store', 'Global', 'Fashion']
    },
    {
      title: 'Magento 1 to 2 Migration',
      client: 'Electronics Warehouse',
      industry: 'Consumer Electronics',
      description: 'Complex migration from heavily customized Magento 1 to Adobe Commerce.',
      challenge: 'Electronics retailer on unsupported Magento 1 with 20+ custom modules needed migration without business disruption. Couldn\'t afford extended downtime during peak season.',
      solution: 'Executed parallel migration strategy with Magento 2 built alongside M1. Recreated custom functionality with modern modules, performed phased data migration with zero-downtime cutover.',
      results: [
        'Zero downtime migration',
        '65% performance improvement',
        'All custom features recreated',
        '$0 lost revenue'
      ],
      metrics: [
        { label: 'Downtime', value: '0 hrs' },
        { label: 'Performance', value: '+65%' },
        { label: 'Features Migrated', value: '100%' },
        { label: 'Revenue Lost', value: '$0' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['Migration', 'Magento 2', 'Electronics', 'Enterprise']
    },
    {
      title: 'Wholesale Distribution Platform',
      client: 'Metro Distributors',
      industry: 'Wholesale Distribution',
      description: 'Enterprise Magento B2B platform for wholesale distributor with 100,000+ SKUs and complex pricing tiers.',
      challenge: 'Large wholesale distributor needed digital transformation with tiered pricing, credit management, bulk ordering, and integration with warehouse management systems.',
      solution: 'Built comprehensive Adobe Commerce B2B solution with customer credit limits, tiered pricing matrices, quick-order functionality, and real-time WMS integration.',
      results: [
        '70% order digitization',
        '$25M annual online sales',
        '55% reduction in order errors',
        '500+ wholesale accounts'
      ],
      metrics: [
        { label: 'Digital Orders', value: '70%' },
        { label: 'Annual Sales', value: '$25M' },
        { label: 'Error Reduction', value: '55%' },
        { label: 'Accounts', value: '500+' }
      ],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      tags: ['Adobe Commerce', 'B2B', 'Wholesale', 'WMS Integration']
    }
  ],

  testimonials: [
    {
      quote: 'Finally, a team that understands enterprise Magento. The SAP integration works flawlessly, and our B2B customers love the new ordering experience.',
      author: 'Michael Schmidt',
      role: 'CTO',
      company: 'TechParts Global',
      rating: 5,
      location: 'Munich, Germany'
    },
    {
      quote: 'Managing 15 international stores from one platform has transformed our operations. They delivered a complex project on time and on budget.',
      author: 'Elena Rossi',
      role: 'VP E-commerce',
      company: 'ModaLux International',
      rating: 5,
      location: 'Milan, Italy'
    },
    {
      quote: 'We thought Magento migration was impossible without massive disruption. They proved us wrong with a flawless zero-downtime migration.',
      author: 'Kevin Chen',
      role: 'Director of Digital',
      company: 'Electronics Warehouse',
      rating: 5,
      location: 'Los Angeles, CA'
    }
  ],

  faqs: [
    {
      question: 'When should I choose Magento over Shopify?',
      answer: 'Choose Magento/Adobe Commerce when you need: complex B2B functionality (customer-specific pricing, quotes, company accounts), large catalogs (10,000+ products with complex attributes), multi-store/multi-brand requirements, deep ERP integration, complete customization control, or when you\'ve outgrown Shopify Plus limitations. Magento has higher TCO but offers capabilities that simpler platforms can\'t match.'
    },
    {
      question: 'How much does Magento development cost?',
      answer: 'Magento projects range widely: optimization/enhancements $15-50K, mid-market implementations $75-150K, enterprise implementations $200K-500K+. Cost depends on complexity, integrations, customization, and data migration requirements. Adobe Commerce Cloud licensing adds $40K-200K+/year. We provide detailed estimates after discovery workshops.'
    },
    {
      question: 'Should I migrate from Magento 1?',
      answer: 'Yes, urgently. Magento 1 is no longer supported and doesn\'t receive security patches. You\'re at significant risk of security breaches, PCI compliance issues, and technology debt. Migration options include: upgrading to Magento 2/Adobe Commerce, migrating to Shopify Plus or other platforms, or headless commerce approaches. We\'ll help you evaluate the best path.'
    },
    {
      question: 'How long do Magento implementations take?',
      answer: 'Timeline depends on complexity: basic implementations take 16-24 weeks, mid-market with integrations take 24-36 weeks, and enterprise implementations take 36-52+ weeks. Key factors include scope of customization, number of integrations, data migration complexity, and multi-store requirements. Phased approaches can get you live sooner with additional features added over time.'
    },
    {
      question: 'What hosting is best for Magento?',
      answer: 'Options include: Adobe Commerce Cloud (managed PaaS, recommended for enterprise), AWS/GCP with managed services (flexibility and control), and Magento-optimized hosts (Nexcess, MageMojo). Magento requires significant server resources—budget $1,000-10,000+/month depending on traffic and requirements. Poor hosting is the #1 cause of Magento performance problems.'
    },
    {
      question: 'Can you optimize our slow Magento store?',
      answer: 'Yes, Magento performance optimization is a specialty. Common issues we address: poor hosting configuration, database optimization, caching implementation (Varnish, Redis), extension conflicts, unoptimized custom code, and image optimization. Most stores see 50-70% improvement in load times. We start with a comprehensive performance audit to identify specific issues.'
    }
  ],

  relatedServices: [
    {
      name: 'E-commerce Website Development',
      slug: 'ecommerce-website-development',
      description: 'Full-service e-commerce for evaluating different platform options.',
      icon: 'shopping-cart'
    },
    {
      name: 'Payment Gateway Integration',
      slug: 'payment-gateway-integration',
      description: 'Enterprise payment solutions for Magento stores.',
      icon: 'credit-card'
    },
    {
      name: 'Inventory Management Systems',
      slug: 'inventory-management-systems',
      description: 'Advanced inventory management for complex Magento operations.',
      icon: 'package'
    },
    {
      name: 'E-commerce Analytics',
      slug: 'ecommerce-analytics',
      description: 'Enterprise analytics for data-driven Magento optimization.',
      icon: 'bar-chart-2'
    }
  ],

  seo: {
    title: 'Magento Development Services | Adobe Commerce Development',
    description: 'Expert Magento and Adobe Commerce development services. Enterprise implementations, B2B solutions, custom modules, and migrations by certified developers.',
    keywords: [
      'Magento development',
      'Adobe Commerce development',
      'Magento developer',
      'Magento 2 development',
      'Adobe Commerce implementation',
      'Magento B2B',
      'Magento migration',
      'Magento optimization',
      'enterprise e-commerce',
      'Magento experts'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Magento Development Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      description: 'Expert Magento and Adobe Commerce development services for enterprise e-commerce including implementations, B2B solutions, custom modules, and platform migrations.'
    }
  }
};

export default magentoDevelopmentData;
