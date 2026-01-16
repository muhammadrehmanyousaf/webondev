// Product Strategy Service Data
import { ServiceData } from '@/components/services/sections';

export const productStrategyData: ServiceData = {
  name: 'Product Strategy',
  slug: 'product-strategy',
  tagline: 'Build products that customers love and markets need',
  category: 'Consulting & Strategy',
  description: 'Develop winning product strategies that drive growth. We help you identify market opportunities, define product vision, and create roadmaps that deliver customer value and business results.',

  hero: {
    headline: 'Product Strategy Services',
    subheadline: 'Strategy for Product Success',
    description: 'Transform product ideas into market success. Our product strategists help you understand customers, identify opportunities, and build products that create lasting competitive advantage.',
    keyFeatures: [
      'Product vision & strategy',
      'Market & customer research',
      'Product roadmapping',
      'Go-to-market strategy',
      'Product-market fit',
      'Growth strategy'
    ],
    badges: ['Product Leaders', 'Market Experts', '150+ Products Launched', 'Data-Driven']
  },

  painPoints: [
    {
      icon: 'Target',
      title: 'Unclear Direction',
      description: 'No clear product vision leading to scattered priorities and wasted effort',
      stat: '45%',
      statLabel: 'Products lack strategy'
    },
    {
      icon: 'Users',
      title: 'Market Disconnect',
      description: 'Building features nobody wants because of poor market understanding',
      stat: '42%',
      statLabel: 'Products miss market'
    },
    {
      icon: 'TrendingDown',
      title: 'Failed Launches',
      description: 'New products failing to gain traction and achieve growth targets',
      stat: '72%',
      statLabel: 'Products fail'
    },
    {
      icon: 'DollarSign',
      title: 'Wasted Investment',
      description: 'Significant investment in products that don\'t deliver expected returns',
      stat: '$260B',
      statLabel: 'Wasted on failed products'
    }
  ],

  solutions: [
    {
      icon: 'Target',
      title: 'Product Vision & Strategy',
      description: 'Define compelling product vision and winning strategy',
      highlights: [
        'Vision development',
        'Strategic positioning',
        'Competitive analysis',
        'Success metrics'
      ]
    },
    {
      icon: 'Users',
      title: 'Customer & Market Research',
      description: 'Deep understanding of customers and market dynamics',
      highlights: [
        'Customer interviews',
        'Market analysis',
        'Persona development',
        'Jobs-to-be-done'
      ]
    },
    {
      icon: 'Map',
      title: 'Product Roadmapping',
      description: 'Create strategic roadmaps that drive execution',
      highlights: [
        'Roadmap development',
        'Prioritization frameworks',
        'Release planning',
        'Stakeholder alignment'
      ]
    },
    {
      icon: 'Rocket',
      title: 'Go-to-Market',
      description: 'Launch products successfully with effective GTM strategy',
      highlights: [
        'GTM strategy',
        'Launch planning',
        'Pricing strategy',
        'Channel strategy'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Discovery',
        description: 'Understand market, customers, and competitive landscape',
        duration: 'Week 1-3',
        deliverables: [
          'Market analysis',
          'Customer research',
          'Competitive analysis',
          'Opportunity assessment'
        ]
      },
      {
        icon: 'Target',
        title: 'Strategy Definition',
        description: 'Define product vision, positioning, and strategy',
        duration: 'Week 3-5',
        deliverables: [
          'Product vision',
          'Strategic positioning',
          'Value proposition',
          'Success metrics'
        ]
      },
      {
        icon: 'Map',
        title: 'Roadmap Development',
        description: 'Create actionable product roadmap with priorities',
        duration: 'Week 5-7',
        deliverables: [
          'Product roadmap',
          'Feature priorities',
          'Release plan',
          'Resource requirements'
        ]
      },
      {
        icon: 'Play',
        title: 'Execution Support',
        description: 'Support execution with ongoing product guidance',
        duration: 'Ongoing',
        deliverables: [
          'Sprint planning support',
          'Roadmap updates',
          'Launch support',
          'Performance tracking'
        ]
      }
    ],
    totalDuration: '6-8 weeks'
  },

  benefits: [
    {
      icon: 'Target',
      title: 'Product-Market Fit',
      description: 'Products aligned with real customer needs',
      stat: '3x',
      statSuffix: '',
      statLabel: 'Better market fit'
    },
    {
      icon: 'TrendingUp',
      title: 'Faster Growth',
      description: 'Accelerated growth through focused strategy',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Faster growth'
    },
    {
      icon: 'CheckCircle',
      title: 'Better Decisions',
      description: 'Data-driven prioritization and decision making',
      stat: '90',
      statSuffix: '%',
      statLabel: 'Decision confidence'
    },
    {
      icon: 'DollarSign',
      title: 'Higher ROI',
      description: 'Better returns on product investment',
      stat: '2.5x',
      statSuffix: '',
      statLabel: 'ROI improvement'
    }
  ],

  techStack: [
    {
      name: 'Product Management',
      description: 'Product management tools',
      technologies: [
        { name: 'Productboard', icon: '/icons/tech/productboard.svg', category: 'Product', proficiency: 'expert' },
        { name: 'Aha!', icon: '/icons/tech/aha.svg', category: 'Roadmap', proficiency: 'expert' },
        { name: 'Pendo', icon: '/icons/tech/pendo.svg', category: 'Analytics', proficiency: 'advanced' },
        { name: 'Amplitude', icon: '/icons/tech/amplitude.svg', category: 'Analytics', proficiency: 'expert' }
      ]
    },
    {
      name: 'Research Tools',
      description: 'Customer and market research',
      technologies: [
        { name: 'Dovetail', icon: '/icons/tech/dovetail.svg', category: 'Research', proficiency: 'advanced' },
        { name: 'UserTesting', icon: '/icons/tech/usertesting.svg', category: 'Research', proficiency: 'expert' },
        { name: 'Hotjar', icon: '/icons/tech/hotjar.svg', category: 'Analytics', proficiency: 'expert' },
        { name: 'FullStory', icon: '/icons/tech/fullstory.svg', category: 'Analytics', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Collaboration',
      description: 'Strategy and collaboration tools',
      technologies: [
        { name: 'Figma', icon: '/icons/tech/figma.svg', category: 'Design', proficiency: 'advanced' },
        { name: 'Miro', icon: '/icons/tech/miro.svg', category: 'Whiteboard', proficiency: 'expert' },
        { name: 'Notion', icon: '/icons/tech/notion.svg', category: 'Documentation', proficiency: 'expert' },
        { name: 'Coda', icon: '/icons/tech/coda.svg', category: 'Documentation', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Strategy Sprint',
        description: 'Focused product strategy engagement',
        price: '$25,000',
        priceNote: 'one-time engagement',
        features: [
          { name: 'Market assessment', included: true },
          { name: 'Customer insights', included: true },
          { name: 'Product vision', included: true },
          { name: 'Initial roadmap', included: true },
          { name: 'Strategy presentation', included: true },
          { name: 'Deep customer research', included: false },
          { name: 'Go-to-market strategy', included: false },
          { name: 'Ongoing advisory', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Full Strategy',
        description: 'Comprehensive product strategy',
        price: '$60,000',
        priceNote: 'one-time engagement',
        badge: 'Most Popular',
        features: [
          { name: 'Comprehensive market analysis', included: true },
          { name: 'Deep customer research', included: true },
          { name: 'Complete product strategy', included: true },
          { name: 'Detailed roadmap', included: true },
          { name: 'Go-to-market strategy', included: true },
          { name: 'Pricing strategy', included: true },
          { name: 'Launch planning', included: true },
          { name: '3-month advisory', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Product Partnership',
        description: 'Ongoing product leadership',
        price: '$15,000',
        priceNote: 'per month',
        features: [
          { name: 'Fractional CPO services', included: true },
          { name: 'Continuous strategy', included: true },
          { name: 'Ongoing research', included: true },
          { name: 'Roadmap management', included: true },
          { name: 'Launch support', included: true },
          { name: 'Team coaching', included: true },
          { name: 'Stakeholder management', included: true },
          { name: 'Product leadership', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need product management support? Ask about our embedded product manager services.'
  },

  portfolio: [
    {
      title: 'SaaS Product Pivot Strategy',
      client: 'CloudTech Solutions',
      industry: 'SaaS',
      description: 'Developed strategy to pivot struggling product to new market',
      challenge: 'Product not gaining traction in original target market',
      solution: 'Customer research revealed adjacent market with stronger product-market fit',
      results: [
        'Successful pivot to new market segment',
        'Revenue grew 300% in 12 months',
        'Customer retention improved to 95%',
        'Achieved profitability in year 2'
      ],
      metrics: [
        { label: 'Revenue Growth', value: '300%' },
        { label: 'Retention', value: '95%' },
        { label: 'Time to Profit', value: '2 years' }
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['SaaS', 'Pivot', 'Product-Market Fit', 'Growth']
    },
    {
      title: 'Enterprise Product Launch',
      client: 'EnterpriseTech Corp',
      industry: 'Enterprise Software',
      description: 'Developed go-to-market strategy for new enterprise product',
      challenge: 'New product in competitive market with established players',
      solution: 'Identified underserved segment and developed differentiated positioning',
      results: [
        'Successful product launch',
        'Won 25 enterprise customers in year 1',
        'Achieved $5M ARR in 18 months',
        'Industry recognition as "Best New Product"'
      ],
      metrics: [
        { label: 'Customers', value: '25' },
        { label: 'ARR', value: '$5M' },
        { label: 'Recognition', value: 'Best New Product' }
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      tags: ['Enterprise', 'Launch', 'Go-to-Market', 'B2B']
    },
    {
      title: 'Mobile App Product Vision',
      client: 'FitLife Health',
      industry: 'Health & Wellness',
      description: 'Created comprehensive product strategy for health and fitness mobile app',
      challenge: 'Crowded market with unclear differentiation and user acquisition challenges',
      solution: 'Deep customer research to identify unique value proposition and growth strategy',
      results: [
        'Clear product vision and roadmap defined',
        'User acquisition cost reduced 60%',
        'App store rating improved to 4.8 stars',
        'Monthly active users grew 400%'
      ],
      metrics: [
        { label: 'CAC Reduction', value: '60%' },
        { label: 'App Rating', value: '4.8' },
        { label: 'MAU Growth', value: '400%' }
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      tags: ['Mobile', 'Health & Wellness', 'Product Vision', 'Growth']
    },
    {
      title: 'B2B Platform Roadmap',
      client: 'SupplyChain Pro',
      industry: 'Supply Chain',
      description: 'Developed strategic product roadmap for B2B supply chain platform',
      challenge: 'Multiple customer segments with conflicting feature requests',
      solution: 'Segment analysis and prioritization framework for balanced roadmap',
      results: [
        'Clear 18-month product roadmap created',
        'Customer satisfaction improved 45%',
        'Feature delivery aligned with revenue impact',
        'Platform expansion to 3 new verticals'
      ],
      metrics: [
        { label: 'Roadmap', value: '18 months' },
        { label: 'Satisfaction', value: '+45%' },
        { label: 'Verticals', value: '3 new' }
      ],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
      tags: ['B2B', 'Supply Chain', 'Roadmap', 'Platform']
    }
  ],

  testimonials: [
    {
      quote: 'The pivot strategy saved our company. They identified an opportunity we had missed and helped us capture it.',
      author: 'Jason Mitchell',
      role: 'CEO',
      company: 'CloudTech Solutions',
      rating: 5,
      location: 'San Francisco, CA'
    },
    {
      quote: 'Their market insights and GTM strategy were instrumental in our successful product launch against tough competition.',
      author: 'Samantha Lee',
      role: 'VP Product',
      company: 'EnterpriseTech Corp',
      rating: 5,
      location: 'Seattle, WA'
    }
  ],

  faqs: [
    {
      question: 'How do you approach customer research?',
      answer: 'We use mixed methods including customer interviews, surveys, behavioral analytics, and competitive analysis. We focus on understanding jobs-to-be-done, pain points, and value drivers. Research is ongoing, not one-time, to continuously validate assumptions.'
    },
    {
      question: 'What makes a good product roadmap?',
      answer: 'A good roadmap communicates strategy, not just features. It shows themes tied to outcomes, maintains flexibility for learning, and balances customer needs with business objectives. We avoid date-committed feature lists in favor of outcome-driven planning.'
    },
    {
      question: 'How do you handle prioritization?',
      answer: 'We use frameworks like RICE, weighted scoring, and impact mapping, but prioritization is ultimately about strategy alignment. We help you define clear criteria based on your strategy and make prioritization decisions transparent and defensible.'
    },
    {
      question: 'Can you help with product-market fit?',
      answer: 'Yes, achieving product-market fit is central to our work. We help identify target segments, validate value propositions, and iterate based on market feedback. We use data-driven approaches to measure and improve fit over time.'
    },
    {
      question: 'Do you work with early-stage startups?',
      answer: 'Yes, we work with startups from pre-product to scaling stages. For early-stage companies, we focus on validating assumptions, achieving product-market fit, and creating efficient paths to growth. We adapt our approach to your stage and resources.'
    }
  ],

  relatedServices: [
    {
      name: 'Technology Roadmapping',
      slug: 'technology-roadmapping',
      description: 'Technology roadmap development',
      icon: 'Map'
    },
    {
      name: 'Business Analysis',
      slug: 'business-analysis',
      description: 'Product requirements',
      icon: 'FileText'
    },
    {
      name: 'Digital Transformation',
      slug: 'digital-transformation',
      description: 'Digital product strategy',
      icon: 'Zap'
    },
    {
      name: 'Agile Consulting',
      slug: 'agile-consulting',
      description: 'Agile product development',
      icon: 'Repeat'
    }
  ],

  seo: {
    title: 'Product Strategy Services | Product Management Consulting',
    description: 'Expert product strategy services. Product vision, roadmapping, go-to-market strategy, and customer research to build products that win in the market.',
    keywords: [
      'product strategy',
      'product strategy consulting',
      'product roadmap',
      'go-to-market strategy',
      'product management consulting',
      'product vision',
      'product-market fit',
      'customer research',
      'product launch',
      'product planning'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Product Strategy Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Product Strategy Consulting'
      }
    }
  }
};
