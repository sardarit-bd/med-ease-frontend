export default function TransportCard() {
    const data = [
        { name: "DUPONT Jean", time: "14:00 - Ambulance", status: "En route" },
        { name: "MARTIN Marie", time: "15:00 - VSL", status: "Arrivé" },
        { name: "BERNARD Paul", time: "15:45 - TPMR", status: "Programmé" },
    ];

    const badgeColor = {
        "En route": "bg-blue-100 text-blue-600",
        "Arrivé": "bg-green-100 text-green-600",
        "Programmé": "bg-orange-100 text-orange-600",
    };

    return (
        <div className="p-5 bg-white rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-[var(--textDark)]">Transport sanitaire</h3>
                <button className="text-sm text-blue-400 underline">
                    Gérer les transports →
                </button>
            </div>

            <div className="space-y-3">
                {data.map((item, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded-lg flex justify-between">
                        <div>
                            <p className="font-medium text-[var(--textDark)]">{item.name}</p>
                            <p className="text-xs text-gray-400">{item.time}</p>
                        </div>
                        <span
                            className={`px-3 py-1 rounded-xl h-fit text-xs font-semibold ${badgeColor[item.status]}`}
                        >
                            {item.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
