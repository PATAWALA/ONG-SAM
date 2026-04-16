import { motion } from 'framer-motion'
import { Heart, Target, Eye } from 'lucide-react'

export default function About() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-sam-dark mb-4">À Propos de SAM</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solidarité pour un Avenir Meilleur - Une ONG au service des communautés
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <Heart className="w-12 h-12 text-sam-primary mb-4" />
            <h3 className="text-2xl font-bold text-sam-dark mb-3">Notre Mission</h3>
            <p className="text-gray-600">
              Lutter contre la pauvreté mentale et matérielle pour l'amélioration 
              des conditions socioéconomiques des communautés.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <Target className="w-12 h-12 text-sam-primary mb-4" />
            <h3 className="text-2xl font-bold text-sam-dark mb-3">Nos Objectifs</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Protéger l'Environnement</li>
              <li>• Défendre les droits de l'Homme</li>
              <li>• Former les jeunes aux métiers</li>
              <li>• Développement communautaire</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <Eye className="w-12 h-12 text-sam-primary mb-4" />
            <h3 className="text-2xl font-bold text-sam-dark mb-3">Notre Vision</h3>
            <p className="text-gray-600">
              Des communautés autonomes, solidaires et prospères, vivant en harmonie 
              avec leur environnement.
            </p>
          </motion.div>
        </div>
        
        <div className="bg-sam-light rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-sam-dark mb-6">
            🌟 L'Esprit des Tontines
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            C'est à travers les tontines et les cadeaux d'entraide que SAM se fait connaître. 
            Cette tradition de solidarité est au cœur de notre action, créant des liens forts 
            et durables dans toutes les communautés où nous intervenons.
          </p>
        </div>
      </div>
    </div>
  )
}