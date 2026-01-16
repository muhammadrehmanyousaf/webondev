import { ServiceData } from '@/components/services/sections';

export const nativeAppDevelopmentData: ServiceData = {
  // Basic Info
  slug: 'native-app-development',
  name: 'Native App Development Services',
  tagline: 'Maximum Performance, Platform Excellence',
  description: 'Expert native app development for iOS and Android using platform-specific languages and tools. We build high-performance apps with Swift for iOS and Kotlin for Android that fully leverage each platform\'s capabilities.',
  category: 'Mobile Development',

  // Hero Section
  hero: {
    headline: 'Native App Development',
    subheadline: 'Pure Platform Performance',
    description: 'Build apps that fully harness the power of iOS and Android. Native development with Swift and Kotlin delivers uncompromising performance, seamless platform integration, and experiences users expect from premium applications.',
    keyFeatures: [
      'Platform-specific development',
      'Maximum performance',
      'Full native API access',
      'Apple & Google ecosystem',
      'Premium user experience',
    ],
    badges: ['Pure Native', '300+ Native Apps', 'Platform Experts'],
  },

  // Pain Points
  painPoints: [
    {
      icon: 'Zap',
      title: 'Performance Requirements',
      description: 'Cross-platform apps can\'t match native performance for demanding applications like games, video, or complex data visualization.',
      stat: '30%',
      statLabel: 'performance gap',
    },
    {
      icon: 'Cpu',
      title: 'Platform Integration Depth',
      description: 'You need deep integration with platform features like ARKit, HealthKit, widgets, or Wear OS that cross-platform frameworks can\'t fully support.',
      stat: '50%',
      statLabel: 'of features need native',
    },
    {
      icon: 'Shield',
      title: 'Enterprise Security',
      description: 'Security-critical apps need native-level control. Banking, healthcare, and government apps require full platform security features.',
      stat: '100%',
      statLabel: 'security compliance',
    },
    {
      icon: 'Users',
      title: 'User Expectations',
      description: 'Premium users expect apps that feel like first-party experiences. Platform consistency matters for brand perception.',
      stat: '68%',
      statLabel: 'prefer native UX',
    },
    {
      icon: 'Clock',
      title: 'Future Platform Updates',
      description: 'Native apps adopt new OS features on day one. Cross-platform frameworks lag behind platform releases.',
      stat: '6-12',
      statLabel: 'months framework delay',
    },
    {
      icon: 'Award',
      title: 'App Store Features',
      description: 'Apple and Google feature apps that exemplify platform excellence. Native apps have the best chance of featuring.',
      stat: '80%',
      statLabel: 'of featured apps are native',
    },
  ],

  // Solutions/Features
  solutions: [
    {
      icon: 'Zap',
      title: 'Peak Performance',
      description: 'Native apps run directly on the hardware with no abstraction layer. Get maximum CPU efficiency, optimal memory usage, and buttery smooth animations.',
      highlights: [
        'Direct hardware access',
        'Optimal memory usage',
        '120fps animations',
        'Battery efficiency',
      ],
    },
    {
      icon: 'Layers',
      title: 'Full API Access',
      description: 'Access every platform API including cutting-edge features like ARKit, RealityKit, ML Kit, and Jetpack Compose animations.',
      highlights: [
        'Day-one features',
        'Complete SDK access',
        'Cutting-edge APIs',
        'Beta feature access',
      ],
    },
    {
      icon: 'Palette',
      title: 'Platform Design Excellence',
      description: 'Build interfaces that feel native because they are. Human Interface Guidelines on iOS, Material Design on Android - done right.',
      highlights: [
        'Platform conventions',
        'Native interactions',
        'System consistency',
        'Accessibility built-in',
      ],
    },
    {
      icon: 'Link',
      title: 'Ecosystem Integration',
      description: 'Deep integration with Apple and Google ecosystems. Widgets, watch apps, CarPlay, Android Auto, and smart home devices.',
      highlights: [
        'Watch apps',
        'Home widgets',
        'CarPlay & Auto',
        'Smart home',
      ],
    },
    {
      icon: 'Shield',
      title: 'Enterprise Security',
      description: 'Leverage full platform security features including Secure Enclave, hardware-backed keystore, and biometric authentication.',
      highlights: [
        'Hardware security',
        'Biometric auth',
        'Encrypted storage',
        'Compliance ready',
      ],
    },
    {
      icon: 'Rocket',
      title: 'Store Success',
      description: 'Native apps that exemplify platform standards have the best chance of being featured and maintaining high ratings.',
      highlights: [
        'Feature potential',
        'Higher ratings',
        'Better reviews',
        'Platform endorsement',
      ],
    },
  ],

  // Process Steps
  process: {
    steps: [
      {
        icon: 'MessageSquare',
        title: 'Platform Strategy',
        description: 'Determine platform priorities, define feature sets, and plan development sequence (parallel or sequential).',
        duration: '1-2 weeks',
        deliverables: ['Platform strategy', 'Feature specification', 'Development plan'],
      },
      {
        icon: 'Palette',
        title: 'Platform-Specific Design',
        description: 'Design optimized for each platform\'s conventions. iOS Human Interface Guidelines and Android Material Design.',
        duration: '2-4 weeks',
        deliverables: ['iOS designs', 'Android designs', 'Platform adaptations'],
      },
      {
        icon: 'Apple',
        title: 'iOS Development',
        description: 'Build the iOS app with Swift and SwiftUI. Implement Apple ecosystem features and optimizations.',
        duration: '6-12 weeks',
        deliverables: ['iOS app', 'Apple integrations', 'TestFlight builds'],
      },
      {
        icon: 'Smartphone',
        title: 'Android Development',
        description: 'Build the Android app with Kotlin and Jetpack Compose. Implement Google ecosystem features.',
        duration: '6-12 weeks',
        deliverables: ['Android app', 'Google integrations', 'Beta builds'],
      },
      {
        icon: 'TestTube',
        title: 'Platform Testing',
        description: 'Comprehensive testing on each platform with real devices. Performance profiling and optimization.',
        duration: '2-3 weeks per platform',
        deliverables: ['Test coverage', 'Performance reports', 'Bug fixes'],
      },
      {
        icon: 'Rocket',
        title: 'Dual Launch',
        description: 'Submit to both stores, respond to reviews, and launch. Coordinate marketing across platforms.',
        duration: '2-4 weeks',
        deliverables: ['Store listings', 'Launch coordination', 'Live apps'],
      },
    ],
    totalDuration: '16-30 weeks',
  },

  // Benefits
  benefits: [
    {
      icon: 'Zap',
      title: 'Best Performance',
      description: 'Native apps deliver the best possible performance on each platform. No abstraction layer overhead.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Native Performance',
    },
    {
      icon: 'Palette',
      title: 'Platform Perfect',
      description: 'Apps that look and feel exactly right on each platform. Native conventions, native experience.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Platform Compliance',
    },
    {
      icon: 'Layers',
      title: 'Full API Access',
      description: 'Every platform feature available. ARKit, HealthKit, ML Kit, Jetpack - all fully accessible.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'API Access',
    },
    {
      icon: 'Shield',
      title: 'Maximum Security',
      description: 'Full access to platform security features. Hardware-backed security, Secure Enclave, and more.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Security Features',
    },
    {
      icon: 'RefreshCw',
      title: 'Day-One Updates',
      description: 'Support new OS features immediately when released. No waiting for framework updates.',
      stat: '0',
      statSuffix: ' days',
      statLabel: 'Feature Delay',
    },
    {
      icon: 'Award',
      title: 'Feature Potential',
      description: 'Native apps have the best chance of being featured by Apple and Google.',
      stat: '5',
      statSuffix: 'x',
      statLabel: 'Higher Feature Rate',
    },
  ],

  // Tech Stack
  techStack: [
    {
      name: 'iOS Development',
      description: 'Apple platform development',
      technologies: [
        { name: 'Swift 5.9+', icon: 'swift', category: 'Language', proficiency: 'expert' },
        { name: 'SwiftUI', icon: 'swiftui', category: 'UI', proficiency: 'expert' },
        { name: 'UIKit', icon: 'uikit', category: 'UI', proficiency: 'expert' },
        { name: 'Xcode', icon: 'xcode', category: 'IDE', proficiency: 'expert' },
      ],
    },
    {
      name: 'Android Development',
      description: 'Google platform development',
      technologies: [
        { name: 'Kotlin', icon: 'kotlin', category: 'Language', proficiency: 'expert' },
        { name: 'Jetpack Compose', icon: 'compose', category: 'UI', proficiency: 'expert' },
        { name: 'Android Jetpack', icon: 'jetpack', category: 'Libraries', proficiency: 'expert' },
        { name: 'Android Studio', icon: 'android-studio', category: 'IDE', proficiency: 'expert' },
      ],
    },
    {
      name: 'Platform Features',
      description: 'Native platform capabilities',
      technologies: [
        { name: 'ARKit/ARCore', icon: 'ar', category: 'AR', proficiency: 'advanced' },
        { name: 'HealthKit/Health Connect', icon: 'health', category: 'Health', proficiency: 'advanced' },
        { name: 'Core ML/ML Kit', icon: 'ml', category: 'AI', proficiency: 'advanced' },
        { name: 'WatchKit/Wear OS', icon: 'watch', category: 'Wearables', proficiency: 'advanced' },
      ],
    },
    {
      name: 'Backend & Services',
      description: 'Backend integration',
      technologies: [
        { name: 'Firebase', icon: 'firebase', category: 'Backend', proficiency: 'expert' },
        { name: 'CloudKit', icon: 'cloudkit', category: 'Apple', proficiency: 'advanced' },
        { name: 'REST APIs', icon: 'api', category: 'Integration', proficiency: 'expert' },
        { name: 'GraphQL', icon: 'graphql', category: 'Integration', proficiency: 'advanced' },
      ],
    },
  ],

  // Portfolio
  portfolio: [
    {
      title: 'AR Gaming Platform',
      client: 'ARPlay Games',
      industry: 'Gaming',
      description: 'Immersive AR gaming app leveraging ARKit and ARCore for location-based multiplayer experiences.',
      challenge: 'Create a high-performance AR game that works seamlessly on both platforms with real-time multiplayer.',
      solution: 'Separate native apps optimizing each platform\'s AR capabilities. Custom game engines for each platform.',
      results: ['2M+ downloads', 'Featured by Apple & Google', '4.8 star ratings'],
      metrics: [
        { label: 'Downloads', value: '2M+' },
        { label: 'Avg Rating', value: '4.8' },
      ],
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
      tags: ['Gaming', 'AR', 'Swift', 'Kotlin', 'Multiplayer'],
      testimonial: {
        quote: 'Only native development could deliver the AR performance we needed. Both platforms featured our launch.',
        author: 'Jason Wu',
        role: 'CEO',
      },
    },
    {
      title: 'Private Banking App',
      client: 'Elite Private Bank',
      industry: 'Banking',
      description: 'Ultra-secure private banking app for high-net-worth clients with biometrics, portfolio management, and secure messaging.',
      challenge: 'Build a banking app meeting the highest security standards while providing a premium user experience.',
      solution: 'Native apps utilizing hardware security features, Secure Enclave, and platform-native biometric authentication.',
      results: ['$10B+ managed assets', 'Zero security incidents', 'Regulatory compliant'],
      metrics: [
        { label: 'Assets Managed', value: '$10B+' },
        { label: 'Security Incidents', value: 'Zero' },
      ],
      image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=600&fit=crop',
      tags: ['Banking', 'Security', 'Swift', 'Kotlin', 'Finance'],
      testimonial: {
        quote: 'Native development was non-negotiable for our security requirements. Our clients expect nothing less than perfection.',
        author: 'Victoria Sterling',
        role: 'CTO',
      },
    },
    {
      title: 'Professional Video Editor',
      client: 'VideoMaster Pro',
      industry: 'Media',
      description: 'Professional-grade mobile video editing with real-time effects, 4K support, and multi-track timeline.',
      challenge: 'Create a video editor that rivals desktop applications on mobile with demanding performance requirements.',
      solution: 'Native apps leveraging Metal on iOS and Vulkan on Android for GPU-accelerated video processing.',
      results: ['500K+ pro users', 'Apple Design Award', '4K 60fps editing'],
      metrics: [
        { label: 'Pro Users', value: '500K+' },
        { label: 'Video Quality', value: '4K 60fps' },
      ],
      image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&h=600&fit=crop',
      tags: ['Video', 'Media', 'Swift', 'Kotlin', 'GPU'],
      testimonial: {
        quote: 'Native GPU access was essential for real-time 4K editing. No cross-platform solution could match this performance.',
        author: 'Alex Rivera',
        role: 'Founder',
      },
    },
    {
      title: 'Health & Fitness Ecosystem',
      client: 'VitalSync',
      industry: 'Healthcare',
      description: 'Comprehensive health platform with wearable integration, real-time vitals monitoring, and AI-powered health insights.',
      challenge: 'Build a health app requiring deep integration with Apple Watch, Wear OS, and various health sensors with precise data accuracy.',
      solution: 'Native apps with full HealthKit and Health Connect integration, background processing, and medical-grade data handling.',
      results: ['1.5M+ users', 'FDA cleared', '99.9% data accuracy'],
      metrics: [
        { label: 'Users', value: '1.5M+' },
        { label: 'Data Accuracy', value: '99.9%' },
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'Wearables', 'Swift', 'Kotlin', 'HealthKit'],
      testimonial: {
        quote: 'The precision required for health data demanded native development. The wearable integration is flawless.',
        author: 'Dr. Emily Sanders',
        role: 'Chief Medical Officer',
      },
    },
  ],

  // Pricing
  pricing: {
    plans: [
      {
        name: 'Single Platform',
        description: 'Native app for iOS or Android',
        price: '$30,000',
        priceNote: 'Starting price',
        features: [
          { name: 'One platform (iOS or Android)', included: true },
          { name: 'Up to 15 screens', included: true },
          { name: 'Native design', included: true },
          { name: 'Platform integrations', included: true },
          { name: 'Store submission', included: true },
          { name: 'Second platform', included: false },
          { name: 'Watch app', included: false },
        ],
        ctaText: 'Start Project',
      },
      {
        name: 'Dual Platform',
        description: 'Native apps for iOS and Android',
        price: '$55,000',
        priceNote: 'Starting price',
        highlighted: true,
        badge: 'Full Coverage',
        features: [
          { name: 'Both iOS and Android', included: true },
          { name: '15-25 screens each', included: true },
          { name: 'Platform-specific design', included: true },
          { name: 'Full native features', included: true },
          { name: 'Both store submissions', included: true },
          { name: 'Shared backend', included: true },
          { name: '90-day support', included: true },
        ],
        ctaText: 'Start Project',
      },
      {
        name: 'Enterprise Native',
        description: 'Complex native applications',
        price: 'Custom',
        priceNote: 'Based on scope',
        features: [
          { name: 'Both platforms', included: true },
          { name: 'Unlimited screens', included: true },
          { name: 'Watch/TV apps', included: true },
          { name: 'Enterprise security', included: true },
          { name: 'Advanced integrations', included: true },
          { name: 'Dedicated teams', included: true },
          { name: '12-month support', included: true },
        ],
        ctaText: 'Contact Sales',
      },
    ],
    customNote: 'Native development costs more than cross-platform but delivers the best possible experience for each platform.',
  },

  // Testimonials
  testimonials: [
    {
      quote: 'Native was the only option for our AR gaming app. The performance difference was immediately obvious.',
      author: 'Jason Wu',
      role: 'CEO',
      company: 'ARPlay Games',
      rating: 5,
      location: 'San Francisco, CA',
    },
    {
      quote: 'For banking, security is non-negotiable. Native development gave us access to hardware security features we couldn\'t get any other way.',
      author: 'Victoria Sterling',
      role: 'CTO',
      company: 'Elite Private Bank',
      rating: 5,
      location: 'New York, NY',
    },
    {
      quote: 'Real-time 4K video editing on mobile required native GPU access. The investment in native development paid off immediately.',
      author: 'Alex Rivera',
      role: 'Founder',
      company: 'VideoMaster Pro',
      rating: 5,
      location: 'Los Angeles, CA',
    },
  ],

  // FAQs
  faqs: [
    {
      question: 'When should I choose native over cross-platform?',
      answer: 'Choose native when you need: maximum performance (games, video, AR), deep platform integration (HealthKit, CarPlay), enterprise security (banking, healthcare), or plan to fully leverage platform-specific features. Cross-platform is fine for simpler apps.',
      category: 'Strategy',
    },
    {
      question: 'Is native development worth the extra cost?',
      answer: 'For the right apps, absolutely. Native delivers measurably better performance, user experience, and platform integration. The higher initial investment often results in better user retention, ratings, and business outcomes.',
      category: 'Cost',
    },
    {
      question: 'Should we build both platforms simultaneously?',
      answer: 'It depends on your priorities. Parallel development is faster but requires more resources. Sequential development (iOS first, then Android or vice versa) allows learning from one platform to improve the other.',
      category: 'Process',
    },
    {
      question: 'How do you maintain two separate codebases?',
      answer: 'We use shared architecture patterns, API contracts, and design systems across platforms. Business logic may be shared via shared modules (Kotlin Multiplatform). This reduces divergence while maintaining native code.',
      category: 'Maintenance',
    },
    {
      question: 'Can native apps share any code?',
      answer: 'Yes. Business logic and data layers can be shared using Kotlin Multiplatform or C++. UI remains platform-specific, but the core logic doesn\'t need to be duplicated.',
      category: 'Development',
    },
    {
      question: 'How long does native development take?',
      answer: 'Single platform: 3-6 months. Both platforms in parallel: 4-8 months. Sequential development adds the timeline of each platform. Complex apps with watch/TV extensions take longer.',
      category: 'Timeline',
    },
    {
      question: 'Do you recommend starting with iOS or Android?',
      answer: 'It depends on your target market. iOS users spend more on apps (good for premium apps). Android has global volume. We typically recommend iOS first for US markets, Android first for global or emerging markets.',
      category: 'Strategy',
    },
    {
      question: 'How do you handle different release cycles?',
      answer: 'We coordinate releases to maintain feature parity when possible. However, platform-specific features may launch on one platform first. We use feature flags and versioning to manage differences.',
      category: 'Process',
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
      name: 'Cross-Platform Development',
      slug: 'cross-platform-development',
      description: 'Single codebase solutions',
      icon: 'Share2',
    },
    {
      name: 'Mobile UI/UX Design',
      slug: 'mobile-ui-ux-design',
      description: 'Platform-optimized design',
      icon: 'Palette',
    },
  ],

  // SEO
  seo: {
    title: 'Native App Development Services | iOS & Android Native Apps',
    description: 'Expert native app development for iOS and Android. Build high-performance apps with Swift and Kotlin that fully leverage platform capabilities.',
    keywords: [
      'native app development',
      'native mobile app',
      'ios native app',
      'android native app',
      'swift development',
      'kotlin development',
      'platform-specific app',
      'native app developers',
    ],
  },
};
