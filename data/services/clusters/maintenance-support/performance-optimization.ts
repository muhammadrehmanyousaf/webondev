// Performance Optimization Service Data
import { ServiceData } from '@/components/services/sections';

export const performanceOptimizationData: ServiceData = {
  name: 'Performance Optimization',
  slug: 'performance-optimization',
  tagline: 'Make your applications blazing fast',
  category: 'Maintenance & Support',
  description: 'Expert performance optimization services to make your websites and applications faster. We identify bottlenecks and implement optimizations that improve user experience and conversions.',

  hero: {
    headline: 'Performance Optimization Services',
    subheadline: 'Speed That Drives Results',
    description: 'Every second of load time costs you users and revenue. Our performance optimization experts identify bottlenecks and implement optimizations that dramatically improve speed across web, mobile, and backend systems.',
    keyFeatures: [
      'Website speed optimization',
      'Application performance',
      'Database optimization',
      'Core Web Vitals',
      'Mobile performance',
      'API optimization'
    ],
    badges: ['3x Avg Speed Improvement', 'Google PageSpeed Experts', 'Core Web Vitals', 'All Platforms']
  },

  painPoints: [
    {
      icon: 'Clock',
      title: 'Slow Load Times',
      description: 'Users abandoning slow pages',
      stat: '53%',
      statLabel: 'Leave if >3s load'
    },
    {
      icon: 'TrendingDown',
      title: 'Lost Revenue',
      description: 'Slow speed hurting conversions',
      stat: '7%',
      statLabel: 'Conversion loss per second'
    },
    {
      icon: 'Search',
      title: 'Poor SEO Rankings',
      description: 'Google penalizing slow sites',
      stat: '70%',
      statLabel: 'Ranking factor'
    },
    {
      icon: 'DollarSign',
      title: 'High Infrastructure Costs',
      description: 'Inefficient code wasting resources',
      stat: '40%',
      statLabel: 'Potential savings'
    }
  ],

  solutions: [
    {
      icon: 'Search',
      title: 'Performance Audit',
      description: 'Comprehensive analysis of performance issues',
      highlights: [
        'Load time analysis',
        'Bottleneck identification',
        'Core Web Vitals',
        'Prioritized recommendations'
      ]
    },
    {
      icon: 'Globe',
      title: 'Frontend Optimization',
      description: 'Speed up what users see and interact with',
      highlights: [
        'Asset optimization',
        'Code splitting',
        'Lazy loading',
        'Caching strategies'
      ]
    },
    {
      icon: 'Server',
      title: 'Backend Optimization',
      description: 'Optimize server-side performance',
      highlights: [
        'Database queries',
        'API response times',
        'Server configuration',
        'Caching layers'
      ]
    },
    {
      icon: 'Activity',
      title: 'Monitoring Setup',
      description: 'Ongoing performance tracking',
      highlights: [
        'Real user monitoring',
        'Synthetic testing',
        'Alerting',
        'Performance budgets'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Performance Audit',
        description: 'Comprehensive performance analysis',
        duration: 'Week 1',
        deliverables: [
          'Performance baseline',
          'Bottleneck analysis',
          'Opportunity ranking',
          'Optimization plan'
        ]
      },
      {
        icon: 'Zap',
        title: 'Quick Wins',
        description: 'Implement high-impact, low-effort optimizations',
        duration: 'Week 2',
        deliverables: [
          'Image optimization',
          'Caching setup',
          'Compression',
          'CDN configuration'
        ]
      },
      {
        icon: 'Code',
        title: 'Deep Optimization',
        description: 'Address complex performance issues',
        duration: 'Week 3-4',
        deliverables: [
          'Code optimization',
          'Database tuning',
          'Architecture improvements',
          'Rendering optimization'
        ]
      },
      {
        icon: 'Activity',
        title: 'Monitoring & Verification',
        description: 'Verify improvements and set up monitoring',
        duration: 'Week 4',
        deliverables: [
          'Performance verification',
          'Monitoring setup',
          'Documentation',
          'Maintenance guide'
        ]
      }
    ],
    totalDuration: '2-4 weeks typical'
  },

  benefits: [
    {
      icon: 'Zap',
      title: 'Faster Load Times',
      description: 'Dramatically faster pages',
      stat: '3x',
      statSuffix: '',
      statLabel: 'Avg speed improvement'
    },
    {
      icon: 'TrendingUp',
      title: 'Better Conversions',
      description: 'Speed improves conversions',
      stat: '25',
      statSuffix: '%',
      statLabel: 'Avg conversion lift'
    },
    {
      icon: 'Search',
      title: 'SEO Improvement',
      description: 'Core Web Vitals passing',
      stat: '100',
      statSuffix: '%',
      statLabel: 'CWV passing'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Savings',
      description: 'Reduced infrastructure costs',
      stat: '30',
      statSuffix: '%',
      statLabel: 'Avg cost reduction'
    }
  ],

  techStack: [
    {
      name: 'Analysis Tools',
      description: 'Performance measurement',
      technologies: [
        { name: 'Lighthouse', icon: '/icons/tech/lighthouse.svg', category: 'Audit', proficiency: 'expert' },
        { name: 'WebPageTest', icon: '/icons/tech/webpagetest.svg', category: 'Testing', proficiency: 'expert' },
        { name: 'Chrome DevTools', icon: '/icons/tech/chrome.svg', category: 'Debugging', proficiency: 'expert' },
        { name: 'GTmetrix', icon: '/icons/tech/gtmetrix.svg', category: 'Analysis', proficiency: 'expert' }
      ]
    },
    {
      name: 'Frontend Optimization',
      description: 'Frontend performance tools',
      technologies: [
        { name: 'Webpack', icon: '/icons/tech/webpack.svg', category: 'Bundler', proficiency: 'expert' },
        { name: 'Vite', icon: '/icons/tech/vite.svg', category: 'Build', proficiency: 'expert' },
        { name: 'ImageOptim', icon: '/icons/tech/imageoptim.svg', category: 'Images', proficiency: 'expert' },
        { name: 'PurgeCSS', icon: '/icons/tech/purgecss.svg', category: 'CSS', proficiency: 'advanced' }
      ]
    },
    {
      name: 'CDN & Caching',
      description: 'Content delivery',
      technologies: [
        { name: 'Cloudflare', icon: '/icons/tech/cloudflare.svg', category: 'CDN', proficiency: 'expert' },
        { name: 'Fastly', icon: '/icons/tech/fastly.svg', category: 'CDN', proficiency: 'expert' },
        { name: 'Redis', icon: '/icons/tech/redis.svg', category: 'Cache', proficiency: 'expert' },
        { name: 'Varnish', icon: '/icons/tech/varnish.svg', category: 'Cache', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Monitoring',
      description: 'Performance monitoring',
      technologies: [
        { name: 'Datadog', icon: '/icons/tech/datadog.svg', category: 'APM', proficiency: 'expert' },
        { name: 'New Relic', icon: '/icons/tech/newrelic.svg', category: 'APM', proficiency: 'expert' },
        { name: 'SpeedCurve', icon: '/icons/tech/speedcurve.svg', category: 'RUM', proficiency: 'advanced' },
        { name: 'Sentry', icon: '/icons/tech/sentry.svg', category: 'Monitoring', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Performance Audit',
        description: 'Analysis & recommendations',
        price: '$1,500',
        priceNote: 'one-time',
        features: [
          { name: 'Comprehensive audit', included: true },
          { name: 'Core Web Vitals analysis', included: true },
          { name: 'Bottleneck identification', included: true },
          { name: 'Prioritized recommendations', included: true },
          { name: 'Detailed report', included: true },
          { name: 'Implementation', included: false },
          { name: 'Monitoring setup', included: false },
          { name: 'Ongoing support', included: false }
        ],
        ctaText: 'Get Audit',
        highlighted: false
      },
      {
        name: 'Optimization Package',
        description: 'Audit + implementation',
        price: '$5,000',
        priceNote: 'one-time',
        badge: 'Most Popular',
        features: [
          { name: 'Full performance audit', included: true },
          { name: 'Implementation of fixes', included: true },
          { name: 'Frontend optimization', included: true },
          { name: 'Database optimization', included: true },
          { name: 'CDN configuration', included: true },
          { name: 'Core Web Vitals passing', included: true },
          { name: 'Monitoring setup', included: true },
          { name: '30-day support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Full optimization program',
        price: 'Custom',
        priceNote: 'based on scope',
        features: [
          { name: 'All Optimization features', included: true },
          { name: 'Complex architectures', included: true },
          { name: 'Backend optimization', included: true },
          { name: 'API optimization', included: true },
          { name: 'Infrastructure review', included: true },
          { name: 'Load testing', included: true },
          { name: 'Advanced monitoring', included: true },
          { name: '90-day support', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Prices for single site/app. Multi-property discounts available.'
  },

  portfolio: [
    {
      title: 'E-commerce Speed Optimization',
      client: 'HomeStyle Goods',
      industry: 'E-commerce',
      description: 'Performance optimization for Shopify Plus store',
      challenge: 'Slow page loads hurting conversions, failed Core Web Vitals',
      solution: 'Comprehensive frontend and backend optimization',
      results: [
        'Load time reduced from 8s to 1.9s',
        'Core Web Vitals all passing',
        'Conversion rate improved 35%',
        'Bounce rate reduced 45%'
      ],
      metrics: [
        { label: 'Speed Improvement', value: '4.2x' },
        { label: 'Conversion Lift', value: '+35%' },
        { label: 'Bounce Reduction', value: '-45%' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Shopify', 'Core Web Vitals', 'Speed']
    },
    {
      title: 'SaaS Application Performance',
      client: 'DataInsight Analytics',
      industry: 'SaaS',
      description: 'Application performance optimization for analytics platform',
      challenge: 'Dashboard loading slowly, users complaining, churn increasing',
      solution: 'Backend and frontend optimization with caching strategy',
      results: [
        'Dashboard load time 10x faster',
        'API response times reduced 80%',
        'Customer satisfaction improved to 4.8/5',
        'Infrastructure costs reduced 40%'
      ],
      metrics: [
        { label: 'Load Time', value: '10x faster' },
        { label: 'API Speed', value: '-80%' },
        { label: 'Cost Savings', value: '40%' }
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['SaaS', 'React', 'Node.js', 'Database']
    },
    {
      title: 'Database Query Optimization',
      client: 'LogiTrack Systems',
      industry: 'Logistics',
      description: 'Database performance tuning for logistics management system',
      challenge: 'Reports timing out, searches taking minutes, system unusable during peak',
      solution: 'Query optimization, indexing strategy, and caching implementation',
      results: [
        'Report generation 50x faster',
        'Search results now instant',
        'Peak performance stable',
        'Database server costs reduced 60%'
      ],
      metrics: [
        { label: 'Report Speed', value: '50x faster' },
        { label: 'Search Time', value: '<1 sec' },
        { label: 'Cost Reduction', value: '60%' }
      ],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      tags: ['Database', 'Optimization', 'Logistics', 'Enterprise']
    },
    {
      title: 'Mobile App Performance Boost',
      client: 'QuickNews Media',
      industry: 'Media',
      description: 'Performance optimization for news aggregation mobile app',
      challenge: 'App sluggish, battery drain complaints, users switching to competitors',
      solution: 'Image optimization, lazy loading, and background process improvements',
      results: [
        'App launch time reduced by 70%',
        'Battery usage reduced by 45%',
        'User session time increased 80%',
        'App store rating improved to 4.7'
      ],
      metrics: [
        { label: 'Launch Speed', value: '70% faster' },
        { label: 'Battery Savings', value: '45%' },
        { label: 'Rating', value: '4.7/5' }
      ],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['Mobile', 'Media', 'Performance', 'Optimization']
    }
  ],

  testimonials: [
    {
      quote: 'Our site went from painfully slow to lightning fast. Conversions jumped 35% within a month of the optimization.',
      author: 'Alexandra Reed',
      role: 'E-commerce Director',
      company: 'HomeStyle Goods',
      rating: 5,
      location: 'Nashville, TN'
    },
    {
      quote: 'Users used to complain about our slow dashboards daily. After optimization, complaints stopped and satisfaction soared.',
      author: 'Daniel Park',
      role: 'VP Product',
      company: 'DataInsight Analytics',
      rating: 5,
      location: 'Seattle, WA'
    }
  ],

  faqs: [
    {
      question: 'How much faster can you make my site?',
      answer: 'On average, we achieve 2-4x speed improvements. Results vary based on current state - sites with significant issues often see dramatic improvements (5-10x), while already-optimized sites see more modest gains. We provide expected improvement estimates during the audit.'
    },
    {
      question: 'What are Core Web Vitals?',
      answer: 'Core Web Vitals are Google\'s metrics for user experience: LCP (Largest Contentful Paint) for loading, FID (First Input Delay) for interactivity, and CLS (Cumulative Layout Shift) for visual stability. These directly impact SEO rankings, and we optimize specifically for passing scores.'
    },
    {
      question: 'Will optimization break my site?',
      answer: 'We implement changes carefully with thorough testing at each step. All optimizations are tested in staging before production. We maintain rollback capability and monitor closely after deployment. Our process is designed to improve speed without breaking functionality.'
    },
    {
      question: 'How long do optimizations last?',
      answer: 'The core optimizations are permanent, but performance requires ongoing attention. New features, content, and third-party scripts can impact speed over time. We can set up monitoring to alert you to regressions and offer maintenance plans to keep performance optimal.'
    },
    {
      question: 'Do you optimize mobile performance?',
      answer: 'Absolutely. Mobile performance is critical as most users are on mobile devices. We optimize for mobile-first, ensuring fast load times on slower connections, proper image sizing for mobile screens, and touch-friendly interactions.'
    }
  ],

  relatedServices: [
    {
      name: 'Website Maintenance',
      slug: 'website-maintenance',
      description: 'Ongoing site care',
      icon: 'Globe'
    },
    {
      name: 'Application Maintenance',
      slug: 'application-maintenance',
      description: 'App maintenance',
      icon: 'Settings'
    },
    {
      name: 'Bug Fixing Services',
      slug: 'bug-fixing-services',
      description: 'Bug resolution',
      icon: 'Bug'
    },
    {
      name: 'Technical Support',
      slug: 'technical-support',
      description: 'Ongoing support',
      icon: 'HeadPhones'
    }
  ],

  seo: {
    title: 'Performance Optimization Services | Website Speed Optimization',
    description: 'Expert performance optimization services. Faster websites, better Core Web Vitals, improved conversions. 3x average speed improvement. From $1,500.',
    keywords: [
      'performance optimization',
      'website speed optimization',
      'page speed optimization',
      'core web vitals optimization',
      'site speed',
      'web performance',
      'load time optimization',
      'application performance',
      'frontend optimization',
      'speed optimization services'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Performance Optimization Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Website Speed Optimization'
      }
    }
  }
};
