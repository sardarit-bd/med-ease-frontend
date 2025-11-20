"use client";

import { BedDouble, Clock, Droplets, Home, Wind } from "lucide-react";

export default function DashboardStatusBar() {
    return (
        <div className="w-full flex items-center gap-3 px-4 py-3 bg-white shadow-sm rounded-xl overflow-x-auto scrollbar-hide">

            {/* Patients */}
            <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                Patients | Total: 65 | Non Vus: 15
            </div>

            {/* Waiting time */}
            <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 flex items-center gap-1 whitespace-nowrap">
                <Clock size={16} />
                Temps d’attente : 3h30min
            </div>

            {/* CCMU Section */}
            <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 flex items-center gap-2 whitespace-nowrap">
                <span>CCMU :</span>

                {/* CCMU color badges */}
                <span className="flex items-center gap-1">
                    <span className="w-4 h-4 rounded-full bg-red-500"></span>
                    <span>8</span>
                </span>

                <span className="flex items-center gap-1">
                    <span className="w-4 h-4 rounded-full bg-orange-500"></span>
                    <span>12</span>
                </span>

                <span className="flex items-center gap-1">
                    <span className="w-4 h-4 rounded-full bg-yellow-400"></span>
                    <span>20</span>
                </span>

                <span className="flex items-center gap-1">
                    <span className="w-4 h-4 rounded-full bg-green-500"></span>
                    <span>10</span>
                </span>

                <span className="flex items-center gap-1">
                    <span className="w-4 h-4 rounded-full bg-blue-600"></span>
                    <span>15</span>
                </span>
            </div>

            {/* House & Beds */}
            <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 flex items-center gap-3 whitespace-nowrap">
                <div className="flex items-center gap-1">
                    <Home size={16} />
                    <span>: 8</span>
                </div>

                <div className="flex items-center gap-1">
                    <BedDouble size={16} />
                    <span>: 8</span>
                </div>

                <div className="flex items-center gap-1">
                    <BedDouble size={16} />
                    <span>: 8</span>
                </div>
            </div>

            {/* UHCD */}
            <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                UHCD : 14/24
            </div>

            {/* Oxygen */}
            <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 flex items-center gap-1 whitespace-nowrap">
                <Droplets size={16} className="text-red-500" />
                <span>100%</span>
            </div>

            {/* Lungs */}
            <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 flex items-center gap-1 whitespace-nowrap">
                <Wind size={16} />
                <span>10</span>
            </div>
        </div>
    );
}
