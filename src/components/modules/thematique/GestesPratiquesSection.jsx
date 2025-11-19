"use client";

import Image from "next/image";

const tips = [
    "Habitudes de vie avant d’être enceinte",
    "Assistance Médicale à la Procréation (AMP ou PMA)",
    "Durant la grossesse",
    "Être enceinte : les bons gestes",
];

export default function GestesPratiquesSection() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* TITLE */}
                <div className="mb-10">
                    <p className="text-sm font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">
                        CONSEIL
                    </p>

                    <h2 className="text-[24px] font-semibold text-[#202020] mt-1">
                        Gestes pratiques
                    </h2>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">

                    {tips.map((item, index) => (
                        <div
                            key={index}
                            className="w-full bg-white rounded-sm customboxshadow p-6 flex items-start gap-3 max-w-[320px] h-full"
                        >
                            <Image
                                src="/icons/tick-circle.png"
                                width={22}
                                height={22}
                                alt="tick"
                                className="flex-shrink-0"
                            />
                            <p className="text-[#7B7B7B] text-[15px] leading-relaxed">{item}</p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
