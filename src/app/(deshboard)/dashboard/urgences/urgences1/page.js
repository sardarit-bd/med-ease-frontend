import FicheMedicaleSimplifiee from "@/components/modules/dashboard/urgences/urgences1/FicheMedicaleSimplifiee";
import LitsAvalDashboard from "@/components/modules/dashboard/urgences/urgences1/LitsAvalDashboard";
import LitsAvalHeader from "@/components/modules/dashboard/urgences/urgences1/LitsAvalHeader";
import TransfertSearch from "@/components/modules/dashboard/urgences/urgences1/TransfertSearch";

const UergencesPage1 = () => {
    return (
        <div>
            <LitsAvalHeader />
            <LitsAvalDashboard />
            <FicheMedicaleSimplifiee />
            <TransfertSearch />
        </div>
    )
}

export default UergencesPage1;