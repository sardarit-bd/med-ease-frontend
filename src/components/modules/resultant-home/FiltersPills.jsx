"use client";

import {
    Building2,
    ClipboardList,
    Clock,
    LayoutGrid,
    Stethoscope,
    UserCheck,
} from "lucide-react";

const filters = [
    { label: "Professionnels de santé", icon: <Stethoscope size={18} /> },
    { label: "Établissements de santé", icon: <Building2 size={18} /> },
    { label: "Motif de consultation", icon: <UserCheck size={18} /> },
    { label: "Type de consultation", icon: <ClipboardList size={18} /> },
    { label: "Disponibilités", icon: <Clock size={18} /> },
    { label: "Mot Clé", icon: <LayoutGrid size={18} /> },
];

export default function FiltersPills() {
    return (
        <section className="w-full bg-white py-6 border-b border-gray-200 shadow-xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Horizontal scroll container */}
                <div className="flex gap-4 overflow-x-auto scrollbar-hide py-2">

                    {filters.map((item, index) => (
                        <button
                            key={index}
                            className="flex items-center gap-2 border border-[#E2E2E2] text-[#555] px-5 py-2.5 rounded-full whitespace-nowrap hover:bg-[#f8fafa] transition"
                        >
                            {item.icon}
                            <span className="text-sm">{item.label}</span>
                        </button>
                    ))}

                </div>

            </div>
        </section>
    );
}
