"use client";

import { Baby, Scissors, Stethoscope, Syringe, Users } from "lucide-react";

export default function LitsAvalDashboard() {
    const regionRows = [
        { icon: Stethoscope, label: "Médecine", lits: 60, public: 40, prive: 15, espic: 15 },
        { icon: Scissors, label: "Chirurgie", lits: 30, public: 10, prive: 5, espic: 8 },
        { icon: Syringe, label: "Oncologie", lits: 15, public: 5, prive: 5, espic: 5 },
        { icon: Baby, label: "Gynécologie", lits: 10, public: 8, prive: 1, espic: 1 },
        { icon: Baby, label: "Pédiatrie", lits: 12, public: 8, prive: 3, espic: 1 },
        { icon: Users, label: "Personnes Âgées", lits: 50, public: 28, prive: 12, espic: 10 },
    ];

    const departRows = [
        { icon: Stethoscope, label: "Médecine", lits: 30, public: 20, prive: 7, espic: 3 },
        { icon: Scissors, label: "Chirurgie", lits: 15, public: 10, prive: 5, espic: 4 },
        { icon: Syringe, label: "Oncologie", lits: 7, public: 4, prive: 1, espic: 2 },
        { icon: Baby, label: "Gynécologie", lits: 5, public: 2, prive: 1, espic: 2 },
        { icon: Baby, label: "Pédiatrie", lits: 10, public: 6, prive: 3, espic: 1 },
        { icon: Users, label: "Personnes Âgées", lits: 25, public: 14, prive: 6, espic: 5 },
    ];

    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

            {/* LEFT – MAP */}
            <div className="col-span-1 bg-white rounded-xl shadow p-4">
                <h3 className="text-gray-700 font-medium mb-2">Carte</h3>

                <div className="w-full h-[93%] rounded-lg overflow-hidden bg-gray-200">
                    <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29206.385472606955!2d90.38979264010293!3d23.790199933140375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe23!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1763097022108!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="col-span-2 space-y-6">

                {/* REGION CARD */}
                <div className="bg-white rounded-xl shadow p-4">
                    <h3 className="text-gray-700 font-medium mb-4">
                        Région - IDF
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-blue-300 text-left">
                                    <th className="py-2">Secteur</th>
                                    <th className="py-2">Lit(s) disponible(s)</th>
                                    <th className="py-2">Public</th>
                                    <th className="py-2">Privé</th>
                                    <th className="py-2">ESPIC</th>
                                </tr>
                            </thead>

                            <tbody>
                                {regionRows.map((row, i) => (
                                    <tr key={i} className="">
                                        <td className="py-2 flex items-center gap-2 text-gray-700">
                                            <row.icon size={16} className="text-[#2A6EBB]" />
                                            {row.label}
                                        </td>

                                        <td className="py-2 text-gray-700">{row.lits}</td>
                                        <td className="py-2 text-gray-700">{row.public}</td>
                                        <td className="py-2 text-gray-700">{row.prive}</td>
                                        <td className="py-2 text-gray-700">{row.espic}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* DEPARTMENT CARD */}
                <div className="bg-white rounded-xl shadow p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-gray-700 font-medium">Département</h3>

                        <select className="bg-gray-50 border rounded-lg px-3 py-1 text-sm">
                            <option>75 - Paris</option>
                            <option>77 - Seine-et-Marne</option>
                            <option>78 - Yvelines</option>
                        </select>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-blue-300">
                                    <th className="py-2">Secteur</th>
                                    <th className="py-2">Lit(s) disponible(s)</th>
                                    <th className="py-2">Public</th>
                                    <th className="py-2">Privé</th>
                                    <th className="py-2">ESPIC</th>
                                </tr>
                            </thead>

                            <tbody>
                                {departRows.map((row, i) => (
                                    <tr key={i} className="">
                                        <td className="py-2 flex items-center gap-2 text-gray-700">
                                            <row.icon size={16} className="text-[#2A6EBB]" />
                                            {row.label}
                                        </td>

                                        <td className="py-2 text-gray-700">{row.lits}</td>
                                        <td className="py-2 text-gray-700">{row.public}</td>
                                        <td className="py-2 text-gray-700">{row.prive}</td>
                                        <td className="py-2 text-gray-700">{row.espic}</td>

                                        {/* Gradient clickable links
                                        <td className="py-2">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[#2A6EBB] underline cursor-pointer">
                                                    Disponible(s)
                                                </span>
                                                <span className="text-[#2A6EBB] underline cursor-pointer">
                                                    Public
                                                </span>
                                                <span className="text-[#2A6EBB] underline cursor-pointer">
                                                    Privé
                                                </span>
                                                <span className="text-[#2A6EBB] underline cursor-pointer">
                                                    ESPIC
                                                </span>
                                            </div>
                                        </td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section>
    );
}
