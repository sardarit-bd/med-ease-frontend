"use client";

import Image from "next/image";

const profiles = [
    {
        title: "Profil Général",
        desc: "Identifiez-vous pour être bien soigné(e).",
        img: "/images/insriptionProfile-1.png",
    },
    {
        title: "Profil Administratif",
        desc: "Conservez à proximité de vous des informations administratives essentielles.",
        img: "/images/insriptionProfile-2.png",
    },
    {
        title: "Profil Physique",
        desc: "Décrivez la structure de votre anatomie pour une meilleure compréhension.",
        img: "/images/insriptionProfile-3.png",
    },
    {
        title: "Profil Urgence",
        desc: "Renseignez certaines données vitales pour secourir en toute circonstance.",
        img: "/images/insriptionProfile-4.png",
    },
];

export default function InscriptionBanner() {
    return (
        <section className="w-full bg-[#EAF3F7] py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* TITLE */}
                <div className="text-center mb-14">
                    <h2 className="text-[28px] lg:text-4xl font-bold text-[#3074B5] leading-snug">
                        Renseignez Votre Portail Info Patient
                        <br /> Pour Être En Meilleure Santé !
                    </h2>

                    <p className="text-[#DB4A4A] mt-3 font-medium">
                        Étape obligatoire pour profiter pleinement du dispositif médical numérique
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">

                    {profiles.map((item, idx) => (
                        <div key={idx} className="bg-white overflow-hidden customboxshadow w-full h-full max-w-[300px]">

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
                                <h3 className="text-[20px] font-semibold text-[#2B2B2B] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-[#7B7B7B] text-[15px] leading-relaxed">
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
