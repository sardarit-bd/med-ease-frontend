"use client";
import Image from "next/image";

export default function SuggestionsConseils() {
    return (
        <section className="w-full  py-16 px-6  bg-[#F6FCFD]">

            {/* Title */}
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-12 max-w-7xl mx-auto">
                Suggestions/Conseils
            </h2>

            {/* Wrapper */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">

                {/* CARD 1 */}
                <SuggestionCard
                    title="Transport"
                    description="Découvrez le fonctionnement pour être transporté en toute sécurité par des experts avec Med’ease."
                    image="/images/flow.png"
                />

                {/* CARD 2 */}
                <SuggestionCard
                    title="Réserver"
                    description="Réservez votre transport à l’avance pour une coordination médicale optimale."
                    image="/images/car.png"
                />

            </div>
        </section>
    );
}

/* ---------- Reusable Card Component ---------- */

function SuggestionCard({ title, description, image }) {
    return (
        <div className="bg-white customboxshadow p-8 flex items-center justify-between gap-6">

            {/* LEFT TEXT SIDE */}
            <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {description}
                </p>

                <button className="bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white px-6 py-2 rounded-full shadow hover:opacity-90 transition">
                    Détails
                </button>
            </div>

            {/* RIGHT IMAGE SIDE */}
            <div className="flex-1 flex justify-center">
                <Image
                    src={image}
                    alt={title}
                    width={220}
                    height={180}
                    className="object-contain"
                />
            </div>

        </div>
    );
}
