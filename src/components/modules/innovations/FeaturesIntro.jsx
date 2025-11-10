export default function FeaturesIntro() {
    return (
        <section className="max-w-4xl mx-auto px-4 md:px-8 pt-20 pb-1 text-center">
            {/* Small Label */}
            <p className="uppercase text-sm font-semibold text-[#45B7A9] tracking-wide mb-2">
                Caractéristiques
            </p>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Med’ease est la réponse aux besoins de tous les acteurs de santé !
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
                Le parcours de santé se trouve simplifié et fluidifié grâce à une
                coordination médicale optimisée. Bénéficiez de nos solutions élaborées
                pour vous :
            </p>

            {/* Toggle Buttons */}
            <div className="flex justify-center items-center gap-2 bg-[#61D0BF0A] rounded-full w-fit mx-auto p-1">
                {/* Left Button */}
                <button className="px-5 py-2 rounded-full text-sm md:text-base font-medium text-[#3074B5] hover:text-white hover:bg-gradient-to-r hover:from-[#3074B5] hover:to-[#61D0BF] transition-all duration-300">
                    Acteurs de Santé
                </button>

                {/* Right Button */}
                <button className="px-5 py-2 rounded-full text-sm md:text-base font-medium text-white bg-gradient-to-r from-[#3074B5] to-[#61D0BF] shadow-md hover:shadow-lg transition-all duration-300">
                    Innovations
                </button>
            </div>
        </section>
    );
}
