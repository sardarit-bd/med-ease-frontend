"use client";

import {
    AlertCircle,
    Camera,
    Filter,
    MapPin,
    MoreVertical,
    Pill,
    PlusCircle,
    Search
} from "lucide-react";

export default function PharmaciePage() {
    return (
        <div className="min-h-screen bg-[#F4F7FB] p-4 md:p-6">

            {/* HEADER */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-[#0D1B2A]">Pharmacie Virtuelle</h1>
                    <p className="text-sm text-gray-500">
                        Gérez votre stock et trouvez des pharmacies
                    </p>
                </div>

                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border text-sm rounded-xl shadow hover:bg-gray-50 flex items-center gap-2">
                        <Camera size={16} /> Scanner
                    </button>

                    <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#6A5CFF] to-[#4DA2FF] text-white shadow text-sm flex items-center gap-1">
                        <PlusCircle size={16} /> Ajouter
                    </button>
                </div>
            </div>

            {/* TOP STATUS COUNTERS */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                {/* Perimés */}
                <div className="bg-white p-4 rounded-xl shadow border border-red-100 text-center">
                    <p className="text-sm text-red-500 font-medium flex items-center justify-center gap-1">
                        <AlertCircle size={14} /> Médicaments périmés
                    </p>
                    <h2 className="text-2xl font-bold text-red-500 mt-1">1</h2>
                </div>

                {/* Stock bas */}
                <div className="bg-white p-4 rounded-xl shadow border border-orange-100 text-center">
                    <p className="text-sm text-orange-500 font-medium">Stock bas</p>
                    <h2 className="text-2xl font-bold text-orange-500 mt-1">2</h2>
                </div>

                {/* Expire bientôt */}
                <div className="bg-white p-4 rounded-xl shadow border border-blue-100 text-center">
                    <p className="text-sm text-blue-500 font-medium">Expire bientôt</p>
                    <h2 className="text-2xl font-bold text-blue-500 mt-1">1</h2>
                </div>
            </div>

            {/* TOP TABS */}
            <div className="flex gap-6 text-sm mb-6 font-medium">
                <button className="text-[#6A5CFF] border-b-2 border-[#6A5CFF] pb-2">
                    Mon Stock Personnel
                </button>
                <button className="text-gray-500 pb-2">Pharmacies à proximité</button>
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT CONTENT */}
                <div className="lg:col-span-2 space-y-6">

                    {/* SEARCH BAR */}
                    <div className="bg-white rounded-xl border shadow p-4 flex items-center gap-3">
                        <Search className="text-gray-400" size={18} />
                        <input
                            placeholder="Rechercher un médicament dans votre stock..."
                            className="flex-1 bg-transparent outline-none text-sm"
                        />
                        <Filter className="text-gray-400" size={18} />
                    </div>

                    {/* ------------------ MEDICATION CARDS ------------------ */}

                    {/* Doliprane OK */}
                    <div className="bg-[#E8F9EA] border border-[#C8EECF] rounded-xl p-5 shadow flex items-start justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <Pill size={18} className="text-green-600" />
                                <span className="text-sm font-semibold text-gray-700">
                                    Doliprane 1000mg
                                </span>
                                <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                                    Stock OK
                                </span>
                            </div>

                            <p className="text-xs text-gray-500">Armoire à pharmacie</p>
                            <p className="text-xs text-gray-900 mt-2">
                                Quantité restante: <strong>12 comprimés</strong>
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                Date de péremption: 15/08/2026
                            </p>

                            <button className="mt-3 px-3 py-1 text-xs bg-white border rounded-xl shadow">
                                Détails
                            </button>
                        </div>

                        <MoreVertical size={18} className="text-gray-500" />
                    </div>

                    {/* Helicidine Stock faible */}
                    <div className="bg-[#FFF3DF] border border-[#FFE2B6] rounded-xl p-5 shadow flex items-start justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <Pill size={18} className="text-orange-500" />
                                <span className="text-sm font-semibold text-gray-700">
                                    Helicidine
                                </span>
                                <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">
                                    Stock faible
                                </span>
                            </div>

                            <p className="text-xs text-gray-500">
                                Armoire à pharmacie
                            </p>
                            <p className="text-xs text-gray-900 mt-2">
                                Quantité restante: <strong>1 flacon</strong>
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                Date de péremption: 20/11/2025
                            </p>

                            <div className="mt-3 flex gap-2">
                                <button className="px-3 py-1 bg-[#2F80ED] text-white text-xs rounded-xl shadow">
                                    Commander
                                </button>
                                <button className="px-3 py-1 text-xs bg-white border rounded-xl shadow">
                                    Détails
                                </button>
                            </div>
                        </div>

                        <MoreVertical size={18} className="text-gray-500" />
                    </div>

                    {/* Asturgil OK */}
                    <div className="bg-[#E8F9EA] border border-[#C8EECF] rounded-xl p-5 shadow flex items-start justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <Pill size={18} className="text-green-600" />
                                <span className="text-sm font-semibold text-gray-700">
                                    Asturgil
                                </span>
                                <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                                    Stock OK
                                </span>
                            </div>

                            <p className="text-xs text-gray-500">Armoire à pharmacie</p>
                            <p className="text-xs text-gray-900 mt-2">
                                Quantité restante: <strong>2 spray</strong>
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                Date de péremption: 31/12/2025
                            </p>

                            <button className="mt-3 px-3 py-1 text-xs bg-white border rounded-xl shadow">
                                Détails
                            </button>
                        </div>

                        <MoreVertical size={18} className="text-gray-500" />
                    </div>

                    {/* Levothyrox Stock critique */}
                    <div className="bg-[#FFE7E7] border border-[#FFC5C5] rounded-xl p-5 shadow flex items-start justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <Pill size={18} className="text-red-500" />
                                <span className="text-sm font-semibold text-gray-700">
                                    Levothyrox 75μg
                                </span>
                                <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                                    Stock critique
                                </span>
                            </div>

                            <p className="text-xs text-gray-500">Réfrigérateur</p>
                            <p className="text-xs text-gray-900 mt-2">
                                Quantité restante: <strong>3 boîtes</strong>
                            </p>
                            <p className="text-xs text-red-600 mt-1 font-medium">
                                Date de péremption: 05/11/2025
                            </p>

                            <div className="mt-3 flex gap-2">
                                <button className="px-3 py-1 bg-[#2F80ED] text-white text-xs rounded-xl shadow">
                                    Commander
                                </button>
                                <button className="px-3 py-1 text-xs bg-white border rounded-xl shadow">
                                    Détails
                                </button>
                            </div>
                        </div>

                        <MoreVertical size={18} className="text-gray-500" />
                    </div>

                    {/* Sérum physiologique périmé */}
                    <div className="bg-[#ECEFF6] border border-[#D7DBE8] rounded-xl p-5 shadow flex items-start justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <Pill size={18} className="text-gray-500" />
                                <span className="text-sm font-semibold text-gray-700">
                                    Sérum physiologique
                                </span>
                                <span className="text-xs bg-gray-500 text-white px-2 py-0.5 rounded-full">
                                    Périmé
                                </span>
                            </div>

                            <p className="text-xs text-gray-500">Armoire à pharmacie</p>
                            <p className="text-xs text-gray-900 mt-2">
                                Quantité restante: <strong>0 flacon</strong>
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                Date de péremption: 20/08/2024
                            </p>

                            <div className="mt-3 flex gap-2">
                                <button className="px-3 py-1 bg-red-600 text-white text-xs rounded-xl shadow">
                                    Marquer comme éliminé
                                </button>
                                <button className="px-3 py-1 bg-white border rounded-xl text-xs shadow flex items-center gap-1">
                                    <MapPin size={14} /> Point de collecte
                                </button>
                                <button className="px-3 py-1 text-xs bg-white border rounded-xl shadow">
                                    Détails
                                </button>
                            </div>
                        </div>

                        <MoreVertical size={18} className="text-gray-500" />
                    </div>
                </div>

                {/* ------------------ RIGHT SIDEBAR ------------------ */}
                <div className="space-y-6">

                    {/* RECYCLAGE CARD */}
                    <div className="bg-[#E6F7ED] border border-[#C2E8CF] rounded-xl p-5 shadow">
                        <h3 className="font-semibold text-gray-700">Recyclage Cyclamed</h3>
                        <p className="text-xs text-gray-600 mt-1">
                            Ne jetez pas vos médicaments
                        </p>
                        <p className="text-xs text-gray-600 mt-3">
                            Rapportez vos médicaments périmés ou non utilisés à votre
                            pharmacie pour un recyclage responsable.
                        </p>

                        <button className="mt-4 w-full px-3 py-2 bg-white border rounded-xl text-xs shadow flex items-center justify-center gap-2">
                            <MapPin size={14} /> Trouver un point de collecte
                        </button>
                    </div>

                    {/* STOCK SUMMARY */}
                    <div className="bg-white border rounded-xl shadow p-5">
                        <h3 className="font-semibold text-gray-700">Résumé du stock</h3>
                        <div className="mt-3 space-y-1 text-sm">
                            <p className="flex justify-between">
                                <span>Total médicaments</span> <strong>5</strong>
                            </p>
                            <p className="flex justify-between">
                                <span>Stock OK</span>{" "}
                                <strong className="text-green-600">2</strong>
                            </p>
                            <p className="flex justify-between">
                                <span>Stock faible</span>{" "}
                                <strong className="text-orange-500">1</strong>
                            </p>
                            <p className="flex justify-between">
                                <span>Stock critique</span>{" "}
                                <strong className="text-red-600">1</strong>
                            </p>
                            <p className="flex justify-between">
                                <span>Périmés</span>{" "}
                                <strong className="text-gray-600">1</strong>
                            </p>
                        </div>
                    </div>

                    {/* DICTIONARY */}
                    <div className="bg-white border rounded-xl shadow p-5">
                        <h3 className="font-semibold text-gray-700">Dictionnaire</h3>
                        <p className="text-xs text-gray-500">Rechercher un médicament</p>

                        <input
                            placeholder="Nom, DCI, pathologie..."
                            className="w-full mt-3 px-3 py-2 border rounded-xl outline-none text-sm"
                        />

                        <button className="mt-3 w-full px-4 py-2 bg-[#6A5CFF] text-white text-sm rounded-xl shadow">
                            Rechercher
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
