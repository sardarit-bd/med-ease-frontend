import EtablissementsList from "@/components/modules/dashboard/urgences/urgences1/EtablissementsList";
import FicheMedicaleSimplifiee from "@/components/modules/dashboard/urgences/urgences1/FicheMedicaleSimplifiee";
import LitsAvalHeader from "@/components/modules/dashboard/urgences/urgences1/LitsAvalHeader";

const UergencesPage1 = () => {
    return (
        <div>
            <LitsAvalHeader />
            <FicheMedicaleSimplifiee />
            <EtablissementsList />
        </div>
    )
}

export default UergencesPage1;