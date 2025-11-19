import ContactFooter from "@/components/modules/about/ContactFooter";
import InscriptionBanner from "@/components/modules/inscription/InscriptionBanner";
import NextStepsSection from "@/components/modules/inscription/NextStepsSection";
import TopBarSection from "@/components/modules/inscription/TopBarSection";

const { default: Header } = require("@/components/shared/header")


const Inscription = () => {
    return (
        <div>
            <Header />
            <TopBarSection />
            <InscriptionBanner />
            <NextStepsSection />
            <ContactFooter />
        </div>
    )
}


export default Inscription;