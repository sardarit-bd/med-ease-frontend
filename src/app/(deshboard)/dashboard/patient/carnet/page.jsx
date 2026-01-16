"use client";

import {
    Calendar,
    FilePlus,
    Phone,
    Pill,
    Shield,
    User
} from "lucide-react";

export default function CarnetPage() {
    return (
        <div className="min-h-screen bg-[#F4F7FB] p-4 md:p-6">

            {/* HEADER */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-[#0D1B2A]">
                        Carnet de Santé & Vaccination
                    </h1>
                    <p className="text-sm text-gray-500">
                        Votre historique médical complet
                    </p>
                </div>

                <button className="px-4 py-2 bg-gradient-to-r from-[#6A5CFF] to-[#4DA2FF] text-white rounded-xl shadow text-sm flex items-center gap-2">
                    <FilePlus size={16} /> Importer document
                </button>
            </div>

            {/* PROFILE BANNER */}
            <div className="bg-gradient-to-r from-[#6A5CFF] via-[#9C53FF] to-[#4DA2FF] text-white rounded-2xl p-6 shadow mb-8">
                <div className="flex justify-between items-center">

                    {/* Left Profile */}
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                            <User size={28} className="text-white" />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold">Ines Dupont</h2>
                            <p className="text-xs opacity-90">
                                Groupe sanguin A+ • 40 Years Old • 172 cm • 68 kg
                            </p>
                        </div>
                    </div>

                    {/* Vaccination Status */}
                    <div className="text-right">
                        <p className="text-xs opacity-75">Statut vaccinal</p>
                        <span className="text-sm bg-green-600 text-white px-4 py-1 rounded-full">
                            ✓ Tous les vaccins à jour
                        </span>
                    </div>

                </div>
            </div>

            {/* TABS */}
            <div className="flex gap-6 text-sm mb-6 font-medium">
                <button className="text-[#6A5CFF] border-b-2 border-[#6A5CFF] pb-2">
                    Profil Santé
                </button>
                <button className="text-gray-500 pb-2">Calendrier Vaccinal</button>
                <button className="text-gray-500 pb-2">Documents</button>
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT: VACCINATION STATUS & LIST */}
                <div className="lg:col-span-2 space-y-6">

                    {/* STATUS CARD */}
                    <div className="bg-white rounded-xl p-6 shadow border">
                        <h3 className="font-semibold text-gray-700 text-sm">
                            Statut vaccinal
                        </h3>
                        <div className="flex justify-between items-center mt-2">
                            <p className="text-green-600 font-medium text-sm">
                                Tous vos vaccins sont à jour
                            </p>
                            <span className="text-xl font-bold text-green-600">100%</span>
                        </div>

                        {/* Progress */}
                        <div className="mt-4">
                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-green-600 w-full"></div>
                            </div>
                        </div>

                        <p className="text-xs text-right mt-1 text-gray-600">Complétude</p>
                    </div>

                    {/* ----------- VACCINE CARDS ----------- */}

                    {/* COVID */}
                    <div className="bg-[#E6F9EE] border border-[#C4ECD4] rounded-xl p-5 shadow">
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2">
                                <Pill size={18} className="text-green-600" />
                                <h4 className="font-semibold text-gray-800">COVID-19</h4>
                            </div>
                            <span className="text-xs bg-green-600 text-white px-3 py-0.5 rounded-full">
                                À jour
                            </span>
                        </div>

                        <p className="text-xs text-gray-500">3 / 3</p>
                        <p className="text-xs text-gray-500 mt-1">
                            Dernière injection: <strong>15/03/2025</strong>
                        </p>
                    </div>

                    {/* Grippe */}
                    <div className="bg-[#E6F9EE] border border-[#C4ECD4] rounded-xl p-5 shadow">
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2">
                                <Pill size={18} className="text-green-600" />
                                <h4 className="font-semibold text-gray-800">
                                    Grippe saisonnière
                                </h4>
                            </div>
                            <span className="text-xs bg-green-600 text-white px-3 py-0.5 rounded-full">
                                À jour
                            </span>
                        </div>

                        <p className="text-xs text-gray-500">Annual</p>
                        <p className="text-xs text-gray-500 mt-1">
                            Dernière injection: <strong>20/10/2024</strong>
                        </p>

                        <p className="text-xs text-gray-500 mt-1">
                            Prochain rappel: <strong>20/10/2025</strong>
                        </p>

                        <button className="mt-3 px-4 py-2 bg-[#6A5CFF] text-white text-xs rounded-xl shadow">
                            Planifier rappel
                        </button>
                    </div>

                    {/* Tetanus */}
                    <div className="bg-[#E6F9EE] border border-[#C4ECD4] rounded-xl p-5 shadow">
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2">
                                <Pill size={18} className="text-green-600" />
                                <h4 className="font-semibold text-gray-800">Tétanos</h4>
                            </div>
                            <span className="text-xs bg-green-600 text-white px-3 py-0.5 rounded-full">
                                À jour
                            </span>
                        </div>

                        <p className="text-xs text-gray-500">Rappel 10 ans</p>
                        <p className="text-xs text-gray-500 mt-1">
                            Dernière injection: <strong>10/08/2023</strong>
                        </p>

                        <p className="text-xs text-gray-500 mt-1">
                            Prochain rappel: <strong>10/08/2033</strong>
                        </p>
                    </div>

                    {/* Hépatite B */}
                    <div className="bg-[#E6F9EE] border border-[#C4ECD4] rounded-xl p-5 shadow">
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2">
                                <Pill size={18} className="text-green-600" />
                                <h4 className="font-semibold text-gray-800">Hépatite B</h4>
                            </div>
                            <span className="text-xs bg-green-600 text-white px-3 py-0.5 rounded-full">
                                À jour
                            </span>
                        </div>

                        <p className="text-xs text-gray-500">3 / 3</p>
                        <p className="text-xs text-gray-500 mt-1">
                            Dernière injection: <strong>15/04/2020</strong>
                        </p>
                    </div>

                    {/* ROR */}
                    <div className="bg-[#E6F9EE] border border-[#C4ECD4] rounded-xl p-5 shadow">
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2">
                                <Pill size={18} className="text-green-600" />
                                <h4 className="font-semibold text-gray-800">
                                    ROR (Rougeole, Oreillons, Rubéole)
                                </h4>
                            </div>
                            <span className="text-xs bg-green-600 text-white px-3 py-0.5 rounded-full">
                                À jour
                            </span>
                        </div>

                        <p className="text-xs text-gray-500">2 / 2</p>
                        <p className="text-xs text-gray-500 mt-1">
                            Dernière injection: <strong>20/02/2018</strong>
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="space-y-6">

                    {/* PREVENTION */}
                    <div className="bg-white p-6 rounded-xl shadow border">
                        <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <Shield size={18} className="text-blue-600" />
                            Prévention
                        </h3>

                        {/* Cholesterol */}
                        <div className="mb-4">
                            <p className="text-sm font-medium">Dépistage cholesterol</p>
                            <p className="text-xs text-gray-500">
                                Recommandé tous les 5 ans après 40 ans
                            </p>
                            <button className="mt-2 px-3 py-2 w-full bg-white border rounded-xl shadow text-sm">
                                Planifier
                            </button>
                        </div>

                        {/* Mammographie */}
                        <div>
                            <p className="text-sm font-medium">Mammographie</p>
                            <p className="text-xs text-gray-500">
                                Dépistage cancer du sein (40–74 ans)
                            </p>
                            <button className="mt-2 px-3 py-2 w-full bg-white border rounded-xl shadow text-sm">
                                Planifier
                            </button>
                        </div>
                    </div>

                    {/* DMP */}
                    <div className="bg-white p-6 rounded-xl shadow border">
                        <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                            <Calendar size={18} className="text-[#6A5CFF]" />
                            DMP
                        </h3>

                        <p className="text-sm text-gray-500 mt-2">
                            Accédez à votre dossier médical partagé et consultez votre historique de soins.
                        </p>

                        <button className="mt-4 px-4 py-2 w-full bg-gradient-to-r from-[#6A5CFF] to-[#4DA2FF] text-white rounded-xl shadow text-sm">
                            Accéder au DMP
                        </button>
                    </div>

                    {/* EMERGENCY CONTACT */}
                    <div className="bg-[#FFE8E7] border border-[#FFC8C5] p-6 rounded-xl shadow">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                            <Phone size={18} className="text-red-600" /> Contact d’urgence
                        </h3>

                        <p className="text-xs text-gray-600 mt-1">En cas d’urgence</p>

                        <div className="mt-4 space-y-2">
                            <div className="p-3 bg-white rounded-xl border shadow text-sm">
                                SAMU — <strong>15</strong>
                            </div>

                            <div className="p-3 bg-white rounded-xl border shadow text-sm">
                                Contact: <strong>Marie Dupont</strong>
                                <br />
                                06 12 34 56 78
                            </div>
                        </div>
                    </div>

                    {/* VACCINATION CALENDAR CTA */}
                    <button className="w-full px-4 py-3 bg-[#6A5CFF] text-white rounded-xl shadow text-sm flex items-center justify-center gap-2">
                        <Calendar size={16} /> Calendrier simplifié des vaccinations
                    </button>

                </div>
            </div>
        </div>
    );
}
