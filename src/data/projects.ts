import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    slug: 'interior-design-website',
    title: 'Interior Design Website',
    category: 'Website Development',
    filterCategory: 'websites',
    shortDesc: 'A premium digital experience for an interior design business, showcasing its portfolio, services, and brand identity.',
    fullDesc: 'A bespoke brand showcase built for a high-end interior design studio. The digital experience emphasizes high-definition architectural imagery, smooth micro-interactions, responsive typography, and an interactive consultation request workflow that conveys luxury and craftsmanship.',
    clientType: 'Boutique Interior Architecture Studio',
    challenge: 'The client needed an immersive digital portfolio that showcased large architectural photography with zero compromise on mobile performance, load speed, or brand sophistication.',
    solution: 'Designed and engineered a dark, minimalist showcase leveraging Next.js, responsive image pipelines, and Framer Motion transitions. Integrated a streamlined appointment scheduler and project filter system.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel CDN'],
    keyFeatures: [
      'High-fidelity editorial portfolio gallery',
      'Dynamic project filtering by residential & commercial spaces',
      'Custom consultation questionnaire flow',
      'Sub-second image rendering on mobile networks'
    ],
    image: '/assets/projects/interior-design/preview.jpeg',
    liveUrl: 'https://elite-interiors-nine.vercel.app',
    isSampleOrConcept: false
  },
  {
    id: 'proj-2',
    slug: 'ecommerce-platform',
    title: 'E-commerce Website',
    category: 'E-commerce Development',
    filterCategory: 'websites',
    shortDesc: 'A modern online shopping experience designed to present products and create a smooth customer journey.',
    fullDesc: 'A modern, high-converting retail storefront designed with friction-free navigation, instant visual filters, synchronized cart states, and seamless checkout integration. Engineered to minimize abandoned carts and maximize customer trust.',
    clientType: 'Contemporary Lifestyle & Apparel Retailer',
    challenge: 'Legacy e-commerce templates suffered from slow load times on mobile devices, cluttered category navigation, and high checkout drop-off rates.',
    solution: 'Engineered a headless e-commerce storefront with lightning-fast client-side routing, automated image compression, persistent slide-out shopping drawer, and single-page checkout.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Headless Storefront'],
    keyFeatures: [
      'Instant faceted search and category filtering',
      'Slide-over real-time interactive cart drawer',
      'Stripe & local payment gateway integration',
      'Fully responsive mobile checkout experience'
    ],
    image: '/assets/projects/ecommerce/preview.jpeg',
    liveUrl: 'https://aureli-ecomerce.vercel.app',
    isSampleOrConcept: false
  },
  {
    id: 'proj-3',
    slug: 'mobile-application',
    title: 'Mobile Application',
    category: 'App Development',
    filterCategory: 'applications',
    shortDesc: 'A mobile application concept designed to deliver useful functionality through an intuitive user experience.',
    fullDesc: 'An intuitive cross-platform mobile application concept designed for seamless daily scheduling, task tracking, and metric monitoring. Features fluid gestures, offline-first data caching, and native biometric security.',
    clientType: 'Productivity & Digital Workflow Platform',
    challenge: 'Users struggled with overcomplicated mobile interfaces that lacked offline access and took too many taps to log basic routine actions.',
    solution: 'Constructed a minimalist, gesture-driven mobile interface featuring one-tap action buttons, local-first SQLite caching, background cloud sync, and customizable widget views.',
    technologies: ['React Native', 'TypeScript', 'Tailwind (NativeWind)', 'SQLite', 'Firebase Cloud Messaging'],
    keyFeatures: [
      'Offline-first architecture with instant cloud sync',
      'Gesture-controlled interaction and haptic feedback',
      'Biometric authentication (FaceID / Fingerprint)',
      'Smart scheduled push notifications'
    ],
    image: '/assets/projects/mobile-app/preview.jpeg',
    liveUrl: 'https://expo.dev/accounts/hari0324/projects/haven/builds/95902460-227f-406b-bd4f-7bcb9adec252',
    isSampleOrConcept: false
  },
  {
    id: 'proj-4',
    slug: 'ai-assistant',
    title: 'AI Assistant',
    category: 'AI Solutions',
    filterCategory: 'ai',
    shortDesc: 'An intelligent assistant concept designed to interact with users and support business-related tasks.',
    fullDesc: 'A specialized conversational AI agent capable of indexing company knowledge bases, answering multi-part customer queries, generating draft documents, and initiating automated downstream operations.',
    clientType: 'B2B Professional Services Firm',
    challenge: 'Staff spent hundreds of hours each month answering repetitive client inquiries and manually locating policy information across fragmented PDF archives.',
    solution: 'Implemented an intelligent RAG assistant utilizing vector embeddings and an intuitive web chat interface with source citation, rate limiting, and human escalation triggers.',
    technologies: ['OpenAI API', 'Python / FastAPI', 'LangChain', 'Vector DB', 'React UI'],
    keyFeatures: [
      'Document retrieval with clickable source attribution',
      'Multi-modal prompt capabilities for document analysis',
      'Enterprise safety guardrails and prompt sanitization',
      'Exportable conversation summaries and action items'
    ],
    image: '/assets/projects/ai-assistant/preview.jpeg',
    liveUrl: 'https://project-1-ai-assistant.vercel.app/',
    isSampleOrConcept: false
  },
  {
    id: 'proj-5',
    slug: 'business-automation',
    title: 'Business Automation',
    category: 'Automation Solutions',
    filterCategory: 'automation',
    shortDesc: 'An automation solution designed to reduce repetitive work and streamline business processes.',
    fullDesc: 'An intelligent multi-channel automation system that bridges WhatsApp Business API, CRM leads, invoice generation, and customer notification cycles into an autonomous, 24/7 background pipeline.',
    clientType: 'Rapid-Growth Service & Logistics Provider',
    challenge: 'Incoming leads through messaging channels were routinely missed outside business hours, leading to lost customer accounts and delayed order dispatching.',
    solution: 'Architected an automated webhook ecosystem using n8n and official WhatsApp Cloud API, enabling automated inquiry triage, instant quote calculation, and CRM updating.',
    technologies: ['n8n Workflow Engine', 'WhatsApp Cloud API', 'Node.js', 'Google Workspace API', 'Webhooks'],
    keyFeatures: [
      'Instant automated replies to WhatsApp customer inquiries',
      'Direct synchronization into CRM and sales spreadsheets',
      'Trigger-based PDF invoice generation & delivery',
      'Automated reminder cascades before scheduled meetings'
    ],
    image: '/assets/projects/automation/preview.jpeg',
    isSampleOrConcept: true
  },
  {
    id: 'proj-6',
    slug: 'business-management-system',
    title: 'Business Management System',
    category: 'Business Management',
    filterCategory: 'business',
    shortDesc: 'A digital management solution designed to organize business information, workflows, and operational activities.',
    fullDesc: 'A centralized enterprise management dashboard tailored to streamline project pipelines, inventory levels, billing milestones, and team performance metrics in a single secure cloud interface.',
    clientType: 'Multi-Location Commercial Operations Firm',
    challenge: 'Operating across disparate disconnected spreadsheets caused discrepancies in billing figures, delayed inventory orders, and opaque team workload visibility.',
    solution: 'Designed and deployed a unified management application with role-based access control, interactive analytics charts, activity logging, and automated weekly status reports.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Recharts'],
    keyFeatures: [
      'Unified management dashboard with live operational KPIs',
      'Role-based permissions (Executive, Manager, Field Staff)',
      'Automated pipeline stage tracking & notifications',
      'One-click export of financial summaries and CSV audits'
    ],
    image: '/assets/projects/business-management/preview.jpeg',
    liveUrl: 'https://e-commence-business-dashboard.vercel.app/',
    isSampleOrConcept: false
  }
];

