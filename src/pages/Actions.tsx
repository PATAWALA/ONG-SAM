import { motion } from 'framer-motion'
import { 
  TreePine, Baby, Scale, Wrench, Sprout, HandCoins, Stethoscope, Siren,
  Target, Users, TrendingUp, CheckCircle, Heart
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Actions() {
  // Données détaillées pour chaque domaine
  const domainesDetail = [
    {
      id: 1,
      title: "Protection de l'Environnement",
      icon: TreePine,
      description: "Sensibilisation des communautés pour l'exploitation durable des ressources naturelles et lutte contre les gaz à effet de serre.",
      image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: [
        { label: "Arbres plantés", value: "15 000+" },
        { label: "Villages sensibilisés", value: "12" },
        { label: "Hectares protégés", value: "450" }
      ],
      actions: [
        "Reboisement communautaire",
        "Formation aux techniques agroécologiques",
        "Création de pépinières villageoises",
        "Lutte contre les feux de brousse"
      ]
    },
    {
      id: 2,
      title: "Protection de l'Enfant",
      icon: Baby,
      description: "Lutte contre l'exploitation des enfants, promotion de l'éducation pour tous et encadrement des jeunes désoeuvrés et filles mères.",
      image: "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: [
        { label: "Enfants scolarisés", value: "850+" },
        { label: "Filles mères formées", value: "120" },
        { label: "Écoles soutenues", value: "8" }
      ],
      actions: [
        "Distribution de kits scolaires",
        "Cantines scolaires communautaires",
        "Formation professionnelle pour filles mères",
        "Sensibilisation contre le travail des enfants"
      ]
    },
    {
      id: 3,
      title: "Gouvernance et Démocratie",
      icon: Scale,
      description: "Promotion d'une gestion orthodoxe des entités et des principes démocratiques pour une gouvernance participative.",
      image: "https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: [
        { label: "Leaders formés", value: "45" },
        { label: "Communes accompagnées", value: "5" },
        { label: "Forums citoyens", value: "18" }
      ],
      actions: [
        "Formation des élus locaux",
        "Budgétisation participative",
        "Monitoring des politiques publiques",
        "Éducation civique"
      ]
    },
    {
      id: 4,
      title: "Formation professionnelle",
      icon: Wrench,
      description: "Centres de formation professionnelle pour encadrer des milliers de jeunes et résorber le chômage.",
      image: "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: [
        { label: "Jeunes formés", value: "1 200+" },
        { label: "Centres de formation", value: "4" },
        { label: "Taux d'insertion", value: "78%" }
      ],
      actions: [
        "Formation en couture et artisanat",
        "Menuiserie et construction",
        "Informatique et bureautique",
        "Entrepreneuriat et gestion"
      ]
    },
    {
      id: 5,
      title: "Développement rural",
      icon: Sprout,
      description: "Encadrement des communautés en Agriculture, Élevage, Pisciculture et Apiculture pour l'indépendance économique.",
      image: "https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: [
        { label: "Agriculteurs formés", value: "650+" },
        { label: "Coopératives créées", value: "12" },
        { label: "Production augmentée", value: "+45%" }
      ],
      actions: [
        "Distribution de semences améliorées",
        "Formation aux techniques modernes",
        "Création de banques de céréales",
        "Développement de l'apiculture"
      ]
    },
    {
      id: 6,
      title: "Activités génératrices de revenus",
      icon: HandCoins,
      description: "Appui aux groupes marginalisés et vulnérables pour une prise en charge durable.",
      image: "https://images.pexels.com/photos/6591159/pexels-photo-6591159.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: [
        { label: "Bénéficiaires directs", value: "450+" },
        { label: "Micro-crédits octroyés", value: "320" },
        { label: "Fonds mobilisés", value: "12M FCFA" }
      ],
      actions: [
        "Micro-crédits pour femmes",
        "Formation en gestion d'entreprise",
        "Accompagnement des groupements",
        "Commercialisation des produits"
      ]
    },
    {
      id: 7,
      title: "Santé et nutrition",
      icon: Stethoscope,
      description: "Lutte contre la malnutrition et les maladies endémiques dans les communautés rurales.",
      image: "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: [
        { label: "Enfants dépistés", value: "2 500+" },
        { label: "Femmes sensibilisées", value: "1 800+" },
        { label: "Dispensaires soutenus", value: "6" }
      ],
      actions: [
        "Dépistage de la malnutrition",
        "Distribution de compléments nutritionnels",
        "Campagnes de vaccination",
        "Éducation à l'hygiène"
      ]
    },
    {
      id: 8,
      title: "Urgences communautaires",
      icon: Siren,
      description: "Intervention rapide pour apporter des solutions aux urgences communautaires.",
      image: "https://images.pexels.com/photos/6972432/pexels-photo-6972432.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: [
        { label: "Interventions d'urgence", value: "24" },
        { label: "Familles assistées", value: "380" },
        { label: "Villages couverts", value: "15" }
      ],
      actions: [
        "Aide alimentaire d'urgence",
        "Reconstruction après sinistre",
        "Soutien aux déplacés",
        "Prévention des catastrophes"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero avec image de fond */}
      <section className="relative py-28 overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/6591159/pexels-photo-6591159.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Actions ONG-SAM"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sam-dark/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Nos Actions
            </h1>
            <p className="text-gray-200 text-xl max-w-3xl mx-auto leading-relaxed">
              Découvrez comment ONG-SAM transforme concrètement des vies à travers 
              ses différents domaines d'intervention dans la commune de Ouaké.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vue d'ensemble - Stats globales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { value: '8', label: 'Domaines d\'action', icon: Target },
              { value: '15+', label: 'Villages touchés', icon: Users },
              { value: '5000+', label: 'Bénéficiaires', icon: Heart },
              { value: '10 ans', label: 'D\'expérience', icon: TrendingUp }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-sam-light/50 rounded-2xl"
              >
                <stat.icon className="w-8 h-8 text-sam-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-sam-dark">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domaines détaillés */}
      <section className="py-16 bg-sam-light/20">
        <div className="container mx-auto px-4">
          {domainesDetail.map((domaine, index) => {
            const Icon = domaine.icon
            
            return (
              <motion.div
                key={domaine.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex-row gap-8 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl h-80 lg:h-96">
                    <img 
                      src={domaine.image} 
                      alt={domaine.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Titre sur l'image */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-sam-primary" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                          {domaine.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contenu */}
                <div className="w-full lg:w-1/2">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {domaine.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {domaine.stats.map((stat, i) => (
                      <div key={i} className="bg-white rounded-xl p-4 shadow-md text-center">
                        <div className="text-2xl font-bold text-sam-primary">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Actions concrètes */}
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <h4 className="font-bold text-sam-dark mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-sam-primary" />
                      Nos actions concrètes
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {domaine.actions.map((action, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-sam-primary mt-2 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* CTA Final - Épuré */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sam-dark mb-4">
              Prêt à faire la différence ?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Votre soutien nous permet de continuer et d'amplifier nos actions sur le terrain.
            </p>
            <Link to="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-sam-primary text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-3"
              >
                <Heart className="w-6 h-6" />
                J'aide ONG-SAM
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}