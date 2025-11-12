"use client";
import Image from "next/image";

export default function SeniorCard() {
    const stats = [
        { value: "760", label: "Structures" },
        { value: "88%", label: "Taux d’occupation" },
        { value: "500", label: "Résident en attente" },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-5">
            {/* Title */}
            <h3 className="font-semibold text-gray-800 text-base md:text-lg mb-3">
                Senior
            </h3>

            {/* Data blocks */}
            <div className="space-y-2">
                {stats.map((item, i) => (
                    <div
                        key={i}
                        className="bg-[#F8FCFB] rounded-lg p-3 md:p-4"
                    >
                        <p className="text-[18px] font-bold text-gray-800 leading-tight">
                            {item.value}
                        </p>
                        <p className="text-sm text-gray-500">{item.label}</p>
                    </div>
                ))}

                {/* MedEase Logo */}
                <div className="bg-[#F8FCFB] rounded-lg p-3 flex items-center justify-center">
                    <Image
                        src="/logos/headLogo.png"
                        alt="MedEase Logo"
                        width={120}
                        height={35}
                        className="object-contain opacity-90"
                    />
                </div>
            </div>
        </div>
    );
}
