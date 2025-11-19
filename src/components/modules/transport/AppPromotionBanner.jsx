"use client";
import { Star } from "lucide-react";
import Image from "next/image";

export default function AppPromotionBanner() {
    return (
        <section className="w-full px-6 py-10">
            <div className="w-full max-w-7xl mx-auto rounded-xl shadow-md bg-gradient-to-r from-[#2F89C9] to-[#61D0BF] p-10 flex flex-col md:flex-row items-center justify-between gap-10 text-white">

                {/* LEFT SIDE */}
                <div className="flex-1">

                    {/* Logo row */}
                    <div className="flex items-center gap-2 mb-6">
                        <Image src="/icons/Stetoscope.png" alt="MedEase" width={24} height={24} />
                        <span className="font-semibold tracking-wide">MED’EASE</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
                        Découvrez l’application Med’ease, votre<br />
                        boussole santé
                    </h2>

                    {/* Subtitle */}
                    <p className="text-sm opacity-90 mb-1">
                        Soyez en meilleure santé en toute simplicité…
                    </p>
                    <p className="text-sm opacity-90 mb-4">
                        Gérez facilement votre santé et Accédez simplement à l’offre de soins la plus adaptée
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-white font-semibold">4.9</span>
                    </div>

                    {/* Download Buttons */}
                    <div className="translate-x-[-12px]">
                        <Image
                            src="/images/app_stikar.png"
                            alt="App Store"
                            width={340}
                            height={120}
                            className="object-contain cursor-pointer"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/images/mobileappbanner.png"
                        alt="MedEase App"
                        width={500}
                        height={500}
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
