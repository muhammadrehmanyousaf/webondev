import { ServiceData } from '@/components/services/sections';

export const hybridAppDevelopmentData: ServiceData = {
  // Basic Info
  slug: 'hybrid-app-development',
  name: 'Hybrid App Development Services',
  tagline: 'Web Technologies, Native Distribution',
  description: 'Expert hybrid app development using web technologies wrapped for native distribution. We build cost-effective mobile apps using Ionic, Capacitor, and web frameworks that work across iOS and Android.',
  category: 'Mobile Development',

  // Hero Section
  hero: {
    headline: 'Hybrid App Development',
    subheadline: 'Web Skills, Native Apps',
    description: 'Build mobile apps using web technologies you already know. Hybrid development with Ionic, Capacitor, and modern web frameworks delivers native-wrapped applications at a fraction of native development costs.',
    keyFeatures: [
      'HTML, CSS, JavaScript based',
      'Single codebase deployment',
      'Native device access',
      'Web developer friendly',
      'Rapid prototyping',
    ],
    badges: ['Web-Powered', '200+ Hybrid Apps', '70% Cost Savings'],
  },

  // Pain Points
  painPoints: [
    {
      icon: 'DollarSign',
      title: 'Native Development Costs',
      description: 'Native app development requires specialized skills and higher budgets. Many projects don\'t have the budget for full native.',
      stat: '3x',
      statLabel: 'higher cost for native',
    },
    {
      icon: 'Users',
      title: 'Limited Web Team Resources',
      description: 'Your web developers can\'t contribute to native apps. You need separate mobile specialists.',
      stat: '50%',
      statLabel: 'of teams lack mobile skills',
    },
    {
      icon: 'Clock',
      title: 'Extended Timelines',
      description: 'Building native apps for both platforms takes months longer than web development.',
      stat: '2x',
      statLabel: 'longer development time',
    },
    {
      icon: 'RefreshCw',
      title: 'Separate Web & Mobile',
      description: 'Maintaining separate web and mobile codebases means duplicate work and inconsistent experiences.',
      stat: '40%',
      statLabel: 'duplicate effort',
    },
    {
      icon: 'Code',
      title: 'Learning Curve',
      description: 'Swift, Kotlin, and native frameworks require significant learning investment for web developers.',
      stat: '6-12',
      statLabel: 'months to learn native',
    },
    {
      icon: 'Wrench',
      title: 'Maintenance Burden',
      description: 'Separate codebases require separate maintenance cycles and testing processes.',
      stat: '3x',
      statLabel: 'maintenance overhead',
    },
  ],

  // Solutions/Features
  solutions: [
    {
      icon: 'Globe',
      title: 'Web Technologies',
      description: 'Build with familiar HTML, CSS, and JavaScript. Your web developers can build mobile apps immediately without learning new languages.',
      highlights: [
        'HTML5 & CSS3',
        'JavaScript/TypeScript',
        'Angular, React, Vue',
        'Existing web skills',
      ],
    },
    {
      icon: 'Smartphone',
      title: 'Native Capabilities',
      description: 'Access device features like camera, GPS, push notifications, and storage through native plugins. True app store distribution.',
      highlights: [
        'Camera & GPS',
        'Push notifications',
        'File system access',
        'Biometric auth',
      ],
    },
    {
      icon: 'Layers',
      title: 'Ionic Framework',
      description: 'Beautiful, mobile-optimized UI components that look native on both platforms. Extensive component library included.',
      highlights: [
        'Pre-built components',
        'Platform styling',
        'Accessible by default',
        'Animation support',
      ],
    },
    {
      icon: 'Plug',
      title: 'Capacitor Runtime',
      description: 'Modern native runtime that bridges web code to native capabilities. Drop-in native plugins for any functionality.',
      highlights: [
        'Plugin ecosystem',
        'Native bridge',
        'Web view performance',
        'Easy integration',
      ],
    },
    {
      icon: 'Share2',
      title: 'Code Sharing',
      description: 'Share code between web, iOS, and Android. Build once, deploy everywhere with maximum code reuse.',
      highlights: [
        'Web + mobile sharing',
        'Single codebase',
        'Consistent logic',
        'Easier maintenance',
      ],
    },
    {
      icon: 'Zap',
      title: 'Rapid Development',
      description: 'Iterate quickly with web development speed. Hot reload, browser debugging, and fast build times.',
      highlights: [
        'Fast iterations',
        'Browser debugging',
        'Hot reload',
        'Quick prototyping',
      ],
    },
  ],

  // Process Steps
  process: {
    steps: [
      {
        icon: 'MessageSquare',
        title: 'Requirements Analysis',
        description: 'Assess your app needs and determine if hybrid is the right approach. Some apps benefit more from native.',
        duration: '1 week',
        deliverables: ['Feasibility assessment', 'Technology recommendation', 'Feature plan'],
      },
      {
        icon: 'Palette',
        title: 'UI/UX Design',
        description: 'Design interfaces using Ionic components and platform conventions. Create responsive layouts for all devices.',
        duration: '1-2 weeks',
        deliverables: ['UI designs', 'Component selection', 'Responsive layouts'],
      },
      {
        icon: 'Code',
        title: 'Web Development',
        description: 'Build the app using your chosen web framework (Angular, React, Vue). Implement features and business logic.',
        duration: '3-6 weeks',
        deliverables: ['Working web app', 'Feature implementation', 'API integration'],
      },
      {
        icon: 'Plug',
        title: 'Native Integration',
        description: 'Add Capacitor native plugins for device features. Configure iOS and Android projects.',
        duration: '1-2 weeks',
        deliverables: ['Native plugins', 'Platform configuration', 'Device features'],
      },
      {
        icon: 'TestTube',
        title: 'Testing & QA',
        description: 'Test on real devices across platforms. Ensure consistent behavior and performance.',
        duration: '1-2 weeks',
        deliverables: ['Device testing', 'Bug fixes', 'Performance optimization'],
      },
      {
        icon: 'Rocket',
        title: 'Store Deployment',
        description: 'Package and submit to App Store and Play Store. Handle review process and launch.',
        duration: '1 week',
        deliverables: ['App packages', 'Store listings', 'Live apps'],
      },
    ],
    totalDuration: '8-14 weeks',
  },

  // Benefits
  benefits: [
    {
      icon: 'DollarSign',
      title: 'Significant Cost Savings',
      description: 'Build iOS and Android apps for a fraction of native development costs.',
      stat: '70',
      statSuffix: '%',
      statLabel: 'Cost Reduction',
    },
    {
      icon: 'Clock',
      title: 'Faster Development',
      description: 'Web development speed means faster time to market. Ship in weeks, not months.',
      stat: '50',
      statSuffix: '%',
      statLabel: 'Faster Delivery',
    },
    {
      icon: 'Users',
      title: 'Existing Team',
      description: 'Your web developers can build mobile apps. No new hiring needed.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Team Utilization',
    },
    {
      icon: 'Share2',
      title: 'Code Reuse',
      description: 'Share code with your web app. One codebase for web and mobile.',
      stat: '80',
      statSuffix: '%+',
      statLabel: 'Code Sharing',
    },
    {
      icon: 'RefreshCw',
      title: 'Easy Updates',
      description: 'Update app content without store review using web deployment.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Instant Updates',
    },
    {
      icon: 'Wrench',
      title: 'Simple Maintenance',
      description: 'Single codebase reduces maintenance burden significantly.',
      stat: '60',
      statSuffix: '%',
      statLabel: 'Less Maintenance',
    },
  ],

  // Tech Stack
  techStack: [
    {
      name: 'Hybrid Frameworks',
      description: 'Core hybrid development tools',
      technologies: [
        { name: 'Ionic Framework', icon: 'ionic', category: 'UI', proficiency: 'expert' },
        { name: 'Capacitor', icon: 'capacitor', category: 'Runtime', proficiency: 'expert' },
        { name: 'Cordova', icon: 'cordova', category: 'Runtime', proficiency: 'advanced' },
        { name: 'Electron', icon: 'electron', category: 'Desktop', proficiency: 'advanced' },
      ],
    },
    {
      name: 'Web Frameworks',
      description: 'Frontend application frameworks',
      technologies: [
        { name: 'Angular', icon: 'angular', category: 'Framework', proficiency: 'expert' },
        { name: 'React', icon: 'react', category: 'Framework', proficiency: 'expert' },
        { name: 'Vue.js', icon: 'vue', category: 'Framework', proficiency: 'advanced' },
        { name: 'TypeScript', icon: 'typescript', category: 'Language', proficiency: 'expert' },
      ],
    },
    {
      name: 'Native Plugins',
      description: 'Device feature access',
      technologies: [
        { name: 'Camera', icon: 'camera', category: 'Plugin', proficiency: 'expert' },
        { name: 'Geolocation', icon: 'location', category: 'Plugin', proficiency: 'expert' },
        { name: 'Push Notifications', icon: 'bell', category: 'Plugin', proficiency: 'expert' },
        { name: 'Storage', icon: 'database', category: 'Plugin', proficiency: 'expert' },
      ],
    },
    {
      name: 'Backend & Tools',
      description: 'Backend integration and development tools',
      technologies: [
        { name: 'Firebase', icon: 'firebase', category: 'Backend', proficiency: 'expert' },
        { name: 'REST APIs', icon: 'api', category: 'Integration', proficiency: 'expert' },
        { name: 'Appflow', icon: 'appflow', category: 'CI/CD', proficiency: 'advanced' },
        { name: 'VS Code', icon: 'vscode', category: 'IDE', proficiency: 'expert' },
      ],
    },
  ],

  // Portfolio
  portfolio: [
    {
      title: 'Employee Portal App',
      client: 'GlobalCorp',
      industry: 'Enterprise',
      description: 'Internal employee app with timesheet management, HR resources, company directory, and push notifications.',
      challenge: 'Build an internal app quickly without a mobile development team, leveraging existing Angular expertise.',
      solution: 'Ionic/Angular hybrid app with Capacitor for native features. Shared code with existing web portal.',
      results: ['10K+ employees', 'Deployed in 8 weeks', '90% adoption rate'],
      metrics: [
        { label: 'Users', value: '10K+' },
        { label: 'Development Time', value: '8 weeks' },
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['Enterprise', 'Ionic', 'Angular', 'Capacitor', 'HR'],
      testimonial: {
        quote: 'We went from idea to app store in 8 weeks using our existing web team. No native developers needed.',
        author: 'Tom Bradley',
        role: 'IT Director',
      },
    },
    {
      title: 'Event Management App',
      client: 'EventPro',
      industry: 'Events',
      description: 'Conference app with schedules, speaker profiles, networking, and QR-based check-in.',
      challenge: 'Create a feature-rich event app on a startup budget with quick turnaround for upcoming conferences.',
      solution: 'Ionic/React hybrid app with offline support, QR scanning, and real-time agenda updates.',
      results: ['50K+ event attendees', '40% cost savings', '4.5 star rating'],
      metrics: [
        { label: 'Attendees', value: '50K+' },
        { label: 'Cost Savings', value: '40%' },
      ],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      tags: ['Events', 'Ionic', 'React', 'QR', 'Offline'],
      testimonial: {
        quote: 'The hybrid approach saved us half the budget while delivering all the features we needed for our conferences.',
        author: 'Sarah Kim',
        role: 'CEO',
      },
    },
    {
      title: 'Field Service App',
      client: 'ServiceTech',
      industry: 'Field Service',
      description: 'Technician app with work orders, GPS tracking, photo documentation, and offline sync.',
      challenge: 'Build a field service app that works offline in areas with poor connectivity.',
      solution: 'Ionic app with robust offline storage, background sync, and camera integration for service documentation.',
      results: ['500+ technicians', 'Full offline support', '30% productivity gain'],
      metrics: [
        { label: 'Technicians', value: '500+' },
        { label: 'Productivity Gain', value: '30%' },
      ],
      image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&h=600&fit=crop',
      tags: ['Field Service', 'Ionic', 'Offline', 'GPS', 'Camera'],
      testimonial: {
        quote: 'The offline capability was crucial for our technicians in the field. It works perfectly even with no signal.',
        author: 'Mike Johnson',
        role: 'Operations Manager',
      },
    },
    {
      title: 'Restaurant Ordering App',
      client: 'DineIn',
      industry: 'Food & Beverage',
      description: 'Customer-facing ordering app with menu browsing, table-side ordering, payment processing, and loyalty rewards.',
      challenge: 'Create a branded ordering experience for a restaurant chain that integrates with existing POS systems.',
      solution: 'Ionic/Vue hybrid app with custom branding, secure payment integration, and real-time order status updates.',
      results: ['200+ restaurant locations', '25% order value increase', '4.6 star rating'],
      metrics: [
        { label: 'Locations', value: '200+' },
        { label: 'Order Value', value: '+25%' },
      ],
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
      tags: ['Restaurant', 'Ionic', 'Vue', 'Payments', 'POS'],
      testimonial: {
        quote: 'The app seamlessly integrates with our POS and has significantly increased average order values through smart upselling.',
        author: 'Carlos Rodriguez',
        role: 'VP Operations',
      },
    },
  ],

  // Pricing
  pricing: {
    plans: [
      {
        name: 'Hybrid Starter',
        description: 'Basic hybrid mobile app',
        price: '$12,000',
        priceNote: 'Starting price',
        features: [
          { name: 'iOS & Android apps', included: true },
          { name: 'Up to 8 screens', included: true },
          { name: 'Basic native features', included: true },
          { name: 'Firebase backend', included: true },
          { name: 'Both store submissions', included: true },
          { name: 'Offline support', included: false },
          { name: 'Complex integrations', included: false },
        ],
        ctaText: 'Start Project',
      },
      {
        name: 'Hybrid Professional',
        description: 'Full-featured hybrid app',
        price: '$25,000',
        priceNote: 'Starting price',
        highlighted: true,
        badge: 'Best Value',
        features: [
          { name: 'iOS & Android apps', included: true },
          { name: '10-15 screens', included: true },
          { name: 'Full native features', included: true },
          { name: 'Custom backend', included: true },
          { name: 'Offline capability', included: true },
          { name: 'Push notifications', included: true },
          { name: '60-day support', included: true },
        ],
        ctaText: 'Start Project',
      },
      {
        name: 'Hybrid Enterprise',
        description: 'Complex enterprise hybrid apps',
        price: 'Custom',
        priceNote: 'Based on scope',
        features: [
          { name: 'Full platform support', included: true },
          { name: 'Unlimited screens', included: true },
          { name: 'Enterprise integrations', included: true },
          { name: 'Custom native plugins', included: true },
          { name: 'Advanced offline sync', included: true },
          { name: 'Web app sharing', included: true },
          { name: '12-month support', included: true },
        ],
        ctaText: 'Contact Sales',
      },
    ],
    customNote: 'Hybrid apps are ideal for internal tools, MVPs, and content apps. For performance-critical apps, consider native or cross-platform alternatives.',
  },

  // Testimonials
  testimonials: [
    {
      quote: 'Our web team built both mobile apps in 8 weeks. Hybrid was the perfect choice for our internal tool.',
      author: 'Tom Bradley',
      role: 'IT Director',
      company: 'GlobalCorp',
      rating: 5,
      location: 'Chicago, IL',
    },
    {
      quote: 'The cost savings allowed us to invest in features we couldn\'t have afforded with native development.',
      author: 'Sarah Kim',
      role: 'CEO',
      company: 'EventPro',
      rating: 5,
      location: 'San Francisco, CA',
    },
    {
      quote: 'Sharing code with our web portal cut maintenance in half. Updates deploy everywhere at once.',
      author: 'Mike Johnson',
      role: 'Operations Manager',
      company: 'ServiceTech',
      rating: 5,
      location: 'Houston, TX',
    },
  ],

  // FAQs
  faqs: [
    {
      question: 'When should I choose hybrid over native?',
      answer: 'Hybrid is ideal for content apps, internal tools, MVPs, and apps where time-to-market is critical. Choose native when you need maximum performance, complex animations, or deep platform integration.',
      category: 'Strategy',
    },
    {
      question: 'How does hybrid performance compare to native?',
      answer: 'Modern hybrid apps perform well for most use cases. The web view adds a small overhead, but apps like Instagram, Twitter, and Uber use hybrid components. For graphics-intensive games or complex animations, native is better.',
      category: 'Performance',
    },
    {
      question: 'Can hybrid apps access device features?',
      answer: 'Yes. Capacitor and Cordova provide plugins for camera, GPS, push notifications, storage, biometrics, and more. Most device features are accessible. For unusual hardware, custom native plugins can be written.',
      category: 'Features',
    },
    {
      question: 'Will users know it\'s a hybrid app?',
      answer: 'Well-built hybrid apps are indistinguishable from native for most users. Ionic provides platform-specific styling automatically. Performance optimization ensures smooth interactions.',
      category: 'UX',
    },
    {
      question: 'Can we share code with our web app?',
      answer: 'Yes, this is a major hybrid benefit. Business logic, services, and even UI components can be shared between web and mobile. The same Angular/React/Vue code runs everywhere.',
      category: 'Development',
    },
    {
      question: 'How fast is hybrid app development?',
      answer: 'Hybrid apps typically take 50% less time than native. Your existing web team can start immediately. Simple apps can launch in 6-8 weeks, complex apps in 10-14 weeks.',
      category: 'Timeline',
    },
    {
      question: 'Are hybrid apps approved for app stores?',
      answer: 'Yes. Hybrid apps are approved daily on both App Store and Play Store. They are treated the same as native apps. Many top apps use hybrid components.',
      category: 'Distribution',
    },
    {
      question: 'What about app updates?',
      answer: 'Web content can be updated instantly without store review. Native code changes require store approval. This hybrid update model is faster than pure native.',
      category: 'Maintenance',
    },
  ],

  // Related Services
  relatedServices: [
    {
      name: 'React Native Development',
      slug: 'react-native-development',
      description: 'Higher performance cross-platform',
      icon: 'Smartphone',
    },
    {
      name: 'Flutter Development',
      slug: 'flutter-development',
      description: 'Beautiful cross-platform apps',
      icon: 'Smartphone',
    },
    {
      name: 'Progressive Web Apps',
      slug: 'progressive-web-apps',
      description: 'Web apps with app-like features',
      icon: 'Globe',
    },
    {
      name: 'Custom Web Development',
      slug: 'custom-web-development',
      description: 'Full-stack web development',
      icon: 'Code',
    },
  ],

  // SEO
  seo: {
    title: 'Hybrid App Development Services | Ionic & Capacitor Apps',
    description: 'Expert hybrid app development with Ionic and Capacitor. Build iOS and Android apps using web technologies. Cost-effective mobile app development for businesses.',
    keywords: [
      'hybrid app development',
      'ionic app development',
      'capacitor app development',
      'cordova app development',
      'hybrid mobile app',
      'web to mobile app',
      'cross-platform app',
      'phonegap alternative',
    ],
  },
};
