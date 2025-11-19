"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const events = [
    {
        img: "/images/Communauté-1.png",
        time: "14:00",
        date: "Mardi 10 septembre 2024",
        title: "Salon Maternité Paternité Enfant",
        speaker: "Professeur Xavier",
        location: "Hôpital Robert Debré, Paris 19e",
    },
    {
        img: "/images/Communauté-2.png",
        time: "9:00",
        date: "Jeudi 11 septembre 2024",
        title: "53èmes journées nationales de la SFMP",
        speaker: "Professeur Xavier",
        location:
            "Fédération Française des réseaux de santé en périnatalité",
    },
    {
        img: "/images/Communauté-3.png",
        time: "10:00",
        date: "Vendredi 12 septembre 2024",
        title: "Groupe d’entraide pour parents isolés",
        speaker: "Professeur Xavier",
        location:
            "Association soins palliatifs et accompagnement enfants",
    },
];

export default function CommunauteSection() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* HEADER */}
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-[28px] lg:text-4xl font-semibold text-[#202020]">
                            Communauté
                        </h2>
                        <p className="text-[#7B7B7B] mt-2">
                            Participez aux événements organisés par les experts de santé
                        </p>
                    </div>

                    {/* ARROWS */}
                    <div className="flex gap-3">
                        <button className="p-2 rounded-full  bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold w-fit cursor-pointer transition">
                            <ChevronLeft size={20} className="text-white" />
                        </button>
                        <button className="p-2 rounded-full  bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold w-fit cursor-pointer transition">
                            <ChevronRight size={20} className="text-white" />
                        </button>
                    </div>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

                    {events.map((item, idx) => (
                        <div key={idx} className="cursor-pointer flex flex-col">

                            {/* IMAGE CARD */}
                            <div className="w-full h-[240px] relative rounded-sm overflow-hidden shadow-sm">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* DATE ROW */}
                            <div className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-sm font-medium mt-3">
                                <Image src={'/icons/Date.png'} alt="date-icons" width={24} height={24} />
                                <span>{item.time}</span>
                                <span className="">|</span>
                                <span>{item.date}</span>


                            </div>
                            {/* TITLE */}
                            <h3 className="mt-2 text-[18px] font-semibold text-[#202020] leading-snug">
                                {item.title}
                            </h3>

                            {/* SPEAKER */}
                            <p className="text-[#202020] mt-1 text-[15px] font-medium">
                                {item.speaker}
                            </p>

                            {/* LOCATION */}
                            <p className="text-[#7B7B7B] text-[15px] leading-tight">
                                {item.location}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section >
    );
}
