"use client";

import { Building2, Car, Heart, User2, UserCheck } from "lucide-react";

export default function TransportOptionPills() {
    return (
        <div className="border-y border-gray-200">
            <div className="w-full max-w-7xl mx-auto py-6 px-4 flex flex-wrap gap-4">
                <Pill icon={<Car size={18} />} label="Type de véhicule" />
                <Pill icon={<Heart size={18} />} label="Favoris" />
                <Pill icon={<Building2 size={18} />} label="Compagnie" />
                <Pill icon={<UserCheck size={18} />} label="Disponibilités" />
                <Pill icon={<User2 size={18} />} label="Expérience" />
            </div>
        </div>
    );
}

/* ---------- Reusable Pill ---------- */

function Pill({ icon, label }) {
    return (
        <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 text-gray-600 bg-white shadow-sm hover:bg-gray-50 cursor-pointer transition">
            <span className="text-gray-500">
                {icon}
            </span>
            <span className="text-sm font-medium">
                {label}
            </span>
        </div>
    );
}
