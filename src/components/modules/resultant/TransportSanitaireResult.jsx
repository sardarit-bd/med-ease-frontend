"use client";
import { FileText, MapPin, User2 } from "lucide-react";
import Image from "next/image";

export default function TransportSanitaireResult() {
    return (
        <section className="w-full px-6 max-w-7xl mx-auto py-14 bg-white">

            {/* Title */}
            <h2 className="text-2xl font-semibold mb-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">Transport Sanitaire</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                {/* LEFT SIDE CARDS */}
                <div className="flex flex-col gap-6 col-span-1 lg:col-span-2">

                    {/* Cards Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                        {/* Card 1 */}
                        <InfoCard
                            icon={<User2 size={24} />}
                            title="Profil"
                            lines={[
                                "Identité : France LACOSTE",
                                "Autonomie : Autonome",
                                "Indication : Port de masque",
                            ]}
                        />

                        {/* Card 2 */}
                        <InfoCard
                            icon={<MapPin size={24} />}
                            title="Localisation"
                            lines={[
                                "Lieu de départ : 30 avenue Léonard de vinci",
                                "Destination : Hôpital Pitié-Salpetrière",
                                "Type de véhicule : Taxi ou VSL",
                            ]}
                        />

                        {/* Card 3 */}
                        <InfoCard
                            icon={<FileText size={24} />}
                            title="Complément"
                            lines={[
                                "Prescription/Ordonnance : Prescription médicale de transport",
                                "Type de Transport : Individuel",
                                "Date : Maintenant",
                            ]}
                        />

                    </div>

                    {/* CTA Button */}
                    <div className="mt-4">
                        <button className="mx-auto block bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white font-medium px-10 py-3 rounded-full shadow-md hover:opacity-90 transition">
                            Voir les résultats
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE ROUTE MAP MOCK */}
                <div className="flex flex-col items-end col-span-1 lg:col-span-1">


                    <Image src={'/images/ambolance.png'} alt="ambolance-car-point" height={400} width={400} />

                </div>

            </div>
        </section>
    );
}

/* ===== CARD COMPONENT ===== */
function InfoCard({ icon, title, lines }) {
    return (
        <div className="bg-white shadow-md customboxshadow p-4">
            <div className="w-12 h-12 rounded-full bg-[#E6F6F4] flex items-center justify-center text-[#2F89C9] mb-4">
                {icon}
            </div>

            <h3 className="font-semibold text-gray-800 mb-3">{title}</h3>

            <ul className="text-sm text-gray-600 space-y-1">
                {lines.map((line, i) => (
                    <li key={i}>{line}</li>
                ))}
            </ul>
        </div>
    );
}
