// Project Outsourcing Service Data
import { ServiceData } from '@/components/services/sections';

export const projectOutsourcingData: ServiceData = {
  name: 'Project Outsourcing',
  slug: 'project-outsourcing',
  tagline: 'Complete project delivery, fixed price, guaranteed results',
  category: 'Outsourcing Services',
  description: 'Get complete projects delivered with guaranteed outcomes. Our project outsourcing services provide end-to-end project delivery with fixed pricing, clear milestones, and guaranteed results.',

  hero: {
    headline: 'Project Outsourcing Services',
    subheadline: 'Fixed Price, Guaranteed Delivery',
    description: 'Outsource complete projects with confidence. We take full responsibility for delivering your project on time and on budget, with clear milestones and transparent communication throughout.',
    keyFeatures: [
      'Fixed price projects',
      'Guaranteed delivery dates',
      'Clear milestones',
      'Full project management',
      'Regular progress updates',
      'Quality guaranteed'
    ],
    badges: ['500+ Projects Delivered', 'On-Time Guarantee', 'Fixed Pricing', 'Quality Assured']
  },

  painPoints: [
    {
      icon: 'DollarSign',
      title: 'Budget Uncertainty',
      description: 'Time & materials projects going over budget without control',
      stat: '60%',
      statLabel: 'Projects exceed budget'
    },
    {
      icon: 'Clock',
      title: 'Schedule Risks',
      description: 'Projects taking longer than planned with no accountability',
      stat: '70%',
      statLabel: 'Miss deadlines'
    },
    {
      icon: 'AlertTriangle',
      title: 'Quality Issues',
      description: 'Delivered work not meeting expectations or requirements',
      stat: '45%',
      statLabel: 'Need significant rework'
    },
    {
      icon: 'Users',
      title: 'Management Burden',
      description: 'Internal team spending too much time managing vendors',
      stat: '30%',
      statLabel: 'Time on vendor mgmt'
    }
  ],

  solutions: [
    {
      icon: 'DollarSign',
      title: 'Fixed Price Delivery',
      description: 'Know exactly what you\'ll pay before the project starts',
      highlights: [
        'Detailed scoping',
        'Fixed price quote',
        'No surprise costs',
        'Payment milestones'
      ]
    },
    {
      icon: 'Clock',
      title: 'Guaranteed Timeline',
      description: 'Committed delivery dates with accountability',
      highlights: [
        'Realistic scheduling',
        'Milestone commitments',
        'Progress tracking',
        'On-time guarantee'
      ]
    },
    {
      icon: 'CheckCircle',
      title: 'Quality Assurance',
      description: 'Rigorous quality processes ensure deliverables meet requirements',
      highlights: [
        'QA built in',
        'Acceptance testing',
        'Bug-free warranty',
        'Documentation included'
      ]
    },
    {
      icon: 'Users',
      title: 'Full Management',
      description: 'We handle project management so you can focus on business',
      highlights: [
        'Dedicated PM',
        'Regular updates',
        'Risk management',
        'Issue resolution'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'FileText',
        title: 'Scoping',
        description: 'Detailed requirements analysis and project scoping',
        duration: 'Week 1-2',
        deliverables: [
          'Requirements document',
          'Technical specification',
          'Project scope',
          'Fixed price proposal'
        ]
      },
      {
        icon: 'Layout',
        title: 'Planning',
        description: 'Create detailed project plan with milestones',
        duration: 'Week 2-3',
        deliverables: [
          'Project plan',
          'Milestone schedule',
          'Resource allocation',
          'Risk assessment'
        ]
      },
      {
        icon: 'Code',
        title: 'Development',
        description: 'Build solution with regular progress updates',
        duration: 'Variable',
        deliverables: [
          'Working software',
          'Progress reports',
          'Milestone reviews',
          'Demo sessions'
        ]
      },
      {
        icon: 'CheckCircle',
        title: 'Delivery',
        description: 'Testing, acceptance, and handover',
        duration: 'Final 2 weeks',
        deliverables: [
          'QA completion',
          'User acceptance',
          'Documentation',
          'Training'
        ]
      }
    ],
    totalDuration: 'Project dependent'
  },

  benefits: [
    {
      icon: 'DollarSign',
      title: 'Budget Control',
      description: 'Fixed price means no surprises',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Budget certainty'
    },
    {
      icon: 'Clock',
      title: 'On-Time Delivery',
      description: 'Projects delivered when promised',
      stat: '95',
      statSuffix: '%',
      statLabel: 'On-time rate'
    },
    {
      icon: 'CheckCircle',
      title: 'Quality Guaranteed',
      description: 'Meets requirements or we fix it',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Quality guarantee'
    },
    {
      icon: 'Users',
      title: 'Minimal Management',
      description: 'We handle project management',
      stat: '80',
      statSuffix: '%',
      statLabel: 'Less mgmt time'
    }
  ],

  techStack: [
    {
      name: 'Web Development',
      description: 'Custom web applications',
      technologies: [
        { name: 'React', icon: '/icons/tech/react.svg', category: 'Frontend', proficiency: 'expert' },
        { name: 'Node.js', icon: '/icons/tech/nodejs.svg', category: 'Backend', proficiency: 'expert' },
        { name: 'Python', icon: '/icons/tech/python.svg', category: 'Backend', proficiency: 'expert' },
        { name: 'PostgreSQL', icon: '/icons/tech/postgresql.svg', category: 'Database', proficiency: 'expert' }
      ]
    },
    {
      name: 'Mobile Apps',
      description: 'iOS and Android applications',
      technologies: [
        { name: 'React Native', icon: '/icons/tech/react.svg', category: 'Mobile', proficiency: 'expert' },
        { name: 'Flutter', icon: '/icons/tech/flutter.svg', category: 'Mobile', proficiency: 'expert' },
        { name: 'Swift', icon: '/icons/tech/swift.svg', category: 'iOS', proficiency: 'expert' },
        { name: 'Kotlin', icon: '/icons/tech/kotlin.svg', category: 'Android', proficiency: 'expert' }
      ]
    },
    {
      name: 'Cloud Platforms',
      description: 'Cloud deployment and hosting',
      technologies: [
        { name: 'AWS', icon: '/icons/tech/aws.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Azure', icon: '/icons/tech/azure.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'GCP', icon: '/icons/tech/gcp.svg', category: 'Cloud', proficiency: 'advanced' },
        { name: 'Vercel', icon: '/icons/tech/vercel.svg', category: 'Hosting', proficiency: 'expert' }
      ]
    },
    {
      name: 'E-commerce',
      description: 'E-commerce platforms',
      technologies: [
        { name: 'Shopify', icon: '/icons/tech/shopify.svg', category: 'Platform', proficiency: 'expert' },
        { name: 'WooCommerce', icon: '/icons/tech/woocommerce.svg', category: 'Platform', proficiency: 'expert' },
        { name: 'Magento', icon: '/icons/tech/magento.svg', category: 'Platform', proficiency: 'advanced' },
        { name: 'Stripe', icon: '/icons/tech/stripe.svg', category: 'Payments', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Small Project',
        description: '4-8 weeks, limited scope',
        price: '$15,000-$40,000',
        priceNote: 'fixed price',
        features: [
          { name: 'Fixed scope & price', included: true },
          { name: 'Dedicated PM', included: true },
          { name: 'Weekly updates', included: true },
          { name: 'Quality assurance', included: true },
          { name: '30-day warranty', included: true },
          { name: 'Design included', included: false },
          { name: 'Training', included: false },
          { name: 'Extended support', included: false }
        ],
        ctaText: 'Get Quote',
        highlighted: false
      },
      {
        name: 'Medium Project',
        description: '8-16 weeks, full solution',
        price: '$40,000-$100,000',
        priceNote: 'fixed price',
        badge: 'Most Popular',
        features: [
          { name: 'Fixed scope & price', included: true },
          { name: 'Dedicated PM', included: true },
          { name: 'Bi-weekly demos', included: true },
          { name: 'Full QA team', included: true },
          { name: '60-day warranty', included: true },
          { name: 'Design included', included: true },
          { name: 'Training (8 hours)', included: true },
          { name: '30-day support', included: false }
        ],
        ctaText: 'Get Quote',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: '16+ weeks, complex solutions',
        price: '$100,000+',
        priceNote: 'fixed price',
        features: [
          { name: 'Fixed scope & price', included: true },
          { name: 'Dedicated PM + Lead', included: true },
          { name: 'Weekly stakeholder calls', included: true },
          { name: 'Enterprise QA', included: true },
          { name: '90-day warranty', included: true },
          { name: 'Full design services', included: true },
          { name: 'Comprehensive training', included: true },
          { name: '90-day support', included: true }
        ],
        ctaText: 'Get Quote',
        highlighted: false
      }
    ],
    customNote: 'All projects include detailed scoping before price commitment. No obligation to proceed after scoping.'
  },

  portfolio: [
    {
      title: 'Insurance Claims Platform',
      client: 'QuickClaim Insurance',
      industry: 'Insurance',
      description: 'Complete claims management platform delivered fixed-price',
      challenge: 'Needed complete claims system but had strict budget constraints',
      solution: 'Fixed-price delivery of full claims platform with mobile apps',
      results: [
        'Delivered on budget at $85,000',
        'Launched 1 week ahead of schedule',
        'Processing 50,000+ claims monthly',
        'Zero critical bugs at launch'
      ],
      metrics: [
        { label: 'Budget', value: 'On budget' },
        { label: 'Timeline', value: '1 week early' },
        { label: 'Claims', value: '50K+/month' }
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      tags: ['Insurance', 'Platform', 'Fixed-Price', 'Mobile']
    },
    {
      title: 'E-commerce Marketplace',
      client: 'ArtisanMarket Co',
      industry: 'E-commerce',
      description: 'Multi-vendor marketplace delivered as fixed-price project',
      challenge: 'Launching new marketplace concept with limited runway',
      solution: 'Fixed-price marketplace build with payment integration',
      results: [
        'Launched exactly on planned date',
        'Delivered at quoted price of $65,000',
        '500+ vendors onboarded in month 1',
        '$2M GMV in first quarter'
      ],
      metrics: [
        { label: 'Price', value: '$65K fixed' },
        { label: 'Vendors', value: '500+' },
        { label: 'GMV Q1', value: '$2M' }
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Marketplace', 'Fixed-Price', 'Payments']
    },
    {
      title: 'Healthcare Patient Portal',
      client: 'CareFirst Medical',
      industry: 'Healthcare',
      description: 'HIPAA-compliant patient portal delivered as fixed-price project',
      challenge: 'Needed patient engagement platform with strict compliance requirements',
      solution: 'Fixed-price development with dedicated compliance testing',
      results: [
        'Delivered on $120K budget',
        'HIPAA certification achieved',
        '25,000 patients onboarded',
        'Support tickets reduced 60%'
      ],
      metrics: [
        { label: 'Budget', value: '$120K fixed' },
        { label: 'Patients', value: '25K' },
        { label: 'Support', value: '-60%' }
      ],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'HIPAA', 'Fixed-Price', 'Portal']
    },
    {
      title: 'Startup MVP Development',
      client: 'TechLaunch Ventures',
      industry: 'Startup',
      description: 'Complete MVP for startup delivered with fixed budget and timeline',
      challenge: 'Limited funding required guaranteed delivery within budget',
      solution: 'Fixed-price MVP development with iterative milestone delivery',
      results: [
        'MVP delivered in 10 weeks',
        'Stayed within $45K budget',
        'Secured seed funding post-launch',
        '1,000 beta users acquired'
      ],
      metrics: [
        { label: 'Timeline', value: '10 weeks' },
        { label: 'Budget', value: '$45K fixed' },
        { label: 'Beta Users', value: '1,000' }
      ],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      tags: ['Startup', 'MVP', 'Fixed-Price', 'Agile']
    }
  ],

  testimonials: [
    {
      quote: 'Fixed-price gave us the budget certainty we needed. They delivered exactly what was promised, on time and on budget.',
      author: 'Rachel Chen',
      role: 'VP Operations',
      company: 'QuickClaim Insurance',
      rating: 5,
      location: 'Chicago, IL'
    },
    {
      quote: 'As a startup, every dollar counted. Fixed-price project delivery let us launch our marketplace without budget anxiety.',
      author: 'Marcus Webb',
      role: 'CEO',
      company: 'ArtisanMarket Co',
      rating: 5,
      location: 'Portland, OR'
    }
  ],

  faqs: [
    {
      question: 'How do you determine the fixed price?',
      answer: 'We conduct detailed scoping to understand every requirement before quoting. This includes requirements workshops, technical analysis, and risk assessment. We only quote fixed prices when we\'re confident in our understanding of the scope.'
    },
    {
      question: 'What happens if requirements change?',
      answer: 'Minor clarifications are handled within the fixed price. For scope changes, we use a transparent change request process - we\'ll quote the additional work before proceeding. This keeps the project controlled while allowing flexibility.'
    },
    {
      question: 'What if the project takes longer than planned?',
      answer: 'You still pay the fixed price - that\'s our commitment. We build buffer into our estimates and manage risks actively. If delays are due to scope changes you\'ve requested, we\'ll discuss that separately.'
    },
    {
      question: 'What\'s included in the warranty?',
      answer: 'Our warranty covers defects - issues where the software doesn\'t meet the agreed requirements. We\'ll fix bugs at no cost during the warranty period. The warranty does not cover new feature requests or changes to requirements.'
    },
    {
      question: 'How much does scoping cost?',
      answer: 'For projects under $50K, scoping is typically free. For larger projects, we may charge a small scoping fee (usually 5-10% of estimated project cost) which is credited toward the project if you proceed.'
    }
  ],

  relatedServices: [
    {
      name: 'Dedicated Development Teams',
      slug: 'dedicated-development-teams',
      description: 'Ongoing team engagement',
      icon: 'Users'
    },
    {
      name: 'Staff Augmentation',
      slug: 'staff-augmentation',
      description: 'Flexible staffing',
      icon: 'UserPlus'
    },
    {
      name: 'Custom Web Development',
      slug: 'custom-web-development',
      description: 'Custom web solutions',
      icon: 'Code'
    },
    {
      name: 'Mobile App Development',
      slug: 'mobile-app-development',
      description: 'iOS and Android apps',
      icon: 'Smartphone'
    }
  ],

  seo: {
    title: 'Project Outsourcing Services | Fixed Price Software Development',
    description: 'Project outsourcing with fixed price guarantee. Complete software project delivery with clear milestones, dedicated PM, and quality assurance. 95% on-time delivery.',
    keywords: [
      'project outsourcing',
      'fixed price development',
      'software project outsourcing',
      'outsource software project',
      'fixed bid development',
      'turnkey software development',
      'project based outsourcing',
      'software project delivery',
      'outsource development project',
      'fixed cost software'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Project Outsourcing Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Software Project Outsourcing'
      }
    }
  }
};
