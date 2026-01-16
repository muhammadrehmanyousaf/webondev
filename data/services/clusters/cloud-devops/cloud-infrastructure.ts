// Cloud Infrastructure Service Data
import { ServiceData } from '@/components/services/sections';

export const cloudInfrastructureData: ServiceData = {
  name: 'Cloud Infrastructure',
  slug: 'cloud-infrastructure',
  tagline: 'Build scalable, resilient, and cost-efficient cloud foundations',
  category: 'Cloud & DevOps',
  description: 'Design and implement enterprise-grade cloud infrastructure that scales with your business. Our cloud architects create highly available, secure, and optimized environments across multi-cloud platforms.',

  hero: {
    headline: 'Enterprise Cloud Infrastructure',
    subheadline: 'Scalable, Secure, and Cost-Optimized Cloud Foundations',
    description: 'Transform your IT infrastructure with modern cloud solutions. We architect and deploy highly available, auto-scaling environments that reduce costs while maximizing performance and reliability.',
    keyFeatures: [
      'Multi-cloud architecture design',
      'Auto-scaling & load balancing',
      'High availability (99.99% SLA)',
      'Cost optimization strategies',
      'Infrastructure monitoring',
      'Disaster recovery planning'
    ],
    badges: ['AWS Partner', 'Azure Partner', 'GCP Partner', 'ISO 27001']
  },

  painPoints: [
    {
      icon: 'DollarSign',
      title: 'Unpredictable Cloud Costs',
      description: 'Cloud bills spiraling out of control with unused resources and inefficient architectures',
      stat: '35%',
      statLabel: 'Average overspend on cloud'
    },
    {
      icon: 'AlertTriangle',
      title: 'Downtime & Reliability Issues',
      description: 'Single points of failure causing costly outages and damaging customer trust',
      stat: '$5,600',
      statLabel: 'Cost per minute of downtime'
    },
    {
      icon: 'Lock',
      title: 'Security Vulnerabilities',
      description: 'Misconfigured cloud resources creating security gaps and compliance risks',
      stat: '68%',
      statLabel: 'Breaches from misconfig'
    },
    {
      icon: 'TrendingDown',
      title: 'Poor Performance',
      description: 'Slow applications and infrastructure bottlenecks hurting user experience',
      stat: '40%',
      statLabel: 'Users leave slow sites'
    }
  ],

  solutions: [
    {
      icon: 'Cloud',
      title: 'Multi-Cloud Architecture',
      description: 'Design resilient infrastructure across AWS, Azure, and GCP for optimal performance',
      highlights: [
        'Cloud provider selection',
        'Hybrid cloud strategies',
        'Multi-region deployment',
        'Vendor lock-in prevention'
      ]
    },
    {
      icon: 'Zap',
      title: 'Auto-Scaling Infrastructure',
      description: 'Automatically scale resources based on demand to optimize costs and performance',
      highlights: [
        'Horizontal & vertical scaling',
        'Predictive scaling',
        'Load balancer configuration',
        'Traffic management'
      ]
    },
    {
      icon: 'Shield',
      title: 'High Availability Design',
      description: 'Eliminate single points of failure with redundant, fault-tolerant architectures',
      highlights: [
        'Multi-AZ deployment',
        'Database replication',
        'Failover automation',
        'Health monitoring'
      ]
    },
    {
      icon: 'DollarSign',
      title: 'Cost Optimization',
      description: 'Reduce cloud spending through right-sizing, reserved instances, and spot strategies',
      highlights: [
        'Resource right-sizing',
        'Reserved capacity planning',
        'Spot instance strategies',
        'Cost allocation tagging'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Infrastructure Assessment',
        description: 'Analyze current infrastructure, workloads, and requirements to design optimal cloud strategy',
        duration: 'Week 1-2',
        deliverables: [
          'Current state analysis',
          'Workload assessment',
          'Cloud readiness report',
          'Migration strategy'
        ]
      },
      {
        icon: 'Layout',
        title: 'Architecture Design',
        description: 'Create detailed cloud architecture with security, scalability, and cost optimization built-in',
        duration: 'Week 2-3',
        deliverables: [
          'Architecture diagrams',
          'Network topology',
          'Security design',
          'Cost projections'
        ]
      },
      {
        icon: 'Code',
        title: 'Infrastructure Build',
        description: 'Deploy infrastructure using Infrastructure as Code for consistency and repeatability',
        duration: 'Week 3-6',
        deliverables: [
          'IaC templates',
          'Environment setup',
          'Security hardening',
          'Monitoring setup'
        ]
      },
      {
        icon: 'GitMerge',
        title: 'Migration & Optimization',
        description: 'Migrate workloads and continuously optimize for performance and cost efficiency',
        duration: 'Week 6-8',
        deliverables: [
          'Workload migration',
          'Performance tuning',
          'Cost optimization',
          'Documentation'
        ]
      }
    ],
    totalDuration: '8-10 weeks'
  },

  benefits: [
    {
      icon: 'TrendingUp',
      title: '99.99% Uptime',
      description: 'Highly available infrastructure with fault tolerance and automatic failover',
      stat: '99.99',
      statSuffix: '%',
      statLabel: 'Availability SLA'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Reduction',
      description: 'Optimize cloud spending through right-sizing and efficient resource management',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Average cost savings'
    },
    {
      icon: 'Zap',
      title: 'Instant Scaling',
      description: 'Auto-scale resources in seconds to handle traffic spikes seamlessly',
      stat: '<30',
      statSuffix: 's',
      statLabel: 'Scale-up time'
    },
    {
      icon: 'Shield',
      title: 'Enterprise Security',
      description: 'Defense-in-depth security with compliance certifications and audit trails',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Compliance coverage'
    }
  ],

  techStack: [
    {
      name: 'Cloud Platforms',
      description: 'Major cloud providers for infrastructure deployment',
      technologies: [
        { name: 'AWS', icon: '/icons/tech/aws.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Azure', icon: '/icons/tech/azure.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Google Cloud', icon: '/icons/tech/gcp.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'DigitalOcean', icon: '/icons/tech/digitalocean.svg', category: 'Cloud', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Infrastructure as Code',
      description: 'Tools for automated infrastructure provisioning',
      technologies: [
        { name: 'Terraform', icon: '/icons/tech/terraform.svg', category: 'IaC', proficiency: 'expert' },
        { name: 'CloudFormation', icon: '/icons/tech/cloudformation.svg', category: 'IaC', proficiency: 'expert' },
        { name: 'Pulumi', icon: '/icons/tech/pulumi.svg', category: 'IaC', proficiency: 'advanced' },
        { name: 'Ansible', icon: '/icons/tech/ansible.svg', category: 'Config', proficiency: 'expert' }
      ]
    },
    {
      name: 'Monitoring & Observability',
      description: 'Tools for infrastructure monitoring and alerting',
      technologies: [
        { name: 'CloudWatch', icon: '/icons/tech/cloudwatch.svg', category: 'Monitoring', proficiency: 'expert' },
        { name: 'Datadog', icon: '/icons/tech/datadog.svg', category: 'Monitoring', proficiency: 'expert' },
        { name: 'Prometheus', icon: '/icons/tech/prometheus.svg', category: 'Monitoring', proficiency: 'advanced' },
        { name: 'Grafana', icon: '/icons/tech/grafana.svg', category: 'Visualization', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Starter',
        description: 'Small business cloud setup',
        price: '$8,000',
        priceNote: 'one-time setup',
        features: [
          { name: 'Single cloud platform', included: true },
          { name: 'Basic HA configuration', included: true },
          { name: 'Auto-scaling setup', included: true },
          { name: 'Security hardening', included: true },
          { name: 'Monitoring dashboard', included: true },
          { name: 'Multi-region deployment', included: false },
          { name: 'Disaster recovery', included: false },
          { name: '24/7 support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Professional',
        description: 'Growing business infrastructure',
        price: '$20,000',
        priceNote: 'one-time setup',
        badge: 'Most Popular',
        features: [
          { name: 'Multi-cloud architecture', included: true },
          { name: 'Advanced HA (99.99%)', included: true },
          { name: 'Predictive auto-scaling', included: true },
          { name: 'Security compliance', included: true },
          { name: 'Full observability stack', included: true },
          { name: 'Multi-region deployment', included: true },
          { name: 'Basic DR setup', included: true },
          { name: '24/7 support (3 months)', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Large-scale infrastructure',
        price: '$50,000+',
        priceNote: 'custom solution',
        features: [
          { name: 'Global multi-cloud', included: true },
          { name: 'Zero-downtime architecture', included: true },
          { name: 'AI-driven scaling', included: true },
          { name: 'Full compliance suite', included: true },
          { name: 'Advanced observability', included: true },
          { name: 'Global edge deployment', included: true },
          { name: 'Full DR with RTO/RPO', included: true },
          { name: '24/7 dedicated support', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need ongoing cloud management? Ask about our managed services starting at $3,000/month.'
  },

  portfolio: [
    {
      title: 'Global E-commerce Platform Migration',
      client: 'RetailMax Corp',
      industry: 'E-commerce',
      description: 'Migrated monolithic infrastructure to a multi-region, auto-scaling cloud architecture',
      challenge: 'Legacy infrastructure couldn\'t handle Black Friday traffic spikes, causing $2M in lost sales',
      solution: 'Designed multi-AZ AWS architecture with predictive auto-scaling and global CDN distribution',
      results: [
        '99.99% uptime achieved during peak season',
        '70% reduction in infrastructure costs',
        '300% improvement in page load times',
        'Handled 10x normal traffic on Black Friday'
      ],
      metrics: [
        { label: 'Uptime', value: '99.99%' },
        { label: 'Cost Savings', value: '$180K/year' },
        { label: 'Performance', value: '3x faster' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['AWS', 'Auto-Scaling', 'Multi-Region', 'High Availability']
    },
    {
      title: 'Healthcare Cloud Transformation',
      client: 'MedSecure Health',
      industry: 'Healthcare',
      description: 'Built HIPAA-compliant cloud infrastructure with disaster recovery capabilities',
      challenge: 'On-premise infrastructure was costly, insecure, and failed compliance audits',
      solution: 'Implemented Azure healthcare-optimized infrastructure with full encryption and DR',
      results: [
        'Achieved HIPAA and HITRUST certification',
        '50% reduction in infrastructure costs',
        'RTO reduced from 24 hours to 15 minutes',
        'Zero security incidents post-migration'
      ],
      metrics: [
        { label: 'Compliance', value: '100%' },
        { label: 'RTO', value: '15 min' },
        { label: 'Cost Savings', value: '50%' }
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      tags: ['Azure', 'HIPAA', 'Disaster Recovery', 'Healthcare']
    },
    {
      title: 'Startup Cloud Platform Build',
      client: 'InnovateTech Ventures',
      industry: 'Technology',
      description: 'Built scalable cloud infrastructure from scratch for rapid-growth startup',
      challenge: 'New startup needing enterprise-grade infrastructure with limited budget and fast timeline',
      solution: 'Implemented GCP infrastructure with IaC, auto-scaling, and cost optimization from day one',
      results: [
        'Production-ready in 3 weeks',
        'Scaled from 0 to 1M users seamlessly',
        'Cost-per-user 60% below industry average',
        'Zero downtime since launch'
      ],
      metrics: [
        { label: 'Time to Prod', value: '3 weeks' },
        { label: 'Users', value: '1M+' },
        { label: 'Cost Savings', value: '60%' }
      ],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      tags: ['GCP', 'Startup', 'Auto-Scaling', 'Cost Optimization']
    },
    {
      title: 'Financial Services Multi-Cloud',
      client: 'TrustFirst Capital',
      industry: 'Financial Services',
      description: 'Multi-cloud architecture across AWS and Azure for risk distribution',
      challenge: 'Single cloud dependency creating business continuity and compliance risks',
      solution: 'Designed multi-cloud architecture with failover, unified networking, and compliance controls',
      results: [
        'Zero single points of failure',
        'Cross-cloud failover in under 5 minutes',
        'Met all regulatory requirements',
        'Negotiating leverage reduced cloud costs by 25%'
      ],
      metrics: [
        { label: 'Failover', value: '<5 min' },
        { label: 'Compliance', value: '100%' },
        { label: 'Cost Savings', value: '25%' }
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      tags: ['Multi-Cloud', 'Financial', 'Disaster Recovery', 'Compliance']
    }
  ],

  testimonials: [
    {
      quote: 'Our infrastructure now handles 10x the traffic at 40% lower cost. The team\'s expertise in cloud architecture is exceptional.',
      author: 'David Chen',
      role: 'CTO',
      company: 'RetailMax Corp',
      rating: 5,
      location: 'San Francisco, CA'
    },
    {
      quote: 'They transformed our IT infrastructure from a liability to a competitive advantage. HIPAA compliance was seamless.',
      author: 'Dr. Sarah Williams',
      role: 'Chief Medical Officer',
      company: 'MedSecure Health',
      rating: 5,
      location: 'Boston, MA'
    }
  ],

  faqs: [
    {
      question: 'Which cloud provider should we choose?',
      answer: 'The best cloud provider depends on your specific needs. AWS offers the broadest services and largest market share. Azure excels for Microsoft-centric organizations and enterprise features. GCP leads in data analytics and machine learning. We often recommend multi-cloud strategies to avoid vendor lock-in and optimize for specific workloads.'
    },
    {
      question: 'How long does a cloud migration take?',
      answer: 'Migration timelines vary based on complexity. Simple lift-and-shift migrations can take 4-8 weeks. Application modernization and re-architecting typically require 3-6 months. We use phased approaches to minimize risk and ensure business continuity throughout the migration process.'
    },
    {
      question: 'How do you ensure security in the cloud?',
      answer: 'We implement defense-in-depth security including network segmentation, encryption at rest and in transit, identity and access management, security monitoring, and compliance controls. All architectures follow the shared responsibility model and industry best practices like CIS benchmarks.'
    },
    {
      question: 'What is the typical ROI for cloud infrastructure?',
      answer: 'Most organizations see 30-50% reduction in infrastructure costs within the first year through right-sizing, reserved instances, and eliminating idle resources. Beyond cost savings, cloud infrastructure enables faster time-to-market, improved scalability, and better disaster recovery capabilities.'
    },
    {
      question: 'Do you provide ongoing cloud management?',
      answer: 'Yes, we offer managed cloud services including 24/7 monitoring, security patching, cost optimization, and performance tuning. Our managed services ensure your infrastructure remains secure, optimized, and aligned with evolving business needs.'
    }
  ],

  relatedServices: [
    {
      name: 'AWS Services',
      slug: 'aws-services',
      description: 'Specialized Amazon Web Services solutions',
      icon: 'Cloud'
    },
    {
      name: 'DevOps Automation',
      slug: 'devops-automation',
      description: 'Automate deployments and operations',
      icon: 'Settings'
    },
    {
      name: 'Infrastructure as Code',
      slug: 'infrastructure-as-code',
      description: 'Terraform and CloudFormation solutions',
      icon: 'Code'
    },
    {
      name: 'Cloud Security',
      slug: 'cloud-security',
      description: 'Comprehensive cloud security services',
      icon: 'Shield'
    }
  ],

  seo: {
    title: 'Cloud Infrastructure Services | Enterprise Cloud Architecture',
    description: 'Build scalable, secure cloud infrastructure with expert architects. Multi-cloud design, auto-scaling, high availability, and cost optimization across AWS, Azure, and GCP.',
    keywords: [
      'cloud infrastructure services',
      'cloud architecture design',
      'multi-cloud infrastructure',
      'aws infrastructure',
      'azure infrastructure',
      'cloud migration services',
      'high availability cloud',
      'auto-scaling infrastructure',
      'cloud cost optimization',
      'enterprise cloud solutions'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Cloud Infrastructure Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Cloud Infrastructure Consulting'
      }
    }
  }
};
