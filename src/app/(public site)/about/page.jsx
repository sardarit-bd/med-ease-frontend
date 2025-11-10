import AboutHeroBanner from '@/components/modules/about/AboutHeroBanner'
import ContactFooter from '@/components/modules/about/ContactFooter'
import HealthStats from '@/components/modules/about/HealthStats'
import MissionSection from '@/components/modules/about/MissionSection'
import OriginsSection from '@/components/modules/about/OriginsSection'
import VisionSection from '@/components/modules/about/VisionSection'

export default function About() {
  return (
    <div>
      <AboutHeroBanner />
      <HealthStats />
      <MissionSection />
      <VisionSection />
      <OriginsSection />
      <ContactFooter />
    </div>
  )
}
