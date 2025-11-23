import ContactFooter from "@/components/modules/about/ContactFooter";
import HealthFeaturesSection from "@/components/modules/home2/HealthFeaturesSection";
import HeroSectionForhome from "@/components/modules/home2/HeroSectionForhome";
import ServicesSection from "@/components/modules/home2/ServicesSection";
import Header from "@/components/shared/Header";

const { Divide } = require("lucide-react")

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSectionForhome />
            <HealthFeaturesSection />
            <ServicesSection />
            <ContactFooter />
        </div>
    )
}

export default Home;