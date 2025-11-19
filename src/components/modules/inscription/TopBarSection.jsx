"use client";

import { CalendarDays } from "lucide-react";

export default function TopBarSection() {
    return (
        <div className="w-full bg-[#F03432] py-5 pt-24">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white text-sm">

                {/* LEFT SIDE — DATE */}
                <div className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    <span>2 septembre 2024</span>
                </div>

                {/* RIGHT LINKS */}
                <div className="flex items-center gap-8">
                    <button className="hover:opacity-80 transition">Services d’Urgences</button>
                    <button className="hover:opacity-80 transition">Services de Garde</button>
                    <button className="hover:opacity-80 transition">Numéros Utiles</button>
                </div>

            </div>
        </div>
    );
}
