// IT Strategy Service Data
import { ServiceData } from '@/components/services/sections';

export const itStrategyData: ServiceData = {
  name: 'IT Strategy',
  slug: 'it-strategy',
  tagline: 'Align IT investments with business objectives',
  category: 'Consulting & Strategy',
  description: 'Develop IT strategies that drive business value. We help you create comprehensive IT plans that align technology investments with business goals, optimize IT spending, and position technology as a competitive advantage.',

  hero: {
    headline: 'IT Strategy Services',
    subheadline: 'Technology That Drives Business Success',
    description: 'Transform IT from a cost center to a value driver. Our IT strategists help you develop plans that align technology investments with business objectives, optimize resources, and enable growth.',
    keyFeatures: [
      'IT strategic planning',
      'IT operating model design',
      'Portfolio rationalization',
      'IT governance frameworks',
      'Technology budgeting',
      'IT performance metrics'
    ],
    badges: ['CIO Advisors', 'Strategic Planners', '50+ IT Strategies', 'Industry Experts']
  },

  painPoints: [
    {
      icon: 'Target',
      title: 'Misaligned IT',
      description: 'IT investments not connected to business priorities and goals',
      stat: '67%',
      statLabel: 'Report IT-business gap'
    },
    {
      icon: 'DollarSign',
      title: 'IT Sprawl',
      description: 'Redundant applications and infrastructure driving up costs',
      stat: '35%',
      statLabel: 'IT budget wasted'
    },
    {
      icon: 'Clock',
      title: 'Technical Debt',
      description: 'Legacy systems consuming resources and limiting innovation',
      stat: '40%',
      statLabel: 'Time on maintenance'
    },
    {
      icon: 'Users',
      title: 'IT Perception Issues',
      description: 'Business sees IT as slow, expensive, and unresponsive',
      stat: '55%',
      statLabel: 'Dissatisfied with IT'
    }
  ],

  solutions: [
    {
      icon: 'Target',
      title: 'IT Strategic Planning',
      description: 'Develop comprehensive IT strategy aligned with business goals',
      highlights: [
        'Business alignment',
        'Vision development',
        'Strategic objectives',
        'Investment priorities'
      ]
    },
    {
      icon: 'Building',
      title: 'IT Operating Model',
      description: 'Design how IT delivers value efficiently and effectively',
      highlights: [
        'Organization design',
        'Service delivery model',
        'Sourcing strategy',
        'Governance framework'
      ]
    },
    {
      icon: 'Layers',
      title: 'Portfolio Optimization',
      description: 'Rationalize applications and infrastructure for maximum value',
      highlights: [
        'Application portfolio',
        'Infrastructure assessment',
        'Consolidation roadmap',
        'TCO analysis'
      ]
    },
    {
      icon: 'BarChart',
      title: 'IT Performance',
      description: 'Measure and improve IT performance and business value delivery',
      highlights: [
        'KPI definition',
        'Performance dashboards',
        'Benchmarking',
        'Continuous improvement'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Current State Analysis',
        description: 'Assess current IT capabilities, performance, and alignment',
        duration: 'Week 1-2',
        deliverables: [
          'IT assessment report',
          'Application inventory',
          'Capability assessment',
          'Spend analysis'
        ]
      },
      {
        icon: 'Users',
        title: 'Business Alignment',
        description: 'Understand business strategy and translate to IT requirements',
        duration: 'Week 2-3',
        deliverables: [
          'Business strategy review',
          'Stakeholder insights',
          'IT requirements',
          'Priority mapping'
        ]
      },
      {
        icon: 'Target',
        title: 'Strategy Development',
        description: 'Create IT strategy, roadmap, and investment plan',
        duration: 'Week 3-5',
        deliverables: [
          'IT strategy document',
          'Strategic initiatives',
          'Investment roadmap',
          'Business case'
        ]
      },
      {
        icon: 'Play',
        title: 'Implementation Planning',
        description: 'Plan for strategy execution and governance',
        duration: 'Week 5-6',
        deliverables: [
          'Implementation plan',
          'Governance model',
          'Change management',
          'Success metrics'
        ]
      }
    ],
    totalDuration: '6-8 weeks'
  },

  benefits: [
    {
      icon: 'Target',
      title: 'Business Alignment',
      description: 'IT investments directly support business objectives',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Aligned initiatives'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Optimization',
      description: 'Reduce IT spending while improving capabilities',
      stat: '25',
      statSuffix: '%',
      statLabel: 'Average IT savings'
    },
    {
      icon: 'TrendingUp',
      title: 'Innovation Capacity',
      description: 'Free resources for innovation and growth initiatives',
      stat: '40',
      statSuffix: '%',
      statLabel: 'More innovation budget'
    },
    {
      icon: 'Users',
      title: 'Stakeholder Satisfaction',
      description: 'Improved business perception of IT value',
      stat: '50',
      statSuffix: '%',
      statLabel: 'Higher satisfaction'
    }
  ],

  techStack: [
    {
      name: 'IT Governance',
      description: 'IT governance and management frameworks',
      technologies: [
        { name: 'COBIT', icon: '/icons/tech/cobit.svg', category: 'Governance', proficiency: 'expert' },
        { name: 'ITIL', icon: '/icons/tech/itil.svg', category: 'Operations', proficiency: 'expert' },
        { name: 'TOGAF', icon: '/icons/tech/togaf.svg', category: 'Architecture', proficiency: 'expert' },
        { name: 'SAFe', icon: '/icons/tech/safe.svg', category: 'Agile', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Portfolio Management',
      description: 'IT portfolio and project management',
      technologies: [
        { name: 'ServiceNow SPM', icon: '/icons/tech/servicenow.svg', category: 'PPM', proficiency: 'expert' },
        { name: 'Planview', icon: '/icons/tech/planview.svg', category: 'PPM', proficiency: 'advanced' },
        { name: 'LeanIX', icon: '/icons/tech/leanix.svg', category: 'EA', proficiency: 'advanced' },
        { name: 'Ardoq', icon: '/icons/tech/ardoq.svg', category: 'EA', proficiency: 'proficient' }
      ]
    },
    {
      name: 'Financial Management',
      description: 'IT financial management tools',
      technologies: [
        { name: 'Apptio', icon: '/icons/tech/apptio.svg', category: 'TBM', proficiency: 'expert' },
        { name: 'Flexera', icon: '/icons/tech/flexera.svg', category: 'SAM', proficiency: 'advanced' },
        { name: 'CloudHealth', icon: '/icons/tech/cloudhealth.svg', category: 'FinOps', proficiency: 'advanced' },
        { name: 'Snow', icon: '/icons/tech/snow.svg', category: 'SAM', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Assessment',
        description: 'IT assessment & quick wins',
        price: '$20,000',
        priceNote: 'one-time engagement',
        features: [
          { name: 'IT assessment', included: true },
          { name: 'Capability review', included: true },
          { name: 'Quick wins identification', included: true },
          { name: 'Recommendations report', included: true },
          { name: 'Executive presentation', included: true },
          { name: 'Full strategy development', included: false },
          { name: 'Operating model design', included: false },
          { name: 'Implementation support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Strategy',
        description: 'Full IT strategy development',
        price: '$50,000',
        priceNote: 'one-time engagement',
        badge: 'Most Popular',
        features: [
          { name: 'Comprehensive assessment', included: true },
          { name: 'Business alignment', included: true },
          { name: 'IT strategy document', included: true },
          { name: 'Investment roadmap', included: true },
          { name: 'Portfolio rationalization', included: true },
          { name: 'Governance framework', included: true },
          { name: 'Implementation plan', included: true },
          { name: '3-month advisory', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Enterprise IT transformation',
        price: '$120,000+',
        priceNote: 'custom engagement',
        features: [
          { name: 'Enterprise assessment', included: true },
          { name: 'Executive workshops', included: true },
          { name: 'Comprehensive strategy', included: true },
          { name: 'Operating model design', included: true },
          { name: 'Full portfolio review', included: true },
          { name: 'Detailed roadmap', included: true },
          { name: 'Change management', included: true },
          { name: 'Ongoing advisory', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need ongoing CIO advisory? Ask about our fractional CIO services starting at $15,000/month.'
  },

  portfolio: [
    {
      title: 'Insurance IT Strategy Transformation',
      client: 'SecureLife Insurance',
      industry: 'Insurance',
      description: 'Developed comprehensive IT strategy enabling business growth',
      challenge: 'Fragmented IT landscape, high costs, and inability to support business initiatives',
      solution: 'Created 3-year IT strategy with portfolio rationalization and operating model redesign',
      results: [
        'IT costs reduced by 30%',
        'Application portfolio reduced by 40%',
        'Project delivery speed improved 50%',
        'Business satisfaction increased 60%'
      ],
      metrics: [
        { label: 'Cost Reduction', value: '30%' },
        { label: 'Apps Reduced', value: '40%' },
        { label: 'Delivery Speed', value: '+50%' }
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['Insurance', 'IT Strategy', 'Portfolio', 'Operating Model']
    },
    {
      title: 'Manufacturing IT Modernization',
      client: 'Advanced Manufacturing Co',
      industry: 'Manufacturing',
      description: 'IT strategy enabling smart manufacturing transformation',
      challenge: 'Legacy systems preventing smart manufacturing and data-driven operations',
      solution: 'Developed IT modernization strategy with cloud and IoT integration roadmap',
      results: [
        'Technical debt reduced by 60%',
        'Infrastructure costs reduced 35%',
        'IT enabled Industry 4.0 capabilities',
        'Time-to-value for new initiatives cut in half'
      ],
      metrics: [
        { label: 'Tech Debt', value: '-60%' },
        { label: 'Infra Costs', value: '-35%' },
        { label: 'Time-to-Value', value: '-50%' }
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      tags: ['Manufacturing', 'Modernization', 'Cloud', 'IoT']
    },
    {
      title: 'Healthcare IT Governance Framework',
      client: 'Regional Health Partners',
      industry: 'Healthcare',
      description: 'Established IT governance and strategic planning framework for multi-hospital system',
      challenge: 'Decentralized IT decision-making leading to redundant systems and compliance risks',
      solution: 'Implemented centralized IT governance with strategic planning and portfolio management',
      results: [
        'IT governance maturity improved from 2 to 4',
        'Redundant systems reduced by 35%',
        'Compliance audit findings reduced 80%',
        'Strategic alignment score improved 70%'
      ],
      metrics: [
        { label: 'Governance Maturity', value: '4/5' },
        { label: 'Redundancy', value: '-35%' },
        { label: 'Compliance', value: '+80%' }
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'IT Governance', 'Compliance', 'Strategic Planning']
    },
    {
      title: 'Retail IT Operating Model',
      client: 'FashionFirst Retail',
      industry: 'Retail',
      description: 'Redesigned IT operating model to support rapid retail expansion',
      challenge: 'IT organization unable to scale with business growth and new store openings',
      solution: 'Designed agile IT operating model with improved sourcing strategy and DevOps practices',
      results: [
        'IT headcount efficiency improved 40%',
        'New store IT deployment reduced from 6 weeks to 1 week',
        'IT service satisfaction increased 55%',
        'Development velocity improved 3x'
      ],
      metrics: [
        { label: 'Efficiency', value: '+40%' },
        { label: 'Deployment', value: '-83%' },
        { label: 'Velocity', value: '3x' }
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      tags: ['Retail', 'Operating Model', 'DevOps', 'Scaling']
    }
  ],

  testimonials: [
    {
      quote: 'The IT strategy gave us clarity and direction. We now have a clear roadmap and the business finally sees IT as a partner.',
      author: 'Michael Chang',
      role: 'CIO',
      company: 'SecureLife Insurance',
      rating: 5,
      location: 'Hartford, CT'
    },
    {
      quote: 'They helped us see IT differently - as an enabler of our manufacturing vision rather than just a support function.',
      author: 'Susan Walker',
      role: 'COO',
      company: 'Advanced Manufacturing Co',
      rating: 5,
      location: 'Cleveland, OH'
    }
  ],

  faqs: [
    {
      question: 'How often should we update our IT strategy?',
      answer: 'IT strategies should be reviewed annually and refreshed every 2-3 years, or when significant business changes occur. The annual review ensures the strategy remains aligned with business priorities. We build flexibility into strategies to accommodate changing needs.'
    },
    {
      question: 'How do you ensure IT-business alignment?',
      answer: 'We involve business stakeholders throughout the strategy process, not just IT. We map IT initiatives directly to business objectives and outcomes. We establish governance that maintains alignment and create metrics that measure business value delivered by IT.'
    },
    {
      question: 'What is IT portfolio rationalization?',
      answer: 'Portfolio rationalization analyzes your application and infrastructure portfolio to identify redundancy, technical debt, and optimization opportunities. We classify assets by business value and technical condition, then recommend which to invest in, maintain, retire, or consolidate.'
    },
    {
      question: 'How do you handle technical debt in IT strategy?',
      answer: 'We assess technical debt as part of the current state analysis, quantify its business impact, and create a realistic remediation roadmap. We balance debt reduction with new capabilities, ensuring you maintain operations while modernizing. The goal is sustainable improvement.'
    },
    {
      question: 'Can you help with IT organization design?',
      answer: 'Yes, IT operating model design is a key component of IT strategy. We help design organization structure, roles, sourcing strategy, and service delivery models. We ensure the IT organization is structured to execute the strategy effectively.'
    }
  ],

  relatedServices: [
    {
      name: 'Technology Consulting',
      slug: 'technology-consulting',
      description: 'Strategic technology advisory',
      icon: 'Settings'
    },
    {
      name: 'Digital Transformation',
      slug: 'digital-transformation',
      description: 'Digital business transformation',
      icon: 'Zap'
    },
    {
      name: 'Technology Roadmapping',
      slug: 'technology-roadmapping',
      description: 'Technology roadmap development',
      icon: 'Map'
    },
    {
      name: 'Process Optimization',
      slug: 'process-optimization',
      description: 'IT process improvement',
      icon: 'RefreshCw'
    }
  ],

  seo: {
    title: 'IT Strategy Services | IT Strategic Planning & Consulting',
    description: 'Expert IT strategy services. IT strategic planning, operating model design, portfolio rationalization, and IT governance for business-aligned technology.',
    keywords: [
      'it strategy',
      'it strategic planning',
      'it strategy consulting',
      'it operating model',
      'it governance',
      'it portfolio management',
      'cio advisory',
      'it alignment',
      'technology strategy',
      'it planning'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'IT Strategy Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'IT Strategy Consulting'
      }
    }
  }
};
