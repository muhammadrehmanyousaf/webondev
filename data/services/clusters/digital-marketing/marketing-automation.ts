import { ServiceData } from '@/components/services/sections';

export const marketingAutomationData: ServiceData = {
  name: 'Marketing Automation',
  slug: 'marketing-automation',
  tagline: 'Scale Your Marketing',
  category: 'Digital Marketing',
  description: 'Strategic marketing automation services that scale your marketing efforts, nurture leads automatically, and drive revenue growth through intelligent workflow automation.',
  hero: {
    headline: 'Marketing Automation Services',
    subheadline: 'Automate, Personalize, and Scale Your Marketing',
    description: 'Transform your marketing with intelligent automation. We implement and optimize marketing automation platforms to nurture leads, personalize experiences, and drive conversions at scale.',
    keyFeatures: [
      'Platform Implementation',
      'Workflow Automation',
      'Lead Scoring & Nurturing',
      'CRM Integration'
    ],
    badges: ['200+ Implementations', '451% Avg Lead Increase', 'Certified Partners']
  },
  painPoints: [
    {
      icon: 'Clock',
      title: 'Manual Marketing Tasks',
      description: 'Spending hours on repetitive tasks that could be automated.',
      stat: '63%',
      statLabel: 'Time on manual tasks'
    },
    {
      icon: 'Users',
      title: 'Leads Falling Through Cracks',
      description: 'No systematic way to follow up and nurture leads.',
      stat: '79%',
      statLabel: 'Leads never followed up'
    },
    {
      icon: 'Target',
      title: 'No Personalization at Scale',
      description: 'Cannot deliver personalized experiences to thousands of prospects.',
      stat: '72%',
      statLabel: 'Expect personalization'
    },
    {
      icon: 'Unlink',
      title: 'Disconnected Systems',
      description: 'Marketing tools not talking to sales and service systems.',
      stat: '45%',
      statLabel: 'Data in silos'
    },
    {
      icon: 'BarChart2',
      title: 'Cannot Measure Attribution',
      description: 'No visibility into which marketing activities drive revenue.',
      stat: '55%',
      statLabel: 'Cannot track attribution'
    },
    {
      icon: 'AlertTriangle',
      title: 'Underutilized Platform',
      description: 'Paying for automation tools but only using basic features.',
      stat: '70%',
      statLabel: 'Features unused'
    }
  ],
  solutions: [
    {
      icon: 'Settings',
      title: 'Platform Implementation',
      description: 'Expert implementation of marketing automation platforms configured for your needs.',
      highlights: ['HubSpot', 'Marketo', 'Pardot', 'ActiveCampaign']
    },
    {
      icon: 'GitBranch',
      title: 'Workflow Automation',
      description: 'Automated workflows that trigger the right actions at the right time.',
      highlights: ['Lead Nurturing', 'Onboarding Sequences', 'Task Automation', 'Notifications']
    },
    {
      icon: 'Target',
      title: 'Lead Management',
      description: 'Lead scoring, routing, and lifecycle management for sales efficiency.',
      highlights: ['Lead Scoring', 'Lead Routing', 'Lifecycle Stages', 'MQL/SQL Definitions']
    },
    {
      icon: 'Users',
      title: 'Personalization',
      description: 'Dynamic content and personalized experiences based on behavior and data.',
      highlights: ['Dynamic Content', 'Smart Lists', 'Behavioral Triggers', 'Personalized Journeys']
    },
    {
      icon: 'Link',
      title: 'CRM Integration',
      description: 'Seamless integration between marketing automation and your CRM.',
      highlights: ['Salesforce Integration', 'HubSpot CRM', 'Data Sync', 'Reporting Integration']
    },
    {
      icon: 'BarChart2',
      title: 'Attribution & Analytics',
      description: 'Multi-touch attribution and reporting connecting marketing to revenue.',
      highlights: ['Attribution Models', 'Campaign Tracking', 'ROI Reporting', 'Revenue Analytics']
    }
  ],
  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Discovery & Assessment',
        description: 'Evaluate current state, requirements, and define automation goals.',
        duration: '1-2 weeks',
        deliverables: ['Current State Audit', 'Requirements Doc', 'Platform Recommendation']
      },
      {
        icon: 'Map',
        title: 'Strategy & Planning',
        description: 'Design automation architecture, workflows, and implementation plan.',
        duration: '2 weeks',
        deliverables: ['Automation Strategy', 'Workflow Designs', 'Data Architecture', 'Timeline']
      },
      {
        icon: 'Settings',
        title: 'Platform Setup',
        description: 'Configure platform, integrations, and foundational elements.',
        duration: '2-4 weeks',
        deliverables: ['Platform Configuration', 'CRM Integration', 'Tracking Setup', 'Templates']
      },
      {
        icon: 'GitBranch',
        title: 'Workflow Build',
        description: 'Build automated workflows, lead scoring, and nurture programs.',
        duration: '3-6 weeks',
        deliverables: ['Automated Workflows', 'Lead Scoring', 'Nurture Programs', 'Routing Rules']
      },
      {
        icon: 'PlayCircle',
        title: 'Testing & Launch',
        description: 'Comprehensive testing and phased rollout of automation.',
        duration: '2 weeks',
        deliverables: ['QA Testing', 'User Training', 'Phased Launch', 'Documentation']
      },
      {
        icon: 'TrendingUp',
        title: 'Optimization',
        description: 'Ongoing optimization and expansion of automation capabilities.',
        duration: 'Ongoing',
        deliverables: ['Performance Analysis', 'Workflow Optimization', 'New Automation', 'Training']
      }
    ],
    totalDuration: '12-16 weeks implementation'
  },
  benefits: [
    {
      icon: 'TrendingUp',
      title: 'Increased Leads',
      description: 'Generate and convert more leads through automated nurturing.',
      stat: '451%',
      statSuffix: '',
      statLabel: 'Avg lead increase'
    },
    {
      icon: 'Clock',
      title: 'Time Savings',
      description: 'Free up hours weekly by automating repetitive tasks.',
      stat: '12hrs',
      statSuffix: '',
      statLabel: 'Saved weekly'
    },
    {
      icon: 'DollarSign',
      title: 'Revenue Growth',
      description: 'Drive more revenue through better lead management.',
      stat: '14.5%',
      statSuffix: '',
      statLabel: 'Sales productivity'
    },
    {
      icon: 'Users',
      title: 'Better Lead Quality',
      description: 'Deliver sales-ready leads through proper scoring and nurturing.',
      stat: '50%',
      statSuffix: '',
      statLabel: 'More sales-ready leads'
    },
    {
      icon: 'Target',
      title: 'Personalization at Scale',
      description: 'Deliver personalized experiences to thousands automatically.',
      stat: '77%',
      statSuffix: '',
      statLabel: 'Higher engagement'
    },
    {
      icon: 'Eye',
      title: 'Full Visibility',
      description: 'See exactly how marketing drives revenue with attribution.',
      stat: '100%',
      statSuffix: '',
      statLabel: 'Attribution clarity'
    }
  ],
  techStack: [
    {
      name: 'Marketing Automation',
      description: 'Major automation platforms',
      technologies: [
        { name: 'HubSpot', icon: 'hubspot', category: 'All-in-one', proficiency: 'expert' },
        { name: 'Marketo', icon: 'marketo', category: 'Enterprise', proficiency: 'expert' },
        { name: 'Pardot', icon: 'pardot', category: 'B2B', proficiency: 'expert' },
        { name: 'ActiveCampaign', icon: 'activecampaign', category: 'SMB', proficiency: 'expert' }
      ]
    },
    {
      name: 'CRM Systems',
      description: 'CRM integrations',
      technologies: [
        { name: 'Salesforce', icon: 'salesforce', category: 'Enterprise CRM', proficiency: 'expert' },
        { name: 'HubSpot CRM', icon: 'hubspot', category: 'CRM', proficiency: 'expert' },
        { name: 'Microsoft Dynamics', icon: 'microsoft', category: 'Enterprise CRM', proficiency: 'advanced' },
        { name: 'Pipedrive', icon: 'pipedrive', category: 'Sales CRM', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Integration Tools',
      description: 'Data and integration',
      technologies: [
        { name: 'Zapier', icon: 'zapier', category: 'Integration', proficiency: 'expert' },
        { name: 'Segment', icon: 'segment', category: 'CDP', proficiency: 'expert' },
        { name: 'Workato', icon: 'workato', category: 'Enterprise', proficiency: 'advanced' },
        { name: 'Tray.io', icon: 'tray', category: 'Automation', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Analytics',
      description: 'Reporting and attribution',
      technologies: [
        { name: 'Bizible', icon: 'bizible', category: 'Attribution', proficiency: 'expert' },
        { name: 'CaliberMind', icon: 'calibermind', category: 'Attribution', proficiency: 'advanced' },
        { name: 'Looker', icon: 'looker', category: 'BI', proficiency: 'advanced' },
        { name: 'Tableau', icon: 'tableau', category: 'BI', proficiency: 'proficient' }
      ]
    }
  ],
  pricing: {
    plans: [
      {
        name: 'Automation Starter',
        description: 'Essential automation setup',
        price: '$15,000',
        priceNote: 'One-time implementation',
        features: [
          { name: 'Platform Setup & Configuration', included: true },
          { name: 'CRM Integration', included: true },
          { name: '5 Core Workflows', included: true },
          { name: 'Lead Scoring Setup', included: true },
          { name: 'Template Library', included: true },
          { name: 'Team Training', included: true },
          { name: 'Advanced Workflows', included: false },
          { name: 'Custom Reporting', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Automation Growth',
        description: 'Comprehensive automation program',
        price: '$35,000',
        priceNote: 'One-time implementation',
        badge: 'Most Popular',
        features: [
          { name: 'Full Platform Implementation', included: true },
          { name: 'Multi-System Integration', included: true },
          { name: '15 Custom Workflows', included: true },
          { name: 'Advanced Lead Scoring', included: true },
          { name: 'Custom Reporting Dashboard', included: true },
          { name: 'Attribution Setup', included: true },
          { name: 'Extended Training Program', included: true },
          { name: '90-Day Support', included: true }
        ],
        ctaText: 'Start Growing',
        highlighted: true
      },
      {
        name: 'Automation Enterprise',
        description: 'Full-scale automation transformation',
        price: '$75,000+',
        priceNote: 'One-time implementation',
        features: [
          { name: 'Enterprise Platform Setup', included: true },
          { name: 'Full Tech Stack Integration', included: true },
          { name: 'Unlimited Workflows', included: true },
          { name: 'Advanced Attribution', included: true },
          { name: 'Custom Development', included: true },
          { name: 'Data Migration', included: true },
          { name: 'Ongoing Optimization Retainer', included: true },
          { name: 'Dedicated Success Manager', included: true }
        ],
        ctaText: 'Contact Sales',
        highlighted: false
      }
    ],
    customNote: 'Platform licensing fees are additional. Ongoing management and optimization retainers available.'
  },
  portfolio: [
    {
      title: 'B2B SaaS Marketing Automation',
      client: 'DataFlow Technologies',
      industry: 'SaaS / B2B',
      description: 'Full HubSpot implementation with Salesforce integration for B2B software company.',
      challenge: 'DataFlow had disconnected tools, no lead scoring, and sales complained about lead quality.',
      solution: 'We implemented HubSpot with Salesforce integration, behavioral lead scoring, and nurture automation.',
      results: [
        '380% increase in MQLs',
        '45% lead-to-opportunity rate',
        '12 hours saved weekly',
        '$4.2M influenced pipeline'
      ],
      metrics: [
        { label: 'MQL Increase', value: '+380%' },
        { label: 'Lead to Opp', value: '45%' },
        { label: 'Pipeline', value: '$4.2M' }
      ],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tags: ['HubSpot', 'Salesforce', 'B2B', 'Lead Scoring']
    },
    {
      title: 'Healthcare Lead Management',
      client: 'MedTech Solutions',
      industry: 'Healthcare Technology',
      description: 'Marketo implementation with complex compliance requirements and long sales cycles.',
      challenge: 'MedTech had 18-month sales cycles with no automated nurturing and manual lead management.',
      solution: 'We built sophisticated nurture tracks, persona-based scoring, and integration with their healthcare CRM.',
      results: [
        '52% shorter sales cycle',
        '234% more engaged leads',
        'Full HIPAA compliance',
        '89% sales satisfaction'
      ],
      metrics: [
        { label: 'Sales Cycle', value: '-52%' },
        { label: 'Engagement', value: '+234%' },
        { label: 'Sales Sat', value: '89%' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Marketo', 'Healthcare', 'Compliance', 'Lead Nurturing']
    },
    {
      title: 'Multi-Brand Marketing Operations',
      client: 'Venture Holdings',
      industry: 'Conglomerate',
      description: 'Centralized marketing automation for portfolio of 8 B2B brands.',
      challenge: 'Venture Holdings had 8 brands using different tools with no visibility or consistency.',
      solution: 'We implemented a centralized Pardot instance with brand-specific automation and unified reporting.',
      results: [
        '8 brands unified',
        '$2.1M annual cost savings',
        '360° customer view',
        '67% operational efficiency'
      ],
      metrics: [
        { label: 'Brands Unified', value: '8' },
        { label: 'Cost Savings', value: '$2.1M' },
        { label: 'Efficiency', value: '+67%' }
      ],
      image: 'https://images.unsplash.com/photo-1543286386-713bdc93f39a?w=800&h=600&fit=crop',
      tags: ['Pardot', 'Enterprise', 'Multi-Brand', 'Operations']
    },
    {
      title: 'E-commerce Customer Journey Automation',
      client: 'LuxeStyle Boutique',
      industry: 'E-commerce / Fashion',
      description: 'Full customer lifecycle automation for premium fashion e-commerce brand.',
      challenge: 'LuxeStyle had disconnected touchpoints and no personalized customer journeys despite rich customer data.',
      solution: 'We built end-to-end automation including browse behavior triggers, predictive product recommendations, and VIP customer programs.',
      results: [
        '156% increase in repeat purchases',
        '42% higher customer LTV',
        '28% cart recovery rate',
        '$3.8M attributed revenue'
      ],
      metrics: [
        { label: 'Repeat Purchases', value: '+156%' },
        { label: 'Customer LTV', value: '+42%' },
        { label: 'Revenue', value: '$3.8M' }
      ],
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Klaviyo', 'Customer Journey', 'Personalization']
    }
  ],
  testimonials: [
    {
      quote: 'Our marketing and sales are finally aligned. The automation they built generates 380% more qualified leads than before.',
      author: 'Michelle Park',
      role: 'VP of Marketing',
      company: 'DataFlow Technologies',
      rating: 5,
      location: 'San Francisco, USA'
    },
    {
      quote: 'They understood our complex requirements and built automation that actually works for healthcare. Sales cycles dropped 52%.',
      author: 'Dr. James Wilson',
      role: 'Chief Marketing Officer',
      company: 'MedTech Solutions',
      rating: 5,
      location: 'Boston, USA'
    },
    {
      quote: 'Unifying 8 brands on one platform seemed impossible. They made it work and saved us over $2M annually.',
      author: 'Catherine Adams',
      role: 'CMO',
      company: 'Venture Holdings',
      rating: 5,
      location: 'Chicago, USA'
    }
  ],
  faqs: [
    {
      question: 'Which marketing automation platform is best?',
      answer: 'The best platform depends on your needs. HubSpot is excellent for SMB and mid-market with all-in-one capabilities. Marketo suits enterprise B2B with complex needs. Pardot works well for Salesforce-centric organizations. We assess your requirements and recommend the right fit.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Basic implementation takes 8-12 weeks. Complex enterprise implementations with multiple integrations and custom development can take 16-24 weeks. We provide detailed timelines during scoping and work in phases to deliver value quickly.'
    },
    {
      question: 'Do we need to change our CRM?',
      answer: 'Usually not. We integrate marketing automation with your existing CRM whether it is Salesforce, Microsoft Dynamics, HubSpot CRM, or others. The goal is to connect systems, not replace them. However, we may recommend CRM changes if there are fundamental limitations.'
    },
    {
      question: 'What is lead scoring and do we need it?',
      answer: 'Lead scoring assigns points based on demographic fit and behavioral engagement to identify sales-ready leads. Most B2B companies benefit significantly from lead scoring. It helps sales focus on the best leads and improves marketing-sales alignment.'
    },
    {
      question: 'Can you migrate from our current platform?',
      answer: 'Yes, we handle platform migrations including data migration, workflow recreation, and integration reconfiguration. We ensure continuity during migration and often improve upon existing automation during the transition.'
    },
    {
      question: 'Do you provide ongoing management?',
      answer: 'Yes, we offer ongoing optimization retainers for campaign execution, workflow optimization, reporting, and continuous improvement. Many clients start with implementation and add ongoing management as they see results.'
    }
  ],
  relatedServices: [
    {
      name: 'Email Marketing',
      slug: 'email-marketing',
      description: 'Email within automation',
      icon: 'Mail'
    },
    {
      name: 'Analytics & Reporting',
      slug: 'analytics-reporting',
      description: 'Track automation performance',
      icon: 'BarChart2'
    },
    {
      name: 'CRM Development',
      slug: 'custom-software-development',
      description: 'Custom CRM development',
      icon: 'Database'
    },
    {
      name: 'Conversion Optimization',
      slug: 'conversion-optimization',
      description: 'Optimize conversion points',
      icon: 'TrendingUp'
    }
  ],
  seo: {
    title: 'Marketing Automation Services | Implementation & Optimization',
    description: 'Professional marketing automation services including HubSpot, Marketo, and Pardot implementation. Lead scoring, nurturing, CRM integration, and workflow automation. 451% average lead increase.',
    keywords: [
      'marketing automation',
      'HubSpot implementation',
      'Marketo implementation',
      'marketing automation agency',
      'lead nurturing',
      'lead scoring',
      'marketing automation consulting',
      'Pardot implementation',
      'CRM integration',
      'workflow automation'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Marketing Automation',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Marketing Automation Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'HubSpot Implementation'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Marketo Implementation'
            }
          }
        ]
      }
    }
  }
};
