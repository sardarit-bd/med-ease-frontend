import DataCard from "@/components/modules/dashboard/bedManager/DataCard";
import FiltersCard from "@/components/modules/dashboard/bedManager/FiltersCard";
import ResultsCard from "@/components/modules/dashboard/bedManager/ResultsCard";
import ActivitiesCard from "@/components/modules/dashboard/cards/ActivitiesCard";
import CalendarRdvCard from "@/components/modules/dashboard/cards/CalendarRdvCard";
import EvolutionCard from "@/components/modules/dashboard/cards/EvolutionCard";
import ObjectifCard from "@/components/modules/dashboard/cards/ObjectifCard";
import PartenairesCard from "@/components/modules/dashboard/cards/PartenairesCard";
import ProspectsClientsCard from "@/components/modules/dashboard/cards/ProspectsClientsCard";



export default function page() {
    return (
        <main className="flex-1 overflow-auto bg-slate-50">
            <div className="w-full h-full px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 md:py-6">
                {/* Mobile: 1 column | Tablet (640px): 2 columns | Laptop (1024px): 3 columns | Desktop (1280px): 4 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 auto-rows-max">
                    {/* Column 1 - Left */}
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                        <ActivitiesCard />
                        <ObjectifCard />
                        <PartenairesCard />
                        <EvolutionCard />
                    </div>

                    {/* Column 2 - Center-Left */}
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 col-span-2">
                        <FiltersCard />
                        <DataCard />
                        <ResultsCard />

                    </div>

                    {/* Column 4 - Right (Stack with Column 3 on tablet) */}
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                        <CalendarRdvCard />
                        <ProspectsClientsCard />
                    </div>
                </div>
            </div>
        </main>
    )
}
