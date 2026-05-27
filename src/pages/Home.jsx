import Hero from '../components/Hero'
import Specializations from '../components/Specializations'
import Roadmap from '../components/Roadmap'
import AboutShowcase from '../components/AboutShowcase'
import CtaSection from '../components/CtaSection'
import ContactShowcase from '../components/ContactShowcase'

export default function Home() {
  return (
    <main className="pt-[126px]">
      <div className="mx-auto px-5 md:px-8 lg:px-10" style={{ maxWidth: '1600px' }}>
        <Hero />
        <Specializations />
        <Roadmap />
        <AboutShowcase />
        <CtaSection />
        <ContactShowcase />
        <div style={{ height: '48px' }} />
      </div>
    </main>
  )
}
