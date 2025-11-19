import BlocFilters from "@/components/modules/dashboard/bioc/BlocFilters";
import BlocOperatoireTitle from "@/components/modules/dashboard/bioc/BlocOperatoireTitle";
import BlocSearchBar from "@/components/modules/dashboard/bioc/BlocSearchBar";
import BlocStatsSection from "@/components/modules/dashboard/bioc/BlocStatsSection";

const Bioc = () => {
    return (
        <div>
            <BlocOperatoireTitle />
            <BlocFilters />
            <BlocSearchBar />
            <BlocStatsSection />
        </div>
    )
}

export default Bioc;