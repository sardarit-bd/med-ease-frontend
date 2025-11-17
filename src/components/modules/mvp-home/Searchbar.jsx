"use client";

import { MapPin, Search, X } from "lucide-react";

export default function Searchbar() {
    return (
        <div className="mt-[-26px] w-full flex items-center bg-white shadow-lg rounded-full px-6 py-3 gap-4 max-w-5xl mx-auto">

            {/* Left Input */}
            <div className="flex items-center gap-3 flex-1">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Nom, spécialité, établissement..."
                    className="w-full outline-none text-gray-700 placeholder:text-gray-400"
                />
                <X className="w-4 h-4 text-gray-400 cursor-pointer" />
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-300"></div>

            {/* Location Input */}
            <div className="flex items-center gap-3 flex-1">
                <MapPin className="w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Où ?"
                    className="w-full outline-none text-gray-700 placeholder:text-gray-400"
                />
                <X className="w-4 h-4 text-gray-400 cursor-pointer" />
            </div>

            {/* Search button */}
            <button className="px-8 py-2 rounded-full text-white font-medium bg-gradient-to-r from-[#00A3FF] to-[#00D2A4]">
                Rechercher
            </button>
        </div>
    );
}
