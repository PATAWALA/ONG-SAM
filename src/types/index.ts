export interface Domaine {
  id: number
  title: string
  description: string
  icon: string
  color: string
}

export interface TeamMember {
  id: number
  name: string
  role: string
  image: string
}

export interface Partner {
  id: number
  name: string
  logo: string
}

export interface Tontine {
  id: number
  village: string
  participants: number
  impact: string
}