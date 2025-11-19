import GradientTabs from "@/components/modules/dashboard/urgences/urgences4/GradientTabs";
import MissionCardStructure from "@/components/modules/dashboard/urgences/urgences4/MissionCardStructure";
import MissionProfessionalInfo from "@/components/modules/dashboard/urgences/urgences4/MissionProfessionalInfo";

const UergencesPage1 = () => {
    return (
        <div>
            <GradientTabs />
            <MissionProfessionalInfo />
            <MissionCardStructure />
        </div>
    )
}

export default UergencesPage1;