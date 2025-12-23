import { MapPin } from "lucide-react";

export default function RightSidebar() {
    return (
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
    )
}
