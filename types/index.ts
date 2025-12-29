export interface Service {
  id: string
  title: string
  shortDescription: string
  description: string
  icon: string
  features: string[]
  order: number
}

export interface PortfolioProject {
  id: string
  title: string
  description: string
  fullDescription?: string
  category: 'web' | 'mobile' | 'networking' | 'fullstack'
  technologies: string[]
  image?: string
  imageUrl?: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  order: number
}

export interface Testimonial {
  id: string
  clientName: string
  clientCompany?: string
  clientRole?: string
  testimonial: string
  rating?: number
  featured: boolean
  order: number
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio?: string
  image?: string
  linkedin?: string
  twitter?: string
  github?: string
  order: number
}

export interface SiteConfig {
  siteName: string
  tagline: string
  description: string
  email: string
  phone?: string
  address?: string
  socialMedia: {
    linkedin?: string
    twitter?: string
    github?: string
    facebook?: string
  }
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  companyName?: string
  serviceType: 'web-development' | 'mobile-apps' | 'networking' | 'consulting' | 'other'
  message: string
  budgetRange?: 'under-10k' | '10k-25k' | '25k-50k' | '50k-100k' | '100k-plus' | 'not-sure'
  timeline?: 'asap' | '1-3-months' | '3-6-months' | '6-plus-months'
  source?: string
}

