"use client";

import AdmissionCard from "@/components/modules/dashboard/medical/AdmissionCard";
import ConciergeCard from "@/components/modules/dashboard/medical/ConciergeCard";
import DeptCard from "@/components/modules/dashboard/medical/DeptCard";
import StatCard from "@/components/modules/dashboard/medical/StatCard";
import TransportCard from "@/components/modules/dashboard/medical/TransportCard";
import state1 from "../../../../../public/icons/state1.png";
import state2 from "../../../../../public/icons/state2.png";
import state3 from "../../../../../public/icons/state3.png";
import state4 from "../../../../../public/icons/state4.png";
import state5 from "../../../../../public/icons/state5.png";
import state6 from "../../../../../public/icons/state6.png";
import state7 from "../../../../../public/icons/state7.png";

export default function Dashboard() {


    const icons = [state1, state2, state3, state4, state5, state6, state7];



    return (
        <div className="w-full bg-[#f7fbfc] min-h-screen">
            <h1 className="text-xl font-semibold text-[var(--textDark)] mb-2">
                Tableau de bord Établissement
            </h1>
            <p className="pb-4">
                Capacités & Activité interne
            </p>

            {/* TOP STATS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard title="Taux d'occupation" value="88%" subtitle="Médecine" icon={icons[0]} />
                <StatCard title="Lits disponibles" value="42" subtitle="sur 300 lits" icon={icons[1]} />
                <StatCard title="Bloc opératoire" value="92%" subtitle="Taux utilisation" icon={icons[2]} />
                <StatCard title="Interventions" value="23" subtitle="Prévues aujourd’hui" icon={icons[3]} />
            </div>

            {/* Disponibilités */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <DeptCard
                    title="Médecine"
                    beds={15}
                    percentage={80}
                    color="#1ff50bff"
                />

                <DeptCard
                    title="Chirurgie"
                    beds={12}
                    percentage={60}
                    color="#f59e0b"
                />

                <DeptCard
                    title="Réanimation"
                    beds={5}
                    percentage={95}
                    color="#f30707ff"
                />
            </div>

            {/* External Activity */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <StatCard title="Lits disponibles" value="156" subtitle="Dans le territoire" icon={icons[4]} />
                <StatCard title="Bloc opératoire" value="8 créneaux" subtitle="Dispo 48h" icon={icons[5]} />
                <StatCard title="Transports actifs" value="12" subtitle="Ambulances dispo" icon={icons[6]} />
            </div>

            <div className="my-4 flex items-center gap-4">
                <button className="bg-blue-500 text-white px-3 py-2 rounded-lg cursor-pointer">️🗺️ Voir la cartographie</button>
                <button className="bg-whtie border border-blue-500 text-gray-800 px-3 py-2 rounded-lg cursor-pointer">📊 Capacités en temps réel</button>
            </div>

            {/* TRANSPORT & CONCIERGERIE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <TransportCard />
                <ConciergeCard />
            </div>

            {/* ADMISSIONS */}
            <div className="mt-6">
                <AdmissionCard />
            </div>
        </div>
    );
}
