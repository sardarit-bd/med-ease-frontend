'use client'


import Image from "next/image";
import { useState } from "react";

export default function OriginsSection() {


    const [timeline, settimeline] = useState('2021');



    console.log(timeline);



    const timelineYears = [2020, 2021, 2022, 2023, 2024];

    const cards = [
        {
            year: 2021,
            image: "/images/Crise.jpg", // replace with actual image path
            title: "Crise sanitaire",
            description:
                "Découverte des différentes difficultés rencontrées : l’accès aux soins, le cloisonnement des différents secteurs sanitaire, médico-social, social ou encore la souffrance des acteurs de santé (patients, professionnels, établissements…)",
        },
        {
            year: 2021,
            image: "/images/Héros.jpg", // replace with actual image path
            title: "Héros du quotidien",
            description:
                "En tenue en toute circonstance pour prendre en charge l’afflux de patients",
        },
        {
            year: 2021,
            image: "/images/Crise.jpg", // replace with actual image path
            title: "Crise sanitaire",
            description:
                "Découverte des différentes difficultés rencontrées : l’accès aux soins, le cloisonnement des différents secteurs sanitaire, médico-social, social ou encore la souffrance des acteurs de santé (patients, professionnels, établissements…)",
        },

        {
            year: 2023,
            image: "/images/Crise.jpg", // replace with actual image path
            title: "Crise sanitaire",
            description:
                "Découverte des différentes difficultés rencontrées : l’accès aux soins, le cloisonnement des différents secteurs sanitaire, médico-social, social ou encore la souffrance des acteurs de santé (patients, professionnels, établissements…)",
        },
        {
            year: 2020,
            image: "/images/Héros.jpg", // replace with actual image path
            title: "Héros du quotidien",
            description:
                "En tenue en toute circonstance pour prendre en charge l’afflux de patients",
        },
        {
            year: 2022,
            image: "/images/Crise.jpg", // replace with actual image path
            title: "Crise sanitaire",
            description:
                "Découverte des différentes difficultés rencontrées : l’accès aux soins, le cloisonnement des différents secteurs sanitaire, médico-social, social ou encore la souffrance des acteurs de santé (patients, professionnels, établissements…)",
        },
        {
            year: 2024,
            image: "/images/Héros.jpg", // replace with actual image path
            title: "Héros du quotidien",
            description:
                "En tenue en toute circonstance pour prendre en charge l’afflux de patients",
        },
        {
            year: 2024,
            image: "/images/Crise.jpg", // replace with actual image path
            title: "Crise sanitaire",
            description:
                "Découverte des différentes difficultés rencontrées : l’accès aux soins, le cloisonnement des différents secteurs sanitaire, médico-social, social ou encore la souffrance des acteurs de santé (patients, professionnels, établissements…)",
        },

    ];

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    Les Origines
                </h2>
                <p className="text-gray-500 italic text-sm">(La chronologie)</p>
            </div>

            {/* Timeline */}
            <div className="relative mb-12">
                {/* Line */}
                <div className="absolute top-1/2 left-0 w-full h-[3px] bg-[#61D0BF]/50 transform -translate-y-4/2"></div>

                {/* Years */}
                <div className="flex justify-between items-center relative z-10">
                    {timelineYears.map((year) => (
                        <div onClick={() => { settimeline(year) }} key={year} className="flex flex-col items-center cursor-pointer">
                            <div className="w-6 h-6 rounded-full bg-[#45B7A9] border-2 border-white shadow-md flex items-center justify-center">
                                {
                                    timeline == year && (
                                        <div className="h-2 w-2 bg-white rounded-md" />
                                    )
                                }
                            </div>
                            <span className="text-gray-700 text-lg  mt-4 font-semibold">{year}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
                {cards.map((card, idx) => (


                    timeline == card?.year && (
                        <div
                            key={idx}
                            className="bg-white customboxshadow transition overflow-hidden"
                        >
                            <div className="w-full h-56 relative">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </section>
    );
}
