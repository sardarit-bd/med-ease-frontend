"use client";

export default function ProspectsClientsCard() {
    const prospects = {
        relance: ["DUPONT Jean - Patient", "SMITH Lea - Médecin"],
        contacter: ["DARIUS Lou - Sage-Femme", "XI You - Cadre de santé"],
    };

    const clients = [
        { title: "Souscription", subtitle: "Lorem ipsum dolor sit amet" },
        { title: "Finance", subtitle: "Lorem ipsum dolor sit amet" },
        { title: "Studio", subtitle: "Lorem ipsum dolor sit amet" },
        { title: "Documents", subtitle: "Lorem ipsum dolor sit amet" },
    ];

    return (
        <div className="flex flex-col gap-5">
            {/* === PROSPECTS CARD === */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-3">Prospects</h3>

                {/* Relance à faire */}
                <h4 className="font-semibold text-[var(--primary)] text-sm mb-2">
                    Relance à faire
                </h4>
                <div className="space-y-2 mb-4">
                    {prospects.relance.map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#F8FCFB] rounded-lg p-3 text-gray-700 text-sm"
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {/* À contacter */}
                <h4 className="font-semibold text-[var(--primary)] text-sm mb-2">
                    A contacter
                </h4>
                <div className="space-y-2">
                    {prospects.contacter.map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#F8FCFB] rounded-lg p-3 text-gray-700 text-sm"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* === CLIENTS CARD === */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-3">Clients</h3>

                <div className="space-y-2">
                    {clients.map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#F8FCFB] rounded-lg p-3"
                        >
                            <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                            <p className="text-gray-500 text-[13px]">{item.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
