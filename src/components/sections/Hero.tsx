import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'
import { ArrowRight, Heart } from 'lucide-react'

export default function Hero() {
  const backgroundImages = [
    {
      url: "https://images.unsplash.com/photo-1488521787991-edbbbbaed791?w=1600&q=80",
      alt: "Femme africaine avec enfant"
    },
    {
      url: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=1600&q=80",
      alt: "Femmes travaillant dans l'agriculture"
    },
    {
      url: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1600&q=80",
      alt: "Distribution d'aide humanitaire"
    },
    {
      url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600&q=80",
      alt: "Communaute africaine solidaire"
    },
    {
      url: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1600&q=80",
      alt: "Formation professionnelle"
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Carrousel d'images en fond */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1500}
          className="h-full w-full"
        >
          {backgroundImages.map((image, index) => (
            <SwiperSlide key={index}>
                <div 
                    className="h-full w-full bg-cover bg-center bg-black"
                    style={{ backgroundImage: `url('${image.url}')` }}
                />
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Overlay noir puissant */}
        <div className="absolute inset-0 bg-black/70 z-10" />
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge transparent */}
            <motion.span 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-semibold mb-8 border border-white/20"
            >
              <Heart className="w-4 h-4 text-sam-primary" />
              <span>Solidarite pour un Avenir Meilleur</span>
            </motion.span>
            
            {/* Titre principal - Plus court et percutant */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-white block">Construisons</span>
              <span className="text-sam-primary block">un avenir meilleur</span>
              <span className="text-white">pour Ouaké</span>
            </motion.h1>
            
            {/* Description - Gardee telle quelle */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-gray-300 text-base lg:text-lg mb-10 max-w-2xl leading-relaxed"
            >
              Depuis 2016, ONG-SAM lutte contre la pauvrete mentale et materielle 
              pour l'amelioration des conditions socioeconomiques des communautes.
            </motion.p>
            
            {/* Boutons d'action - Remarquables */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/actions">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-sam-primary text-white px-8 py-4 rounded-full font-bold text-base shadow-2xl hover:shadow-sam-primary/50 transition-all flex items-center gap-2 border border-sam-primary/50"
                >
                  Decouvrir nos actions
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/donate">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-sam-dark px-8 py-4 rounded-full font-bold text-base shadow-2xl hover:shadow-white/50 transition-all flex items-center gap-2"
                >
                  <Heart className="w-5 h-5 text-sam-primary" />
                  Aider ONG-SAM
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Ligne decorative en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sam-primary to-transparent z-20" />
    </section>
  )
}