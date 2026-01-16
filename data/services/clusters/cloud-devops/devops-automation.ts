// DevOps Automation Service Data
import { ServiceData } from '@/components/services/sections';

export const devopsAutomationData: ServiceData = {
  name: 'DevOps Automation',
  slug: 'devops-automation',
  tagline: 'Automate everything from code to production',
  category: 'Cloud & DevOps',
  description: 'Transform your software delivery with comprehensive DevOps automation. We implement automated pipelines, infrastructure provisioning, and operational workflows that accelerate releases while improving quality and reliability.',

  hero: {
    headline: 'DevOps Automation Services',
    subheadline: 'From Code Commit to Production in Minutes',
    description: 'Eliminate manual bottlenecks and human error with end-to-end DevOps automation. Our experts implement CI/CD pipelines, infrastructure as code, and automated operations that enable continuous delivery at scale.',
    keyFeatures: [
      'CI/CD pipeline automation',
      'Infrastructure as Code (IaC)',
      'Automated testing frameworks',
      'GitOps deployment workflows',
      'Monitoring & alerting automation',
      'Self-healing infrastructure'
    ],
    badges: ['DevOps Experts', 'GitOps Certified', '500+ Pipelines Built', 'Multi-Cloud']
  },

  painPoints: [
    {
      icon: 'Clock',
      title: 'Slow Release Cycles',
      description: 'Manual deployment processes taking days or weeks instead of minutes',
      stat: '2 weeks',
      statLabel: 'Average release cycle'
    },
    {
      icon: 'AlertTriangle',
      title: 'Deployment Failures',
      description: 'Inconsistent deployments causing production issues and rollbacks',
      stat: '30%',
      statLabel: 'Deployments fail'
    },
    {
      icon: 'Users',
      title: 'Operations Burden',
      description: 'Engineers spending time on repetitive tasks instead of building features',
      stat: '40%',
      statLabel: 'Time on manual ops'
    },
    {
      icon: 'GitBranch',
      title: 'Environment Drift',
      description: 'Dev, staging, and production environments diverging, causing issues',
      stat: '75%',
      statLabel: 'Have environment drift'
    }
  ],

  solutions: [
    {
      icon: 'GitMerge',
      title: 'CI/CD Pipeline Automation',
      description: 'Automated build, test, and deploy pipelines for continuous delivery',
      highlights: [
        'Multi-stage pipelines',
        'Parallel testing',
        'Automated security scans',
        'Progressive delivery'
      ]
    },
    {
      icon: 'Code',
      title: 'Infrastructure as Code',
      description: 'Version-controlled infrastructure that deploys consistently every time',
      highlights: [
        'Terraform modules',
        'Environment templating',
        'Drift detection',
        'Policy as Code'
      ]
    },
    {
      icon: 'GitBranch',
      title: 'GitOps Workflows',
      description: 'Git-driven deployments with full audit trails and easy rollbacks',
      highlights: [
        'ArgoCD/Flux setup',
        'Declarative deployments',
        'Automatic sync',
        'Multi-cluster support'
      ]
    },
    {
      icon: 'Activity',
      title: 'Automated Operations',
      description: 'Self-healing systems with automated monitoring and incident response',
      highlights: [
        'Auto-scaling rules',
        'Self-healing scripts',
        'Automated runbooks',
        'ChatOps integration'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'DevOps Assessment',
        description: 'Evaluate current workflows, identify bottlenecks, and define automation strategy',
        duration: 'Week 1',
        deliverables: [
          'Current state analysis',
          'Bottleneck identification',
          'Automation roadmap',
          'Tool recommendations'
        ]
      },
      {
        icon: 'Layout',
        title: 'Pipeline Design',
        description: 'Design CI/CD pipelines and automation workflows tailored to your needs',
        duration: 'Week 2',
        deliverables: [
          'Pipeline architecture',
          'Workflow diagrams',
          'Tool selection',
          'Security integration'
        ]
      },
      {
        icon: 'Code',
        title: 'Automation Build',
        description: 'Implement pipelines, IaC, and automation across your environments',
        duration: 'Week 3-6',
        deliverables: [
          'CI/CD pipelines',
          'IaC modules',
          'Testing automation',
          'Deployment scripts'
        ]
      },
      {
        icon: 'Users',
        title: 'Training & Handover',
        description: 'Train your team and establish DevOps practices for ongoing success',
        duration: 'Week 6-8',
        deliverables: [
          'Team training',
          'Documentation',
          'Runbooks',
          'Best practices guide'
        ]
      }
    ],
    totalDuration: '6-8 weeks'
  },

  benefits: [
    {
      icon: 'Zap',
      title: 'Faster Releases',
      description: 'Deploy multiple times per day instead of weekly or monthly',
      stat: '100x',
      statSuffix: '',
      statLabel: 'Faster deployments'
    },
    {
      icon: 'CheckCircle',
      title: 'Higher Quality',
      description: 'Automated testing catches bugs before they reach production',
      stat: '90',
      statSuffix: '%',
      statLabel: 'Fewer production bugs'
    },
    {
      icon: 'Clock',
      title: 'Time Savings',
      description: 'Eliminate hours of manual work with automation',
      stat: '20',
      statSuffix: 'hrs',
      statLabel: 'Saved per week'
    },
    {
      icon: 'RefreshCw',
      title: 'Reliable Rollbacks',
      description: 'One-click rollbacks when issues occur',
      stat: '<5',
      statSuffix: 'min',
      statLabel: 'Rollback time'
    }
  ],

  techStack: [
    {
      name: 'CI/CD Platforms',
      description: 'Continuous integration and delivery tools',
      technologies: [
        { name: 'GitHub Actions', icon: '/icons/tech/github-actions.svg', category: 'CI/CD', proficiency: 'expert' },
        { name: 'GitLab CI', icon: '/icons/tech/gitlab.svg', category: 'CI/CD', proficiency: 'expert' },
        { name: 'Jenkins', icon: '/icons/tech/jenkins.svg', category: 'CI/CD', proficiency: 'expert' },
        { name: 'CircleCI', icon: '/icons/tech/circleci.svg', category: 'CI/CD', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Infrastructure as Code',
      description: 'Tools for infrastructure automation',
      technologies: [
        { name: 'Terraform', icon: '/icons/tech/terraform.svg', category: 'IaC', proficiency: 'expert' },
        { name: 'Ansible', icon: '/icons/tech/ansible.svg', category: 'Config', proficiency: 'expert' },
        { name: 'Pulumi', icon: '/icons/tech/pulumi.svg', category: 'IaC', proficiency: 'advanced' },
        { name: 'Crossplane', icon: '/icons/tech/crossplane.svg', category: 'IaC', proficiency: 'advanced' }
      ]
    },
    {
      name: 'GitOps Tools',
      description: 'Git-based deployment tools',
      technologies: [
        { name: 'ArgoCD', icon: '/icons/tech/argocd.svg', category: 'GitOps', proficiency: 'expert' },
        { name: 'Flux', icon: '/icons/tech/flux.svg', category: 'GitOps', proficiency: 'advanced' },
        { name: 'Helm', icon: '/icons/tech/helm.svg', category: 'Package', proficiency: 'expert' },
        { name: 'Kustomize', icon: '/icons/tech/kustomize.svg', category: 'Config', proficiency: 'expert' }
      ]
    },
    {
      name: 'Testing & Quality',
      description: 'Automated testing and code quality tools',
      technologies: [
        { name: 'SonarQube', icon: '/icons/tech/sonarqube.svg', category: 'Quality', proficiency: 'expert' },
        { name: 'Trivy', icon: '/icons/tech/trivy.svg', category: 'Security', proficiency: 'expert' },
        { name: 'Selenium', icon: '/icons/tech/selenium.svg', category: 'Testing', proficiency: 'advanced' },
        { name: 'Cypress', icon: '/icons/tech/cypress.svg', category: 'Testing', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Starter',
        description: 'Basic CI/CD automation',
        price: '$5,000',
        priceNote: 'one-time setup',
        features: [
          { name: 'Single CI/CD pipeline', included: true },
          { name: 'Basic automated tests', included: true },
          { name: 'Single environment', included: true },
          { name: 'Basic IaC setup', included: true },
          { name: 'Documentation', included: true },
          { name: 'Multi-environment', included: false },
          { name: 'GitOps setup', included: false },
          { name: 'Ongoing support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Professional',
        description: 'Complete DevOps automation',
        price: '$15,000',
        priceNote: 'one-time setup',
        badge: 'Most Popular',
        features: [
          { name: 'Multi-stage pipelines', included: true },
          { name: 'Full test automation', included: true },
          { name: 'Dev/Staging/Prod envs', included: true },
          { name: 'Complete IaC', included: true },
          { name: 'Security scanning', included: true },
          { name: 'GitOps workflows', included: true },
          { name: 'Monitoring integration', included: true },
          { name: '3-month support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Enterprise DevOps platform',
        price: '$35,000+',
        priceNote: 'custom solution',
        features: [
          { name: 'Enterprise pipelines', included: true },
          { name: 'Advanced testing suite', included: true },
          { name: 'Multi-cloud/region', included: true },
          { name: 'Enterprise IaC', included: true },
          { name: 'Full security suite', included: true },
          { name: 'Advanced GitOps', included: true },
          { name: 'AIOps integration', included: true },
          { name: 'Dedicated support', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need ongoing DevOps support? Ask about our managed DevOps services starting at $4,000/month.'
  },

  portfolio: [
    {
      title: 'E-commerce CI/CD Transformation',
      client: 'ShopStream Commerce',
      industry: 'E-commerce',
      description: 'Transformed manual deployments into automated CI/CD with GitOps',
      challenge: 'Two-week release cycles with frequent deployment failures during peak sales',
      solution: 'Implemented GitHub Actions CI/CD with ArgoCD GitOps and automated testing',
      results: [
        'Deployments increased from bi-weekly to 50+ per day',
        'Deployment failures reduced by 95%',
        'Release lead time reduced from 2 weeks to 30 minutes',
        'Zero downtime deployments achieved'
      ],
      metrics: [
        { label: 'Deploy Frequency', value: '50+/day' },
        { label: 'Failure Rate', value: '-95%' },
        { label: 'Lead Time', value: '30 min' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['GitHub Actions', 'ArgoCD', 'GitOps', 'Kubernetes']
    },
    {
      title: 'FinTech DevSecOps Implementation',
      client: 'SecurePay Financial',
      industry: 'Financial Services',
      description: 'Built compliant DevSecOps pipelines for payment platform',
      challenge: 'Manual security reviews slowing releases while compliance audits revealed gaps',
      solution: 'Implemented automated security scanning, compliance checks, and audit trails',
      results: [
        'Security scan time reduced from days to minutes',
        'Achieved SOC 2 Type II compliance',
        'Vulnerability detection improved by 300%',
        'Audit preparation time reduced by 80%'
      ],
      metrics: [
        { label: 'Security Scan', value: '< 10 min' },
        { label: 'Compliance', value: 'SOC 2' },
        { label: 'Vulnerabilities', value: '300% more caught' }
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      tags: ['DevSecOps', 'Compliance', 'Security Automation', 'FinTech']
    },
    {
      title: 'Startup DevOps Foundation',
      client: 'RapidScale Startup',
      industry: 'Technology',
      description: 'Built complete DevOps infrastructure for fast-growing startup',
      challenge: 'No CI/CD, manual deployments, developers spending 40% time on operations',
      solution: 'Implemented full DevOps stack with GitHub Actions, Terraform, and monitoring',
      results: [
        'Developer time on ops reduced to 5%',
        'Deployment time from hours to minutes',
        'Infrastructure fully version controlled',
        'Cost visibility and control achieved'
      ],
      metrics: [
        { label: 'Ops Time', value: '-35%' },
        { label: 'Deploy Time', value: '5 min' },
        { label: 'IaC Coverage', value: '100%' }
      ],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      tags: ['Startup', 'GitHub Actions', 'Terraform', 'Full Stack DevOps']
    },
    {
      title: 'Enterprise Multi-Cloud Automation',
      client: 'GlobalEnergy Corp',
      industry: 'Energy',
      description: 'Unified DevOps platform across AWS, Azure, and on-premise',
      challenge: 'Different teams using different tools causing silos and inconsistency',
      solution: 'Implemented centralized GitLab CI with Terraform modules for all environments',
      results: [
        'Unified pipeline across 3 clouds',
        'Infrastructure drift eliminated',
        'Deployment consistency achieved',
        'Team collaboration improved 200%'
      ],
      metrics: [
        { label: 'Clouds', value: '3' },
        { label: 'Drift', value: '0%' },
        { label: 'Teams Unified', value: '12' }
      ],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      tags: ['Multi-Cloud', 'GitLab CI', 'Enterprise', 'Terraform']
    }
  ],

  testimonials: [
    {
      quote: 'We went from deploying every two weeks with fear to deploying 50 times a day with confidence. Game changer for our business.',
      author: 'Kevin Park',
      role: 'VP Engineering',
      company: 'ShopStream Commerce',
      rating: 5,
      location: 'San Francisco, CA'
    },
    {
      quote: 'Their DevSecOps implementation not only improved our security posture but made compliance audits a breeze. Worth every penny.',
      author: 'Amanda Foster',
      role: 'CISO',
      company: 'SecurePay Financial',
      rating: 5,
      location: 'New York, NY'
    }
  ],

  faqs: [
    {
      question: 'What CI/CD tools do you recommend?',
      answer: 'The best tool depends on your ecosystem. GitHub Actions is excellent for GitHub-centric teams. GitLab CI offers great integration for GitLab users. Jenkins provides maximum flexibility for complex requirements. We help you choose based on your team, stack, and requirements.'
    },
    {
      question: 'How long does it take to see benefits from DevOps automation?',
      answer: 'Most teams see immediate benefits once pipelines are deployed. Basic CI/CD typically takes 2-4 weeks to implement. Within the first month, teams usually experience 10x faster deployments and significant reduction in deployment-related issues.'
    },
    {
      question: 'What is GitOps and why should we use it?',
      answer: 'GitOps uses Git as the single source of truth for infrastructure and deployments. Changes are made via pull requests, providing full audit trails, easy rollbacks, and collaborative workflows. It eliminates configuration drift and makes deployments reproducible.'
    },
    {
      question: 'How do you handle secrets in CI/CD pipelines?',
      answer: 'We use dedicated secrets management tools like HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault. Secrets are never stored in code or CI/CD configuration. We implement least-privilege access and rotate credentials automatically.'
    },
    {
      question: 'Can you integrate security scanning into our pipelines?',
      answer: 'Yes, we implement "shift-left" security with tools like Trivy for container scanning, SonarQube for code analysis, OWASP ZAP for DAST, and Snyk for dependency scanning. Security gates prevent vulnerable code from reaching production.'
    }
  ],

  relatedServices: [
    {
      name: 'CI/CD Pipelines',
      slug: 'ci-cd-pipelines',
      description: 'Specialized CI/CD implementation',
      icon: 'GitMerge'
    },
    {
      name: 'Infrastructure as Code',
      slug: 'infrastructure-as-code',
      description: 'Terraform and IaC solutions',
      icon: 'Code'
    },
    {
      name: 'Kubernetes Services',
      slug: 'kubernetes-services',
      description: 'Container orchestration',
      icon: 'Box'
    },
    {
      name: 'Cloud Security',
      slug: 'cloud-security',
      description: 'DevSecOps implementation',
      icon: 'Shield'
    }
  ],

  seo: {
    title: 'DevOps Automation Services | CI/CD Pipeline Experts',
    description: 'Transform software delivery with DevOps automation. CI/CD pipelines, Infrastructure as Code, GitOps, and automated operations. 100x faster deployments.',
    keywords: [
      'devops automation',
      'ci cd pipeline',
      'devops services',
      'infrastructure as code',
      'gitops',
      'deployment automation',
      'devops consulting',
      'continuous delivery',
      'pipeline automation',
      'devops engineering'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'DevOps Automation Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'DevOps Consulting'
      }
    }
  }
};
