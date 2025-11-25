"use client";

import {
    Camera,
    Clock
} from "lucide-react";

export default function PilulierPage() {
    return (
        <div className="min-h-screen bg-[#F4F7FB] p-4 md:p-6">

            {/* PAGE TITLE */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-[#0D1B2A]">Pilulier Virtuel</h1>
                    <p className="text-sm text-gray-500">
                        Suivez et gérez vos traitements quotidiens
                    </p>
                </div>

                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border text-sm rounded-xl shadow hover:bg-gray-50 flex items-center gap-2">
                        <Camera size={16} /> Scanner
                    </button>

                    <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#6A5CFF] to-[#9C53FF] text-white shadow text-sm">
                        + Ajouter
                    </button>
                </div>
            </div>

            {/* TABS */}
            <div className="flex gap-6 text-sm mb-6 font-medium">
                <button className="text-[#6A5CFF] border-b-2 border-[#6A5CFF] pb-2">
                    Pilulier Actif
                </button>
                <button className="text-gray-500 pb-2">Historique</button>
                <button className="text-gray-500 pb-2">Paramètres</button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT SIDE */}
                <div className="lg:col-span-2 space-y-6">

                    {/* ACTIVE DAY CARD */}
                    <div className="bg-gradient-to-r from-[#6A5CFF] via-[#A65BFF] to-[#4DA2FF] text-white p-5 rounded-xl shadow">
                        <p className="text-sm opacity-90">Aujourd’hui, 1er novembre 2025</p>
                        <h2 className="text-xl font-semibold mt-1">
                            Traitements à prendre aujourd’hui
                        </h2>
                    </div>

                    {/* ------------------  MIDI BLOCK ------------------ */}
                    <div className="bg-white rounded-xl shadow p-5 border border-gray-100">
                        <div className="flex items-center gap-2 mb-4">
                            <Clock size={18} className="text-yellow-600" />
                            <span className="font-semibold text-gray-700">Midi</span>
                        </div>

                        {/* Doliprane */}
                        <div className="p-4 rounded-xl border bg-[#EAF7FF] border-[#D4EDFF] flex justify-between items-center mb-3">
                            <div>
                                <h4 className="font-semibold text-gray-700">Doliprane</h4>
                                <p className="text-xs text-gray-500">1 comprimé 1000mg</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-blue-600">12:30</p>
                                <p className="text-xs text-blue-500">À prendre</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-green-600 text-white rounded-xl text-xs shadow">
                                Marquer comme pris
                            </button>
                            <button className="px-4 py-2 bg-white border rounded-xl text-xs shadow">
                                Rappel
                            </button>
                        </div>
                    </div>

                    {/* ------------------  MATIN BLOCK ------------------ */}
                    <div className="bg-white rounded-xl shadow p-5 border border-gray-100">
                        <div className="flex items-center gap-2 mb-4">
                            <Clock size={18} className="text-orange-500" />
                            <span className="font-semibold text-gray-700">Matin</span>
                        </div>

                        {/* Helicidine */}
                        <div className="p-4 rounded-xl border bg-[#FFF7E6] border-[#FFE9B8] flex justify-between items-center mb-3">
                            <div>
                                <h4 className="font-semibold text-gray-700">Helicidine</h4>
                                <p className="text-xs text-gray-500">1 cuillère(s) à soupe</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-yellow-600">09:00</p>
                                <p className="text-xs text-green-600">Pris</p>
                            </div>
                        </div>

                        {/* Asturgil */}
                        <div className="p-4 rounded-xl border bg-[#FFF7E6] border-[#FFE9B8] flex justify-between items-center">
                            <div>
                                <h4 className="font-semibold text-gray-700">Asturgil</h4>
                                <p className="text-xs text-gray-500">2 pulvérisation(s)</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-yellow-600">09:00</p>
                                <p className="text-xs text-green-600">Pris</p>
                            </div>
                        </div>

                        <div className="flex gap-2 mt-4">
                            <button className="px-4 py-2 bg-green-600 text-white rounded-xl text-xs shadow">
                                Marquer comme pris
                            </button>
                            <button className="px-4 py-2 bg-white border rounded-xl text-xs shadow">
                                Rappel
                            </button>
                        </div>
                    </div>

                    {/* ------------------  SOIR BLOCK ------------------ */}
                    <div className="bg-white rounded-xl shadow p-5 border border-gray-100">
                        <div className="flex items-center gap-2 mb-4">
                            <Clock size={18} className="text-purple-500" />
                            <span className="font-semibold text-gray-700">Soir</span>
                        </div>

                        {/* Levothyrox */}
                        <div className="p-4 rounded-xl border bg-[#F5E8FF] border-[#E7D4FF] flex justify-between items-center mb-3">
                            <div>
                                <h4 className="font-semibold text-gray-700">Levothyrox</h4>
                                <p className="text-xs text-gray-500">1 comprimé 75µg</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-purple-600">19:00</p>
                                <p className="text-xs text-gray-500">À venir</p>
                            </div>
                        </div>

                        <div className="flex gap-2 mt-4">
                            <button className="px-4 py-2 bg-green-600 text-white rounded-xl text-xs shadow">
                                Marquer comme pris
                            </button>
                            <button className="px-4 py-2 bg-white border rounded-xl text-xs shadow">
                                Rappel
                            </button>
                        </div>
                    </div>

                    {/* PROGRESS BAR */}
                    <div className="bg-white rounded-xl p-5 border shadow-sm">
                        <p className="text-sm font-medium text-gray-600">Observance du jour</p>

                        <div className="mt-3 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-green-600 w-1/2"></div>
                        </div>

                        <div className="flex justify-between text-xs text-gray-600 mt-2">
                            <span>50%</span>
                            <span className="text-green-600 font-medium">2 prises confirmées sur 4 prévues</span>
                        </div>
                    </div>

                </div>

                {/* ------------------ RIGHT SIDEBAR ------------------ */}
                <div className="space-y-6">

                    {/* CALENDAR CARD */}
                    <div className="bg-white rounded-xl shadow p-5 border">
                        <h3 className="font-semibold text-gray-700">Calendrier des prises</h3>
                        <p className="text-xs text-gray-500 mt-1">
                            {`Pilulier actif jusqu'au 15 nov 2025`}
                        </p>

                        {/* Custom Small Calendar */}
                        <div className="mt-4 text-center">
                            <div className="grid grid-cols-7 gap-2 text-xs text-gray-600">
                                {"SMTWTFS".split("").map((d, i) => (
                                    <span key={i}>{d}</span>
                                ))}
                            </div>

                            <div className="grid grid-cols-7 gap-2 mt-2 tracking-tight">
                                {[
                                    "", "", "", "1", "2", "3", "4",
                                    "5", "6", "7", "8", "9", "10", "11",
                                    "12", "13", "14", "15",
                                ].map((d, i) => (
                                    <div
                                        key={i}
                                        className={`p-2 rounded-lg text-xs ${["3", "4", "5", "6", "7", "8"].includes(d)
                                            ? "bg-green-200 text-green-900 font-semibold"
                                            : d
                                                ? "text-gray-700"
                                                : ""
                                            }`}
                                    >
                                        {d}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* PRESCRIPTIONS */}
                    <div className="bg-white rounded-xl shadow p-5 border">
                        <h3 className="font-semibold text-gray-700">Mes prescriptions</h3>
                        <p className="text-xs text-gray-500">3 ordonnances actives</p>

                        <div className="mt-4 space-y-3">
                            <div className="p-3 bg-gray-50 rounded-xl">
                                <p className="text-xs font-medium text-gray-700">Dr. Martin</p>
                                <p className="text-xs text-gray-500">Expire le 15 novembre</p>
                            </div>

                            <div className="p-3 bg-gray-50 rounded-xl">
                                <p className="text-xs font-medium text-gray-700">Dr. Dubois</p>
                                <p className="text-xs text-gray-500">Expire le 28 novembre</p>
                            </div>
                        </div>

                        <button className="mt-4 w-full flex items-center justify-center gap-2 bg-white border rounded-xl py-2 text-sm shadow">
                            <Camera size={16} /> Scanner ordonnance
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
