"use client";

import { Car } from "lucide-react";

export default function TransportSanitaireHero() {
    return (
        <div className="w-full bg-[#F2FAFD] relative py-16 px-4 pt-32">

            {/* HEXAGON BACKGROUND (optional subtle effect) */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[url('/hex-bg.svg')] bg-cover"></div>

            <div className="relative z-10 flex flex-col items-center">

                {/* TITLE + ICON */}
                <div className="flex items-center gap-3 mb-2">
                    <Car className="w-8 h-8 text-[#2F89C9]" />
                    <h1 className="text-4xl font-bold text-[#2F89C9]">Transport Sanitaire</h1>
                </div>

                {/* SUBTITLE */}
                <p className="text-gray-500 text-lg mb-10">Déplacez-vous en toute sécurité</p>

                {/* MIDDLE BUTTONS */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">

                    {[
                        "Maps de santé",
                        "Portail Info Établissements",
                        "Portail Info Professionnels",
                        "Thématiques",
                        "Plus",
                    ].map((b, i) => (
                        <button
                            key={i}
                            className="px-8 py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#3074B5] to-[#61D0BF] shadow hover:opacity-90 transition"
                        >
                            {b}
                        </button>
                    ))}

                </div>

                {/* CTA BUTTON */}
                <div className="bg-white shadow-md rounded-full p-4 translate-y-[100px]">
                    <button className="px-6 py-3 text-lg rounded-full font-semibold text-white bg-gradient-to-r from-[#3074B5] to-[#61D0BF] hover:opacity-90 transition">
                        Commander votre transport sanitaire
                    </button>
                </div>

            </div>
        </div>
    );
}
