export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  heroHeadline: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  deliverables: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  filterCategory: 'websites' | 'applications' | 'ai' | 'automation' | 'business';
  shortDesc: string;
  fullDesc: string;
  clientType: string;
  challenge: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  image: string;
  liveUrl?: string;
  isSampleOrConcept?: boolean;
}

export interface TestimonialPlaceholder {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  clientRole: string;
  industry: string;
  rating?: number;
  projectType?: string;
  avatarInitials?: string;
  avatarColor?: string;
  verified?: boolean;
  isPlaceholderNote?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceRequired: string;
  projectBudget: string;
  projectDetails: string;
}

