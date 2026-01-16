import { ServiceData } from '@/components/services/sections';

export const emailMarketingData: ServiceData = {
  name: 'Email Marketing',
  slug: 'email-marketing',
  tagline: 'Nurture Leads Into Customers',
  category: 'Digital Marketing',
  description: 'Strategic email marketing services that nurture leads, drive sales, and build customer loyalty. From automation to campaigns, we create email programs that deliver measurable ROI.',
  hero: {
    headline: 'Email Marketing Services',
    subheadline: 'Turn Subscribers Into Loyal Customers',
    description: 'Build lasting customer relationships through strategic email marketing. We create automated sequences, campaigns, and newsletters that drive engagement, conversions, and revenue.',
    keyFeatures: [
      'Email Automation',
      'Campaign Strategy',
      'List Growth & Segmentation',
      'A/B Testing & Optimization'
    ],
    badges: ['500M+ Emails Sent', '$42 Avg ROI per $1', '35% Avg Open Rate']
  },
  painPoints: [
    {
      icon: 'Mail',
      title: 'Low Open Rates',
      description: 'Emails go unopened, wasting effort and missing revenue opportunities.',
      stat: '21%',
      statLabel: 'Avg open rate'
    },
    {
      icon: 'UserMinus',
      title: 'High Unsubscribe Rates',
      description: 'Subscribers leave because emails lack value or relevance.',
      stat: '0.5%',
      statLabel: 'Avg unsubscribe rate'
    },
    {
      icon: 'AlertTriangle',
      title: 'Deliverability Issues',
      description: 'Emails landing in spam folders instead of inboxes.',
      stat: '20%',
      statLabel: 'Never reach inbox'
    },
    {
      icon: 'Clock',
      title: 'No Automation',
      description: 'Manual email sending wastes time and misses critical touchpoints.',
      stat: '75%',
      statLabel: 'Lack automation'
    },
    {
      icon: 'Users',
      title: 'No Segmentation',
      description: 'Sending the same email to everyone regardless of interest or behavior.',
      stat: '89%',
      statLabel: 'Do not segment'
    },
    {
      icon: 'ShoppingCart',
      title: 'Missed Revenue',
      description: 'Abandoned carts and inactive customers without recovery emails.',
      stat: '$18B',
      statLabel: 'Lost to cart abandonment'
    }
  ],
  solutions: [
    {
      icon: 'Settings',
      title: 'Email Automation',
      description: 'Automated email sequences that nurture leads and drive conversions 24/7.',
      highlights: ['Welcome Sequences', 'Drip Campaigns', 'Abandoned Cart', 'Post-Purchase']
    },
    {
      icon: 'Send',
      title: 'Campaign Management',
      description: 'Strategic email campaigns for promotions, launches, and engagement.',
      highlights: ['Promotional Campaigns', 'Product Launches', 'Seasonal Campaigns', 'Re-engagement']
    },
    {
      icon: 'FileText',
      title: 'Newsletter Strategy',
      description: 'Engaging newsletters that build relationships and keep your brand top-of-mind.',
      highlights: ['Content Curation', 'Design & Layout', 'Scheduling', 'Performance Analysis']
    },
    {
      icon: 'Users',
      title: 'List Management',
      description: 'Strategic list growth, segmentation, and hygiene for maximum deliverability.',
      highlights: ['List Growth', 'Segmentation', 'List Cleaning', 'Preference Centers']
    },
    {
      icon: 'PenTool',
      title: 'Email Design',
      description: 'Beautiful, responsive email templates that convert on any device.',
      highlights: ['Custom Templates', 'Responsive Design', 'Brand Alignment', 'Accessibility']
    },
    {
      icon: 'TrendingUp',
      title: 'Testing & Optimization',
      description: 'Data-driven optimization to continuously improve email performance.',
      highlights: ['A/B Testing', 'Subject Line Testing', 'Send Time Optimization', 'Content Testing']
    }
  ],
  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Email Audit',
        description: 'Analyze current email program, list health, and performance metrics.',
        duration: '1 week',
        deliverables: ['Performance Audit', 'List Analysis', 'Deliverability Check', 'Competitor Review']
      },
      {
        icon: 'Map',
        title: 'Strategy Development',
        description: 'Create comprehensive email strategy aligned with business goals.',
        duration: '1-2 weeks',
        deliverables: ['Email Strategy', 'Automation Flows', 'Segmentation Plan', 'Calendar']
      },
      {
        icon: 'Settings',
        title: 'Platform Setup',
        description: 'Configure email platform, integrations, and tracking.',
        duration: '1-2 weeks',
        deliverables: ['Platform Configuration', 'Integrations', 'Tracking Setup', 'Templates']
      },
      {
        icon: 'GitBranch',
        title: 'Automation Build',
        description: 'Build automated email sequences for key customer journeys.',
        duration: '2-4 weeks',
        deliverables: ['Welcome Series', 'Nurture Sequences', 'Abandoned Cart', 'Win-back']
      },
      {
        icon: 'PlayCircle',
        title: 'Campaign Execution',
        description: 'Create and send strategic email campaigns.',
        duration: 'Ongoing',
        deliverables: ['Campaign Creation', 'Design', 'Copywriting', 'Scheduling']
      },
      {
        icon: 'BarChart2',
        title: 'Analysis & Optimization',
        description: 'Monitor performance and optimize for continuous improvement.',
        duration: 'Ongoing',
        deliverables: ['Performance Reports', 'A/B Tests', 'Optimization', 'Recommendations']
      }
    ],
    totalDuration: 'Ongoing partnership'
  },
  benefits: [
    {
      icon: 'DollarSign',
      title: 'Highest Marketing ROI',
      description: 'Email delivers the highest ROI of any marketing channel.',
      stat: '$42',
      statSuffix: '',
      statLabel: 'ROI per $1 spent'
    },
    {
      icon: 'TrendingUp',
      title: 'Increased Revenue',
      description: 'Automated emails recover lost sales and drive repeat purchases.',
      stat: '320%',
      statSuffix: '',
      statLabel: 'Revenue from automation'
    },
    {
      icon: 'Users',
      title: 'Customer Retention',
      description: 'Keep customers engaged and coming back for more.',
      stat: '80%',
      statSuffix: '',
      statLabel: 'Retention improvement'
    },
    {
      icon: 'Target',
      title: 'Personalized Engagement',
      description: 'Reach the right people with the right message at the right time.',
      stat: '6x',
      statSuffix: '',
      statLabel: 'Higher transaction rates'
    },
    {
      icon: 'ShoppingCart',
      title: 'Cart Recovery',
      description: 'Recover abandoned carts with automated recovery sequences.',
      stat: '15%',
      statSuffix: '',
      statLabel: 'Carts recovered'
    },
    {
      icon: 'Award',
      title: 'Brand Loyalty',
      description: 'Build lasting relationships through consistent communication.',
      stat: '40%',
      statSuffix: '',
      statLabel: 'Repeat purchase rate'
    }
  ],
  techStack: [
    {
      name: 'Email Platforms',
      description: 'Email service providers',
      technologies: [
        { name: 'Klaviyo', icon: 'klaviyo', category: 'E-commerce', proficiency: 'expert' },
        { name: 'HubSpot', icon: 'hubspot', category: 'B2B', proficiency: 'expert' },
        { name: 'Mailchimp', icon: 'mailchimp', category: 'SMB', proficiency: 'expert' },
        { name: 'ActiveCampaign', icon: 'activecampaign', category: 'Automation', proficiency: 'expert' }
      ]
    },
    {
      name: 'Enterprise Platforms',
      description: 'Enterprise email solutions',
      technologies: [
        { name: 'Salesforce Marketing Cloud', icon: 'salesforce', category: 'Enterprise', proficiency: 'advanced' },
        { name: 'Adobe Campaign', icon: 'adobe', category: 'Enterprise', proficiency: 'advanced' },
        { name: 'Braze', icon: 'braze', category: 'Mobile', proficiency: 'advanced' },
        { name: 'Iterable', icon: 'iterable', category: 'Growth', proficiency: 'proficient' }
      ]
    },
    {
      name: 'Design & Testing',
      description: 'Email design and testing tools',
      technologies: [
        { name: 'Litmus', icon: 'litmus', category: 'Testing', proficiency: 'expert' },
        { name: 'Email on Acid', icon: 'emailonacid', category: 'Testing', proficiency: 'expert' },
        { name: 'Stripo', icon: 'stripo', category: 'Design', proficiency: 'advanced' },
        { name: 'BEE Pro', icon: 'beepro', category: 'Design', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Deliverability',
      description: 'Deliverability monitoring',
      technologies: [
        { name: 'GlockApps', icon: 'glockapps', category: 'Deliverability', proficiency: 'expert' },
        { name: 'Mail-Tester', icon: 'mailtester', category: 'Testing', proficiency: 'expert' },
        { name: 'Postmark', icon: 'postmark', category: 'Transactional', proficiency: 'advanced' },
        { name: 'SendGrid', icon: 'sendgrid', category: 'Infrastructure', proficiency: 'expert' }
      ]
    }
  ],
  pricing: {
    plans: [
      {
        name: 'Email Starter',
        description: 'Foundation email marketing',
        price: '$2,000',
        priceNote: 'Per month',
        features: [
          { name: 'Up to 25K Subscribers', included: true },
          { name: 'Email Strategy', included: true },
          { name: '4 Campaigns Monthly', included: true },
          { name: 'Basic Automation (2 flows)', included: true },
          { name: 'Template Design', included: true },
          { name: 'Monthly Reporting', included: true },
          { name: 'Advanced Segmentation', included: false },
          { name: 'A/B Testing Program', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Email Growth',
        description: 'Comprehensive email program',
        price: '$4,500',
        priceNote: 'Per month',
        badge: 'Most Popular',
        features: [
          { name: 'Up to 100K Subscribers', included: true },
          { name: 'Advanced Email Strategy', included: true },
          { name: '8 Campaigns Monthly', included: true },
          { name: 'Full Automation Suite (10 flows)', included: true },
          { name: 'Advanced Segmentation', included: true },
          { name: 'A/B Testing Program', included: true },
          { name: 'Bi-weekly Reporting', included: true },
          { name: 'Dedicated Account Manager', included: true }
        ],
        ctaText: 'Start Growing',
        highlighted: true
      },
      {
        name: 'Email Enterprise',
        description: 'Full-scale email operation',
        price: '$10,000+',
        priceNote: 'Per month',
        features: [
          { name: 'Unlimited Subscribers', included: true },
          { name: 'Enterprise Strategy', included: true },
          { name: 'Unlimited Campaigns', included: true },
          { name: 'Unlimited Automations', included: true },
          { name: 'Predictive Analytics', included: true },
          { name: 'Custom Integrations', included: true },
          { name: 'Weekly Reporting', included: true },
          { name: 'Dedicated Email Team', included: true }
        ],
        ctaText: 'Contact Sales',
        highlighted: false
      }
    ],
    customNote: 'Email platform fees are additional. We help select and set up the right platform for your needs.'
  },
  portfolio: [
    {
      title: 'E-commerce Email Transformation',
      client: 'ModernHome Decor',
      industry: 'E-commerce / Home',
      description: 'Complete email marketing program for home decor e-commerce brand.',
      challenge: 'ModernHome had a large list but was only sending occasional promotional blasts with poor results.',
      solution: 'We built a comprehensive email program with welcome series, abandoned cart, browse abandonment, and loyalty campaigns.',
      results: [
        '42% of revenue from email',
        '$1.2M monthly email revenue',
        '45% open rate achieved',
        '850% ROI on email program'
      ],
      metrics: [
        { label: 'Email Revenue', value: '42%' },
        { label: 'Monthly Revenue', value: '$1.2M' },
        { label: 'Open Rate', value: '45%' }
      ],
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop',
      tags: ['E-commerce Email', 'Klaviyo', 'Automation', 'Revenue Growth']
    },
    {
      title: 'B2B Lead Nurturing',
      client: 'TechForward Solutions',
      industry: 'SaaS / B2B',
      description: 'B2B email nurturing program to convert leads into demos and sales.',
      challenge: 'TechForward had thousands of leads but no systematic way to nurture them toward sales conversations.',
      solution: 'We created segmented nurture sequences, educational content series, and automated demo scheduling.',
      results: [
        '340% increase in demos',
        '28% lead-to-opportunity rate',
        '$3.2M influenced pipeline',
        '52% email engagement rate'
      ],
      metrics: [
        { label: 'Demo Increase', value: '+340%' },
        { label: 'Lead to Opp', value: '28%' },
        { label: 'Pipeline', value: '$3.2M' }
      ],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tags: ['B2B Email', 'HubSpot', 'Lead Nurturing', 'SaaS']
    },
    {
      title: 'Subscription Box Retention',
      client: 'PetBox Monthly',
      industry: 'Subscription / Pet',
      description: 'Email program focused on subscriber retention and lifetime value.',
      challenge: 'PetBox had high churn rates with subscribers canceling after 3-4 months.',
      solution: 'We developed retention-focused emails including onboarding, engagement campaigns, and win-back sequences.',
      results: [
        '35% churn reduction',
        '18-month avg LTV (up from 5)',
        '89% subscriber satisfaction',
        '$2.4M annual revenue saved'
      ],
      metrics: [
        { label: 'Churn Reduction', value: '-35%' },
        { label: 'Avg LTV', value: '18mo' },
        { label: 'Revenue Saved', value: '$2.4M' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Subscription', 'Retention', 'Email Automation', 'Klaviyo']
    },
    {
      title: 'Real Estate Drip Campaigns',
      client: 'Premier Realty Group',
      industry: 'Real Estate',
      description: 'Automated email nurturing for luxury real estate leads with long sales cycles.',
      challenge: 'Premier Realty had high-value leads that went cold during 6-18 month buying cycles.',
      solution: 'We built automated nurture sequences with market updates, property alerts, and personalized content based on buyer preferences.',
      results: [
        '67% increase in closings',
        '45% email open rate',
        '$12M additional sales volume',
        '24-month nurture sequences'
      ],
      metrics: [
        { label: 'Closings', value: '+67%' },
        { label: 'Open Rate', value: '45%' },
        { label: 'Sales Volume', value: '$12M' }
      ],
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
      tags: ['Real Estate', 'Lead Nurturing', 'Drip Campaigns', 'Automation']
    }
  ],
  testimonials: [
    {
      quote: 'Email now drives 42% of our revenue. Their automation strategy transformed a neglected channel into our biggest growth driver.',
      author: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'ModernHome Decor',
      rating: 5,
      location: 'Austin, USA'
    },
    {
      quote: 'Our lead nurturing transformed. We went from random follow-ups to a systematic program that consistently fills our demo calendar.',
      author: 'Mark Stevens',
      role: 'VP of Marketing',
      company: 'TechForward Solutions',
      rating: 5,
      location: 'Boston, USA'
    },
    {
      quote: 'They saved us $2.4M annually by reducing churn. The retention email strategy they built is now core to our business model.',
      author: 'Emily Chen',
      role: 'Head of Growth',
      company: 'PetBox Monthly',
      rating: 5,
      location: 'Denver, USA'
    }
  ],
  faqs: [
    {
      question: 'Which email platform do you recommend?',
      answer: 'Platform depends on your business type and needs. For e-commerce, we typically recommend Klaviyo. For B2B, HubSpot or ActiveCampaign work well. For enterprise, Salesforce Marketing Cloud or Braze may be appropriate. We help select the right platform during strategy development.'
    },
    {
      question: 'How do you improve email deliverability?',
      answer: 'We implement best practices including proper authentication (SPF, DKIM, DMARC), list hygiene, engagement-based sending, and careful warm-up for new senders. We monitor deliverability metrics and address issues proactively.'
    },
    {
      question: 'How often should we send emails?',
      answer: 'Frequency depends on your audience and content. Most businesses benefit from 2-4 campaigns monthly plus automated sequences. We test and optimize sending frequency based on engagement data rather than guessing.'
    },
    {
      question: 'Do you write the email copy?',
      answer: 'Yes, our packages include email copywriting. We create subject lines, preview text, and body copy optimized for your audience and goals. We maintain your brand voice while applying email copywriting best practices.'
    },
    {
      question: 'What is the difference between campaigns and automation?',
      answer: 'Campaigns are one-time sends to a list segment (promotions, newsletters). Automations are triggered sequences based on behavior (welcome series, abandoned cart). Both are important. Automation runs 24/7 while campaigns support specific initiatives.'
    },
    {
      question: 'How do you measure email marketing success?',
      answer: 'We track opens, clicks, conversions, and revenue attributed to email. More importantly, we focus on business outcomes like revenue per email, customer lifetime value impact, and overall marketing ROI. Monthly reports show clear performance metrics.'
    }
  ],
  relatedServices: [
    {
      name: 'Marketing Automation',
      slug: 'marketing-automation',
      description: 'Full marketing automation',
      icon: 'Settings'
    },
    {
      name: 'Content Marketing',
      slug: 'content-marketing',
      description: 'Content for email campaigns',
      icon: 'FileText'
    },
    {
      name: 'Conversion Optimization',
      slug: 'conversion-optimization',
      description: 'Optimize email conversions',
      icon: 'TrendingUp'
    },
    {
      name: 'Analytics & Reporting',
      slug: 'analytics-reporting',
      description: 'Track email performance',
      icon: 'BarChart2'
    }
  ],
  seo: {
    title: 'Email Marketing Services | Automation, Campaigns & Strategy',
    description: 'Professional email marketing services that drive revenue. Email automation, campaign management, list growth, and optimization. $42 ROI per $1 spent average.',
    keywords: [
      'email marketing',
      'email automation',
      'email marketing agency',
      'email campaigns',
      'marketing automation',
      'drip campaigns',
      'newsletter marketing',
      'email strategy',
      'klaviyo agency',
      'email marketing services'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Email Marketing',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Email Marketing Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Email Automation'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Email Campaign Management'
            }
          }
        ]
      }
    }
  }
};
