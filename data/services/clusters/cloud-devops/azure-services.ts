// Azure Services Data
import { ServiceData } from '@/components/services/sections';

export const azureServicesData: ServiceData = {
  name: 'Azure Services',
  slug: 'azure-services',
  tagline: 'Enterprise-grade Microsoft Azure solutions and expertise',
  category: 'Cloud & DevOps',
  description: 'Transform your business with Microsoft Azure cloud solutions. Our certified Azure experts help you design, migrate, and optimize enterprise-grade infrastructure that integrates seamlessly with your Microsoft ecosystem.',

  hero: {
    headline: 'Microsoft Azure Solutions',
    subheadline: 'Enterprise Cloud Excellence with Azure',
    description: 'Harness the power of Microsoft Azure for your enterprise. From hybrid cloud deployments to AI-powered applications, our Azure-certified team delivers solutions that drive digital transformation.',
    keyFeatures: [
      'Azure architecture design',
      'Microsoft 365 integration',
      'Hybrid cloud solutions',
      'Azure DevOps pipelines',
      'Enterprise security',
      'Azure AI & ML services'
    ],
    badges: ['Microsoft Gold Partner', 'Azure Expert MSP', 'Azure Certified Team', 'Enterprise Ready']
  },

  painPoints: [
    {
      icon: 'Puzzle',
      title: 'Complex Microsoft Integration',
      description: 'Struggling to integrate Azure with existing Microsoft 365, Active Directory, and enterprise systems',
      stat: '67%',
      statLabel: 'Face integration challenges'
    },
    {
      icon: 'DollarSign',
      title: 'Unclear Azure Pricing',
      description: 'Difficulty predicting and controlling Azure costs across subscriptions and services',
      stat: '40%',
      statLabel: 'Over budget on Azure'
    },
    {
      icon: 'Lock',
      title: 'Enterprise Security Gaps',
      description: 'Meeting compliance requirements and securing hybrid environments proves challenging',
      stat: '58%',
      statLabel: 'Have security concerns'
    },
    {
      icon: 'Users',
      title: 'Skills Shortage',
      description: 'Internal teams lack Azure expertise needed for complex enterprise deployments',
      stat: '70%',
      statLabel: 'Report skills gaps'
    }
  ],

  solutions: [
    {
      icon: 'Building',
      title: 'Enterprise Azure Architecture',
      description: 'Design enterprise-scale Azure landing zones with governance and security built-in',
      highlights: [
        'Landing zone deployment',
        'Management group hierarchy',
        'Policy as Code',
        'Cost management'
      ]
    },
    {
      icon: 'GitMerge',
      title: 'Hybrid Cloud Solutions',
      description: 'Connect on-premise infrastructure with Azure for seamless hybrid operations',
      highlights: [
        'Azure Arc deployment',
        'ExpressRoute setup',
        'Azure Stack HCI',
        'Hybrid identity'
      ]
    },
    {
      icon: 'Code',
      title: 'Azure DevOps',
      description: 'Implement complete CI/CD pipelines with Azure DevOps or GitHub Actions',
      highlights: [
        'Pipeline automation',
        'Infrastructure as Code',
        'Release management',
        'Test automation'
      ]
    },
    {
      icon: 'Brain',
      title: 'Azure AI & Data',
      description: 'Build intelligent applications with Azure AI, ML, and data services',
      highlights: [
        'Azure OpenAI integration',
        'Machine learning ops',
        'Data analytics',
        'Power BI dashboards'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Azure Assessment',
        description: 'Evaluate your current environment and define Azure transformation roadmap',
        duration: 'Week 1-2',
        deliverables: [
          'Current state analysis',
          'Azure readiness assessment',
          'Migration roadmap',
          'Cost projections'
        ]
      },
      {
        icon: 'Layout',
        title: 'Architecture Design',
        description: 'Design enterprise Azure architecture following Microsoft best practices',
        duration: 'Week 2-3',
        deliverables: [
          'Architecture blueprints',
          'Security design',
          'Network topology',
          'Governance framework'
        ]
      },
      {
        icon: 'Layers',
        title: 'Landing Zone Setup',
        description: 'Deploy Azure landing zone with management, security, and governance controls',
        duration: 'Week 3-5',
        deliverables: [
          'Landing zone deployment',
          'Identity integration',
          'Network foundation',
          'Policy implementation'
        ]
      },
      {
        icon: 'ArrowRight',
        title: 'Migration & Optimization',
        description: 'Migrate workloads and optimize for performance, security, and cost',
        duration: 'Week 5-10',
        deliverables: [
          'Workload migration',
          'Performance optimization',
          'Cost optimization',
          'Team training'
        ]
      }
    ],
    totalDuration: '8-12 weeks'
  },

  benefits: [
    {
      icon: 'Building',
      title: 'Enterprise Integration',
      description: 'Seamless integration with Microsoft 365, Teams, and enterprise applications',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Microsoft integration'
    },
    {
      icon: 'Shield',
      title: 'Enterprise Security',
      description: 'Built-in security with Azure Defender, Sentinel, and compliance tools',
      stat: '50+',
      statSuffix: '',
      statLabel: 'Compliance certifications'
    },
    {
      icon: 'Globe',
      title: 'Global Scale',
      description: 'Deploy to 60+ Azure regions worldwide for global reach',
      stat: '60+',
      statSuffix: '',
      statLabel: 'Azure regions'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Optimization',
      description: 'Reduce Azure spend with reserved instances and hybrid benefits',
      stat: '35',
      statSuffix: '%',
      statLabel: 'Average savings'
    }
  ],

  techStack: [
    {
      name: 'Compute & Containers',
      description: 'Azure compute services for any workload',
      technologies: [
        { name: 'Azure VMs', icon: '/icons/tech/azure-vm.svg', category: 'Compute', proficiency: 'expert' },
        { name: 'Azure Functions', icon: '/icons/tech/azure-functions.svg', category: 'Serverless', proficiency: 'expert' },
        { name: 'AKS', icon: '/icons/tech/aks.svg', category: 'Kubernetes', proficiency: 'expert' },
        { name: 'App Service', icon: '/icons/tech/app-service.svg', category: 'PaaS', proficiency: 'expert' }
      ]
    },
    {
      name: 'Data & AI',
      description: 'Azure data and AI services',
      technologies: [
        { name: 'Azure SQL', icon: '/icons/tech/azure-sql.svg', category: 'Database', proficiency: 'expert' },
        { name: 'Cosmos DB', icon: '/icons/tech/cosmosdb.svg', category: 'NoSQL', proficiency: 'expert' },
        { name: 'Azure OpenAI', icon: '/icons/tech/azure-openai.svg', category: 'AI', proficiency: 'advanced' },
        { name: 'Synapse', icon: '/icons/tech/synapse.svg', category: 'Analytics', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Security & Identity',
      description: 'Enterprise security services',
      technologies: [
        { name: 'Entra ID', icon: '/icons/tech/entra.svg', category: 'Identity', proficiency: 'expert' },
        { name: 'Key Vault', icon: '/icons/tech/keyvault.svg', category: 'Security', proficiency: 'expert' },
        { name: 'Defender', icon: '/icons/tech/defender.svg', category: 'Security', proficiency: 'expert' },
        { name: 'Sentinel', icon: '/icons/tech/sentinel.svg', category: 'SIEM', proficiency: 'advanced' }
      ]
    },
    {
      name: 'DevOps & Management',
      description: 'Azure DevOps and management tools',
      technologies: [
        { name: 'Azure DevOps', icon: '/icons/tech/azure-devops.svg', category: 'DevOps', proficiency: 'expert' },
        { name: 'ARM Templates', icon: '/icons/tech/arm.svg', category: 'IaC', proficiency: 'expert' },
        { name: 'Bicep', icon: '/icons/tech/bicep.svg', category: 'IaC', proficiency: 'expert' },
        { name: 'Azure Monitor', icon: '/icons/tech/azure-monitor.svg', category: 'Monitoring', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Starter',
        description: 'Azure setup for SMBs',
        price: '$6,000',
        priceNote: 'one-time setup',
        features: [
          { name: 'Azure subscription setup', included: true },
          { name: 'Basic landing zone', included: true },
          { name: 'Entra ID integration', included: true },
          { name: 'Security baseline', included: true },
          { name: 'Basic monitoring', included: true },
          { name: 'Hybrid connectivity', included: false },
          { name: 'Advanced governance', included: false },
          { name: 'Ongoing support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Professional',
        description: 'Enterprise Azure transformation',
        price: '$18,000',
        priceNote: 'one-time setup',
        badge: 'Most Popular',
        features: [
          { name: 'Enterprise landing zone', included: true },
          { name: 'Multi-subscription design', included: true },
          { name: 'Full identity integration', included: true },
          { name: 'Advanced security', included: true },
          { name: 'Full observability', included: true },
          { name: 'ExpressRoute setup', included: true },
          { name: 'Policy as Code', included: true },
          { name: '3-month support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Global Azure deployment',
        price: '$45,000+',
        priceNote: 'custom solution',
        features: [
          { name: 'Global landing zones', included: true },
          { name: 'Azure Organization design', included: true },
          { name: 'Hybrid with Azure Arc', included: true },
          { name: 'Enterprise security suite', included: true },
          { name: 'Azure Sentinel SIEM', included: true },
          { name: 'Multi-region DR', included: true },
          { name: 'Full governance suite', included: true },
          { name: 'Dedicated support team', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need Azure managed services? Ask about our MSP offerings starting at $3,000/month.'
  },

  portfolio: [
    {
      title: 'Enterprise Hybrid Cloud Deployment',
      client: 'GlobalManufacturing Corp',
      industry: 'Manufacturing',
      description: 'Hybrid cloud architecture connecting 50+ global locations with Azure',
      challenge: 'Legacy on-premise infrastructure limiting agility with high maintenance costs',
      solution: 'Deployed Azure landing zones with Azure Arc for hybrid management and ExpressRoute connectivity',
      results: [
        'Connected 50+ locations to Azure',
        '45% reduction in IT operating costs',
        'Deployment time reduced from months to days',
        'Unified management across hybrid environment'
      ],
      metrics: [
        { label: 'Locations', value: '50+' },
        { label: 'Cost Savings', value: '45%' },
        { label: 'Deployment', value: '10x faster' }
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      tags: ['Hybrid Cloud', 'Azure Arc', 'ExpressRoute', 'Enterprise']
    },
    {
      title: 'Healthcare Azure Migration',
      client: 'HealthFirst Systems',
      industry: 'Healthcare',
      description: 'HIPAA-compliant Azure migration for hospital network',
      challenge: 'Aging infrastructure with compliance concerns and limited disaster recovery',
      solution: 'Migrated to Azure with Defender for Cloud, geo-redundant storage, and Azure Site Recovery',
      results: [
        'Achieved HIPAA compliance certification',
        'RTO improved from 48 hours to 2 hours',
        'Zero security incidents in 24 months',
        '40% reduction in infrastructure costs'
      ],
      metrics: [
        { label: 'Compliance', value: 'HIPAA' },
        { label: 'RTO', value: '2 hours' },
        { label: 'Security', value: '0 incidents' }
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'HIPAA', 'Disaster Recovery', 'Security']
    },
    {
      title: 'Azure Government Cloud Implementation',
      client: 'FedSecure Agency',
      industry: 'Government',
      description: 'FedRAMP-compliant Azure Government deployment for federal agency',
      challenge: 'Legacy systems needed modernization while meeting strict government security requirements',
      solution: 'Implemented Azure Government with Zero Trust, continuous compliance monitoring, and IL5 controls',
      results: [
        'FedRAMP High authorization achieved',
        'IL5 compliance maintained',
        'Modernized 25 legacy applications',
        'Security posture score improved to 95%'
      ],
      metrics: [
        { label: 'FedRAMP', value: 'High' },
        { label: 'Apps Modernized', value: '25' },
        { label: 'Security Score', value: '95%' }
      ],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      tags: ['Azure Government', 'FedRAMP', 'Compliance', 'Zero Trust']
    },
    {
      title: 'Retail Azure Data Platform',
      client: 'MegaRetail Group',
      industry: 'Retail',
      description: 'Azure data and AI platform for retail analytics and personalization',
      challenge: 'Data silos preventing unified customer view and real-time personalization',
      solution: 'Built Azure Synapse data platform with Azure ML for customer 360 and recommendations',
      results: [
        'Unified data from 200+ stores',
        '35% increase in customer engagement',
        'Real-time inventory visibility',
        'AI-powered recommendations live in 4 weeks'
      ],
      metrics: [
        { label: 'Stores', value: '200+' },
        { label: 'Engagement', value: '+35%' },
        { label: 'Time to AI', value: '4 weeks' }
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      tags: ['Azure Synapse', 'Retail', 'AI/ML', 'Data Platform']
    }
  ],

  testimonials: [
    {
      quote: 'The Azure migration transformed our IT from a cost center to a business enabler. We now deploy in hours instead of months.',
      author: 'Thomas Anderson',
      role: 'CIO',
      company: 'GlobalManufacturing Corp',
      rating: 5,
      location: 'Chicago, IL'
    },
    {
      quote: 'Their expertise in Azure security and healthcare compliance gave us confidence throughout the migration. Flawless execution.',
      author: 'Dr. Lisa Patterson',
      role: 'CTO',
      company: 'HealthFirst Systems',
      rating: 5,
      location: 'Atlanta, GA'
    }
  ],

  faqs: [
    {
      question: 'How does Azure integrate with our existing Microsoft tools?',
      answer: 'Azure integrates natively with Microsoft 365, Teams, Power Platform, and Dynamics 365. Entra ID (formerly Azure AD) provides single sign-on across all services. We design architectures that leverage your existing Microsoft investments while extending capabilities to the cloud.'
    },
    {
      question: 'What is an Azure Landing Zone?',
      answer: 'An Azure Landing Zone is a pre-configured, secure foundation for your Azure environment based on Microsoft best practices. It includes management groups, subscriptions, networking, identity, and governance controls that provide a scalable, compliant starting point for all your Azure workloads.'
    },
    {
      question: 'Can you help with Azure hybrid scenarios?',
      answer: 'Yes, we specialize in hybrid cloud deployments using Azure Arc, Azure Stack HCI, and ExpressRoute. Whether you need to extend on-premise infrastructure to Azure, manage multi-cloud environments, or maintain certain workloads on-premise for compliance, we design solutions that fit your requirements.'
    },
    {
      question: 'How do you handle Azure cost management?',
      answer: 'We implement Azure Cost Management + Billing with custom dashboards, budgets, and alerts. We optimize costs through reserved instances, Azure Hybrid Benefit (use existing Windows/SQL licenses), spot VMs, and right-sizing recommendations. Most enterprises see 30-40% cost reduction.'
    },
    {
      question: 'What Azure certifications does your team hold?',
      answer: 'Our team holds Microsoft certifications including Azure Solutions Architect Expert, Azure DevOps Engineer Expert, Azure Security Engineer, and Azure Administrator. We are also a Microsoft Gold Partner with demonstrated expertise in cloud platform implementations.'
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
      description: 'Azure DevOps and CI/CD',
      icon: 'Settings'
    },
    {
      name: 'Cloud Security',
      slug: 'cloud-security',
      description: 'Azure security solutions',
      icon: 'Shield'
    },
    {
      name: 'Infrastructure as Code',
      slug: 'infrastructure-as-code',
      description: 'Bicep and ARM templates',
      icon: 'Code'
    }
  ],

  seo: {
    title: 'Azure Services & Consulting | Microsoft Azure Cloud Experts',
    description: 'Expert Microsoft Azure services from certified partners. Enterprise Azure architecture, hybrid cloud, Azure DevOps, and managed services for digital transformation.',
    keywords: [
      'azure services',
      'azure consulting',
      'microsoft azure partner',
      'azure migration',
      'azure hybrid cloud',
      'azure devops',
      'azure security',
      'azure landing zone',
      'azure managed services',
      'enterprise azure'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Microsoft Azure Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Azure Consulting'
      }
    }
  }
};
