import MainLayoutforthisDashboard from "@/components/modules/dashboard/urgences/urgences/MainLayoutforthisDashboard";
import TopTabsWithSubTabs from "@/components/modules/dashboard/urgences/urgences/TopTabsWithSubTabs";
import UrgencesDashboardStatusBar from "@/components/modules/dashboard/urgences/urgences/UrgencesDashboardStatusBar";

const UergencesPage = () => {
    return (
        <div>
            <TopTabsWithSubTabs />
            <UrgencesDashboardStatusBar />
            <MainLayoutforthisDashboard />
        </div>
    )
}

export default UergencesPage;