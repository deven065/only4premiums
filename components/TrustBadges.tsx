export default function TrustBadges() {
  const badges = [
    {
      icon: '🔒',
      title: 'Secure Payment',
      description: 'SSL Encrypted'
    },
    {
      icon: '✅',
      title: '100% Verified',
      description: 'Authentic Products'
    },
    {
      icon: '⚡',
      title: 'Instant Delivery',
      description: 'Within 1 Hour'
    },
    {
      icon: '💰',
      title: 'Money Back',
      description: 'Guarantee'
    }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="text-4xl mb-3">{badge.icon}</div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">{badge.title}</h4>
              <p className="text-xs text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
