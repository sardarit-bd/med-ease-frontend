"use client";
import { Calendar as CalendarIcon } from "lucide-react";

export default function CalendarRdvCard() {
    const rdvList = [
        { title: "Title", subtitle: "Lorem ipsum dolor sit amet" },
        { title: "Title", subtitle: "Lorem ipsum dolor sit amet" },
        { title: "Title", subtitle: "Lorem ipsum dolor sit amet" },
        { title: "Title", subtitle: "Lorem ipsum dolor sit amet" },
    ];

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const inactive = [27, 28];
    const activeDay = 19;

    return (
        <div className="flex flex-col gap-5">
            {/* === CALENDAR CARD === */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-3">Calendrier</h3>

                {/* Header Month */}
                <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-400 text-xl cursor-pointer hover:text-gray-600">
                        ‹
                    </span>
                    <p className="font-semibold text-[var(--primary)]">March 2024</p>
                    <span className="text-gray-400 text-xl cursor-pointer hover:text-gray-600">
                        ›
                    </span>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 text-sm text-gray-700">
                    {days.map((day) => (
                        <div
                            key={day}
                            className={`flex items-center justify-center h-8 w-8 rounded-full text-[13px] ${inactive.includes(day)
                                ? "text-gray-300"
                                : day === activeDay
                                    ? "bg-[var(--primary)] text-white font-semibold"
                                    : "text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            {day}
                        </div>
                    ))}
                </div>
            </div>

            {/* === RDV CARD === */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-800 text-base">RDV</h3>
                    <button className="flex items-center gap-1 border border-gray-300 text-gray-600 px-3 py-[2px] rounded-md text-sm">
                        <CalendarIcon size={16} />
                        Date
                    </button>
                </div>

                {/* RDV Items */}
                <div className="space-y-2">
                    {rdvList.map((item, i) => (
                        <div key={i} className="bg-[#F8FCFB] rounded-lg p-3">
                            <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                            <p className="text-gray-500 text-[13px]">{item.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
