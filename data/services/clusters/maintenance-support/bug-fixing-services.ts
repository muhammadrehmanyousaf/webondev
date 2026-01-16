// Bug Fixing Services Data
import { ServiceData } from '@/components/services/sections';

export const bugFixingServicesData: ServiceData = {
  name: 'Bug Fixing Services',
  slug: 'bug-fixing-services',
  tagline: 'Fast, reliable bug fixes for your software',
  category: 'Maintenance & Support',
  description: 'Professional bug fixing services to resolve software issues quickly and reliably. Our experienced developers diagnose problems, implement fixes, and ensure your applications work flawlessly.',

  hero: {
    headline: 'Bug Fixing Services',
    subheadline: 'Expert Debugging, Fast Resolution',
    description: 'Don\'t let bugs hurt your business. Our expert developers quickly diagnose and fix software issues across web, mobile, and enterprise applications. Get reliable fixes with thorough testing.',
    keyFeatures: [
      'Fast turnaround',
      'Root cause analysis',
      'Thorough testing',
      'All platforms supported',
      'No recurring fees',
      'Fix guarantee'
    ],
    badges: ['24-Hour Turnaround', '10,000+ Bugs Fixed', 'All Technologies', 'Guaranteed Fixes']
  },

  painPoints: [
    {
      icon: 'Bug',
      title: 'Critical Bugs',
      description: 'Bugs affecting user experience and revenue',
      stat: '$1.7T',
      statLabel: 'Annual cost of bugs'
    },
    {
      icon: 'Clock',
      title: 'Slow Resolution',
      description: 'Bugs taking too long to diagnose and fix',
      stat: '17hrs',
      statLabel: 'Avg time to fix'
    },
    {
      icon: 'Users',
      title: 'No Available Developers',
      description: 'Development team too busy or lacking expertise',
      stat: '45%',
      statLabel: 'Teams understaffed'
    },
    {
      icon: 'RefreshCw',
      title: 'Recurring Issues',
      description: 'Same bugs keep coming back after fixes',
      stat: '30%',
      statLabel: 'Bugs recur'
    }
  ],

  solutions: [
    {
      icon: 'Search',
      title: 'Expert Diagnosis',
      description: 'Thorough investigation to find root cause',
      highlights: [
        'Code analysis',
        'Log review',
        'Reproduction steps',
        'Root cause identification'
      ]
    },
    {
      icon: 'Wrench',
      title: 'Quality Fixes',
      description: 'Proper fixes that address the underlying issue',
      highlights: [
        'Clean code fixes',
        'Best practices',
        'No shortcuts',
        'Documentation'
      ]
    },
    {
      icon: 'CheckCircle',
      title: 'Thorough Testing',
      description: 'Verify fixes work and don\'t break anything else',
      highlights: [
        'Fix verification',
        'Regression testing',
        'Edge case testing',
        'Multi-environment'
      ]
    },
    {
      icon: 'Shield',
      title: 'Prevention',
      description: 'Recommendations to prevent future issues',
      highlights: [
        'Code review',
        'Recommendations',
        'Best practices',
        'Monitoring setup'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'FileText',
        title: 'Bug Submission',
        description: 'Submit bug details and access credentials',
        duration: 'Day 1',
        deliverables: [
          'Bug report',
          'Access setup',
          'Priority assessment',
          'Timeline estimate'
        ]
      },
      {
        icon: 'Search',
        title: 'Diagnosis',
        description: 'Investigate and identify root cause',
        duration: 'Day 1-2',
        deliverables: [
          'Root cause analysis',
          'Impact assessment',
          'Fix approach',
          'Estimate confirmation'
        ]
      },
      {
        icon: 'Wrench',
        title: 'Fix Development',
        description: 'Implement the fix properly',
        duration: 'Day 2-3',
        deliverables: [
          'Code fix',
          'Unit tests',
          'Code review',
          'Staging deployment'
        ]
      },
      {
        icon: 'CheckCircle',
        title: 'Testing & Delivery',
        description: 'Test thoroughly and deploy fix',
        duration: 'Day 3-4',
        deliverables: [
          'QA testing',
          'Regression testing',
          'Production deployment',
          'Fix verification'
        ]
      }
    ],
    totalDuration: '24-72 hours typical'
  },

  benefits: [
    {
      icon: 'Zap',
      title: 'Fast Turnaround',
      description: 'Most bugs fixed within 24-48 hours',
      stat: '24-48',
      statSuffix: 'hrs',
      statLabel: 'Typical turnaround'
    },
    {
      icon: 'CheckCircle',
      title: 'Fix Guarantee',
      description: 'Guaranteed working fix or no charge',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Guaranteed'
    },
    {
      icon: 'Target',
      title: 'Root Cause',
      description: 'Address underlying issues, not symptoms',
      stat: '95',
      statSuffix: '%',
      statLabel: 'First-time fix rate'
    },
    {
      icon: 'Shield',
      title: 'No Regression',
      description: 'Fixes that don\'t break other things',
      stat: '99',
      statSuffix: '%',
      statLabel: 'No regression'
    }
  ],

  techStack: [
    {
      name: 'Frontend',
      description: 'Frontend debugging',
      technologies: [
        { name: 'React', icon: '/icons/tech/react.svg', category: 'Frontend', proficiency: 'expert' },
        { name: 'Vue.js', icon: '/icons/tech/vue.svg', category: 'Frontend', proficiency: 'expert' },
        { name: 'Angular', icon: '/icons/tech/angular.svg', category: 'Frontend', proficiency: 'expert' },
        { name: 'JavaScript', icon: '/icons/tech/javascript.svg', category: 'Language', proficiency: 'expert' }
      ]
    },
    {
      name: 'Backend',
      description: 'Backend debugging',
      technologies: [
        { name: 'Node.js', icon: '/icons/tech/nodejs.svg', category: 'Backend', proficiency: 'expert' },
        { name: 'Python', icon: '/icons/tech/python.svg', category: 'Backend', proficiency: 'expert' },
        { name: 'Java', icon: '/icons/tech/java.svg', category: 'Backend', proficiency: 'expert' },
        { name: 'PHP', icon: '/icons/tech/php.svg', category: 'Backend', proficiency: 'expert' }
      ]
    },
    {
      name: 'Mobile',
      description: 'Mobile debugging',
      technologies: [
        { name: 'React Native', icon: '/icons/tech/react.svg', category: 'Mobile', proficiency: 'expert' },
        { name: 'Flutter', icon: '/icons/tech/flutter.svg', category: 'Mobile', proficiency: 'expert' },
        { name: 'iOS/Swift', icon: '/icons/tech/swift.svg', category: 'Mobile', proficiency: 'expert' },
        { name: 'Android/Kotlin', icon: '/icons/tech/kotlin.svg', category: 'Mobile', proficiency: 'expert' }
      ]
    },
    {
      name: 'CMS/E-commerce',
      description: 'Platform debugging',
      technologies: [
        { name: 'WordPress', icon: '/icons/tech/wordpress.svg', category: 'CMS', proficiency: 'expert' },
        { name: 'Shopify', icon: '/icons/tech/shopify.svg', category: 'E-commerce', proficiency: 'expert' },
        { name: 'WooCommerce', icon: '/icons/tech/woocommerce.svg', category: 'E-commerce', proficiency: 'expert' },
        { name: 'Magento', icon: '/icons/tech/magento.svg', category: 'E-commerce', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Simple Bug',
        description: 'Minor issues, quick fixes',
        price: '$150',
        priceNote: 'fixed price',
        features: [
          { name: 'Single bug fix', included: true },
          { name: 'Root cause analysis', included: true },
          { name: 'Fix verification', included: true },
          { name: '48-hour turnaround', included: true },
          { name: 'Basic testing', included: true },
          { name: 'Priority support', included: false },
          { name: 'Comprehensive testing', included: false },
          { name: 'Prevention recommendations', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Complex Bug',
        description: 'Multi-component issues',
        price: '$350',
        priceNote: 'fixed price',
        badge: 'Most Common',
        features: [
          { name: 'Complex bug investigation', included: true },
          { name: 'Deep root cause analysis', included: true },
          { name: 'Comprehensive fix', included: true },
          { name: '24-hour priority', included: true },
          { name: 'Full regression testing', included: true },
          { name: 'Priority support', included: true },
          { name: 'Documentation', included: true },
          { name: 'Prevention recommendations', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Bug Bundle',
        description: '10 bug credits',
        price: '$1,200',
        priceNote: 'for 10 bugs',
        features: [
          { name: '10 bug fix credits', included: true },
          { name: 'Mix of simple/complex', included: true },
          { name: 'Priority handling', included: true },
          { name: 'No expiration', included: true },
          { name: 'Full testing included', included: true },
          { name: 'Dedicated support', included: true },
          { name: 'Monthly report', included: true },
          { name: 'Prevention recommendations', included: true }
        ],
        ctaText: 'Buy Bundle',
        highlighted: false
      }
    ],
    customNote: 'Emergency same-day fixes available at 2x rate. Enterprise agreements available.'
  },

  portfolio: [
    {
      title: 'E-commerce Checkout Fix',
      client: 'Online Retail Store',
      industry: 'E-commerce',
      description: 'Critical checkout bug causing payment failures',
      challenge: 'Checkout randomly failing, losing sales during peak season',
      solution: 'Diagnosed race condition in payment processing, implemented fix',
      results: [
        'Bug fixed within 6 hours',
        'Checkout success rate restored to 99.5%',
        'Estimated $50K revenue saved',
        'No regression issues'
      ],
      metrics: [
        { label: 'Time to Fix', value: '6 hours' },
        { label: 'Success Rate', value: '99.5%' },
        { label: 'Revenue Saved', value: '$50K' }
      ],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Checkout', 'Critical Fix', 'Payment']
    },
    {
      title: 'Mobile App Crash Resolution',
      client: 'TravelMate App',
      industry: 'Travel',
      description: 'App crashing on launch for certain users',
      challenge: 'Random crashes affecting 15% of user base, couldn\'t reproduce',
      solution: 'Identified memory leak in specific device/OS combinations',
      results: [
        'Crash identified and fixed in 48 hours',
        'Crash rate reduced from 15% to 0.1%',
        'App store rating improved',
        'User complaints eliminated'
      ],
      metrics: [
        { label: 'Time to Fix', value: '48 hours' },
        { label: 'Crash Reduction', value: '99%' },
        { label: 'Affected Users', value: '0.1%' }
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['Mobile', 'iOS', 'Android', 'Crash Fix']
    },
    {
      title: 'API Integration Bug Fix',
      client: 'FinanceFlow Pro',
      industry: 'FinTech',
      description: 'Critical API returning incorrect financial calculations',
      challenge: 'Interest calculations were off by small amounts causing compliance issues',
      solution: 'Identified floating-point precision errors and implemented proper decimal handling',
      results: [
        'Bug identified within 4 hours',
        'All calculations now 100% accurate',
        'Compliance audit passed',
        'Prevented potential regulatory fines'
      ],
      metrics: [
        { label: 'Time to Fix', value: '4 hours' },
        { label: 'Accuracy', value: '100%' },
        { label: 'Audit Result', value: 'Passed' }
      ],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      tags: ['FinTech', 'API', 'Compliance', 'Critical Fix']
    },
    {
      title: 'WordPress Plugin Conflict Resolution',
      client: 'Digital Marketing Agency',
      industry: 'Marketing',
      description: 'Website breaking after plugin updates',
      challenge: 'Multiple plugin conflicts causing white screen of death',
      solution: 'Systematic debugging to identify and resolve plugin incompatibilities',
      results: [
        'Site restored within 2 hours',
        'All conflicting plugins identified',
        'Alternative solutions implemented',
        'Prevention measures documented'
      ],
      metrics: [
        { label: 'Recovery Time', value: '2 hours' },
        { label: 'Conflicts Resolved', value: '5' },
        { label: 'Site Stability', value: '100%' }
      ],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['WordPress', 'Plugin', 'Emergency', 'Recovery']
    }
  ],

  testimonials: [
    {
      quote: 'Our checkout was failing during Black Friday. They fixed it in 6 hours and saved our entire holiday season.',
      author: 'James Wilson',
      role: 'E-commerce Director',
      company: 'Online Retail Store',
      rating: 5,
      location: 'Chicago, IL'
    },
    {
      quote: 'We couldn\'t figure out why the app kept crashing. They found the issue in hours when our team spent weeks.',
      author: 'Priya Sharma',
      role: 'Mobile Lead',
      company: 'TravelMate App',
      rating: 5,
      location: 'Boston, MA'
    }
  ],

  faqs: [
    {
      question: 'How fast can you fix a bug?',
      answer: 'Most bugs are fixed within 24-48 hours. Simple bugs often within hours. For critical issues, we offer emergency same-day service. Exact timing depends on bug complexity, but we provide an estimate before starting.'
    },
    {
      question: 'What if you can\'t fix the bug?',
      answer: 'We offer a fix guarantee - if we can\'t fix the bug, you don\'t pay. In rare cases where a fix isn\'t possible (e.g., third-party limitations), we\'ll explain the situation and suggest alternatives at no charge.'
    },
    {
      question: 'Do you need access to our codebase?',
      answer: 'Yes, we need access to the relevant code, environments, and logs to diagnose and fix bugs. We can work within your VPN, sign NDAs, and follow your security protocols. Access is used only for the bug fix.'
    },
    {
      question: 'What information do you need to get started?',
      answer: 'We need: 1) Bug description and reproduction steps, 2) Expected vs actual behavior, 3) When the bug started (if known), 4) Relevant code/repo access, 5) Access to environments where bug occurs. The more detail, the faster we fix.'
    },
    {
      question: 'Do you fix bugs in legacy code?',
      answer: 'Yes, we have experience with legacy systems and older technologies. We can fix bugs in older PHP, .NET, Java, and other codebases. We approach legacy code carefully to fix bugs without introducing instability.'
    }
  ],

  relatedServices: [
    {
      name: 'Application Maintenance',
      slug: 'application-maintenance',
      description: 'Ongoing maintenance',
      icon: 'Settings'
    },
    {
      name: 'Performance Optimization',
      slug: 'performance-optimization',
      description: 'Speed improvements',
      icon: 'Zap'
    },
    {
      name: 'Technical Support',
      slug: 'technical-support',
      description: 'Ongoing support',
      icon: 'HeadPhones'
    },
    {
      name: 'Emergency Support',
      slug: 'emergency-support',
      description: 'Critical issues',
      icon: 'AlertTriangle'
    }
  ],

  seo: {
    title: 'Bug Fixing Services | Software Bug Fix | Website Bug Repair',
    description: 'Professional bug fixing services. Fast turnaround, guaranteed fixes, all platforms. Web, mobile, and enterprise bug resolution. From $150 per bug.',
    keywords: [
      'bug fixing services',
      'software bug fix',
      'website bug repair',
      'app bug fix',
      'code debugging',
      'bug resolution',
      'software debugging',
      'fix website bugs',
      'mobile app bug fix',
      'emergency bug fix'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Bug Fixing Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Software Bug Repair'
      }
    }
  }
};
