"use client";

import { HeartPulse } from "lucide-react";
import Image from "next/image";

export default function MedEaseHero() {
    return (
        <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">

            {/* BACKGROUND IMAGE */}
            <Image
                src="/images/medeaseHerobg.jpg"   // <-- replace with your image
                alt="Medical Background"
                fill
                className="object-cover opacity-40"
                priority
            />

            {/* SOFT OVERLAY */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col items-center text-center px-4">

                {/* SMALL TAG */}
                <div className="bg-white rounded-full shadow px-4 py-3 flex items-center gap-2 mb-6">
                    <HeartPulse size={18} className="text-[#2A6EBB]" />
                    <span className="text-gray-700 text-sm font-medium">
                        Notre histoire, votre santé
                    </span>
                </div>

                {/* MAIN HEADING */}
                <h1 className="text-2xl md:text-4xl font-semibold text-[#1B4E8A] leading-snug">
                    Med’ease, C’est vous, c’est nous, <br />
                    c’est ensemble
                </h1>
            </div>
        </section>
    );
}
