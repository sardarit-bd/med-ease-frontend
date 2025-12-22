import { Camera, Send } from "lucide-react";

export default function RightColumn() {
    return (
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
    )
}
