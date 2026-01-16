// Staff Augmentation Service Data
import { ServiceData } from '@/components/services/sections';

export const staffAugmentationData: ServiceData = {
  name: 'Staff Augmentation',
  slug: 'staff-augmentation',
  tagline: 'Add skilled engineers to your team instantly',
  category: 'Outsourcing Services',
  description: 'Instantly add skilled engineers to your existing team. Our staff augmentation services provide pre-vetted developers who integrate seamlessly with your team to fill skill gaps and accelerate delivery.',

  hero: {
    headline: 'IT Staff Augmentation',
    subheadline: 'Expert Engineers When You Need Them',
    description: 'Fill skill gaps and scale your team instantly with pre-vetted engineers. Our staff augmentation services provide the flexibility to add talent exactly when you need it, without the overhead of full-time hiring.',
    keyFeatures: [
      'Pre-vetted senior engineers',
      'Fast onboarding (1-2 weeks)',
      'Flexible engagement terms',
      'Full integration with your team',
      'No recruiting overhead',
      'Scale up or down easily'
    ],
    badges: ['500+ Placements', 'All Technologies', 'Quick Start', 'Flexible Terms']
  },

  painPoints: [
    {
      icon: 'Clock',
      title: 'Urgent Skill Needs',
      description: 'Need specific skills now but hiring takes months',
      stat: '4-6mo',
      statLabel: 'Average hiring time'
    },
    {
      icon: 'Users',
      title: 'Temporary Needs',
      description: 'Need extra capacity for projects but don\'t want permanent hires',
      stat: '45%',
      statLabel: 'Projects understaffed'
    },
    {
      icon: 'Puzzle',
      title: 'Specialized Skills',
      description: 'Can\'t find engineers with specific technology expertise',
      stat: '72%',
      statLabel: 'Face skills gaps'
    },
    {
      icon: 'DollarSign',
      title: 'Hiring Costs',
      description: 'Full-time hiring costs too high for uncertain or short-term needs',
      stat: '$30K+',
      statLabel: 'Avg cost per hire'
    }
  ],

  solutions: [
    {
      icon: 'Search',
      title: 'Skill Matching',
      description: 'Match engineers precisely to your technical requirements',
      highlights: [
        'Technical assessment',
        'Experience matching',
        'Culture fit evaluation',
        'Multiple candidates'
      ]
    },
    {
      icon: 'Zap',
      title: 'Rapid Deployment',
      description: 'Get engineers working within 1-2 weeks',
      highlights: [
        'Pre-vetted talent pool',
        'Quick interviews',
        'Fast onboarding',
        'Immediate productivity'
      ]
    },
    {
      icon: 'RefreshCw',
      title: 'Flexible Terms',
      description: 'Engage for the duration you need with flexible terms',
      highlights: [
        'Short or long term',
        'Easy extensions',
        'Scale adjustments',
        '30-day notice'
      ]
    },
    {
      icon: 'Shield',
      title: 'Risk Mitigation',
      description: 'Replacement guarantee and ongoing support',
      highlights: [
        'Replacement guarantee',
        'Performance monitoring',
        'HR support',
        'Quality assurance'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'FileText',
        title: 'Requirements',
        description: 'Define your technical requirements and team needs',
        duration: 'Day 1-2',
        deliverables: [
          'Role definition',
          'Skills requirements',
          'Team context',
          'Engagement terms'
        ]
      },
      {
        icon: 'Users',
        title: 'Candidate Selection',
        description: 'Review pre-vetted candidates matching your needs',
        duration: 'Day 3-7',
        deliverables: [
          'Candidate profiles',
          'Technical assessments',
          'Interview scheduling',
          'Selection support'
        ]
      },
      {
        icon: 'Play',
        title: 'Onboarding',
        description: 'Integrate engineer with your team and systems',
        duration: 'Day 8-14',
        deliverables: [
          'System access',
          'Team introduction',
          'Process orientation',
          'Initial tasks'
        ]
      },
      {
        icon: 'CheckCircle',
        title: 'Delivery',
        description: 'Engineer delivers as part of your team',
        duration: 'Ongoing',
        deliverables: [
          'Sprint participation',
          'Code delivery',
          'Team collaboration',
          'Regular check-ins'
        ]
      }
    ],
    totalDuration: '1-2 weeks to start'
  },

  benefits: [
    {
      icon: 'Zap',
      title: 'Fast Start',
      description: 'Engineers working in days, not months',
      stat: '1-2',
      statSuffix: ' weeks',
      statLabel: 'Time to productivity'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Effective',
      description: 'No recruiting, benefits, or overhead costs',
      stat: '50',
      statSuffix: '%',
      statLabel: 'Cost savings'
    },
    {
      icon: 'RefreshCw',
      title: 'Flexibility',
      description: 'Scale up or down as needed',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Flexible'
    },
    {
      icon: 'CheckCircle',
      title: 'Quality',
      description: 'Pre-vetted senior talent only',
      stat: 'Top 5',
      statSuffix: '%',
      statLabel: 'Of applicants'
    }
  ],

  techStack: [
    {
      name: 'Web Development',
      description: 'Full-stack web technologies',
      technologies: [
        { name: 'React', icon: '/icons/tech/react.svg', category: 'Frontend', proficiency: 'expert' },
        { name: 'Node.js', icon: '/icons/tech/nodejs.svg', category: 'Backend', proficiency: 'expert' },
        { name: 'Python', icon: '/icons/tech/python.svg', category: 'Backend', proficiency: 'expert' },
        { name: 'TypeScript', icon: '/icons/tech/typescript.svg', category: 'Language', proficiency: 'expert' }
      ]
    },
    {
      name: 'Mobile Development',
      description: 'iOS and Android development',
      technologies: [
        { name: 'React Native', icon: '/icons/tech/react.svg', category: 'Mobile', proficiency: 'expert' },
        { name: 'Flutter', icon: '/icons/tech/flutter.svg', category: 'Mobile', proficiency: 'expert' },
        { name: 'Swift', icon: '/icons/tech/swift.svg', category: 'iOS', proficiency: 'expert' },
        { name: 'Kotlin', icon: '/icons/tech/kotlin.svg', category: 'Android', proficiency: 'expert' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      description: 'Cloud and infrastructure',
      technologies: [
        { name: 'AWS', icon: '/icons/tech/aws.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Azure', icon: '/icons/tech/azure.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Kubernetes', icon: '/icons/tech/kubernetes.svg', category: 'DevOps', proficiency: 'expert' },
        { name: 'Terraform', icon: '/icons/tech/terraform.svg', category: 'IaC', proficiency: 'expert' }
      ]
    },
    {
      name: 'Data & AI',
      description: 'Data engineering and AI/ML',
      technologies: [
        { name: 'Python', icon: '/icons/tech/python.svg', category: 'Data', proficiency: 'expert' },
        { name: 'TensorFlow', icon: '/icons/tech/tensorflow.svg', category: 'ML', proficiency: 'advanced' },
        { name: 'Spark', icon: '/icons/tech/spark.svg', category: 'Data', proficiency: 'advanced' },
        { name: 'SQL', icon: '/icons/tech/sql.svg', category: 'Database', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Junior',
        description: 'Junior engineer (1-3 years)',
        price: '$4,500',
        priceNote: 'per month',
        features: [
          { name: 'Full-time dedication', included: true },
          { name: 'Direct team integration', included: true },
          { name: 'Your tools & processes', included: true },
          { name: 'Basic skills', included: true },
          { name: 'Supervised work', included: true },
          { name: 'Architecture decisions', included: false },
          { name: 'Technical leadership', included: false },
          { name: 'Mentoring others', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Senior',
        description: 'Senior engineer (5-8 years)',
        price: '$7,500',
        priceNote: 'per month',
        badge: 'Most Popular',
        features: [
          { name: 'Full-time dedication', included: true },
          { name: 'Direct team integration', included: true },
          { name: 'Your tools & processes', included: true },
          { name: 'Advanced skills', included: true },
          { name: 'Independent work', included: true },
          { name: 'Architecture input', included: true },
          { name: 'Code review', included: true },
          { name: 'Junior mentoring', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Lead/Architect',
        description: 'Tech lead or architect (8+ years)',
        price: '$10,000',
        priceNote: 'per month',
        features: [
          { name: 'Full-time dedication', included: true },
          { name: 'Direct team integration', included: true },
          { name: 'Your tools & processes', included: true },
          { name: 'Expert skills', included: true },
          { name: 'Technical leadership', included: true },
          { name: 'Architecture decisions', included: true },
          { name: 'Team mentoring', included: true },
          { name: 'Strategic input', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need multiple engineers? Ask about volume discounts for 3+ placements.'
  },

  portfolio: [
    {
      title: 'React Native Development',
      client: 'TravelTech Startup',
      industry: 'Travel',
      description: 'Senior React Native developer for mobile app development',
      challenge: 'Needed experienced mobile developer for 6-month project quickly',
      solution: 'Placed senior React Native developer who integrated with existing team',
      results: [
        'Started within 2 weeks',
        'App delivered on schedule',
        'Engagement extended to 18 months',
        'Developer became technical lead'
      ],
      metrics: [
        { label: 'Time to Start', value: '2 weeks' },
        { label: 'Duration', value: '18 months' },
        { label: 'On Time', value: '100%' }
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      tags: ['React Native', 'Mobile', 'Travel', 'Staff Augmentation']
    },
    {
      title: 'Cloud Architecture Team',
      client: 'Enterprise Software Co',
      industry: 'Enterprise',
      description: 'AWS architects for cloud migration project',
      challenge: 'Cloud migration required expertise the internal team lacked',
      solution: 'Provided 3 AWS-certified architects to augment migration team',
      results: [
        'Migration completed on time',
        'Zero downtime during migration',
        'Knowledge transferred to team',
        'Internal team now self-sufficient'
      ],
      metrics: [
        { label: 'Architects', value: '3' },
        { label: 'Downtime', value: '0' },
        { label: 'On Time', value: '100%' }
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      tags: ['AWS', 'Cloud Migration', 'Architecture', 'Enterprise']
    },
    {
      title: 'Python Data Engineering',
      client: 'Analytics Platform Inc',
      industry: 'Data Analytics',
      description: 'Senior Python engineers for data pipeline development',
      challenge: 'Building complex data pipelines required specialized expertise',
      solution: 'Placed 2 senior Python data engineers with ETL experience',
      results: [
        'Data pipeline throughput increased 300%',
        'Processing time reduced by 70%',
        'Engineers integrated seamlessly',
        'Extended engagement to permanent'
      ],
      metrics: [
        { label: 'Engineers', value: '2' },
        { label: 'Performance', value: '300% faster' },
        { label: 'Processing', value: '-70%' }
      ],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
      tags: ['Python', 'Data Engineering', 'ETL', 'Analytics']
    },
    {
      title: 'Frontend Development Team',
      client: 'FinServe Digital',
      industry: 'FinTech',
      description: 'React developers for financial dashboard modernization',
      challenge: 'Urgent need to modernize legacy dashboards for compliance deadline',
      solution: 'Augmented team with 4 senior React developers',
      results: [
        'Met regulatory deadline',
        'Modernized 15 legacy dashboards',
        'User satisfaction increased 40%',
        'Reduced page load time by 60%'
      ],
      metrics: [
        { label: 'Developers', value: '4' },
        { label: 'Dashboards', value: '15' },
        { label: 'Performance', value: '+60%' }
      ],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      tags: ['React', 'FinTech', 'Frontend', 'Modernization']
    }
  ],

  testimonials: [
    {
      quote: 'We needed a React Native expert fast. Within two weeks we had someone who hit the ground running and exceeded expectations.',
      author: 'Sarah Park',
      role: 'CTO',
      company: 'TravelTech Startup',
      rating: 5,
      location: 'Miami, FL'
    },
    {
      quote: 'The AWS architects were exactly what we needed for our migration. They integrated perfectly and left our team stronger.',
      author: 'Michael Torres',
      role: 'VP Engineering',
      company: 'Enterprise Software Co',
      rating: 5,
      location: 'Atlanta, GA'
    }
  ],

  faqs: [
    {
      question: 'How quickly can you provide an engineer?',
      answer: 'We can typically provide candidates within 3-5 business days from receiving requirements. If we have a match in our active pool, it can be even faster. Full onboarding to your team usually takes 1-2 weeks total.'
    },
    {
      question: 'What happens if the engineer isn\'t a good fit?',
      answer: 'We offer a replacement guarantee during the first 30 days. If the engineer doesn\'t meet expectations for any reason, we\'ll provide a replacement at no additional cost. This is rare due to our thorough vetting process.'
    },
    {
      question: 'Can we hire the engineer full-time later?',
      answer: 'Yes, many of our augmentation engagements convert to full-time hires. After 6 months of engagement, you can hire the engineer directly with a one-time conversion fee. This is a great way to "try before you buy."'
    },
    {
      question: 'How do augmented staff integrate with our team?',
      answer: 'Our engineers work as part of your team using your tools, processes, and communication channels. They attend your standups, participate in sprint planning, and collaborate directly with your engineers. You manage them just like your own employees.'
    },
    {
      question: 'What are the minimum engagement terms?',
      answer: 'Our minimum engagement is 3 months, which allows time for meaningful contribution. After that, engagements continue month-to-month with 30 days notice for changes. We offer discounts for longer commitments.'
    }
  ],

  relatedServices: [
    {
      name: 'Dedicated Development Teams',
      slug: 'dedicated-development-teams',
      description: 'Full dedicated teams',
      icon: 'Users'
    },
    {
      name: 'Project Outsourcing',
      slug: 'project-outsourcing',
      description: 'Complete project delivery',
      icon: 'Box'
    },
    {
      name: 'DevOps Outsourcing',
      slug: 'devops-outsourcing',
      description: 'DevOps specialists',
      icon: 'Settings'
    },
    {
      name: 'QA Testing Outsourcing',
      slug: 'qa-testing-outsourcing',
      description: 'QA engineers',
      icon: 'CheckCircle'
    }
  ],

  seo: {
    title: 'IT Staff Augmentation Services | Developer Staffing',
    description: 'Fast IT staff augmentation services. Pre-vetted senior developers, 1-2 week placement, flexible terms. Fill skill gaps instantly with expert engineers.',
    keywords: [
      'staff augmentation',
      'it staff augmentation',
      'developer staffing',
      'tech staffing',
      'software developer staffing',
      'contract developers',
      'augmented staff',
      'it staffing services',
      'developer placement',
      'technical staffing'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'IT Staff Augmentation Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'IT Staffing'
      }
    }
  }
};
