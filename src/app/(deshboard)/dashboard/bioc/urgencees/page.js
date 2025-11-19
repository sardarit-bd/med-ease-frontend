import BlocOperatoireTitle from "@/components/modules/dashboard/bioc/urgencees/BlocOperatoireTitle";
import HorizontalTabs from "@/components/modules/dashboard/bioc/urgencees/HorizontalTabs";
import RegionDepartmentStats from "@/components/modules/dashboard/bioc/urgencees/RegionDepartmentStats";

const BiocUrgencees = () => {
    return (
        <div>
            <BlocOperatoireTitle />
            <HorizontalTabs />
            <RegionDepartmentStats />
        </div>
    )
}

export default BiocUrgencees;