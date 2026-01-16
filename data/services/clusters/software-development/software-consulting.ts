// Software Consulting - Software Development Cluster
// Comprehensive service data for software consulting services

import { ServiceData } from '@/components/services/sections';

export const softwareConsultingData: ServiceData = {
  slug: 'software-consulting',
  name: 'Software Consulting',
  tagline: 'Expert guidance to make the right technology decisions',
  description: 'Navigate complex technology decisions with confidence. Our seasoned consultants provide strategic guidance on architecture, technology selection, process optimization, and digital transformation—helping you avoid costly mistakes and accelerate success.',
  category: 'Software Development',

  hero: {
    headline: 'Software Consulting',
    subheadline: 'Make Better Technology Decisions',
    description: 'Stop guessing on critical technology choices. Our expert consultants help you evaluate options, design architectures, optimize processes, and build roadmaps that align technology investments with business outcomes.',
    keyFeatures: [
      'Technology Strategy & Roadmaps',
      'Architecture Design & Review',
      'Vendor & Tool Evaluation',
      'Team Assessment & Optimization'
    ],
    badges: ['Strategy', 'Architecture', 'Process', 'Transformation']
  },

  painPoints: [
    {
      icon: 'HelpCircle',
      title: 'Analysis Paralysis',
      description: 'Too many technology options with no clear way to evaluate which is right for your specific situation.',
      stat: '100+',
      statLabel: 'options to evaluate'
    },
    {
      icon: 'DollarSign',
      title: 'Costly Mistakes',
      description: 'Wrong technology decisions cost millions in failed projects, rewrites, and missed opportunities.',
      stat: '$2.5M',
      statLabel: 'avg failed project'
    },
    {
      icon: 'Users',
      title: 'Skills Gap',
      description: 'Internal teams lack experience with new technologies, leading to poor implementations.',
      stat: '65%',
      statLabel: 'projects delayed'
    },
    {
      icon: 'AlertTriangle',
      title: 'Technical Debt Crisis',
      description: 'Years of quick fixes have created unmaintainable systems that slow down everything.',
      stat: '40%',
      statLabel: 'dev time on debt'
    },
    {
      icon: 'Map',
      title: 'No Clear Roadmap',
      description: 'Reactive technology decisions without strategic vision lead to fragmented, inconsistent systems.',
      stat: '70%',
      statLabel: 'lack IT strategy'
    },
    {
      icon: 'Clock',
      title: 'Vendor Lock-in',
      description: 'Past decisions have locked you into expensive vendors with no clear migration path.',
      stat: '3x',
      statLabel: 'premium paid'
    }
  ],

  solutions: [
    {
      icon: 'Compass',
      title: 'Technology Strategy',
      description: 'Develop comprehensive technology roadmaps aligned with business objectives.',
      highlights: [
        'Digital transformation planning',
        'Technology roadmaps',
        'Build vs. buy analysis',
        'Innovation assessment'
      ]
    },
    {
      icon: 'Layers',
      title: 'Architecture Consulting',
      description: 'Design scalable, maintainable architectures or review and improve existing systems.',
      highlights: [
        'Architecture design',
        'Architecture review',
        'Modernization strategy',
        'Performance optimization'
      ]
    },
    {
      icon: 'Search',
      title: 'Technology Evaluation',
      description: 'Objectively evaluate technologies, vendors, and tools for your specific needs.',
      highlights: [
        'Framework comparison',
        'Vendor assessment',
        'Proof of concept',
        'TCO analysis'
      ]
    },
    {
      icon: 'Users',
      title: 'Team & Process Assessment',
      description: 'Evaluate team capabilities and optimize development processes.',
      highlights: [
        'Skills assessment',
        'Process optimization',
        'Agile transformation',
        'Team structure design'
      ]
    },
    {
      icon: 'FileCode',
      title: 'Code & System Audits',
      description: 'Deep technical audits of codebases, infrastructure, and security.',
      highlights: [
        'Code quality audit',
        'Security assessment',
        'Infrastructure review',
        'Technical debt analysis'
      ]
    },
    {
      icon: 'GraduationCap',
      title: 'Technical Leadership',
      description: 'Fractional CTO services and technical leadership for critical initiatives.',
      highlights: [
        'Fractional CTO',
        'Technical advisory',
        'Hiring guidance',
        'Investor due diligence'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'MessageSquare',
        title: 'Discovery',
        description: 'Understand your business context, challenges, and objectives through stakeholder interviews.',
        duration: '1-2 weeks',
        deliverables: ['Stakeholder interviews', 'Challenge identification', 'Goals alignment', 'Scope definition']
      },
      {
        icon: 'Search',
        title: 'Assessment',
        description: 'Deep dive into current technology landscape, architecture, and processes.',
        duration: '2-4 weeks',
        deliverables: ['Technology audit', 'Architecture review', 'Process analysis', 'Gap assessment']
      },
      {
        icon: 'Lightbulb',
        title: 'Analysis',
        description: 'Analyze findings, research options, and develop recommendations.',
        duration: '2-3 weeks',
        deliverables: ['Options analysis', 'Risk assessment', 'Cost-benefit analysis', 'Recommendations']
      },
      {
        icon: 'Map',
        title: 'Roadmap Development',
        description: 'Create actionable roadmaps with prioritized initiatives and success metrics.',
        duration: '1-2 weeks',
        deliverables: ['Strategic roadmap', 'Implementation plan', 'Resource requirements', 'Success metrics']
      },
      {
        icon: 'Presentation',
        title: 'Presentation & Alignment',
        description: 'Present findings and recommendations to stakeholders, align on priorities.',
        duration: '1 week',
        deliverables: ['Executive presentation', 'Technical documentation', 'Stakeholder alignment', 'Decision framework']
      },
      {
        icon: 'HandHelpingIcon',
        title: 'Implementation Support',
        description: 'Guide implementation, review progress, and adjust recommendations as needed.',
        duration: 'Ongoing',
        deliverables: ['Implementation guidance', 'Progress reviews', 'Adjustment recommendations', 'Knowledge transfer']
      }
    ],
    totalDuration: '7-12 weeks engagement'
  },

  benefits: [
    {
      icon: 'Target',
      title: 'Right Decisions',
      description: 'Make informed technology decisions backed by expert analysis and industry experience.',
      stat: '95',
      statSuffix: '%',
      statLabel: 'client satisfaction'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Avoidance',
      description: 'Avoid costly mistakes that derail projects and waste resources.',
      stat: '$1M',
      statSuffix: '+',
      statLabel: 'avg savings'
    },
    {
      icon: 'Clock',
      title: 'Faster Execution',
      description: 'Clear roadmaps and decisions accelerate implementation timelines.',
      stat: '40',
      statSuffix: '%',
      statLabel: 'faster delivery'
    },
    {
      icon: 'Shield',
      title: 'Risk Reduction',
      description: 'Identify and mitigate technical and business risks before they become problems.',
      stat: '80',
      statSuffix: '%',
      statLabel: 'risk reduction'
    },
    {
      icon: 'Lightbulb',
      title: 'Knowledge Transfer',
      description: 'Your team gains expertise and frameworks for ongoing decision-making.',
      stat: 'Lasting',
      statLabel: 'capability build'
    },
    {
      icon: 'TrendingUp',
      title: 'Competitive Edge',
      description: 'Technology strategy aligned with business goals creates sustainable advantage.',
      stat: '2',
      statSuffix: 'x',
      statLabel: 'market agility'
    }
  ],

  techStack: [
    {
      name: 'Frontend Expertise',
      description: 'Modern frontend technologies',
      technologies: [
        { name: 'React Ecosystem', category: 'Frontend', proficiency: 'expert' },
        { name: 'Vue.js', category: 'Frontend', proficiency: 'expert' },
        { name: 'Angular', category: 'Frontend', proficiency: 'advanced' },
        { name: 'Next.js/Nuxt', category: 'Framework', proficiency: 'expert' }
      ]
    },
    {
      name: 'Backend Expertise',
      description: 'Server-side technologies',
      technologies: [
        { name: 'Node.js', category: 'Backend', proficiency: 'expert' },
        { name: 'Python', category: 'Backend', proficiency: 'expert' },
        { name: 'Java/Spring', category: 'Backend', proficiency: 'expert' },
        { name: '.NET Core', category: 'Backend', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Cloud Platforms',
      description: 'Cloud infrastructure',
      technologies: [
        { name: 'AWS', category: 'Cloud', proficiency: 'expert' },
        { name: 'Azure', category: 'Cloud', proficiency: 'expert' },
        { name: 'Google Cloud', category: 'Cloud', proficiency: 'advanced' },
        { name: 'Kubernetes', category: 'Orchestration', proficiency: 'expert' }
      ]
    },
    {
      name: 'Data & AI',
      description: 'Data and AI technologies',
      technologies: [
        { name: 'PostgreSQL/MySQL', category: 'Database', proficiency: 'expert' },
        { name: 'MongoDB', category: 'NoSQL', proficiency: 'expert' },
        { name: 'Machine Learning', category: 'AI/ML', proficiency: 'advanced' },
        { name: 'Data Engineering', category: 'Data', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Architecture Patterns',
      description: 'Software architecture',
      technologies: [
        { name: 'Microservices', category: 'Architecture', proficiency: 'expert' },
        { name: 'Event-Driven', category: 'Architecture', proficiency: 'expert' },
        { name: 'Serverless', category: 'Architecture', proficiency: 'expert' },
        { name: 'Domain-Driven Design', category: 'Methodology', proficiency: 'expert' }
      ]
    },
    {
      name: 'DevOps & Security',
      description: 'Operations and security',
      technologies: [
        { name: 'CI/CD Pipelines', category: 'DevOps', proficiency: 'expert' },
        { name: 'Infrastructure as Code', category: 'DevOps', proficiency: 'expert' },
        { name: 'Security Best Practices', category: 'Security', proficiency: 'expert' },
        { name: 'Observability', category: 'Operations', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Advisory Session',
        description: 'Focused consulting on specific technology questions',
        price: "$2,500",
        priceNote: 'Per day',
        features: [
          { name: 'Expert Consultant', included: true },
          { name: 'Specific Topic Focus', included: true },
          { name: 'Recommendations Document', included: true },
          { name: 'Follow-up Q&A', included: true },
          { name: 'Deep Technical Audit', included: false },
          { name: 'Strategic Roadmap', included: false },
          { name: 'Implementation Support', included: false },
          { name: 'Ongoing Advisory', included: false }
        ],
        ctaText: 'Book Session'
      },
      {
        name: 'Strategic Engagement',
        description: 'Comprehensive assessment and roadmap development',
        price: "$35,000",
        priceNote: 'Fixed engagement',
        features: [
          { name: 'Full Technology Assessment', included: true },
          { name: 'Architecture Review', included: true },
          { name: 'Strategic Roadmap', included: true },
          { name: 'Vendor Evaluation', included: true },
          { name: 'Executive Presentations', included: true },
          { name: 'Implementation Guidance', included: true },
          { name: 'Fractional CTO', included: false },
          { name: 'Ongoing Advisory', included: false }
        ],
        highlighted: true,
        badge: 'Most Popular',
        ctaText: 'Start Engagement'
      },
      {
        name: 'Fractional CTO',
        description: 'Ongoing technical leadership and advisory',
        price: "$15,000",
        priceNote: 'Per month',
        features: [
          { name: 'Weekly Strategy Sessions', included: true },
          { name: 'Architecture Oversight', included: true },
          { name: 'Hiring & Team Guidance', included: true },
          { name: 'Vendor Negotiations', included: true },
          { name: 'Board & Investor Support', included: true },
          { name: 'Crisis Response', included: true },
          { name: 'Technical Due Diligence', included: true },
          { name: 'Unlimited Advisory Access', included: true }
        ],
        ctaText: 'Contact Us'
      }
    ],
    customNote: 'Need a custom consulting engagement? Contact us to discuss your specific requirements.'
  },

  portfolio: [
    {
      title: 'Digital Transformation Strategy',
      client: 'Regional Healthcare Network',
      industry: 'Healthcare',
      description: 'Developed 3-year digital transformation roadmap for healthcare network with 15 facilities.',
      challenge: 'Outdated systems, siloed data, and poor patient experience threatening competitive position.',
      solution: 'Created comprehensive digital strategy covering EHR modernization, patient portal, data platform, and cloud migration.',
      results: [
        '$15M investment roadmap',
        '3-year transformation plan',
        'Board approval obtained',
        'Implementation underway'
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      tags: ['Strategy', 'Healthcare', 'Digital Transformation', 'Roadmap'],
      testimonial: {
        quote: 'They gave us clarity on a complex transformation. The board approved the strategy unanimously.',
        author: 'Dr. Patricia Chen',
        role: 'Chief Digital Officer'
      }
    },
    {
      title: 'Architecture Modernization Plan',
      client: 'FinServ Global',
      industry: 'Financial Services',
      description: 'Architecture review and modernization roadmap for legacy trading platform.',
      challenge: '15-year-old monolithic trading system couldn\'t handle volume growth or regulatory requirements.',
      solution: 'Conducted deep architecture review, designed microservices target architecture, and created migration roadmap.',
      results: [
        'Architecture blueprint delivered',
        'Risk areas identified',
        'Migration path defined',
        '$3M saved vs. rebuild'
      ],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      tags: ['Architecture', 'Finance', 'Modernization', 'Assessment'],
      testimonial: {
        quote: 'They showed us how to modernize incrementally instead of risky big-bang. Saved us millions.',
        author: 'Michael Thompson',
        role: 'VP Engineering'
      }
    },
    {
      title: 'Technology Due Diligence',
      client: 'Venture Capital Fund',
      industry: 'Investment',
      description: 'Technical due diligence for $50M Series C investment in SaaS company.',
      challenge: 'VC needed independent assessment of technology, team, and scalability before major investment.',
      solution: 'Conducted comprehensive technical due diligence covering architecture, code quality, security, team, and scalability.',
      results: [
        'Investment decision informed',
        'Technical risks identified',
        'Valuation adjusted appropriately',
        'Post-investment roadmap'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Due Diligence', 'VC', 'Investment', 'Assessment'],
      testimonial: {
        quote: 'Their due diligence found critical scaling issues that affected our valuation. Money well spent.',
        author: 'Jennifer Adams',
        role: 'Partner'
      }
    },
    {
      title: 'Cloud Migration Strategy',
      client: 'Manufacturing Conglomerate',
      industry: 'Manufacturing',
      description: 'Comprehensive cloud migration strategy for 50+ applications across multiple business units.',
      challenge: 'Aging data centers at end-of-life, no cloud expertise internally, and complex compliance requirements.',
      solution: 'Assessed all applications, defined migration waves, selected cloud providers, and created detailed execution plan.',
      results: [
        '$8M annual savings projected',
        '50+ apps migration planned',
        'Compliance framework defined',
        '18-month execution roadmap'
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['Cloud', 'Strategy', 'Migration', 'Enterprise'],
      testimonial: {
        quote: 'Finally a clear path to the cloud. Their expertise saved us from costly mistakes.',
        author: 'Robert Martinez',
        role: 'CIO'
      }
    }
  ],

  testimonials: [
    {
      quote: 'Their technology strategy aligned our entire leadership team. We finally have a clear digital roadmap.',
      author: 'David Park',
      role: 'CEO',
      company: 'Growth Industries Inc',
      rating: 5,
      location: 'Chicago, IL'
    },
    {
      quote: 'The architecture review saved us from a costly rebuild. The incremental modernization approach was brilliant.',
      author: 'Sarah Kim',
      role: 'CTO',
      company: 'Enterprise Solutions Corp',
      rating: 5,
      location: 'San Francisco, CA'
    },
    {
      quote: 'As a non-technical founder, having access to a fractional CTO gave me confidence in our tech decisions.',
      author: 'James Wilson',
      role: 'Founder & CEO',
      company: 'StartupX',
      rating: 5,
      location: 'New York, NY'
    }
  ],

  faqs: [
    {
      question: 'When do we need software consulting?',
      answer: 'Consider consulting when facing major technology decisions, planning digital transformations, experiencing technical challenges you can\'t solve internally, preparing for investment or acquisition, or when projects are failing. An outside perspective often reveals blind spots and brings proven approaches.'
    },
    {
      question: 'How is consulting different from hiring developers?',
      answer: 'Consultants bring strategic perspective, broad industry experience, and objectivity. We\'ve seen hundreds of projects and can quickly identify what works. We focus on making you successful long-term through knowledge transfer, not creating dependency. We solve the "what" and "why" before the "how."'
    },
    {
      question: 'What makes your consultants qualified?',
      answer: 'Our consultants have 15+ years average experience, have led engineering at multiple companies, and stay current with technology evolution. They\'ve seen what works and what fails across industries. We match consultant expertise to your specific domain and challenges.'
    },
    {
      question: 'Do you recommend specific vendors or technologies?',
      answer: 'We provide objective, vendor-neutral recommendations based on your specific needs, not partnerships or kickbacks. We evaluate all relevant options and explain trade-offs clearly. When we recommend a technology, we explain exactly why it fits your situation.'
    },
    {
      question: 'Can you help with investor due diligence?',
      answer: 'Absolutely. We provide technical due diligence for investors and technical preparation for founders raising capital. We assess architecture, code quality, security, scalability, team capability, and technical risks—providing clear reports investors need.'
    },
    {
      question: 'What happens after the consulting engagement?',
      answer: 'We ensure knowledge transfer throughout the engagement so your team can execute confidently. Deliverables include actionable roadmaps, not just recommendations. Many clients engage us for periodic check-ins or ongoing fractional CTO support during implementation.'
    }
  ],

  relatedServices: [
    {
      name: 'Custom Software Development',
      slug: 'custom-software-development',
      description: 'Implement recommendations with expert development',
      icon: 'Code'
    },
    {
      name: 'Enterprise Software Solutions',
      slug: 'enterprise-software-solutions',
      description: 'Enterprise-scale software implementation',
      icon: 'Building2'
    },
    {
      name: 'Legacy System Modernization',
      slug: 'legacy-system-modernization',
      description: 'Execute modernization roadmaps',
      icon: 'RefreshCw'
    },
    {
      name: 'Cloud & DevOps',
      slug: '/cloud-devops',
      description: 'Cloud strategy and implementation',
      icon: 'Cloud'
    }
  ],

  seo: {
    title: 'Software Consulting Services | Technology Strategy, Architecture Review',
    description: 'Expert software consulting services including technology strategy, architecture review, technical due diligence, and fractional CTO. Make informed technology decisions with experienced consultants.',
    keywords: [
      'software consulting',
      'technology consulting',
      'technology strategy',
      'architecture consulting',
      'fractional CTO',
      'technical due diligence',
      'digital transformation',
      'IT consulting',
      'software architecture review',
      'technology advisory'
    ]
  }
};
