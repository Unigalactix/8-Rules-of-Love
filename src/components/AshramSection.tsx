'use client'

import { motion } from 'framer-motion'

interface AshramCardProps {
  number: number
  sanskrit: string
  english: string
  stage: string
  description: string
  rules: string
  color: string
  gradient: string
  icon: string
}

const ashramsData: AshramCardProps[] = [
  {
    number: 1,
    sanskrit: "Brahmacharya",
    english: "Preparing for Love",
    stage: "The Foundation of Solitude",
    description: "Before you can effectively love another, you must first learn to love yourself. This stage involves understanding your own mind, healing past pain, and developing foundational qualities like compassion and patience.",
    rules: "Rules 1-2",
    color: "book-burgundy",
    gradient: "from-book-burgundy to-book-navy",
    icon: "🧘‍♀️"
  },
  {
    number: 2,
    sanskrit: "Grhastha",
    english: "Practicing Love",
    stage: "The Practice of Partnership",
    description: "This stage focuses on partnership and compatibility. It is the stage of extending the love cultivated in solitude to another person, learning to understand, appreciate, and cooperate with a different mind and set of values.",
    rules: "Rules 3-5",
    color: "book-rose",
    gradient: "from-book-rose to-book-mauve",
    icon: "💑"
  },
  {
    number: 3,
    sanskrit: "Vanaprastha",
    english: "Protecting Love",
    stage: "The Resilience of Connection",
    description: "A space for healing and conflict resolution. It addresses the inevitable challenges, disagreements, and potential breakups that occur in relationships, teaching how to navigate struggles to either strengthen bonds or part ways consciously.",
    rules: "Rules 6-7",
    color: "book-sage",
    gradient: "from-book-sage to-book-forest",
    icon: "🛡️"
  },
  {
    number: 4,
    sanskrit: "Sannyasa",
    english: "Perfecting Love",
    stage: "The Expansion of the Heart",
    description: "The most expansive classroom where love transcends individual partnership and extends to every person and moment of life. Here, love becomes a boundless and selfless force of universal connection and service.",
    rules: "Rule 8",
    color: "book-gold",
    gradient: "from-book-gold to-book-bronze",
    icon: "🌍"
  }
]

function AshramCard({ ashram, index }: { ashram: AshramCardProps, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className={`bg-book-ivory rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border-l-6 border-${ashram.color}`}>
        <div className={`bg-gradient-to-r ${ashram.gradient} p-6 text-book-ivory relative overflow-hidden`}>
          <div className="absolute top-0 right-0 text-6xl opacity-20 font-bold">
            {ashram.number}
          </div>
          <div className="relative z-10">
            <div className="text-4xl mb-3">{ashram.icon}</div>
            <h3 className="text-2xl font-bold mb-1 font-heading">{ashram.sanskrit}</h3>
            <p className="text-lg opacity-90 mb-1">{ashram.english}</p>
            <p className="text-sm opacity-75 font-medium">{ashram.rules}</p>
          </div>
        </div>

        <div className="p-6">
          <h4 className="text-xl font-semibold text-book-navy mb-3 font-heading">
            {ashram.stage}
          </h4>
          <p className="text-book-navy/80 leading-relaxed">
            {ashram.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function AshramSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-book-ivory to-book-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-book mb-6 font-heading">
            The Four Ashrams
          </h2>
          <p className="text-xl text-book-navy/80 max-w-3xl mx-auto leading-relaxed">
            Jay Shetty reinterprets the ancient Vedic stages of life as four distinct "classrooms" 
            that provide a progressive path for developing the necessary skills for fulfilling relationships. 
            These are not rigid phases but dynamic states of being that one cycles through on the journey to mastering love.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {ashramsData.map((ashram, index) => (
            <AshramCard key={ashram.number} ashram={ashram} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-book-burgundy/10 rounded-3xl p-8 max-w-4xl mx-auto border border-book-burgundy/20">
            <h3 className="text-2xl font-bold text-book-burgundy mb-4 font-heading">
              The Central Philosophy
            </h3>
            <p className="text-book-navy leading-relaxed text-lg">
              "When you like a flower, you pluck it. When you love a flower, you water it daily." 
              This metaphor establishes that true, lasting love is not about acquisition but about 
              consistent nurturing and attention. Love is not a mystical event to be passively awaited, 
              but an intentional practice and skill to be cultivated through each ashram.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}