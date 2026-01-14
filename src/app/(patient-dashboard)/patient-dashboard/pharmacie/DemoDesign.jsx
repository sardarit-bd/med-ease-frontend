import { MoreVertical, Pill } from "lucide-react";

export default function DemoDesign() {
    return (
        <>
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
        </>
    )
}
