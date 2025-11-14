"use client";

import Image from "next/image";


export default function BeneficesPlateforme() {
    return (
        <section className="w-full max-w-7xl mx-auto py-20 px-6 md:px-16 bg-white">

            {/* TITLE */}
            <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-900 mb-16">
                Les bénéfices de <br />
                <span className="bg-gradient-to-r from-[#2A6EBB] to-[#61D0BF] bg-clip-text text-transparent">
                    notre plateforme
                </span>
            </h2>

            {/* 3 COLUMNS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* COLUMN 1 — Patients */}
                <BenefitCard
                    label="Pour les patients"
                    labelColor="bg-[#B9E9DD]"
                    boxColor="bg-[#C8EFE5]"
                    items={[
                        "Réduction des délais d’attente pour une prise en charge plus rapide",
                        "Orientation intelligente vers les bons soins, au bon moment",
                        "Accès à l’information et à la téléexpertise pour des décisions de santé éclairées",
                        "Respect de la confidentialité et des données personnelles",
                        "Moins de stress, plus de confiance dans le parcours de soin",
                    ]}
                />

                {/* COLUMN 2 — Professionnels */}
                <BenefitCard
                    label="Pour les professionnels de santé"
                    labelColor="bg-[#D5E7FF]"
                    boxColor="bg-[#E4EEFF]"
                    items={[
                        "Outil d’aide à la décision grâce à l’analyse en temps réel",
                        "Coordination facilitée entre établissements, collègues et services",
                        "Gestion optimisée des ressources (lits, RH, transports)",
                        "Gain de temps médical grâce à la réduction des tâches de coordination",
                        "Moins de charge mentale, plus de qualité de soin",
                    ]}
                />

                {/* COLUMN 3 — Établissements */}
                <BenefitCard
                    label="Pour les établissements et le système de santé"
                    labelColor="bg-[#A9E3DA]"
                    boxColor="bg-[#C1EEE7]"
                    items={[
                        "Désengorgement des urgences",
                        "Meilleure allocation des ressources",
                        "Égalité renforcée d’accès aux soins sur le territoire",
                        "Interopérabilité avec les SI existants pour une intégration fluide",
                        "Sécurité et fiabilité des données dans un cadre réglementaire strict",
                    ]}
                />

            </div>

        </section>
    );
}

/* ---------------- REUSABLE COMPONENT ---------------- */

function BenefitCard({ label, labelColor, boxColor, items }) {
    return (
        <div>
            {/* LABEL */}
            <div
                className={`${labelColor} inline-block px-4 py-2 rounded-t-xl font-semibold text-gray-800`}
            >
                {label}
            </div>

            {/* BOX */}
            <div
                className={`${boxColor} rounded-xl rounded-t-none p-6 shadow-sm`}
            >
                <ul className="space-y-5">
                    {items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-800 leading-relaxed">
                            <Image src={'/icons/EmergencyTick.png'} className="w-[40px] h-[40px]" width={60} height={60} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function CheckIcon() {
    return (
        <div className="min-w-[28px] min-h-[28px] bg-[#C8F7BE] rounded-full flex items-center justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                stroke="#2A7D2E"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M20 6L9 17l-5-5" />
            </svg>
        </div>
    );
}
