// Digital Transformation Service Data
import { ServiceData } from '@/components/services/sections';

export const digitalTransformationData: ServiceData = {
  name: 'Digital Transformation',
  slug: 'digital-transformation',
  tagline: 'Transform your business for the digital age',
  category: 'Consulting & Strategy',
  description: 'Lead your organization through comprehensive digital transformation. We help you reimagine business processes, customer experiences, and operating models using modern digital technologies.',

  hero: {
    headline: 'Digital Transformation Services',
    subheadline: 'Reinvent Your Business for Digital Success',
    description: 'Navigate digital disruption and emerge stronger. Our transformation experts help you leverage digital technologies to create new value, improve operations, and deliver exceptional customer experiences.',
    keyFeatures: [
      'Digital strategy development',
      'Process digitization',
      'Customer experience transformation',
      'Data-driven decision making',
      'Digital operating models',
      'Change management'
    ],
    badges: ['Transformation Experts', 'Industry Leaders', '100+ Transformations', 'Measurable Results']
  },

  painPoints: [
    {
      icon: 'TrendingDown',
      title: 'Digital Disruption',
      description: 'Competitors and startups disrupting your industry with digital solutions',
      stat: '40%',
      statLabel: 'Companies face disruption'
    },
    {
      icon: 'Clock',
      title: 'Slow to Market',
      description: 'Taking months or years to launch new products and services',
      stat: '6-18mo',
      statLabel: 'Typical time-to-market'
    },
    {
      icon: 'Users',
      title: 'Customer Expectations',
      description: 'Customers expecting digital-first experiences you can\'t deliver',
      stat: '80%',
      statLabel: 'Prefer digital'
    },
    {
      icon: 'FileText',
      title: 'Manual Processes',
      description: 'Paper-based and manual processes reducing efficiency and increasing errors',
      stat: '70%',
      statLabel: 'Processes still manual'
    }
  ],

  solutions: [
    {
      icon: 'Target',
      title: 'Digital Strategy',
      description: 'Develop comprehensive digital transformation strategy and roadmap',
      highlights: [
        'Digital maturity assessment',
        'Transformation vision',
        'Priority identification',
        'Investment roadmap'
      ]
    },
    {
      icon: 'Users',
      title: 'Customer Experience',
      description: 'Transform customer journeys with digital-first experiences',
      highlights: [
        'Journey mapping',
        'Digital channel strategy',
        'Personalization',
        'Omnichannel integration'
      ]
    },
    {
      icon: 'Settings',
      title: 'Process Automation',
      description: 'Digitize and automate business processes for efficiency',
      highlights: [
        'Process assessment',
        'RPA implementation',
        'Workflow automation',
        'Intelligent automation'
      ]
    },
    {
      icon: 'Database',
      title: 'Data Transformation',
      description: 'Become a data-driven organization with analytics and AI',
      highlights: [
        'Data strategy',
        'Analytics platforms',
        'AI/ML implementation',
        'Data governance'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Digital Assessment',
        description: 'Assess current digital maturity and identify transformation opportunities',
        duration: 'Week 1-3',
        deliverables: [
          'Digital maturity score',
          'Opportunity analysis',
          'Competitive benchmarking',
          'Priority matrix'
        ]
      },
      {
        icon: 'Target',
        title: 'Strategy & Vision',
        description: 'Define digital vision, strategy, and transformation roadmap',
        duration: 'Week 3-6',
        deliverables: [
          'Digital vision',
          'Transformation strategy',
          'Business case',
          'Implementation roadmap'
        ]
      },
      {
        icon: 'Play',
        title: 'Pilot & Prove',
        description: 'Launch pilot initiatives to prove value and build momentum',
        duration: 'Week 6-12',
        deliverables: [
          'Pilot selection',
          'MVP development',
          'Value demonstration',
          'Learning capture'
        ]
      },
      {
        icon: 'TrendingUp',
        title: 'Scale & Sustain',
        description: 'Scale successful pilots and embed digital capabilities',
        duration: 'Ongoing',
        deliverables: [
          'Scaled solutions',
          'Operating model',
          'Capability building',
          'Continuous improvement'
        ]
      }
    ],
    totalDuration: '12-24 weeks'
  },

  benefits: [
    {
      icon: 'TrendingUp',
      title: 'Revenue Growth',
      description: 'New digital revenue streams and improved customer acquisition',
      stat: '25',
      statSuffix: '%',
      statLabel: 'Average revenue increase'
    },
    {
      icon: 'Zap',
      title: 'Efficiency Gains',
      description: 'Reduced costs through automation and process optimization',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Operational efficiency'
    },
    {
      icon: 'Users',
      title: 'Customer Satisfaction',
      description: 'Improved customer experience and satisfaction scores',
      stat: '35',
      statSuffix: '%',
      statLabel: 'NPS improvement'
    },
    {
      icon: 'Clock',
      title: 'Speed to Market',
      description: 'Faster product development and market response',
      stat: '60',
      statSuffix: '%',
      statLabel: 'Faster launches'
    }
  ],

  techStack: [
    {
      name: 'Digital Platforms',
      description: 'Modern digital platform technologies',
      technologies: [
        { name: 'Salesforce', icon: '/icons/tech/salesforce.svg', category: 'CRM', proficiency: 'expert' },
        { name: 'ServiceNow', icon: '/icons/tech/servicenow.svg', category: 'Platform', proficiency: 'expert' },
        { name: 'Microsoft 365', icon: '/icons/tech/m365.svg', category: 'Productivity', proficiency: 'expert' },
        { name: 'Adobe Experience', icon: '/icons/tech/adobe-experience.svg', category: 'Experience', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Automation',
      description: 'Process automation technologies',
      technologies: [
        { name: 'UiPath', icon: '/icons/tech/uipath.svg', category: 'RPA', proficiency: 'expert' },
        { name: 'Power Automate', icon: '/icons/tech/power-automate.svg', category: 'Automation', proficiency: 'expert' },
        { name: 'Automation Anywhere', icon: '/icons/tech/automation-anywhere.svg', category: 'RPA', proficiency: 'advanced' },
        { name: 'Zapier', icon: '/icons/tech/zapier.svg', category: 'Integration', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Data & Analytics',
      description: 'Data and analytics platforms',
      technologies: [
        { name: 'Power BI', icon: '/icons/tech/powerbi.svg', category: 'BI', proficiency: 'expert' },
        { name: 'Tableau', icon: '/icons/tech/tableau.svg', category: 'BI', proficiency: 'expert' },
        { name: 'Snowflake', icon: '/icons/tech/snowflake.svg', category: 'Data', proficiency: 'advanced' },
        { name: 'Databricks', icon: '/icons/tech/databricks.svg', category: 'Data', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Assessment',
        description: 'Digital maturity assessment',
        price: '$25,000',
        priceNote: 'one-time engagement',
        features: [
          { name: 'Digital maturity assessment', included: true },
          { name: 'Competitive analysis', included: true },
          { name: 'Opportunity identification', included: true },
          { name: 'Executive presentation', included: true },
          { name: 'Recommendations report', included: true },
          { name: 'Strategy development', included: false },
          { name: 'Pilot implementation', included: false },
          { name: 'Change management', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Strategy',
        description: 'Transformation strategy & roadmap',
        price: '$75,000',
        priceNote: 'one-time engagement',
        badge: 'Most Popular',
        features: [
          { name: 'Comprehensive assessment', included: true },
          { name: 'Digital strategy', included: true },
          { name: 'Business case development', included: true },
          { name: 'Transformation roadmap', included: true },
          { name: 'Investment planning', included: true },
          { name: 'Pilot planning', included: true },
          { name: 'Change strategy', included: true },
          { name: 'Implementation support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Transformation',
        description: 'End-to-end transformation program',
        price: '$200,000+',
        priceNote: 'custom program',
        features: [
          { name: 'Full assessment & strategy', included: true },
          { name: 'Program management', included: true },
          { name: 'Solution implementation', included: true },
          { name: 'Process automation', included: true },
          { name: 'Data transformation', included: true },
          { name: 'Change management', included: true },
          { name: 'Capability building', included: true },
          { name: 'Ongoing optimization', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need a phased approach? We can design a transformation program that fits your budget and timeline.'
  },

  portfolio: [
    {
      title: 'Healthcare Digital Transformation',
      client: 'MedCare Network',
      industry: 'Healthcare',
      description: 'Comprehensive digital transformation of patient experience and operations',
      challenge: 'Paper-based processes, poor patient experience, and disconnected systems',
      solution: 'Implemented digital patient portal, automated workflows, and integrated data platform',
      results: [
        'Patient satisfaction increased 45%',
        'Administrative costs reduced by 35%',
        'Wait times reduced by 60%',
        'Staff efficiency improved 40%'
      ],
      metrics: [
        { label: 'Patient Satisfaction', value: '+45%' },
        { label: 'Cost Reduction', value: '35%' },
        { label: 'Wait Times', value: '-60%' }
      ],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'Patient Experience', 'Automation', 'Digital']
    },
    {
      title: 'Manufacturing Digital Transformation',
      client: 'PrecisionMfg Industries',
      industry: 'Manufacturing',
      description: 'Industry 4.0 transformation with IoT, analytics, and automation',
      challenge: 'Outdated manufacturing processes with limited visibility and high waste',
      solution: 'Implemented IoT sensors, real-time analytics, and predictive maintenance',
      results: [
        'Production efficiency increased 30%',
        'Unplanned downtime reduced 70%',
        'Quality defects reduced 50%',
        'Energy costs reduced 25%'
      ],
      metrics: [
        { label: 'Efficiency', value: '+30%' },
        { label: 'Downtime', value: '-70%' },
        { label: 'Quality', value: '+50%' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Manufacturing', 'IoT', 'Industry 4.0', 'Analytics']
    },
    {
      title: 'Retail Omnichannel Transformation',
      client: 'RetailMax Stores',
      industry: 'Retail',
      description: 'End-to-end digital transformation enabling seamless omnichannel customer experience',
      challenge: 'Disconnected online and offline channels creating poor customer experience',
      solution: 'Unified commerce platform with integrated inventory, POS, and customer data',
      results: [
        'Online revenue increased 85%',
        'Customer retention improved 40%',
        'Inventory accuracy reached 98%',
        'Order fulfillment time reduced 65%'
      ],
      metrics: [
        { label: 'Online Revenue', value: '+85%' },
        { label: 'Retention', value: '+40%' },
        { label: 'Fulfillment', value: '-65%' }
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      tags: ['Retail', 'Omnichannel', 'E-commerce', 'Customer Experience']
    },
    {
      title: 'Financial Services Digital Banking',
      client: 'NextGen Credit Union',
      industry: 'Financial Services',
      description: 'Digital-first banking transformation for regional credit union',
      challenge: 'Legacy core system limiting digital capabilities and member experience',
      solution: 'Implemented modern digital banking platform with mobile-first design',
      results: [
        'Digital adoption increased 120%',
        'Member satisfaction improved 55%',
        'Branch transaction costs reduced 45%',
        'New member acquisition up 35%'
      ],
      metrics: [
        { label: 'Digital Adoption', value: '+120%' },
        { label: 'Satisfaction', value: '+55%' },
        { label: 'Acquisition', value: '+35%' }
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      tags: ['Financial Services', 'Digital Banking', 'Mobile', 'Member Experience']
    }
  ],

  testimonials: [
    {
      quote: 'The transformation changed how we deliver healthcare. Patients love the digital experience and our staff is more efficient than ever.',
      author: 'Dr. James Wilson',
      role: 'Chief Medical Officer',
      company: 'MedCare Network',
      rating: 5,
      location: 'Phoenix, AZ'
    },
    {
      quote: 'Industry 4.0 seemed like buzzwords until they showed us the real impact. Production efficiency gains exceeded our expectations.',
      author: 'Linda Park',
      role: 'VP Operations',
      company: 'PrecisionMfg Industries',
      rating: 5,
      location: 'Detroit, MI'
    }
  ],

  faqs: [
    {
      question: 'What is digital transformation?',
      answer: 'Digital transformation is the integration of digital technology into all areas of business, fundamentally changing how you operate and deliver value to customers. It\'s not just about technology - it involves culture, processes, and business models. The goal is to become a digital-first organization that can compete in today\'s environment.'
    },
    {
      question: 'How long does digital transformation take?',
      answer: 'Transformation is a journey, not a destination. Initial quick wins can be achieved in 3-6 months. Significant transformation typically takes 2-3 years for meaningful change across the organization. We take a phased approach with clear milestones and value delivery throughout.'
    },
    {
      question: 'What are the biggest digital transformation challenges?',
      answer: 'The most common challenges are: resistance to change (culture), legacy technology constraints, lack of digital skills, unclear strategy, and insufficient executive commitment. We address all of these through our comprehensive approach that includes change management and capability building.'
    },
    {
      question: 'How do you measure transformation success?',
      answer: 'We establish clear KPIs tied to business outcomes at the start. Common metrics include revenue growth, cost reduction, customer satisfaction, employee engagement, time-to-market, and digital adoption rates. We create dashboards for ongoing measurement and continuous improvement.'
    },
    {
      question: 'Do we need to replace all our existing systems?',
      answer: 'Not necessarily. We assess your current technology and determine what to keep, modernize, or replace. Often we can integrate new digital capabilities with existing systems. The goal is maximizing value while managing risk and investment, not technology replacement for its own sake.'
    }
  ],

  relatedServices: [
    {
      name: 'Technology Consulting',
      slug: 'technology-consulting',
      description: 'Strategic technology guidance',
      icon: 'Settings'
    },
    {
      name: 'Process Optimization',
      slug: 'process-optimization',
      description: 'Business process improvement',
      icon: 'RefreshCw'
    },
    {
      name: 'IT Strategy',
      slug: 'it-strategy',
      description: 'IT planning and strategy',
      icon: 'Target'
    },
    {
      name: 'Agile Consulting',
      slug: 'agile-consulting',
      description: 'Agile transformation services',
      icon: 'Repeat'
    }
  ],

  seo: {
    title: 'Digital Transformation Services | Business Transformation Consulting',
    description: 'Expert digital transformation services. Transform customer experience, automate processes, and become data-driven. Proven methodology for business transformation.',
    keywords: [
      'digital transformation',
      'digital transformation services',
      'business transformation',
      'digital strategy',
      'process automation',
      'customer experience transformation',
      'digital innovation',
      'industry 4.0',
      'digital business',
      'transformation consulting'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Digital Transformation Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Digital Transformation Consulting'
      }
    }
  }
};
