"use client";

const regions = [
    {
        title: "Région - IDF",
        highlight: false,
        occupation: {
            "Taux d’occupation": "90%",
            "Score Ambulatoire": "49%",
            "Score Hospitalisation": "51%",
            "Taux débordement": "5%",
            "Disponibilité(s)": "10",
        },
        activite: {
            "Nombre d’interventions": "350",
            "Nombre d’interventions annulées": "35",
            "Nombre d’interventions en Urgences": "25",
        },
        specialites: [
            "Interventions les + réalisées : Pacemaker, PTH, Césariennes",
            "Interventions les - réalisées : PTG, Lobectomie, RTUP",
        ],
    },
    {
        title: "75 - Paris",
        highlight: true,
        occupation: {
            "Taux d’occupation": "90%",
            "Score Ambulatoire": "35%",
            "Score Hospitalisation": "65%",
            "Taux débordement": "10%",
            "Disponibilité(s)": "3",
        },
        activite: {
            "Nombre d’interventions": "100",
            "Nombre d’interventions annulées": "9",
            "Nombre d’interventions en Urgences": "10",
        },
        specialites: [
            "Interventions les + réalisées : PTH, Cataracte, Arthroscopie",
            "Interventions les - réalisées : Appendicite, Bypass, Thyroïde",
        ],
    },
];

const hospitals = {
    title: "750000523 – GH PARIS SITE SAINT JOSEPH",
    occupation: {
        "Taux d’occupation": "89%",
        "Taux de débordement": "2%",
        "Nombre disponibilités": "3",
        "Créneau disponibilités": "21h–7h",
    },
    activite: {
        "Nombre d’interventions": "20",
        "Nombre d’interventions annulées": "2",
        "Nombre d’interventions en Urgences": "4",
    },
    specialites: "Disponibles : Toutes spécialités",
    bloc: {
        "Organisation": "Open scheduling",
        "Nombre de salles": "15",
        "Plage Horaire": "24h/24",
    },
};

export default function BlocStatsSection() {
    return (
        <section className="w-full bg-white py-5">
            <div className="space-y-6">

                {/* REGIONS */}
                {regions.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-xl shadow-sm p-8 border ${item.highlight ? "border-transparent" : "border-transparent"
                            }`}
                    >
                        <h3 className="text-lg font-semibold text-[#202020] mb-6">
                            {item.title}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                            {/* OCCUPATION */}
                            <div>
                                <h4 className="font-semibold text-[#1E7BB5] mb-3">Occupation</h4>
                                <div className="space-y-2 text-sm text-[#6A6A6A]">
                                    {Object.entries(item.occupation).map(([key, value], i) => (
                                        <div key={i} className="flex justify-between">
                                            <span>{key}</span>
                                            <span className="bg-green-50 px-2 rounded-lg py-2">
                                                {value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* ACTIVITE */}
                            <div>
                                <h4 className="font-semibold text-[#1E7BB5] mb-3">Activité</h4>
                                <div className="space-y-2 text-sm text-[#6A6A6A]">
                                    {Object.entries(item.activite).map(([key, value], i) => (
                                        <div key={i} className="flex justify-between">
                                            <span>{key}</span>
                                            <span className="bg-green-50 px-2 rounded-lg py-2">
                                                {value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* SPECIALITES */}
                            <div>
                                <h4 className="font-semibold text-[#1E7BB5] mb-3">Spécialités</h4>
                                <ul className="text-sm text-[#6A6A6A] space-y-2">
                                    {item.specialites.map((line, i) => (
                                        <li key={i}>{line}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}

                {/* HOSPITAL SECTION */}
                <div className="bg-white rounded-xl shadow-sm p-8 border border-transparent">
                    <h3 className="text-lg font-semibold text-[#202020] mb-6">
                        {hospitals.title}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                        {/* OCCUPATION */}
                        <div>
                            <h4 className="font-semibold text-[#1E7BB5] mb-3">Occupation</h4>
                            <div className="space-y-2 text-sm text-[#6A6A6A]">
                                {Object.entries(hospitals.occupation).map(([key, value], i) => (
                                    <div key={i} className="flex justify-between">
                                        <span>{key}</span>
                                        <span className="bg-green-50 px-2 rounded-lg py-2">
                                            {value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ACTIVITE */}
                        <div>
                            <h4 className="font-semibold text-[#1E7BB5] mb-3">Activité</h4>
                            <div className="space-y-2 text-sm text-[#6A6A6A]">
                                {Object.entries(hospitals.activite).map(([key, value], i) => (
                                    <div key={i} className="flex justify-between">
                                        <span>{key}</span>
                                        <span className="bg-green-50 px-2 rounded-lg py-2">
                                            {value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SPECIALITES */}
                        <div>
                            <h4 className="font-semibold text-[#1E7BB5] mb-3">Spécialités</h4>
                            <p className="text-sm text-[#6A6A6A]">{hospitals.specialites}</p>
                        </div>

                        {/* BLOC OPERATOIRE */}
                        <div>
                            <h4 className="font-semibold text-[#1E7BB5] mb-3">Bloc opératoire</h4>
                            <div className="space-y-2 text-sm text-[#6A6A6A]">
                                {Object.entries(hospitals.bloc).map(([key, value], i) => (
                                    <div key={i} className="flex justify-between">
                                        <span>{key}</span>
                                        <span className="bg-green-50 px-2 rounded-lg py-2">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* BUTTON */}
                    <div className="flex justify-center mt-8">
                        <button className="px-7 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-[#1E67B5] to-[#57D0BF] hover:opacity-90 transition">
                            Détails
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
