"use client";

import { useState } from "react";

export default function LitsAvalHeader() {
    const mainTabs = [
        "Plan",
        "Répartition",
        "Diagnostic",
        "Planification",
        "Recherche",
        "SAS",
        "Lits",
        "Lits d’aval",
        "Hors les murs",
    ];

    const subTabs = ["Recherche", "Demande", "Statistique"];

    const [activeMain, setActiveMain] = useState("Lits d’aval");
    const [activeSub, setActiveSub] = useState("Demande");

    return (
        <section className="w-full bg-white py-4">
            {/* MAIN NAV */}
            <div className="flex justify-start px-4 gap-10 border-b-2 border-gray-200 pb-3 text-sm">
                {mainTabs.map((tab) => (
                    <div key={tab} className="relative cursor-pointer">
                        <span
                            onClick={() => setActiveMain(tab)}
                            className={`${activeMain === tab
                                ? "text-[#2A6EBB] font-medium"
                                : "text-gray-600"
                                }`}
                        >
                            {tab}
                        </span>

                        {/* Active underline */}
                        {activeMain === tab && (
                            <span className="absolute left-0 right-0 mx-auto -bottom-[10px] h-[3px] w-10 rounded-full bg-gradient-to-r from-[#2A6EBB] to-[#61D0BF]"></span>
                        )}
                    </div>
                ))}
            </div>

            {/* SUB NAV */}
            <div className="flex justify-center gap-6 mt-6">
                {subTabs.map((item) => (
                    <button
                        key={item}
                        onClick={() => setActiveSub(item)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeSub === item
                            ? "text-white bg-gradient-to-r from-[#2A6EBB] to-[#61D0BF]"
                            : "text-[#2A6EBB] bg-[#F2FBFA]"
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </section>
    );
}
