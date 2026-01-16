// Maintenance & Support - Pillar Service Data
// World-Class Content for SEO, Geo-SEO, and AI-SEO Optimization

import { ServiceData } from '@/components/services/sections';

export const maintenanceSupportData: ServiceData = {
  slug: 'maintenance-support',
  name: 'Maintenance & Support',
  tagline: 'Keep Your Software Running at Peak Performance',
  description: 'Comprehensive software maintenance, technical support, and managed services. 24/7 monitoring, proactive maintenance, and rapid incident response.',
  category: 'Support',

  hero: {
    headline: 'Software Maintenance & Support That Never Sleeps',
    subheadline: '24/7 Monitoring • Bug Fixes • Performance Optimization',
    description: 'Protect your technology investment with enterprise-grade maintenance and support services. Our dedicated teams ensure your applications stay secure, performant, and available around the clock.',
    keyFeatures: [
      '24/7/365 Monitoring',
      'Guaranteed Response Times',
      'Proactive Maintenance',
      'Security Patching',
      'Performance Optimization',
      'Dedicated Support Team'
    ],
    badges: ['99.9% Uptime SLA', 'ISO 27001', 'ITIL Certified', '15-Min Response']
  },

  painPoints: [
    {
      icon: 'AlertTriangle',
      title: 'Unexpected Downtime',
      description: 'System failures causing lost revenue, damaged reputation, and scrambling teams trying to restore services.',
      stat: '$5,600',
      statLabel: 'average cost per minute of downtime'
    },
    {
      icon: 'Shield',
      title: 'Security Vulnerabilities',
      description: 'Unpatched systems and outdated dependencies creating security holes that hackers exploit.',
      stat: '60%',
      statLabel: 'of breaches from unpatched vulnerabilities'
    },
    {
      icon: 'TrendingDown',
      title: 'Performance Degradation',
      description: 'Applications getting slower over time as data grows, affecting user experience and conversions.',
      stat: '40%',
      statLabel: 'of users abandon slow applications'
    },
    {
      icon: 'Clock',
      title: 'No After-Hours Coverage',
      description: 'Issues occurring nights and weekends with no one available, problems escalating while teams sleep.',
      stat: '35%',
      statLabel: 'of critical issues occur outside business hours'
    },
    {
      icon: 'Code',
      title: 'Technical Debt Accumulation',
      description: 'Bugs piling up, code quality declining, and future development getting harder and more expensive.',
      stat: '23-42%',
      statLabel: 'of dev time spent on technical debt'
    },
    {
      icon: 'Users',
      title: 'Lost Developer Knowledge',
      description: 'Original developers left, and no one fully understands the system anymore.',
      stat: '70%',
      statLabel: 'of legacy apps lack proper documentation'
    }
  ],

  solutions: [
    {
      icon: 'Activity',
      title: '24/7 Monitoring & Alerting',
      description: 'Continuous system monitoring with intelligent alerting. We catch issues before your users do.',
      highlights: [
        'Real-time monitoring',
        'Synthetic monitoring',
        'Performance metrics',
        'Custom dashboards',
        'Intelligent alerting'
      ]
    },
    {
      icon: 'Bug',
      title: 'Bug Fixes & Issue Resolution',
      description: 'Rapid response to bugs and issues with root cause analysis to prevent recurrence.',
      highlights: [
        'Priority-based response',
        'Root cause analysis',
        'Code fixes',
        'Regression testing',
        'Deploy verification'
      ]
    },
    {
      icon: 'Shield',
      title: 'Security Maintenance',
      description: 'Keep your software secure with regular updates, vulnerability scanning, and security patching.',
      highlights: [
        'Dependency updates',
        'Security patches',
        'Vulnerability scanning',
        'Compliance maintenance',
        'Security audits'
      ]
    },
    {
      icon: 'Zap',
      title: 'Performance Optimization',
      description: 'Ongoing performance tuning to keep your application fast as it grows.',
      highlights: [
        'Performance profiling',
        'Database optimization',
        'Caching implementation',
        'Code optimization',
        'Load testing'
      ]
    },
    {
      icon: 'Upload',
      title: 'Updates & Enhancements',
      description: 'Continuous improvement with feature updates, enhancements, and modernization.',
      highlights: [
        'Feature additions',
        'UI/UX improvements',
        'Framework updates',
        'Integration updates',
        'Refactoring'
      ]
    },
    {
      icon: 'HeadphonesIcon',
      title: 'Technical Support',
      description: 'Expert technical support for your team and users with multiple support channels.',
      highlights: [
        'Multi-channel support',
        'Tiered escalation',
        'User training',
        'Documentation',
        'Knowledge base'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'System Assessment',
        description: 'Comprehensive evaluation of your current systems to understand architecture, health, and risks.',
        duration: '1-2 weeks',
        deliverables: [
          'System documentation',
          'Health assessment',
          'Risk identification',
          'Priority roadmap'
        ]
      },
      {
        icon: 'Settings',
        title: 'Support Setup',
        description: 'Configure monitoring, alerting, access, and processes for effective ongoing support.',
        duration: '1 week',
        deliverables: [
          'Monitoring implementation',
          'Alert configuration',
          'Access provisioning',
          'Runbook creation'
        ]
      },
      {
        icon: 'BookOpen',
        title: 'Knowledge Transfer',
        description: 'Onboard our team with your systems, processes, and requirements for seamless support.',
        duration: '1-2 weeks',
        deliverables: [
          'Technical documentation',
          'Process documentation',
          'Contact protocols',
          'Escalation procedures'
        ]
      },
      {
        icon: 'Play',
        title: 'Active Support',
        description: 'Begin ongoing support with monitoring, maintenance, and incident response.',
        duration: 'Ongoing',
        deliverables: [
          '24/7 monitoring',
          'Incident response',
          'Bug fixes',
          'Regular updates'
        ]
      },
      {
        icon: 'TrendingUp',
        title: 'Proactive Maintenance',
        description: 'Regular health checks, optimization, and preventive maintenance to stay ahead of issues.',
        duration: 'Ongoing',
        deliverables: [
          'Monthly health checks',
          'Performance optimization',
          'Security updates',
          'Technical debt reduction'
        ]
      },
      {
        icon: 'FileText',
        title: 'Reporting & Review',
        description: 'Regular reporting on system health, incidents, and recommendations for improvement.',
        duration: 'Monthly',
        deliverables: [
          'Monthly reports',
          'SLA tracking',
          'Recommendations',
          'Quarterly reviews'
        ]
      }
    ],
    totalDuration: '2-4 weeks to full support coverage'
  },

  benefits: [
    {
      icon: 'Activity',
      title: 'Maximum Uptime',
      description: 'Proactive monitoring and rapid response minimize downtime and its business impact.',
      stat: '99.9',
      statSuffix: '%',
      statLabel: 'Uptime SLA guaranteed'
    },
    {
      icon: 'Shield',
      title: 'Security Confidence',
      description: 'Stay protected with regular security updates and proactive vulnerability management.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Critical patches within 24 hours'
    },
    {
      icon: 'Zap',
      title: 'Peak Performance',
      description: 'Ongoing optimization ensures your applications stay fast as data and users grow.',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Average performance improvement'
    },
    {
      icon: 'Clock',
      title: '24/7 Coverage',
      description: 'Round-the-clock monitoring and support so you can rest easy knowing experts are watching.',
      stat: '24/7',
      statSuffix: '',
      statLabel: '365 days a year'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Predictability',
      description: 'Fixed monthly costs instead of unpredictable emergency spending on issues.',
      stat: '35',
      statSuffix: '%',
      statLabel: 'Cost savings vs reactive support'
    },
    {
      icon: 'Users',
      title: 'Expert Team',
      description: 'Access to experienced engineers without the cost of full-time hires.',
      stat: '10',
      statSuffix: '+',
      statLabel: 'Years average experience'
    },
    {
      icon: 'BookOpen',
      title: 'Documentation',
      description: 'Complete system documentation maintained and updated as your systems evolve.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Documentation coverage'
    },
    {
      icon: 'TrendingUp',
      title: 'Continuous Improvement',
      description: 'Regular recommendations and implementation of improvements to your systems.',
      stat: '50',
      statSuffix: '+',
      statLabel: 'Improvements per year'
    }
  ],

  techStack: [
    {
      name: 'Monitoring Tools',
      description: 'Observability solutions',
      technologies: [
        { name: 'Datadog', category: 'APM', proficiency: 'expert' },
        { name: 'New Relic', category: 'APM', proficiency: 'expert' },
        { name: 'Prometheus', category: 'Metrics', proficiency: 'expert' },
        { name: 'Grafana', category: 'Visualization', proficiency: 'expert' },
        { name: 'PagerDuty', category: 'Incident', proficiency: 'expert' },
        { name: 'Uptime Robot', category: 'Synthetic', proficiency: 'expert' }
      ]
    },
    {
      name: 'Support Systems',
      description: 'Help desk and ticketing',
      technologies: [
        { name: 'Zendesk', category: 'Help Desk', proficiency: 'expert' },
        { name: 'Jira Service Desk', category: 'ITSM', proficiency: 'expert' },
        { name: 'Freshdesk', category: 'Help Desk', proficiency: 'advanced' },
        { name: 'Intercom', category: 'Support', proficiency: 'advanced' },
        { name: 'Confluence', category: 'Documentation', proficiency: 'expert' },
        { name: 'Notion', category: 'Knowledge Base', proficiency: 'expert' }
      ]
    },
    {
      name: 'Security Tools',
      description: 'Security and compliance',
      technologies: [
        { name: 'Snyk', category: 'Dependency', proficiency: 'expert' },
        { name: 'SonarQube', category: 'Code Quality', proficiency: 'expert' },
        { name: 'Dependabot', category: 'Updates', proficiency: 'expert' },
        { name: 'OWASP ZAP', category: 'Security', proficiency: 'advanced' },
        { name: 'Vanta', category: 'Compliance', proficiency: 'advanced' },
        { name: 'Cloudflare', category: 'WAF', proficiency: 'expert' }
      ]
    },
    {
      name: 'Development Platforms',
      description: 'Technologies we support',
      technologies: [
        { name: 'JavaScript/TypeScript', category: 'Language', proficiency: 'expert' },
        { name: 'Python', category: 'Language', proficiency: 'expert' },
        { name: 'Java/.NET', category: 'Language', proficiency: 'expert' },
        { name: 'PHP', category: 'Language', proficiency: 'expert' },
        { name: 'WordPress', category: 'CMS', proficiency: 'expert' },
        { name: 'Shopify', category: 'E-commerce', proficiency: 'expert' }
      ]
    }
  ],

  portfolio: [
    {
      title: 'Enterprise Application Support',
      client: 'Financial Services Firm',
      industry: 'Finance',
      description: 'Full-stack support for critical trading and reporting applications with strict uptime requirements.',
      challenge: 'Legacy applications with limited documentation, high availability requirements, and complex integrations.',
      solution: 'Comprehensive support program with 24/7 monitoring, documented runbooks, and proactive maintenance schedule.',
      results: [
        '99.99% uptime achieved',
        'Mean time to resolution reduced 65%',
        'Zero critical incidents in Year 2',
        'Technical debt reduced by 40%'
      ],
      metrics: [
        { label: 'Uptime', value: '99.99%' },
        { label: 'MTTR', value: '-65%' },
        { label: 'Tech Debt', value: '-40%' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Enterprise', 'Finance', '24/7 Support', 'Legacy'],
      testimonial: {
        quote: 'They transformed our support from reactive chaos to proactive excellence. Our uptime metrics are the best in years.',
        author: 'Robert Chen',
        role: 'VP Technology'
      }
    },
    {
      title: 'E-commerce Platform Support',
      client: 'High-Growth DTC Brand',
      industry: 'E-commerce',
      description: 'Managed support for Shopify Plus store handling $50M+ annual revenue with seasonal spikes.',
      challenge: 'Site stability during traffic surges, rapid feature updates needed, and security compliance requirements.',
      solution: 'Dedicated support team with proactive scaling, continuous deployment pipeline, and security monitoring.',
      results: [
        'Zero downtime during Black Friday',
        'Site speed improved 50%',
        'Monthly feature releases enabled',
        'PCI compliance maintained'
      ],
      metrics: [
        { label: 'Peak Traffic', value: '100K/hr' },
        { label: 'Speed Gain', value: '50%' },
        { label: 'Deployments', value: '50+/mo' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Shopify', 'Performance', 'Scale'],
      testimonial: {
        quote: 'Black Friday used to be stressful. Now we actually look forward to it knowing Web On Dev has everything covered.',
        author: 'Jennifer Kim',
        role: 'E-commerce Director'
      }
    },
    {
      title: 'SaaS Platform Maintenance',
      client: 'B2B Software Company',
      industry: 'Technology',
      description: 'Ongoing maintenance and support for multi-tenant SaaS platform serving 10,000+ business users.',
      challenge: 'Original development team unavailable, incomplete documentation, and growing technical debt.',
      solution: 'Reverse-engineered documentation, established support processes, and systematic debt reduction program.',
      results: [
        'Support tickets reduced 60%',
        'Release frequency increased 4x',
        'Customer satisfaction up 25 points',
        'Codebase health score: A (was D)'
      ],
      metrics: [
        { label: 'Tickets', value: '-60%' },
        { label: 'Releases', value: '4x' },
        { label: 'NPS Change', value: '+25' }
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['SaaS', 'Technical Debt', 'Documentation', 'B2B'],
      testimonial: {
        quote: 'They took over a mess and turned it into a well-oiled machine. Our platform is healthier than it\'s ever been.',
        author: 'David Park',
        role: 'CTO'
      }
    },
    {
      title: 'Healthcare System Emergency Recovery',
      client: 'Regional Hospital Network',
      industry: 'Healthcare',
      description: 'Emergency response and ongoing support for critical healthcare management systems.',
      challenge: 'Ransomware attack encrypted critical patient data systems requiring immediate recovery.',
      solution: 'Rapid incident response, system recovery from backups, security hardening, and 24/7 monitoring implementation.',
      results: [
        'Full recovery in 6 hours',
        'Zero patient data compromised',
        'Security posture dramatically improved',
        'Achieved HIPAA compliance'
      ],
      metrics: [
        { label: 'Recovery', value: '6 hours' },
        { label: 'Data Loss', value: '0' },
        { label: 'Compliance', value: 'HIPAA' }
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'Emergency', 'Security', 'Recovery'],
      testimonial: {
        quote: 'When we faced our worst nightmare, Web On Dev responded immediately and saved us. They are now our permanent support partner.',
        author: 'Dr. Amanda Foster',
        role: 'Chief Medical Information Officer'
      }
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Essential',
        description: 'Core maintenance for stable applications',
        price: '$2,500',
        priceNote: 'per month',
        features: [
          { name: 'Business hours support', included: true },
          { name: 'Monitoring setup', included: true },
          { name: 'Bug fixes (10 hours)', included: true },
          { name: 'Security updates', included: true },
          { name: 'Monthly reporting', included: true },
          { name: '24/7 support', included: false },
          { name: 'Performance optimization', included: false },
          { name: 'Feature development', included: false }
        ],
        ctaText: 'Get Started'
      },
      {
        name: 'Professional',
        description: 'Comprehensive support for business-critical apps',
        price: '$5,000',
        priceNote: 'per month',
        highlighted: true,
        badge: 'Most Popular',
        features: [
          { name: '24/7 monitoring & alerting', included: true },
          { name: '4-hour response SLA', included: true },
          { name: 'Bug fixes (25 hours)', included: true },
          { name: 'Performance optimization', included: true },
          { name: 'Security management', included: true },
          { name: 'Monthly health reviews', included: true },
          { name: 'Quarterly planning', included: true },
          { name: 'Priority escalation', included: true }
        ],
        ctaText: 'Get Started'
      },
      {
        name: 'Enterprise',
        description: 'Full managed services for mission-critical systems',
        price: '$10,000',
        priceNote: 'per month',
        features: [
          { name: 'Everything in Professional', included: true },
          { name: '1-hour response SLA', included: true },
          { name: 'Dedicated support engineer', included: true },
          { name: 'Unlimited bug fixes', included: true },
          { name: 'Feature development hours', included: true },
          { name: 'Custom SLA agreements', included: true },
          { name: 'On-call escalation', included: true },
          { name: 'Executive reporting', included: true }
        ],
        ctaText: 'Contact Us'
      }
    ],
    customNote: 'Custom plans available for complex or multi-system environments. All plans require 6-month minimum commitment.'
  },

  testimonials: [
    {
      quote: 'Our uptime went from 99.5% to 99.99%. The proactive approach catches issues before they become problems.',
      author: 'Michael Torres',
      role: 'CTO',
      company: 'SaaS Company',
      rating: 5,
      location: 'San Francisco, USA'
    },
    {
      quote: 'Having 24/7 support means I can finally sleep through the night. They handle everything professionally.',
      author: 'Sarah Chen',
      role: 'VP Engineering',
      company: 'E-commerce Brand',
      rating: 5,
      location: 'New York, USA'
    },
    {
      quote: 'They took over systems with zero documentation and within months had everything running better than ever.',
      author: 'James Wilson',
      role: 'Director of IT',
      company: 'Manufacturing Company',
      rating: 5,
      location: 'Chicago, USA'
    },
    {
      quote: 'The monthly reports and recommendations have been invaluable. They\'re not just maintaining – they\'re improving.',
      author: 'Jennifer Foster',
      role: 'Product Manager',
      company: 'Healthcare Startup',
      rating: 5,
      location: 'Boston, USA'
    }
  ],

  faqs: [
    {
      question: 'What systems and technologies do you support?',
      answer: 'We support virtually all modern web technologies including JavaScript/TypeScript, Python, Java, .NET, PHP, and more. We also support popular platforms like WordPress, Shopify, WooCommerce, and custom applications. Our team has expertise across cloud platforms (AWS, Azure, GCP) and databases.',
      category: 'Technologies'
    },
    {
      question: 'What\'s included in your monitoring?',
      answer: 'Our monitoring covers uptime, performance metrics, error rates, security events, and business KPIs. We set up custom dashboards, configure intelligent alerting to avoid noise, and provide real-time visibility into system health.',
      category: 'Services'
    },
    {
      question: 'How quickly do you respond to issues?',
      answer: 'Response times depend on your plan and issue severity. Critical issues get 15-minute to 1-hour response times. Our Professional and Enterprise plans include 24/7 coverage for round-the-clock protection.',
      category: 'SLAs'
    },
    {
      question: 'What if I need more development hours?',
      answer: 'Included hours can be supplemented with additional hours at contracted rates. For significant feature work, we can scope those as separate projects. We\'ll always communicate proactively about hour usage.',
      category: 'Services'
    },
    {
      question: 'Can you take over a system with no documentation?',
      answer: 'Yes, this is common. We begin with a discovery phase to reverse-engineer documentation and understand your systems. This knowledge transfer process is included and essential for effective ongoing support.',
      category: 'Onboarding'
    },
    {
      question: 'What happens during a critical incident?',
      answer: 'Our incident response follows ITIL best practices. We acknowledge immediately, begin diagnosis, communicate updates regularly, implement fixes, verify resolution, and conduct post-incident reviews to prevent recurrence.',
      category: 'Process'
    },
    {
      question: 'Do you provide reports on system health?',
      answer: 'Yes, all plans include monthly reports covering uptime, incidents, work completed, and recommendations. Professional and Enterprise plans include quarterly strategic reviews with your team.',
      category: 'Reporting'
    },
    {
      question: 'What\'s the minimum commitment?',
      answer: 'We require a 6-month minimum commitment. Support relationships work best when we have time to truly understand your systems and demonstrate value. After 6 months, you can adjust or cancel with 30 days notice.',
      category: 'Contracts'
    }
  ],

  relatedServices: [
    {
      name: 'Cloud & DevOps',
      slug: '/cloud-devops',
      description: 'Infrastructure modernization and management',
      icon: 'Cloud'
    },
    {
      name: 'Software Development',
      slug: '/software-development',
      description: 'New feature development and enhancements',
      icon: 'Code'
    },
    {
      name: 'Consulting & Strategy',
      slug: '/consulting-strategy',
      description: 'Technology assessment and planning',
      icon: 'Lightbulb'
    },
    {
      name: 'Outsourcing Services',
      slug: '/outsourcing-services',
      description: 'Dedicated teams for ongoing development',
      icon: 'Users'
    }
  ],

  seo: {
    title: 'Software Maintenance & Support Services | 24/7 Support - Web On Dev',
    description: 'Professional software maintenance and support services. 24/7 monitoring, bug fixes, security patching, and performance optimization. 99.9% uptime SLA guaranteed.',
    keywords: [
      'software maintenance services',
      'application support services',
      'IT support services',
      '24/7 technical support',
      'software maintenance and support',
      'application maintenance',
      'managed IT services',
      'website maintenance',
      'legacy application support',
      'software support company'
    ]
  }
};
