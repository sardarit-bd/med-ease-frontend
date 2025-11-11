import Footer from "@/components/modules/home/Footer";
import HealthCTASection from "@/components/modules/patient/HealthCTASection";
import HeartSection from "@/components/modules/patient/HeartSection";
import HeroSectionPatient from "@/components/modules/patient/HeroSectionPatient";
import SupportTeamSection from "@/components/modules/patient/SupportTeamSection";

const { Divide } = require("lucide-react")

const Page = () => {
    return (
        <div>
            <HeroSectionPatient />
            <HeartSection />
            <HealthCTASection />
            <SupportTeamSection />
            <Footer />
        </div>
    )
}

export default Page;