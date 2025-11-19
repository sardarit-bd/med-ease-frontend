"use client";

export default function StatisticsSection() {
    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* SECTION TITLE */}
                <div className="text-center mb-10">
                    <p className="text-sm font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">
                        DONNÉES
                    </p>

                    <h2 className="text-[24px] lg:text-4xl font-semibold text-[#202020]">
                        Statistiques
                    </h2>
                </div>

                {/* MAIN GRADIENT BOX */}
                <div className="w-full rounded-sm py-10 px-10 bg-gradient-to-r from-[#1E67B5] to-[#57D0BF] text-white flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 md:gap-8">

                    {/* LEFT SECTION — TITLE + BUTTON */}
                    <div className="flex flex-col gap-4 w-[30p%]">
                        <h3 className="text-[22px] text-center md:text-left  font-semibold">Activités</h3>

                        <button className="px-6 py-2.5 bg-white text-[#2F2F2F] rounded-full font-medium shadow-md hover:shadow-lg transition flex-shrink-0 w-fit">
                            En savoir plus
                        </button>
                    </div>

                    {/* STATS */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 w-[70%] text-center justify-end">

                        {/* 1 */}
                        <div>
                            <h2 className="text-[26px] font-semibold pb-2">678 000</h2>
                            <p className="text-sm opacity-90">Nombre de<br />naissance en 2023</p>
                        </div>

                        {/* 2 */}
                        <div>
                            <h2 className="text-[26px] font-semibold pb-2">- 6,5 %</h2>
                            <p className="text-sm opacity-90">Évolution des<br />naissances</p>
                        </div>

                        {/* 3 */}
                        <div>
                            <h2 className="text-[26px] font-semibold pb-2">1,68</h2>
                            <p className="text-sm opacity-90">enfant(s) par femme<br />Fécondité</p>
                        </div>

                        {/* 4 */}
                        <div>
                            <h2 className="text-[26px] font-semibold pb-2">31 ans</h2>
                            <p className="text-sm opacity-90">Âge moyen à la<br />maternité</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
