"use client";

import { useState } from "react";

export default function TopTabsWithSubTabs() {
    const mainTabs = [
        "Plan",
        "Répartition",
        "Diagnostic",
        "Planification",
        "Recherche",
        "SAS",
        "Lits d’aval",
        "Hors Les Murs",
        "Transport Sanitaire",
        "RH",
    ];

    const subTabs = ["SAU", "UHCD", "SAU PED", "UHCD PED"];

    const [activeMain, setActiveMain] = useState("Répartition");
    const [activeSub, setActiveSub] = useState("SAU");

    return (
        <div className="w-full border-b-2 border-gray-200 pb-4 px-6 bg-white">

            {/* MAIN TABS */}
            <div className="flex items-center gap-8 text-gray-700 font-medium text-sm overflow-x-auto whitespace-nowrap py-3 border-b-2 border-gray-200 pb-6 scrollbar-hide">
                {mainTabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveMain(tab)}
                        className="relative pb-2"
                    >
                        <span
                            className={
                                activeMain === tab
                                    ? "text-[#2F89C9]"
                                    : "text-gray-600 hover:text-gray-800"
                            }
                        >
                            {tab}
                        </span>

                        {/* Active underline */}
                        {activeMain === tab && (
                            <span className="absolute left-0 right-0 -bottom-1 mx-auto w-full h-[2px] bg-gradient-to-r from-[#3074B5] to-[#61D0BF] rounded-full"></span>
                        )}
                    </button>
                ))}
            </div>

            {/* SUB TABS */}
            <div className="flex items-center justify-center gap-4 mt-4">
                {subTabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveSub(tab)}
                        className={`px-6 py-2 rounded-full text-sm transition-all
              ${activeSub === tab
                                ? "bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white shadow-md"
                                : "bg-[#F4FAFC] text-gray-600"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    );
}
