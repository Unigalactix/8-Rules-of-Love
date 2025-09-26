'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { LoveRule } from '../data/loveRules'
import { ChevronRight, Quote, Lightbulb } from 'lucide-react'

interface RuleCardProps {
  rule: LoveRule
  index: number
}

export default function RuleCard({ rule, index }: RuleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden card-hover border-l-8 border-${rule.color}`}>
        {/* Header */}
        <div className={`bg-gradient-to-r ${rule.gradient} p-8 text-white relative overflow-hidden`}>
          <div className="absolute top-0 right-0 text-8xl opacity-10 font-bold">
            {rule.id}
          </div>
          <div className="relative z-10">
            <div className="text-6xl mb-4">{rule.icon}</div>
            <h3 className="text-3xl font-bold mb-2 font-heading">{rule.title}</h3>
            <p className="text-xl opacity-90">{rule.subtitle}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {rule.description}
          </p>

          {/* Key Points */}
          <div className="mb-6">
            <h4 className="font-semibold text-xl mb-4 flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-gray-600" />
              Key Insights
            </h4>
            <ul className="space-y-2">
              {rule.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full bg-${rule.color} mt-3 flex-shrink-0`}></div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          <div className={`bg-gradient-to-r ${rule.gradient} p-6 rounded-2xl mb-6`}>
            <Quote className="w-8 h-8 text-white/70 mb-3" />
            <blockquote className="text-white text-lg italic font-medium">
              "{rule.quote}"
            </blockquote>
          </div>

          {/* Expandable Practical Tips */}
          <div className="border-t pt-6">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between text-left"
            >
              <h4 className="font-semibold text-xl flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                Practical Tips
              </h4>
              <ChevronRight
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  isExpanded ? 'rotate-90' : ''
                }`}
              />
            </button>
            
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4">
                <ul className="space-y-3">
                  {rule.practicalTips.map((tip, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className={`w-3 h-3 rounded-full bg-${rule.color} mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-700 font-medium">{tip}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}