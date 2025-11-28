import { Star } from 'lucide-react'

interface ProductRatingProps {
  rating: number
  reviews: number
}

export default function ProductRating({ rating, reviews }: ProductRatingProps) {
  return (
    <div className="flex items-center space-x-3 mb-6">
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-bold text-xl text-gray-900">{rating}</span>
        <span className="text-gray-500 text-sm">({reviews} reviews)</span>
      </div>
    </div>
  )
}
