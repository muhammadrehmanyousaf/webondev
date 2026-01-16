// IT Helpdesk Outsourcing Service Data
import { ServiceData } from '@/components/services/sections';

export const itHelpdeskOutsourcingData: ServiceData = {
  name: 'IT Helpdesk Outsourcing',
  slug: 'it-helpdesk-outsourcing',
  tagline: '24/7 IT support for your team and customers',
  category: 'Outsourcing Services',
  description: 'Outsource your IT helpdesk to provide fast, professional support around the clock. Our helpdesk teams handle technical issues, user support, and IT service management so your team stays productive.',

  hero: {
    headline: 'IT Helpdesk Outsourcing',
    subheadline: 'Professional Support, Always Available',
    description: 'Keep your team productive with responsive IT support. Our helpdesk outsourcing services provide experienced technicians who resolve issues quickly, available whenever your users need help.',
    keyFeatures: [
      '24/7 support availability',
      'Multi-channel support',
      'ITIL-certified processes',
      'Rapid response times',
      'Scalable capacity',
      'Detailed reporting'
    ],
    badges: ['24/7 Coverage', 'ITIL Certified', '15min Response', '95% First-Call Resolution']
  },

  painPoints: [
    {
      icon: 'Clock',
      title: 'Slow Response Times',
      description: 'Users waiting hours or days for IT support',
      stat: '4hrs',
      statLabel: 'Avg response time'
    },
    {
      icon: 'Users',
      title: 'IT Staff Shortages',
      description: 'Not enough support staff to handle demand',
      stat: '60%',
      statLabel: 'Understaffed IT'
    },
    {
      icon: 'TrendingDown',
      title: 'Lost Productivity',
      description: 'Technical issues causing work stoppages',
      stat: '$5,600',
      statLabel: 'Cost per hour downtime'
    },
    {
      icon: 'Moon',
      title: 'No After-Hours Support',
      description: 'Issues outside business hours go unresolved',
      stat: '35%',
      statLabel: 'Issues after hours'
    }
  ],

  solutions: [
    {
      icon: 'Clock',
      title: '24/7 Availability',
      description: 'Support whenever your users need it',
      highlights: [
        'Round-the-clock coverage',
        'Follow-the-sun model',
        'Holiday coverage',
        'On-call escalation'
      ]
    },
    {
      icon: 'MessageCircle',
      title: 'Multi-Channel Support',
      description: 'Support through preferred channels',
      highlights: [
        'Phone support',
        'Email ticketing',
        'Live chat',
        'Self-service portal'
      ]
    },
    {
      icon: 'Zap',
      title: 'Fast Resolution',
      description: 'Quick turnaround on support requests',
      highlights: [
        '15-min response SLA',
        'First-call resolution',
        'Tiered escalation',
        'Priority handling'
      ]
    },
    {
      icon: 'FileText',
      title: 'Knowledge Management',
      description: 'Build institutional knowledge',
      highlights: [
        'Knowledge base',
        'Documentation',
        'Self-service resources',
        'FAQs and guides'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Assessment',
        description: 'Understand your IT environment and support needs',
        duration: 'Week 1',
        deliverables: [
          'Environment review',
          'Support requirements',
          'SLA definition',
          'Process mapping'
        ]
      },
      {
        icon: 'Users',
        title: 'Team Setup',
        description: 'Train and prepare dedicated support team',
        duration: 'Week 2-3',
        deliverables: [
          'Team assignment',
          'System training',
          'Tool configuration',
          'Knowledge transfer'
        ]
      },
      {
        icon: 'Play',
        title: 'Soft Launch',
        description: 'Begin support with close monitoring',
        duration: 'Week 4',
        deliverables: [
          'Pilot support',
          'Quality monitoring',
          'Process refinement',
          'Feedback incorporation'
        ]
      },
      {
        icon: 'Activity',
        title: 'Full Operations',
        description: 'Full-scale support operations',
        duration: 'Ongoing',
        deliverables: [
          'Full coverage',
          'Regular reporting',
          'Continuous improvement',
          'SLA monitoring'
        ]
      }
    ],
    totalDuration: '3-4 weeks to full operations'
  },

  benefits: [
    {
      icon: 'Clock',
      title: 'Fast Response',
      description: 'Quick issue resolution',
      stat: '15',
      statSuffix: ' min',
      statLabel: 'Response time'
    },
    {
      icon: 'CheckCircle',
      title: 'High Resolution',
      description: 'Issues fixed on first contact',
      stat: '95',
      statSuffix: '%',
      statLabel: 'First-call resolution'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Savings',
      description: 'Reduce support costs',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Cost reduction'
    },
    {
      icon: 'Star',
      title: 'User Satisfaction',
      description: 'Happy users, productive teams',
      stat: '4.8',
      statSuffix: '/5',
      statLabel: 'CSAT score'
    }
  ],

  techStack: [
    {
      name: 'ITSM Platforms',
      description: 'IT service management',
      technologies: [
        { name: 'ServiceNow', icon: '/icons/tech/servicenow.svg', category: 'ITSM', proficiency: 'expert' },
        { name: 'Jira Service Management', icon: '/icons/tech/jira.svg', category: 'ITSM', proficiency: 'expert' },
        { name: 'Zendesk', icon: '/icons/tech/zendesk.svg', category: 'Helpdesk', proficiency: 'expert' },
        { name: 'Freshservice', icon: '/icons/tech/freshservice.svg', category: 'ITSM', proficiency: 'expert' }
      ]
    },
    {
      name: 'Remote Support',
      description: 'Remote assistance tools',
      technologies: [
        { name: 'TeamViewer', icon: '/icons/tech/teamviewer.svg', category: 'Remote', proficiency: 'expert' },
        { name: 'Dameware', icon: '/icons/tech/dameware.svg', category: 'Remote', proficiency: 'advanced' },
        { name: 'ConnectWise', icon: '/icons/tech/connectwise.svg', category: 'Remote', proficiency: 'expert' },
        { name: 'AnyDesk', icon: '/icons/tech/anydesk.svg', category: 'Remote', proficiency: 'expert' }
      ]
    },
    {
      name: 'Endpoint Management',
      description: 'Device management',
      technologies: [
        { name: 'Intune', icon: '/icons/tech/microsoft.svg', category: 'MDM', proficiency: 'expert' },
        { name: 'SCCM', icon: '/icons/tech/microsoft.svg', category: 'Management', proficiency: 'advanced' },
        { name: 'Jamf', icon: '/icons/tech/jamf.svg', category: 'Apple MDM', proficiency: 'expert' },
        { name: 'Workspace ONE', icon: '/icons/tech/vmware.svg', category: 'UEM', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Communication',
      description: 'Communication platforms',
      technologies: [
        { name: 'Microsoft Teams', icon: '/icons/tech/teams.svg', category: 'Collaboration', proficiency: 'expert' },
        { name: 'Slack', icon: '/icons/tech/slack.svg', category: 'Collaboration', proficiency: 'expert' },
        { name: 'Intercom', icon: '/icons/tech/intercom.svg', category: 'Chat', proficiency: 'expert' },
        { name: 'RingCentral', icon: '/icons/tech/ringcentral.svg', category: 'Phone', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Basic Support',
        description: 'Business hours support',
        price: '$3,500',
        priceNote: 'per month',
        features: [
          { name: 'Business hours (8x5)', included: true },
          { name: 'Email & phone support', included: true },
          { name: '1-hour response SLA', included: true },
          { name: 'Ticket management', included: true },
          { name: 'Monthly reporting', included: true },
          { name: '24/7 coverage', included: false },
          { name: 'Live chat', included: false },
          { name: 'On-site support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Extended Support',
        description: 'Extended hours + chat',
        price: '$7,500',
        priceNote: 'per month',
        badge: 'Most Popular',
        features: [
          { name: 'Extended hours (12x6)', included: true },
          { name: 'Email, phone & chat', included: true },
          { name: '30-min response SLA', included: true },
          { name: 'Priority escalation', included: true },
          { name: 'Weekly reporting', included: true },
          { name: 'After-hours emergency', included: true },
          { name: 'Knowledge base', included: true },
          { name: 'On-site support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: '24/7 Enterprise',
        description: 'Round-the-clock coverage',
        price: 'Custom',
        priceNote: 'based on requirements',
        features: [
          { name: '24/7/365 coverage', included: true },
          { name: 'All channels', included: true },
          { name: '15-min response SLA', included: true },
          { name: 'Dedicated team', included: true },
          { name: 'Real-time dashboards', included: true },
          { name: 'VIP support tiers', included: true },
          { name: 'Self-service portal', included: true },
          { name: 'On-site available', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Pricing based on user count and ticket volume. Custom SLAs available.'
  },

  portfolio: [
    {
      title: 'Enterprise IT Helpdesk',
      client: 'GlobalTech Corporation',
      industry: 'Enterprise',
      description: '24/7 IT helpdesk for 5,000+ employee enterprise',
      challenge: 'Internal IT team overwhelmed with support requests',
      solution: 'Outsourced helpdesk with dedicated team and ITIL processes',
      results: [
        'Response time reduced from 4 hours to 12 minutes',
        'First-call resolution improved to 93%',
        'User satisfaction score reached 4.7/5',
        'IT team freed to focus on strategic projects'
      ],
      metrics: [
        { label: 'Response Time', value: '12 min' },
        { label: 'FCR Rate', value: '93%' },
        { label: 'CSAT', value: '4.7/5' }
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['Enterprise', 'ITIL', '24/7 Support', '5000+ Users']
    },
    {
      title: 'SaaS Customer Support',
      client: 'CloudPlatform Pro',
      industry: 'SaaS',
      description: 'Technical support helpdesk for SaaS platform users',
      challenge: 'Growing customer base exceeding support capacity',
      solution: 'Scalable outsourced helpdesk with technical expertise',
      results: [
        'Support capacity scaled 3x',
        'Average resolution time cut by 60%',
        'Customer churn reduced 25%',
        'NPS improved from 32 to 58'
      ],
      metrics: [
        { label: 'Capacity', value: '3x' },
        { label: 'Resolution Time', value: '-60%' },
        { label: 'NPS', value: '58' }
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      tags: ['SaaS', 'Technical Support', 'Scalable', 'Customer Success']
    },
    {
      title: 'Multi-Location Retail Support',
      client: 'RetailChain USA',
      industry: 'Retail',
      description: 'IT helpdesk supporting 200+ retail locations nationwide',
      challenge: 'Inconsistent IT support across dispersed locations',
      solution: 'Centralized helpdesk with remote support capabilities',
      results: [
        'Support standardized across 200+ stores',
        'POS downtime reduced 80%',
        'Store manager satisfaction at 4.9/5',
        'IT support costs reduced 35%'
      ],
      metrics: [
        { label: 'Locations', value: '200+' },
        { label: 'Downtime', value: '-80%' },
        { label: 'Cost Savings', value: '35%' }
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      tags: ['Retail', 'Multi-Location', 'POS Support', 'Remote']
    },
    {
      title: 'Financial Services Helpdesk',
      client: 'SecureFinance Group',
      industry: 'Financial Services',
      description: 'Compliant IT helpdesk for financial services firm',
      challenge: 'Required secure, compliant support with audit trail',
      solution: 'Implemented SOC 2 compliant helpdesk with full documentation',
      results: [
        'SOC 2 compliance maintained',
        'Audit-ready documentation for all tickets',
        'Security incident response under 15 min',
        'Zero compliance violations'
      ],
      metrics: [
        { label: 'Compliance', value: 'SOC 2' },
        { label: 'Response', value: '<15 min' },
        { label: 'Violations', value: '0' }
      ],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
      tags: ['Financial Services', 'SOC 2', 'Compliance', 'Security']
    }
  ],

  testimonials: [
    {
      quote: 'Our response times went from hours to minutes. The helpdesk team has been phenomenal for our productivity.',
      author: 'Thomas Wright',
      role: 'IT Director',
      company: 'GlobalTech Corporation',
      rating: 5,
      location: 'Houston, TX'
    },
    {
      quote: 'Outsourcing support let us scale without hiring headaches. Our customers are happier and so are we.',
      author: 'Emily Chen',
      role: 'VP Customer Success',
      company: 'CloudPlatform Pro',
      rating: 5,
      location: 'Seattle, WA'
    }
  ],

  faqs: [
    {
      question: 'What types of IT issues do you support?',
      answer: 'We handle all standard IT support issues including hardware troubleshooting, software installation and configuration, password resets, email support, network connectivity, VPN issues, printer problems, application support, and general technical guidance. We can also provide specialized support for your specific applications.'
    },
    {
      question: 'How do you train staff on our systems?',
      answer: 'We conduct comprehensive knowledge transfer during onboarding. This includes documentation review, system access and training, shadow sessions with your current team, and creation of runbooks for common issues. We continuously update knowledge as your environment evolves.'
    },
    {
      question: 'What SLA options are available?',
      answer: 'We offer flexible SLAs based on your needs. Standard response times range from 15 minutes to 4 hours depending on priority level. Resolution SLAs, availability guarantees, and escalation procedures are all customizable. We report against SLAs with full transparency.'
    },
    {
      question: 'Can you use our existing ticketing system?',
      answer: 'Yes, we integrate with your existing ITSM platform whether it\'s ServiceNow, Jira, Zendesk, Freshdesk, or others. If you don\'t have a system, we can provide one. Our goal is seamless integration with your current processes.'
    },
    {
      question: 'How do you ensure quality and security?',
      answer: 'Quality is maintained through regular monitoring, call reviews, CSAT surveys, and continuous training. For security, all staff pass background checks, sign NDAs, and follow strict data handling procedures. We comply with SOC 2, HIPAA, and other standards as needed.'
    }
  ],

  relatedServices: [
    {
      name: 'Managed IT Services',
      slug: 'managed-it-services',
      description: 'Full IT management',
      icon: 'Server'
    },
    {
      name: 'DevOps Outsourcing',
      slug: 'devops-outsourcing',
      description: 'Technical operations',
      icon: 'Settings'
    },
    {
      name: 'Staff Augmentation',
      slug: 'staff-augmentation',
      description: 'IT staff placement',
      icon: 'UserPlus'
    },
    {
      name: 'Cloud Infrastructure',
      slug: 'cloud-infrastructure',
      description: 'Cloud management',
      icon: 'Cloud'
    }
  ],

  seo: {
    title: 'IT Helpdesk Outsourcing | IT Support Services',
    description: 'Outsource IT helpdesk for 24/7 support. 15-minute response times, 95% first-call resolution. ITIL-certified technicians. Reduce costs 40%.',
    keywords: [
      'it helpdesk outsourcing',
      'it support outsourcing',
      'helpdesk outsourcing',
      'outsource it support',
      'it service desk outsourcing',
      'technical support outsourcing',
      'it helpdesk services',
      'managed helpdesk',
      'outsourced it support',
      '24/7 it support'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'IT Helpdesk Outsourcing',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'IT Support Services'
      }
    }
  }
};
