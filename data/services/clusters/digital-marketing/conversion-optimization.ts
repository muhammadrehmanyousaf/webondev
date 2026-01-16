import { ServiceData } from '@/components/services/sections';

export const conversionOptimizationData: ServiceData = {
  name: 'Conversion Optimization',
  slug: 'conversion-optimization',
  tagline: 'Convert More Visitors',
  category: 'Digital Marketing',
  description: 'Data-driven conversion rate optimization services that turn more visitors into customers. We use research, testing, and psychology to improve website performance and maximize ROI.',
  hero: {
    headline: 'Conversion Rate Optimization Services',
    subheadline: 'Turn More Visitors Into Customers',
    description: 'Unlock the hidden revenue in your existing traffic. Our CRO services use research, testing, and behavioral science to systematically improve conversion rates and maximize your marketing ROI.',
    keyFeatures: [
      'A/B & Multivariate Testing',
      'User Research & Analysis',
      'Landing Page Optimization',
      'Funnel Optimization'
    ],
    badges: ['500+ Tests Run', '38% Avg Conversion Lift', 'Data-Driven Results']
  },
  painPoints: [
    {
      icon: 'TrendingDown',
      title: 'Low Conversion Rates',
      description: 'Spending money driving traffic that does not convert into customers.',
      stat: '2.3%',
      statLabel: 'Avg conversion rate'
    },
    {
      icon: 'DollarSign',
      title: 'High Acquisition Costs',
      description: 'Rising traffic costs without corresponding conversion improvements.',
      stat: '$50+',
      statLabel: 'Avg cost per lead'
    },
    {
      icon: 'ShoppingCart',
      title: 'Cart Abandonment',
      description: 'Visitors add items but leave without completing purchase.',
      stat: '70%',
      statLabel: 'Cart abandonment rate'
    },
    {
      icon: 'AlertTriangle',
      title: 'Guessing at Changes',
      description: 'Making website changes based on opinions rather than data.',
      stat: '90%',
      statLabel: 'Changes not tested'
    },
    {
      icon: 'Users',
      title: 'Unknown User Behavior',
      description: 'No insight into why visitors are not converting.',
      stat: '65%',
      statLabel: 'Do not analyze users'
    },
    {
      icon: 'Clock',
      title: 'Slow Website Performance',
      description: 'Technical issues causing friction and abandonment.',
      stat: '7%',
      statLabel: 'Conv drop per second'
    }
  ],
  solutions: [
    {
      icon: 'Search',
      title: 'Conversion Research',
      description: 'Deep research to understand why visitors are not converting.',
      highlights: ['User Testing', 'Heatmap Analysis', 'Session Recordings', 'Survey Research']
    },
    {
      icon: 'TestTube',
      title: 'A/B Testing',
      description: 'Systematic testing to validate improvements with statistical confidence.',
      highlights: ['A/B Tests', 'Multivariate Tests', 'Split URL Tests', 'Personalization Tests']
    },
    {
      icon: 'Layout',
      title: 'Landing Page Optimization',
      description: 'Optimize landing pages for maximum conversion.',
      highlights: ['Page Redesign', 'Copy Optimization', 'Form Optimization', 'CTA Testing']
    },
    {
      icon: 'ShoppingCart',
      title: 'Checkout Optimization',
      description: 'Reduce cart abandonment and increase purchase completion.',
      highlights: ['Checkout Flow', 'Cart Optimization', 'Payment UX', 'Trust Elements']
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Optimization',
      description: 'Improve conversion rates on mobile devices.',
      highlights: ['Mobile UX', 'Touch Optimization', 'Speed Optimization', 'Mobile Forms']
    },
    {
      icon: 'Zap',
      title: 'Performance Optimization',
      description: 'Technical improvements that boost conversion through speed.',
      highlights: ['Page Speed', 'Core Web Vitals', 'Load Optimization', 'Performance Monitoring']
    }
  ],
  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Conversion Audit',
        description: 'Comprehensive analysis of current conversion performance and opportunities.',
        duration: '2 weeks',
        deliverables: ['Analytics Audit', 'UX Analysis', 'Competitor Review', 'Opportunity Report']
      },
      {
        icon: 'Users',
        title: 'User Research',
        description: 'Deep research into user behavior and conversion barriers.',
        duration: '2-3 weeks',
        deliverables: ['User Testing', 'Heatmaps', 'Survey Results', 'Persona Updates']
      },
      {
        icon: 'Lightbulb',
        title: 'Hypothesis Development',
        description: 'Develop data-backed hypotheses for testing.',
        duration: '1 week',
        deliverables: ['Test Hypotheses', 'Prioritization', 'Test Roadmap', 'Impact Estimates']
      },
      {
        icon: 'PenTool',
        title: 'Test Design',
        description: 'Design test variations with clear success metrics.',
        duration: '1-2 weeks',
        deliverables: ['Variation Designs', 'Test Specs', 'Success Metrics', 'Sample Size']
      },
      {
        icon: 'PlayCircle',
        title: 'Testing Execution',
        description: 'Launch tests and monitor for statistical significance.',
        duration: '2-8 weeks per test',
        deliverables: ['Live Tests', 'Monitoring', 'QA', 'Documentation']
      },
      {
        icon: 'BarChart2',
        title: 'Analysis & Iteration',
        description: 'Analyze results and apply learnings to future tests.',
        duration: 'Ongoing',
        deliverables: ['Test Results', 'Insights', 'Implementation', 'Next Tests']
      }
    ],
    totalDuration: 'Ongoing program'
  },
  benefits: [
    {
      icon: 'TrendingUp',
      title: 'Higher Conversions',
      description: 'Systematically improve conversion rates through testing.',
      stat: '38%',
      statSuffix: '',
      statLabel: 'Avg conversion lift'
    },
    {
      icon: 'DollarSign',
      title: 'Better ROI',
      description: 'Get more value from existing traffic investment.',
      stat: '223%',
      statSuffix: '',
      statLabel: 'Avg ROI increase'
    },
    {
      icon: 'Target',
      title: 'Lower Acquisition Cost',
      description: 'Reduce cost per customer through better conversion.',
      stat: '45%',
      statSuffix: '',
      statLabel: 'Lower CAC'
    },
    {
      icon: 'Users',
      title: 'Better User Experience',
      description: 'Improve experience based on actual user behavior.',
      stat: '67%',
      statSuffix: '',
      statLabel: 'UX improvement'
    },
    {
      icon: 'CheckCircle',
      title: 'Data-Driven Decisions',
      description: 'Make changes with statistical confidence.',
      stat: '95%',
      statSuffix: '',
      statLabel: 'Confidence level'
    },
    {
      icon: 'Repeat',
      title: 'Compounding Gains',
      description: 'Improvements compound over time with ongoing testing.',
      stat: '10x',
      statSuffix: '',
      statLabel: 'Long-term impact'
    }
  ],
  techStack: [
    {
      name: 'Testing Platforms',
      description: 'A/B testing tools',
      technologies: [
        { name: 'Optimizely', icon: 'optimizely', category: 'Testing', proficiency: 'expert' },
        { name: 'VWO', icon: 'vwo', category: 'Testing', proficiency: 'expert' },
        { name: 'Google Optimize', icon: 'google', category: 'Testing', proficiency: 'expert' },
        { name: 'AB Tasty', icon: 'abtasty', category: 'Testing', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Research Tools',
      description: 'User research and analysis',
      technologies: [
        { name: 'Hotjar', icon: 'hotjar', category: 'Heatmaps', proficiency: 'expert' },
        { name: 'FullStory', icon: 'fullstory', category: 'Session Recording', proficiency: 'expert' },
        { name: 'UserTesting', icon: 'usertesting', category: 'User Testing', proficiency: 'expert' },
        { name: 'Qualaroo', icon: 'qualaroo', category: 'Surveys', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Analytics',
      description: 'Data and analytics',
      technologies: [
        { name: 'Google Analytics 4', icon: 'ga4', category: 'Analytics', proficiency: 'expert' },
        { name: 'Mixpanel', icon: 'mixpanel', category: 'Product', proficiency: 'advanced' },
        { name: 'Amplitude', icon: 'amplitude', category: 'Product', proficiency: 'advanced' },
        { name: 'Heap', icon: 'heap', category: 'Analytics', proficiency: 'proficient' }
      ]
    },
    {
      name: 'Landing Pages',
      description: 'Landing page tools',
      technologies: [
        { name: 'Unbounce', icon: 'unbounce', category: 'Landing Pages', proficiency: 'expert' },
        { name: 'Instapage', icon: 'instapage', category: 'Landing Pages', proficiency: 'expert' },
        { name: 'Leadpages', icon: 'leadpages', category: 'Landing Pages', proficiency: 'advanced' },
        { name: 'Webflow', icon: 'webflow', category: 'Development', proficiency: 'expert' }
      ]
    }
  ],
  pricing: {
    plans: [
      {
        name: 'CRO Starter',
        description: 'Foundation conversion optimization',
        price: '$5,000',
        priceNote: 'Per month',
        features: [
          { name: 'Conversion Audit', included: true },
          { name: 'User Research (Basic)', included: true },
          { name: '2 A/B Tests Monthly', included: true },
          { name: 'Heatmap Analysis', included: true },
          { name: 'Monthly Reporting', included: true },
          { name: 'Recommendations', included: true },
          { name: 'User Testing', included: false },
          { name: 'Personalization', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'CRO Growth',
        description: 'Comprehensive CRO program',
        price: '$10,000',
        priceNote: 'Per month',
        badge: 'Most Popular',
        features: [
          { name: 'Full Conversion Audit', included: true },
          { name: 'Advanced User Research', included: true },
          { name: '4-6 A/B Tests Monthly', included: true },
          { name: 'User Testing Sessions', included: true },
          { name: 'Landing Page Design', included: true },
          { name: 'Funnel Optimization', included: true },
          { name: 'Bi-weekly Reporting', included: true },
          { name: 'Dedicated CRO Strategist', included: true }
        ],
        ctaText: 'Start Growing',
        highlighted: true
      },
      {
        name: 'CRO Enterprise',
        description: 'Full-scale optimization program',
        price: '$25,000+',
        priceNote: 'Per month',
        features: [
          { name: 'Enterprise Audit', included: true },
          { name: 'Continuous User Research', included: true },
          { name: 'Unlimited A/B Tests', included: true },
          { name: 'Personalization Program', included: true },
          { name: 'Multi-Page Testing', included: true },
          { name: 'Development Support', included: true },
          { name: 'Weekly Reporting', included: true },
          { name: 'Dedicated CRO Team', included: true }
        ],
        ctaText: 'Contact Sales',
        highlighted: false
      }
    ],
    customNote: 'Testing platform fees may be additional. Custom programs available for specific optimization needs.'
  },
  portfolio: [
    {
      title: 'E-commerce Checkout Optimization',
      client: 'LuxeHome Furnishings',
      industry: 'E-commerce / Home',
      description: 'Systematic checkout optimization reducing cart abandonment.',
      challenge: 'LuxeHome had 78% cart abandonment with no visibility into why customers were not completing purchases.',
      solution: 'We conducted research, redesigned checkout flow, and ran 15 A/B tests over 6 months.',
      results: [
        '34% reduction in abandonment',
        '52% checkout conversion lift',
        '$3.2M additional revenue',
        '4.2x ROI on program'
      ],
      metrics: [
        { label: 'Abandonment', value: '-34%' },
        { label: 'Conversion Lift', value: '+52%' },
        { label: 'Revenue', value: '+$3.2M' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['E-commerce CRO', 'Checkout', 'A/B Testing', 'Cart Optimization']
    },
    {
      title: 'B2B Lead Gen Optimization',
      client: 'TechSolutions Pro',
      industry: 'SaaS / B2B',
      description: 'Landing page and form optimization for B2B lead generation.',
      challenge: 'TechSolutions was paying $200 per click on Google Ads but only converting at 2%.',
      solution: 'We redesigned landing pages, optimized forms, and implemented progressive profiling.',
      results: [
        '156% conversion rate increase',
        '$75 reduction in CPL',
        '320 additional leads monthly',
        '6.8x program ROI'
      ],
      metrics: [
        { label: 'Conversion Lift', value: '+156%' },
        { label: 'CPL Reduction', value: '-$75' },
        { label: 'Monthly Leads', value: '+320' }
      ],
      image: 'https://images.unsplash.com/photo-1543286386-713bdc93f39a?w=800&h=600&fit=crop',
      tags: ['B2B CRO', 'Landing Pages', 'Form Optimization', 'Lead Gen']
    },
    {
      title: 'SaaS Free Trial Optimization',
      client: 'DataStream Analytics',
      industry: 'SaaS / Analytics',
      description: 'Optimizing free trial signup and activation for SaaS platform.',
      challenge: 'DataStream had strong traffic but only 1.5% signed up for free trial, and 20% activated.',
      solution: 'We optimized the signup flow, reduced friction, and improved onboarding experience.',
      results: [
        '89% trial signup increase',
        '45% activation improvement',
        '$1.8M additional ARR',
        '340% program ROI'
      ],
      metrics: [
        { label: 'Trial Signups', value: '+89%' },
        { label: 'Activation', value: '+45%' },
        { label: 'ARR Added', value: '$1.8M' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['SaaS CRO', 'Free Trial', 'Onboarding', 'Activation']
    },
    {
      title: 'Healthcare Appointment Booking Optimization',
      client: 'CareFirst Medical',
      industry: 'Healthcare',
      description: 'Conversion optimization for medical appointment booking funnel.',
      challenge: 'CareFirst had high website traffic but only 2.3% of visitors booked appointments online.',
      solution: 'We simplified the booking flow, added trust signals, implemented smart scheduling, and optimized for mobile.',
      results: [
        '234% booking conversion increase',
        '45% reduction in call center volume',
        '$890K operational savings',
        '78% patient satisfaction score'
      ],
      metrics: [
        { label: 'Booking Conversion', value: '+234%' },
        { label: 'Call Volume', value: '-45%' },
        { label: 'Savings', value: '$890K' }
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['Healthcare CRO', 'Booking Optimization', 'UX', 'Mobile']
    }
  ],
  testimonials: [
    {
      quote: 'They found $3.2M hiding in our checkout flow. The systematic testing approach delivered results we could not have achieved guessing.',
      author: 'Amanda Chen',
      role: 'VP of E-commerce',
      company: 'LuxeHome Furnishings',
      rating: 5,
      location: 'Seattle, USA'
    },
    {
      quote: 'Our cost per lead dropped $75 while lead quality improved. CRO was the best marketing investment we made this year.',
      author: 'David Park',
      role: 'Head of Marketing',
      company: 'TechSolutions Pro',
      rating: 5,
      location: 'Austin, USA'
    },
    {
      quote: 'We almost doubled our trial signups. The research-driven approach uncovered issues we never would have found on our own.',
      author: 'Sarah Miller',
      role: 'VP Growth',
      company: 'DataStream Analytics',
      rating: 5,
      location: 'San Francisco, USA'
    }
  ],
  faqs: [
    {
      question: 'How long until we see results from CRO?',
      answer: 'You will start seeing test results within 2-4 weeks of launching tests. However, building a statistically significant improvement takes 3-6 months of consistent testing. CRO is an ongoing program that compounds over time.'
    },
    {
      question: 'How much traffic do we need for A/B testing?',
      answer: 'Generally, you need at least 1,000 conversions monthly to run meaningful tests. With lower traffic, tests take longer to reach significance. We assess your traffic and recommend appropriate testing strategies for your volume.'
    },
    {
      question: 'What is the difference between A/B and multivariate testing?',
      answer: 'A/B testing compares two versions of a page. Multivariate tests multiple elements simultaneously to find the best combination. A/B tests are simpler and faster; multivariate requires more traffic but can optimize multiple elements at once.'
    },
    {
      question: 'Do you just run tests or also implement changes?',
      answer: 'We handle the full process from research to implementation. We design variations, run tests, analyze results, and can implement winning variations. We can work with your development team or handle implementation directly.'
    },
    {
      question: 'What testing platform do you use?',
      answer: 'We are experts in all major platforms including Optimizely, VWO, and Google Optimize. We recommend platforms based on your needs, traffic, and budget. If you already have a platform, we work with what you have.'
    },
    {
      question: 'How do you prioritize what to test?',
      answer: 'We use a data-driven prioritization framework considering potential impact, confidence level, and ease of implementation. Research findings, analytics data, and user feedback inform our hypothesis development and test roadmap.'
    }
  ],
  relatedServices: [
    {
      name: 'Analytics & Reporting',
      slug: 'analytics-reporting',
      description: 'Data for CRO insights',
      icon: 'BarChart2'
    },
    {
      name: 'PPC Advertising',
      slug: 'ppc-advertising',
      description: 'Drive traffic to optimize',
      icon: 'DollarSign'
    },
    {
      name: 'Web Design',
      slug: 'web-design',
      description: 'Conversion-focused design',
      icon: 'Layout'
    },
    {
      name: 'User Experience Design',
      slug: 'user-experience-design',
      description: 'UX research and design',
      icon: 'Users'
    }
  ],
  seo: {
    title: 'Conversion Rate Optimization Services | CRO Agency | A/B Testing',
    description: 'Professional conversion rate optimization services that turn more visitors into customers. A/B testing, user research, landing page optimization, and funnel optimization. 38% average conversion lift.',
    keywords: [
      'conversion rate optimization',
      'CRO services',
      'A/B testing',
      'conversion optimization',
      'landing page optimization',
      'CRO agency',
      'website optimization',
      'conversion funnel',
      'checkout optimization',
      'user testing'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Conversion Rate Optimization',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'CRO Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'A/B Testing'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Landing Page Optimization'
            }
          }
        ]
      }
    }
  }
};
