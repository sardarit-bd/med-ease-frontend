import ContactFooter from "@/components/modules/about/ContactFooter";
import ActorsSection from "@/components/modules/home2/2/ActorsSection";
import HealthFeaturesSection from "@/components/modules/home2/2/HealthFeaturesSection";
import HeroSectionForhome from "@/components/modules/home2/2/HeroSectionForhome";
import Header from "@/components/publicSite/publicHeader/Header";

const { Divide } = require("lucide-react")

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSectionForhome />
            <ActorsSection />
            <HealthFeaturesSection />
            <ContactFooter />
        </div>
    )
}

export default Home;