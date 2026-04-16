import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, Heart, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulation d'envoi
    alert('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero avec image de fond */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Contact ONG-SAM"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sam-dark/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Contactez-nous
            </h1>
            <p className="text-gray-200 text-xl max-w-3xl mx-auto leading-relaxed">
              Une question ? Un projet ? Une envie de collaborer ? 
              L'équipe de ONG-SAM est à votre écoute.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coordonnées */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Phone,
                title: "Téléphone",
                value: "+229 97 45 82 31",
                sub: "Lun - Sam • 8h - 18h",
                color: "bg-green-50"
              },
              {
                icon: Mail,
                title: "Email",
                value: "contact@samouake.org",
                sub: "Réponse sous 24h",
                color: "bg-blue-50"
              },
              {
                icon: MapPin,
                title: "Adresse",
                value: "Quartier Alédjo, Ouaké",
                sub: "Département de la Donga, Bénin",
                color: "bg-amber-50"
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${item.color} rounded-2xl p-6 text-center hover:shadow-lg transition-all`}
                >
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Icon className="w-7 h-7 text-sam-primary" />
                  </div>
                  <h3 className="font-bold text-sam-dark text-lg mb-2">{item.title}</h3>
                  <p className="text-sam-primary font-semibold text-lg mb-1">{item.value}</p>
                  <p className="text-gray-500 text-sm">{item.sub}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Formulaire + Infos complémentaires */}
      <section className="py-16 bg-sam-light/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Formulaire - 2 colonnes */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-sam-dark mb-6">
                  Envoyez-nous un message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet
                      </label>
                      <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-sam-primary focus:ring-2 focus:ring-sam-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="votre@email.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-sam-primary focus:ring-2 focus:ring-sam-primary/20 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet
                    </label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-sam-primary focus:ring-2 focus:ring-sam-primary/20 transition-all"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="don">Faire un don</option>
                      <option value="benevolat">Devenir bénévole</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="information">Demande d'information</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Votre message..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-sam-primary focus:ring-2 focus:ring-sam-primary/20 transition-all resize-none"
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-sam-primary text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Infos complémentaires */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Horaires */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-sam-primary" />
                  <h3 className="font-bold text-sam-dark text-lg">Horaires d'ouverture</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Lundi - Vendredi</span>
                    <span className="font-semibold text-sam-dark">8h - 18h</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Samedi</span>
                    <span className="font-semibold text-sam-dark">9h - 15h</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Dimanche</span>
                    <span className="font-semibold text-sam-dark">Fermé</span>
                  </li>
                </ul>
              </div>

              {/* Réseaux sociaux */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-sam-dark text-lg mb-4">Suivez-nous</h3>
                <div className="flex gap-3">
                  {['Facebook', 'WhatsApp', 'Instagram'].map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex-1 bg-sam-light/50 hover:bg-sam-primary/10 rounded-xl p-3 text-center transition-all"
                    >
                      <span className="text-sam-primary font-medium text-sm">{social}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA Don */}
              <div className="bg-gradient-to-br from-sam-primary to-sam-dark rounded-2xl p-6 text-white shadow-xl">
                <Heart className="w-8 h-8 text-sam-accent mb-3" />
                <h3 className="font-bold text-lg mb-2">Soutenez notre action</h3>
                <p className="text-gray-200 text-sm mb-4">
                  Chaque don compte et transforme des vies dans nos communautés.
                </p>
                <Link to="/donate">
                  <button className="w-full bg-white text-sam-primary py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    Faire un don
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Carte / Localisation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-sam-dark mb-6 text-center">
              Nous trouver
            </h2>
            <div className="rounded-3xl overflow-hidden shadow-xl h-80 bg-sam-light/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-sam-primary mx-auto mb-3" />
                <p className="text-sam-dark font-semibold text-lg">Quartier Alédjo, Ouaké</p>
                <p className="text-gray-600">Département de la Donga, Bénin</p>
                <p className="text-sam-primary mt-4 text-sm">Carte interactive disponible prochainement</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}