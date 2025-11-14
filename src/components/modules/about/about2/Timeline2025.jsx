"use client";

import Image from "next/image";

export default function Timeline2025() {
    return (
        <section className="w-full max-w-7xl mx-auto py-16 px-6 md:px-20 bg-white">

            {/* HEADER */}
            <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                    Les Origines…
                </h2>
                <p className="text-3xl md:text-4xl font-semibold">
                    <span className="bg-gradient-to-r from-[#2A6EBB] to-[#61D0BF] text-transparent bg-clip-text">
                        La chronologie
                    </span>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[160px_20px_1fr] gap-6">

                {/* LEFT YEARS LIST */}
                <div className="flex flex-col gap-3 pt-6">

                    <Year active>2025</Year>
                    <Year>2024</Year>
                    <Year>2023</Year>
                    <Year>2022</Year>
                    <Year>2021</Year>

                </div>

                {/* TIMELINE LINE */}
                <div className="relative flex justify-center">

                    {/* Dotted Line */}
                    <div className="border-l-2 border-dotted border-gray-400 h-full"></div>

                    {/* Green Dot */}
                    <div className="absolute -top-3 w-6 h-6 rounded-full bg-[#61D0BF] shadow-md border-4 border-white"></div>

                    {/* Bottom Triangle */}
                    <div className="absolute -bottom-3 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px] border-transparent border-t-black"></div>

                </div>

                {/* RIGHT CONTENT */}
                <div className="space-y-8">

                    {/* CARD 1 */}
                    <TimelineCard
                        logo="/images/Group 627.jpg" // replace
                        title={
                            <>
                                SCHOOLAB :{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A6EBB] to-[#61D0BF]">
                                    WE DO INNOVATION, DIFFERENTLY
                                </span>
                            </>
                        }
                        lines={[
                            "Intégration du studio d’innovation (incubation)",
                            "Structuration du projet à impact"
                        ]}
                    />

                    {/* CARD 2 */}
                    <TimelineCard
                        logo="/images/medsd...png" // replace
                        title={
                            <>
                                MED’EASE,{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A6EBB] to-[#61D0BF]">
                                    VOTRE BOUSSOLE SANTÉ
                                </span>
                            </>
                        }
                        lines={[
                            "Lancement du développement",
                            "Démarrage de pré-commercialisation",
                            "Rencontre des acteurs de santé (patients, professionnels, établissements…)",
                            "Appui de partenaires financiers clés (BPI, Crédit Mutuel…)"
                        ]}
                    />

                </div>
            </div>
        </section>
    );
}

/* ------------------ COMPONENTS ------------------ */

function Year({ children, active }) {
    return (
        <h2
            className={`text-5xl font-bold text-outline-brand ${active
                ? "bg-gradient-to-r from-[#2A6EBB] to-[#61D0BF] text-transparent bg-clip-text"
                : "text-gray-300"
                }`}
        >
            {children}
        </h2>
    );
}

function TimelineCard({ logo, title, lines }) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-[0_4px_15px_rgba(0,0,0,0.08)] border border-gray-100">
            <div className="flex items-start gap-5">

                {/* Logo */}
                <div className="h-[140px] w-[140px] relative rounded-md overflow-hidden bg-gray-100">
                    <Image
                        src={logo}
                        alt="logo"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Text */}
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                        {title}
                    </h3>

                    <ul className="mt-2 space-y-1 text-gray-600 text-[15px] leading-relaxed">
                        {lines.map((line, i) => (
                            <li key={i}>{line}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}
