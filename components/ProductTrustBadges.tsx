import { Shield, Zap, Clock } from 'lucide-react'

export default function ProductTrustBadges() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="text-center p-4 bg-gray-50 rounded-xl">
        <Shield className="h-6 w-6 text-green-600 mx-auto mb-2" />
        <p className="text-xs text-gray-600 font-semibold">Verified Authentic</p>
      </div>
      <div className="text-center p-4 bg-gray-50 rounded-xl">
        <Zap className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
        <p className="text-xs text-gray-600 font-semibold">Instant Delivery</p>
      </div>
      <div className="text-center p-4 bg-gray-50 rounded-xl">
        <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
        <p className="text-xs text-gray-600 font-semibold">24/7 Support</p>
      </div>
    </div>
  )
}
