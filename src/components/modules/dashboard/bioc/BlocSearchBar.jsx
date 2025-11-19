"use client";

import { Search } from "lucide-react";

export default function BlocSearchBar() {
    return (
        <div className="w-full bg-white py-6">
            <div className="max-w-5xl mx-auto px-6 flex justify-center">

                {/* Search Bar Container */}
                <div className="w-full max-w-3xl bg-white shadow-md border border-gray-50 rounded-full flex items-center px-3 py-3">

                    {/* Search Icon */}
                    <Search size={18} className="text-[#999]" />

                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder=" "
                        className="flex-1 outline-none border-none bg-transparent px-3 text-sm text-[#333]"
                    />

                    {/* Button */}
                    <button className="px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#1E67B5] to-[#57D0BF] hover:opacity-90 transition">
                        Rechercher
                    </button>

                </div>

            </div>
        </div>
    );
}
