import { ServiceData } from '@/components/services/sections';

export const reactNativeDevelopmentData: ServiceData = {
  // Basic Info
  slug: 'react-native-development',
  name: 'React Native Development Services',
  tagline: 'One Codebase, Two Platforms, Native Performance',
  description: 'Expert React Native development for iOS and Android apps from a single codebase. We build cross-platform mobile apps that look and feel native while cutting development time and costs in half.',
  category: 'Mobile Development',

  // Hero Section
  hero: {
    headline: 'React Native Development',
    subheadline: 'Cross-Platform Done Right',
    description: 'Build iOS and Android apps simultaneously with React Native. Our expert team creates beautiful, high-performance mobile applications using JavaScript and React, delivering native experiences at half the cost of separate native development.',
    keyFeatures: [
      'Single codebase for iOS & Android',
      '90%+ code sharing',
      'Native performance & UX',
      'React ecosystem benefits',
      'Faster time-to-market',
    ],
    badges: ['Meta Framework', '500+ Apps Built', '60% Cost Savings'],
  },

  // Pain Points
  painPoints: [
    {
      icon: 'DollarSign',
      title: 'Double Development Costs',
      description: 'Building separate iOS and Android apps means two codebases, two teams, and double the budget. Most companies can\'t afford this.',
      stat: '2x',
      statLabel: 'cost for separate native apps',
    },
    {
      icon: 'Clock',
      title: 'Slow Time-to-Market',
      description: 'Sequential platform development delays launch by months. Your competition ships while you\'re still building.',
      stat: '6-12',
      statLabel: 'months for both platforms',
    },
    {
      icon: 'Users',
      title: 'Team Coordination',
      description: 'Managing separate iOS and Android teams creates communication overhead. Features ship at different times causing user frustration.',
      stat: '40%',
      statLabel: 'of time on coordination',
    },
    {
      icon: 'RefreshCw',
      title: 'Inconsistent Updates',
      description: 'Maintaining two codebases means bug fixes and features roll out unevenly. Platform parity is a constant battle.',
      stat: '3x',
      statLabel: 'longer for feature parity',
    },
    {
      icon: 'Wrench',
      title: 'Maintenance Overhead',
      description: 'Every bug exists in two codebases. Security patches, OS updates, and improvements require duplicate effort.',
      stat: '2x',
      statLabel: 'maintenance burden',
    },
    {
      icon: 'Search',
      title: 'Talent Scarcity',
      description: 'Finding skilled native developers for both platforms is difficult and expensive. React Native developers are more available.',
      stat: '50%',
      statLabel: 'larger React talent pool',
    },
  ],

  // Solutions/Features
  solutions: [
    {
      icon: 'Share2',
      title: 'True Cross-Platform',
      description: 'One codebase powers iOS and Android apps. Write business logic once, share UI components, and maintain a single source of truth.',
      highlights: [
        '90%+ code sharing',
        'Single codebase',
        'Unified maintenance',
        'Consistent experience',
      ],
    },
    {
      icon: 'Zap',
      title: 'Native Performance',
      description: 'React Native compiles to native code. Your app uses real native UI components for 60fps animations and instant responsiveness.',
      highlights: [
        'Native UI components',
        '60fps animations',
        'Efficient bridge',
        'Near-native performance',
      ],
    },
    {
      icon: 'RefreshCw',
      title: 'Hot Reloading',
      description: 'See changes instantly without rebuilding. Fast iteration means faster development and more time for polish.',
      highlights: [
        'Instant previews',
        'Faster iteration',
        'Rapid prototyping',
        'Developer productivity',
      ],
    },
    {
      icon: 'Boxes',
      title: 'React Ecosystem',
      description: 'Leverage the massive React ecosystem. Thousands of libraries, proven patterns, and a huge talent pool.',
      highlights: [
        'npm ecosystem',
        'React patterns',
        'Community support',
        'Proven libraries',
      ],
    },
    {
      icon: 'Globe',
      title: 'Web Code Sharing',
      description: 'Share code between React Native and React web apps. Business logic, validation, and API layers work everywhere.',
      highlights: [
        'Web + mobile sharing',
        'Shared business logic',
        'Unified testing',
        'Design system reuse',
      ],
    },
    {
      icon: 'Plug',
      title: 'Native Module Access',
      description: 'Need platform-specific features? Native modules bridge to iOS and Android capabilities when JavaScript isn\'t enough.',
      highlights: [
        'Native module bridge',
        'Platform APIs',
        'Custom native code',
        'Full device access',
      ],
    },
  ],

  // Process Steps
  process: {
    steps: [
      {
        icon: 'MessageSquare',
        title: 'Discovery & Planning',
        description: 'Define app requirements, user needs, and feature priorities. Plan the architecture for maximum code sharing.',
        duration: '1-2 weeks',
        deliverables: ['App specification', 'Architecture plan', 'Feature roadmap'],
      },
      {
        icon: 'Palette',
        title: 'Cross-Platform Design',
        description: 'Design interfaces that feel native on both platforms while sharing components. Respect platform conventions.',
        duration: '2-3 weeks',
        deliverables: ['UI designs', 'Component library', 'Platform adaptations'],
      },
      {
        icon: 'Code',
        title: 'Core Development',
        description: 'Build shared components, navigation, and business logic. Implement platform-specific features where needed.',
        duration: '4-8 weeks',
        deliverables: ['Working app', 'API integration', 'Core features'],
      },
      {
        icon: 'Smartphone',
        title: 'Platform Optimization',
        description: 'Optimize for each platform\'s unique characteristics. Fine-tune performance, animations, and native integrations.',
        duration: '1-2 weeks',
        deliverables: ['iOS optimization', 'Android optimization', 'Performance tuning'],
      },
      {
        icon: 'TestTube',
        title: 'Testing & QA',
        description: 'Test on real iOS and Android devices. Automated testing plus manual QA ensures quality on both platforms.',
        duration: '2-3 weeks',
        deliverables: ['Test coverage', 'Device testing', 'Bug fixes'],
      },
      {
        icon: 'Rocket',
        title: 'Dual Store Launch',
        description: 'Submit to both App Store and Play Store simultaneously. ASO optimization for maximum visibility.',
        duration: '1-2 weeks',
        deliverables: ['Store listings', 'Launch assets', 'Live apps'],
      },
    ],
    totalDuration: '10-18 weeks',
  },

  // Benefits
  benefits: [
    {
      icon: 'DollarSign',
      title: 'Cut Costs in Half',
      description: 'One codebase means one team. Save 50-60% compared to separate native development.',
      stat: '60',
      statSuffix: '%',
      statLabel: 'Cost Savings',
    },
    {
      icon: 'Rocket',
      title: 'Faster Launch',
      description: 'Ship to both platforms simultaneously. Get to market while competitors are still building.',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Faster Time-to-Market',
    },
    {
      icon: 'Share2',
      title: 'Maximum Code Sharing',
      description: 'Share 90%+ of code between iOS and Android. Only platform-specific UI needs customization.',
      stat: '90',
      statSuffix: '%+',
      statLabel: 'Code Sharing',
    },
    {
      icon: 'Zap',
      title: 'Native Performance',
      description: 'React Native compiles to native. Users can\'t tell it\'s not traditional native development.',
      stat: '60',
      statSuffix: 'fps',
      statLabel: 'Native Animations',
    },
    {
      icon: 'Users',
      title: 'Larger Talent Pool',
      description: 'JavaScript developers can work on your app. Easier hiring and lower recruitment costs.',
      stat: '3',
      statSuffix: 'x',
      statLabel: 'Larger Talent Pool',
    },
    {
      icon: 'RefreshCw',
      title: 'Unified Updates',
      description: 'Push updates to both platforms at once. Over-the-air updates skip store review for bug fixes.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Platform Parity',
    },
  ],

  // Tech Stack
  techStack: [
    {
      name: 'React Native Core',
      description: 'Core framework and tools',
      technologies: [
        { name: 'React Native', icon: 'react-native', category: 'Framework', proficiency: 'expert' },
        { name: 'Expo', icon: 'expo', category: 'Framework', proficiency: 'expert' },
        { name: 'TypeScript', icon: 'typescript', category: 'Language', proficiency: 'expert' },
        { name: 'Metro Bundler', icon: 'bundler', category: 'Tooling', proficiency: 'expert' },
      ],
    },
    {
      name: 'UI & Navigation',
      description: 'User interface and navigation',
      technologies: [
        { name: 'React Navigation', icon: 'navigation', category: 'Navigation', proficiency: 'expert' },
        { name: 'React Native Paper', icon: 'paper', category: 'UI', proficiency: 'advanced' },
        { name: 'NativeWind', icon: 'nativewind', category: 'Styling', proficiency: 'expert' },
        { name: 'Reanimated', icon: 'animation', category: 'Animation', proficiency: 'expert' },
      ],
    },
    {
      name: 'State & Data',
      description: 'State management and data',
      technologies: [
        { name: 'Redux Toolkit', icon: 'redux', category: 'State', proficiency: 'expert' },
        { name: 'Zustand', icon: 'zustand', category: 'State', proficiency: 'advanced' },
        { name: 'TanStack Query', icon: 'query', category: 'Data', proficiency: 'expert' },
        { name: 'MMKV', icon: 'storage', category: 'Storage', proficiency: 'expert' },
      ],
    },
    {
      name: 'Backend & Services',
      description: 'Backend integration',
      technologies: [
        { name: 'Firebase', icon: 'firebase', category: 'Backend', proficiency: 'expert' },
        { name: 'Supabase', icon: 'supabase', category: 'Backend', proficiency: 'advanced' },
        { name: 'REST APIs', icon: 'api', category: 'Integration', proficiency: 'expert' },
        { name: 'GraphQL', icon: 'graphql', category: 'Integration', proficiency: 'advanced' },
      ],
    },
  ],

  // Portfolio
  portfolio: [
    {
      title: 'E-commerce Marketplace',
      client: 'ShopEase',
      industry: 'E-commerce',
      description: 'Full-featured shopping app with product discovery, AR try-on, Apple Pay/Google Pay, and real-time order tracking.',
      challenge: 'Build a feature-rich shopping experience for iOS and Android within a startup budget.',
      solution: 'React Native app with 95% code sharing, native payment integrations, and AR features via native modules.',
      results: ['500K+ downloads', 'Both platforms in 4 months', '$5M first-year revenue'],
      metrics: [
        { label: 'Downloads', value: '500K+' },
        { label: 'Development Time', value: '4 months' },
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'React Native', 'AR', 'Payments', 'Expo'],
      testimonial: {
        quote: 'They delivered iOS and Android apps in 4 months that would have taken a year with native. The cost savings were game-changing for our startup.',
        author: 'Sophie Chen',
        role: 'CEO',
      },
    },
    {
      title: 'Healthcare Telemedicine',
      client: 'TeleHealth Plus',
      industry: 'Healthcare',
      description: 'HIPAA-compliant telemedicine app with video consultations, prescription management, and health records.',
      challenge: 'Create a secure healthcare app that works across iOS and Android while meeting HIPAA requirements.',
      solution: 'React Native with encrypted data handling, WebRTC video, and HIPAA-compliant backend integration.',
      results: ['100K+ patients', 'HIPAA certified', '50K monthly consultations'],
      metrics: [
        { label: 'Active Patients', value: '100K+' },
        { label: 'Monthly Consultations', value: '50K' },
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'React Native', 'Video', 'HIPAA', 'Security'],
      testimonial: {
        quote: 'The app handles sensitive health data perfectly. Patients trust it for video consultations and prescription management.',
        author: 'Dr. Michael Wong',
        role: 'Medical Director',
      },
    },
    {
      title: 'Travel Booking Platform',
      client: 'WanderLust',
      industry: 'Travel',
      description: 'Complete travel app with flight/hotel booking, itinerary management, offline maps, and social trip sharing.',
      challenge: 'Build a complex travel app with offline functionality that works globally on various network conditions.',
      solution: 'React Native app with offline-first architecture, cached maps, and smart sync for poor connectivity.',
      results: ['1M+ downloads', 'Works in 150+ countries', '4.7 star rating'],
      metrics: [
        { label: 'Downloads', value: '1M+' },
        { label: 'Countries', value: '150+' },
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['Travel', 'React Native', 'Offline', 'Maps', 'Booking'],
      testimonial: {
        quote: 'The offline functionality is incredible. Our users can access their trips anywhere in the world, even without internet.',
        author: 'Maria Gonzalez',
        role: 'Product Manager',
      },
    },
    {
      title: 'Social Networking App',
      client: 'CircleUp',
      industry: 'Social Media',
      description: 'Community-focused social app with interest-based groups, event planning, real-time chat, and content sharing.',
      challenge: 'Create a social platform that handles high-volume real-time interactions while maintaining cross-platform consistency.',
      solution: 'React Native app with optimized list rendering, WebSocket-powered messaging, and shared UI components across platforms.',
      results: ['750K+ users', 'Both stores featured', '30 min avg daily usage'],
      metrics: [
        { label: 'Users', value: '750K+' },
        { label: 'Daily Usage', value: '30 min' },
      ],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tags: ['Social', 'React Native', 'Real-time', 'Chat', 'Community'],
      testimonial: {
        quote: 'The app feels completely native on both platforms. Our users cannot tell the difference, and we saved months of development time.',
        author: 'Jason Lee',
        role: 'Founder',
      },
    },
  ],

  // Pricing
  pricing: {
    plans: [
      {
        name: 'React Native MVP',
        description: 'Launch your cross-platform app fast',
        price: '$25,000',
        priceNote: 'Starting price',
        features: [
          { name: 'iOS & Android apps', included: true },
          { name: 'Up to 12 screens', included: true },
          { name: 'Firebase backend', included: true },
          { name: 'Push notifications', included: true },
          { name: 'Both store submissions', included: true },
          { name: 'Native modules', included: false },
          { name: 'Advanced integrations', included: false },
        ],
        ctaText: 'Start MVP',
      },
      {
        name: 'React Native Pro',
        description: 'Full-featured cross-platform app',
        price: '$50,000',
        priceNote: 'Starting price',
        highlighted: true,
        badge: 'Best Value',
        features: [
          { name: 'iOS & Android apps', included: true },
          { name: '15-25 screens', included: true },
          { name: 'Custom backend', included: true },
          { name: 'Advanced features', included: true },
          { name: 'Native module integration', included: true },
          { name: 'Offline functionality', included: true },
          { name: '90-day support', included: true },
        ],
        ctaText: 'Start Project',
      },
      {
        name: 'React Native Enterprise',
        description: 'Complex enterprise applications',
        price: 'Custom',
        priceNote: 'Based on scope',
        features: [
          { name: 'Full platform support', included: true },
          { name: 'Unlimited screens', included: true },
          { name: 'Enterprise backend', included: true },
          { name: 'Complex integrations', included: true },
          { name: 'Custom native modules', included: true },
          { name: 'Dedicated team', included: true },
          { name: '12-month support', included: true },
        ],
        ctaText: 'Contact Sales',
      },
    ],
    customNote: 'All React Native projects include both iOS and Android apps, store submissions, and comprehensive testing.',
  },

  // Testimonials
  testimonials: [
    {
      quote: 'React Native was the perfect choice for our startup. We got both platforms in half the time and budget of native development.',
      author: 'Sophie Chen',
      role: 'CEO',
      company: 'ShopEase',
      rating: 5,
      location: 'San Francisco, CA',
    },
    {
      quote: 'The code sharing between our web and mobile apps saved us months of development. The team really understands cross-platform architecture.',
      author: 'Jason Park',
      role: 'CTO',
      company: 'TechStart Inc',
      rating: 5,
      location: 'Austin, TX',
    },
    {
      quote: 'Users can\'t tell it\'s not native. The performance is excellent and we update both platforms simultaneously now.',
      author: 'Maria Gonzalez',
      role: 'Product Manager',
      company: 'WanderLust',
      rating: 5,
      location: 'Miami, FL',
    },
  ],

  // FAQs
  faqs: [
    {
      question: 'Is React Native really as good as native?',
      answer: 'For 90% of apps, yes. React Native uses actual native UI components and achieves near-native performance. Apps like Facebook, Instagram, and Coinbase use React Native. Only apps with extremely specific native requirements should consider pure native.',
      category: 'Performance',
    },
    {
      question: 'What percentage of code can be shared?',
      answer: 'Typically 85-95% of code is shared between iOS and Android. Business logic, API layers, and most UI components work on both. Only platform-specific interactions need separate code.',
      category: 'Technical',
    },
    {
      question: 'How does React Native compare to Flutter?',
      answer: 'Both are excellent. React Native uses JavaScript/TypeScript and the React ecosystem, making it ideal if you have React web developers. Flutter uses Dart and offers more UI control. We recommend React Native for teams with JS experience.',
      category: 'Comparison',
    },
    {
      question: 'Can React Native access native device features?',
      answer: 'Yes. React Native can access all device features through native modules. Camera, GPS, Bluetooth, HealthKit/Google Fit, and more are all accessible. For custom hardware, we write native bridge code.',
      category: 'Features',
    },
    {
      question: 'How long does React Native development take?',
      answer: 'A cross-platform MVP typically takes 3-4 months - about 40% faster than building two native apps. Full-featured apps take 4-6 months. The simultaneous platform launch accelerates time-to-market significantly.',
      category: 'Timeline',
    },
    {
      question: 'Will both apps be approved for the stores?',
      answer: 'Absolutely. We build apps that meet both Apple\'s App Store and Google Play guidelines. React Native apps are approved daily - Meta\'s own apps use React Native.',
      category: 'App Stores',
    },
    {
      question: 'Can we update the app without store review?',
      answer: 'For JavaScript-only changes, yes. CodePush enables over-the-air updates that skip store review. This is perfect for bug fixes and minor updates. Native code changes still require store review.',
      category: 'Updates',
    },
    {
      question: 'Do you use Expo or bare React Native?',
      answer: 'We recommend Expo for most projects - it accelerates development and simplifies deployment. For apps requiring deep native customization, we use bare React Native with custom native modules.',
      category: 'Technical',
    },
  ],

  // Related Services
  relatedServices: [
    {
      name: 'iOS Development',
      slug: 'ios-development',
      description: 'Native iOS apps with Swift',
      icon: 'Smartphone',
    },
    {
      name: 'Android Development',
      slug: 'android-development',
      description: 'Native Android apps with Kotlin',
      icon: 'Smartphone',
    },
    {
      name: 'Flutter Development',
      slug: 'flutter-development',
      description: 'Cross-platform with Flutter',
      icon: 'Smartphone',
    },
    {
      name: 'Mobile UI/UX Design',
      slug: 'mobile-ui-ux-design',
      description: 'User-centered mobile design',
      icon: 'Palette',
    },
  ],

  // SEO
  seo: {
    title: 'React Native Development Services | Cross-Platform Mobile Apps',
    description: 'Expert React Native development for iOS and Android apps. Build cross-platform mobile apps with 90% code sharing. Faster, cheaper than native development.',
    keywords: [
      'react native development',
      'cross-platform app development',
      'react native developers',
      'ios android app',
      'react native agency',
      'expo development',
      'mobile app development',
      'react native consulting',
    ],
  },
};
