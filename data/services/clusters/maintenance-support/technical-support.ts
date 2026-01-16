// Technical Support Service Data
import { ServiceData } from '@/components/services/sections';

export const technicalSupportData: ServiceData = {
  name: 'Technical Support',
  slug: 'technical-support',
  tagline: 'Expert help when you need it most',
  category: 'Maintenance & Support',
  description: 'Professional technical support services for your websites and applications. Get expert assistance with troubleshooting, guidance, and problem resolution from experienced developers.',

  hero: {
    headline: 'Technical Support Services',
    subheadline: 'Expert Help On Demand',
    description: 'Get the technical expertise you need without hiring full-time staff. Our support team provides expert troubleshooting, guidance, and problem resolution for web, mobile, and enterprise applications.',
    keyFeatures: [
      'Multi-channel support',
      'Expert developers',
      'Fast response times',
      'All technologies',
      'Flexible plans',
      'Knowledge transfer'
    ],
    badges: ['4.9/5 Satisfaction', '15min Response', 'All Platforms', '24/7 Available']
  },

  painPoints: [
    {
      icon: 'Clock',
      title: 'Slow Issue Resolution',
      description: 'Technical issues taking too long to resolve',
      stat: '4hrs',
      statLabel: 'Avg resolution time'
    },
    {
      icon: 'Users',
      title: 'Lack of Expertise',
      description: 'Internal team lacks specific technical knowledge',
      stat: '65%',
      statLabel: 'Face skill gaps'
    },
    {
      icon: 'TrendingDown',
      title: 'Productivity Loss',
      description: 'Technical issues blocking work',
      stat: '30%',
      statLabel: 'Time lost to issues'
    },
    {
      icon: 'DollarSign',
      title: 'High Support Costs',
      description: 'Full-time technical staff too expensive',
      stat: '$120K+',
      statLabel: 'Avg developer cost'
    }
  ],

  solutions: [
    {
      icon: 'MessageCircle',
      title: 'Multi-Channel Support',
      description: 'Get help through your preferred channel',
      highlights: [
        'Chat support',
        'Email tickets',
        'Phone support',
        'Screen sharing'
      ]
    },
    {
      icon: 'Zap',
      title: 'Fast Response',
      description: 'Quick turnaround on support requests',
      highlights: [
        '15-min response',
        'Priority queuing',
        'Escalation paths',
        'SLA backing'
      ]
    },
    {
      icon: 'Users',
      title: 'Expert Engineers',
      description: 'Access to experienced developers',
      highlights: [
        'Senior developers',
        'All technologies',
        'Domain expertise',
        'Problem solvers'
      ]
    },
    {
      icon: 'Book',
      title: 'Knowledge Transfer',
      description: 'Learn while we solve',
      highlights: [
        'Documentation',
        'Training sessions',
        'Best practices',
        'Self-service resources'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'MessageCircle',
        title: 'Contact',
        description: 'Reach out through your preferred channel',
        duration: 'Immediate',
        deliverables: [
          'Ticket created',
          'Priority assigned',
          'Engineer assigned',
          'Response time estimate'
        ]
      },
      {
        icon: 'Search',
        title: 'Diagnosis',
        description: 'Investigate and understand the issue',
        duration: 'Minutes-Hours',
        deliverables: [
          'Issue identified',
          'Root cause found',
          'Solution plan',
          'Time estimate'
        ]
      },
      {
        icon: 'Wrench',
        title: 'Resolution',
        description: 'Fix the issue or provide guidance',
        duration: 'Varies',
        deliverables: [
          'Issue resolved',
          'Testing complete',
          'User notified',
          'Documentation'
        ]
      },
      {
        icon: 'CheckCircle',
        title: 'Follow-up',
        description: 'Ensure satisfaction and prevent recurrence',
        duration: 'Post-resolution',
        deliverables: [
          'Satisfaction check',
          'Prevention tips',
          'Knowledge base update',
          'Ticket closed'
        ]
      }
    ],
    totalDuration: 'Most issues resolved same day'
  },

  benefits: [
    {
      icon: 'Clock',
      title: 'Fast Response',
      description: 'Quick initial response',
      stat: '15',
      statSuffix: 'min',
      statLabel: 'Response time'
    },
    {
      icon: 'Star',
      title: 'Satisfaction',
      description: 'High customer satisfaction',
      stat: '4.9',
      statSuffix: '/5',
      statLabel: 'CSAT score'
    },
    {
      icon: 'CheckCircle',
      title: 'Resolution',
      description: 'First-contact resolution',
      stat: '85',
      statSuffix: '%',
      statLabel: 'FCR rate'
    },
    {
      icon: 'Clock',
      title: 'Availability',
      description: 'Support when you need it',
      stat: '24/7',
      statSuffix: '',
      statLabel: 'Availability'
    }
  ],

  techStack: [
    {
      name: 'Web Technologies',
      description: 'Web development support',
      technologies: [
        { name: 'React', icon: '/icons/tech/react.svg', category: 'Frontend', proficiency: 'expert' },
        { name: 'Node.js', icon: '/icons/tech/nodejs.svg', category: 'Backend', proficiency: 'expert' },
        { name: 'PHP', icon: '/icons/tech/php.svg', category: 'Backend', proficiency: 'expert' },
        { name: 'WordPress', icon: '/icons/tech/wordpress.svg', category: 'CMS', proficiency: 'expert' }
      ]
    },
    {
      name: 'Mobile Technologies',
      description: 'Mobile development support',
      technologies: [
        { name: 'React Native', icon: '/icons/tech/react.svg', category: 'Mobile', proficiency: 'expert' },
        { name: 'Flutter', icon: '/icons/tech/flutter.svg', category: 'Mobile', proficiency: 'expert' },
        { name: 'iOS/Swift', icon: '/icons/tech/swift.svg', category: 'Mobile', proficiency: 'expert' },
        { name: 'Android', icon: '/icons/tech/kotlin.svg', category: 'Mobile', proficiency: 'expert' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      description: 'Infrastructure support',
      technologies: [
        { name: 'AWS', icon: '/icons/tech/aws.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Azure', icon: '/icons/tech/azure.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Docker', icon: '/icons/tech/docker.svg', category: 'DevOps', proficiency: 'expert' },
        { name: 'Kubernetes', icon: '/icons/tech/kubernetes.svg', category: 'DevOps', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Databases',
      description: 'Database support',
      technologies: [
        { name: 'PostgreSQL', icon: '/icons/tech/postgresql.svg', category: 'Database', proficiency: 'expert' },
        { name: 'MySQL', icon: '/icons/tech/mysql.svg', category: 'Database', proficiency: 'expert' },
        { name: 'MongoDB', icon: '/icons/tech/mongodb.svg', category: 'Database', proficiency: 'expert' },
        { name: 'Redis', icon: '/icons/tech/redis.svg', category: 'Cache', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Pay-Per-Incident',
        description: 'Support as needed',
        price: '$99',
        priceNote: 'per incident',
        features: [
          { name: 'Single incident support', included: true },
          { name: 'Expert assistance', included: true },
          { name: '4-hour response', included: true },
          { name: 'Email & chat support', included: true },
          { name: 'Resolution documentation', included: true },
          { name: 'Priority queue', included: false },
          { name: 'Phone support', included: false },
          { name: 'Proactive monitoring', included: false }
        ],
        ctaText: 'Get Help Now',
        highlighted: false
      },
      {
        name: 'Support Hours',
        description: '10 hours/month',
        price: '$750',
        priceNote: 'per month',
        badge: 'Best Value',
        features: [
          { name: '10 support hours/month', included: true },
          { name: 'All channels', included: true },
          { name: '1-hour response', included: true },
          { name: 'Priority queue', included: true },
          { name: 'Phone support', included: true },
          { name: 'Screen sharing', included: true },
          { name: 'Hours roll over (3mo)', included: true },
          { name: 'Dedicated engineer', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Dedicated Support',
        description: 'Unlimited support',
        price: '$2,500',
        priceNote: 'per month',
        features: [
          { name: 'Unlimited support', included: true },
          { name: 'Dedicated engineer', included: true },
          { name: '15-min response', included: true },
          { name: 'All channels + phone', included: true },
          { name: '24/7 availability', included: true },
          { name: 'Proactive monitoring', included: true },
          { name: 'Monthly reviews', included: true },
          { name: 'SLA guarantee', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Enterprise SLAs and custom support packages available. Volume discounts for multiple properties.'
  },

  portfolio: [
    {
      title: 'SaaS Company Support',
      client: 'CloudTools Pro',
      industry: 'SaaS',
      description: 'Ongoing technical support for SaaS platform',
      challenge: 'Needed expert support but couldn\'t justify full-time developer',
      solution: 'Dedicated support package with monthly hours',
      results: [
        'All issues resolved within 2 hours',
        'Developer productivity increased 40%',
        'Zero escalations to management',
        'Annual savings of $80K vs hiring'
      ],
      metrics: [
        { label: 'Avg Resolution', value: '2 hours' },
        { label: 'Productivity', value: '+40%' },
        { label: 'Savings', value: '$80K/year' }
      ],
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&h=600&fit=crop',
      tags: ['SaaS', 'React', 'Node.js', 'Ongoing Support']
    },
    {
      title: 'Agency Technical Support',
      client: 'Digital First Agency',
      industry: 'Agency',
      description: 'Technical support for agency\'s client projects',
      challenge: 'Agency needed expert backup for complex client issues',
      solution: 'Support hours package with multi-project coverage',
      results: [
        'Response time under 30 minutes',
        'Agency able to take on more complex projects',
        'Client satisfaction improved',
        'Knowledge transfer improved agency skills'
      ],
      metrics: [
        { label: 'Response Time', value: '<30 min' },
        { label: 'Client CSAT', value: '4.9/5' },
        { label: 'Projects', value: '15+' }
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['Agency', 'Multi-Project', 'WordPress', 'Custom']
    },
    {
      title: 'E-commerce Technical Help Desk',
      client: 'MultiStore Brands',
      industry: 'E-commerce',
      description: 'Technical support for multi-brand e-commerce operation',
      challenge: 'Managing technical issues across 8 different online stores',
      solution: 'Centralized technical support with brand-specific expertise',
      results: [
        'Issue resolution time reduced by 65%',
        'Cross-store issues identified and fixed proactively',
        'Store managers freed from technical troubleshooting',
        'Monthly technical incidents reduced by 50%'
      ],
      metrics: [
        { label: 'Resolution Speed', value: '65% faster' },
        { label: 'Incident Reduction', value: '50%' },
        { label: 'Stores Supported', value: '8' }
      ],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Multi-Brand', 'Help Desk', 'Retail']
    },
    {
      title: 'Startup Technical Support',
      client: 'InnovateTech Ventures',
      industry: 'Technology',
      description: 'On-demand technical support for early-stage startup',
      challenge: 'Small team needing expert help without full-time overhead',
      solution: 'Flexible support hours with senior developer access',
      results: [
        'Critical bugs fixed within hours, not days',
        'Product launch stayed on schedule',
        'Team learned best practices through support interactions',
        'Cost 70% less than hiring contractor'
      ],
      metrics: [
        { label: 'Avg Fix Time', value: '4 hours' },
        { label: 'Launch', value: 'On Schedule' },
        { label: 'Cost Savings', value: '70%' }
      ],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      tags: ['Startup', 'On-Demand', 'Development', 'Cost-Effective']
    }
  ],

  testimonials: [
    {
      quote: 'Having expert support on call has been a game-changer. Issues that used to derail us for days are solved in hours.',
      author: 'Michael Torres',
      role: 'CTO',
      company: 'CloudTools Pro',
      rating: 5,
      location: 'Denver, CO'
    },
    {
      quote: 'The support team feels like an extension of our agency. They make us look good to our clients every time.',
      author: 'Rachel Kim',
      role: 'Technical Director',
      company: 'Digital First Agency',
      rating: 5,
      location: 'Portland, OR'
    }
  ],

  faqs: [
    {
      question: 'What technologies do you support?',
      answer: 'We support all major web technologies including React, Angular, Vue, Node.js, Python, PHP, Ruby, Java, .NET, and more. Mobile support includes React Native, Flutter, iOS, and Android. We also support cloud platforms (AWS, Azure, GCP) and databases. If you\'re unsure, ask us.'
    },
    {
      question: 'How quickly will I get a response?',
      answer: 'Response times depend on your plan. Dedicated Support gets 15-minute response. Support Hours plans get 1-hour response. Pay-Per-Incident gets 4-hour response. Response means a qualified engineer begins working on your issue, not just an acknowledgment.'
    },
    {
      question: 'Can you help with code I didn\'t write?',
      answer: 'Yes, we frequently help with code written by others - previous developers, agencies, or contractors. We can quickly understand most codebases and provide effective support. For complex legacy code, we may need additional time to understand the system.'
    },
    {
      question: 'Do unused hours roll over?',
      answer: 'Yes, on Support Hours plans, unused hours roll over for up to 3 months. This gives you flexibility to bank hours during quiet periods and use them when you need more support. Hours expire after 3 months of rollover.'
    },
    {
      question: 'Can support engineers make changes to my code?',
      answer: 'Yes, with your permission we can make code changes, apply fixes, and deploy updates. For Dedicated Support plans, this is included. For other plans, implementation time counts against your hours or is billed separately if it\'s beyond simple fixes.'
    }
  ],

  relatedServices: [
    {
      name: 'Application Maintenance',
      slug: 'application-maintenance',
      description: 'Ongoing maintenance',
      icon: 'Settings'
    },
    {
      name: 'Bug Fixing Services',
      slug: 'bug-fixing-services',
      description: 'Bug resolution',
      icon: 'Bug'
    },
    {
      name: 'Emergency Support',
      slug: 'emergency-support',
      description: 'Critical issues',
      icon: 'AlertTriangle'
    },
    {
      name: 'Website Maintenance',
      slug: 'website-maintenance',
      description: 'Site maintenance',
      icon: 'Globe'
    }
  ],

  seo: {
    title: 'Technical Support Services | Developer Support On Demand',
    description: 'Professional technical support for websites and applications. Expert developers, 15-minute response, all technologies. From $99/incident or $750/month.',
    keywords: [
      'technical support',
      'developer support',
      'it technical support',
      'software support',
      'web development support',
      'application support',
      'tech support services',
      'code support',
      'programming support',
      'on-demand developers'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Technical Support Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Developer Support'
      }
    }
  }
};
