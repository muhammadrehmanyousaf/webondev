// Vendor Selection Service Data
import { ServiceData } from '@/components/services/sections';

export const vendorSelectionData: ServiceData = {
  name: 'Vendor Selection',
  slug: 'vendor-selection',
  tagline: 'Choose the right technology partners with confidence',
  category: 'Consulting & Strategy',
  description: 'Make confident technology vendor decisions. We provide objective evaluation and selection services that help you choose vendors that truly fit your needs, negotiate better contracts, and reduce selection risk.',

  hero: {
    headline: 'Vendor Selection Services',
    subheadline: 'Expert Guidance for Technology Decisions',
    description: 'Navigate complex vendor landscapes with objective expertise. Our vendor selection specialists help you evaluate options, avoid costly mistakes, and choose partners that deliver long-term value.',
    keyFeatures: [
      'Requirements definition',
      'Vendor research & shortlisting',
      'RFP development & management',
      'Demo & evaluation facilitation',
      'Contract negotiation support',
      'Implementation transition'
    ],
    badges: ['Vendor Agnostic', 'Objective Analysis', '500+ Evaluations', 'No Vendor Commissions']
  },

  painPoints: [
    {
      icon: 'AlertTriangle',
      title: 'Wrong Vendor Choice',
      description: 'Choosing vendors that don\'t fit needs, leading to failed implementations',
      stat: '30%',
      statLabel: 'Implementations fail'
    },
    {
      icon: 'DollarSign',
      title: 'Overpaying',
      description: 'Paying more than necessary due to poor negotiation or vendor knowledge',
      stat: '20-40%',
      statLabel: 'Overpayment range'
    },
    {
      icon: 'Clock',
      title: 'Lengthy Process',
      description: 'Vendor selection taking months without clear methodology',
      stat: '6-12mo',
      statLabel: 'Typical selection time'
    },
    {
      icon: 'Users',
      title: 'Stakeholder Conflict',
      description: 'Different stakeholders pushing for different vendors without objective criteria',
      stat: '65%',
      statLabel: 'Report conflicts'
    }
  ],

  solutions: [
    {
      icon: 'FileText',
      title: 'Requirements Definition',
      description: 'Define clear requirements that drive effective vendor evaluation',
      highlights: [
        'Stakeholder workshops',
        'Requirements documentation',
        'Priority weighting',
        'Evaluation criteria'
      ]
    },
    {
      icon: 'Search',
      title: 'Vendor Research',
      description: 'Comprehensive research to identify and shortlist potential vendors',
      highlights: [
        'Market analysis',
        'Vendor identification',
        'Initial screening',
        'Shortlist development'
      ]
    },
    {
      icon: 'FileText',
      title: 'RFP Management',
      description: 'Develop and manage RFP process for structured evaluation',
      highlights: [
        'RFP development',
        'Vendor communication',
        'Response evaluation',
        'Scoring facilitation'
      ]
    },
    {
      icon: 'CheckCircle',
      title: 'Selection & Negotiation',
      description: 'Facilitate final selection and support contract negotiation',
      highlights: [
        'Demo facilitation',
        'Reference checks',
        'Final selection',
        'Contract support'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'FileText',
        title: 'Requirements Phase',
        description: 'Define requirements, criteria, and evaluation approach',
        duration: 'Week 1-2',
        deliverables: [
          'Requirements document',
          'Evaluation criteria',
          'Scoring methodology',
          'Process timeline'
        ]
      },
      {
        icon: 'Search',
        title: 'Research & RFP',
        description: 'Research vendors, develop RFP, and manage responses',
        duration: 'Week 2-5',
        deliverables: [
          'Vendor long list',
          'RFP document',
          'Vendor shortlist',
          'Response analysis'
        ]
      },
      {
        icon: 'Users',
        title: 'Evaluation Phase',
        description: 'Conduct demos, evaluate responses, and check references',
        duration: 'Week 5-8',
        deliverables: [
          'Demo facilitation',
          'Evaluation scores',
          'Reference findings',
          'Recommendation report'
        ]
      },
      {
        icon: 'CheckCircle',
        title: 'Selection & Contract',
        description: 'Facilitate final decision and support negotiation',
        duration: 'Week 8-10',
        deliverables: [
          'Selection decision',
          'Negotiation support',
          'Contract review',
          'Transition planning'
        ]
      }
    ],
    totalDuration: '8-12 weeks'
  },

  benefits: [
    {
      icon: 'Target',
      title: 'Right Fit',
      description: 'Vendors that truly match your requirements',
      stat: '95',
      statSuffix: '%',
      statLabel: 'Selection success'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Savings',
      description: 'Better pricing through expert negotiation',
      stat: '15-25',
      statSuffix: '%',
      statLabel: 'Typical savings'
    },
    {
      icon: 'Clock',
      title: 'Faster Selection',
      description: 'Structured process reduces selection time',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Faster process'
    },
    {
      icon: 'Shield',
      title: 'Reduced Risk',
      description: 'Lower risk of selection mistakes',
      stat: '80',
      statSuffix: '%',
      statLabel: 'Risk reduction'
    }
  ],

  techStack: [
    {
      name: 'Research Sources',
      description: 'Vendor research and analysis sources',
      technologies: [
        { name: 'Gartner', icon: '/icons/tech/gartner.svg', category: 'Research', proficiency: 'expert' },
        { name: 'Forrester', icon: '/icons/tech/forrester.svg', category: 'Research', proficiency: 'expert' },
        { name: 'G2', icon: '/icons/tech/g2.svg', category: 'Reviews', proficiency: 'expert' },
        { name: 'Capterra', icon: '/icons/tech/capterra.svg', category: 'Reviews', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Evaluation Tools',
      description: 'Tools for structured evaluation',
      technologies: [
        { name: 'Excel', icon: '/icons/tech/excel.svg', category: 'Analysis', proficiency: 'expert' },
        { name: 'Smartsheet', icon: '/icons/tech/smartsheet.svg', category: 'Collaboration', proficiency: 'advanced' },
        { name: 'Airtable', icon: '/icons/tech/airtable.svg', category: 'Database', proficiency: 'advanced' },
        { name: 'Monday.com', icon: '/icons/tech/monday.svg', category: 'Tracking', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Collaboration',
      description: 'Stakeholder collaboration tools',
      technologies: [
        { name: 'Miro', icon: '/icons/tech/miro.svg', category: 'Whiteboard', proficiency: 'expert' },
        { name: 'Confluence', icon: '/icons/tech/confluence.svg', category: 'Documentation', proficiency: 'expert' },
        { name: 'Teams', icon: '/icons/tech/teams.svg', category: 'Communication', proficiency: 'expert' },
        { name: 'Zoom', icon: '/icons/tech/zoom.svg', category: 'Meetings', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Advisory',
        description: 'Vendor selection guidance',
        price: '$15,000',
        priceNote: 'one-time engagement',
        features: [
          { name: 'Requirements review', included: true },
          { name: 'Vendor recommendations', included: true },
          { name: 'Evaluation criteria', included: true },
          { name: 'Demo guidance', included: true },
          { name: 'Selection support', included: true },
          { name: 'Full RFP management', included: false },
          { name: 'Contract negotiation', included: false },
          { name: 'Reference checks', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Full Selection',
        description: 'End-to-end vendor selection',
        price: '$35,000',
        priceNote: 'one-time engagement',
        badge: 'Most Popular',
        features: [
          { name: 'Complete requirements', included: true },
          { name: 'Vendor research', included: true },
          { name: 'Full RFP process', included: true },
          { name: 'Demo facilitation', included: true },
          { name: 'Scoring & analysis', included: true },
          { name: 'Reference checks', included: true },
          { name: 'Negotiation support', included: true },
          { name: 'Contract review', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Complex enterprise selection',
        price: '$75,000+',
        priceNote: 'custom engagement',
        features: [
          { name: 'Enterprise requirements', included: true },
          { name: 'Comprehensive research', included: true },
          { name: 'Multi-round RFP', included: true },
          { name: 'Extensive demos', included: true },
          { name: 'Deep analysis', included: true },
          { name: 'Extensive references', included: true },
          { name: 'Full negotiation support', included: true },
          { name: 'Legal/contract support', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need ongoing vendor management? Ask about our vendor management services.'
  },

  portfolio: [
    {
      title: 'ERP Vendor Selection',
      client: 'ManufacturingFirst Corp',
      industry: 'Manufacturing',
      description: 'Led enterprise ERP vendor selection for $20M implementation',
      challenge: 'Complex requirements across multiple plants with many competing vendors',
      solution: 'Structured evaluation of 8 vendors with extensive demos and site visits',
      results: [
        'Selected optimal vendor from 8 candidates',
        'Negotiated 25% below initial pricing',
        'Successful implementation ongoing',
        'Clear requirements prevented scope creep'
      ],
      metrics: [
        { label: 'Savings', value: '25%' },
        { label: 'Vendors Evaluated', value: '8' },
        { label: 'Time', value: '10 weeks' }
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      tags: ['ERP', 'Manufacturing', 'Enterprise', 'Selection']
    },
    {
      title: 'CRM Platform Selection',
      client: 'GrowthTech Solutions',
      industry: 'Technology',
      description: 'CRM selection for fast-growing SaaS company',
      challenge: 'Needed scalable CRM to support growth from 50 to 500 users',
      solution: 'Rapid vendor evaluation focused on scalability and integration needs',
      results: [
        'Selected Salesforce with optimal configuration',
        'Negotiated startup-friendly pricing',
        'Implementation completed on time',
        'Platform scaled as planned'
      ],
      metrics: [
        { label: 'Time', value: '6 weeks' },
        { label: 'Pricing', value: 'Startup tier' },
        { label: 'Scale', value: '500 users' }
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['CRM', 'SaaS', 'Salesforce', 'Growth']
    },
    {
      title: 'Cloud Platform Evaluation',
      client: 'DataDriven Analytics',
      industry: 'Analytics',
      description: 'Multi-cloud platform evaluation for enterprise data analytics',
      challenge: 'Choosing between AWS, Azure, and GCP for data platform migration',
      solution: 'Comprehensive evaluation including POC testing and total cost analysis',
      results: [
        'Selected AWS with hybrid architecture',
        'Achieved 30% cost savings vs. alternatives',
        'Performance requirements exceeded',
        'Vendor lock-in risks mitigated'
      ],
      metrics: [
        { label: 'Platforms', value: '3' },
        { label: 'Cost Savings', value: '30%' },
        { label: 'POC Duration', value: '4 weeks' }
      ],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      tags: ['Cloud', 'AWS', 'Data Platform', 'Analytics']
    },
    {
      title: 'HR System Selection',
      client: 'PeopleFirst Corporation',
      industry: 'Professional Services',
      description: 'HCM platform selection for 5,000 employee organization',
      challenge: 'Replacing legacy HRIS with modern cloud-based HCM platform',
      solution: 'End-to-end selection process from RFI through contract negotiation',
      results: [
        'Selected Workday as optimal fit',
        'Negotiated 20% below list pricing',
        'Implementation plan defined',
        'Change management strategy developed'
      ],
      metrics: [
        { label: 'Employees', value: '5,000' },
        { label: 'Savings', value: '20%' },
        { label: 'Selection Time', value: '12 weeks' }
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      tags: ['HR', 'HCM', 'Workday', 'Enterprise']
    }
  ],

  testimonials: [
    {
      quote: 'Their structured approach cut through the vendor noise. We chose the right ERP and negotiated much better terms than expected.',
      author: 'William Chen',
      role: 'CFO',
      company: 'ManufacturingFirst Corp',
      rating: 5,
      location: 'Pittsburgh, PA'
    },
    {
      quote: 'As a growing startup, we needed CRM expertise we didn\'t have. They helped us choose the right platform and get startup-friendly pricing.',
      author: 'Sarah Mitchell',
      role: 'VP Sales',
      company: 'GrowthTech Solutions',
      rating: 5,
      location: 'Denver, CO'
    }
  ],

  faqs: [
    {
      question: 'Are you truly vendor agnostic?',
      answer: 'Yes, we never receive commissions or payments from vendors. Our only obligation is to you. This independence ensures our recommendations are based solely on what\'s best for your needs, not vendor relationships.'
    },
    {
      question: 'Do we need a formal RFP?',
      answer: 'Not always. Formal RFPs are valuable for large, complex selections where structured comparison is important. For smaller selections, we may recommend a lighter-weight process. We advise on the right approach for your situation.'
    },
    {
      question: 'How do you evaluate vendors?',
      answer: 'We use weighted scoring based on your defined criteria. This typically includes functional fit, technical requirements, vendor viability, implementation capability, total cost of ownership, and cultural fit. Scoring ensures objective, defensible decisions.'
    },
    {
      question: 'Can you help with contract negotiation?',
      answer: 'Yes, we provide negotiation support including identifying leverage points, benchmarking pricing, reviewing contract terms, and advising on protections you need. We don\'t provide legal advice but work alongside your legal team.'
    },
    {
      question: 'What about implementation planning?',
      answer: 'We help with the transition to implementation including developing implementation requirements, evaluating implementation partners if needed, and ensuring the selected vendor understands your expectations. We can also support implementation oversight.'
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
      name: 'Technology Roadmapping',
      slug: 'technology-roadmapping',
      description: 'Technology planning',
      icon: 'Map'
    },
    {
      name: 'Project Management',
      slug: 'project-management',
      description: 'Implementation management',
      icon: 'CheckSquare'
    },
    {
      name: 'Business Analysis',
      slug: 'business-analysis',
      description: 'Requirements analysis',
      icon: 'FileText'
    }
  ],

  seo: {
    title: 'Vendor Selection Services | Technology Vendor Evaluation',
    description: 'Expert vendor selection services. RFP development, vendor evaluation, selection facilitation, and contract negotiation. Vendor-agnostic, objective guidance.',
    keywords: [
      'vendor selection',
      'vendor evaluation',
      'rfp services',
      'software selection',
      'vendor selection consulting',
      'technology vendor selection',
      'vendor assessment',
      'rfp management',
      'vendor comparison',
      'software evaluation'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Vendor Selection Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Vendor Selection Consulting'
      }
    }
  }
};
