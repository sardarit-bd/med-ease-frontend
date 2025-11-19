"use client";

import Image from "next/image";

export default function OffreSoinsSection() {
    return (
        <section className="w-full bg-white py-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT IMAGE */}
                <div className="flex justify-center">
                    <Image
                        src="/images/OffreSoinsSectionbanner.png"
                        width={550}
                        height={450}
                        alt="Offre de soins"
                        className="w-[85%] lg:w-full"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div>
                    <h2 className="text-[28px] font-bold text-[#202020] mb-2">
                        Offre De Soins
                    </h2>

                    <p className="text-[#7B7B7B] mb-6">
                        Maternité en Ile-de-France : <span className="font-semibold text-[#202020]">80</span>
                    </p>

                    {/* LIST OF ITEMS */}
                    <div className="space-y-5">

                        {/* 1 */}
                        <div className="flex items-start gap-3">
                            <Image src="/icons/tick-circle.png" width={20} height={20} alt="tick" />
                            <p className="text-[#7B7B7B] leading-relaxed">
                                <span className="font-semibold text-[#202020]">Niveau 1:</span> Unité d’obstétrique (grossesse normale) : 30
                            </p>
                        </div>

                        {/* 2 */}
                        <div className="flex items-start gap-3">
                            <Image src="/icons/tick-circle.png" width={20} height={20} alt="tick" />
                            <p className="text-[#7B7B7B] leading-relaxed">
                                <span className="font-semibold text-[#202020]">Niveau 2 :</span> Unité d’obstétrique et de néonatologie (grossesses à risque modéré et nouveau-né) : 35
                            </p>
                        </div>

                        {/* 2A */}
                        <p className="ml-9 text-[#7B7B7B] leading-relaxed">
                            <span className="font-semibold text-[#202020]">Niveau 2A :</span> accueil des bébés nés à partir de 32 semaines d’aménorrhée avec un poids d’au moins 1 500g
                        </p>

                        {/* 2B */}
                        <p className="ml-9 text-[#7B7B7B] leading-relaxed">
                            <span className="font-semibold text-[#202020]">Niveau 2B :</span> soins intensifs. PEC nouveau-nés entre 30 et 32 SA (pesant entre 1 000 et 1 500g qui n’ont pas besoin d’être intubés)
                        </p>

                        {/* 3 */}
                        <div className="flex items-start gap-3">
                            <Image src="/icons/tick-circle.png" width={20} height={20} alt="tick" />
                            <p className="text-[#7B7B7B] leading-relaxed">
                                <span className="font-semibold text-[#202020]">Niveau 3:</span> Unité d’obstétrique, unité de néonatologie et unité de réanimation néonatale (grossesses à haut risque et des nouveau-nés présentant des détresses graves et n’ayant pas d’autonomie respiratoire) : 14
                            </p>
                        </div>

                        {/* LAST LINE */}
                        <p className="ml-9 text-[#7B7B7B] leading-relaxed">
                            Accueil des enfants nés entre 24 et 25 SA (à partir de 500g)
                        </p>

                    </div>
                </div>

            </div>
        </section>
    );
}
