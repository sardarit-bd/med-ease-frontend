"use client";

import { MapPin, Search, X } from "lucide-react";
import Image from "next/image";

export default function MedicalSearchHeader() {
    return (
        <section className="w-full bg-[#EAF3F7] py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* TOP ROW: ICON + TABS */}
                <div className="flex flex-wrap items-center gap-4 mb-8 px-10">

                    {/* MATERNITÉ LABEL */}
                    <div className="flex items-center gap-2">
                        <Image
                            src="/icons/motherhood.png"
                            width={28}
                            height={28}
                            alt="Maternité icon"
                        />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF] font-semibold text-sm">
                            MATERNITÉ
                        </span>
                    </div>

                    {/* TABS */}
                    <div className="flex flex-wrap gap-3 ml-auto">
                        <button className="px-6 py-4 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-[#1E67B5] to-[#57D0BF] shadow-md hover:opacity-90 transition">
                            Maps de santé
                        </button>

                        <button className="px-6 py-4 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-[#1E67B5] to-[#57D0BF] shadow-md hover:opacity-90 transition">
                            Portail Info Établissements
                        </button>

                        <button className="px-6 py-4 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-[#1E67B5] to-[#57D0BF] shadow-md hover:opacity-90 transition">
                            Portail Info Professionnels
                        </button>
                    </div>
                </div>

                {/* SEARCH BAR */}
                <div className="w-full bg-white rounded-full shadow-md p-2 flex items-center my-4 mt-10 gap-4">

                    {/* LEFT INPUT — SPECIALTY */}
                    <div className="flex items-center gap-3 flex-1 px-3">
                        <Search size={18} className="text-[#9A9A9A]" />
                        <input
                            type="text"
                            placeholder="Maternité"
                            className="flex-1 outline-none text-sm text-[#202020]"
                        />
                        <X size={16} className="text-[#B3B3B3] cursor-pointer" />
                    </div>

                    {/* VERTICAL DIVIDER */}
                    <div className="w-px h-6 bg-[#DADADA]"></div>

                    {/* LOCATION INPUT */}
                    <div className="flex items-center gap-3 flex-1 px-3">
                        <MapPin size={18} className="text-[#9A9A9A]" />
                        <input
                            type="text"
                            placeholder="Où ?"
                            className="flex-1 outline-none text-sm text-[#202020]"
                        />
                        <X size={16} className="text-[#B3B3B3] cursor-pointer" />
                    </div>

                    {/* SEARCH BUTTON */}
                    <button
                        className="px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-[#1E67B5] to-[#57D0BF] shadow-md hover:opacity-90 transition"
                    >
                        Rechercher
                    </button>

                </div>
            </div>
        </section>
    );
}
