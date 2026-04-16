import { Link } from 'react-router-dom'
import { Heart, Phone, Mail, MapPin, ArrowRight, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-sam-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-8 h-8 text-sam-accent" />
              <span className="text-2xl font-bold">SAM Ouaké</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Solidarité pour un Avenir Meilleur — Ensemble pour le développement durable de nos communautés.
            </p>
          </div>
          
          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Accueil</Link></li>
              <li><Link to="/actions" className="text-gray-300 hover:text-white transition">Nos Actions</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition">À Propos</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sam-accent" />
                <span className="text-gray-300">+229 97 45 82 31</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sam-accent" />
                <span className="text-gray-300">contact@samouake.org</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sam-accent" />
                <span className="text-gray-300">Quartier Alédjo, Ouaké, Bénin</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter + Don */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Restez informé</h4>
            <p className="text-gray-300 text-sm mb-3">
              Recevez nos actualités et l'impact de vos dons
            </p>
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-sam-accent"
              />
              <button className="bg-sam-primary text-white px-4 py-2 rounded-lg hover:bg-sam-primary/90 transition">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <Link to="/donate">
              <button className="w-full bg-sam-accent text-sam-dark px-4 py-3 rounded-lg font-semibold hover:bg-sam-accent/90 transition flex items-center justify-center gap-2">
                <Heart className="w-4 h-4" />
                Faire un don
              </button>
            </Link>
          </div>
        </div>
        
        {/* Séparateur */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2026 ONG SAM Ouaké. Tous droits réservés. Solidarité pour un Avenir Meilleur.
          </p>
          
          {/* Réseaux sociaux - Icônes SVG simples */}
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-sam-primary transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            
            <a 
              href="#" 
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-sam-primary transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </a>
            
            <a 
              href="#" 
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-sam-primary transition-colors"
              aria-label="Twitter / X"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}