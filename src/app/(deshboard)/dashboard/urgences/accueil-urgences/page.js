import DashboardStatusBar from "@/components/modules/dashboard/urgences/accueil-urgences/DashboardStatusBar";
import FloorPlanLayout from "@/components/modules/dashboard/urgences/accueil-urgences/FloorPlanLayout";
import TopTabsWithSubTabs from "@/components/modules/dashboard/urgences/urgences/TopTabsWithSubTabs";

const AccueilUrgences = () => {
    return (
        <div className="bg-white">
            <h1 className="px-6 py-4 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">Accueil Urgences</h1>
            <TopTabsWithSubTabs />
            <DashboardStatusBar />
            <FloorPlanLayout />
        </div >
    )
}

export default AccueilUrgences;