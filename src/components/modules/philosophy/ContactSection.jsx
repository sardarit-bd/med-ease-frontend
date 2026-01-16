import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
    return (
        <section className="bg-[#F9FEFD] py-20 px-6 md:px-12 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 relative">
                {/* Left side — Doctors Image */}
                <div className="relative flex justify-around w-full md:w-1/2">
                    <Image
                        src="/images/asian-young-main-group-hospital-professional.png"
                        alt="medical-team"
                        width={550}
                        height={500}
                        className="object-contain"
                    />

                    {/* Plus icons */}
                    <Image
                        src="/images/plus.png"
                        alt="plus-icon"
                        width={40}
                        height={40}
                        className="absolute top-[15%] right-[20%] md:top-[10%] md:right-[10%] hidden md:block"
                    />
                    <Image
                        src="/images/plus.png"
                        alt="plus-icon"
                        width={50}
                        height={50}
                        className="absolute top-[45%] right-[20%] md:top-[35%] md:right-[5%] hidden md:block"
                    />
                </div>

                {/* Right side — Text */}
                <div className="w-full md:w-1/2 text-center mt-8 md:mt-0">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#1F2937] mb-3">
                        Rejoindre notre communauté
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Pour Une Nouvelle Ère, La Santé De Demain. Construisons ensemble notre avenir pour conserver notre trésor le plus précieux, notre santé
                    </p>
                    <Link
                        href="/contactus"
                        className="inline-block px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#3074B5] to-[#61D0BF] shadow-md hover:scale-105 transition-transform duration-300"
                    >
                        À votre écoute
                    </Link>
                </div>
            </div>
            <Image
                src="/images/Frame 1000002001.png"
                alt="plus-icon"
                width={200}
                height={200}
                className="absolute bottom-0 right-0 md:bottom-0 md:right-0"
            />
        </section>
    )
}
