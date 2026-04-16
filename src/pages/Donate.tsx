import { motion } from 'framer-motion'
import { Heart, Gift, Users, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function Donate() {
  const [amount, setAmount] = useState('')
  const [selectedTontine, setSelectedTontine] = useState('')
  
  const predefinedAmounts = [5000, 10000, 25000, 50000, 100000]
  
  const tontines = [
    "Tontine des Femmes de Ouaké",
    "Tontine des Agriculteurs",
    "Tontine Scolaire",
    "Tontine Santé Communautaire",
    "Cadeau d'Urgence"
  ]
  
  return (
    <div className="py-20 bg-gradient-to-br from-sam-light to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Heart className="w-16 h-16 text-sam-warm mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-sam-dark mb-4">
            🤝 Aider ONG-SAM
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre don, petit ou grand, rejoint l'esprit de solidarité des tontines qui font la force de SAM
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-sam-dark mb-6 flex items-center gap-2">
              <Gift className="w-6 h-6 text-sam-primary" />
              Faire un don
            </h2>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-semibold">
                Choisir une tontine à soutenir
              </label>
              <select
                value={selectedTontine}
                onChange={(e) => setSelectedTontine(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sam-primary"
              >
                <option value="">Sélectionnez une tontine</option>
                {tontines.map((t, i) => (
                  <option key={i} value={t}>{t}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-semibold">
                Montant du don (FCFA)
              </label>
              <div className="grid grid-cols-3 gap-3 mb-3">
                {predefinedAmounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setAmount(amt.toString())}
                    className={`py-2 px-4 rounded-lg border transition ${
                      amount === amt.toString()
                        ? 'bg-sam-primary text-white border-sam-primary'
                        : 'border-gray-300 hover:border-sam-primary'
                    }`}
                  >
                    {amt.toLocaleString()} F
                  </button>
                ))}
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Autre montant"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sam-primary"
              />
            </div>
            
            <button className="w-full bg-gradient-to-r from-sam-warm to-sam-accent text-sam-dark font-bold py-4 rounded-full text-lg hover:shadow-xl transition flex items-center justify-center gap-2">
              Procéder au don <ArrowRight className="w-5 h-5" />
            </button>
            
            <p className="text-center text-gray-500 text-sm mt-4">
              Paiement sécurisé • Reçu fiscal disponible
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-sam-dark mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-sam-primary" />
                L'impact de votre don
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-sam-primary">✓</span>
                  <span><strong>5 000 F</strong> - Repas pour 10 enfants</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sam-primary">✓</span>
                  <span><strong>10 000 F</strong> - Semences pour un agriculteur</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sam-primary">✓</span>
                  <span><strong>25 000 F</strong> - Kit scolaire pour 5 élèves</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sam-primary">✓</span>
                  <span><strong>50 000 F</strong> - Formation d'un jeune aux métiers</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-sam-primary text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-3">💝 Pourquoi donner à SAM ?</h3>
              <p className="mb-4">
                Votre don s'inscrit dans la tradition des tontines : une solidarité directe 
                qui transforme concrètement la vie des communautés.
              </p>
              <p className="text-sm opacity-90">
                100% des dons vont directement aux actions sur le terrain.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}