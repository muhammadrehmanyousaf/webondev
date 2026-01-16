// Process Optimization Service Data
import { ServiceData } from '@/components/services/sections';

export const processOptimizationData: ServiceData = {
  name: 'Process Optimization',
  slug: 'process-optimization',
  tagline: 'Streamline operations for efficiency and growth',
  category: 'Consulting & Strategy',
  description: 'Transform business processes for maximum efficiency. We analyze, redesign, and optimize your operations to eliminate waste, reduce costs, and improve customer experience through lean methodologies and automation.',

  hero: {
    headline: 'Process Optimization Services',
    subheadline: 'Eliminate Waste, Accelerate Growth',
    description: 'Unlock hidden efficiency in your operations. Our process experts identify bottlenecks, eliminate waste, and design streamlined processes that reduce costs and improve customer satisfaction.',
    keyFeatures: [
      'Process assessment & mapping',
      'Lean Six Sigma methodology',
      'Process automation',
      'Workflow optimization',
      'Performance measurement',
      'Continuous improvement'
    ],
    badges: ['Lean Certified', 'Six Sigma Black Belts', '200+ Optimizations', 'Measurable Results']
  },

  painPoints: [
    {
      icon: 'Clock',
      title: 'Slow Processes',
      description: 'Business processes taking too long, frustrating customers and employees',
      stat: '3x',
      statLabel: 'Longer than necessary'
    },
    {
      icon: 'DollarSign',
      title: 'High Operating Costs',
      description: 'Inefficient processes driving up costs and reducing margins',
      stat: '30%',
      statLabel: 'Waste in processes'
    },
    {
      icon: 'AlertTriangle',
      title: 'Quality Issues',
      description: 'Inconsistent processes leading to errors and quality problems',
      stat: '25%',
      statLabel: 'Rework rate'
    },
    {
      icon: 'Users',
      title: 'Employee Frustration',
      description: 'Staff frustrated with manual, repetitive work and workarounds',
      stat: '60%',
      statLabel: 'Report frustration'
    }
  ],

  solutions: [
    {
      icon: 'Search',
      title: 'Process Assessment',
      description: 'Comprehensive analysis of current processes to identify opportunities',
      highlights: [
        'Process mapping',
        'Value stream analysis',
        'Bottleneck identification',
        'Waste assessment'
      ]
    },
    {
      icon: 'RefreshCw',
      title: 'Process Redesign',
      description: 'Design optimized processes using lean principles',
      highlights: [
        'Future state design',
        'Workflow optimization',
        'Handoff reduction',
        'Error-proofing'
      ]
    },
    {
      icon: 'Zap',
      title: 'Process Automation',
      description: 'Automate manual processes using RPA and workflow tools',
      highlights: [
        'Automation assessment',
        'RPA implementation',
        'Workflow automation',
        'Integration'
      ]
    },
    {
      icon: 'TrendingUp',
      title: 'Continuous Improvement',
      description: 'Establish capability for ongoing process optimization',
      highlights: [
        'Performance metrics',
        'Improvement culture',
        'Kaizen events',
        'Governance'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Discovery & Mapping',
        description: 'Map current processes and identify improvement opportunities',
        duration: 'Week 1-2',
        deliverables: [
          'Process maps',
          'Value stream maps',
          'Pain point analysis',
          'Opportunity assessment'
        ]
      },
      {
        icon: 'Target',
        title: 'Analysis & Design',
        description: 'Analyze root causes and design optimized processes',
        duration: 'Week 2-4',
        deliverables: [
          'Root cause analysis',
          'Future state design',
          'Improvement priorities',
          'Business case'
        ]
      },
      {
        icon: 'Play',
        title: 'Implementation',
        description: 'Implement process changes and automation',
        duration: 'Week 4-8',
        deliverables: [
          'Process changes',
          'Automation deployment',
          'Training delivery',
          'Change management'
        ]
      },
      {
        icon: 'BarChart',
        title: 'Measure & Sustain',
        description: 'Measure results and establish continuous improvement',
        duration: 'Ongoing',
        deliverables: [
          'Performance metrics',
          'Control plans',
          'Improvement framework',
          'Sustainability review'
        ]
      }
    ],
    totalDuration: '8-12 weeks'
  },

  benefits: [
    {
      icon: 'Zap',
      title: 'Faster Processes',
      description: 'Dramatically reduce process cycle times',
      stat: '50',
      statSuffix: '%',
      statLabel: 'Faster cycle times'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Reduction',
      description: 'Lower operating costs through efficiency',
      stat: '30',
      statSuffix: '%',
      statLabel: 'Cost reduction'
    },
    {
      icon: 'CheckCircle',
      title: 'Better Quality',
      description: 'Reduce errors and improve consistency',
      stat: '80',
      statSuffix: '%',
      statLabel: 'Error reduction'
    },
    {
      icon: 'Users',
      title: 'Happy Employees',
      description: 'Improve employee satisfaction with better tools',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Satisfaction improvement'
    }
  ],

  techStack: [
    {
      name: 'Process Mapping',
      description: 'Process documentation and analysis tools',
      technologies: [
        { name: 'Lucidchart', icon: '/icons/tech/lucidchart.svg', category: 'Diagrams', proficiency: 'expert' },
        { name: 'Visio', icon: '/icons/tech/visio.svg', category: 'Diagrams', proficiency: 'expert' },
        { name: 'Miro', icon: '/icons/tech/miro.svg', category: 'Whiteboard', proficiency: 'expert' },
        { name: 'Celonis', icon: '/icons/tech/celonis.svg', category: 'Process Mining', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Automation Tools',
      description: 'Process automation platforms',
      technologies: [
        { name: 'UiPath', icon: '/icons/tech/uipath.svg', category: 'RPA', proficiency: 'expert' },
        { name: 'Power Automate', icon: '/icons/tech/power-automate.svg', category: 'Automation', proficiency: 'expert' },
        { name: 'Automation Anywhere', icon: '/icons/tech/automation-anywhere.svg', category: 'RPA', proficiency: 'advanced' },
        { name: 'Zapier', icon: '/icons/tech/zapier.svg', category: 'Integration', proficiency: 'expert' }
      ]
    },
    {
      name: 'Workflow Management',
      description: 'Workflow and BPM tools',
      technologies: [
        { name: 'ServiceNow', icon: '/icons/tech/servicenow.svg', category: 'BPM', proficiency: 'expert' },
        { name: 'Nintex', icon: '/icons/tech/nintex.svg', category: 'Workflow', proficiency: 'advanced' },
        { name: 'Monday.com', icon: '/icons/tech/monday.svg', category: 'Workflow', proficiency: 'advanced' },
        { name: 'Asana', icon: '/icons/tech/asana.svg', category: 'Workflow', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Assessment',
        description: 'Process assessment & quick wins',
        price: '$15,000',
        priceNote: 'one-time engagement',
        features: [
          { name: 'Process mapping', included: true },
          { name: 'Bottleneck analysis', included: true },
          { name: 'Quick win identification', included: true },
          { name: 'Recommendations report', included: true },
          { name: 'Prioritization', included: true },
          { name: 'Process redesign', included: false },
          { name: 'Automation', included: false },
          { name: 'Implementation support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Optimization',
        description: 'Full process optimization',
        price: '$40,000',
        priceNote: 'one-time engagement',
        badge: 'Most Popular',
        features: [
          { name: 'Comprehensive assessment', included: true },
          { name: 'Root cause analysis', included: true },
          { name: 'Process redesign', included: true },
          { name: 'Change management', included: true },
          { name: 'Implementation support', included: true },
          { name: 'Basic automation', included: true },
          { name: 'Training', included: true },
          { name: 'Metrics setup', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Transformation',
        description: 'Enterprise process transformation',
        price: '$100,000+',
        priceNote: 'custom engagement',
        features: [
          { name: 'Enterprise assessment', included: true },
          { name: 'Advanced analytics', included: true },
          { name: 'Multi-process redesign', included: true },
          { name: 'Full change management', included: true },
          { name: 'Complete implementation', included: true },
          { name: 'Advanced automation', included: true },
          { name: 'Comprehensive training', included: true },
          { name: 'Continuous improvement', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need ongoing improvement support? Ask about our continuous improvement retainers.'
  },

  portfolio: [
    {
      title: 'Order-to-Cash Optimization',
      client: 'DistributionPro Corp',
      industry: 'Distribution',
      description: 'Optimized end-to-end order-to-cash process across 5 locations',
      challenge: 'Orders taking 5 days to process with 15% error rate',
      solution: 'Redesigned process, implemented automation, and standardized across locations',
      results: [
        'Order processing reduced to 1 day',
        'Error rate reduced to 2%',
        'Customer satisfaction improved 35%',
        '$1.5M annual savings realized'
      ],
      metrics: [
        { label: 'Process Time', value: '-80%' },
        { label: 'Errors', value: '-87%' },
        { label: 'Savings', value: '$1.5M/year' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Order-to-Cash', 'Distribution', 'Automation', 'Standardization']
    },
    {
      title: 'HR Onboarding Transformation',
      client: 'TalentFirst Technologies',
      industry: 'Technology',
      description: 'Transformed new employee onboarding from manual to automated',
      challenge: 'Onboarding taking 3 weeks with poor new hire experience',
      solution: 'Designed streamlined process with workflow automation and self-service',
      results: [
        'Onboarding reduced to 3 days',
        'New hire satisfaction increased 60%',
        'HR time per hire reduced 70%',
        'Compliance improved to 100%'
      ],
      metrics: [
        { label: 'Time', value: '-90%' },
        { label: 'Satisfaction', value: '+60%' },
        { label: 'Compliance', value: '100%' }
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      tags: ['HR', 'Onboarding', 'Automation', 'Employee Experience']
    },
    {
      title: 'Invoice Processing Automation',
      client: 'AccountingPro Services',
      industry: 'Professional Services',
      description: 'Automated accounts payable invoice processing workflow',
      challenge: 'Manual invoice processing causing delays and payment errors',
      solution: 'Implemented intelligent automation with OCR and workflow routing',
      results: [
        'Invoice processing time reduced 85%',
        'Payment accuracy improved to 99.8%',
        'Early payment discounts captured',
        'Staff redeployed to strategic work'
      ],
      metrics: [
        { label: 'Processing Time', value: '-85%' },
        { label: 'Accuracy', value: '99.8%' },
        { label: 'Discounts Captured', value: '$500K' }
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['Accounts Payable', 'Automation', 'OCR', 'Finance']
    },
    {
      title: 'Customer Service Process Redesign',
      client: 'ServiceFirst Solutions',
      industry: 'Customer Service',
      description: 'Redesigned customer service processes for multi-channel support',
      challenge: 'Long resolution times and inconsistent service across channels',
      solution: 'Unified service processes with knowledge base and automation',
      results: [
        'First contact resolution improved 40%',
        'Average handle time reduced 30%',
        'Customer satisfaction increased 50%',
        'Agent turnover reduced 25%'
      ],
      metrics: [
        { label: 'FCR', value: '+40%' },
        { label: 'Handle Time', value: '-30%' },
        { label: 'CSAT', value: '+50%' }
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      tags: ['Customer Service', 'Multi-channel', 'Knowledge Base', 'Efficiency']
    }
  ],

  testimonials: [
    {
      quote: 'The process optimization delivered incredible results. $1.5M in savings and much happier customers. ROI was evident within months.',
      author: 'Michael Patterson',
      role: 'COO',
      company: 'DistributionPro Corp',
      rating: 5,
      location: 'Dallas, TX'
    },
    {
      quote: 'Our onboarding was a mess. Now new hires are productive in days, not weeks. The transformation exceeded our expectations.',
      author: 'Jennifer Wong',
      role: 'VP HR',
      company: 'TalentFirst Technologies',
      rating: 5,
      location: 'San Jose, CA'
    }
  ],

  faqs: [
    {
      question: 'What methodology do you use for process optimization?',
      answer: 'We combine Lean and Six Sigma principles with modern process mining and automation techniques. We use value stream mapping, root cause analysis, and data-driven approaches. The specific methodology is tailored to your needs and culture.'
    },
    {
      question: 'How do you measure process improvement success?',
      answer: 'We establish baseline metrics before optimization and track improvements including cycle time, throughput, error rates, costs, and customer satisfaction. We create dashboards for ongoing visibility and ensure improvements are sustained.'
    },
    {
      question: 'What about change management?',
      answer: 'Change management is critical for successful process improvement. We include stakeholder engagement, communication, training, and sustainment planning in all engagements. Process changes only succeed when people adopt them.'
    },
    {
      question: 'Which processes benefit most from optimization?',
      answer: 'High-volume, repetitive processes with clear inputs and outputs often yield the best ROI. Common candidates include order processing, customer onboarding, invoice processing, HR processes, and customer service workflows.'
    },
    {
      question: 'Can you help with process automation?',
      answer: 'Yes, automation is often a key part of process optimization. We assess automation potential, recommend appropriate technologies (RPA, workflow tools, integration), and implement automation as part of the optimized process.'
    }
  ],

  relatedServices: [
    {
      name: 'Digital Transformation',
      slug: 'digital-transformation',
      description: 'Digital process transformation',
      icon: 'Zap'
    },
    {
      name: 'Business Analysis',
      slug: 'business-analysis',
      description: 'Process requirements',
      icon: 'FileText'
    },
    {
      name: 'Technology Consulting',
      slug: 'technology-consulting',
      description: 'Technology-enabled improvement',
      icon: 'Settings'
    },
    {
      name: 'Agile Consulting',
      slug: 'agile-consulting',
      description: 'Process agility',
      icon: 'Repeat'
    }
  ],

  seo: {
    title: 'Process Optimization Services | Business Process Improvement',
    description: 'Expert process optimization services. Lean Six Sigma, process automation, workflow optimization, and continuous improvement. Reduce costs and improve efficiency.',
    keywords: [
      'process optimization',
      'business process improvement',
      'lean six sigma',
      'process automation',
      'workflow optimization',
      'process reengineering',
      'operational efficiency',
      'process consulting',
      'bpm services',
      'continuous improvement'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Process Optimization Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Process Optimization Consulting'
      }
    }
  }
};
