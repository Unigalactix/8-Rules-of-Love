'use client'

import { useState } from 'react'
import { LoveRule } from '../data/loveRules'

interface RuleCardProps {
  rule: LoveRule
  index: number
}

export default function SimpleRuleCard({ rule, index }: RuleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="relative group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
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
              <span className="text-gray-600">→</span>
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
            <div className="text-white/70 mb-3 text-2xl">"</div>
            <blockquote className="text-white text-lg italic font-medium">
              {rule.quote}
            </blockquote>
          </div>

          {/* Expandable Practical Tips */}
          <div className="border-t pt-6">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between text-left hover:bg-gray-50 p-2 rounded-lg transition-colors"
            >
              <h4 className="font-semibold text-xl flex items-center gap-2">
                <span className="text-yellow-500">💡</span>
                Practical Tips
              </h4>
              <span className={`text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}>
                →
              </span>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pt-4">
                <ul className="space-y-3">
                  {rule.practicalTips.map((tip, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                      style={{ 
                        animationDelay: `${idx * 0.1}s`,
                        animation: isExpanded ? 'slideUp 0.3s ease-out' : 'none'
                      }}
                    >
                      <div className={`w-3 h-3 rounded-full bg-${rule.color} mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-700 font-medium">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}