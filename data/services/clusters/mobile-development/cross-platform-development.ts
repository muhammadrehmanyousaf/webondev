import { ServiceData } from '@/components/services/sections';

export const crossPlatformDevelopmentData: ServiceData = {
  // Basic Info
  slug: 'cross-platform-development',
  name: 'Cross-Platform App Development Services',
  tagline: 'One Codebase, Multiple Platforms, Maximum Efficiency',
  description: 'Expert cross-platform mobile development services. We build iOS and Android apps from a single codebase using React Native, Flutter, and other modern frameworks, delivering native-quality experiences at reduced cost.',
  category: 'Mobile Development',

  // Hero Section
  hero: {
    headline: 'Cross-Platform Development',
    subheadline: 'Build Once, Deploy Everywhere',
    description: 'Reach iOS and Android users with a single development investment. Our cross-platform expertise delivers native-quality mobile apps using React Native, Flutter, and modern frameworks that maximize code reuse while minimizing time and cost.',
    keyFeatures: [
      'Single codebase for iOS & Android',
      'Native-quality performance',
      '70-90% code sharing',
      'Faster time-to-market',
      'Reduced development costs',
    ],
    badges: ['Cost Efficient', '400+ Apps', '50% Faster Launch'],
  },

  // Pain Points
  painPoints: [
    {
      icon: 'DollarSign',
      title: 'Budget Constraints',
      description: 'Native development for both platforms doubles your budget. Most businesses need to reach both audiences without paying twice.',
      stat: '2x',
      statLabel: 'budget for dual native',
    },
    {
      icon: 'Clock',
      title: 'Time-to-Market Pressure',
      description: 'Building separate native apps takes months longer. Competitors launch while you\'re still developing.',
      stat: '60%',
      statLabel: 'longer native timeline',
    },
    {
      icon: 'Users',
      title: 'Team Fragmentation',
      description: 'Separate iOS and Android teams create coordination overhead. Features and fixes happen at different speeds.',
      stat: '30%',
      statLabel: 'coordination overhead',
    },
    {
      icon: 'RefreshCw',
      title: 'Feature Parity Issues',
      description: 'Separate codebases drift apart. Users on one platform get features before the other, causing frustration.',
      stat: '45%',
      statLabel: 'feature parity issues',
    },
    {
      icon: 'Wrench',
      title: 'Maintenance Burden',
      description: 'Every bug fix, security patch, and improvement must be done twice. Maintenance costs compound over time.',
      stat: '2x',
      statLabel: 'maintenance work',
    },
    {
      icon: 'Search',
      title: 'Talent Availability',
      description: 'Finding developers skilled in both Swift and Kotlin is difficult. Cross-platform developers are more available.',
      stat: '40%',
      statLabel: 'easier recruitment',
    },
  ],

  // Solutions/Features
  solutions: [
    {
      icon: 'Share2',
      title: 'Maximum Code Sharing',
      description: 'Write business logic, API layers, and most UI components once. Share 70-90% of code between platforms while maintaining native feel.',
      highlights: [
        '70-90% code sharing',
        'Shared business logic',
        'Common API layer',
        'Reusable components',
      ],
    },
    {
      icon: 'Zap',
      title: 'Native Performance',
      description: 'Modern frameworks compile to native code. Users can\'t tell the difference from traditional native apps in most use cases.',
      highlights: [
        'Native compilation',
        '60fps animations',
        'Efficient rendering',
        'Native UI widgets',
      ],
    },
    {
      icon: 'Rocket',
      title: 'Faster Development',
      description: 'Build features once, deploy to both platforms. Hot reload and unified tooling accelerate the development cycle significantly.',
      highlights: [
        'Unified development',
        'Hot reload',
        'Single testing',
        'Faster iterations',
      ],
    },
    {
      icon: 'Palette',
      title: 'Platform Adaptation',
      description: 'Apps automatically adapt to iOS and Android conventions. Material Design on Android, iOS styling on Apple devices.',
      highlights: [
        'Platform detection',
        'Adaptive styling',
        'Platform navigation',
        'System integration',
      ],
    },
    {
      icon: 'DollarSign',
      title: 'Cost Efficiency',
      description: 'Save 40-60% compared to separate native development. One team, one codebase, two platforms.',
      highlights: [
        '40-60% savings',
        'Single team',
        'Unified process',
        'Lower TCO',
      ],
    },
    {
      icon: 'Users',
      title: 'Team Efficiency',
      description: 'One team manages both platforms. Faster feature delivery, consistent quality, and simpler project management.',
      highlights: [
        'Unified team',
        'Consistent quality',
        'Simpler management',
        'Better communication',
      ],
    },
  ],

  // Process Steps
  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Framework Selection',
        description: 'Analyze your requirements to choose the optimal framework. React Native, Flutter, or other options based on your needs.',
        duration: '1 week',
        deliverables: ['Framework recommendation', 'Architecture plan', 'Technology decisions'],
      },
      {
        icon: 'Palette',
        title: 'Unified Design',
        description: 'Design interfaces that work beautifully on both platforms while respecting platform conventions.',
        duration: '2-3 weeks',
        deliverables: ['Unified designs', 'Platform adaptations', 'Component library'],
      },
      {
        icon: 'Boxes',
        title: 'Shared Foundation',
        description: 'Build shared components, navigation, state management, and API integration that powers both platforms.',
        duration: '3-4 weeks',
        deliverables: ['Shared codebase', 'API layer', 'Core components'],
      },
      {
        icon: 'Code',
        title: 'Feature Development',
        description: 'Develop app features using shared code. Platform-specific code only where necessary.',
        duration: '4-8 weeks',
        deliverables: ['Features', 'Platform integrations', 'Working apps'],
      },
      {
        icon: 'TestTube',
        title: 'Cross-Platform Testing',
        description: 'Test on both platforms simultaneously. Automated testing ensures consistent behavior.',
        duration: '2-3 weeks',
        deliverables: ['Cross-platform tests', 'Device testing', 'Performance validation'],
      },
      {
        icon: 'Rocket',
        title: 'Simultaneous Launch',
        description: 'Submit to both App Store and Play Store together. Launch on both platforms simultaneously.',
        duration: '1-2 weeks',
        deliverables: ['Dual submission', 'Store listings', 'Live apps'],
      },
    ],
    totalDuration: '12-20 weeks',
  },

  // Benefits
  benefits: [
    {
      icon: 'DollarSign',
      title: 'Cost Savings',
      description: 'Save 40-60% compared to building separate native apps for each platform.',
      stat: '50',
      statSuffix: '%',
      statLabel: 'Average Cost Savings',
    },
    {
      icon: 'Rocket',
      title: 'Faster Launch',
      description: 'Launch on iOS and Android simultaneously instead of sequentially.',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Faster Time-to-Market',
    },
    {
      icon: 'Share2',
      title: 'Code Reuse',
      description: 'Share up to 90% of code between platforms. Write once, run everywhere.',
      stat: '90',
      statSuffix: '%',
      statLabel: 'Maximum Code Sharing',
    },
    {
      icon: 'RefreshCw',
      title: 'Unified Updates',
      description: 'Push updates to both platforms at once. Maintain feature parity easily.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Feature Parity',
    },
    {
      icon: 'Users',
      title: 'Single Team',
      description: 'One team handles both platforms. Better coordination and consistency.',
      stat: '1',
      statSuffix: ' Team',
      statLabel: 'Both Platforms',
    },
    {
      icon: 'Wrench',
      title: 'Lower Maintenance',
      description: 'Single codebase means single maintenance burden. Fix once, fixed everywhere.',
      stat: '50',
      statSuffix: '%',
      statLabel: 'Less Maintenance',
    },
  ],

  // Tech Stack
  techStack: [
    {
      name: 'React Native Stack',
      description: 'Meta\'s cross-platform framework',
      technologies: [
        { name: 'React Native', icon: 'react-native', category: 'Framework', proficiency: 'expert' },
        { name: 'Expo', icon: 'expo', category: 'Platform', proficiency: 'expert' },
        { name: 'TypeScript', icon: 'typescript', category: 'Language', proficiency: 'expert' },
        { name: 'Redux Toolkit', icon: 'redux', category: 'State', proficiency: 'expert' },
      ],
    },
    {
      name: 'Flutter Stack',
      description: 'Google\'s UI toolkit',
      technologies: [
        { name: 'Flutter', icon: 'flutter', category: 'Framework', proficiency: 'expert' },
        { name: 'Dart', icon: 'dart', category: 'Language', proficiency: 'expert' },
        { name: 'Riverpod', icon: 'riverpod', category: 'State', proficiency: 'expert' },
        { name: 'BLoC', icon: 'bloc', category: 'Architecture', proficiency: 'advanced' },
      ],
    },
    {
      name: 'Shared Solutions',
      description: 'Platform-agnostic tools',
      technologies: [
        { name: 'Firebase', icon: 'firebase', category: 'Backend', proficiency: 'expert' },
        { name: 'GraphQL', icon: 'graphql', category: 'API', proficiency: 'expert' },
        { name: 'Jest/Testing', icon: 'jest', category: 'Testing', proficiency: 'expert' },
        { name: 'CI/CD', icon: 'cicd', category: 'DevOps', proficiency: 'expert' },
      ],
    },
    {
      name: 'Native Bridges',
      description: 'Platform-specific access',
      technologies: [
        { name: 'Native Modules', icon: 'bridge', category: 'Bridge', proficiency: 'expert' },
        { name: 'Platform Channels', icon: 'channel', category: 'Bridge', proficiency: 'expert' },
        { name: 'Swift/Kotlin Plugins', icon: 'plugin', category: 'Native', proficiency: 'advanced' },
        { name: 'Turbo Modules', icon: 'turbo', category: 'Performance', proficiency: 'advanced' },
      ],
    },
  ],

  // Portfolio
  portfolio: [
    {
      title: 'Ride-Sharing Platform',
      client: 'QuickRide',
      industry: 'Transportation',
      description: 'Full ride-sharing app with driver and passenger apps, real-time tracking, payments, and ratings.',
      challenge: 'Build a competitive ride-sharing platform for both iOS and Android on a startup budget.',
      solution: 'React Native apps sharing 90% code. Real-time features with Firebase, native map integrations.',
      results: ['1M+ rides completed', 'Both platforms in 5 months', '60% under budget'],
      metrics: [
        { label: 'Rides', value: '1M+' },
        { label: 'Cost Savings', value: '60%' },
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['Transportation', 'React Native', 'Maps', 'Real-time', 'Payments'],
      testimonial: {
        quote: 'Cross-platform development let us launch on both platforms simultaneously. We saved months and hundreds of thousands in development costs.',
        author: 'Carlos Mendez',
        role: 'CEO',
      },
    },
    {
      title: 'Fitness & Wellness App',
      client: 'FitWell',
      industry: 'Health & Fitness',
      description: 'Comprehensive fitness app with workout tracking, nutrition, social features, and wearable integration.',
      challenge: 'Create a feature-rich fitness app that integrates with both Apple Health and Google Fit.',
      solution: 'Flutter app with platform-specific health integrations. Shared UI and logic with native bridges.',
      results: ['500K+ users', 'Both health platforms', '4.7 star rating'],
      metrics: [
        { label: 'Users', value: '500K+' },
        { label: 'Rating', value: '4.7' },
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      tags: ['Fitness', 'Flutter', 'HealthKit', 'Google Fit', 'Social'],
      testimonial: {
        quote: 'Flutter delivered the beautiful UI we wanted while still accessing HealthKit and Google Fit natively. Best of both worlds.',
        author: 'Sarah Johnson',
        role: 'Product Director',
      },
    },
    {
      title: 'Restaurant Chain App',
      client: 'BiteChain',
      industry: 'Food & Beverage',
      description: 'Mobile ordering app for a restaurant chain with loyalty program, in-store pickup, and delivery integration.',
      challenge: 'Launch a mobile ordering app across 500+ locations for both iOS and Android customers.',
      solution: 'React Native app with unified ordering flow, loyalty integration, and location-based features.',
      results: ['$20M+ mobile orders', '500+ locations', '35% order increase'],
      metrics: [
        { label: 'Mobile Revenue', value: '$20M+' },
        { label: 'Order Increase', value: '35%' },
      ],
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
      tags: ['Restaurant', 'React Native', 'Ordering', 'Loyalty', 'Location'],
      testimonial: {
        quote: 'One app for both platforms meant we could roll out across all locations faster. Mobile orders now drive 35% of our revenue.',
        author: 'Mike Thompson',
        role: 'VP Digital',
      },
    },
    {
      title: 'E-commerce Fashion App',
      client: 'StyleHouse',
      industry: 'Retail',
      description: 'Fashion e-commerce app with virtual try-on, personalized recommendations, and seamless checkout across platforms.',
      challenge: 'Create a visually stunning shopping experience with AR features that works consistently on iOS and Android.',
      solution: 'Flutter app with custom UI components, AR try-on via native modules, and unified payment processing.',
      results: ['2M+ downloads', '$8M annual revenue', '4.8 star rating'],
      metrics: [
        { label: 'Downloads', value: '2M+' },
        { label: 'Revenue', value: '$8M' },
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Flutter', 'AR', 'Fashion', 'Payments'],
      testimonial: {
        quote: 'The cross-platform approach gave us a stunning app on both platforms in half the time of native development.',
        author: 'Amanda Foster',
        role: 'CEO',
      },
    },
  ],

  // Pricing
  pricing: {
    plans: [
      {
        name: 'Cross-Platform MVP',
        description: 'Launch your app on both platforms',
        price: '$25,000',
        priceNote: 'Starting price',
        features: [
          { name: 'iOS & Android apps', included: true },
          { name: 'Up to 12 screens', included: true },
          { name: 'Shared codebase', included: true },
          { name: 'Firebase backend', included: true },
          { name: 'Both store submissions', included: true },
          { name: 'Native integrations', included: false },
          { name: 'Complex features', included: false },
        ],
        ctaText: 'Start MVP',
      },
      {
        name: 'Cross-Platform Pro',
        description: 'Full-featured dual platform app',
        price: '$50,000',
        priceNote: 'Starting price',
        highlighted: true,
        badge: 'Best Value',
        features: [
          { name: 'iOS & Android apps', included: true },
          { name: '15-25 screens', included: true },
          { name: 'Maximum code sharing', included: true },
          { name: 'Custom backend', included: true },
          { name: 'Native integrations', included: true },
          { name: 'Advanced features', included: true },
          { name: '90-day support', included: true },
        ],
        ctaText: 'Start Project',
      },
      {
        name: 'Enterprise Cross-Platform',
        description: 'Complex enterprise applications',
        price: 'Custom',
        priceNote: 'Based on scope',
        features: [
          { name: 'Full platform support', included: true },
          { name: 'Unlimited screens', included: true },
          { name: 'Enterprise integrations', included: true },
          { name: 'Custom native modules', included: true },
          { name: 'Web extension possible', included: true },
          { name: 'Dedicated team', included: true },
          { name: '12-month support', included: true },
        ],
        ctaText: 'Contact Sales',
      },
    ],
    customNote: 'Framework selection (React Native or Flutter) is based on your specific requirements and team expertise.',
  },

  // Testimonials
  testimonials: [
    {
      quote: 'We launched on both platforms in 5 months instead of 10. The cost savings let us invest more in marketing.',
      author: 'Carlos Mendez',
      role: 'CEO',
      company: 'QuickRide',
      rating: 5,
      location: 'Austin, TX',
    },
    {
      quote: 'The cross-platform approach delivered exactly what we needed. Both apps look and feel native to their platforms.',
      author: 'Sarah Johnson',
      role: 'Product Director',
      company: 'FitWell',
      rating: 5,
      location: 'Denver, CO',
    },
    {
      quote: 'One team, one codebase, two platforms. Feature updates now happen simultaneously - our users love the consistency.',
      author: 'Mike Thompson',
      role: 'VP Digital',
      company: 'BiteChain',
      rating: 5,
      location: 'Chicago, IL',
    },
  ],

  // FAQs
  faqs: [
    {
      question: 'How do you choose between React Native and Flutter?',
      answer: 'React Native is ideal if you have React web expertise or want maximum JavaScript talent availability. Flutter excels for custom UI designs and slightly better performance. We recommend based on your team skills, design needs, and long-term plans.',
      category: 'Strategy',
    },
    {
      question: 'Is cross-platform really as good as native?',
      answer: 'For 90% of apps, yes. Cross-platform apps from companies like Airbnb, Instagram (React Native), and Google (Flutter) prove the technology works. Only apps with extreme performance needs or deep platform integration should consider pure native.',
      category: 'Quality',
    },
    {
      question: 'How much code is actually shared?',
      answer: 'Typically 70-90% of code is shared. Business logic, API layers, and most UI components are shared. Platform-specific code is mainly for native integrations (HealthKit, Google Fit) and UI details that must differ.',
      category: 'Technical',
    },
    {
      question: 'Can cross-platform apps access native features?',
      answer: 'Yes. Both React Native and Flutter have native bridge capabilities. Camera, GPS, push notifications, biometrics, and health APIs are all accessible. Custom native code can be written when needed.',
      category: 'Features',
    },
    {
      question: 'What about app store approval?',
      answer: 'Cross-platform apps are approved daily on both App Store and Play Store. They are treated identically to native apps. Meta\'s own apps use React Native; Google\'s apps use Flutter.',
      category: 'Distribution',
    },
    {
      question: 'How much faster is cross-platform development?',
      answer: 'Typically 30-40% faster than separate native development. You build features once instead of twice, test once, and deploy simultaneously. The speed advantage compounds as apps grow.',
      category: 'Timeline',
    },
    {
      question: 'What if we need platform-specific features later?',
      answer: 'Cross-platform frameworks fully support adding native code. You can write native modules for iOS-only or Android-only features. The shared code remains shared; native additions are contained.',
      category: 'Flexibility',
    },
    {
      question: 'Should we migrate our existing native apps?',
      answer: 'Migration depends on your situation. If maintenance burden is high or you need faster feature delivery, migration may make sense. We can also create new apps in cross-platform while maintaining legacy native apps.',
      category: 'Migration',
    },
  ],

  // Related Services
  relatedServices: [
    {
      name: 'React Native Development',
      slug: 'react-native-development',
      description: 'Cross-platform with React Native',
      icon: 'Smartphone',
    },
    {
      name: 'Flutter Development',
      slug: 'flutter-development',
      description: 'Cross-platform with Flutter',
      icon: 'Smartphone',
    },
    {
      name: 'Native App Development',
      slug: 'native-app-development',
      description: 'Pure native development',
      icon: 'Smartphone',
    },
    {
      name: 'Mobile UI/UX Design',
      slug: 'mobile-ui-ux-design',
      description: 'Cross-platform design',
      icon: 'Palette',
    },
  ],

  // SEO
  seo: {
    title: 'Cross-Platform App Development Services | iOS & Android Apps',
    description: 'Expert cross-platform mobile development with React Native and Flutter. Build iOS and Android apps from one codebase. Save 50% on development costs.',
    keywords: [
      'cross-platform app development',
      'cross-platform mobile development',
      'react native development',
      'flutter development',
      'ios android app',
      'multi-platform app',
      'cross-platform agency',
      'mobile app development',
    ],
  },
};
