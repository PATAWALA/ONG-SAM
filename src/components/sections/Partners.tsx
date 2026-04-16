import { motion } from 'framer-motion'
import { Building2, Globe, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Partners() {
  const partners = [
    {
      id: 1,
      name: "Mairie de Ouaké",
      type: "Institution Publique",
      description: "Partenaire institutionnel depuis 2018. Soutient nos actions de développement local.",
      logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&q=80"
    },
    {
      id: 2,
      name: "Union Européenne",
      type: "Bailleur International",
      description: "Financement de projets de développement rural et de formation professionnelle.",
      logo: "https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 3,
      name: "Coopérative Agricole",
      type: "Partenaire Local",
      description: "Regroupement de 200+ agriculteurs de la Donga pour la distribution et la formation.",
      logo: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=200&q=80"
    },
    {
      id: 4,
      name: "Programme Alimentaire",
      type: "Agence des Nations Unies",
      description: "Soutien aux programmes de nutrition et de sécurité alimentaire à Ouaké.",
      logo: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=200&q=80"
    },
    {
      id: 5,
      name: "Association des Femmes",
      type: "Groupement Local",
      description: "Partenaire pour l'autonomisation économique des femmes via les tontines.",
      logo: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=200&q=80"
    },
    {
      id: 6,
      name: "Préfecture de la Donga",
      type: "Autorité Préfectorale",
      description: "Facilite l'accès aux communautés et soutient nos initiatives locales.",
      logo: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=200&q=80"
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Élément décoratif discret */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sam-primary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-sam-primary/10 text-sam-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Globe className="w-4 h-4" />
            <span>Ils nous font confiance</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-sam-dark mb-4">
            Nos Partenaires
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Des institutions et organisations qui croient en notre mission et nous accompagnent 
            pour transformer durablement les communautés de Ouaké.
          </p>
        </motion.div>

        {/* Grille des partenaires - 3 colonnes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                {/* Logo */}
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-sam-light mb-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Nom */}
                <h3 className="text-lg font-bold text-sam-dark mb-1">
                  {partner.name}
                </h3>
                
                {/* Type */}
                <p className="text-sam-primary text-sm font-medium mb-3">
                  {partner.type}
                </p>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Citation de confiance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <p className="text-gray-600 text-lg italic">
            "Avec une expérience de près d'une décennie, ONG-SAM a gagné la confiance 
            de partenaires nationaux et internationaux."
          </p>
          
          <Link to="/contact" className="inline-block mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-sam-primary font-semibold hover:text-sam-dark transition-colors"
            >
              <Building2 className="w-4 h-4" />
              Devenir partenaire
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}