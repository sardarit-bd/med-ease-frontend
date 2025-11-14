import ActivitiesCard from "./cards/ActivitiesCard";
import CalendarRdvCard from "./cards/CalendarRdvCard";
import CarePathCard from "./cards/CarePathCard";
import EvolutionCard from "./cards/EvolutionCard";
import HopitauxVilleCard from "./cards/HopitauxVilleCard";
import ObjectifCard from "./cards/ObjectifCard";
import PartenairesCard from "./cards/PartenairesCard";
import ProspectsClientsCard from "./cards/ProspectsClientsCard";
import QualityCard from "./cards/QualityCard";
import SeniorCard from "./cards/SeniorCard";
import UrgencesCard from "./cards/UrgencesCard";


export default function MainContent() {
  return (
    <main className="flex-1 overflow-auto bg-slate-50 ">
      <div className="w-full h-full">
        {/* Mobile: 1 column | Tablet (640px): 2 columns | Laptop (1024px): 3 columns | Desktop (1280px): 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-4 lg:gap-4 auto-rows-max">
          {/* Column 1 - Left */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-4">
            <ActivitiesCard />
            <ObjectifCard />
            <PartenairesCard />
            <EvolutionCard />
          </div>

          {/* Column 2 - Center-Left */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-4 col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-4">
              <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-4 lg:gap-4">
                <UrgencesCard />
                <SeniorCard />
              </div>
              <HopitauxVilleCard />
            </div>
            <CarePathCard />
            <QualityCard />
          </div>

          {/* Column 4 - Right (Stack with Column 3 on tablet) */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-4">
            <CalendarRdvCard />
            <ProspectsClientsCard />
          </div>
        </div>
      </div>
    </main>
  )
}
