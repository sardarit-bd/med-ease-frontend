"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import EtablissementsList1 from "../../../../../../public/images/EtablissementsList1.png";
import EtablissementsList12 from "../../../../../../public/images/EtablissementsList2.png";
import EtablissementsList13 from "../../../../../../public/images/EtablissementsList3.png";

export default function EtablissementsList() {
    const items = [
        {
            img: EtablissementsList1,
            title: "Hôpital Saint Augustin",
            type: "public",
            distance: "5km",
            service: "Chirurgie thoracique – USIP thoracique",
            disponibilite: "2 lits (actualisé il y a 2 min)",
            possible: "immédiat",
            delai: "35 min",
            surveillance: "renforcée",
            compat: "100%",
            partenaire: true,
            subServices: ["Réanimation Polyvalente", "Urgences", "Maternité", "USIP"],
        },
        {
            img: EtablissementsList12,
            title: "Clinique Les Tilleuls",
            type: "privé",
            distance: "12km",
            service: "Chirurgie générale",
            disponibilite: "1 lit (actualisé il y a 2 min)",
            possible: "dans les 2 heures",
            delai: "50 min",
            surveillance: "partiellement renforcée",
            compat: "90%",
            partenaire: true,
            subServices: ["Urgences", "USIC", "USIP"],
        },
        {
            img: EtablissementsList13,
            title: "Centre Hospitalier de Valforêt",
            type: "public",
            distance: "25km",
            service: "Chirurgie générale",
            disponibilite: "1 lit (actualisé il y a 2 min)",
            possible: "dans les 4 heures",
            delai: "1h30",
            surveillance: "non renforcée",
            compat: "75%",
            partenaire: false,
            subServices: ["pas de réanimation ni d’unité de soins continus"],
        },
    ];

    return (
        <section className="mt-8">
            <h2 className="text-gray-800 font-semibold mb-6">
                Résultats : {items.length} établissements trouvés
            </h2>

            <div className="space-y-6">
                {items.map((item, i) => (
                    <HospitalCard key={i} data={item} />
                ))}
            </div>
        </section>
    );
}

function HospitalCard({ data }) {
    return (
        <div className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row gap-4">

            {/* IMAGE + LIKE */}
            <div className="relative min-w-[220px] h-[200px]">
                <Image
                    src={data.img}
                    alt={data.title}
                    fill
                    className="object-cover"
                />

                <button className="absolute top-2 right-2">
                    <Heart
                        size={26}
                        strokeWidth={2}
                        className={data.partenaire ? "text-red-500 fill-red-500" : "text-gray-400"}
                    />
                </button>
            </div>

            {/* CONTENT */}
            <div className="flex-1">

                {/* Title & type */}
                <h3 className="text-gray-800 font-semibold text-lg">
                    {data.title}{" "}
                    <span className="text-gray-500 text-sm">({data.type})</span>
                </h3>

                {/* Map link */}
                <p className="text-[#2A6EBB] text-sm cursor-pointer mt-1">
                    Indiquer sur la carte
                </p>
                <p className="text-gray-500 text-sm">Distance {data.distance}</p>

                {/* Service dropdown */}
                <p className="text-[#2A6EBB] text-sm cursor-pointer mt-2">
                    Service dans l’hôpital ⌄
                </p>

                {/* Subservices */}
                <div className="flex flex-wrap gap-x-6 text-gray-600 text-sm mt-1">
                    {data.subServices.map((s, i) => (
                        <p key={i}>{s}</p>
                    ))}
                </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col justify-between py-2 min-w-[250px]">

                {/* Service badge */}
                <div className="bg-[#EEF9FB] text-gray-700 py-1 px-4 rounded-full w-fit text-sm mb-2">
                    Service : {data.service}
                </div>

                {/* Infos */}
                <div className="text-sm space-y-1">
                    <p>
                        <span className="font-medium text-gray-700">Disponibilité :</span>{" "}
                        {data.disponibilite}
                    </p>

                    <p className="text-[#2A6EBB] cursor-pointer">Transfert possible: {data.possible}</p>
                    <p className="text-[#2A6EBB] cursor-pointer">Délai de transfert estimé: {data.delai}</p>
                    <p className="text-[#2A6EBB] cursor-pointer">Niveau de surveillance: {data.surveillance}</p>
                </div>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col justify-between text-sm items-end">

                {/* Compatibility */}
                <div className="flex flex-col items-end">
                    <p className="text-gray-600">Score de compatibilité</p>
                    <div className="bg-[#EEF9FB] px-3 py-1 rounded-md font-medium text-gray-700">
                        {data.compat}
                    </div>

                    <div className="flex items-center gap-1 mt-2">
                        <Heart
                            size={18}
                            className={data.partenaire ? "text-red-500 fill-red-500" : "text-gray-300"}
                        />
                        <p className="text-gray-600">
                            {data.partenaire ? "Établissement partenaire" : "Établissement non partenaire"}
                        </p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-2 mt-4">
                    <button className="px-5 py-2 bg-gradient-to-r from-[#2A6EBB] to-[#61D0BF] text-white rounded-full font-medium shadow hover:scale-[1.03] transition">
                        Transférer <br /> <span className="text-xs">(générer fiche de liaison)</span>
                    </button>

                    <button className="px-5 py-2 bg-gradient-to-r from-[#1E3A8A] to-[#61D0BF] text-white rounded-full font-medium shadow hover:scale-[1.03] transition">
                        Refuser
                    </button>
                </div>
            </div>
        </div>
    );
}
