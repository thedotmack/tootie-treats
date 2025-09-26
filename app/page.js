import { Header } from '@/src/components/Header'
import { Footer } from '@/src/components/Footer'
import { Hero } from '@/src/sections/Hero'
import { Highlights } from '@/src/sections/Highlights'
import { Classes } from '@/src/sections/Classes'
import { PrivateEvents } from '@/src/sections/PrivateEvents'
import { Process } from '@/src/sections/Process'
import { CustomCakes } from '@/src/sections/CustomCakes'
import { SocialMedia } from '@/src/sections/SocialMedia'
import { Testimonials } from '@/src/sections/Testimonials'
import { FAQ } from '@/src/sections/FAQ'
import { Contact } from '@/src/sections/Contact'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">
        <Hero />
        <Highlights />
        <Classes />
        <PrivateEvents />
        <Process />
        <CustomCakes />
        <SocialMedia />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}