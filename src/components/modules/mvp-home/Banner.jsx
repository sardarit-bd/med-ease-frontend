import Button from "@/components/shared/Button";
import { Stethoscope } from "lucide-react";

export default function Banner() {
    return (
        <section className="bg-[#eef6f7] px-4 md:px-8 py-25 pt-36 flex items-center justify-center min-h-[500px] bg-[#FEFEFEE8]">
            <div className="grid grid-cols-1 md:grid-cols-1 text-center items-center gap-10 max-w-7xl mx-auto ">
                {/* --- Left Content --- */}
                <div>
                    {/* Label */}
                    <div className="flex justify-center text-center items-center gap-2 mb-4">
                        <Stethoscope className="text-[#3074B5]" size={22} />
                        <p className="uppercase tracking-wide text-sm font-semibold text-[#3074B5]">
                            Dispositif Médical <span className="text-[#61D0BF]">Numérique</span>
                        </p>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold text-[#3074B5] mb-4 leading-snug">
                        Votre Vie Compte, France…
                    </h1>

                    {/* Paragraphs */}
                    <p className="text-gray-600 mb-2">
                        Soyez en meilleure santé…
                    </p>


                    {/* Button */}
                    <div className="">
                        <Button>Maps de santé</Button>
                        <Button>Portail Info Établissements</Button>
                        <Button>Portail Info Professionnels</Button>
                        <Button>Thématiques</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
