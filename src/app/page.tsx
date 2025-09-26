'use client'

import HeroSection from '../components/HeroSection'
import RuleCard from '../components/RuleCard'
import { loveRules, websiteContent } from '../data/loveRules'
import { motion } from 'framer-motion'
import { Heart, BookOpen, Star } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection 
        title={websiteContent.hero.title}
        subtitle={websiteContent.hero.subtitle}
        author={websiteContent.hero.author}
        description={websiteContent.hero.description}
      />

      {/* Introduction Section */}
      <section className="py-20 px-6 bg-book-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-book-burgundy" />
            <h2 className="text-4xl md:text-5xl font-bold text-book-navy mb-6 font-heading">
              {websiteContent.sections.introduction.title}
            </h2>
            <p className="text-xl text-book-navy/80 leading-relaxed max-w-3xl mx-auto">
              {websiteContent.sections.introduction.content}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules-section" className="py-20 px-6 bg-book-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gradient-book mb-6 font-heading">
              The 8 Rules
            </h2>
            <p className="text-xl text-book-navy max-w-2xl mx-auto">
              Transform your understanding of love with these profound insights
            </p>
          </motion.div>

          <div className="grid gap-12 max-w-4xl mx-auto">
            {loveRules.map((rule, index) => (
              <RuleCard key={rule.id} rule={rule} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-book-burgundy via-book-terracotta to-book-gold">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Star className="w-16 h-16 mx-auto mb-6 text-book-ivory" />
            <h2 className="text-4xl md:text-5xl font-bold text-book-ivory mb-6 font-heading">
              {websiteContent.sections.conclusion.title}
            </h2>
            <p className="text-xl text-book-cream leading-relaxed mb-12">
              {websiteContent.sections.conclusion.content}
            </p>
            
            <motion.div
              className="bg-book-ivory/20 backdrop-blur-sm rounded-3xl p-8 inline-block border border-book-gold/30"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Heart className="w-12 h-12 mx-auto mb-4 text-book-ivory" />
              <p className="text-book-ivory text-lg font-medium">
                "Love is not just something you feel. Love is something you do."
              </p>
              <p className="text-book-cream mt-2 italic">- Jay Shetty</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-book-navy text-book-ivory py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-8 h-8 mx-auto mb-4 text-book-rose" />
          <p className="text-book-cream mb-4">
            Interactive infographic based on "8 Rules of Love" by Jay Shetty
          </p>
          <p className="text-book-cream/70 text-sm">
            Created with love for educational purposes
          </p>
        </div>
      </footer>
    </main>
  )
}