import { ServiceData } from '@/components/services/sections';

export const ecommerceAnalyticsData: ServiceData = {
  name: 'E-commerce Analytics',
  slug: 'ecommerce-analytics',
  tagline: 'Transform e-commerce data into actionable insights that drive revenue growth and operational excellence',
  category: 'E-commerce Solutions',
  description: 'Our e-commerce analytics services help online businesses make data-driven decisions. We implement comprehensive analytics solutions that track every aspect of your e-commerce performance, from customer acquisition to lifetime value, enabling smarter marketing, merchandising, and operations.',

  hero: {
    headline: 'E-commerce Analytics That Drive Growth',
    subheadline: 'Comprehensive analytics implementation that gives you complete visibility into customer behavior, marketing performance, and business profitability.',
    description: 'Data is the foundation of e-commerce success. Our analytics specialists implement robust tracking, build actionable dashboards, and help you understand what\'s really driving your business. From marketing attribution to customer lifetime value, we ensure you have the insights needed to optimize every aspect of your online store.',
    keyFeatures: [
      'GA4 & enhanced e-commerce',
      'Marketing attribution',
      'Customer analytics',
      'Profitability tracking',
      'Custom dashboards',
      'Predictive analytics'
    ],
    badges: ['Analytics Experts', 'GA4 Certified', 'Data Engineering', 'BI Specialists']
  },

  painPoints: [
    {
      icon: 'eye-off',
      title: 'Flying Blind',
      description: 'You don\'t have clear visibility into what\'s working and what isn\'t. Decisions are based on gut feel, not data.',
      stat: '58%',
      statLabel: 'of e-commerce decisions made without data'
    },
    {
      icon: 'target',
      title: 'Attribution Confusion',
      description: 'You can\'t tell which marketing channels actually drive sales. Last-click attribution doesn\'t tell the real story.',
      stat: '76%',
      statLabel: 'of marketers struggle with attribution'
    },
    {
      icon: 'alert-circle',
      title: 'Broken Tracking',
      description: 'Pixel fires are missed, conversion data is inaccurate, and privacy changes have broken your tracking.',
      stat: '45%',
      statLabel: 'of e-commerce tracking has significant gaps'
    },
    {
      icon: 'dollar-sign',
      title: 'Unknown True Costs',
      description: 'Between COGS, shipping, returns, and fees, you don\'t know actual profit by product or channel.',
      stat: '52%',
      statLabel: 'don\'t know product-level profitability'
    },
    {
      icon: 'users',
      title: 'Customer Insights Gap',
      description: 'You don\'t understand customer segments, lifetime value, or what drives loyalty and repeat purchases.',
      stat: '67%',
      statLabel: 'lack customer lifetime value tracking'
    },
    {
      icon: 'bar-chart-2',
      title: 'Report Overload',
      description: 'Data is scattered across platforms. Creating reports requires manual exports and spreadsheet work.',
      stat: '20hrs',
      statLabel: 'per week spent on manual reporting'
    }
  ],

  solutions: [
    {
      icon: 'bar-chart-2',
      title: 'Analytics Implementation',
      description: 'Comprehensive tracking setup that captures every important customer interaction.',
      highlights: [
        'GA4 enhanced e-commerce',
        'Server-side tracking',
        'Custom event tracking',
        'Cross-domain tracking',
        'User identification',
        'Data layer implementation'
      ]
    },
    {
      icon: 'target',
      title: 'Marketing Attribution',
      description: 'Understand which marketing efforts truly drive conversions and revenue.',
      highlights: [
        'Multi-touch attribution',
        'Marketing mix modeling',
        'Channel performance',
        'Campaign ROI tracking',
        'Customer journey mapping',
        'Attribution dashboards'
      ]
    },
    {
      icon: 'users',
      title: 'Customer Analytics',
      description: 'Deep insights into customer behavior, segments, and lifetime value.',
      highlights: [
        'Customer segmentation',
        'Cohort analysis',
        'Lifetime value calculation',
        'RFM analysis',
        'Churn prediction',
        'Customer journey analysis'
      ]
    },
    {
      icon: 'dollar-sign',
      title: 'Profitability Analytics',
      description: 'True profit visibility at the product, order, and customer level.',
      highlights: [
        'Product profitability',
        'Channel profitability',
        'Customer profitability',
        'COGS tracking',
        'Fee & return impact',
        'Margin optimization'
      ]
    },
    {
      icon: 'layout',
      title: 'Custom Dashboards',
      description: 'Real-time dashboards that surface the metrics that matter most.',
      highlights: [
        'Executive dashboards',
        'Marketing dashboards',
        'Operations dashboards',
        'Merchandising reports',
        'Custom KPIs',
        'Automated alerts'
      ]
    },
    {
      icon: 'cpu',
      title: 'Advanced Analytics',
      description: 'Predictive analytics and machine learning for competitive advantage.',
      highlights: [
        'Demand forecasting',
        'Inventory optimization',
        'Price optimization',
        'Personalization data',
        'Anomaly detection',
        'Predictive LTV'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'search',
        title: 'Analytics Audit',
        description: 'Assess current tracking, data quality, and analytics gaps.',
        duration: '1-2 weeks',
        deliverables: [
          'Tracking audit',
          'Data quality assessment',
          'Gap analysis',
          'Tool evaluation',
          'Requirements gathering',
          'Recommendations'
        ]
      },
      {
        icon: 'clipboard-list',
        title: 'Strategy & Planning',
        description: 'Design analytics architecture and measurement framework.',
        duration: '1-2 weeks',
        deliverables: [
          'Measurement plan',
          'KPI framework',
          'Data architecture',
          'Tool selection',
          'Implementation plan',
          'Dashboard wireframes'
        ]
      },
      {
        icon: 'code',
        title: 'Implementation',
        description: 'Implement tracking, integrations, and data infrastructure.',
        duration: '3-6 weeks',
        deliverables: [
          'GA4 implementation',
          'Enhanced e-commerce',
          'Server-side tracking',
          'Platform integrations',
          'Data layer',
          'QA & validation'
        ]
      },
      {
        icon: 'database',
        title: 'Data Integration',
        description: 'Connect data sources and build unified data model.',
        duration: '2-4 weeks',
        deliverables: [
          'Data warehouse setup',
          'ETL pipelines',
          'Data modeling',
          'Source integration',
          'Data validation',
          'Documentation'
        ]
      },
      {
        icon: 'layout',
        title: 'Dashboard Build',
        description: 'Create custom dashboards and reports.',
        duration: '2-3 weeks',
        deliverables: [
          'Executive dashboard',
          'Marketing dashboard',
          'Operations dashboard',
          'Custom reports',
          'Alert setup',
          'Team training'
        ]
      },
      {
        icon: 'trending-up',
        title: 'Optimization',
        description: 'Ongoing analytics support and optimization.',
        duration: 'Ongoing',
        deliverables: [
          'Monthly analysis',
          'Insight reports',
          'Tracking maintenance',
          'New feature tracking',
          'Dashboard updates',
          'Strategic consulting'
        ]
      }
    ],
    totalDuration: '10-18 weeks for comprehensive implementation'
  },

  benefits: [
    {
      icon: 'check-circle',
      title: 'Accurate Data',
      description: 'Trust your numbers with properly implemented, validated tracking.',
      stat: '99',
      statSuffix: '%',
      statLabel: 'tracking accuracy'
    },
    {
      icon: 'target',
      title: 'Marketing Clarity',
      description: 'Know exactly which channels and campaigns drive profitable growth.',
      stat: '40',
      statSuffix: '%',
      statLabel: 'marketing efficiency improvement'
    },
    {
      icon: 'users',
      title: 'Customer Understanding',
      description: 'Deep insights into who your customers are and what drives loyalty.',
      stat: '360°',
      statSuffix: '',
      statLabel: 'customer view'
    },
    {
      icon: 'dollar-sign',
      title: 'Profit Visibility',
      description: 'Know true profitability at every level of your business.',
      stat: '25',
      statSuffix: '%',
      statLabel: 'margin improvement opportunity'
    },
    {
      icon: 'clock',
      title: 'Time Savings',
      description: 'Automated dashboards eliminate manual reporting work.',
      stat: '15',
      statSuffix: 'hrs',
      statLabel: 'saved weekly on reporting'
    },
    {
      icon: 'zap',
      title: 'Faster Decisions',
      description: 'Real-time data enables quick, confident business decisions.',
      stat: '5x',
      statSuffix: '',
      statLabel: 'faster decision making'
    }
  ],

  techStack: [
    {
      name: 'Analytics Platforms',
      description: 'Core analytics and tracking tools.',
      technologies: [
        { name: 'Google Analytics 4', icon: '/icons/tech/google-analytics.svg', category: 'Analytics', proficiency: 'expert' },
        { name: 'Google Tag Manager', icon: '/icons/tech/gtm.svg', category: 'Tag Management', proficiency: 'expert' },
        { name: 'Segment', icon: '/icons/tech/segment.svg', category: 'CDP', proficiency: 'expert' },
        { name: 'Amplitude', icon: '/icons/tech/amplitude.svg', category: 'Product Analytics', proficiency: 'advanced' },
        { name: 'Mixpanel', icon: '/icons/tech/mixpanel.svg', category: 'Product Analytics', proficiency: 'advanced' },
        { name: 'Heap', icon: '/icons/tech/heap.svg', category: 'Analytics', proficiency: 'advanced' }
      ]
    },
    {
      name: 'E-commerce Analytics',
      description: 'Specialized e-commerce analytics tools.',
      technologies: [
        { name: 'Triple Whale', icon: '/icons/tech/triplewhale.svg', category: 'Attribution', proficiency: 'expert' },
        { name: 'Lifetimely', icon: '/icons/tech/lifetimely.svg', category: 'LTV', proficiency: 'expert' },
        { name: 'Polar Analytics', icon: '/icons/tech/polar.svg', category: 'E-commerce', proficiency: 'advanced' },
        { name: 'Daasity', icon: '/icons/tech/daasity.svg', category: 'Analytics', proficiency: 'advanced' },
        { name: 'Glew.io', icon: '/icons/tech/glew.svg', category: 'Analytics', proficiency: 'advanced' },
        { name: 'Peel Insights', icon: '/icons/tech/peel.svg', category: 'Analytics', proficiency: 'expert' }
      ]
    },
    {
      name: 'Data Infrastructure',
      description: 'Data warehousing and pipeline tools.',
      technologies: [
        { name: 'BigQuery', icon: '/icons/tech/bigquery.svg', category: 'Data Warehouse', proficiency: 'expert' },
        { name: 'Snowflake', icon: '/icons/tech/snowflake.svg', category: 'Data Warehouse', proficiency: 'advanced' },
        { name: 'Fivetran', icon: '/icons/tech/fivetran.svg', category: 'ETL', proficiency: 'expert' },
        { name: 'dbt', icon: '/icons/tech/dbt.svg', category: 'Transformation', proficiency: 'advanced' },
        { name: 'Stitch', icon: '/icons/tech/stitch.svg', category: 'ETL', proficiency: 'advanced' },
        { name: 'Airbyte', icon: '/icons/tech/airbyte.svg', category: 'ETL', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Visualization',
      description: 'Dashboard and reporting tools.',
      technologies: [
        { name: 'Looker Studio', icon: '/icons/tech/looker.svg', category: 'BI', proficiency: 'expert' },
        { name: 'Tableau', icon: '/icons/tech/tableau.svg', category: 'BI', proficiency: 'advanced' },
        { name: 'Power BI', icon: '/icons/tech/powerbi.svg', category: 'BI', proficiency: 'advanced' },
        { name: 'Metabase', icon: '/icons/tech/metabase.svg', category: 'BI', proficiency: 'expert' },
        { name: 'Supermetrics', icon: '/icons/tech/supermetrics.svg', category: 'Connector', proficiency: 'expert' },
        { name: 'Klipfolio', icon: '/icons/tech/klipfolio.svg', category: 'Dashboards', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Analytics Foundation',
        description: 'Essential analytics setup for growing e-commerce businesses.',
        price: '$8,000',
        priceNote: 'One-time setup',
        features: [
          { name: 'GA4 Enhanced E-commerce', included: true },
          { name: 'GTM Implementation', included: true },
          { name: 'Conversion Tracking', included: true },
          { name: 'Basic Attribution', included: true },
          { name: 'Standard Dashboard', included: true },
          { name: 'Team Training', included: true },
          { name: '30-Day Support', included: true },
          { name: 'Data Warehouse', included: false }
        ],
        ctaText: 'Start Foundation',
        highlighted: false
      },
      {
        name: 'Analytics Pro',
        description: 'Comprehensive analytics with advanced attribution and insights.',
        price: '$20,000',
        priceNote: 'One-time setup',
        badge: 'Most Popular',
        features: [
          { name: 'Everything in Foundation', included: true },
          { name: 'Server-Side Tracking', included: true },
          { name: 'Multi-Touch Attribution', included: true },
          { name: 'Customer Analytics', included: true },
          { name: 'LTV Analysis', included: true },
          { name: 'Custom Dashboards', included: true },
          { name: 'Data Integration', included: true },
          { name: '60-Day Support', included: true }
        ],
        ctaText: 'Start Pro',
        highlighted: true
      },
      {
        name: 'Enterprise Analytics',
        description: 'Full analytics infrastructure with advanced capabilities.',
        price: '$50,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Everything in Pro', included: true },
          { name: 'Data Warehouse Setup', included: true },
          { name: 'ETL Pipeline Development', included: true },
          { name: 'Profitability Analytics', included: true },
          { name: 'Predictive Analytics', included: true },
          { name: 'Custom Data Models', included: true },
          { name: 'Advanced Integrations', included: true },
          { name: '90-Day Support', included: true }
        ],
        ctaText: 'Contact for Enterprise',
        highlighted: false
      }
    ],
    customNote: 'Ongoing analytics support retainers available starting at $2,000/month for maintenance, analysis, and optimization. Tool subscription costs are separate.'
  },

  portfolio: [
    {
      title: 'DTC Brand Analytics Transformation',
      client: 'ActiveWear Co',
      industry: 'Apparel',
      description: 'Complete analytics overhaul for fast-growing DTC brand with multi-channel marketing.',
      challenge: 'Marketing spend was increasing but couldn\'t determine ROI. GA was broken, attribution was last-click only, and reporting took days of spreadsheet work.',
      solution: 'Implemented GA4 with server-side tracking, built multi-touch attribution model using Triple Whale, created automated Looker dashboards, and developed customer LTV tracking.',
      results: [
        '40% marketing efficiency gain',
        'True channel ROI visibility',
        'Automated daily reporting',
        '$1.2M identified savings'
      ],
      metrics: [
        { label: 'Marketing Efficiency', value: '+40%' },
        { label: 'Tracking Accuracy', value: '99%' },
        { label: 'Reporting Time', value: '-90%' },
        { label: 'Savings Identified', value: '$1.2M' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['DTC', 'Attribution', 'GA4', 'Dashboards']
    },
    {
      title: 'Multi-Channel Profitability',
      client: 'GadgetWorld',
      industry: 'Consumer Electronics',
      description: 'Profitability analytics for electronics retailer selling on web, Amazon, and wholesale.',
      challenge: 'Revenue was growing but margins were shrinking. No visibility into true profitability by product, channel, or customer. Couldn\'t identify which products to push or kill.',
      solution: 'Built unified data warehouse combining sales, COGS, fees, shipping, and returns. Created profitability model calculating true margin at SKU and order level. Built executive dashboards.',
      results: [
        'SKU-level profitability',
        '15% margin improvement',
        'Killed 200 money-losing SKUs',
        'Optimized channel mix'
      ],
      metrics: [
        { label: 'Profitability Visibility', value: 'Full' },
        { label: 'Margin Improvement', value: '+15%' },
        { label: 'SKUs Optimized', value: '200' },
        { label: 'Decision Speed', value: '5x' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['Profitability', 'Multi-Channel', 'Data Warehouse', 'Electronics']
    },
    {
      title: 'Customer Analytics Platform',
      client: 'BeautyBox Subscriptions',
      industry: 'Subscription Beauty',
      description: 'Customer analytics and LTV prediction for subscription beauty brand.',
      challenge: 'Subscription business needed to understand customer lifetime value, predict churn, and optimize acquisition spend. Existing data was siloed and unusable.',
      solution: 'Built customer data platform integrating all touchpoints, developed LTV models by acquisition source, implemented churn prediction, and created cohort-based acquisition targets.',
      results: [
        'Predictive LTV by source',
        '30% churn reduction',
        '45% CAC reduction',
        'Cohort-based targeting'
      ],
      metrics: [
        { label: 'LTV Visibility', value: 'Predictive' },
        { label: 'Churn', value: '-30%' },
        { label: 'CAC', value: '-45%' },
        { label: 'Data Unification', value: '100%' }
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['Subscription', 'LTV', 'Customer Analytics', 'Predictive']
    },
    {
      title: 'E-commerce Conversion Analytics',
      client: 'OutdoorGear Pro',
      industry: 'Outdoor Recreation',
      description: 'Comprehensive conversion funnel analytics and optimization for outdoor retailer.',
      challenge: 'Outdoor gear retailer had high traffic but low conversions. No visibility into where customers dropped off or which products performed best across segments.',
      solution: 'Implemented enhanced e-commerce tracking, built conversion funnel dashboards, set up A/B testing framework, and created product performance analytics by customer segment.',
      results: [
        '32% conversion rate increase',
        'Full funnel visibility',
        '25 A/B tests per quarter',
        '$800K revenue attribution'
      ],
      metrics: [
        { label: 'Conversion Lift', value: '+32%' },
        { label: 'Funnel Visibility', value: '100%' },
        { label: 'Tests/Quarter', value: '25' },
        { label: 'Revenue Impact', value: '$800K' }
      ],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      tags: ['Conversion', 'A/B Testing', 'Funnel Analytics', 'Optimization']
    }
  ],

  testimonials: [
    {
      quote: 'We finally know which marketing channels actually drive profit, not just revenue. We\'ve reallocated $1.2M in spend to what actually works.',
      author: 'Rachel Kim',
      role: 'VP Marketing',
      company: 'ActiveWear Co',
      rating: 5,
      location: 'Los Angeles, CA'
    },
    {
      quote: 'Seeing profitability at the SKU level changed everything. We killed 200 products that were losing money and margins jumped 15%.',
      author: 'Mark Sullivan',
      role: 'CEO',
      company: 'GadgetWorld',
      rating: 5,
      location: 'Chicago, IL'
    },
    {
      quote: 'Their LTV prediction model lets us pay more to acquire customers we know will be valuable. Churn is down 30% and we\'re growing faster.',
      author: 'Amanda Chen',
      role: 'Director of Growth',
      company: 'BeautyBox Subscriptions',
      rating: 5,
      location: 'New York, NY'
    }
  ],

  faqs: [
    {
      question: 'How is GA4 different from Universal Analytics?',
      answer: 'GA4 is fundamentally different: event-based model (vs pageview-based), cross-platform tracking, privacy-centric (less reliance on cookies), predictive capabilities, and BigQuery integration. Enhanced e-commerce setup is also different. Most UA setups don\'t translate directly—proper GA4 implementation requires rethinking your measurement approach, which is why expert setup matters.'
    },
    {
      question: 'What is multi-touch attribution?',
      answer: 'Multi-touch attribution distributes credit for conversions across all marketing touchpoints, not just the last click. Models include: linear (equal credit), time decay (recent gets more), position-based (first and last get most), and data-driven (algorithmic). This reveals the true contribution of awareness channels like social and display that rarely get last-click credit but influence purchases.'
    },
    {
      question: 'How do you handle iOS privacy changes?',
      answer: 'iOS changes and cookie deprecation require new approaches: server-side tracking (data goes through your server), Conversions API integration (direct platform connections), first-party data strategies, probabilistic modeling, and marketing mix modeling for channel-level insights. We implement privacy-compliant tracking that maintains measurement effectiveness.'
    },
    {
      question: 'What e-commerce metrics matter most?',
      answer: 'Key metrics vary by stage but typically include: revenue and conversion rate, average order value, customer acquisition cost (CAC), customer lifetime value (LTV), CAC:LTV ratio, marketing ROAS/ROI, cart abandonment rate, and repeat purchase rate. We help define your KPI framework based on your business model and growth stage.'
    },
    {
      question: 'Do we need a data warehouse?',
      answer: 'A data warehouse becomes valuable when: you need to combine data from multiple sources, require historical trend analysis, want to calculate complex metrics like true profitability, need custom reporting beyond platform limitations, or want to feed data into other systems. For most growing e-commerce businesses, a data warehouse provides significant value and is increasingly affordable.'
    },
    {
      question: 'How long until we see value from analytics?',
      answer: 'Quick wins come immediately: fixed tracking means accurate data from day one. Short-term (1-3 months): better marketing decisions from attribution insights. Medium-term (3-6 months): customer insights and LTV understanding. Long-term (6+ months): predictive capabilities and advanced optimization. We focus on delivering value at each stage, not just at the end.'
    }
  ],

  relatedServices: [
    {
      name: 'Conversion Optimization',
      slug: 'conversion-optimization',
      description: 'Turn analytics insights into conversion improvements.',
      icon: 'trending-up'
    },
    {
      name: 'Analytics & Reporting',
      slug: 'analytics-reporting',
      description: 'Comprehensive marketing analytics beyond e-commerce.',
      icon: 'bar-chart-2'
    },
    {
      name: 'E-commerce Website Development',
      slug: 'ecommerce-website-development',
      description: 'Stores built with analytics best practices from day one.',
      icon: 'shopping-cart'
    },
    {
      name: 'Marketing Automation',
      slug: 'marketing-automation',
      description: 'Use customer data to power personalized automation.',
      icon: 'zap'
    }
  ],

  seo: {
    title: 'E-commerce Analytics Services | Online Store Analytics & Attribution',
    description: 'Expert e-commerce analytics services. GA4 implementation, marketing attribution, customer analytics, and custom dashboards for data-driven growth.',
    keywords: [
      'e-commerce analytics',
      'GA4 e-commerce',
      'marketing attribution',
      'customer analytics',
      'e-commerce dashboard',
      'online store analytics',
      'customer lifetime value',
      'e-commerce tracking',
      'profit analytics',
      'e-commerce data'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'E-commerce Analytics Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      description: 'Expert e-commerce analytics services including GA4 implementation, marketing attribution, customer analytics, profitability tracking, and custom dashboards.'
    }
  }
};

export default ecommerceAnalyticsData;
