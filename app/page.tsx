import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import Stats from '@/components/Stats'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import ProofSlider from '@/components/ProofSlider'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Stats />
        <HowItWorks />
        <Features />
        <Testimonials />
        <ProofSlider />
        <About />
      </main>
      <Footer />
    </div>
  )
}
