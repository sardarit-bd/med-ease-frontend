"use client";

import { Calendar, Clock } from "lucide-react";

export default function RdvGradientBar() {
    return (
        <div className="w-full bg-gradient-to-r from-[#1B76BA] via-[#3CA8C9] to-[#63E0C3] h-14">

            <div className="flex items-center px-6 text-white max-w-7xl mx-auto h-14">
                {/* Left: Date */}
                <div className="flex items-center gap-2 text-sm">
                    <Calendar size={14} className="text-white" />
                    <span>Mercredi 30 avril</span>
                </div>

                {/* Right: Time */}
                <div className="flex-1 flex justify-center md:justify-start">
                    <div className="flex items-center gap-2 text-sm ml-0 md:ml-32">
                        <Clock size={14} className="text-white" />
                        <span>16h00–17h00</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
