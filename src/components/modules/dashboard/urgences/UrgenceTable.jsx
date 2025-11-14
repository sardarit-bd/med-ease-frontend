"use client";

export default function UrgenceTable() {
    const rows = [
        {
            id: "100201",
            arrivee: "00h50m",
            mode: "Taxi",
            identite: "BERGER Amélie",
            age: "44 ans F",
            preDiag: "Hématémèse abondante",
            tri: { label: "Tri 2", color: "bg-yellow-400" },
            coord: ["06.11.23.22.25", "BERGER Samantha (soeur)", "07.21.22.21.24"],
        },
        {
            id: "000500",
            arrivee: "00h23m",
            mode: "Ambulance",
            identite: "VUITTON Louise",
            age: "28 ans F",
            preDiag: "Accouchement imminent",
            tri: { label: "Tri 1", color: "bg-red-500" },
            coord: ["07.90.85.64.32", "VUITTON Damien (mari)", "06.53.43.67.23"],
        },
        {
            id: "001200",
            arrivee: "00h10m",
            mode: "à pieds",
            identite: "ATTAL Chris",
            age: "48 ans M",
            preDiag: "Anurie",
            tri: { label: "Tri 2", color: "bg-yellow-400" },
            coord: ["07.25.25.34.25", "ATTAL Donald (père)"],
        },
        {
            id: "014500",
            arrivee: "01h30m",
            mode: "VSL",
            identite: "FRANCOIS David",
            age: "39 ans M",
            preDiag: "Traumatisme oculaire",
            tri: { label: "Tri 3B", color: "bg-green-500" },
            coord: ["06.12.23.24.35"],
        },
    ];

    const headers = [
        "N°Plateforme",
        "Arrivée prévue dans",
        "Mode d’arrivée",
        "Identité",
        "Age + Sexe",
        "Pré-diagnostic",
        "Triage",
        "Coordonnées",
        "Actions",
    ];

    return (
        <section className="mt-10 overflow-x-auto bg-white rounded-xl shadow">
            {/* HEADER */}
            <table className="w-full text-left border-collapse">
                <thead className="bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white text-sm">
                    <tr className="">
                        {headers.map((h, i) => (
                            <th
                                key={i}
                                className="px-5 py-3 font-medium "
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* BODY */}
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className="border-b">
                            <td className="px-5 py-4 text-gray-700">{row.id}</td>

                            <td className="px-5 py-4 text-gray-700">{row.arrivee}</td>

                            <td className="px-5 py-4 text-gray-700">{row.mode}</td>

                            <td className="px-5 py-4 font-semibold text-gray-700">
                                {row.identite}
                            </td>

                            <td className="px-5 py-4 text-gray-700">{row.age}</td>

                            <td className="px-5 py-4 text-gray-700">{row.preDiag}</td>

                            {/* TRIAGE */}
                            <td className="px-5 py-4">
                                <span
                                    className={`px-3 py-1 text-white text-xs rounded-full ${row.tri.color}`}
                                >
                                    {row.tri.label}
                                </span>
                            </td>

                            {/* COORDONNÉES */}
                            <td className="px-5 py-4 text-gray-700 text-sm">
                                {row.coord.map((c, idx) => (
                                    <p key={idx}>{c}</p>
                                ))}
                            </td>

                            {/* ACTIONS */}
                            <td className="px-5 py-4 space-y-2">
                                <button className="block w-full text-sm font-medium py-1 rounded-full bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white">
                                    Présence
                                </button>

                                <button className="block w-full text-sm font-medium py-1 rounded-full bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white">
                                    Fiche Médicale Régulation
                                </button>

                                <button className="text-gray-600 text-center w-full text-sm">
                                    Voir plus
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
