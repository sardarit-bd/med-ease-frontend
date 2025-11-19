import ContactFooter from "@/components/modules/about/ContactFooter";
import TopBarSection from "@/components/modules/inscription/TopBarSection";
import Banner from "@/components/modules/mvp-home/Banner";
import HealthInfoCardsSection from "@/components/modules/mvp-home/HealthInfoCardsSection";
import MedEaseMillionStatsSection from "@/components/modules/mvp-home/MedEaseMillionStatsSection";
import ActualitesSection from "@/components/modules/thematique/ActualitesSection";
import CommunauteSection from "@/components/modules/thematique/CommunauteSection";
import AppPromotionBanner from "@/components/modules/transport/AppPromotionBanner";

export default function MVPHome() {
    return (
        <div>
            <TopBarSection />
            <Banner />
            <HealthInfoCardsSection />
            <ActualitesSection />
            <CommunauteSection />
            <AppPromotionBanner />
            <MedEaseMillionStatsSection />
            <ContactFooter />
        </div>
    )
}
