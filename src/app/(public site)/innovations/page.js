import ContactFooter from '@/components/modules/about/ContactFooter'
import FeaturesGrid from '@/components/modules/innovations/FeaturesGrid'
import FeaturesIntro from '@/components/modules/innovations/FeaturesIntro'
import WellBeingSection from '@/components/modules/innovations/WellBeingSection'
import WhyChooseSection from '@/components/modules/innovations/WhyChooseSection'

export default function About() {
    return (
        <div>
            <WellBeingSection />
            <FeaturesIntro />
            <FeaturesGrid />
            <WhyChooseSection />
            <ContactFooter />
        </div>
    )
}
