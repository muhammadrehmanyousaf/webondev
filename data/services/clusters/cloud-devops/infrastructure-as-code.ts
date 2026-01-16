// Infrastructure as Code Service Data
import { ServiceData } from '@/components/services/sections';

export const infrastructureAsCodeData: ServiceData = {
  name: 'Infrastructure as Code',
  slug: 'infrastructure-as-code',
  tagline: 'Version-controlled infrastructure for consistency and speed',
  category: 'Cloud & DevOps',
  description: 'Manage your infrastructure like software with Infrastructure as Code (IaC). We implement Terraform, Pulumi, and cloud-native IaC tools that enable consistent, repeatable, and auditable infrastructure deployments.',

  hero: {
    headline: 'Infrastructure as Code Services',
    subheadline: 'Automate Infrastructure with Code',
    description: 'Transform infrastructure management with IaC practices. Our experts implement version-controlled infrastructure that deploys consistently, enables collaboration, and eliminates manual configuration errors.',
    keyFeatures: [
      'Terraform modules & workspaces',
      'Multi-cloud IaC',
      'Policy as Code',
      'Drift detection & remediation',
      'State management',
      'CI/CD integration'
    ],
    badges: ['Terraform Certified', 'Multi-Cloud IaC', '300+ IaC Projects', 'HashiCorp Partner']
  },

  painPoints: [
    {
      icon: 'AlertTriangle',
      title: 'Configuration Drift',
      description: 'Manual changes causing environments to diverge from expected state',
      stat: '80%',
      statLabel: 'Have configuration drift'
    },
    {
      icon: 'Clock',
      title: 'Slow Provisioning',
      description: 'Days or weeks to provision new environments manually',
      stat: '2 weeks',
      statLabel: 'Average provisioning time'
    },
    {
      icon: 'FileText',
      title: 'No Audit Trail',
      description: 'Unable to track who changed what infrastructure and when',
      stat: '60%',
      statLabel: 'Lack change visibility'
    },
    {
      icon: 'Repeat',
      title: 'Inconsistent Environments',
      description: 'Dev, staging, and production environments with different configurations',
      stat: '45%',
      statLabel: 'Issues from inconsistency'
    }
  ],

  solutions: [
    {
      icon: 'Code',
      title: 'Terraform Implementation',
      description: 'Production-grade Terraform modules for any cloud provider',
      highlights: [
        'Module development',
        'Workspace strategy',
        'State management',
        'Provider configuration'
      ]
    },
    {
      icon: 'Shield',
      title: 'Policy as Code',
      description: 'Enforce security and compliance policies in infrastructure code',
      highlights: [
        'Sentinel policies',
        'OPA/Rego rules',
        'Compliance checks',
        'Cost policies'
      ]
    },
    {
      icon: 'GitBranch',
      title: 'GitOps for Infrastructure',
      description: 'Git-driven infrastructure changes with full audit trails',
      highlights: [
        'PR-based changes',
        'Automated plan/apply',
        'Approval workflows',
        'Rollback capability'
      ]
    },
    {
      icon: 'Layers',
      title: 'Multi-Cloud IaC',
      description: 'Consistent infrastructure management across cloud providers',
      highlights: [
        'AWS/Azure/GCP modules',
        'Cross-cloud patterns',
        'Abstraction layers',
        'Provider portability'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Infrastructure Assessment',
        description: 'Analyze existing infrastructure and define IaC strategy',
        duration: 'Week 1',
        deliverables: [
          'Infrastructure inventory',
          'Current state analysis',
          'IaC strategy',
          'Tool selection'
        ]
      },
      {
        icon: 'Layout',
        title: 'Module Architecture',
        description: 'Design reusable module structure and patterns',
        duration: 'Week 2',
        deliverables: [
          'Module architecture',
          'Naming conventions',
          'State strategy',
          'Security patterns'
        ]
      },
      {
        icon: 'Code',
        title: 'IaC Development',
        description: 'Develop Terraform modules and import existing infrastructure',
        duration: 'Week 3-5',
        deliverables: [
          'Terraform modules',
          'State migration',
          'Policy implementation',
          'CI/CD integration'
        ]
      },
      {
        icon: 'Users',
        title: 'Training & Rollout',
        description: 'Train teams and establish IaC practices',
        duration: 'Week 5-6',
        deliverables: [
          'Team training',
          'Documentation',
          'Best practices guide',
          'Runbooks'
        ]
      }
    ],
    totalDuration: '5-7 weeks'
  },

  benefits: [
    {
      icon: 'Zap',
      title: 'Fast Provisioning',
      description: 'Deploy complete environments in minutes',
      stat: '100x',
      statSuffix: '',
      statLabel: 'Faster provisioning'
    },
    {
      icon: 'CheckCircle',
      title: 'Consistency',
      description: 'Identical infrastructure every deployment',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Consistent deploys'
    },
    {
      icon: 'FileText',
      title: 'Full Audit Trail',
      description: 'Git history tracks all infrastructure changes',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Changes tracked'
    },
    {
      icon: 'Shield',
      title: 'Policy Compliance',
      description: 'Enforce security policies automatically',
      stat: '0',
      statSuffix: '',
      statLabel: 'Policy violations'
    }
  ],

  techStack: [
    {
      name: 'Infrastructure as Code Tools',
      description: 'Primary IaC tools',
      technologies: [
        { name: 'Terraform', icon: '/icons/tech/terraform.svg', category: 'IaC', proficiency: 'expert' },
        { name: 'Pulumi', icon: '/icons/tech/pulumi.svg', category: 'IaC', proficiency: 'advanced' },
        { name: 'CloudFormation', icon: '/icons/tech/cloudformation.svg', category: 'IaC', proficiency: 'expert' },
        { name: 'Bicep', icon: '/icons/tech/bicep.svg', category: 'IaC', proficiency: 'expert' }
      ]
    },
    {
      name: 'Configuration Management',
      description: 'Configuration and provisioning tools',
      technologies: [
        { name: 'Ansible', icon: '/icons/tech/ansible.svg', category: 'Config', proficiency: 'expert' },
        { name: 'Chef', icon: '/icons/tech/chef.svg', category: 'Config', proficiency: 'advanced' },
        { name: 'Puppet', icon: '/icons/tech/puppet.svg', category: 'Config', proficiency: 'advanced' },
        { name: 'Salt', icon: '/icons/tech/salt.svg', category: 'Config', proficiency: 'proficient' }
      ]
    },
    {
      name: 'Policy & Compliance',
      description: 'Policy as Code tools',
      technologies: [
        { name: 'Sentinel', icon: '/icons/tech/sentinel.svg', category: 'Policy', proficiency: 'expert' },
        { name: 'OPA', icon: '/icons/tech/opa.svg', category: 'Policy', proficiency: 'expert' },
        { name: 'Checkov', icon: '/icons/tech/checkov.svg', category: 'Security', proficiency: 'expert' },
        { name: 'tfsec', icon: '/icons/tech/tfsec.svg', category: 'Security', proficiency: 'expert' }
      ]
    },
    {
      name: 'State & Automation',
      description: 'State management and automation',
      technologies: [
        { name: 'Terraform Cloud', icon: '/icons/tech/terraform-cloud.svg', category: 'State', proficiency: 'expert' },
        { name: 'Atlantis', icon: '/icons/tech/atlantis.svg', category: 'Automation', proficiency: 'expert' },
        { name: 'Spacelift', icon: '/icons/tech/spacelift.svg', category: 'Automation', proficiency: 'advanced' },
        { name: 'env0', icon: '/icons/tech/env0.svg', category: 'Automation', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Starter',
        description: 'Basic IaC implementation',
        price: '$5,000',
        priceNote: 'one-time setup',
        features: [
          { name: 'Single cloud IaC', included: true },
          { name: 'Core modules', included: true },
          { name: 'State setup', included: true },
          { name: 'Basic documentation', included: true },
          { name: 'CI/CD integration', included: true },
          { name: 'Policy as Code', included: false },
          { name: 'Multi-cloud', included: false },
          { name: 'Ongoing support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Professional',
        description: 'Complete IaC platform',
        price: '$15,000',
        priceNote: 'one-time setup',
        badge: 'Most Popular',
        features: [
          { name: 'Multi-cloud IaC', included: true },
          { name: 'Comprehensive modules', included: true },
          { name: 'Enterprise state mgmt', included: true },
          { name: 'Full documentation', included: true },
          { name: 'Advanced CI/CD', included: true },
          { name: 'Policy as Code', included: true },
          { name: 'Drift detection', included: true },
          { name: '3-month support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Enterprise IaC platform',
        price: '$40,000+',
        priceNote: 'custom solution',
        features: [
          { name: 'Global multi-cloud', included: true },
          { name: 'Enterprise modules', included: true },
          { name: 'Terraform Enterprise', included: true },
          { name: 'Complete documentation', included: true },
          { name: 'Enterprise automation', included: true },
          { name: 'Full policy suite', included: true },
          { name: 'Advanced compliance', included: true },
          { name: 'Dedicated support', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need IaC maintenance? Ask about our managed IaC services starting at $3,000/month.'
  },

  portfolio: [
    {
      title: 'Enterprise Terraform Platform',
      client: 'GlobalTech Industries',
      industry: 'Technology',
      description: 'Built enterprise Terraform platform for 100+ development teams',
      challenge: 'Teams manually creating cloud resources with no standardization or governance',
      solution: 'Implemented Terraform Enterprise with private registry, policy as code, and self-service modules',
      results: [
        'Standardized infrastructure for 100+ teams',
        'Provisioning time reduced from weeks to hours',
        '100% policy compliance achieved',
        '$2M annual savings from right-sizing'
      ],
      metrics: [
        { label: 'Teams', value: '100+' },
        { label: 'Provisioning', value: 'Hours' },
        { label: 'Savings', value: '$2M/year' }
      ],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      tags: ['Terraform Enterprise', 'Policy as Code', 'Self-Service', 'Governance']
    },
    {
      title: 'Multi-Cloud IaC Migration',
      client: 'FinanceFirst Corp',
      industry: 'Financial Services',
      description: 'Migrated from manual infrastructure to multi-cloud Terraform',
      challenge: 'Manual infrastructure across AWS and Azure with frequent configuration drift',
      solution: 'Imported existing infrastructure to Terraform with drift detection and automated remediation',
      results: [
        '500+ resources imported to Terraform',
        'Configuration drift eliminated',
        'Disaster recovery time reduced by 90%',
        'Passed SOC 2 audit with IaC evidence'
      ],
      metrics: [
        { label: 'Resources', value: '500+' },
        { label: 'Drift', value: 'Eliminated' },
        { label: 'DR Time', value: '-90%' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Multi-Cloud', 'Migration', 'Drift Detection', 'Compliance']
    },
    {
      title: 'Startup IaC Foundation',
      client: 'RocketLaunch Tech',
      industry: 'Startup',
      description: 'Built IaC foundation for fast-scaling startup from day one',
      challenge: 'New startup needed infrastructure that could scale 100x without rewrites',
      solution: 'Designed modular Terraform codebase with Terragrunt for environment management',
      results: [
        'Infrastructure from 0 to production in 2 weeks',
        'Scaled 100x without infrastructure rewrites',
        'New environments deployable in 1 hour',
        'Complete audit trail from day one'
      ],
      metrics: [
        { label: 'Time to Prod', value: '2 weeks' },
        { label: 'Scale', value: '100x' },
        { label: 'New Env', value: '1 hour' }
      ],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      tags: ['Terragrunt', 'Startup', 'Scalable', 'Modular']
    },
    {
      title: 'Healthcare IaC Compliance',
      client: 'MedCloud Systems',
      industry: 'Healthcare',
      description: 'HIPAA-compliant infrastructure as code for healthcare platform',
      challenge: 'Manual infrastructure changes causing compliance gaps and audit failures',
      solution: 'Implemented Terraform with OPA policies, compliance-as-code, and automated auditing',
      results: [
        'HIPAA compliance maintained automatically',
        'All changes tracked and auditable',
        'Compliance violations prevented before deployment',
        'Audit prep time reduced from weeks to hours'
      ],
      metrics: [
        { label: 'Compliance', value: 'HIPAA' },
        { label: 'Violations', value: '0' },
        { label: 'Audit Prep', value: '-90%' }
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      tags: ['HIPAA', 'Compliance-as-Code', 'OPA', 'Healthcare']
    }
  ],

  testimonials: [
    {
      quote: 'The Terraform platform transformed how our teams work. Self-service provisioning with guardrails was exactly what we needed.',
      author: 'Christopher Lee',
      role: 'VP Cloud Platform',
      company: 'GlobalTech Industries',
      rating: 5,
      location: 'San Francisco, CA'
    },
    {
      quote: 'Importing our existing infrastructure to Terraform seemed daunting. They made it seamless and now we have full control.',
      author: 'Patricia Garcia',
      role: 'Director of Infrastructure',
      company: 'FinanceFirst Corp',
      rating: 5,
      location: 'New York, NY'
    }
  ],

  faqs: [
    {
      question: 'Should we use Terraform or cloud-native IaC (CloudFormation, Bicep)?',
      answer: 'Terraform is ideal for multi-cloud environments or when you want provider portability. Cloud-native tools (CloudFormation, Bicep) offer tighter integration with their respective clouds. For single-cloud deployments, both work well. We recommend Terraform for its versatility and large community.'
    },
    {
      question: 'How do you handle existing infrastructure?',
      answer: 'We use terraform import to bring existing resources under Terraform management. This includes resource discovery, state import, and code generation. The process ensures no disruption to running infrastructure while enabling future changes through IaC.'
    },
    {
      question: 'What is Policy as Code?',
      answer: 'Policy as Code enforces rules on infrastructure before deployment. Using tools like Sentinel or OPA, you can prevent resources that violate security policies, cost limits, or compliance requirements. Policies run in CI/CD pipelines and block non-compliant changes.'
    },
    {
      question: 'How do you manage Terraform state?',
      answer: 'We use remote state backends (S3, GCS, Azure Blob, Terraform Cloud) with state locking to prevent concurrent modifications. For enterprises, Terraform Cloud or Enterprise provides additional features like state versioning, access controls, and audit logs.'
    },
    {
      question: 'What about configuration drift?',
      answer: 'We implement drift detection through scheduled Terraform plans, alerting when resources differ from code. Automated remediation can apply fixes or create tickets for review. This ensures infrastructure stays in sync with its defined state.'
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
      description: 'CI/CD for infrastructure',
      icon: 'Settings'
    },
    {
      name: 'Cloud Security',
      slug: 'cloud-security',
      description: 'Security policy as code',
      icon: 'Shield'
    },
    {
      name: 'AWS Services',
      slug: 'aws-services',
      description: 'AWS-specific IaC solutions',
      icon: 'Cloud'
    }
  ],

  seo: {
    title: 'Infrastructure as Code Services | Terraform Consulting & IaC',
    description: 'Expert Infrastructure as Code services. Terraform modules, multi-cloud IaC, policy as code, and state management for consistent, automated infrastructure.',
    keywords: [
      'infrastructure as code',
      'terraform services',
      'terraform consulting',
      'iac services',
      'terraform modules',
      'policy as code',
      'cloudformation',
      'pulumi',
      'terraform enterprise',
      'iac automation'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Infrastructure as Code Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'IaC Consulting'
      }
    }
  }
};
