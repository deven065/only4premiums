import { Check } from 'lucide-react'

interface ProductFeaturesListProps {
  title: string
  features: string[]
  bgColor?: 'white' | 'purple'
}

export default function ProductFeaturesList({ title, features, bgColor = 'white' }: ProductFeaturesListProps) {
  const bgClass = bgColor === 'purple' 
    ? 'bg-purple-50 border-purple-200' 
    : 'bg-white border-gray-100'
  
  const iconColor = bgColor === 'purple' 
    ? 'text-purple-600' 
    : 'text-green-500'

  return (
    <div className={`${bgClass} border-2 rounded-2xl p-8`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <ul className="space-y-3">
        {features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-center text-gray-700">
            <Check className={`h-5 w-5 ${iconColor} mr-3 shrink-0`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
