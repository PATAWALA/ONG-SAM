import { motion } from 'framer-motion'
import { ArrowRight, TreePine } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Domaines() {
  // Domaines avec NOUVELLES images
  const domainesData = [
    {
      id: 1,
      title: "Protection de l'Environnement",
      description: "Sensibilisation des communautes pour l'exploitation durable des ressources naturelles et lutte contre les gaz a effet de serre.",
      image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Protection de l'Enfant",
      description: "Lutte contre l'exploitation des enfants, promotion de l'education pour tous et encadrement des jeunes desoeuvres et filles meres.",
      image: "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Formation professionnelle",
      description: "Centres de formation professionnelle pour encadrer des milliers de jeunes et resorber le chomage.",
      image: "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      title: "Developpement rural",
      description: "Encadrement des communautes en Agriculture, Elevage, Pisciculture et Apiculture pour l'independance economique.",
      image: "https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      title: "Sante et nutrition",
      description: "Lutte contre la malnutrition et les maladies endemiques dans les communautes rurales.",
      image: "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      title: "Activites generatrices de revenus",
      description: "Appui aux groupes marginalises et vulnerables pour une prise en charge durable.",
      image: "https://images.pexels.com/photos/6591159/pexels-photo-6591159.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Icône GÉANTE de l'environnement en fond de section */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
        <TreePine className="w-[800px] h-[800px] text-sam-primary" />
      </div>
      
      {/* Elements decoratifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sam-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sam-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sam-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nos interventions
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-sam-dark mb-4">
            Domaines d'Action
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Une approche globale pour repondre aux besoins essentiels des communautes
          </p>
        </motion.div>
        
        {/* 3 colonnes sur desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domainesData.map((domaine, index) => (
            <motion.div
              key={domaine.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative h-[350px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image de fond */}
              <div className="absolute inset-0">
                <img 
                  src={domaine.image} 
                  alt={domaine.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient - texte TOUJOURS lisible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
              </div>
              
              {/* Contenu - TOUJOURS VISIBLE */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-3">
                  {domaine.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed line-clamp-3">
                  {domaine.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Lien vers À propos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-sam-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              En savoir plus sur nos actions
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}