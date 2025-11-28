import Products from '@/components/Products'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Products />
      <Footer />
    </div>
  )
}
