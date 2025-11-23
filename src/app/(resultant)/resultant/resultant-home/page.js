import ContactFooter from "@/components/modules/about/ContactFooter";
import TopBarSection from "@/components/modules/inscription/TopBarSection";
import FiltersPills from "@/components/modules/resultant-home/FiltersPills";
import SearchResults from "@/components/modules/resultant-home/SearchResults";
import Header from "@/components/shared/Header";
import MedicalSearchHeader from "../../../../components/modules/resultant-home/MedicalSearchHeader";

const Tematique = () => {
    return (
        <div>
            <Header />
            <TopBarSection />
            <MedicalSearchHeader />
            <FiltersPills />
            <SearchResults />
            <ContactFooter />
        </div>
    )
}

export default Tematique;