import { ServiceData } from '@/components/services/sections';

export const appMaintenanceSupportData: ServiceData = {
  // Basic Info
  slug: 'app-maintenance-support',
  name: 'App Maintenance & Support Services',
  tagline: 'Keep Your App Healthy, Secure, and Growing',
  description: 'Comprehensive mobile app maintenance and support services. We keep your iOS and Android apps updated, secure, and performing optimally with ongoing bug fixes, OS updates, and feature enhancements.',
  category: 'Mobile Development',

  // Hero Section
  hero: {
    headline: 'App Maintenance & Support',
    subheadline: 'Your App\'s Long-Term Success',
    description: 'Launching an app is just the beginning. Our maintenance and support services ensure your iOS and Android apps stay updated with new OS releases, remain secure against vulnerabilities, and continue delighting users with bug fixes and improvements.',
    keyFeatures: [
      'OS update compatibility',
      'Security monitoring & patches',
      'Performance optimization',
      'Bug fixes & improvements',
      '24/7 emergency support',
    ],
    badges: ['100+ Apps Maintained', '99.9% Uptime SLA', '24/7 Support'],
  },

  // Pain Points
  painPoints: [
    {
      icon: 'AlertTriangle',
      title: 'OS Update Breakage',
      description: 'New iOS and Android versions can break your app. Users upgrade immediately and expect apps to work.',
      stat: '15%',
      statLabel: 'of apps break on major updates',
    },
    {
      icon: 'Shield',
      title: 'Security Vulnerabilities',
      description: 'Unpatched apps are targets for attacks. Security breaches damage reputation and can cost millions.',
      stat: '60%',
      statLabel: 'of breaches hit outdated apps',
    },
    {
      icon: 'TrendingDown',
      title: 'Performance Degradation',
      description: 'Apps slow down over time as data grows and code ages. Users abandon slow, unresponsive apps.',
      stat: '53%',
      statLabel: 'abandon apps over 3 sec load',
    },
    {
      icon: 'Bug',
      title: 'Unfixed Bugs',
      description: 'Bugs accumulate without ongoing maintenance. User frustration grows and ratings decline.',
      stat: '25%',
      statLabel: 'of bad reviews cite bugs',
    },
    {
      icon: 'Ban',
      title: 'Store Policy Changes',
      description: 'App stores regularly update policies. Non-compliant apps get removed without warning.',
      stat: '10%',
      statLabel: 'of apps removed yearly',
    },
    {
      icon: 'Clock',
      title: 'Response Time Issues',
      description: 'When critical issues occur, you need immediate response. Downtime costs revenue and trust.',
      stat: '$5,600',
      statLabel: 'average cost per minute of downtime',
    },
  ],

  // Solutions/Features
  solutions: [
    {
      icon: 'RefreshCw',
      title: 'OS Update Compatibility',
      description: 'We test and update your app for every iOS and Android release. Your users get seamless experiences on the latest devices.',
      highlights: [
        'Pre-release testing',
        'Compatibility updates',
        'New device support',
        'API deprecation handling',
      ],
    },
    {
      icon: 'Shield',
      title: 'Security Maintenance',
      description: 'Regular security audits, vulnerability patching, and dependency updates keep your app and users safe.',
      highlights: [
        'Security audits',
        'Vulnerability patching',
        'Dependency updates',
        'Penetration testing',
      ],
    },
    {
      icon: 'Gauge',
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization ensure your app stays fast and responsive as it grows.',
      highlights: [
        'Performance monitoring',
        'Load optimization',
        'Memory management',
        'Battery optimization',
      ],
    },
    {
      icon: 'Bug',
      title: 'Bug Fixes & Improvements',
      description: 'Quick response to bug reports with regular releases. Keep users happy with continuous improvements.',
      highlights: [
        'Bug triage & fixes',
        'Crash analysis',
        'User feedback response',
        'Quality improvements',
      ],
    },
    {
      icon: 'HeadphonesIcon',
      title: '24/7 Support',
      description: 'Round-the-clock support for critical issues. When your app goes down, we\'re there to bring it back.',
      highlights: [
        '24/7 availability',
        'Emergency response',
        'Priority hotfixes',
        'Status communication',
      ],
    },
    {
      icon: 'TrendingUp',
      title: 'Feature Enhancements',
      description: 'Keep your app competitive with ongoing feature development. Respond to user feedback with new capabilities.',
      highlights: [
        'Feature development',
        'UX improvements',
        'A/B testing',
        'Analytics insights',
      ],
    },
  ],

  // Process Steps
  process: {
    steps: [
      {
        icon: 'Search',
        title: 'App Assessment',
        description: 'Comprehensive audit of your app\'s current state - code quality, security, performance, and technical debt.',
        duration: '1 week',
        deliverables: ['Health report', 'Risk assessment', 'Maintenance plan'],
      },
      {
        icon: 'Settings',
        title: 'Monitoring Setup',
        description: 'Implement comprehensive monitoring for crashes, performance, and security. Real-time alerts for issues.',
        duration: '1 week',
        deliverables: ['Monitoring dashboards', 'Alert configuration', 'Baseline metrics'],
      },
      {
        icon: 'FileText',
        title: 'Documentation',
        description: 'Create or update technical documentation. Knowledge transfer for efficient ongoing support.',
        duration: '1 week',
        deliverables: ['Technical docs', 'Runbooks', 'Knowledge base'],
      },
      {
        icon: 'RefreshCw',
        title: 'Ongoing Maintenance',
        description: 'Regular maintenance cycles - OS updates, security patches, performance optimization, and bug fixes.',
        duration: 'Ongoing',
        deliverables: ['Monthly updates', 'Security patches', 'Performance reports'],
      },
      {
        icon: 'Bug',
        title: 'Issue Response',
        description: 'Rapid response to bugs, crashes, and user-reported issues. Priority handling for critical problems.',
        duration: 'As needed',
        deliverables: ['Bug fixes', 'Hotfixes', 'Root cause analysis'],
      },
      {
        icon: 'BarChart',
        title: 'Reporting & Review',
        description: 'Regular reports on app health, support metrics, and improvement recommendations.',
        duration: 'Monthly',
        deliverables: ['Health reports', 'Metrics review', 'Recommendations'],
      },
    ],
    totalDuration: 'Ongoing engagement',
  },

  // Benefits
  benefits: [
    {
      icon: 'CheckCircle',
      title: 'Always Compatible',
      description: 'Your app works perfectly on the latest iOS and Android versions. No broken features after updates.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'OS Compatibility',
    },
    {
      icon: 'Shield',
      title: 'Security Protected',
      description: 'Regular security updates protect your app and users from emerging threats.',
      stat: '0',
      statSuffix: '',
      statLabel: 'Security Incidents',
    },
    {
      icon: 'Zap',
      title: 'Peak Performance',
      description: 'Continuous optimization keeps your app fast and responsive.',
      stat: '99.9',
      statSuffix: '%',
      statLabel: 'Uptime SLA',
    },
    {
      icon: 'Clock',
      title: 'Fast Response',
      description: '24/7 support means issues are addressed immediately, not days later.',
      stat: '<1',
      statSuffix: 'hr',
      statLabel: 'Critical Response Time',
    },
    {
      icon: 'Star',
      title: 'Higher Ratings',
      description: 'Well-maintained apps earn better reviews. Users appreciate responsiveness.',
      stat: '0.5',
      statSuffix: '+',
      statLabel: 'Average Rating Improvement',
    },
    {
      icon: 'DollarSign',
      title: 'Cost Predictability',
      description: 'Fixed monthly costs instead of surprise emergency bills.',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Cost Savings vs Ad-Hoc',
    },
  ],

  // Tech Stack
  techStack: [
    {
      name: 'Monitoring & Analytics',
      description: 'App health monitoring tools',
      technologies: [
        { name: 'Firebase Crashlytics', icon: 'firebase', category: 'Crash Reporting', proficiency: 'expert' },
        { name: 'Sentry', icon: 'sentry', category: 'Error Tracking', proficiency: 'expert' },
        { name: 'New Relic', icon: 'newrelic', category: 'APM', proficiency: 'advanced' },
        { name: 'Datadog', icon: 'datadog', category: 'Monitoring', proficiency: 'advanced' },
      ],
    },
    {
      name: 'Security Tools',
      description: 'Security scanning and auditing',
      technologies: [
        { name: 'SonarQube', icon: 'sonarqube', category: 'Code Quality', proficiency: 'expert' },
        { name: 'Snyk', icon: 'snyk', category: 'Security', proficiency: 'expert' },
        { name: 'OWASP ZAP', icon: 'owasp', category: 'Security', proficiency: 'advanced' },
        { name: 'Dependabot', icon: 'dependabot', category: 'Dependencies', proficiency: 'expert' },
      ],
    },
    {
      name: 'CI/CD & Automation',
      description: 'Deployment and automation',
      technologies: [
        { name: 'Fastlane', icon: 'fastlane', category: 'CI/CD', proficiency: 'expert' },
        { name: 'GitHub Actions', icon: 'github', category: 'CI/CD', proficiency: 'expert' },
        { name: 'Bitrise', icon: 'bitrise', category: 'CI/CD', proficiency: 'advanced' },
        { name: 'App Store Connect', icon: 'apple', category: 'Distribution', proficiency: 'expert' },
      ],
    },
    {
      name: 'Communication',
      description: 'Support and communication',
      technologies: [
        { name: 'Jira', icon: 'jira', category: 'Ticketing', proficiency: 'expert' },
        { name: 'Slack', icon: 'slack', category: 'Communication', proficiency: 'expert' },
        { name: 'PagerDuty', icon: 'pagerduty', category: 'Alerting', proficiency: 'advanced' },
        { name: 'Statuspage', icon: 'statuspage', category: 'Status', proficiency: 'advanced' },
      ],
    },
  ],

  // Portfolio
  portfolio: [
    {
      title: 'E-commerce App Maintenance',
      client: 'ShopDirect',
      industry: 'E-commerce',
      description: 'Ongoing maintenance for a high-traffic e-commerce app. iOS 17 compatibility, security patches, and performance optimization.',
      challenge: 'Legacy app with technical debt struggling to keep pace with OS updates and growing traffic.',
      solution: 'Comprehensive maintenance program including code modernization, monitoring setup, and 24/7 support.',
      results: ['99.99% uptime', 'Zero security incidents', '40% performance improvement'],
      metrics: [
        { label: 'Uptime', value: '99.99%' },
        { label: 'Performance', value: '+40%' },
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Maintenance', 'Performance', 'Security', 'iOS'],
      testimonial: {
        quote: 'They transformed our maintenance nightmare into a smooth operation. We haven\'t had a single critical incident in 18 months.',
        author: 'Tom Richards',
        role: 'VP Engineering',
      },
    },
    {
      title: 'Healthcare App Support',
      client: 'MedConnect',
      industry: 'Healthcare',
      description: 'HIPAA-compliant maintenance for a telemedicine app. Security monitoring, compliance updates, and feature enhancements.',
      challenge: 'Healthcare app requiring constant security vigilance and compliance with evolving regulations.',
      solution: 'Dedicated security-focused maintenance with regular audits, penetration testing, and compliance reviews.',
      results: ['HIPAA compliant', 'SOC 2 certified', 'Zero data breaches'],
      metrics: [
        { label: 'Compliance', value: 'HIPAA + SOC 2' },
        { label: 'Breaches', value: 'Zero' },
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'HIPAA', 'Security', 'Compliance', 'Telemedicine'],
      testimonial: {
        quote: 'Maintaining HIPAA compliance is complex. Their security-first approach gives us confidence our patients\' data is protected.',
        author: 'Dr. Sarah Mitchell',
        role: 'Chief Medical Officer',
      },
    },
    {
      title: 'Gaming App Optimization',
      client: 'GameStudio',
      industry: 'Gaming',
      description: 'Performance optimization and feature updates for a popular mobile game. Crash reduction, loading time optimization, and new content support.',
      challenge: 'Popular game with performance issues on older devices causing bad reviews and uninstalls.',
      solution: 'Deep performance profiling and optimization, crash monitoring, and device-specific optimizations.',
      results: ['80% crash reduction', '60% faster loading', 'Rating improved 3.8 to 4.6'],
      metrics: [
        { label: 'Crash Reduction', value: '80%' },
        { label: 'Rating', value: '3.8 to 4.6' },
      ],
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
      tags: ['Gaming', 'Performance', 'Optimization', 'Crash Reduction', 'Mobile'],
      testimonial: {
        quote: 'Our crash rate dropped 80% and our rating jumped from 3.8 to 4.6. The optimization work paid for itself many times over.',
        author: 'Alex Chen',
        role: 'Technical Director',
      },
    },
    {
      title: 'Social Media App Support',
      client: 'TrendShare',
      industry: 'Social Media',
      description: 'Full maintenance support for a growing social platform. Feature updates, scalability improvements, and continuous OS compatibility.',
      challenge: 'Rapidly growing user base requiring constant scaling, new feature deployment, and platform stability.',
      solution: 'Dedicated maintenance team with CI/CD pipeline, automated testing, and proactive performance monitoring.',
      results: ['99.95% uptime', '50% faster releases', '3x user growth supported'],
      metrics: [
        { label: 'Uptime', value: '99.95%' },
        { label: 'Growth Supported', value: '3x' },
      ],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tags: ['Social Media', 'Scaling', 'CI/CD', 'Performance', 'Mobile'],
      testimonial: {
        quote: 'Their maintenance team scaled with us as we grew from 100K to 3M users. The app stayed rock solid throughout.',
        author: 'Brian Foster',
        role: 'CTO',
      },
    },
  ],

  // Pricing
  pricing: {
    plans: [
      {
        name: 'Essential Support',
        description: 'Basic maintenance coverage',
        price: '$1,500/mo',
        priceNote: 'Billed monthly',
        features: [
          { name: 'OS update compatibility', included: true },
          { name: 'Critical bug fixes', included: true },
          { name: 'Security patches', included: true },
          { name: 'Monthly health reports', included: true },
          { name: 'Business hours support', included: true },
          { name: '24/7 support', included: false },
          { name: 'Feature development', included: false },
        ],
        ctaText: 'Start Essential',
      },
      {
        name: 'Professional Support',
        description: 'Comprehensive maintenance',
        price: '$3,500/mo',
        priceNote: 'Billed monthly',
        highlighted: true,
        badge: 'Most Popular',
        features: [
          { name: 'Everything in Essential', included: true },
          { name: '24/7 emergency support', included: true },
          { name: 'Performance monitoring', included: true },
          { name: 'Proactive optimization', included: true },
          { name: '8 hours feature work/month', included: true },
          { name: 'Quarterly security audit', included: true },
          { name: '99.9% uptime SLA', included: true },
        ],
        ctaText: 'Start Professional',
      },
      {
        name: 'Enterprise Support',
        description: 'Premium enterprise coverage',
        price: 'Custom',
        priceNote: 'Based on requirements',
        features: [
          { name: 'Everything in Professional', included: true },
          { name: 'Dedicated support team', included: true },
          { name: 'Unlimited feature hours', included: true },
          { name: '15-minute emergency response', included: true },
          { name: 'Monthly security audits', included: true },
          { name: '99.99% uptime SLA', included: true },
          { name: 'Dedicated Slack channel', included: true },
        ],
        ctaText: 'Contact Sales',
      },
    ],
    customNote: 'All plans include both iOS and Android support. Custom plans available for apps with specific compliance or scale requirements.',
  },

  // Testimonials
  testimonials: [
    {
      quote: 'They took over maintenance of an app we built with another agency. Within 3 months, crash rates dropped 70% and our rating climbed back above 4.5.',
      author: 'Tom Richards',
      role: 'VP Engineering',
      company: 'ShopDirect',
      rating: 5,
      location: 'Chicago, IL',
    },
    {
      quote: 'Healthcare compliance is non-negotiable. Their proactive security approach and regular audits give us complete peace of mind.',
      author: 'Dr. Sarah Mitchell',
      role: 'Chief Medical Officer',
      company: 'MedConnect',
      rating: 5,
      location: 'Boston, MA',
    },
    {
      quote: 'When iOS 17 dropped, our app was ready on day one. They test against every beta release so we\'re never caught off guard.',
      author: 'Alex Chen',
      role: 'Technical Director',
      company: 'GameStudio',
      rating: 5,
      location: 'San Francisco, CA',
    },
  ],

  // FAQs
  faqs: [
    {
      question: 'What happens when a new iOS or Android version releases?',
      answer: 'We test your app against beta releases months before public launch. Any compatibility issues are fixed before users upgrade. Your app works perfectly from day one of every major OS release.',
      category: 'OS Updates',
    },
    {
      question: 'How quickly do you respond to critical issues?',
      answer: 'Professional and Enterprise plans include 24/7 emergency support with 1-hour and 15-minute response times respectively. Critical issues are escalated immediately regardless of time zone.',
      category: 'Support',
    },
    {
      question: 'What\'s included in security maintenance?',
      answer: 'We monitor for vulnerabilities, patch dependencies, update encryption standards, and conduct regular security audits. For compliance-sensitive apps, we include penetration testing and compliance reviews.',
      category: 'Security',
    },
    {
      question: 'Can you take over an app built by another team?',
      answer: 'Yes. We start with a thorough assessment of the codebase, document the system, and establish monitoring. We can maintain any app regardless of who built it originally.',
      category: 'Onboarding',
    },
    {
      question: 'Do you support both iOS and Android?',
      answer: 'Yes, all our maintenance plans cover both platforms. We maintain native iOS, native Android, and cross-platform apps (React Native, Flutter).',
      category: 'Platforms',
    },
    {
      question: 'What if we need new features developed?',
      answer: 'Professional plans include monthly feature development hours. Additional feature work can be added to any plan. Enterprise plans include unlimited feature development.',
      category: 'Features',
    },
    {
      question: 'How do you handle app store policy changes?',
      answer: 'We monitor Apple and Google policy changes and proactively update your app to remain compliant. You\'ll never be surprised by an app removal for policy violations.',
      category: 'Compliance',
    },
    {
      question: 'Can we see maintenance reports?',
      answer: 'Yes. All plans include regular reports covering crashes, performance metrics, support tickets, and completed work. Professional and Enterprise plans include detailed analytics dashboards.',
      category: 'Reporting',
    },
  ],

  // Related Services
  relatedServices: [
    {
      name: 'iOS Development',
      slug: 'ios-development',
      description: 'Build new iOS features',
      icon: 'Smartphone',
    },
    {
      name: 'Android Development',
      slug: 'android-development',
      description: 'Build new Android features',
      icon: 'Smartphone',
    },
    {
      name: 'App Store Optimization',
      slug: 'app-store-optimization',
      description: 'Improve app visibility',
      icon: 'TrendingUp',
    },
    {
      name: 'Mobile UI/UX Design',
      slug: 'mobile-ui-ux-design',
      description: 'Redesign and improve UX',
      icon: 'Palette',
    },
  ],

  // SEO
  seo: {
    title: 'App Maintenance & Support Services | iOS & Android',
    description: 'Professional mobile app maintenance and support for iOS and Android. OS updates, security patches, bug fixes, and 24/7 support. Keep your app healthy and growing.',
    keywords: [
      'app maintenance',
      'mobile app support',
      'ios app maintenance',
      'android app maintenance',
      'app updates',
      'app security patches',
      'mobile app support services',
      'app maintenance company',
    ],
  },
};
