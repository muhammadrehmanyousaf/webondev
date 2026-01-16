// Business Analysis Service Data
import { ServiceData } from '@/components/services/sections';

export const businessAnalysisData: ServiceData = {
  name: 'Business Analysis',
  slug: 'business-analysis',
  tagline: 'Bridge the gap between business needs and technology solutions',
  category: 'Consulting & Strategy',
  description: 'Transform business requirements into successful technology solutions. Our business analysts bridge the gap between stakeholders and development teams, ensuring projects deliver real business value.',

  hero: {
    headline: 'Business Analysis Services',
    subheadline: 'From Requirements to Results',
    description: 'Ensure your technology investments deliver business value. Our certified business analysts translate business needs into clear requirements, identify opportunities, and guide solutions that solve real problems.',
    keyFeatures: [
      'Requirements elicitation',
      'Process modeling & analysis',
      'User story development',
      'Gap analysis',
      'Solution validation',
      'Stakeholder management'
    ],
    badges: ['CBAP Certified', 'Agile BAs', '500+ Projects', 'All Industries']
  },

  painPoints: [
    {
      icon: 'XCircle',
      title: 'Failed Projects',
      description: 'Projects failing due to unclear or changing requirements',
      stat: '68%',
      statLabel: 'Project failures from requirements'
    },
    {
      icon: 'MessageCircle',
      title: 'Communication Gaps',
      description: 'Business and IT speaking different languages causing misunderstanding',
      stat: '57%',
      statLabel: 'Cite communication issues'
    },
    {
      icon: 'Target',
      title: 'Scope Creep',
      description: 'Uncontrolled scope changes derailing project timelines and budgets',
      stat: '52%',
      statLabel: 'Projects have scope creep'
    },
    {
      icon: 'DollarSign',
      title: 'Rework Costs',
      description: 'Fixing requirement defects late in projects costing significantly more',
      stat: '100x',
      statLabel: 'Cost to fix late defects'
    }
  ],

  solutions: [
    {
      icon: 'FileText',
      title: 'Requirements Management',
      description: 'Comprehensive requirements elicitation, documentation, and management',
      highlights: [
        'Stakeholder analysis',
        'Requirements gathering',
        'Documentation standards',
        'Traceability management'
      ]
    },
    {
      icon: 'GitBranch',
      title: 'Process Analysis',
      description: 'Analyze and optimize business processes for efficiency',
      highlights: [
        'Current state mapping',
        'Process optimization',
        'Future state design',
        'Gap identification'
      ]
    },
    {
      icon: 'CheckCircle',
      title: 'Solution Validation',
      description: 'Ensure solutions meet business needs and acceptance criteria',
      highlights: [
        'Acceptance criteria',
        'UAT planning',
        'Test case development',
        'Solution verification'
      ]
    },
    {
      icon: 'Users',
      title: 'Agile BA Services',
      description: 'Embedded business analysis for agile delivery teams',
      highlights: [
        'User story development',
        'Backlog refinement',
        'Sprint planning support',
        'Continuous collaboration'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Users',
        title: 'Stakeholder Engagement',
        description: 'Identify and engage stakeholders to understand needs',
        duration: 'Week 1',
        deliverables: [
          'Stakeholder analysis',
          'Communication plan',
          'Initial interviews',
          'Problem statement'
        ]
      },
      {
        icon: 'Search',
        title: 'Elicitation & Analysis',
        description: 'Gather and analyze requirements through multiple techniques',
        duration: 'Week 2-3',
        deliverables: [
          'Business requirements',
          'Process models',
          'Data analysis',
          'Constraints identified'
        ]
      },
      {
        icon: 'FileText',
        title: 'Documentation',
        description: 'Document requirements in appropriate format for the project',
        duration: 'Week 3-4',
        deliverables: [
          'Requirements document',
          'User stories',
          'Use cases',
          'Acceptance criteria'
        ]
      },
      {
        icon: 'CheckCircle',
        title: 'Validation & Support',
        description: 'Validate requirements and support implementation',
        duration: 'Ongoing',
        deliverables: [
          'Requirements signoff',
          'Implementation support',
          'Change management',
          'UAT support'
        ]
      }
    ],
    totalDuration: '4-6 weeks initial + ongoing'
  },

  benefits: [
    {
      icon: 'CheckCircle',
      title: 'Project Success',
      description: 'Higher project success rates with clear requirements',
      stat: '90',
      statSuffix: '%',
      statLabel: 'Success rate'
    },
    {
      icon: 'DollarSign',
      title: 'Reduced Rework',
      description: 'Less costly changes with upfront requirements clarity',
      stat: '70',
      statSuffix: '%',
      statLabel: 'Less rework'
    },
    {
      icon: 'Users',
      title: 'Stakeholder Alignment',
      description: 'Better alignment between business and technical teams',
      stat: '95',
      statSuffix: '%',
      statLabel: 'Stakeholder satisfaction'
    },
    {
      icon: 'Clock',
      title: 'Faster Delivery',
      description: 'Reduced delays from requirement issues',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Faster delivery'
    }
  ],

  techStack: [
    {
      name: 'Requirements Tools',
      description: 'Requirements management and documentation',
      technologies: [
        { name: 'Jira', icon: '/icons/tech/jira.svg', category: 'Tracking', proficiency: 'expert' },
        { name: 'Confluence', icon: '/icons/tech/confluence.svg', category: 'Documentation', proficiency: 'expert' },
        { name: 'Azure DevOps', icon: '/icons/tech/azure-devops.svg', category: 'ALM', proficiency: 'expert' },
        { name: 'Notion', icon: '/icons/tech/notion.svg', category: 'Documentation', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Modeling Tools',
      description: 'Process and data modeling',
      technologies: [
        { name: 'Lucidchart', icon: '/icons/tech/lucidchart.svg', category: 'Diagrams', proficiency: 'expert' },
        { name: 'Miro', icon: '/icons/tech/miro.svg', category: 'Collaboration', proficiency: 'expert' },
        { name: 'Visio', icon: '/icons/tech/visio.svg', category: 'Diagrams', proficiency: 'expert' },
        { name: 'Draw.io', icon: '/icons/tech/drawio.svg', category: 'Diagrams', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Prototyping',
      description: 'Design and prototyping tools',
      technologies: [
        { name: 'Figma', icon: '/icons/tech/figma.svg', category: 'Design', proficiency: 'advanced' },
        { name: 'Balsamiq', icon: '/icons/tech/balsamiq.svg', category: 'Wireframes', proficiency: 'expert' },
        { name: 'Axure', icon: '/icons/tech/axure.svg', category: 'Prototyping', proficiency: 'advanced' },
        { name: 'InVision', icon: '/icons/tech/invision.svg', category: 'Prototyping', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Project BA',
        description: 'Business analysis for single project',
        price: '$8,000',
        priceNote: 'per month',
        features: [
          { name: 'Dedicated BA resource', included: true },
          { name: 'Requirements elicitation', included: true },
          { name: 'Documentation', included: true },
          { name: 'Stakeholder management', included: true },
          { name: 'Process modeling', included: true },
          { name: 'Multiple projects', included: false },
          { name: 'BA team lead', included: false },
          { name: 'Methodology coaching', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'BA Team',
        description: 'BA services for multiple projects',
        price: '$20,000',
        priceNote: 'per month',
        badge: 'Most Popular',
        features: [
          { name: 'Multiple BAs (2-3)', included: true },
          { name: 'Full requirements services', included: true },
          { name: 'Complete documentation', included: true },
          { name: 'Cross-project coordination', included: true },
          { name: 'Process optimization', included: true },
          { name: 'Multiple concurrent projects', included: true },
          { name: 'BA lead oversight', included: true },
          { name: 'Methodology training', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Enterprise BA capability',
        price: 'Custom',
        priceNote: 'based on scope',
        features: [
          { name: 'Scaled BA team', included: true },
          { name: 'Enterprise requirements', included: true },
          { name: 'Standards development', included: true },
          { name: 'Program-level support', included: true },
          { name: 'Enterprise process design', included: true },
          { name: 'Portfolio support', included: true },
          { name: 'BA practice development', included: true },
          { name: 'Capability building', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need one-time requirements support? Ask about our fixed-price requirements packages.'
  },

  portfolio: [
    {
      title: 'ERP Implementation Business Analysis',
      client: 'GlobalDistribution Corp',
      industry: 'Distribution',
      description: 'Business analysis for enterprise ERP transformation',
      challenge: 'Complex requirements across 20 business units with conflicting needs',
      solution: 'Structured requirements process with stakeholder workshops and process modeling',
      results: [
        'Requirements completed 30% faster than planned',
        'Zero major requirement gaps in implementation',
        'Business satisfaction score of 4.8/5',
        'Change requests reduced by 60%'
      ],
      metrics: [
        { label: 'Faster', value: '30%' },
        { label: 'Satisfaction', value: '4.8/5' },
        { label: 'Changes', value: '-60%' }
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      tags: ['ERP', 'Enterprise', 'Process Modeling', 'Requirements']
    },
    {
      title: 'Mobile Banking App Requirements',
      client: 'RegionalBank Financial',
      industry: 'Banking',
      description: 'User-centered requirements for mobile banking platform',
      challenge: 'Building mobile app that meets diverse customer needs and regulatory requirements',
      solution: 'User research, journey mapping, and detailed user stories with acceptance criteria',
      results: [
        'App launched on time and budget',
        'User adoption 40% above projections',
        'Customer satisfaction 4.7/5 rating',
        'Zero compliance issues at launch'
      ],
      metrics: [
        { label: 'On Time', value: '100%' },
        { label: 'Adoption', value: '+40%' },
        { label: 'Rating', value: '4.7/5' }
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      tags: ['Mobile', 'Banking', 'User Stories', 'Compliance']
    },
    {
      title: 'Healthcare System Integration',
      client: 'MedConnect Health',
      industry: 'Healthcare',
      description: 'Business analysis for multi-system healthcare integration project',
      challenge: 'Integrating 5 disparate clinical systems with complex data requirements',
      solution: 'Comprehensive data mapping, interface requirements, and integration specifications',
      results: [
        'All 5 systems successfully integrated',
        'Data accuracy improved to 99.5%',
        'Clinical workflow efficiency up 35%',
        'Zero critical defects post-launch'
      ],
      metrics: [
        { label: 'Systems', value: '5' },
        { label: 'Accuracy', value: '99.5%' },
        { label: 'Efficiency', value: '+35%' }
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'Integration', 'Data Mapping', 'Clinical Systems']
    },
    {
      title: 'E-commerce Platform Redesign',
      client: 'ShopSmart Online',
      industry: 'E-commerce',
      description: 'Business analysis for complete e-commerce platform redesign',
      challenge: 'Outdated platform limiting customer experience and conversion rates',
      solution: 'Customer journey analysis, feature prioritization, and detailed specifications',
      results: [
        'Conversion rate improved 45%',
        'Cart abandonment reduced 30%',
        'Customer satisfaction increased 50%',
        'Mobile revenue grew 120%'
      ],
      metrics: [
        { label: 'Conversion', value: '+45%' },
        { label: 'Abandonment', value: '-30%' },
        { label: 'Mobile Revenue', value: '+120%' }
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'UX', 'Customer Journey', 'Platform']
    }
  ],

  testimonials: [
    {
      quote: 'Their BAs became an essential part of our team. They understood our business and translated that into requirements the dev team could execute.',
      author: 'Jennifer Adams',
      role: 'Program Director',
      company: 'GlobalDistribution Corp',
      rating: 5,
      location: 'Memphis, TN'
    },
    {
      quote: 'The quality of user stories and acceptance criteria was exceptional. Our development team knew exactly what to build.',
      author: 'David Kim',
      role: 'VP Digital Banking',
      company: 'RegionalBank Financial',
      rating: 5,
      location: 'Portland, OR'
    }
  ],

  faqs: [
    {
      question: 'What methodologies do your BAs use?',
      answer: 'Our BAs are trained in multiple methodologies including traditional waterfall documentation, Agile user stories, and hybrid approaches. We adapt to your organization\'s practices or recommend the best fit for your project. All our senior BAs are CBAP certified.'
    },
    {
      question: 'How do BAs work with Agile teams?',
      answer: 'In Agile environments, our BAs work as embedded team members, participating in sprint planning, writing user stories, refining the backlog, and supporting the team throughout sprints. We focus on just-in-time requirements and continuous collaboration.'
    },
    {
      question: 'What deliverables do you produce?',
      answer: 'Deliverables depend on methodology and needs. Common outputs include business requirements documents, user stories with acceptance criteria, process flows, use cases, data dictionaries, and wireframes. We tailor documentation to what\'s most useful for your team.'
    },
    {
      question: 'Can you help with business process improvement?',
      answer: 'Yes, process analysis is a core BA capability. We map current state processes, identify inefficiencies and bottlenecks, and design optimized future state processes. This work often precedes or accompanies system requirements.'
    },
    {
      question: 'How do you handle changing requirements?',
      answer: 'Change is expected, especially in Agile projects. We implement change management processes that evaluate impact, maintain traceability, and ensure changes are properly communicated. We help organizations embrace beneficial change while controlling scope creep.'
    }
  ],

  relatedServices: [
    {
      name: 'Project Management',
      slug: 'project-management',
      description: 'Project delivery management',
      icon: 'CheckSquare'
    },
    {
      name: 'Agile Consulting',
      slug: 'agile-consulting',
      description: 'Agile methodology services',
      icon: 'Repeat'
    },
    {
      name: 'Process Optimization',
      slug: 'process-optimization',
      description: 'Business process improvement',
      icon: 'RefreshCw'
    },
    {
      name: 'Product Strategy',
      slug: 'product-strategy',
      description: 'Product development strategy',
      icon: 'Box'
    }
  ],

  seo: {
    title: 'Business Analysis Services | BA Consulting & Requirements',
    description: 'Expert business analysis services. Requirements elicitation, process modeling, user stories, and solution validation. CBAP certified analysts for project success.',
    keywords: [
      'business analysis',
      'business analyst services',
      'requirements gathering',
      'requirements management',
      'process analysis',
      'user stories',
      'business requirements',
      'ba consulting',
      'agile business analysis',
      'requirements elicitation'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Business Analysis Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Business Analysis Consulting'
      }
    }
  }
};
