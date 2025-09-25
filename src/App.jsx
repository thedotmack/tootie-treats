import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Hero } from './sections/Hero.jsx';
import { Highlights } from './sections/Highlights.jsx';
import { Menu } from './sections/Menu.jsx';
import { OrderForm } from './sections/OrderForm.jsx';
import { Process } from './sections/Process.jsx';
import { Testimonials } from './sections/Testimonials.jsx';
import { FAQ } from './sections/FAQ.jsx';
import { Contact } from './sections/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-night/95 text-white">
      <Header />
      <main className="pt-20">
        <Hero />
        <Highlights />
        <Menu />
        <Process />
        <OrderForm />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
