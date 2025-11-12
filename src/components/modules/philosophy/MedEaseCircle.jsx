"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function MedEaseCircle() {
    return (
        <section className="bg-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto  relative h-[650px]">
                {/* === LEFT SIDE === */}

                {/* --- Top Block --- */}
                <div className="max-w-sm  md:absolute top-10 left-0">
                    {/* Connector Line */}
                    <div className="absolute top-[45px] right-[-65px] w-[65px] h-[2px] bg-black"></div>
                    <div className="absolute top-[45px] rotate-45 origin-left right-[-160px] w-[95px] h-[2px] bg-black"></div>
                    <div className="absolute top-[40px] right-[-6px] w-[12px] h-[12px] bg-black rounded-full"></div>
                    <div className="relative flex items-center justify-center mb-3">
                        <div className="rounded-full bg-white p-4 drop-shadow-md">
                            <Image
                                src="/philosophy/koper_asset 2.png"
                                alt="icon-3"
                                width={90}
                                height={90}
                                className="rounded-full"
                            />
                        </div>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        Chez{" "}
                        <span className="font-semibold text-[#3074B5]">Med’ease</span> nous
                        croyons que la santé ne se résume pas aux actes médicaux : elle
                        commence par{" "}
                        <strong>l’écoute, l’attention et la fluidité</strong>.
                    </p>
                </div>
                {/* --- Bottom Block --- */}
                <div className="max-w-sm md:absolute bottom-10 left-0">
                    {/* Connector Line */}
                    <div className="absolute top-[45px] right-[-65px] w-[65px] h-[2px] bg-black"></div>
                    <div className="absolute top-[45px] -rotate-45 origin-left right-[-160px] w-[95px] h-[2px] bg-black"></div>
                    <div className="absolute top-[40px] right-[-6px] w-[12px] h-[12px] bg-black rounded-full"></div>
                    <div className="relative mb-3 flex items-center justify-center">
                        <div className="rounded-full bg-white p-4 drop-shadow-md">
                            <Image
                                src="/philosophy/computer_asset.png"
                                alt="icon-2"
                                width={90}
                                height={90}
                                className="rounded-full"
                            />
                        </div>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        C’est cette conviction qui guide chaque fonctionnalité, chaque
                        interaction, chaque amélioration de notre plateforme.
                    </p>
                </div>

                {/* === CENTER ROTATING CIRCLE === */}
                <div className="absolute hidden z-10 top-10 left-1/2 -translate-x-1/2 md:flex items-center justify-center w-[440px] h-[440px] my-10 md:my-0">
                    {/* Blue Glow */}
                    <div className="absolute bottom-0 w-[220px] h-[220px] bg-[#3074B5]/25 rounded-full blur-3xl z-0"></div>
                    {/* Rotating Ellipse */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 24,
                            ease: "linear",
                        }}
                        className="z-10 absolute w-[400px] h-[400px]"
                    >
                        <Image
                            src="/philosophy/circle.png"
                            alt="rotating-circle"
                            fill
                            className="object-contain"
                        />
                    </motion.div>
                    {/* Center Logo */}
                    <div className="z-10 bg-white rounded-full w-[200px] h-[200px] flex flex-col items-center justify-center shadow-lg">
                        <Image
                            src="/logos/headLogo.png"
                            alt="Med’ease logo"
                            width={130}
                            height={130}
                            className="object-contain"
                        />
                    </div>
                </div>
                {/* === RIGHT SIDE === */}
                <div className="text-left md:ml-10 max-w-sm bottom-24 right-0 md:absolute">
                    {/* Connector Line */}
                    <div className="absolute top-[45px] left-[-65px] w-[65px] h-[2px] bg-black"></div>
                    <div className="absolute top-[45px] rotate-[45deg] origin-right left-[-160px] w-[95px] h-[2px] bg-black"></div>
                    <div className="absolute top-[40px] left-[-6px] w-[12px] h-[12px] bg-black rounded-full"></div>
                    <div className="relative mb-3 flex items-center justify-center">
                        <div className="rounded-full bg-white p-4 drop-shadow-md">
                            <Image
                                src="/philosophy/list_assets.png"
                                alt="icon-3"
                                width={90}
                                height={90}
                                className="rounded-full"
                            />
                        </div>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        Notre ambition n’est pas seulement de coordonner les soins, mais de{" "}
                        <strong>prendre soin, avec précision et humanité</strong>.
                    </p>
                </div>
            </div>
        </section>
    );
}