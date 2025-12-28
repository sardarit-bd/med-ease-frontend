'use client';

import { usePrescriptions } from "@/hooks";
import { Clock, Coffee, Moon, Pill, Sun, X } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddMedicine({ activeMedicineIndex, closeMedicineModal, prescriptionId }) {
    const { addMedicine: saveMedicine } = usePrescriptions()
    const [medicineFormData, setMedicineFormData] = useState({
        name: "",
        genericName: "",
        strength: "",
        form: "",
        dosage: {
            amount: 1,
            unit: "tablet",
            frequency: "once daily",
            timesPerDay: 1,
            specificTimes: ["morning"],
            instructions: ""
        },
        status: "active",
        hasStock: true,
        startDate: new Date().toISOString().split('T')[0],
        totalDays: ''
    });

    // Time of day options with French labels
    const timeOfDayOptions = [
        {
            id: "morning",
            label: "Matin",
            icon: Sun,
            color: "bg-orange-100 border-orange-200 text-orange-700",
            activeColor: "bg-orange-500 border-orange-600 text-white",
            description: "Entre 6h - 10h",
            defaultTime: "08:00"
        },
        {
            id: "noon",
            label: "Midi",
            icon: Coffee,
            color: "bg-yellow-100 border-yellow-200 text-yellow-700",
            activeColor: "bg-yellow-500 border-yellow-600 text-white",
            description: "Entre 12h - 14h",
            defaultTime: "13:00"
        },
        // {
        //     id: "afternoon",
        //     label: "Après-midi",
        //     icon: Clock,
        //     color: "bg-blue-100 border-blue-200 text-blue-700",
        //     activeColor: "bg-blue-500 border-blue-600 text-white",
        //     description: "Entre 15h - 17h",
        //     defaultTime: "16:00"
        // },
        {
            id: "evening",
            label: "Soir",
            icon: Moon,
            color: "bg-indigo-100 border-indigo-200 text-indigo-700",
            activeColor: "bg-indigo-500 border-indigo-600 text-white",
            description: "Entre 18h - 21h",
            defaultTime: "20:00"
        },
        // {
        //     id: "night",
        //     label: "Nuit",
        //     icon: X,
        //     color: "bg-gray-100 border-gray-200 text-gray-700",
        //     activeColor: "bg-gray-700 border-gray-800 text-white",
        //     description: "Entre 22h - 5h",
        //     defaultTime: "22:00"
        // }
    ];


    const frequencyOptions = [
        { value: "once daily", label: "Une fois par jour" },
        { value: "twice daily", label: "Deux fois par jour" },
        { value: "three times daily", label: "Trois fois par jour" },
        { value: "four times daily", label: "Quatre fois par jour" },
        { value: "as needed", label: "Au besoin" },
        { value: "weekly", label: "Hebdomadaire" }
    ];

    const formOptions = [
        { value: "tablet", label: "Comprimé" },
        { value: "capsule", label: "Capsule" },
        { value: "liquid", label: "Liquide" },
        { value: "injection", label: "Injection" },
        { value: "cream", label: "Crème" },
        { value: "inhaler", label: "Inhalateur" }
    ];

    const handleMedicineInputChange = (e) => {
        const { name, value, type } = e.target;

        if (name.startsWith('dosage.')) {
            const dosageField = name.split('.')[1];
            setMedicineFormData(prev => ({
                ...prev,
                dosage: {
                    ...prev.dosage,
                    [dosageField]: type === 'number' ? parseInt(value) || 0 : value
                }
            }));
        } else {
            setMedicineFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? e.target.checked : value
            }));
        }
    };

    const handleTimeOfDaySelect = (timeId) => {
        setMedicineFormData(prev => {
            const currentTimes = prev.dosage.specificTimes;
            const newTimes = currentTimes.includes(timeId)
                ? currentTimes.filter(t => t !== timeId)
                : [...currentTimes, timeId];

            return {
                ...prev,
                dosage: {
                    ...prev.dosage,
                    specificTimes: newTimes
                }
            };
        });
    };

    const addMedicine = async () => {
        if (!medicineFormData.name || !medicineFormData.strength) {
            alert("Veuillez remplir au moins le nom et la force du médicament");
            return;
        }


        const result = await saveMedicine(prescriptionId, medicineFormData);

        if (result?.success) {
            toast.success("Médicament ajouté avec succès");
        } else {
            toast.error("Échec de l'ajout du médicament");
            console.error("Add Medicine Error:", result);
            return;
        }
        closeMedicineModal();
    };

    const updateMedicine = () => {
        if (activeMedicineIndex === null) return;

        const updatedMedications = [...formData.medications];
        updatedMedications[activeMedicineIndex] = { ...medicineFormData };

        setFormData(prev => ({
            ...prev,
            medications: updatedMedications
        }));

        closeMedicineModal();
    };

    return (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl w-full container  max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white z-10 border-b p-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-[#0D1B2A] flex items-center gap-2">
                            <Pill className="text-[#6A5CFF]" size={24} />
                            {activeMedicineIndex ? "Modifier le médicament" : "Ajouter un nouveau médicament"}
                        </h2>
                        <button
                            onClick={closeMedicineModal}
                            className="p-1 hover:bg-gray-100 rounded-full"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    {/* Medicine Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Nom du médicament *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={medicineFormData.name}
                                onChange={handleMedicineInputChange}
                                required
                                placeholder="Ex: Amoxicillin"
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A5CFF] focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Nom générique
                            </label>
                            <input
                                type="text"
                                name="genericName"
                                value={medicineFormData.genericName}
                                onChange={handleMedicineInputChange}
                                placeholder="Ex: Amoxicillin Trihydrate"
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A5CFF] focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Force *
                            </label>
                            <input
                                type="text"
                                name="strength"
                                value={medicineFormData.strength}
                                onChange={handleMedicineInputChange}
                                required
                                placeholder="Ex: 500mg"
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A5CFF] focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Forme
                            </label>
                            <select
                                name="form"
                                value={medicineFormData.form}
                                onChange={handleMedicineInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A5CFF] focus:border-transparent"
                            >
                                <option value="">Sélectionner une forme</option>
                                {formOptions.map((option, index) => (
                                    <option key={index} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="flex items-center h-[42px]">
                                <input
                                    type="checkbox"
                                    name="hasStock"
                                    checked={medicineFormData.hasStock}
                                    onChange={handleMedicineInputChange}
                                    className="w-5 h-5 text-[#6A5CFF] rounded"
                                />
                                <span className="ml-2 text-sm text-gray-600">En stock</span>
                            </div>
                        </div>
                    </div>

                    {/* Dosage Information */}
                    <div className="border-t pt-4">
                        <h5 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                            <Clock size={16} /> Posologie
                        </h5>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Quantité par dose
                                </label>
                                <input
                                    type="number"
                                    name="dosage.amount"
                                    value={medicineFormData.dosage.amount}
                                    onChange={handleMedicineInputChange}
                                    min="1"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A5CFF] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Unité
                                </label>
                                <input
                                    type="text"
                                    name="dosage.unit"
                                    value={medicineFormData.dosage.unit}
                                    onChange={handleMedicineInputChange}
                                    placeholder="Ex: comprimé, ml"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A5CFF] focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Fréquence
                            </label>
                            <select
                                name="dosage.frequency"
                                value={medicineFormData.dosage.frequency}
                                onChange={handleMedicineInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A5CFF] focus:border-transparent"
                            >
                                {frequencyOptions.map((option, index) => (
                                    <option key={index} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Time of Day Selection */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Moment de la journée *
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {timeOfDayOptions.map((time) => {
                                    const Icon = time.icon;
                                    const isSelected = medicineFormData.dosage.specificTimes.includes(time.id);
                                    return (
                                        <button
                                            key={time.id}
                                            type="button"
                                            onClick={() => handleTimeOfDaySelect(time.id)}
                                            className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all duration-200 ${isSelected
                                                ? time.activeColor + ' border-2 shadow-md scale-102'
                                                : time.color + ' hover:shadow-md hover:scale-101'
                                                }`}
                                        >
                                            <Icon size={20} className="mb-1" />
                                            <span className="text-sm font-medium">{time.label}</span>
                                            <span className="text-xs mt-1 opacity-75">{time.description}</span>
                                        </button>
                                    );
                                })}
                            </div>
                            <p className="text-sm text-gray-500 mt-2">
                                Sélectionné: {medicineFormData.dosage.specificTimes.length} moment(s)
                            </p>
                        </div>


                        {/* Instructions */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Instructions supplémentaires
                            </label>
                            <textarea
                                name="dosage.instructions"
                                value={medicineFormData.dosage.instructions}
                                onChange={handleMedicineInputChange}
                                placeholder="Ex: Prendre après les repas, avec un grand verre d'eau"
                                rows="2"
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A5CFF] focus:border-transparent"
                            />
                        </div>
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Date de début
                            </label>
                            <input
                                type="date"
                                name="startDate"
                                value={medicineFormData.startDate}
                                onChange={handleMedicineInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A5CFF] focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Durée (jours)
                            </label>
                            <input
                                type="number"
                                name="totalDays"
                                value={medicineFormData.totalDays}
                                onChange={handleMedicineInputChange}
                                placeholder="Ex: 7 pour une semaine"
                                min="1"
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A5CFF] focus:border-transparent"
                            />
                        </div>
                    </div>


                    {/* Buttons */}
                    <div className="flex gap-3 pt-6 border-t">
                        <button
                            type="button"
                            onClick={closeMedicineModal}
                            className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                        >
                            Annuler
                        </button>
                        {activeMedicineIndex ? (
                            <button
                                type="button"
                                onClick={updateMedicine}
                                className="flex-1 px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-medium"
                            >
                                Mettre à jour
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={addMedicine}
                                className="flex-1 px-4 py-3 bg-gradient-to-r from-[#6A5CFF] to-[#4DA2FF] text-white rounded-xl hover:opacity-90 transition-opacity font-medium"
                            >
                                Ajouter le médicament
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}