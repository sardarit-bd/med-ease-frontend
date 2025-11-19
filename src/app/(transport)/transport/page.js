import ContactFooter from "@/components/modules/about/ContactFooter";
import AppPromotionBanner from "@/components/modules/transport/AppPromotionBanner";
import InformationsCles from "@/components/modules/transport/InformationsCles";
import SuggestionsConseils from "@/components/modules/transport/SuggestionsConseils";
import TransportSanitaireHero from "@/components/modules/transport/TransportSanitaireHero";
import Header from "@/components/shared/header";

const TransportPage = () => {
    return (
        <>
            <Header />
            <TransportSanitaireHero />
            <InformationsCles />
            <SuggestionsConseils />
            <AppPromotionBanner />
            <ContactFooter />
        </>
    )
}

export default TransportPage;