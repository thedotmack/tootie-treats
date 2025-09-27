import { Header } from '../src/components/Header'
import { Footer } from '../src/components/Footer'
import { Hero } from '../src/sections/Hero'
import { Highlights } from '../src/sections/Highlights'
import { Classes } from '../src/sections/Classes'
import { PrivateEvents } from '../src/sections/PrivateEvents'
import { Process } from '../src/sections/Process'
import { CustomCakes } from '../src/sections/CustomCakes'
import { InstagramGallery } from '../src/sections/InstagramGallery'
import { SocialMedia } from '../src/sections/SocialMedia'
import { Testimonials } from '../src/sections/Testimonials'
import { FAQ } from '../src/sections/FAQ'
import { Contact } from '../src/sections/Contact'
import { reader } from './reader'

export default async function HomePage() {
  // Fetch all content from Keystatic
  const [heroContent, highlightsContent, contactContent, faqContent, testimonialsContent, classesContent] = await Promise.all([
    reader.singletons.hero.read(),
    reader.singletons.highlights.read(),
    reader.singletons.contact.read(),
    reader.singletons.faq.read(),
    reader.singletons.testimonials.read(),
    reader.singletons.classes.read(),
  ])

  return (
    <div className="min-h-screen bg-background text-foreground relative noise-overlay">
      <div className="fixed inset-0 bg-wavy-gradient opacity-20 pointer-events-none animate-glow-pulse z-0" />
      <div className="fixed top-0 left-0 w-96 h-96 bg-accent-pink rounded-full blur-3xl opacity-10 animate-float-random mix-blend-screen" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-accent-teal rounded-full blur-3xl opacity-10 animate-float-random mix-blend-screen" style={{animationDelay: '5s'}} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-lavender rounded-full blur-3xl opacity-5 animate-float-random mix-blend-screen" style={{animationDelay: '10s'}} />
      <div className="relative z-10">
      <Header />
      <main className="pt-24">
        <Hero content={heroContent} />
        <Highlights content={highlightsContent} />
        <InstagramGallery />
        <Classes content={classesContent} />
        <PrivateEvents />
        <Process />
        <CustomCakes />
        <SocialMedia />
        <Testimonials content={testimonialsContent} />
        <FAQ content={faqContent} />
        <Contact content={contactContent} />
      </main>
      <Footer />
      </div>
    </div>
  )
}