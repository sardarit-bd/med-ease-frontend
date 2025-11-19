"use client";

import { useState } from "react";

export default function GradientTabs() {
    const topTabs = [
        "Plan",
        "Répartition",
        "Diagnostic",
        "Planification",
        "Recherche",
        "SAS",
        "Lits",
        "Lits d’aval",
        "Hors les murs",
        "RH",
    ];

    const subTabs1 = ["Tableau de bord", "Mission", "Favoris", "Contrat", "Statistiques"];
    const subTabs2 = ["Publier", "Attribuer", "Planning"];

    const [activeTop, setActiveTop] = useState("RH");
    const [activeSub1, setActiveSub1] = useState("Mission");
    const [activeSub2, setActiveSub2] = useState("Publier");

    return (
        <div className="w-full bg-white px-6 py-4">
            {/* Top Navigation */}
            <div className="flex flex-wrap gap-6 text-md text-gray-900">
                {topTabs.map((item) => (
                    <button
                        key={item}
                        onClick={() => setActiveTop(item)}
                        className={`pb-2 transition-all ${activeTop === item
                            ? "text-[#2E96D8] border-b-2 border-[#2E96D8]"
                            : "text-gray-600"
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Sub Navigation 1 */}
            <div className="flex items-center justify-center border-y py-5 border-gray-200 gap-3 mt-6">
                {subTabs1.map((item) => (
                    <button
                        key={item}
                        onClick={() => setActiveSub1(item)}
                        className={`px-5 py-2 rounded-full text-sm transition-all
            ${activeSub1 === item
                                ? "bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white shadow-md"
                                : "bg-gray-100 text-gray-600"
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Sub Navigation 2 */}
            <div className="flex items-center justify-center gap-3 py-2 mt-4">
                {subTabs2.map((item) => (
                    <button
                        key={item}
                        onClick={() => setActiveSub2(item)}
                        className={`px-5 py-2 rounded-full text-sm transition-all
            ${activeSub2 === item
                                ? "bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white shadow-md"
                                : "bg-gray-100 text-gray-600"
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
}
