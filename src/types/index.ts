export interface Screenshot {
  src: string
  title: string
  caption: string
  /** Feature group used to organize the expanded gallery. */
  group: string
  width: number
  height: number
  /** Featured screenshots appear directly in the project card. */
  featured?: boolean
}

export interface Project {
  id: string
  name: string
  /** Optional short label shown above the title, e.g. the kind of project. */
  badge?: string
  description: string
  technologies: string[]
  features: string[]
  /** Path under /public, e.g. "/images/projects/cerp.png". Leave empty until a real screenshot exists. */
  screenshot?: string
  screenshotAlt?: string
  /** Leave empty to hide the button. */
  gallery?: Screenshot[]
  githubUrl?: string
  liveUrl?: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface ExperienceItem {
  role: string
  organization: string
  description: string
}

export interface ContactLink {
  label: string
  /** Leave empty to hide. Email links should start with "mailto:". */
  href?: string
  /** Text shown for the link. */
  display: string
}
