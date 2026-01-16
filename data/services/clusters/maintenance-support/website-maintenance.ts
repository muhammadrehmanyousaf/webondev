// Website Maintenance Service Data
import { ServiceData } from '@/components/services/sections';

export const websiteMaintenanceData: ServiceData = {
  name: 'Website Maintenance',
  slug: 'website-maintenance',
  tagline: 'Keep your website secure, fast, and up-to-date',
  category: 'Maintenance & Support',
  description: 'Professional website maintenance services to keep your site running smoothly. We handle updates, security, backups, and performance optimization so you can focus on your business.',

  hero: {
    headline: 'Website Maintenance Services',
    subheadline: 'Your Website, Always Performing',
    description: 'Protect your online investment with proactive website maintenance. Our team handles security updates, performance optimization, content updates, and technical monitoring to keep your site in peak condition.',
    keyFeatures: [
      'Security updates & patches',
      'Performance monitoring',
      'Regular backups',
      'Content updates',
      'Plugin/theme updates',
      'Uptime monitoring'
    ],
    badges: ['24/7 Monitoring', '99.9% Uptime', '1000+ Sites Maintained', 'Quick Response']
  },

  painPoints: [
    {
      icon: 'Shield',
      title: 'Security Vulnerabilities',
      description: 'Outdated software leaving site vulnerable to attacks',
      stat: '60%',
      statLabel: 'Sites have vulnerabilities'
    },
    {
      icon: 'TrendingDown',
      title: 'Performance Issues',
      description: 'Slow loading times driving visitors away',
      stat: '53%',
      statLabel: 'Leave slow sites'
    },
    {
      icon: 'AlertTriangle',
      title: 'Unexpected Downtime',
      description: 'Site going down without warning or quick resolution',
      stat: '$5,600',
      statLabel: 'Cost per hour downtime'
    },
    {
      icon: 'Clock',
      title: 'No Time for Updates',
      description: 'Too busy to keep site content and software current',
      stat: '75%',
      statLabel: 'Sites outdated'
    }
  ],

  solutions: [
    {
      icon: 'Shield',
      title: 'Security Maintenance',
      description: 'Proactive security to protect your site',
      highlights: [
        'Security patches',
        'Malware scanning',
        'Firewall management',
        'SSL monitoring'
      ]
    },
    {
      icon: 'Zap',
      title: 'Performance Optimization',
      description: 'Keep your site fast and responsive',
      highlights: [
        'Speed optimization',
        'Cache management',
        'Database cleanup',
        'Image optimization'
      ]
    },
    {
      icon: 'RefreshCw',
      title: 'Regular Updates',
      description: 'Keep everything current and compatible',
      highlights: [
        'CMS updates',
        'Plugin updates',
        'Theme updates',
        'Compatibility testing'
      ]
    },
    {
      icon: 'Activity',
      title: '24/7 Monitoring',
      description: 'Constant oversight of your site health',
      highlights: [
        'Uptime monitoring',
        'Performance tracking',
        'Error monitoring',
        'Alert notifications'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Site Audit',
        description: 'Comprehensive assessment of your website',
        duration: 'Day 1-2',
        deliverables: [
          'Security scan',
          'Performance audit',
          'Plugin review',
          'Health report'
        ]
      },
      {
        icon: 'Settings',
        title: 'Setup',
        description: 'Configure monitoring and maintenance tools',
        duration: 'Day 3-5',
        deliverables: [
          'Monitoring setup',
          'Backup configuration',
          'Staging environment',
          'Access credentials'
        ]
      },
      {
        icon: 'Play',
        title: 'Initial Cleanup',
        description: 'Address any existing issues',
        duration: 'Week 1',
        deliverables: [
          'Security fixes',
          'Performance optimization',
          'Update backlog',
          'Cleanup tasks'
        ]
      },
      {
        icon: 'RefreshCw',
        title: 'Ongoing Maintenance',
        description: 'Regular maintenance and monitoring',
        duration: 'Ongoing',
        deliverables: [
          'Weekly updates',
          'Monthly reports',
          'Regular backups',
          'Continuous monitoring'
        ]
      }
    ],
    totalDuration: '1 week to full maintenance'
  },

  benefits: [
    {
      icon: 'Activity',
      title: 'Uptime',
      description: 'Keep your site online',
      stat: '99.9',
      statSuffix: '%',
      statLabel: 'Uptime guarantee'
    },
    {
      icon: 'Shield',
      title: 'Security',
      description: 'Protected from threats',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Security coverage'
    },
    {
      icon: 'Zap',
      title: 'Performance',
      description: 'Fast loading times',
      stat: '<3',
      statSuffix: 's',
      statLabel: 'Load time target'
    },
    {
      icon: 'Clock',
      title: 'Time Saved',
      description: 'Focus on your business',
      stat: '10+',
      statSuffix: 'hrs',
      statLabel: 'Monthly time saved'
    }
  ],

  techStack: [
    {
      name: 'CMS Platforms',
      description: 'Content management systems',
      technologies: [
        { name: 'WordPress', icon: '/icons/tech/wordpress.svg', category: 'CMS', proficiency: 'expert' },
        { name: 'Drupal', icon: '/icons/tech/drupal.svg', category: 'CMS', proficiency: 'expert' },
        { name: 'Shopify', icon: '/icons/tech/shopify.svg', category: 'E-commerce', proficiency: 'expert' },
        { name: 'Webflow', icon: '/icons/tech/webflow.svg', category: 'CMS', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Modern Frameworks',
      description: 'JavaScript frameworks',
      technologies: [
        { name: 'Next.js', icon: '/icons/tech/nextjs.svg', category: 'Framework', proficiency: 'expert' },
        { name: 'React', icon: '/icons/tech/react.svg', category: 'Frontend', proficiency: 'expert' },
        { name: 'Vue.js', icon: '/icons/tech/vue.svg', category: 'Frontend', proficiency: 'expert' },
        { name: 'Gatsby', icon: '/icons/tech/gatsby.svg', category: 'Framework', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Monitoring Tools',
      description: 'Site monitoring and analytics',
      technologies: [
        { name: 'UptimeRobot', icon: '/icons/tech/uptimerobot.svg', category: 'Monitoring', proficiency: 'expert' },
        { name: 'GTmetrix', icon: '/icons/tech/gtmetrix.svg', category: 'Performance', proficiency: 'expert' },
        { name: 'Sucuri', icon: '/icons/tech/sucuri.svg', category: 'Security', proficiency: 'expert' },
        { name: 'New Relic', icon: '/icons/tech/newrelic.svg', category: 'APM', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Hosting Platforms',
      description: 'Web hosting management',
      technologies: [
        { name: 'WP Engine', icon: '/icons/tech/wpengine.svg', category: 'Hosting', proficiency: 'expert' },
        { name: 'Vercel', icon: '/icons/tech/vercel.svg', category: 'Hosting', proficiency: 'expert' },
        { name: 'AWS', icon: '/icons/tech/aws.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Cloudflare', icon: '/icons/tech/cloudflare.svg', category: 'CDN', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Basic',
        description: 'Essential maintenance',
        price: '$199',
        priceNote: 'per month',
        features: [
          { name: 'Security updates', included: true },
          { name: 'Plugin/theme updates', included: true },
          { name: 'Weekly backups', included: true },
          { name: 'Uptime monitoring', included: true },
          { name: 'Monthly report', included: true },
          { name: 'Content updates', included: false },
          { name: 'Performance optimization', included: false },
          { name: 'Priority support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Professional',
        description: 'Comprehensive care',
        price: '$399',
        priceNote: 'per month',
        badge: 'Most Popular',
        features: [
          { name: 'All Basic features', included: true },
          { name: 'Daily backups', included: true },
          { name: 'Content updates (2hrs/mo)', included: true },
          { name: 'Performance optimization', included: true },
          { name: 'Security hardening', included: true },
          { name: 'Priority support', included: true },
          { name: 'Staging environment', included: true },
          { name: '24/7 emergency support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Full-service care',
        price: '$799',
        priceNote: 'per month',
        features: [
          { name: 'All Professional features', included: true },
          { name: 'Real-time backups', included: true },
          { name: 'Content updates (5hrs/mo)', included: true },
          { name: 'Advanced security', included: true },
          { name: '24/7 emergency support', included: true },
          { name: 'Dedicated account manager', included: true },
          { name: 'Custom development', included: true },
          { name: 'SLA guarantee', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Plans for multiple sites available. Enterprise pricing based on requirements.'
  },

  portfolio: [
    {
      title: 'E-commerce Site Maintenance',
      client: 'Fashion Forward Retail',
      industry: 'E-commerce',
      description: 'Full maintenance for high-traffic WooCommerce store',
      challenge: 'Frequent crashes during sales and security concerns',
      solution: 'Implemented comprehensive maintenance with performance focus',
      results: [
        'Zero downtime during Black Friday',
        'Page speed improved from 6s to 1.8s',
        'Security incidents reduced to zero',
        'Conversion rate improved 35%'
      ],
      metrics: [
        { label: 'Downtime', value: '0' },
        { label: 'Speed Improvement', value: '3.3x' },
        { label: 'Conversion Lift', value: '+35%' }
      ],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'WooCommerce', 'Performance', 'Security']
    },
    {
      title: 'Corporate Website Care',
      client: 'Henderson Law Group',
      industry: 'Legal',
      description: 'Ongoing maintenance for professional services firm',
      challenge: 'Outdated site with security vulnerabilities and poor performance',
      solution: 'Security overhaul and ongoing professional maintenance',
      results: [
        'All security vulnerabilities resolved',
        'Site speed improved 4x',
        'Google ranking improved significantly',
        'Lead generation up 50%'
      ],
      metrics: [
        { label: 'Security Score', value: 'A+' },
        { label: 'Speed', value: '4x faster' },
        { label: 'Leads', value: '+50%' }
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      tags: ['Professional Services', 'WordPress', 'Security', 'SEO']
    },
    {
      title: 'Healthcare Portal Maintenance',
      client: 'MedFirst Clinic Network',
      industry: 'Healthcare',
      description: 'HIPAA-compliant website maintenance for multi-location clinic',
      challenge: 'Patient portal requiring constant updates and strict security compliance',
      solution: 'Implemented secure maintenance workflow with compliance monitoring',
      results: [
        'HIPAA compliance maintained 100%',
        'Portal uptime exceeded 99.99%',
        'Patient satisfaction improved 40%',
        'Security audit passed with flying colors'
      ],
      metrics: [
        { label: 'Compliance', value: '100%' },
        { label: 'Uptime', value: '99.99%' },
        { label: 'Patient Satisfaction', value: '+40%' }
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'HIPAA', 'Security', 'Portal']
    },
    {
      title: 'Restaurant Chain Web Maintenance',
      client: 'Urban Eats Group',
      industry: 'Restaurant',
      description: 'Multi-location restaurant website with online ordering system',
      challenge: 'Frequent menu updates and integration with POS systems',
      solution: 'Streamlined content management with automated sync processes',
      results: [
        'Menu update time reduced by 90%',
        'Online orders increased 60%',
        'Site performance optimized for mobile',
        'Integration errors eliminated'
      ],
      metrics: [
        { label: 'Update Speed', value: '90% faster' },
        { label: 'Online Orders', value: '+60%' },
        { label: 'Mobile Score', value: '95/100' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Restaurant', 'E-commerce', 'Mobile', 'Integration']
    }
  ],

  testimonials: [
    {
      quote: 'We used to worry about our site constantly. Now we have complete peace of mind knowing professionals are watching over it.',
      author: 'Rebecca Foster',
      role: 'Marketing Director',
      company: 'Fashion Forward Retail',
      rating: 5,
      location: 'Los Angeles, CA'
    },
    {
      quote: 'Our site is faster, more secure, and brings in more leads. The maintenance service pays for itself many times over.',
      author: 'Robert Henderson',
      role: 'Managing Partner',
      company: 'Henderson Law Group',
      rating: 5,
      location: 'Denver, CO'
    }
  ],

  faqs: [
    {
      question: 'What platforms do you support?',
      answer: 'We maintain websites on all major platforms including WordPress, Drupal, Joomla, Shopify, WooCommerce, Magento, and custom-built sites using React, Next.js, Vue, and other modern frameworks. If you\'re unsure if we support your platform, just ask.'
    },
    {
      question: 'How quickly do you respond to issues?',
      answer: 'For Basic plans, we respond within 24 business hours. Professional plans get priority response within 4 business hours. Enterprise plans include 24/7 emergency support with 1-hour response for critical issues.'
    },
    {
      question: 'What\'s included in security updates?',
      answer: 'Security updates include CMS core updates, plugin/extension security patches, theme updates, SSL certificate monitoring, malware scanning, firewall rules updates, and security hardening. We also monitor security bulletins to proactively address vulnerabilities.'
    },
    {
      question: 'Do you make backups?',
      answer: 'Yes, all plans include regular backups. Basic plans include weekly backups, Professional plans include daily backups, and Enterprise plans include real-time backups. All backups are stored securely off-site and can be restored quickly if needed.'
    },
    {
      question: 'Can you update content on my site?',
      answer: 'Yes, Professional and Enterprise plans include monthly content update hours. This can include text updates, image changes, new pages, and minor design tweaks. Additional hours are available at an hourly rate if you need more.'
    }
  ],

  relatedServices: [
    {
      name: 'Application Maintenance',
      slug: 'application-maintenance',
      description: 'Application upkeep',
      icon: 'Settings'
    },
    {
      name: 'Security Updates',
      slug: 'security-updates',
      description: 'Security management',
      icon: 'Shield'
    },
    {
      name: 'Performance Optimization',
      slug: 'performance-optimization',
      description: 'Speed optimization',
      icon: 'Zap'
    },
    {
      name: 'Technical Support',
      slug: 'technical-support',
      description: 'Ongoing support',
      icon: 'HeadPhones'
    }
  ],

  seo: {
    title: 'Website Maintenance Services | Website Care Plans',
    description: 'Professional website maintenance services. Security updates, performance optimization, backups, monitoring. Keep your site secure and fast. From $199/month.',
    keywords: [
      'website maintenance',
      'website maintenance services',
      'website care',
      'wordpress maintenance',
      'website support',
      'website management',
      'site maintenance',
      'website upkeep',
      'website maintenance plans',
      'web maintenance services'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Website Maintenance Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Website Care Plans'
      }
    }
  }
};
