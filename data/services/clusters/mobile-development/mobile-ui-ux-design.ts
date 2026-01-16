import { ServiceData } from '@/components/services/sections';

export const mobileUiUxDesignData: ServiceData = {
  // Basic Info
  slug: 'mobile-ui-ux-design',
  name: 'Mobile UI/UX Design Services',
  tagline: 'User-Centered Design for Mobile Excellence',
  description: 'Expert mobile UI/UX design services for iOS and Android apps. We create intuitive, beautiful, and engaging mobile experiences through user research, interaction design, and pixel-perfect visual design.',
  category: 'Mobile Development',

  // Hero Section
  hero: {
    headline: 'Mobile UI/UX Design',
    subheadline: 'Design Apps Users Love',
    description: 'Transform your app idea into an exceptional user experience. Our mobile design team creates intuitive interfaces, engaging interactions, and beautiful visuals that follow iOS and Android design guidelines while standing out in the app stores.',
    keyFeatures: [
      'User research & testing',
      'iOS & Android design systems',
      'Interactive prototyping',
      'Platform-specific guidelines',
      'Pixel-perfect deliverables',
    ],
    badges: ['300+ Apps Designed', 'Apple HIG Experts', 'Material Design Certified'],
  },

  // Pain Points
  painPoints: [
    {
      icon: 'Users',
      title: 'Poor User Retention',
      description: 'Users abandon apps with confusing interfaces. First impressions matter - bad UX drives users away permanently.',
      stat: '77%',
      statLabel: 'abandon after day 3',
    },
    {
      icon: 'ThumbsDown',
      title: 'Low App Store Ratings',
      description: 'Users blame the app when they can\'t accomplish their goals. UX problems show up as bad reviews.',
      stat: '60%',
      statLabel: 'of low ratings cite UX',
    },
    {
      icon: 'Smartphone',
      title: 'Platform Inconsistency',
      description: 'Apps that don\'t follow iOS or Android conventions feel foreign. Users expect platform-specific patterns.',
      stat: '45%',
      statLabel: 'frustrated by wrong patterns',
    },
    {
      icon: 'Accessibility',
      title: 'Accessibility Issues',
      description: 'Apps inaccessible to users with disabilities exclude millions of potential users and risk legal issues.',
      stat: '15%',
      statLabel: 'of population has disabilities',
    },
    {
      icon: 'Clock',
      title: 'Development Delays',
      description: 'Starting development without proper design leads to costly rework. Design problems found in code cost 10x more to fix.',
      stat: '10x',
      statLabel: 'cost to fix in development',
    },
    {
      icon: 'TrendingDown',
      title: 'Low Conversion Rates',
      description: 'Complex flows and poor onboarding prevent users from converting. Every friction point loses customers.',
      stat: '30%',
      statLabel: 'abandon during signup',
    },
  ],

  // Solutions/Features
  solutions: [
    {
      icon: 'Users',
      title: 'User Research',
      description: 'Understand your users before designing. User interviews, surveys, and competitive analysis ensure we design for real needs.',
      highlights: [
        'User interviews',
        'Persona development',
        'Journey mapping',
        'Competitive analysis',
      ],
    },
    {
      icon: 'Layout',
      title: 'Information Architecture',
      description: 'Structure content and navigation for intuitive discovery. Card sorting and tree testing validate your app\'s structure.',
      highlights: [
        'Navigation design',
        'Content structure',
        'Card sorting',
        'User flows',
      ],
    },
    {
      icon: 'Boxes',
      title: 'Interaction Design',
      description: 'Design intuitive interactions, gestures, and transitions. Create engaging experiences that guide users naturally.',
      highlights: [
        'Gesture design',
        'Micro-interactions',
        'Transitions',
        'Feedback systems',
      ],
    },
    {
      icon: 'Palette',
      title: 'Visual Design',
      description: 'Create beautiful interfaces that reflect your brand. Typography, color, iconography, and imagery crafted for mobile.',
      highlights: [
        'Visual identity',
        'Typography',
        'Color systems',
        'Icon design',
      ],
    },
    {
      icon: 'Smartphone',
      title: 'Platform-Specific Design',
      description: 'Expert in iOS Human Interface Guidelines and Android Material Design. Your app feels native on each platform.',
      highlights: [
        'iOS HIG compliance',
        'Material Design 3',
        'Platform patterns',
        'Native components',
      ],
    },
    {
      icon: 'Sparkles',
      title: 'Prototyping & Testing',
      description: 'Interactive prototypes let you test and validate before development. Catch problems early when they\'re cheap to fix.',
      highlights: [
        'Interactive prototypes',
        'Usability testing',
        'A/B testing',
        'Analytics setup',
      ],
    },
  ],

  // Process Steps
  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Discovery & Research',
        description: 'Understand your users, business goals, and competitive landscape. Build the foundation for informed design decisions.',
        duration: '1-2 weeks',
        deliverables: ['User personas', 'Journey maps', 'Competitive analysis'],
      },
      {
        icon: 'Layout',
        title: 'Information Architecture',
        description: 'Define navigation, content structure, and user flows. Validate with card sorting and tree testing.',
        duration: '1 week',
        deliverables: ['Site map', 'User flows', 'Navigation structure'],
      },
      {
        icon: 'FileText',
        title: 'Wireframing',
        description: 'Create low-fidelity wireframes for all screens. Focus on layout, content hierarchy, and interaction patterns.',
        duration: '1-2 weeks',
        deliverables: ['Wireframes', 'Interaction specs', 'Annotations'],
      },
      {
        icon: 'Palette',
        title: 'Visual Design',
        description: 'Apply visual design to wireframes. Create the look and feel with typography, color, and imagery.',
        duration: '2-3 weeks',
        deliverables: ['UI designs', 'Style guide', 'Design system'],
      },
      {
        icon: 'Play',
        title: 'Prototyping',
        description: 'Build interactive prototypes for testing and stakeholder review. Simulate the real app experience.',
        duration: '1 week',
        deliverables: ['Interactive prototype', 'Clickable flows', 'Demo video'],
      },
      {
        icon: 'TestTube',
        title: 'Testing & Handoff',
        description: 'Usability testing and iteration. Prepare development-ready assets and specifications.',
        duration: '1-2 weeks',
        deliverables: ['Usability findings', 'Dev handoff specs', 'Asset library'],
      },
    ],
    totalDuration: '7-11 weeks',
  },

  // Benefits
  benefits: [
    {
      icon: 'Users',
      title: 'Better Retention',
      description: 'Intuitive design keeps users engaged. Well-designed apps have significantly higher retention rates.',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Higher Retention',
    },
    {
      icon: 'Star',
      title: 'Higher Ratings',
      description: 'Users reward good UX with positive reviews. Better ratings improve visibility and downloads.',
      stat: '4.5',
      statSuffix: '+',
      statLabel: 'Average Rating',
    },
    {
      icon: 'Target',
      title: 'Better Conversion',
      description: 'Optimized flows convert more users. Good UX design directly impacts business metrics.',
      stat: '2',
      statSuffix: 'x',
      statLabel: 'Conversion Improvement',
    },
    {
      icon: 'DollarSign',
      title: 'Reduced Development Cost',
      description: 'Catch problems in design, not code. Validated designs prevent expensive rework.',
      stat: '50',
      statSuffix: '%',
      statLabel: 'Less Rework',
    },
    {
      icon: 'Clock',
      title: 'Faster Development',
      description: 'Complete specs and assets accelerate development. Developers build with confidence.',
      stat: '30',
      statSuffix: '%',
      statLabel: 'Faster Builds',
    },
    {
      icon: 'Award',
      title: 'Feature Potential',
      description: 'Beautiful, well-designed apps are more likely to be featured by Apple and Google.',
      stat: '3',
      statSuffix: 'x',
      statLabel: 'Higher Feature Chance',
    },
  ],

  // Tech Stack
  techStack: [
    {
      name: 'Design Tools',
      description: 'Industry-standard design software',
      technologies: [
        { name: 'Figma', icon: 'figma', category: 'Design', proficiency: 'expert' },
        { name: 'Sketch', icon: 'sketch', category: 'Design', proficiency: 'expert' },
        { name: 'Adobe XD', icon: 'xd', category: 'Design', proficiency: 'advanced' },
        { name: 'Framer', icon: 'framer', category: 'Prototyping', proficiency: 'advanced' },
      ],
    },
    {
      name: 'Prototyping',
      description: 'Interactive prototype tools',
      technologies: [
        { name: 'Figma Prototyping', icon: 'figma', category: 'Prototyping', proficiency: 'expert' },
        { name: 'ProtoPie', icon: 'protopie', category: 'Prototyping', proficiency: 'advanced' },
        { name: 'Principle', icon: 'principle', category: 'Animation', proficiency: 'advanced' },
        { name: 'InVision', icon: 'invision', category: 'Prototyping', proficiency: 'expert' },
      ],
    },
    {
      name: 'Research & Testing',
      description: 'User research tools',
      technologies: [
        { name: 'Maze', icon: 'maze', category: 'Testing', proficiency: 'expert' },
        { name: 'UserTesting', icon: 'usertesting', category: 'Research', proficiency: 'advanced' },
        { name: 'Hotjar', icon: 'hotjar', category: 'Analytics', proficiency: 'expert' },
        { name: 'Optimal Workshop', icon: 'optimal', category: 'Research', proficiency: 'advanced' },
      ],
    },
    {
      name: 'Design Systems',
      description: 'Platform design resources',
      technologies: [
        { name: 'iOS Human Interface', icon: 'apple', category: 'Guidelines', proficiency: 'expert' },
        { name: 'Material Design 3', icon: 'material', category: 'Guidelines', proficiency: 'expert' },
        { name: 'Apple SF Symbols', icon: 'sfsymbols', category: 'Icons', proficiency: 'expert' },
        { name: 'Material Icons', icon: 'icons', category: 'Icons', proficiency: 'expert' },
      ],
    },
  ],

  // Portfolio
  portfolio: [
    {
      title: 'Banking App Redesign',
      client: 'NextGen Bank',
      industry: 'Banking',
      description: 'Complete redesign of a mobile banking app. Simplified complex flows, improved accessibility, and modernized the visual design.',
      challenge: 'Legacy banking app with poor usability scores and high abandonment during transactions.',
      solution: 'User research-driven redesign focusing on simplified flows, clear feedback, and accessibility.',
      results: ['92% usability score', '50% faster transactions', '4.8 star rating'],
      metrics: [
        { label: 'Usability Score', value: '92%' },
        { label: 'Transaction Speed', value: '50% faster' },
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['Banking', 'Redesign', 'Accessibility', 'iOS', 'Android'],
      testimonial: {
        quote: 'The redesign transformed our app. Usability scores jumped from 60% to 92%, and our app store rating went from 3.2 to 4.8.',
        author: 'Jennifer Williams',
        role: 'VP of Digital',
      },
    },
    {
      title: 'Healthcare Patient App',
      client: 'HealthFirst',
      industry: 'Healthcare',
      description: 'Patient-facing app for appointment scheduling, health records, and telemedicine. Designed for users of all ages and abilities.',
      challenge: 'Design an inclusive healthcare app accessible to elderly patients and those with disabilities.',
      solution: 'Accessibility-first design with large touch targets, high contrast, and VoiceOver/TalkBack optimization.',
      results: ['WCAG AAA compliant', '85+ age users success', 'FDA approved'],
      metrics: [
        { label: 'Accessibility', value: 'WCAG AAA' },
        { label: 'Elder Usability', value: '94%' },
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'Accessibility', 'Telemedicine', 'iOS', 'Android'],
      testimonial: {
        quote: 'Patients who previously couldn\'t use digital health tools now manage their healthcare independently. The inclusive design made all the difference.',
        author: 'Dr. Michael Chen',
        role: 'Chief Digital Officer',
      },
    },
    {
      title: 'E-Learning Platform',
      client: 'LearnFast',
      industry: 'Education',
      description: 'Mobile learning app with courses, quizzes, and progress tracking. Gamification elements to increase engagement.',
      challenge: 'Create an engaging learning experience that motivates users to complete courses on mobile.',
      solution: 'Gamified design with progress visualization, streak mechanics, and rewarding micro-interactions.',
      results: ['85% completion rate', '45 min avg session', 'Featured by Google'],
      metrics: [
        { label: 'Completion Rate', value: '85%' },
        { label: 'Session Length', value: '45 min' },
      ],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      tags: ['Education', 'Gamification', 'Engagement', 'Material Design', 'iOS'],
      testimonial: {
        quote: 'The gamification and progress design tripled our course completion rates. Users love the experience.',
        author: 'Sarah Thompson',
        role: 'CEO',
      },
    },
    {
      title: 'Social Fitness Experience',
      client: 'FitSquad',
      industry: 'Fitness',
      description: 'Social fitness app design with workout challenges, progress sharing, leaderboards, and community features.',
      challenge: 'Design a fitness app that motivates through social accountability while avoiding intimidating competitive elements.',
      solution: 'Inclusive design with supportive social features, personal achievement focus, and encouraging UI patterns.',
      results: ['200% engagement increase', '4.9 star rating', '60% monthly retention'],
      metrics: [
        { label: 'Engagement', value: '+200%' },
        { label: 'Retention', value: '60%' },
      ],
      image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=600&fit=crop',
      tags: ['Fitness', 'Social', 'Gamification', 'iOS', 'Android'],
      testimonial: {
        quote: 'The design perfectly balances competition and encouragement. Users stay motivated without feeling overwhelmed.',
        author: 'Amanda Martinez',
        role: 'Product Lead',
      },
    },
  ],

  // Pricing
  pricing: {
    plans: [
      {
        name: 'Design Audit',
        description: 'Evaluate existing app design',
        price: '$3,000',
        priceNote: 'One-time',
        features: [
          { name: 'Heuristic evaluation', included: true },
          { name: 'Usability assessment', included: true },
          { name: 'Accessibility review', included: true },
          { name: 'Competitive benchmarking', included: true },
          { name: 'Prioritized recommendations', included: true },
          { name: 'Design work', included: false },
          { name: 'Prototyping', included: false },
        ],
        ctaText: 'Get Audit',
      },
      {
        name: 'App Design',
        description: 'Complete mobile app design',
        price: '$15,000',
        priceNote: 'Starting price',
        highlighted: true,
        badge: 'Most Popular',
        features: [
          { name: 'User research', included: true },
          { name: 'Information architecture', included: true },
          { name: 'Wireframes', included: true },
          { name: 'Visual design (20+ screens)', included: true },
          { name: 'Interactive prototype', included: true },
          { name: 'Design system', included: true },
          { name: 'Developer handoff', included: true },
        ],
        ctaText: 'Start Design',
      },
      {
        name: 'Enterprise Design',
        description: 'Complex multi-platform design',
        price: 'Custom',
        priceNote: 'Based on scope',
        features: [
          { name: 'Extensive user research', included: true },
          { name: 'iOS & Android design', included: true },
          { name: 'Full design system', included: true },
          { name: 'Usability testing', included: true },
          { name: 'Accessibility compliance', included: true },
          { name: 'Ongoing design support', included: true },
          { name: 'Design team training', included: true },
        ],
        ctaText: 'Contact Sales',
      },
    ],
    customNote: 'All design projects include developer-ready specifications, asset exports, and design documentation.',
  },

  // Testimonials
  testimonials: [
    {
      quote: 'The user research insights were invaluable. They designed an app that truly addresses what our customers needed, not what we assumed.',
      author: 'Jennifer Williams',
      role: 'VP of Digital',
      company: 'NextGen Bank',
      rating: 5,
      location: 'New York, NY',
    },
    {
      quote: 'Their expertise in accessibility design was crucial for our healthcare app. They made complex medical features simple for all users.',
      author: 'Dr. Michael Chen',
      role: 'Chief Digital Officer',
      company: 'HealthFirst',
      rating: 5,
      location: 'Boston, MA',
    },
    {
      quote: 'The interactive prototypes let us test everything before development. We avoided countless costly changes.',
      author: 'Sarah Thompson',
      role: 'CEO',
      company: 'LearnFast',
      rating: 5,
      location: 'Austin, TX',
    },
  ],

  // FAQs
  faqs: [
    {
      question: 'Do you design for both iOS and Android?',
      answer: 'Yes. We design platform-specific experiences following Apple\'s Human Interface Guidelines for iOS and Google\'s Material Design for Android. We ensure your app feels native on each platform while maintaining brand consistency.',
      category: 'Platforms',
    },
    {
      question: 'How do you handle design for an existing app?',
      answer: 'We start with a design audit to identify pain points and opportunities. We can then tackle specific areas or do a complete redesign while maintaining what works. Evolution is often better than revolution.',
      category: 'Process',
    },
    {
      question: 'What deliverables do we receive?',
      answer: 'You receive Figma files with all screens, a design system with components, interactive prototypes, specifications for developers, and exported assets. Everything needed for development handoff.',
      category: 'Deliverables',
    },
    {
      question: 'Do you conduct user testing?',
      answer: 'Yes, user testing is part of our process. We test wireframes and prototypes with real users, identify usability issues, and iterate before development. Testing is the best way to validate design decisions.',
      category: 'Research',
    },
    {
      question: 'How do you ensure accessibility?',
      answer: 'We design with accessibility from the start - proper contrast ratios, touch target sizes, screen reader support, and more. We can target WCAG AA or AAA compliance based on your needs.',
      category: 'Accessibility',
    },
    {
      question: 'Can you work with our development team?',
      answer: 'Absolutely. We provide developer-ready specifications and can collaborate directly with your developers. We use tools like Figma Dev Mode and Zeplin for smooth handoff.',
      category: 'Process',
    },
    {
      question: 'How long does mobile app design take?',
      answer: 'A typical mobile app design takes 7-11 weeks including research, wireframes, visual design, and prototyping. Complex apps or extensive user research may take longer.',
      category: 'Timeline',
    },
    {
      question: 'Do you create design systems?',
      answer: 'Yes, we create comprehensive design systems with reusable components, typography scales, color systems, and design tokens. This ensures consistency and speeds up future design work.',
      category: 'Design Systems',
    },
  ],

  // Related Services
  relatedServices: [
    {
      name: 'iOS Development',
      slug: 'ios-development',
      description: 'Build your iOS app',
      icon: 'Smartphone',
    },
    {
      name: 'Android Development',
      slug: 'android-development',
      description: 'Build your Android app',
      icon: 'Smartphone',
    },
    {
      name: 'Cross-Platform Development',
      slug: 'cross-platform-development',
      description: 'Build for both platforms',
      icon: 'Share2',
    },
    {
      name: 'App Store Optimization',
      slug: 'app-store-optimization',
      description: 'Market your app',
      icon: 'TrendingUp',
    },
  ],

  // SEO
  seo: {
    title: 'Mobile UI/UX Design Services | iOS & Android App Design',
    description: 'Expert mobile UI/UX design for iOS and Android apps. User research, wireframing, visual design, and prototyping. Create apps users love.',
    keywords: [
      'mobile ui design',
      'mobile ux design',
      'ios app design',
      'android app design',
      'mobile app design',
      'app ux design',
      'mobile design agency',
      'app user experience',
    ],
  },
};
