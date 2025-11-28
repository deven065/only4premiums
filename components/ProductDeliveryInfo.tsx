import { Package, Clock, Shield } from 'lucide-react'

export default function ProductDeliveryInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-green-50 rounded-xl p-4 flex items-start space-x-3">
        <Package className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-gray-900 text-sm mb-1">Delivery</h3>
          <p className="text-green-600 text-sm font-semibold">Delivered instantly via WhatsApp.</p>
        </div>
      </div>

      <div className="bg-green-50 rounded-xl p-4 flex items-start space-x-3">
        <Clock className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-gray-900 text-sm mb-1">Delivery Time</h3>
          <p className="text-green-600 text-sm font-semibold">10 Minute - 1 Hour</p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-4 flex items-start space-x-3">
        <Shield className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-gray-900 text-sm mb-1">Guarantee</h3>
          <p className="text-blue-600 text-sm font-semibold">Full registration package</p>
        </div>
      </div>
    </div>
  )
}
