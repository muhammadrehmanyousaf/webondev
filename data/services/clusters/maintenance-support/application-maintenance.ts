// Application Maintenance Service Data
import { ServiceData } from '@/components/services/sections';

export const applicationMaintenanceData: ServiceData = {
  name: 'Application Maintenance',
  slug: 'application-maintenance',
  tagline: 'Keep your applications running at peak performance',
  category: 'Maintenance & Support',
  description: 'Professional application maintenance services to ensure your software stays reliable, secure, and performant. We handle updates, bug fixes, monitoring, and continuous improvement for web and mobile applications.',

  hero: {
    headline: 'Application Maintenance Services',
    subheadline: 'Reliable Software, Continuous Improvement',
    description: 'Your applications deserve ongoing care. Our maintenance services ensure your web apps, mobile apps, and custom software stay current, secure, and optimized for the best user experience.',
    keyFeatures: [
      'Bug fixes & patches',
      'Security updates',
      'Performance monitoring',
      'Feature enhancements',
      'Database maintenance',
      'Third-party integrations'
    ],
    badges: ['24/7 Monitoring', 'SLA Backed', '500+ Apps Maintained', 'All Platforms']
  },

  painPoints: [
    {
      icon: 'Bug',
      title: 'Accumulating Bugs',
      description: 'Technical debt and bugs impacting user experience',
      stat: '75%',
      statLabel: 'Apps have tech debt'
    },
    {
      icon: 'Shield',
      title: 'Security Risks',
      description: 'Outdated dependencies creating vulnerabilities',
      stat: '83%',
      statLabel: 'Apps have vulnerabilities'
    },
    {
      icon: 'TrendingDown',
      title: 'Performance Decay',
      description: 'Application slowing down over time',
      stat: '40%',
      statLabel: 'Annual performance decay'
    },
    {
      icon: 'Users',
      title: 'Team Moved On',
      description: 'Original developers no longer available',
      stat: '60%',
      statLabel: 'Lost original team'
    }
  ],

  solutions: [
    {
      icon: 'Bug',
      title: 'Bug Management',
      description: 'Systematic bug tracking and resolution',
      highlights: [
        'Bug triage',
        'Priority fixes',
        'Root cause analysis',
        'Regression testing'
      ]
    },
    {
      icon: 'RefreshCw',
      title: 'Continuous Updates',
      description: 'Keep your stack current and compatible',
      highlights: [
        'Dependency updates',
        'Framework upgrades',
        'API updates',
        'OS compatibility'
      ]
    },
    {
      icon: 'Activity',
      title: 'Proactive Monitoring',
      description: 'Detect and resolve issues before users notice',
      highlights: [
        'Performance monitoring',
        'Error tracking',
        'Usage analytics',
        'Alerting'
      ]
    },
    {
      icon: 'TrendingUp',
      title: 'Continuous Improvement',
      description: 'Ongoing enhancements to keep your app competitive',
      highlights: [
        'Feature updates',
        'UX improvements',
        'Performance optimization',
        'Code refactoring'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Assessment',
        description: 'Comprehensive application audit',
        duration: 'Week 1',
        deliverables: [
          'Code review',
          'Security audit',
          'Performance analysis',
          'Maintenance plan'
        ]
      },
      {
        icon: 'Settings',
        title: 'Onboarding',
        description: 'Set up maintenance infrastructure',
        duration: 'Week 2',
        deliverables: [
          'Monitoring setup',
          'CI/CD review',
          'Documentation',
          'Access setup'
        ]
      },
      {
        icon: 'Wrench',
        title: 'Stabilization',
        description: 'Address critical issues first',
        duration: 'Week 2-4',
        deliverables: [
          'Critical bug fixes',
          'Security patches',
          'Performance fixes',
          'Stability improvements'
        ]
      },
      {
        icon: 'RefreshCw',
        title: 'Ongoing Maintenance',
        description: 'Regular maintenance and improvements',
        duration: 'Ongoing',
        deliverables: [
          'Monthly updates',
          'Bug fixes',
          'Enhancements',
          'Reports'
        ]
      }
    ],
    totalDuration: '2-4 weeks to stable maintenance'
  },

  benefits: [
    {
      icon: 'Activity',
      title: 'Reliability',
      description: 'Stable, reliable applications',
      stat: '99.9',
      statSuffix: '%',
      statLabel: 'Uptime maintained'
    },
    {
      icon: 'Shield',
      title: 'Security',
      description: 'Current and protected',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Security coverage'
    },
    {
      icon: 'Zap',
      title: 'Performance',
      description: 'Optimized and fast',
      stat: '50',
      statSuffix: '%',
      statLabel: 'Avg improvement'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Savings',
      description: 'Prevent expensive failures',
      stat: '60',
      statSuffix: '%',
      statLabel: 'Vs emergency fixes'
    }
  ],

  techStack: [
    {
      name: 'Web Frameworks',
      description: 'Web application frameworks',
      technologies: [
        { name: 'React', icon: '/icons/tech/react.svg', category: 'Frontend', proficiency: 'expert' },
        { name: 'Node.js', icon: '/icons/tech/nodejs.svg', category: 'Backend', proficiency: 'expert' },
        { name: 'Python/Django', icon: '/icons/tech/python.svg', category: 'Backend', proficiency: 'expert' },
        { name: '.NET', icon: '/icons/tech/dotnet.svg', category: 'Backend', proficiency: 'expert' }
      ]
    },
    {
      name: 'Mobile Platforms',
      description: 'Mobile application platforms',
      technologies: [
        { name: 'React Native', icon: '/icons/tech/react.svg', category: 'Mobile', proficiency: 'expert' },
        { name: 'Flutter', icon: '/icons/tech/flutter.svg', category: 'Mobile', proficiency: 'expert' },
        { name: 'iOS/Swift', icon: '/icons/tech/swift.svg', category: 'Mobile', proficiency: 'expert' },
        { name: 'Android/Kotlin', icon: '/icons/tech/kotlin.svg', category: 'Mobile', proficiency: 'expert' }
      ]
    },
    {
      name: 'Monitoring Tools',
      description: 'Application monitoring',
      technologies: [
        { name: 'Datadog', icon: '/icons/tech/datadog.svg', category: 'APM', proficiency: 'expert' },
        { name: 'Sentry', icon: '/icons/tech/sentry.svg', category: 'Error Tracking', proficiency: 'expert' },
        { name: 'New Relic', icon: '/icons/tech/newrelic.svg', category: 'APM', proficiency: 'expert' },
        { name: 'PagerDuty', icon: '/icons/tech/pagerduty.svg', category: 'Alerting', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Databases',
      description: 'Database maintenance',
      technologies: [
        { name: 'PostgreSQL', icon: '/icons/tech/postgresql.svg', category: 'Database', proficiency: 'expert' },
        { name: 'MongoDB', icon: '/icons/tech/mongodb.svg', category: 'Database', proficiency: 'expert' },
        { name: 'MySQL', icon: '/icons/tech/mysql.svg', category: 'Database', proficiency: 'expert' },
        { name: 'Redis', icon: '/icons/tech/redis.svg', category: 'Cache', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Essential',
        description: '20 hours/month',
        price: '$2,500',
        priceNote: 'per month',
        features: [
          { name: '20 hours/month', included: true },
          { name: 'Bug fixes', included: true },
          { name: 'Security patches', included: true },
          { name: 'Basic monitoring', included: true },
          { name: 'Monthly reports', included: true },
          { name: 'Feature development', included: false },
          { name: '24/7 monitoring', included: false },
          { name: 'Priority support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Professional',
        description: '40 hours/month',
        price: '$4,500',
        priceNote: 'per month',
        badge: 'Most Popular',
        features: [
          { name: '40 hours/month', included: true },
          { name: 'All Essential features', included: true },
          { name: 'Feature enhancements', included: true },
          { name: '24/7 monitoring', included: true },
          { name: 'Priority support', included: true },
          { name: 'Performance optimization', included: true },
          { name: 'Code refactoring', included: true },
          { name: 'Dedicated engineer', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Unlimited support',
        price: 'Custom',
        priceNote: 'based on requirements',
        features: [
          { name: 'Unlimited hours', included: true },
          { name: 'All Professional features', included: true },
          { name: 'Dedicated team', included: true },
          { name: 'SLA guarantee', included: true },
          { name: '24/7 emergency support', included: true },
          { name: 'Architecture support', included: true },
          { name: 'Roadmap planning', included: true },
          { name: 'On-call coverage', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Hours roll over for up to 3 months. Additional hours available at hourly rate.'
  },

  portfolio: [
    {
      title: 'SaaS Platform Maintenance',
      client: 'ProjectFlow Software',
      industry: 'SaaS',
      description: 'Ongoing maintenance for project management SaaS platform',
      challenge: 'Growing technical debt and declining performance after rapid growth',
      solution: 'Systematic maintenance with continuous improvement focus',
      results: [
        'Bug backlog reduced by 80%',
        'Application performance improved 3x',
        'Release frequency increased to weekly',
        'Customer satisfaction improved to 4.7/5'
      ],
      metrics: [
        { label: 'Bug Reduction', value: '80%' },
        { label: 'Performance', value: '3x faster' },
        { label: 'CSAT', value: '4.7/5' }
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['SaaS', 'React', 'Node.js', 'Performance']
    },
    {
      title: 'Mobile App Maintenance',
      client: 'FitTrack Health',
      industry: 'Health & Fitness',
      description: 'iOS and Android app maintenance for fitness tracking app',
      challenge: 'Frequent crashes and poor app store reviews',
      solution: 'Comprehensive mobile app maintenance and optimization',
      results: [
        'Crash rate reduced by 95%',
        'App store rating improved from 2.8 to 4.6',
        'App performance improved significantly',
        'User retention increased 40%'
      ],
      metrics: [
        { label: 'Crash Reduction', value: '95%' },
        { label: 'App Rating', value: '4.6' },
        { label: 'Retention', value: '+40%' }
      ],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      tags: ['Mobile', 'iOS', 'Android', 'React Native']
    },
    {
      title: 'Enterprise CRM Maintenance',
      client: 'GlobalTrade Partners',
      industry: 'B2B Services',
      description: 'Custom CRM application maintenance for international trading company',
      challenge: 'Complex integrations failing and system becoming unreliable',
      solution: 'Comprehensive maintenance with focus on integration stability',
      results: [
        'Integration failures reduced by 99%',
        'System uptime improved to 99.9%',
        'User productivity increased 35%',
        'Support tickets reduced by 70%'
      ],
      metrics: [
        { label: 'Integration Stability', value: '99%' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Productivity', value: '+35%' }
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      tags: ['CRM', 'Enterprise', 'Integration', 'B2B']
    },
    {
      title: 'E-learning Platform Support',
      client: 'EduTech Academy',
      industry: 'Education',
      description: 'Ongoing maintenance for online learning management system',
      challenge: 'Platform struggling with growing user base and content volume',
      solution: 'Performance optimization and scalability improvements',
      results: [
        'Platform now supports 10x more concurrent users',
        'Video streaming issues eliminated',
        'Course completion rates improved 25%',
        'Instructor satisfaction score: 4.8/5'
      ],
      metrics: [
        { label: 'Scalability', value: '10x users' },
        { label: 'Completion Rate', value: '+25%' },
        { label: 'Instructor CSAT', value: '4.8/5' }
      ],
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&h=600&fit=crop',
      tags: ['Education', 'LMS', 'Scalability', 'Video']
    }
  ],

  testimonials: [
    {
      quote: 'Our app went from embarrassing to excellent. The maintenance team systematically fixed years of accumulated issues.',
      author: 'Jason Miller',
      role: 'CTO',
      company: 'ProjectFlow Software',
      rating: 5,
      location: 'Austin, TX'
    },
    {
      quote: 'Our app store rating went from 2.8 to 4.6. The maintenance service completely turned our app around.',
      author: 'Michelle Park',
      role: 'Product Director',
      company: 'FitTrack Health',
      rating: 5,
      location: 'San Diego, CA'
    }
  ],

  faqs: [
    {
      question: 'What applications do you maintain?',
      answer: 'We maintain all types of applications including web applications, mobile apps (iOS, Android, cross-platform), SaaS platforms, enterprise software, APIs, and microservices. We work with all major technology stacks and can quickly get up to speed on your codebase.'
    },
    {
      question: 'Can you maintain an app built by another team?',
      answer: 'Yes, we frequently take over maintenance for applications built by other developers or agencies. We start with a thorough code audit to understand the architecture, identify issues, and create a maintenance plan. We can work with any well-structured codebase.'
    },
    {
      question: 'What\'s included in the monthly hours?',
      answer: 'Monthly hours cover bug fixes, security updates, dependency updates, minor enhancements, monitoring, and support. Larger feature development or major upgrades are typically scoped separately. Hours are tracked transparently and you can see exactly how time is spent.'
    },
    {
      question: 'Do you provide emergency support?',
      answer: 'Yes, Professional and Enterprise plans include priority support for urgent issues. Enterprise plans include 24/7 emergency support with guaranteed response times. Critical production issues are always prioritized regardless of plan.'
    },
    {
      question: 'How do you handle major upgrades?',
      answer: 'Major upgrades like framework version migrations or significant refactoring are typically scoped as separate projects. However, we handle minor version updates and incremental improvements as part of regular maintenance to prevent technical debt accumulation.'
    }
  ],

  relatedServices: [
    {
      name: 'Website Maintenance',
      slug: 'website-maintenance',
      description: 'Website care plans',
      icon: 'Globe'
    },
    {
      name: 'Bug Fixing Services',
      slug: 'bug-fixing-services',
      description: 'Bug resolution',
      icon: 'Bug'
    },
    {
      name: 'Performance Optimization',
      slug: 'performance-optimization',
      description: 'Speed optimization',
      icon: 'Zap'
    },
    {
      name: 'Technical Support',
      slug: 'technical-support',
      description: 'Ongoing support',
      icon: 'HeadPhones'
    }
  ],

  seo: {
    title: 'Application Maintenance Services | Software Maintenance',
    description: 'Professional application maintenance services. Bug fixes, security updates, performance optimization, feature enhancements. Keep your software running smoothly.',
    keywords: [
      'application maintenance',
      'software maintenance',
      'app maintenance',
      'application support',
      'software maintenance services',
      'web application maintenance',
      'mobile app maintenance',
      'saas maintenance',
      'application management',
      'software support services'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Application Maintenance Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Software Maintenance'
      }
    }
  }
};
