"use client";

import { useState } from "react";

const tabs = [
    "Plan",
    "Diagnostic",
    "Planification",
    "Recherche",
    "SAS",
    "Lits d’aval",
    "Téléexpertise",
    "Transport Sanitaire",
    "Mes informations",
    "Edition",
    "Guide",
];

export default function HorizontalTabs() {
    const [active, setActive] = useState("Lits d’aval");

    return (
        <div className="w-full bg-white py-3 border-b border-[#EAEAEA]">
            <div className="px-6 py-3">

                {/* Scrollable Tabs */}
                <div className="flex gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">

                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActive(tab)}
                            className="relative text-sm text-[#444] hover:text-[#1E7BB5] transition"
                        >
                            {/* TAB LABEL */}
                            <span className={`${active === tab ? "font-semibold bg-gradient-to-r from-[#2A6EBB] to-[#61D0BF] bg-clip-text text-transparent" : ""}`}>
                                {tab}
                            </span>

                            {/* ACTIVE UNDERLINE */}
                            {active === tab && (
                                <span className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-10 h-[3px] rounded-full bg-[#1E7BB5]"></span>
                            )}
                        </button>
                    ))}

                </div>

            </div>
        </div>
    );
}
