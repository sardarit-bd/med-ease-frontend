import ActivitiesCard from "./cards/activities-card"
import CalendarCard from "./cards/calendar-card"
import ClientsCard from "./cards/clients-card"
import EvolutionCard from "./cards/evolution-card"
import HopitauxCard from "./cards/hopitaux-card"
import ObjectifCard from "./cards/objectif-card"
import PartenairesCard from "./cards/partenaires-card"
import ProspectsCard from "./cards/prospects-card"
import RDVCard from "./cards/rdv-card"
import UrgencesCard from "./cards/urgences-card"

export default function MainContent() {
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
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <UrgencesCard />
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">Senior</h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">760</div>
                  <div className="text-xs sm:text-sm text-slate-500">Structures</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">88%</div>
                  <div className="text-xs sm:text-sm text-slate-500">Taux d'occupation</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">Ville</h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">60</div>
                  <div className="text-xs sm:text-sm text-slate-500">Médecin disponibles</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">40</div>
                  <div className="text-xs sm:text-sm text-slate-500">Médecin recevant nouveaux patients</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">Qualité</h3>
              <div className="space-y-2 sm:space-y-3">
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-teal-600 mb-1">Messages</h4>
                  <p className="text-xs text-slate-600">Garnier David, Transfert d'hôpital</p>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-teal-600 mb-1">Signalements</h4>
                  <p className="text-xs text-slate-600">
                    Mme X, pour l'Hôpital Lacomte, hospitalisation le 15 novembre
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Center-Right (Hidden on mobile, visible on tablet+) */}
          <div className="hidden sm:flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <HopitauxCard />
          </div>

          {/* Column 4 - Right (Stack with Column 3 on tablet) */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <CalendarCard />
            <RDVCard />
            <ProspectsCard />
            <ClientsCard />
          </div>
        </div>
      </div>
    </main>
  )
}
