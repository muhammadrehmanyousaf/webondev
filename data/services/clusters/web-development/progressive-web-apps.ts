import { ServiceData } from '@/components/services/sections';
export const progressiveWebAppsData: ServiceData = {
  name: 'Progressive Web Apps',
  slug: 'progressive-web-apps',
  tagline: 'Professional Development Services',
  category: 'Web Development',
  description: 'Build app-like experiences that work everywhere with Progressive Web Apps. Combine the reach of the web with the power of native apps for lightning-fast, installable, offline-capable applications.',
  hero: {
    headline: 'Progressive Web App Development',
    subheadline: 'The Best of Web and Native Apps Combined',
    description: 'Deliver app-like experiences without the app store. PWAs load instantly, work offline, send push notifications, and install on any device. Get the engagement of native apps with the reach and cost-effectiveness of the web.',
    keyFeatures: [
      'Offline Capable',
      'Push Notifications',
      'Installable',
      'Lightning Fast'
    ],
    badges: ['Google Lighthouse Certified', '100+ PWAs Built', '90+ Performance Score']
  },
  painPoints: [
    {
      icon: 'Download',
      title: 'App Store Friction',
      description: 'Users hesitate to download apps, with 70%+ dropping off at the app store install prompt.',
      stat: '70%',
      statLabel: 'Drop off at install'
    },
    {
      icon: 'DollarSign',
      title: 'Expensive App Development',
      description: 'Building separate iOS and Android apps doubles development costs and maintenance burden.',
      stat: '2x',
      statLabel: 'Development cost'
    },
    {
      icon: 'WifiOff',
      title: 'Offline Failures',
      description: 'Traditional websites completely fail without internet, losing users in low-connectivity areas.',
      stat: '40%',
      statLabel: 'Users on poor connections'
    },
    {
      icon: 'Bell',
      title: 'No Re-engagement',
      description: 'Without push notifications, you cannot reach users after they leave your website.',
      stat: '65%',
      statLabel: 'Higher engagement with push'
    },
    {
      icon: 'Gauge',
      title: 'Slow Page Loads',
      description: 'Heavy websites frustrate mobile users, with 53% abandoning sites that take over 3 seconds.',
      stat: '53%',
      statLabel: 'Bounce after 3s'
    },
    {
      icon: 'Smartphone',
      title: 'Poor Mobile Experience',
      description: 'Responsive sites still feel like websites, not the native app experience users expect.',
      stat: '90%',
      statLabel: 'Prefer app-like feel'
    }
  ],
  solutions: [
    {
      icon: 'Zap',
      title: 'Instant Loading',
      description: 'Service workers cache critical resources for sub-second loads even on slow networks.',
      highlights: ['Service Workers', 'Smart Caching', 'Lazy Loading', 'Code Splitting']
    },
    {
      icon: 'WifiOff',
      title: 'Offline Functionality',
      description: 'Keep your app working without internet using intelligent offline storage and sync.',
      highlights: ['Offline Mode', 'Background Sync', 'IndexedDB Storage', 'Conflict Resolution']
    },
    {
      icon: 'Download',
      title: 'Easy Installation',
      description: 'Users can add your PWA to their home screen instantly without app store hurdles.',
      highlights: ['Add to Home Screen', 'No App Store', 'Auto Updates', 'One-tap Install']
    },
    {
      icon: 'Bell',
      title: 'Push Notifications',
      description: 'Re-engage users with timely, relevant notifications even when they are not on your site.',
      highlights: ['Web Push', 'Rich Notifications', 'Action Buttons', 'Silent Sync']
    },
    {
      icon: 'Smartphone',
      title: 'Native-like UX',
      description: 'Full-screen experience with smooth animations and gestures that feel like native apps.',
      highlights: ['Full Screen Mode', 'Smooth Animations', 'Touch Gestures', 'Native UI Patterns']
    },
    {
      icon: 'Shield',
      title: 'Secure by Default',
      description: 'PWAs require HTTPS, protecting user data and enabling advanced features.',
      highlights: ['HTTPS Required', 'Secure Context', 'Content Security', 'Privacy First']
    }
  ],
  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Assessment & Strategy',
        description: 'We analyze your current web presence and define the PWA features that will deliver the most impact.',
        duration: '1 week',
        deliverables: ['PWA Audit', 'Feature Prioritization', 'Technical Strategy']
      },
      {
        icon: 'Layout',
        title: 'App Shell Design',
        description: 'Design the app shell architecture for instant loading and native-like navigation.',
        duration: '1-2 weeks',
        deliverables: ['App Shell Design', 'UI Components', 'Offline UX']
      },
      {
        icon: 'Code',
        title: 'PWA Development',
        description: 'Build your PWA with service workers, manifest, offline storage, and push notifications.',
        duration: '3-6 weeks',
        deliverables: ['PWA Implementation', 'Service Workers', 'Offline Functionality']
      },
      {
        icon: 'Bell',
        title: 'Notification System',
        description: 'Implement push notification infrastructure with targeting and analytics.',
        duration: '1 week',
        deliverables: ['Push Setup', 'Notification Templates', 'Analytics Integration']
      },
      {
        icon: 'TestTube',
        title: 'Testing & Optimization',
        description: 'Test across devices, browsers, and network conditions to ensure flawless performance.',
        duration: '1 week',
        deliverables: ['Lighthouse Audit', 'Cross-browser Testing', 'Performance Report']
      },
      {
        icon: 'Rocket',
        title: 'Launch & Monitor',
        description: 'Deploy your PWA and continuously monitor performance and user engagement.',
        duration: 'Ongoing',
        deliverables: ['Production Deployment', 'Analytics Dashboard', 'Optimization Plan']
      }
    ],
    totalDuration: '8-12 weeks'
  },
  benefits: [
    {
      icon: 'Zap',
      title: 'Lightning Performance',
      description: 'PWAs load up to 10x faster than traditional websites thanks to aggressive caching strategies.',
      stat: '10x',
      statSuffix: '',
      statLabel: 'Faster Loading'
    },
    {
      icon: 'TrendingUp',
      title: 'Higher Engagement',
      description: 'Push notifications and home screen presence increase return visits dramatically.',
      stat: '137%',
      statSuffix: '',
      statLabel: 'More Engagement'
    },
    {
      icon: 'DollarSign',
      title: 'Lower Costs',
      description: 'One codebase serves all platforms, eliminating duplicate iOS/Android development.',
      stat: '50%',
      statSuffix: '',
      statLabel: 'Cost Savings'
    },
    {
      icon: 'Download',
      title: 'Higher Conversions',
      description: 'Instant install without app store friction converts more users into engaged customers.',
      stat: '68%',
      statSuffix: '',
      statLabel: 'More Installs'
    },
    {
      icon: 'Globe',
      title: 'Universal Reach',
      description: 'PWAs work on any device with a browser, from phones to tablets to desktops.',
      stat: '100%',
      statSuffix: '',
      statLabel: 'Browser Coverage'
    },
    {
      icon: 'RefreshCw',
      title: 'Automatic Updates',
      description: 'Updates deploy instantly without user action, unlike app store approval processes.',
      stat: '0',
      statSuffix: 'min',
      statLabel: 'Update Delay'
    }
  ],
  techStack: [
    {
      name: 'Core Technologies',
      description: 'Foundation of modern PWAs',
      technologies: [
        { name: 'Service Workers', icon: 'javascript', category: 'Core', proficiency: 'expert' },
        { name: 'Web App Manifest', icon: 'json', category: 'Core', proficiency: 'expert' },
        { name: 'IndexedDB', icon: 'database', category: 'Storage', proficiency: 'expert' },
        { name: 'Cache API', icon: 'server', category: 'Core', proficiency: 'expert' }
      ]
    },
    {
      name: 'Frontend Framework',
      description: 'Modern JavaScript frameworks with PWA support',
      technologies: [
        { name: 'Next.js', icon: 'nextjs', category: 'Framework', proficiency: 'expert' },
        { name: 'React', icon: 'react', category: 'Framework', proficiency: 'expert' },
        { name: 'Vue.js', icon: 'vue', category: 'Framework', proficiency: 'expert' },
        { name: 'Angular', icon: 'angular', category: 'Framework', proficiency: 'advanced' }
      ]
    },
    {
      name: 'PWA Tools',
      description: 'Specialized PWA development tools',
      technologies: [
        { name: 'Workbox', icon: 'google', category: 'Service Worker', proficiency: 'expert' },
        { name: 'Lighthouse', icon: 'google', category: 'Audit', proficiency: 'expert' },
        { name: 'PWA Builder', icon: 'microsoft', category: 'Tool', proficiency: 'advanced' },
        { name: 'Web Push', icon: 'bell', category: 'Notifications', proficiency: 'expert' }
      ]
    },
    {
      name: 'Backend & APIs',
      description: 'Server-side infrastructure',
      technologies: [
        { name: 'Node.js', icon: 'nodejs', category: 'Backend', proficiency: 'expert' },
        { name: 'Firebase', icon: 'firebase', category: 'Backend', proficiency: 'expert' },
        { name: 'OneSignal', icon: 'bell', category: 'Push', proficiency: 'expert' },
        { name: 'CloudFlare', icon: 'cloudflare', category: 'CDN', proficiency: 'expert' }
      ]
    }
  ],
  pricing: {
    plans: [
      {
        name: 'PWA Essentials',
        description: 'Convert your website to a basic PWA',
        price: '$5,000',
        priceNote: 'One-time payment',
        features: [
          { name: 'Service Worker Setup', included: true },
          { name: 'Web App Manifest', included: true },
          { name: 'Offline Page', included: true },
          { name: 'Add to Home Screen', included: true },
          { name: 'Basic Caching', included: true },
          { name: '30-Day Support', included: true },
          { name: 'Push Notifications', included: false },
          { name: 'Background Sync', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Full PWA',
        description: 'Complete PWA with all features',
        price: '$15,000',
        priceNote: 'One-time payment',
        badge: 'Most Popular',
        features: [
          { name: 'Advanced Service Workers', included: true },
          { name: 'Full Offline Support', included: true },
          { name: 'Push Notifications', included: true },
          { name: 'Background Sync', included: true },
          { name: 'IndexedDB Integration', included: true },
          { name: 'Performance Optimization', included: true },
          { name: '90-Day Support', included: true },
          { name: 'Analytics Dashboard', included: true }
        ],
        ctaText: 'Build My PWA',
        highlighted: true
      },
      {
        name: 'Enterprise PWA',
        description: 'Complex PWA with custom features',
        price: '$30,000+',
        priceNote: 'Starting price',
        features: [
          { name: 'Custom PWA Architecture', included: true },
          { name: 'Advanced Offline Sync', included: true },
          { name: 'Multi-platform Support', included: true },
          { name: 'Custom Push Infrastructure', included: true },
          { name: 'Third-party Integrations', included: true },
          { name: 'Enterprise Security', included: true },
          { name: '12-Month Support', included: true },
          { name: 'Performance SLA', included: true }
        ],
        ctaText: 'Contact Sales',
        highlighted: false
      }
    ],
    customNote: 'All PWAs include HTTPS setup, cross-browser testing, and Lighthouse optimization.'
  },
  portfolio: [
    {
      title: 'TravelWise Booking PWA',
      client: 'TravelWise Tours',
      industry: 'Travel & Tourism',
      description: 'Offline-capable travel booking app used by tourists in areas with poor connectivity.',
      challenge: 'Travelers often lose internet access while exploring, making traditional booking sites useless when they need them most.',
      solution: 'We built a PWA that caches itineraries, maps, and booking confirmations offline, with background sync when connectivity returns.',
      results: [
        '85% faster load times',
        '200% increase in bookings',
        '4.8 star user rating',
        '500K installs'
      ],
      metrics: [
        { label: 'Load Speed', value: '-85%' },
        { label: 'Bookings', value: '+200%' },
        { label: 'Installs', value: '500K' }
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['PWA', 'React', 'Service Workers', 'IndexedDB', 'Offline']
    },
    {
      title: 'NewsFlash Media PWA',
      client: 'NewsFlash Network',
      industry: 'Media & Publishing',
      description: 'News PWA with push notifications driving breaking news engagement.',
      challenge: 'NewsFlash needed to re-engage readers without the friction of app downloads or email signups.',
      solution: 'We built a PWA with intelligent push notifications, offline reading, and instant article loading that feels native.',
      results: [
        '3x more return visitors',
        '45% notification opt-in',
        '2s average load time',
        '1M+ subscribers'
      ],
      metrics: [
        { label: 'Return Visitors', value: '3x' },
        { label: 'Push Opt-in', value: '45%' },
        { label: 'Subscribers', value: '1M+' }
      ],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      tags: ['PWA', 'Next.js', 'Push Notifications', 'Workbox']
    },
    {
      title: 'FitTrack Workout PWA',
      client: 'FitTrack Health',
      industry: 'Health & Fitness',
      description: 'Fitness tracking PWA that works in gyms with poor WiFi or no connectivity.',
      challenge: 'Gym-goers needed to track workouts in basement gyms and remote areas where apps failed to sync.',
      solution: 'We created a PWA with robust offline workout logging, background sync, and push reminders that works everywhere.',
      results: [
        '100% offline functionality',
        '68% higher retention',
        '4.9 app store rating',
        '250K active users'
      ],
      metrics: [
        { label: 'Offline Coverage', value: '100%' },
        { label: 'Retention', value: '+68%' },
        { label: 'Active Users', value: '250K' }
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      tags: ['PWA', 'Vue.js', 'IndexedDB', 'Background Sync', 'Push']
    },
    {
      title: 'RetailPOS Point of Sale PWA',
      client: 'RetailPOS Systems',
      industry: 'Retail',
      description: 'Offline-first point of sale PWA for retail stores with unreliable internet connections.',
      challenge: 'Retail stores needed a POS system that could process sales even during internet outages.',
      solution: 'We developed a PWA with complete offline transaction processing, local inventory management, and seamless sync when online.',
      results: [
        '99.9% transaction success',
        '0 lost sales during outages',
        '3,000+ stores deployed',
        '60% cost savings vs native'
      ],
      metrics: [
        { label: 'Transaction Success', value: '99.9%' },
        { label: 'Stores Deployed', value: '3K+' },
        { label: 'Cost Savings', value: '60%' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['PWA', 'React', 'IndexedDB', 'Offline', 'Retail']
    }
  ],
  testimonials: [
    {
      quote: 'Our PWA gets 3x more daily active users than our previous native app, and we only built it once instead of twice.',
      author: 'Marcus Johnson',
      role: 'Product Director',
      company: 'TravelWise Tours',
      rating: 5,
      location: 'San Francisco, USA'
    },
    {
      quote: 'Push notification opt-in went from 8% on our app to 45% on the PWA. The install friction difference is massive.',
      author: 'Lisa Wang',
      role: 'Growth Lead',
      company: 'NewsFlash Network',
      rating: 5,
      location: 'New York, USA'
    },
    {
      quote: 'Users can now track workouts in the subway, on planes, anywhere. The offline sync is seamless.',
      author: 'Derek Santos',
      role: 'CTO',
      company: 'FitTrack Health',
      rating: 5,
      location: 'Miami, USA'
    }
  ],
  faqs: [
    {
      question: 'What is a Progressive Web App and how is it different from a website?',
      answer: 'A Progressive Web App (PWA) is a website that uses modern web technologies to deliver an app-like experience. Unlike traditional websites, PWAs can work offline, send push notifications, be installed on home screens, and load almost instantly. They combine the reach and accessibility of the web with engagement features previously only available in native apps. Users do not need to download anything from app stores.'
    },
    {
      question: 'Do PWAs work on iOS devices like iPhones?',
      answer: 'Yes, PWAs work on iOS Safari with core features like home screen installation and offline support. Apple has progressively added more PWA features. While some capabilities like push notifications had limitations, Apple has expanded PWA support significantly. We design PWAs to provide the best possible experience on all platforms including iOS, Android, and desktop browsers.'
    },
    {
      question: 'Can a PWA replace our native mobile apps?',
      answer: 'For many use cases, yes. PWAs are ideal for content apps, e-commerce, booking systems, and tools that do not require deep hardware integration. If your app needs advanced features like Bluetooth, NFC, or extensive background processing, native apps may still be better. However, PWAs cost 50-70% less to develop and maintain since you build once for all platforms. We can help assess if a PWA fits your needs.'
    },
    {
      question: 'How do PWA push notifications compare to native app notifications?',
      answer: 'PWA push notifications work nearly identically to native app notifications on Android and recent iOS versions. Users receive notifications even when the browser is closed. The key advantage is higher opt-in rates because users do not need to download an app first. We typically see 3-5x higher notification subscription rates with PWAs compared to native apps.'
    },
    {
      question: 'What happens if users have JavaScript disabled or use old browsers?',
      answer: 'PWAs follow progressive enhancement principles. Users with modern browsers get the full PWA experience, while users with older browsers still get a functional website. The core content and functionality always work. Service workers and advanced features gracefully degrade, ensuring no user is left behind. This is actually an advantage over native apps which exclude users who cannot or will not install.'
    },
    {
      question: 'How fast can a PWA really be compared to a regular website?',
      answer: 'PWAs can be dramatically faster because service workers cache critical resources locally. After the first visit, pages can load in under 1 second even on slow connections because most assets are served from local cache. We have seen 10x improvements in load times. Combined with code splitting and optimized assets, PWAs consistently achieve 90+ Lighthouse performance scores.'
    }
  ],
  relatedServices: [
    {
      name: 'React Development',
      slug: 'react-development',
      description: 'Modern React applications with PWA capabilities',
      icon: 'Code'
    },
    {
      name: 'Next.js Development',
      slug: 'nextjs-development',
      description: 'Full-stack Next.js PWA solutions',
      icon: 'Layers'
    },
    {
      name: 'Mobile App Development',
      slug: 'mobile-development',
      description: 'Native apps for advanced features',
      icon: 'Smartphone'
    },
    {
      name: 'Performance Optimization',
      slug: 'performance-optimization',
      description: 'Speed up your web applications',
      icon: 'Zap'
    }
  ],
  seo: {
    title: 'Progressive Web App (PWA) Development Services | Offline-First Web Apps',
    description: 'Expert PWA development services. Build installable, offline-capable web apps with push notifications that load instantly. Combine web reach with native app engagement.',
    keywords: [
      'progressive web app development',
      'pwa development',
      'offline web apps',
      'push notifications',
      'service workers',
      'installable web apps',
      'pwa services',
      'mobile web apps',
      'web app development',
      'pwa experts'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Progressive Web App Development',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'PWA Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'PWA Development'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'PWA Conversion'
            }
          }
        ]
      }
    }
  }
};
