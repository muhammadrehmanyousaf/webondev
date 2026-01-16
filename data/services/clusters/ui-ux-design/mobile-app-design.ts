// Mobile App Design - UI/UX Design Cluster
// Comprehensive service data for mobile app design services

import { ServiceData } from '@/components/services/sections';

export const mobileAppDesignData: ServiceData = {
  slug: 'mobile-app-design',
  name: 'Mobile App Design',
  tagline: 'Intuitive mobile experiences that users love',
  description: 'Design mobile applications that delight users and drive engagement. We create intuitive, beautiful app interfaces that follow platform guidelines while delivering unique experiences that keep users coming back.',
  category: 'UI/UX Design',

  hero: {
    headline: 'Mobile App Design',
    subheadline: 'Experiences Users Can\'t Put Down',
    description: 'Create mobile apps that users love to use. Our mobile design expertise combines platform-native patterns with innovative interfaces to deliver experiences that feel natural, look stunning, and achieve your business goals.',
    keyFeatures: [
      'iOS & Android Native Design',
      'Human Interface & Material Design',
      'Gesture-Based Interactions',
      'Accessible & Inclusive'
    ],
    badges: ['iOS', 'Android', 'Figma', 'Prototyping']
  },

  painPoints: [
    {
      icon: 'TrendingDown',
      title: 'Poor App Store Ratings',
      description: 'Users leave negative reviews citing confusing interfaces and poor user experience.',
      stat: '77%',
      statLabel: 'delete apps after 3 days'
    },
    {
      icon: 'Users',
      title: 'Low User Retention',
      description: 'Users download but quickly abandon the app due to frustrating experiences.',
      stat: '25%',
      statLabel: 'avg 90-day retention'
    },
    {
      icon: 'Smartphone',
      title: 'Platform Inconsistency',
      description: 'App doesn\'t feel native, violating platform conventions users expect.',
      stat: '60%',
      statLabel: 'prefer native feel'
    },
    {
      icon: 'Zap',
      title: 'Complex User Flows',
      description: 'Too many steps to complete simple tasks, causing user frustration and abandonment.',
      stat: '3',
      statLabel: 'taps max expected'
    },
    {
      icon: 'Accessibility',
      title: 'Accessibility Gaps',
      description: 'App unusable for users with disabilities, limiting market reach.',
      stat: '15%',
      statLabel: 'users with disabilities'
    },
    {
      icon: 'Target',
      title: 'Unclear Value Proposition',
      description: 'Users don\'t understand app benefits quickly enough to stay engaged.',
      stat: '8s',
      statLabel: 'to convince users'
    }
  ],

  solutions: [
    {
      icon: 'Smartphone',
      title: 'iOS App Design',
      description: 'Native iOS designs following Apple Human Interface Guidelines for seamless iPhone and iPad experiences.',
      highlights: [
        'Human Interface Guidelines',
        'SF Symbols integration',
        'iOS-native components',
        'iPad optimization'
      ]
    },
    {
      icon: 'Tablet',
      title: 'Android App Design',
      description: 'Material Design 3 implementations for native Android experiences across devices.',
      highlights: [
        'Material Design 3',
        'Android components',
        'Adaptive layouts',
        'Tablet support'
      ]
    },
    {
      icon: 'Layers',
      title: 'Cross-Platform Design',
      description: 'Unified design systems for apps built with React Native or Flutter.',
      highlights: [
        'Shared design language',
        'Platform adaptations',
        'Consistent branding',
        'Efficient handoff'
      ]
    },
    {
      icon: 'Fingerprint',
      title: 'Gesture & Interaction Design',
      description: 'Intuitive gesture-based interactions that feel natural and engaging.',
      highlights: [
        'Swipe interactions',
        'Pull-to-refresh',
        'Haptic feedback design',
        'Animation timing'
      ]
    },
    {
      icon: 'Layout',
      title: 'Onboarding Design',
      description: 'First-run experiences that quickly demonstrate value and drive activation.',
      highlights: [
        'Value proposition clarity',
        'Progressive disclosure',
        'Permission requests',
        'Tutorial flows'
      ]
    },
    {
      icon: 'Accessibility',
      title: 'Accessible Mobile Design',
      description: 'Inclusive designs that work for all users regardless of ability.',
      highlights: [
        'VoiceOver/TalkBack support',
        'Dynamic type support',
        'High contrast modes',
        'Motor accessibility'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Research & Discovery',
        description: 'Understand users, competitors, and platform requirements to inform design strategy.',
        duration: '1-2 weeks',
        deliverables: ['User personas', 'Competitive analysis', 'Platform audit', 'Feature prioritization']
      },
      {
        icon: 'Map',
        title: 'Information Architecture',
        description: 'Define app structure, navigation patterns, and user flows.',
        duration: '1 week',
        deliverables: ['App structure', 'Navigation map', 'User flows', 'Screen inventory']
      },
      {
        icon: 'Layout',
        title: 'Wireframing',
        description: 'Create low-fidelity layouts establishing content hierarchy and interactions.',
        duration: '1-2 weeks',
        deliverables: ['Wireframes', 'Interaction notes', 'Content strategy', 'Edge cases']
      },
      {
        icon: 'Palette',
        title: 'Visual Design',
        description: 'Develop the visual language and apply to all screens with platform adaptations.',
        duration: '3-4 weeks',
        deliverables: ['Visual style', 'All screen designs', 'Platform variants', 'Dark mode']
      },
      {
        icon: 'Play',
        title: 'Prototyping',
        description: 'Create interactive prototypes for testing and stakeholder review.',
        duration: '1-2 weeks',
        deliverables: ['Interactive prototype', 'Animation specs', 'Gesture demos', 'User testing']
      },
      {
        icon: 'Code',
        title: 'Design Handoff',
        description: 'Prepare comprehensive specifications for development team.',
        duration: '1 week',
        deliverables: ['Design specs', 'Asset exports', 'Animation guides', 'Component documentation']
      }
    ],
    totalDuration: '8-12 weeks'
  },

  benefits: [
    {
      icon: 'Star',
      title: 'Higher App Ratings',
      description: 'Beautiful, intuitive design leads to better reviews and ratings.',
      stat: '4.7',
      statSuffix: '★',
      statLabel: 'avg rating achieved'
    },
    {
      icon: 'Users',
      title: 'Better Retention',
      description: 'Engaging experiences keep users coming back day after day.',
      stat: '60',
      statSuffix: '%',
      statLabel: 'retention improvement'
    },
    {
      icon: 'TrendingUp',
      title: 'Increased Engagement',
      description: 'Intuitive design leads to more sessions and longer usage.',
      stat: '3',
      statSuffix: 'x',
      statLabel: 'more daily sessions'
    },
    {
      icon: 'Target',
      title: 'Higher Conversions',
      description: 'Optimized flows drive users toward desired actions.',
      stat: '200',
      statSuffix: '%',
      statLabel: 'conversion increase'
    },
    {
      icon: 'Zap',
      title: 'Faster Development',
      description: 'Clear design specifications reduce development time and rework.',
      stat: '30',
      statSuffix: '%',
      statLabel: 'faster development'
    },
    {
      icon: 'Award',
      title: 'App Store Feature',
      description: 'Outstanding design increases chances of being featured.',
      stat: 'Featured',
      statLabel: 'app potential'
    }
  ],

  techStack: [
    {
      name: 'Design Tools',
      description: 'Mobile design software',
      technologies: [
        { name: 'Figma', category: 'Design', proficiency: 'expert' },
        { name: 'Sketch', category: 'Design', proficiency: 'expert' },
        { name: 'Adobe XD', category: 'Design', proficiency: 'advanced' },
        { name: 'Framer', category: 'Design', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Prototyping',
      description: 'Interactive prototype tools',
      technologies: [
        { name: 'Figma Prototypes', category: 'Prototyping', proficiency: 'expert' },
        { name: 'ProtoPie', category: 'Prototyping', proficiency: 'advanced' },
        { name: 'Principle', category: 'Animation', proficiency: 'advanced' },
        { name: 'Framer Motion', category: 'Animation', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Platform Resources',
      description: 'Native design resources',
      technologies: [
        { name: 'SF Symbols', category: 'iOS', proficiency: 'expert' },
        { name: 'Material Icons', category: 'Android', proficiency: 'expert' },
        { name: 'iOS UI Kit', category: 'iOS', proficiency: 'expert' },
        { name: 'Material Design Kit', category: 'Android', proficiency: 'expert' }
      ]
    },
    {
      name: 'Collaboration',
      description: 'Team collaboration',
      technologies: [
        { name: 'Figma Teams', category: 'Collaboration', proficiency: 'expert' },
        { name: 'Zeplin', category: 'Handoff', proficiency: 'expert' },
        { name: 'Loom', category: 'Communication', proficiency: 'advanced' },
        { name: 'Notion', category: 'Documentation', proficiency: 'expert' }
      ]
    },
    {
      name: 'Testing',
      description: 'User testing platforms',
      technologies: [
        { name: 'Maze', category: 'Testing', proficiency: 'advanced' },
        { name: 'UserTesting', category: 'Research', proficiency: 'advanced' },
        { name: 'Lookback', category: 'Testing', proficiency: 'advanced' },
        { name: 'TestFlight', category: 'Beta Testing', proficiency: 'expert' }
      ]
    },
    {
      name: 'Animation',
      description: 'Motion design tools',
      technologies: [
        { name: 'Lottie', category: 'Animation', proficiency: 'expert' },
        { name: 'After Effects', category: 'Animation', proficiency: 'advanced' },
        { name: 'Rive', category: 'Animation', proficiency: 'advanced' },
        { name: 'Jitter', category: 'Animation', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'MVP Design',
        description: 'Essential screens for app launch',
        price: '$8,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Core Flow Design (10-15 screens)', included: true },
          { name: 'Single Platform (iOS or Android)', included: true },
          { name: 'Interactive Prototype', included: true },
          { name: 'Basic Design System', included: true },
          { name: 'Developer Handoff', included: true },
          { name: 'Both Platforms', included: false },
          { name: 'Full Design System', included: false },
          { name: 'Ongoing Support', included: false }
        ],
        ctaText: 'Start Project'
      },
      {
        name: 'Full App Design',
        description: 'Complete app design for both platforms',
        price: '$20,000',
        priceNote: 'Starting price',
        features: [
          { name: 'All Screens & States', included: true },
          { name: 'iOS & Android Designs', included: true },
          { name: 'Complete Design System', included: true },
          { name: 'Interactive Prototypes', included: true },
          { name: 'User Flow Animations', included: true },
          { name: 'Accessibility Review', included: true },
          { name: 'Design QA Support', included: false },
          { name: 'Ongoing Iterations', included: false }
        ],
        highlighted: true,
        badge: 'Most Popular',
        ctaText: 'Start Project'
      },
      {
        name: 'Enterprise App',
        description: 'Complex app with extensive features',
        price: '$50,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Unlimited Screens', included: true },
          { name: 'All Platforms (iOS, Android, Tablet)', included: true },
          { name: 'Comprehensive Design System', included: true },
          { name: 'Advanced Prototypes', included: true },
          { name: 'Motion Design & Micro-interactions', included: true },
          { name: 'Accessibility Audit', included: true },
          { name: 'Design QA Throughout Dev', included: true },
          { name: '3 Months Post-Launch Support', included: true }
        ],
        ctaText: 'Contact Us'
      }
    ],
    customNote: 'App complexity varies greatly. Contact us for a detailed estimate based on your feature requirements.'
  },

  portfolio: [
    {
      title: 'Fitness & Wellness App',
      client: 'FitLife Pro',
      industry: 'Health & Fitness',
      description: 'Comprehensive fitness app with workout tracking, nutrition planning, and social features.',
      challenge: 'Create an engaging fitness app that stands out in a crowded market while being easy to use during workouts.',
      solution: 'Bold, motivating design with quick-action workout controls and gamified progress tracking.',
      results: [
        '4.9 App Store rating',
        '500K+ downloads',
        'Featured by Apple',
        '65% 30-day retention'
      ],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      tags: ['iOS', 'Health & Fitness', 'Figma', 'Featured App'],
      testimonial: {
        quote: 'The design made complex features feel simple. Users complete workouts without confusion.',
        author: 'Marcus Johnson',
        role: 'CEO'
      }
    },
    {
      title: 'Banking Mobile App',
      client: 'TrustBank',
      industry: 'Financial Services',
      description: 'Mobile banking app redesign focusing on security, trust, and ease of use.',
      challenge: 'Modernize a dated banking app while maintaining the trust and security users expect.',
      solution: 'Clean, professional design with prominent security indicators and streamlined transactions.',
      results: [
        '4.7 to 4.9 rating improvement',
        '200% increase in mobile deposits',
        '40% reduction in support calls',
        'Banking app of the year'
      ],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['iOS', 'Android', 'FinTech', 'Redesign'],
      testimonial: {
        quote: 'Our customers finally love using mobile banking. The design made complex features approachable.',
        author: 'Sarah Mitchell',
        role: 'VP Digital Banking'
      }
    },
    {
      title: 'Food Delivery App',
      client: 'QuickBite',
      industry: 'Food & Beverage',
      description: 'On-demand food delivery app with real-time tracking and restaurant discovery.',
      challenge: 'Create a fast, efficient ordering experience that helps users find and order food quickly.',
      solution: 'Streamlined 3-tap ordering flow with personalized recommendations and real-time delivery tracking.',
      results: [
        '40% faster order completion',
        '25% increase in order frequency',
        '4.8 average rating',
        '$10M funding raised'
      ],
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
      tags: ['iOS', 'Android', 'Food Delivery', 'Material Design'],
      testimonial: {
        quote: 'The simplified ordering flow was a game-changer. Users order more frequently now.',
        author: 'David Park',
        role: 'Founder'
      }
    },
    {
      title: 'Travel Companion App',
      client: 'Wanderlust',
      industry: 'Travel & Tourism',
      description: 'All-in-one travel app with itinerary planning, booking, and local discovery features.',
      challenge: 'Design an intuitive app that simplifies complex travel planning for both iOS and Android users.',
      solution: 'Gesture-based navigation with offline support, smart itinerary builder, and immersive destination previews.',
      results: [
        '4.8 cross-platform rating',
        '1M+ active travelers',
        'Google Play Editor\'s Choice',
        '78% trip completion rate'
      ],
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
      tags: ['iOS', 'Android', 'Travel', 'Cross-Platform'],
      testimonial: {
        quote: 'Users tell us planning trips is now enjoyable instead of stressful. That was our goal.',
        author: 'Emma Rodriguez',
        role: 'Product Director'
      }
    }
  ],

  testimonials: [
    {
      quote: 'They understood iOS design deeply. Our app feels like it belongs on the platform while still being uniquely ours.',
      author: 'Jennifer Adams',
      role: 'Product Director',
      company: 'AppVenture Inc',
      rating: 5,
      location: 'San Francisco, CA'
    },
    {
      quote: 'The prototypes were so polished, stakeholders thought they were looking at the finished app.',
      author: 'Michael Chen',
      role: 'CTO',
      company: 'StartupX',
      rating: 5,
      location: 'New York, NY'
    },
    {
      quote: 'User retention improved dramatically after the redesign. The new design just makes sense to users.',
      author: 'Lisa Thompson',
      role: 'VP Product',
      company: 'MobileFirst Corp',
      rating: 5,
      location: 'Austin, TX'
    }
  ],

  faqs: [
    {
      question: 'Do you design for both iOS and Android?',
      answer: 'Yes, we design for both platforms. Each platform receives native designs following their respective guidelines (Human Interface Guidelines for iOS, Material Design for Android) while maintaining brand consistency. We can also create unified designs for cross-platform frameworks like React Native and Flutter.'
    },
    {
      question: 'How do you ensure designs feel native to each platform?',
      answer: 'We follow platform guidelines meticulously—using SF Symbols and iOS components for Apple, Material Design components for Android. Navigation patterns, gesture behaviors, and UI conventions match what users expect on each platform.'
    },
    {
      question: 'Do you create interactive prototypes?',
      answer: 'Absolutely. Every project includes interactive prototypes that demonstrate user flows, transitions, and interactions. These prototypes are invaluable for user testing, stakeholder buy-in, and development guidance.'
    },
    {
      question: 'How do you handle different screen sizes?',
      answer: 'We design for multiple screen sizes including various iPhone models, Android phones, and tablets when needed. Designs use responsive techniques and adaptive layouts to work across the device spectrum.'
    },
    {
      question: 'Can you redesign our existing app?',
      answer: 'Yes, app redesigns are a core service. We analyze your current app, understand what\'s working, identify pain points, and create a modern design that improves usability while preserving user familiarity where appropriate.'
    },
    {
      question: 'Do you design dark mode?',
      answer: 'Yes, dark mode is standard in our mobile designs. We create carefully calibrated dark mode color schemes that maintain readability, reduce eye strain, and look beautiful—not just inverted light mode colors.'
    }
  ],

  relatedServices: [
    {
      name: 'User Experience Design',
      slug: 'user-experience-design',
      description: 'Research-driven UX for optimal mobile experiences',
      icon: 'Users'
    },
    {
      name: 'iOS Development',
      slug: '/mobile-development/ios-development',
      description: 'Native iOS app development',
      icon: 'Smartphone'
    },
    {
      name: 'Android Development',
      slug: '/mobile-development/android-development',
      description: 'Native Android app development',
      icon: 'Tablet'
    },
    {
      name: 'Design Systems',
      slug: 'design-systems',
      description: 'Scalable design systems for mobile apps',
      icon: 'Layers'
    }
  ],

  seo: {
    title: 'Mobile App Design Services | iOS & Android UI/UX Design',
    description: 'Expert mobile app design for iOS and Android. Native UI design following Human Interface Guidelines and Material Design. Interactive prototypes and complete design systems.',
    keywords: [
      'mobile app design',
      'ios app design',
      'android app design',
      'mobile ui design',
      'mobile ux design',
      'app interface design',
      'material design',
      'human interface guidelines',
      'mobile app redesign',
      'app ui/ux'
    ]
  }
};
