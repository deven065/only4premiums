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
    <section ref={ref} className="py-20 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br ${stat.color} mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </h3>
              <p className="text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
