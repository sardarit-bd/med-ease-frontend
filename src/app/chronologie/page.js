"use client";

import Image from "next/image";

export default function TimelinePage() {
    const timeline = [
        {
            year: "2020",
            side: "right",
            items: [
                {
                    side: "right",
                    title: "Crise Sanitaire…",
                    text: "Mobilisation des professionnels de santé, création de solutions digitales...",
                    img: "/images/Crise.jpg",
                },
                {
                    side: "right",
                    title: "Héros du Quotidien",
                    text: "Professionnels engagés dans une démarche d’amélioration continue.",
                    img: "/images/Crise.jpg",
                },
            ],
        },
        {
            year: "2021",
            side: "left",
            items: [
                {
                    side: "left",
                    title: "Résilience Soignante",
                    text: "Adaptation continue dans un contexte difficile.",
                    img: "/images/Crise.jpg",
                },
            ],
        },
        {
            year: "2022",
            side: "right",
            items: [
                {
                    side: "right",
                    title: "Retour d’expérience",
                    text: "Apprentissage des situations de crise pour renforcer les outils.",
                    img: "/images/Crise.jpg",
                },
            ],
        },
        {
            year: "2023",
            side: "left",
            items: [
                {
                    side: "left",
                    title: "Une Chimère",
                    text: "Un rêve collectif : moderniser le parcours de santé",
                    img: "/images/Crise.jpg",
                },
                {
                    side: "left",
                    title: "L’IDEE",
                    text: "Créer un outil simple, fluide, au service des professionnels.",
                    img: "/images/Crise.jpg",
                },
                {
                    side: "left",
                    title: "Les priorités de Santé",
                    text: "Digitalisation, coordination, fluidité & efficacité.",
                    img: "/images/Crise.jpg",
                },
            ],
        },
        {
            year: "2024",
            side: "right",
            items: [
                {
                    side: "right",
                    title: "Au service de l’état",
                    text: "Mise en application sur le terrain grâce aux initiatives publiques.",
                    img: "/images/Crise.jpg",
                },
                {
                    side: "right",
                    title: "The Concept",
                    text: "Structuration d’une solution digitale centrée sur le patient.",
                    img: "/images/Crise.jpg",
                },
            ],
        },
        {
            year: "2025",
            side: "left",
            items: [
                {
                    side: "left",
                    title: "Scholar : We do innovation differently",
                    text: "Nouvelle vision, nouveau standard de santé.",
                    img: "/images/Crise.jpg",
                },
                {
                    side: "left",
                    title: "Medysal, votre boussole santé",
                    text: "Un espace de coordination fluide et simple.",
                    img: "/images/Crise.jpg",
                },
            ],
        },
    ];

    return (
        <div className="w-full min-h-screen bg-gray-50 px-6 md:px-10 py-16 flex flex-col items-center">

            {/* HEADER */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800">Les Origines…</h2>
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF] font-bold text-3xl md:text-5xl">La chronologie</h2>
            </div>

            {/* TIMELINE CONTAINER */}
            <div className="relative w-full max-w-[900px]">

                {/* TIMELINE VERTICAL LINE */}
                <div className="absolute left-1/2 top-0 h-full border-l-2 border-dotted border-gray-500 -translate-x-1/2"></div>

                {/* ALL YEARS + ITEMS */}
                {timeline.map((section, idx) => (
                    <div key={idx} className="relative mb-24">

                        {/* YEAR LABEL */}
                        <div className={`absolute text-7xl font-bold text-gray-200 select-none text-outline-brand ${section?.side === "left" ? " top-[13px] left-0 translate-x-0 md:translate-x-8/2" : "top-[13px] right-0 translate-x-0 md:-translate-x-8/2"}`}>
                            {section.year}
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 text-6xl font-bold text-gray-200 select-none w-[40px] h-[40px] rounded-full bg-white border border-dashed border-gray-300 flex items-center justify-center shadow-sm">
                            <div className="h-[22px] w-[22px] bg-[#61D0BF] rounded-full" />

                            {
                                idx >= 1 && (
                                    <div className="text-xs absolute -top-3 left-[50%] traslate-x-[-50%] arrowClipPath"></div>
                                )
                            }

                        </div>

                        <div className="pt-20 space-y-12">
                            {section.items.map((item, i) => (
                                <TimelineCard
                                    key={i}
                                    side={item.side}
                                    title={item.title}
                                    text={item.text}
                                    img={item.img}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ---------------- TIMELINE CARD COMPONENT ---------------- */

function TimelineCard({ side, title, text, img }) {
    const isLeft = side === "left";

    return (
        <div className={`w-full flex ${isLeft ? "justify-start" : "justify-end"}`}>
            <div
                className={`relative w-[500px] bg-white customboxshadow rounded-md p-4 border border-gray-100 ${isLeft ? "mr-auto translate-x-0 md:translate-x-[-90px]" : "ml-auto translate-x-0 md:translate-x-[90px]"
                    }`}
            >
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                    {/* IMAGE */}
                    {img && (
                        <div className="w-full md:w-[160px] h-[130px] relative mb-3 rounded-lg overflow-hidden">
                            <Image src={img} alt={title} fill className="object-cover" />
                        </div>
                    )}

                    {/* TITLE */}
                    <h2 className="font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">{title}</h2>
                </div>

                {/* TEXT */}
                <p className="text-2xl text-[#7B7B7B] mt-1 leading-relaxed">{text}</p>
            </div>
        </div>
    );
}
