"use client";

import { Frown, Smile, Truck } from "lucide-react";

export default function TransportResults() {
    const results = [
        {
            name: "Ambulances Lumière",
            driver: "Steve et Lisa",
            type: "VSL",
            experience: "good",
            formation: "DEA, AFGSU",
            tarif: "Supplément",
            time: "5 mins",
            price: "54€",
        },
        {
            name: "Star cab",
            driver: "Thierry",
            type: "Taxi conventionné",
            experience: "good",
            formation: "AFGSU",
            tarif: "Majoration",
            time: "6 mins",
            price: "54€",
        },
        {
            name: "Paris Love",
            driver: "Daniel",
            type: "Taxi conventionné",
            experience: "bad",
            formation: "Aucune",
            tarif: "",
            time: "6 mins",
            price: "65€",
        },
    ];

    return (
        <section className="w-full px-6 max-w-7xl mx-auto py-14 bg-white">

            {/* TITLE */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800">20 résultats</h2>

                <div className="flex gap-3 text-sm mt-1">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF] cursor-pointer hover:underline">11 taxis</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">/</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF] cursor-pointer hover:underline">9 vsl</span>
                </div>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {results.map((item, i) => (
                    <ResultCard key={i} data={item} />
                ))}

            </div>

            {/* COMMANDER BUTTON */}
            <div className="mt-10 flex justify-center">
                <button className="bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white px-10 py-3 rounded-full shadow-md font-medium hover:opacity-90 transition">
                    Commander
                </button>
            </div>
        </section>
    );
}

/* ------- CARD COMPONENT ------- */

function ResultCard({ data }) {
    const { name, driver, type, experience, formation, tarif, time, price } = data;

    return (
        <div className="bg-white customboxshadow rounded-md p-7 flex flex-col justify-between">

            {/* HEADER */}
            <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#E6F6F4] rounded-full flex items-center justify-center text-[#2F89C9]">
                    <Truck size={22} />
                </div>
                <h3 className="font-semibold text-gray-800 text-lg">{name}</h3>
            </div>

            {/* CONTENT */}
            <div className="text-sm text-gray-700 space-y-1 mb-6">

                <p><span className="font-medium">Ambulanciers :</span> {driver}</p>
                <p>{type}</p>

                <div className="flex items-center gap-2">
                    <span className="font-medium">Expérience :</span>
                    {experience === "good" ? (
                        <Smile className="text-green-500" size={18} />
                    ) : (
                        <Frown className="text-orange-500" size={18} />
                    )}
                </div>

                <p><span className="font-medium">Formation :</span> {formation}</p>

                {tarif && <p><span className="font-medium">Tarif :</span> {tarif}</p>}

                <p>Dans {time}</p>
            </div>

            {/* PRICE */}
            <div className="text-right text-lg font-semibold text-gray-800 mb-6">
                {price}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col gap-3">
                <GradientButton label="Voir plus" />
                <GradientButton label="Sélectionner" />
            </div>

        </div>
    );
}

/* ------- GRADIENT BUTTON ------- */

function GradientButton({ label }) {
    return (
        <button className="w-full bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white py-2.5 rounded-full shadow hover:opacity-90 transition text-sm font-medium">
            {label}
        </button>
    );
}
