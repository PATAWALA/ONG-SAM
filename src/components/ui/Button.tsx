import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'donate'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
}

export default function Button({ children, variant = 'primary', size = 'md', onClick, className = '' }: ButtonProps) {
  const baseStyles = "font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-1 inline-block"
  
  const variants = {
    primary: "bg-sam-primary text-white hover:bg-sam-dark shadow-lg hover:shadow-xl",
    secondary: "bg-sam-secondary text-white hover:bg-sam-primary shadow-md hover:shadow-lg",
    outline: "border-2 border-sam-primary text-sam-primary hover:bg-sam-primary hover:text-white",
    donate: "bg-gradient-to-r from-sam-warm to-sam-accent text-sam-dark font-bold shadow-xl hover:shadow-2xl animate-pulse-slow"
  }
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}