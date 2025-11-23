'use client'


import { CheckCircle, Clock, MapPin, Navigation, Phone, User } from 'lucide-react';
import { useState } from 'react';
import { CiFilter } from "react-icons/ci";

export default function TransportRequests() {
    const [activeTab, setActiveTab] = useState('tous');

    const tabs = [
        { id: 'tous', label: 'Tous les types' },
        { id: 'urgents', label: 'Trajets en urgence' },
        { id: 'planifies', label: 'Trajets planifiés' }
    ];

    const requests = [
        {
            patient: "DUPONT Jean, 67 ans",
            patientType: "Consultation cardiologie",
            departure: "18 Rue de la Paix, 75002 Paris",
            arrival: "CHU Saint-Louis, 1 Avenue Claude Vellefaux, 75010 Paris",
            distance: "8.22km",
            duration: "16 min",
            hospital: "CHU Saint-Louis",
            services: ["VSL", "Urgence", "TPMR"],
            status: "Normal",
            statusColor: "blue",
            ambulance: "Ambulance",
            time: "Déposé il y a 2h30",
            phone: "06 12 34 56 78"
        },
        {
            patient: "MARTIN Sophie, 45 ans",
            patientType: "Retour domicile post-opératoire",
            departure: "Clinique du Val, 3 Rue de Val-de-Grâce, 75013 Paris",
            arrival: "25 Avenue des Champs-Élysées, 75008 Paris",
            distance: "0.45km",
            duration: "19 min",
            hospital: "Clinique du Val",
            services: ["PM", "Civière", "Tolérance"],
            status: "Normal",
            statusColor: "blue",
            ambulance: "Oui",
            time: "Aujourd'hui à 14:30",
            phone: "02 23 45 67 89"
        },
        {
            patient: "BERNARD Paul, 83 ans",
            patientType: "Transfert inter-établissement",
            departure: "Hôpital Lariboisière, 2 Rue Ambroise Paré, 75010 Paris",
            arrival: "Centre de rééducation La Source, 12 Rue de la Santé, 75014 Paris",
            distance: "0.82km",
            duration: "22.8 km",
            hospital: "Hôpital Lariboisière",
            services: ["PM", "Urgence", "Civière"],
            status: "Urgent",
            statusColor: "red",
            ambulance: "Ambulance",
            time: "Urgent - Départ possible",
            phone: "06 34 56 78 90"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="px-3">
                <div className="w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                            Demandes de transport disponibles
                        </h1>
                        <span className="px-3 py-1.5 bg-orange-100 text-orange-700 text-sm font-semibold rounded w-fit">
                            5 demandes à traiter
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-full p-3">
                {/* Tabs and Filter */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 bg-white px-3 py-3 rounded-md border-gray-200 border shadow-xs">
                    <div className="flex gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 items-center scrollbar-hide">
                        <CiFilter className='text-2xl text-gray-600' />
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${activeTab === tab.id
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <button className="hidden sm:block px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                        Tri: Plus récent
                    </button>
                </div>

                {/* Request Cards */}
                <div className="space-y-4">
                    {requests.map((request, index) => (
                        <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            {/* Card Header */}
                            <div className="p-4 sm:p-5">
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <User className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className='flex items-center gap-3'>
                                                <h3 className="text-normal sm:text-lg font-bold text-gray-700 mb-0.5">
                                                    {request.patient}
                                                </h3>
                                                <span className='bg-gray-200 px-2 py-1 rounded-md text-gray-600 font-normal'>REZ-2501</span>
                                            </div>
                                            <p className="text-xs sm:text-sm text-gray-500">{request.patientType}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                                        <span className={`px-2.5 py-1 text-xs font-semibold rounded whitespace-nowrap ${request.statusColor === 'blue'
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'bg-red-100 text-red-700'
                                            }`}>
                                            {request.status}
                                        </span>
                                        <span className="px-2.5 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded whitespace-nowrap">
                                            {request.ambulance}
                                        </span>
                                    </div>
                                </div>

                                {/* Locations with connecting line */}
                                <div className="relative pl-8 space-y-6 my-6">
                                    {/* Vertical connecting line */}
                                    <div className="absolute left-3 top-8 bottom-8 w-0.5 bg-gray-300"></div>

                                    <div className="relative">
                                        <div className="absolute -left-8 top-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                            <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                                                <MapPin className="w-3 h-3" />
                                                Départ
                                            </div>
                                            <div className="text-sm font-medium text-gray-900">
                                                {request.departure}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute -left-8 top-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                                            <MapPin className="w-3.5 h-3.5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                                                <MapPin className="w-3 h-3" />
                                                Arrivée
                                            </div>
                                            <div className="text-sm font-medium text-gray-900">
                                                {request.arrival}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Info Grid */}
                                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4 mb-4">
                                        <div>
                                            <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-1">
                                                <Navigation className="w-3.5 h-3.5" />
                                                <span>Urgence - Distance prévue</span>
                                            </div>
                                            <div className="text-base font-bold text-gray-900">{request.distance}</div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-1">
                                                <Clock className="w-3.5 h-3.5" />
                                                <span>Durée estimée</span>
                                            </div>
                                            <div className="text-base font-bold text-gray-900">{request.duration}</div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-1">
                                                <Clock className="w-3.5 h-3.5" />
                                                <span>Durée estimée</span>
                                            </div>
                                            <div className="text-base font-bold text-gray-900">{request.duration}</div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-1">
                                                <MapPin className="w-3.5 h-3.5" />
                                                <span>ÉTABLISSEMENT D'ARR</span>
                                            </div>
                                            <div className="text-base font-bold text-gray-900">{request.hospital}</div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-xs text-gray-600 mb-2">Prestations demandées</div>
                                        <div className="flex flex-wrap gap-2">
                                            {request.services.map((service, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-white text-teal-700 text-xs font-medium rounded border border-teal-200"
                                                >
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Time info */}
                                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>{request.time}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <User className="w-3.5 h-3.5" />
                                        <span>Accompagnant médical</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card Footer - Actions */}
                            <div className="px-4 sm:px-5 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg">
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                    <button className="px-6 py-2.5 bg-sky-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                                        <CheckCircle className="w-4 h-4" />
                                        Accepter la demande
                                    </button>
                                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                                        <button className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-gray-900 font-medium">
                                            <Navigation className="w-4 h-4" />
                                            Voir l'itinéraire
                                        </button>
                                        <button className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-gray-900 font-medium">
                                            <Phone className="w-4 h-4" />
                                            {request.phone}
                                        </button>
                                        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                                            Ajouter établissement
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}