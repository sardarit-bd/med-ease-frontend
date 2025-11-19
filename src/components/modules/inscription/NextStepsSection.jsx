"use client";

import Image from "next/image";

const steps = [
    {
        title: "Profil Expérience",
        desc: "Contribuez à améliorer la qualité de la prise en charge et le taux de satisfaction.",
        img: "/images/insriptionProfile-1.png",
    },
    {
        title: "Conciergerie Médicale",
        desc: "Organisez votre parcours de santé.",
        img: "/images/insriptionProfile-5.png",
    },
    {
        title: "Réglementation",
        desc: "Prenez connaissance de la réglementation pour accroître votre pouvoir d’agir.",
        img: "/images/insriptionProfile-6.png",
    },
];






export default function NextStepsSection() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* SECTION TITLE */}
                <div className="text-center mb-14">
                    <div className="flex items-center gap-2 justify-center">
                        <Image src={'/icons/herodoctorthapistopok.png'} alt="icons" width={24} height={24} />
                        <p className="text-sm tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">
                            ÉTAPES SUIVANTES
                        </p>
                    </div>

                    <h2 className="text-[44px] font-semibold text-[#3074B5] leading-snug mt-2">
                        Visualisez Et Analysez Ces Informations<br />
                        Essentielles Pour Votre Santé.
                    </h2>

                    <p className="text-[#F53838] mt-3 font-medium">
                        Étape recommandée pour profiter pleinement du dispositif médical numérique
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">

                    {steps.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white overflow-hidden customboxshadow w-full h-full max-w-[350px]"
                        >
                            {/* IMAGE */}
                            <div className="w-full h-[220px] relative">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* TEXT CONTENT */}
                            <div className="p-6 text-center">
                                <h3 className="text-[18px] font-semibold text-[#202020] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-[#7B7B7B] text-[14px] leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
