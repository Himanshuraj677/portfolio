import portfolioJson from "@/data/portfolio.json"

export interface PortfolioData {
  hero: Hero
  about: About
  skills: Skill[]
  experience: Experience[]
  projects: Project[]
  education: Education[]
  contact: Contact
  footer: Footer
}

export interface Hero {
  name: string
  role: string
  tagline: string
  cta: CTA[]
}

export interface CTA {
  label: string
  href: string
}

export interface About {
  summary: string
  experience: string
  location: string
  facts: string[]
}

export interface Skill {
  name: string
  level: number
  category: string
  description: string
  icon: string
}

export interface Experience {
  company: string
  role: string
  duration: string
  achievements: string[]
  techStack: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  skillsUsed: string[]
  github: string
  liveDemo: string
  blogPost?: string
  image: string
  featured: boolean
}

export interface Education {
  degree: string
  institution: string
  duration: string
  score: string
  logo: string
}

export interface Contact {
  email: string
  phone: string
  social: Social[]
}

export interface Social {
  name: string
  url: string
  icon: string
}

export interface Footer {
  text: string
}

export async function getPortfolioData(): Promise<PortfolioData> {
  return portfolioJson as PortfolioData
}
