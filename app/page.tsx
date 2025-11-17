import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Features } from '@/components/sections/Features'
import { Integrations } from '@/components/sections/Integrations'
import { LiveDemo } from '@/components/sections/LiveDemo'
import { UseCases } from '@/components/sections/UseCases'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pricing } from '@/components/sections/Pricing'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Integrations />
      <LiveDemo />
      <UseCases />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  )
}

