import { motion } from 'framer-motion'
import { Target, Heart, Users } from 'lucide-react'

export default function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sam-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Qui sommes-nous
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-sam-dark mb-4">
              Notre Mission
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-sam-light rounded-3xl p-8 lg:p-12"
          >
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed text-center mb-8">
              La Solidarite pour un Avenir Meilleur (SAM) a pour mission la lutte contre 
              la pauvrete mentale et materielle pour l'amelioration des conditions 
              socioeconomiques des communautes.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                {
                  icon: Target,
                  title: "Objectifs",
                  text: "Proteger l'Environnement, defendre les droits de l'Homme, encadrer et former les jeunes en formation professionnelle et metiers."
                },
                {
                  icon: Heart,
                  title: "Valeurs",
                  text: "Solidarite, entraide communautaire, developpement durable et accompagnement des plus vulnerables."
                },
                {
                  icon: Users,
                  title: "Engagement",
                  text: "Creer un cadre d'entraide communautaire et aider a l'elaboration et la mise en oeuvre des plans de developpement local."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-md"
                >
                  <div className="w-12 h-12 bg-sam-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-sam-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-sam-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}