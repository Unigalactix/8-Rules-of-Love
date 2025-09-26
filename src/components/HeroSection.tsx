'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowDown } from 'lucide-react'

interface HeroSectionProps {
  title: string
  subtitle: string
  author: string
  description: string
}

export default function HeroSection({ title, subtitle, author, description }: HeroSectionProps) {
  const scrollToRules = () => {
    document.getElementById('rules-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-book-burgundy via-book-navy to-book-gold overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-book-ivory/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-book-cream/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-book-gold/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Heart className="w-16 h-16 mx-auto mb-6 text-white animate-pulse-slow" />
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 font-heading tracking-tight">
            {title}
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 mb-2 font-light">
            {subtitle}
          </p>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 italic">
            {author}
          </p>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-12">
            {description}
          </p>
          
          <motion.button
            onClick={scrollToRules}
            className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/30 transition-all duration-300 flex items-center gap-3 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover the Rules
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  )
}