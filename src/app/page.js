import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Hero } from '../sections/Hero'
import { Highlights } from '../sections/Highlights'
import { Classes } from '../sections/Classes'
import { PrivateEvents } from '../sections/PrivateEvents'
import { Process } from '../sections/Process'
import { CustomCakes } from '../sections/CustomCakes'
import { InstagramGallery } from '../sections/InstagramGallery'
import { SocialMedia } from '../sections/SocialMedia'
import { Testimonials } from '../sections/Testimonials'
import { FAQ } from '../sections/FAQ'
import { Contact } from '../sections/Contact'
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
  )
}