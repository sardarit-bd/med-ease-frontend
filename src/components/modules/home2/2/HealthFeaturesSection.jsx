"use client";

import Image from "next/image";

export default function AdvantagesSection() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT IMAGE */}
                <div className="flex justify-center">
                    <Image
                        src="/images/Business merger-bro 1.png"
                        width={550}
                        height={550}
                        alt="Advantages Illustration"
                        className="w-[75%] lg:w-full"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div>
                    {/* Small Title */}
                    <p className="text-sm tracking-wider font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF] mb-2">
                        AVANTAGES
                    </p>

                    {/* Main Heading */}
                    <h2 className="text-[24px] lg:text-4xl font-bold text-[#202020] mb-4 leading-snug">
                        Pourquoi Choisir Med’ease, Votre Boussole Santé
                    </h2>

                    {/* FEATURES LIST */}
                    <div className="space-y-4">

                        {[
                            {
                                title: "Simplicité:",
                                desc: "Accéder à un Outil intuitif, clair et ergonomique avec des fonctions essentielles et sans surcharge.",
                            },
                            {
                                title: "Expertise:",
                                desc: "Profiter d’une communauté de soignants qui vous accompagne de A à Z",
                            },
                            {
                                title: "Finance:",
                                desc: "Optimiser vos revenus avec des services complets à bas coût",
                            },
                            {
                                title: "Sécurisé:",
                                desc: "Adhérer à une technologie moderne et fiable avec des données hébergées et certifiées en Europe avec une protection exigée par les hautes instances de santé.",
                            },
                            {
                                title: "Système:",
                                desc: "Entrer dans une interface de programmation avec une interopérabilité pour la communication, la transmission et la circulation d’informations médicales",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                <Image
                                    src="/icons/tick-circle.png"
                                    alt="tick-icon"
                                    width={24}
                                    height={24}
                                />
                                <p className="text-[#7B7B7B]">
                                    <span className="font-semibold text-[#202020]">{item.title}</span> {item.desc}
                                </p>
                            </div>
                        ))}

                    </div>

                    {/* CTA BUTTON */}
                    <div className="mt-6">
                        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold w-fit cursor-pointer">
                            S’inscrire
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}
