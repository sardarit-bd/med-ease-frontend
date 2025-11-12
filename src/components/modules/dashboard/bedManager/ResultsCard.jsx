"use client";

export default function ResultsCard() {
    const filters = ["Prix croissant", "Code couleur", "Localisation"];

    const results = [
        {
            id: 1,
            title: "Result n°1",
            name: "Clinique Miami",
            location: "Paris La défense / 92",
            specialty: "Médecine Cardiologie",
            beds: "Nb de lits disponibles : 5",
            to: "TO : 95%",
            color: "#61D0BF",
        },
        {
            id: 2,
            title: "Result n°2",
            name: "Hôpital Bichat",
            location: "Paris 18e / 75",
            specialty: "Médecine Cardiologie",
            beds: "Nb de lits disponibles : 8",
            to: "TO : 93%",
            color: "#61D0BF",
        },
        {
            id: 3,
            title: "Result n°3",
            name: "Hôpital Pompidou",
            location: "Paris 15e / 75",
            specialty: "Médecine Polyvalente",
            beds: "Nb de lits disponibles 4",
            to: "TO : 97%",
            color: "#F2703E",
        },
        {
            id: 4,
            title: "Result n°4",
            name: "Clinique Maillot",
            location: "Saint-Denis / 93",
            specialty: "Médecine Interne",
            beds: "Nb de lits disponibles : 1",
            to: "TO : 99%",
            color: "#E84455",
        },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
            {/* === Title === */}
            <h3 className="font-semibold text-gray-800 text-base md:text-lg mb-4">
                Résultats
            </h3>

            {/* === Filter Buttons === */}
            <div className="flex justify-center flex-wrap gap-3 mb-6">
                {filters.map((item, i) => (
                    <button
                        key={i}
                        className="px-4 py-[6px] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-sm font-medium rounded-full shadow-sm hover:opacity-90 transition-all"
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* === Results Grid === */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((r) => (
                    <div
                        key={r.id}
                        className="rounded-xl text-white p-4 md:p-5"
                        style={{ backgroundColor: r.color }}
                    >
                        <h4 className="font-bold text-[16px] mb-1">{r.title}</h4>
                        <p className="text-sm leading-snug">{r.name}</p>
                        <p className="text-sm leading-snug">{r.location}</p>
                        <p className="text-sm leading-snug">{r.specialty}</p>
                        <p className="text-sm leading-snug">{r.beds}</p>
                        <p className="text-sm leading-snug">{r.to}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
