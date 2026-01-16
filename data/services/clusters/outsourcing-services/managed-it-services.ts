// Managed IT Services Data
import { ServiceData } from '@/components/services/sections';

export const managedItServicesData: ServiceData = {
  name: 'Managed IT Services',
  slug: 'managed-it-services',
  tagline: 'Complete IT management, completely handled',
  category: 'Outsourcing Services',
  description: 'Let us manage your entire IT infrastructure so you can focus on your business. Our managed IT services provide proactive monitoring, maintenance, security, and support for all your technology needs.',

  hero: {
    headline: 'Managed IT Services',
    subheadline: 'Your IT Department, Outsourced',
    description: 'Get enterprise-grade IT management without building an internal team. Our managed services provide proactive care for your entire technology stack, from servers to security, with predictable monthly costs.',
    keyFeatures: [
      'Complete IT management',
      'Proactive monitoring',
      'Security management',
      'Cloud services',
      'Predictable costs',
      'Strategic guidance'
    ],
    badges: ['24/7 Monitoring', 'SOC 2 Compliant', '99.9% Uptime', 'Fortune 500 Clients']
  },

  painPoints: [
    {
      icon: 'Users',
      title: 'IT Staff Limitations',
      description: 'Small IT team can\'t cover all needs',
      stat: '65%',
      statLabel: 'IT teams understaffed'
    },
    {
      icon: 'Shield',
      title: 'Security Concerns',
      description: 'Increasing threats with limited security expertise',
      stat: '43%',
      statLabel: 'SMBs hit by cyberattacks'
    },
    {
      icon: 'DollarSign',
      title: 'Unpredictable Costs',
      description: 'IT emergencies causing budget overruns',
      stat: '40%',
      statLabel: 'Budget for emergencies'
    },
    {
      icon: 'TrendingDown',
      title: 'Reactive Firefighting',
      description: 'Constantly fixing problems instead of preventing them',
      stat: '70%',
      statLabel: 'Time on reactive work'
    }
  ],

  solutions: [
    {
      icon: 'Activity',
      title: 'Proactive Monitoring',
      description: '24/7 monitoring to prevent issues before they impact you',
      highlights: [
        'Real-time monitoring',
        'Automated alerts',
        'Performance tracking',
        'Capacity planning'
      ]
    },
    {
      icon: 'Shield',
      title: 'Security Management',
      description: 'Comprehensive security to protect your business',
      highlights: [
        'Endpoint protection',
        'Patch management',
        'Threat detection',
        'Security assessments'
      ]
    },
    {
      icon: 'Cloud',
      title: 'Cloud Services',
      description: 'Cloud infrastructure management and optimization',
      highlights: [
        'Cloud migration',
        'Azure/AWS/GCP management',
        'Microsoft 365',
        'Backup & recovery'
      ]
    },
    {
      icon: 'HeadPhones',
      title: 'Help Desk',
      description: 'Responsive support for all your users',
      highlights: [
        'User support',
        'Issue resolution',
        'Request fulfillment',
        'Onboarding/offboarding'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'IT Assessment',
        description: 'Comprehensive review of your IT environment',
        duration: 'Week 1-2',
        deliverables: [
          'Infrastructure audit',
          'Security assessment',
          'Gap analysis',
          'Recommendations'
        ]
      },
      {
        icon: 'FileText',
        title: 'Service Design',
        description: 'Design managed service program for your needs',
        duration: 'Week 2-3',
        deliverables: [
          'Service catalog',
          'SLA definition',
          'Security policies',
          'Pricing proposal'
        ]
      },
      {
        icon: 'Settings',
        title: 'Onboarding',
        description: 'Deploy tools and integrate with your environment',
        duration: 'Week 3-6',
        deliverables: [
          'Tool deployment',
          'Documentation',
          'Process setup',
          'Team training'
        ]
      },
      {
        icon: 'Activity',
        title: 'Managed Operations',
        description: 'Ongoing IT management and optimization',
        duration: 'Ongoing',
        deliverables: [
          'Continuous monitoring',
          'Regular maintenance',
          'Security updates',
          'Quarterly reviews'
        ]
      }
    ],
    totalDuration: '4-6 weeks to full management'
  },

  benefits: [
    {
      icon: 'Activity',
      title: 'Uptime',
      description: 'Reliable systems, always available',
      stat: '99.9',
      statSuffix: '%',
      statLabel: 'Uptime guarantee'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Savings',
      description: 'Predictable IT spending',
      stat: '30',
      statSuffix: '%',
      statLabel: 'IT cost reduction'
    },
    {
      icon: 'Shield',
      title: 'Security',
      description: 'Enterprise-grade protection',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Security coverage'
    },
    {
      icon: 'TrendingUp',
      title: 'Productivity',
      description: 'Focus on business, not IT',
      stat: '45',
      statSuffix: '%',
      statLabel: 'More productive'
    }
  ],

  techStack: [
    {
      name: 'RMM Platforms',
      description: 'Remote monitoring and management',
      technologies: [
        { name: 'ConnectWise', icon: '/icons/tech/connectwise.svg', category: 'RMM', proficiency: 'expert' },
        { name: 'Datto', icon: '/icons/tech/datto.svg', category: 'RMM', proficiency: 'expert' },
        { name: 'NinjaRMM', icon: '/icons/tech/ninjarmm.svg', category: 'RMM', proficiency: 'expert' },
        { name: 'Atera', icon: '/icons/tech/atera.svg', category: 'RMM', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Security Tools',
      description: 'Security and compliance',
      technologies: [
        { name: 'CrowdStrike', icon: '/icons/tech/crowdstrike.svg', category: 'EDR', proficiency: 'expert' },
        { name: 'SentinelOne', icon: '/icons/tech/sentinelone.svg', category: 'EDR', proficiency: 'expert' },
        { name: 'Defender', icon: '/icons/tech/microsoft.svg', category: 'Security', proficiency: 'expert' },
        { name: 'Proofpoint', icon: '/icons/tech/proofpoint.svg', category: 'Email Security', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Cloud Platforms',
      description: 'Cloud management',
      technologies: [
        { name: 'Microsoft 365', icon: '/icons/tech/microsoft.svg', category: 'Productivity', proficiency: 'expert' },
        { name: 'Azure', icon: '/icons/tech/azure.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'AWS', icon: '/icons/tech/aws.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Google Workspace', icon: '/icons/tech/google.svg', category: 'Productivity', proficiency: 'expert' }
      ]
    },
    {
      name: 'Backup & Recovery',
      description: 'Data protection',
      technologies: [
        { name: 'Veeam', icon: '/icons/tech/veeam.svg', category: 'Backup', proficiency: 'expert' },
        { name: 'Datto BCDR', icon: '/icons/tech/datto.svg', category: 'BCDR', proficiency: 'expert' },
        { name: 'Acronis', icon: '/icons/tech/acronis.svg', category: 'Backup', proficiency: 'advanced' },
        { name: 'Druva', icon: '/icons/tech/druva.svg', category: 'Backup', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Essential',
        description: 'Core IT management',
        price: '$75',
        priceNote: 'per user/month',
        features: [
          { name: '24/7 monitoring', included: true },
          { name: 'Help desk support', included: true },
          { name: 'Patch management', included: true },
          { name: 'Basic security', included: true },
          { name: 'Cloud backup', included: true },
          { name: 'Advanced security', included: false },
          { name: 'vCIO services', included: false },
          { name: 'Compliance support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Professional',
        description: 'Comprehensive management',
        price: '$125',
        priceNote: 'per user/month',
        badge: 'Most Popular',
        features: [
          { name: '24/7 monitoring', included: true },
          { name: 'Priority help desk', included: true },
          { name: 'Full patch management', included: true },
          { name: 'Advanced security (EDR)', included: true },
          { name: 'BCDR solution', included: true },
          { name: 'Microsoft 365 management', included: true },
          { name: 'Quarterly reviews', included: true },
          { name: 'vCIO services', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Full IT partnership',
        price: 'Custom',
        priceNote: 'based on requirements',
        features: [
          { name: '24/7 monitoring + NOC', included: true },
          { name: 'Dedicated team', included: true },
          { name: 'Enterprise security', included: true },
          { name: 'Compliance (SOC2, HIPAA)', included: true },
          { name: 'Enterprise BCDR', included: true },
          { name: 'Cloud management', included: true },
          { name: 'vCIO services', included: true },
          { name: 'On-site support', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Minimum 20 users. Server and network management priced separately.'
  },

  portfolio: [
    {
      title: 'Law Firm IT Management',
      client: 'Patterson Legal Group',
      industry: 'Legal',
      description: 'Full managed IT services for 150-attorney law firm',
      challenge: 'Outdated IT, security concerns, and compliance requirements',
      solution: 'Complete IT transformation with security focus',
      results: [
        'Zero security incidents in 2 years',
        'IT support tickets reduced 65%',
        'Achieved compliance certifications',
        'IT costs reduced 25%'
      ],
      metrics: [
        { label: 'Security Incidents', value: '0' },
        { label: 'Ticket Reduction', value: '65%' },
        { label: 'Cost Savings', value: '25%' }
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      tags: ['Legal', 'Compliance', 'Security', '150 Users']
    },
    {
      title: 'Healthcare IT Services',
      client: 'Regional Medical Associates',
      industry: 'Healthcare',
      description: 'HIPAA-compliant managed IT for multi-location medical practice',
      challenge: 'Managing IT across 12 locations while maintaining HIPAA compliance',
      solution: 'Centralized managed IT with healthcare-specific security',
      results: [
        'HIPAA compliance achieved and maintained',
        'System uptime improved to 99.95%',
        'Standardized IT across all locations',
        'EHR performance improved 40%'
      ],
      metrics: [
        { label: 'Compliance', value: 'HIPAA' },
        { label: 'Uptime', value: '99.95%' },
        { label: 'Locations', value: '12' }
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'HIPAA', 'Multi-Location', 'Compliance']
    },
    {
      title: 'Manufacturing IT Infrastructure',
      client: 'PrecisionMfg Industries',
      industry: 'Manufacturing',
      description: 'Managed IT services for manufacturing company with OT integration',
      challenge: 'IT/OT convergence with 24/7 production requirements',
      solution: 'Implemented managed services with manufacturing expertise',
      results: [
        'Production systems uptime 99.99%',
        'IT/OT security implemented',
        'Remote monitoring for all facilities',
        'IT response time under 10 minutes'
      ],
      metrics: [
        { label: 'Uptime', value: '99.99%' },
        { label: 'Response', value: '<10 min' },
        { label: 'Facilities', value: '5' }
      ],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      tags: ['Manufacturing', 'OT Security', '24/7', 'Industrial']
    },
    {
      title: 'Financial Services MSP',
      client: 'WealthAdvisors Group',
      industry: 'Financial Services',
      description: 'SOC 2 compliant managed IT for wealth management firm',
      challenge: 'High security requirements with complex compliance needs',
      solution: 'Enterprise-grade managed IT with financial services focus',
      results: [
        'SOC 2 Type II certification achieved',
        'Zero security breaches in 3 years',
        'Passed all regulatory audits',
        'Client data protection enhanced'
      ],
      metrics: [
        { label: 'Compliance', value: 'SOC 2' },
        { label: 'Breaches', value: '0' },
        { label: 'Audits Passed', value: '100%' }
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      tags: ['Financial Services', 'SOC 2', 'Wealth Management', 'Security']
    }
  ],

  testimonials: [
    {
      quote: 'We went from constant IT fires to zero incidents. They manage everything and we focus on practicing law.',
      author: 'David Patterson',
      role: 'Managing Partner',
      company: 'Patterson Legal Group',
      rating: 5,
      location: 'Philadelphia, PA'
    },
    {
      quote: 'HIPAA compliance used to keep me up at night. Now I sleep well knowing our IT is properly managed.',
      author: 'Dr. Sarah Collins',
      role: 'Practice Administrator',
      company: 'Regional Medical Associates',
      rating: 5,
      location: 'Columbus, OH'
    }
  ],

  faqs: [
    {
      question: 'What does managed IT services include?',
      answer: 'Our managed IT services include 24/7 monitoring, help desk support, security management (antivirus, EDR, patching), backup and disaster recovery, cloud services management, network management, and strategic IT guidance. We effectively become your IT department.'
    },
    {
      question: 'How is pricing structured?',
      answer: 'We offer per-user monthly pricing which includes workstations and cloud services. Servers, network equipment, and specialized systems are priced separately. This model provides predictable monthly costs and scales with your business.'
    },
    {
      question: 'Can you handle compliance requirements?',
      answer: 'Yes, we support compliance with HIPAA, SOC 2, PCI-DSS, GDPR, and industry-specific regulations. Our services include security controls, documentation, audit support, and continuous compliance monitoring to help you meet and maintain requirements.'
    },
    {
      question: 'What if we have existing IT staff?',
      answer: 'We work alongside existing IT staff in a co-managed model. We can handle day-to-day operations and monitoring while your team focuses on strategic projects, or divide responsibilities based on expertise. Many clients find this model highly effective.'
    },
    {
      question: 'How do you handle emergencies?',
      answer: 'Our 24/7 monitoring detects issues proactively, often before users notice. When emergencies do occur, our team responds immediately based on severity. Critical issues get same-hour response. We maintain comprehensive disaster recovery plans for worst-case scenarios.'
    }
  ],

  relatedServices: [
    {
      name: 'IT Helpdesk Outsourcing',
      slug: 'it-helpdesk-outsourcing',
      description: 'Support services',
      icon: 'HeadPhones'
    },
    {
      name: 'Cloud Infrastructure',
      slug: 'cloud-infrastructure',
      description: 'Cloud services',
      icon: 'Cloud'
    },
    {
      name: 'DevOps Outsourcing',
      slug: 'devops-outsourcing',
      description: 'DevOps services',
      icon: 'Settings'
    },
    {
      name: 'Cloud Security',
      slug: 'cloud-security',
      description: 'Security services',
      icon: 'Shield'
    }
  ],

  seo: {
    title: 'Managed IT Services | Managed Service Provider (MSP)',
    description: 'Complete managed IT services for your business. 24/7 monitoring, security, cloud management, help desk. 99.9% uptime guarantee. Reduce IT costs 30%.',
    keywords: [
      'managed it services',
      'managed service provider',
      'msp services',
      'it managed services',
      'outsourced it services',
      'it management services',
      'managed it support',
      'managed technology services',
      'it outsourcing services',
      'managed services provider'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Managed IT Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Managed Service Provider'
      }
    }
  }
};
