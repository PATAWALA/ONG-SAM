import { motion } from 'framer-motion'
import { Users, Award, Heart } from 'lucide-react'

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Koffi Agossou",
      role: "Coordinateur terrain",
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&q=80",
      bio: "Plus de 8 ans d'experience dans la coordination de projets humanitaires a Ouaké. Il supervise toutes les actions sur le terrain."
    },
    {
      id: 2,
      name: "Aminata Diallo",
      role: "Responsable tontines",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
      bio: "Elle anime les tontines dans 15 villages et gere la solidarite communautaire. Son travail a permis de mobiliser plus de 500 femmes."
    },
    {
      id: 3,
      name: "Moussa Soumanou",
      role: "Animateur communautaire",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      bio: "Au contact quotidien des populations pour identifier les besoins prioritaires et assurer le suivi des projets."
    },
    {
      id: 4,
      name: "Grace Houngbo",
      role: "Chargée de projets",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      bio: "Elle coordonne les programmes de formation professionnelle et de sante, avec un impact direct sur plus de 1000 jeunes."
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Elements decoratifs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sam-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sam-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-sam-primary/10 text-sam-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Users className="w-4 h-4" />
            <span>Notre force sur le terrain</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-sam-dark mb-4">
            L'Équipe de ONG-SAM à Ouaké
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Une chaîne de solidarité qui transforme des vies
          </p>
        </motion.div>

        {/* Timeline avec flèches courbées */}
        <div className="max-w-4xl mx-auto relative">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="relative">
              {/* Membre */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Photo */}
                <div className="w-full md:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-sam-primary to-sam-accent rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                    
                    <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-sam-primary text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                      {member.role}
                    </div>
                  </div>
                </div>
                
                {/* Bio */}
                <div className={`w-full md:w-1/2 text-center md:text-left ${
                  index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                }`}>
                  <h3 className="text-2xl font-bold text-sam-dark mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
              
              {/* Flèche courbée vers la bio suivante */}
              {index < teamMembers.length - 1 && (
                <div className="relative h-24 md:h-20 overflow-visible">
                  <svg 
                    className="absolute w-full h-full"
                    style={{ 
                      left: index % 2 === 0 ? '25%' : 'auto',
                      right: index % 2 === 0 ? 'auto' : '25%',
                      width: '50%'
                    }}
                    viewBox="0 0 200 80"
                    preserveAspectRatio="none"
                  >
                    {index % 2 === 0 ? (
                      // Flèche courbée de la photo de gauche vers la bio de droite (en bas)
                      <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                        viewport={{ once: true }}
                        d="M 100,0 C 150,20 180,40 180,70"
                        fill="none"
                        stroke="url(#teamGradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        markerEnd="url(#arrowCurved)"
                      />
                    ) : (
                      // Flèche courbée de la photo de droite vers la bio de gauche (en bas)
                      <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                        viewport={{ once: true }}
                        d="M 100,0 C 50,20 20,40 20,70"
                        fill="none"
                        stroke="url(#teamGradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        markerEnd="url(#arrowCurved)"
                      />
                    )}
                    
                    <defs>
                      <linearGradient id="teamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0A5C36" />
                        <stop offset="100%" stopColor="#E9C46A" />
                      </linearGradient>
                      
                      <marker
                        id="arrowCurved"
                        viewBox="0 0 10 10"
                        refX="5"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto"
                      >
                        <path d="M 0,0 L 10,5 L 0,10 Z" fill="#E9C46A" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Citation finale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-sam-primary to-sam-dark rounded-3xl p-10 relative overflow-hidden"
        >
          <div className="absolute -right-8 -bottom-8 opacity-10">
            <Heart className="w-48 h-48 text-white" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <Award className="w-12 h-12 text-sam-accent mx-auto mb-4" />
            
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-4">
              "Ensemble, nous formons une chaîne de solidarité qui transforme chaque jour la vie des communautés de Ouaké."
            </p>
            
            <div className="flex items-center justify-center gap-2 text-sam-accent">
              <div className="w-8 h-px bg-sam-accent/50" />
              <span className="text-sm font-semibold">L'EQUIPE SAM OUAKÉ</span>
              <div className="w-8 h-px bg-sam-accent/50" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}