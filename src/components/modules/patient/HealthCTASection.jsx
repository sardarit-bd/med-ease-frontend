"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HealthCTASection() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto text-center px-6 md:px-10">
                {/* Top Caption */}
                <h3 className="text-sm md:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF] uppercase tracking-wide flex items-center justify-center gap-2">
                    <span className="text-red-500 text-lg">❤️</span>
                    Parce que chaque minute compte,
                    <span className="text-[var(--brandBg,#61D0BF)]">
                        chaque décision peut sauver une vie.
                    </span>
                </h3>

                {/* CTA Box */}
                <div className="relative mt-10 bg-gradient-to-r from-[var(--brandColor,#3074B5)] to-[var(--brandBg,#61D0BF)] text-white rounded-md py-16 px-8 md:px-20 overflow-hidden shadow-lg">
                    {/* Floating icons (decorative) */}
                    <Image
                        src="/icons/Stetoscope.png"
                        alt="stethoscope"
                        width={60}
                        height={60}
                        className="absolute top-8 right-10 opacity-90 animate-float"
                    />
                    <Image
                        src="/icons/pills.png"
                        alt="pill"
                        width={55}
                        height={55}
                        className="absolute bottom-10 right-28 opacity-90 animate-float-delayed"
                    />
                    <Image
                        src="/icons/FirstAid.png"
                        alt="medical box"
                        width={70}
                        height={70}
                        className="absolute bottom-10 left-28 opacity-90 animate-float"
                    />
                    <Image
                        src="/icons/BloodPressure.png"
                        alt="health monitor"
                        width={55}
                        height={55}
                        className="absolute top-8 left-20 opacity-90 animate-float-delayed"
                    />

                    {/* CTA Text */}
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                            Med’Ease, votre boussole santé,<br /> un allié à portée de clic.
                        </h2>
                        <p className="text-white/90 text-sm md:text-base mb-8">
                            Faites le premier pas vers une meilleure santé.
                        </p>

                        {/* CTA Button */}
                        <button className="bg-white text-[var(--brandColor,#3074B5)] font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300 inline-flex items-center gap-2">
                            J’agis pour ma Santé, ma Vie !
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
