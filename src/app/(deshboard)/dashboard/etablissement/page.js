"use client";

import { Printer, RefreshCcw } from "lucide-react";
import { useState } from "react";

const Establishment = () => {
    const [activeTab, setActiveTab] = useState("activites");

    const tableData = [
        {
            date: "9/12",
            arrive: "10:30",
            patient: "FALL Soda – 18880000",
            sex: "M",
            age: "52 ans",
            prov: "Clinique Z",
            veh: "Taxi G7",
            transport: "Taxi L’Etoile",
            dest: "Clinique Z",
            veh2: "VSL",
            comp: "Ambulance Vuitton",
            depart: "14:30",
        },
        {
            date: "9/12",
            arrive: "11:00",
            patient: "Jean David – 123045556",
            sex: "M",
            age: "42 ans",
            prov: "Domicile",
            veh: "Taxi",
            transport: "G7",
            dest: "Centre de Santé Lumière",
            veh2: "Tax",
            comp: "G7",
            depart: "12:30",
        },
        {
            date: "9/12",
            arrive: "10:30",
            patient: "FALL Soda – 18880000",
            sex: "M",
            age: "52 ans",
            prov: "Clinique Z",
            veh: "Taxi G7",
            transport: "Taxi L’Etoile",
            dest: "Clinique Z",
            veh2: "VSL",
            comp: "Ambulance Vuitton",
            depart: "14:30",
        },
        {
            date: "9/12",
            arrive: "11:00",
            patient: "Jean David – 123045556",
            sex: "M",
            age: "42 ans",
            prov: "Domicile",
            veh: "Taxi",
            transport: "G7",
            dest: "Centre de Santé Lumière",
            veh2: "Tax",
            comp: "G7",
            depart: "12:30",
        },
        {
            date: "9/12",
            arrive: "10:30",
            patient: "FALL Soda – 18880000",
            sex: "M",
            age: "52 ans",
            prov: "Clinique Z",
            veh: "Taxi G7",
            transport: "Taxi L’Etoile",
            dest: "Clinique Z",
            veh2: "VSL",
            comp: "Ambulance Vuitton",
            depart: "14:30",
        },
        {
            date: "9/12",
            arrive: "11:00",
            patient: "Jean David – 123045556",
            sex: "M",
            age: "42 ans",
            prov: "Domicile",
            veh: "Taxi",
            transport: "G7",
            dest: "Centre de Santé Lumière",
            veh2: "Tax",
            comp: "G7",
            depart: "12:30",
        },
        {
            date: "9/12",
            arrive: "10:30",
            patient: "FALL Soda – 18880000",
            sex: "M",
            age: "52 ans",
            prov: "Clinique Z",
            veh: "Taxi G7",
            transport: "Taxi L’Etoile",
            dest: "Clinique Z",
            veh2: "VSL",
            comp: "Ambulance Vuitton",
            depart: "14:30",
        },
        {
            date: "9/12",
            arrive: "11:00",
            patient: "Jean David – 123045556",
            sex: "M",
            age: "42 ans",
            prov: "Domicile",
            veh: "Taxi",
            transport: "G7",
            dest: "Centre de Santé Lumière",
            veh2: "Tax",
            comp: "G7",
            depart: "12:30",
        }
    ];

    return (
        <div className="w-full">
            {/* FILTER ROW */}
            <div className="flex flex-wrap gap-4 mb-8">
                {Array(4).fill(0).map((_, i) => (
                    <button
                        key={i}
                        className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-sm"
                    >
                        Filter here
                    </button>
                ))}
            </div>

            {/* TABLE */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white">
                            <tr>
                                {[
                                    "Date", "H Arrivée", "Patients", "Sexe", "Age", "Provenance",
                                    "Type de véhicule", "Compagnie de transport", "Destination",
                                    "Type de véhicule", "Compagnie", "H Départ"
                                ].map((head) => (
                                    <th
                                        key={head}
                                        className="px-5 py-4 font-medium text-[13px] whitespace-nowrap"
                                    >
                                        {head}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {tableData.map((row, i) => (
                                <tr
                                    key={i}
                                    className="even:bg-gray-50 hover:bg-gray-100 transition"
                                >
                                    <td className="px-5 py-4">{row.date}</td>
                                    <td className="px-5 py-4">{row.arrive}</td>
                                    <td className="px-5 py-4">{row.patient}</td>
                                    <td className="px-5 py-4">{row.sex}</td>
                                    <td className="px-5 py-4">{row.age}</td>
                                    <td className="px-5 py-4">{row.prov}</td>
                                    <td className="px-5 py-4">{row.veh}</td>
                                    <td className="px-5 py-4">{row.transport}</td>
                                    <td className="px-5 py-4">{row.dest}</td>
                                    <td className="px-5 py-4">{row.veh2}</td>
                                    <td className="px-5 py-4">{row.comp}</td>
                                    <td className="px-5 py-4">{row.depart}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* PAGINATION */}
            <div className="flex items-center justify-between mt-12">
                <div className="flex items-center justify-center gap-3 text-sm">
                    <button className="pagination-btn border rounded-full w-[30px] h-[30px] cursor-pointer">«</button>
                    <button className="pagination-btn border rounded-full w-[30px] h-[30px] cursor-pointer">‹</button>

                    <button className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-full w-[30px] h-[30px] cursor-pointer">1</button>
                    <button className="pagination-page border rounded-full w-[30px] h-[30px] cursor-pointer">2</button>
                    <button className="pagination-page border rounded-full w-[30px] h-[30px] cursor-pointer">3</button>

                    <span className="text-gray-500 ">…</span>

                    <button className="pagination-page border rounded-full w-[30px] h-[30px] cursor-pointer">10</button>

                    <button className="pagination-btn border rounded-full w-[30px] h-[30px] cursor-pointer">›</button>
                    <button className="pagination-btn border rounded-full w-[30px] h-[30px] cursor-pointer">»</button>

                    <select className="ml-4 border px-2 py-1 text-sm text-gray-700 rounded-3xl cursor-pointer focus:outline-none">
                        <option>Page 1</option>
                        <option>Page 2</option>
                    </select>
                </div>

                {/* FLOATING BUTTONS */}
                <div className="flex flex items-center gap-5">
                    <button className="floating-btn bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-full p-2 cursor-pointer">
                        <Printer size={24} />
                    </button>

                    <button className="floating-btn bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-full p-2 cursor-pointer">
                        <RefreshCcw size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Establishment;
