export default function AdmissionCard() {
    const data = [
        { name: "DARIUS Lou", dept: "Spy-derme", status: "Urgente", color: "red" },
        { name: "XI You", dept: "Code de santé", status: "Normale", color: "blue" },
        { name: "GARCIA Pedro", dept: "Chirurgie", status: "Programmé", color: "green" },
        { name: "LEMOINE Anaïs", dept: "Cardiologie", status: "Urgente", color: "red" },
    ];

    const badge = {
        red: "bg-red-100 text-red-600",
        blue: "bg-blue-100 text-blue-600",
        green: "bg-green-100 text-green-600",
    };

    return (
        <div className="p-5 bg-white rounded-xl shadow-sm">
            <h3 className="font-semibold text-[var(--textDark)] mb-3">
                Admissions en attente
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {data.map((item, i) => (
                    <div
                        key={i}
                        className="p-4 bg-[var(--bgLight)] rounded-lg flex flex-col space-y-1"
                    >
                        <p className="font-semibold text-[var(--textDark)]">{item.name}</p>
                        <p className="text-xs font-thin text-gray-500">{item.dept}</p>
                        <span
                            className={`px-3 py-1 rounded-lg mt-3 text-xs font-medium w-fit ${badge[item.color]}`}
                        >
                            {item.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
