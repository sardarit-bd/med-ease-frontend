import BeneficesPlateforme from "@/components/modules/about/about2/BeneficesPlateforme";
import BrandCharter from "@/components/modules/about/about2/BrandCharter";
import EngagementSection from "@/components/modules/about/about2/EngagementSection";
import HealthIssuesSection from "@/components/modules/about/about2/HealthIssuesSection";
import ManifesteSection from "@/components/modules/about/about2/ManifesteSection";
import MedEaseHero from "@/components/modules/about/about2/MedEaseHero";
import ReperesSection from "@/components/modules/about/about2/ReperesSection";
import Timeline2025 from "@/components/modules/about/about2/Timeline2025";
import Footer from "@/components/modules/home/Footer";

const AboutTwoPage = () => {
    return (
        <div>
            <MedEaseHero />
            <div className="bg-[#F53838] text-center text-3xl py-3 text-white">
                Les Chiffres des maux du système de santé sont
            </div>
            <HealthIssuesSection />
            <BrandCharter />
            <EngagementSection />
            <ManifesteSection />
            <BeneficesPlateforme />
            <ReperesSection />
            <Timeline2025 />
            <Footer />
        </div>
    )
}

export default AboutTwoPage;