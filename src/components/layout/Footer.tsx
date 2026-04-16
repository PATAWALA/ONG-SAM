import { Link } from 'react-router-dom'
import { Heart, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-sam-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-8 h-8 text-sam-warm" />
              <span className="text-2xl font-bold">SAM Ouaké</span>
            </div>
            <p className="text-gray-300 text-sm">
              Solidarité pour un Avenir Meilleur - Ensemble pour le développement durable de nos communautés.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Accueil</Link></li>
              <li><Link to="/actions" className="text-gray-300 hover:text-white transition">Nos Actions</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition">À Propos</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-gray-300">+229 XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-gray-300">contact@samouake.org</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-gray-300">Ouaké, Bénin</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-3">
              Restez informé de nos actions
            </p>
            <input
              type="email"
              placeholder="Votre email"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-sam-warm"
            />
            <button className="w-full mt-2 bg-sam-warm text-sam-dark px-4 py-2 rounded-lg font-semibold hover:bg-sam-accent transition">
              S'inscrire
            </button>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400 text-sm">
          © 2026 ONG SAM Ouaké. Tous droits réservés. Solidarité pour un Avenir Meilleur.
        </div>
      </div>
    </footer>
  )
}