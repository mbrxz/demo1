import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import Services from '../components/Services'
import Process from '../components/Process'
import Gallery from '../components/Gallery'
import Reviews from '../components/Reviews'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />
      <Services />
      <Process />
      <Gallery />
      <Reviews />
      <ContactForm />
      <Footer />
    </main>
  )
}
