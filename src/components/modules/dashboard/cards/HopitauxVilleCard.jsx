"use client";

export default function HopitauxVilleCard() {
    const hopitauxData = [
        { left: "2 000", leftLabel: "Médecine", right: "88%", rightLabel: "Médecine" },
        { left: "2 500", leftLabel: "Chirurgie", right: "93", rightLabel: "Chirurgie" },
        { left: "500", leftLabel: "Ambulatoire", right: "92%", rightLabel: "Ambulatoire" },
    ];

    const villeData = [
        { value: "60", label: "Médecin disponibles" },
        { value: "40", label: "Médecin recevant nouveaux patient" },
        { value: "3 000", label: "Patient sans Médecin Traitant" },
        { value: "40", label: "Dentiste disponibles" },
    ];

    return (
        <div className="grid grid-cols-1 gap-6">
            {/* --- HÔPITAUX CARD --- */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-5">
                <h3 className="font-semibold text-gray-800 text-base md:text-lg mb-3">
                    Hôpitaux
                </h3>

                {/* Top Gradient Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-lg p-3 flex flex-col justify-center text-white">
                        <h4 className="text-lg font-bold leading-none">5000</h4>
                        <p className="text-sm opacity-90">Capacité Lits</p>
                    </div>
                    <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-lg p-3 flex flex-col justify-center text-white">
                        <h4 className="text-lg font-bold leading-none">5000</h4>
                        <p className="text-sm opacity-90">Taux d’occupation</p>
                    </div>
                </div>

                {/* Metrics rows */}
                <div className="space-y-2">
                    {hopitauxData.map((row, i) => (
                        <div key={i} className="grid grid-cols-2 gap-2">
                            <div className="bg-[#F8FCFB] rounded-lg p-3">
                                <p className="text-[16px] font-bold text-gray-800 leading-tight">
                                    {row.left}
                                </p>
                                <p className="text-sm text-gray-500">{row.leftLabel}</p>
                            </div>
                            <div className="bg-[#F8FCFB] rounded-lg p-3">
                                <p className="text-[16px] font-bold text-gray-800 leading-tight">
                                    {row.right}
                                </p>
                                <p className="text-sm text-gray-500">{row.rightLabel}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- VILLE CARD --- */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-5">
                <h3 className="font-semibold text-gray-800 text-base md:text-lg mb-3">
                    Ville
                </h3>

                <div className="space-y-2">
                    {villeData.map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#F8FCFB] rounded-lg p-3"
                        >
                            <p className="text-[16px] font-bold text-gray-800 leading-tight">
                                {item.value}
                            </p>
                            <p className="text-sm text-gray-500">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
