// Legacy System Support Service Data
import { ServiceData } from '@/components/services/sections';

export const legacySystemSupportData: ServiceData = {
  name: 'Legacy System Support',
  slug: 'legacy-system-support',
  tagline: 'Keep your legacy systems running strong',
  category: 'Maintenance & Support',
  description: 'Professional support for legacy systems that your business still depends on. We maintain, update, and extend the life of older applications while planning smooth transitions to modern platforms.',

  hero: {
    headline: 'Legacy System Support',
    subheadline: 'Expertise for Your Critical Legacy Applications',
    description: 'Your legacy systems are still business-critical. Our legacy support specialists keep older applications running reliably while helping you plan for the future - whether that\'s maintenance, modernization, or migration.',
    keyFeatures: [
      'Legacy technology expertise',
      'Maintenance & bug fixes',
      'Security updates',
      'Integration support',
      'Modernization planning',
      'Knowledge documentation'
    ],
    badges: ['20+ Years Experience', 'All Legacy Platforms', 'Security Focus', 'Modernization Path']
  },

  painPoints: [
    {
      icon: 'Users',
      title: 'Lost Expertise',
      description: 'Original developers retired or left',
      stat: '70%',
      statLabel: 'Lost legacy knowledge'
    },
    {
      icon: 'AlertTriangle',
      title: 'Security Vulnerabilities',
      description: 'Old systems with unpatched vulnerabilities',
      stat: '85%',
      statLabel: 'Have security gaps'
    },
    {
      icon: 'RefreshCw',
      title: 'Integration Challenges',
      description: 'Legacy systems can\'t connect to modern tools',
      stat: '60%',
      statLabel: 'Face integration issues'
    },
    {
      icon: 'DollarSign',
      title: 'High Maintenance Costs',
      description: 'Specialized skills command premium rates',
      stat: '3x',
      statLabel: 'Higher support costs'
    }
  ],

  solutions: [
    {
      icon: 'Wrench',
      title: 'Ongoing Maintenance',
      description: 'Keep legacy systems running reliably',
      highlights: [
        'Bug fixes',
        'Performance tuning',
        'Database maintenance',
        'System monitoring'
      ]
    },
    {
      icon: 'Shield',
      title: 'Security Updates',
      description: 'Protect legacy systems from modern threats',
      highlights: [
        'Vulnerability assessment',
        'Security hardening',
        'Compliance support',
        'Penetration testing'
      ]
    },
    {
      icon: 'GitMerge',
      title: 'Integration Support',
      description: 'Connect legacy systems to modern platforms',
      highlights: [
        'API development',
        'Data integration',
        'Middleware',
        'Bridge solutions'
      ]
    },
    {
      icon: 'TrendingUp',
      title: 'Modernization Path',
      description: 'Plan the future of your legacy systems',
      highlights: [
        'Assessment & planning',
        'Phased migration',
        'Parallel running',
        'Knowledge transfer'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Discovery',
        description: 'Understand your legacy environment',
        duration: 'Week 1-2',
        deliverables: [
          'System inventory',
          'Architecture review',
          'Risk assessment',
          'Documentation gaps'
        ]
      },
      {
        icon: 'FileText',
        title: 'Documentation',
        description: 'Capture system knowledge',
        duration: 'Week 2-4',
        deliverables: [
          'System documentation',
          'Process flows',
          'Data dictionaries',
          'Runbooks'
        ]
      },
      {
        icon: 'Settings',
        title: 'Stabilization',
        description: 'Address immediate issues',
        duration: 'Week 4-8',
        deliverables: [
          'Critical fixes',
          'Security updates',
          'Monitoring setup',
          'Backup verification'
        ]
      },
      {
        icon: 'Activity',
        title: 'Ongoing Support',
        description: 'Continuous maintenance and improvement',
        duration: 'Ongoing',
        deliverables: [
          'Regular maintenance',
          'Issue resolution',
          'Enhancement requests',
          'Modernization planning'
        ]
      }
    ],
    totalDuration: '4-8 weeks to stable support'
  },

  benefits: [
    {
      icon: 'Activity',
      title: 'Reliability',
      description: 'Stable, reliable systems',
      stat: '99.5',
      statSuffix: '%',
      statLabel: 'Uptime maintained'
    },
    {
      icon: 'Shield',
      title: 'Security',
      description: 'Protected legacy systems',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Security coverage'
    },
    {
      icon: 'FileText',
      title: 'Documentation',
      description: 'Complete system knowledge',
      stat: 'Full',
      statSuffix: '',
      statLabel: 'Documentation'
    },
    {
      icon: 'TrendingUp',
      title: 'Future-Ready',
      description: 'Modernization roadmap',
      stat: 'Clear',
      statSuffix: '',
      statLabel: 'Path forward'
    }
  ],

  techStack: [
    {
      name: 'Legacy Languages',
      description: 'Classic programming languages',
      technologies: [
        { name: 'COBOL', icon: '/icons/tech/cobol.svg', category: 'Mainframe', proficiency: 'expert' },
        { name: 'Visual Basic', icon: '/icons/tech/vb.svg', category: 'Desktop', proficiency: 'expert' },
        { name: 'Classic ASP', icon: '/icons/tech/asp.svg', category: 'Web', proficiency: 'expert' },
        { name: 'Delphi', icon: '/icons/tech/delphi.svg', category: 'Desktop', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Legacy Databases',
      description: 'Older database systems',
      technologies: [
        { name: 'Oracle', icon: '/icons/tech/oracle.svg', category: 'Enterprise', proficiency: 'expert' },
        { name: 'SQL Server', icon: '/icons/tech/sqlserver.svg', category: 'Enterprise', proficiency: 'expert' },
        { name: 'DB2', icon: '/icons/tech/db2.svg', category: 'Mainframe', proficiency: 'advanced' },
        { name: 'Progress', icon: '/icons/tech/progress.svg', category: 'Legacy', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Legacy Platforms',
      description: 'Legacy application platforms',
      technologies: [
        { name: 'AS/400', icon: '/icons/tech/ibm.svg', category: 'IBM', proficiency: 'advanced' },
        { name: '.NET Framework', icon: '/icons/tech/dotnet.svg', category: 'Microsoft', proficiency: 'expert' },
        { name: 'ColdFusion', icon: '/icons/tech/coldfusion.svg', category: 'Web', proficiency: 'expert' },
        { name: 'Lotus Notes', icon: '/icons/tech/lotus.svg', category: 'IBM', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Integration',
      description: 'Legacy integration tools',
      technologies: [
        { name: 'MuleSoft', icon: '/icons/tech/mulesoft.svg', category: 'ESB', proficiency: 'expert' },
        { name: 'Dell Boomi', icon: '/icons/tech/boomi.svg', category: 'iPaaS', proficiency: 'advanced' },
        { name: 'BizTalk', icon: '/icons/tech/biztalk.svg', category: 'Microsoft', proficiency: 'expert' },
        { name: 'IBM MQ', icon: '/icons/tech/ibm.svg', category: 'Messaging', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Essential',
        description: 'Basic legacy support',
        price: '$3,000',
        priceNote: 'per month',
        features: [
          { name: '20 support hours/month', included: true },
          { name: 'Bug fixes', included: true },
          { name: 'Critical security patches', included: true },
          { name: 'System monitoring', included: true },
          { name: 'Monthly reporting', included: true },
          { name: 'Enhancements', included: false },
          { name: 'Integration support', included: false },
          { name: 'Modernization planning', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Professional',
        description: 'Comprehensive support',
        price: '$6,000',
        priceNote: 'per month',
        badge: 'Most Popular',
        features: [
          { name: '40 support hours/month', included: true },
          { name: 'All Essential features', included: true },
          { name: 'Minor enhancements', included: true },
          { name: 'Integration support', included: true },
          { name: 'Documentation updates', included: true },
          { name: 'Quarterly reviews', included: true },
          { name: 'Modernization assessment', included: true },
          { name: 'On-call support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Full legacy partnership',
        price: 'Custom',
        priceNote: 'based on requirements',
        features: [
          { name: 'Unlimited support', included: true },
          { name: 'All Professional features', included: true },
          { name: 'Feature development', included: true },
          { name: 'Full integration support', included: true },
          { name: '24/7 on-call support', included: true },
          { name: 'Modernization roadmap', included: true },
          { name: 'Dedicated team', included: true },
          { name: 'Migration support', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Initial assessment required for accurate scoping. Multi-system discounts available.'
  },

  portfolio: [
    {
      title: 'COBOL Banking System',
      client: 'Regional Credit Union',
      industry: 'Banking',
      description: 'Ongoing support for critical COBOL-based core banking system',
      challenge: 'No internal COBOL expertise after retirements, system critical to operations',
      solution: 'Took over maintenance with documentation and modernization planning',
      results: [
        'Zero system outages in 3 years',
        'All compliance requirements met',
        'Integration with modern web banking',
        'Phased modernization underway'
      ],
      metrics: [
        { label: 'Outages', value: '0' },
        { label: 'Compliance', value: '100%' },
        { label: 'Duration', value: '3+ years' }
      ],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      tags: ['Banking', 'COBOL', 'Mainframe', 'Critical Systems']
    },
    {
      title: 'Manufacturing ERP Support',
      client: 'Industrial Manufacturing Co',
      industry: 'Manufacturing',
      description: 'Support for legacy Progress-based ERP system',
      challenge: 'Custom ERP critical to operations, vendor no longer supporting',
      solution: 'Full takeover of support with modern integrations',
      results: [
        'System stabilized after frequent failures',
        'Modern reporting via API integration',
        'Performance improved 50%',
        'Transition to modern ERP planned'
      ],
      metrics: [
        { label: 'Stability', value: '99.9%' },
        { label: 'Performance', value: '+50%' },
        { label: 'Integrations', value: 'Modern API' }
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['Manufacturing', 'ERP', 'Progress', 'Integration']
    },
    {
      title: 'Classic ASP Government Portal',
      client: 'County Services Department',
      industry: 'Government',
      description: 'Maintaining Classic ASP application for citizen services',
      challenge: 'Critical citizen portal with no available Classic ASP developers',
      solution: 'Expert legacy support with gradual modernization approach',
      results: [
        'Portal availability maintained at 99.95%',
        'Security vulnerabilities addressed',
        'Modern API layer added for mobile access',
        'Migration roadmap created'
      ],
      metrics: [
        { label: 'Availability', value: '99.95%' },
        { label: 'Security Issues', value: 'Resolved' },
        { label: 'Mobile Access', value: 'Enabled' }
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      tags: ['Government', 'Classic ASP', 'Legacy', 'Modernization']
    },
    {
      title: 'Insurance Claims System',
      client: 'Heritage Insurance Group',
      industry: 'Insurance',
      description: 'Supporting Visual Basic 6 claims processing system',
      challenge: 'Business-critical VB6 application with no internal expertise',
      solution: 'Comprehensive support with integration to modern systems',
      results: [
        'Claims processing uninterrupted',
        'Integration with modern CRM completed',
        'Performance optimized by 40%',
        'Parallel development of replacement system'
      ],
      metrics: [
        { label: 'Uptime', value: '99.9%' },
        { label: 'Performance', value: '+40%' },
        { label: 'Integration', value: 'Complete' }
      ],
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&h=600&fit=crop',
      tags: ['Insurance', 'VB6', 'Legacy', 'Integration']
    }
  ],

  testimonials: [
    {
      quote: 'When our COBOL experts retired, we thought we were in trouble. This team seamlessly took over and has kept our core banking running perfectly.',
      author: 'James Morrison',
      role: 'CIO',
      company: 'Regional Credit Union',
      rating: 5,
      location: 'Minneapolis, MN'
    },
    {
      quote: 'Our vendor abandoned our ERP system, but we can\'t just shut down manufacturing. They gave our legacy system a new lease on life.',
      author: 'Patricia Walker',
      role: 'IT Director',
      company: 'Industrial Manufacturing Co',
      rating: 5,
      location: 'Cleveland, OH'
    }
  ],

  faqs: [
    {
      question: 'What legacy technologies do you support?',
      answer: 'We support a wide range of legacy technologies including COBOL, Visual Basic, Classic ASP, ColdFusion, Progress, Delphi, older .NET Framework versions, and more. We also support legacy databases like Oracle, DB2, Progress, and older SQL Server versions. Contact us if you\'re unsure about your specific technology.'
    },
    {
      question: 'Can you support systems with no documentation?',
      answer: 'Yes, we frequently work with poorly-documented or undocumented systems. We start by reverse-engineering the system to understand its architecture and logic, then create documentation as we go. This documentation becomes valuable for ongoing support and eventual modernization.'
    },
    {
      question: 'How do you keep legacy systems secure?',
      answer: 'We implement defense-in-depth strategies for legacy systems: network segmentation, web application firewalls, intrusion detection, regular vulnerability assessments, and compensating controls where direct patching isn\'t possible. We also maintain awareness of emerging threats targeting legacy platforms.'
    },
    {
      question: 'Can you integrate legacy systems with modern applications?',
      answer: 'Yes, we specialize in building integration layers that allow legacy systems to communicate with modern applications. This includes API development, middleware solutions, data bridges, and real-time integrations. Many clients extend their legacy investments through strategic integration.'
    },
    {
      question: 'Do you help with modernization planning?',
      answer: 'Absolutely. While maintaining your legacy systems, we can assess modernization options and help plan transitions. This includes evaluating modern alternatives, planning phased migrations, and ensuring business continuity during transitions. The goal is always a smooth path forward.'
    }
  ],

  relatedServices: [
    {
      name: 'Application Maintenance',
      slug: 'application-maintenance',
      description: 'App maintenance',
      icon: 'Settings'
    },
    {
      name: 'Technical Support',
      slug: 'technical-support',
      description: 'Technical help',
      icon: 'HeadPhones'
    },
    {
      name: 'Security Updates',
      slug: 'security-updates',
      description: 'Security management',
      icon: 'Shield'
    },
    {
      name: 'Custom Software Development',
      slug: 'custom-software-development',
      description: 'Modern development',
      icon: 'Code'
    }
  ],

  seo: {
    title: 'Legacy System Support | Legacy Application Maintenance',
    description: 'Professional legacy system support services. COBOL, VB, Classic ASP, and more. Keep critical systems running while planning modernization. Expert legacy developers.',
    keywords: [
      'legacy system support',
      'legacy application maintenance',
      'legacy software support',
      'cobol support',
      'legacy system modernization',
      'legacy system integration',
      'legacy database support',
      'legacy application support',
      'mainframe support',
      'legacy technology experts'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Legacy System Support',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Legacy Application Maintenance'
      }
    }
  }
};
