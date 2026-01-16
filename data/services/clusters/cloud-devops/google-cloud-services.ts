// Google Cloud Services Data
import { ServiceData } from '@/components/services/sections';

export const googleCloudServicesData: ServiceData = {
  name: 'Google Cloud Services',
  slug: 'google-cloud-services',
  tagline: 'Innovative cloud solutions powered by Google technology',
  category: 'Cloud & DevOps',
  description: 'Build innovative applications on Google Cloud Platform. Our GCP-certified experts help you leverage Google\'s world-class infrastructure for data analytics, machine learning, and modern application development.',

  hero: {
    headline: 'Google Cloud Platform Solutions',
    subheadline: 'Innovation at Google Scale',
    description: 'Harness the same infrastructure that powers Google Search, YouTube, and Gmail. Our GCP specialists deliver cutting-edge solutions in data analytics, machine learning, and cloud-native development.',
    keyFeatures: [
      'BigQuery data analytics',
      'Vertex AI & ML solutions',
      'GKE Kubernetes expertise',
      'Cloud-native development',
      'Multi-cloud with Anthos',
      'Real-time data processing'
    ],
    badges: ['Google Cloud Partner', 'GCP Certified Team', 'Data Analytics Specialty', '100+ GCP Projects']
  },

  painPoints: [
    {
      icon: 'Database',
      title: 'Data Analytics Challenges',
      description: 'Struggling to gain insights from massive datasets with traditional data warehouses',
      stat: '80%',
      statLabel: 'Data goes unanalyzed'
    },
    {
      icon: 'Brain',
      title: 'ML Implementation Gaps',
      description: 'Difficulty implementing machine learning models in production environments',
      stat: '87%',
      statLabel: 'ML projects fail to deploy'
    },
    {
      icon: 'Clock',
      title: 'Slow Query Performance',
      description: 'Data queries taking hours instead of seconds, blocking business decisions',
      stat: '4hrs',
      statLabel: 'Average query wait time'
    },
    {
      icon: 'DollarSign',
      title: 'Data Infrastructure Costs',
      description: 'High costs for on-premise data infrastructure with limited scalability',
      stat: '50%',
      statLabel: 'Could be saved on GCP'
    }
  ],

  solutions: [
    {
      icon: 'Database',
      title: 'BigQuery Analytics',
      description: 'Unlock insights from petabytes of data with serverless analytics',
      highlights: [
        'Data warehouse migration',
        'Real-time analytics',
        'BI tool integration',
        'Cost-effective scaling'
      ]
    },
    {
      icon: 'Brain',
      title: 'Vertex AI Solutions',
      description: 'Build and deploy machine learning models at scale',
      highlights: [
        'Custom ML models',
        'AutoML solutions',
        'MLOps pipelines',
        'Model monitoring'
      ]
    },
    {
      icon: 'Box',
      title: 'GKE & Cloud Run',
      description: 'Modern container orchestration and serverless containers',
      highlights: [
        'GKE cluster design',
        'Cloud Run deployment',
        'Autopilot mode',
        'Service mesh'
      ]
    },
    {
      icon: 'GitMerge',
      title: 'Anthos Multi-Cloud',
      description: 'Manage applications across clouds with consistent experience',
      highlights: [
        'Multi-cloud management',
        'Hybrid deployments',
        'Consistent policies',
        'Centralized operations'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Discovery & Assessment',
        description: 'Analyze your data landscape and identify GCP opportunities',
        duration: 'Week 1',
        deliverables: [
          'Data inventory',
          'Workload assessment',
          'GCP recommendations',
          'Migration strategy'
        ]
      },
      {
        icon: 'Layout',
        title: 'Architecture Design',
        description: 'Design GCP architecture optimized for your use cases',
        duration: 'Week 2',
        deliverables: [
          'Architecture blueprints',
          'Data flow diagrams',
          'Security design',
          'Cost modeling'
        ]
      },
      {
        icon: 'Code',
        title: 'Implementation',
        description: 'Build and deploy GCP infrastructure and applications',
        duration: 'Week 3-6',
        deliverables: [
          'Infrastructure deployment',
          'Data pipeline setup',
          'Application migration',
          'ML model deployment'
        ]
      },
      {
        icon: 'TrendingUp',
        title: 'Optimization',
        description: 'Fine-tune performance and implement advanced features',
        duration: 'Week 6-8',
        deliverables: [
          'Performance tuning',
          'Cost optimization',
          'Advanced analytics',
          'Team training'
        ]
      }
    ],
    totalDuration: '6-8 weeks'
  },

  benefits: [
    {
      icon: 'Zap',
      title: 'Query Speed',
      description: 'Analyze petabytes of data in seconds with BigQuery',
      stat: '1000x',
      statSuffix: '',
      statLabel: 'Faster analytics'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Efficiency',
      description: 'Pay only for what you use with serverless pricing',
      stat: '50',
      statSuffix: '%',
      statLabel: 'Cost reduction'
    },
    {
      icon: 'Brain',
      title: 'AI/ML Ready',
      description: 'Built-in machine learning with Vertex AI',
      stat: '10x',
      statSuffix: '',
      statLabel: 'Faster ML deployment'
    },
    {
      icon: 'Globe',
      title: 'Global Network',
      description: 'Google\'s premium tier network for low latency',
      stat: '35',
      statSuffix: '',
      statLabel: 'Regions worldwide'
    }
  ],

  techStack: [
    {
      name: 'Compute & Containers',
      description: 'GCP compute and container services',
      technologies: [
        { name: 'Compute Engine', icon: '/icons/tech/compute-engine.svg', category: 'Compute', proficiency: 'expert' },
        { name: 'GKE', icon: '/icons/tech/gke.svg', category: 'Kubernetes', proficiency: 'expert' },
        { name: 'Cloud Run', icon: '/icons/tech/cloud-run.svg', category: 'Serverless', proficiency: 'expert' },
        { name: 'Cloud Functions', icon: '/icons/tech/cloud-functions.svg', category: 'Serverless', proficiency: 'expert' }
      ]
    },
    {
      name: 'Data & Analytics',
      description: 'Google data and analytics services',
      technologies: [
        { name: 'BigQuery', icon: '/icons/tech/bigquery.svg', category: 'Analytics', proficiency: 'expert' },
        { name: 'Dataflow', icon: '/icons/tech/dataflow.svg', category: 'ETL', proficiency: 'expert' },
        { name: 'Pub/Sub', icon: '/icons/tech/pubsub.svg', category: 'Messaging', proficiency: 'expert' },
        { name: 'Looker', icon: '/icons/tech/looker.svg', category: 'BI', proficiency: 'advanced' }
      ]
    },
    {
      name: 'AI & Machine Learning',
      description: 'Google AI and ML services',
      technologies: [
        { name: 'Vertex AI', icon: '/icons/tech/vertex-ai.svg', category: 'ML', proficiency: 'expert' },
        { name: 'AutoML', icon: '/icons/tech/automl.svg', category: 'ML', proficiency: 'advanced' },
        { name: 'Vision AI', icon: '/icons/tech/vision-ai.svg', category: 'AI', proficiency: 'advanced' },
        { name: 'Natural Language', icon: '/icons/tech/natural-language.svg', category: 'AI', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Database & Storage',
      description: 'GCP database and storage solutions',
      technologies: [
        { name: 'Cloud SQL', icon: '/icons/tech/cloud-sql.svg', category: 'Database', proficiency: 'expert' },
        { name: 'Cloud Spanner', icon: '/icons/tech/spanner.svg', category: 'Database', proficiency: 'advanced' },
        { name: 'Firestore', icon: '/icons/tech/firestore.svg', category: 'NoSQL', proficiency: 'expert' },
        { name: 'Cloud Storage', icon: '/icons/tech/gcs.svg', category: 'Storage', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Starter',
        description: 'GCP setup for data projects',
        price: '$5,000',
        priceNote: 'one-time setup',
        features: [
          { name: 'GCP project setup', included: true },
          { name: 'BigQuery deployment', included: true },
          { name: 'Basic data pipeline', included: true },
          { name: 'Security baseline', included: true },
          { name: 'Dashboard setup', included: true },
          { name: 'ML model deployment', included: false },
          { name: 'Real-time streaming', included: false },
          { name: 'Ongoing support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Professional',
        description: 'Complete data analytics platform',
        price: '$15,000',
        priceNote: 'one-time setup',
        badge: 'Most Popular',
        features: [
          { name: 'Enterprise GCP setup', included: true },
          { name: 'Advanced BigQuery', included: true },
          { name: 'Dataflow pipelines', included: true },
          { name: 'Full security suite', included: true },
          { name: 'Looker dashboards', included: true },
          { name: 'Basic ML models', included: true },
          { name: 'Pub/Sub streaming', included: true },
          { name: '3-month support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'AI-powered data platform',
        price: '$40,000+',
        priceNote: 'custom solution',
        features: [
          { name: 'Multi-region GCP', included: true },
          { name: 'Enterprise data warehouse', included: true },
          { name: 'Advanced ETL/ELT', included: true },
          { name: 'Enterprise security', included: true },
          { name: 'Full BI platform', included: true },
          { name: 'Custom ML models', included: true },
          { name: 'Real-time ML inference', included: true },
          { name: 'Dedicated support', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need ongoing GCP management? Ask about our managed data services starting at $3,500/month.'
  },

  portfolio: [
    {
      title: 'Real-Time Analytics Platform',
      client: 'StreamMedia Inc',
      industry: 'Media & Entertainment',
      description: 'Built real-time analytics for streaming platform with 50M+ users',
      challenge: 'Existing data warehouse couldn\'t handle real-time analytics for personalization',
      solution: 'Implemented BigQuery streaming, Dataflow pipelines, and Vertex AI for recommendations',
      results: [
        'Real-time analytics for 50M+ users',
        'Query times reduced from hours to seconds',
        '35% increase in user engagement',
        '60% reduction in data platform costs'
      ],
      metrics: [
        { label: 'Users', value: '50M+' },
        { label: 'Query Speed', value: '<3 sec' },
        { label: 'Engagement', value: '+35%' }
      ],
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop',
      tags: ['BigQuery', 'Dataflow', 'Vertex AI', 'Real-time']
    },
    {
      title: 'E-commerce ML Platform',
      client: 'ShopSmart Retail',
      industry: 'E-commerce',
      description: 'ML-powered product recommendations and demand forecasting',
      challenge: 'Manual inventory planning and generic product recommendations hurting sales',
      solution: 'Built Vertex AI models for recommendations and demand forecasting with BigQuery ML',
      results: [
        '28% increase in average order value',
        '40% improvement in forecast accuracy',
        'Inventory costs reduced by $2M annually',
        'Personalization deployed in 2 weeks'
      ],
      metrics: [
        { label: 'AOV Increase', value: '28%' },
        { label: 'Forecast', value: '40% better' },
        { label: 'Savings', value: '$2M/year' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['Vertex AI', 'BigQuery ML', 'Recommendations', 'Forecasting']
    },
    {
      title: 'Gaming Backend on GCP',
      client: 'GameForge Studios',
      industry: 'Gaming',
      description: 'Global game backend on GKE handling 5M concurrent players',
      challenge: 'Game launches causing server crashes and player frustration',
      solution: 'Built global GKE infrastructure with Agones, Cloud Spanner, and predictive scaling',
      results: [
        '5M concurrent players supported',
        'Game launch with zero downtime',
        'Latency under 50ms globally',
        'Infrastructure costs 40% below budget'
      ],
      metrics: [
        { label: 'Players', value: '5M' },
        { label: 'Latency', value: '<50ms' },
        { label: 'Savings', value: '40%' }
      ],
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
      tags: ['GKE', 'Gaming', 'Cloud Spanner', 'Global']
    },
    {
      title: 'IoT Data Platform',
      client: 'SmartFactory Corp',
      industry: 'Manufacturing',
      description: 'Real-time IoT data processing for smart manufacturing',
      challenge: 'Millions of sensor readings with no way to analyze or act on data in real-time',
      solution: 'Built IoT Core to Pub/Sub to Dataflow pipeline with real-time alerting and BigQuery analytics',
      results: [
        '10M events processed per second',
        'Equipment failures predicted 24 hours ahead',
        'Manufacturing downtime reduced by 45%',
        'Energy costs reduced by 20%'
      ],
      metrics: [
        { label: 'Events/sec', value: '10M' },
        { label: 'Downtime', value: '-45%' },
        { label: 'Energy Savings', value: '20%' }
      ],
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=600&fit=crop',
      tags: ['IoT Core', 'Dataflow', 'Manufacturing', 'Real-time']
    }
  ],

  testimonials: [
    {
      quote: 'BigQuery transformed our analytics. Queries that took 4 hours now complete in seconds. Our data team is finally productive.',
      author: 'Rachel Kim',
      role: 'VP Data Analytics',
      company: 'StreamMedia Inc',
      rating: 5,
      location: 'Los Angeles, CA'
    },
    {
      quote: 'The ML platform they built increased our average order value by 28%. The ROI was evident within the first month.',
      author: 'James Rodriguez',
      role: 'Chief Digital Officer',
      company: 'ShopSmart Retail',
      rating: 5,
      location: 'Seattle, WA'
    }
  ],

  faqs: [
    {
      question: 'Why choose Google Cloud over AWS or Azure?',
      answer: 'GCP excels in data analytics (BigQuery), machine learning (Vertex AI), and Kubernetes (GKE is where K8s was born). If your priorities include big data, AI/ML, or container orchestration, GCP often provides the best experience. Google\'s network infrastructure also offers superior performance for global applications.'
    },
    {
      question: 'How does BigQuery pricing work?',
      answer: 'BigQuery uses a serverless model where you pay for queries based on data scanned (on-demand) or reserve capacity (flat-rate). Storage is charged separately. We help optimize costs through partitioning, clustering, and materialized views. Many clients see 50%+ savings versus traditional data warehouses.'
    },
    {
      question: 'Can you migrate our existing data warehouse to BigQuery?',
      answer: 'Yes, we have extensive experience migrating from Teradata, Oracle, Redshift, Snowflake, and on-premise data warehouses to BigQuery. We use BigQuery Migration Service and custom ETL to ensure data integrity while minimizing downtime.'
    },
    {
      question: 'How do you handle ML model deployment?',
      answer: 'We use Vertex AI for end-to-end ML lifecycle management including training, deployment, and monitoring. For simpler use cases, BigQuery ML allows building models directly in SQL. We implement MLOps practices for continuous training and model updates.'
    },
    {
      question: 'Is GCP suitable for regulated industries?',
      answer: 'Yes, GCP offers compliance certifications for HIPAA, PCI-DSS, SOC 2, FedRAMP, and more. Google\'s infrastructure includes encryption by default and advanced security features. We help design architectures that meet specific compliance requirements.'
    }
  ],

  relatedServices: [
    {
      name: 'Cloud Infrastructure',
      slug: 'cloud-infrastructure',
      description: 'Multi-cloud infrastructure design',
      icon: 'Cloud'
    },
    {
      name: 'Kubernetes Services',
      slug: 'kubernetes-services',
      description: 'GKE and container orchestration',
      icon: 'Box'
    },
    {
      name: 'DevOps Automation',
      slug: 'devops-automation',
      description: 'Cloud Build and CI/CD',
      icon: 'Settings'
    },
    {
      name: 'Cloud Security',
      slug: 'cloud-security',
      description: 'GCP security best practices',
      icon: 'Shield'
    }
  ],

  seo: {
    title: 'Google Cloud Services | GCP Consulting & BigQuery Experts',
    description: 'Expert Google Cloud Platform services. BigQuery analytics, Vertex AI machine learning, GKE Kubernetes, and data engineering. Certified GCP partner.',
    keywords: [
      'google cloud services',
      'gcp consulting',
      'bigquery consulting',
      'vertex ai services',
      'gke kubernetes',
      'google cloud partner',
      'gcp migration',
      'bigquery analytics',
      'google cloud ml',
      'gcp data engineering'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Google Cloud Platform Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'GCP Consulting'
      }
    }
  }
};
