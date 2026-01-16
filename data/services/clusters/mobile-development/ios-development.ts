import { ServiceData } from '@/components/services/sections';

export const iosDevelopmentData: ServiceData = {
  // Basic Info
  slug: 'ios-development',
  name: 'iOS App Development Services',
  tagline: 'Build Premium Native iOS Apps with Swift',
  description: 'Expert iOS app development services for iPhone and iPad. We create stunning, high-performance native applications using Swift and SwiftUI that users love and Apple features.',
  category: 'Mobile Development',

  // Hero Section
  hero: {
    headline: 'iOS App Development',
    subheadline: 'Native Apps Apple Users Love',
    description: 'Create premium iOS applications that leverage the full power of Apple\'s ecosystem. From concept to App Store, we build native Swift apps with pixel-perfect design, blazing performance, and seamless Apple device integration.',
    keyFeatures: [
      'Native Swift & SwiftUI development',
      'Human Interface Guidelines compliance',
      'App Store optimization included',
      'Apple ecosystem integration',
      'Performance-first architecture',
    ],
    badges: ['Apple Certified', '200+ iOS Apps', '4.9 Avg Rating'],
  },

  // Pain Points
  painPoints: [
    {
      icon: 'Ban',
      title: 'App Store Rejections',
      description: 'Many iOS apps get rejected due to guideline violations. Each rejection costs weeks of development time and delays your launch.',
      stat: '40%',
      statLabel: 'of first submissions rejected',
    },
    {
      icon: 'Gauge',
      title: 'Performance Issues',
      description: 'Poorly optimized apps drain battery, lag during interactions, and frustrate users. iOS users have high expectations for performance.',
      stat: '62%',
      statLabel: 'uninstall due to poor performance',
    },
    {
      icon: 'Smartphone',
      title: 'Device Fragmentation',
      description: 'Supporting iPhone, iPad, and multiple screen sizes requires careful design. Apps that look broken on certain devices get bad reviews.',
      stat: '15+',
      statLabel: 'device sizes to support',
    },
    {
      icon: 'Shield',
      title: 'Security Concerns',
      description: 'iOS apps handle sensitive user data. Security vulnerabilities expose users and can get your app removed from the App Store.',
      stat: '43%',
      statLabel: 'of apps have security flaws',
    },
    {
      icon: 'Wrench',
      title: 'Outdated Code Architecture',
      description: 'Legacy Objective-C codebases are hard to maintain and extend. Finding developers who know outdated patterns is increasingly difficult.',
      stat: '3x',
      statLabel: 'longer maintenance time',
    },
    {
      icon: 'DollarSign',
      title: 'High Development Costs',
      description: 'iOS development requires specialized skills and Apple hardware. Poor architecture choices multiply costs as the app grows.',
      stat: '$150K+',
      statLabel: 'average enterprise app cost',
    },
  ],

  // Solutions/Features
  solutions: [
    {
      icon: 'Code',
      title: 'Modern Swift Development',
      description: 'We build exclusively with Swift 5.9+ and SwiftUI, Apple\'s modern frameworks. Clean, maintainable code that leverages the latest iOS capabilities.',
      highlights: [
        'Swift 5.9+ features',
        'SwiftUI & UIKit',
        'Async/await concurrency',
        'Swift Package Manager',
      ],
    },
    {
      icon: 'Palette',
      title: 'Apple Design Excellence',
      description: 'Every app follows Apple\'s Human Interface Guidelines for a native feel. Pixel-perfect designs that could be featured by Apple.',
      highlights: [
        'HIG compliance',
        'SF Symbols integration',
        'Dynamic Type support',
        'Dark Mode ready',
      ],
    },
    {
      icon: 'Cpu',
      title: 'Performance Optimization',
      description: 'Apps optimized for Apple Silicon and older devices. Smooth 60fps animations, minimal battery usage, and instant responsiveness.',
      highlights: [
        'Apple Silicon optimization',
        'Memory management',
        'Battery efficiency',
        'Fast app launch',
      ],
    },
    {
      icon: 'Link',
      title: 'Apple Ecosystem Integration',
      description: 'Seamless integration with Apple Watch, CarPlay, widgets, and other Apple services. Create experiences that span the entire ecosystem.',
      highlights: [
        'Apple Watch apps',
        'CarPlay integration',
        'Home Screen widgets',
        'Siri & Shortcuts',
      ],
    },
    {
      icon: 'Lock',
      title: 'Enterprise Security',
      description: 'Bank-level security with Face ID, Touch ID, Keychain, and encrypted data storage. HIPAA and SOC2 compliant when required.',
      highlights: [
        'Biometric authentication',
        'Keychain storage',
        'App Transport Security',
        'Code signing & notarization',
      ],
    },
    {
      icon: 'Rocket',
      title: 'App Store Success',
      description: 'We handle the entire submission process and optimize for App Store featuring. ASO included to maximize visibility.',
      highlights: [
        'App Store Connect',
        'TestFlight beta testing',
        'ASO optimization',
        'Review response handling',
      ],
    },
  ],

  // Process Steps
  process: {
    steps: [
      {
        icon: 'MessageSquare',
        title: 'Discovery & Strategy',
        description: 'Deep dive into your app concept, target users, and business goals. We define the MVP, user stories, and technical approach.',
        duration: '1-2 weeks',
        deliverables: ['App specification', 'User stories', 'Technical architecture'],
      },
      {
        icon: 'Palette',
        title: 'UI/UX Design',
        description: 'Design stunning interfaces that follow Apple\'s HIG. Create interactive Figma prototypes for stakeholder approval.',
        duration: '2-3 weeks',
        deliverables: ['Figma designs', 'Interactive prototype', 'Design system'],
      },
      {
        icon: 'Code',
        title: 'Core Development',
        description: 'Build the foundation with Swift and SwiftUI. Implement authentication, core features, and backend integration.',
        duration: '4-8 weeks',
        deliverables: ['Working app build', 'API integration', 'Core features'],
      },
      {
        icon: 'TestTube',
        title: 'Testing & QA',
        description: 'Comprehensive testing on real devices. Unit tests, UI tests, and TestFlight beta testing with real users.',
        duration: '2-3 weeks',
        deliverables: ['Test coverage', 'Beta feedback', 'Bug fixes'],
      },
      {
        icon: 'Store',
        title: 'App Store Launch',
        description: 'Prepare App Store assets, submit for review, and handle any feedback. ASO optimization for maximum visibility.',
        duration: '1-2 weeks',
        deliverables: ['App Store listing', 'Launch marketing', 'Live app'],
      },
      {
        icon: 'HeartHandshake',
        title: 'Post-Launch Support',
        description: 'Monitor performance, respond to user feedback, and release updates. Ongoing maintenance keeps your app competitive.',
        duration: 'Ongoing',
        deliverables: ['Analytics reports', 'Updates', 'Support coverage'],
      },
    ],
    totalDuration: '12-20 weeks',
  },

  // Benefits
  benefits: [
    {
      icon: 'Star',
      title: 'App Store Ready',
      description: 'Apps built to Apple\'s standards pass review the first time. No costly rejections or delays.',
      stat: '98',
      statSuffix: '%',
      statLabel: 'First-Time Approval Rate',
    },
    {
      icon: 'Zap',
      title: 'Native Performance',
      description: 'True native apps with 60fps animations, instant response, and efficient battery usage.',
      stat: '60',
      statSuffix: 'fps',
      statLabel: 'Smooth Animations',
    },
    {
      icon: 'Users',
      title: 'Premium User Base',
      description: 'iOS users spend 2x more on apps. Premium experience attracts high-value customers.',
      stat: '2',
      statSuffix: 'x',
      statLabel: 'Higher App Spending',
    },
    {
      icon: 'Shield',
      title: 'Security First',
      description: 'Apple\'s security features built-in. Face ID, encrypted storage, and secure networking.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Security Best Practices',
    },
    {
      icon: 'Award',
      title: 'Feature Potential',
      description: 'Apps built to Apple\'s standards have the best chance of being featured in the App Store.',
      stat: '5',
      statSuffix: 'x',
      statLabel: 'Higher Feature Chance',
    },
    {
      icon: 'RefreshCw',
      title: 'Future-Proof',
      description: 'Modern Swift architecture adapts easily to new iOS versions and Apple devices.',
      stat: '5',
      statSuffix: '+',
      statLabel: 'Years of Relevance',
    },
  ],

  // Tech Stack
  techStack: [
    {
      name: 'Core Development',
      description: 'Apple\'s modern development tools',
      technologies: [
        { name: 'Swift 5.9+', icon: 'swift', category: 'Language', proficiency: 'expert' },
        { name: 'SwiftUI', icon: 'swiftui', category: 'UI Framework', proficiency: 'expert' },
        { name: 'UIKit', icon: 'uikit', category: 'UI Framework', proficiency: 'expert' },
        { name: 'Xcode 15', icon: 'xcode', category: 'IDE', proficiency: 'expert' },
      ],
    },
    {
      name: 'Apple Frameworks',
      description: 'Native iOS capabilities',
      technologies: [
        { name: 'Core Data', icon: 'database', category: 'Storage', proficiency: 'expert' },
        { name: 'CloudKit', icon: 'cloud', category: 'Backend', proficiency: 'advanced' },
        { name: 'HealthKit', icon: 'health', category: 'Health', proficiency: 'advanced' },
        { name: 'ARKit', icon: 'ar', category: 'AR', proficiency: 'advanced' },
      ],
    },
    {
      name: 'Architecture & Patterns',
      description: 'Modern iOS architecture',
      technologies: [
        { name: 'MVVM', icon: 'architecture', category: 'Pattern', proficiency: 'expert' },
        { name: 'Combine', icon: 'reactive', category: 'Reactive', proficiency: 'expert' },
        { name: 'Swift Concurrency', icon: 'async', category: 'Concurrency', proficiency: 'expert' },
        { name: 'Swift Package Manager', icon: 'package', category: 'Dependencies', proficiency: 'expert' },
      ],
    },
    {
      name: 'Backend Integration',
      description: 'Server and cloud services',
      technologies: [
        { name: 'Firebase', icon: 'firebase', category: 'Backend', proficiency: 'expert' },
        { name: 'AWS Amplify', icon: 'aws', category: 'Backend', proficiency: 'advanced' },
        { name: 'REST APIs', icon: 'api', category: 'Integration', proficiency: 'expert' },
        { name: 'GraphQL', icon: 'graphql', category: 'Integration', proficiency: 'advanced' },
      ],
    },
  ],

  // Portfolio
  portfolio: [
    {
      title: 'Healthcare Companion App',
      client: 'MedTrack Health',
      industry: 'Healthcare',
      description: 'HIPAA-compliant health tracking app with Apple Watch integration, HealthKit sync, and secure patient-doctor messaging.',
      challenge: 'Create a secure healthcare app that integrates with Apple Health while meeting HIPAA compliance requirements.',
      solution: 'Built native Swift app with HealthKit integration, encrypted data storage, and HIPAA-compliant backend.',
      results: ['500,000+ downloads', 'Featured by Apple', 'HIPAA certified'],
      metrics: [
        { label: 'Downloads', value: '500K+' },
        { label: 'App Store Rating', value: '4.9' },
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'Swift', 'HealthKit', 'Apple Watch', 'HIPAA'],
      testimonial: {
        quote: 'The app transformed how our patients manage their health. The Apple Watch integration is seamless.',
        author: 'Dr. Sarah Mitchell',
        role: 'Chief Medical Officer',
      },
    },
    {
      title: 'Luxury E-commerce App',
      client: 'Luxe Boutique',
      industry: 'Retail',
      description: 'Premium shopping experience with AR try-on, Apple Pay, and personalized recommendations powered by ML.',
      challenge: 'Create a premium shopping experience that matches the luxury brand positioning.',
      solution: 'Native iOS app with ARKit try-on, Core ML recommendations, and seamless Apple Pay checkout.',
      results: ['$10M+ mobile revenue', '45% conversion rate', 'Apple Design Award nominee'],
      metrics: [
        { label: 'Mobile Revenue', value: '$10M+' },
        { label: 'Conversion Rate', value: '45%' },
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Swift', 'ARKit', 'Apple Pay', 'Core ML'],
      testimonial: {
        quote: 'Our mobile revenue tripled after launching this app. The AR feature is a game-changer for luxury retail.',
        author: 'Alexandra Chen',
        role: 'CEO',
      },
    },
    {
      title: 'Fitness & Workout App',
      client: 'FitPro Training',
      industry: 'Fitness',
      description: 'Complete fitness app with workout tracking, Apple Watch companion, nutrition logging, and social challenges.',
      challenge: 'Build a comprehensive fitness platform that competes with established players like Nike and Peloton.',
      solution: 'Native Swift app with full Apple Watch workout tracking, HealthKit sync, and social features.',
      results: ['1M+ active users', 'App Store featured', '4.8 star rating'],
      metrics: [
        { label: 'Active Users', value: '1M+' },
        { label: 'Rating', value: '4.8' },
      ],
      image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=600&fit=crop',
      tags: ['Fitness', 'Swift', 'Apple Watch', 'HealthKit', 'SwiftUI'],
      testimonial: {
        quote: 'Users love the Apple Watch integration. The workout tracking accuracy rivals dedicated fitness devices.',
        author: 'Marcus Johnson',
        role: 'Founder',
      },
    },
    {
      title: 'Social Media Platform',
      client: 'ConnectSphere',
      industry: 'Social Media',
      description: 'Feature-rich social networking app with real-time messaging, stories, live streaming, and advanced content discovery.',
      challenge: 'Build a performant social platform that handles millions of concurrent users with smooth scrolling and instant updates.',
      solution: 'Native Swift app with optimized feed rendering, WebSocket-based real-time features, and Core ML content recommendations.',
      results: ['2M+ monthly active users', '4.7 star rating', '25 min avg session'],
      metrics: [
        { label: 'MAU', value: '2M+' },
        { label: 'Avg Session', value: '25 min' },
      ],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tags: ['Social Media', 'Swift', 'Real-time', 'SwiftUI', 'Core ML'],
      testimonial: {
        quote: 'The app performance is incredible. Users spend more time engaging because everything feels instant and smooth.',
        author: 'David Park',
        role: 'CTO',
      },
    },
  ],

  // Pricing
  pricing: {
    plans: [
      {
        name: 'iOS MVP',
        description: 'Launch your iOS app idea quickly',
        price: '$25,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Native Swift development', included: true },
          { name: 'Up to 10 screens', included: true },
          { name: 'Basic backend integration', included: true },
          { name: 'Push notifications', included: true },
          { name: 'App Store submission', included: true },
          { name: 'Apple Watch app', included: false },
          { name: 'Advanced integrations', included: false },
        ],
        ctaText: 'Start MVP',
      },
      {
        name: 'iOS Pro',
        description: 'Full-featured iOS application',
        price: '$50,000',
        priceNote: 'Starting price',
        highlighted: true,
        badge: 'Most Popular',
        features: [
          { name: 'Native Swift & SwiftUI', included: true },
          { name: '15-25 screens', included: true },
          { name: 'Custom backend', included: true },
          { name: 'Apple ecosystem integration', included: true },
          { name: 'Advanced features', included: true },
          { name: 'Apple Watch companion', included: true },
          { name: '90-day support', included: true },
        ],
        ctaText: 'Start Project',
      },
      {
        name: 'iOS Enterprise',
        description: 'Complex enterprise iOS applications',
        price: 'Custom',
        priceNote: 'Based on scope',
        features: [
          { name: 'Full Apple ecosystem', included: true },
          { name: 'Unlimited screens', included: true },
          { name: 'Enterprise backend', included: true },
          { name: 'Advanced security', included: true },
          { name: 'Apple Watch + CarPlay', included: true },
          { name: 'Dedicated team', included: true },
          { name: '12-month support', included: true },
        ],
        ctaText: 'Contact Sales',
      },
    ],
    customNote: 'All iOS projects include App Store submission, TestFlight beta testing, and comprehensive documentation.',
  },

  // Testimonials
  testimonials: [
    {
      quote: 'They built an iOS app that Apple featured on launch day. The attention to Apple\'s design guidelines and performance optimization was exceptional.',
      author: 'Jennifer Park',
      role: 'CEO',
      company: 'MedTrack Health',
      rating: 5,
      location: 'San Francisco, CA',
    },
    {
      quote: 'Our iOS app processes millions in transactions monthly. The Apple Pay integration and security implementation gives our users complete confidence.',
      author: 'Michael Torres',
      role: 'CTO',
      company: 'Luxe Boutique',
      rating: 5,
      location: 'New York, NY',
    },
    {
      quote: 'The Apple Watch integration alone was worth it. Our users can now track workouts seamlessly, and engagement metrics have gone through the roof.',
      author: 'David Chen',
      role: 'Product Director',
      company: 'FitPro Training',
      rating: 5,
      location: 'Los Angeles, CA',
    },
  ],

  // FAQs
  faqs: [
    {
      question: 'Should I build native iOS or cross-platform?',
      answer: 'Native iOS is ideal when you need the best performance, Apple ecosystem integration (Watch, CarPlay, widgets), or plan to leverage iOS-specific features like ARKit or HealthKit. For simpler apps targeting both platforms, cross-platform can work. We help you make the right choice.',
      category: 'Strategy',
    },
    {
      question: 'How long does iOS app development take?',
      answer: 'An iOS MVP typically takes 3-4 months. Full-featured apps take 4-6 months. Complex enterprise apps with Apple Watch and advanced features can take 6-12 months. We provide detailed timelines after understanding your requirements.',
      category: 'Timeline',
    },
    {
      question: 'Do you use SwiftUI or UIKit?',
      answer: 'We use SwiftUI for new projects as it is Apple\'s future direction and enables faster development. UIKit is used when needed for advanced customization or to support older iOS versions. Most apps combine both for the best results.',
      category: 'Technical',
    },
    {
      question: 'How do you handle App Store approval?',
      answer: 'We build apps that follow Apple\'s guidelines from day one. Our 98% first-time approval rate comes from understanding Apple\'s requirements. We handle the entire submission process and respond to any review feedback.',
      category: 'App Store',
    },
    {
      question: 'Can you integrate Apple Watch?',
      answer: 'Yes, we build Apple Watch companion apps with full watchOS integration. This includes workout tracking, complications, notifications, and independent watch functionality. Watch apps significantly increase user engagement.',
      category: 'Features',
    },
    {
      question: 'What about iPad support?',
      answer: 'We design iOS apps to work beautifully on both iPhone and iPad. This includes adaptive layouts, Split View support, and iPad-specific features like trackpad and keyboard support. Universal apps maximize your reach.',
      category: 'Features',
    },
    {
      question: 'How do you ensure iOS app security?',
      answer: 'We implement Apple\'s security best practices including Keychain for secure storage, App Transport Security for networking, Face ID/Touch ID for authentication, and code signing. For healthcare/finance apps, we ensure HIPAA/PCI compliance.',
      category: 'Security',
    },
    {
      question: 'Do you provide ongoing iOS maintenance?',
      answer: 'Yes, iOS requires updates for new iOS versions, device releases, and App Store policy changes. We offer maintenance packages that include iOS updates, bug fixes, performance monitoring, and feature enhancements.',
      category: 'Support',
    },
  ],

  // Related Services
  relatedServices: [
    {
      name: 'Android Development',
      slug: 'android-development',
      description: 'Native Android apps with Kotlin',
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
    title: 'iOS App Development Services | Native iPhone & iPad Apps',
    description: 'Expert iOS app development with Swift and SwiftUI. Build native iPhone and iPad apps that users love. Apple Watch integration, App Store optimization included.',
    keywords: [
      'ios app development',
      'iphone app development',
      'swift development',
      'swiftui development',
      'ios developers',
      'native ios app',
      'ipad app development',
      'apple watch app',
    ],
  },
};
