// SLA Support Services Data
import { ServiceData } from '@/components/services/sections';

export const slaSupportServicesData: ServiceData = {
  name: 'SLA Support Services',
  slug: 'sla-support-services',
  tagline: 'Guaranteed support with contractual commitments',
  category: 'Maintenance & Support',
  description: 'Enterprise-grade SLA support services with guaranteed response times, uptime commitments, and contractual service levels. Get the reliability your business demands with measurable accountability.',

  hero: {
    headline: 'SLA Support Services',
    subheadline: 'Guaranteed Service, Contractual Commitment',
    description: 'When uptime and responsiveness are critical, our SLA support services provide contractually guaranteed service levels. Get defined response times, uptime commitments, and financial accountability.',
    keyFeatures: [
      'Guaranteed response times',
      'Uptime commitments',
      'Financial SLA backing',
      'Priority escalation',
      'Dedicated resources',
      'Executive reporting'
    ],
    badges: ['99.9% Uptime SLA', '15min Response SLA', 'Financial Guarantee', 'Enterprise Grade']
  },

  painPoints: [
    {
      icon: 'Clock',
      title: 'Unpredictable Response',
      description: 'No guarantee on when issues get addressed',
      stat: '4hrs',
      statLabel: 'Avg vendor response'
    },
    {
      icon: 'FileText',
      title: 'No Accountability',
      description: 'Vendors not contractually accountable',
      stat: '70%',
      statLabel: 'Miss informal SLAs'
    },
    {
      icon: 'Activity',
      title: 'Unreliable Uptime',
      description: 'No uptime guarantees causing business risk',
      stat: '99%',
      statLabel: '= 3.65 days down/year'
    },
    {
      icon: 'TrendingDown',
      title: 'Business Impact',
      description: 'Downtime directly affecting revenue',
      stat: '$5,600',
      statLabel: 'Cost per hour down'
    }
  ],

  solutions: [
    {
      icon: 'Clock',
      title: 'Response Time SLAs',
      description: 'Guaranteed response times by severity',
      highlights: [
        'Critical: 15 minutes',
        'High: 1 hour',
        'Medium: 4 hours',
        'Low: 1 business day'
      ]
    },
    {
      icon: 'Activity',
      title: 'Uptime Guarantees',
      description: 'Contractual uptime commitments',
      highlights: [
        '99.9% standard',
        '99.95% premium',
        '99.99% enterprise',
        'Financial credits'
      ]
    },
    {
      icon: 'Users',
      title: 'Dedicated Resources',
      description: 'Named resources for your account',
      highlights: [
        'Account manager',
        'Technical lead',
        'Escalation path',
        'Executive sponsor'
      ]
    },
    {
      icon: 'FileText',
      title: 'Transparency',
      description: 'Full visibility into performance',
      highlights: [
        'Real-time dashboards',
        'Monthly reports',
        'SLA tracking',
        'Incident reports'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'FileText',
        title: 'Requirements',
        description: 'Define your SLA requirements',
        duration: 'Week 1',
        deliverables: [
          'Business requirements',
          'Criticality assessment',
          'SLA definition',
          'Scope agreement'
        ]
      },
      {
        icon: 'Settings',
        title: 'Setup',
        description: 'Implement SLA monitoring and processes',
        duration: 'Week 2-3',
        deliverables: [
          'Monitoring setup',
          'Process documentation',
          'Team assignment',
          'Escalation paths'
        ]
      },
      {
        icon: 'FileText',
        title: 'Contract',
        description: 'Finalize SLA agreement',
        duration: 'Week 3-4',
        deliverables: [
          'SLA document',
          'Credit structure',
          'Reporting cadence',
          'Contract signing'
        ]
      },
      {
        icon: 'Activity',
        title: 'Operations',
        description: 'Ongoing SLA-backed support',
        duration: 'Ongoing',
        deliverables: [
          'SLA adherence',
          'Regular reporting',
          'Quarterly reviews',
          'Continuous improvement'
        ]
      }
    ],
    totalDuration: '3-4 weeks to operational SLA'
  },

  benefits: [
    {
      icon: 'Clock',
      title: 'Fast Response',
      description: 'Guaranteed response times',
      stat: '15',
      statSuffix: 'min',
      statLabel: 'Critical response'
    },
    {
      icon: 'Activity',
      title: 'High Uptime',
      description: 'Guaranteed availability',
      stat: '99.99',
      statSuffix: '%',
      statLabel: 'Max uptime SLA'
    },
    {
      icon: 'Shield',
      title: 'Financial Backing',
      description: 'Credits for SLA misses',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Credit backing'
    },
    {
      icon: 'FileText',
      title: 'Transparency',
      description: 'Full performance visibility',
      stat: 'Real-time',
      statSuffix: '',
      statLabel: 'Reporting'
    }
  ],

  techStack: [
    {
      name: 'Monitoring',
      description: 'SLA monitoring tools',
      technologies: [
        { name: 'Datadog', icon: '/icons/tech/datadog.svg', category: 'APM', proficiency: 'expert' },
        { name: 'New Relic', icon: '/icons/tech/newrelic.svg', category: 'APM', proficiency: 'expert' },
        { name: 'PagerDuty', icon: '/icons/tech/pagerduty.svg', category: 'Alerting', proficiency: 'expert' },
        { name: 'Statuspage', icon: '/icons/tech/statuspage.svg', category: 'Status', proficiency: 'expert' }
      ]
    },
    {
      name: 'ITSM',
      description: 'Service management',
      technologies: [
        { name: 'ServiceNow', icon: '/icons/tech/servicenow.svg', category: 'ITSM', proficiency: 'expert' },
        { name: 'Jira Service Management', icon: '/icons/tech/jira.svg', category: 'ITSM', proficiency: 'expert' },
        { name: 'Freshservice', icon: '/icons/tech/freshservice.svg', category: 'ITSM', proficiency: 'advanced' },
        { name: 'Zendesk', icon: '/icons/tech/zendesk.svg', category: 'Helpdesk', proficiency: 'expert' }
      ]
    },
    {
      name: 'Infrastructure',
      description: 'High-availability infrastructure',
      technologies: [
        { name: 'AWS', icon: '/icons/tech/aws.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Azure', icon: '/icons/tech/azure.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Cloudflare', icon: '/icons/tech/cloudflare.svg', category: 'CDN', proficiency: 'expert' },
        { name: 'Kubernetes', icon: '/icons/tech/kubernetes.svg', category: 'Orchestration', proficiency: 'expert' }
      ]
    },
    {
      name: 'Communication',
      description: 'Escalation and communication',
      technologies: [
        { name: 'Slack', icon: '/icons/tech/slack.svg', category: 'Communication', proficiency: 'expert' },
        { name: 'Teams', icon: '/icons/tech/teams.svg', category: 'Communication', proficiency: 'expert' },
        { name: 'OpsGenie', icon: '/icons/tech/opsgenie.svg', category: 'On-call', proficiency: 'expert' },
        { name: 'VictorOps', icon: '/icons/tech/victorops.svg', category: 'On-call', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Standard SLA',
        description: '99.9% uptime, 1hr response',
        price: '$2,000',
        priceNote: 'per month',
        features: [
          { name: '99.9% uptime SLA', included: true },
          { name: '1-hour critical response', included: true },
          { name: '4-hour high priority', included: true },
          { name: 'Business hours support', included: true },
          { name: 'Monthly reporting', included: true },
          { name: '24/7 support', included: false },
          { name: 'Dedicated engineer', included: false },
          { name: 'On-site support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Premium SLA',
        description: '99.95% uptime, 30min response',
        price: '$5,000',
        priceNote: 'per month',
        badge: 'Most Popular',
        features: [
          { name: '99.95% uptime SLA', included: true },
          { name: '30-min critical response', included: true },
          { name: '2-hour high priority', included: true },
          { name: '24/7 support', included: true },
          { name: 'Weekly reporting', included: true },
          { name: 'Dedicated account manager', included: true },
          { name: 'Quarterly business reviews', included: true },
          { name: 'On-site support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise SLA',
        description: '99.99% uptime, 15min response',
        price: 'Custom',
        priceNote: 'based on requirements',
        features: [
          { name: '99.99% uptime SLA', included: true },
          { name: '15-min critical response', included: true },
          { name: '1-hour high priority', included: true },
          { name: '24/7 dedicated team', included: true },
          { name: 'Real-time dashboards', included: true },
          { name: 'Dedicated technical lead', included: true },
          { name: 'Executive sponsorship', included: true },
          { name: 'On-site support available', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'SLA credits provided automatically for any misses. Custom SLA terms available for enterprise.'
  },

  portfolio: [
    {
      title: 'FinTech Platform SLA',
      client: 'SecurePay Financial',
      industry: 'FinTech',
      description: 'Enterprise SLA support for payment processing platform',
      challenge: 'Needed guaranteed uptime and response for financial transactions',
      solution: '99.99% SLA with 15-minute critical response',
      results: [
        '99.995% actual uptime achieved',
        'Average critical response: 8 minutes',
        'Zero SLA breaches in 2 years',
        'Regulatory audit passed'
      ],
      metrics: [
        { label: 'Uptime', value: '99.995%' },
        { label: 'Avg Response', value: '8 min' },
        { label: 'SLA Breaches', value: '0' }
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      tags: ['FinTech', 'Enterprise SLA', '99.99%', 'Critical']
    },
    {
      title: 'Healthcare System SLA',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      description: 'SLA support for patient care management system',
      challenge: 'Healthcare system requiring guaranteed availability',
      solution: 'Premium SLA with HIPAA-compliant support',
      results: [
        'Zero system outages affecting patient care',
        '100% SLA compliance',
        'HIPAA compliance maintained',
        'Staff confidence improved'
      ],
      metrics: [
        { label: 'Patient Impact', value: 'Zero' },
        { label: 'SLA Compliance', value: '100%' },
        { label: 'Compliance', value: 'HIPAA' }
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'HIPAA', 'Premium SLA', 'Critical Systems']
    },
    {
      title: 'E-commerce Enterprise SLA',
      client: 'GlobalMart Online',
      industry: 'E-commerce',
      description: 'High-availability SLA for international e-commerce platform',
      challenge: 'Global operations requiring 24/7 guaranteed support across time zones',
      solution: 'Follow-the-sun SLA support with regional response teams',
      results: [
        '99.99% uptime maintained globally',
        'Average response time: 12 minutes',
        'Revenue protection during peak seasons',
        'Customer satisfaction score: 4.9/5'
      ],
      metrics: [
        { label: 'Global Uptime', value: '99.99%' },
        { label: 'Avg Response', value: '12 min' },
        { label: 'CSAT', value: '4.9/5' }
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Global', 'Enterprise', '24/7']
    },
    {
      title: 'Government Agency SLA',
      client: 'State Department Services',
      industry: 'Government',
      description: 'FedRAMP-compliant SLA support for citizen services portal',
      challenge: 'Critical government services requiring maximum availability and compliance',
      solution: 'Enterprise SLA with security clearance and compliance focus',
      results: [
        'Zero service disruptions to citizens',
        'FedRAMP compliance maintained',
        'All SLA targets exceeded',
        'Citizen satisfaction improved 35%'
      ],
      metrics: [
        { label: 'Service Disruptions', value: '0' },
        { label: 'Compliance', value: 'FedRAMP' },
        { label: 'Citizen Satisfaction', value: '+35%' }
      ],
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&h=600&fit=crop',
      tags: ['Government', 'FedRAMP', 'Compliance', 'Enterprise']
    }
  ],

  testimonials: [
    {
      quote: 'When you\'re processing payments, uptime isn\'t optional. Their SLA gives us the guarantees our regulators and customers demand.',
      author: 'Robert Chang',
      role: 'CTO',
      company: 'SecurePay Financial',
      rating: 5,
      location: 'New York, NY'
    },
    {
      quote: 'Patient care depends on our systems. The SLA-backed support gives us confidence that issues will be resolved immediately.',
      author: 'Dr. Sarah Mitchell',
      role: 'Chief Medical Information Officer',
      company: 'MedTech Solutions',
      rating: 5,
      location: 'Boston, MA'
    }
  ],

  faqs: [
    {
      question: 'What happens if you miss an SLA?',
      answer: 'If we miss an SLA commitment, you automatically receive service credits. Credit amounts are defined in the contract and typically range from 10-25% of monthly fees depending on severity. We proactively report misses - you don\'t need to claim them.'
    },
    {
      question: 'How do you measure uptime?',
      answer: 'We use third-party monitoring from multiple global locations to measure uptime. Uptime is calculated as (total minutes - downtime minutes) / total minutes. Scheduled maintenance windows are excluded. You have access to the same dashboards we use.'
    },
    {
      question: 'What\'s included in response time vs resolution time?',
      answer: 'Response time is when a qualified engineer begins working on your issue - not just an acknowledgment. Resolution time depends on issue complexity and isn\'t typically SLA-bound, though we target resolution within defined timeframes and keep you updated throughout.'
    },
    {
      question: 'Can we customize SLA terms?',
      answer: 'Yes, Enterprise SLAs are fully customizable. We can adjust response times, uptime targets, credit structures, coverage hours, escalation procedures, and reporting requirements to match your specific needs. Standard and Premium SLAs have fixed terms.'
    },
    {
      question: 'Do you provide SLA reporting?',
      answer: 'Yes, all SLA plans include regular reporting. Standard gets monthly reports, Premium gets weekly reports plus quarterly business reviews, Enterprise gets real-time dashboards plus detailed monthly reports and quarterly executive reviews.'
    }
  ],

  relatedServices: [
    {
      name: 'Technical Support',
      slug: 'technical-support',
      description: 'General support',
      icon: 'HeadPhones'
    },
    {
      name: 'Emergency Support',
      slug: 'emergency-support',
      description: 'Critical response',
      icon: 'AlertTriangle'
    },
    {
      name: 'Managed IT Services',
      slug: 'managed-it-services',
      description: 'Full IT management',
      icon: 'Server'
    },
    {
      name: 'Application Maintenance',
      slug: 'application-maintenance',
      description: 'App maintenance',
      icon: 'Settings'
    }
  ],

  seo: {
    title: 'SLA Support Services | Enterprise Support with Guaranteed SLAs',
    description: 'Enterprise SLA support services with guaranteed uptime and response times. 99.99% uptime, 15-minute response SLA available. Financial guarantees included.',
    keywords: [
      'sla support',
      'sla services',
      'enterprise support',
      'guaranteed support',
      'uptime sla',
      'response time sla',
      'managed sla',
      'it sla services',
      'service level agreement support',
      'enterprise sla support'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'SLA Support Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Enterprise SLA Support'
      }
    }
  }
};
