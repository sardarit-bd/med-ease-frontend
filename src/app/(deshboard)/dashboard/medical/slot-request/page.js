'use client'


import { AlertCircle, Calendar, FileText, Info, Upload, User } from 'lucide-react';
import { useState } from 'react';


export default function OperatingRoomRequest() {
    const [formData, setFormData] = useState({
        establishment: '',
        surgeon: '',
        interventionType: '',
        ccamCode: '',
        duration: '',
        materials: '',
        priority: '',
        desiredDate: '',
        anesthesiaType: '',
        additionalInfo: ''
    });

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert('Demande envoyée avec succès!');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                        Demande de créneau opératoire
                    </h1>
                    <p className="text-sm text-gray-600">
                        Remplissez le formulaire ci-dessous pour demander un créneau au bloc opératoire
                    </p>
                </div>

                {/* Info Banner */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-800">
                        <span className="font-semibold">Information importante</span>
                        <p className="mt-1">
                            Les demandes urgentes doivent être validées par le directeur des opérations.
                            Pour les demandes programmées, compter un délai de validation de 24-48h.
                        </p>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    {/* Informations du demandeur */}
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center gap-2 mb-4">
                            <User className="w-5 h-5 text-gray-600" />
                            <h2 className="text-lg font-semibold text-gray-900">
                                Informations du demandeur
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Établissement demandeur <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="establishment"
                                    value={formData.establishment}
                                    onChange={handleChange}
                                    placeholder="CHU Saint-Louis"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Chirurgien <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="surgeon"
                                    value={formData.surgeon}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                >
                                    <option value="">Sélectionner un chirurgien</option>
                                    <option value="dr-martin">Dr. Martin</option>
                                    <option value="dr-dubois">Dr. Dubois</option>
                                    <option value="dr-bernard">Dr. Bernard</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Détails de l'intervention */}
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center gap-2 mb-4">
                            <FileText className="w-5 h-5 text-gray-600" />
                            <h2 className="text-lg font-semibold text-gray-900">
                                Détails de l'intervention
                            </h2>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Type d'intervention <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="interventionType"
                                    value={formData.interventionType}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                >
                                    <option value="">ex: Appendicectomie, Prothèse de hanche...</option>
                                    <option value="appendicectomie">Appendicectomie</option>
                                    <option value="prothese-hanche">Prothèse de hanche</option>
                                    <option value="cesarienne">Césarienne</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                        Code CCAM
                                    </label>
                                    <input
                                        type="text"
                                        name="ccamCode"
                                        value={formData.ccamCode}
                                        onChange={handleChange}
                                        placeholder="HFCA001"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                        Durée prévue <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="duration"
                                        value={formData.duration}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    >
                                        <option value="">Sélectionner</option>
                                        <option value="30min">30 minutes</option>
                                        <option value="1h">1 heure</option>
                                        <option value="2h">2 heures</option>
                                        <option value="3h">3 heures</option>
                                        <option value="4h+">4 heures ou plus</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Matériel requis
                                </label>
                                <textarea
                                    name="materials"
                                    value={formData.materials}
                                    onChange={handleChange}
                                    placeholder="Spécifier le matériel spécifique nécessaire..."
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Planning */}
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center gap-2 mb-4">
                            <Calendar className="w-5 h-5 text-gray-600" />
                            <h2 className="text-lg font-semibold text-gray-900">Planning</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                        Priorité / Urgence <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="priority"
                                        value={formData.priority}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    >
                                        <option value="">Normal / Programmé</option>
                                        <option value="normal">Normal</option>
                                        <option value="urgent">Urgent</option>
                                        <option value="emergency">Urgence vitale</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                        Date souhaitée <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        name="desiredDate"
                                        value={formData.desiredDate}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Type d'anesthésie <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="anesthesiaType"
                                    value={formData.anesthesiaType}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                >
                                    <option value="">Sélectionner</option>
                                    <option value="generale">Anesthésie générale</option>
                                    <option value="locale">Anesthésie locale</option>
                                    <option value="loco-regionale">Anesthésie loco-régionale</option>
                                    <option value="sedation">Sédation</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Informations complémentaires */}
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center gap-2 mb-4">
                            <AlertCircle className="w-5 h-5 text-gray-600" />
                            <h2 className="text-lg font-semibold text-gray-900">
                                Informations complémentaires
                            </h2>
                        </div>
                        <textarea
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                            placeholder="Précisions, particularités du patient, contre-indications..."
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        />
                    </div>

                    {/* Documents joints */}
                    <div className="p-6">
                        <h2 className="text-sm font-semibold text-gray-900 mb-4">
                            Documents joints
                        </h2>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                            <p className="text-sm font-medium text-gray-700 mb-1">
                                Glissez-déposez vos fichiers ici
                            </p>
                            <p className="text-xs text-gray-500 mb-3">
                                ou cliquez pour parcourir
                            </p>
                            <p className="text-xs text-gray-400">
                                PDF, Image, Max 10 MB
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="p-6 bg-gray-50 rounded-b-lg flex justify-end gap-3">
                        <button
                            type="button"
                            className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                        >
                            Annuler
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="px-6 py-2.5 text-sm font-medium text-white bg-blue-400 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Envoyer la demande
                        </button>
                    </div>
                </div>

                {/* Footer Support */}
                <div className="mt-6 flex items-start gap-3 text-sm">
                    <div className="w-10 h-10 bg-purple-100 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 font-bold text-lg">S</span>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900">
                            Support24/7 (optionnel)
                        </p>
                        <p className="text-gray-600 text-xs mt-0.5">
                            Aide ou si suite d'intervention, besoin support 24/7 VISA, Mastercard Visa Secure
                        </p>
                        <a href="#" className="text-blue-600 text-xs hover:underline mt-1 inline-block">
                            Activer cette option
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}