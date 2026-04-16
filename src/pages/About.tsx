import { motion } from 'framer-motion'
import { 
  Heart, Target, Users, Award, Quote, ArrowRight, 
  Sparkles, HandCoins, Gift
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function About() {
  // Timeline des événements clés
  const timeline = [
    {
      year: "2016",
      title: "Naissance de SAM",
      description: "Création de l'association Solidarité pour un Avenir Meilleur à Ouaké. Les premières tontines voient le jour avec 25 femmes.",
      image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      year: "2018",
      title: "Premiers décaissements",
      description: "Les tontines permettent les premiers décaissements collectifs. 150 femmes bénéficient de micro-crédits pour leurs activités.",
      image: "https://images.pexels.com/photos/6348119/pexels-photo-6348119.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      year: "2020",
      title: "Expansion régionale",
      description: "SAM étend ses actions à 8 villages de la commune de Ouaké. Création des premiers centres de formation professionnelle.",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      year: "2023",
      title: "Partenariats internationaux",
      description: "L'Union Européenne et le Programme Alimentaire Mondial deviennent partenaires. Plus de 5000 bénéficiaires directs.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      year: "2026",
      title: "Une décennie d'impact",
      description: "SAM célèbre 10 ans d'actions. 15 villages touchés, 9M FCFA mobilisés via les tontines, des milliers de vies transformées.",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ]

  // Valeurs fondamentales
  const valeurs = [
    {
      icon: Heart,
      title: "Solidarité",
      description: "L'entraide communautaire est au cœur de notre ADN. Les tontines incarnent cette valeur fondamentale."
    },
    {
      icon: Target,
      title: "Impact durable",
      description: "Chaque action vise l'autonomisation des communautés pour un changement pérenne."
    },
    {
      icon: Users,
      title: "Proximité",
      description: "Nous vivons au quotidien avec les populations pour comprendre leurs vrais besoins."
    },
    {
      icon: Award,
      title: "Transparence",
      description: "Les décaissements sont publics et décidés collectivement lors des réunions de tontines."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero avec image de fond */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Communauté ONG-SAM"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sam-dark/75" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
              <Sparkles className="w-4 h-4" />
              <span>La genèse d'un mouvement solidaire</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              À Propos de ONG-SAM
            </h1>
            <p className="text-gray-200 text-xl max-w-3xl mx-auto leading-relaxed">
              Solidarité pour un Avenir Meilleur — Une histoire de solidarité qui a commencé 
              avec 25 femmes et qui transforme aujourd'hui des milliers de vies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notre Histoire - Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-sam-dark mb-4">
              Notre Histoire
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Une décennie d'engagement au service des communautés de Ouaké
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Ligne verticale */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-sam-primary/20" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Point sur la timeline - caché sur mobile */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-sam-primary rounded-full border-4 border-white shadow-lg z-10" />
                
                {/* Contenu */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} text-center md:text-left`}>
                  <div className="inline-block bg-sam-primary text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold text-sam-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                
                {/* Image */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="rounded-2xl overflow-hidden shadow-lg h-48 md:h-56">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Les Tontines - Le cœur de SAM */}
      <section className="relative py-20 overflow-hidden">
        {/* Image de fond - Réunion de village */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Réunion de tontine au village"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sam-dark/85" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-sam-accent/30 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20">
                <Gift className="w-4 h-4" />
                <span>L'âme de ONG-SAM</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                L'Esprit des Tontines
              </h2>
              
              <p className="text-gray-200 text-lg leading-relaxed mb-4">
                C'est à travers les tontines et les cadeaux d'entraide que SAM s'est fait connaître. 
                Cette tradition de solidarité est au cœur de notre action.
              </p>
              
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                Chaque semaine, dans chaque village, les membres se réunissent pour mutualiser 
                leurs ressources. L'argent collecté est remis à une personne qui l'utilise pour 
                un projet : achat de semences, frais scolaires, petit commerce, santé...
              </p>
              
              {/* Process Flow - Vertical Step Explainer */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-5">
                  <HandCoins className="w-6 h-6 text-sam-accent" />
                  <h3 className="font-bold text-white text-lg">Comment fonctionnent les décaissements</h3>
                </div>
                
                {/* Étapes - Empilées sur mobile */}
                <div className="flex flex-col gap-3">
                  {[
                    {
                      step: "1",
                      title: "Réunion hebdomadaire",
                      desc: "Les membres se réunissent chaque semaine dans leur village pour cotiser"
                    },
                    {
                      step: "2",
                      title: "Cotisation",
                      desc: "Chaque membre cotise entre 500 et 2000 FCFA selon ses moyens"
                    },
                    {
                      step: "3",
                      title: "Mutualisation",
                      desc: "Les fonds sont mis en commun et confiés à l'animateur SAM"
                    },
                    {
                      step: "4",
                      title: "Décaissement",
                      desc: "À tour de rôle, un membre reçoit la totalité de la cagnotte"
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                      <div className="w-8 h-8 bg-sam-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sam-dark font-bold text-sm">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-0.5">{item.title}</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Note sur les cadeaux d'urgence */}
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sam-accent text-sm flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    <span>Des cadeaux supplémentaires sont prévus pour les urgences (santé, deuil, sinistre)</span>
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl h-48 border-2 border-white/20">
                  <img src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Réunion au village" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-64 border-2 border-white/20">
                  <img src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Femmes à la tontine" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl h-64 border-2 border-white/20">
                  <img src="https://images.pexels.com/photos/6348119/pexels-photo-6348119.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Décaissement" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-48 border-2 border-white/20">
                  <img src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Solidarité" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-sam-dark mb-4">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-gray-600 text-lg">
              Ce qui guide chacune de nos actions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {valeurs.map((valeur, index) => {
              const Icon = valeur.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-sam-light/50 rounded-2xl p-6 text-center hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-sam-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-sam-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-sam-dark mb-2">{valeur.title}</h3>
                  <p className="text-gray-600 text-sm">{valeur.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Citation inspirante - Avec image de fond */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Équipe ONG-SAM"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sam-dark/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Quote className="w-12 h-12 text-sam-accent mx-auto mb-6 opacity-70" />
            <p className="text-xl md:text-3xl text-white font-medium leading-relaxed mb-6">
              "Ce qui a commencé avec 25 femmes dans une petite salle de Ouaké est devenu 
              un mouvement qui transforme des milliers de vies. La solidarité n'a pas de prix."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-0.5 bg-sam-accent/70" />
              <span className="text-sam-accent font-semibold text-lg">L'ÉQUIPE SAM</span>
              <div className="w-12 h-0.5 bg-sam-accent/70" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-sam-dark mb-4">
              Rejoignez l'histoire
            </h3>
            <p className="text-gray-600 mb-6">
              Faites partie de ceux qui écrivent l'avenir de Ouaké
            </p>
            <Link to="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-sam-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                <Heart className="w-5 h-5" />
                J'aide ONG-SAM
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}