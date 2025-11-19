"use client";

import Image from "next/image";

const cards = [
    {
        title: "Offre de soins",
        img: "/images/Humanitarian1.png",
        items: [
            "Nombre d’Établissements de santé : près de 1 500",
            "Nombre d’Établissements et Services Médico-Sociaux : près de 2 000",
            "Nombre de Professionnels de santé : près de 50 000 – En savoir plus",
        ],
    },
    {
        title: "Indicateurs de santé",
        img: "/images/Humanitarian2.png",
        items: [
            "Espérance de vie – Femmes : 85,3 ans – Hommes : 79,4 ans",
            "Espérance de vie en bonne santé – Femmes : 65,3 ans – Hommes : 63,8 ans",
            "Dépenses de santé/habitant : 3 475€",
        ],
    },
    {
        title: "Informations utiles",
        img: "/images/Humanitarian3.png",
        items: [
            "Geste d’Urgences (Se protéger, Alerter, Secourir)",
            "Gérer votre santé : Monespacesanté, Améli...",
            "Droit de santé : charte Hôpital, Représentant des usagers",
        ],
    },
];

export default function HealthInfoCardsSection() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* TOP SUBTEXT */}
                <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF] font-medium text-sm mb-10">
                    … En accédant à l’offre de soins qui vous correspond !
                </p>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">

                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-sm customboxshadow p-10 w-full h-full text-center"
                        >
                            {/* IMAGE */}
                            <div className="mb-6 flex justify-center">
                                <Image
                                    src={card.img}
                                    width={160}
                                    height={100}
                                    alt={card.title}
                                    className="object-contain"
                                />
                            </div>

                            {/* TITLE */}
                            <h3 className="text-[20px] font-semibold text-[#202020] mb-4">
                                {card.title}
                            </h3>

                            {/* LIST */}
                            <ul className="text-left text-[#7B7B7B] space-y-3">
                                {card.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-[#1E7BB5] text-sm">•</span>
                                        <span className="leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* BUTTON */}
                            <button
                                className="mt-8 px-6 py-2 text-white rounded-full font-semibold bg-gradient-to-r from-[#1E67B5] to-[#57D0BF] shadow-md hover:opacity-90 transition cursor-pointer"
                            >
                                En savoir plus
                            </button>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
