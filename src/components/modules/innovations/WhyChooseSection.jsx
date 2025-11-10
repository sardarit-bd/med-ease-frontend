import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function WhyChooseSection() {
    const benefits = [
        {
            title: "Simplicité",
            desc: "Accéder à un Outil intuitif, clair et ergonomique avec des fonctions essentielles et sans surcharge.",
        },
        {
            title: "Expertise",
            desc: "Profiter d’une communauté de soignants qui vous accompagne de A à Z.",
        },
        {
            title: "Finance",
            desc: "Optimiser vos revenus avec des services complets à bas coût.",
        },
        {
            title: "Sécurité",
            desc: "Adhérer à une technologie moderne et fiable avec des données hébergées et certifiées en Europe avec une protection exigée par les hautes instances de santé.",
        },
        {
            title: "Système",
            desc: "Entrer dans une interface de programmation avec une interopérabilité pour la communication, la transmission et la circulation d’informations médicales.",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* --- Left Illustration --- */}
                <div className="flex justify-center">
                    <div className="">
                        <Image
                            src="/images/Businessmergerbro.png" // 👉 Replace with your image
                            alt="Pourquoi Choisir Med’ease"
                            width={500}
                            height={400}
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* --- Right Text Content --- */}
                <div>
                    <p className="text-[#45B7A9] font-semibold uppercase tracking-wide mb-2">
                        Avantages
                    </p>

                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 leading-snug">
                        Pourquoi Choisir Med’ease, Votre Boussole Santé
                    </h2>

                    <ul className="space-y-4 mb-8">
                        {benefits.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700">
                                <CheckCircle
                                    size={20}
                                    className="text-[#61D0BF] mt-1 flex-shrink-0"
                                />
                                <div>
                                    <span className="font-semibold text-gray-900">
                                        {item.title} :
                                    </span>{" "}
                                    {item.desc}
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <button className="bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white font-medium px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                        S’inscrire
                    </button>
                </div>
            </div>
        </section>
    );
}
