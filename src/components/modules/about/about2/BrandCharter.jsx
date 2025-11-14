"use client";

export default function BrandCharter() {
    return (
        <section className="w-full bg-[#F7FCFC] py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">

                {/* TITLE */}
                <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-900 mb-14">
                    Charte de{" "}
                    <span className="bg-gradient-to-r from-[#2A6EBB] to-[#61D0BF] bg-clip-text text-transparent">
                        marque!
                    </span>
                </h2>

                {/* 3 COLUMNS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

                    {/* Column 1 */}
                    <div>
                        <div className="text-5xl mb-3">🧠💉</div>
                        <h3 className="font-semibold text-lg text-gray-800">
                            Nom de la plateforme
                        </h3>
                        <p className="text-gray-600 mt-1">Med’ease</p>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <div className="text-5xl mb-3">🏢🌿</div>
                        <h3 className="font-semibold text-lg text-gray-800">
                            Entreprise
                        </h3>
                        <p className="text-gray-600 mt-1">SIOPEIA</p>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <div className="text-5xl mb-3">⚙️🔵</div>
                        <h3 className="font-semibold text-lg text-gray-800">
                            Secteur
                        </h3>
                        <p className="text-gray-600 mt-1 leading-snug">
                            e-santé, IA, coordination,<br />
                            accompagnement patient / professionnel
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
