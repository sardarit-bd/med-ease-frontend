"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import herodoctorthapistopok from "../../../../public/icons/herodoctorthapistopok.png";
import patienthero from "../../../../public/images/patienthero.png";

export default function HeroSectionPatient() {
    return (
        <section
            className="relative w-full md:h-[80vh] bg-cover bg-center flex items-center overflow-hidden pt-16 md:pt-0"
            style={{ backgroundImage: `url('/images/patiendheroBg.jpg')` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#FEFEFED9] z-0"></div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-5 2xl:px-0 w-full">
                {/* LEFT CONTENT */}
                <div className="md:w-full flex flex-col items-center md:items-start justify-center space-y-4 text-[var(--text-dark)] py-10">
                    <p className="text-xs text-[var(--primary)] font-medium px-5 flex items-center gap-2 py-2 mt-2 rounded-full bg-white font-semibold w-fit flex items-center gap-3">
                        <Image src={herodoctorthapistopok} alt="herodoctorthapistopok" />
                        <span className="text-xs md:text-md text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">Ne laissez plus l’incertitude guider votre santé !</span>
                    </p>
                    <h1 className="text-3xl md:text-4xl font-semibold leading-snug text-center md:text-left">
                        Votre santé simplifiée : <br />
                        <span className="text-[var(--secondary)]">
                            La conciergerie Médicale Med'ease vous accompagne à chaque étape, pas à pas, de votre parcours de soins.
                        </span>
                    </h1>
                    <p className="text-semibold text-lg text-center md:text-left">
                        Profitez d’une plateforme complète pour suivre, gérer et améliorer <br /> votre santé au quotidien
                    </p>

                    <button className="px-5 flex items-center gap-2 py-2 mt-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold w-fit cursor-pointer">
                        J'agis pour ma Santé, ma Vie <ArrowRight size={18} />
                    </button>
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-2xl font-semibold mt-2">Votre Santé, notre Priorité</h2>

                </div>

                {/* RIGHT SIDE IMAGES */}
                <div className="hidden lg:block absolute bottom-0 right-0 translate-y-36">
                    <Image className="hidden xl:block absolute top-0 left-0 -translate-x-[300px]" src={"/icons/arrowshow.png"} alt="swipe_arrow" width={200} height={200} />
                    <Image src={patienthero} alt="patientheroImage" width={600} height={600} />
                </div>
            </div>
        </section>
    );
}
