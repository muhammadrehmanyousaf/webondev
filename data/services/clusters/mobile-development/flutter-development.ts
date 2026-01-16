import { ServiceData } from '@/components/services/sections';

export const flutterDevelopmentData: ServiceData = {
  // Basic Info
  slug: 'flutter-development',
  name: 'Flutter App Development Services',
  tagline: 'Beautiful Native Apps with Google\'s Flutter',
  description: 'Expert Flutter development for stunning cross-platform apps. We build beautiful, fast, and expressive mobile applications for iOS and Android using Google\'s revolutionary UI framework.',
  category: 'Mobile Development',

  // Hero Section
  hero: {
    headline: 'Flutter App Development',
    subheadline: 'Beautiful Apps, Fast Development',
    description: 'Create stunning mobile experiences with Flutter. Google\'s UI toolkit enables beautiful, natively compiled applications for iOS and Android from a single codebase with expressive and flexible UI.',
    keyFeatures: [
      'Single codebase, native apps',
      'Pixel-perfect custom UIs',
      '120fps rendering performance',
      'Hot reload development',
      'Material & Cupertino design',
    ],
    badges: ['Google Framework', '400+ Flutter Apps', '95% Code Sharing'],
  },

  // Pain Points
  painPoints: [
    {
      icon: 'Palette',
      title: 'Limited UI Flexibility',
      description: 'Other frameworks restrict UI creativity. You\'re stuck with platform widgets that can\'t match your brand design vision.',
      stat: '60%',
      statLabel: 'of apps look generic',
    },
    {
      icon: 'DollarSign',
      title: 'Duplicate Development',
      description: 'Building iOS and Android separately doubles your costs. Two teams, two codebases, two maintenance burdens.',
      stat: '2x',
      statLabel: 'the budget needed',
    },
    {
      icon: 'Zap',
      title: 'Performance Compromises',
      description: 'Many cross-platform solutions sacrifice performance. Hybrid apps feel sluggish compared to native experiences.',
      stat: '40%',
      statLabel: 'slower hybrid apps',
    },
    {
      icon: 'Clock',
      title: 'Slow Development Cycles',
      description: 'Without hot reload, every change requires rebuilding. Iteration is slow and development drags on.',
      stat: '5',
      statLabel: 'minutes per code change',
    },
    {
      icon: 'Layout',
      title: 'Inconsistent Experiences',
      description: 'Separate native apps often look and feel different. Users notice platform inconsistencies.',
      stat: '35%',
      statLabel: 'notice inconsistencies',
    },
    {
      icon: 'Search',
      title: 'Complex Animation',
      description: 'Building smooth, complex animations is difficult in most frameworks. Custom transitions require native code.',
      stat: '70%',
      statLabel: 'lack smooth animations',
    },
  ],

  // Solutions/Features
  solutions: [
    {
      icon: 'Palette',
      title: 'Unlimited UI Creativity',
      description: 'Flutter paints every pixel. Build any design you imagine with complete control over every visual element. No compromises.',
      highlights: [
        'Pixel-perfect designs',
        'Custom widgets',
        'Brand-perfect UIs',
        'Complete control',
      ],
    },
    {
      icon: 'Zap',
      title: 'Native Performance',
      description: 'Flutter compiles to native ARM code. No JavaScript bridge means native-level performance with smooth 120fps animations.',
      highlights: [
        'Compiled to native',
        '120fps capable',
        'No JS bridge',
        'GPU-accelerated',
      ],
    },
    {
      icon: 'RefreshCw',
      title: 'Hot Reload Magic',
      description: 'See changes in milliseconds, not minutes. Hot reload preserves app state while updating the UI instantly.',
      highlights: [
        'Sub-second reload',
        'State preservation',
        'Instant iteration',
        'Rapid development',
      ],
    },
    {
      icon: 'Boxes',
      title: 'Widget Everything',
      description: 'Flutter\'s widget system is incredibly powerful. Compose complex UIs from simple, reusable widgets with predictable behavior.',
      highlights: [
        'Composable widgets',
        'Reusable components',
        'Consistent behavior',
        'Easy testing',
      ],
    },
    {
      icon: 'Smartphone',
      title: 'Platform Adaptation',
      description: 'Apps automatically adapt to iOS and Android conventions. Material Design on Android, Cupertino style on iOS.',
      highlights: [
        'Platform-aware',
        'Material Design 3',
        'Cupertino widgets',
        'Adaptive layouts',
      ],
    },
    {
      icon: 'Globe',
      title: 'Multi-Platform Future',
      description: 'Flutter extends beyond mobile. Build for web, desktop, and embedded devices from the same codebase.',
      highlights: [
        'Web support',
        'Desktop apps',
        'Embedded devices',
        'Future-proof',
      ],
    },
  ],

  // Process Steps
  process: {
    steps: [
      {
        icon: 'MessageSquare',
        title: 'Discovery & Design',
        description: 'Understand your vision and plan the perfect Flutter architecture. Design custom UIs that showcase your brand.',
        duration: '1-2 weeks',
        deliverables: ['App specification', 'UI/UX designs', 'Widget architecture'],
      },
      {
        icon: 'Boxes',
        title: 'Widget Development',
        description: 'Build the custom widget library that will power your app. Create reusable, tested components.',
        duration: '2-3 weeks',
        deliverables: ['Widget library', 'Design system', 'Component tests'],
      },
      {
        icon: 'Code',
        title: 'Feature Development',
        description: 'Build app features with Flutter\'s rapid development workflow. Hot reload enables fast iteration.',
        duration: '4-8 weeks',
        deliverables: ['Working app', 'API integration', 'Core features'],
      },
      {
        icon: 'Sparkles',
        title: 'Polish & Animation',
        description: 'Add delightful animations, transitions, and micro-interactions that make your app feel premium.',
        duration: '1-2 weeks',
        deliverables: ['Animations', 'Transitions', 'Polish'],
      },
      {
        icon: 'TestTube',
        title: 'Testing & QA',
        description: 'Comprehensive testing on iOS and Android devices. Widget tests, integration tests, and performance profiling.',
        duration: '2-3 weeks',
        deliverables: ['Test coverage', 'Device testing', 'Performance report'],
      },
      {
        icon: 'Rocket',
        title: 'Launch & Support',
        description: 'Deploy to App Store and Play Store. Provide documentation and ongoing maintenance support.',
        duration: '1-2 weeks',
        deliverables: ['Store listings', 'Live apps', 'Documentation'],
      },
    ],
    totalDuration: '10-18 weeks',
  },

  // Benefits
  benefits: [
    {
      icon: 'Sparkles',
      title: 'Beautiful Custom UIs',
      description: 'Paint every pixel. Create unique, brand-perfect interfaces that stand out in app stores.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Design Freedom',
    },
    {
      icon: 'Zap',
      title: 'Blazing Performance',
      description: 'Native ARM compilation with no JavaScript bridge. Smooth animations at 120fps.',
      stat: '120',
      statSuffix: 'fps',
      statLabel: 'Rendering Speed',
    },
    {
      icon: 'DollarSign',
      title: 'Cost Efficiency',
      description: 'One codebase, one team, half the cost. Ship iOS and Android together.',
      stat: '50',
      statSuffix: '%+',
      statLabel: 'Cost Savings',
    },
    {
      icon: 'Rocket',
      title: 'Faster Development',
      description: 'Hot reload and widget composition accelerate development significantly.',
      stat: '2',
      statSuffix: 'x',
      statLabel: 'Faster Development',
    },
    {
      icon: 'Share2',
      title: 'Maximum Code Sharing',
      description: 'Share 95%+ of code between platforms. Platform-specific code is minimal.',
      stat: '95',
      statSuffix: '%+',
      statLabel: 'Code Sharing',
    },
    {
      icon: 'Globe',
      title: 'Multi-Platform Ready',
      description: 'Extend to web, desktop, and embedded. Future-proof your investment.',
      stat: '6',
      statSuffix: '+',
      statLabel: 'Platforms Supported',
    },
  ],

  // Tech Stack
  techStack: [
    {
      name: 'Flutter Core',
      description: 'Core framework and language',
      technologies: [
        { name: 'Flutter 3.x', icon: 'flutter', category: 'Framework', proficiency: 'expert' },
        { name: 'Dart', icon: 'dart', category: 'Language', proficiency: 'expert' },
        { name: 'Material Design 3', icon: 'material', category: 'Design', proficiency: 'expert' },
        { name: 'Cupertino', icon: 'cupertino', category: 'Design', proficiency: 'expert' },
      ],
    },
    {
      name: 'State Management',
      description: 'Application state solutions',
      technologies: [
        { name: 'Riverpod', icon: 'riverpod', category: 'State', proficiency: 'expert' },
        { name: 'BLoC', icon: 'bloc', category: 'State', proficiency: 'expert' },
        { name: 'Provider', icon: 'provider', category: 'State', proficiency: 'expert' },
        { name: 'GetX', icon: 'getx', category: 'State', proficiency: 'advanced' },
      ],
    },
    {
      name: 'Backend & Services',
      description: 'Backend integration',
      technologies: [
        { name: 'Firebase', icon: 'firebase', category: 'Backend', proficiency: 'expert' },
        { name: 'Supabase', icon: 'supabase', category: 'Backend', proficiency: 'advanced' },
        { name: 'Dio', icon: 'dio', category: 'HTTP', proficiency: 'expert' },
        { name: 'GraphQL', icon: 'graphql', category: 'API', proficiency: 'advanced' },
      ],
    },
    {
      name: 'Testing & Tools',
      description: 'Quality and development tools',
      technologies: [
        { name: 'Widget Testing', icon: 'testing', category: 'Testing', proficiency: 'expert' },
        { name: 'Integration Tests', icon: 'integration', category: 'Testing', proficiency: 'expert' },
        { name: 'DevTools', icon: 'devtools', category: 'Tools', proficiency: 'expert' },
        { name: 'Fastlane', icon: 'fastlane', category: 'CI/CD', proficiency: 'advanced' },
      ],
    },
  ],

  // Portfolio
  portfolio: [
    {
      title: 'Fintech Investment App',
      client: 'WealthGrow',
      industry: 'Finance',
      description: 'Beautiful investment app with real-time charts, portfolio tracking, and educational content. Custom animations bring data to life.',
      challenge: 'Create an investment app that makes complex financial data accessible and engaging for first-time investors.',
      solution: 'Flutter app with custom animated charts, Riverpod state management, and delightful micro-interactions.',
      results: ['300K+ downloads', 'Featured by Google', '4.9 star rating'],
      metrics: [
        { label: 'Downloads', value: '300K+' },
        { label: 'Rating', value: '4.9' },
      ],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      tags: ['Fintech', 'Flutter', 'Animations', 'Charts', 'Riverpod'],
      testimonial: {
        quote: 'The animations and charts are stunning. Users love how the app makes investing feel approachable and even fun.',
        author: 'Lisa Park',
        role: 'CEO',
      },
    },
    {
      title: 'Luxury Real Estate',
      client: 'PremiumHomes',
      industry: 'Real Estate',
      description: 'Premium real estate app with 3D property tours, AR visualization, and immersive photo galleries.',
      challenge: 'Build a luxury app experience that matches high-end property listings and discerning buyers\' expectations.',
      solution: 'Flutter with custom 3D widgets, AR integration, and buttery smooth transitions between property listings.',
      results: ['$50M+ property sales', 'Luxury market leader', '92% user retention'],
      metrics: [
        { label: 'Property Sales', value: '$50M+' },
        { label: 'User Retention', value: '92%' },
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['Real Estate', 'Flutter', '3D', 'AR', 'Luxury'],
      testimonial: {
        quote: 'The app is as premium as the properties we sell. The 3D tours and transitions create an unforgettable experience.',
        author: 'James Morrison',
        role: 'Founder',
      },
    },
    {
      title: 'Music Streaming App',
      client: 'BeatFlow',
      industry: 'Entertainment',
      description: 'Music streaming app with visualizations, smart playlists, and social features. Custom audio player with stunning animations.',
      challenge: 'Create a music app that competes with established players through superior design and unique features.',
      solution: 'Flutter app with custom audio visualizations, smooth animations, and real-time synchronized lyrics.',
      results: ['1M+ users', '50M+ songs streamed', 'App Store Editors Choice'],
      metrics: [
        { label: 'Users', value: '1M+' },
        { label: 'Songs Streamed', value: '50M+' },
      ],
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
      tags: ['Music', 'Flutter', 'Audio', 'Animations', 'Social'],
      testimonial: {
        quote: 'The audio visualizations and animations are absolutely beautiful. Our users share screenshots constantly - it is that good looking.',
        author: 'Alex Rivera',
        role: 'Product Lead',
      },
    },
    {
      title: 'Food Discovery App',
      client: 'TasteBuds',
      industry: 'Food & Dining',
      description: 'Restaurant discovery app with personalized recommendations, table reservations, and social dining features with beautiful UI animations.',
      challenge: 'Create a visually stunning food app that stands out in a crowded market with unique design and smooth interactions.',
      solution: 'Flutter app with custom animations, image-heavy optimized layouts, and AI-powered taste preference learning.',
      results: ['800K+ downloads', 'Featured on both stores', '4.8 star rating'],
      metrics: [
        { label: 'Downloads', value: '800K+' },
        { label: 'Rating', value: '4.8' },
      ],
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
      tags: ['Food', 'Flutter', 'Recommendations', 'Animations', 'Social'],
      testimonial: {
        quote: 'The app animations make browsing restaurants feel like a premium experience. Our engagement metrics are through the roof.',
        author: 'Michelle Torres',
        role: 'CEO',
      },
    },
  ],

  // Pricing
  pricing: {
    plans: [
      {
        name: 'Flutter MVP',
        description: 'Launch your beautiful app fast',
        price: '$25,000',
        priceNote: 'Starting price',
        features: [
          { name: 'iOS & Android apps', included: true },
          { name: 'Up to 12 screens', included: true },
          { name: 'Custom widget design', included: true },
          { name: 'Firebase backend', included: true },
          { name: 'Both store submissions', included: true },
          { name: 'Complex animations', included: false },
          { name: 'Advanced features', included: false },
        ],
        ctaText: 'Start MVP',
      },
      {
        name: 'Flutter Pro',
        description: 'Full-featured beautiful app',
        price: '$50,000',
        priceNote: 'Starting price',
        highlighted: true,
        badge: 'Most Popular',
        features: [
          { name: 'iOS & Android apps', included: true },
          { name: '15-25 screens', included: true },
          { name: 'Custom design system', included: true },
          { name: 'Custom animations', included: true },
          { name: 'Complex features', included: true },
          { name: 'Custom backend', included: true },
          { name: '90-day support', included: true },
        ],
        ctaText: 'Start Project',
      },
      {
        name: 'Flutter Enterprise',
        description: 'Complex multi-platform apps',
        price: 'Custom',
        priceNote: 'Based on scope',
        features: [
          { name: 'iOS, Android, Web, Desktop', included: true },
          { name: 'Unlimited screens', included: true },
          { name: 'Premium animations', included: true },
          { name: 'Enterprise backend', included: true },
          { name: 'Advanced integrations', included: true },
          { name: 'Dedicated team', included: true },
          { name: '12-month support', included: true },
        ],
        ctaText: 'Contact Sales',
      },
    ],
    customNote: 'All Flutter projects include custom widget development, both store submissions, and comprehensive testing.',
  },

  // Testimonials
  testimonials: [
    {
      quote: 'Flutter let us create exactly the UI we imagined. The animations and custom widgets make our app truly unique.',
      author: 'Lisa Park',
      role: 'CEO',
      company: 'WealthGrow',
      rating: 5,
      location: 'New York, NY',
    },
    {
      quote: 'The development speed with Flutter is incredible. Hot reload and the widget system made iteration so fast.',
      author: 'James Morrison',
      role: 'Founder',
      company: 'PremiumHomes',
      rating: 5,
      location: 'Los Angeles, CA',
    },
    {
      quote: 'Our app looks and performs like native on both platforms. Google featuring us was the ultimate validation.',
      author: 'Alex Rivera',
      role: 'Product Lead',
      company: 'BeatFlow',
      rating: 5,
      location: 'Austin, TX',
    },
  ],

  // FAQs
  faqs: [
    {
      question: 'How does Flutter compare to React Native?',
      answer: 'Flutter offers more UI control and better performance since it doesn\'t use native widgets or a JavaScript bridge. React Native has a larger ecosystem. Flutter is better for custom UIs and complex animations; React Native is better if you have an existing React web team.',
      category: 'Comparison',
    },
    {
      question: 'Is Flutter production-ready?',
      answer: 'Absolutely. Flutter is used by Google, Alibaba, BMW, and thousands of production apps. It has been stable since 2018 and is actively maintained by Google with regular updates.',
      category: 'Maturity',
    },
    {
      question: 'How difficult is finding Flutter developers?',
      answer: 'Flutter is one of the fastest-growing frameworks. While the talent pool is smaller than JavaScript, Dart is easy to learn and many developers transition quickly. We have expert Flutter developers ready.',
      category: 'Team',
    },
    {
      question: 'Can Flutter access native device features?',
      answer: 'Yes. Flutter has excellent platform channels for accessing native APIs. Camera, GPS, Bluetooth, biometrics, and more are fully accessible. The plugin ecosystem covers most common needs.',
      category: 'Features',
    },
    {
      question: 'How does Flutter performance compare to native?',
      answer: 'Flutter compiles to native ARM code with no JavaScript bridge, achieving near-native performance. For most apps, users cannot tell the difference. Complex UI and animations often perform better in Flutter.',
      category: 'Performance',
    },
    {
      question: 'Can we extend our Flutter app to web?',
      answer: 'Yes. Flutter web is production-ready. Many Flutter apps run on web, iOS, and Android from the same codebase. Web support is excellent for dashboards and admin panels.',
      category: 'Platforms',
    },
    {
      question: 'What is Hot Reload and why does it matter?',
      answer: 'Hot Reload instantly updates your app UI while preserving state. Changes appear in milliseconds instead of minutes. This dramatically speeds up development and enables rapid iteration.',
      category: 'Development',
    },
    {
      question: 'How long does Flutter development take?',
      answer: 'Flutter is typically 30-40% faster than native development. A cross-platform MVP takes 3-4 months. Full-featured apps take 4-6 months. Hot reload and widget reuse contribute to faster timelines.',
      category: 'Timeline',
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
      name: 'Mobile UI/UX Design',
      slug: 'mobile-ui-ux-design',
      description: 'User-centered mobile design',
      icon: 'Palette',
    },
  ],

  // SEO
  seo: {
    title: 'Flutter App Development Services | Beautiful Cross-Platform Apps',
    description: 'Expert Flutter development for stunning iOS and Android apps. Build beautiful, high-performance mobile applications with Google\'s revolutionary UI framework.',
    keywords: [
      'flutter development',
      'flutter app development',
      'flutter developers',
      'dart development',
      'cross-platform app',
      'flutter agency',
      'flutter consulting',
      'flutter mobile apps',
    ],
  },
};
