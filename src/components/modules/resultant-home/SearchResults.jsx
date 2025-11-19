"use client";

import { Info, MapPin, Phone, User } from "lucide-react";
import Image from "next/image";

const results = [
    {
        avatar: "/images/insriptionProfile-1.png",
        name: "Mme Célia GOMEZ",
        role: "Sage-femme",
        address: "30 Boulevard Mission André, 75012 Paris",
        phone: "01.00.00.02.03",
        experience: "1 000 Expériences – Très souriante",
        convention: "Conventionnée",
        schedule: ["09:00", "11:30", "12:00", "09:00"],
    },
    {
        avatar: "/images/insriptionProfile-2.png",
        name: "Mme Louise VUITTON",
        role: "Infirmière",
        address: "25 rue Baccaria, 75012 Paris",
        phone: "01.00.00.02.03",
        experience: "500 Expériences – À l’écoute",
        convention: "Secteur 3 (non conventionné)",
        schedule: ["09:00", "11:30", "12:00", "09:00"],
    },
    {
        avatar: "/images/insriptionProfile-3.png",
        name: "Hôpital La Française – Maternité Le Monde",
        role: "Sage-femme | Infirmière",
        address: "2 rue Ambroise Paré 75010 Paris",
        phone: "01.00.00.00.03",
        experience: "3 000 Expériences – Professionnalisme",
        convention: "Conventionnée Secteur 2",
        schedule: ["09:00", "11:30", "12:00", "09:00"],
    },
];

const days = [
    { label: "Lundi", date: "28 oct" },
    { label: "Mardi", date: "29 oct" },
    { label: "Mercredi", date: "30 oct" },
    { label: "Jeudi", date: "31 oct" },
    { label: "Vend", date: "01 sep" },
];

export default function SearchResults() {
    return (
        <section className="w-full bg-white py-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* HEADER */}
                <div>
                    <h2 className="text-[22px] font-semibold text-[#202020] mb-2">
                        700 résultats
                    </h2>

                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-sm font-medium mb-6 space-x-2">
                        <span>80 maternités</span> /
                        <span> 400 Sage-femme</span> /
                        <span> 600 Médecins gynécologue-obstétricien</span> /
                        <span> 150 Infirmières</span>
                    </div>
                </div>

                {/* RESULTS LIST */}
                <div className="space-y-8">

                    {results.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded-xl shadow-md p-6"
                        >
                            {/* LEFT PROFILE CARD */}
                            <div className="flex flex-col gap-3 border-r-2 border-gray-100 pr-4">

                                {/* Avatar + Name */}
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={item.avatar}
                                        width={55}
                                        height={55}
                                        alt={item.name}
                                        className="rounded-full w-[45px] h-[45px] object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-lg text-[#202020]">
                                            {item.name}
                                        </h3>
                                        <p className="text-sm text-[#7B7B7B]">{item.role}</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-2 text-[#7B7B7B] text-sm">
                                    <MapPin size={18} className="text-[#1E7BB5]" />
                                    <p>{item.address}</p>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-2 text-[#7B7B7B] text-sm">
                                    <Phone size={18} className="text-[#1E7BB5]" />
                                    <p>{item.phone}</p>
                                </div>

                                {/* Experience */}
                                <div className="flex items-start gap-2 text-[#7B7B7B] text-sm">
                                    <User size={18} className="text-[#1E7BB5]" />
                                    <p>{item.experience}</p>
                                </div>

                                {/* Convention */}
                                <div className="flex items-start gap-2 text-[#7B7B7B] text-sm">
                                    <Info size={18} className="text-[#1E7BB5]" />
                                    <p>{item.convention}</p>
                                </div>

                                {/* Button */}
                                <button
                                    className="mt-3 px-6 py-4 font-semibold rounded-full text-white bg-gradient-to-r from-[#1E67B5] to-[#57D0BF] hover:opacity-90 transition"
                                >
                                    Prendre rendez-vous
                                </button>

                            </div>

                            {/* RIGHT SCHEDULE TABLE */}
                            <div className="bg-[#F8FAFB] p-5 rounded-xl">
                                <div className="grid grid-cols-5 text-center">

                                    {days.map((d, i) => (
                                        <div key={i} className="text-sm text-[#202020] mb-2">
                                            <p className="font-semibold">{d.label}</p>
                                            <p className="text-[#7B7B7B]">{d.date}</p>
                                        </div>
                                    ))}

                                </div>

                                <div className="grid grid-cols-5 text-center mt-4">
                                    {item.schedule.map((time, i) => (
                                        <div key={i} className="flex justify-center">
                                            <div className="bg-[#E5F4F8] text-[#1E7BB5] text-sm px-3 py-1 rounded-md font-semibold shadow-sm">
                                                {time}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}

                </div>

                {/* PAGINATION */}
                <div className="flex justify-center mt-10 gap-3 text-sm">

                    <button className="p-2 h-[30px] w-[30px] flex items-center justify-center border rounded-full text-[#1E7BB5] font-semibold cursor-pointer">«</button>
                    <button className="p-2 h-[30px] w-[30px] flex items-center justify-center border rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold cursor-pointer">1</button>
                    <button className="p-2 h-[30px] w-[30px] flex items-center justify-center border rounded-full font-semibold cursor-pointer">2</button>
                    <button className="p-2 h-[30px] w-[30px] flex items-center justify-center border rounded-full font-semibold cursor-pointer">3</button>
                    <span className="px-2">…</span>
                    <button className="p-2 h-[30px] w-[30px] flex items-center justify-center border rounded-full font-semibold cursor-pointer">10</button>
                    <button className="p-2 h-[30px] w-[30px] flex items-center justify-center border rounded-full text-[#1E7BB5] font-semibold cursor-pointer">»</button>

                </div>

            </div>
        </section>
    );
}
