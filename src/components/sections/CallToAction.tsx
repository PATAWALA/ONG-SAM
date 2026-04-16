import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-sam-primary to-sam-dark">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            🤝 Rejoignez la Solidarité
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Votre soutien fait la différence. Ensemble, construisons un avenir meilleur pour nos communautés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button variant="donate" size="lg">
                Faire un don maintenant
              </Button>
            </Link>
            <Link to="/contact">
              <button className="bg-white text-sam-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-sam-light transition">
                Devenir bénévole
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}