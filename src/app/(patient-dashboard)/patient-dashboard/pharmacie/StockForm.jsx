"use client";

import { useStock } from "@/hooks";
import {
    AlertCircle,
    CalendarDays,
    DollarSign,
    Package,
    Plus,
    Scale,
    ShoppingCart
} from "lucide-react";
import { useEffect, useState } from "react";
import { MdStorage } from "react-icons/md";
import { toast } from "react-toastify";

export default function StockForm() {
    const { addStock, fetchDropdownMedicines } = useStock()
    const [dropdownMedicines, setDropdownMedicines] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        medicineId: "",
        quantity: "",
        unit: "",
        purchasedFrom: "",
        expiryDate: "",
        price: "",
        storage: ""
    });

    useEffect(() => {
        async function loadDropdownMedicines() {
            try {
                const dropDown = await fetchDropdownMedicines();
                setDropdownMedicines(dropDown);
            } catch (error) {
                console.error("Failed to load medicines:", error);
            }
        }
        loadDropdownMedicines();
    }, []);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.medicineId) newErrors.medicineId = "Medicine is required";
        if (!formData.quantity || Number(formData.quantity) <= 0) newErrors.quantity = "Valid quantity is required";
        if (!formData.unit) newErrors.unit = "Unit is required";
        if (!formData.expiryDate) newErrors.expiryDate = "Expiry date is required";
        if (!formData.price || Number(formData.price) < 0) newErrors.price = "Valid price is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        setIsLoading(true);
        setErrors({});

        try {
            const payload = {
                ...formData,
                quantity: Number(formData.quantity),
                price: Number(formData.price),
                expiryDate: new Date(formData.expiryDate).toISOString()
            };
            const result = await addStock(payload);

            console.log("Add stock result:", result);
            if (result?.data) {
                toast.success("Stock added successfully!");
                setFormData({
                    medicineId: "",
                    quantity: "",
                    unit: "",
                    purchasedFrom: "",
                    expiryDate: "",
                    price: ""
                });
            } else {
                toast.error("Failed to add stock. Please try again.");
                console.error("Failed to add stock:", result?.error || 'Unknown error');
            }
        } catch (error) {
            console.error("Failed to add stock:", error);
            setErrors({ submit: "Failed to add stock. Please try again." });
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        // Clear field error when user starts typing
        if (errors[field]) {
            setErrors({ ...errors, [field]: "" });
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 mb-10 mx-auto">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                        Add Stock
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                        Add new inventory to your pharmacy stock
                    </p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-xl">
                    <Package className="w-6 h-6 text-indigo-600" />
                </div>
            </div>

            {errors.submit && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-red-800">{errors.submit}</p>
                </div>
            )}

            <div className="space-y-6">
                {/* Medicine Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Package className="w-4 h-4" />
                        Medicine
                    </label>
                    <div className="relative">
                        <select
                            className={`w-full border ${errors.medicineId ? 'border-red-300' : 'border-gray-300'} rounded-xl px-4 py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all appearance-none bg-white`}
                            value={formData.medicineId}
                            onChange={(e) => handleInputChange('medicineId', e.target.value)}
                        >
                            <option value="">Select a medicine</option>
                            {dropdownMedicines.length > 0 && dropdownMedicines.map((med) => (
                                <option key={med.value} value={med.value}>
                                    {med.label}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                            <Package className="w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                    {errors.medicineId && (
                        <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" /> {errors.medicineId}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Quantity */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                            <div className="w-4 h-4">#</div>
                            Quantity
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                min="0"
                                step="1"
                                placeholder="Enter quantity"
                                className={`w-full border ${errors.quantity ? 'border-red-300' : 'border-gray-300'} rounded-xl px-4 py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all`}
                                value={formData.quantity}
                                onChange={(e) => handleInputChange('quantity', e.target.value)}
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                <div className="w-5 h-5 text-gray-400 flex items-center justify-center font-medium">#</div>
                            </div>
                        </div>
                        {errors.quantity && (
                            <p className="mt-1.5 text-sm text-red-600">{errors.quantity}</p>
                        )}
                    </div>

                    {/* Unit */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                            <Scale className="w-4 h-4" />
                            Unit
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="e.g., tablets, bottles, packs"
                                className={`w-full border ${errors.unit ? 'border-red-300' : 'border-gray-300'} rounded-xl px-4 py-3.5 pl-12 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all`}
                                value={formData.unit}
                                onChange={(e) => handleInputChange('unit', e.target.value)}
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                <Scale className="w-5 h-5 text-gray-400" />
                            </div>
                        </div>
                        {errors.unit && (
                            <p className="mt-1.5 text-sm text-red-600">{errors.unit}</p>
                        )}
                    </div>
                </div>

                {/* Purchased From */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                            <ShoppingCart className="w-4 h-4" />
                            Supplier / Purchased From
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Enter supplier name or pharmacy"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3.5 pl-12 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                value={formData.purchasedFrom}
                                onChange={(e) => handleInputChange('purchasedFrom', e.target.value)}
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                <ShoppingCart className="w-5 h-5 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                            <MdStorage className="w-4 h-4" />
                            Storage
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="e.g., Armoire à pharmacie, Fridge"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3.5 pl-12 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                value={formData.storage}
                                onChange={(e) => handleInputChange('storage', e.target.value)}
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                <MdStorage className="w-5 h-5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Expiry Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                            <CalendarDays className="w-4 h-4" />
                            Expiry Date
                        </label>
                        <div className="relative">
                            <input
                                type="date"
                                className={`w-full border ${errors.expiryDate ? 'border-red-300' : 'border-gray-300'} rounded-xl px-4 py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all`}
                                value={formData.expiryDate}
                                onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                                min={new Date().toISOString().split('T')[0]}
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                <CalendarDays className="w-5 h-5 text-gray-400" />
                            </div>
                        </div>
                        {errors.expiryDate && (
                            <p className="mt-1.5 text-sm text-red-600">{errors.expiryDate}</p>
                        )}
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                            <DollarSign className="w-4 h-4" />
                            Price
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                min="0"
                                step="0.01"
                                placeholder="0.00"
                                className={`w-full border ${errors.price ? 'border-red-300' : 'border-gray-300'} rounded-xl px-4 py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all`}
                                value={formData.price}
                                onChange={(e) => handleInputChange('price', e.target.value)}
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                <DollarSign className="w-5 h-5 text-gray-400" />
                            </div>
                        </div>
                        {errors.price && (
                            <p className="mt-1.5 text-sm text-red-600">{errors.price}</p>
                        )}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                    <button
                        className={`w-full ${isLoading ? 'bg-indigo-400' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'} text-white font-medium py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group`}
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Adding to Stock...
                            </>
                        ) : (
                            <>
                                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                                Add to Stock
                            </>
                        )}
                    </button>

                    <p className="text-xs text-gray-400 text-center mt-3">
                        All fields except "Supplier" are required to add new stock
                    </p>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
                
                select {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
                    background-position: right 1rem center;
                    background-repeat: no-repeat;
                    background-size: 1.5em 1.5em;
                    padding-right: 2.5rem;
                }
                
                select:focus {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%234f46e5' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
                }
            `}</style>
        </div>
    );
}