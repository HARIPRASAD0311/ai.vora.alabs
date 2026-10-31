import { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    slug: 'web-development',
    title: 'Website Development',
    shortDesc: 'Build powerful digital experiences with modern, responsive, and high-performing websites tailored to your business.',
    fullDesc: 'We architect and build bespoke websites and web applications that combine high-end aesthetic appeal, lighting-fast performance, and conversion-focused UX. Whether launching a bold brand presence or scaling a web platform, our solutions are built to impress and convert.',
    heroHeadline: 'Websites That Build Brands and Drive Business.',
    iconName: 'Globe',
    features: [
      'Custom Responsive Architecture',
      'Modern Jamstack & Server-Side Rendering',
      'SEO & Performance Optimization (95+ Core Web Vitals)',
      'Headless CMS & Content Management',
      'Interactive Micro-Animations & Clean Code',
      'Continuous Security & Maintenance'
    ],
    benefits: [
      'Elevated brand credibility and international polish',
      'Lightning-fast page load speeds across all devices',
      'Seamless lead conversion and enquiry capture',
      'Scalable codebase built for effortless future expansion'
    ],
    useCases: [
      'Corporate & Technology Brand Websites',
      'Creative Agency & Architecture Portfolios',
      'High-Converting Product Launch Landing Pages',
      'Feature-Rich E-Commerce Stores & Catalogs',
      'Custom Client Portals & Web Platforms'
    ],
    deliverables: [
      'Fully responsive multi-page web application',
      'Semantic SEO markup and meta tags',
      'Content management setup and documentation',
      'Cross-browser testing on desktop, tablet, and mobile'
    ]
  },
  {
    id: 'app-dev',
    slug: 'app-development',
    title: 'App Development',
    shortDesc: 'Turn your ideas into intuitive mobile applications designed to connect with customers and simplify everyday operations.',
    fullDesc: 'From early concept wireframes to production deployment on Google Play and Apple App Store, we design and develop native and cross-platform mobile apps engineered for fluid gestures, offline responsiveness, and secure backend synchronization.',
    heroHeadline: 'Powerful Mobile Experiences. Built Around Your Ideas.',
    iconName: 'Smartphone',
    features: [
      'Cross-Platform Development (React Native / Flutter)',
      'Native Android & iOS Engineering',
      'Intuitive UI/UX Design & Human Interface Guidelines',
      'Secure Authentication & Cloud Synchronization',
      'Push Notifications & Real-Time Messaging',
      'App Store & Play Store Publishing Support'
    ],
    benefits: [
      'Direct, continuous touchpoint with your active customer base',
      'Streamlined on-the-go operations for your field staff',
      'Reduced friction with seamless biometric login and native payments',
      'Consistent experience across diverse screen sizes'
    ],
    useCases: [
      'Customer-facing booking and e-commerce apps',
      'Internal team dispatch and inventory apps',
      'Real-time communication and service request tools',
      'Subscription and digital product applications'
    ],
    deliverables: [
      'Production-ready iOS and Android builds',
      'Secure REST / GraphQL backend APIs',
      'App Store assets, screenshots, and submission guidance',
      'Comprehensive maintenance and OS update support'
    ]
  },
  {
    id: 'ai-solutions',
    slug: 'ai-solutions',
    title: 'AI Agents & Assistants',
    shortDesc: 'Create intelligent AI assistants that understand tasks, interact with users, and support your business operations.',
    fullDesc: 'We build contextual AI agents that go far beyond standard scripted chatbots. Powered by modern LLMs (OpenAI, Anthropic, Google Gemini) and tailored Retrieval-Augmented Generation (RAG), our agents read your company knowledge, solve user queries, and trigger background actions.',
    heroHeadline: 'Bring Intelligence Into Your Business.',
    iconName: 'Bot',
    features: [
      'Custom LLM Integration & Fine-Tuning',
      'RAG (Retrieval-Augmented Generation) on Proprietary Data',
      'Autonomous Multi-Step AI Agents',
      'Context-Aware Customer Support Assistants',
      'Internal Knowledge Base Search Engines',
      'Security-Guarded AI Deployment'
    ],
    benefits: [
      '24/7 instantaneous customer support without staffing bottlenecks',
      'Instant access to internal documents, policies, and product details',
      'Autonomous task execution like scheduling and triage',
      'Lower support overhead with human-in-the-loop escalation'
    ],
    useCases: [
      'Customer support and onboarding concierges',
      'Internal document summarization and research assistants',
      'Sales qualification and meeting booking agents',
      'Automated code and data extraction assistants'
    ],
    deliverables: [
      'Embedded chat interface or headless API endpoints',
      'Knowledge ingestion pipeline for PDFs, docs, and databases',
      'Prompt templates, safety guardrails, and latency optimization',
      'Analytics dashboard tracking user queries and resolution rate'
    ]
  },
  {
    id: 'automation',
    slug: 'automation',
    title: 'Automation',
    shortDesc: 'Automate repetitive workflows, customer interactions, and business communication with intelligent automation systems.',
    fullDesc: 'Eliminate manual bottlenecks with end-to-end automation. We orchestrate reliable workflows between your CRM, messaging apps (WhatsApp Cloud API, Telegram), email, spreadsheets, and databases using modern workflow engines like n8n, Make, and custom webhooks.',
    heroHeadline: 'Automate Workflows. Focus on Growth.',
    iconName: 'Zap',
    features: [
      'Official WhatsApp Cloud API Setup & Automation',
      'Lead Qualification & Instant WhatsApp Auto-Response',
      'Cross-Tool Sync (CRM, Google Sheets, Slack, Stripe)',
      'Automated Invoicing & Reminder Sequences',
      'Error Monitoring & Alert Fail-Safes',
      'n8n / Custom Webhook Orchestration'
    ],
    benefits: [
      'Sub-minute response times to inbound customer inquiries',
      'Zero manual copy-pasting across disparate software tools',
      'Fewer human errors in billing and order processing',
      'Frees your team to focus exclusively on high-value strategy'
    ],
    useCases: [
      'Automated WhatsApp appointment confirmations and reminders',
      'E-commerce order tracking alerts and status updates',
      'Inbound lead capture syncing instantly into CRM and sales channels',
      'Weekly automated business summary reports pushed to management'
    ],
    deliverables: [
      'Configured automation pipelines with full error-handling',
      'WhatsApp Business API account verification assistance',
      'Interactive workflow testing and sandbox staging',
      'Visual process documentation for easy team handover'
    ]
  },
  {
    id: 'biz-mgmt',
    slug: 'business-management',
    title: 'Business Management Solutions',
    shortDesc: 'Streamline your business operations with custom management systems, dashboards, and digital workflows.',
    fullDesc: 'Off-the-shelf software rarely fits your exact business workflows. We design custom ERPs, internal portals, order management dashboards, and inventory systems engineered around your specific operational terminology, permissions, and metrics.',
    heroHeadline: 'Manage Smarter. Operate Better.',
    iconName: 'LayoutDashboard',
    features: [
      'Custom Operational Dashboards & Real-Time KPIs',
      'Role-Based Access Control (RBAC) & Team Permissions',
      'Order, Inventory & Client Pipeline Management',
      'Automated PDF Report & Invoice Generation',
      'Multi-Branch & Multi-User Support',
      'Secure Cloud Database Architecture'
    ],
    benefits: [
      'One unified source of truth for your business numbers',
      'Eliminates disorganized spreadsheets and scattered emails',
      'Role-level access to safeguard sensitive commercial data',
      'Tailored exactly to your operational steps, not generic software limits'
    ],
    useCases: [
      'Service agencies tracking client deliverables and billable milestones',
      'Logistics and manufacturing order tracking portals',
      'Franchise and retail inventory monitoring dashboards',
      'Internal team task allocation and performance tracking'
    ],
    deliverables: [
      'Dedicated web-based management portal',
      'Secure PostgreSQL / relational database setup',
      'Automated data backup routines and audit logs',
      'Staff walkthrough video and training documentation'
    ]
  },
  {
    id: 'integration-maint',
    slug: 'technical-integration',
    title: 'Technical Integration & Maintenance',
    shortDesc: 'Connect your digital tools, integrate essential systems, and keep your technology running smoothly.',
    fullDesc: 'Modern businesses depend on an ecosystem of tools—payment processors, shipping providers, legacy databases, and marketing suites. We build robust API bridges, manage continuous cloud environments, and safeguard systems with regular patching and health monitoring.',
    heroHeadline: 'Keep Your Technology Synchronized & Resilient.',
    iconName: 'Cpu',
    features: [
      'Custom API Development & Legacy Bridge Systems',
      'Payment Gateway Integration (Stripe, PayPal, Local Providers)',
      'Cloud Server Setup, SSL & DNS Management',
      'Automated Uptime Monitoring & Error Alerts',
      'Routine Security Patches & Version Upgrades',
      'Database Optimization & Backup Auditing'
    ],
    benefits: [
      'Prevents costly system downtime and broken checkout flows',
      'Ensures customer and business data flows securely across tools',
      'Proactive detection of issues before customers notice',
      'Extends the lifespan and stability of your digital infrastructure'
    ],
    useCases: [
      'Migrating on-premise data to secure cloud instances',
      'Connecting custom storefronts to regional accounting systems',
      'Setting up automated daily failover backups',
      'Ongoing technical maintenance retainer for peace of mind'
    ],
    deliverables: [
      'Documented API connectors and endpoints',
      'Uptime monitoring alerts connected to your channel of choice',
      'Quarterly system audit and health score report',
      'Guaranteed emergency resolution turnaround'
    ]
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDesc: 'Strengthen your online presence, reach the right audience, and create opportunities for sustainable business growth.',
    fullDesc: 'A world-class digital product requires high-impact audience outreach. We craft cohesive digital marketing strategies, high-conversion visual creatives, targeted search campaigns, and organic content calendars designed to turn casual browsers into loyal brand advocates.',
    heroHeadline: 'Build Your Presence. Reach the Right Audience.',
    iconName: 'TrendingUp',
    features: [
      'Data-Driven Growth & Acquisition Strategy',
      'Search Engine Optimization (Technical & On-Page)',
      'Conversion Rate Optimization (CRO) & Funnel Audits',
      'Targeted Digital Ad Campaign Architecture',
      'Transparent Analytics & Attribution Reports'
    ],
    benefits: [
      'Predictable flow of qualified buyer inquiries',
      'Cohesive visual branding that commands premium pricing',
      'Higher return on advertising spend through scientific testing',
      'Sustainable compounding organic search ranking gains'
    ],
    useCases: [
      'New product or business launch campaign rollouts',
      'Revamping underperforming lead generation funnels',
      'High-intent B2B search acquisition'
    ],
    deliverables: [
      'Tailored growth roadmap and campaign setup',
      'Tracking pixel and Google Analytics 4 conversion setup',
      'Performance audit and optimization framework'
    ]
  },
  {
    id: 'content-social',
    slug: 'content-social-marketing',
    title: 'Content & Social Media Marketing',
    shortDesc: 'Drive brand authority and community engagement through strategic storytelling, viral creatives, and organic channel distribution.',
    fullDesc: 'We develop magnetic social presence and authoritative multimedia content tailored to resonate across modern channels including LinkedIn, Instagram, X, and YouTube.',
    heroHeadline: 'Ignite Conversations. Cultivate Brand Advocates.',
    iconName: 'Share2',
    features: [
      'High-Impact Social Media Creatives & Motion Visuals',
      'Strategic Organic Content Calendars & Copywriting',
      'Brand Identity & Narrative Development',
      'Multi-Channel Distribution & Community Engagement',
      'Viral Short-Form Video Strategy'
    ],
    benefits: [
      'Elevated industry authority and thought leadership',
      'Authentic community growth and repeat brand loyalty',
      'Consistent, high-aesthetic organic social presence',
      'Direct pipeline from social attention to customer action'
    ],
    useCases: [
      'Brand authority on LinkedIn & Instagram',
      'Product launch teaser and visual campaigns',
      'Founder and executive social presence management'
    ],
    deliverables: [
      'Monthly branded visual asset suite and motion graphics',
      'Multi-platform editorial publishing schedule',
      'Channel growth and audience sentiment report'
    ]
  }
];

