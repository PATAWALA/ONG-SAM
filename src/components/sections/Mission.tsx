import { motion } from 'framer-motion'
import { Target, Heart, Users, ArrowRight, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Mission() {
  const eventImages = [
    {
      url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80",
      alt: "Distribution alimentaire"
    },
    {
      url: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80",
      alt: "Formation des jeunes"
    },
    {
      url: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=600&q=80",
      alt: "Agriculture communautaire"
    },
    {
      url: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80",
      alt: "Solidarite communautaire"
    }
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Grille principale : Image gauche / Bio droite */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Colonne de gauche - Image avec badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80"
                alt="Action humanitaire ONG-SAM"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge en bas a gauche - Comme dans l'exemple */}
            <div className="absolute -bottom-3 -left-3 lg:-bottom-6 lg:-left-6 bg-sam-primary text-white px-5 py-2 lg:px-6 lg:py-3 rounded-xl shadow-lg">
              <p className="font-bold text-base lg:text-lg">ONG-SAM</p>
              <p className="text-xs lg:text-sm opacity-90">10+ ans d'existence</p>
            </div>
          </motion.div>

          {/* Colonne de droite - Bio et Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sam-dark mb-6">
              Notre Mission
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              La Solidarite pour un Avenir Meilleur (SAM) a pour mission la lutte contre 
              la pauvrete mentale et materielle pour l'amelioration des conditions 
              socioeconomiques des communautes.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              Depuis 2016, nous apportons des solutions concretes aux problemes des 
              communautes a travers nos differents programmes d'action : protection 
              de l'environnement, formation professionnelle, sante, et bien plus encore.
            </p>
            
            {/* Stats rapides */}
            <div className="flex gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-sam-primary">8</div>
                <div className="text-gray-500 text-sm">Domaines d'action</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sam-primary">5000+</div>
                <div className="text-gray-500 text-sm">Vies impactees</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sam-primary">15+</div>
                <div className="text-gray-500 text-sm">Villages touches</div>
              </div>
            </div>
            
            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-sam-primary text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  En savoir plus sur nous
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-sam-primary text-sam-primary px-6 py-3 rounded-lg font-semibold hover:bg-sam-primary hover:text-white transition-all"
                >
                  Nous contacter
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Galerie d'images d'evenements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-5 h-5 text-sam-primary" />
            <h3 className="text-xl font-bold text-sam-dark">Nos derniers evenements</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {eventImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer h-48"
              >
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-sm font-medium truncate">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Valeurs avec icones GEANTES en fond */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              icon: Target,
              title: "Notre Mission",
              text: "Lutter contre la pauvrete mentale et materielle pour l'amelioration des conditions socioeconomiques des communautes."
            },
            {
              icon: Heart,
              title: "Notre Vision",
              text: "Des communautes autonomes, solidaires et prosperes, vivant en harmonie avec leur environnement."
            },
            {
              icon: Users,
              title: "Nos Objectifs",
              text: "Proteger l'environnement, defendre les droits de l'Homme, former les jeunes aux metiers et creer un cadre d'entraide."
            }
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative bg-sam-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all overflow-hidden"
              >
                {/* Icone GEANTE en fond au centre */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
                  <Icon className="w-64 h-64 text-sam-primary" />
                </div>
                
                {/* Contenu */}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-sam-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-sam-dark mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{item.text}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Soutenir notre mission */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.9 }}
  viewport={{ once: true }}
  className="mt-16 text-center"
>
  <h3 className="text-2xl md:text-3xl font-bold text-sam-dark mb-4">
    Soutenir notre mission
  </h3>
  <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
    Votre soutien nous permet de continuer a transformer des vies et a batir un avenir meilleur pour les communautes.
  </p>
  <Link to="/donate">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-sam-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
    >
      Aidez maintenant
      <ArrowRight className="w-5 h-5" />
    </motion.button>
  </Link>
</motion.div>
      </div>
    </section>
  )
}