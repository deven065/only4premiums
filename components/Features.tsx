import { Shield, Wallet, Star } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Star,
      title: 'Curated Excellence',
      description: 'Access premium subscriptions from industry-leading platforms, carefully selected for maximum value and reliability',
      color: 'text-yellow-500',
      bgColor: 'from-yellow-50 to-orange-50'
    },
    {
      icon: Wallet,
      title: 'Unmatched Value',
      description: 'Save up to 90% on premium subscriptions while maintaining full access to all enterprise features',
      color: 'text-green-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Shield,
      title: 'Risk-Free Guarantee',
      description: 'Complete peace of mind with our 100% money-back guarantee and 24/7 dedicated customer support',
      color: 'text-blue-500',
      bgColor: 'from-blue-50 to-indigo-50'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 opacity-0 animate-fadeInUp">
            <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-4 py-2 rounded-full">WHY CHOOSE ONLY4PREMIUMS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 opacity-0 animate-fadeInUp animation-delay-200">
            The Premium Difference
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fadeInUp animation-delay-400">
            Experience enterprise-grade solutions with personalized service and uncompromising quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group relative bg-linear-to-br ${feature.bgColor} p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-purple-300 hover:-translate-y-2 overflow-hidden opacity-0 animate-scaleIn`}
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="inline-flex p-5 bg-white rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
