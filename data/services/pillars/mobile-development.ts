import { ServiceData } from '@/components/services/sections';

export const mobileDevelopmentData: ServiceData = {
  slug: 'mobile-development',
  name: 'Mobile App Development Services',
  tagline: 'Build Powerful Mobile Apps That Users Love',
  description: 'Custom mobile app development for iOS, Android, and cross-platform. We create high-performance, user-centric apps that drive engagement and deliver measurable business results.',
  category: 'Development',

  hero: {
    headline: 'Mobile App Development',
    subheadline: 'Apps That Users Can\'t Put Down',
    description: 'From concept to app store, we build native and cross-platform mobile applications that captivate users and drive business growth. React Native, Flutter, Swift, and Kotlin expertise for any platform.',
    keyFeatures: [
      'Native & cross-platform development',
      'UI/UX designed for mobile',
      'Offline-first architecture',
      'Push notifications & real-time features',
      'App Store optimization included',
    ],
    badges: ['300+ Apps Launched', 'iOS & Android', '4.8★ Average Rating'],
  },

  painPoints: [
    {
      icon: 'Clock',
      title: 'Long Development Timelines',
      description: 'Traditional native development takes months for each platform. Your competition is launching while you are still building.',
      stat: '9',
      statLabel: 'months average development time',
    },
    {
      icon: 'DollarSign',
      title: 'Double Development Costs',
      description: 'Building separate iOS and Android apps means paying twice - double the code, double the bugs, double the maintenance.',
      stat: '2x',
      statLabel: 'cost for separate native apps',
    },
    {
      icon: 'Users',
      title: 'Poor User Retention',
      description: '25% of apps are used only once. Bad UX, slow performance, and bugs drive users away before they become customers.',
      stat: '77%',
      statLabel: 'of users abandon apps after day 3',
    },
    {
      icon: 'TrendingDown',
      title: 'App Store Rejection',
      description: 'Rejected submissions mean delays and lost revenue. Poor guidelines compliance wastes weeks of development time.',
      stat: '40%',
      statLabel: 'of first submissions are rejected',
    },
    {
      icon: 'ShieldX',
      title: 'Security Vulnerabilities',
      description: 'Mobile apps are prime targets for hackers. Insecure data storage and transmission expose user data and your reputation.',
      stat: '75%',
      statLabel: 'of apps have security flaws',
    },
    {
      icon: 'AlertCircle',
      title: 'Inconsistent Updates',
      description: 'Maintaining two codebases means features ship at different times. Users get frustrated with platform inconsistencies.',
      stat: '60%',
      statLabel: 'slower feature rollouts',
    },
  ],

  solutions: [
    {
      icon: 'Smartphone',
      title: 'Cross-Platform Excellence',
      description: 'One codebase, two platforms. React Native and Flutter let us build beautiful, performant apps for iOS and Android simultaneously, cutting development time and costs in half.',
      highlights: [
        '95% code sharing',
        'Native performance',
        'Single team efficiency',
        'Faster updates',
      ],
    },
    {
      icon: 'Zap',
      title: 'Native-Like Performance',
      description: 'Our apps feel native because they use native components. 60fps animations, instant response times, and smooth scrolling create experiences users love.',
      highlights: [
        '60fps animations',
        'Native UI components',
        'Optimized rendering',
        'Memory efficiency',
      ],
    },
    {
      icon: 'Palette',
      title: 'Mobile-First Design',
      description: 'Every interaction is designed for touch. Gesture navigation, thumb-friendly layouts, and platform-specific design patterns create intuitive experiences.',
      highlights: [
        'Platform guidelines',
        'Gesture navigation',
        'Responsive layouts',
        'Accessibility built-in',
      ],
    },
    {
      icon: 'Cloud',
      title: 'Offline-First Architecture',
      description: 'Apps that work without internet. Local data storage, background sync, and smart caching ensure users can always access your app.',
      highlights: [
        'Local storage',
        'Background sync',
        'Conflict resolution',
        'Smart caching',
      ],
    },
    {
      icon: 'Shield',
      title: 'Enterprise Security',
      description: 'Bank-level security for sensitive data. Encrypted storage, secure authentication, certificate pinning, and regular security audits protect your users.',
      highlights: [
        'Data encryption',
        'Biometric auth',
        'Certificate pinning',
        'Security audits',
      ],
    },
    {
      icon: 'Rocket',
      title: 'App Store Success',
      description: 'We handle everything from submission to approval. ASO optimization, screenshot design, and compliance ensure successful launches.',
      highlights: [
        'ASO optimization',
        'Store listings',
        'Compliance review',
        'Launch support',
      ],
    },
  ],

  process: {
    steps: [
      {
        icon: 'MessageSquare',
        title: 'Discovery Workshop',
        description: 'Deep dive into your app concept, target users, and business goals. We define features, technical requirements, and success metrics.',
        duration: '1-2 weeks',
        deliverables: ['App specification', 'Feature roadmap', 'Technical architecture'],
      },
      {
        icon: 'Palette',
        title: 'UX/UI Design',
        description: 'Mobile-first design with platform-specific patterns. Interactive prototypes let you test the experience before writing code.',
        duration: '2-4 weeks',
        deliverables: ['User flows', 'UI design', 'Interactive prototype'],
      },
      {
        icon: 'Code',
        title: 'Agile Development',
        description: 'Two-week sprints with working builds. Test on real devices throughout development and provide feedback that shapes the product.',
        duration: '8-16 weeks',
        deliverables: ['Working app', 'API integrations', 'Admin dashboard'],
      },
      {
        icon: 'TestTube',
        title: 'Quality Assurance',
        description: 'Testing across hundreds of device configurations. Performance profiling, security audits, and user acceptance testing ensure quality.',
        duration: '2-3 weeks',
        deliverables: ['Test coverage', 'Performance report', 'Security audit'],
      },
      {
        icon: 'Rocket',
        title: 'App Store Launch',
        description: 'We handle submission, respond to review feedback, and ensure approval. ASO optimization maximizes visibility from day one.',
        duration: '1-2 weeks',
        deliverables: ['Store listings', 'Launch marketing', 'Analytics setup'],
      },
      {
        icon: 'HeartHandshake',
        title: 'Growth & Support',
        description: 'Post-launch analytics, user feedback analysis, and continuous improvement. Regular updates keep users engaged and happy.',
        duration: 'Ongoing',
        deliverables: ['Analytics reports', 'Update roadmap', 'Support coverage'],
      },
    ],
    totalDuration: '14-26 weeks',
  },

  benefits: [
    {
      icon: 'DollarSign',
      title: 'Reduced Costs',
      description: 'Cross-platform development cuts costs by building once for both platforms.',
      stat: '50',
      statSuffix: '%',
      statLabel: 'Lower development cost',
    },
    {
      icon: 'Clock',
      title: 'Faster Launch',
      description: 'Single codebase means faster development and simultaneous platform launches.',
      stat: '60',
      statSuffix: '%',
      statLabel: 'Faster time-to-market',
    },
    {
      icon: 'Users',
      title: 'Higher Retention',
      description: 'Beautiful UX and smooth performance keep users coming back.',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Better 30-day retention',
    },
    {
      icon: 'TrendingUp',
      title: 'More Downloads',
      description: 'ASO optimization and compelling store listings drive organic installs.',
      stat: '200',
      statSuffix: '%',
      statLabel: 'Average install increase',
    },
    {
      icon: 'Zap',
      title: 'Native Performance',
      description: '60fps animations and instant response times rival fully native apps.',
      stat: '60',
      statSuffix: 'fps',
      statLabel: 'Smooth animations',
    },
    {
      icon: 'Shield',
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security best practices protect user data.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'OWASP compliance',
    },
  ],

  techStack: [
    {
      name: 'Cross-Platform',
      technologies: [
        { name: 'React Native', icon: '⚛️', category: 'Cross-Platform', proficiency: 'expert' },
        { name: 'Flutter', icon: '💙', category: 'Cross-Platform', proficiency: 'expert' },
        { name: 'Expo', icon: '📱', category: 'Cross-Platform', proficiency: 'expert' },
      ],
    },
    {
      name: 'Native iOS',
      technologies: [
        { name: 'Swift', icon: '🍎', category: 'iOS', proficiency: 'advanced' },
        { name: 'SwiftUI', icon: '📐', category: 'iOS', proficiency: 'advanced' },
        { name: 'Xcode', icon: '🛠️', category: 'iOS', proficiency: 'expert' },
      ],
    },
    {
      name: 'Native Android',
      technologies: [
        { name: 'Kotlin', icon: '🤖', category: 'Android', proficiency: 'advanced' },
        { name: 'Jetpack Compose', icon: '🎨', category: 'Android', proficiency: 'advanced' },
        { name: 'Android Studio', icon: '🛠️', category: 'Android', proficiency: 'expert' },
      ],
    },
    {
      name: 'Backend & Services',
      technologies: [
        { name: 'Firebase', icon: '🔥', category: 'Backend', proficiency: 'expert' },
        { name: 'Node.js', icon: '🟢', category: 'Backend', proficiency: 'expert' },
        { name: 'GraphQL', icon: '◼️', category: 'Backend', proficiency: 'expert' },
        { name: 'AWS Amplify', icon: '☁️', category: 'Backend', proficiency: 'advanced' },
      ],
    },
  ],

  portfolio: [
    {
      title: 'Fitness Tracking App',
      client: 'FitLife Pro',
      industry: 'Health & Fitness',
      description: 'Built a comprehensive fitness app with workout tracking, nutrition logging, and social features. Achieved 500,000+ downloads in the first year.',
      results: [
        '500,000+ downloads in year one',
        '4.8 star rating on both stores',
        '45% daily active user rate',
        'Featured in App Store "Apps We Love"',
      ],
      metrics: [
        { label: 'Downloads', value: '500K+' },
        { label: 'Rating', value: '4.8★' },
        { label: 'DAU Rate', value: '45%' },
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['React Native', 'HealthKit', 'Firebase', 'Social'],
    },
    {
      title: 'Food Delivery Platform',
      client: 'QuickBite',
      industry: 'Food & Beverage',
      description: 'Full-featured food delivery app with real-time tracking, in-app payments, and restaurant management dashboard.',
      results: [
        'Processing $2M+ monthly orders',
        '3 minute average delivery match',
        'Real-time driver tracking',
        '98% order accuracy rate',
      ],
      metrics: [
        { label: 'Monthly GMV', value: '$2M+' },
        { label: 'Accuracy', value: '98%' },
        { label: 'Match Time', value: '3 min' },
      ],
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=600&fit=crop',
      tags: ['Flutter', 'Google Maps', 'Stripe', 'Real-time'],
    },
    {
      title: 'Banking & Finance App',
      client: 'SecureBank Digital',
      industry: 'Financial Services',
      description: 'Developed a secure mobile banking application with biometric authentication, real-time transactions, and investment portfolio tracking for a leading regional bank.',
      results: [
        '250,000+ active users',
        '99.99% uptime since launch',
        '60% reduction in branch visits',
        'SOC 2 Type II certified',
      ],
      metrics: [
        { label: 'Active Users', value: '250K+' },
        { label: 'Uptime', value: '99.99%' },
        { label: 'Transactions', value: '$50M+/mo' },
      ],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      tags: ['React Native', 'Biometrics', 'Encryption', 'Plaid'],
    },
    {
      title: 'E-Commerce Marketplace App',
      client: 'ShopLocal',
      industry: 'Retail & E-Commerce',
      description: 'Built a feature-rich marketplace app connecting local artisans with customers, featuring AR product preview, in-app messaging, and seamless checkout experience.',
      results: [
        '100,000+ downloads in 6 months',
        '15,000+ active sellers onboarded',
        '35% higher conversion than web',
        'Average order value increased by 40%',
      ],
      metrics: [
        { label: 'Downloads', value: '100K+' },
        { label: 'Sellers', value: '15K+' },
        { label: 'Conversion', value: '+35%' },
      ],
      image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&h=600&fit=crop',
      tags: ['Flutter', 'AR Kit', 'Stripe', 'Firebase'],
    },
  ],

  pricing: {
    plans: [
      {
        name: 'MVP',
        description: 'Launch your app idea quickly',
        price: '$25,000',
        priceNote: 'Starting price',
        features: [
          { name: 'Single platform (iOS or Android)', included: true },
          { name: 'Core features (5-7 screens)', included: true },
          { name: 'Basic backend', included: true },
          { name: 'Push notifications', included: true },
          { name: 'App store submission', included: true },
          { name: '30-day support', included: true },
          { name: 'Cross-platform', included: false },
          { name: 'Advanced features', included: false },
        ],
        ctaText: 'Start MVP',
      },
      {
        name: 'Pro',
        description: 'Full-featured cross-platform app',
        price: '$50,000',
        priceNote: 'Starting price',
        features: [
          { name: 'iOS & Android (cross-platform)', included: true },
          { name: 'Full features (15-20 screens)', included: true },
          { name: 'Scalable backend', included: true },
          { name: 'Push notifications', included: true },
          { name: 'Both store submissions', included: true },
          { name: '90-day support', included: true },
          { name: 'Analytics dashboard', included: true },
          { name: 'Admin panel', included: true },
        ],
        highlighted: true,
        badge: 'Best Value',
        ctaText: 'Get Started',
      },
      {
        name: 'Enterprise',
        description: 'Complex apps with custom needs',
        price: 'Custom',
        priceNote: 'Contact for pricing',
        features: [
          { name: 'All platforms', included: true },
          { name: 'Unlimited features', included: true },
          { name: 'Enterprise backend', included: true },
          { name: 'Advanced integrations', included: true },
          { name: 'Priority submissions', included: true },
          { name: '12-month support', included: true },
          { name: 'Dedicated team', included: true },
          { name: 'SLA guarantee', included: true },
        ],
        ctaText: 'Contact Sales',
      },
    ],
    customNote: 'All plans include UI/UX design, testing, and deployment. Enterprise plans include custom SLAs and dedicated resources.',
  },

  testimonials: [
    {
      quote: 'Our app went from concept to 500,000 downloads in under a year. The Web On Dev team understood exactly what our users needed and delivered an experience that keeps them coming back.',
      author: 'Alex Thompson',
      role: 'Founder',
      company: 'FitLife Pro',
      rating: 5,
      location: 'Los Angeles, CA',
    },
    {
      quote: 'Building for both platforms used to be a nightmare. With their cross-platform approach, we launched on iOS and Android simultaneously and cut our costs in half.',
      author: 'Maria Santos',
      role: 'CTO',
      company: 'QuickBite',
      rating: 5,
      location: 'Miami, FL',
    },
    {
      quote: 'The attention to mobile UX details is what sets them apart. Our app feels native on both platforms and users love the smooth experience.',
      author: 'James Wilson',
      role: 'Product Manager',
      company: 'FinanceApp',
      rating: 5,
      location: 'Seattle, WA',
    },
  ],

  faqs: [
    {
      question: 'Should I build native or cross-platform?',
      answer: 'For most apps, cross-platform (React Native or Flutter) is the best choice. You get native performance with 50% lower costs and faster development. We recommend native only for apps requiring cutting-edge platform-specific features like advanced AR or specific hardware integrations.',
      category: 'Technical',
    },
    {
      question: 'How long does mobile app development take?',
      answer: 'Timeline depends on complexity. A simple MVP takes 3-4 months, a full-featured cross-platform app takes 4-6 months, and complex enterprise apps can take 6-12 months. We provide detailed timelines during discovery.',
      category: 'Timeline',
    },
    {
      question: 'What does app development cost?',
      answer: 'Mobile app development starts at $25,000 for simple MVPs. Full-featured cross-platform apps typically range from $50,000-$150,000. Enterprise apps with complex integrations can exceed $200,000. We provide detailed quotes after understanding your requirements.',
      category: 'Pricing',
    },
    {
      question: 'Do you handle app store submission?',
      answer: 'Yes, we handle the entire submission process for both Apple App Store and Google Play Store. This includes preparing store listings, screenshots, compliance review, and responding to any reviewer feedback. ASO optimization is included.',
      category: 'Process',
    },
    {
      question: 'Can you update my existing app?',
      answer: 'Yes, we work with existing codebases for updates, redesigns, and new features. We can also migrate legacy apps to modern cross-platform frameworks to reduce ongoing maintenance costs.',
      category: 'Services',
    },
    {
      question: 'How do you ensure app security?',
      answer: 'We follow OWASP mobile security guidelines including encrypted data storage, secure API communication, certificate pinning, and biometric authentication. All apps undergo security audits before launch.',
      category: 'Security',
    },
  ],

  relatedServices: [
    {
      name: 'React Native Development',
      slug: 'react-native-development',
      description: 'Cross-platform apps with React Native',
      icon: 'Smartphone',
    },
    {
      name: 'iOS Development',
      slug: 'ios-app-development',
      description: 'Native iOS apps with Swift',
      icon: 'Smartphone',
    },
    {
      name: 'Android Development',
      slug: 'android-app-development',
      description: 'Native Android apps with Kotlin',
      icon: 'Smartphone',
    },
    {
      name: 'UI/UX Design',
      slug: 'ui-ux-design',
      description: 'Mobile-first design',
      icon: 'Palette',
    },
    {
      name: 'App Maintenance',
      slug: 'mobile-app-maintenance',
      description: 'Ongoing app support',
      icon: 'Settings',
    },
  ],

  seo: {
    title: 'Mobile App Development Services | iOS & Android Apps',
    description: 'Professional mobile app development for iOS and Android. React Native, Flutter, and native development. From MVP to enterprise apps. Get a free consultation.',
    keywords: [
      'mobile app development',
      'iOS app development',
      'Android app development',
      'React Native development',
      'Flutter development',
      'cross-platform app',
      'mobile app company',
      'app development services',
    ],
  },
};

export default mobileDevelopmentData;
