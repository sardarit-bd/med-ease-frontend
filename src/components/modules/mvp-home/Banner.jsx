import Button from "@/components/shared/Button";
import { MapPin, Search, Stethoscope, X } from "lucide-react";

export default function Banner() {
    return (
        <section className="px-4 md:px-8 py-20 pt-24 flex items-center justify-center min-h-[500px] bg-[#eef6f8] relative">
            <div className="grid grid-cols-1 md:grid-cols-1 text-center items-center gap-10 max-w-7xl mx-auto ">
                {/* --- Left Content --- */}
                <div>
                    {/* Label */}
                    <div className="flex justify-center text-center items-center gap-2 mb-4">
                        <Stethoscope className="text-[#3074B5]" size={22} />
                        <p className="uppercase tracking-wide text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">
                            Dispositif Médical <span>Numérique</span>
                        </p>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-semibold text-[#3074B5] mb-4 leading-snug">
                        Votre Vie Compte, France…
                    </h1>

                    {/* Paragraphs */}
                    <p className="text-gray-600 mb-2 -translate-y-4 text-[#7B7B7B]">
                        Soyez en meilleure santé…
                    </p>


                    {/* Button */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Button>Maps de santé</Button>
                        <Button>Portail Info Établissements</Button>
                        <Button>Portail Info Professionnels</Button>
                        <Button>Thématiques</Button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-[50%] bg-whtie translate-x-[-50%] translate-y-[50%]">
                <div className="w-full bg-white rounded-full shadow-md p-2 flex items-center my-4 gap-4">

                    {/* LEFT INPUT — SPECIALTY */}
                    <div className="flex items-center gap-3 flex-1 px-3">
                        <Search size={18} className="text-[#9A9A9A]" />
                        <input
                            type="text"
                            placeholder="Maternité"
                            className="flex-1 outline-none text-sm text-[#202020]"
                        />
                        <X size={16} className="text-[#B3B3B3] cursor-pointer" />
                    </div>

                    {/* VERTICAL DIVIDER */}
                    <div className="w-px h-6 bg-[#DADADA]"></div>

                    {/* LOCATION INPUT */}
                    <div className="flex items-center gap-3 flex-1 px-3">
                        <MapPin size={18} className="text-[#9A9A9A]" />
                        <input
                            type="text"
                            placeholder="Où ?"
                            className="flex-1 outline-none text-sm text-[#202020]"
                        />
                        <X size={16} className="text-[#B3B3B3] cursor-pointer" />
                    </div>

                    {/* SEARCH BUTTON */}
                    <button
                        className="px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-[#1E67B5] to-[#57D0BF] shadow-md hover:opacity-90 transition"
                    >
                        Rechercher
                    </button>

                </div>
            </div>
        </section>
    )
}
