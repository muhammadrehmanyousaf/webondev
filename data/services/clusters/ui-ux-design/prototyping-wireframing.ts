// Prototyping & Wireframing - UI/UX Design Cluster
// Comprehensive service data for prototyping and wireframing services

import { ServiceData } from '@/components/services/sections';

export const prototypingWireframingData: ServiceData = {
  slug: 'prototyping-wireframing',
  name: 'Prototyping & Wireframing',
  tagline: 'Validate ideas before writing a single line of code',
  description: 'Transform ideas into testable prototypes and structural wireframes that validate concepts before development investment. Our prototyping services help you fail fast, learn quickly, and build confidence in your product direction.',
  category: 'UI/UX Design',

  hero: {
    headline: 'Prototyping & Wireframing',
    subheadline: 'Test Ideas Before Building Them',
    description: 'De-risk your product development with rapid prototyping and wireframing. We help you visualize concepts, test with users, and align stakeholders—ensuring you build the right thing before investing in development.',
    keyFeatures: [
      'Rapid Concept Validation',
      'Interactive Prototypes',
      'User Flow Visualization',
      'Stakeholder Alignment'
    ],
    badges: ['Figma', 'ProtoPie', 'Wireframes', 'User Testing']
  },

  painPoints: [
    {
      icon: 'DollarSign',
      title: 'Building Wrong Features',
      description: 'Developing features users don\'t want wastes months of work and hundreds of thousands in resources.',
      stat: '45%',
      statLabel: 'features never used'
    },
    {
      icon: 'MessageCircle',
      title: 'Stakeholder Misalignment',
      description: 'Everyone imagines the product differently, leading to surprises and conflicts during development.',
      stat: '70%',
      statLabel: 'projects have misalignment'
    },
    {
      icon: 'Clock',
      title: 'Late-Stage Changes',
      description: 'Discovering problems during development costs 10-100x more than finding them in prototypes.',
      stat: '100x',
      statLabel: 'more expensive'
    },
    {
      icon: 'Users',
      title: 'Unvalidated Assumptions',
      description: 'Teams assume they know what users want without testing, leading to product-market misfit.',
      stat: '42%',
      statLabel: 'startups fail for this'
    },
    {
      icon: 'FileText',
      title: 'Spec Documentation Gaps',
      description: 'Written specs leave too much to interpretation, causing development rework.',
      stat: '30%',
      statLabel: 'dev time on rework'
    },
    {
      icon: 'AlertTriangle',
      title: 'Investor/Client Uncertainty',
      description: 'Difficulty demonstrating product vision to get buy-in from investors or clients.',
      stat: '80%',
      statLabel: 'want to see it working'
    }
  ],

  solutions: [
    {
      icon: 'Layout',
      title: 'Low-Fidelity Wireframes',
      description: 'Quick structural layouts to explore information architecture and user flows.',
      highlights: [
        'Rapid exploration',
        'Content structure',
        'Navigation concepts',
        'Flow mapping'
      ]
    },
    {
      icon: 'Layers',
      title: 'High-Fidelity Wireframes',
      description: 'Detailed wireframes with content, annotations, and interaction specifications.',
      highlights: [
        'Detailed layouts',
        'Content placement',
        'Interaction notes',
        'Dev-ready specs'
      ]
    },
    {
      icon: 'Play',
      title: 'Clickable Prototypes',
      description: 'Interactive prototypes demonstrating user flows and key interactions.',
      highlights: [
        'Click-through flows',
        'Navigation testing',
        'User journeys',
        'Stakeholder demos'
      ]
    },
    {
      icon: 'Zap',
      title: 'High-Fidelity Prototypes',
      description: 'Realistic prototypes with visual design and polished interactions.',
      highlights: [
        'Production visuals',
        'Micro-interactions',
        'Realistic testing',
        'Investor demos'
      ]
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Prototypes',
      description: 'Device-specific prototypes with native gestures and mobile patterns.',
      highlights: [
        'Gesture interactions',
        'Native feel',
        'On-device testing',
        'App Store preview'
      ]
    },
    {
      icon: 'CheckCircle',
      title: 'Usability Test Prototypes',
      description: 'Purpose-built prototypes optimized for user testing sessions.',
      highlights: [
        'Test scenarios',
        'Error handling',
        'Branching paths',
        'Data collection'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'MessageSquare',
        title: 'Requirements Gathering',
        description: 'Understand goals, user needs, and technical constraints to inform prototype scope.',
        duration: '2-3 days',
        deliverables: ['Prototype brief', 'User scenarios', 'Technical constraints', 'Success criteria']
      },
      {
        icon: 'Map',
        title: 'Flow Mapping',
        description: 'Map user journeys and define the flows to be prototyped.',
        duration: '2-3 days',
        deliverables: ['User flows', 'Screen inventory', 'Decision points', 'Edge cases']
      },
      {
        icon: 'Layout',
        title: 'Wireframing',
        description: 'Create structural wireframes establishing layout and content hierarchy.',
        duration: '3-5 days',
        deliverables: ['Wireframes', 'Annotations', 'Content requirements', 'Interaction notes']
      },
      {
        icon: 'Layers',
        title: 'Prototype Build',
        description: 'Develop interactive prototype based on wireframes and requirements.',
        duration: '5-10 days',
        deliverables: ['Interactive prototype', 'Prototype documentation', 'Test scenarios', 'Stakeholder version']
      },
      {
        icon: 'Users',
        title: 'Testing & Validation',
        description: 'Test prototype with users and gather feedback for iteration.',
        duration: '3-5 days',
        deliverables: ['Test sessions', 'Feedback compilation', 'Issue identification', 'Recommendations']
      },
      {
        icon: 'RefreshCw',
        title: 'Iteration',
        description: 'Refine prototype based on testing insights and stakeholder feedback.',
        duration: '3-5 days',
        deliverables: ['Updated prototype', 'Change documentation', 'Final prototype', 'Handoff specs']
      }
    ],
    totalDuration: '3-5 weeks'
  },

  benefits: [
    {
      icon: 'Target',
      title: 'Validate Before Building',
      description: 'Test concepts with users before expensive development begins.',
      stat: '90',
      statSuffix: '%',
      statLabel: 'risk reduction'
    },
    {
      icon: 'Users',
      title: 'Stakeholder Alignment',
      description: 'Everyone sees and agrees on the product before building.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'team alignment'
    },
    {
      icon: 'DollarSign',
      title: 'Reduced Development Costs',
      description: 'Catch issues early when they\'re cheap to fix.',
      stat: '50',
      statSuffix: '%',
      statLabel: 'cost savings'
    },
    {
      icon: 'Clock',
      title: 'Faster Time-to-Market',
      description: 'Clear specs reduce development ambiguity and rework.',
      stat: '33',
      statSuffix: '%',
      statLabel: 'faster delivery'
    },
    {
      icon: 'TrendingUp',
      title: 'Better Investor Demos',
      description: 'Impress investors with realistic product demonstrations.',
      stat: '2',
      statSuffix: 'x',
      statLabel: 'more compelling'
    },
    {
      icon: 'CheckCircle',
      title: 'Confident Decisions',
      description: 'Make product decisions backed by user testing data.',
      stat: 'Data',
      statLabel: 'driven decisions'
    }
  ],

  techStack: [
    {
      name: 'Wireframing Tools',
      description: 'Structure and layout tools',
      technologies: [
        { name: 'Figma', category: 'Wireframing', proficiency: 'expert' },
        { name: 'Whimsical', category: 'Wireframing', proficiency: 'advanced' },
        { name: 'Balsamiq', category: 'Lo-Fi', proficiency: 'advanced' },
        { name: 'FigJam', category: 'Whiteboard', proficiency: 'expert' }
      ]
    },
    {
      name: 'Prototyping Tools',
      description: 'Interactive prototype software',
      technologies: [
        { name: 'Figma Prototypes', category: 'Prototyping', proficiency: 'expert' },
        { name: 'ProtoPie', category: 'Advanced', proficiency: 'expert' },
        { name: 'Framer', category: 'Code-Based', proficiency: 'advanced' },
        { name: 'Principle', category: 'Animation', proficiency: 'advanced' }
      ]
    },
    {
      name: 'User Flow Tools',
      description: 'Flow mapping software',
      technologies: [
        { name: 'Miro', category: 'Flows', proficiency: 'expert' },
        { name: 'FigJam', category: 'Collaboration', proficiency: 'expert' },
        { name: 'Overflow', category: 'Flow', proficiency: 'advanced' },
        { name: 'Whimsical', category: 'Flowcharts', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Testing Tools',
      description: 'Prototype testing platforms',
      technologies: [
        { name: 'Maze', category: 'Testing', proficiency: 'expert' },
        { name: 'UserTesting', category: 'Research', proficiency: 'advanced' },
        { name: 'Lookback', category: 'Sessions', proficiency: 'advanced' },
        { name: 'Useberry', category: 'Testing', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Collaboration',
      description: 'Team collaboration tools',
      technologies: [
        { name: 'Figma Teams', category: 'Collaboration', proficiency: 'expert' },
        { name: 'Notion', category: 'Documentation', proficiency: 'expert' },
        { name: 'Loom', category: 'Video', proficiency: 'expert' },
        { name: 'Slack', category: 'Communication', proficiency: 'expert' }
      ]
    },
    {
      name: 'Device Testing',
      description: 'Mobile prototype testing',
      technologies: [
        { name: 'Figma Mirror', category: 'iOS', proficiency: 'expert' },
        { name: 'ProtoPie Player', category: 'Mobile', proficiency: 'expert' },
        { name: 'Figma Mobile', category: 'Android', proficiency: 'expert' },
        { name: 'TestFlight', category: 'iOS', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Wireframe Sprint',
        description: 'Wireframes for a feature or user flow',
        price: '$4,000',
        priceNote: 'Starting price',
        features: [
          { name: 'User Flow Mapping', included: true },
          { name: 'Lo-Fi Wireframes', included: true },
          { name: 'Basic Prototype', included: true },
          { name: 'Annotations', included: true },
          { name: 'One Revision Round', included: true },
          { name: 'High-Fidelity Visuals', included: false },
          { name: 'User Testing', included: false },
          { name: 'Multiple Iterations', included: false }
        ],
        ctaText: 'Start Sprint'
      },
      {
        name: 'Prototype Project',
        description: 'Interactive prototype for a product or major feature',
        price: '$12,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Complete User Flows', included: true },
          { name: 'Detailed Wireframes', included: true },
          { name: 'Interactive Prototype', included: true },
          { name: 'Visual Polish', included: true },
          { name: 'Stakeholder Presentation', included: true },
          { name: 'User Testing (5 users)', included: true },
          { name: 'Multiple Platforms', included: false },
          { name: 'Ongoing Iteration', included: false }
        ],
        highlighted: true,
        badge: 'Most Popular',
        ctaText: 'Start Project'
      },
      {
        name: 'Product Prototype',
        description: 'Comprehensive prototyping for full product validation',
        price: '$30,000',
        priceNote: 'Starting price',
        features: [
          { name: 'All Product Flows', included: true },
          { name: 'Complete Wireframe Set', included: true },
          { name: 'High-Fidelity Prototypes', included: true },
          { name: 'iOS & Android Versions', included: true },
          { name: 'User Testing (15+ users)', included: true },
          { name: 'Multiple Iterations', included: true },
          { name: 'Stakeholder Workshops', included: true },
          { name: 'Dev Handoff Specs', included: true }
        ],
        ctaText: 'Contact Us'
      }
    ],
    customNote: 'Prototype scope varies widely. Contact us for a custom quote based on your specific needs.'
  },

  portfolio: [
    {
      title: 'Healthcare App Prototype',
      client: 'MedTech Startup',
      industry: 'Healthcare',
      description: 'Interactive prototype for patient monitoring app used to secure Series A funding.',
      challenge: 'Startup needed to demonstrate complex medical workflow to investors without building full product.',
      solution: 'High-fidelity prototype demonstrating core patient flows, doctor interfaces, and data visualization.',
      results: [
        'Series A secured ($8M)',
        'Validated with 12 healthcare professionals',
        '3 major UX issues discovered pre-dev',
        'Clear development roadmap'
      ],
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'High-Fidelity', 'Investor Demo', 'Mobile'],
      testimonial: {
        quote: 'The prototype helped us raise $8M. Investors could see and experience our vision.',
        author: 'Dr. Sarah Chen',
        role: 'CEO'
      }
    },
    {
      title: 'E-commerce Checkout Flow',
      client: 'RetailNext',
      industry: 'E-commerce',
      description: 'Prototype and testing of new checkout experience before development.',
      challenge: 'Cart abandonment was 78%. Needed to validate new checkout approach before rebuild.',
      solution: 'Rapid prototyping of 3 checkout variations, tested with real shoppers to identify winning approach.',
      results: [
        'Winning design validated',
        '23% improvement predicted',
        '$2M development confidently greenlit',
        '5 usability issues fixed pre-dev'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'A/B Testing', 'Conversion', 'Validation'],
      testimonial: {
        quote: 'Testing prototypes before building saved us from expensive mistakes. ROI was incredible.',
        author: 'James Wilson',
        role: 'VP Product'
      }
    },
    {
      title: 'Enterprise Software Wireframes',
      client: 'DataPro Analytics',
      industry: 'B2B Software',
      description: 'Comprehensive wireframes for enterprise analytics platform redesign.',
      challenge: 'Complex analytics product needed complete redesign. Stakeholders had conflicting visions.',
      solution: 'Detailed wireframe documentation that aligned all stakeholders and provided clear development specs.',
      results: [
        'Complete stakeholder alignment',
        '150+ screen wireframes',
        'Development time reduced 40%',
        'Zero scope creep during build'
      ],
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
      tags: ['Enterprise', 'B2B', 'Wireframes', 'Complex UX'],
      testimonial: {
        quote: 'The wireframes gave everyone clarity. Development went smoothly because specs were crystal clear.',
        author: 'Michael Park',
        role: 'CTO'
      }
    },
    {
      title: 'FinTech Mobile Prototype',
      client: 'PayFlow',
      industry: 'Financial Services',
      description: 'Interactive mobile prototype for peer-to-peer payment app with social features.',
      challenge: 'Needed to test complex payment flows and social features before committing to development.',
      solution: 'High-fidelity mobile prototype with realistic payment animations and social interactions.',
      results: [
        'Validated core payment flow',
        '8 UX improvements identified',
        'Development time estimated accurately',
        'Seed funding secured ($3M)'
      ],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['FinTech', 'Mobile', 'Payments', 'Social'],
      testimonial: {
        quote: 'The prototype let us test with real users before writing any code. Invaluable insights.',
        author: 'Amanda Torres',
        role: 'Founder'
      }
    }
  ],

  testimonials: [
    {
      quote: 'The prototype saved us from building the wrong product. Testing revealed issues we never would have anticipated.',
      author: 'Lisa Chen',
      role: 'Product Manager',
      company: 'Tech Startup Inc',
      rating: 5,
      location: 'San Francisco, CA'
    },
    {
      quote: 'Our investors were blown away by the prototype. It made our vision tangible and secured our funding.',
      author: 'David Kim',
      role: 'Founder',
      company: 'NewVenture Co',
      rating: 5,
      location: 'New York, NY'
    },
    {
      quote: 'The wireframes were so detailed, our developers had almost zero questions. Fastest project we\'ve ever delivered.',
      author: 'Jennifer Adams',
      role: 'Engineering Manager',
      company: 'Enterprise Software Corp',
      rating: 5,
      location: 'Seattle, WA'
    }
  ],

  faqs: [
    {
      question: 'What\'s the difference between wireframes and prototypes?',
      answer: 'Wireframes are static layouts showing structure and content placement—like blueprints. Prototypes are interactive, allowing users to click through and experience flows. Wireframes are faster to create and great for planning; prototypes are better for testing and stakeholder buy-in.'
    },
    {
      question: 'How realistic should prototypes be?',
      answer: 'It depends on the goal. For internal alignment and quick validation, low-fidelity prototypes work well. For user testing and investor demos, high-fidelity prototypes that look and feel like the real product are more effective. We recommend the minimum fidelity needed for your goals.'
    },
    {
      question: 'Can prototypes be used for user testing?',
      answer: 'Absolutely—that\'s one of their primary purposes. We design prototypes specifically to support usability testing, including realistic interactions, error states, and branching paths. We can also recruit users and conduct the testing sessions.'
    },
    {
      question: 'How long does prototyping take?',
      answer: 'Simple feature prototypes can be ready in 1-2 weeks. Comprehensive product prototypes with user testing typically take 3-5 weeks. We offer rapid prototyping sprints for quick validation when speed is critical.'
    },
    {
      question: 'Do you hand off prototypes for development?',
      answer: 'Yes, we provide comprehensive handoff documentation including interaction specifications, annotations, edge cases, and design tokens. Developers can inspect prototypes in Figma and extract exact values for implementation.'
    },
    {
      question: 'Can you prototype native mobile experiences?',
      answer: 'Yes, we create mobile prototypes that can be tested on actual devices. Using tools like ProtoPie, we can include native gestures, haptic feedback, and device-specific interactions that feel like the real app.'
    }
  ],

  relatedServices: [
    {
      name: 'User Experience Design',
      slug: 'user-experience-design',
      description: 'Research-driven UX to inform prototypes',
      icon: 'Users'
    },
    {
      name: 'User Interface Design',
      slug: 'user-interface-design',
      description: 'Visual design for high-fidelity prototypes',
      icon: 'Palette'
    },
    {
      name: 'Web Design',
      slug: 'web-design',
      description: 'Full website design from prototype to production',
      icon: 'Monitor'
    },
    {
      name: 'Mobile App Design',
      slug: 'mobile-app-design',
      description: 'Mobile prototypes to production design',
      icon: 'Smartphone'
    }
  ],

  seo: {
    title: 'Prototyping & Wireframing Services | Interactive Prototypes, UX Wireframes',
    description: 'Professional prototyping and wireframing services. Validate ideas with interactive prototypes and detailed wireframes before development. Reduce risk and align stakeholders.',
    keywords: [
      'prototyping',
      'wireframing',
      'interactive prototype',
      'ux wireframes',
      'product prototype',
      'clickable prototype',
      'figma prototype',
      'prototype testing',
      'wireframe design',
      'rapid prototyping'
    ]
  }
};
