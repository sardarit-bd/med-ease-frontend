"use client";
import { Check } from "lucide-react";

export default function FiltersCard() {
    const filters = {
        localisation: ["Région", "Département", "Ville"],
        occupation: ["Libres", "Occupées", "Transferts", "Accompagnants autorisés"],
        chambres: ["Double", "Individuel", "Supérieure", "Suite junior", "Deluxe", "PMR", "Suite"],
        servicesType: ["Médecine", "Chirurgie", "Cancérologie", "Pédiatrie", "Ambulatoire"],
        services: ["Médecine", "Chirurgie", "Cancérologie", "Pédiatrie", "Ambulatoire"],
    };

    return (
        <div className="bg-transparent">
            <h3 className="font-semibold text-gray-800 text-base md:text-lg mb-4">
                Filtres
            </h3>

            {/* === Grid Layout === */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Localisation */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Localisation</h4>
                    <div className="space-y-1">
                        {filters.localisation.map((item, i) => (
                            <label key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                                <input type="checkbox" defaultChecked={i === 0} className="accent-[var(--primary)] w-4 h-4" />
                                {item}
                            </label>
                        ))}
                    </div>

                    <div className="mt-4">
                        <button className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white px-4 py-[6px] rounded-full text-sm font-medium">
                            Ile-de-France
                        </button>
                    </div>
                </div>

                {/* Occupation */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Occupation</h4>
                    <div className="space-y-1">
                        {filters.occupation.map((item, i) => (
                            <label key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                                <input type="checkbox" defaultChecked={i === 1} className="accent-[var(--primary)] w-4 h-4" />
                                {item}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Type de chambres */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Type de chambres</h4>
                    <div className="space-y-1">
                        {filters.chambres.map((item, i) => (
                            <label key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                                <input type="checkbox" className="accent-[var(--primary)] w-4 h-4" />
                                {item}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Type de services */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Type de services</h4>
                    <div className="space-y-1">
                        {filters.servicesType.map((item, i) => (
                            <label key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                                <input type="checkbox" className="accent-[var(--primary)] w-4 h-4" />
                                {item}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Services */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                    <h4 className="font-semibold text-[var(--primary)] mb-3">Services</h4>
                    <div className="flex flex-col gap-2">
                        {filters.services.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-sm font-semibold px-3 py-[6px] rounded-full cursor-pointer hover:opacity-90 transition-all"
                            >
                                {item}
                                <Check size={16} className="opacity-90" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
