'use client'

import { useState } from 'react'
import { Star, ChevronDown } from 'lucide-react'
import Image from 'next/image'

interface Review {
  name: string
  location: string
  rating: number
  text: string
  date: string
  verified: boolean
  images?: string[]
}

interface CustomerReviewsProps {
  rating: number
  totalReviews: number
  reviews: Review[]
  ratingBreakdown: {
    5: number
    4: number
    3: number
    2: number
    1: number
  }
  reviewImages?: string[]
}

export default function CustomerReviews({ 
  rating, 
  totalReviews, 
  reviews,
  ratingBreakdown,
  reviewImages = []
}: CustomerReviewsProps) {
  const [visibleCount, setVisibleCount] = useState(3)
  const displayedReviews = reviews.slice(0, visibleCount)
  const hasMore = visibleCount < reviews.length

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  const getColorForInitials = (name: string) => {
    const colors = [
      'bg-yellow-400 text-black',
      'bg-blue-400 text-white',
      'bg-green-400 text-black',
      'bg-purple-400 text-white',
      'bg-pink-400 text-white',
      'bg-orange-400 text-black'
    ]
    const index = name.charCodeAt(0) % colors.length
    return colors[index]
  }

  return (
    <div className="mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
        Customer - reviews
      </h2>

      <div className="max-w-6xl mx-auto">
        {/* Rating Summary */}
        <div className="bg-white rounded-3xl border-2 border-gray-100 p-8 lg:p-12 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Overall Rating */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-7xl font-bold text-gray-900 mb-4">{rating}</div>
              <div className="flex space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-8 w-8 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-600">{totalReviews} reviews</p>
            </div>

            {/* Right Side - Rating Breakdown */}
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((stars) => {
                const count = ratingBreakdown[stars as keyof typeof ratingBreakdown]
                const percentage = (count / totalReviews) * 100
                
                return (
                  <div key={stars} className="flex items-center space-x-3">
                    <div className="flex space-x-1 w-32">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < stars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gray-800 rounded-full transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-gray-600 w-8 text-right">{count}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Image Review Gallery */}
        {reviewImages.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Image Review</h3>
            <div className="flex gap-3 overflow-x-auto pb-4">
              {reviewImages.map((img, idx) => (
                <div key={idx} className="relative h-24 w-32 shrink-0 rounded-lg overflow-hidden">
                  <Image 
                    src={img} 
                    alt={`Review image ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Individual Reviews */}
        <div className="space-y-6">
          {displayedReviews.map((review, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl border-2 border-gray-100 p-6 hover:border-purple-200 transition-colors"
            >
              <div className="flex items-start space-x-4">
                {/* Avatar */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${getColorForInitials(review.name)}`}>
                  {getInitials(review.name)}
                </div>

                {/* Review Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {review.rating === 5 ? 'Excellent' : review.rating === 4 ? 'Very Good' : review.rating === 3 ? 'Good' : 'Average'}
                    </span>
                  </div>

                  {/* Verified Badge */}
                  {review.verified && (
                    <div className="inline-flex items-center space-x-1 text-sm text-green-600 mb-3">
                      <span>✓</span>
                      <span>Purchased from Only4Premiums</span>
                    </div>
                  )}

                  {/* Review Text */}
                  <p className="text-gray-700 mb-3">{review.text}</p>

                  {/* Review Images */}
                  {review.images && review.images.length > 0 && (
                    <div className="flex gap-2 mb-3">
                      {review.images.map((img, imgIdx) => (
                        <div key={imgIdx} className="relative h-20 w-20 rounded-lg overflow-hidden">
                          <Image 
                            src={img} 
                            alt={`${review.name} review image ${imgIdx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Date */}
                  <p className="text-sm text-gray-400">Comment on {review.date}</p>
                </div>
              </div>
            </div>
          ))}

          {/* See More Button */}
          {hasMore && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setVisibleCount(prev => prev + 4)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full transition-all flex items-center space-x-2"
              >
                <span>SEE MORE</span>
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
