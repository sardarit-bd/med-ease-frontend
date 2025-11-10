import {
    Bed,
    Brain,
    ClipboardCheck,
    Globe,
    MessageSquare,
    MonitorSmartphone,
    Pill,
    Stethoscope,
    Users,
} from "lucide-react";

export default function FeaturesGrid() {
    const features = [
        {
            icon: <Stethoscope size={26} className="text-[#3074B5]" />,
            title: "Télémédecine",
            points: [
                "Téléexpertise : Obtenez en quelques clics, un avis spécialisé pour votre patientèle",
                "Télésurveillance : recueil et surveillance médicale (connectée) à l’aide notamment IOT",
                "Télésuivi : Veillez sur la santé de vos patients à distance",
            ],
            active: true,
        },
        {
            icon: <Brain size={26} className="text-[#3074B5]" />,
            title: "IA",
            desc: "Bénéficiez d’une assistance pour des décisions médicales éclairées et de la gestion de flux patients",
        },
        {
            icon: <MessageSquare size={26} className="text-[#3074B5]" />,
            title: "Messagerie de santé sécurisée",
            desc: "Soyez connecté au répertoire national des professionnels de santé et votre patientèle",
        },
        {
            icon: <Globe size={26} className="text-[#3074B5]" />,
            title: "Portail Patient",
            desc: "Accédez aux informations médicales essentielles de votre patient (ATCD, directives anticipées, Urgence).",
        },
        {
            icon: <ClipboardCheck size={26} className="text-[#3074B5]" />,
            title: "Conciergerie médicale",
            desc: "Soyez accompagnés pour bénéficier de l’excellence médicale grâce à une coordination et un appui adaptés à vos besoins.",
        },
        {
            icon: <MonitorSmartphone size={26} className="text-[#3074B5]" />,
            title: "Vitrine digitale",
            desc: "Augmentez et fidélisez votre patientèle en améliorant votre visibilité et en partageant des informations vitales.",
        },
        {
            icon: <Pill size={26} className="text-[#3074B5]" />,
            title: "Services pharmaceutiques",
            desc: "Développez une prise en charge pharmaceutique complète (clic&collect, pilulier virtuel, dictionnaire pharmaceutique…).",
        },
        {
            icon: <Users size={26} className="text-[#3074B5]" />,
            title: "RH",
            desc: "Pilotez vos remplacements de professionnels de santé selon vos critères.",
        },
        {
            icon: <Bed size={26} className="text-[#3074B5]" />,
            title: "Bed manager",
            desc: "Gérez les lits et plannings médicaux avec un référencement en temps réel des disponibilités.",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
                {features.map((f, idx) => (
                    <div
                        key={idx}
                        className={`bg-white p-6 customboxshadow`}
                    >
                        {/* Icon */}
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E7F6F3]">
                                {f.icon}
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-semibold text-gray-900 text-center mb-3">
                            {f.title}
                        </h3>

                        {/* Description or Points */}
                        {f.points ? (
                            <ul className="list-disc list-inside text-gray-600 text-sm leading-relaxed space-y-1">
                                {f.points.map((p, i) => (
                                    <li key={i}>{p}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-[#7B7B7B] text-sm text-center leading-relaxed">
                                {f.desc}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
