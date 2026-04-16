import { motion } from 'framer-motion'
import { domaines } from '../../data/domaines'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Domaines() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-sam-light/30 relative overflow-hidden">
      {/* Elements decoratifs en arriere-plan */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sam-warm/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sam-warm/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sam-warm font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nos interventions
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-sam-dark mb-4">
            Domaines d'Action
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Une approche globale pour repondre aux besoins essentiels des communautes
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domaines.map((domaine, index) => {
            const Icon = domaine.icon
            
            return (
              <motion.div
                key={domaine.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
              >
                {/* Icone geante en fond - Couleur sam-warm */}
                <div className="absolute -bottom-8 -right-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300">
                  <Icon className="w-48 h-48 text-sam-warm" />
                </div>
                
                {/* Contenu */}
                <div className="relative z-10">
                  {/* Icone principale - Fond sam-warm */}
                  <div className="w-14 h-14 bg-sam-warm/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-sam-warm" />
                  </div>
                  
                  {/* Titre */}
                  <h3 className="text-xl font-bold text-sam-dark mb-2 group-hover:text-sam-warm transition-colors">
                    {domaine.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {domaine.description}
                  </p>
                  
                  {/* Lien */}
                  <Link 
                    to="/actions" 
                    className="inline-flex items-center gap-1 text-sam-warm font-semibold text-sm group-hover:gap-2 transition-all"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                {/* Bordure animee au hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-sam-warm/20 rounded-2xl transition-colors duration-300" />
              </motion.div>
            )
          })}
        </div>
        
        {/* Bouton Voir toutes les actions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/actions">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-sam-warm text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-sam-accent transition-all inline-flex items-center gap-2"
            >
              Voir toutes nos actions
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}