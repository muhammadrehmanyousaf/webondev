import { ServiceData } from '@/components/services/sections';

export const contentMarketingData: ServiceData = {
  name: 'Content Marketing',
  slug: 'content-marketing',
  tagline: 'Content That Converts',
  category: 'Digital Marketing',
  description: 'Strategic content marketing services that attract, engage, and convert your target audience. We create compelling content that builds authority, drives organic traffic, and generates qualified leads.',
  hero: {
    headline: 'Content Marketing Services',
    subheadline: 'Attract, Engage, and Convert With Strategic Content',
    description: 'Build authority and drive revenue with content marketing that resonates with your audience. From strategy to execution, we create content that ranks, engages, and converts.',
    keyFeatures: [
      'Content Strategy Development',
      'SEO-Optimized Content',
      'Multi-Format Creation',
      'Distribution & Promotion'
    ],
    badges: ['10,000+ Pieces Created', '500M+ Views Generated', '85% Client Retention']
  },
  painPoints: [
    {
      icon: 'FileText',
      title: 'Content Gets No Traction',
      description: 'Publishing content that no one reads, shares, or engages with wastes resources.',
      stat: '90%',
      statLabel: 'Content gets no traffic'
    },
    {
      icon: 'Target',
      title: 'No Clear Strategy',
      description: 'Creating random content without a plan leads to inconsistent results.',
      stat: '63%',
      statLabel: 'Lack documented strategy'
    },
    {
      icon: 'Users',
      title: 'Wrong Audience Reached',
      description: 'Content that attracts unqualified visitors who never convert to customers.',
      stat: '70%',
      statLabel: 'Unqualified traffic'
    },
    {
      icon: 'Clock',
      title: 'Inconsistent Publishing',
      description: 'Sporadic content creation fails to build audience and search authority.',
      stat: '60%',
      statLabel: 'Publish inconsistently'
    },
    {
      icon: 'TrendingDown',
      title: 'Poor Content ROI',
      description: 'Unable to measure or demonstrate return on content investment.',
      stat: '55%',
      statLabel: 'Cannot measure ROI'
    },
    {
      icon: 'Repeat',
      title: 'Content Stagnation',
      description: 'Existing content grows stale and loses rankings over time.',
      stat: '75%',
      statLabel: 'Never update content'
    }
  ],
  solutions: [
    {
      icon: 'Map',
      title: 'Content Strategy',
      description: 'Data-driven content strategy aligned with business goals and audience needs.',
      highlights: ['Audience Research', 'Content Audit', 'Topic Planning', 'Editorial Calendar']
    },
    {
      icon: 'FileText',
      title: 'Blog & Article Writing',
      description: 'SEO-optimized blog posts and articles that rank and engage readers.',
      highlights: ['SEO Blog Posts', 'Thought Leadership', 'Industry News', 'How-To Guides']
    },
    {
      icon: 'BookOpen',
      title: 'Long-Form Content',
      description: 'In-depth content assets that establish authority and generate leads.',
      highlights: ['Whitepapers', 'eBooks', 'Research Reports', 'Ultimate Guides']
    },
    {
      icon: 'Video',
      title: 'Video Content',
      description: 'Engaging video content for YouTube, social media, and website.',
      highlights: ['Explainer Videos', 'Tutorials', 'Customer Stories', 'Social Video']
    },
    {
      icon: 'Mail',
      title: 'Email Content',
      description: 'Newsletter and email sequence content that nurtures and converts.',
      highlights: ['Newsletter Writing', 'Drip Campaigns', 'Lead Nurturing', 'Promotional Emails']
    },
    {
      icon: 'Share2',
      title: 'Content Distribution',
      description: 'Amplify content reach through strategic distribution and promotion.',
      highlights: ['Social Promotion', 'Influencer Outreach', 'Content Syndication', 'Paid Amplification']
    }
  ],
  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Discovery & Audit',
        description: 'Analyze existing content, competitors, and audience to identify opportunities.',
        duration: '1-2 weeks',
        deliverables: ['Content Audit', 'Competitor Analysis', 'Audience Personas', 'Gap Analysis']
      },
      {
        icon: 'Map',
        title: 'Strategy Development',
        description: 'Create comprehensive content strategy aligned with business objectives.',
        duration: '1-2 weeks',
        deliverables: ['Content Strategy', 'Topic Clusters', 'Editorial Calendar', 'KPI Framework']
      },
      {
        icon: 'PenTool',
        title: 'Content Creation',
        description: 'Produce high-quality, SEO-optimized content across chosen formats.',
        duration: 'Ongoing',
        deliverables: ['Blog Posts', 'Lead Magnets', 'Video Scripts', 'Social Content']
      },
      {
        icon: 'CheckCircle',
        title: 'Editorial Review',
        description: 'Rigorous editing and optimization ensuring quality and SEO alignment.',
        duration: 'Per piece',
        deliverables: ['Edited Content', 'SEO Optimization', 'Brand Alignment', 'Quality Assurance']
      },
      {
        icon: 'Share2',
        title: 'Distribution',
        description: 'Strategic content distribution to maximize reach and engagement.',
        duration: 'Ongoing',
        deliverables: ['Social Distribution', 'Email Promotion', 'Outreach Campaigns']
      },
      {
        icon: 'BarChart2',
        title: 'Performance Analysis',
        description: 'Track content performance and optimize strategy based on data.',
        duration: 'Ongoing',
        deliverables: ['Performance Reports', 'Content Updates', 'Strategy Refinement']
      }
    ],
    totalDuration: 'Ongoing partnership'
  },
  benefits: [
    {
      icon: 'TrendingUp',
      title: 'Organic Traffic Growth',
      description: 'SEO-optimized content drives sustainable organic traffic.',
      stat: '434%',
      statSuffix: '',
      statLabel: 'Avg traffic increase'
    },
    {
      icon: 'Users',
      title: 'Lead Generation',
      description: 'Content that attracts and converts qualified leads.',
      stat: '3x',
      statSuffix: '',
      statLabel: 'More leads vs outbound'
    },
    {
      icon: 'Award',
      title: 'Brand Authority',
      description: 'Establish thought leadership in your industry.',
      stat: '70%',
      statSuffix: '',
      statLabel: 'Prefer to learn via content'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Efficiency',
      description: 'Content marketing costs 62% less than traditional marketing.',
      stat: '62%',
      statSuffix: '',
      statLabel: 'Lower cost per lead'
    },
    {
      icon: 'Heart',
      title: 'Audience Trust',
      description: 'Build lasting relationships through valuable content.',
      stat: '82%',
      statSuffix: '',
      statLabel: 'Feel positive after content'
    },
    {
      icon: 'RefreshCw',
      title: 'Compound Returns',
      description: 'Evergreen content generates value for years.',
      stat: '10x',
      statSuffix: '',
      statLabel: 'ROI over time'
    }
  ],
  techStack: [
    {
      name: 'Content Platforms',
      description: 'Content management and creation',
      technologies: [
        { name: 'WordPress', icon: 'wordpress', category: 'CMS', proficiency: 'expert' },
        { name: 'HubSpot', icon: 'hubspot', category: 'CMS', proficiency: 'expert' },
        { name: 'Contentful', icon: 'contentful', category: 'Headless CMS', proficiency: 'advanced' },
        { name: 'Notion', icon: 'notion', category: 'Planning', proficiency: 'expert' }
      ]
    },
    {
      name: 'SEO & Research',
      description: 'Content optimization tools',
      technologies: [
        { name: 'Surfer SEO', icon: 'surfer', category: 'Optimization', proficiency: 'expert' },
        { name: 'Ahrefs', icon: 'ahrefs', category: 'Research', proficiency: 'expert' },
        { name: 'Clearscope', icon: 'clearscope', category: 'Optimization', proficiency: 'advanced' },
        { name: 'BuzzSumo', icon: 'buzzsumo', category: 'Research', proficiency: 'expert' }
      ]
    },
    {
      name: 'Design & Video',
      description: 'Visual content creation',
      technologies: [
        { name: 'Canva', icon: 'canva', category: 'Design', proficiency: 'expert' },
        { name: 'Adobe Creative Suite', icon: 'adobe', category: 'Design', proficiency: 'expert' },
        { name: 'Loom', icon: 'loom', category: 'Video', proficiency: 'advanced' },
        { name: 'Descript', icon: 'descript', category: 'Video', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Analytics',
      description: 'Performance tracking',
      technologies: [
        { name: 'Google Analytics', icon: 'analytics', category: 'Analytics', proficiency: 'expert' },
        { name: 'Hotjar', icon: 'hotjar', category: 'Behavior', proficiency: 'expert' },
        { name: 'Databox', icon: 'databox', category: 'Reporting', proficiency: 'advanced' },
        { name: 'Parse.ly', icon: 'parsely', category: 'Content Analytics', proficiency: 'proficient' }
      ]
    }
  ],
  pricing: {
    plans: [
      {
        name: 'Content Starter',
        description: 'Foundation content for growing brands',
        price: '$3,000',
        priceNote: 'Per month',
        features: [
          { name: '4 Blog Posts Monthly', included: true },
          { name: 'Content Strategy', included: true },
          { name: 'SEO Optimization', included: true },
          { name: 'Social Media Posts', included: true },
          { name: 'Monthly Reporting', included: true },
          { name: 'Editorial Calendar', included: true },
          { name: 'Lead Magnets', included: false },
          { name: 'Video Content', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Content Growth',
        description: 'Comprehensive content program',
        price: '$7,500',
        priceNote: 'Per month',
        badge: 'Most Popular',
        features: [
          { name: '8 Blog Posts Monthly', included: true },
          { name: 'Advanced Content Strategy', included: true },
          { name: '1 Lead Magnet Monthly', included: true },
          { name: 'Email Newsletter Content', included: true },
          { name: 'Social Media Management', included: true },
          { name: 'Content Distribution', included: true },
          { name: 'Bi-weekly Reporting', included: true },
          { name: 'Dedicated Content Manager', included: true }
        ],
        ctaText: 'Start Growing',
        highlighted: true
      },
      {
        name: 'Content Enterprise',
        description: 'Full-scale content operation',
        price: '$15,000+',
        priceNote: 'Per month',
        features: [
          { name: 'Unlimited Blog Posts', included: true },
          { name: 'Video Content Production', included: true },
          { name: 'Podcast Production', included: true },
          { name: 'Multiple Lead Magnets', included: true },
          { name: 'Full Social Management', included: true },
          { name: 'Influencer Partnerships', included: true },
          { name: 'Custom Reporting Dashboard', included: true },
          { name: 'Dedicated Content Team', included: true }
        ],
        ctaText: 'Contact Sales',
        highlighted: false
      }
    ],
    customNote: 'One-time setup fee applies. Custom packages available for specific content needs.'
  },
  portfolio: [
    {
      title: 'B2B SaaS Content Program',
      client: 'DataSync Pro',
      industry: 'SaaS / Technology',
      description: 'Full-service content marketing program for B2B data integration platform.',
      challenge: 'DataSync Pro had no content presence and relied entirely on outbound sales with high CAC.',
      solution: 'We built a content engine with weekly blog posts, monthly whitepapers, and an email nurture program.',
      results: [
        '580% organic traffic growth',
        '3,200 monthly leads from content',
        '$1.8M pipeline attributed to content',
        '47% lower CAC'
      ],
      metrics: [
        { label: 'Traffic Growth', value: '+580%' },
        { label: 'Monthly Leads', value: '3,200' },
        { label: 'Pipeline Value', value: '$1.8M' }
      ],
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
      tags: ['B2B Content', 'SaaS', 'Lead Generation', 'Whitepapers']
    },
    {
      title: 'E-commerce Content Strategy',
      client: 'Outdoor Gear Co',
      industry: 'E-commerce / Retail',
      description: 'Content-driven SEO and engagement strategy for outdoor equipment retailer.',
      challenge: 'Outdoor Gear struggled to compete with REI and big retailers in organic search.',
      solution: 'We created expert buying guides, gear reviews, and adventure content establishing them as outdoor authorities.',
      results: [
        '890% organic traffic increase',
        '45% of revenue from organic',
        '12,000 email subscribers',
        '4.2x content ROI'
      ],
      metrics: [
        { label: 'Traffic Growth', value: '+890%' },
        { label: 'Organic Revenue', value: '45%' },
        { label: 'Email List', value: '12K' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['E-commerce Content', 'Product Content', 'Buying Guides', 'SEO']
    },
    {
      title: 'Professional Services Thought Leadership',
      client: 'Sterling Law Partners',
      industry: 'Professional Services',
      description: 'Thought leadership content program for corporate law firm.',
      challenge: 'Sterling needed to establish partners as industry experts and generate high-value client inquiries.',
      solution: 'We developed a thought leadership program with legal insights, industry analysis, and executive profiles.',
      results: [
        '340% increase in inquiries',
        'Featured in 12 publications',
        '8,500 newsletter subscribers',
        '23 speaking invitations'
      ],
      metrics: [
        { label: 'Inquiry Growth', value: '+340%' },
        { label: 'Media Features', value: '12' },
        { label: 'Newsletter List', value: '8.5K' }
      ],
      image: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800&h=600&fit=crop',
      tags: ['Thought Leadership', 'Professional Services', 'B2B', 'Legal']
    },
    {
      title: 'Healthcare Content Authority',
      client: 'WellPath Medical',
      industry: 'Healthcare / Medical',
      description: 'Authority-building content program for multi-specialty healthcare network.',
      challenge: 'WellPath needed to establish medical authority while navigating YMYL requirements and building patient trust.',
      solution: 'We created physician-reviewed content, patient education resources, and condition-specific guides with proper E-E-A-T signals.',
      results: [
        '720% organic traffic increase',
        '45% more patient appointments',
        '156 featured snippets won',
        'Top 3 rankings for 180 medical terms'
      ],
      metrics: [
        { label: 'Traffic Growth', value: '+720%' },
        { label: 'Appointments', value: '+45%' },
        { label: 'Featured Snippets', value: '156' }
      ],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tags: ['Healthcare Content', 'Medical Writing', 'E-E-A-T', 'Patient Education']
    }
  ],
  testimonials: [
    {
      quote: 'Our content program generates more qualified leads than our entire sales team did with outbound. The ROI has been remarkable.',
      author: 'Jennifer Lee',
      role: 'VP of Marketing',
      company: 'DataSync Pro',
      rating: 5,
      location: 'Boston, USA'
    },
    {
      quote: 'We went from invisible to being the go-to resource in our industry. Content is now our biggest revenue driver.',
      author: 'Mark Anderson',
      role: 'Marketing Director',
      company: 'Outdoor Gear Co',
      rating: 5,
      location: 'Denver, USA'
    },
    {
      quote: 'Our partners are now recognized industry experts. The content program has transformed how clients perceive our firm.',
      author: 'Robert Sterling',
      role: 'Managing Partner',
      company: 'Sterling Law Partners',
      rating: 5,
      location: 'New York, USA'
    }
  ],
  faqs: [
    {
      question: 'How much content do I need to publish?',
      answer: 'Quality matters more than quantity. We recommend starting with 4-8 high-quality pieces monthly and scaling based on results. Consistency is key so we plan realistic publishing schedules your business can sustain long-term.'
    },
    {
      question: 'Do you write content for my specific industry?',
      answer: 'Yes, we have writers with expertise across industries including technology, healthcare, finance, professional services, and more. We conduct thorough research and work with subject matter experts to ensure accurate, authoritative content.'
    },
    {
      question: 'How do you measure content marketing success?',
      answer: 'We track metrics aligned with your goals including organic traffic, keyword rankings, engagement metrics, leads generated, conversion rates, and revenue attribution. Monthly reports show clear ROI from your content investment.'
    },
    {
      question: 'What types of content do you create?',
      answer: 'We create all content types including blog posts, whitepapers, eBooks, case studies, infographics, video scripts, email sequences, social media content, landing pages, and more. Strategy determines the right content mix for your audience.'
    },
    {
      question: 'How long until we see results from content marketing?',
      answer: 'Content marketing is a long-term strategy. You may see engagement within weeks, but significant SEO and lead generation results typically take 3-6 months. The investment compounds over time as your content library grows.'
    },
    {
      question: 'Can you help update and optimize our existing content?',
      answer: 'Absolutely. Content refreshing is a key part of our strategy. We audit existing content, identify update opportunities, and refresh pieces to improve rankings and relevance. Often, updating existing content provides faster ROI than new content.'
    }
  ],
  relatedServices: [
    {
      name: 'SEO Services',
      slug: 'seo-services',
      description: 'Drive traffic to your content',
      icon: 'Search'
    },
    {
      name: 'Social Media Marketing',
      slug: 'social-media-marketing',
      description: 'Amplify content reach socially',
      icon: 'Share2'
    },
    {
      name: 'Email Marketing',
      slug: 'email-marketing',
      description: 'Distribute content via email',
      icon: 'Mail'
    },
    {
      name: 'Brand Strategy',
      slug: 'brand-strategy',
      description: 'Define your content voice',
      icon: 'Award'
    }
  ],
  seo: {
    title: 'Content Marketing Services | Strategy, Creation & Distribution',
    description: 'Professional content marketing services that drive traffic and generate leads. Content strategy, SEO blog writing, whitepapers, video content, and distribution. 434% average traffic increase.',
    keywords: [
      'content marketing',
      'content strategy',
      'blog writing services',
      'content creation',
      'B2B content marketing',
      'content marketing agency',
      'SEO content',
      'thought leadership',
      'content distribution',
      'lead generation content'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Content Marketing',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Content Marketing Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Content Strategy'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Blog Writing'
            }
          }
        ]
      }
    }
  }
};
