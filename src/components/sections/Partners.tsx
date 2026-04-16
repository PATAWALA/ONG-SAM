import { motion } from 'framer-motion'

export default function Partners() {
  const partners = [
    "Mairie de Ouaké",
    "Préfecture de la Donga",
    "Programme des Nations Unies",
    "ONG Internationales",
    "Associations locales",
    "Bailleurs de fonds"
  ]
  
  return (
    <section className="py-20 bg-sam-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-sam-dark mb-4">
            🤝 Ils Nous Font Confiance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des partenaires engagés à nos côtés pour le développement de nos communautés
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition"
            >
              <p className="text-sam-primary font-semibold text-sm">{partner}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}