import { motion } from 'framer-motion'
import { domaines } from '../data/domaines'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Actions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sam-light/30">
      {/* Hero de la page Actions */}
      <section className="bg-sam-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Nos Actions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Decouvrez comment ONG-SAM transforme des vies a travers ses differents domaines d'intervention
          </motion.p>
        </div>
      </section>

      {/* Liste des domaines */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {domaines.map((domaine, index) => {
              const Icon = domaine.icon
              
              return (
                <motion.div
                  key={domaine.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-sam-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-sam-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-sam-dark mb-2">
                        {domaine.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {domaine.description}
                      </p>
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center gap-1 text-sam-primary font-semibold text-sm hover:gap-2 transition-all"
                      >
                        Nous contacter
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}