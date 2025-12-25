'use client';

import { usePrescriptions } from "@/hooks";
import { Clock, Pill, Plus, X } from "lucide-react";
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
            specificTimes: ["08:00"],
            daysOfWeek: [1, 2, 3, 4, 5, 6, 7],
            instructions: ""
        },
        status: "active",
        hasStock: true,
        startDate: new Date().toISOString().split('T')[0],
        totalDays: ''
    });

    const daysOfWeekOptions = [
        { value: 1, label: "Lundi" },
        { value: 2, label: "Mardi" },
        { value: 3, label: "Mercredi" },
        { value: 4, label: "Jeudi" },
        { value: 5, label: "Vendredi" },
        { value: 6, label: "Samedi" },
        { value: 7, label: "Dimanche" }
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

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

    const handleDaysOfWeekChange = (dayValue) => {
        setMedicineFormData(prev => {
            const currentDays = prev.dosage.daysOfWeek;
            const newDays = currentDays.includes(dayValue)
                ? currentDays.filter(d => d !== dayValue)
                : [...currentDays, dayValue].sort();

            return {
                ...prev,
                dosage: {
                    ...prev.dosage,
                    daysOfWeek: newDays
                }
            };
        });
    };

    const handleSpecificTimeChange = (index, value) => {
        setMedicineFormData(prev => {
            const newTimes = [...prev.dosage.specificTimes];
            newTimes[index] = value;
            return {
                ...prev,
                dosage: {
                    ...prev.dosage,
                    specificTimes: newTimes
                }
            };
        });
    };

    const addSpecificTime = () => {
        setMedicineFormData(prev => ({
            ...prev,
            dosage: {
                ...prev.dosage,
                specificTimes: [...prev.dosage.specificTimes, "08:00"]
            }
        }));
    };

    const removeSpecificTime = (index) => {
        setMedicineFormData(prev => ({
            ...prev,
            dosage: {
                ...prev.dosage,
                specificTimes: prev.dosage.specificTimes.filter((_, i) => i !== index)
            }
        }));
    };

    const openMedicineModal = (index = null) => {
        if (index !== null) {
            setMedicineFormData(formData.medications[index]);
            setActiveMedicineIndex(index);
        } else {
            setMedicineFormData({
                name: "",
                genericName: "",
                strength: "",
                form: "",
                dosage: {
                    amount: 1,
                    unit: "tablet",
                    frequency: "once daily",
                    timesPerDay: 1,
                    specificTimes: ["08:00"],
                    daysOfWeek: [1, 2, 3, 4, 5, 6, 7],
                    instructions: ""
                },
                status: "active",
                hasStock: true,
                startDate: new Date().toISOString().split('T')[0],
                endDate: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split('T')[0]
            });
            setActiveMedicineIndex(null);
        }
        setShowMedicineModal(true);
    };

    const addMedicine = async () => {
        if (!medicineFormData.name || !medicineFormData.strength) {
            alert("Veuillez remplir au moins le nom et la force du médicament");
            return;
        }

        const newMedicine = { ...medicineFormData, prescriptionId: prescriptionId };
        const result = await saveMedicine(prescriptionId, newMedicine);

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

    const removeMedicine = (index) => {
        setFormData(prev => ({
            ...prev,
            medications: prev.medications.filter((_, i) => i !== index)
        }));
    };
    return (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl w-full container max-h-[90vh] overflow-y-auto">
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

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                En stock
                            </label>
                            <div className="flex items-center h-[42px]">
                                <input
                                    type="checkbox"
                                    name="hasStock"
                                    checked={medicineFormData.hasStock}
                                    onChange={handleMedicineInputChange}
                                    className="w-5 h-5 text-[#6A5CFF] rounded"
                                />
                                <span className="ml-2 text-sm text-gray-600">Disponible</span>
                            </div>
                        </div>
                    </div>

                    {/* Dosage Information */}
                    <div className="border-t pt-4">
                        <h5 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                            <Clock size={16} /> Posologie
                        </h5>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                    placeholder="Ex: tablet, ml"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A5CFF] focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
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

                        <div className="mt-4 hidden">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Jours de la semaine
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {daysOfWeekOptions.map((day, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => handleDaysOfWeekChange(day.value)}
                                        className={`px-3 py-1 rounded-lg text-sm ${medicineFormData.dosage.daysOfWeek.includes(day.value)
                                            ? 'bg-[#6A5CFF] text-white'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                            }`}
                                    >
                                        {day.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Heures spécifiques(Hour (0-23))
                                </label>
                                <button
                                    type="button"
                                    onClick={addSpecificTime}
                                    className="text-sm text-[#6A5CFF] hover:text-[#4DA2FF] flex items-center gap-1"
                                >
                                    <Plus size={14} /> Ajouter une heure
                                </button>
                            </div>
                            <div className="space-y-2 flex gap-4">
                                {medicineFormData.dosage.specificTimes.map((time, index) => (
                                    <div key={index} className="flex gap-2">
                                        <input
                                            type="number"
                                            min="0"
                                            max="23"
                                            value={time.split(':')[0] || ''}
                                            onChange={(e) => handleSpecificTimeChange(index, e.target.value)}
                                            className="w-20 px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A5CFF] focus:border-transparent text-center"
                                            placeholder="08"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeSpecificTime(index)}
                                            className="px-3 py-2 bg-red-100 text-red-600 rounded-xl hover:bg-red-200"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                ))}

                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Instructions
                            </label>
                            <textarea
                                name="dosage.instructions"
                                value={medicineFormData.dosage.instructions}
                                onChange={handleMedicineInputChange}
                                placeholder="Ex: Take after meals, with plenty of water"
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
                                Total Days
                            </label>
                            <input
                                type="number"
                                name="totalDays"
                                value={medicineFormData.totalDays}
                                onChange={handleMedicineInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A5CFF] focus:border-transparent"
                            />
                        </div>
                    </div>

                    {/* Medicine Form Buttons */}
                    <div className="flex gap-3 pt-6 border-t">
                        <button
                            type="button"
                            onClick={closeMedicineModal}
                            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                        >
                            Annuler
                        </button>
                        {activeMedicineIndex ? (
                            <button
                                type="button"
                                onClick={updateMedicine}
                                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors"
                            >
                                Mettre à jour
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={addMedicine}
                                className="flex-1 px-4 py-2 bg-gradient-to-r from-[#6A5CFF] to-[#4DA2FF] text-white rounded-xl hover:opacity-90 transition-opacity"
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
