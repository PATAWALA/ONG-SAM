import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CallToAction() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-sam-light/30 relative overflow-hidden">
      {/* Éléments décoratifs subtils */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sam-primary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Petit badge discret */}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block text-sam-primary text-sm font-medium uppercase tracking-wider mb-6"
          >
            Rejoignez la solidarité
          </motion.span>
          
          {/* Titre principal */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-sam-dark mb-6 leading-tight"
          >
            Ensemble, construisons
            <br />
            <span className="text-sam-primary">un avenir meilleur</span>
          </motion.h2>
          
          {/* Texte inspirant */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Chaque geste compte. Votre soutien permet à ONG-SAM de continuer 
            à transformer des vies dans les villages de Ouaké.
          </motion.p>
          
          {/* Bouton unique */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Link to="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-sam-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Effet de brillance au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                <span className="relative flex items-center gap-3">
                  <Heart className="w-6 h-6" />
                  J'aide ONG-SAM
                </span>
              </motion.button>
            </Link>
          </motion.div>
          
          {/* Petite phrase rassurante */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mt-6"
          >
            100% de votre don va directement aux actions sur le terrain
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}