"use client";

import Image from "next/image";

const services = [
    {
        title: "Cartographie de santé",
        img: "/images/ServicesSectionhome-1.png",
    },
    {
        title: "Portail d’informations de l’offre de soins",
        img: "/images/ServicesSectionhome-2.png",
    },
    {
        title: "Fiches thérapeutiques et fiches de conduite à tenir",
        img: "/images/ServicesSectionhome-3.png",
    },
    {
        title: "Télémedecine",
        img: "/images/ServicesSectionhome-4.png",
    },
    {
        title: "IA",
        img: "/images/ServicesSectionhome-5.png",
    },
    {
        title: "Services pharmaceutiques",
        img: "/images/ServicesSectionhome-6.png",
    },
];

export default function ServicesSection() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* SECTION TITLE */}
                <div className="text-center mb-12">
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]tracking-widest text-sm font-semibold">
                        SERVICES
                    </p>
                    <h2 className="mt-1 text-[24px] lg:text-4xl font-bold text-[#202020]">
                        Bénéficiez De Nombreux Services
                    </h2>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                    {services.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-8 customboxshadow transition-all duration-300 flex flex-col items-center text-center"
                        >
                            {/* IMAGE */}
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={200}
                                height={160}
                                className="mb-6 select-none"
                            />

                            {/* TITLE */}
                            <h3 className="text-[20px] font-semibold text-[#2B2B2B] mb-6">
                                {item.title}
                            </h3>

                            {/* BUTTON */}
                            <button
                                className="px-6 rounded-full py-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold w-fit cursor-pointer"
                            >
                                Découvrez Plus
                            </button>
                        </div>
                    ))}

                </div>




                {/* SECTION TITLE */}
                <div className="text-center my-12">
                    <p className="text-[#7B7B7B] tracking-widest text-[20px]">
                        Et bien plus…
                    </p>
                    <h2 className="mt-1 text-[20px] font-bold text-[#3074B5] italic">
                        Accédez à la Santé de Demain !
                    </h2>
                </div>


            </div>
        </section>
    );
}
