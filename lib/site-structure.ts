export interface ClusterPage {
  title: string;
  slug: string;
  description: string;
  keywords: string[];
  features: string[];
}

export interface PillarPage {
  title: string;
  slug: string;
  description: string;
  icon: string;
  clusters: ClusterPage[];
}

import { extraServiceNames } from '@/lib/site-structure-extra';

export const siteStructure: PillarPage[] = [
  {
    title: "Web Development Services",
    slug: "web-development",
    description: "Comprehensive web development solutions for modern businesses",
    icon: "Globe",
    clusters: [
      {
        title: "Custom Web Development",
        slug: "custom-web-development",
        description: "Tailored web solutions built from scratch",
        keywords: ["custom web development", "bespoke web solutions", "tailored websites"],
        features: ["Custom Architecture", "Scalable Solutions", "Modern Technologies", "Performance Optimization"]
      },
      {
        title: "React Development",
        slug: "react-development",
        description: "Professional React.js development services",
        keywords: ["react development", "react.js", "frontend development"],
        features: ["Component-based Architecture", "State Management", "Performance Optimization", "Modern React Patterns"]
      },
      {
        title: "Next.js Development",
        slug: "nextjs-development",
        description: "Full-stack Next.js applications",
        keywords: ["next.js development", "react framework", "server-side rendering"],
        features: ["SSR/SSG", "API Routes", "Performance Optimization", "SEO-Friendly"]
      },
      {
        title: "WordPress Development",
        slug: "wordpress-development",
        description: "Custom WordPress themes and plugins",
        keywords: ["wordpress development", "custom themes", "wordpress plugins"],
        features: ["Custom Themes", "Plugin Development", "Performance Optimization", "Security Hardening"]
      },
      {
        title: "E-commerce Development",
        slug: "ecommerce-development",
        description: "Complete e-commerce solutions",
        keywords: ["ecommerce development", "online store", "shopping cart"],
        features: ["Shopping Cart", "Payment Integration", "Inventory Management", "Order Processing"]
      },
      {
        title: "Progressive Web Apps",
        slug: "progressive-web-apps",
        description: "Modern PWA development",
        keywords: ["progressive web apps", "PWA", "mobile web apps"],
        features: ["Offline Functionality", "Push Notifications", "App-like Experience", "Cross-platform"]
      },
      {
        title: "API Development",
        slug: "api-development",
        description: "RESTful and GraphQL API development",
        keywords: ["API development", "REST API", "GraphQL"],
        features: ["RESTful APIs", "GraphQL", "API Documentation", "Authentication &amp; Security"]
      },
      {
        title: "Frontend Development",
        slug: "frontend-development",
        description: "Modern frontend development services",
        keywords: ["frontend development", "user interface", "responsive design"],
        features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "Cross-browser Compatibility"]
      },
      {
        title: "Backend Development",
        slug: "backend-development",
        description: "Robust backend solutions",
        keywords: ["backend development", "server-side", "database design"],
        features: ["Server Architecture", "Database Design", "API Integration", "Security Implementation"]
      },
      {
        title: "Full-Stack Development",
        slug: "fullstack-development",
        description: "Complete full-stack solutions",
        keywords: ["full-stack development", "end-to-end solutions", "complete web apps"],
        features: ["End-to-end Development", "Technology Integration", "Scalable Architecture", "Performance Optimization"]
      }
    ]
  },
  {
    title: "Mobile App Development",
    slug: "mobile-development",
    description: "Native and cross-platform mobile application development",
    icon: "Smartphone",
    clusters: [
      {
        title: "iOS App Development",
        slug: "ios-development",
        description: "Native iOS applications using Swift",
        keywords: ["iOS development", "iPhone apps", "Swift programming"],
        features: ["Native iOS", "Swift Programming", "App Store Optimization", "iOS Design Guidelines"]
      },
      {
        title: "Android App Development",
        slug: "android-development",
        description: "Native Android applications using Kotlin",
        keywords: ["Android development", "mobile apps", "Kotlin programming"],
        features: ["Native Android", "Kotlin Programming", "Google Play Store", "Material Design"]
      },
      {
        title: "React Native Development",
        slug: "react-native-development",
        description: "Cross-platform apps with React Native",
        keywords: ["React Native", "cross-platform", "mobile development"],
        features: ["Cross-platform", "Single Codebase", "Native Performance", "React Ecosystem"]
      },
      {
        title: "Flutter Development",
        slug: "flutter-development",
        description: "Beautiful native apps with Flutter",
        keywords: ["Flutter development", "Dart programming", "cross-platform apps"],
        features: ["Cross-platform UI", "Fast Development", "Native Performance", "Material Design"]
      },
      {
        title: "Hybrid App Development",
        slug: "hybrid-app-development",
        description: "Hybrid mobile applications",
        keywords: ["hybrid apps", "mobile development", "cross-platform"],
        features: ["Web Technologies", "Platform Compatibility", "Cost-effective", "Faster Development"]
      },
      {
        title: "Native App Development",
        slug: "native-app-development",
        description: "Platform-specific native applications",
        keywords: ["native app development", "iOS", "Android"],
        features: ["Platform-specific", "Maximum Performance", "Native Features", "Optimal User Experience"]
      },
      {
        title: "Cross-Platform Development",
        slug: "cross-platform-development",
        description: "Multi-platform mobile solutions",
        keywords: ["cross-platform", "multi-platform", "mobile apps"],
        features: ["Multiple Platforms", "Code Reusability", "Cost Efficiency", "Faster Time-to-Market"]
      },
      {
        title: "App Store Optimization",
        slug: "app-store-optimization",
        description: "ASO services for better app visibility",
        keywords: ["app store optimization", "ASO", "app marketing"],
        features: ["Keyword Optimization", "App Store Rankings", "Conversion Optimization", "Performance Analytics"]
      },
      {
        title: "Mobile UI/UX Design",
        slug: "mobile-ui-ux-design",
        description: "User-centered mobile app design",
        keywords: ["mobile design", "app UI/UX", "user experience"],
        features: ["User-centered Design", "Intuitive Interface", "Accessibility", "Platform Guidelines"]
      },
      {
        title: "App Maintenance &amp; Support",
        slug: "app-maintenance-support",
        description: "Ongoing mobile app maintenance",
        keywords: ["app maintenance", "mobile app support", "bug fixes"],
        features: ["Bug Fixes", "Performance Updates", "OS Compatibility", "Feature Enhancements"]
      }
    ]
  },
  {
    title: "Software Development",
    slug: "software-development",
    description: "Custom software solutions for enterprise and startups",
    icon: "Code",
    clusters: [
      {
        title: "Custom Software Development",
        slug: "custom-software-development",
        description: "Tailor-made software solutions",
        keywords: ["custom software", "bespoke solutions", "enterprise software"],
        features: ["Custom Architecture", "Scalable Solutions", "Integration Capabilities", "Maintenance &amp; Support"]
      },
      {
        title: "Enterprise Software Solutions",
        slug: "enterprise-software-solutions",
        description: "Large-scale enterprise applications",
        keywords: ["enterprise software", "business solutions", "scalable applications"],
        features: ["Enterprise Architecture", "Scalability", "Security", "Integration"]
      },
      {
        title: "SaaS Development",
        slug: "saas-development",
        description: "Software as a Service platforms",
        keywords: ["SaaS development", "cloud software", "subscription software"],
        features: ["Multi-tenant Architecture", "Scalable Infrastructure", "Subscription Management", "Analytics"]
      },
      {
        title: "Desktop Application Development",
        slug: "desktop-application-development",
        description: "Cross-platform desktop applications",
        keywords: ["desktop apps", "cross-platform", "native applications"],
        features: ["Cross-platform", "Native Performance", "System Integration", "Offline Functionality"]
      },
      {
        title: "Database Development",
        slug: "database-development",
        description: "Database design and optimization",
        keywords: ["database development", "data modeling", "database optimization"],
        features: ["Database Design", "Performance Optimization", "Data Migration", "Backup &amp; Recovery"]
      },
      {
        title: "Legacy System Modernization",
        slug: "legacy-system-modernization",
        description: "Modernizing legacy applications",
        keywords: ["legacy modernization", "system upgrade", "application migration"],
        features: ["System Analysis", "Migration Planning", "Modern Technologies", "Minimal Downtime"]
      },
      {
        title: "Microservices Architecture",
        slug: "microservices-architecture",
        description: "Scalable microservices solutions",
        keywords: ["microservices", "distributed systems", "scalable architecture"],
        features: ["Service Decomposition", "API Design", "Container Orchestration", "Monitoring"]
      },
      {
        title: "DevOps Integration",
        slug: "devops-integration",
        description: "CI/CD and DevOps implementation",
        keywords: ["DevOps", "CI/CD", "automation", "deployment"],
        features: ["Automated Deployment", "Continuous Integration", "Infrastructure as Code", "Monitoring"]
      },
      {
        title: "Quality Assurance &amp; Testing",
        slug: "quality-assurance-testing",
        description: "Comprehensive software testing",
        keywords: ["software testing", "QA", "test automation"],
        features: ["Automated Testing", "Manual Testing", "Performance Testing", "Security Testing"]
      },
      {
        title: "Software Consulting",
        slug: "software-consulting",
        description: "Expert software development consulting",
        keywords: ["software consulting", "technical consulting", "architecture review"],
        features: ["Technical Audit", "Architecture Review", "Technology Selection", "Performance Optimization"]
      }
    ]
  },
  {
    title: "UI/UX Design Services",
    slug: "ui-ux-design",
    description: "User-centered design solutions for digital products",
    icon: "Palette",
    clusters: [
      {
        title: "Web Design",
        slug: "web-design",
        description: "Modern and responsive web design",
        keywords: ["web design", "responsive design", "user interface"],
        features: ["Responsive Design", "Modern Aesthetics", "User Experience", "Cross-browser Compatibility"]
      },
      {
        title: "Mobile App Design",
        slug: "mobile-app-design",
        description: "Intuitive mobile application design",
        keywords: ["mobile app design", "UI/UX", "app interface"],
        features: ["Mobile-first Design", "Platform Guidelines", "Gesture-based Interaction", "Accessibility"]
      },
      {
        title: "Logo Design &amp; Branding",
        slug: "logo-design-branding",
        description: "Professional brand identity design",
        keywords: ["logo design", "branding", "brand identity"],
        features: ["Brand Strategy", "Logo Design", "Brand Guidelines", "Marketing Materials"]
      },
      {
        title: "User Experience Design",
        slug: "user-experience-design",
        description: "Research-driven UX design",
        keywords: ["UX design", "user experience", "user research"],
        features: ["User Research", "Journey Mapping", "Wireframing", "Usability Testing"]
      },
      {
        title: "User Interface Design",
        slug: "user-interface-design",
        description: "Beautiful and functional UI design",
        keywords: ["UI design", "user interface", "visual design"],
        features: ["Visual Design", "Interactive Elements", "Design Systems", "Responsive Layouts"]
      },
      {
        title: "Prototyping &amp; Wireframing",
        slug: "prototyping-wireframing",
        description: "Interactive prototypes and wireframes",
        keywords: ["prototyping", "wireframing", "design mockups"],
        features: ["Interactive Prototypes", "Wireframe Creation", "User Flow Mapping", "Design Validation"]
      },
      {
        title: "Design Systems",
        slug: "design-systems",
        description: "Scalable design system creation",
        keywords: ["design systems", "component library", "style guide"],
        features: ["Component Libraries", "Style Guides", "Design Tokens", "Documentation"]
      },
      {
        title: "Graphic Design",
        slug: "graphic-design",
        description: "Creative graphic design solutions",
        keywords: ["graphic design", "visual communication", "creative design"],
        features: ["Print Design", "Digital Graphics", "Marketing Materials", "Visual Identity"]
      },
      {
        title: "E-commerce Design",
        slug: "ecommerce-design",
        description: "Conversion-focused e-commerce design",
        keywords: ["ecommerce design", "online store design", "conversion optimization"],
        features: ["Product Showcase", "Shopping Experience", "Checkout Optimization", "Mobile Commerce"]
      },
      {
        title: "Accessibility Design",
        slug: "accessibility-design",
        description: "Inclusive and accessible design",
        keywords: ["accessibility design", "inclusive design", "WCAG compliance"],
        features: ["WCAG Compliance", "Screen Reader Support", "Keyboard Navigation", "Color Contrast"]
      }
    ]
  },
  {
            title: "Digital Marketing &amp; Ads",
    slug: "digital-marketing",
    description: "Comprehensive digital marketing and advertising solutions",
    icon: "TrendingUp",
    clusters: [
      {
        title: "Search Engine Optimization",
        slug: "search-engine-optimization",
        description: "SEO services for better search rankings",
        keywords: ["SEO", "search engine optimization", "organic traffic"],
        features: ["Keyword Research", "On-page SEO", "Technical SEO", "Link Building"]
      },
      {
        title: "Pay-Per-Click Advertising",
        slug: "pay-per-click-advertising",
        description: "PPC campaigns and management",
        keywords: ["PPC", "Google Ads", "paid advertising"],
        features: ["Campaign Setup", "Keyword Bidding", "Ad Creation", "Performance Tracking"]
      },
      {
        title: "Social Media Marketing",
        slug: "social-media-marketing",
        description: "Social media strategy and management",
        keywords: ["social media marketing", "social media management", "content marketing"],
        features: ["Content Strategy", "Community Management", "Paid Social Ads", "Analytics &amp; Reporting"]
      },
      {
        title: "Content Marketing",
        slug: "content-marketing",
        description: "Strategic content creation and marketing",
        keywords: ["content marketing", "content strategy", "blog writing"],
        features: ["Content Strategy", "Blog Writing", "Video Content", "Content Distribution"]
      },
      {
        title: "Email Marketing",
        slug: "email-marketing",
        description: "Email campaigns and automation",
        keywords: ["email marketing", "email campaigns", "marketing automation"],
        features: ["Campaign Design", "List Management", "Automation", "A/B Testing"]
      },
      {
        title: "Conversion Rate Optimization",
        slug: "conversion-rate-optimization",
        description: "CRO for better website performance",
        keywords: ["conversion optimization", "CRO", "website optimization"],
        features: ["A/B Testing", "User Behavior Analysis", "Landing Page Optimization", "Funnel Optimization"]
      },
      {
        title: "Analytics &amp; Reporting",
        slug: "analytics-reporting",
        description: "Data-driven marketing insights",
        keywords: ["marketing analytics", "data analysis", "performance reporting"],
        features: ["Google Analytics", "Performance Tracking", "Custom Dashboards", "ROI Analysis"]
      },
      {
        title: "Marketing Automation",
        slug: "marketing-automation",
        description: "Automated marketing workflows",
        keywords: ["marketing automation", "workflow automation", "lead nurturing"],
        features: ["Workflow Automation", "Lead Scoring", "Personalization", "Campaign Tracking"]
      },
      {
        title: "Influencer Marketing",
        slug: "influencer-marketing",
        description: "Influencer partnership and campaigns",
        keywords: ["influencer marketing", "brand partnerships", "social influence"],
        features: ["Influencer Selection", "Campaign Management", "Content Collaboration", "Performance Tracking"]
      },
      {
        title: "Brand Strategy &amp; Positioning",
        slug: "brand-strategy-positioning",
        description: "Strategic brand development",
        keywords: ["brand strategy", "brand positioning", "market positioning"],
        features: ["Brand Audit", "Competitive Analysis", "Positioning Strategy", "Brand Guidelines"]
      }
    ]
  },
  {
    title: "E-commerce Solutions",
    slug: "ecommerce-solutions",
    description: "Complete e-commerce development and optimization",
    icon: "ShoppingCart",
    clusters: [
      {
        title: "Shopify Development",
        slug: "shopify-development",
        description: "Custom Shopify store development",
        keywords: ["Shopify development", "e-commerce", "online store"],
        features: ["Custom Themes", "App Integration", "Payment Setup", "Store Optimization"]
      },
      {
        title: "WooCommerce Development",
        slug: "woocommerce-development",
        description: "WordPress e-commerce solutions",
        keywords: ["WooCommerce", "WordPress e-commerce", "online shop"],
        features: ["Custom Themes", "Plugin Development", "Payment Integration", "Inventory Management"]
      },
      {
        title: "Magento Development",
        slug: "magento-development",
        description: "Enterprise Magento solutions",
        keywords: ["Magento development", "enterprise e-commerce", "B2B commerce"],
        features: ["Custom Development", "B2B Features", "Multi-store Setup", "Performance Optimization"]
      },
      {
        title: "Custom E-commerce Platforms",
        slug: "custom-ecommerce-platforms",
        description: "Bespoke e-commerce solutions",
        keywords: ["custom e-commerce", "bespoke online store", "tailored shopping"],
        features: ["Custom Architecture", "Unique Features", "Scalable Solution", "Third-party Integration"]
      },
      {
        title: "Payment Gateway Integration",
        slug: "payment-gateway-integration",
        description: "Secure payment processing setup",
        keywords: ["payment gateway", "online payments", "payment processing"],
        features: ["Multiple Payment Methods", "Secure Processing", "PCI Compliance", "International Payments"]
      },
      {
        title: "E-commerce Mobile Apps",
        slug: "ecommerce-mobile-apps",
        description: "Mobile commerce applications",
        keywords: ["mobile commerce", "e-commerce app", "shopping app"],
        features: ["Native Mobile Apps", "Push Notifications", "Mobile Payments", "Offline Functionality"]
      },
      {
        title: "Marketplace Development",
        slug: "marketplace-development",
        description: "Multi-vendor marketplace platforms",
        keywords: ["marketplace development", "multi-vendor", "online marketplace"],
        features: ["Vendor Management", "Commission System", "Rating &amp; Reviews", "Multi-payment Support"]
      },
      {
        title: "Inventory Management Systems",
        slug: "inventory-management-systems",
        description: "Advanced inventory tracking",
        keywords: ["inventory management", "stock tracking", "warehouse management"],
        features: ["Real-time Tracking", "Multi-location Support", "Automated Reordering", "Reporting &amp; Analytics"]
      },
      {
        title: "E-commerce SEO",
        slug: "ecommerce-seo",
        description: "E-commerce search optimization",
        keywords: ["e-commerce SEO", "product SEO", "online store optimization"],
        features: ["Product Optimization", "Category SEO", "Technical SEO", "Schema Markup"]
      },
      {
        title: "E-commerce Analytics",
        slug: "ecommerce-analytics",
        description: "Sales and performance analytics",
        keywords: ["e-commerce analytics", "sales tracking", "conversion analytics"],
        features: ["Sales Analytics", "Customer Insights", "Conversion Tracking", "Performance Reporting"]
      }
    ]
  },
  {
            title: "Cloud Services &amp; DevOps",
    slug: "cloud-devops",
    description: "Cloud infrastructure and DevOps solutions",
    icon: "Cloud",
    clusters: [
      {
        title: "AWS Cloud Services",
        slug: "aws-cloud-services",
        description: "Amazon Web Services implementation",
        keywords: ["AWS", "cloud computing", "Amazon Web Services"],
        features: ["EC2 Setup", "S3 Storage", "RDS Database", "Lambda Functions"]
      },
      {
        title: "Azure Cloud Solutions",
        slug: "azure-cloud-solutions",
        description: "Microsoft Azure cloud services",
        keywords: ["Azure", "Microsoft cloud", "cloud solutions"],
        features: ["Virtual Machines", "App Services", "SQL Database", "Active Directory"]
      },
      {
        title: "Google Cloud Platform",
        slug: "google-cloud-platform",
        description: "GCP services and implementation",
        keywords: ["Google Cloud", "GCP", "cloud platform"],
        features: ["Compute Engine", "Cloud Storage", "BigQuery", "Kubernetes Engine"]
      },
      {
        title: "Container Orchestration",
        slug: "container-orchestration",
        description: "Docker and Kubernetes solutions",
        keywords: ["containers", "Docker", "Kubernetes"],
        features: ["Docker Containerization", "Kubernetes Orchestration", "Microservices", "Auto-scaling"]
      },
      {
        title: "CI/CD Pipeline Setup",
        slug: "cicd-pipeline-setup",
        description: "Continuous integration and deployment",
        keywords: ["CI/CD", "continuous integration", "automated deployment"],
        features: ["Automated Testing", "Deployment Automation", "Pipeline Configuration", "Quality Gates"]
      },
      {
        title: "Infrastructure as Code",
        slug: "infrastructure-as-code",
        description: "IaC implementation and management",
        keywords: ["infrastructure as code", "IaC", "Terraform"],
        features: ["Terraform", "CloudFormation", "Ansible", "Version Control"]
      },
      {
        title: "Monitoring &amp; Logging",
        slug: "monitoring-logging",
        description: "Application and infrastructure monitoring",
        keywords: ["monitoring", "logging", "observability"],
        features: ["Real-time Monitoring", "Log Aggregation", "Alerting", "Performance Metrics"]
      },
      {
        title: "Security &amp; Compliance",
        slug: "security-compliance",
        description: "Cloud security and compliance",
        keywords: ["cloud security", "compliance", "data protection"],
        features: ["Security Audit", "Compliance Setup", "Access Control", "Data Encryption"]
      },
      {
        title: "Backup &amp; Disaster Recovery",
        slug: "backup-disaster-recovery",
        description: "Data backup and recovery solutions",
        keywords: ["backup", "disaster recovery", "data protection"],
        features: ["Automated Backups", "Recovery Planning", "Data Replication", "Business Continuity"]
      },
      {
        title: "Performance Optimization",
        slug: "performance-optimization",
        description: "Cloud performance optimization",
        keywords: ["performance optimization", "cloud optimization", "cost optimization"],
        features: ["Resource Optimization", "Cost Reduction", "Performance Tuning", "Scalability Planning"]
      }
    ]
  },
  {
            title: "Consulting &amp; Strategy",
    slug: "consulting-strategy",
    description: "Technology consulting and strategic planning",
    icon: "Users",
    clusters: [
      {
        title: "Digital Transformation",
        slug: "digital-transformation",
        description: "Complete digital transformation strategy",
        keywords: ["digital transformation", "business modernization", "technology strategy"],
        features: ["Strategy Development", "Technology Assessment", "Change Management", "Implementation Planning"]
      },
      {
        title: "Technology Consulting",
        slug: "technology-consulting",
        description: "Expert technology advisory services",
        keywords: ["technology consulting", "IT consulting", "technical advisory"],
        features: ["Technology Assessment", "Architecture Review", "Best Practices", "Technology Selection"]
      },
      {
        title: "Business Analysis",
        slug: "business-analysis",
        description: "Business requirements and process analysis",
        keywords: ["business analysis", "requirements gathering", "process improvement"],
        features: ["Requirements Analysis", "Process Mapping", "Gap Analysis", "Solution Design"]
      },
      {
        title: "Project Management",
        slug: "project-management",
        description: "Professional project management services",
        keywords: ["project management", "agile methodology", "scrum"],
        features: ["Agile Methodology", "Project Planning", "Risk Management", "Quality Assurance"]
      },
      {
        title: "Software Architecture",
        slug: "software-architecture",
        description: "Enterprise software architecture design",
        keywords: ["software architecture", "system design", "technical architecture"],
        features: ["System Architecture", "Scalability Design", "Integration Planning", "Performance Architecture"]
      },
      {
        title: "Code Review &amp; Audit",
        slug: "code-review-audit",
        description: "Code quality assessment and improvement",
        keywords: ["code review", "code audit", "quality assessment"],
        features: ["Code Quality Review", "Security Audit", "Performance Analysis", "Best Practices"]
      },
      {
        title: "Startup Consulting",
        slug: "startup-consulting",
        description: "Technology consulting for startups",
        keywords: ["startup consulting", "MVP development", "technology strategy"],
        features: ["MVP Strategy", "Technology Stack Selection", "Scaling Planning", "Investment Preparation"]
      },
      {
        title: "Enterprise Solutions",
        slug: "enterprise-solutions",
        description: "Large-scale enterprise consulting",
        keywords: ["enterprise consulting", "large-scale solutions", "enterprise architecture"],
        features: ["Enterprise Architecture", "Integration Strategy", "Scalability Planning", "Governance"]
      },
      {
        title: "Agile Transformation",
        slug: "agile-transformation",
        description: "Agile methodology implementation",
        keywords: ["agile transformation", "scrum implementation", "agile coaching"],
        features: ["Agile Assessment", "Process Implementation", "Team Training", "Continuous Improvement"]
      },
      {
        title: "Technical Training",
        slug: "technical-training",
        description: "Professional development and training",
        keywords: ["technical training", "team development", "skill enhancement"],
        features: ["Custom Training Programs", "Skill Assessment", "Hands-on Workshops", "Certification Preparation"]
      }
    ]
  },
  {
    title: "Outsourcing Services",
    slug: "outsourcing-services",
    description: "Professional development team outsourcing",
    icon: "Building",
    clusters: [
      {
        title: "Dedicated Development Teams",
        slug: "dedicated-development-teams",
        description: "Full-time dedicated development teams",
        keywords: ["dedicated teams", "development outsourcing", "remote teams"],
        features: ["Full-time Developers", "Team Management", "Scalable Resources", "Long-term Partnership"]
      },
      {
        title: "Staff Augmentation",
        slug: "staff-augmentation",
        description: "Skilled developers for your team",
        keywords: ["staff augmentation", "developer hiring", "team extension"],
        features: ["Skilled Developers", "Flexible Engagement", "Quick Onboarding", "Cost-effective Scaling"]
      },
      {
        title: "Offshore Development",
        slug: "offshore-development",
        description: "Offshore software development services",
        keywords: ["offshore development", "global teams", "cost-effective development"],
        features: ["Global Talent Pool", "Cost Optimization", "Time Zone Coverage", "Cultural Alignment"]
      },
      {
        title: "Nearshore Development",
        slug: "nearshore-development",
        description: "Nearshore development partnerships",
        keywords: ["nearshore development", "regional teams", "timezone alignment"],
        features: ["Time Zone Alignment", "Cultural Compatibility", "Easy Communication", "Quality Assurance"]
      },
      {
        title: "Project-Based Outsourcing",
        slug: "project-based-outsourcing",
        description: "Complete project outsourcing",
        keywords: ["project outsourcing", "complete solutions", "end-to-end development"],
        features: ["End-to-end Delivery", "Project Management", "Quality Guarantee", "Fixed Timeline"]
      },
      {
        title: "Technical Support Outsourcing",
        slug: "technical-support-outsourcing",
        description: "Outsourced technical support services",
        keywords: ["technical support", "help desk", "customer support"],
        features: ["24/7 Support", "Multi-channel Support", "Technical Expertise", "Escalation Management"]
      },
      {
        title: "Quality Assurance Outsourcing",
        slug: "quality-assurance-outsourcing",
        description: "Professional QA and testing services",
        keywords: ["QA outsourcing", "testing services", "quality assurance"],
        features: ["Comprehensive Testing", "Test Automation", "Quality Processes", "Bug Tracking"]
      },
      {
        title: "Maintenance &amp; Support",
        slug: "maintenance-support-outsourcing",
        description: "Ongoing maintenance and support",
        keywords: ["maintenance outsourcing", "application support", "ongoing support"],
        features: ["Application Maintenance", "Bug Fixes", "Performance Monitoring", "Feature Updates"]
      },
      {
        title: "Data Entry &amp; Processing",
        slug: "data-entry-processing",
        description: "Data management and processing services",
        keywords: ["data entry", "data processing", "data management"],
        features: ["Data Entry", "Data Validation", "Data Migration", "Quality Control"]
      },
      {
        title: "DevOps Outsourcing",
        slug: "devops-outsourcing",
        description: "DevOps and infrastructure management",
        keywords: ["DevOps outsourcing", "infrastructure management", "deployment services"],
        features: ["Infrastructure Management", "Deployment Automation", "Monitoring Setup", "Security Management"]
      }
    ]
  },
  {
            title: "Maintenance &amp; Support",
    slug: "maintenance-support",
    description: "Ongoing maintenance and technical support services",
    icon: "Settings",
    clusters: [
      {
        title: "Website Maintenance",
        slug: "website-maintenance",
        description: "Ongoing website maintenance and updates",
        keywords: ["website maintenance", "site updates", "web support"],
        features: ["Regular Updates", "Security Patches", "Content Updates", "Performance Monitoring"]
      },
      {
        title: "Application Support",
        slug: "application-support",
        description: "24/7 application support services",
        keywords: ["application support", "app maintenance", "technical support"],
        features: ["24/7 Support", "Bug Fixes", "Performance Optimization", "User Support"]
      },
      {
        title: "Database Maintenance",
        slug: "database-maintenance",
        description: "Database optimization and maintenance",
        keywords: ["database maintenance", "DB optimization", "data management"],
        features: ["Performance Tuning", "Backup Management", "Data Integrity", "Query Optimization"]
      },
      {
        title: "Security Updates",
        slug: "security-updates",
        description: "Security patches and vulnerability fixes",
        keywords: ["security updates", "vulnerability fixes", "security patches"],
        features: ["Security Patches", "Vulnerability Scanning", "Security Audits", "Compliance Updates"]
      },
      {
        title: "Performance Monitoring",
        slug: "performance-monitoring",
        description: "Continuous performance monitoring",
        keywords: ["performance monitoring", "application monitoring", "system monitoring"],
        features: ["Real-time Monitoring", "Performance Alerts", "Resource Optimization", "Uptime Monitoring"]
      },
      {
        title: "Bug Fixes &amp; Updates",
        slug: "bug-fixes-updates",
        description: "Regular bug fixes and feature updates",
        keywords: ["bug fixes", "software updates", "maintenance updates"],
        features: ["Bug Resolution", "Feature Updates", "Code Improvements", "Testing &amp; Validation"]
      },
      {
        title: "Backup &amp; Recovery",
        slug: "backup-recovery",
        description: "Data backup and disaster recovery",
        keywords: ["backup services", "disaster recovery", "data protection"],
        features: ["Automated Backups", "Recovery Testing", "Data Restoration", "Business Continuity"]
      },
      {
        title: "Version Control &amp; Updates",
        slug: "version-control-updates",
        description: "Software version management",
        keywords: ["version control", "software updates", "release management"],
        features: ["Version Management", "Release Planning", "Rollback Procedures", "Change Documentation"]
      },
      {
        title: "Technical Documentation",
        slug: "technical-documentation",
        description: "Comprehensive technical documentation",
        keywords: ["technical documentation", "user manuals", "API documentation"],
        features: ["User Manuals", "API Documentation", "Process Documentation", "Training Materials"]
      },
      {
        title: "Legacy System Support",
        slug: "legacy-system-support",
        description: "Support for legacy applications",
        keywords: ["legacy support", "old system maintenance", "legacy applications"],
        features: ["Legacy Maintenance", "Compatibility Updates", "Migration Planning", "System Modernization"]
      }
    ]
  },
  {
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description: "Comprehensive cloud infrastructure and platform services",
    icon: "Cloud",
    clusters: [
      {
        title: "Cloud Migration",
        slug: "cloud-migration",
        description: "Seamless migration to cloud platforms",
        keywords: ["cloud migration", "AWS migration", "Azure migration", "Google Cloud"],
        features: ["Assessment & Planning", "Data Migration", "Application Migration", "Performance Optimization"]
      },
      {
        title: "Cloud Infrastructure",
        slug: "cloud-infrastructure",
        description: "Scalable cloud infrastructure solutions",
        keywords: ["cloud infrastructure", "AWS", "Azure", "Google Cloud"],
        features: ["Auto-scaling", "Load Balancing", "High Availability", "Disaster Recovery"]
      }
    ]
  },
  {
    title: "Brand Identity Design",
    slug: "brand-identity-design",
    description: "Complete brand identity and visual design solutions",
    icon: "Palette",
    clusters: [
      {
        title: "Logo Design",
        slug: "logo-design",
        description: "Professional logo design services",
        keywords: ["logo design", "brand logo", "corporate logo"],
        features: ["Custom Design", "Multiple Concepts", "Vector Formats", "Brand Guidelines"]
      },
      {
        title: "Brand Guidelines",
        slug: "brand-guidelines",
        description: "Comprehensive brand style guides",
        keywords: ["brand guidelines", "style guide", "brand manual"],
        features: ["Color Palette", "Typography", "Logo Usage", "Brand Standards"]
      }
    ]
  },
  {
    title: "Inventory Management",
    slug: "inventory-management",
    description: "Advanced inventory management and tracking systems",
    icon: "Package",
    clusters: [
      {
        title: "Inventory Tracking",
        slug: "inventory-tracking",
        description: "Real-time inventory tracking solutions",
        keywords: ["inventory tracking", "stock management", "warehouse management"],
        features: ["Real-time Updates", "Barcode Scanning", "Stock Alerts", "Analytics"]
      },
      {
        title: "Warehouse Management",
        slug: "warehouse-management",
        description: "Complete warehouse management systems",
        keywords: ["warehouse management", "WMS", "inventory control"],
        features: ["Location Tracking", "Order Fulfillment", "Shipping Integration", "Reporting"]
      }
    ]
  },
  {
    title: "Mobile App Design",
    slug: "mobile-app-design",
    description: "User-centered mobile app design and UX solutions",
    icon: "Smartphone",
    clusters: [
      {
        title: "UI Design",
        slug: "ui-design",
        description: "Beautiful and intuitive mobile UI design",
        keywords: ["mobile UI design", "app design", "interface design"],
        features: ["Wireframing", "Visual Design", "Prototyping", "Design Systems"]
      },
      {
        title: "UX Design",
        slug: "ux-design",
        description: "User experience design for mobile apps",
        keywords: ["mobile UX", "user experience", "app UX"],
        features: ["User Research", "Usability Testing", "Information Architecture", "User Flows"]
      }
    ]
  },
  {
    title: "Next.js Development",
    slug: "nextjs-development",
    description: "Modern Next.js web application development",
    icon: "Code",
    clusters: [
      {
        title: "Next.js Apps",
        slug: "nextjs-apps",
        description: "Full-stack Next.js applications",
        keywords: ["Next.js", "React", "full-stack", "SSR"],
        features: ["Server-Side Rendering", "Static Generation", "API Routes", "Performance Optimization"]
      },
      {
        title: "Next.js E-commerce",
        slug: "nextjs-ecommerce",
        description: "E-commerce solutions with Next.js",
        keywords: ["Next.js e-commerce", "online store", "shopping cart"],
        features: ["Product Management", "Shopping Cart", "Payment Integration", "Order Processing"]
      }
    ]
  },
  {
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    description: "Comprehensive social media marketing strategies",
    icon: "Share2",
    clusters: [
      {
        title: "Social Media Strategy",
        slug: "social-media-strategy",
        description: "Strategic social media planning and execution",
        keywords: ["social media strategy", "social marketing", "digital marketing"],
        features: ["Platform Strategy", "Content Planning", "Audience Targeting", "Performance Tracking"]
      },
      {
        title: "Paid Social Advertising",
        slug: "paid-social-advertising",
        description: "Paid advertising on social media platforms",
        keywords: ["social media ads", "Facebook ads", "Instagram ads"],
        features: ["Ad Creation", "Targeting", "Budget Management", "ROI Tracking"]
      }
    ]
  },
  {
    title: "Android App Development",
    slug: "android-app-development",
    description: "Native Android application development",
    icon: "Smartphone",
    clusters: [
      {
        title: "Native Android",
        slug: "native-android",
        description: "Native Android app development with Kotlin/Java",
        keywords: ["Android development", "Kotlin", "Java", "native apps"],
        features: ["Kotlin/Java", "Material Design", "Google Play Store", "Android SDK"]
      },
      {
        title: "Android UI/UX",
        slug: "android-uiux",
        description: "Android-specific UI/UX design",
        keywords: ["Android UI", "Android UX", "Material Design"],
        features: ["Material Design", "Responsive Layouts", "Accessibility", "Performance"]
      }
    ]
  },
  {
    title: "WooCommerce Development",
    slug: "woocommerce-development",
    description: "Custom WooCommerce e-commerce solutions",
    icon: "ShoppingCart",
    clusters: [
      {
        title: "WooCommerce Customization",
        slug: "woocommerce-customization",
        description: "Custom WooCommerce themes and plugins",
        keywords: ["WooCommerce", "WordPress", "e-commerce", "customization"],
        features: ["Custom Themes", "Plugin Development", "Payment Integration", "Shipping Methods"]
      },
      {
        title: "WooCommerce Optimization",
        slug: "woocommerce-optimization",
        description: "Performance optimization for WooCommerce",
        keywords: ["WooCommerce optimization", "performance", "speed"],
        features: ["Speed Optimization", "SEO Enhancement", "Security Hardening", "Database Optimization"]
      }
    ]
  },
  {
    title: "Search Engine Optimization",
    slug: "search-engine-optimization",
    description: "Comprehensive SEO services for better search rankings",
    icon: "Search",
    clusters: [
      {
        title: "Technical SEO",
        slug: "technical-seo",
        description: "Technical SEO optimization and audits",
        keywords: ["technical SEO", "SEO audit", "search optimization"],
        features: ["Site Audit", "Technical Fixes", "Performance Optimization", "Schema Markup"]
      },
      {
        title: "Local SEO",
        slug: "local-seo",
        description: "Local search engine optimization",
        keywords: ["local SEO", "Google My Business", "local search"],
        features: ["Google My Business", "Local Citations", "Review Management", "Local Content"]
      }
    ]
  },
  {
    title: "Web Design",
    slug: "web-design",
    description: "Professional web design and development services",
    icon: "Monitor",
    clusters: [
      {
        title: "Custom Web Design",
        slug: "custom-web-design",
        description: "Custom website design and development",
        keywords: ["web design", "custom websites", "responsive design"],
        features: ["Custom Design", "Responsive Layout", "User Experience", "Modern Technologies"]
      },
      {
        title: "E-commerce Design",
        slug: "ecommerce-design",
        description: "E-commerce website design",
        keywords: ["e-commerce design", "online store design", "shopping website"],
        features: ["Product Showcase", "Shopping Cart", "Payment Integration", "Mobile Commerce"]
      }
    ]
  },
  {
    title: "Mobile App Maintenance",
    slug: "mobile-app-maintenance",
    description: "Ongoing mobile app maintenance and support",
    icon: "Settings",
    clusters: [
      {
        title: "App Updates",
        slug: "app-updates",
        description: "Regular app updates and maintenance",
        keywords: ["app updates", "mobile maintenance", "app support"],
        features: ["Bug Fixes", "Feature Updates", "Performance Optimization", "Security Updates"]
      },
      {
        title: "App Support",
        slug: "app-support",
        description: "24/7 mobile app support services",
        keywords: ["app support", "technical support", "user support"],
        features: ["24/7 Support", "User Assistance", "Technical Help", "Documentation"]
      }
    ]
  },
  {
    title: "Database Design",
    slug: "database-design",
    description: "Professional database design and optimization",
    icon: "Database",
    clusters: [
      {
        title: "Database Architecture",
        slug: "database-architecture",
        description: "Database architecture and design",
        keywords: ["database design", "database architecture", "data modeling"],
        features: ["Data Modeling", "Schema Design", "Performance Optimization", "Scalability"]
      },
      {
        title: "Database Optimization",
        slug: "database-optimization",
        description: "Database performance optimization",
        keywords: ["database optimization", "performance tuning", "query optimization"],
        features: ["Query Optimization", "Indexing", "Performance Monitoring", "Backup Strategies"]
      }
    ]
  },
  {
    title: "E-commerce Development",
    slug: "e-commerce-development",
    description: "Complete e-commerce platform development",
    icon: "ShoppingCart",
    clusters: [
      {
        title: "Custom E-commerce",
        slug: "custom-ecommerce",
        description: "Custom e-commerce platform development",
        keywords: ["custom e-commerce", "online store", "shopping platform"],
        features: ["Custom Platform", "Payment Integration", "Inventory Management", "Order Processing"]
      },
      {
        title: "E-commerce Integration",
        slug: "ecommerce-integration",
        description: "E-commerce platform integration",
        keywords: ["e-commerce integration", "payment gateway", "shipping integration"],
        features: ["Payment Gateways", "Shipping APIs", "Tax Calculation", "Analytics"]
      }
    ]
  },
  {
    title: "iOS App Development",
    slug: "ios-app-development",
    description: "Native iOS application development",
    icon: "Smartphone",
    clusters: [
      {
        title: "Native iOS",
        slug: "native-ios",
        description: "Native iOS app development with Swift",
        keywords: ["iOS development", "Swift", "native apps", "iPhone apps"],
        features: ["Swift Programming", "iOS SDK", "App Store", "Apple Guidelines"]
      },
      {
        title: "iOS UI/UX",
        slug: "ios-uiux",
        description: "iOS-specific UI/UX design",
        keywords: ["iOS UI", "iOS UX", "Apple Design"],
        features: ["Human Interface Guidelines", "Responsive Design", "Accessibility", "Performance"]
      }
    ]
  },
  {
    title: "Content Marketing",
    slug: "content-marketing",
    description: "Strategic content marketing and creation",
    icon: "FileText",
    clusters: [
      {
        title: "Content Strategy",
        slug: "content-strategy",
        description: "Content marketing strategy and planning",
        keywords: ["content marketing", "content strategy", "content creation"],
        features: ["Content Planning", "Audience Research", "Content Calendar", "Performance Tracking"]
      },
      {
        title: "Content Creation",
        slug: "content-creation",
        description: "Professional content creation services",
        keywords: ["content creation", "blog writing", "copywriting"],
        features: ["Blog Writing", "Copywriting", "Video Content", "Infographics"]
      }
    ]
  },
  {
    title: "IT Consulting",
    slug: "it-consulting",
    description: "Professional IT consulting and advisory services",
    icon: "Users",
    clusters: [
      {
        title: "Technology Consulting",
        slug: "technology-consulting",
        description: "Technology strategy and consulting",
        keywords: ["IT consulting", "technology consulting", "digital transformation"],
        features: ["Technology Assessment", "Strategy Planning", "Implementation Guidance", "ROI Analysis"]
      },
      {
        title: "Digital Transformation",
        slug: "digital-transformation",
        description: "Digital transformation consulting",
        keywords: ["digital transformation", "business transformation", "technology adoption"],
        features: ["Process Optimization", "Technology Adoption", "Change Management", "Training"]
      }
    ]
  },
  {
    title: "Custom Software Development",
    slug: "custom-software-development",
    description: "Bespoke software development solutions",
    icon: "Code",
    clusters: [
      {
        title: "Custom Applications",
        slug: "custom-applications",
        description: "Custom software application development",
        keywords: ["custom software", "bespoke development", "enterprise software"],
        features: ["Requirements Analysis", "Custom Development", "Testing", "Deployment"]
      },
      {
        title: "Enterprise Software",
        slug: "enterprise-software",
        description: "Enterprise-level software solutions",
        keywords: ["enterprise software", "business software", "corporate applications"],
        features: ["Scalable Architecture", "Security", "Integration", "Support"]
      }
    ]
  },
  {
    title: "Payment Gateway Integration",
    slug: "payment-gateway-integration",
    description: "Secure payment gateway integration services",
    icon: "CreditCard",
    clusters: [
      {
        title: "Payment Integration",
        slug: "payment-integration",
        description: "Payment gateway integration and setup",
        keywords: ["payment gateway", "payment integration", "online payments"],
        features: ["Multiple Gateways", "Security Compliance", "Testing", "Documentation"]
      },
      {
        title: "Payment Security",
        slug: "payment-security",
        description: "Payment security and compliance",
        keywords: ["payment security", "PCI compliance", "fraud protection"],
        features: ["PCI Compliance", "Fraud Protection", "Encryption", "Audit Support"]
      }
    ]
  },
  {
    title: "Custom E-commerce Platforms",
    slug: "custom-e-commerce-platforms",
    description: "Custom e-commerce platform development",
    icon: "ShoppingCart",
    clusters: [
      {
        title: "Platform Development",
        slug: "platform-development",
        description: "Custom e-commerce platform development",
        keywords: ["custom e-commerce", "platform development", "online marketplace"],
        features: ["Custom Platform", "Multi-vendor Support", "Advanced Features", "Scalability"]
      },
      {
        title: "Marketplace Development",
        slug: "marketplace-development",
        description: "Online marketplace development",
        keywords: ["marketplace", "multi-vendor", "B2B platform"],
        features: ["Vendor Management", "Commission System", "Escrow Services", "Analytics"]
      }
    ]
  },
  {
    title: "Prototyping",
    slug: "prototyping",
    description: "Rapid prototyping and MVP development",
    icon: "Zap",
    clusters: [
      {
        title: "Rapid Prototyping",
        slug: "rapid-prototyping",
        description: "Quick prototype development",
        keywords: ["prototyping", "MVP", "rapid development"],
        features: ["Quick Development", "User Testing", "Iteration", "Feedback Integration"]
      },
      {
        title: "MVP Development",
        slug: "mvp-development",
        description: "Minimum viable product development",
        keywords: ["MVP", "minimum viable product", "startup development"],
        features: ["Core Features", "User Validation", "Market Testing", "Iteration"]
      }
    ]
  },
  {
    title: "API Development",
    slug: "api-development",
    description: "Professional API development and integration",
    icon: "Code",
    clusters: [
      {
        title: "REST APIs",
        slug: "rest-apis",
        description: "RESTful API development",
        keywords: ["REST API", "API development", "web services"],
        features: ["RESTful Design", "Documentation", "Testing", "Versioning"]
      },
      {
        title: "GraphQL APIs",
        slug: "graphql-apis",
        description: "GraphQL API development",
        keywords: ["GraphQL", "API development", "data querying"],
        features: ["GraphQL Schema", "Resolvers", "Type Safety", "Performance"]
      }
    ]
  },
  {
    title: "React Development",
    slug: "react-development",
    description: "Modern React application development",
    icon: "Code",
    clusters: [
      {
        title: "React Applications",
        slug: "react-applications",
        description: "Custom React application development",
        keywords: ["React", "React.js", "frontend development"],
        features: ["Component Architecture", "State Management", "Performance Optimization", "Testing"]
      },
      {
        title: "React Native",
        slug: "react-native",
        description: "Cross-platform mobile development with React Native",
        keywords: ["React Native", "mobile development", "cross-platform"],
        features: ["Cross-platform", "Native Performance", "Code Reusability", "Hot Reloading"]
      }
    ]
  },
  {
    title: "Shopify Development",
    slug: "shopify-development",
    description: "Custom Shopify store development and customization",
    icon: "ShoppingCart",
    clusters: [
      {
        title: "Shopify Customization",
        slug: "shopify-customization",
        description: "Custom Shopify theme and app development",
        keywords: ["Shopify", "e-commerce", "custom themes"],
        features: ["Custom Themes", "App Development", "Payment Integration", "Analytics"]
      },
      {
        title: "Shopify Migration",
        slug: "shopify-migration",
        description: "Migration to Shopify platform",
        keywords: ["Shopify migration", "platform migration", "e-commerce migration"],
        features: ["Data Migration", "Theme Customization", "App Integration", "Training"]
      }
    ]
  },
  {
    title: "Pay Per Click Advertising",
    slug: "pay-per-click-advertising",
    description: "Strategic PPC advertising campaigns",
    icon: "Target",
    clusters: [
      {
        title: "Google Ads",
        slug: "google-ads",
        description: "Google Ads campaign management",
        keywords: ["Google Ads", "PPC", "paid search"],
        features: ["Keyword Research", "Ad Creation", "Bid Management", "Performance Tracking"]
      },
      {
        title: "Social Media Ads",
        slug: "social-media-ads",
        description: "Social media advertising campaigns",
        keywords: ["social media ads", "Facebook ads", "Instagram ads"],
        features: ["Platform Selection", "Audience Targeting", "Ad Creation", "ROI Optimization"]
      }
    ]
  },
  {
    title: "Local SEO",
    slug: "local-seo",
    description: "Local search engine optimization services",
    icon: "MapPin",
    clusters: [
      {
        title: "Google My Business",
        slug: "google-my-business",
        description: "Google My Business optimization",
        keywords: ["Google My Business", "local SEO", "local search"],
        features: ["Profile Optimization", "Review Management", "Local Citations", "Analytics"]
      },
      {
        title: "Local Citations",
        slug: "local-citations",
        description: "Local business citation management",
        keywords: ["local citations", "NAP consistency", "directory listings"],
        features: ["Citation Building", "NAP Consistency", "Directory Management", "Monitoring"]
      }
    ]
  },
  {
    title: "WordPress Development",
    slug: "wordpress-development",
    description: "Custom WordPress development and customization",
    icon: "Monitor",
    clusters: [
      {
        title: "Custom WordPress",
        slug: "custom-wordpress",
        description: "Custom WordPress theme and plugin development",
        keywords: ["WordPress", "custom themes", "plugin development"],
        features: ["Custom Themes", "Plugin Development", "Performance Optimization", "Security"]
      },
      {
        title: "WordPress Maintenance",
        slug: "wordpress-maintenance",
        description: "WordPress maintenance and support",
        keywords: ["WordPress maintenance", "updates", "security"],
        features: ["Regular Updates", "Security Monitoring", "Backup Management", "Performance"]
      }
    ]
  },
  {
    title: "Custom Web Development",
    slug: "custom-web-development",
    description: "Bespoke web development solutions",
    icon: "Code",
    clusters: [
      {
        title: "Custom Websites",
        slug: "custom-websites",
        description: "Custom website development",
        keywords: ["custom web development", "bespoke websites", "web applications"],
        features: ["Custom Design", "Responsive Development", "Performance Optimization", "SEO"]
      },
      {
        title: "Web Applications",
        slug: "web-applications",
        description: "Custom web application development",
        keywords: ["web applications", "custom software", "business applications"],
        features: ["Custom Development", "Database Integration", "API Development", "Security"]
      }
    ]
  },
  {
    title: "Email Marketing",
    slug: "email-marketing",
    description: "Strategic email marketing campaigns",
    icon: "Mail",
    clusters: [
      {
        title: "Email Campaigns",
        slug: "email-campaigns",
        description: "Email marketing campaign management",
        keywords: ["email marketing", "email campaigns", "newsletter"],
        features: ["Campaign Design", "List Management", "Automation", "Analytics"]
      },
      {
        title: "Email Automation",
        slug: "email-automation",
        description: "Automated email marketing workflows",
        keywords: ["email automation", "workflows", "drip campaigns"],
        features: ["Workflow Design", "Trigger Automation", "Personalization", "Performance Tracking"]
      }
    ]
  },
  {
    title: "UI/UX Design",
    slug: "uiux-design",
    description: "User interface and user experience design",
    icon: "Palette",
    clusters: [
      {
        title: "User Interface Design",
        slug: "user-interface-design",
        description: "Professional UI design services",
        keywords: ["UI design", "interface design", "visual design"],
        features: ["Wireframing", "Visual Design", "Prototyping", "Design Systems"]
      },
      {
        title: "User Experience Design",
        slug: "user-experience-design",
        description: "User experience design and research",
        keywords: ["UX design", "user experience", "usability"],
        features: ["User Research", "Usability Testing", "Information Architecture", "User Flows"]
      }
    ]
  },
  {
    title: "React Native Development",
    slug: "react-native-development",
    description: "Cross-platform mobile development with React Native",
    icon: "Smartphone",
    clusters: [
      {
        title: "React Native Apps",
        slug: "react-native-apps",
        description: "Cross-platform mobile app development",
        keywords: ["React Native", "mobile development", "cross-platform"],
        features: ["Cross-platform", "Native Performance", "Code Reusability", "Hot Reloading"]
      },
      {
        title: "React Native UI",
        slug: "react-native-ui",
        description: "React Native UI/UX design",
        keywords: ["React Native UI", "mobile UI", "cross-platform UI"],
        features: ["Platform-specific Design", "Responsive Layouts", "Performance", "Accessibility"]
      }
    ]
  },
  {
    title: "Progressive Web Apps",
    slug: "progressive-web-apps",
    description: "Modern progressive web application development",
    icon: "Globe",
    clusters: [
      {
        title: "PWA Development",
        slug: "pwa-development",
        description: "Progressive web app development",
        keywords: ["PWA", "progressive web apps", "web apps"],
        features: ["Offline Functionality", "Push Notifications", "App-like Experience", "Performance"]
      },
      {
        title: "PWA Optimization",
        slug: "pwa-optimization",
        description: "PWA performance optimization",
        keywords: ["PWA optimization", "performance", "offline support"],
        features: ["Performance Optimization", "Offline Support", "Caching Strategies", "Mobile Optimization"]
      }
    ]
  },
  {
    title: "DevOps Services",
    slug: "devops-services",
    description: "DevOps automation and infrastructure services",
    icon: "Settings",
    clusters: [
      {
        title: "CI/CD Pipeline",
        slug: "cicd-pipeline",
        description: "Continuous integration and deployment",
        keywords: ["CI/CD", "DevOps", "automation", "deployment"],
        features: ["Automated Testing", "Deployment Automation", "Monitoring", "Rollback"]
      },
      {
        title: "Infrastructure as Code",
        slug: "infrastructure-as-code",
        description: "Infrastructure automation and management",
        keywords: ["infrastructure as code", "IaC", "automation", "cloud infrastructure"],
        features: ["Terraform", "Ansible", "CloudFormation", "Monitoring"]
      }
    ]
  }
];

// Dynamically extend with a catch-all pillar to reach 100+ services without touching existing pillars
// We slugify extra service names to create cluster routes under a single pillar
const extraPillar: PillarPage = {
  title: 'Additional Professional Services',
  slug: 'professional-services',
  description: 'Specialized, high-impact services across AI, data, cloud, security, growth, and operations',
  icon: 'Layers',
  clusters: extraServiceNames.map((name) => ({
    title: name,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''),
    description: `${name} by senior specialists with proven playbooks and measurable outcomes`,
    keywords: [
      name,
      `${name} services`,
      `${name} consulting`,
      `${name} solutions`,
      `${name} agency`
    ],
    features: [
      'Senior Expertise',
      'Battle-tested Playbooks',
      'Outcome-driven Delivery',
      'Security & Compliance'
    ]
  }))
};

// Utility: generate semantic/LSI keyword variants from a service name
function generateKeywordsFromName(name: string): string[] {
  const base = name.toLowerCase();
  const core = [
    base,
    `${base} services`,
    `${base} consulting`,
    `${base} solutions`,
    `${base} experts`,
    `${base} agency`,
    `${base} company`,
    `${base} developers`,
    `${base} implementation`,
    `${base} best practices`,
  ];
  const generic: string[] = [
    'software development', 'web development', 'mobile app development', 'cloud', 'devops',
    'performance optimization', 'accessibility', 'SEO', 'programmatic SEO', 'schema markup',
    'analytics', 'CRO', 'design systems', 'user experience', 'scalability', 'security',
    'compliance', 'enterprise', 'startup', 'B2B', 'consulting'
  ];
  return Array.from(new Set([...core, ...generic]));
}

function enrichPillars(pillars: PillarPage[]): PillarPage[] {
  return pillars.map((pillar) => ({
    ...pillar,
    clusters: pillar.clusters.map((c) => ({
      ...c,
      keywords: Array.from(new Set([...(c.keywords || []), ...generateKeywordsFromName(c.title)]))
    }))
  }));
}

// Export an extended, enriched structure while preserving original export name
export const extendedSiteStructure: PillarPage[] = [...siteStructure, extraPillar];
export const enrichedSiteStructure: PillarPage[] = enrichPillars(extendedSiteStructure);

export const getServiceBySlug = (pillarSlug: string, clusterSlug?: string) => {
  const pillar = (enrichedSiteStructure).find(p => p.slug === pillarSlug);
  if (!pillar) return null;
  
  if (clusterSlug) {
    const cluster = pillar.clusters.find(c => c.slug === clusterSlug);
    return cluster ? { pillar, cluster } : null;
  }
  
  return { pillar };
};

export const getAllSlugs = () => {
  const slugs: string[] = [];
  
  (enrichedSiteStructure).forEach(pillar => {
    slugs.push(pillar.slug);
    pillar.clusters.forEach(cluster => {
      slugs.push(`${pillar.slug}/${cluster.slug}`);
    });
  });
  
  return slugs;
};