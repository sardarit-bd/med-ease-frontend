"use client";

import { Calendar } from "lucide-react";

export default function TopHeader() {
    return (
        <div className="w-full pt-20">
            {/* ======= Red Top Bar ======= */}
            <div className="w-full bg-[#EF3C3C] h-10 flex items-center px-6 text-white ">

                <div className="max-w-7xl mx-auto flex items-center w-full px-6 text-white">
                    {/* Left — Date */}
                    <div className="flex items-center gap-2 text-sm">
                        <Calendar size={14} />
                        <span>2 septembre 2024</span>
                    </div>

                    {/* Right — Menu */}
                    <div className="flex-1 flex justify-end">
                        <ul className="flex items-center gap-12 text-sm">
                            <li className="cursor-pointer hover:opacity-80 transition">
                                Services d’Urgences
                            </li>
                            <li className="cursor-pointer hover:opacity-80 transition">
                                Services de Garde
                            </li>
                            <li className="cursor-pointer hover:opacity-80 transition">
                                Numéros Utiles
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ======= Page Title ======= */}
            <div className="px-6 py-10 max-w-7xl mx-auto">
                <h2 className="text-[22px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">
                    Rendez-vous
                </h2>
            </div>
        </div>
    );
}
