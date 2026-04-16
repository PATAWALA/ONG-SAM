import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  
  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Actions', path: '/actions' },
    { name: 'À Propos', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]
  
  const isActive = (path: string) => location.pathname === path
  
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <Heart className="w-8 h-8 text-sam-primary" />
            </motion.div>
            <span className="text-xl lg:text-2xl font-bold text-sam-primary">ONG-SAM Ouaké</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition relative py-2 ${
                  isActive(item.path) 
                    ? 'text-sam-primary' 
                    : 'text-gray-700 hover:text-sam-primary'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-sam-primary"
                  />
                )}
              </Link>
            ))}
            <Link to="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-sam-primary text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Aider ONG-SAM
              </motion.button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
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
                className={`block py-3 font-medium transition ${
                  isActive(item.path) 
                    ? 'text-sam-primary' 
                    : 'text-gray-700 hover:text-sam-primary'
                }`}
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
              <button className="w-full bg-sam-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg flex items-center justify-center gap-2">
                <Heart className="w-4 h-4" />
                Aider ONG-SAM
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  )
}