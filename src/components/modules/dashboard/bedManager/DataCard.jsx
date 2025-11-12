"use client";

export default function DataCard() {
    const occupation = [
        { label: "Capacité réelle", value: "200" },
        { label: "Nb d’occupation", value: "150" },
        { label: "Taux d’occupation", value: "" },
    ];

    const activity = [
        { label: "Nb de transferts prévus", value: "10" },
        { label: "Nb d’entrées prévues", value: "30" },
        { label: "Nb de sorties prévues", value: "60" },
    ];

    const tariff = [
        { label: "Prix le plus haut", value: "800€/jour" },
        { label: "Prix moyen", value: "500€/jour" },
        { label: "Prix le plus bas", value: "250€/jour" },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-5">
            {/* Title */}
            <h3 className="font-semibold text-gray-800 text-base md:text-lg mb-4">
                Données
            </h3>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* === Left Column === */}
                <div className="space-y-5">
                    {/* Occupation Section */}
                    <div>
                        <h4 className="font-semibold text-[var(--primary)] text-sm mb-2">
                            Occupation
                        </h4>
                        <div className="space-y-2">
                            {occupation.map((item, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <span className="text-gray-700 text-sm">{item.label}</span>
                                    <input
                                        type="text"
                                        value={item.value}
                                        readOnly
                                        className="bg-[#F8FCFB] text-gray-800 text-sm rounded-md w-20 text-center py-1 border border-gray-100"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tarif Section */}
                    <div>
                        <h4 className="font-semibold text-[var(--primary)] text-sm mb-2">
                            Tarif
                        </h4>
                        <div className="space-y-2">
                            {tariff.map((item, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <span className="text-gray-700 text-sm">{item.label}</span>
                                    <div className="bg-[#F8FCFB] text-gray-800 text-sm rounded-md px-3 py-1 border border-gray-100 min-w-[100px] text-right">
                                        {item.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* === Right Column === */}
                <div>
                    <h4 className="font-semibold text-[var(--primary)] text-sm mb-2">
                        Activité
                    </h4>
                    <div className="space-y-2">
                        {activity.map((item, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <span className="text-gray-700 text-sm">{item.label}</span>
                                <input
                                    type="text"
                                    value={item.value}
                                    readOnly
                                    className="bg-[#F8FCFB] text-gray-800 text-sm rounded-md w-20 text-center py-1 border border-gray-100"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
