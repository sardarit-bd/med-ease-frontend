import { Stethoscope } from "lucide-react";
import Image from "next/image";
import linkbtn from "../../../../public/icons/linkbtn.png";

export default function WellBeingSection() {
    return (
        <section className="px-4 md:px-8 py-20 pt-36 bg-[#F9FEFE]">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto ">
                {/* --- Left Content --- */}
                <div>
                    {/* Label */}
                    <div className="flex items-center gap-2 mb-4">
                        <Stethoscope className="text-[#3074B5]" size={22} />
                        <p className="uppercase tracking-wide text-sm font-semibold text-[#3074B5]">
                            Dispositif Médical <span className="text-[#61D0BF]">Numérique</span>
                        </p>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold text-[#3074B5] mb-4 leading-snug">
                        Votre Bien-être Compte…
                    </h1>

                    {/* Paragraphs */}
                    <p className="text-gray-600 mb-2">
                        Simplifiez votre Prise en charge. Restez focalisés sur votre cœur de
                        métier. <strong>Maximisez votre Expertise.</strong> Soigner devient
                        plus facile !
                    </p>

                    <p className="text-gray-600 mb-6">
                        Un Dispositif médical numérique et une Conciergerie médicale pour
                        fluidifier le parcours de santé, améliorer l’accès au soin et
                        faciliter la coordination médicale.
                    </p>

                    {/* Subheading */}
                    <h4 className="font-semibold text-gray-800 mb-3">Avantages :</h4>

                    {/* Advantages List */}
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-start gap-2">
                            <Image src={linkbtn} alt="linkbtn" />
                            <span className="text-gray-700 text-sm md:text-base">
                                Des solutions innovantes pour <strong>VOUS</strong>
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Image src={linkbtn} alt="linkbtn" />
                            <span className="text-gray-700 text-sm md:text-base">
                                L’Univers de santé rassemblé et centralisé. <strong>Tout en 1</strong>
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Image src={linkbtn} alt="linkbtn" />
                            <span className="text-gray-700 text-sm md:text-base">
                                Décloisonnement entre Ville-Hôpital / Médico-social / Social
                            </span>
                        </li>
                    </ul>

                    {/* Button */}
                    <button className="bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white font-medium px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                        S’inscrire
                    </button>
                </div>

                {/* --- Right Illustration --- */}
                <div className="flex justify-center md:justify-end">
                    <Image
                        src="/images/innovationHero.png" // 👉 replace with your actual image
                        alt="Medical Digital Ecosystem"
                        width={520}
                        height={420}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
