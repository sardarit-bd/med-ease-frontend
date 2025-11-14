"use client";

import Image from "next/image";

export default function ManifesteSection() {
    return (
        <section className="w-full max-w-7xl mx-auto py-20 px-6 md:px-16 relative">

            {/* DECORATIVE LEFT ICON */}
            <Image
                src="/icons/Réduisez.png" // replace with your image
                alt="icon"
                width={60}
                height={60}
                className="absolute left-0 top-24 opacity-80"
            />

            {/* DECORATIVE RIGHT ICON */}
            <Image
                src="/icons/Stetoscope.png" // replace with your image
                alt="icon"
                width={60}
                height={60}
                className="absolute right-6 top-24 opacity-80"
            />

            {/* TITLE */}
            <div className="text-center max-w-3xl mx-auto mb-14">
                <h2 className="text-3xl font-semibold text-gray-900">
                    Manifeste
                </h2>

                <p className="text-gray-600 mt-4 text-[15px] leading-relaxed">
                    Trop de patients attendent, trop de professionnels s’épuisent, trop
                    d’urgences débordent. Mais nous croyons qu’un autre système est possible.
                </p>
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* LEFT IMAGE */}
                <div className="relative h-full">
                    <div className="rounded-sm h-full overflow-hidden">
                        <Image
                            src="/images/mainfeast.jpg" // replace
                            alt="AI medicine"
                            width={1000}
                            height={1000}
                            className="w-full w-full h-full"
                        />
                    </div>
                </div>

                {/* RIGHT TEXT CONTENT */}
                <div className="space-y-10 text-gray-700 text-[15px] leading-relaxed">

                    <TextBlock>
                        Un système connecté et coordonné, où les bons soins arrivent au bon
                        moment, où les professionnels retrouvent du temps médical, et où chaque
                        citoyen, même éloigné, accède à une prise en charge adaptée.
                    </TextBlock>

                    <TextBlock>
                        Nous mettons la technologie au service de l’humain. Grâce à
                        l’intelligence artificielle, nous analysons les données de terrain pour
                        éclairer les décisions, fluidifier les parcours, optimiser les
                        ressources.
                    </TextBlock>

                    <TextBlock>
                        Notre boussole, c’est la vôtre : mieux vous orienter, mieux vous soigner.
                    </TextBlock>

                    <TextBlock>
                        Moins d’attente. Moins d’erreurs. Moins de solitude. Plus de
                        confiance. Plus d’équité. Plus de santé.
                    </TextBlock>

                    <TextBlock>
                        Nous sommes la première plateforme intelligente de coordination en
                        santé. Et nous ne faisons pas que connecter les acteurs : nous les
                        rassemblons.
                    </TextBlock>

                </div>

            </div>
        </section>
    );
}

/* -------------- REUSABLE COMPONENT -------------- */

function TextBlock({ children }) {
    return (
        <div>
            <p className="text-[#202020]">{children}</p>
            <div className="w-full h-[2px] mt-3 bg-gradient-to-r from-[#2A6EBB] to-[#61D0BF]"></div>
        </div>
    );
}
