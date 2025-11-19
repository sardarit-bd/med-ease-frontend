"use client";

import Image from "next/image";

export default function HeroSectionForhome() {
    return (
        <section className="w-full bg-[#61D0BF0A] py-20 pt-36">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* LEFT TEXT */}
                <div>
                    {/* Small Top Text */}
                    <p className="text-sm font-medium tracking-widest mb-3 flex items-center gap-1 text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">
                        <Image src={"/images/sthetecope.png"} width={35} height={35} />
                        DISPOSITIF MÉDICAL NUMÉRIQUE
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#3074B5] leading-tight mb-4">
                        Votre Vie Compte...
                    </h1>

                    {/* Description */}
                    <p className="text-textLight leading-relaxed mb-2">
                        Soyez en meilleure santé en accédant à l’offre de soins qui vous correspond !
                    </p>

                    <p className="font-semibold text-textDark mb-2">
                        MED’ease, votre boussole santé
                    </p>

                    <p className="text-textLight leading-relaxed max-w-md">
                        Gérez votre santé n’a jamais été aussi simple. L’univers de santé rassemblé et centralisé, pour VOUS !
                    </p>

                    {/* CTA Button */}
                    <div className="mt-6">
                        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold w-fit cursor-pointer">
                            S’inscrire
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center">
                    <Image
                        src="/images/homehero1.png"
                        width={650}
                        height={650}
                        alt="Healthcare illustration"
                        className="w-[90%] lg:w-full"
                    />
                </div>

            </div>
        </section>
    );
}
