"use client";

import { todayFormatted } from "../pilulier/page";
import DoseList from "./DoseList";
import RightColumn from "./RightColumn";
import Summery from "./Summery";

export default function DashboardPage() {
    return (
        <div className="min-h-screen p-4 md:p-6">

            {/* HEADER GREETING */}
            <div className="w-full rounded-2xl p-6 md:p-8 text-white bg-gradient-to-r from-[#7A5CF4] via-[#C95BF4] to-[#4D9FF5] shadow-md">
                <p className="text-lg">Bonjour Ines 👋</p>
                <h1 className="text-3xl font-bold mt-1">{todayFormatted}</h1>
                <p className="mt-3 opacity-90 text-sm">
                    Consultez votre journée dès l’ouverture de l’application. Visualisez tous les traitements à suivre et validez les prises.
                </p>
            </div>

            {/* SEARCH BAR */}
            <div className="mt-6">
                <input
                    placeholder="Rechercher un médicament dans le dictionnaire (nom, DCI, pathologie...)"
                    className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 shadow-sm focus:outline-none"
                />
            </div>

            {/* TOP STAT CARDS */}
            <Summery />

            {/* TODAY TREATMENTS */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left column */}
                <div className="lg:col-span-2 space-y-6">

                    <DoseList />

                </div>

                {/* Right column */}
                <div className="space-y-6">

                    <RightColumn />

                </div>
            </div>

            {/* BOTTOM CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

                {/* Ordonnances */}
                <div className="bg-white rounded-xl p-5 shadow-sm border">
                    <h3 className="font-bold">Ordonnances</h3>
                    <p className="text-xs text-gray-500 mt-1">3 ordonnances actives</p>
                    <button className="mt-4 text-xs bg-red-100 text-red-600 px-3 py-1 rounded-lg">Renouvellement dans 5 jours</button>
                </div>

                {/* Dépenses */}
                <div className="bg-white rounded-xl p-5 shadow-sm border">
                    <h3 className="font-bold">Dépenses</h3>
                    <p className="text-xs text-gray-500 mt-1">Ce mois</p>
                    <h2 className="text-2xl font-bold mt-2">127,50 €</h2>
                    <p className="text-sm text-gray-500 mt-1">Reste à charge <span className="text-red-600 font-medium">38,25 €</span></p>
                </div>

                {/* Vaccination */}
                <div className="bg-white rounded-xl p-5 shadow-sm border">
                    <h3 className="font-bold">Vaccination</h3>
                    <p className="text-xs text-gray-500 mt-1">Carnet de santé</p>
                    <button className="mt-4 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-lg">Tous les vaccins à jour</button>
                </div>

            </div>
        </div>
    );
}
