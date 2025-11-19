import ContactFooter from "@/components/modules/about/ContactFooter";
import TopBarSection from "@/components/modules/inscription/TopBarSection";
import ActualitesSection from "@/components/modules/thematique/ActualitesSection";
import CommunauteSection from "@/components/modules/thematique/CommunauteSection";
import FederationsSection from "@/components/modules/thematique/FederationsSection";
import GestesPratiquesSection from "@/components/modules/thematique/GestesPratiquesSection";
import MedicalSearchHeader from "@/components/modules/thematique/MedicalSearchHeader";
import OffreSoinsSection from "@/components/modules/thematique/OffreSoinsSection";
import PrivilegesSection from "@/components/modules/thematique/PrivilegesSection";
import StatisticsSection from "@/components/modules/thematique/StatisticsSection";

const Tematique = () => {
    return (
        <div>
            <TopBarSection />
            <MedicalSearchHeader />
            <StatisticsSection />
            <OffreSoinsSection />
            <PrivilegesSection />
            <GestesPratiquesSection />
            <ActualitesSection />
            <CommunauteSection />
            <FederationsSection />
            <ContactFooter />
        </div>
    )
}

export default Tematique;