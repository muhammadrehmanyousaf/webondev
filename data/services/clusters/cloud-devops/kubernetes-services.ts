// Kubernetes Services Data
import { ServiceData } from '@/components/services/sections';

export const kubernetesServicesData: ServiceData = {
  name: 'Kubernetes Services',
  slug: 'kubernetes-services',
  tagline: 'Enterprise Kubernetes orchestration and management',
  category: 'Cloud & DevOps',
  description: 'Master container orchestration with our Kubernetes expertise. We design, deploy, and manage production-grade Kubernetes clusters that scale your applications reliably while simplifying operations.',

  hero: {
    headline: 'Kubernetes Solutions',
    subheadline: 'Container Orchestration at Scale',
    description: 'Unlock the full potential of containerized applications with enterprise Kubernetes solutions. Our certified Kubernetes experts design and operate clusters that deliver reliability, scalability, and developer productivity.',
    keyFeatures: [
      'Cluster design & deployment',
      'Multi-cluster management',
      'Service mesh implementation',
      'Kubernetes security hardening',
      'Observability & monitoring',
      'GitOps deployment workflows'
    ],
    badges: ['CKA Certified', 'CKAD Certified', 'CKS Certified', '200+ Clusters Deployed']
  },

  painPoints: [
    {
      icon: 'Puzzle',
      title: 'Kubernetes Complexity',
      description: 'Overwhelming complexity making it hard to get Kubernetes right',
      stat: '55%',
      statLabel: 'K8s projects struggle'
    },
    {
      icon: 'AlertTriangle',
      title: 'Operational Overhead',
      description: 'Cluster maintenance consuming too much engineering time',
      stat: '40%',
      statLabel: 'Time spent on K8s ops'
    },
    {
      icon: 'Lock',
      title: 'Security Concerns',
      description: 'Difficulty securing clusters and meeting compliance requirements',
      stat: '67%',
      statLabel: 'Have misconfigurations'
    },
    {
      icon: 'Activity',
      title: 'Observability Gaps',
      description: 'Limited visibility into cluster health and application performance',
      stat: '60%',
      statLabel: 'Lack proper monitoring'
    }
  ],

  solutions: [
    {
      icon: 'Server',
      title: 'Cluster Architecture',
      description: 'Production-ready Kubernetes clusters designed for your workloads',
      highlights: [
        'High availability design',
        'Multi-AZ deployment',
        'Node pool strategy',
        'Autoscaling configuration'
      ]
    },
    {
      icon: 'GitBranch',
      title: 'GitOps Deployments',
      description: 'Git-driven deployments with ArgoCD or Flux for reliability',
      highlights: [
        'ArgoCD/Flux setup',
        'Application sets',
        'Multi-cluster sync',
        'Progressive delivery'
      ]
    },
    {
      icon: 'Globe',
      title: 'Service Mesh',
      description: 'Advanced traffic management, security, and observability with service mesh',
      highlights: [
        'Istio implementation',
        'Linkerd deployment',
        'mTLS everywhere',
        'Traffic management'
      ]
    },
    {
      icon: 'Shield',
      title: 'Kubernetes Security',
      description: 'Harden clusters with security best practices and compliance controls',
      highlights: [
        'RBAC configuration',
        'Network policies',
        'Pod security standards',
        'Secret management'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Assessment & Planning',
        description: 'Analyze workloads and design optimal Kubernetes architecture',
        duration: 'Week 1',
        deliverables: [
          'Workload analysis',
          'Architecture design',
          'Security requirements',
          'Migration strategy'
        ]
      },
      {
        icon: 'Server',
        title: 'Cluster Setup',
        description: 'Deploy and configure production-grade Kubernetes clusters',
        duration: 'Week 2-3',
        deliverables: [
          'Cluster deployment',
          'Network configuration',
          'Storage setup',
          'Ingress configuration'
        ]
      },
      {
        icon: 'Box',
        title: 'Workload Migration',
        description: 'Containerize and deploy applications to Kubernetes',
        duration: 'Week 3-5',
        deliverables: [
          'Container images',
          'Kubernetes manifests',
          'Helm charts',
          'CI/CD integration'
        ]
      },
      {
        icon: 'Activity',
        title: 'Observability & Ops',
        description: 'Implement monitoring, logging, and operational procedures',
        duration: 'Week 5-6',
        deliverables: [
          'Monitoring stack',
          'Logging pipeline',
          'Alerting rules',
          'Runbooks'
        ]
      }
    ],
    totalDuration: '6-8 weeks'
  },

  benefits: [
    {
      icon: 'TrendingUp',
      title: 'Scalability',
      description: 'Auto-scale applications based on demand',
      stat: '1000x',
      statSuffix: '',
      statLabel: 'Scale capability'
    },
    {
      icon: 'RefreshCw',
      title: 'High Availability',
      description: 'Self-healing workloads with zero downtime',
      stat: '99.99',
      statSuffix: '%',
      statLabel: 'Uptime achieved'
    },
    {
      icon: 'Zap',
      title: 'Faster Deployments',
      description: 'Deploy updates in seconds with rolling updates',
      stat: '<30',
      statSuffix: 's',
      statLabel: 'Deployment time'
    },
    {
      icon: 'DollarSign',
      title: 'Resource Efficiency',
      description: 'Optimize resource usage with smart scheduling',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Cost savings'
    }
  ],

  techStack: [
    {
      name: 'Managed Kubernetes',
      description: 'Cloud provider Kubernetes services',
      technologies: [
        { name: 'EKS', icon: '/icons/tech/eks.svg', category: 'Kubernetes', proficiency: 'expert' },
        { name: 'GKE', icon: '/icons/tech/gke.svg', category: 'Kubernetes', proficiency: 'expert' },
        { name: 'AKS', icon: '/icons/tech/aks.svg', category: 'Kubernetes', proficiency: 'expert' },
        { name: 'OpenShift', icon: '/icons/tech/openshift.svg', category: 'Kubernetes', proficiency: 'advanced' }
      ]
    },
    {
      name: 'GitOps & Deployment',
      description: 'Kubernetes deployment tools',
      technologies: [
        { name: 'ArgoCD', icon: '/icons/tech/argocd.svg', category: 'GitOps', proficiency: 'expert' },
        { name: 'Flux', icon: '/icons/tech/flux.svg', category: 'GitOps', proficiency: 'advanced' },
        { name: 'Helm', icon: '/icons/tech/helm.svg', category: 'Package', proficiency: 'expert' },
        { name: 'Kustomize', icon: '/icons/tech/kustomize.svg', category: 'Config', proficiency: 'expert' }
      ]
    },
    {
      name: 'Service Mesh',
      description: 'Service mesh and networking',
      technologies: [
        { name: 'Istio', icon: '/icons/tech/istio.svg', category: 'Mesh', proficiency: 'expert' },
        { name: 'Linkerd', icon: '/icons/tech/linkerd.svg', category: 'Mesh', proficiency: 'advanced' },
        { name: 'Cilium', icon: '/icons/tech/cilium.svg', category: 'CNI', proficiency: 'advanced' },
        { name: 'Traefik', icon: '/icons/tech/traefik.svg', category: 'Ingress', proficiency: 'expert' }
      ]
    },
    {
      name: 'Observability',
      description: 'Monitoring and observability stack',
      technologies: [
        { name: 'Prometheus', icon: '/icons/tech/prometheus.svg', category: 'Monitoring', proficiency: 'expert' },
        { name: 'Grafana', icon: '/icons/tech/grafana.svg', category: 'Dashboards', proficiency: 'expert' },
        { name: 'Loki', icon: '/icons/tech/loki.svg', category: 'Logging', proficiency: 'expert' },
        { name: 'Jaeger', icon: '/icons/tech/jaeger.svg', category: 'Tracing', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Starter',
        description: 'Single cluster Kubernetes setup',
        price: '$8,000',
        priceNote: 'one-time setup',
        features: [
          { name: 'Single cluster deployment', included: true },
          { name: 'Basic HA configuration', included: true },
          { name: 'Ingress setup', included: true },
          { name: 'Basic monitoring', included: true },
          { name: 'Documentation', included: true },
          { name: 'GitOps setup', included: false },
          { name: 'Service mesh', included: false },
          { name: 'Ongoing support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Professional',
        description: 'Production Kubernetes platform',
        price: '$20,000',
        priceNote: 'one-time setup',
        badge: 'Most Popular',
        features: [
          { name: 'Multi-node HA cluster', included: true },
          { name: 'Advanced networking', included: true },
          { name: 'GitOps with ArgoCD', included: true },
          { name: 'Full observability stack', included: true },
          { name: 'Security hardening', included: true },
          { name: 'Basic service mesh', included: true },
          { name: 'Workload migration', included: true },
          { name: '3-month support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Multi-cluster enterprise K8s',
        price: '$50,000+',
        priceNote: 'custom solution',
        features: [
          { name: 'Multi-cluster management', included: true },
          { name: 'Advanced networking/CNI', included: true },
          { name: 'Enterprise GitOps', included: true },
          { name: 'Enterprise observability', included: true },
          { name: 'Full security suite', included: true },
          { name: 'Full service mesh', included: true },
          { name: 'Platform engineering', included: true },
          { name: 'Dedicated support', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need Kubernetes management? Ask about our managed K8s services starting at $5,000/month.'
  },

  portfolio: [
    {
      title: 'Multi-Cluster Platform Engineering',
      client: 'CloudNative Corp',
      industry: 'Technology',
      description: 'Built internal developer platform on multi-cluster Kubernetes',
      challenge: 'Development teams struggling with Kubernetes complexity, slowing feature delivery',
      solution: 'Created internal platform with ArgoCD, standardized templates, and self-service workflows',
      results: [
        'Developer onboarding reduced from weeks to hours',
        'Deployment frequency increased 20x',
        '60% reduction in platform incidents',
        '40 development teams now self-sufficient'
      ],
      metrics: [
        { label: 'Onboarding', value: '4 hours' },
        { label: 'Deploy Freq', value: '20x' },
        { label: 'Incidents', value: '-60%' }
      ],
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop',
      tags: ['Multi-Cluster', 'ArgoCD', 'Platform Engineering', 'GitOps']
    },
    {
      title: 'Healthcare Kubernetes Migration',
      client: 'MediTech Systems',
      industry: 'Healthcare',
      description: 'Migrated legacy healthcare applications to HIPAA-compliant Kubernetes',
      challenge: 'Monolithic applications with scaling issues and compliance requirements',
      solution: 'Containerized applications, deployed to EKS with full security and compliance controls',
      results: [
        'HIPAA compliance maintained',
        'Application scaling from hours to seconds',
        'Infrastructure costs reduced by 45%',
        '99.99% uptime achieved'
      ],
      metrics: [
        { label: 'Compliance', value: 'HIPAA' },
        { label: 'Scaling', value: 'Seconds' },
        { label: 'Cost Savings', value: '45%' }
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      tags: ['EKS', 'Healthcare', 'HIPAA', 'Migration']
    },
    {
      title: 'Global Retail Kubernetes Platform',
      client: 'MegaMart International',
      industry: 'Retail',
      description: 'Built geo-distributed Kubernetes platform for global e-commerce operations',
      challenge: 'Single-region infrastructure causing latency issues for international customers',
      solution: 'Implemented multi-region GKE clusters with service mesh for traffic routing',
      results: [
        'Latency reduced by 70% globally',
        'Black Friday traffic handled seamlessly',
        '99.99% uptime across regions',
        'Operational costs reduced by 35%'
      ],
      metrics: [
        { label: 'Latency', value: '-70%' },
        { label: 'Regions', value: '5' },
        { label: 'Uptime', value: '99.99%' }
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['GKE', 'Multi-Region', 'Retail', 'Service Mesh']
    },
    {
      title: 'Gaming Platform Auto-Scaling',
      client: 'GameVerse Studios',
      industry: 'Gaming',
      description: 'Kubernetes platform handling 10M concurrent players with auto-scaling',
      challenge: 'Unpredictable player spikes causing game outages during launches',
      solution: 'Built AKS cluster with HPA/VPA and custom metrics for game-aware scaling',
      results: [
        '10M concurrent players supported',
        'Launch day zero outages',
        'Scale from 0 to full capacity in 3 minutes',
        'Infrastructure costs optimized by 50%'
      ],
      metrics: [
        { label: 'Players', value: '10M' },
        { label: 'Scale Time', value: '3 min' },
        { label: 'Savings', value: '50%' }
      ],
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
      tags: ['AKS', 'Gaming', 'Auto-Scaling', 'High Performance']
    }
  ],

  testimonials: [
    {
      quote: 'The internal platform they built transformed how our teams work. Kubernetes complexity is now hidden behind simple workflows.',
      author: 'Daniel Kim',
      role: 'VP Platform Engineering',
      company: 'CloudNative Corp',
      rating: 5,
      location: 'Seattle, WA'
    },
    {
      quote: 'They migrated our healthcare applications to Kubernetes while maintaining HIPAA compliance. Impressive technical execution.',
      author: 'Dr. Emily Watson',
      role: 'CTO',
      company: 'MediTech Systems',
      rating: 5,
      location: 'Boston, MA'
    }
  ],

  faqs: [
    {
      question: 'Should we use managed Kubernetes or self-managed?',
      answer: 'We recommend managed Kubernetes (EKS, GKE, AKS) for most organizations. Managed services handle control plane maintenance, security patches, and upgrades. Self-managed (kubeadm, k3s) makes sense for edge deployments, air-gapped environments, or when you need specific customizations not available in managed offerings.'
    },
    {
      question: 'How do you handle Kubernetes security?',
      answer: 'We implement defense-in-depth: RBAC for access control, network policies for pod-to-pod traffic, pod security standards, secret management with external stores, container image scanning, runtime security monitoring, and regular CIS benchmark audits.'
    },
    {
      question: 'What is GitOps and why use it with Kubernetes?',
      answer: 'GitOps uses Git as the single source of truth for Kubernetes configurations. Tools like ArgoCD or Flux automatically sync your cluster state with Git. This provides full audit trails, easy rollbacks, and eliminates manual kubectl commands in production.'
    },
    {
      question: 'Do we need a service mesh?',
      answer: 'Service mesh (Istio, Linkerd) adds value for complex microservices architectures needing mTLS, advanced traffic management, or detailed observability. For simpler setups, native Kubernetes networking may suffice. We assess your specific needs before recommending a service mesh.'
    },
    {
      question: 'How do you handle Kubernetes upgrades?',
      answer: 'We implement rolling upgrade strategies with proper testing. This includes upgrading control planes first, then node pools in sequence, with proper pod disruption budgets. We also use staging clusters to validate upgrades before production rollout.'
    }
  ],

  relatedServices: [
    {
      name: 'Docker Containerization',
      slug: 'docker-containerization',
      description: 'Container strategy and implementation',
      icon: 'Box'
    },
    {
      name: 'DevOps Automation',
      slug: 'devops-automation',
      description: 'CI/CD and automation services',
      icon: 'Settings'
    },
    {
      name: 'Cloud Infrastructure',
      slug: 'cloud-infrastructure',
      description: 'Cloud platform design',
      icon: 'Cloud'
    },
    {
      name: 'Cloud Security',
      slug: 'cloud-security',
      description: 'Kubernetes security hardening',
      icon: 'Shield'
    }
  ],

  seo: {
    title: 'Kubernetes Services | K8s Consulting & Cluster Management',
    description: 'Expert Kubernetes services from certified CKA/CKAD engineers. Cluster design, GitOps, service mesh, and managed Kubernetes across EKS, GKE, and AKS.',
    keywords: [
      'kubernetes services',
      'kubernetes consulting',
      'k8s management',
      'eks services',
      'gke consulting',
      'aks services',
      'kubernetes migration',
      'gitops kubernetes',
      'service mesh',
      'kubernetes security'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Kubernetes Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Kubernetes Consulting'
      }
    }
  }
};
