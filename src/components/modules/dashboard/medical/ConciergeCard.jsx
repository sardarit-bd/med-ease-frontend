export default function ConciergeCard() {
    const data = [
        { name: "GUETTE Éva", date: "Consultation - 10/11", status: "Validé" },
        { name: "BORNE Charlotte", date: "Lifting palpébral - 27/11", status: "En attente" },
        { name: "SMITH Lila", date: "Médecine - 22/11", status: "Annulé" },
    ];

    const badgeColor = {
        "Validé": "bg-green-100 text-green-600",
        "En attente": "bg-orange-100 text-orange-600",
        "Annulé": "bg-red-100 text-red-600",
    };

    return (
        <div className="p-5 bg-white rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-[var(--textDark)]">
                    Conciergerie médicale
                </h3>
                <button className="text-sm text-blue-400 underline">
                    Suivre la demande →
                </button>
            </div>

            <div className="space-y-3">
                {data.map((item, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded-lg flex justify-between">
                        <div>
                            <p className="font-medium text-[var(--textDark)]">{item.name}</p>
                            <p className="text-xs text-gray-400">{item.date}</p>
                        </div>
                        <span
                            className={`px-3 py-1 h-fit rounded-xl text-xs font-semibold ${badgeColor[item.status]}`}
                        >
                            {item.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
