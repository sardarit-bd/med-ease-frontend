"use client";

import Image from "next/image";

export default function HeartSection() {
    return (
        <section className="relative w-full bg-white py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
                    Votre santé au cœur de Tout.
                </h2>
                <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">
                    Tout Simplement&nbsp;!
                </h2>

                {/* Main content grid */}
                <div className="relative mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Left column */}
                    <div className="flex flex-col gap-8 md:col-span-1 z-10">
                        <div className="bg-white customboxshadow p-6 text-left">
                            <Image
                                src="/icons/EmergencyCallPlus.png"
                                alt="hospital"
                                width={45}
                                height={45}
                                className="mr-2 mb-2"
                            />
                            <div className="flex items-center mb-3">
                                <h3 className="font-semibold text-gray-900">
                                    Marre des heures d’attente aux urgences&nbsp;?
                                </h3>
                            </div>
                            <p className="text-gray-500 text-sm">
                                Découvrez comment accéder à des soins rapides et adaptés.
                            </p>
                        </div>

                        <div className="bg-white customboxshadow p-6 text-left">
                            <Image
                                src="/icons/bed.png"
                                alt="hospital"
                                width={45}
                                height={45}
                                className="mr-2 mb-2"
                            />
                            <div className="flex items-center mb-3">
                                <h3 className="font-semibold text-gray-900">
                                    Besoin d’une hospitalisation immédiate&nbsp;?
                                </h3>
                            </div>
                            <p className="text-gray-500 text-sm">
                                Accédez rapidement à un lit disponible et adapté à vos besoins.
                            </p>
                        </div>
                    </div>

                    {/* Center heart image */}
                    <div className="flex justify-center items-center md:col-span-1 relative">
                        <video className="relative h-full scale-110  lg:scale-170 z-10" autoPlay loop muted playsInline>
                            <source src="/images/heart.webm" type="video/webm" />
                        </video>
                        <h1 className="absolute text-[5rem] md:text-[7rem] font-extrabold text-gray-200 tracking-tight uppercase select-none leading-none opacity-30 z-0 text-outline-brand">
                            CHAQUE<br />MINUTE<br />COMPTE
                        </h1>
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col gap-8 md:col-span-1 z-10">
                        <div className="bg-white customboxshadow p-6 text-left">
                            <Image
                                src="/icons/MedicalRecord.png"
                                alt="information"
                                width={45}
                                height={45}
                                className="mr-2 mb-2"
                            />
                            <div className="flex items-center mb-3">
                                <h3 className="font-semibold text-gray-900">
                                    Besoin d’informations fiables sur votre santé&nbsp;?
                                </h3>
                            </div>
                            <p className="text-gray-500 text-sm">
                                Trouvez des réponses claires et précises à vos questions.
                            </p>
                        </div>

                        <div className="bg-white customboxshadow p-6 text-left">
                            <Image
                                src="/icons/Stetoscope.png"
                                alt="stethoscope"
                                width={45}
                                height={45}
                                className="mr-2 mb-2"
                            />
                            <div className="flex items-center mb-3">
                                <h3 className="font-semibold text-gray-900">
                                    Besoin d’un rendez-vous médical rapide&nbsp;?
                                </h3>
                            </div>
                            <p className="text-gray-500 text-sm">
                                Trouvez un médecin disponible près de chez vous en quelques clics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
