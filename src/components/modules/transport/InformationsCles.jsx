"use client";
import Image from "next/image";

export default function InformationsCles() {
    return (
        <section className="w-full max-w-7xl mx-auto py-20 px-6 bg-white">
            {/* Title */}
            <h2 className="text-2xl font-semibold text-[#2F89C9] mb-12 pt-10">
                Informations clés
            </h2>

            {/* Cards Wrapper */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Card 1 */}
                <InfoCard
                    image="/images/clés1.png"
                    title="Offre de soins"
                    points={[
                        "Nombre d’ambulances : + 500",
                        "Nombre de VSL : + 1 000",
                        "Nombre de Taxis conventionnés : + 1 500",
                    ]}
                />

                {/* Card 2 */}
                <InfoCard
                    image="/images/clés2.png"
                    title="Indicateurs de santé"
                    points={[
                        "Dépenses de Transport sanitaire : + 6 Mdrs€",
                        "Franchise d’utilisation : 4€ et 50€/an/personne",
                        "Nombre de patients transportés : + 6,4 Millions",
                    ]}
                />

                {/* Card 3 */}
                <InfoCard
                    image="/images/clés3.png"
                    title="Informations utiles"
                    points={[
                        "Frais de Transport : Prise en charge et remboursement",
                        "Prescription médicale de transport",
                        "Les différents types de transport sanitaire",
                        "Circulaire Transport sanitaire partagé",
                    ]}
                />

            </div>
        </section>
    );
}

/* ---------- Reusable Card Component ---------- */

function InfoCard({ image, title, points }) {
    return (
        <div className="bg-white customboxshadow p-8 flex flex-col items-center text-center">

            {/* Image */}
            <div className="mb-6">
                <Image
                    src={image}
                    alt={title}
                    width={150}
                    height={150}
                    className="object-contain"
                />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>

            {/* Bullet Points */}
            <ul className="text-gray-600 text-sm space-y-2 mb-6 list-disc list-inside">
                {points.map((p, i) => (
                    <li key={i}>{p}</li>
                ))}
            </ul>

            {/* Button */}
            <button className="mt-auto bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white px-6 py-3 rounded-full shadow hover:opacity-90 transition font-medium">
                En savoir plus
            </button>
        </div>
    );
}
