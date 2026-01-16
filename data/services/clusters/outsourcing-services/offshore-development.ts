// Offshore Development Service Data
import { ServiceData } from '@/components/services/sections';

export const offshoreDevelopmentData: ServiceData = {
  name: 'Offshore Development',
  slug: 'offshore-development',
  tagline: 'World-class development at competitive rates',
  category: 'Outsourcing Services',
  description: 'Access global talent with offshore development services. We provide skilled development teams from cost-effective locations without compromising on quality, delivering significant savings while maintaining high standards.',

  hero: {
    headline: 'Offshore Development Services',
    subheadline: 'Global Talent, Local Quality',
    description: 'Leverage the global talent market with offshore development. Our offshore centers provide world-class engineers at competitive rates, combining cost efficiency with rigorous quality standards and seamless collaboration.',
    keyFeatures: [
      '40-60% cost savings',
      'World-class engineering talent',
      'Dedicated project managers',
      '24/7 development capability',
      'Rigorous quality standards',
      'Cultural alignment training'
    ],
    badges: ['Global Delivery', 'ISO 27001', 'CMMI Level 3', '15+ Years Experience']
  },

  painPoints: [
    {
      icon: 'DollarSign',
      title: 'High Development Costs',
      description: 'Local development costs consuming too much of the budget',
      stat: '$150K+',
      statLabel: 'Avg US developer cost'
    },
    {
      icon: 'Users',
      title: 'Talent Scarcity',
      description: 'Can\'t find enough qualified developers locally',
      stat: '1.4M',
      statLabel: 'Developer shortage'
    },
    {
      icon: 'AlertTriangle',
      title: 'Quality Concerns',
      description: 'Past offshore experiences with quality issues',
      stat: '50%',
      statLabel: 'Report quality issues'
    },
    {
      icon: 'Globe',
      title: 'Timezone Challenges',
      description: 'Difficulty collaborating across different timezones',
      stat: '12hrs',
      statLabel: 'Typical time difference'
    }
  ],

  solutions: [
    {
      icon: 'DollarSign',
      title: 'Cost Optimization',
      description: 'Significant cost savings without quality compromise',
      highlights: [
        '40-60% cost reduction',
        'Transparent pricing',
        'No hidden costs',
        'Predictable budgets'
      ]
    },
    {
      icon: 'CheckCircle',
      title: 'Quality Assurance',
      description: 'Rigorous processes ensure consistent high quality',
      highlights: [
        'ISO 27001 certified',
        'CMMI Level 3 processes',
        'Code review standards',
        'Automated testing'
      ]
    },
    {
      icon: 'Clock',
      title: 'Timezone Management',
      description: 'Overlap hours and async processes for seamless collaboration',
      highlights: [
        '4-6 hour overlap',
        'Async communication',
        'Clear handoffs',
        'Flexible schedules'
      ]
    },
    {
      icon: 'Users',
      title: 'Cultural Alignment',
      description: 'Teams trained in Western business culture and communication',
      highlights: [
        'Cultural training',
        'Communication coaching',
        'Business alignment',
        'Client-first mindset'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Discovery',
        description: 'Understand requirements and design optimal offshore model',
        duration: 'Week 1',
        deliverables: [
          'Requirements analysis',
          'Team structure design',
          'Engagement model',
          'Communication plan'
        ]
      },
      {
        icon: 'Users',
        title: 'Team Setup',
        description: 'Build and onboard dedicated offshore team',
        duration: 'Week 2-4',
        deliverables: [
          'Team selection',
          'Infrastructure setup',
          'Process alignment',
          'Tool configuration'
        ]
      },
      {
        icon: 'Play',
        title: 'Pilot Phase',
        description: 'Start with pilot project to establish working rhythm',
        duration: 'Week 4-8',
        deliverables: [
          'Pilot execution',
          'Process refinement',
          'Communication tuning',
          'Quality validation'
        ]
      },
      {
        icon: 'TrendingUp',
        title: 'Steady State',
        description: 'Scale and optimize for long-term delivery',
        duration: 'Ongoing',
        deliverables: [
          'Full delivery',
          'Continuous improvement',
          'Scale as needed',
          'Performance reviews'
        ]
      }
    ],
    totalDuration: '4-6 weeks to full delivery'
  },

  benefits: [
    {
      icon: 'DollarSign',
      title: 'Cost Savings',
      description: 'Significant reduction in development costs',
      stat: '40-60',
      statSuffix: '%',
      statLabel: 'Cost reduction'
    },
    {
      icon: 'Users',
      title: 'Talent Access',
      description: 'Access to large pool of skilled developers',
      stat: '500+',
      statSuffix: '',
      statLabel: 'Engineers available'
    },
    {
      icon: 'Clock',
      title: '24/7 Development',
      description: 'Follow-the-sun development capability',
      stat: '24/7',
      statSuffix: '',
      statLabel: 'Coverage possible'
    },
    {
      icon: 'TrendingUp',
      title: 'Scalability',
      description: 'Easy to scale team up or down',
      stat: 'Unlimited',
      statSuffix: '',
      statLabel: 'Scale potential'
    }
  ],

  techStack: [
    {
      name: 'Web Technologies',
      description: 'Full-stack web development',
      technologies: [
        { name: 'React', icon: '/icons/tech/react.svg', category: 'Frontend', proficiency: 'expert' },
        { name: 'Angular', icon: '/icons/tech/angular.svg', category: 'Frontend', proficiency: 'expert' },
        { name: 'Node.js', icon: '/icons/tech/nodejs.svg', category: 'Backend', proficiency: 'expert' },
        { name: 'Python', icon: '/icons/tech/python.svg', category: 'Backend', proficiency: 'expert' }
      ]
    },
    {
      name: 'Enterprise Technologies',
      description: 'Enterprise-grade platforms',
      technologies: [
        { name: 'Java', icon: '/icons/tech/java.svg', category: 'Enterprise', proficiency: 'expert' },
        { name: '.NET', icon: '/icons/tech/dotnet.svg', category: 'Enterprise', proficiency: 'expert' },
        { name: 'Spring Boot', icon: '/icons/tech/spring.svg', category: 'Framework', proficiency: 'expert' },
        { name: 'Microservices', icon: '/icons/tech/microservices.svg', category: 'Architecture', proficiency: 'expert' }
      ]
    },
    {
      name: 'Mobile Development',
      description: 'iOS and Android apps',
      technologies: [
        { name: 'React Native', icon: '/icons/tech/react.svg', category: 'Cross-platform', proficiency: 'expert' },
        { name: 'Flutter', icon: '/icons/tech/flutter.svg', category: 'Cross-platform', proficiency: 'expert' },
        { name: 'Swift', icon: '/icons/tech/swift.svg', category: 'iOS', proficiency: 'expert' },
        { name: 'Kotlin', icon: '/icons/tech/kotlin.svg', category: 'Android', proficiency: 'expert' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      description: 'Cloud infrastructure and DevOps',
      technologies: [
        { name: 'AWS', icon: '/icons/tech/aws.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Azure', icon: '/icons/tech/azure.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Kubernetes', icon: '/icons/tech/kubernetes.svg', category: 'DevOps', proficiency: 'expert' },
        { name: 'CI/CD', icon: '/icons/tech/cicd.svg', category: 'DevOps', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Small Team',
        description: '3-5 developers',
        price: '$12,000',
        priceNote: 'per month',
        features: [
          { name: '3-5 full-time developers', included: true },
          { name: 'Dedicated team lead', included: true },
          { name: 'Quality assurance', included: true },
          { name: 'Weekly reporting', included: true },
          { name: '4-hour overlap', included: true },
          { name: 'On-site visits', included: false },
          { name: 'Dedicated PM', included: false },
          { name: '24/7 coverage', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Full Team',
        description: '6-10 developers',
        price: '$25,000',
        priceNote: 'per month',
        badge: 'Most Popular',
        features: [
          { name: '6-10 full-time developers', included: true },
          { name: 'Senior team lead', included: true },
          { name: 'Dedicated QA', included: true },
          { name: 'Daily reporting', included: true },
          { name: '6-hour overlap', included: true },
          { name: 'Quarterly on-site', included: true },
          { name: 'Dedicated PM', included: true },
          { name: 'Extended hours', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: '15+ developers',
        price: 'Custom',
        priceNote: 'based on requirements',
        features: [
          { name: '15+ developers', included: true },
          { name: 'Multiple team leads', included: true },
          { name: 'Full QA team', included: true },
          { name: 'Executive reporting', included: true },
          { name: 'Maximum overlap', included: true },
          { name: 'Monthly on-site', included: true },
          { name: 'Dedicated PM + Delivery', included: true },
          { name: '24/7 coverage', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'All pricing includes infrastructure, tools, and management. No hidden costs.'
  },

  portfolio: [
    {
      title: 'Enterprise SaaS Development',
      client: 'CloudSolutions Inc',
      industry: 'SaaS',
      description: 'Offshore team of 15 engineers building enterprise SaaS platform',
      challenge: 'Needed to scale engineering capacity while reducing development costs',
      solution: 'Established offshore development center with integrated processes',
      results: [
        '50% cost reduction vs US team',
        'Product launched 2 months early',
        'Team grown to 25 engineers',
        '4-year ongoing partnership'
      ],
      metrics: [
        { label: 'Cost Savings', value: '50%' },
        { label: 'Team Size', value: '25' },
        { label: 'Duration', value: '4+ years' }
      ],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      tags: ['SaaS', 'Enterprise', 'Offshore', 'Long-term']
    },
    {
      title: 'E-commerce Platform',
      client: 'RetailGlobal Corp',
      industry: 'E-commerce',
      description: 'Offshore team delivering e-commerce platform modernization',
      challenge: 'Legacy platform limiting growth, needed cost-effective modernization',
      solution: 'Built offshore team to rebuild platform on modern stack',
      results: [
        'Platform fully modernized',
        '45% cost savings achieved',
        'Performance improved 5x',
        'Zero downtime migration'
      ],
      metrics: [
        { label: 'Cost Savings', value: '45%' },
        { label: 'Performance', value: '5x faster' },
        { label: 'Downtime', value: '0' }
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Modernization', 'Platform', 'Migration']
    },
    {
      title: 'Mobile Banking App',
      client: 'SecureBank International',
      industry: 'Banking',
      description: 'Offshore team developing secure mobile banking application',
      challenge: 'Required cost-effective development with strict security compliance',
      solution: 'Established offshore team with banking domain and security expertise',
      results: [
        'App launched in 8 months',
        '55% cost savings achieved',
        'PCI-DSS compliance maintained',
        '2M+ active users'
      ],
      metrics: [
        { label: 'Cost Savings', value: '55%' },
        { label: 'Timeline', value: '8 months' },
        { label: 'Users', value: '2M+' }
      ],
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&h=600&fit=crop',
      tags: ['Banking', 'Mobile', 'Security', 'Offshore']
    },
    {
      title: 'Healthcare Platform Development',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      description: 'Offshore development center for healthcare technology platform',
      challenge: 'Needed scalable development capacity with HIPAA compliance',
      solution: 'Built offshore team with healthcare IT experience and compliance training',
      results: [
        'Platform serving 500+ clinics',
        'Development costs reduced 48%',
        'HIPAA compliance achieved',
        'Team expanded to 30 engineers'
      ],
      metrics: [
        { label: 'Clinics', value: '500+' },
        { label: 'Cost Savings', value: '48%' },
        { label: 'Team Size', value: '30' }
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'HIPAA', 'Platform', 'Offshore']
    }
  ],

  testimonials: [
    {
      quote: 'We\'ve worked with offshore teams before with mixed results. This is different - the quality and communication are exceptional.',
      author: 'David Anderson',
      role: 'CTO',
      company: 'CloudSolutions Inc',
      rating: 5,
      location: 'San Francisco, CA'
    },
    {
      quote: 'The offshore team delivered our modernization project with the same quality as our US team at half the cost.',
      author: 'Jennifer Martinez',
      role: 'VP Engineering',
      company: 'RetailGlobal Corp',
      rating: 5,
      location: 'Dallas, TX'
    }
  ],

  faqs: [
    {
      question: 'How do you ensure quality with offshore teams?',
      answer: 'We maintain rigorous quality through ISO 27001 certified processes, CMMI Level 3 methodology, mandatory code reviews, automated testing requirements, and dedicated QA engineers. Our teams follow the same standards as top US development shops.'
    },
    {
      question: 'How do you handle timezone differences?',
      answer: 'We ensure 4-6 hours of overlap with your working hours for real-time collaboration. We also train teams in async communication best practices and use clear documentation and handoff processes for work that continues outside overlap hours.'
    },
    {
      question: 'What languages do your teams speak?',
      answer: 'All our engineers are fluent in English and trained in Western business communication. We conduct English proficiency assessments during hiring and provide ongoing communication coaching. Language barriers are never an issue.'
    },
    {
      question: 'Is my intellectual property protected?',
      answer: 'Yes, we take IP protection seriously. All engineers sign strict NDAs and IP assignment agreements. Our facilities are physically secure, and we can work within your VPN and security requirements. We\'re ISO 27001 certified.'
    },
    {
      question: 'Can I visit the offshore team?',
      answer: 'Absolutely. We encourage clients to visit and meet their teams. Depending on your plan, we include scheduled on-site visits. Many clients find that meeting the team in person significantly strengthens the relationship.'
    }
  ],

  relatedServices: [
    {
      name: 'Nearshore Development',
      slug: 'nearshore-development',
      description: 'Same timezone development',
      icon: 'Map'
    },
    {
      name: 'Dedicated Development Teams',
      slug: 'dedicated-development-teams',
      description: 'Exclusive dedicated teams',
      icon: 'Users'
    },
    {
      name: 'Project Outsourcing',
      slug: 'project-outsourcing',
      description: 'Fixed-price project delivery',
      icon: 'Box'
    },
    {
      name: 'Staff Augmentation',
      slug: 'staff-augmentation',
      description: 'Individual placements',
      icon: 'UserPlus'
    }
  ],

  seo: {
    title: 'Offshore Development Services | Offshore Software Development',
    description: 'Cost-effective offshore development services. 40-60% savings, world-class quality, seamless collaboration. ISO 27001 certified offshore teams.',
    keywords: [
      'offshore development',
      'offshore software development',
      'offshore development center',
      'offshore team',
      'software outsourcing',
      'offshore outsourcing',
      'offshore engineering',
      'offshore development services',
      'offshore programming',
      'global development team'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Offshore Development Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Offshore Software Development'
      }
    }
  }
};
