"use client";
import { FileText, Users } from "lucide-react";

export default function PartenairesCard() {
    const partners = [
        { label: "Établissement", value: 98 },
        { label: "Professionnels", value: 30 },
        { label: "Sport", value: 15 },
        { label: "Bien-être", value: 80 },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-5">
            {/* === Title === */}
            <h3 className="font-semibold text-gray-800 text-base md:text-lg mb-3">
                Partenaires
            </h3>

            {/* === Gradient Total Header === */}
            <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-lg flex items-center justify-between px-4 py-3 mb-4">
                <div>
                    <h3 className="text-xl font-bold leading-none">2125</h3>
                    <p className="text-sm opacity-90">Total</p>
                </div>
                <div className="p-2 bg-white/20 rounded-md">
                    <Users size={22} className="text-white" />
                </div>
            </div>

            {/* === List of Partners === */}
            <div className="space-y-2">
                {partners.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 bg-[#F6FBFF] hover:bg-[var(--light-blue)] transition-colors rounded-lg p-3"
                    >
                        <div className="p-2 rounded-md bg-white border border-[var(--light-blue)] text-[var(--primary)] shadow-sm">
                            <FileText size={18} />
                        </div>
                        <div>
                            <p className="text-[15px] font-semibold text-gray-800 leading-none">
                                {item.value}
                            </p>
                            <p className="text-[13px] text-gray-500">{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
