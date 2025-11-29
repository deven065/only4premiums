'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'

interface Review {
  name: string
  location: string
  rating: number
  text: string
  date: string
  verified: boolean
  images?: string[]
}

interface LeaveReviewProps {
  onSubmit: (review: Review) => void
}

export default function LeaveReview({ onSubmit }: LeaveReviewProps) {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [review, setReview] = useState('')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newReview: Review = {
      name: fullName,
      location: 'INDIA',
      rating: rating,
      text: review,
      date: new Date().toLocaleDateString('en-GB', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).replace(',', ''),
      verified: true
    }

    onSubmit(newReview)
    
    // Reset form
    setRating(0)
    setReview('')
    setFullName('')
    setPhone('')
    
    // Show success message
    alert('Thank you for your review! Your review has been submitted successfully.')
  }

  return (
    <div className="mb-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">
        Leave a Review
      </h2>

      <div className="max-w-6xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Star Rating */}
          <div className="text-center">
            <div className="flex justify-center space-x-2 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110 focus:outline-none"
                >
                  <Star 
                    className={`h-10 w-10 ${
                      star <= (hoveredRating || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Review Text */}
          <div>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Why do you like this product?"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-400 focus:outline-none transition-colors resize-none text-gray-700"
              required
            />
          </div>

          {/* Full Name */}
          <div>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full name*"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-400 focus:outline-none transition-colors text-gray-700"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-400 focus:outline-none transition-colors text-gray-700"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  )
}
