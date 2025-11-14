"use client";


export default function AccueilUrgences() {
    const topTabs = [
        "Plan", "Diagnostic", "Planification", "Recherche", "SAS",
        "Lits d’aval", "Téléexpertise", "Transport Sanitaire",
        "Mes informations", "Edition", "Guide"
    ];

    const subTabs = [
        "SAU", "UHCD", "SAU PED", "UHCD PED"
    ];

    const secondRowTabs = [
        "SAU", "Consultation Hors Urgences", "Attente",
        "Régulation Médicale Civile", "Régulation Secours",
        "Annonce", "Non clôturé"
    ];

    const filters = [
        "Classification CCMU", "Type Spécialité Urgences", "Présence"
    ];

    const triStats = [
        { label: "Tri 1", value: 1, color: "bg-red-500" },
        { label: "Tri 2", value: 4, color: "bg-yellow-400" },
        { label: "Tri 3A", value: 0, color: "bg-purple-500" },
        { label: "Tri 3B", value: 5, color: "bg-green-400" },
        { label: "Tri 4", value: 1, color: "bg-blue-500" },
        { label: "Tri 5", value: 0, color: "bg-gray-500" },
    ];

    const arrivals = { expected: 10, confirmed: 3 };

    return (
        <section className="w-full bg-white p-6">
            {/* -------------------- TOP NAV -------------------- */}
            <div className="flex flex-wrap gap-6 items-center border-b pb-3">
                {topTabs.map((tab, idx) => (
                    <span
                        key={idx}
                        className={`cursor-pointer pb-2 text-sm ${idx === 0
                            ? "text-[#3074B5] border-b-2 border-[#3074B5]"
                            : "text-gray-600 hover:text-[#3074B5]"
                            }`}
                    >
                        {tab}
                    </span>
                ))}
            </div>

            {/* -------------------- SUB NAV TABS -------------------- */}
            <div className="flex flex-wrap gap-4 mt-6">
                {subTabs.map((tab, i) => (
                    <button
                        key={i}
                        className={`px-6 py-2 rounded-full text-sm font-medium ${i === 0
                            ? "bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white"
                            : "bg-gray-100 text-gray-700"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* -------------------- SECOND ROW TABS -------------------- */}
            <div className="flex flex-wrap gap-4 mt-5">
                {secondRowTabs.map((tab, i) => (
                    <button
                        key={i}
                        className={`px-6 py-2 rounded-full text-sm ${tab === "Régulation Médicale Civile"
                            ? "bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white"
                            : "bg-gray-50 text-gray-600"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* -------------------- FILTERS -------------------- */}
            <div className="flex flex-wrap gap-4 mt-6">
                <button className="px-4 py-2 bg-gray-50 rounded-lg text-gray-600 text-sm">
                    Filtres
                </button>
                {filters.map((filter, i) => (
                    <button
                        key={i}
                        className="px-4 py-2 bg-gray-50 rounded-lg text-gray-600 text-sm"
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* -------------------- STATISTICS -------------------- */}
            <div className="mt-10">
                <h3 className="font-semibold text-gray-800 mb-4">
                    Statistiques
                </h3>

                <p className="text-gray-500 text-sm mb-3">Nombre classification</p>

                <div className="flex flex-wrap gap-4">
                    {triStats.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <span
                                className={`px-2 py-1 text-white text-xs rounded ${item.color}`}
                            >
                                {item.value}
                            </span>
                            <span className="text-gray-600 text-sm">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Arrivals */}
                <div className="flex gap-16 mt-6 text-sm text-gray-700">
                    <p>
                        <span className="text-[#3074B5] font-semibold">
                            Nombre d’arrivée(s) prévue(s):
                        </span>{" "}
                        {arrivals.expected}
                    </p>

                    <p>
                        <span className="text-[#3074B5] font-semibold">
                            Nombre d’arrivée(s) confirmée(s):
                        </span>{" "}
                        {arrivals.confirmed}
                    </p>
                </div>
            </div>
        </section>
    );
}
