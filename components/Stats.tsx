'use client'

import { Users, Package, Headphones, Shield } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation()

  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Happy Customers',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Package,
      number: '4',
      label: 'Premium Products',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Headphones,
      number: '24/7',
      label: 'Support Available',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      number: '100%',
      label: 'Secure & Safe',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-linear-to-br ${stat.color} mb-2 sm:mb-3 md:mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
