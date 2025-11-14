"use client";

import Image from "next/image";

export default function ReperesSection() {
    return (
        <section className="w-full max-w-7xl mx-auto py-20 px-6 md:px-16">

            <div className="
                relative rounded-sm 
                bg-gradient-to-r from-[#2A6EBB] to-[#61D0BF]
                text-white px-8 md:px-14 py-20 pb-32
                shadow-lg overflow-hidden
            ">

                {/* TOP LEFT DECORATION */}
                <Image
                    src="/icons/glovs.png" // replace with your image
                    alt="Icon"
                    width={80}
                    height={80}
                    className="absolute left-20 top-12 opacity-90"
                />

                {/* TOP RIGHT DECORATION */}
                <Image
                    src="/icons/dropper.png" // replace with your image
                    alt="Icon"
                    width={80}
                    height={80}
                    className="absolute right-20 top-12 opacity-90"
                />

                {/* BOTTOM LEFT DECORATION */}
                <Image
                    src="/icons/thermometer.png" // replace
                    alt="Icon"
                    width={75}
                    height={75}
                    className="absolute left-10 bottom-10"
                />

                <Image
                    src="/icons/rounded_shadown.png" // replace
                    alt="Icon"
                    width={75}
                    height={75}
                    className="absolute left-0 bottom-0"
                />
                <Image
                    src="/icons/rounded_shadown.png" // replace
                    alt="Icon"
                    width={100}
                    height={100}
                    className="absolute left-0 bottom-0"
                />
                <Image
                    src="/icons/rounded_shadown.png" // replace
                    alt="Icon"
                    width={125}
                    height={125}
                    className="absolute left-0 bottom-0"
                />





                <Image
                    src="/icons/rounded_shadown.png" // replace
                    alt="Icon"
                    width={75}
                    height={75}
                    className="absolute right-0 bottom-0 rotate-270 translate-x-[10px]"
                />
                <Image
                    src="/icons/rounded_shadown.png" // replace
                    alt="Icon"
                    width={100}
                    height={100}
                    className="absolute right-0 bottom-0 rotate-270 translate-x-[10px]"
                />
                <Image
                    src="/icons/rounded_shadown.png" // replace
                    alt="Icon"
                    width={125}
                    height={125}
                    className="absolute right-0 bottom-0 rotate-270 translate-x-[10px]"
                />




                {/* BOTTOM RIGHT DECORATION */}
                <Image
                    src="/icons/medicine-box.png" // replace
                    alt="Icon"
                    width={75}
                    height={75}
                    className="absolute right-10 bottom-10"
                />

                {/* TITLE */}
                <h2 className="text-center text-2xl md:text-3xl font-semibold mb-20">
                    Quelques repères qui font sens
                </h2>

                {/* GRID NUMBERS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20">

                    {/* 01 */}
                    <NumberBlock number="01">
                        10+ ans d’expérience terrain du fondateur auprès
                        de patients, aidants et professionnels de santé
                    </NumberBlock>

                    {/* 02 */}
                    <NumberBlock number="02">
                        Déjà une dizaine de partenaires santé engagés
                    </NumberBlock>

                    {/* 03 */}
                    <NumberBlock number="03">
                        100 % des professionnels interrogés estiment que
                        la coordination santé doit être repensée
                    </NumberBlock>

                    {/* 04 */}
                    <NumberBlock number="04">
                        Une plateforme co-construite avec le terrain,
                        dès les premières phases de développement
                    </NumberBlock>

                    {/* 05 */}
                    <NumberBlock number="05">
                        Une seule priorité : un parcours de soins plus
                        fluide, plus humain, pour tous
                    </NumberBlock>
                </div>
            </div>
        </section>
    );
}

/* ----------------- REUSABLE COMPONENT ----------------- */

function NumberBlock({ number, children }) {
    return (
        <div className="flex items-start gap-4">
            <h2 className="text-6xl font-semibold tracking-tight">{number}.</h2>
            <p className="text-white/90 leading-relaxed text-[15px]">{children}</p>
        </div>
    );
}
