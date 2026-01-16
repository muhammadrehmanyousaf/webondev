// User Experience Design - UI/UX Design Cluster
// Comprehensive service data for user experience design services

import { ServiceData } from '@/components/services/sections';

export const userExperienceDesignData: ServiceData = {
  slug: 'user-experience-design',
  name: 'User Experience Design',
  tagline: 'Research-driven design that solves real user problems',
  description: 'Create digital products that users love through evidence-based design decisions. Our UX design process combines deep user research, strategic thinking, and iterative testing to deliver experiences that achieve business goals while delighting users.',
  category: 'UI/UX Design',

  hero: {
    headline: 'User Experience Design',
    subheadline: 'Design Decisions Backed by Evidence',
    description: 'Stop guessing what users want. Our research-driven UX design process uncovers real user needs, maps optimal journeys, and validates solutions before development—reducing risk and increasing success.',
    keyFeatures: [
      'User Research & Analysis',
      'Journey Mapping & Flows',
      'Information Architecture',
      'Usability Testing'
    ],
    badges: ['User Research', 'Journey Mapping', 'Usability Testing', 'IA']
  },

  painPoints: [
    {
      icon: 'Users',
      title: 'Building for Assumptions',
      description: 'Products built on guesses about user needs rather than research-validated insights.',
      stat: '70%',
      statLabel: 'products fail for this'
    },
    {
      icon: 'TrendingDown',
      title: 'High User Abandonment',
      description: 'Users leave during key flows because experiences are confusing or frustrating.',
      stat: '67%',
      statLabel: 'abandon mid-flow'
    },
    {
      icon: 'RefreshCw',
      title: 'Expensive Rework',
      description: 'Discovering UX problems post-launch costs 10-100x more to fix than during design.',
      stat: '100x',
      statLabel: 'more expensive'
    },
    {
      icon: 'Target',
      title: 'Low Feature Adoption',
      description: 'Features built but unused because they don\'t match how users actually work.',
      stat: '45%',
      statLabel: 'features never used'
    },
    {
      icon: 'MessageCircle',
      title: 'Support Overload',
      description: 'Confusing UX drives support tickets that drain resources and frustrate users.',
      stat: '60%',
      statLabel: 'tickets are UX issues'
    },
    {
      icon: 'DollarSign',
      title: 'Conversion Loss',
      description: 'Friction in user journeys costs real revenue through abandoned transactions.',
      stat: '3%',
      statLabel: 'conversion lost per friction'
    }
  ],

  solutions: [
    {
      icon: 'Search',
      title: 'User Research',
      description: 'Understand users deeply through interviews, surveys, and behavioral analysis.',
      highlights: [
        'User interviews',
        'Surveys & analytics',
        'Behavioral analysis',
        'Persona development'
      ]
    },
    {
      icon: 'Map',
      title: 'Journey Mapping',
      description: 'Map complete user journeys to identify pain points and opportunities.',
      highlights: [
        'Current state mapping',
        'Pain point identification',
        'Opportunity mapping',
        'Future state design'
      ]
    },
    {
      icon: 'GitBranch',
      title: 'Information Architecture',
      description: 'Organize content and features for intuitive findability and navigation.',
      highlights: [
        'Content audits',
        'Card sorting',
        'Site maps',
        'Navigation design'
      ]
    },
    {
      icon: 'Layout',
      title: 'Interaction Design',
      description: 'Design how users interact with interfaces to accomplish their goals.',
      highlights: [
        'User flows',
        'Wireframing',
        'Interaction patterns',
        'Micro-interactions'
      ]
    },
    {
      icon: 'CheckCircle',
      title: 'Usability Testing',
      description: 'Validate designs with real users before committing to development.',
      highlights: [
        'Moderated testing',
        'Unmoderated testing',
        'A/B testing',
        'Accessibility testing'
      ]
    },
    {
      icon: 'BarChart',
      title: 'UX Audit & Optimization',
      description: 'Evaluate and improve existing product experiences.',
      highlights: [
        'Heuristic evaluation',
        'Analytics review',
        'Competitive analysis',
        'Improvement roadmap'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Discovery Research',
        description: 'Understand business goals, user needs, and competitive landscape through research.',
        duration: '2-3 weeks',
        deliverables: ['User interviews', 'Survey results', 'Competitive analysis', 'Research insights']
      },
      {
        icon: 'Users',
        title: 'User Modeling',
        description: 'Synthesize research into actionable user models and journey maps.',
        duration: '1-2 weeks',
        deliverables: ['User personas', 'Journey maps', 'Empathy maps', 'Problem statements']
      },
      {
        icon: 'GitBranch',
        title: 'Information Architecture',
        description: 'Define product structure, navigation, and content organization.',
        duration: '1-2 weeks',
        deliverables: ['Site map', 'Content model', 'Navigation design', 'Taxonomy']
      },
      {
        icon: 'Layout',
        title: 'Wireframing & Flows',
        description: 'Design user flows and wireframe key screens and interactions.',
        duration: '2-3 weeks',
        deliverables: ['User flows', 'Wireframes', 'Interaction specs', 'Content requirements']
      },
      {
        icon: 'Play',
        title: 'Prototyping',
        description: 'Create interactive prototypes for testing and validation.',
        duration: '1-2 weeks',
        deliverables: ['Interactive prototypes', 'Test scenarios', 'Success metrics', 'Test plan']
      },
      {
        icon: 'CheckCircle',
        title: 'Usability Testing',
        description: 'Validate designs with real users and iterate based on findings.',
        duration: '2 weeks',
        deliverables: ['Test sessions', 'Findings report', 'Recommendations', 'Validated designs']
      }
    ],
    totalDuration: '9-14 weeks'
  },

  benefits: [
    {
      icon: 'Target',
      title: 'Reduced Risk',
      description: 'Validate ideas before development, catching problems early when they\'re cheap to fix.',
      stat: '90',
      statSuffix: '%',
      statLabel: 'risk reduction'
    },
    {
      icon: 'TrendingUp',
      title: 'Higher Conversions',
      description: 'User-centered design removes friction and guides users toward goals.',
      stat: '400',
      statSuffix: '%',
      statLabel: 'ROI on UX investment'
    },
    {
      icon: 'Users',
      title: 'Better Retention',
      description: 'Experiences that match user expectations keep them coming back.',
      stat: '50',
      statSuffix: '%',
      statLabel: 'retention improvement'
    },
    {
      icon: 'Zap',
      title: 'Faster Development',
      description: 'Clear UX specs reduce ambiguity and rework during development.',
      stat: '33',
      statSuffix: '%',
      statLabel: 'less dev rework'
    },
    {
      icon: 'MessageCircle',
      title: 'Fewer Support Tickets',
      description: 'Intuitive experiences mean users don\'t need to ask for help.',
      stat: '50',
      statSuffix: '%',
      statLabel: 'fewer tickets'
    },
    {
      icon: 'Award',
      title: 'Competitive Advantage',
      description: 'Superior UX differentiates your product in crowded markets.',
      stat: 'Top',
      statLabel: 'experience in market'
    }
  ],

  techStack: [
    {
      name: 'Research Tools',
      description: 'User research platforms',
      technologies: [
        { name: 'UserTesting', category: 'Research', proficiency: 'expert' },
        { name: 'Maze', category: 'Testing', proficiency: 'expert' },
        { name: 'Hotjar', category: 'Analytics', proficiency: 'expert' },
        { name: 'FullStory', category: 'Analytics', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Design Tools',
      description: 'UX design software',
      technologies: [
        { name: 'Figma', category: 'Design', proficiency: 'expert' },
        { name: 'Miro', category: 'Collaboration', proficiency: 'expert' },
        { name: 'FigJam', category: 'Whiteboard', proficiency: 'expert' },
        { name: 'Whimsical', category: 'Flowcharts', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Prototyping',
      description: 'Interactive prototypes',
      technologies: [
        { name: 'Figma Prototypes', category: 'Prototyping', proficiency: 'expert' },
        { name: 'ProtoPie', category: 'Advanced Prototyping', proficiency: 'advanced' },
        { name: 'Framer', category: 'Code Prototyping', proficiency: 'advanced' },
        { name: 'InVision', category: 'Prototyping', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Survey Tools',
      description: 'User feedback collection',
      technologies: [
        { name: 'Typeform', category: 'Surveys', proficiency: 'expert' },
        { name: 'Google Forms', category: 'Surveys', proficiency: 'expert' },
        { name: 'SurveyMonkey', category: 'Surveys', proficiency: 'advanced' },
        { name: 'Dovetail', category: 'Research Analysis', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Analytics',
      description: 'User behavior analytics',
      technologies: [
        { name: 'Google Analytics', category: 'Analytics', proficiency: 'expert' },
        { name: 'Mixpanel', category: 'Product Analytics', proficiency: 'expert' },
        { name: 'Amplitude', category: 'Product Analytics', proficiency: 'advanced' },
        { name: 'Heap', category: 'Analytics', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Documentation',
      description: 'Research documentation',
      technologies: [
        { name: 'Notion', category: 'Documentation', proficiency: 'expert' },
        { name: 'Confluence', category: 'Documentation', proficiency: 'advanced' },
        { name: 'Loom', category: 'Video', proficiency: 'expert' },
        { name: 'Otter.ai', category: 'Transcription', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'UX Audit',
        description: 'Expert evaluation of existing experience',
        price: '$8,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Heuristic Evaluation', included: true },
          { name: 'Analytics Review', included: true },
          { name: 'Competitive Analysis', included: true },
          { name: 'Findings Report', included: true },
          { name: 'Recommendations', included: true },
          { name: 'User Research', included: false },
          { name: 'Redesign', included: false },
          { name: 'Ongoing Support', included: false }
        ],
        ctaText: 'Start Audit'
      },
      {
        name: 'UX Design',
        description: 'Complete UX design for product or feature',
        price: '$25,000',
        priceNote: 'Starting price',
        features: [
          { name: 'User Research (5-8 interviews)', included: true },
          { name: 'Persona Development', included: true },
          { name: 'Journey Mapping', included: true },
          { name: 'Information Architecture', included: true },
          { name: 'Wireframes & Flows', included: true },
          { name: 'Interactive Prototype', included: true },
          { name: 'Usability Testing (5 users)', included: false },
          { name: 'Ongoing UX Support', included: false }
        ],
        highlighted: true,
        badge: 'Most Popular',
        ctaText: 'Start Project'
      },
      {
        name: 'Enterprise UX',
        description: 'Comprehensive UX for complex products',
        price: '$60,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Extensive User Research', included: true },
          { name: 'Multiple Personas', included: true },
          { name: 'Complete Journey Maps', included: true },
          { name: 'Full IA & Navigation', included: true },
          { name: 'All Wireframes & Flows', included: true },
          { name: 'Comprehensive Prototypes', included: true },
          { name: 'Usability Testing (15+ users)', included: true },
          { name: '3 Months UX Support', included: true }
        ],
        ctaText: 'Contact Us'
      }
    ],
    customNote: 'UX scope varies by product complexity. Contact us for a detailed proposal based on your needs.'
  },

  portfolio: [
    {
      title: 'Healthcare Patient Portal',
      client: 'MedConnect Health',
      industry: 'Healthcare',
      description: 'UX redesign of patient portal used by 500K+ patients for appointments, records, and communication.',
      challenge: 'Portal had high abandonment rates and generated thousands of support calls monthly.',
      solution: 'Research-driven redesign based on patient interviews, journey mapping, and iterative testing.',
      results: [
        '65% reduction in support calls',
        '40% increase in appointment bookings',
        '4.6 app store rating (up from 2.8)',
        '92% task completion rate'
      ],
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'UX Research', 'Patient Portal', 'Redesign'],
      testimonial: {
        quote: 'The research revealed issues we never would have found on our own. The redesign was transformative.',
        author: 'Dr. Sarah Mitchell',
        role: 'Chief Digital Officer'
      }
    },
    {
      title: 'B2B SaaS Platform',
      client: 'CloudOps Pro',
      industry: 'Technology',
      description: 'UX design for complex infrastructure management platform serving DevOps teams.',
      challenge: 'Powerful product with steep learning curve—users struggled to discover and adopt key features.',
      solution: 'Deep research with DevOps professionals, progressive disclosure design, and contextual onboarding.',
      results: [
        '70% improvement in feature adoption',
        '50% faster time-to-value',
        '35% reduction in churn',
        'NPS increased from 32 to 58'
      ],
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
      tags: ['B2B', 'SaaS', 'DevOps', 'Enterprise UX'],
      testimonial: {
        quote: 'Users finally discover features they were paying for but never found. Adoption skyrocketed.',
        author: 'James Wilson',
        role: 'VP Product'
      }
    },
    {
      title: 'E-commerce Checkout',
      client: 'ShopStyle Retail',
      industry: 'E-commerce',
      description: 'UX optimization of checkout flow for major online retailer.',
      challenge: 'Cart abandonment rate of 78% was leaving millions in revenue on the table.',
      solution: 'Checkout journey mapping, friction analysis, and tested simplification of multi-step flow.',
      results: [
        '23% reduction in cart abandonment',
        '$12M additional annual revenue',
        '40% faster checkout completion',
        '15% increase in average order value'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Checkout', 'Conversion', 'A/B Testing'],
      testimonial: {
        quote: 'The checkout optimization paid for itself in the first week. ROI has been extraordinary.',
        author: 'Lisa Chen',
        role: 'VP E-commerce'
      }
    },
    {
      title: 'Education Learning Platform',
      client: 'LearnHub Academy',
      industry: 'Education',
      description: 'UX design for online learning platform serving students and corporate training.',
      challenge: 'Low course completion rates and students struggling to navigate through complex learning paths.',
      solution: 'Learner research, gamification design, and streamlined course navigation with progress tracking.',
      results: [
        '85% course completion rate',
        '60% increase in student engagement',
        '45% more course enrollments',
        'Industry UX award winner'
      ],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['Education', 'E-Learning', 'Gamification', 'Research'],
      testimonial: {
        quote: 'Students actually finish courses now. The UX research completely changed our approach.',
        author: 'Dr. Amanda Foster',
        role: 'Chief Learning Officer'
      }
    }
  ],

  testimonials: [
    {
      quote: 'They uncovered user insights that completely changed our product strategy. Best investment we\'ve made.',
      author: 'Michael Park',
      role: 'CEO',
      company: 'TechStart Inc',
      rating: 5,
      location: 'San Francisco, CA'
    },
    {
      quote: 'The research rigor is exceptional. Every design decision is backed by evidence, not opinion.',
      author: 'Sarah Johnson',
      role: 'VP Product',
      company: 'Enterprise Software Co',
      rating: 5,
      location: 'Seattle, WA'
    },
    {
      quote: 'Usability testing saved us from shipping a feature that would have confused users. Worth every penny.',
      author: 'David Chen',
      role: 'Product Manager',
      company: 'Mobile App Startup',
      rating: 5,
      location: 'Austin, TX'
    }
  ],

  faqs: [
    {
      question: 'What\'s the difference between UX and UI design?',
      answer: 'UX (User Experience) design focuses on how a product works and feels—understanding users, mapping journeys, designing interactions. UI (User Interface) design focuses on how it looks—visual design, colors, typography. We do both, but they\'re distinct disciplines that work together.'
    },
    {
      question: 'How many users do you research/test with?',
      answer: 'For most projects, 5-8 user interviews reveal 80% of major insights. For usability testing, 5 users typically uncover 85% of usability issues. Enterprise projects with multiple user segments may require more. We recommend quantities based on your product complexity and user diversity.'
    },
    {
      question: 'Can you work with our existing design team?',
      answer: 'Absolutely. We frequently collaborate with in-house teams, providing UX research, strategy, or specialized expertise they may lack. We can lead UX efforts, consult on specific challenges, or train your team on UX methods.'
    },
    {
      question: 'What if research contradicts our product plans?',
      answer: 'That\'s the value of research—discovering issues before costly development. We present findings objectively and help you understand implications. Ultimately, business decisions are yours, but we ensure you\'re making informed choices.'
    },
    {
      question: 'How do you conduct user research remotely?',
      answer: 'We conduct excellent remote research using video tools for interviews, screen-sharing for usability tests, and online platforms for surveys and card sorting. Remote research often reaches more diverse users and fits better into participants\' schedules.'
    },
    {
      question: 'Do you handle the visual design too?',
      answer: 'Yes, we offer complete UX + UI services. UX establishes how the product works, then UI brings it to life visually. We can handle both or hand off UX deliverables to your UI team or another designer if preferred.'
    }
  ],

  relatedServices: [
    {
      name: 'User Interface Design',
      slug: 'user-interface-design',
      description: 'Visual design for your UX solutions',
      icon: 'Palette'
    },
    {
      name: 'Prototyping & Wireframing',
      slug: 'prototyping-wireframing',
      description: 'Interactive prototypes for testing',
      icon: 'Layout'
    },
    {
      name: 'Web Design',
      slug: 'web-design',
      description: 'Full website design and UX',
      icon: 'Monitor'
    },
    {
      name: 'Mobile App Design',
      slug: 'mobile-app-design',
      description: 'Mobile UX and interface design',
      icon: 'Smartphone'
    }
  ],

  seo: {
    title: 'User Experience Design Services | UX Research, Journey Mapping, Usability Testing',
    description: 'Expert UX design services including user research, journey mapping, information architecture, and usability testing. Research-driven design that solves real user problems.',
    keywords: [
      'user experience design',
      'ux design',
      'user research',
      'usability testing',
      'journey mapping',
      'information architecture',
      'ux audit',
      'user centered design',
      'ux consultant',
      'ux services'
    ]
  }
};
