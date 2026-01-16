// Technology Roadmapping Service Data
import { ServiceData } from '@/components/services/sections';

export const technologyRoadmappingData: ServiceData = {
  name: 'Technology Roadmapping',
  slug: 'technology-roadmapping',
  tagline: 'Chart your technology journey with strategic roadmaps',
  category: 'Consulting & Strategy',
  description: 'Create actionable technology roadmaps that guide your digital journey. We help you plan technology investments, prioritize initiatives, and align technical capabilities with business goals.',

  hero: {
    headline: 'Technology Roadmapping Services',
    subheadline: 'Strategic Technology Planning for Success',
    description: 'Navigate technology decisions with confidence. Our roadmapping experts help you create clear, actionable plans that align technology investments with business objectives and market opportunities.',
    keyFeatures: [
      'Technology roadmap development',
      'Application modernization planning',
      'Infrastructure evolution',
      'Technology debt reduction',
      'Investment prioritization',
      'Multi-year planning'
    ],
    badges: ['Strategic Planners', 'Technology Experts', '100+ Roadmaps', 'Business Aligned']
  },

  painPoints: [
    {
      icon: 'Map',
      title: 'No Clear Direction',
      description: 'Technology investments made ad-hoc without strategic direction',
      stat: '65%',
      statLabel: 'Lack tech roadmap'
    },
    {
      icon: 'Target',
      title: 'Misaligned Priorities',
      description: 'Technology initiatives not aligned with business priorities',
      stat: '58%',
      statLabel: 'Report misalignment'
    },
    {
      icon: 'DollarSign',
      title: 'Inefficient Spending',
      description: 'Technology budget spread thin across too many initiatives',
      stat: '40%',
      statLabel: 'Budget wasted'
    },
    {
      icon: 'Clock',
      title: 'Legacy Burden',
      description: 'Technical debt and legacy systems consuming resources',
      stat: '50%',
      statLabel: 'Time on maintenance'
    }
  ],

  solutions: [
    {
      icon: 'Map',
      title: 'Strategic Roadmapping',
      description: 'Create comprehensive technology roadmaps aligned with strategy',
      highlights: [
        'Vision & goals alignment',
        'Initiative identification',
        'Dependency mapping',
        'Timeline planning'
      ]
    },
    {
      icon: 'Layers',
      title: 'Application Roadmapping',
      description: 'Plan application portfolio evolution and modernization',
      highlights: [
        'Portfolio assessment',
        'Modernization strategy',
        'Migration planning',
        'Retirement planning'
      ]
    },
    {
      icon: 'Server',
      title: 'Infrastructure Roadmapping',
      description: 'Plan infrastructure evolution including cloud adoption',
      highlights: [
        'Infrastructure assessment',
        'Cloud migration plan',
        'Hybrid strategy',
        'Capacity planning'
      ]
    },
    {
      icon: 'BarChart',
      title: 'Investment Planning',
      description: 'Prioritize and plan technology investments for maximum ROI',
      highlights: [
        'Investment analysis',
        'ROI modeling',
        'Budget planning',
        'Resource allocation'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Current State Assessment',
        description: 'Assess existing technology landscape and capabilities',
        duration: 'Week 1-2',
        deliverables: [
          'Technology inventory',
          'Capability assessment',
          'Technical debt analysis',
          'Gap identification'
        ]
      },
      {
        icon: 'Target',
        title: 'Future State Vision',
        description: 'Define target technology state aligned with business strategy',
        duration: 'Week 2-3',
        deliverables: [
          'Future state architecture',
          'Target capabilities',
          'Technology principles',
          'Success criteria'
        ]
      },
      {
        icon: 'Map',
        title: 'Roadmap Development',
        description: 'Create detailed roadmap with initiatives and dependencies',
        duration: 'Week 3-5',
        deliverables: [
          'Technology roadmap',
          'Initiative details',
          'Dependency mapping',
          'Risk assessment'
        ]
      },
      {
        icon: 'DollarSign',
        title: 'Investment Planning',
        description: 'Develop business case and investment plan',
        duration: 'Week 5-6',
        deliverables: [
          'Business case',
          'Investment plan',
          'Resource requirements',
          'Implementation approach'
        ]
      }
    ],
    totalDuration: '5-7 weeks'
  },

  benefits: [
    {
      icon: 'Target',
      title: 'Strategic Alignment',
      description: 'Technology investments aligned with business strategy',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Strategic alignment'
    },
    {
      icon: 'Eye',
      title: 'Clear Direction',
      description: 'Shared vision for technology evolution',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Stakeholder clarity'
    },
    {
      icon: 'DollarSign',
      title: 'Optimized Investment',
      description: 'Focused spending on highest-value initiatives',
      stat: '30',
      statSuffix: '%',
      statLabel: 'Better ROI'
    },
    {
      icon: 'TrendingUp',
      title: 'Reduced Tech Debt',
      description: 'Planned approach to modernization',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Tech debt reduction'
    }
  ],

  techStack: [
    {
      name: 'Architecture Tools',
      description: 'Enterprise architecture and planning',
      technologies: [
        { name: 'LeanIX', icon: '/icons/tech/leanix.svg', category: 'EA', proficiency: 'expert' },
        { name: 'Ardoq', icon: '/icons/tech/ardoq.svg', category: 'EA', proficiency: 'advanced' },
        { name: 'MEGA', icon: '/icons/tech/mega.svg', category: 'EA', proficiency: 'advanced' },
        { name: 'Sparx EA', icon: '/icons/tech/sparx.svg', category: 'EA', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Roadmap Tools',
      description: 'Roadmap and planning tools',
      technologies: [
        { name: 'Productboard', icon: '/icons/tech/productboard.svg', category: 'Roadmap', proficiency: 'expert' },
        { name: 'Aha!', icon: '/icons/tech/aha.svg', category: 'Roadmap', proficiency: 'expert' },
        { name: 'Roadmunk', icon: '/icons/tech/roadmunk.svg', category: 'Roadmap', proficiency: 'advanced' },
        { name: 'Airfocus', icon: '/icons/tech/airfocus.svg', category: 'Roadmap', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Visualization',
      description: 'Diagramming and presentation',
      technologies: [
        { name: 'Lucidchart', icon: '/icons/tech/lucidchart.svg', category: 'Diagrams', proficiency: 'expert' },
        { name: 'Miro', icon: '/icons/tech/miro.svg', category: 'Whiteboard', proficiency: 'expert' },
        { name: 'Visio', icon: '/icons/tech/visio.svg', category: 'Diagrams', proficiency: 'expert' },
        { name: 'Draw.io', icon: '/icons/tech/drawio.svg', category: 'Diagrams', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Roadmap Sprint',
        description: 'Focused technology roadmap',
        price: '$20,000',
        priceNote: 'one-time engagement',
        features: [
          { name: 'Current state assessment', included: true },
          { name: 'Future state vision', included: true },
          { name: '2-year roadmap', included: true },
          { name: 'Priority initiatives', included: true },
          { name: 'Executive presentation', included: true },
          { name: 'Detailed business cases', included: false },
          { name: 'Implementation planning', included: false },
          { name: 'Ongoing advisory', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Comprehensive',
        description: 'Full strategic roadmapping',
        price: '$45,000',
        priceNote: 'one-time engagement',
        badge: 'Most Popular',
        features: [
          { name: 'Comprehensive assessment', included: true },
          { name: 'Detailed future state', included: true },
          { name: '3-5 year roadmap', included: true },
          { name: 'Full initiative details', included: true },
          { name: 'Business cases', included: true },
          { name: 'Investment plan', included: true },
          { name: 'Implementation approach', included: true },
          { name: '3-month advisory', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Enterprise transformation',
        price: '$100,000+',
        priceNote: 'custom engagement',
        features: [
          { name: 'Enterprise assessment', included: true },
          { name: 'Multi-domain roadmaps', included: true },
          { name: '5+ year strategic plan', included: true },
          { name: 'Portfolio prioritization', included: true },
          { name: 'Detailed business cases', included: true },
          { name: 'Funding strategy', included: true },
          { name: 'Governance framework', included: true },
          { name: 'Ongoing advisory', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need implementation support? Ask about our technology delivery services.'
  },

  portfolio: [
    {
      title: 'Healthcare Technology Roadmap',
      client: 'RegionalHealth System',
      industry: 'Healthcare',
      description: 'Created 5-year technology roadmap for healthcare system modernization',
      challenge: 'Aging systems, regulatory pressures, and patient experience demands',
      solution: 'Developed comprehensive roadmap balancing modernization, compliance, and patient experience',
      results: [
        '5-year roadmap with phased execution',
        '$50M investment plan approved by board',
        'Technical debt reduction plan defined',
        'Digital patient experience prioritized'
      ],
      metrics: [
        { label: 'Investment', value: '$50M' },
        { label: 'Horizon', value: '5 years' },
        { label: 'Approval', value: 'Board approved' }
      ],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'Modernization', 'Digital', 'Strategy']
    },
    {
      title: 'Financial Services Cloud Roadmap',
      client: 'Premier Financial Group',
      industry: 'Financial Services',
      description: 'Cloud adoption roadmap for traditional financial institution',
      challenge: 'On-premise infrastructure limiting agility with growing cloud opportunity',
      solution: 'Created phased cloud migration roadmap with compliance considerations',
      results: [
        'Phased 3-year cloud roadmap',
        '40% projected infrastructure cost reduction',
        'Compliance requirements addressed',
        'Innovation platform enabled'
      ],
      metrics: [
        { label: 'Cost Reduction', value: '40%' },
        { label: 'Timeline', value: '3 years' },
        { label: 'Compliance', value: 'Addressed' }
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      tags: ['Financial Services', 'Cloud', 'Migration', 'Compliance']
    },
    {
      title: 'Manufacturing Technology Evolution',
      client: 'PrecisionParts Inc',
      industry: 'Manufacturing',
      description: 'Industry 4.0 technology roadmap for smart manufacturing transformation',
      challenge: 'Legacy manufacturing systems without digital capabilities or data insights',
      solution: 'Created phased roadmap for IoT, automation, and analytics implementation',
      results: [
        '4-year smart factory roadmap approved',
        'IoT pilot launched successfully',
        'Analytics platform selection completed',
        'Workforce training plan developed'
      ],
      metrics: [
        { label: 'Roadmap', value: '4 years' },
        { label: 'Phase 1', value: 'Complete' },
        { label: 'Efficiency Target', value: '+50%' }
      ],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      tags: ['Manufacturing', 'Industry 4.0', 'IoT', 'Smart Factory']
    },
    {
      title: 'Retail Technology Modernization',
      client: 'FashionForward Retail',
      industry: 'Retail',
      description: 'Technology roadmap for omnichannel retail transformation',
      challenge: 'Disconnected systems preventing unified customer experience',
      solution: 'Integrated technology roadmap connecting POS, e-commerce, and customer data',
      results: [
        'Unified commerce roadmap created',
        'Customer 360 platform selected',
        'Integration architecture defined',
        'Phased implementation plan approved'
      ],
      metrics: [
        { label: 'Systems', value: '12 integrated' },
        { label: 'Timeline', value: '3 years' },
        { label: 'Revenue Target', value: '+35%' }
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      tags: ['Retail', 'Omnichannel', 'Customer Data', 'Integration']
    }
  ],

  testimonials: [
    {
      quote: 'The technology roadmap gave us a clear path forward. The board approved our $50M investment plan based on their analysis.',
      author: 'Dr. Robert Chen',
      role: 'CIO',
      company: 'RegionalHealth System',
      rating: 5,
      location: 'Minneapolis, MN'
    },
    {
      quote: 'Their cloud roadmap balanced our innovation needs with regulatory requirements. We finally have a realistic path to the cloud.',
      author: 'Patricia Williams',
      role: 'VP Infrastructure',
      company: 'Premier Financial Group',
      rating: 5,
      location: 'Charlotte, NC'
    }
  ],

  faqs: [
    {
      question: 'How far out should a technology roadmap extend?',
      answer: 'We typically recommend 3-5 years for strategic roadmaps, with more detail in years 1-2 and directional guidance for later years. This balances planning needs with the reality that technology evolves rapidly. Roadmaps should be updated annually.'
    },
    {
      question: 'How do you handle uncertainty in roadmaps?',
      answer: 'We build flexibility into roadmaps through decision points, alternative paths, and regular review cycles. We focus on outcomes rather than specific solutions where appropriate, allowing for adjustment as technologies and requirements evolve.'
    },
    {
      question: 'How do you prioritize roadmap initiatives?',
      answer: 'We use multiple factors including business value, strategic alignment, technical dependencies, risk, and resource requirements. We help you establish clear prioritization criteria and facilitate stakeholder alignment on priorities.'
    },
    {
      question: 'What about technical debt in roadmapping?',
      answer: 'Technical debt is explicitly addressed in our roadmaps. We assess debt, prioritize remediation based on risk and opportunity cost, and balance debt reduction with new capabilities. Ignoring debt creates unsustainable situations.'
    },
    {
      question: 'How do roadmaps connect to budgeting?',
      answer: 'We create roadmaps with budget implications clearly defined. Each initiative includes rough order of magnitude estimates, enabling portfolio-level investment planning. This helps secure funding and align roadmap with budget cycles.'
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
      name: 'IT Strategy',
      slug: 'it-strategy',
      description: 'IT strategic planning',
      icon: 'Target'
    },
    {
      name: 'Digital Transformation',
      slug: 'digital-transformation',
      description: 'Digital transformation planning',
      icon: 'Zap'
    },
    {
      name: 'Cloud Infrastructure',
      slug: 'cloud-infrastructure',
      description: 'Cloud adoption planning',
      icon: 'Cloud'
    }
  ],

  seo: {
    title: 'Technology Roadmapping Services | Strategic Tech Planning',
    description: 'Expert technology roadmapping services. Create strategic technology plans, modernization roadmaps, and investment priorities aligned with business goals.',
    keywords: [
      'technology roadmapping',
      'technology roadmap',
      'it roadmap',
      'tech planning',
      'application roadmap',
      'infrastructure roadmap',
      'cloud roadmap',
      'modernization roadmap',
      'technology planning',
      'strategic technology'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Technology Roadmapping Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Technology Roadmapping Consulting'
      }
    }
  }
};
