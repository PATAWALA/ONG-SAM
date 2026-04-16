import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-sam-dark mb-12">Contactez-nous</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Phone className="w-12 h-12 text-sam-primary mx-auto mb-3" />
            <h3 className="font-bold">Téléphone</h3>
            <p>+229 XX XX XX XX</p>
          </div>
          <div className="text-center">
            <Mail className="w-12 h-12 text-sam-primary mx-auto mb-3" />
            <h3 className="font-bold">Email</h3>
            <p>contact@samouake.org</p>
          </div>
          <div className="text-center">
            <MapPin className="w-12 h-12 text-sam-primary mx-auto mb-3" />
            <h3 className="font-bold">Adresse</h3>
            <p>Ouaké, Bénin</p>
          </div>
        </div>
        
        <form className="max-w-2xl mx-auto">
          <input type="text" placeholder="Votre nom" className="w-full mb-4 p-3 border rounded-lg" />
          <input type="email" placeholder="Votre email" className="w-full mb-4 p-3 border rounded-lg" />
          <textarea placeholder="Votre message" rows={5} className="w-full mb-4 p-3 border rounded-lg"></textarea>
          <button className="bg-sam-primary text-white px-8 py-3 rounded-full font-bold">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  )
}