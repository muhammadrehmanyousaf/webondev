// AWS Services Data
import { ServiceData } from '@/components/services/sections';

export const awsServicesData: ServiceData = {
  name: 'AWS Services',
  slug: 'aws-services',
  tagline: 'Maximize your AWS investment with certified experts',
  category: 'Cloud & DevOps',
  description: 'Leverage the full power of Amazon Web Services with our certified AWS architects and engineers. From initial setup to advanced optimization, we help you build, migrate, and manage world-class AWS infrastructure.',

  hero: {
    headline: 'AWS Cloud Solutions',
    subheadline: 'Certified AWS Experts for Your Cloud Journey',
    description: 'Unlock the full potential of Amazon Web Services. Our AWS-certified team designs, deploys, and optimizes cloud solutions that drive innovation while reducing costs and complexity.',
    keyFeatures: [
      'AWS Well-Architected reviews',
      'Cost optimization (avg 40% savings)',
      'Migration & modernization',
      'Serverless architecture',
      'Managed AWS services',
      '24/7 AWS support'
    ],
    badges: ['AWS Advanced Partner', 'AWS Certified Team', 'Well-Architected Partner', '100+ AWS Projects']
  },

  painPoints: [
    {
      icon: 'DollarSign',
      title: 'AWS Bill Shock',
      description: 'Monthly AWS bills growing faster than your business without clear visibility into costs',
      stat: '35%',
      statLabel: 'Average AWS overspend'
    },
    {
      icon: 'Puzzle',
      title: 'Service Complexity',
      description: 'Over 200 AWS services making it difficult to choose the right solutions for your needs',
      stat: '200+',
      statLabel: 'AWS services to navigate'
    },
    {
      icon: 'AlertTriangle',
      title: 'Security Misconfigurations',
      description: 'Exposed S3 buckets, overly permissive IAM roles, and compliance gaps creating risk',
      stat: '73%',
      statLabel: 'Accounts have misconfigs'
    },
    {
      icon: 'Clock',
      title: 'Slow Time-to-Market',
      description: 'Manual deployments and lack of automation slowing down development cycles',
      stat: '60%',
      statLabel: 'Time lost to manual ops'
    }
  ],

  solutions: [
    {
      icon: 'Layout',
      title: 'AWS Architecture Design',
      description: 'Well-Architected solutions designed for security, reliability, and cost efficiency',
      highlights: [
        'Well-Architected reviews',
        'Multi-account strategies',
        'Landing zone setup',
        'Reference architectures'
      ]
    },
    {
      icon: 'ArrowRight',
      title: 'AWS Migration',
      description: 'Seamless migration to AWS with minimal downtime and risk',
      highlights: [
        'Migration assessment',
        'Database migration (DMS)',
        'Application modernization',
        'Hybrid cloud setup'
      ]
    },
    {
      icon: 'Zap',
      title: 'Serverless Solutions',
      description: 'Build scalable applications with Lambda, API Gateway, and managed services',
      highlights: [
        'Lambda development',
        'API Gateway setup',
        'Event-driven architecture',
        'Step Functions workflows'
      ]
    },
    {
      icon: 'DollarSign',
      title: 'Cost Optimization',
      description: 'Reduce AWS spend through right-sizing, reservations, and architectural improvements',
      highlights: [
        'Cost analysis & reporting',
        'Reserved Instance planning',
        'Spot Instance strategies',
        'Resource right-sizing'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'AWS Assessment',
        description: 'Comprehensive review of your current AWS environment or requirements for new deployments',
        duration: 'Week 1',
        deliverables: [
          'Well-Architected review',
          'Security assessment',
          'Cost analysis',
          'Optimization roadmap'
        ]
      },
      {
        icon: 'Layout',
        title: 'Solution Design',
        description: 'Design AWS architecture following best practices and your specific requirements',
        duration: 'Week 2',
        deliverables: [
          'Architecture diagrams',
          'Service selection',
          'Security design',
          'Cost estimates'
        ]
      },
      {
        icon: 'Code',
        title: 'Implementation',
        description: 'Deploy AWS infrastructure using Infrastructure as Code and automation',
        duration: 'Week 3-6',
        deliverables: [
          'CloudFormation/Terraform',
          'CI/CD pipelines',
          'Security controls',
          'Monitoring setup'
        ]
      },
      {
        icon: 'CheckCircle',
        title: 'Optimization & Handover',
        description: 'Fine-tune performance, optimize costs, and transfer knowledge to your team',
        duration: 'Week 6-8',
        deliverables: [
          'Performance tuning',
          'Cost optimization',
          'Documentation',
          'Team training'
        ]
      }
    ],
    totalDuration: '6-8 weeks'
  },

  benefits: [
    {
      icon: 'DollarSign',
      title: 'Cost Savings',
      description: 'Average 40% reduction in AWS spend through optimization strategies',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Average cost reduction'
    },
    {
      icon: 'Shield',
      title: 'Security Compliance',
      description: 'Achieve compliance with SOC2, HIPAA, PCI-DSS, and other standards',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Compliance rate'
    },
    {
      icon: 'Zap',
      title: 'Faster Deployments',
      description: 'Automated CI/CD pipelines for rapid, reliable deployments',
      stat: '10x',
      statSuffix: '',
      statLabel: 'Faster releases'
    },
    {
      icon: 'TrendingUp',
      title: 'Scalability',
      description: 'Auto-scaling infrastructure that grows with your business',
      stat: '99.99',
      statSuffix: '%',
      statLabel: 'Uptime achieved'
    }
  ],

  techStack: [
    {
      name: 'Compute Services',
      description: 'AWS compute solutions for any workload',
      technologies: [
        { name: 'EC2', icon: '/icons/tech/ec2.svg', category: 'Compute', proficiency: 'expert' },
        { name: 'Lambda', icon: '/icons/tech/lambda.svg', category: 'Serverless', proficiency: 'expert' },
        { name: 'ECS', icon: '/icons/tech/ecs.svg', category: 'Containers', proficiency: 'expert' },
        { name: 'EKS', icon: '/icons/tech/eks.svg', category: 'Kubernetes', proficiency: 'expert' }
      ]
    },
    {
      name: 'Database Services',
      description: 'Managed database solutions',
      technologies: [
        { name: 'RDS', icon: '/icons/tech/rds.svg', category: 'Database', proficiency: 'expert' },
        { name: 'DynamoDB', icon: '/icons/tech/dynamodb.svg', category: 'NoSQL', proficiency: 'expert' },
        { name: 'Aurora', icon: '/icons/tech/aurora.svg', category: 'Database', proficiency: 'expert' },
        { name: 'ElastiCache', icon: '/icons/tech/elasticache.svg', category: 'Caching', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Storage & CDN',
      description: 'Storage and content delivery solutions',
      technologies: [
        { name: 'S3', icon: '/icons/tech/s3.svg', category: 'Storage', proficiency: 'expert' },
        { name: 'CloudFront', icon: '/icons/tech/cloudfront.svg', category: 'CDN', proficiency: 'expert' },
        { name: 'EFS', icon: '/icons/tech/efs.svg', category: 'Storage', proficiency: 'advanced' },
        { name: 'Glacier', icon: '/icons/tech/glacier.svg', category: 'Archive', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Security & Networking',
      description: 'Security and network services',
      technologies: [
        { name: 'IAM', icon: '/icons/tech/iam.svg', category: 'Security', proficiency: 'expert' },
        { name: 'VPC', icon: '/icons/tech/vpc.svg', category: 'Networking', proficiency: 'expert' },
        { name: 'WAF', icon: '/icons/tech/waf.svg', category: 'Security', proficiency: 'expert' },
        { name: 'Secrets Manager', icon: '/icons/tech/secretsmanager.svg', category: 'Security', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Starter',
        description: 'AWS setup for small businesses',
        price: '$5,000',
        priceNote: 'one-time setup',
        features: [
          { name: 'AWS account setup', included: true },
          { name: 'Basic VPC architecture', included: true },
          { name: 'EC2/RDS deployment', included: true },
          { name: 'Security hardening', included: true },
          { name: 'Basic monitoring', included: true },
          { name: 'Multi-region setup', included: false },
          { name: 'Serverless architecture', included: false },
          { name: 'Ongoing management', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Professional',
        description: 'Complete AWS transformation',
        price: '$15,000',
        priceNote: 'one-time setup',
        badge: 'Most Popular',
        features: [
          { name: 'Multi-account strategy', included: true },
          { name: 'Advanced VPC design', included: true },
          { name: 'Container orchestration', included: true },
          { name: 'CI/CD pipelines', included: true },
          { name: 'Full observability', included: true },
          { name: 'Multi-region DR', included: true },
          { name: 'Serverless integration', included: true },
          { name: '3-month support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Large-scale AWS solutions',
        price: '$40,000+',
        priceNote: 'custom solution',
        features: [
          { name: 'AWS Organization setup', included: true },
          { name: 'Landing zone deployment', included: true },
          { name: 'Full microservices arch', included: true },
          { name: 'Advanced CI/CD', included: true },
          { name: 'Enterprise monitoring', included: true },
          { name: 'Global deployment', included: true },
          { name: 'Full serverless stack', included: true },
          { name: 'Dedicated AWS support', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need ongoing AWS management? Ask about our managed services starting at $2,500/month.'
  },

  portfolio: [
    {
      title: 'SaaS Platform Migration to AWS',
      client: 'DataFlow Analytics',
      industry: 'SaaS',
      description: 'Complete migration of a data analytics platform from on-premise to AWS serverless',
      challenge: 'Legacy infrastructure limiting scalability and causing 4+ hours of downtime monthly',
      solution: 'Redesigned architecture using Lambda, DynamoDB, and S3 with multi-region failover',
      results: [
        'Zero downtime since migration (18 months)',
        '65% reduction in infrastructure costs',
        'Processing capacity increased 20x',
        'Time-to-market reduced from weeks to hours'
      ],
      metrics: [
        { label: 'Uptime', value: '100%' },
        { label: 'Cost Savings', value: '65%' },
        { label: 'Scale', value: '20x' }
      ],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      tags: ['Serverless', 'DynamoDB', 'Lambda', 'Multi-Region']
    },
    {
      title: 'Financial Services AWS Compliance',
      client: 'SecureFinance Inc',
      industry: 'Financial Services',
      description: 'Built PCI-DSS compliant AWS infrastructure for payment processing',
      challenge: 'Need to process payments while meeting strict financial compliance requirements',
      solution: 'Implemented secure AWS architecture with encryption, logging, and compliance controls',
      results: [
        'Achieved PCI-DSS Level 1 certification',
        'Processing 1M+ transactions daily',
        '99.999% availability achieved',
        'Passed all security audits first time'
      ],
      metrics: [
        { label: 'Compliance', value: 'PCI-DSS L1' },
        { label: 'Transactions', value: '1M+/day' },
        { label: 'Availability', value: '99.999%' }
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      tags: ['PCI-DSS', 'Financial', 'Security', 'High Availability']
    },
    {
      title: 'Media Streaming Platform on AWS',
      client: 'StreamMax Entertainment',
      industry: 'Media',
      description: 'Built global video streaming platform using AWS media services',
      challenge: 'Need to deliver 4K content to millions of concurrent viewers worldwide',
      solution: 'Implemented CloudFront CDN, MediaConvert, and auto-scaling ECS infrastructure',
      results: [
        '5M concurrent viewers supported',
        'Global latency under 50ms',
        'CDN cost optimized by 40%',
        '99.9% stream availability'
      ],
      metrics: [
        { label: 'Viewers', value: '5M' },
        { label: 'Latency', value: '<50ms' },
        { label: 'Savings', value: '40%' }
      ],
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop',
      tags: ['CloudFront', 'Media', 'Streaming', 'Global CDN']
    },
    {
      title: 'Healthcare Data Lake on AWS',
      client: 'HealthData Systems',
      industry: 'Healthcare',
      description: 'HIPAA-compliant data lake processing 10TB of patient data daily',
      challenge: 'Disparate data sources making analytics impossible while maintaining compliance',
      solution: 'Built S3-based data lake with Glue ETL, Athena queries, and encryption everywhere',
      results: [
        'HIPAA compliance achieved',
        '10TB daily processing capability',
        'Analytics queries 100x faster',
        'Data silos eliminated'
      ],
      metrics: [
        { label: 'Daily Data', value: '10TB' },
        { label: 'Query Speed', value: '100x' },
        { label: 'Compliance', value: 'HIPAA' }
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      tags: ['Data Lake', 'Healthcare', 'HIPAA', 'Analytics']
    }
  ],

  testimonials: [
    {
      quote: 'Their AWS expertise transformed our infrastructure. We went from monthly outages to 100% uptime while cutting costs by 65%.',
      author: 'Michael Roberts',
      role: 'VP Engineering',
      company: 'DataFlow Analytics',
      rating: 5,
      location: 'Austin, TX'
    },
    {
      quote: 'Navigating AWS compliance requirements seemed impossible until we partnered with this team. PCI-DSS certification was seamless.',
      author: 'Jennifer Chang',
      role: 'CISO',
      company: 'SecureFinance Inc',
      rating: 5,
      location: 'New York, NY'
    }
  ],

  faqs: [
    {
      question: 'Are your engineers AWS certified?',
      answer: 'Yes, our entire AWS team holds current certifications including AWS Solutions Architect Professional, DevOps Engineer Professional, and Security Specialty. We maintain these certifications through continuous training and hands-on experience with hundreds of AWS projects.'
    },
    {
      question: 'How do you approach AWS cost optimization?',
      answer: 'We use a comprehensive approach: analyzing usage patterns with Cost Explorer and third-party tools, right-sizing instances based on actual utilization, implementing Reserved Instances and Savings Plans strategies, leveraging Spot Instances where appropriate, and optimizing storage tiers. Most clients see 30-50% cost reduction.'
    },
    {
      question: 'Can you help migrate from another cloud provider?',
      answer: 'Absolutely. We have extensive experience migrating from Azure, GCP, and on-premise environments to AWS. We use AWS Migration Hub, Database Migration Service, and Server Migration Service to minimize downtime and risk during the transition.'
    },
    {
      question: 'What AWS compliance frameworks do you support?',
      answer: 'We help clients achieve compliance with SOC 2, HIPAA, PCI-DSS, FedRAMP, GDPR, and ISO 27001 on AWS. Our architectures incorporate AWS security services and best practices to meet the technical requirements for each framework.'
    },
    {
      question: 'Do you offer ongoing AWS support?',
      answer: 'Yes, we offer managed AWS services including 24/7 monitoring, incident response, patching, cost optimization, and architecture improvements. We can supplement your team or fully manage your AWS environment as needed.'
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
      name: 'DevOps Automation',
      slug: 'devops-automation',
      description: 'CI/CD and deployment automation',
      icon: 'Settings'
    },
    {
      name: 'Kubernetes Services',
      slug: 'kubernetes-services',
      description: 'EKS and container orchestration',
      icon: 'Box'
    },
    {
      name: 'Cloud Security',
      slug: 'cloud-security',
      description: 'AWS security and compliance',
      icon: 'Shield'
    }
  ],

  seo: {
    title: 'AWS Services & Consulting | Certified AWS Cloud Experts',
    description: 'Expert AWS services from certified architects. AWS migration, serverless development, cost optimization, and managed services. 40% average cost savings.',
    keywords: [
      'aws services',
      'aws consulting',
      'aws certified partner',
      'aws migration services',
      'aws cost optimization',
      'aws serverless',
      'aws lambda development',
      'aws security',
      'aws managed services',
      'aws cloud solutions'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'AWS Cloud Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'AWS Consulting'
      }
    }
  }
};
