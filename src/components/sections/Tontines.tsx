import { motion } from 'framer-motion'
import { Users, Gift, Heart } from 'lucide-react'

export default function Tontines() {
  const tontines = [
    {
      village: "Ouaké Centre",
      participants: 150,
      impact: "Micro-crédits pour 45 femmes commerçantes",
      icon: "👥"
    },
    {
      village: "Kouandé",
      participants: 120,
      impact: "Achat de semences pour 60 agriculteurs",
      icon: "🌱"
    },
    {
      village: "Natitingou",
      participants: 200,
      impact: "Équipement scolaire pour 300 enfants",
      icon: "📚"
    },
    {
      village: "Tanguiéta",
      participants: 80,
      impact: "Matériel médical pour le dispensaire",
      icon: "🏥"
    }
  ]
  
  return (
    <section className="py-20 bg-gradient-to-br from-sam-warm/10 to-sam-accent/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-sam-dark mb-4">
            🌟 Les Tontines et Dons Solidaires à Ouaké
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            C'est par les tontines et les cadeaux d'entraide que tout le monde connaît ONG SAM. 
            Une tradition de solidarité qui transforme des vies.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tontines.map((tontine, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="text-4xl mb-4">{tontine.icon}</div>
              <h3 className="text-xl font-bold text-sam-primary mb-2">{tontine.village}</h3>
              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <Users className="w-4 h-4" />
                <span>{tontine.participants} participants</span>
              </div>
              <p className="text-gray-600 text-sm">{tontine.impact}</p>
              <div className="mt-4 pt-4 border-t flex justify-between items-center">
                <span className="text-sam-warm font-semibold flex items-center gap-1">
                  <Gift className="w-4 h-4" />
                  Cadeau commun
                </span>
                <Heart className="w-5 h-5 text-red-500" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700 mb-6">
            💝 Votre don, aussi petit soit-il, rejoint l'esprit de solidarité des tontines de Ouaké
          </p>
          <a href="/donate">
            <button className="bg-sam-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-sam-dark transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              🤝 Contribuer à une tontine
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}