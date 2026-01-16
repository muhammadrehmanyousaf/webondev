import { ServiceData } from '@/components/services/sections';

export const seoServicesData: ServiceData = {
  name: 'SEO Services',
  slug: 'seo-services',
  tagline: 'Dominate Search Rankings',
  category: 'Digital Marketing',
  description: 'Comprehensive SEO services that drive organic traffic and dominate search rankings. Our data-driven strategies improve visibility, increase qualified leads, and deliver sustainable growth.',
  hero: {
    headline: 'SEO Services',
    subheadline: 'Dominate Search Rankings & Drive Organic Growth',
    description: 'Transform your online visibility with proven SEO strategies. We optimize your website to rank higher, attract qualified traffic, and convert visitors into customers through sustainable organic growth.',
    keyFeatures: [
      'Technical SEO Optimization',
      'Content Strategy & Creation',
      'Link Building & Authority',
      'Local SEO Domination'
    ],
    badges: ['Google Partner', '500+ Sites Ranked', '10M+ Keywords Tracked']
  },
  painPoints: [
    {
      icon: 'TrendingDown',
      title: 'Invisible on Google',
      description: 'Your website is buried on page 2+ where 95% of searchers never look.',
      stat: '0.63%',
      statLabel: 'Page 2 click rate'
    },
    {
      icon: 'DollarSign',
      title: 'Rising Ad Costs',
      description: 'Relying solely on paid ads creates unsustainable customer acquisition costs.',
      stat: '400%',
      statLabel: 'PPC cost increase'
    },
    {
      icon: 'Users',
      title: 'Competitors Outranking You',
      description: 'Competitors capture your potential customers by ranking above you for key terms.',
      stat: '70%',
      statLabel: 'Market share to top 3'
    },
    {
      icon: 'AlertTriangle',
      title: 'Technical SEO Issues',
      description: 'Hidden technical problems prevent search engines from properly indexing your site.',
      stat: '68%',
      statLabel: 'Sites have issues'
    },
    {
      icon: 'FileText',
      title: 'Content Not Ranking',
      description: 'Creating content without SEO strategy wastes resources with no search visibility.',
      stat: '90%',
      statLabel: 'Content gets no traffic'
    },
    {
      icon: 'MapPin',
      title: 'Missing Local Searches',
      description: 'Local customers searching for your services find competitors instead.',
      stat: '46%',
      statLabel: 'Searches are local'
    }
  ],
  solutions: [
    {
      icon: 'Code',
      title: 'Technical SEO',
      description: 'Comprehensive technical optimization ensuring search engines can crawl and index your site effectively.',
      highlights: ['Site Speed Optimization', 'Core Web Vitals', 'Schema Markup', 'Crawlability Fixes']
    },
    {
      icon: 'FileText',
      title: 'Content SEO',
      description: 'Strategic content optimization and creation targeting high-value keywords your audience searches.',
      highlights: ['Keyword Research', 'Content Optimization', 'Topic Clusters', 'Content Gap Analysis']
    },
    {
      icon: 'Link',
      title: 'Link Building',
      description: 'White-hat link acquisition strategies building domain authority and search rankings.',
      highlights: ['Quality Backlinks', 'Digital PR', 'Guest Posting', 'Broken Link Building']
    },
    {
      icon: 'MapPin',
      title: 'Local SEO',
      description: 'Dominate local search results and capture customers searching in your service area.',
      highlights: ['Google Business Profile', 'Local Citations', 'Review Management', 'Local Content']
    },
    {
      icon: 'ShoppingCart',
      title: 'E-commerce SEO',
      description: 'Specialized optimization for online stores to rank product and category pages.',
      highlights: ['Product Page SEO', 'Category Optimization', 'Schema for Products', 'Faceted Navigation']
    },
    {
      icon: 'Globe',
      title: 'International SEO',
      description: 'Multi-language and multi-region SEO strategies for global market expansion.',
      highlights: ['Hreflang Setup', 'Geo-targeting', 'Multi-language Content', 'International Link Building']
    }
  ],
  process: {
    steps: [
      {
        icon: 'Search',
        title: 'SEO Audit',
        description: 'Comprehensive analysis of your current SEO performance, competitors, and opportunities.',
        duration: '1-2 weeks',
        deliverables: ['Technical Audit', 'Content Audit', 'Competitor Analysis', 'Keyword Research']
      },
      {
        icon: 'Target',
        title: 'Strategy Development',
        description: 'Creating a customized SEO roadmap based on your goals and competitive landscape.',
        duration: '1 week',
        deliverables: ['SEO Strategy', 'Keyword Targets', 'Content Plan', 'Link Building Strategy']
      },
      {
        icon: 'Settings',
        title: 'Technical Optimization',
        description: 'Fixing technical issues and implementing foundational SEO improvements.',
        duration: '2-4 weeks',
        deliverables: ['Technical Fixes', 'Site Speed Improvements', 'Schema Implementation', 'Site Structure']
      },
      {
        icon: 'FileText',
        title: 'Content Optimization',
        description: 'Optimizing existing content and creating new SEO-focused content assets.',
        duration: 'Ongoing',
        deliverables: ['Optimized Pages', 'New Content', 'Blog Posts', 'Landing Pages']
      },
      {
        icon: 'Link',
        title: 'Authority Building',
        description: 'Building high-quality backlinks and domain authority through outreach.',
        duration: 'Ongoing',
        deliverables: ['Quality Backlinks', 'Brand Mentions', 'Digital PR Coverage']
      },
      {
        icon: 'BarChart2',
        title: 'Monitoring & Reporting',
        description: 'Tracking rankings, traffic, and conversions with regular reporting and optimization.',
        duration: 'Ongoing',
        deliverables: ['Monthly Reports', 'Ranking Tracking', 'Traffic Analysis', 'Conversion Tracking']
      }
    ],
    totalDuration: '6-12 months'
  },
  benefits: [
    {
      icon: 'TrendingUp',
      title: 'Increased Organic Traffic',
      description: 'Drive more qualified visitors through improved search visibility.',
      stat: '312%',
      statSuffix: '',
      statLabel: 'Avg traffic increase'
    },
    {
      icon: 'Target',
      title: 'Higher Rankings',
      description: 'Achieve page 1 rankings for your most valuable keywords.',
      stat: '85%',
      statSuffix: '',
      statLabel: 'Keywords on page 1'
    },
    {
      icon: 'DollarSign',
      title: 'Lower Acquisition Costs',
      description: 'Reduce dependence on paid ads with sustainable organic traffic.',
      stat: '61%',
      statSuffix: '',
      statLabel: 'Lower cost per lead'
    },
    {
      icon: 'Users',
      title: 'Qualified Lead Generation',
      description: 'Attract visitors actively searching for your products or services.',
      stat: '14.6%',
      statSuffix: '',
      statLabel: 'SEO conversion rate'
    },
    {
      icon: 'Award',
      title: 'Brand Authority',
      description: 'Build trust and credibility through consistent search presence.',
      stat: '75%',
      statSuffix: '',
      statLabel: 'Trust top results'
    },
    {
      icon: 'Clock',
      title: 'Long-term Results',
      description: 'Create sustainable traffic growth that compounds over time.',
      stat: '5.7x',
      statSuffix: '',
      statLabel: 'ROI vs paid ads'
    }
  ],
  techStack: [
    {
      name: 'SEO Platforms',
      description: 'Enterprise SEO tools',
      technologies: [
        { name: 'Ahrefs', icon: 'ahrefs', category: 'SEO Suite', proficiency: 'expert' },
        { name: 'SEMrush', icon: 'semrush', category: 'SEO Suite', proficiency: 'expert' },
        { name: 'Moz Pro', icon: 'moz', category: 'SEO Suite', proficiency: 'advanced' },
        { name: 'Screaming Frog', icon: 'screamingfrog', category: 'Crawler', proficiency: 'expert' }
      ]
    },
    {
      name: 'Analytics & Tracking',
      description: 'Data and analytics platforms',
      technologies: [
        { name: 'Google Analytics 4', icon: 'ga4', category: 'Analytics', proficiency: 'expert' },
        { name: 'Google Search Console', icon: 'gsc', category: 'Search', proficiency: 'expert' },
        { name: 'Looker Studio', icon: 'lookerstudio', category: 'Reporting', proficiency: 'expert' },
        { name: 'BigQuery', icon: 'bigquery', category: 'Data', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Technical Tools',
      description: 'Technical SEO analysis',
      technologies: [
        { name: 'PageSpeed Insights', icon: 'pagespeed', category: 'Performance', proficiency: 'expert' },
        { name: 'Schema Validator', icon: 'schema', category: 'Structured Data', proficiency: 'expert' },
        { name: 'GTmetrix', icon: 'gtmetrix', category: 'Performance', proficiency: 'advanced' },
        { name: 'Mobile-Friendly Test', icon: 'mobile', category: 'Mobile', proficiency: 'expert' }
      ]
    },
    {
      name: 'Content & Research',
      description: 'Content optimization tools',
      technologies: [
        { name: 'Surfer SEO', icon: 'surfer', category: 'Content', proficiency: 'expert' },
        { name: 'Clearscope', icon: 'clearscope', category: 'Content', proficiency: 'advanced' },
        { name: 'MarketMuse', icon: 'marketmuse', category: 'Content', proficiency: 'advanced' },
        { name: 'Frase', icon: 'frase', category: 'Content', proficiency: 'proficient' }
      ]
    }
  ],
  pricing: {
    plans: [
      {
        name: 'SEO Starter',
        description: 'Foundation SEO for small businesses',
        price: '$2,000',
        priceNote: 'Per month',
        features: [
          { name: 'Up to 50 Target Keywords', included: true },
          { name: 'Technical SEO Audit', included: true },
          { name: 'On-Page Optimization', included: true },
          { name: 'Monthly Reporting', included: true },
          { name: 'Basic Link Building', included: true },
          { name: 'Google Business Profile', included: true },
          { name: 'Content Creation', included: false },
          { name: 'Dedicated Strategist', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'SEO Growth',
        description: 'Comprehensive SEO for growing businesses',
        price: '$5,000',
        priceNote: 'Per month',
        badge: 'Most Popular',
        features: [
          { name: 'Up to 150 Target Keywords', included: true },
          { name: 'Advanced Technical SEO', included: true },
          { name: 'Content Strategy & Creation', included: true },
          { name: 'Aggressive Link Building', included: true },
          { name: 'Local SEO Optimization', included: true },
          { name: 'Competitor Monitoring', included: true },
          { name: 'Bi-weekly Reporting', included: true },
          { name: 'Dedicated Strategist', included: true }
        ],
        ctaText: 'Start Growing',
        highlighted: true
      },
      {
        name: 'SEO Enterprise',
        description: 'Full-scale SEO for large organizations',
        price: '$10,000+',
        priceNote: 'Per month',
        features: [
          { name: 'Unlimited Keywords', included: true },
          { name: 'Enterprise Technical SEO', included: true },
          { name: 'Full Content Program', included: true },
          { name: 'Premium Link Building', included: true },
          { name: 'International SEO', included: true },
          { name: 'E-commerce SEO', included: true },
          { name: 'Weekly Reporting', included: true },
          { name: 'Dedicated SEO Team', included: true }
        ],
        ctaText: 'Contact Sales',
        highlighted: false
      }
    ],
    customNote: 'All plans include initial setup fee. Custom enterprise packages available for large-scale SEO needs.'
  },
  portfolio: [
    {
      title: 'SaaS Company Organic Growth',
      client: 'CloudTech Solutions',
      industry: 'SaaS / Technology',
      description: 'Comprehensive SEO strategy for B2B SaaS company targeting enterprise customers.',
      challenge: 'CloudTech was invisible for competitive SaaS keywords, relying entirely on paid acquisition costing $200+ per lead.',
      solution: 'We implemented technical SEO fixes, built 100+ pages of optimized content, and executed a strategic link building campaign.',
      results: [
        '450% organic traffic increase',
        '85 keywords on page 1',
        '$45 cost per organic lead',
        '$2.4M pipeline from SEO'
      ],
      metrics: [
        { label: 'Traffic Growth', value: '+450%' },
        { label: 'Page 1 Keywords', value: '85' },
        { label: 'Pipeline Value', value: '$2.4M' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['SaaS SEO', 'B2B', 'Content Strategy', 'Link Building']
    },
    {
      title: 'E-commerce Category Domination',
      client: 'HomeStyle Furnishings',
      industry: 'E-commerce / Retail',
      description: 'E-commerce SEO strategy to rank product and category pages against major retailers.',
      challenge: 'HomeStyle was losing market share to Amazon and big-box retailers in organic search results.',
      solution: 'We optimized 2,000+ product pages, built category landing pages, and implemented e-commerce schema markup.',
      results: [
        '380% organic revenue increase',
        '15,000+ keywords ranking',
        '$4.2M additional annual revenue',
        '67% less PPC spend'
      ],
      metrics: [
        { label: 'Revenue Growth', value: '+380%' },
        { label: 'Keywords Ranking', value: '15K+' },
        { label: 'Additional Revenue', value: '$4.2M' }
      ],
      image: 'https://images.unsplash.com/photo-1543286386-713bdc93f39a?w=800&h=600&fit=crop',
      tags: ['E-commerce SEO', 'Product SEO', 'Schema', 'Retail']
    },
    {
      title: 'Local Service Business Growth',
      client: 'Premier Plumbing Co',
      industry: 'Home Services',
      description: 'Local SEO domination strategy for multi-location plumbing service company.',
      challenge: 'Premier Plumbing needed to dominate local search in 12 service areas against established competitors.',
      solution: 'We optimized Google Business Profiles, built location pages, managed reviews, and built local citations.',
      results: [
        '520% local pack appearances',
        '340% increase in calls',
        '#1 ranking in 10/12 markets',
        '890+ 5-star reviews'
      ],
      metrics: [
        { label: 'Local Visibility', value: '+520%' },
        { label: 'Phone Calls', value: '+340%' },
        { label: '#1 Rankings', value: '10/12' }
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['Local SEO', 'Google Business', 'Home Services', 'Multi-location']
    },
    {
      title: 'Healthcare Content SEO Strategy',
      client: 'MedWell Clinics',
      industry: 'Healthcare',
      description: 'Content-driven SEO strategy for healthcare provider network across multiple specialties.',
      challenge: 'MedWell struggled to rank for competitive healthcare keywords while maintaining YMYL compliance and medical accuracy.',
      solution: 'We developed authoritative medical content reviewed by physicians, built E-E-A-T signals, and optimized for healthcare-specific search intent.',
      results: [
        '620% organic traffic increase',
        '156 featured snippets won',
        '45% increase in patient bookings',
        'Top 3 rankings for 200+ medical terms'
      ],
      metrics: [
        { label: 'Traffic Growth', value: '+620%' },
        { label: 'Featured Snippets', value: '156' },
        { label: 'Patient Bookings', value: '+45%' }
      ],
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
      tags: ['Healthcare SEO', 'Content Strategy', 'E-E-A-T', 'YMYL']
    }
  ],
  testimonials: [
    {
      quote: 'Our organic traffic increased 450% and we now generate $200K monthly in organic pipeline. Best marketing investment we have made.',
      author: 'David Miller',
      role: 'VP of Marketing',
      company: 'CloudTech Solutions',
      rating: 5,
      location: 'San Francisco, USA'
    },
    {
      quote: 'We went from invisible to dominating our category in organic search. The ROI has been incredible compared to our ad spend.',
      author: 'Sarah Thompson',
      role: 'E-commerce Director',
      company: 'HomeStyle Furnishings',
      rating: 5,
      location: 'Dallas, USA'
    },
    {
      quote: 'Our phone is ringing constantly from Google searches. We rank #1 in almost every market we serve. Game changer for our business.',
      author: 'Mike Johnson',
      role: 'Owner',
      company: 'Premier Plumbing Co',
      rating: 5,
      location: 'Phoenix, USA'
    }
  ],
  faqs: [
    {
      question: 'How long does it take to see SEO results?',
      answer: 'SEO is a long-term strategy. You will typically see initial improvements in 3-6 months, with significant results in 6-12 months. However, competitive industries may take longer. We focus on quick wins early while building toward sustainable long-term growth.'
    },
    {
      question: 'What is included in your SEO services?',
      answer: 'Our comprehensive SEO services include technical audits and fixes, keyword research, on-page optimization, content strategy and creation, link building, local SEO, and ongoing monitoring and reporting. The specific mix depends on your package and business needs.'
    },
    {
      question: 'How do you measure SEO success?',
      answer: 'We track multiple KPIs including organic traffic growth, keyword rankings, conversion rates, and revenue from organic search. We provide detailed monthly reports showing progress against your specific goals and ROI from your SEO investment.'
    },
    {
      question: 'Do you guarantee first page rankings?',
      answer: 'No ethical SEO company can guarantee specific rankings because Google controls their algorithm. What we guarantee is following best practices, transparent reporting, and dedicated effort toward your goals. Our track record shows consistent success across hundreds of clients.'
    },
    {
      question: 'How is your SEO different from other agencies?',
      answer: 'We focus on ROI, not just rankings. Our strategies are built around driving revenue, not vanity metrics. We combine technical expertise with content and link building for comprehensive results. Plus, we provide complete transparency in our methods and reporting.'
    },
    {
      question: 'Can you help recover from a Google penalty?',
      answer: 'Yes, we specialize in penalty recovery and have successfully recovered sites from both manual actions and algorithmic penalties. We conduct thorough audits to identify issues, clean up problematic links or content, and submit reconsideration requests when needed.'
    }
  ],
  relatedServices: [
    {
      name: 'Content Marketing',
      slug: 'content-marketing',
      description: 'SEO-optimized content that ranks',
      icon: 'FileText'
    },
    {
      name: 'PPC Advertising',
      slug: 'ppc-advertising',
      description: 'Complement SEO with paid search',
      icon: 'DollarSign'
    },
    {
      name: 'Analytics & Reporting',
      slug: 'analytics-reporting',
      description: 'Track and measure SEO performance',
      icon: 'BarChart2'
    },
    {
      name: 'Web Development',
      slug: 'custom-web-development',
      description: 'SEO-friendly website development',
      icon: 'Code'
    }
  ],
  seo: {
    title: 'SEO Services | Search Engine Optimization Agency | Organic Growth',
    description: 'Professional SEO services that drive organic traffic and revenue. Technical SEO, content optimization, link building, and local SEO strategies that deliver measurable results. 312% average traffic increase.',
    keywords: [
      'SEO services',
      'search engine optimization',
      'SEO agency',
      'organic traffic',
      'keyword rankings',
      'technical SEO',
      'link building',
      'local SEO',
      'content SEO',
      'SEO consultant'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Search Engine Optimization',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'SEO Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Technical SEO'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Local SEO'
            }
          }
        ]
      }
    }
  }
};
