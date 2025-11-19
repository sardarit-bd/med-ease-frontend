"use client";

import Image from "next/image";

export default function HealthFeaturesSection() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT IMAGE */}
                <div className="flex justify-center">
                    <Image
                        src="/images/HealthFeaturesSection.png"
                        width={550}
                        height={550}
                        alt="Digital Health Globe"
                        className="w-[75%] lg:w-full"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div>
                    {/* Small Title */}
                    <p className="text-sm tracking-wider font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF] mb-2">
                        CARACTÉRISTIQUES
                    </p>

                    {/* Main Heading */}
                    <h2 className="text-[24px] lg:text-4xl font-bold text-[#202020] text-text mb-4">
                        Prenez Le Contrôle De Votre Santé Grâce à
                        <br />Votre Pouvoir D’agir. On Vous Aide Pour ça
                    </h2>

                    {/* Subtext */}
                    <p className="text-[#7B7B7B] mb-6">
                        Un Dispositif médical numérique et une Conciergerie Médicale pour:
                    </p>

                    {/* FEATURES LIST */}
                    <div className="space-y-4">

                        {[
                            "Accéder à un parcours de santé fluidifié, simplifié et accessible de TOUS",
                            "Obtenir un pré-diagnostic médical",
                            "Garantir une prise en charge qualitative et efficiente",
                            "Visualiser en toute transparence les données de santé",
                            "Découvrir un réseau d’experts de santé",
                            "Bénéficier d’un accompagnement personnalisé et adapté de A à Z."
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                <Image src={'/icons/tick-circle.png'} alt="tick-icons" width={24} height={24} />
                                <p className="text-[#7B7B7B]">{item}</p>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
}
