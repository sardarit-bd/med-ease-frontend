"use client";
import MissionSingleCardItem from "./MIssionSingleCardItem";

export default function MissionSingleCard() {
    return (
        <div className="w-full bg-white mb-6 overflow-hidden">

            {/* HEADER */}
            <div className="relative">
                <div className="flex items-center justify-between bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white px-6 py-3 rounded-full">

                    {/* Left Badge */}
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-[#3074B5] px-4 py-2 rounded-full text-sm font-semibold shadow">
                        Non pourvue
                    </span>

                    {/* Center Title */}
                    <p className="mx-auto font-semibold text-base">Hôpital La Genneviève</p>

                    {/* Right Mission ID */}
                    <p className="font-semibold text-sm">Mission #742</p>
                </div>
            </div>

            {/* CONTENT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b-2 border-gray-100">

                {/* LEFT TABLE SECTION */}
                <div className="flex items-center">

                    {/* Row 1 */}
                    <div className="p-6 border-r-2 border-gray-100 h-full flex flex-col justify-center text-gray-700">
                        <p>Lundi 21 avril 2025</p>
                        <p>19h00–7h00</p>
                    </div>

                    {/* Row 2 */}
                    <div className="p-6 border-r-2 border-gray-100 h-full flex items-center text-gray-700">
                        Urgences – Zones
                    </div>

                    {/* Row 3 */}
                    <div className="p-6 border-r-2 border-gray-100 h-full flex items-center text-gray-700">
                        IDE
                    </div>
                </div>

                {/* RIGHT SIDE CONTENT */}
                <div className="col-span-2 p-6">

                    {/* Candidate 1 */}
                    <MissionSingleCardItem img='/images/profile_mission.png' name='Olivia LELOY' ans='25 ans' diplome='Diplômé(e) en 2016' profil='Médecine, Urgences–UHCD' satisfaction='Verte' fidelite={'10'} />

                    <MissionSingleCardItem img='/images/profile_mission.png' name='Sophie POHL' ans='35 ans' diplome='Diplômé(e) en 2011' profil='Réanimation, Urgences' satisfaction='Orange' fidelite={'30'} />

                    {/* Bottom Button */}
                    <div className="flex items-center justify-center">
                        <button className="bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white px-8 py-3 rounded-full shadow text-sm font-semibold">
                            Voir les 5 candidats
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
