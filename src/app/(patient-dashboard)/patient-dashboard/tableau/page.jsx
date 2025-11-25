"use client";

import { AlertCircle, ChevronRight, Clock, Pill } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-[#F4F9F8] p-4 md:p-6">

            {/* HEADER GREETING */}
            <div className="w-full rounded-2xl p-6 md:p-8 text-white bg-gradient-to-r from-[#7A5CF4] via-[#C95BF4] to-[#4D9FF5] shadow-md">
                <p className="text-lg">Bonjour Ines 👋</p>
                <h1 className="text-3xl font-bold mt-1">1er novembre 2025</h1>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

                {/* Card 1 */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2">
                        <Pill className="text-red-500" size={20} />
                        <span className="text-red-500 text-sm font-medium">Alerte</span>
                    </div>
                    <h1 className="text-4xl font-bold mt-3 text-red-500">02</h1>
                    <p className="text-gray-600 mt-1 text-sm">Stock bas à renouveler</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2">
                        <AlertCircle className="text-blue-500" size={20} />
                        <span className="text-blue-500 text-sm font-medium">Info</span>
                    </div>
                    <h1 className="text-4xl font-bold mt-3 text-blue-500">04</h1>
                    <p className="text-gray-600 mt-1 text-sm">Médicaments périmés</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2">
                        <Clock className="text-purple-500" size={20} />
                        <span className="text-purple-500 text-sm font-medium">Aujourd’hui</span>
                    </div>
                    <h1 className="text-4xl font-bold mt-3 text-purple-500">04</h1>
                    <p className="text-gray-600 mt-1 text-sm">Traitements à prendre</p>
                </div>

            </div>

            {/* TODAY TREATMENTS */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left column */}
                <div className="lg:col-span-2 space-y-6">

                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center">
                            <h2 className="font-bold text-lg">Mes traitements du jour</h2>
                            <button className="text-blue-600 text-sm font-medium">Voir tout</button>
                        </div>
                        <p className="text-gray-500 text-sm">4 prises prévues</p>

                        {/* List */}
                        <div className="space-y-3 mt-5">

                            {[
                                { name: "Helicidane", time: "Matin", qty: "1 cuillère(s)", hour: "09:00", status: "Pris" },
                                { name: "Asturgil", time: "Matin", qty: "2 pulvérisation(s)", hour: "09:00", status: "Pris" },
                                { name: "Doliprane", time: "Midi", qty: "1 comprimé 1000mg", hour: "12:20", status: "À prendre" },
                                { name: "Levothyrox", time: "Soir", qty: "1 comprimé 75µg", hour: "18:00", status: "À venir" },
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center p-3 border border-gray-200 rounded-xl">
                                    <div>
                                        <h4 className="font-medium">{item.name}</h4>
                                        <p className="text-xs text-gray-500">{item.time} · {item.qty}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-gray-700">{item.hour}</p>
                                        <p className="text-xs text-gray-500">{item.status}</p>
                                    </div>
                                </div>
                            ))}

                        </div>

                        {/* Progress Bar */}
                        <div className="mt-5">
                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-1/2"></div>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">Observance du jour <span className="text-green-600 font-medium">50%</span></p>
                        </div>
                    </div>

                </div>

                {/* Right column */}
                <div className="space-y-6">

                    {/* Pillulier Virtuel */}
                    <div className="rounded-xl p-5 text-white bg-gradient-to-br from-[#5146F5] via-[#9A57F1] to-[#4AC7F9] shadow-md">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold">Pilulier Virtuel</h3>
                            <ChevronRight size={20} className="opacity-80" />
                        </div>
                        <p className="text-sm opacity-90 mt-1">Gérez vos traitements quotidiens avec rappels intelligents</p>
                        <p className="mt-4 text-xs opacity-90">• 2 prises confirmées aujourd’hui</p>
                    </div>

                    {/* Pharmacie Virtuelle */}
                    <div className="rounded-xl p-5 text-white bg-gradient-to-br from-[#1BB8AA] to-[#0567D9] shadow-md">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold">Pharmacie Virtuelle</h3>
                            <ChevronRight size={20} className="opacity-80" />
                        </div>
                        <p className="text-sm opacity-90 mt-1">Consultez votre stock et trouvez des pharmacies</p>
                        <p className="mt-4 text-xs opacity-90">• 4 médicaments périmés</p>
                    </div>

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
