"use client";

import {
    Camera,
    Download,
    PlusCircle,
    RefreshCw,
    Send,
    User
} from "lucide-react";

export default function OrdonnancesPage() {
    return (
        <div className="min-h-screen bg-[#F4F7FB] p-4 md:p-6">

            {/* HEADER */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-[#0D1B2A]">Mes Ordonnances</h1>
                    <p className="text-sm text-gray-500">
                        Gérez vos prescriptions médicales
                    </p>
                </div>

                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border text-sm rounded-xl shadow flex items-center gap-2">
                        <Camera size={16} /> Scanner
                    </button>
                    <button className="px-4 py-2 bg-gradient-to-r from-[#6A5CFF] to-[#4DA2FF] text-white rounded-xl shadow text-sm flex items-center gap-2">
                        <PlusCircle size={16} /> Ajouter
                    </button>
                </div>
            </div>

            {/* ALERT BANNER */}
            <div className="bg-red-500 text-white p-4 rounded-xl shadow mb-6 flex justify-between items-center">
                <div>
                    <p className="font-medium">Renouvellement nécessaire</p>
                    <p className="text-sm opacity-90">
                        2 ordonnances arrivent à expiration
                    </p>
                </div>
                <button className="px-4 py-2 bg-white text-red-600 font-semibold rounded-xl text-sm shadow">
                    Voir
                </button>
            </div>

            {/* TOP COUNTERS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

                {/* Actives */}
                <div className="bg-white p-4 rounded-xl shadow border text-center">
                    <p className="text-sm font-medium text-blue-600">Actives</p>
                    <h2 className="text-3xl font-bold text-blue-600 mt-2">3</h2>
                </div>

                {/* Médicaments */}
                <div className="bg-white p-4 rounded-xl shadow border text-center">
                    <p className="text-sm font-medium text-green-600">Médicaments</p>
                    <h2 className="text-3xl font-bold text-green-600 mt-2">6</h2>
                </div>

                {/* À renouveler */}
                <div className="bg-white p-4 rounded-xl shadow border text-center">
                    <p className="text-sm font-medium text-orange-600">À renouveler</p>
                    <h2 className="text-3xl font-bold text-orange-600 mt-2">1</h2>
                </div>

                {/* Prescripteurs */}
                <div className="bg-white p-4 rounded-xl shadow border text-center">
                    <p className="text-sm font-medium text-purple-600">Prescripteurs</p>
                    <h2 className="text-3xl font-bold text-purple-600 mt-2">3</h2>
                </div>

            </div>

            {/* TABS */}
            <div className="flex gap-6 text-sm font-medium mb-6">
                <button className="text-[#6A5CFF] border-b-2 border-[#6A5CFF] pb-2">
                    Ordonnances Actives
                </button>
                <button className="text-gray-500">Historique</button>
                <button className="text-gray-500">Renouvellements</button>
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT COLUMN */}
                <div className="lg:col-span-2 space-y-6">

                    {/* CARD 1 — DR MARTIN */}
                    <div className="bg-white rounded-xl shadow p-6 border">
                        <div className="flex items-center gap-3 mb-2">
                            <User size={22} className="text-blue-600" />
                            <div>
                                <h3 className="font-semibold text-gray-800">Dr. Martin</h3>
                                <p className="text-xs text-gray-500">Médecin généraliste</p>
                            </div>
                        </div>

                        <p className="text-xs text-gray-500">
                            Date de prescription: <strong>15/10/2025</strong>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                            Valide jusqu’au:{" "}
                            <strong className="text-red-500">15/11/2025 (14 jours)</strong>
                        </p>

                        <p className="text-xs text-gray-700 mt-3 font-medium">
                            Médicaments prescrits:
                        </p>

                        <div className="mt-1 text-xs text-gray-600">
                            Doliprane 1000mg • Helicidine sirop
                        </div>

                        {/* Progress */}
                        <div className="mt-4">
                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full w-1/3 bg-green-600"></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1 text-right">
                                14/30 jours
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3 mt-4">
                            <button className="px-4 py-2 bg-white text-sm border rounded-xl shadow flex items-center gap-2">
                                <Download size={16} /> Télécharger
                            </button>
                            <button className="px-4 py-2 bg-white text-sm border rounded-xl shadow flex items-center gap-2">
                                <Send size={16} /> Envoyer
                            </button>
                        </div>
                    </div>

                    {/* CARD 2 — DR DUBOIS */}
                    <div className="bg-white rounded-xl shadow p-6 border">
                        <div className="flex items-center gap-3 mb-2">
                            <User size={22} className="text-indigo-600" />
                            <div>
                                <h3 className="font-semibold text-gray-800">Dr. Dubois</h3>
                                <p className="text-xs text-gray-500">Endocrinologue</p>
                            </div>
                        </div>

                        <p className="text-xs text-gray-500">
                            Date de prescription: <strong>20/09/2025</strong>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                            Valide jusqu’au:{" "}
                            <strong className="text-blue-600">28/11/2025 (27 jours)</strong>
                        </p>

                        <p className="text-xs text-gray-700 mt-3 font-medium">
                            Médicaments prescrits:
                        </p>

                        <div className="mt-1 text-xs text-gray-600">
                            Levothyrox 75μg
                        </div>

                        {/* Progress */}
                        <div className="mt-4">
                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full w-2/3 bg-green-600"></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1 text-right">
                                27/90 jours
                            </p>
                        </div>

                        <div className="flex gap-3 mt-4">
                            <button className="px-4 py-2 bg-white text-sm border rounded-xl shadow flex items-center gap-2">
                                <Download size={16} /> Télécharger
                            </button>
                            <button className="px-4 py-2 bg-white text-sm border rounded-xl shadow flex items-center gap-2">
                                <Send size={16} /> Envoyer
                            </button>
                        </div>
                    </div>

                    {/* CARD 3 — DR LEFEVRE (RENEW) */}
                    <div className="bg-[#FFF3DF] border border-[#FFE2B6] rounded-xl shadow p-6">
                        <div className="flex items-center gap-3 mb-2">
                            <User size={22} className="text-orange-600" />
                            <div>
                                <h3 className="font-semibold text-gray-800">Dr. Lefevre</h3>
                                <p className="text-xs text-gray-500">Pneumologue</p>
                            </div>
                        </div>

                        <p className="text-xs text-gray-500">
                            Date de prescription: <strong>25/10/2025</strong>
                        </p>

                        <p className="text-xs text-gray-500 mt-1">
                            Valide jusqu’au:{" "}
                            <strong className="text-red-600">
                                10/11/2025 (9 jours)
                            </strong>
                        </p>

                        <p className="text-xs text-gray-700 mt-3 font-medium">
                            Médicaments prescrits:
                        </p>

                        <div className="mt-1 text-xs text-gray-600">
                            Asturgil spray • Ventoline
                        </div>

                        {/* Progress */}
                        <div className="mt-4">
                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full w-1/4 bg-red-600"></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1 text-right">
                                9/30 jours
                            </p>
                        </div>

                        <div className="flex gap-3 mt-4">
                            <button className="px-4 py-2 bg-white text-sm border rounded-xl shadow flex items-center gap-2">
                                <Download size={16} /> Télécharger
                            </button>

                            <button className="px-4 py-2 bg-white text-sm border rounded-xl shadow flex items-center gap-2">
                                <Send size={16} /> Envoyer
                            </button>

                            <button className="px-4 py-2 bg-orange-600 text-white text-sm rounded-xl shadow flex items-center gap-2">
                                <RefreshCw size={16} /> Renouveler
                            </button>
                        </div>
                    </div>

                </div>

                {/* ------------------ RIGHT COLUMN ------------------ */}
                <div className="space-y-6">

                    {/* SCAN INTELLIGENT */}
                    <div className="bg-white rounded-xl shadow p-6 border bg-gradient-to-br from-[#F3F4FF] to-[#E8FBFF]">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
                            <Camera size={18} className="text-[#6A5CFF]" /> Scan Intelligent
                        </h3>
                        <p className="text-xs text-gray-600">OCR • Datamatrix</p>
                        <p className="text-xs text-gray-500 mt-3">
                            Scannez vos ordonnances pour une extraction automatique
                            des médicaments et ajout au pilulier.
                        </p>

                        <button className="w-full mt-4 py-2 px-4 bg-gradient-to-r from-[#6A5CFF] to-[#4DA2FF] text-white rounded-xl shadow text-sm">
                            Scanner une ordonnance
                        </button>
                    </div>

                    {/* PARTNER PHARMACIES */}
                    <div className="bg-white rounded-xl shadow p-6 border">
                        <h3 className="font-semibold text-gray-800 mb-3">
                            Pharmacies partenaires
                        </h3>

                        <p className="flex items-center gap-2 text-sm mb-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Pharmacie du Centre — <span className="text-gray-600">0.3 km</span> — <span className="text-green-600">Ouverte</span>
                        </p>

                        <p className="flex items-center gap-2 text-sm mb-4">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Pharmacie Saint-Michel — <span className="text-gray-600">0.8 km</span> — <span className="text-green-600">Ouverte</span>
                        </p>

                        <button className="w-full py-2 px-4 bg-white border rounded-xl shadow text-sm flex items-center justify-center gap-2">
                            <Send size={16} /> Envoyer ordonnance
                        </button>
                    </div>

                    {/* ADVICE */}
                    <div className="bg-[#E6F7ED] border border-[#C7EED4] rounded-xl shadow p-6">
                        <h3 className="font-semibold text-gray-800 mb-1">Conseil</h3>
                        <p className="text-sm text-gray-600">
                            Anticipez vos renouvellements 5 jours avant expiration pour éviter
                            toute rupture de traitement.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
