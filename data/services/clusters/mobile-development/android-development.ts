import { ServiceData } from '@/components/services/sections';

export const androidDevelopmentData: ServiceData = {
  // Basic Info
  slug: 'android-development',
  name: 'Android App Development Services',
  tagline: 'Build Powerful Native Android Apps with Kotlin',
  description: 'Expert Android app development services using Kotlin and Jetpack Compose. We create high-performance, beautiful Android applications for phones, tablets, and billions of users worldwide.',
  category: 'Mobile Development',

  // Hero Section
  hero: {
    headline: 'Android App Development',
    subheadline: 'Reach Billions with Native Android',
    description: 'Build for the world\'s largest mobile platform. We create native Android apps with Kotlin and Jetpack Compose that deliver exceptional performance, beautiful Material Design interfaces, and seamless Google ecosystem integration.',
    keyFeatures: [
      'Native Kotlin & Jetpack Compose',
      'Material Design 3 interfaces',
      'Google Play optimization',
      'Multi-device support',
      'Offline-first architecture',
    ],
    badges: ['Google Certified', '300+ Android Apps', '3B+ Devices'],
  },

  // Pain Points
  painPoints: [
    {
      icon: 'Smartphone',
      title: 'Device Fragmentation',
      description: 'Android runs on thousands of different devices with varying screen sizes, OS versions, and capabilities. Apps must work everywhere.',
      stat: '24K+',
      statLabel: 'unique Android devices',
    },
    {
      icon: 'RefreshCw',
      title: 'OS Version Challenges',
      description: 'Android users spread across multiple OS versions. Supporting older versions while using new features requires careful architecture.',
      stat: '40%',
      statLabel: 'still on older Android',
    },
    {
      icon: 'Gauge',
      title: 'Performance on Low-End Devices',
      description: 'Many Android users have budget phones with limited RAM and CPU. Apps must perform well even on resource-constrained devices.',
      stat: '50%',
      statLabel: 'of users on budget devices',
    },
    {
      icon: 'Shield',
      title: 'Security Vulnerabilities',
      description: 'Android\'s open nature makes security critical. Improperly secured apps expose user data and risk Play Store removal.',
      stat: '90%',
      statLabel: 'of malware targets Android',
    },
    {
      icon: 'Store',
      title: 'Play Store Competition',
      description: 'With millions of apps, standing out requires excellence. Poor ratings and reviews quickly bury apps in search results.',
      stat: '3.5M+',
      statLabel: 'apps on Play Store',
    },
    {
      icon: 'Code',
      title: 'Legacy Java Codebases',
      description: 'Older Android apps built with Java are harder to maintain. Modern Kotlin offers better safety and productivity.',
      stat: '2x',
      statLabel: 'more code in Java vs Kotlin',
    },
  ],

  // Solutions/Features
  solutions: [
    {
      icon: 'Code',
      title: 'Modern Kotlin Development',
      description: 'We build exclusively with Kotlin, Google\'s preferred language for Android. Null safety, coroutines, and modern syntax make apps more reliable.',
      highlights: [
        'Kotlin-first development',
        'Coroutines for async',
        'Null safety built-in',
        'Kotlin Flow for reactive',
      ],
    },
    {
      icon: 'Palette',
      title: 'Material Design 3',
      description: 'Beautiful, consistent interfaces following Google\'s Material Design 3 guidelines. Dynamic color, responsive layouts, and delightful animations.',
      highlights: [
        'Material Design 3',
        'Dynamic color theming',
        'Responsive layouts',
        'Motion design',
      ],
    },
    {
      icon: 'Layers',
      title: 'Jetpack Compose UI',
      description: 'Modern declarative UI with Jetpack Compose. Build beautiful interfaces faster with less code and real-time previews.',
      highlights: [
        'Declarative UI',
        'Less boilerplate',
        'Live previews',
        'Easier testing',
      ],
    },
    {
      icon: 'Cpu',
      title: 'Performance Optimization',
      description: 'Apps optimized for all devices from flagship to budget. Efficient memory usage, battery optimization, and smooth performance.',
      highlights: [
        'Memory optimization',
        'Battery efficiency',
        'Background optimization',
        'Startup performance',
      ],
    },
    {
      icon: 'Link',
      title: 'Google Ecosystem',
      description: 'Seamless integration with Google services including Maps, Firebase, Google Pay, and Assistant. Leverage the full Android ecosystem.',
      highlights: [
        'Firebase integration',
        'Google Maps & Location',
        'Google Pay',
        'Google Assistant',
      ],
    },
    {
      icon: 'Globe',
      title: 'Multi-Device Support',
      description: 'Build for phones, tablets, Wear OS, Android TV, and Android Auto. One codebase, multiple form factors.',
      highlights: [
        'Phone & tablet',
        'Wear OS watches',
        'Android TV apps',
        'Android Auto',
      ],
    },
  ],

  // Process Steps
  process: {
    steps: [
      {
        icon: 'MessageSquare',
        title: 'Discovery & Planning',
        description: 'Understand your target users, devices, and markets. Define features, architecture, and a roadmap for development.',
        duration: '1-2 weeks',
        deliverables: ['App specification', 'Device strategy', 'Technical architecture'],
      },
      {
        icon: 'Palette',
        title: 'UI/UX Design',
        description: 'Design Material Design 3 interfaces optimized for Android. Create responsive layouts for all screen sizes.',
        duration: '2-3 weeks',
        deliverables: ['Figma designs', 'Material components', 'Responsive layouts'],
      },
      {
        icon: 'Code',
        title: 'Core Development',
        description: 'Build with Kotlin and Jetpack Compose. Implement core features, navigation, and backend integration.',
        duration: '4-8 weeks',
        deliverables: ['Working app', 'API integration', 'Core features'],
      },
      {
        icon: 'TestTube',
        title: 'Testing & QA',
        description: 'Test across devices, OS versions, and screen sizes. Automated testing plus manual QA on real devices.',
        duration: '2-3 weeks',
        deliverables: ['Test coverage', 'Device testing', 'Bug fixes'],
      },
      {
        icon: 'Store',
        title: 'Play Store Launch',
        description: 'Prepare store listing, submit for review, and launch. ASO optimization for visibility in Play Store search.',
        duration: '1-2 weeks',
        deliverables: ['Store listing', 'Launch assets', 'Live app'],
      },
      {
        icon: 'HeartHandshake',
        title: 'Growth & Support',
        description: 'Monitor performance, respond to reviews, and iterate. Ongoing maintenance for new Android versions.',
        duration: 'Ongoing',
        deliverables: ['Analytics', 'Updates', 'Support'],
      },
    ],
    totalDuration: '12-20 weeks',
  },

  // Benefits
  benefits: [
    {
      icon: 'Globe',
      title: 'Global Reach',
      description: 'Android dominates worldwide with 70%+ market share. Reach billions of potential users.',
      stat: '3',
      statSuffix: 'B+',
      statLabel: 'Active Android Devices',
    },
    {
      icon: 'Zap',
      title: 'Native Performance',
      description: 'True native apps with optimal performance on every device. Smooth 60fps animations.',
      stat: '60',
      statSuffix: 'fps',
      statLabel: 'Smooth Animations',
    },
    {
      icon: 'DollarSign',
      title: 'Lower User Acquisition',
      description: 'More affordable to acquire Android users. Better ROI on marketing spend.',
      stat: '30',
      statSuffix: '%',
      statLabel: 'Lower Acquisition Cost',
    },
    {
      icon: 'Code',
      title: 'Faster Development',
      description: 'Kotlin and Jetpack Compose accelerate development. Ship features faster.',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Faster Development',
    },
    {
      icon: 'ShieldCheck',
      title: 'Flexible Distribution',
      description: 'Distribute via Play Store, enterprise sideloading, or alternative stores.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Distribution Control',
    },
    {
      icon: 'Smartphone',
      title: 'Multi-Form Factor',
      description: 'One codebase for phones, tablets, watches, TV, and auto.',
      stat: '5',
      statSuffix: '+',
      statLabel: 'Device Types',
    },
  ],

  // Tech Stack
  techStack: [
    {
      name: 'Core Development',
      description: 'Modern Android development tools',
      technologies: [
        { name: 'Kotlin', icon: 'kotlin', category: 'Language', proficiency: 'expert' },
        { name: 'Jetpack Compose', icon: 'compose', category: 'UI', proficiency: 'expert' },
        { name: 'Android Studio', icon: 'android-studio', category: 'IDE', proficiency: 'expert' },
        { name: 'Gradle', icon: 'gradle', category: 'Build', proficiency: 'expert' },
      ],
    },
    {
      name: 'Jetpack Libraries',
      description: 'Android Jetpack components',
      technologies: [
        { name: 'Navigation', icon: 'navigation', category: 'Jetpack', proficiency: 'expert' },
        { name: 'Room Database', icon: 'database', category: 'Jetpack', proficiency: 'expert' },
        { name: 'WorkManager', icon: 'work', category: 'Jetpack', proficiency: 'expert' },
        { name: 'DataStore', icon: 'storage', category: 'Jetpack', proficiency: 'expert' },
      ],
    },
    {
      name: 'Architecture',
      description: 'Modern Android architecture',
      technologies: [
        { name: 'MVVM', icon: 'architecture', category: 'Pattern', proficiency: 'expert' },
        { name: 'Hilt DI', icon: 'di', category: 'DI', proficiency: 'expert' },
        { name: 'Kotlin Flow', icon: 'flow', category: 'Reactive', proficiency: 'expert' },
        { name: 'Clean Architecture', icon: 'clean', category: 'Pattern', proficiency: 'expert' },
      ],
    },
    {
      name: 'Google Services',
      description: 'Google ecosystem integration',
      technologies: [
        { name: 'Firebase', icon: 'firebase', category: 'Backend', proficiency: 'expert' },
        { name: 'Google Maps', icon: 'maps', category: 'Location', proficiency: 'expert' },
        { name: 'Google Pay', icon: 'pay', category: 'Payments', proficiency: 'advanced' },
        { name: 'ML Kit', icon: 'ml', category: 'AI', proficiency: 'advanced' },
      ],
    },
  ],

  // Portfolio
  portfolio: [
    {
      title: 'Food Delivery Platform',
      client: 'FastBite',
      industry: 'Food & Beverage',
      description: 'Full-featured food delivery app with real-time tracking, in-app payments, and restaurant discovery. Live location tracking for deliveries.',
      challenge: 'Build a scalable delivery platform that works reliably across thousands of Android devices including budget phones.',
      solution: 'Kotlin-based app with optimized performance for low-end devices, Google Maps integration, and real-time order tracking.',
      results: ['2M+ downloads', 'Works on 99% of devices', '$15M monthly orders'],
      metrics: [
        { label: 'Downloads', value: '2M+' },
        { label: 'Monthly GMV', value: '$15M' },
      ],
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
      tags: ['Food Delivery', 'Kotlin', 'Google Maps', 'Firebase', 'Payments'],
      testimonial: {
        quote: 'The app performs beautifully even on budget phones, which is critical for our market. Order volume exceeded projections.',
        author: 'Raj Patel',
        role: 'CEO',
      },
    },
    {
      title: 'Banking & Finance App',
      client: 'SecureBank',
      industry: 'Banking',
      description: 'Secure mobile banking app with biometric login, account management, transfers, and bill payments.',
      challenge: 'Create a banking app that meets strict security requirements while providing a smooth user experience.',
      solution: 'Native Android app with hardware-backed security, biometric authentication, and encrypted data storage.',
      results: ['500K+ users', 'Zero security incidents', '4.7 star rating'],
      metrics: [
        { label: 'Active Users', value: '500K+' },
        { label: 'Security Incidents', value: 'Zero' },
      ],
      image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&h=600&fit=crop',
      tags: ['Banking', 'Kotlin', 'Biometrics', 'Security', 'Finance'],
      testimonial: {
        quote: 'Security was our top priority, and they delivered an app that our customers trust completely. Outstanding work.',
        author: 'James Anderson',
        role: 'CTO',
      },
    },
    {
      title: 'Social Fitness Network',
      client: 'FitConnect',
      industry: 'Fitness',
      description: 'Social fitness app with workout tracking, challenges, leaderboards, and Wear OS companion.',
      challenge: 'Create an engaging fitness platform that motivates users through social features and gamification.',
      solution: 'Android app with Wear OS companion, Google Fit integration, and real-time social features.',
      results: ['1M+ downloads', 'Featured on Play Store', '35% monthly active'],
      metrics: [
        { label: 'Downloads', value: '1M+' },
        { label: 'Monthly Active', value: '35%' },
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['Fitness', 'Kotlin', 'Wear OS', 'Social', 'Google Fit'],
      testimonial: {
        quote: 'The Wear OS integration and social features created exactly the engagement we needed. Users love competing with friends.',
        author: 'Emily Chen',
        role: 'Product Director',
      },
    },
    {
      title: 'Gaming Entertainment Hub',
      client: 'PlayZone',
      industry: 'Gaming',
      description: 'Gaming community app with game discovery, friend matching, live streaming, and in-app purchases for premium content.',
      challenge: 'Build a high-performance gaming hub that handles real-time multiplayer features across diverse Android devices.',
      solution: 'Native Kotlin app with optimized graphics rendering, WebSocket-based real-time features, and Google Play Games integration.',
      results: ['3M+ downloads', 'Play Store Editors Choice', '40 min avg session'],
      metrics: [
        { label: 'Downloads', value: '3M+' },
        { label: 'Avg Session', value: '40 min' },
      ],
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
      tags: ['Gaming', 'Kotlin', 'Real-time', 'Jetpack Compose', 'Play Games'],
      testimonial: {
        quote: 'The app handles millions of concurrent users during peak gaming hours without any lag. Truly impressive engineering.',
        author: 'Kevin Martinez',
        role: 'Head of Product',
      },
    },
  ],

  // Pricing
  pricing: {
    plans: [
      {
        name: 'Android MVP',
        description: 'Launch your Android app quickly',
        price: '$20,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Native Kotlin development', included: true },
          { name: 'Up to 10 screens', included: true },
          { name: 'Firebase backend', included: true },
          { name: 'Push notifications', included: true },
          { name: 'Play Store submission', included: true },
          { name: 'Wear OS app', included: false },
          { name: 'Advanced integrations', included: false },
        ],
        ctaText: 'Start MVP',
      },
      {
        name: 'Android Pro',
        description: 'Full-featured Android application',
        price: '$45,000',
        priceNote: 'Starting price',
        highlighted: true,
        badge: 'Most Popular',
        features: [
          { name: 'Kotlin & Jetpack Compose', included: true },
          { name: '15-25 screens', included: true },
          { name: 'Custom backend', included: true },
          { name: 'Google ecosystem integration', included: true },
          { name: 'Advanced features', included: true },
          { name: 'Tablet optimization', included: true },
          { name: '90-day support', included: true },
        ],
        ctaText: 'Start Project',
      },
      {
        name: 'Android Enterprise',
        description: 'Complex enterprise Android applications',
        price: 'Custom',
        priceNote: 'Based on scope',
        features: [
          { name: 'Full Google ecosystem', included: true },
          { name: 'Unlimited screens', included: true },
          { name: 'Enterprise backend', included: true },
          { name: 'Advanced security', included: true },
          { name: 'Wear OS + Auto + TV', included: true },
          { name: 'Dedicated team', included: true },
          { name: '12-month support', included: true },
        ],
        ctaText: 'Contact Sales',
      },
    ],
    customNote: 'All Android projects include Play Store submission, device testing, and comprehensive documentation.',
  },

  // Testimonials
  testimonials: [
    {
      quote: 'Our Android app reaches users across dozens of countries with thousands of device types. It works flawlessly everywhere. Incredible engineering.',
      author: 'Raj Patel',
      role: 'CEO',
      company: 'FastBite',
      rating: 5,
      location: 'Mumbai, India',
    },
    {
      quote: 'The security implementation exceeded our banking compliance requirements. Our customers trust the app completely for their financial transactions.',
      author: 'James Anderson',
      role: 'CTO',
      company: 'SecureBank',
      rating: 5,
      location: 'Chicago, IL',
    },
    {
      quote: 'Google featured our app on Play Store after launch. The Material Design 3 implementation and performance optimization made all the difference.',
      author: 'Emily Chen',
      role: 'Product Director',
      company: 'FitConnect',
      rating: 5,
      location: 'Seattle, WA',
    },
  ],

  // FAQs
  faqs: [
    {
      question: 'Should I build native Android or cross-platform?',
      answer: 'Native Android is best when you need optimal performance, full Google ecosystem integration, or target emerging markets with budget devices. Cross-platform works for simpler apps. We help you decide based on your specific needs.',
      category: 'Strategy',
    },
    {
      question: 'How do you handle Android fragmentation?',
      answer: 'We test on representative devices across different screen sizes, OS versions, and hardware capabilities. Our architecture supports Android 8+ while gracefully degrading features on older versions. Cloud testing covers 1000+ device configurations.',
      category: 'Technical',
    },
    {
      question: 'Do you use Jetpack Compose or XML layouts?',
      answer: 'We prefer Jetpack Compose for new projects - it is faster to develop, easier to maintain, and the future of Android UI. XML views are used when needed for specific requirements or legacy integration.',
      category: 'Technical',
    },
    {
      question: 'How long does Android app development take?',
      answer: 'An Android MVP typically takes 3-4 months. Full-featured apps take 4-6 months. Enterprise apps with Wear OS and multiple form factors can take 6-12 months. Timelines depend on complexity and features.',
      category: 'Timeline',
    },
    {
      question: 'Can you build Wear OS smartwatch apps?',
      answer: 'Yes, we build Wear OS companion apps and standalone watch apps. This includes watch faces, complications, and fitness tracking with Health Services API.',
      category: 'Features',
    },
    {
      question: 'How do you ensure Play Store approval?',
      answer: 'We follow Google Play policies from the start, implement required safety measures, and ensure content compliance. Our apps have a 99% first-time approval rate.',
      category: 'Play Store',
    },
    {
      question: 'What about Android TV and Auto?',
      answer: 'We build for Android TV (streaming apps, games) and Android Auto (navigation, media, messaging). These extend your app\'s reach to living rooms and vehicles.',
      category: 'Features',
    },
    {
      question: 'Do you provide Android maintenance?',
      answer: 'Yes. Android requires updates for new OS versions, security patches, and Play Store policy changes. We offer maintenance packages covering updates, monitoring, and feature development.',
      category: 'Support',
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
      name: 'React Native Development',
      slug: 'react-native-development',
      description: 'Cross-platform mobile apps',
      icon: 'Smartphone',
    },
    {
      name: 'Mobile UI/UX Design',
      slug: 'mobile-ui-ux-design',
      description: 'User-centered mobile design',
      icon: 'Palette',
    },
    {
      name: 'App Store Optimization',
      slug: 'app-store-optimization',
      description: 'Maximize app visibility',
      icon: 'TrendingUp',
    },
  ],

  // SEO
  seo: {
    title: 'Android App Development Services | Native Kotlin Apps',
    description: 'Expert Android app development with Kotlin and Jetpack Compose. Build native apps for phones, tablets, Wear OS, and 3B+ Android devices worldwide.',
    keywords: [
      'android app development',
      'kotlin development',
      'jetpack compose',
      'android developers',
      'native android app',
      'google play app',
      'wear os app',
      'android studio',
    ],
  },
};
