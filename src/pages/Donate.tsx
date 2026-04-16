import { motion } from 'framer-motion'
import { Heart, Gift, ArrowRight, Shield } from 'lucide-react'
import { useState } from 'react'

export default function Donate() {
  const [amount, setAmount] = useState('')
  const [selectedTontine, setSelectedTontine] = useState('')
  
  const predefinedAmounts = [2000, 5000, 10000, 25000, 50000]
  
  const tontines = [
    "Tontine des Femmes",
    "Tontine des Agriculteurs",
    "Tontine Scolaire",
    "Tontine Santé",
    "Cadeau d'Urgence"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero simple */}
      <section className="bg-sam-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-12 h-12 text-sam-accent mx-auto mb-4" />
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Aider ONG-SAM
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Votre don rejoint l'esprit des tontines qui font la force de SAM à Ouaké.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulaire simple */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            {/* Tontine */}
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-3">
                Je soutiens
              </label>
              <select
                value={selectedTontine}
                onChange={(e) => setSelectedTontine(e.target.value)}
                className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-sam-primary text-gray-700"
              >
                <option value="">Choisir une tontine</option>
                {tontines.map((t, i) => (
                  <option key={i} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Montant */}
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-3">
                Montant (FCFA)
              </label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {predefinedAmounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setAmount(amt.toString())}
                    className={`py-3 px-4 rounded-xl font-medium transition-all ${
                      amount === amt.toString()
                        ? 'bg-sam-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {amt.toLocaleString()}
                  </button>
                ))}
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Autre montant"
                className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-sam-primary"
              />
            </div>

            {/* Impact */}
            <div className="mb-8 p-5 bg-sam-light/50 rounded-xl">
              <p className="text-sm text-gray-600 mb-2">Votre impact :</p>
              {amount && (
                <p className="text-sam-primary font-medium">
                  {parseInt(amount) >= 25000 && "🎓 Formation d'un jeune"}
                  {parseInt(amount) >= 10000 && parseInt(amount) < 25000 && "🌾 Semences pour un agriculteur"}
                  {parseInt(amount) >= 5000 && parseInt(amount) < 10000 && "📚 Kit scolaire pour 2 élèves"}
                  {parseInt(amount) >= 2000 && parseInt(amount) < 5000 && "🍲 Repas pour 5 enfants"}
                  {parseInt(amount) < 2000 && amount && "💚 Votre soutien compte"}
                </p>
              )}
            </div>

            {/* Bouton */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-sam-primary text-white font-bold py-5 rounded-full text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
            >
              <Gift className="w-5 h-5" />
              Valider mon don
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <p className="text-center text-gray-500 text-sm mt-5 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              Paiement sécurisé
            </p>
          </motion.div>

          {/* Info simple */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600">
              <Heart className="w-4 h-4 text-sam-accent inline mr-1" />
              100% des dons vont directement aux actions sur le terrain.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}