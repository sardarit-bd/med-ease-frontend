"use client";

import {
    Download,
    FileText,
    Pill
} from "lucide-react";

export default function DepensesPage() {
    return (
        <div className="min-h-screen bg-[#F4F7FB] p-4 md:p-6">

            {/* HEADER */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-[#0D1B2A]">Dépenses Médicales</h1>
                    <p className="text-sm text-gray-500">
                        Suivez vos dépenses et remboursements de santé
                    </p>
                </div>

                <button className="px-4 py-2 bg-gradient-to-r from-[#6A5CFF] to-[#4DA2FF] text-white rounded-xl shadow text-sm">
                    Exporter
                </button>
            </div>

            {/* TOP SUMMARY CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

                {/* Total du mois */}
                <div className="bg-white p-5 rounded-xl shadow border">
                    <p className="text-sm font-medium text-[#6A5CFF]">Total du mois</p>
                    <h1 className="text-3xl font-bold mt-2 text-[#6A5CFF]">127,50 €</h1>
                    <p className="text-xs text-gray-500 mt-1">Novembre 2025</p>
                </div>

                {/* Remboursé */}
                <div className="bg-white p-5 rounded-xl shadow border">
                    <p className="text-sm font-medium text-green-600">Remboursé</p>
                    <h1 className="text-3xl font-bold mt-2 text-green-600">89,25 €</h1>
                    <p className="text-xs text-gray-500 mt-1">70% du total</p>
                </div>

                {/* Reste à charge */}
                <div className="bg-white p-5 rounded-xl shadow border">
                    <p className="text-sm font-medium text-orange-600">Reste à charge</p>
                    <h1 className="text-3xl font-bold mt-2 text-orange-600">38,25 €</h1>
                    <p className="text-xs text-gray-500 mt-1">30% du total</p>
                </div>

                {/* % vs mois dernier */}
                <div className="bg-white p-5 rounded-xl shadow border">
                    <p className="text-sm font-medium text-blue-600">vs mois dernier</p>
                    <h1 className="text-3xl font-bold mt-2 text-blue-600">-5,3%</h1>
                    <p className="text-xs text-gray-500 mt-1">Économie de 7,1 €</p>
                </div>

            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT COLUMN */}
                <div className="lg:col-span-2 space-y-6">

                    {/* EVOLUTION DES DÉPENSES */}
                    <div className="bg-white p-6 rounded-xl shadow border">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-gray-700">Évolution des dépenses</h3>

                            <div className="flex gap-2 text-xs">
                                <button className="px-3 py-1 bg-[#6A5CFF] text-white rounded-lg shadow">
                                    Semaine
                                </button>
                                <button className="px-3 py-1 bg-white border rounded-lg">
                                    Mois
                                </button>
                                <button className="px-3 py-1 bg-white border rounded-lg">
                                    Année
                                </button>
                            </div>
                        </div>

                        {/* BAR CHART REPLICA */}
                        {[
                            ["Mai", "142.50"],
                            ["Juin", "89.20"],
                            ["Juil", "158.80"],
                            ["Août", "95.30"],
                            ["Sept", "178.90"],
                            ["Oct", "134.60"],
                            ["Nov", "127.50"],
                        ].map(([month, value], i) => (
                            <div key={i} className="mb-4">
                                <div className="flex justify-between text-xs mb-1">
                                    <span>{month}</span>
                                    <span>{value} €</span>
                                </div>

                                <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden flex">
                                    <div className="bg-green-600 h-full" style={{ width: "70%" }}></div>
                                    <div className="bg-orange-500 h-full" style={{ width: "30%" }}></div>
                                </div>
                            </div>
                        ))}

                        <div className="flex gap-4 text-xs text-gray-500 mt-4">
                            <div className="flex items-center gap-1">
                                <span className="w-3 h-3 bg-green-600 rounded-full"></span> Remboursé
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="w-3 h-3 bg-orange-500 rounded-full"></span> Reste à charge
                            </div>
                        </div>
                    </div>

                    {/* DÉPENSES RÉCENTES */}
                    <div className="bg-white p-6 rounded-xl shadow border">

                        <h3 className="font-semibold text-gray-700 mb-4">Dépenses récentes</h3>

                        {[
                            {
                                title: "Pharmacie du Centre",
                                category: "Médicaments",
                                total: "42.90",
                                reimbursed: "29.75",
                                charge: "13.75",
                                date: "12/11/2025",
                                iconColor: "text-green-600",
                            },
                            {
                                title: "Dr. Martin - Médecin généraliste",
                                category: "Consultation",
                                total: "20.00",
                                reimbursed: "12.00",
                                charge: "7.00",
                                date: "10/11/2025",
                                iconColor: "text-blue-600",
                            },
                            {
                                title: "Pharmacie Saint-Michel",
                                category: "Médicaments",
                                total: "38.20",
                                reimbursed: "26.60",
                                charge: "11.60",
                                date: "07/11/2025",
                                iconColor: "text-green-600",
                            },
                            {
                                title: "Lecteur glycémie",
                                category: "Dispositif médical",
                                total: "15.40",
                                reimbursed: "9.40",
                                charge: "6.00",
                                date: "05/11/2025",
                                iconColor: "text-orange-500",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="border rounded-xl p-4 flex items-start justify-between mb-3 bg-white"
                            >
                                <div>
                                    <div className="flex items-center gap-2">
                                        <Pill size={18} className={item.iconColor} />
                                        <h4 className="font-semibold text-gray-700">{item.title}</h4>
                                    </div>

                                    <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                                    <p className="text-xs text-gray-500">
                                        Total: <strong>{item.total} €</strong>
                                    </p>

                                    <div className="text-xs mt-2 text-gray-600">
                                        Remboursé: <span className="text-green-600">{item.reimbursed} €</span> <br />
                                        À charge: <span className="text-orange-600">{item.charge} €</span>
                                    </div>
                                </div>

                                <div>
                                    <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

                {/* RIGHT COLUMN */}
                <div className="space-y-6">

                    {/* CATEGORY BREAKDOWN */}
                    <div className="bg-white p-6 rounded-xl shadow border">
                        <h3 className="font-semibold text-gray-700 mb-3">
                            Répartition par catégorie
                        </h3>

                        {[
                            ["Médicaments", 80.0, "bg-[#6A5CFF]"],
                            ["Consultations", 25.0, "bg-[#4DA2FF]"],
                            ["Dispositifs médicaux", 22.0, "bg-[#00C39A]"],
                        ].map(([label, value, color], i) => (
                            <div key={i} className="mb-4">
                                <div className="flex justify-between text-xs mb-1">
                                    <span>{label}</span>
                                    <span>{value.toFixed(2)} €</span>
                                </div>
                                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                    <div className={`h-full ${color}`} style={{ width: "70%" }}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* MUTUELLE */}
                    <div className="bg-white p-6 rounded-xl shadow border">
                        <h3 className="font-semibold text-gray-700">Ma mutuelle</h3>
                        <p className="text-sm text-gray-500 mt-1">Harmonie Mutuelle</p>

                        <div className="text-sm mt-3 space-y-1 text-gray-700">
                            <p>Taux de remboursement: <strong>70%</strong></p>
                            <p>Plafond annuel: <strong>2 500 €</strong></p>
                            <p>Utilisé: <strong className="text-blue-600">892 €</strong></p>
                        </div>
                    </div>

                    {/* EXPORT DATA */}
                    <div className="bg-white p-6 rounded-xl shadow border">
                        <h3 className="font-semibold text-gray-700 mb-3">Export de données</h3>

                        <button className="w-full py-2 border rounded-xl bg-white shadow text-sm flex items-center justify-center gap-2 mb-2">
                            <FileText size={16} /> Export PDF
                        </button>

                        <button className="w-full py-2 border rounded-xl bg-white shadow text-sm flex items-center justify-center gap-2 mb-2">
                            <Download size={16} /> Export CSV
                        </button>

                        <button className="w-full py-2 border rounded-xl bg-white shadow text-sm">
                            Relevé mensuel
                        </button>
                    </div>

                    {/* SAVINGS CARD */}
                    <div className="bg-[#E6F7ED] border border-[#C7EED4] p-6 rounded-xl shadow">
                        <h3 className="font-semibold text-gray-800 mb-1">Économie ce mois</h3>
                        <p className="text-sm text-gray-700">
                            Vous avez économisé <strong>7,10 €</strong> par rapport au mois dernier
                            grâce à l’optimisation de vos achats.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
