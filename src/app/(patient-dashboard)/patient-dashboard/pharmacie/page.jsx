"use client";

import { useMedicines } from "@/hooks";
import {
    Camera,
    Filter,
    MinusCircle,
    MoreVertical,
    Pill,
    PlusCircle,
    Search
} from "lucide-react";
import { useEffect, useState } from "react";
import RightSidebar from "./RightSidebar";
import StockForm from "./StockForm";
import Summery from "./Summery";

export default function PharmaciePage() {
    const [showForm, setShowForm] = useState(false);
    const [medicine, setMedicine] = useState(null);
    const { fetchMedicines } = useMedicines()


    useEffect(() => {
        async function loadMedicines() {
            const meds = await fetchMedicines();
            setMedicine(meds || []);
        }
        loadMedicines();
    }, [fetchMedicines]);


    return (
        <div className="min-h-screen p-4 md:p-6">

            {/* HEADER */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-[#0D1B2A]">Pharmacie Virtuelle</h1>
                    <p className="text-sm text-gray-500">
                        Gérez votre stock et trouvez des pharmacies
                    </p>
                </div>

                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border text-sm rounded-xl shadow hover:bg-gray-50 flex items-center gap-2">
                        <Camera size={16} /> Scanner
                    </button>

                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#6A5CFF] to-[#4DA2FF] text-white shadow text-sm flex items-center gap-1"
                    >
                        {showForm ? <MinusCircle size={16} /> : <PlusCircle size={16} />} Ajouter au stock
                    </button>

                </div>
            </div>

            {showForm && (
                <StockForm />
            )}


            {/* TOP STATUS COUNTERS */}
            <Summery />

            {/* TOP TABS */}
            <div className="flex gap-6 text-sm mb-6 font-medium">
                <button className="text-[#6A5CFF] border-b-2 border-[#6A5CFF] pb-2">
                    Mon Stock Personnel
                </button>
                <button className="text-gray-500 pb-2">Pharmacies à proximité</button>
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT CONTENT */}
                <div className="lg:col-span-2 space-y-6">

                    {/* SEARCH BAR */}
                    <div className="bg-white rounded-xl border shadow p-4 flex items-center gap-3">
                        <Search className="text-gray-400" size={18} />
                        <input
                            placeholder="Rechercher un médicament dans votre stock..."
                            className="flex-1 bg-transparent outline-none text-sm"
                        />
                        <Filter className="text-gray-400" size={18} />
                    </div>

                    {/* ------------------ MEDICATION CARDS ------------------ */}
                    {medicine && medicine.length <= 0 && (<div className="bg-white border rounded-xl shadow p-8 text-center">
                        <Pill size={40} className="mx-auto text-gray-400 mb-3" />
                        <h2 className="text-lg font-semibold text-gray-700">
                            Aucun médicament dans votre stock
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            Ajoutez une prescription pour commencer à gérer votre pharmacie.
                        </p>

                        <button
                            onClick={() => setShowForm(true)}
                            className="mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-[#6A5CFF] to-[#4DA2FF] text-white text-sm shadow"
                        >
                            + Ajouter une prescription
                        </button>
                    </div>
                    )}

                    {/* Doliprane OK */}
                    {medicine && medicine.length > 0 && medicine.map((med) => (
                        <>
                            <div className="bg-[#E8F9EA] border border-[#C8EECF] rounded-xl p-5 shadow flex items-start justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <Pill size={18} className="text-green-600" />
                                        <span className="text-sm font-semibold text-gray-700">
                                            {med.name + " "}  {med.strength}
                                        </span>
                                        <span className={`text-xs bg-green-600 text-white px-2 py-0.5 rounded-full ${med.currentStock > 5 ? "bg-green-600" : "bg-orange-500"}`}>
                                            {med.currentStock > 5 ? "Stock OK" : "Stock Low"}
                                        </span>
                                    </div>

                                    <p className="text-xs text-gray-500">{med.storage}</p>
                                    <p className="text-xs text-gray-900 mt-2">
                                        Quantité restante: <strong>{med.currentStock + " "} {med.form}</strong>
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Date de péremption: {med.expiryDate ? new Date(med.expiryDate).toLocaleDateString() : "N/A"}
                                    </p>

                                    <button className="mt-3 px-3 py-1 text-xs bg-white border rounded-xl shadow">
                                        Détails
                                    </button>
                                </div>

                                <MoreVertical size={18} className="text-gray-500" />
                            </div>
                        </>
                    ))}


                </div>

                {/* ------------------ RIGHT SIDEBAR ------------------ */}
                <RightSidebar />
            </div>
        </div>
    );
}
