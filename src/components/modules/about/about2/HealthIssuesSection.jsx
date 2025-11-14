"use client";

import Image from "next/image";

export default function HealthIssuesSection() {
    return (
        <section className="w-full max-w-7xl mx-auto bg-white py-20 px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* LEFT SIDE — CARDS */}
                <div className="space-y-8">

                    {/* CARD 1 */}
                    <Card>
                        <CardIcon />
                        <h3 className="text-xl font-semibold text-gray-800">
                            Dépenses de santé
                        </h3>

                        <p className="text-red-500 font-medium mt-1">3 500€</p>
                        <p className="text-gray-600 text-sm">
                            En moyenne par habitant et par an
                        </p>
                    </Card>

                    {/* CARD 2 */}
                    <Card>
                        <CardIcon />
                        <h3 className="text-xl font-semibold text-gray-800">
                            Difficulté d’accès aux soins
                        </h3>

                        <p className="text-gray-600 text-sm mt-2">
                            <span className="font-medium text-gray-800">+ 85% des Français</span>
                            risquent de vivre dans un désert médical
                        </p>

                        <p className="text-red-500 font-medium mt-1">
                            1 français sur 5 a un accès difficile à un généraliste
                        </p>

                        <p className="text-red-500 font-medium">
                            + 20 millions
                        </p>
                        <p className="text-gray-600 text-sm">
                            De passages aux Urgences avec un temps d’attente moyen de
                            <span className="text-red-500 font-medium"> 4h23</span>
                        </p>
                    </Card>

                    {/* CARD 3 */}
                    <Card>
                        <CardIcon />
                        <h3 className="text-xl font-semibold text-gray-800">
                            Établissements de santé en difficulté financière
                        </h3>

                        <p className="text-gray-800 font-medium mt-2">
                            + 1 Mds€
                        </p>
                        <p className="text-gray-600 text-sm">
                            Déficit cumulé pour les CHU
                        </p>

                        <p className="text-red-500 font-medium mt-2">
                            7 sur 10 professionnels en situation d’épuisement professionnel
                        </p>
                    </Card>
                </div>

                {/* RIGHT SIDE — IMAGE + FLOATING ICONS */}
                <div className="flex items-center justify-center">


                    {/* MAIN CIRCLE IMAGE */}
                    <div className="absolute right-0 w-[420px] h-[600px]">
                        <Image
                            src="/images/Group584.png" // replace
                            alt="3D hospital"
                            fill
                            className="object-cover"
                        />


                    </div>
                </div>

            </div>
        </section>
    );
}

/* ---------------------- COMPONENTS ---------------------- */

function Card({ children }) {
    return (
        <div className="bg-white customboxshadow p-6 relative">
            {children}

            <Image className="absolute top-16 right-[-35%]" src={'/images/Group587.png'} alt="vector" width={150} height={150} />
        </div>
    );
}

function CardIcon() {
    return (
        <Image src={'/icons/EmergencyCallPlus.png'} width={45} height={45} />
    );
}

function FloatingIcon({ top, left, icon }) {
    return (
        <div
            className="absolute w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center border"
            style={{ top, left, transform: "translate(-50%, -50%)" }}
        >
            <Image src={icon} alt="icon" width={30} height={30} />
        </div>
    );
}
