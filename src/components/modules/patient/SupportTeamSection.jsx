"use client";

import { MessageCircle } from "lucide-react";
import Image from "next/image";

export default function SupportTeamSection() {
    return (
        <section className="w-full bg-[#F6FBFA] relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between px-6 md:px-10 gap-12 h-full pt-20">
                {/* Left Image Section */}
                <div className="relative flex justify-center lg:w-1/2">
                    <div className="relative z-10">
                        <Image
                            src="/images/supportteadmsecion.png" // Replace with your real team image
                            alt="Équipe médicale Med’Ease"
                            width={680}
                            height={680}
                            className="object-cover object-center w-auto h-[380px]"
                        />
                    </div>
                </div>

                {/* Right Content Section */}
                <div className="lg:w-1/2 text-center lg:text-left space-y-6 pt-20">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                        Toujours plus proche de{" "}
                        <span className="text-[var(--brandColor,#3074B5)]">Vous</span>
                    </h2>

                    <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
                        Notre équipe experte est toujours disponible pour échanger avec vous.
                    </p>

                    <button className="bg-gradient-to-r from-[var(--brandColor,#3074B5)] to-[var(--brandBg,#61D0BF)] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform inline-flex items-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                        À votre écoute
                    </button>
                </div>
            </div>

            {/* Background circular accent */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--brandBg,#61D0BF)]/10 rounded-full blur-3xl pointer-events-none"></div>
        </section>
    );
}
