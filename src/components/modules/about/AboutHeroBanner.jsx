import Image from "next/image";

export default function AboutHeroBanner() {
    return (
        <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <Image
                src="/images/abouthero.png" // 👈 replace with your actual image: /demain/banner.png or similar
                alt="MedEase Hero Background"
                fill
                className="object-cover object-center opacity-80"
                priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />

            {/* Text Content */}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-3xl md:text-5xl font-bold text-[#3074B5] leading-snug mb-4">
                    Unis pour bonifier votre santé
                </h1>
                <p className="text-gray-600 text-sm md:text-base font-medium">
                    Med’ease, c’est VOUS, c’est Nous, c’est Ensemble !
                </p>
            </div>
        </section>
    );
}
