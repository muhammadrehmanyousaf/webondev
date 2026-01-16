// Dedicated Development Teams Service Data
import { ServiceData } from '@/components/services/sections';

export const dedicatedDevelopmentTeamsData: ServiceData = {
  name: 'Dedicated Development Teams',
  slug: 'dedicated-development-teams',
  tagline: 'Your extended engineering team, fully dedicated to your success',
  category: 'Outsourcing Services',
  description: 'Build products faster with dedicated development teams that function as your own. We provide skilled engineers who integrate seamlessly with your organization, working exclusively on your projects with full commitment.',

  hero: {
    headline: 'Dedicated Development Teams',
    subheadline: 'Your Team, Your Way, Your Success',
    description: 'Scale your development capacity instantly with dedicated teams that work exclusively for you. Our engineers integrate with your processes, tools, and culture to become a true extension of your organization.',
    keyFeatures: [
      'Full-time dedicated engineers',
      'Seamless team integration',
      'Your timezone, your tools',
      'Direct team management',
      'Flexible team scaling',
      'Long-term partnership'
    ],
    badges: ['500+ Engineers', 'Fortune 500 Clients', '98% Retention', 'Global Delivery']
  },

  painPoints: [
    {
      icon: 'Users',
      title: 'Talent Shortage',
      description: 'Unable to find and hire qualified developers in competitive market',
      stat: '87%',
      statLabel: 'Face hiring challenges'
    },
    {
      icon: 'Clock',
      title: 'Slow Hiring',
      description: 'Months to hire developers while competitors move faster',
      stat: '6mo',
      statLabel: 'Average time to hire'
    },
    {
      icon: 'DollarSign',
      title: 'High Costs',
      description: 'Full-time hiring costs including benefits, overhead, and retention',
      stat: '2-3x',
      statLabel: 'True cost of hire'
    },
    {
      icon: 'TrendingDown',
      title: 'Scaling Difficulties',
      description: 'Can\'t scale team up or down based on project needs',
      stat: '40%',
      statLabel: 'Capacity mismatch'
    }
  ],

  solutions: [
    {
      icon: 'Users',
      title: 'Custom Team Building',
      description: 'Build your ideal team with handpicked engineers matching your needs',
      highlights: [
        'Skills matching',
        'Culture fit assessment',
        'Technical vetting',
        'Team composition'
      ]
    },
    {
      icon: 'GitMerge',
      title: 'Seamless Integration',
      description: 'Teams integrate with your processes, tools, and workflows',
      highlights: [
        'Process alignment',
        'Tool integration',
        'Communication setup',
        'Culture onboarding'
      ]
    },
    {
      icon: 'Settings',
      title: 'Flexible Management',
      description: 'Direct management or managed team options to fit your style',
      highlights: [
        'Direct team access',
        'Managed delivery option',
        'Hybrid models',
        'Performance tracking'
      ]
    },
    {
      icon: 'TrendingUp',
      title: 'Scale on Demand',
      description: 'Easily scale your team up or down as needs change',
      highlights: [
        'Rapid scaling',
        'Skill additions',
        'Project flexibility',
        'No long-term lock-in'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Discovery',
        description: 'Understand your requirements, culture, and technical needs',
        duration: 'Week 1',
        deliverables: [
          'Requirements analysis',
          'Technical assessment',
          'Team structure design',
          'Engagement model'
        ]
      },
      {
        icon: 'Users',
        title: 'Team Selection',
        description: 'Handpick engineers matching your specific requirements',
        duration: 'Week 2-3',
        deliverables: [
          'Candidate profiles',
          'Technical interviews',
          'Team finalization',
          'Offer acceptance'
        ]
      },
      {
        icon: 'Play',
        title: 'Onboarding',
        description: 'Integrate team with your systems, processes, and culture',
        duration: 'Week 3-4',
        deliverables: [
          'System access',
          'Process training',
          'Team introductions',
          'Initial planning'
        ]
      },
      {
        icon: 'Rocket',
        title: 'Delivery',
        description: 'Team begins delivering value with continuous optimization',
        duration: 'Ongoing',
        deliverables: [
          'Sprint delivery',
          'Performance reviews',
          'Continuous improvement',
          'Scale as needed'
        ]
      }
    ],
    totalDuration: '3-4 weeks to productivity'
  },

  benefits: [
    {
      icon: 'Zap',
      title: 'Fast Scaling',
      description: 'Build your team in weeks, not months',
      stat: '3-4',
      statSuffix: ' weeks',
      statLabel: 'Team ready'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Efficiency',
      description: 'Reduce development costs significantly',
      stat: '40-60',
      statSuffix: '%',
      statLabel: 'Cost savings'
    },
    {
      icon: 'Users',
      title: 'High Retention',
      description: 'Stable teams with excellent retention',
      stat: '98',
      statSuffix: '%',
      statLabel: 'Team retention'
    },
    {
      icon: 'CheckCircle',
      title: 'Quality Talent',
      description: 'Pre-vetted senior engineers',
      stat: 'Top 5',
      statSuffix: '%',
      statLabel: 'Of talent pool'
    }
  ],

  techStack: [
    {
      name: 'Frontend Expertise',
      description: 'Modern frontend technologies',
      technologies: [
        { name: 'React', icon: '/icons/tech/react.svg', category: 'Frontend', proficiency: 'expert' },
        { name: 'Angular', icon: '/icons/tech/angular.svg', category: 'Frontend', proficiency: 'expert' },
        { name: 'Vue.js', icon: '/icons/tech/vue.svg', category: 'Frontend', proficiency: 'expert' },
        { name: 'Next.js', icon: '/icons/tech/nextjs.svg', category: 'Frontend', proficiency: 'expert' }
      ]
    },
    {
      name: 'Backend Expertise',
      description: 'Scalable backend technologies',
      technologies: [
        { name: 'Node.js', icon: '/icons/tech/nodejs.svg', category: 'Backend', proficiency: 'expert' },
        { name: 'Python', icon: '/icons/tech/python.svg', category: 'Backend', proficiency: 'expert' },
        { name: 'Java', icon: '/icons/tech/java.svg', category: 'Backend', proficiency: 'expert' },
        { name: '.NET', icon: '/icons/tech/dotnet.svg', category: 'Backend', proficiency: 'expert' }
      ]
    },
    {
      name: 'Mobile Development',
      description: 'Native and cross-platform mobile',
      technologies: [
        { name: 'React Native', icon: '/icons/tech/react.svg', category: 'Mobile', proficiency: 'expert' },
        { name: 'Flutter', icon: '/icons/tech/flutter.svg', category: 'Mobile', proficiency: 'expert' },
        { name: 'iOS/Swift', icon: '/icons/tech/swift.svg', category: 'Mobile', proficiency: 'expert' },
        { name: 'Android/Kotlin', icon: '/icons/tech/kotlin.svg', category: 'Mobile', proficiency: 'expert' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      description: 'Cloud infrastructure and DevOps',
      technologies: [
        { name: 'AWS', icon: '/icons/tech/aws.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Azure', icon: '/icons/tech/azure.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Kubernetes', icon: '/icons/tech/kubernetes.svg', category: 'DevOps', proficiency: 'expert' },
        { name: 'Docker', icon: '/icons/tech/docker.svg', category: 'DevOps', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Small Team',
        description: '2-3 dedicated engineers',
        price: '$15,000',
        priceNote: 'per month',
        features: [
          { name: '2-3 full-time engineers', included: true },
          { name: 'Direct team management', included: true },
          { name: 'Your tools & processes', included: true },
          { name: 'Daily standups', included: true },
          { name: 'Weekly reporting', included: true },
          { name: 'Team lead', included: false },
          { name: 'QA engineer', included: false },
          { name: 'DevOps support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Full Team',
        description: '5-7 engineers with lead',
        price: '$35,000',
        priceNote: 'per month',
        badge: 'Most Popular',
        features: [
          { name: '5-7 full-time engineers', included: true },
          { name: 'Technical team lead', included: true },
          { name: 'Direct management', included: true },
          { name: 'Daily collaboration', included: true },
          { name: 'Comprehensive reporting', included: true },
          { name: 'QA engineer included', included: true },
          { name: 'DevOps support', included: true },
          { name: 'Dedicated PM', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise Team',
        description: '10+ engineers, full support',
        price: 'Custom',
        priceNote: 'based on requirements',
        features: [
          { name: '10+ full-time engineers', included: true },
          { name: 'Multiple team leads', included: true },
          { name: 'Full management support', included: true },
          { name: 'Complete integration', included: true },
          { name: 'Executive reporting', included: true },
          { name: 'Full QA team', included: true },
          { name: 'Dedicated DevOps', included: true },
          { name: 'Dedicated PM', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'All teams include free replacement guarantee. Scale up or down with 30 days notice.'
  },

  portfolio: [
    {
      title: 'FinTech Platform Development',
      client: 'PaymentPro Technologies',
      industry: 'FinTech',
      description: 'Dedicated team of 8 engineers building payment processing platform',
      challenge: 'Needed to scale engineering capacity quickly for aggressive roadmap',
      solution: 'Provided dedicated team that integrated with existing engineering organization',
      results: [
        'Team productive in 3 weeks',
        'Delivered 40% more features than planned',
        'Zero turnover in 2 years',
        'Platform processing $2B annually'
      ],
      metrics: [
        { label: 'Team Size', value: '8 engineers' },
        { label: 'Retention', value: '100%' },
        { label: 'Volume', value: '$2B/year' }
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      tags: ['FinTech', 'Payments', 'Dedicated Team', 'Long-term']
    },
    {
      title: 'Healthcare App Development',
      client: 'HealthConnect Systems',
      industry: 'Healthcare',
      description: 'Dedicated mobile team for patient engagement platform',
      challenge: 'Internal team lacked mobile expertise for critical patient app',
      solution: 'Built dedicated mobile team with iOS, Android, and backend specialists',
      results: [
        'App launched on schedule',
        'App store rating 4.8/5',
        '500K+ active users',
        'Team expanded from 4 to 10'
      ],
      metrics: [
        { label: 'Rating', value: '4.8/5' },
        { label: 'Users', value: '500K+' },
        { label: 'Team Growth', value: '4 to 10' }
      ],
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'Mobile', 'iOS', 'Android']
    },
    {
      title: 'Enterprise SaaS Platform',
      client: 'CloudVentures Inc',
      industry: 'SaaS',
      description: 'Dedicated team of 12 engineers for enterprise SaaS platform development',
      challenge: 'Rapid product development needed to capture market opportunity',
      solution: 'Assembled full-stack dedicated team with cloud and DevOps expertise',
      results: [
        'MVP launched in 4 months',
        'Scaled to 10,000+ enterprise users',
        '99.9% platform uptime achieved',
        'Series B funding secured'
      ],
      metrics: [
        { label: 'Team Size', value: '12 engineers' },
        { label: 'Time to MVP', value: '4 months' },
        { label: 'Users', value: '10K+' }
      ],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
      tags: ['SaaS', 'Enterprise', 'Cloud', 'Full-Stack']
    },
    {
      title: 'Global Retail Technology',
      client: 'RetailMax Global',
      industry: 'Retail',
      description: 'Dedicated development center for global retail technology initiatives',
      challenge: 'Needed large-scale development capacity for digital transformation',
      solution: 'Established offshore dedicated team with retail domain expertise',
      results: [
        'Delivered 15+ major features annually',
        'Reduced development costs by 45%',
        'Team grew to 25 engineers',
        '5-year ongoing partnership'
      ],
      metrics: [
        { label: 'Cost Savings', value: '45%' },
        { label: 'Team Size', value: '25 engineers' },
        { label: 'Partnership', value: '5+ years' }
      ],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      tags: ['Retail', 'Digital Transformation', 'Offshore', 'Long-term']
    }
  ],

  testimonials: [
    {
      quote: 'The dedicated team feels like our own employees. They understand our business, our culture, and deliver consistently.',
      author: 'James Mitchell',
      role: 'VP Engineering',
      company: 'PaymentPro Technologies',
      rating: 5,
      location: 'San Francisco, CA'
    },
    {
      quote: 'We went from zero mobile capability to a top-rated app in months. The team is exceptional and truly dedicated.',
      author: 'Dr. Lisa Chen',
      role: 'CTO',
      company: 'HealthConnect Systems',
      rating: 5,
      location: 'Boston, MA'
    }
  ],

  faqs: [
    {
      question: 'How is this different from contractors or freelancers?',
      answer: 'Dedicated teams work full-time exclusively for you, providing continuity and deep product knowledge. Unlike freelancers, they don\'t work on other projects. They integrate with your team culture and processes, building institutional knowledge over time.'
    },
    {
      question: 'Can I manage the team directly?',
      answer: 'Absolutely. Our dedicated teams work under your direct management using your tools and processes. You have full control over priorities, tasks, and daily work. We handle HR, administration, and infrastructure so you can focus on building.'
    },
    {
      question: 'What if a team member doesn\'t work out?',
      answer: 'We offer a free replacement guarantee. If any team member doesn\'t meet expectations, we\'ll replace them at no additional cost. Our rigorous selection process means this is rare, but we stand behind our talent.'
    },
    {
      question: 'What time zones do your teams work in?',
      answer: 'We build teams to match your preferred working hours. We have engineers across multiple time zones including Americas, Europe, and Asia. Most clients prefer significant timezone overlap, which we ensure during team composition.'
    },
    {
      question: 'How do you ensure quality of engineers?',
      answer: 'Our engineers go through rigorous vetting: technical assessments, coding challenges, system design interviews, and soft skills evaluation. We accept only the top 5% of applicants. We also match engineers to projects based on relevant experience.'
    }
  ],

  relatedServices: [
    {
      name: 'Staff Augmentation',
      slug: 'staff-augmentation',
      description: 'Individual engineer placement',
      icon: 'UserPlus'
    },
    {
      name: 'Project Outsourcing',
      slug: 'project-outsourcing',
      description: 'Complete project delivery',
      icon: 'Box'
    },
    {
      name: 'Offshore Development',
      slug: 'offshore-development',
      description: 'Cost-effective offshore teams',
      icon: 'Globe'
    },
    {
      name: 'QA Testing Outsourcing',
      slug: 'qa-testing-outsourcing',
      description: 'Dedicated QA teams',
      icon: 'CheckCircle'
    }
  ],

  seo: {
    title: 'Dedicated Development Teams | Offshore Software Teams',
    description: 'Build dedicated development teams that work exclusively for you. Skilled engineers, seamless integration, and flexible scaling. 40-60% cost savings.',
    keywords: [
      'dedicated development team',
      'dedicated software team',
      'offshore development team',
      'remote development team',
      'dedicated engineers',
      'software development outsourcing',
      'extended development team',
      'nearshore development team',
      'dedicated programmers',
      'full-time developers'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Dedicated Development Teams',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Software Development Outsourcing'
      }
    }
  }
};
