import { CheckCircle } from "lucide-react";

export default function VisionSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
            <div className="bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden">
                {/* Subtle hexagon pattern background (optional) */}
                <div className="absolute inset-0 opacity-10 bg-[url('/images/hex-bg.png')] bg-cover bg-center"></div>

                {/* Content */}
                <div className="relative z-10 space-y-6">
                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Notre vision
                    </h2>

                    {/* Main Points */}
                    <ul className="space-y-3 text-white/90">
                        <li className="flex items-start gap-3">
                            <CheckCircle size={20} className="text-white mt-1" />
                            <span className="font-semibold">
                                Pour une santé 100 Frontières
                            </span>
                        </li>

                        <li className="flex flex-col gap-2">
                            <div className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-white mt-1" />
                                <span className="font-semibold">
                                    Notre vision pour la Santé de Demain
                                </span>
                            </div>

                            {/* Nested subpoints */}
                            <ul className="pl-8 list-disc space-y-1 text-sm md:text-base text-white/90">
                                <li>
                                    Soigner chaque individu dans une tridimensionnalité pour un
                                    état de santé complet (bien-être physique, mental et social)
                                </li>
                                <li>
                                    Concevoir une plateforme nouvelle génération Tout en 1 basée
                                    sur les avancées technologiques
                                </li>
                                <li>
                                    Une collaboration entière (citoyens et professionnels)
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
