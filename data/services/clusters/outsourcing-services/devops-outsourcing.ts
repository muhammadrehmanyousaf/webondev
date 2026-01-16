// DevOps Outsourcing Service Data
import { ServiceData } from '@/components/services/sections';

export const devopsOutsourcingData: ServiceData = {
  name: 'DevOps Outsourcing',
  slug: 'devops-outsourcing',
  tagline: 'Expert DevOps engineers without the hiring hassle',
  category: 'Outsourcing Services',
  description: 'Outsource your DevOps operations to experienced engineers who optimize your delivery pipeline. Our DevOps teams handle infrastructure, automation, CI/CD, and operations so you can focus on building products.',

  hero: {
    headline: 'DevOps Outsourcing Services',
    subheadline: 'Accelerate Delivery, Reduce Complexity',
    description: 'Partner with dedicated DevOps engineers who streamline your operations. From CI/CD pipelines to infrastructure management, our teams bring DevOps excellence without the hiring challenges.',
    keyFeatures: [
      'Dedicated DevOps engineers',
      'CI/CD pipeline expertise',
      'Cloud infrastructure management',
      'Kubernetes & Docker specialists',
      '24/7 monitoring & support',
      'Security & compliance'
    ],
    badges: ['AWS/Azure/GCP Certified', '500+ Pipelines Built', '99.9% Uptime', '24/7 Support']
  },

  painPoints: [
    {
      icon: 'Users',
      title: 'DevOps Talent Shortage',
      description: 'Can\'t find or afford experienced DevOps engineers',
      stat: '$160K+',
      statLabel: 'Avg DevOps salary'
    },
    {
      icon: 'Clock',
      title: 'Slow Deployments',
      description: 'Manual processes causing slow and risky deployments',
      stat: '2-4hrs',
      statLabel: 'Avg deployment time'
    },
    {
      icon: 'AlertTriangle',
      title: 'Frequent Outages',
      description: 'Lack of proper monitoring causing unexpected downtime',
      stat: '45%',
      statLabel: 'Experience outages'
    },
    {
      icon: 'DollarSign',
      title: 'Cloud Cost Overruns',
      description: 'Unoptimized infrastructure leading to high cloud bills',
      stat: '30%',
      statLabel: 'Cloud overspending'
    }
  ],

  solutions: [
    {
      icon: 'GitMerge',
      title: 'CI/CD Excellence',
      description: 'Automated pipelines for fast, reliable deployments',
      highlights: [
        'Pipeline automation',
        'Zero-downtime deploys',
        'Rollback capabilities',
        'Multi-environment support'
      ]
    },
    {
      icon: 'Cloud',
      title: 'Cloud Management',
      description: 'Optimize and manage your cloud infrastructure',
      highlights: [
        'AWS/Azure/GCP expertise',
        'Cost optimization',
        'Scalability design',
        'Disaster recovery'
      ]
    },
    {
      icon: 'Activity',
      title: '24/7 Monitoring',
      description: 'Proactive monitoring and incident response',
      highlights: [
        'Real-time monitoring',
        'Alert management',
        'Incident response',
        'Performance tuning'
      ]
    },
    {
      icon: 'Shield',
      title: 'Security & Compliance',
      description: 'Secure infrastructure with compliance support',
      highlights: [
        'Security hardening',
        'Compliance automation',
        'Vulnerability scanning',
        'Audit support'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Assessment',
        description: 'Evaluate current DevOps maturity and needs',
        duration: 'Week 1',
        deliverables: [
          'Infrastructure audit',
          'Pipeline assessment',
          'Security review',
          'Recommendations'
        ]
      },
      {
        icon: 'Users',
        title: 'Team Assignment',
        description: 'Assign dedicated DevOps engineers',
        duration: 'Week 2',
        deliverables: [
          'Engineer selection',
          'Access setup',
          'Tool alignment',
          'Communication channels'
        ]
      },
      {
        icon: 'Settings',
        title: 'Implementation',
        description: 'Implement DevOps improvements',
        duration: 'Week 3-6',
        deliverables: [
          'Pipeline setup',
          'Infrastructure optimization',
          'Monitoring implementation',
          'Documentation'
        ]
      },
      {
        icon: 'Activity',
        title: 'Operations',
        description: 'Ongoing DevOps management and support',
        duration: 'Ongoing',
        deliverables: [
          'Daily operations',
          'Continuous improvement',
          'Incident management',
          'Regular reporting'
        ]
      }
    ],
    totalDuration: '2-4 weeks to operational'
  },

  benefits: [
    {
      icon: 'Zap',
      title: 'Faster Deployments',
      description: 'Deploy in minutes, not hours',
      stat: '10x',
      statSuffix: '',
      statLabel: 'Faster deployments'
    },
    {
      icon: 'Activity',
      title: 'Higher Uptime',
      description: 'Reliable, always-on systems',
      stat: '99.9',
      statSuffix: '%',
      statLabel: 'Uptime SLA'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Reduction',
      description: 'Optimized infrastructure costs',
      stat: '30',
      statSuffix: '%',
      statLabel: 'Cloud savings'
    },
    {
      icon: 'Shield',
      title: 'Security',
      description: 'Hardened, compliant systems',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Security coverage'
    }
  ],

  techStack: [
    {
      name: 'CI/CD Tools',
      description: 'Pipeline and automation tools',
      technologies: [
        { name: 'Jenkins', icon: '/icons/tech/jenkins.svg', category: 'CI/CD', proficiency: 'expert' },
        { name: 'GitHub Actions', icon: '/icons/tech/github.svg', category: 'CI/CD', proficiency: 'expert' },
        { name: 'GitLab CI', icon: '/icons/tech/gitlab.svg', category: 'CI/CD', proficiency: 'expert' },
        { name: 'Azure DevOps', icon: '/icons/tech/azure.svg', category: 'CI/CD', proficiency: 'expert' }
      ]
    },
    {
      name: 'Containerization',
      description: 'Container and orchestration',
      technologies: [
        { name: 'Docker', icon: '/icons/tech/docker.svg', category: 'Container', proficiency: 'expert' },
        { name: 'Kubernetes', icon: '/icons/tech/kubernetes.svg', category: 'Orchestration', proficiency: 'expert' },
        { name: 'Helm', icon: '/icons/tech/helm.svg', category: 'Orchestration', proficiency: 'expert' },
        { name: 'ArgoCD', icon: '/icons/tech/argocd.svg', category: 'GitOps', proficiency: 'expert' }
      ]
    },
    {
      name: 'Cloud Platforms',
      description: 'Cloud infrastructure',
      technologies: [
        { name: 'AWS', icon: '/icons/tech/aws.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Azure', icon: '/icons/tech/azure.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'GCP', icon: '/icons/tech/gcp.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Terraform', icon: '/icons/tech/terraform.svg', category: 'IaC', proficiency: 'expert' }
      ]
    },
    {
      name: 'Monitoring',
      description: 'Observability and monitoring',
      technologies: [
        { name: 'Prometheus', icon: '/icons/tech/prometheus.svg', category: 'Monitoring', proficiency: 'expert' },
        { name: 'Grafana', icon: '/icons/tech/grafana.svg', category: 'Visualization', proficiency: 'expert' },
        { name: 'Datadog', icon: '/icons/tech/datadog.svg', category: 'APM', proficiency: 'expert' },
        { name: 'ELK Stack', icon: '/icons/tech/elasticsearch.svg', category: 'Logging', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'DevOps Support',
        description: '1 DevOps engineer',
        price: '$7,500',
        priceNote: 'per month',
        features: [
          { name: 'Dedicated DevOps engineer', included: true },
          { name: 'CI/CD management', included: true },
          { name: 'Cloud infrastructure support', included: true },
          { name: 'Basic monitoring', included: true },
          { name: 'Business hours support', included: true },
          { name: '24/7 support', included: false },
          { name: 'Security hardening', included: false },
          { name: 'Disaster recovery', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'DevOps Team',
        description: '2-3 DevOps engineers',
        price: '$18,000',
        priceNote: 'per month',
        badge: 'Most Popular',
        features: [
          { name: '2-3 DevOps engineers', included: true },
          { name: 'Full CI/CD automation', included: true },
          { name: 'Cloud optimization', included: true },
          { name: 'Comprehensive monitoring', included: true },
          { name: 'Extended hours support', included: true },
          { name: 'Security hardening', included: true },
          { name: 'IaC management', included: true },
          { name: '24/7 critical support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise DevOps',
        description: '4+ engineers + 24/7',
        price: 'Custom',
        priceNote: 'based on requirements',
        features: [
          { name: '4+ DevOps engineers', included: true },
          { name: 'Full DevOps transformation', included: true },
          { name: 'Multi-cloud management', included: true },
          { name: 'Advanced observability', included: true },
          { name: '24/7 support', included: true },
          { name: 'Security & compliance', included: true },
          { name: 'Disaster recovery', included: true },
          { name: 'SLA guarantees', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'All plans include certified engineers and cloud provider expertise. Custom SLAs available.'
  },

  portfolio: [
    {
      title: 'SaaS Platform DevOps',
      client: 'CloudScale SaaS',
      industry: 'SaaS',
      description: 'Outsourced DevOps team managing entire platform operations',
      challenge: 'Slow deployments and frequent outages affecting customers',
      solution: 'Provided DevOps team to automate and stabilize operations',
      results: [
        'Deployment time reduced from 4 hours to 10 minutes',
        'Achieved 99.99% uptime',
        'Cloud costs reduced by 35%',
        'Zero-downtime deployments achieved'
      ],
      metrics: [
        { label: 'Deploy Time', value: '10 min' },
        { label: 'Uptime', value: '99.99%' },
        { label: 'Cost Savings', value: '35%' }
      ],
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop',
      tags: ['SaaS', 'Kubernetes', 'AWS', 'CI/CD']
    },
    {
      title: 'E-commerce Infrastructure',
      client: 'GlobalShop Inc',
      industry: 'E-commerce',
      description: 'DevOps outsourcing for high-traffic e-commerce platform',
      challenge: 'Infrastructure couldn\'t handle traffic spikes during sales',
      solution: 'Implemented auto-scaling and optimized infrastructure',
      results: [
        'Handled 10x traffic during Black Friday',
        'Page load time improved by 60%',
        'Infrastructure costs optimized by 40%',
        'Achieved PCI compliance'
      ],
      metrics: [
        { label: 'Traffic Capacity', value: '10x' },
        { label: 'Performance', value: '60% faster' },
        { label: 'Cost Savings', value: '40%' }
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Auto-scaling', 'Azure', 'Security']
    },
    {
      title: 'FinTech CI/CD Transformation',
      client: 'PaySecure Financial',
      industry: 'FinTech',
      description: 'Complete CI/CD pipeline implementation for financial services',
      challenge: 'Manual deployments causing delays and compliance risks',
      solution: 'Built secure CI/CD pipelines with compliance automation',
      results: [
        'Deployments increased from monthly to daily',
        'Security scanning integrated in pipeline',
        'Audit compliance automated',
        'Developer productivity up 50%'
      ],
      metrics: [
        { label: 'Deployments', value: 'Daily' },
        { label: 'Productivity', value: '+50%' },
        { label: 'Compliance', value: 'Automated' }
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      tags: ['FinTech', 'CI/CD', 'Security', 'Compliance']
    },
    {
      title: 'Healthcare Cloud Migration',
      client: 'CareLink Health',
      industry: 'Healthcare',
      description: 'DevOps-led cloud migration for HIPAA-compliant infrastructure',
      challenge: 'Legacy on-premise systems needed modernization with compliance',
      solution: 'Migrated to cloud with infrastructure as code and security automation',
      results: [
        'Migrated 50+ applications to cloud',
        'HIPAA compliance maintained throughout',
        'Infrastructure costs reduced 45%',
        'Disaster recovery RTO improved to 1 hour'
      ],
      metrics: [
        { label: 'Applications', value: '50+' },
        { label: 'Cost Savings', value: '45%' },
        { label: 'RTO', value: '1 hour' }
      ],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'Cloud Migration', 'HIPAA', 'AWS']
    }
  ],

  testimonials: [
    {
      quote: 'Our deployment time went from 4 hours to 10 minutes. The DevOps team transformed our operations completely.',
      author: 'Kevin Zhang',
      role: 'CTO',
      company: 'CloudScale SaaS',
      rating: 5,
      location: 'Austin, TX'
    },
    {
      quote: 'Black Friday used to be stressful. Now our infrastructure scales automatically. The team is phenomenal.',
      author: 'Patricia Brown',
      role: 'VP Engineering',
      company: 'GlobalShop Inc',
      rating: 5,
      location: 'Chicago, IL'
    }
  ],

  faqs: [
    {
      question: 'What DevOps services do you provide?',
      answer: 'We provide comprehensive DevOps services including CI/CD pipeline design and management, cloud infrastructure management (AWS, Azure, GCP), containerization (Docker, Kubernetes), infrastructure as code (Terraform, CloudFormation), monitoring and alerting, security hardening, and 24/7 operations support.'
    },
    {
      question: 'Do your engineers work in our timezone?',
      answer: 'We accommodate your timezone requirements. For teams needing significant overlap, we assign engineers in compatible timezones. For 24/7 coverage, we can provide follow-the-sun support with handoffs between regions to ensure continuous coverage.'
    },
    {
      question: 'How do you handle security and access?',
      answer: 'Security is paramount. Our engineers follow least-privilege access principles, use secure credential management, and comply with your security policies. We can work within your VPN, use your identity provider, and submit to background checks if required.'
    },
    {
      question: 'Can you work with our existing tools?',
      answer: 'Absolutely. Our engineers are experienced with all major DevOps tools and platforms. We integrate with your existing toolchain rather than forcing tool changes. If improvements would benefit you, we\'ll recommend them but never require unnecessary changes.'
    },
    {
      question: 'What cloud platforms do you support?',
      answer: 'We support all major cloud platforms including AWS, Azure, Google Cloud, and hybrid/multi-cloud environments. Our engineers hold relevant certifications (AWS Solutions Architect, Azure Administrator, GCP Professional) and stay current with platform updates.'
    }
  ],

  relatedServices: [
    {
      name: 'Cloud Infrastructure',
      slug: 'cloud-infrastructure',
      description: 'Cloud architecture services',
      icon: 'Cloud'
    },
    {
      name: 'Dedicated Development Teams',
      slug: 'dedicated-development-teams',
      description: 'Full development teams',
      icon: 'Users'
    },
    {
      name: 'Staff Augmentation',
      slug: 'staff-augmentation',
      description: 'Individual DevOps placement',
      icon: 'UserPlus'
    },
    {
      name: 'QA Testing Outsourcing',
      slug: 'qa-testing-outsourcing',
      description: 'Quality assurance services',
      icon: 'CheckCircle'
    }
  ],

  seo: {
    title: 'DevOps Outsourcing Services | DevOps as a Service',
    description: 'Outsource DevOps to certified engineers. CI/CD automation, cloud management, 24/7 monitoring. 99.9% uptime SLA with 10x faster deployments.',
    keywords: [
      'devops outsourcing',
      'devops as a service',
      'outsource devops',
      'managed devops',
      'devops team',
      'ci cd outsourcing',
      'cloud devops services',
      'devops engineers',
      'devops consulting',
      'infrastructure outsourcing'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'DevOps Outsourcing Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'DevOps as a Service'
      }
    }
  }
};
