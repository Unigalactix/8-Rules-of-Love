'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, Lightbulb, Heart, Users, Shield, Globe } from 'lucide-react'

interface PracticeCategory {
  title: string
  icon: any
  color: string
  gradient: string
  practices: {
    name: string
    description: string
    steps: string[]
  }[]
}

const practicesData: PracticeCategory[] = [
  {
    title: "Preparing for Love (Brahmacharya)",
    icon: Heart,
    color: "book-burgundy",
    gradient: "from-book-burgundy to-book-navy",
    practices: [
      {
        name: "Solo Audit",
        description: "Build comfort with being alone through intentional practice",
        steps: [
          "Track all active solo pastimes for one week (no TV/phone scrolling)",
          "Note whether each activity feels comfortable or uncomfortable and why",
          "Choose one new solo activity each week for a month",
          "Reflect: How long to feel comfortable? Would a companion change your opinion?"
        ]
      },
      {
        name: "Younger-Self Meditation",
        description: "Connect with unresolved needs from childhood to understand current patterns",
        steps: [
          "Visualize your 13-14 year old self in a quiet space",
          "Offer your younger self the words of comfort they needed but never received",
          "Listen to what your younger self might say in return",
          "Identify the 'gifts and gaps' that still influence you today"
        ]
      },
      {
        name: "Identify Parental Gifts and Gaps",
        description: "Understand how your upbringing shapes your relationship choices",
        steps: [
          "Recall your three best and three worst childhood memories",
          "Analyze how parents helped (or didn't help) during difficult times",
          "Reflect on parental expectations and how they affect your choices now",
          "Identify relationship elements your parents modeled that you repeat or reject"
        ]
      }
    ]
  },
  {
    title: "Practicing Love (Grhastha)",
    icon: Users,
    color: "book-rose",
    gradient: "from-book-rose to-book-mauve",
    practices: [
      {
        name: "The Three-Date Rule",
        description: "Assess long-term compatibility across personality, values, and goals",
        steps: [
          "Date One (Personality): Ask about passions, curiosities, and character",
          "Date Two (Values): Explore significant life experiences and what makes them proud",
          "Date Three (Goals): Understand their dreams and aspirations for the future",
          "Assess: Do you like their personality, respect their values, want to help their goals?"
        ]
      },
      {
        name: "Monthly Relationship Check-in",
        description: "Build realistic dreams together through structured communication",
        steps: [
          "Identify a highlight: What are you grateful for this month?",
          "Identify a challenge: What are you struggling with?",
          "Find something to work toward: Plan a shared goal for next month",
          "Schedule this as a recurring one-hour monthly meeting"
        ]
      },
      {
        name: "Support Your Partner's Goals",
        description: "Be an effective 'guru' by serving rather than controlling",
        steps: [
          "Ask: 'What's really important to you right now?'",
          "Ask: 'What do you need to get there?'",
          "Ask: 'Is there anything I can do to help you?'",
          "Focus on their journey, not imposing your own vision"
        ]
      }
    ]
  },
  {
    title: "Protecting Love (Vanaprastha)",
    icon: Shield,
    color: "book-sage",
    gradient: "from-book-sage to-book-forest",
    practices: [
      {
        name: "The PEACE Process",
        description: "Navigate conflicts constructively using this five-step framework",
        steps: [
          "Place & Time: Choose neutral time and place, sit side-by-side",
          "Expression: Use 'we' statements and 'I feel' language, avoid accusations",
          "Anger Management: Stay neutral, guide back to shared intention",
          "Commitment: Find concrete solutions both partners can commit to",
          "Evolution: Apologize with Acceptance, Articulation, and Action"
        ]
      },
      {
        name: "Conflict Agreement",
        description: "Pre-agree on rules of engagement during peaceful times",
        steps: [
          "Set rules for time and place of difficult conversations",
          "Agree on a shared intention statement before arguing",
          "Commit to brainstorming solutions together",
          "Create specific consequences for breaking the agreement"
        ]
      },
      {
        name: "Give Yourself Closure",
        description: "Heal from a breakup by creating your own narrative",
        steps: [
          "Write down all the pain your partner caused in detail",
          "Identify who was responsible for which actions honestly",
          "List all the negative patterns the breakup freed you from",
          "Create an inventory of reasons why the breakup was ultimately positive"
        ]
      }
    ]
  },
  {
    title: "Perfecting Love (Sannyasa)",
    icon: Globe,
    color: "book-gold",
    gradient: "from-book-gold to-book-bronze",
    practices: [
      {
        name: "Expand Your Circle of Love",
        description: "Practice love in concentric circles from family to strangers to earth",
        steps: [
          "Family & Friends: Practice Understanding, Belief, Acceptance, Appreciation",
          "Colleagues: Bring daily appreciation and mentorship to work",
          "Community: Notice a need in your community and work to fulfill it",
          "Strangers: Practice simple acts of kindness (smile, generosity, presence)"
        ]
      },
      {
        name: "Structure Your Social Network",
        description: "Consciously allocate time and energy using Dunbar's theory",
        steps: [
          "Identify your 5 most loved ones (closest relationships)",
          "List your 15 good friends (regular meaningful contact)",
          "Identify 50 friends (periodic meaningful contact)",
          "Map 150 meaningful contacts (occasional but intentional connection)"
        ]
      },
      {
        name: "Helper's High Practice",
        description: "Experience the joy of selfless service to generate more love",
        steps: [
          "Choose one person each day to send specific appreciation or thanks",
          "Volunteer for a cause you care about without expecting recognition",
          "Help a difficult family member find community connections",
          "Practice random acts of kindness with strangers safely"
        ]
      }
    ]
  }
]

function PracticeCard({ practice, categoryColor }: { practice: any, categoryColor: string }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-book-ivory rounded-xl shadow-sm border border-book-cream hover:shadow-md transition-shadow duration-300">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left flex items-start justify-between hover:bg-book-cream/50 rounded-xl transition-colors duration-200"
      >
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-book-navy mb-2">{practice.name}</h4>
          <p className="text-book-navy/70">{practice.description}</p>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-${categoryColor} mt-1 ml-4 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t border-book-cream/50"
        >
          <div className="p-6 pt-4">
            <h5 className="font-medium text-book-navy mb-3 flex items-center gap-2">
              <Lightbulb className={`w-4 h-4 text-${categoryColor}`} />
              Steps to Practice:
            </h5>
            <ol className="space-y-2">
              {practice.steps.map((step: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className={`w-6 h-6 rounded-full bg-${categoryColor}/10 text-${categoryColor} text-sm font-medium flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    {idx + 1}
                  </span>
                  <span className="text-book-navy/80 text-sm leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default function PracticesSection() {
  return (
    <section className="py-20 px-6 bg-book-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-book mb-6 font-heading">
            Practical Exercises
          </h2>
          <p className="text-xl text-book-navy/80 max-w-3xl mx-auto leading-relaxed">
            Transform wisdom into action with these structured practices from Jay Shetty's framework. 
            Each exercise is designed to build specific skills for your love journey, from solitude to universal service.
          </p>
        </motion.div>

        <div className="space-y-12">
          {practicesData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`bg-gradient-to-r ${category.gradient} rounded-2xl p-6 mb-6`}>
                <div className="flex items-center gap-4">
                  <category.icon className="w-8 h-8 text-book-ivory" />
                  <h3 className="text-2xl font-bold text-book-ivory font-heading">
                    {category.title}
                  </h3>
                </div>
              </div>

              <div className="grid gap-4">
                {category.practices.map((practice, practiceIndex) => (
                  <PracticeCard 
                    key={practiceIndex} 
                    practice={practice} 
                    categoryColor={category.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-book-ivory rounded-3xl p-8 max-w-4xl mx-auto shadow-lg border border-book-gold/20">
            <h3 className="text-2xl font-bold text-book-navy mb-4 font-heading">
              From Knowledge to Practice
            </h3>
            <p className="text-book-navy/80 leading-relaxed text-lg">
              "Love is not a mystery to be solved but a habit to be built." These exercises transform 
              Jay Shetty's insights into daily practices, helping you move from wishing for love to 
              actively creating it in every interaction.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}