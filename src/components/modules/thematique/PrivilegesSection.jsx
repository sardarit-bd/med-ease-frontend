"use client";

import Image from "next/image";

export default function PrivilegesSection() {
    return (
        <section className="w-full bg-[#61D0BF0A] py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* SECTION TITLE */}
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">
                        PRIVILÈGES
                    </p>

                    <h2 className="text-[28px] lg:text-4xl font-bold text-[#202020]">
                        Droits
                    </h2>
                </div>

                {/* CARDS GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">

                    {/* CARD 1 */}
                    <div className="bg-white rounded-sm customboxshadow h-full p-10 w-full max-w-[600px]">

                        {/* ICON */}
                        <div className="mb-5">
                            <Image
                                src="/icons/Droits-1.png"
                                width={50}
                                height={50}
                                alt="icon"
                            />
                        </div>

                        {/* TITLE */}
                        <h3 className="text-[20px] font-semibold text-[#202020] mb-4">
                            Réglementation
                        </h3>

                        {/* LIST */}
                        <div className="space-y-3">
                            {[
                                "Congé maternité : 16 semaines (réparties)",
                                "Congé maternité (Remboursement) : Indemnités journalières",
                                "Travail : Autorisation d’absence",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <Image
                                        src="/icons/tick-circle.png"
                                        width={20}
                                        height={20}
                                        alt="tick"
                                    />
                                    <p className="text-[#7B7B7B]">{item}</p>
                                </div>
                            ))}
                        </div>

                        {/* BUTTON */}
                        <button
                            className="mt-6 px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-[#1E67B5] to-[#57D0BF] w-fit shadow-md hover:opacity-90 transition"
                        >
                            En savoir plus
                        </button>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-white rounded-sm customboxshadow p-10 w-full h-full max-w-[600px]">

                        {/* ICON */}
                        <div className="mb-5">
                            <Image
                                src="/icons/Droits-2.png"
                                width={50}
                                height={50}
                                alt="icon"
                            />
                        </div>

                        {/* TITLE */}
                        <h3 className="text-[20px] font-semibold text-[#202020] mb-4">
                            Documentation/Démarche
                        </h3>

                        {/* LIST */}
                        <div className="space-y-3">
                            {[
                                "Déclaration de grossesse",
                                "Carnet de santé maternité",
                                "Calendrier personnalisé d’examens médicaux",
                                "Déclaration du choix de Sage-Femme référente",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <Image
                                        src="/icons/tick-circle.png"
                                        width={20}
                                        height={20}
                                        alt="tick"
                                    />
                                    <p className="text-[#7B7B7B]">{item}</p>
                                </div>
                            ))}
                        </div>

                        {/* BUTTON */}
                        <button
                            className="mt-6 px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-[#1E67B5] to-[#57D0BF] w-fit shadow-md hover:opacity-90 transition"
                        >
                            En savoir plus
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
