
export default function Demo() {
    return (
        <>
            {/* this card is the normal prescription card */}
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
                    Valide jusqu'au:{" "}
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

            {/* This card is the renewal prescription card */}
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
                    Valide jusqu'au:{" "}
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

        </>
    )
}
