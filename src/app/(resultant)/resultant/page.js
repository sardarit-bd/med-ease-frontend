import ContactFooter from "@/components/modules/about/ContactFooter";
import TopBarSection from "@/components/modules/inscription/TopBarSection";
import TransportOptionPills from "@/components/modules/resultant/TransportOptionPills";
import TransportResults from "@/components/modules/resultant/TransportResults";
import TransportSanitaireResult from "@/components/modules/resultant/TransportSanitaireResult";
import Header from "@/components/shared/Header";


const ResultantPage = () => {
    return (
        <div>
            <Header />
            <TopBarSection />
            <TransportSanitaireResult />
            <TransportOptionPills />
            <TransportResults />
            <ContactFooter />
        </div>
    )
}

export default ResultantPage;