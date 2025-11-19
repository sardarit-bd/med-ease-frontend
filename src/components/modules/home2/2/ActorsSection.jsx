"use client";

import Image from "next/image";

const actors = [
    {
        title: "Praticiens",
        desc: "Médecin G, Médecin spécialiste, Chirurgien-Dentiste, IDE, Kine, SF, thérapeutes",
        icon: "/icons/ACTEURS-1.png",
    },
    {
        title: "Etablissements De Santé",
        desc: "Laboratoire, Pharmacie, Hôpital, Centre de santé, Centre d’imagerie, CPTS, MSP",
        icon: "/icons/ACTEURS-2.png",
    },
    {
        title: "Etablissements et Services Médico-Sociaux",
        desc: "EHPAD, RSS, SESSAD, IME…",
        icon: "/icons/ACTEURS-3.png",
    },
    {
        title: "Bien-être & Sport",
        desc: "Esthétique, Institut, Spa, Fitness",
        icon: "/icons/ACTEURS-4.png",
    },
    {
        title: "Autres",
        desc: "mutuelles",
        icon: "/icons/ACTEURS-5.png",
    },
];

export default function ActorsSection() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* TITLE */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <p className="text-sm font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF] mb-2">
                        CARACTÉRISTIQUES
                    </p>

                    <h2 className="text-[24px] font-bold text-[#202020] leading-snug">
                        Med’ease est la réponse aux besoins de tous les
                        <br /> acteurs de santé !
                    </h2>

                    <p className="text-[#7B7B7B] mt-4 text-[15px]">
                        Le parcours de santé se trouve simplifié et fluidifié grâce à une coordination
                        médicale optimisée. Bénéficiez de nos solutions élaborées pour vous :
                    </p>
                </div>

                {/* TABS */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        className="px-6 py-3 rounded-full font-semibold text-white shadow-md bg-gradient-to-r from-[#3074B5] to-[#61D0BF]"
                    >
                        ACTEURS DE SANTÉ
                    </button>

                    <button
                        className="px-6 py-3 curosr-pointer rounded-full font-semibold text-[#3074B5] bg-[#F3F9FB]"
                    >
                        INNOVATIONS
                    </button>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 content-center">

                    {actors.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-10 text-center customboxshadow transition-all"
                        >
                            {/* ICON */}
                            <div className="flex justify-center mb-5">
                                <Image
                                    src={item.icon}
                                    width={60}
                                    height={60}
                                    alt={item.title}
                                />
                            </div>

                            {/* TITLE */}
                            <h3 className="text-[20px] font-semibold text-[#202020] mb-2">
                                {item.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-[#7B7B7B] text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
