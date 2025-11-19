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
                        Votre Bien-être Compte…
                    </h1>

                    {/* Description */}
                    <p className="text-textLight leading-relaxed mb-2">
                        Simplifiez votre Prise en charge. Restez focalisés sur votre cœur de métier.
                    </p>

                    <p className="font-semibold text-textDark mb-2">
                        Maximisez votre Expertise. Soigner devient plus facile !
                    </p>

                    <p className="text-textLight leading-relaxed max-w-md">
                        Un Dispositif médical numérique et une Conciergerie médicale pour fluidifier le parcours de santé, améliorer l’accès au soin et faciliter la coordination médicale.
                    </p>

                    <div className="mt-3">
                        <h3 className="pb-3 text-[#2B2B2B] font-bold text-[15px]">Avantages : </h3>
                        <ul className="flex flex-col gap-2">
                            <li className="flex items-center gap-2">
                                <Image src={'/icons/linkbtn.png'} alt="like-icons" height={24} width={24} />
                                <span className="text-[#7B7B7B] text-[15px]">Des solutions innovantes pour VOUS</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src={'/icons/linkbtn.png'} alt="like-icons" height={24} width={24} />
                                <span className="text-[#7B7B7B] text-[15px]">L’Univers de santé rassemblé et centralisé. Tout en 1</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src={'/icons/linkbtn.png'} alt="like-icons" height={24} width={24} />
                                <span className="text-[#7B7B7B] text-[15px]">Décloisonnement entre Ville-Hôpital/ Médico-social /Social </span>
                            </li>
                        </ul>
                    </div>


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
                        src="/images/home2hero.png"
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
