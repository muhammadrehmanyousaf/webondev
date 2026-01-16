// Technology Consulting Service Data
import { ServiceData } from '@/components/services/sections';

export const technologyConsultingData: ServiceData = {
  name: 'Technology Consulting',
  slug: 'technology-consulting',
  tagline: 'Strategic technology guidance for business success',
  category: 'Consulting & Strategy',
  description: 'Transform your business with expert technology consulting. Our consultants help you make informed technology decisions, optimize IT investments, and align technology strategy with business objectives.',

  hero: {
    headline: 'Technology Consulting Services',
    subheadline: 'Strategic Tech Guidance for Business Growth',
    description: 'Navigate complex technology decisions with confidence. Our experienced consultants provide strategic guidance that aligns your technology investments with business goals, driving innovation and competitive advantage.',
    keyFeatures: [
      'Technology strategy development',
      'IT assessment & optimization',
      'Solution architecture',
      'Technology vendor evaluation',
      'Digital innovation planning',
      'Tech due diligence'
    ],
    badges: ['Strategic Advisors', '20+ Years Experience', 'Fortune 500 Clients', 'Industry Experts']
  },

  painPoints: [
    {
      icon: 'Puzzle',
      title: 'Technology Confusion',
      description: 'Overwhelmed by technology choices and unable to determine the best path forward',
      stat: '73%',
      statLabel: 'Make wrong tech choices'
    },
    {
      icon: 'DollarSign',
      title: 'Wasted IT Spending',
      description: 'Investing in technology that doesn\'t deliver expected business value',
      stat: '$3.3T',
      statLabel: 'Wasted on IT globally'
    },
    {
      icon: 'TrendingDown',
      title: 'Falling Behind',
      description: 'Competitors leveraging technology better while your business struggles',
      stat: '52%',
      statLabel: 'Fear disruption'
    },
    {
      icon: 'AlertTriangle',
      title: 'Failed Initiatives',
      description: 'Technology projects failing to meet objectives, timeline, or budget',
      stat: '70%',
      statLabel: 'IT projects fail'
    }
  ],

  solutions: [
    {
      icon: 'Target',
      title: 'Technology Strategy',
      description: 'Develop comprehensive technology roadmaps aligned with business goals',
      highlights: [
        'Current state assessment',
        'Future state design',
        'Gap analysis',
        'Implementation roadmap'
      ]
    },
    {
      icon: 'Search',
      title: 'IT Assessment',
      description: 'Evaluate existing technology landscape to identify opportunities',
      highlights: [
        'Infrastructure review',
        'Application portfolio',
        'Security assessment',
        'Cost optimization'
      ]
    },
    {
      icon: 'Layout',
      title: 'Solution Architecture',
      description: 'Design scalable, secure technology solutions for your needs',
      highlights: [
        'Architecture design',
        'Technology selection',
        'Integration planning',
        'Implementation support'
      ]
    },
    {
      icon: 'CheckCircle',
      title: 'Vendor Selection',
      description: 'Objective evaluation and selection of technology vendors',
      highlights: [
        'Requirements definition',
        'Vendor evaluation',
        'RFP management',
        'Contract negotiation'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Discovery',
        description: 'Understand your business, challenges, and technology landscape',
        duration: 'Week 1-2',
        deliverables: [
          'Stakeholder interviews',
          'Current state documentation',
          'Business requirements',
          'Challenge identification'
        ]
      },
      {
        icon: 'Target',
        title: 'Strategy Development',
        description: 'Create technology strategy aligned with business objectives',
        duration: 'Week 3-4',
        deliverables: [
          'Technology strategy',
          'Future state vision',
          'Investment priorities',
          'Risk assessment'
        ]
      },
      {
        icon: 'Layout',
        title: 'Solution Design',
        description: 'Design specific solutions and implementation approach',
        duration: 'Week 4-6',
        deliverables: [
          'Solution architecture',
          'Technology recommendations',
          'Implementation plan',
          'Business case'
        ]
      },
      {
        icon: 'Rocket',
        title: 'Implementation Support',
        description: 'Guide implementation and ensure successful adoption',
        duration: 'Ongoing',
        deliverables: [
          'Implementation oversight',
          'Vendor management',
          'Change management',
          'Success measurement'
        ]
      }
    ],
    totalDuration: '6-10 weeks'
  },

  benefits: [
    {
      icon: 'Target',
      title: 'Strategic Clarity',
      description: 'Clear technology roadmap aligned with business goals',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Strategic alignment'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Optimization',
      description: 'Reduce technology spending while improving capabilities',
      stat: '30',
      statSuffix: '%',
      statLabel: 'Average IT savings'
    },
    {
      icon: 'TrendingUp',
      title: 'Better Decisions',
      description: 'Make confident technology decisions backed by expertise',
      stat: '5x',
      statSuffix: '',
      statLabel: 'Better outcomes'
    },
    {
      icon: 'Zap',
      title: 'Faster Innovation',
      description: 'Accelerate digital initiatives and time-to-market',
      stat: '50',
      statSuffix: '%',
      statLabel: 'Faster delivery'
    }
  ],

  techStack: [
    {
      name: 'Strategy Frameworks',
      description: 'Proven consulting methodologies',
      technologies: [
        { name: 'TOGAF', icon: '/icons/tech/togaf.svg', category: 'Framework', proficiency: 'expert' },
        { name: 'Zachman', icon: '/icons/tech/zachman.svg', category: 'Framework', proficiency: 'expert' },
        { name: 'COBIT', icon: '/icons/tech/cobit.svg', category: 'Governance', proficiency: 'expert' },
        { name: 'ITIL', icon: '/icons/tech/itil.svg', category: 'Operations', proficiency: 'expert' }
      ]
    },
    {
      name: 'Assessment Tools',
      description: 'Technology assessment and analysis tools',
      technologies: [
        { name: 'LeanIX', icon: '/icons/tech/leanix.svg', category: 'EA', proficiency: 'advanced' },
        { name: 'ServiceNow', icon: '/icons/tech/servicenow.svg', category: 'ITSM', proficiency: 'advanced' },
        { name: 'Qualys', icon: '/icons/tech/qualys.svg', category: 'Security', proficiency: 'advanced' },
        { name: 'Flexera', icon: '/icons/tech/flexera.svg', category: 'SAM', proficiency: 'proficient' }
      ]
    },
    {
      name: 'Cloud Platforms',
      description: 'Major cloud platforms expertise',
      technologies: [
        { name: 'AWS', icon: '/icons/tech/aws.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Azure', icon: '/icons/tech/azure.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'GCP', icon: '/icons/tech/gcp.svg', category: 'Cloud', proficiency: 'advanced' },
        { name: 'Salesforce', icon: '/icons/tech/salesforce.svg', category: 'SaaS', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Assessment',
        description: 'Technology assessment & recommendations',
        price: '$15,000',
        priceNote: 'one-time engagement',
        features: [
          { name: 'Current state assessment', included: true },
          { name: 'Stakeholder interviews', included: true },
          { name: 'Gap analysis', included: true },
          { name: 'Recommendations report', included: true },
          { name: 'Executive presentation', included: true },
          { name: 'Strategy development', included: false },
          { name: 'Implementation planning', included: false },
          { name: 'Ongoing advisory', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Strategy',
        description: 'Full technology strategy engagement',
        price: '$40,000',
        priceNote: 'one-time engagement',
        badge: 'Most Popular',
        features: [
          { name: 'Comprehensive assessment', included: true },
          { name: 'Executive workshops', included: true },
          { name: 'Technology strategy', included: true },
          { name: 'Implementation roadmap', included: true },
          { name: 'Business case development', included: true },
          { name: 'Vendor evaluation', included: true },
          { name: 'Change management plan', included: true },
          { name: '3-month advisory', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Transformation',
        description: 'End-to-end transformation support',
        price: '$100,000+',
        priceNote: 'custom engagement',
        features: [
          { name: 'Enterprise assessment', included: true },
          { name: 'Strategy & architecture', included: true },
          { name: 'Program management', included: true },
          { name: 'Vendor management', included: true },
          { name: 'Implementation oversight', included: true },
          { name: 'Change management', included: true },
          { name: 'Training & adoption', included: true },
          { name: 'Ongoing advisory', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need ongoing advisory? Ask about our CTO-as-a-Service starting at $10,000/month.'
  },

  portfolio: [
    {
      title: 'Enterprise Technology Transformation',
      client: 'GlobalRetail Corp',
      industry: 'Retail',
      description: 'Developed technology strategy enabling omnichannel retail transformation',
      challenge: 'Legacy systems preventing digital commerce and customer experience improvements',
      solution: 'Created comprehensive technology strategy and guided $50M transformation program',
      results: [
        'Technology strategy adopted by board',
        '40% increase in digital revenue',
        'Customer satisfaction improved by 35%',
        'IT operating costs reduced by 25%'
      ],
      metrics: [
        { label: 'Digital Revenue', value: '+40%' },
        { label: 'CSAT', value: '+35%' },
        { label: 'IT Costs', value: '-25%' }
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      tags: ['Retail', 'Strategy', 'Digital Transformation', 'Omnichannel']
    },
    {
      title: 'Financial Services Modernization',
      client: 'Premier Banking Group',
      industry: 'Financial Services',
      description: 'Guided core banking system modernization strategy',
      challenge: 'Outdated core systems limiting product innovation and customer experience',
      solution: 'Developed modernization strategy, evaluated vendors, and managed implementation',
      results: [
        'Core platform successfully replaced',
        'Product launch time reduced by 70%',
        'Customer onboarding improved 80%',
        'Compliance automation achieved'
      ],
      metrics: [
        { label: 'Time-to-Market', value: '-70%' },
        { label: 'Onboarding', value: '+80%' },
        { label: 'Compliance', value: 'Automated' }
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      tags: ['Banking', 'Core Systems', 'Modernization', 'Strategy']
    },
    {
      title: 'Healthcare IT Assessment',
      client: 'MedFirst Health Network',
      industry: 'Healthcare',
      description: 'Comprehensive technology assessment and strategic roadmap for regional healthcare provider',
      challenge: 'Fragmented IT landscape with aging infrastructure and security vulnerabilities',
      solution: 'Conducted thorough IT assessment and developed 3-year technology modernization roadmap',
      results: [
        'Identified $2M in cost savings opportunities',
        'Security posture improved by 60%',
        'System integration plan approved',
        'Cloud migration strategy defined'
      ],
      metrics: [
        { label: 'Cost Savings', value: '$2M' },
        { label: 'Security', value: '+60%' },
        { label: 'Roadmap', value: '3 years' }
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'IT Assessment', 'Security', 'Cloud Strategy']
    },
    {
      title: 'Manufacturing Technology Strategy',
      client: 'IndustrialTech Solutions',
      industry: 'Manufacturing',
      description: 'Developed Industry 4.0 technology strategy for smart manufacturing transformation',
      challenge: 'Traditional manufacturing operations lacking digital capabilities and data insights',
      solution: 'Created comprehensive smart manufacturing strategy with IoT and analytics roadmap',
      results: [
        'Smart factory roadmap approved',
        'Predictive maintenance strategy defined',
        'Data analytics platform selected',
        'ROI of 200% projected over 3 years'
      ],
      metrics: [
        { label: 'Projected ROI', value: '200%' },
        { label: 'Timeline', value: '3 years' },
        { label: 'Efficiency Target', value: '+45%' }
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      tags: ['Manufacturing', 'Industry 4.0', 'IoT', 'Smart Factory']
    }
  ],

  testimonials: [
    {
      quote: 'Their strategic guidance transformed how we think about technology. The roadmap they developed is now our blueprint for growth.',
      author: 'Robert Martinez',
      role: 'CEO',
      company: 'GlobalRetail Corp',
      rating: 5,
      location: 'Dallas, TX'
    },
    {
      quote: 'Exceptional strategic thinking combined with deep technical expertise. They helped us navigate a complex transformation successfully.',
      author: 'Katherine Sharma',
      role: 'CIO',
      company: 'Premier Banking Group',
      rating: 5,
      location: 'Chicago, IL'
    }
  ],

  faqs: [
    {
      question: 'How is technology consulting different from IT services?',
      answer: 'Technology consulting focuses on strategic guidance and planning rather than implementation. We help you make better technology decisions, develop strategies, and provide objective advice. IT services focus on building and operating technology. We often work alongside IT service providers to ensure strategy translates to execution.'
    },
    {
      question: 'What size companies benefit from technology consulting?',
      answer: 'Companies of all sizes benefit from strategic technology guidance. Mid-market companies often lack internal strategy resources. Enterprises need external perspectives and specialized expertise. Startups benefit from avoiding costly technology mistakes early. We tailor our approach to your size and needs.'
    },
    {
      question: 'Do you recommend specific vendors?',
      answer: 'We provide objective, vendor-agnostic recommendations based on your specific needs. We don\'t receive commissions from vendors, ensuring our advice is unbiased. We evaluate vendors across multiple criteria including capability, cost, fit, and risk.'
    },
    {
      question: 'How do you measure consulting engagement success?',
      answer: 'We define success metrics at the start of each engagement tied to business outcomes. Common metrics include cost savings achieved, project success rates, time-to-market improvements, and strategic goal achievement. We conduct regular reviews to ensure we\'re delivering value.'
    },
    {
      question: 'Can you help with technology due diligence?',
      answer: 'Yes, we provide technology due diligence for M&A transactions, investments, and partnerships. We assess technology assets, capabilities, risks, and integration complexity. Our reports help decision-makers understand the true state of technology and associated risks.'
    }
  ],

  relatedServices: [
    {
      name: 'Digital Transformation',
      slug: 'digital-transformation',
      description: 'Comprehensive digital transformation',
      icon: 'Zap'
    },
    {
      name: 'IT Strategy',
      slug: 'it-strategy',
      description: 'IT strategy and planning',
      icon: 'Target'
    },
    {
      name: 'Technology Roadmapping',
      slug: 'technology-roadmapping',
      description: 'Technology roadmap development',
      icon: 'Map'
    },
    {
      name: 'Vendor Selection',
      slug: 'vendor-selection',
      description: 'Technology vendor evaluation',
      icon: 'CheckCircle'
    }
  ],

  seo: {
    title: 'Technology Consulting Services | Strategic IT Consulting',
    description: 'Expert technology consulting services. IT strategy, technology assessment, solution architecture, and digital transformation guidance for business success.',
    keywords: [
      'technology consulting',
      'it consulting',
      'technology strategy',
      'it advisory',
      'tech consulting services',
      'digital strategy consulting',
      'it assessment',
      'technology advisory',
      'strategic it consulting',
      'technology planning'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Technology Consulting Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Technology Consulting'
      }
    }
  }
};
