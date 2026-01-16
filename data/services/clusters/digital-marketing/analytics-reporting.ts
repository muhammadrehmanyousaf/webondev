import { ServiceData } from '@/components/services/sections';

export const analyticsReportingData: ServiceData = {
  name: 'Analytics & Reporting',
  slug: 'analytics-reporting',
  tagline: 'Data-Driven Decisions',
  category: 'Digital Marketing',
  description: 'Comprehensive analytics and reporting services that turn data into actionable insights. We implement tracking, build dashboards, and deliver analysis that drives smarter marketing decisions.',
  hero: {
    headline: 'Analytics & Reporting Services',
    subheadline: 'Turn Data Into Actionable Insights',
    description: 'Make smarter marketing decisions with comprehensive analytics. From implementation to insights, we help you understand what works, what doesn\'t, and where to invest.',
    keyFeatures: [
      'Analytics Implementation',
      'Dashboard Development',
      'Attribution Modeling',
      'Data Analysis & Insights'
    ],
    badges: ['GA4 Certified', '300+ Implementations', 'Data-Driven Results']
  },
  painPoints: [
    {
      icon: 'AlertTriangle',
      title: 'Broken Tracking',
      description: 'Analytics not properly configured, missing crucial data about performance.',
      stat: '85%',
      statLabel: 'Sites have tracking issues'
    },
    {
      icon: 'BarChart2',
      title: 'Data Overload',
      description: 'Drowning in data but lacking actionable insights to improve.',
      stat: '73%',
      statLabel: 'Cannot act on data'
    },
    {
      icon: 'Eye',
      title: 'No Attribution Clarity',
      description: 'Cannot determine which marketing channels actually drive revenue.',
      stat: '60%',
      statLabel: 'Cannot attribute revenue'
    },
    {
      icon: 'Clock',
      title: 'Manual Reporting',
      description: 'Hours spent compiling reports instead of analyzing insights.',
      stat: '8+ hrs',
      statLabel: 'Weekly on reports'
    },
    {
      icon: 'Unlink',
      title: 'Disconnected Data',
      description: 'Data trapped in silos across multiple platforms and tools.',
      stat: '47%',
      statLabel: 'Data in silos'
    },
    {
      icon: 'Target',
      title: 'Wrong Metrics Focus',
      description: 'Tracking vanity metrics instead of business outcomes.',
      stat: '65%',
      statLabel: 'Track wrong metrics'
    }
  ],
  solutions: [
    {
      icon: 'Settings',
      title: 'Analytics Implementation',
      description: 'Proper setup of GA4, tracking pixels, and conversion tracking.',
      highlights: ['GA4 Implementation', 'Event Tracking', 'E-commerce Tracking', 'Cross-Domain']
    },
    {
      icon: 'Layers',
      title: 'Tag Management',
      description: 'Google Tag Manager implementation for scalable tracking.',
      highlights: ['GTM Setup', 'Tag Configuration', 'Data Layer', 'Server-Side Tracking']
    },
    {
      icon: 'Layout',
      title: 'Dashboard Development',
      description: 'Custom dashboards that visualize the metrics that matter.',
      highlights: ['Looker Studio', 'Tableau', 'Power BI', 'Custom Dashboards']
    },
    {
      icon: 'GitBranch',
      title: 'Attribution Modeling',
      description: 'Multi-touch attribution to understand the customer journey.',
      highlights: ['Attribution Models', 'Customer Journey', 'Channel Analysis', 'ROI Tracking']
    },
    {
      icon: 'Database',
      title: 'Data Integration',
      description: 'Connect data sources for unified analytics and reporting.',
      highlights: ['Data Warehouse', 'API Integrations', 'Data Pipelines', 'ETL']
    },
    {
      icon: 'FileText',
      title: 'Insights & Analysis',
      description: 'Ongoing analysis turning data into actionable recommendations.',
      highlights: ['Performance Analysis', 'Opportunity Identification', 'Testing Recommendations', 'Strategic Insights']
    }
  ],
  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Analytics Audit',
        description: 'Comprehensive audit of current tracking and data quality.',
        duration: '1-2 weeks',
        deliverables: ['Tracking Audit', 'Data Quality Report', 'Gap Analysis', 'Recommendations']
      },
      {
        icon: 'Map',
        title: 'Measurement Strategy',
        description: 'Define KPIs, tracking plan, and reporting requirements.',
        duration: '1 week',
        deliverables: ['KPI Framework', 'Measurement Plan', 'Tracking Spec', 'Data Dictionary']
      },
      {
        icon: 'Settings',
        title: 'Implementation',
        description: 'Configure analytics, tag management, and integrations.',
        duration: '2-4 weeks',
        deliverables: ['GA4 Setup', 'GTM Configuration', 'Event Tracking', 'Integrations']
      },
      {
        icon: 'Layout',
        title: 'Dashboard Build',
        description: 'Build custom dashboards for real-time visibility.',
        duration: '2-3 weeks',
        deliverables: ['Executive Dashboard', 'Channel Dashboards', 'Campaign Reports', 'Automated Reports']
      },
      {
        icon: 'CheckCircle',
        title: 'Testing & Validation',
        description: 'Thorough testing to ensure data accuracy.',
        duration: '1-2 weeks',
        deliverables: ['QA Testing', 'Data Validation', 'Documentation', 'Training']
      },
      {
        icon: 'TrendingUp',
        title: 'Analysis & Optimization',
        description: 'Ongoing analysis and recommendations.',
        duration: 'Ongoing',
        deliverables: ['Monthly Analysis', 'Insights Reports', 'Recommendations', 'Dashboard Updates']
      }
    ],
    totalDuration: '8-12 weeks implementation'
  },
  benefits: [
    {
      icon: 'CheckCircle',
      title: 'Accurate Data',
      description: 'Trust your data with properly implemented tracking.',
      stat: '99%',
      statSuffix: '',
      statLabel: 'Data accuracy'
    },
    {
      icon: 'Eye',
      title: 'Clear Attribution',
      description: 'Know exactly which channels drive revenue.',
      stat: '100%',
      statSuffix: '',
      statLabel: 'Attribution visibility'
    },
    {
      icon: 'Clock',
      title: 'Time Savings',
      description: 'Automated reporting frees time for analysis.',
      stat: '8hrs',
      statSuffix: '',
      statLabel: 'Saved weekly'
    },
    {
      icon: 'TrendingUp',
      title: 'Better Decisions',
      description: 'Data-driven decisions that improve performance.',
      stat: '23%',
      statSuffix: '',
      statLabel: 'ROI improvement'
    },
    {
      icon: 'DollarSign',
      title: 'Optimized Spend',
      description: 'Allocate budget to highest-performing channels.',
      stat: '35%',
      statSuffix: '',
      statLabel: 'Better spend efficiency'
    },
    {
      icon: 'Zap',
      title: 'Faster Insights',
      description: 'Real-time dashboards for immediate visibility.',
      stat: 'Real-time',
      statSuffix: '',
      statLabel: 'Data access'
    }
  ],
  techStack: [
    {
      name: 'Analytics Platforms',
      description: 'Core analytics tools',
      technologies: [
        { name: 'Google Analytics 4', icon: 'ga4', category: 'Web Analytics', proficiency: 'expert' },
        { name: 'Adobe Analytics', icon: 'adobe', category: 'Enterprise', proficiency: 'expert' },
        { name: 'Mixpanel', icon: 'mixpanel', category: 'Product', proficiency: 'advanced' },
        { name: 'Amplitude', icon: 'amplitude', category: 'Product', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Tag Management',
      description: 'Tracking implementation',
      technologies: [
        { name: 'Google Tag Manager', icon: 'gtm', category: 'Tags', proficiency: 'expert' },
        { name: 'Tealium', icon: 'tealium', category: 'Enterprise', proficiency: 'advanced' },
        { name: 'Segment', icon: 'segment', category: 'CDP', proficiency: 'expert' },
        { name: 'Adobe Launch', icon: 'adobe', category: 'Enterprise', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Visualization',
      description: 'Dashboard and BI tools',
      technologies: [
        { name: 'Looker Studio', icon: 'looker', category: 'Reporting', proficiency: 'expert' },
        { name: 'Tableau', icon: 'tableau', category: 'BI', proficiency: 'expert' },
        { name: 'Power BI', icon: 'powerbi', category: 'BI', proficiency: 'advanced' },
        { name: 'Databox', icon: 'databox', category: 'Reporting', proficiency: 'expert' }
      ]
    },
    {
      name: 'Data Infrastructure',
      description: 'Data warehouse and ETL',
      technologies: [
        { name: 'BigQuery', icon: 'bigquery', category: 'Data Warehouse', proficiency: 'expert' },
        { name: 'Snowflake', icon: 'snowflake', category: 'Data Warehouse', proficiency: 'advanced' },
        { name: 'Fivetran', icon: 'fivetran', category: 'ETL', proficiency: 'expert' },
        { name: 'dbt', icon: 'dbt', category: 'Transform', proficiency: 'advanced' }
      ]
    }
  ],
  pricing: {
    plans: [
      {
        name: 'Analytics Foundation',
        description: 'Essential analytics setup',
        price: '$5,000',
        priceNote: 'One-time setup',
        features: [
          { name: 'GA4 Implementation', included: true },
          { name: 'GTM Setup', included: true },
          { name: 'Event Tracking (20 events)', included: true },
          { name: 'Basic Dashboard (3)', included: true },
          { name: 'Conversion Tracking', included: true },
          { name: 'Documentation', included: true },
          { name: 'Advanced Attribution', included: false },
          { name: 'Data Warehouse', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Analytics Advanced',
        description: 'Comprehensive analytics program',
        price: '$15,000',
        priceNote: 'One-time setup',
        badge: 'Most Popular',
        features: [
          { name: 'Full GA4 Implementation', included: true },
          { name: 'Advanced GTM Setup', included: true },
          { name: 'E-commerce Tracking', included: true },
          { name: 'Custom Dashboards (10)', included: true },
          { name: 'Attribution Modeling', included: true },
          { name: 'Data Integration (3 sources)', included: true },
          { name: 'Training & Documentation', included: true },
          { name: '90-Day Support', included: true }
        ],
        ctaText: 'Start Growing',
        highlighted: true
      },
      {
        name: 'Analytics Enterprise',
        description: 'Full-scale data infrastructure',
        price: '$40,000+',
        priceNote: 'One-time setup',
        features: [
          { name: 'Enterprise Analytics Suite', included: true },
          { name: 'Data Warehouse Setup', included: true },
          { name: 'Full Attribution Stack', included: true },
          { name: 'Unlimited Dashboards', included: true },
          { name: 'Cross-Platform Integration', included: true },
          { name: 'Predictive Analytics', included: true },
          { name: 'Ongoing Analysis Retainer', included: true },
          { name: 'Dedicated Analytics Team', included: true }
        ],
        ctaText: 'Contact Sales',
        highlighted: false
      }
    ],
    customNote: 'Ongoing analysis and optimization retainers available. Platform licensing fees additional.'
  },
  portfolio: [
    {
      title: 'E-commerce Analytics Transformation',
      client: 'FashionForward Retail',
      industry: 'E-commerce / Fashion',
      description: 'Complete GA4 migration and analytics overhaul for fashion e-commerce brand.',
      challenge: 'FashionForward had broken Universal Analytics tracking and no visibility into marketing ROI.',
      solution: 'We migrated to GA4 with enhanced e-commerce tracking, built attribution model, and created real-time dashboards.',
      results: [
        '100% tracking accuracy',
        '35% better ad spend allocation',
        '24% revenue increase',
        '8 hours saved weekly'
      ],
      metrics: [
        { label: 'Data Accuracy', value: '100%' },
        { label: 'Ad Efficiency', value: '+35%' },
        { label: 'Revenue', value: '+24%' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['GA4', 'E-commerce', 'Attribution', 'Dashboards']
    },
    {
      title: 'B2B Marketing Attribution',
      client: 'EnterpriseCloud Solutions',
      industry: 'SaaS / B2B',
      description: 'Multi-touch attribution and full-funnel analytics for B2B software company.',
      challenge: 'EnterpriseCloud could not attribute $10M+ annual marketing spend to pipeline and revenue.',
      solution: 'We implemented full-funnel tracking with Salesforce integration and built custom attribution dashboards.',
      results: [
        'Full revenue attribution',
        '$2.3M budget optimized',
        '45% shorter sales cycle',
        'Real-time pipeline visibility'
      ],
      metrics: [
        { label: 'Attribution', value: '100%' },
        { label: 'Budget Optimized', value: '$2.3M' },
        { label: 'Sales Cycle', value: '-45%' }
      ],
      image: 'https://images.unsplash.com/photo-1543286386-713bdc93f39a?w=800&h=600&fit=crop',
      tags: ['B2B Analytics', 'Attribution', 'Salesforce', 'Pipeline']
    },
    {
      title: 'Multi-Brand Analytics Platform',
      client: 'Global Brands Co',
      industry: 'Conglomerate',
      description: 'Unified analytics platform for portfolio of 12 consumer brands.',
      challenge: 'Global Brands had fragmented analytics across 12 brands with no unified view or benchmarking.',
      solution: 'We built a centralized data warehouse with standardized tracking and executive dashboards.',
      results: [
        '12 brands unified',
        'Real-time benchmarking',
        '$1.8M efficiency savings',
        'Single source of truth'
      ],
      metrics: [
        { label: 'Brands Unified', value: '12' },
        { label: 'Efficiency Savings', value: '$1.8M' },
        { label: 'Data Latency', value: 'Real-time' }
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['Enterprise', 'Data Warehouse', 'Multi-Brand', 'BigQuery']
    },
    {
      title: 'SaaS Product Analytics Implementation',
      client: 'AppFlow Software',
      industry: 'SaaS / Technology',
      description: 'Product analytics and customer journey tracking for B2B SaaS platform.',
      challenge: 'AppFlow had no visibility into user behavior, feature adoption, or churn indicators within their platform.',
      solution: 'We implemented Mixpanel with custom event tracking, built user journey funnels, and created predictive churn dashboards.',
      results: [
        '45% reduction in churn',
        'Feature adoption visibility',
        '156 behavioral insights identified',
        '$2.1M retained revenue'
      ],
      metrics: [
        { label: 'Churn Reduction', value: '-45%' },
        { label: 'Insights', value: '156' },
        { label: 'Retained Revenue', value: '$2.1M' }
      ],
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
      tags: ['Product Analytics', 'Mixpanel', 'SaaS', 'User Behavior']
    }
  ],
  testimonials: [
    {
      quote: 'For the first time, we know exactly where our revenue comes from. Their analytics work increased our marketing efficiency by 35%.',
      author: 'Jennifer Walsh',
      role: 'VP of Marketing',
      company: 'FashionForward Retail',
      rating: 5,
      location: 'New York, USA'
    },
    {
      quote: 'We went from guessing to knowing. Now we can prove marketing ROI to the board with confidence.',
      author: 'Michael Chen',
      role: 'CMO',
      company: 'EnterpriseCloud Solutions',
      rating: 5,
      location: 'San Francisco, USA'
    },
    {
      quote: 'Unifying 12 brands into one analytics platform was complex but they made it seamless. Game changer for our organization.',
      author: 'Sarah Thompson',
      role: 'Chief Digital Officer',
      company: 'Global Brands Co',
      rating: 5,
      location: 'Chicago, USA'
    }
  ],
  faqs: [
    {
      question: 'Should we migrate to Google Analytics 4?',
      answer: 'Yes, Universal Analytics stopped processing data in July 2023. GA4 is the future of Google Analytics with better cross-device tracking, machine learning insights, and privacy-focused design. We help with migration ensuring you preserve historical insights and properly configure GA4.'
    },
    {
      question: 'What is the difference between GA4 and Adobe Analytics?',
      answer: 'GA4 is free and suits most businesses. Adobe Analytics offers more customization, better segmentation, and handles higher data volumes, but costs significantly more. We recommend Adobe for enterprise organizations with complex needs and dedicated analytics teams.'
    },
    {
      question: 'How do you ensure tracking accuracy?',
      answer: 'We implement rigorous QA processes including real-time monitoring, data validation rules, automated testing, and regular audits. We also document everything so tracking can be maintained and debugged over time.'
    },
    {
      question: 'What metrics should we track?',
      answer: 'We focus on metrics tied to business outcomes, not vanity metrics. This typically includes conversion rates, revenue attribution, customer acquisition cost, lifetime value, and channel-specific KPIs. We help define the right KPI framework for your goals.'
    },
    {
      question: 'Can you connect data from multiple sources?',
      answer: 'Yes, we build data integrations connecting web analytics, CRM, advertising platforms, and other sources. We can implement customer data platforms (CDPs) or data warehouses to unify data for comprehensive analysis.'
    },
    {
      question: 'Do you provide ongoing analysis or just setup?',
      answer: 'We offer both. Implementation gets you the data infrastructure. Ongoing analysis retainers provide monthly insights, recommendations, and continuous optimization. Many clients start with implementation and add ongoing analysis as they see value.'
    }
  ],
  relatedServices: [
    {
      name: 'SEO Services',
      slug: 'seo-services',
      description: 'Track SEO performance',
      icon: 'Search'
    },
    {
      name: 'PPC Advertising',
      slug: 'ppc-advertising',
      description: 'Measure ad performance',
      icon: 'DollarSign'
    },
    {
      name: 'Conversion Optimization',
      slug: 'conversion-optimization',
      description: 'Data-driven optimization',
      icon: 'TrendingUp'
    },
    {
      name: 'Marketing Automation',
      slug: 'marketing-automation',
      description: 'Track automation performance',
      icon: 'Settings'
    }
  ],
  seo: {
    title: 'Analytics & Reporting Services | GA4 Implementation, Dashboards',
    description: 'Professional analytics and reporting services including GA4 implementation, tag management, custom dashboards, and attribution modeling. Turn data into actionable insights.',
    keywords: [
      'analytics services',
      'GA4 implementation',
      'Google Analytics consulting',
      'marketing analytics',
      'dashboard development',
      'attribution modeling',
      'tag management',
      'data analytics',
      'marketing reporting',
      'analytics consulting'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Analytics & Reporting',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Analytics Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'GA4 Implementation'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Dashboard Development'
            }
          }
        ]
      }
    }
  }
};
