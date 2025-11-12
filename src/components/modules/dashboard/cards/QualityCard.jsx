"use client";
import Image from "next/image";

export default function QualityCard() {
    const messages = [
        "Garnier David, Transfert d’hôpital",
        "/logos/headLogo.png", // MedEase logo
    ];

    const reports = [
        "Mme X, pour l’Hôpital Lacomte, hospitalisation le 5 novembre",
        "Mme Williams pour la Clinique Binet, hospitalisation le 15 novembre",
    ];

    const experiences = [
        { value: "88%", label: "Taux de satisfaction" },
        { value: "80%", label: "Score le plus bas" },
        { value: "98%", label: "Score le plus élevé" },
        { value: "95%", label: "Taux de réponse" },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-5">
            {/* === Title === */}
            <h3 className="font-semibold text-gray-800 text-base md:text-lg mb-3">
                Qualité
            </h3>

            {/* === Messages + Reports === */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                {/* --- Messages --- */}
                <div>
                    <h4 className="font-semibold text-[var(--primary)] text-sm mb-2">
                        Messages
                    </h4>
                    <div className="space-y-2">
                        {messages.map((item, i) => (
                            <div
                                key={i}
                                className="bg-[#F8FCFB] rounded-lg p-3 text-gray-700 text-sm flex items-center justify-center"
                            >
                                {item.includes("logos") ? (
                                    <Image
                                        src={item}
                                        alt="MedEase Logo"
                                        width={110}
                                        height={32}
                                        className="object-contain opacity-90"
                                    />
                                ) : (
                                    item
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- Reports (Signalements) --- */}
                <div>
                    <h4 className="font-semibold text-[var(--primary)] text-sm mb-2">
                        Signalements
                    </h4>
                    <div className="space-y-2">
                        {reports.map((item, i) => (
                            <div
                                key={i}
                                className="bg-[#F8FCFB] rounded-lg p-3 text-gray-700 text-sm"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* === Experiences Section === */}
            <h4 className="font-semibold text-gray-800 text-sm mb-2">Expériences</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {experiences.map((item, i) => (
                    <div key={i} className="bg-[#F8FCFB] rounded-lg p-3">
                        <p className="text-[16px] font-bold text-gray-800 leading-tight">
                            {item.value}
                        </p>
                        <p className="text-sm text-gray-500">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
