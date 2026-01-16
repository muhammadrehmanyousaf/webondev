// Project Management Service Data
import { ServiceData } from '@/components/services/sections';

export const projectManagementData: ServiceData = {
  name: 'Project Management',
  slug: 'project-management',
  tagline: 'Deliver projects on time, on budget, and on target',
  category: 'Consulting & Strategy',
  description: 'Ensure project success with expert project management. Our certified project managers bring discipline, methodology, and leadership to deliver your technology initiatives successfully.',

  hero: {
    headline: 'Project Management Services',
    subheadline: 'Delivering Projects That Deliver Results',
    description: 'Turn project challenges into successes. Our experienced project managers apply proven methodologies and best practices to deliver your technology projects on time, within budget, and meeting objectives.',
    keyFeatures: [
      'End-to-end project delivery',
      'Agile & waterfall expertise',
      'Risk management',
      'Stakeholder communication',
      'Budget & schedule control',
      'Quality assurance'
    ],
    badges: ['PMP Certified', 'Agile Certified', '300+ Projects Delivered', '95% Success Rate']
  },

  painPoints: [
    {
      icon: 'Clock',
      title: 'Missed Deadlines',
      description: 'Projects consistently running late, impacting business plans',
      stat: '70%',
      statLabel: 'Projects miss deadlines'
    },
    {
      icon: 'DollarSign',
      title: 'Budget Overruns',
      description: 'Projects exceeding budget, straining resources and trust',
      stat: '59%',
      statLabel: 'Exceed budget'
    },
    {
      icon: 'Target',
      title: 'Missed Objectives',
      description: 'Delivered projects not meeting original business objectives',
      stat: '50%',
      statLabel: 'Fail to meet objectives'
    },
    {
      icon: 'AlertTriangle',
      title: 'Project Failure',
      description: 'Complete project failures wasting significant investment',
      stat: '14%',
      statLabel: 'Projects fail completely'
    }
  ],

  solutions: [
    {
      icon: 'CheckSquare',
      title: 'Full Project Delivery',
      description: 'End-to-end project management from initiation to close',
      highlights: [
        'Project planning',
        'Execution management',
        'Monitoring & control',
        'Project closure'
      ]
    },
    {
      icon: 'Repeat',
      title: 'Agile Delivery',
      description: 'Agile project management for iterative delivery',
      highlights: [
        'Sprint planning',
        'Scrum facilitation',
        'Velocity tracking',
        'Continuous delivery'
      ]
    },
    {
      icon: 'AlertTriangle',
      title: 'Risk Management',
      description: 'Proactive risk identification, mitigation, and management',
      highlights: [
        'Risk identification',
        'Mitigation planning',
        'Issue management',
        'Contingency planning'
      ]
    },
    {
      icon: 'Users',
      title: 'Program Management',
      description: 'Coordinate multiple related projects for strategic outcomes',
      highlights: [
        'Program planning',
        'Cross-project coordination',
        'Benefits realization',
        'Strategic alignment'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Play',
        title: 'Project Initiation',
        description: 'Define project scope, objectives, and establish governance',
        duration: 'Week 1-2',
        deliverables: [
          'Project charter',
          'Stakeholder register',
          'Success criteria',
          'Governance structure'
        ]
      },
      {
        icon: 'Layout',
        title: 'Planning',
        description: 'Develop comprehensive project plans and baselines',
        duration: 'Week 2-4',
        deliverables: [
          'Project plan',
          'Schedule baseline',
          'Budget baseline',
          'Risk register'
        ]
      },
      {
        icon: 'Zap',
        title: 'Execution & Control',
        description: 'Execute plan while monitoring and controlling progress',
        duration: 'Ongoing',
        deliverables: [
          'Status reports',
          'Change management',
          'Issue resolution',
          'Quality control'
        ]
      },
      {
        icon: 'CheckCircle',
        title: 'Closure',
        description: 'Close project, document lessons, and transition to operations',
        duration: 'Final phase',
        deliverables: [
          'Project acceptance',
          'Lessons learned',
          'Documentation',
          'Transition plan'
        ]
      }
    ],
    totalDuration: 'Project dependent'
  },

  benefits: [
    {
      icon: 'CheckCircle',
      title: 'On-Time Delivery',
      description: 'Projects delivered according to schedule',
      stat: '92',
      statSuffix: '%',
      statLabel: 'On-time delivery'
    },
    {
      icon: 'DollarSign',
      title: 'Budget Control',
      description: 'Projects completed within approved budget',
      stat: '95',
      statSuffix: '%',
      statLabel: 'On-budget delivery'
    },
    {
      icon: 'Target',
      title: 'Objectives Met',
      description: 'Projects achieve defined business objectives',
      stat: '98',
      statSuffix: '%',
      statLabel: 'Objectives achieved'
    },
    {
      icon: 'Users',
      title: 'Stakeholder Satisfaction',
      description: 'High stakeholder and sponsor satisfaction',
      stat: '4.8',
      statSuffix: '/5',
      statLabel: 'Satisfaction score'
    }
  ],

  techStack: [
    {
      name: 'Project Management Tools',
      description: 'Industry-leading PM tools',
      technologies: [
        { name: 'Jira', icon: '/icons/tech/jira.svg', category: 'Agile', proficiency: 'expert' },
        { name: 'Microsoft Project', icon: '/icons/tech/ms-project.svg', category: 'Traditional', proficiency: 'expert' },
        { name: 'Asana', icon: '/icons/tech/asana.svg', category: 'Collaboration', proficiency: 'expert' },
        { name: 'Monday.com', icon: '/icons/tech/monday.svg', category: 'Collaboration', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Enterprise PM Platforms',
      description: 'Enterprise project portfolio management',
      technologies: [
        { name: 'Azure DevOps', icon: '/icons/tech/azure-devops.svg', category: 'ALM', proficiency: 'expert' },
        { name: 'ServiceNow PPM', icon: '/icons/tech/servicenow.svg', category: 'PPM', proficiency: 'advanced' },
        { name: 'Planview', icon: '/icons/tech/planview.svg', category: 'PPM', proficiency: 'advanced' },
        { name: 'Smartsheet', icon: '/icons/tech/smartsheet.svg', category: 'Collaboration', proficiency: 'expert' }
      ]
    },
    {
      name: 'Collaboration Tools',
      description: 'Team collaboration and communication',
      technologies: [
        { name: 'Confluence', icon: '/icons/tech/confluence.svg', category: 'Documentation', proficiency: 'expert' },
        { name: 'Slack', icon: '/icons/tech/slack.svg', category: 'Communication', proficiency: 'expert' },
        { name: 'Microsoft Teams', icon: '/icons/tech/teams.svg', category: 'Communication', proficiency: 'expert' },
        { name: 'Miro', icon: '/icons/tech/miro.svg', category: 'Whiteboard', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Project PM',
        description: 'Single project management',
        price: '$10,000',
        priceNote: 'per month',
        features: [
          { name: 'Dedicated project manager', included: true },
          { name: 'Full project lifecycle', included: true },
          { name: 'Stakeholder management', included: true },
          { name: 'Risk management', included: true },
          { name: 'Weekly status reports', included: true },
          { name: 'Multiple projects', included: false },
          { name: 'Program management', included: false },
          { name: 'PMO support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'PM Team',
        description: 'Multiple project management',
        price: '$25,000',
        priceNote: 'per month',
        badge: 'Most Popular',
        features: [
          { name: 'Multiple project managers', included: true },
          { name: 'Full lifecycle management', included: true },
          { name: 'Program coordination', included: true },
          { name: 'Comprehensive risk mgmt', included: true },
          { name: 'Executive reporting', included: true },
          { name: 'Multiple concurrent projects', included: true },
          { name: 'PMO alignment', included: true },
          { name: 'Methodology coaching', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Enterprise PM capability',
        price: 'Custom',
        priceNote: 'based on scope',
        features: [
          { name: 'Scaled PM team', included: true },
          { name: 'Program management', included: true },
          { name: 'PMO establishment', included: true },
          { name: 'Enterprise governance', included: true },
          { name: 'Executive dashboards', included: true },
          { name: 'Portfolio management', included: true },
          { name: 'Methodology development', included: true },
          { name: 'Capability building', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need PMO support? Ask about our PMO-as-a-Service offering.'
  },

  portfolio: [
    {
      title: 'ERP Implementation Program',
      client: 'ManufacturePro Industries',
      industry: 'Manufacturing',
      description: 'Managed multi-year ERP implementation across 15 sites',
      challenge: 'Complex 3-year program with multiple workstreams, vendors, and global rollout',
      solution: 'Established program governance, integrated planning, and rigorous risk management',
      results: [
        'Delivered on time across all 15 sites',
        'Completed $2M under budget',
        '100% of business objectives achieved',
        'Zero critical issues at go-live'
      ],
      metrics: [
        { label: 'On Time', value: '100%' },
        { label: 'Under Budget', value: '$2M' },
        { label: 'Objectives', value: '100%' }
      ],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
      tags: ['ERP', 'Program Management', 'Global Rollout', 'Manufacturing']
    },
    {
      title: 'Digital Platform Delivery',
      client: 'InsureTech Partners',
      industry: 'Insurance',
      description: 'Agile delivery of customer-facing digital platform',
      challenge: 'Aggressive timeline with complex integrations and regulatory requirements',
      solution: 'Agile project management with dedicated Scrum Masters and continuous delivery',
      results: [
        'Launched 2 weeks ahead of schedule',
        'All regulatory requirements met',
        'Customer adoption exceeded targets',
        'Team velocity increased 40%'
      ],
      metrics: [
        { label: 'Timeline', value: '2 weeks early' },
        { label: 'Compliance', value: '100%' },
        { label: 'Velocity', value: '+40%' }
      ],
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=600&fit=crop',
      tags: ['Agile', 'Digital', 'Insurance', 'Platform']
    },
    {
      title: 'Cloud Migration Program',
      client: 'DataFirst Corporation',
      industry: 'Technology',
      description: 'Managed enterprise cloud migration of 200+ applications',
      challenge: 'Large-scale migration with zero tolerance for downtime and complex dependencies',
      solution: 'Phased migration approach with comprehensive testing and rollback procedures',
      results: [
        'All 200+ applications migrated successfully',
        'Zero unplanned downtime during migration',
        'Infrastructure costs reduced 40%',
        'Performance improved by 35%'
      ],
      metrics: [
        { label: 'Applications', value: '200+' },
        { label: 'Downtime', value: 'Zero' },
        { label: 'Cost Savings', value: '40%' }
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['Cloud', 'Migration', 'Enterprise', 'Infrastructure']
    },
    {
      title: 'Healthcare System Implementation',
      client: 'CareFirst Medical Group',
      industry: 'Healthcare',
      description: 'Project management for new electronic health records system',
      challenge: 'Critical healthcare system with strict compliance and training requirements',
      solution: 'Structured waterfall approach with extensive user training and go-live support',
      results: [
        'System live across 12 facilities',
        'Staff trained with 95% competency rate',
        'HIPAA compliance maintained throughout',
        'Patient care continuity preserved'
      ],
      metrics: [
        { label: 'Facilities', value: '12' },
        { label: 'Training', value: '95%' },
        { label: 'Compliance', value: '100%' }
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'EHR', 'Compliance', 'Training']
    }
  ],

  testimonials: [
    {
      quote: 'Their program management was exceptional. Delivering a 3-year ERP program on time and under budget is remarkable.',
      author: 'Thomas Andrews',
      role: 'CIO',
      company: 'ManufacturePro Industries',
      rating: 5,
      location: 'Milwaukee, WI'
    },
    {
      quote: 'The project manager became a trusted partner. Their Agile expertise helped us deliver faster than we thought possible.',
      author: 'Rebecca Lane',
      role: 'VP Digital',
      company: 'InsureTech Partners',
      rating: 5,
      location: 'Hartford, CT'
    }
  ],

  faqs: [
    {
      question: 'What project management methodologies do you use?',
      answer: 'We\'re methodology-agnostic and adapt to your needs. Our PMs are certified in both traditional (PMP, PRINCE2) and Agile (CSM, SAFe) methodologies. We often use hybrid approaches that combine the structure of traditional PM with Agile flexibility.'
    },
    {
      question: 'How do you handle project risks?',
      answer: 'Risk management is proactive and continuous. We identify risks early, assess probability and impact, develop mitigation and contingency plans, and monitor throughout the project. We escalate significant risks promptly and maintain transparent risk registers.'
    },
    {
      question: 'What reporting do you provide?',
      answer: 'We tailor reporting to stakeholder needs. Typical reports include weekly status updates, executive dashboards, milestone tracking, budget reports, and risk/issue logs. We believe in transparency and ensure stakeholders always know project health.'
    },
    {
      question: 'Can you manage projects with external vendors?',
      answer: 'Yes, vendor management is a core capability. We coordinate with multiple vendors, manage contracts and SLAs, ensure deliverable quality, and maintain integrated project plans across vendor teams. We protect your interests while building collaborative relationships.'
    },
    {
      question: 'How do you ensure quality in project delivery?',
      answer: 'Quality is built into our process. We establish quality criteria upfront, conduct regular quality reviews, implement testing strategies, and ensure proper acceptance processes. We focus on preventing defects rather than finding them later.'
    }
  ],

  relatedServices: [
    {
      name: 'Agile Consulting',
      slug: 'agile-consulting',
      description: 'Agile transformation services',
      icon: 'Repeat'
    },
    {
      name: 'Business Analysis',
      slug: 'business-analysis',
      description: 'Requirements and analysis',
      icon: 'FileText'
    },
    {
      name: 'Technology Consulting',
      slug: 'technology-consulting',
      description: 'Technology advisory services',
      icon: 'Settings'
    },
    {
      name: 'Process Optimization',
      slug: 'process-optimization',
      description: 'Process improvement services',
      icon: 'RefreshCw'
    }
  ],

  seo: {
    title: 'Project Management Services | PM Consulting & Delivery',
    description: 'Expert project management services. PMP and Agile certified project managers for on-time, on-budget delivery. 95% project success rate.',
    keywords: [
      'project management services',
      'project management consulting',
      'pmp certified',
      'agile project management',
      'it project management',
      'program management',
      'project delivery',
      'pm services',
      'technology project management',
      'project manager'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Project Management Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Project Management Consulting'
      }
    }
  }
};
