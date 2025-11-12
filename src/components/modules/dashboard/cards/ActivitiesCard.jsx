"use client";
import { CalendarDays } from "lucide-react";

export default function ActivitiesCard() {
    const activities = [
        { title: "Consultations", desc: "Lorem ipsum dolor sit amet" },
        { title: "Suivi patient", desc: "Consectetur adipiscing elit" },
        { title: "Analyses médicales", desc: "Sed do eiusmod tempor incididunt" },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-5 flex flex-col justify-between">
            {/* Header Row */}
            <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-800 text-base md:text-lg">Activities</h3>

                <button className="flex items-center gap-1 border border-gray-300 rounded-md px-2.5 py-1.5 text-sm text-gray-600 hover:bg-[var(--light-blue)] transition-all">
                    <CalendarDays size={14} /> Date
                </button>
            </div>

            {/* Activity Items */}
            <div className="space-y-3">
                {activities.map((item, i) => (
                    <div
                        key={i}
                        className="border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-all"
                    >
                        <h4 className="text-sm md:text-base font-semibold text-[var(--primary)] mb-1">
                            {item.title}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Bottom Indicator (optional gradient footer like in Med’Ease style) */}
            <div className="h-1.5 mt-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full"></div>
        </div>
    );
}
