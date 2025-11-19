

"use client";

import { Activity, BedSingle, Droplet, Home } from "lucide-react";

export default function UrgencesDashboardStatusBar() {
    return (
        <div className="w-full flex flex-wrap items-center gap-4 bg-white px-4 py-3">

            {/* PATIENTS */}
            <Chip>
                <span className="font-medium text-gray-700">
                    Patients | Total: 65 | Non Vus: 15
                </span>
            </Chip>

            {/* WAITING TIME */}
            <Chip>
                <span className="mr-1">⟳</span>
                <span className="font-medium text-gray-700">
                    Temps d’attente : 3h30min
                </span>
            </Chip>

            {/* CCMU */}
            <Chip>
                <span className="font-medium text-gray-700">CCMU :</span>

                <Status color="bg-red-500" value="1" count="8" />
                <Status color="bg-orange-500" value="2" count="12" />
                <Status color="bg-yellow-400" value="3" count="20" />
                <Status color="bg-green-500" value="4" count="10" />
                <Status color="bg-blue-500" value="5" count="15" />
            </Chip>

            {/* HOME */}
            <Chip>
                <Home className="w-4 h-4 text-gray-700" />
                <span className="ml-1 font-medium text-gray-700">: 8</span>
            </Chip>

            {/* BEDS */}
            <Chip>
                <BedSingle className="w-4 h-4 text-gray-700" />
                <span className="ml-1 font-medium text-gray-700">: 8</span>
            </Chip>

            {/* UHCD */}
            <Chip>
                <span className="font-medium text-gray-700">UHCD :</span>
                <span className="ml-1 font-semibold text-gray-800">14/24</span>
            </Chip>

            {/* BLOOD */}
            <Chip>
                <Droplet className="w-4 h-4 text-red-500" />
                <span className="ml-1 font-medium text-gray-700">: 100%</span>
            </Chip>

            {/* LUNGS */}
            <Chip>
                <Activity className="w-4 h-4 text-gray-700" />
                <span className="ml-1 font-medium text-gray-700">: 10</span>
            </Chip>

        </div>
    );
}

function Chip({ children }) {
    return (
        <div className="px-4 py-2 rounded-lg bg-[#F4FAFC] flex items-center gap-2 shadow-sm whitespace-nowrap">
            {children}
        </div>
    );
}

function Status({ color, value, count }) {
    return (
        <div className="flex items-center gap-1 ml-2">
            <span className={`w-4 h-4 rounded-full ${color} text-white text-xs flex items-center justify-center`}>
                {value}
            </span>
            <span className="text-gray-700 font-medium">{count}</span>
        </div>
    );
}
