export interface IProject {
  title: string
  description: string
  stack: string[]
  category: 'FRONTEND' | 'BACKEND' | 'DESKTOP' | 'ALL' | 'MOBILE'
  imageUrl?: string
  repoUrl?: string
  liveProjectUrl?: string
}
