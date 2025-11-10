import Image from "next/image";

export default function HealthStats() {
    const stats = [
        {
            title: "Dépenses de santé",
            details: [
                { text: "3 475€", bold: true },
                { text: "En moyenne par habitant et par an" },
                {
                    text: "Réparties comme suit : Soins hospitaliers 48%, Soins de ville 27%, Médicaments 14%",
                },
            ],
        },
        {
            title: "Difficulté d’accès aux soins",
            details: [
                { text: "5 à 9 Millions", bold: true, suffix: ": De français sans médecin traitant" },
                { text: "20% environ", bold: true, suffix: ": Subissent des déserts médicaux (Île-de-France, Centre Val de Loire, Martinique…)" },
                { text: "+ 20 M", bold: true, suffix: ": De passages aux Urgences avec un temps d’attente moyen de 4h23" },
            ],
        },
        {
            title: "Établissements de santé en difficulté financière",
            details: [
                { text: "+ 1 Mds€", bold: true, suffix: ": Déficit cumulé pour les CHU" },
            ],
        },
    ];

    return (
        <section className="max-w-7xl mx-auto py-16 px-4 md:px-8">
            {/* Heading */}
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-12">
                Les Chiffres des maux du système de santé sont
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
                {stats.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-6 customboxshadow transition-all duration-300"
                    >
                        {/* Icon */}

                        <Image src={'/icons/Frame_865.png'} alt="tickIcon" width={50} height={50} className="mb-4" />


                        {/* Title */}
                        <h3 className="font-semibold text-gray-900 mb-3">{item.title}</h3>

                        {/* Details */}
                        <ul className="space-y-2 text-gray-700">
                            {item.details.map((line, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                                    <Image src={'/icons/tick-circle.png'} alt="tickIcon" width={20} height={20} />
                                    <span>
                                        {line.bold ? (
                                            <>
                                                <strong className="text-gray-600">{line.text}</strong>
                                                {line.suffix && <span>{line.suffix}</span>}
                                            </>
                                        ) : (
                                            line.text
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
