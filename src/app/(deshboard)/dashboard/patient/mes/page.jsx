"use client";

import { usePrescriptions } from "@/hooks";
import {
    Camera,
    Download,
    Plus,
    PlusCircle,
    Send,
    User,
    X
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AddMedicine from "./AddMedicine";
import RightColumn from "./RightColumn";
import TopCounters from "./TopCounters";

export default function OrdonnancesPage() {
    const [showAddForm, setShowAddForm] = useState(false);
    const [prescriptions, setPrescriptions] = useState([]);
    const [showMedicineModal, setShowMedicineModal] = useState(false);
    const [activeMedicineId, setActiveMedicineId] = useState(null);

    const { createPrescription, fetchPrescriptions, loading } = usePrescriptions()

    useEffect(() => {
        async function loadPrescriptions() {
            const result = await fetchPrescriptions();
            setPrescriptions(result);
        }
        loadPrescriptions();
    }, [fetchPrescriptions]);

    const [formData, setFormData] = useState({
        doctorName: "",
        doctorType: "",
        doctorContact: "",
        prescriptionDate: new Date().toISOString().split('T')[0],
        validUntil: new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const openMedicineModal = (prescriptionId) => {
        setActiveMedicineId(prescriptionId);
        setShowMedicineModal(true);
    };

    const closeMedicineModal = () => {
        setActiveMedicineId(null);
        setShowMedicineModal(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset form and close
        setFormData({
            doctorName: "",
            doctorType: "",
            doctorContact: "",
            prescriptionDate: new Date().toISOString().split('T')[0],
            validUntil: new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0],
            medications: []
        });
        setShowAddForm(false);

        const result = await createPrescription(formData);

        if (result?.success) {
            toast.success("Ordonnance créée avec succès");
            // Refresh prescriptions list
            const updatedPrescriptions = await fetchPrescriptions();
            setPrescriptions(updatedPrescriptions);
        } else {
            toast.error("Échec de la création de l'ordonnance");
            console.error("Create Prescription Error:", result);
        }
    }
    return (
        <div className="min-h-screen bg-[#F4F7FB]">
            {/* HEADER */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-[#0D1B2A]">Mes Ordonnances</h1>
                    <p className="text-sm text-gray-500">
                        Gérez vos prescriptions médicales
                    </p>
                </div>

                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border text-sm rounded-xl shadow flex items-center gap-2">
                        <Camera size={16} /> Scanner
                    </button>
                    <button
                        onClick={() => setShowAddForm(!showAddForm)}
                        className="px-4 py-2 bg-gradient-to-r from-[#6A5CFF] to-[#4DA2FF] text-white rounded-xl shadow text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
                    >
                        <span>{showAddForm ? <X size={16} /> : <PlusCircle size={16} />}</span>
                        <span>{showAddForm ? "Annuler" : "Ajouter"}</span>
                    </button>
                </div>
            </div>

            {/* ALERT BANNER */}
            <div className="bg-red-500 text-white p-4 rounded-xl shadow mb-6 flex justify-between items-center">
                <div>
                    <p className="font-medium">Renouvellement nécessaire</p>
                    <p className="text-sm opacity-90">
                        2 ordonnances arrivent à expiration
                    </p>
                </div>
                <button className="px-4 py-2 bg-white text-red-600 font-semibold rounded-xl text-sm shadow">
                    Voir
                </button>
            </div>

            {/* TOP COUNTERS */}
            <TopCounters />

            {/* TABS */}
            <div className="flex gap-6 text-sm font-medium mb-6">
                <button className="text-[#6A5CFF] border-b-2 border-[#6A5CFF] pb-2">
                    Ordonnances Actives
                </button>
                <button className="text-gray-500">Historique</button>
                <button className="text-gray-500">Renouvellements</button>
            </div>

            {/* ACCORDION FORM */}
            {showAddForm && (
                <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-[#6A5CFF]/20">
                    <h2 className="text-xl font-bold text-[#0D1B2A] mb-6 flex items-center gap-2">
                        <PlusCircle className="text-[#6A5CFF]" size={24} />
                        Nouvelle Ordonnance
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Doctor Information */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nom du médecin *
                                </label>
                                <input
                                    type="text"
                                    name="doctorName"
                                    value={formData.doctorName}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Ex: Dr. John Smith"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A5CFF] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Spécialité *
                                </label>
                                <input
                                    type="text"
                                    name="doctorType"
                                    value={formData.doctorType}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Ex: Cardiologist"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A5CFF] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Contact
                                </label>
                                <input
                                    type="tel"
                                    name="doctorContact"
                                    value={formData.doctorContact}
                                    onChange={handleInputChange}
                                    placeholder="Ex: +1234567890"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A5CFF] focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Dates */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Date de prescription *
                                </label>
                                <input
                                    type="date"
                                    name="prescriptionDate"
                                    value={formData.prescriptionDate}
                                    onChange={handleInputChange}
                                    required
                                    max={new Date().toISOString().split('T')[0]}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A5CFF] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Valide jusqu'au *
                                </label>
                                <input
                                    type="date"
                                    name="validUntil"
                                    value={formData.validUntil}
                                    onChange={handleInputChange}
                                    required
                                    min={formData.prescriptionDate}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A5CFF] focus:border-transparent"
                                />
                            </div>
                        </div>


                        {/* Form Submit Buttons */}
                        <div className="flex gap-3 pt-6 border-t">
                            <button
                                type="button"
                                onClick={() => setShowAddForm(false)}
                                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                            >
                                Annuler l'ordonnance
                            </button>
                            <button
                                type="submit"

                                className={`flex-1 px-6 py-2 rounded-xl text-white transition-opacity bg-gradient-to-r from-[#6A5CFF] to-[#4DA2FF] hover:opacity-90`}
                            >
                                Enregistrer l'ordonnance
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* MEDICINE FORM MODAL */}
            {showMedicineModal && (
                <AddMedicine prescriptionId={activeMedicineId} closeMedicineModal={closeMedicineModal} />
            )}

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT COLUMN */}
                <div className="lg:col-span-2 space-y-6">
                    {prescriptions.length > 0 && prescriptions.map((prescription, index) => {
                        const time = Math.ceil(
                            (new Date(prescription.validUntil) - new Date(prescription.prescriptionDate)) /
                            (1000 * 60 * 60 * 24)
                        )
                        const isExpired = time <= 0;
                        return (
                            // STYLED PRESCRIPTION CARD BASED ON EXPIRY , DEMO ARE GIVEN BELOW
                            <>
                                <div key={prescription._id}
                                    className={`rounded-xl shadow p-6 border ${isExpired
                                        ? "bg-[#FFF3DF] border-[#FFE2B6]"
                                        : "bg-white border-gray-200"
                                        }`}>
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex items-center gap-3 mb-2">
                                            <User
                                                size={22}
                                                className={
                                                    isExpired
                                                        ? "text-orange-600"
                                                        : "text-blue-600"
                                                }
                                            />
                                            <div>
                                                <h3 className="font-semibold text-gray-800">{prescription.doctorName}</h3>
                                                <p className="text-xs text-gray-500">{prescription.doctorType}</p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => openMedicineModal(prescription._id)}
                                            className="px-4 py-2 bg-gradient-to-r from-[#6A5CFF] to-[#4DA2FF] text-white rounded-xl text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
                                        >
                                            <Plus size={16} />
                                            Ajouter un médicament
                                        </button>
                                    </div>

                                    <p className="text-xs text-gray-500">
                                        Date de prescription:{" "}
                                        <strong>{new Date(prescription.prescriptionDate).toLocaleDateString('en-GB')}</strong>
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Valide jusqu’au:{" "}
                                        <strong
                                            className={
                                                isExpired
                                                    ? "text-red-600"
                                                    : "text-blue-600"
                                            }
                                        >
                                            {new Date(
                                                prescription.validUntil
                                            ).toLocaleDateString("en-GB")}{" "}
                                            ({isExpired
                                                ? "Expirée"
                                                : `${time} jours`}
                                            )
                                        </strong>
                                    </p>


                                    {prescription.medicines && prescription.medicines.length > 0 && (
                                        <>
                                            <p className="text-xs text-gray-700 mt-3 font-medium">
                                                Médicaments prescrits:
                                            </p>
                                            {prescription.medicines.map((med, medIndex) => (

                                                <>

                                                    <div className="mt-1 text-xs text-gray-600">
                                                        {med.name} • {med.strength} • {med.form}
                                                    </div>


                                                    <div className="mt-4">
                                                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                                            {Math.ceil((med?.takenDays / med?.totalDays) * 100) > 0 && (<div className={`h-full  bg-green-600 w-[${Math.ceil((med?.takenDays / med?.totalDays) * 100)}%]`}></div>)}

                                                        </div>
                                                        <p className="text-xs text-gray-500 mt-1 text-right">
                                                            {med?.takenDays}/{med?.totalDays} jours
                                                        </p>
                                                    </div>
                                                </>
                                            ))}
                                        </>)}

                                    {/* Buttons */}
                                    <div className="flex gap-3 mt-4">
                                        <button className="px-4 py-2 bg-white text-sm border rounded-xl shadow flex items-center gap-2">
                                            <Download size={16} /> Télécharger
                                        </button>
                                        <button className="px-4 py-2 bg-white text-sm border rounded-xl shadow flex items-center gap-2">
                                            <Send size={16} /> Envoyer
                                        </button>
                                    </div>
                                </div>
                            </>
                        )
                    })}




                </div>

                {/* ------------------ RIGHT COLUMN ------------------ */}
                <RightColumn />
            </div >
        </div >
    );
}