"use client";

export default function EngagementSection() {
    return (
        <section className="w-full max-w-7xl mx-auto py-20 px-6 md:px-16 flex flex-col lg:flex-row gap-3">

            {/* LEFT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 flex-1">

                {/* VISION */}
                <Block bg="bg-[#2662A9]">
                    <TitleOutline>VISION</TitleOutline>
                    <p className="text-white mt-4 leading-relaxed text-[15px]">
                        Un système de santé plus fluide, plus juste, et plus humain, où chaque
                        patient est orienté au bon endroit, au bon moment, grâce à une
                        coordination intelligente et partagée.
                    </p>
                </Block>

                {/* MISSION */}
                <Block bg="bg-[#57C8BA]">
                    <TitleOutline>MISSION</TitleOutline>
                    <p className="text-white mt-4 leading-relaxed text-[15px]">
                        Agir concrètement pour une meilleure santé pour tous, en facilitant la
                        coordination des soins et l’accès à l’information, en quelques clics.
                    </p>
                </Block>

                {/* PROMESSE */}
                <Block bg="bg-gradient-to-br from-[#6EDCC8] to-[#66C3B9]">
                    <TitleOutline>PROMESSE</TitleOutline>
                    <p className="text-white mt-4 leading-relaxed text-[15px]">
                        Parce que chaque minute compte, notre compagnon santé est présent à tout
                        moment pour une vie plus sereine : moins d’attente, moins de
                        complications, moins de dépenses, plus de confiance, plus de qualité de vie.
                    </p>
                </Block>

                {/* AMBITION */}
                <Block bg="bg-gradient-to-br from-[#1D64A3] to-[#275D9E]">
                    <TitleOutline>AMBITION</TitleOutline>
                    <p className="text-white mt-4 leading-relaxed text-[15px] text-center">
                        Simplifier et fluidifier l’organisation des soins pour désengorger les
                        urgences, réduire les inégalités d’accès, renforcer la qualité des prises en
                        charge et alléger la charge des professionnels.
                    </p>
                </Block>
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full lg:w-[32%] p-8 text-white flex flex-col justify-center text-center shadow nosduengagementsBg">

                <TitleOutline>Nos deux<br />engagements clés</TitleOutline>

                <div className="mt-10 space-y-10">

                    <div>
                        <p className="text-white font-semibold text-lg">
                            Votre santé, notre priorité.
                        </p>
                        <p className="text-white/80 italic text-sm">
                            (pour les patients)
                        </p>
                    </div>

                    <div>
                        <p className="text-white font-semibold text-lg">
                            Votre expertise, notre engagement.
                        </p>
                        <p className="text-white/80 italic text-sm">
                            (pour les professionnels de santé)
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
}

/* ---------------------- COMPONENTS ---------------------- */

function Block({ bg, children }) {
    return (
        <div className={`${bg} p-8 shadow-md min-h-[260px] flex flex-col`}>
            {children}
        </div>
    );
}

function TitleOutline({ children }) {
    return (
        <h1 className="text-4xl text-center font-bold text-outline-brand"
        >
            {children}
        </h1>
    );
}
