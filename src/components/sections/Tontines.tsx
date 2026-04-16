import { motion } from 'framer-motion'
import { Users, Gift, Heart, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Tontines() {
  const tontines = [
    {
      id: 1,
      village: "Aworo",
      participants: "150+ femmes",
      impact: "Micro-crédits pour 45 commerçantes, fonds de roulement pour petites entreprises",
      image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=400&q=80",
      montant: "2.5M FCFA"
    },
    {
      id: 2,
      village: "Bantè",
      participants: "120+ agriculteurs",
      impact: "Achat groupé de semences et intrants pour 60 exploitations familiales",
      image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&q=80",
      montant: "1.8M FCFA"
    },
    {
      id: 3,
      village: "Chabi-Kouma",
      participants: "200+ parents",
      impact: "Équipement scolaire pour 300 enfants, cantines scolaires communautaires",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&q=80",
      montant: "3.2M FCFA"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-sam-light/30 to-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sam-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sam-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-sam-accent/20 text-sam-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-sam-accent" />
            <span>La force de la solidarité</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-sam-dark mb-4">
            Les Tontines de ONG-SAM
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            C'est par les tontines et les cadeaux d'entraide que tout le monde connaît ONG-SAM. 
            Présente dans plus de 15 villages de la commune de Ouaké, l'organisation continue de sauver des vies.
          </p>
        </motion.div>

        {/* Grille des tontines - 3 colonnes centrées */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tontines.map((tontine, index) => (
            <motion.div
              key={tontine.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tontine.image} 
                    alt={tontine.village}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Badge montant */}
                  <div className="absolute top-3 right-3 bg-sam-accent text-sam-dark px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    {tontine.montant}
                  </div>
                  
                  {/* Village */}
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-white font-bold text-lg drop-shadow-lg">
                      {tontine.village}
                    </h3>
                  </div>
                </div>
                
                {/* Contenu */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sam-primary mb-3">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-semibold">{tontine.participants}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {tontine.impact}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sam-primary font-semibold text-sm flex items-center gap-1">
                      <Gift className="w-4 h-4" />
                      Cadeau commun
                    </span>
                    <Heart className="w-4 h-4 text-red-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Citation et CTA - Un seul bouton */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8">
              "Dans chaque village, les tontines sont le cœur battant de la solidarité. 
              Votre don rejoint cet esprit communautaire et transforme des vies."
            </p>
            
            <Link to="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-sam-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl hover:bg-sam-dark transition-all inline-flex items-center gap-3"
              >
                <Heart className="w-6 h-6" />
                Aider ONG-SAM
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}