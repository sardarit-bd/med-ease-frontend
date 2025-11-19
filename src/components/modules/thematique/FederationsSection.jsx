"use client";

import Image from "next/image";

const federations = [
    {
        title: "Société Française de Néonatologie",
        img: "/images/federations-1.png",
    },
    {
        title: "Société Française de Pédiatrie",
        img: "/images/federations-2.png",
    },
    {
        title: "Fédération Française des Réseaux de Santé en Périnatalité",
        img: "/images/federations-3.png",
    },
];

export default function FederationsSection() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* GRADIENT BLOCK */}
                <div className="w-full rounded-sm py-14 px-14 bg-gradient-to-r from-[#1E67B5] to-[#57D0BF] text-center">

                    {/* MAIN TITLE */}
                    <h2 className="text-[26px] lg:text-3xl font-bold text-white">
                        Fédérations & Sociétés de santé
                    </h2>

                    {/* SUBTITLE */}
                    <p className="text-white/90 mt-2 text-[15px]">
                        Découvrez les différents groupes d’experts à votre écoute
                    </p>

                    {/* GRID CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-12 place-items-center">

                        {federations.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-sm shadow-sm p-8 w-full h-full max-w-[350px] text-center"
                            >
                                {/* IMAGE */}
                                <div className="mb-6 flex justify-center">
                                    <Image
                                        src={item.img}
                                        width={180}
                                        height={90}
                                        alt={item.title}
                                        className="object-contain"
                                    />
                                </div>

                                {/* TITLE */}
                                <p className="text-[18px] font-semibold text-[#202020] leading-snug">
                                    {item.title}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}
