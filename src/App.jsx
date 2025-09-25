import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Hero } from './sections/Hero.jsx'
import { Highlights } from './sections/Highlights.jsx'
import { Classes } from './sections/Classes.jsx'
import { Process } from './sections/Process.jsx'
import { SocialMedia } from './sections/SocialMedia.jsx'
import { Testimonials } from './sections/Testimonials.jsx'
import { FAQ } from './sections/FAQ.jsx'
import { Contact } from './sections/Contact.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">
        <Hero />
        <Highlights />
        <Classes />
        <Process />
        <SocialMedia />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
