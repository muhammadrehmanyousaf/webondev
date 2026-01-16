// Agile Consulting Service Data
import { ServiceData } from '@/components/services/sections';

export const agileConsultingData: ServiceData = {
  name: 'Agile Consulting',
  slug: 'agile-consulting',
  tagline: 'Transform how your teams work with Agile',
  category: 'Consulting & Strategy',
  description: 'Accelerate delivery and improve outcomes with Agile transformation. We help organizations adopt Agile methodologies that increase speed, quality, and team satisfaction while maintaining business alignment.',

  hero: {
    headline: 'Agile Consulting Services',
    subheadline: 'Accelerate Delivery with Agile Excellence',
    description: 'Transform your organization\'s ability to deliver value. Our Agile experts guide teams and enterprises through adoption, scaling, and continuous improvement of Agile practices.',
    keyFeatures: [
      'Agile transformation',
      'Scrum & Kanban implementation',
      'SAFe implementation',
      'Agile coaching',
      'Team training',
      'Metrics & improvement'
    ],
    badges: ['SAFe Partners', 'Certified Coaches', '200+ Transformations', 'Enterprise Experience']
  },

  painPoints: [
    {
      icon: 'Clock',
      title: 'Slow Delivery',
      description: 'Taking too long to deliver features and respond to market changes',
      stat: '12mo',
      statLabel: 'Average release cycle'
    },
    {
      icon: 'Target',
      title: 'Missed Expectations',
      description: 'Delivered work not meeting stakeholder or customer expectations',
      stat: '45%',
      statLabel: 'Miss expectations'
    },
    {
      icon: 'Users',
      title: 'Low Morale',
      description: 'Development teams frustrated with processes and ways of working',
      stat: '60%',
      statLabel: 'Report frustration'
    },
    {
      icon: 'AlertTriangle',
      title: 'Scaling Challenges',
      description: 'Unable to scale Agile practices across multiple teams effectively',
      stat: '70%',
      statLabel: 'Scaling attempts fail'
    }
  ],

  solutions: [
    {
      icon: 'Target',
      title: 'Agile Transformation',
      description: 'Guide organizations through comprehensive Agile adoption',
      highlights: [
        'Assessment & readiness',
        'Transformation roadmap',
        'Pilot teams',
        'Enterprise rollout'
      ]
    },
    {
      icon: 'Users',
      title: 'Team Coaching',
      description: 'Hands-on coaching to build high-performing Agile teams',
      highlights: [
        'Scrum Master coaching',
        'Product Owner coaching',
        'Team facilitation',
        'Practice improvement'
      ]
    },
    {
      icon: 'Layers',
      title: 'Scaled Agile (SAFe)',
      description: 'Implement SAFe for enterprise-wide Agile alignment',
      highlights: [
        'SAFe implementation',
        'ART launch',
        'Portfolio management',
        'Lean-Agile leadership'
      ]
    },
    {
      icon: 'TrendingUp',
      title: 'Agile Maturity',
      description: 'Assess and improve Agile maturity across the organization',
      highlights: [
        'Maturity assessment',
        'Metrics & OKRs',
        'Continuous improvement',
        'Center of excellence'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Assessment',
        description: 'Assess current state and define Agile transformation vision',
        duration: 'Week 1-2',
        deliverables: [
          'Current state assessment',
          'Readiness evaluation',
          'Vision & goals',
          'Transformation roadmap'
        ]
      },
      {
        icon: 'Play',
        title: 'Pilot Launch',
        description: 'Launch pilot teams with intensive coaching and support',
        duration: 'Week 3-10',
        deliverables: [
          'Pilot team selection',
          'Training delivery',
          'Agile ceremonies',
          'Initial metrics'
        ]
      },
      {
        icon: 'TrendingUp',
        title: 'Scale & Optimize',
        description: 'Expand Agile practices and optimize based on learnings',
        duration: 'Week 10-20',
        deliverables: [
          'Expanded teams',
          'Scaled practices',
          'Impediment removal',
          'Process refinement'
        ]
      },
      {
        icon: 'RefreshCw',
        title: 'Sustain & Improve',
        description: 'Build internal capability for continuous improvement',
        duration: 'Ongoing',
        deliverables: [
          'Internal coaches',
          'Community of practice',
          'Continuous improvement',
          'Maturity tracking'
        ]
      }
    ],
    totalDuration: '16-24 weeks'
  },

  benefits: [
    {
      icon: 'Zap',
      title: 'Faster Delivery',
      description: 'Dramatically reduce time-to-market for new features',
      stat: '50',
      statSuffix: '%',
      statLabel: 'Faster delivery'
    },
    {
      icon: 'CheckCircle',
      title: 'Higher Quality',
      description: 'Fewer defects through iterative development and testing',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Fewer defects'
    },
    {
      icon: 'Users',
      title: 'Team Engagement',
      description: 'Increased team satisfaction and reduced turnover',
      stat: '35',
      statSuffix: '%',
      statLabel: 'Higher engagement'
    },
    {
      icon: 'Target',
      title: 'Business Alignment',
      description: 'Better alignment between delivery and business priorities',
      stat: '90',
      statSuffix: '%',
      statLabel: 'Stakeholder satisfaction'
    }
  ],

  techStack: [
    {
      name: 'Agile Frameworks',
      description: 'Agile methodologies and frameworks',
      technologies: [
        { name: 'Scrum', icon: '/icons/tech/scrum.svg', category: 'Framework', proficiency: 'expert' },
        { name: 'Kanban', icon: '/icons/tech/kanban.svg', category: 'Framework', proficiency: 'expert' },
        { name: 'SAFe', icon: '/icons/tech/safe.svg', category: 'Scaled', proficiency: 'expert' },
        { name: 'LeSS', icon: '/icons/tech/less.svg', category: 'Scaled', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Agile Tools',
      description: 'Project and collaboration tools',
      technologies: [
        { name: 'Jira', icon: '/icons/tech/jira.svg', category: 'Tracking', proficiency: 'expert' },
        { name: 'Azure DevOps', icon: '/icons/tech/azure-devops.svg', category: 'ALM', proficiency: 'expert' },
        { name: 'Rally', icon: '/icons/tech/rally.svg', category: 'Enterprise', proficiency: 'advanced' },
        { name: 'VersionOne', icon: '/icons/tech/versionone.svg', category: 'Enterprise', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Collaboration',
      description: 'Team collaboration tools',
      technologies: [
        { name: 'Miro', icon: '/icons/tech/miro.svg', category: 'Whiteboard', proficiency: 'expert' },
        { name: 'Confluence', icon: '/icons/tech/confluence.svg', category: 'Documentation', proficiency: 'expert' },
        { name: 'Slack', icon: '/icons/tech/slack.svg', category: 'Communication', proficiency: 'expert' },
        { name: 'Zoom', icon: '/icons/tech/zoom.svg', category: 'Meetings', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Team Coaching',
        description: 'Agile coaching for single team',
        price: '$8,000',
        priceNote: 'per month',
        features: [
          { name: 'Dedicated Agile coach', included: true },
          { name: 'Scrum/Kanban implementation', included: true },
          { name: 'Team training', included: true },
          { name: 'Ceremony facilitation', included: true },
          { name: 'Metrics setup', included: true },
          { name: 'Multiple teams', included: false },
          { name: 'SAFe implementation', included: false },
          { name: 'Leadership coaching', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Transformation',
        description: 'Multi-team Agile transformation',
        price: '$25,000',
        priceNote: 'per month',
        badge: 'Most Popular',
        features: [
          { name: 'Multiple Agile coaches', included: true },
          { name: 'Full transformation support', included: true },
          { name: 'Comprehensive training', included: true },
          { name: 'All ceremonies', included: true },
          { name: 'Advanced metrics', included: true },
          { name: 'Up to 5 teams', included: true },
          { name: 'Scaled practices', included: true },
          { name: 'Leadership coaching', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Enterprise Agile transformation',
        price: 'Custom',
        priceNote: 'based on scope',
        features: [
          { name: 'Scaled coaching team', included: true },
          { name: 'SAFe implementation', included: true },
          { name: 'Enterprise training', included: true },
          { name: 'Full transformation', included: true },
          { name: 'Enterprise metrics', included: true },
          { name: 'Unlimited teams', included: true },
          { name: 'Portfolio Agile', included: true },
          { name: 'Executive coaching', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need training only? Ask about our Agile training workshops and certifications.'
  },

  portfolio: [
    {
      title: 'Enterprise SAFe Transformation',
      client: 'TechGlobal Corporation',
      industry: 'Technology',
      description: 'SAFe implementation across 40 teams in 5 ARTs',
      challenge: 'Siloed teams, slow delivery, and inability to coordinate large initiatives',
      solution: 'Implemented SAFe with PI Planning, common cadence, and Lean-Agile leadership',
      results: [
        '40 teams aligned in 5 ARTs',
        'Release frequency increased 4x',
        'Team satisfaction improved 45%',
        'Time-to-market reduced 60%'
      ],
      metrics: [
        { label: 'Teams', value: '40' },
        { label: 'Release Freq', value: '4x' },
        { label: 'Time-to-Market', value: '-60%' }
      ],
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=600&fit=crop',
      tags: ['SAFe', 'Enterprise', 'Transformation', 'Scaling']
    },
    {
      title: 'Startup Agile Foundation',
      client: 'InnovateTech Startup',
      industry: 'SaaS',
      description: 'Built Agile foundation for fast-growing startup',
      challenge: 'Rapid growth creating chaos with no formal processes',
      solution: 'Implemented lightweight Scrum with focus on speed and learning',
      results: [
        'Delivery predictability improved 80%',
        'Sprint goals achieved 95% of time',
        'Customer satisfaction increased 40%',
        'Team retention improved significantly'
      ],
      metrics: [
        { label: 'Predictability', value: '+80%' },
        { label: 'Sprint Goals', value: '95%' },
        { label: 'CSAT', value: '+40%' }
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      tags: ['Scrum', 'Startup', 'SaaS', 'Agile Foundation']
    },
    {
      title: 'Financial Services Agile Adoption',
      client: 'Premier Investment Group',
      industry: 'Financial Services',
      description: 'Agile transformation for regulated financial services organization',
      challenge: 'Traditional waterfall culture with heavy compliance requirements',
      solution: 'Hybrid Agile approach balancing speed with regulatory compliance',
      results: [
        'Delivery cycle reduced from 6 months to 6 weeks',
        'Compliance maintained at 100%',
        'Developer satisfaction improved 50%',
        'Feature delivery increased 3x'
      ],
      metrics: [
        { label: 'Cycle Time', value: '-90%' },
        { label: 'Compliance', value: '100%' },
        { label: 'Feature Delivery', value: '3x' }
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      tags: ['Financial Services', 'Compliance', 'Hybrid Agile', 'Transformation']
    },
    {
      title: 'Healthcare DevOps Integration',
      client: 'HealthTech Solutions',
      industry: 'Healthcare',
      description: 'Integrated DevOps practices with existing Agile teams',
      challenge: 'Agile teams struggling with deployment bottlenecks and quality issues',
      solution: 'Implemented CI/CD pipelines and integrated DevOps practices with Scrum',
      results: [
        'Deployment frequency increased 10x',
        'Lead time reduced from weeks to hours',
        'Defect rate decreased 70%',
        'Team autonomy significantly improved'
      ],
      metrics: [
        { label: 'Deployments', value: '10x' },
        { label: 'Lead Time', value: 'Hours' },
        { label: 'Defects', value: '-70%' }
      ],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'DevOps', 'CI/CD', 'Quality']
    }
  ],

  testimonials: [
    {
      quote: 'The SAFe transformation was the most significant change in how we work. We finally have alignment across our teams.',
      author: 'Carlos Rodriguez',
      role: 'VP Engineering',
      company: 'TechGlobal Corporation',
      rating: 5,
      location: 'San Jose, CA'
    },
    {
      quote: 'They understood that startups need lightweight processes. Our Agile implementation was perfect for our stage and culture.',
      author: 'Emily Foster',
      role: 'CTO',
      company: 'InnovateTech Startup',
      rating: 5,
      location: 'Austin, TX'
    }
  ],

  faqs: [
    {
      question: 'Which Agile framework should we use?',
      answer: 'The best framework depends on your context. Scrum works well for teams building complex products. Kanban is great for operations and maintenance. SAFe is appropriate for enterprises needing alignment across many teams. We assess your situation and recommend the right approach.'
    },
    {
      question: 'How long does an Agile transformation take?',
      answer: 'Team-level Agile adoption typically shows results within 3-6 months. Enterprise transformations are longer journeys, typically 1-2 years for significant culture change. We focus on quick wins while building toward sustainable transformation.'
    },
    {
      question: 'Do we need to use specific tools?',
      answer: 'Agile is about mindset and practices, not tools. However, good tools help. We work with whatever tools you have or recommend options if needed. Jira is common, but we\'re experienced with Azure DevOps, Rally, and others.'
    },
    {
      question: 'How do you measure Agile success?',
      answer: 'We establish metrics aligned with your goals. Common measures include velocity/throughput, lead time, deployment frequency, quality metrics, and team engagement. We believe in balanced metrics that prevent gaming and focus on outcomes.'
    },
    {
      question: 'Will Agile work with our existing processes?',
      answer: 'Agile integrates with most environments with some adaptation. We help navigate compliance requirements, traditional governance, and hybrid situations. The goal is better outcomes, not Agile purity.'
    }
  ],

  relatedServices: [
    {
      name: 'Project Management',
      slug: 'project-management',
      description: 'Agile project delivery',
      icon: 'CheckSquare'
    },
    {
      name: 'Product Strategy',
      slug: 'product-strategy',
      description: 'Agile product development',
      icon: 'Box'
    },
    {
      name: 'Digital Transformation',
      slug: 'digital-transformation',
      description: 'Digital delivery acceleration',
      icon: 'Zap'
    },
    {
      name: 'Business Analysis',
      slug: 'business-analysis',
      description: 'Agile requirements',
      icon: 'FileText'
    }
  ],

  seo: {
    title: 'Agile Consulting Services | Agile Transformation & Coaching',
    description: 'Expert Agile consulting services. Agile transformation, SAFe implementation, Scrum coaching, and team training. Accelerate delivery with Agile excellence.',
    keywords: [
      'agile consulting',
      'agile transformation',
      'safe implementation',
      'scrum coaching',
      'agile coach',
      'agile training',
      'scaled agile',
      'agile methodology',
      'kanban consulting',
      'enterprise agile'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Agile Consulting Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Agile Consulting'
      }
    }
  }
};
