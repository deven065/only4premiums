import { User, Target, Heart } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-4 py-2 rounded-full">OUR STORY</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                Empowering Success Through Accessible Premium Tools
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Founded by Sandeep, <span className="font-semibold text-purple-600">Only4Premiums</span> was born from a simple belief: 
                  premium tools shouldn&apos;t be a luxury reserved for corporations with deep pockets.
                </p>
                <p>
                  We&apos;ve created a curated marketplace where professionals, students, and businesses 
                  can access industry-leading software at prices that make sense. Every subscription 
                  is verified, every partnership is vetted, and every customer is valued.
                </p>
                <p className="font-medium text-gray-700">
                  Our commitment goes beyond just affordability—we&apos;re building a community where 
                  innovation and growth are accessible to everyone, regardless of budget constraints.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-xl hover:bg-purple-50 transition-colors">
                  <div className="inline-flex p-4 bg-linear-to-br from-purple-500 to-purple-600 rounded-2xl mb-3 shadow-lg">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div className="font-bold text-gray-900">Customer-Centric</div>
                  <div className="text-sm text-gray-600 mt-1">Your success is our priority</div>
                </div>
                <div className="text-center p-4 rounded-xl hover:bg-pink-50 transition-colors">
                  <div className="inline-flex p-4 bg-linear-to-br from-pink-500 to-pink-600 rounded-2xl mb-3 shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <div className="font-bold text-gray-900">Best Value</div>
                  <div className="text-sm text-gray-600 mt-1">Unbeatable pricing guaranteed</div>
                </div>
                <div className="text-center p-4 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="inline-flex p-4 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl mb-3 shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div className="font-bold text-gray-900">Trusted Partner</div>
                  <div className="text-sm text-gray-600 mt-1">Reliable & transparent</div>
                </div>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-linear-to-br from-purple-500 to-purple-600 p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-purple-100 font-medium">Active Clients</div>
              </div>
              <div className="bg-linear-to-br from-pink-500 to-pink-600 p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-pink-100 font-medium">Premium Tools</div>
              </div>
              <div className="bg-linear-to-br from-blue-500 to-blue-600 p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-blue-100 font-medium">Expert Support</div>
              </div>
              <div className="bg-linear-to-br from-green-500 to-green-600 p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-green-100 font-medium">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-20 p-8 bg-linear-to-br from-purple-50 to-pink-50 rounded-3xl">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Why Professionals Trust Us</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🔒</div>
                <div className="font-bold text-gray-900">Secure Payments</div>
                <div className="text-sm text-gray-600 mt-1">Bank-grade encryption</div>
              </div>
              <div className="group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">⚡</div>
                <div className="font-bold text-gray-900">Instant Access</div>
                <div className="text-sm text-gray-600 mt-1">Immediate activation</div>
              </div>
              <div className="group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">💯</div>
                <div className="font-bold text-gray-900">Verified Authentic</div>
                <div className="text-sm text-gray-600 mt-1">Official partnerships</div>
              </div>
              <div className="group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🎯</div>
                <div className="font-bold text-gray-900">Best Rates</div>
                <div className="text-sm text-gray-600 mt-1">Price match guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
