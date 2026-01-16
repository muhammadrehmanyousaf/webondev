// Nearshore Development Service Data
import { ServiceData } from '@/components/services/sections';

export const nearshoreDevelopmentData: ServiceData = {
  name: 'Nearshore Development',
  slug: 'nearshore-development',
  tagline: 'Same timezone talent, significant savings',
  category: 'Outsourcing Services',
  description: 'Get the best of both worlds with nearshore development. Our nearshore teams work in your timezone while delivering significant cost savings, combining real-time collaboration with competitive rates.',

  hero: {
    headline: 'Nearshore Development Services',
    subheadline: 'Real-Time Collaboration, Real Savings',
    description: 'Partner with talented engineers in your timezone. Our nearshore development teams provide the cost benefits of outsourcing with the convenience of real-time collaboration and cultural alignment.',
    keyFeatures: [
      'Same timezone (0-3 hours)',
      '30-50% cost savings',
      'Real-time collaboration',
      'Cultural compatibility',
      'Easy travel access',
      'Senior talent pool'
    ],
    badges: ['Americas Timezone', 'Senior Engineers', 'Cultural Fit', 'Easy Travel']
  },

  painPoints: [
    {
      icon: 'Clock',
      title: 'Timezone Frustration',
      description: 'Offshore timezone differences causing communication delays',
      stat: '8-12hr',
      statLabel: 'Typical offshore difference'
    },
    {
      icon: 'MessageCircle',
      title: 'Communication Issues',
      description: 'Cultural and language barriers affecting collaboration',
      stat: '60%',
      statLabel: 'Cite communication issues'
    },
    {
      icon: 'DollarSign',
      title: 'Local Costs',
      description: 'US/Canadian rates too high for available budget',
      stat: '$150K+',
      statLabel: 'Avg local developer cost'
    },
    {
      icon: 'Plane',
      title: 'Difficult Travel',
      description: 'Long flights and time changes for in-person meetings',
      stat: '15-24hr',
      statLabel: 'Offshore travel time'
    }
  ],

  solutions: [
    {
      icon: 'Clock',
      title: 'Same Timezone',
      description: 'Work in real-time with teams in overlapping timezones',
      highlights: [
        '0-3 hour difference',
        'Full day overlap',
        'Real-time collaboration',
        'No waiting overnight'
      ]
    },
    {
      icon: 'Users',
      title: 'Cultural Alignment',
      description: 'Teams familiar with North American business culture',
      highlights: [
        'Cultural compatibility',
        'Business fluent English',
        'Similar work styles',
        'Easy relationship building'
      ]
    },
    {
      icon: 'DollarSign',
      title: 'Cost Efficiency',
      description: 'Significant savings compared to US/Canadian rates',
      highlights: [
        '30-50% cost savings',
        'Senior talent rates',
        'Transparent pricing',
        'Predictable costs'
      ]
    },
    {
      icon: 'Plane',
      title: 'Easy Access',
      description: 'Short flights for in-person collaboration when needed',
      highlights: [
        '2-5 hour flights',
        'No jet lag',
        'Frequent visits possible',
        'Same time zone'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Discovery',
        description: 'Understand your needs and match with ideal nearshore location',
        duration: 'Week 1',
        deliverables: [
          'Requirements analysis',
          'Location recommendation',
          'Team structure',
          'Engagement model'
        ]
      },
      {
        icon: 'Users',
        title: 'Team Building',
        description: 'Build your nearshore team with handpicked engineers',
        duration: 'Week 2-3',
        deliverables: [
          'Candidate selection',
          'Technical interviews',
          'Team composition',
          'Offer acceptance'
        ]
      },
      {
        icon: 'Play',
        title: 'Integration',
        description: 'Integrate team with your processes and start delivery',
        duration: 'Week 3-4',
        deliverables: [
          'Onboarding complete',
          'Tools integrated',
          'First sprint',
          'Communication rhythm'
        ]
      },
      {
        icon: 'TrendingUp',
        title: 'Optimization',
        description: 'Optimize collaboration and scale as needed',
        duration: 'Ongoing',
        deliverables: [
          'Velocity improvement',
          'Process refinement',
          'Team scaling',
          'Performance reviews'
        ]
      }
    ],
    totalDuration: '3-4 weeks to full productivity'
  },

  benefits: [
    {
      icon: 'Clock',
      title: 'Real-Time Work',
      description: 'Full business day overlap',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Day overlap'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Savings',
      description: 'Significant savings vs local rates',
      stat: '30-50',
      statSuffix: '%',
      statLabel: 'Cost reduction'
    },
    {
      icon: 'Users',
      title: 'Senior Talent',
      description: 'Experienced senior engineers',
      stat: '7+',
      statSuffix: ' years',
      statLabel: 'Avg experience'
    },
    {
      icon: 'Plane',
      title: 'Easy Travel',
      description: 'Quick flights when needed',
      stat: '2-5',
      statSuffix: ' hours',
      statLabel: 'Flight time'
    }
  ],

  techStack: [
    {
      name: 'Frontend',
      description: 'Modern frontend development',
      technologies: [
        { name: 'React', icon: '/icons/tech/react.svg', category: 'Frontend', proficiency: 'expert' },
        { name: 'Angular', icon: '/icons/tech/angular.svg', category: 'Frontend', proficiency: 'expert' },
        { name: 'Vue.js', icon: '/icons/tech/vue.svg', category: 'Frontend', proficiency: 'expert' },
        { name: 'TypeScript', icon: '/icons/tech/typescript.svg', category: 'Language', proficiency: 'expert' }
      ]
    },
    {
      name: 'Backend',
      description: 'Scalable backend solutions',
      technologies: [
        { name: 'Node.js', icon: '/icons/tech/nodejs.svg', category: 'Backend', proficiency: 'expert' },
        { name: 'Python', icon: '/icons/tech/python.svg', category: 'Backend', proficiency: 'expert' },
        { name: 'Java', icon: '/icons/tech/java.svg', category: 'Backend', proficiency: 'expert' },
        { name: '.NET', icon: '/icons/tech/dotnet.svg', category: 'Backend', proficiency: 'expert' }
      ]
    },
    {
      name: 'Mobile',
      description: 'Native and cross-platform mobile',
      technologies: [
        { name: 'React Native', icon: '/icons/tech/react.svg', category: 'Mobile', proficiency: 'expert' },
        { name: 'Flutter', icon: '/icons/tech/flutter.svg', category: 'Mobile', proficiency: 'expert' },
        { name: 'iOS', icon: '/icons/tech/swift.svg', category: 'Mobile', proficiency: 'expert' },
        { name: 'Android', icon: '/icons/tech/kotlin.svg', category: 'Mobile', proficiency: 'expert' }
      ]
    },
    {
      name: 'Cloud',
      description: 'Cloud and infrastructure',
      technologies: [
        { name: 'AWS', icon: '/icons/tech/aws.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Azure', icon: '/icons/tech/azure.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'GCP', icon: '/icons/tech/gcp.svg', category: 'Cloud', proficiency: 'advanced' },
        { name: 'DevOps', icon: '/icons/tech/devops.svg', category: 'DevOps', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Small Team',
        description: '2-4 engineers',
        price: '$18,000',
        priceNote: 'per month',
        features: [
          { name: '2-4 senior engineers', included: true },
          { name: 'Same timezone', included: true },
          { name: 'Full day overlap', included: true },
          { name: 'Direct collaboration', included: true },
          { name: 'Weekly reporting', included: true },
          { name: 'Technical lead', included: false },
          { name: 'On-site visits', included: false },
          { name: 'Dedicated PM', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Full Team',
        description: '5-8 engineers',
        price: '$40,000',
        priceNote: 'per month',
        badge: 'Most Popular',
        features: [
          { name: '5-8 senior engineers', included: true },
          { name: 'Same timezone', included: true },
          { name: 'Full day overlap', included: true },
          { name: 'Direct collaboration', included: true },
          { name: 'Daily updates', included: true },
          { name: 'Technical lead', included: true },
          { name: 'Quarterly visits', included: true },
          { name: 'Dedicated PM', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: '10+ engineers',
        price: 'Custom',
        priceNote: 'based on requirements',
        features: [
          { name: '10+ senior engineers', included: true },
          { name: 'Same timezone', included: true },
          { name: 'Full day overlap', included: true },
          { name: 'Deep integration', included: true },
          { name: 'Executive reporting', included: true },
          { name: 'Senior tech lead', included: true },
          { name: 'Monthly visits', included: true },
          { name: 'Dedicated PM', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Nearshore rates are 30-50% less than US equivalents while providing same-timezone collaboration.'
  },

  portfolio: [
    {
      title: 'HealthTech Platform Development',
      client: 'MediConnect Health',
      industry: 'Healthcare',
      description: 'Nearshore team building HIPAA-compliant health platform',
      challenge: 'Needed US-quality development with real-time collaboration at lower cost',
      solution: 'Built nearshore team in Latin America with full timezone overlap',
      results: [
        'Platform launched on schedule',
        '40% cost savings vs US team',
        'Same-day communication',
        'HIPAA compliance achieved'
      ],
      metrics: [
        { label: 'Cost Savings', value: '40%' },
        { label: 'Overlap', value: '100%' },
        { label: 'Compliance', value: 'HIPAA' }
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'HIPAA', 'Nearshore', 'Platform']
    },
    {
      title: 'FinTech API Development',
      client: 'PaymentStream Inc',
      industry: 'FinTech',
      description: 'Nearshore team developing payment processing APIs',
      challenge: 'Real-time collaboration essential for complex financial integrations',
      solution: 'Established nearshore team with banking domain expertise',
      results: [
        'APIs delivered ahead of schedule',
        'Zero timezone friction',
        'Team visited monthly',
        'PCI compliance maintained'
      ],
      metrics: [
        { label: 'On Time', value: 'Early' },
        { label: 'Visits', value: 'Monthly' },
        { label: 'Compliance', value: 'PCI-DSS' }
      ],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
      tags: ['FinTech', 'API', 'Payments', 'PCI-DSS']
    },
    {
      title: 'E-commerce Mobile App',
      client: 'ShopDirect USA',
      industry: 'E-commerce',
      description: 'Nearshore team building cross-platform mobile shopping app',
      challenge: 'Needed agile development with daily standups and real-time collaboration',
      solution: 'Assembled nearshore React Native team in same timezone',
      results: [
        'App launched 3 weeks early',
        'Daily standups with no delays',
        '35% cost savings achieved',
        '4.7 star app store rating'
      ],
      metrics: [
        { label: 'Timeline', value: '3 weeks early' },
        { label: 'Cost Savings', value: '35%' },
        { label: 'Rating', value: '4.7/5' }
      ],
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Mobile', 'React Native', 'Nearshore']
    },
    {
      title: 'Insurance Platform Modernization',
      client: 'SafeGuard Insurance',
      industry: 'Insurance',
      description: 'Nearshore team modernizing legacy insurance processing systems',
      challenge: 'Complex business logic required close collaboration with US team',
      solution: 'Built nearshore team with insurance domain knowledge',
      results: [
        'Legacy system fully modernized',
        'Processing time reduced 80%',
        'Zero knowledge gaps with US team',
        'Seamless daily collaboration'
      ],
      metrics: [
        { label: 'Processing', value: '80% faster' },
        { label: 'Overlap', value: '100%' },
        { label: 'Travel', value: '3hr flight' }
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      tags: ['Insurance', 'Modernization', 'Legacy', 'Nearshore']
    }
  ],

  testimonials: [
    {
      quote: 'After struggling with offshore timezone issues, nearshore was a revelation. Same-day answers and real collaboration.',
      author: 'Andrew Patterson',
      role: 'CTO',
      company: 'MediConnect Health',
      rating: 5,
      location: 'Denver, CO'
    },
    {
      quote: 'The nearshore team feels like they\'re in the next office. We even visit monthly - it\'s just a short flight.',
      author: 'Maria Rodriguez',
      role: 'VP Engineering',
      company: 'PaymentStream Inc',
      rating: 5,
      location: 'Miami, FL'
    }
  ],

  faqs: [
    {
      question: 'Where are your nearshore teams located?',
      answer: 'Our nearshore teams are primarily in Latin America (Mexico, Colombia, Argentina, Brazil) for US clients, providing 0-3 hour timezone differences. We match location to your timezone for maximum overlap.'
    },
    {
      question: 'How does nearshore compare to offshore?',
      answer: 'Nearshore costs slightly more than offshore (30-50% savings vs 40-60%) but eliminates timezone challenges. Real-time collaboration, cultural alignment, and easy travel often make nearshore more effective for complex projects requiring close coordination.'
    },
    {
      question: 'What about English fluency?',
      answer: 'Our nearshore engineers are business fluent in English. Many have worked with US companies or studied in North America. Communication is never a barrier, and cultural alignment with North American business practices is strong.'
    },
    {
      question: 'Can we visit the team?',
      answer: 'Absolutely - easy access is a key nearshore benefit. Flights from most US cities are 2-5 hours with no significant jet lag. Many clients visit quarterly or monthly. We can also facilitate team members visiting your office.'
    },
    {
      question: 'How quickly can you build a nearshore team?',
      answer: 'We can typically have your nearshore team ready within 3-4 weeks. Our existing talent pool in nearshore locations allows faster team building than starting from scratch, while still ensuring quality matches.'
    }
  ],

  relatedServices: [
    {
      name: 'Offshore Development',
      slug: 'offshore-development',
      description: 'Maximum cost savings',
      icon: 'Globe'
    },
    {
      name: 'Dedicated Development Teams',
      slug: 'dedicated-development-teams',
      description: 'Full dedicated teams',
      icon: 'Users'
    },
    {
      name: 'Staff Augmentation',
      slug: 'staff-augmentation',
      description: 'Individual placements',
      icon: 'UserPlus'
    },
    {
      name: 'Project Outsourcing',
      slug: 'project-outsourcing',
      description: 'Fixed-price projects',
      icon: 'Box'
    }
  ],

  seo: {
    title: 'Nearshore Development Services | Same Timezone Outsourcing',
    description: 'Nearshore software development with same timezone collaboration. 30-50% savings, real-time communication, easy travel. Senior engineers in your timezone.',
    keywords: [
      'nearshore development',
      'nearshore outsourcing',
      'nearshore software development',
      'nearshore team',
      'latin america development',
      'same timezone development',
      'nearshore engineering',
      'nearshore programmers',
      'nearshore outsourcing services',
      'nearshore development company'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Nearshore Development Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Nearshore Software Development'
      }
    }
  }
};
