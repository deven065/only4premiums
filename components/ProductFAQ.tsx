'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface ProductFAQProps {
  faqs: FAQ[]
}

export default function ProductFAQ({ faqs }: ProductFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-white border-t border-gray-300 first:border-t-0 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="font-medium text-gray-900 pr-4 text-base">{faq.question}</span>
              <ChevronDown 
                className={`h-5 w-5 text-red-500 shrink-0 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
