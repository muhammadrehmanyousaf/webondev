// Docker Containerization Service Data
import { ServiceData } from '@/components/services/sections';

export const dockerContainerizationData: ServiceData = {
  name: 'Docker Containerization',
  slug: 'docker-containerization',
  tagline: 'Containerize applications for consistency and portability',
  category: 'Cloud & DevOps',
  description: 'Transform your applications with Docker containerization. We help you package, deploy, and manage containerized applications that run consistently across any environment from development to production.',

  hero: {
    headline: 'Docker Containerization Services',
    subheadline: 'Build Once, Run Anywhere',
    description: 'Modernize your applications with expert Docker containerization. We create optimized container strategies that improve consistency, accelerate deployments, and simplify operations across all environments.',
    keyFeatures: [
      'Application containerization',
      'Dockerfile optimization',
      'Multi-stage builds',
      'Container registry setup',
      'Docker Compose orchestration',
      'Container security hardening'
    ],
    badges: ['Docker Certified', 'Container Experts', '500+ Apps Containerized', 'Multi-Platform']
  },

  painPoints: [
    {
      icon: 'AlertTriangle',
      title: '"Works on My Machine"',
      description: 'Applications behaving differently across development, staging, and production',
      stat: '65%',
      statLabel: 'Env-related issues'
    },
    {
      icon: 'Clock',
      title: 'Slow Environment Setup',
      description: 'Days spent setting up development environments for new team members',
      stat: '3 days',
      statLabel: 'Average setup time'
    },
    {
      icon: 'Package',
      title: 'Dependency Conflicts',
      description: 'Version conflicts and dependency hell causing deployment failures',
      stat: '40%',
      statLabel: 'Deploys affected'
    },
    {
      icon: 'Server',
      title: 'Resource Inefficiency',
      description: 'VMs wasting resources with one application per server',
      stat: '70%',
      statLabel: 'Resources underutilized'
    }
  ],

  solutions: [
    {
      icon: 'Package',
      title: 'Application Containerization',
      description: 'Convert applications to optimized Docker containers',
      highlights: [
        'Dockerfile creation',
        'Multi-stage builds',
        'Layer optimization',
        'Size reduction'
      ]
    },
    {
      icon: 'Layers',
      title: 'Docker Compose Solutions',
      description: 'Orchestrate multi-container applications for development and testing',
      highlights: [
        'Service definitions',
        'Network configuration',
        'Volume management',
        'Environment profiles'
      ]
    },
    {
      icon: 'Database',
      title: 'Container Registry',
      description: 'Set up secure, efficient container registries for your images',
      highlights: [
        'Registry deployment',
        'Image scanning',
        'Access control',
        'Retention policies'
      ]
    },
    {
      icon: 'Shield',
      title: 'Container Security',
      description: 'Secure containers from build to runtime',
      highlights: [
        'Base image security',
        'Vulnerability scanning',
        'Secrets management',
        'Runtime protection'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Application Assessment',
        description: 'Analyze applications to determine containerization strategy',
        duration: 'Week 1',
        deliverables: [
          'Application inventory',
          'Dependency mapping',
          'Container strategy',
          'Migration plan'
        ]
      },
      {
        icon: 'Code',
        title: 'Dockerfile Development',
        description: 'Create optimized Dockerfiles for each application',
        duration: 'Week 2-3',
        deliverables: [
          'Dockerfiles',
          'Multi-stage builds',
          '.dockerignore files',
          'Build documentation'
        ]
      },
      {
        icon: 'Layers',
        title: 'Orchestration Setup',
        description: 'Configure Docker Compose and container registry',
        duration: 'Week 3-4',
        deliverables: [
          'Docker Compose files',
          'Registry setup',
          'CI/CD integration',
          'Development workflow'
        ]
      },
      {
        icon: 'Shield',
        title: 'Security & Optimization',
        description: 'Harden containers and optimize for production',
        duration: 'Week 4-5',
        deliverables: [
          'Security hardening',
          'Image optimization',
          'Scanning setup',
          'Best practices guide'
        ]
      }
    ],
    totalDuration: '4-6 weeks'
  },

  benefits: [
    {
      icon: 'CheckCircle',
      title: 'Consistency',
      description: 'Identical environments from dev to production',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Environment parity'
    },
    {
      icon: 'Zap',
      title: 'Fast Startup',
      description: 'Containers start in seconds, not minutes',
      stat: '<5',
      statSuffix: 's',
      statLabel: 'Container startup'
    },
    {
      icon: 'DollarSign',
      title: 'Resource Savings',
      description: 'Higher density than VMs for cost savings',
      stat: '50',
      statSuffix: '%',
      statLabel: 'Infrastructure savings'
    },
    {
      icon: 'Users',
      title: 'Developer Productivity',
      description: 'Fast onboarding with containerized environments',
      stat: '90',
      statSuffix: '%',
      statLabel: 'Faster setup'
    }
  ],

  techStack: [
    {
      name: 'Container Runtime',
      description: 'Container engines and runtimes',
      technologies: [
        { name: 'Docker', icon: '/icons/tech/docker.svg', category: 'Runtime', proficiency: 'expert' },
        { name: 'containerd', icon: '/icons/tech/containerd.svg', category: 'Runtime', proficiency: 'expert' },
        { name: 'Podman', icon: '/icons/tech/podman.svg', category: 'Runtime', proficiency: 'advanced' },
        { name: 'Buildah', icon: '/icons/tech/buildah.svg', category: 'Build', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Container Registries',
      description: 'Image registry solutions',
      technologies: [
        { name: 'Docker Hub', icon: '/icons/tech/dockerhub.svg', category: 'Registry', proficiency: 'expert' },
        { name: 'ECR', icon: '/icons/tech/ecr.svg', category: 'Registry', proficiency: 'expert' },
        { name: 'GCR', icon: '/icons/tech/gcr.svg', category: 'Registry', proficiency: 'expert' },
        { name: 'Harbor', icon: '/icons/tech/harbor.svg', category: 'Registry', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Orchestration',
      description: 'Container orchestration tools',
      technologies: [
        { name: 'Docker Compose', icon: '/icons/tech/compose.svg', category: 'Orchestration', proficiency: 'expert' },
        { name: 'Docker Swarm', icon: '/icons/tech/swarm.svg', category: 'Orchestration', proficiency: 'advanced' },
        { name: 'Kubernetes', icon: '/icons/tech/kubernetes.svg', category: 'Orchestration', proficiency: 'expert' },
        { name: 'Nomad', icon: '/icons/tech/nomad.svg', category: 'Orchestration', proficiency: 'proficient' }
      ]
    },
    {
      name: 'Security Tools',
      description: 'Container security scanning',
      technologies: [
        { name: 'Trivy', icon: '/icons/tech/trivy.svg', category: 'Security', proficiency: 'expert' },
        { name: 'Snyk', icon: '/icons/tech/snyk.svg', category: 'Security', proficiency: 'expert' },
        { name: 'Clair', icon: '/icons/tech/clair.svg', category: 'Security', proficiency: 'advanced' },
        { name: 'Anchore', icon: '/icons/tech/anchore.svg', category: 'Security', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Starter',
        description: 'Single app containerization',
        price: '$2,000',
        priceNote: 'per application',
        features: [
          { name: 'Dockerfile creation', included: true },
          { name: 'Multi-stage build', included: true },
          { name: 'Docker Compose setup', included: true },
          { name: 'Basic documentation', included: true },
          { name: 'CI/CD integration', included: true },
          { name: 'Registry setup', included: false },
          { name: 'Security scanning', included: false },
          { name: 'Ongoing support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Professional',
        description: 'Multi-app containerization',
        price: '$8,000',
        priceNote: 'up to 5 applications',
        badge: 'Most Popular',
        features: [
          { name: 'Optimized Dockerfiles', included: true },
          { name: 'Advanced multi-stage', included: true },
          { name: 'Full Compose setup', included: true },
          { name: 'Complete documentation', included: true },
          { name: 'CI/CD pipelines', included: true },
          { name: 'Registry setup', included: true },
          { name: 'Security scanning', included: true },
          { name: '2-month support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Enterprise containerization',
        price: '$25,000+',
        priceNote: 'custom solution',
        features: [
          { name: 'Unlimited applications', included: true },
          { name: 'Enterprise optimization', included: true },
          { name: 'Advanced orchestration', included: true },
          { name: 'Full documentation', included: true },
          { name: 'Enterprise CI/CD', included: true },
          { name: 'Private registry', included: true },
          { name: 'Full security suite', included: true },
          { name: 'Dedicated support', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need Kubernetes deployment? See our Kubernetes services for container orchestration at scale.'
  },

  portfolio: [
    {
      title: 'Legacy Application Containerization',
      client: 'EnterpriseLogic Systems',
      industry: 'Enterprise Software',
      description: 'Containerized 25 legacy Java applications for cloud migration',
      challenge: 'Legacy applications with complex dependencies preventing cloud migration',
      solution: 'Created multi-stage Dockerfiles, standardized base images, and Docker Compose for local development',
      results: [
        '25 applications containerized',
        'Image sizes reduced by 70%',
        'Development setup reduced from 3 days to 30 minutes',
        'Successful cloud migration enabled'
      ],
      metrics: [
        { label: 'Apps', value: '25' },
        { label: 'Image Size', value: '-70%' },
        { label: 'Setup Time', value: '30 min' }
      ],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      tags: ['Java', 'Legacy', 'Multi-stage', 'Migration']
    },
    {
      title: 'Microservices Container Strategy',
      client: 'FastAPI Ventures',
      industry: 'SaaS',
      description: 'Standardized containerization for 40+ microservices',
      challenge: 'Inconsistent containerization across teams causing deployment issues',
      solution: 'Created standardized base images, Dockerfile templates, and automated scanning pipelines',
      results: [
        'Standardized 40+ microservices',
        'Build times reduced by 60%',
        'Zero container vulnerabilities in production',
        'Team onboarding reduced to 1 day'
      ],
      metrics: [
        { label: 'Services', value: '40+' },
        { label: 'Build Time', value: '-60%' },
        { label: 'Vulnerabilities', value: '0' }
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['Microservices', 'Standardization', 'Security', 'CI/CD']
    },
    {
      title: 'AI/ML Pipeline Containerization',
      client: 'DataScience Labs',
      industry: 'AI/ML',
      description: 'Containerized complex ML pipelines with GPU support',
      challenge: 'ML models required specific versions of CUDA, Python, and libraries causing reproducibility issues',
      solution: 'Created NVIDIA-based Docker images with version-pinned dependencies and model serving containers',
      results: [
        'Model reproducibility achieved',
        'Training environment setup from days to minutes',
        'GPU utilization improved by 40%',
        'Cross-team model sharing enabled'
      ],
      metrics: [
        { label: 'Setup Time', value: '10 min' },
        { label: 'GPU Utilization', value: '+40%' },
        { label: 'Models Deployed', value: '50+' }
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      tags: ['ML', 'GPU', 'NVIDIA', 'Data Science']
    },
    {
      title: 'Development Environment Standardization',
      client: 'TechStart Agency',
      industry: 'Digital Agency',
      description: 'Docker-based development environments for 15 diverse client projects',
      challenge: 'Developers spending days setting up environments for different client stacks',
      solution: 'Created Docker Compose templates for common stacks with one-command setup',
      results: [
        'Environment setup reduced to 5 minutes',
        'Works on my machine issues eliminated',
        'New developer productivity from day 1',
        '15 project templates created'
      ],
      metrics: [
        { label: 'Setup Time', value: '5 min' },
        { label: 'Projects', value: '15' },
        { label: 'Issues', value: '0' }
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      tags: ['Development', 'Docker Compose', 'Productivity', 'Agency']
    }
  ],

  testimonials: [
    {
      quote: 'They containerized our entire legacy portfolio, enabling our cloud migration. What seemed impossible became straightforward.',
      author: 'Robert Chen',
      role: 'Director of Infrastructure',
      company: 'EnterpriseLogic Systems',
      rating: 5,
      location: 'Chicago, IL'
    },
    {
      quote: 'The standardized container strategy transformed our development process. Every team now follows the same patterns.',
      author: 'Jessica Martinez',
      role: 'VP Engineering',
      company: 'FastAPI Ventures',
      rating: 5,
      location: 'Denver, CO'
    }
  ],

  faqs: [
    {
      question: 'What applications can be containerized?',
      answer: 'Almost any application can be containerized including web applications, APIs, microservices, databases, and background workers. Even legacy applications can be containerized with proper analysis and sometimes minimal modifications. The main considerations are stateful storage requirements and any dependencies on specific host resources.'
    },
    {
      question: 'How do you optimize Docker image sizes?',
      answer: 'We use multiple techniques: multi-stage builds to separate build and runtime dependencies, minimal base images (Alpine, distroless), proper layer ordering for cache efficiency, removing unnecessary files, and combining RUN commands. We typically achieve 50-80% size reductions.'
    },
    {
      question: 'How do you handle persistent data in containers?',
      answer: 'Containers should be stateless with persistent data stored in Docker volumes or external storage (databases, object storage). We design applications with this principle, mapping volumes for necessary persistence and using external services for production data.'
    },
    {
      question: 'What about container security?',
      answer: 'We implement security at every layer: using minimal, trusted base images, scanning for vulnerabilities, running containers as non-root, implementing read-only filesystems where possible, managing secrets properly, and enforcing resource limits. All images are scanned before deployment.'
    },
    {
      question: 'Docker vs Podman - which should we use?',
      answer: 'Docker remains the most common choice with excellent tooling and compatibility. Podman is gaining adoption, especially in enterprises that prefer rootless and daemonless operation. For most teams, Docker is the practical choice. We support both and can help you choose based on your requirements.'
    }
  ],

  relatedServices: [
    {
      name: 'Kubernetes Services',
      slug: 'kubernetes-services',
      description: 'Container orchestration at scale',
      icon: 'Box'
    },
    {
      name: 'CI/CD Pipelines',
      slug: 'ci-cd-pipelines',
      description: 'Automated container builds',
      icon: 'GitMerge'
    },
    {
      name: 'Cloud Infrastructure',
      slug: 'cloud-infrastructure',
      description: 'Container hosting infrastructure',
      icon: 'Cloud'
    },
    {
      name: 'DevOps Automation',
      slug: 'devops-automation',
      description: 'Container deployment automation',
      icon: 'Settings'
    }
  ],

  seo: {
    title: 'Docker Containerization Services | Container Strategy & Development',
    description: 'Expert Docker containerization services. Application containerization, Dockerfile optimization, container security, and Docker Compose orchestration.',
    keywords: [
      'docker containerization',
      'container services',
      'dockerfile development',
      'docker consulting',
      'application containerization',
      'container security',
      'docker compose',
      'container optimization',
      'docker migration',
      'container strategy'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Docker Containerization Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Container Consulting'
      }
    }
  }
};
