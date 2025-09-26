import { Header } from '../src/components/Header'
import { Footer } from '../src/components/Footer'
import { Hero } from '../src/sections/Hero'
import { Highlights } from '../src/sections/Highlights'
import { Classes } from '../src/sections/Classes'
import { PrivateEvents } from '../src/sections/PrivateEvents'
import { Process } from '../src/sections/Process'
import { CustomCakes } from '../src/sections/CustomCakes'
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
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">
        <Hero content={heroContent} />
        <Highlights content={highlightsContent} />
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
  )
}