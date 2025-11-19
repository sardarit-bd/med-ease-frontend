"use client";

import { Calendar, Map } from "lucide-react";

const filters = [
    "Statut",
    "Groupe Établissement",
    "Spécialité",
    "Type d’intervention",
    "Mode d’hospitalisation",
    "Disponibilités",
    "Chirurgien",
];

export default function BlocFilters() {
    return (
        <section className="w-full bg-[#61D0BF0F] py-4">
            <div className="flex items-center justify-between px-6">

                <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2 scrollbar-hide">

                    {/* FILTER PILLS */}
                    {filters.map((item, i) => (
                        <button
                            key={i}
                            className="px-4 py-2 rounded-full border border-[#DEDEDE] bg-white text-[#555] text-sm whitespace-nowrap hover:bg-[#F2F7F7] transition"
                        >
                            {item}
                        </button>
                    ))}



                </div>

                <div className="flex items-center gap-3">
                    {/* RIGHT-SIDE CIRCULAR ICON BUTTONS */}
                    <button className="min-w-[36px] min-h-[36px] rounded-full flex items-center justify-center bg-gradient-to-r from-[#1E67B5] to-[#57D0BF] text-white shadow-md">
                        <Calendar size={18} />
                    </button>

                    <button className="min-w-[36px] min-h-[36px] rounded-full flex items-center justify-center bg-gradient-to-r from-[#1E67B5] to-[#57D0BF] text-white shadow-md">
                        <Map size={18} />
                    </button>
                </div>

            </div>
        </section>
    );
}
