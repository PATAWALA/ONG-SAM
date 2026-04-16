import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Heart } from 'lucide-react'
import Button from '../ui/Button'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Nos Actions', path: '/actions' },
    { name: 'À Propos', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]
  
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Heart className="w-8 h-8 text-sam-primary" />
            </motion.div>
            <span className="text-2xl font-bold text-sam-primary">SAM Ouaké</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-sam-primary font-medium transition"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/donate">
              <Button variant="donate" size="md">
                🤝 Aider ONG-SAM
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-3 text-gray-700 hover:text-sam-primary font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/donate"
              className="block py-3"
              onClick={() => setIsOpen(false)}
            >
              <Button variant="donate" size="md" className="w-full">
                🤝 Aider ONG-SAM
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  )
}