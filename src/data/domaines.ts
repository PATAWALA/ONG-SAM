import { 
  TreePine, 
  Baby, 
  Scale, 
  Wrench, 
  Sprout, 
  HandCoins, 
  Stethoscope, 
  Siren 
} from 'lucide-react'

export interface Domaine {
  id: number
  title: string
  description: string
  icon: any
}

export const domaines: Domaine[] = [
  {
    id: 1,
    title: "Protection de l'Environnement",
    description: "Sensibilisation des communautes pour l'exploitation durable des ressources naturelles et lutte contre les gaz a effet de serre.",
    icon: TreePine
  },
  {
    id: 2,
    title: "Protection de l'Enfant",
    description: "Lutte contre l'exploitation des enfants, promotion de l'education pour tous et encadrement des jeunes desoeuvres et filles meres.",
    icon: Baby
  },
  {
    id: 3,
    title: "Gouvernance et Democratie",
    description: "Promotion d'une gestion orthodoxe des entites et des principes democratiques pour une gouvernance participative.",
    icon: Scale
  },
  {
    id: 4,
    title: "Formation professionnelle",
    description: "Centres de formation professionnelle pour encadrer des milliers de jeunes et resorber le chomage.",
    icon: Wrench
  },
  {
    id: 5,
    title: "Developpement rural",
    description: "Encadrement des communautes en Agriculture, Elevage, Pisciculture et Apiculture pour l'independance economique.",
    icon: Sprout
  },
  {
    id: 6,
    title: "Activites generatrices de revenus",
    description: "Appui aux groupes marginalises et vulnerables pour une prise en charge durable.",
    icon: HandCoins
  },
  {
    id: 7,
    title: "Sante et nutrition",
    description: "Lutte contre la malnutrition et les maladies endemiques.",
    icon: Stethoscope
  },
  {
    id: 8,
    title: "Urgences communautaires",
    description: "Intervention rapide pour apporter des solutions aux urgences communautaires.",
    icon: Siren
  }
]