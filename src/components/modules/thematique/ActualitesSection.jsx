"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const news = [
    {
        img: "/images/Actualités-1.png",
        title: "Santé",
        desc: "Interruption volontaire de grossesse (IVG)",
    },
    {
        img: "/images/Actualités-2.png",
        title: "Sport",
        desc: "Une athlète paralympiques concourt à Paris au septième mois de grossesse",
    },
    {
        img: "/images/Actualités-3.png",
        title: "Grossesse",
        desc: "Emotions, anxiété et dépression",
    },
];

export default function ActualitesSection() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* SECTION HEADER */}
                <div className="text-center mb-12 relative">

                    {/* ARROWS — Top right */}
                    <div className="absolute right-0 top-0 flex gap-3">
                        <button className="p-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold w-fit cursor-pointer transition">
                            <ChevronLeft size={20} className="text-white" />
                        </button>
                        <button className="p-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold w-fit cursor-pointer transition">
                            <ChevronRight size={20} className="text-white" />
                        </button>
                    </div>

                    {/* SUBTITLE */}
                    <p className="text-sm font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">
                        DERNIER ACTUALITÉ
                    </p>

                    {/* TITLE */}
                    <h2 className="text-[28px] lg:text-4xl font-semibold text-[#202020] mt-1">
                        Actualités
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-[#7B7B7B] mt-2">
                        Découvrez l’actualité de santé
                    </p>
                </div>

                {/* NEWS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 place-items-center">

                    {news.map((item, idx) => (
                        <div key={idx} className="w-full h-full max-w-[380px] cursor-pointer">

                            {/* IMAGE CARD */}
                            <div className="w-full h-[240px] relative rounded-sm overflow-hidden shadow-sm">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* TITLE */}
                            <h3 className="mt-3 text-[18px] font-semibold text-[#202020]">
                                {item.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-[#7B7B7B] text-[15px] mt-1">
                                {item.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
