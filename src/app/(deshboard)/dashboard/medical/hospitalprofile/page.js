
'use client'

import { Award, Bed, Camera, Car, Clock, FileText, Globe, Info, MapPin, MessageCircle, Phone, Share2, Star, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function HospitalProfile() {
    const [activeTab, setActiveTab] = useState('presentation');

    const tabs = [
        { id: 'presentation', label: 'Présentation' },
        { id: 'services', label: 'Services & Soins' },
        { id: 'capacites', label: 'Capacités' },
        { id: 'qualite', label: 'Avis & Qualité' }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Image */}
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 bg-gray-200">
                <Image
                    src="/images/hospitalcover.png"
                    alt="CHU Saint-Louis"
                    className="w-full h-full object-cover"
                    width={1000}
                    height={1000}
                />
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-6 flex gap-2">
                    <button className="px-3 sm:px-4 py-2 bg-white rounded-md text-xs sm:text-sm font-medium shadow-md flex items-center gap-2 hover:bg-gray-50 border border-gray-200">
                        <Camera className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Photos (24)</span>
                    </button>
                    <button className="px-3 sm:px-4 py-2 bg-white rounded-md text-xs sm:text-sm font-medium shadow-md flex items-center gap-2 hover:bg-gray-50 border border-gray-200">
                        <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Visite 360°</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header Card */}
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6 -mt-8 sm:-mt-12 md:-mt-16 relative z-10 mb-4 sm:mb-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">CHU Saint-Louis</h1>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded w-fit">
                                    CHU
                                </span>
                            </div>
                            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                                Centre Hospitalier Universitaire - Cardiologie, Chirurgie Cardiaque, Oncologie
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                                <div className="flex items-center gap-2">
                                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                    <span className="font-semibold">4.7</span>
                                    <span>(258 avis)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 flex-shrink-0" />
                                    <span className="truncate">1 Avenue Claude Vellefaux, 75010 Paris</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 flex-shrink-0" />
                                    <span>01 42 49 49 49</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                                <div className="flex items-center gap-2 text-emerald-600 text-xs sm:text-sm">
                                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="font-medium">Certification HAS</span>
                                </div>
                                <div className="flex items-center gap-2 text-blue-600 text-xs sm:text-sm">
                                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="font-medium">ISO 9001</span>
                                </div>
                                <div className="flex items-center gap-2 text-purple-600 text-xs sm:text-sm">
                                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="font-medium">Label Excellence</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full lg:w-auto">
                            <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-sky-500 text-white rounded-md text-sm font-medium hover:bg-sky-600 transition-colors flex items-center justify-center gap-2">
                                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="text-xs sm:text-sm">Demander créneau/rendez-vous</span>
                            </button>
                            <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                Voir les disponibilités
                            </button>
                            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 flex items-center gap-2 justify-center text-sm">
                                <Share2 className="w-4 h-4" />
                                Partager
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 text-center">
                        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg mb-2 sm:mb-3">
                            <Bed className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">22</div>
                        <div className="text-xs sm:text-sm text-gray-600">lits disponibles</div>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 text-center">
                        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg mb-2 sm:mb-3">
                            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">8</div>
                        <div className="text-xs sm:text-sm text-gray-600">Salles de bloc opératoire</div>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 text-center">
                        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg mb-2 sm:mb-3">
                            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">24/7</div>
                        <div className="text-xs sm:text-sm text-gray-600">Urgences</div>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 text-center">
                        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg mb-2 sm:mb-3">
                            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">15min</div>
                        <div className="text-xs sm:text-sm text-gray-600">Temps d'attente moyen</div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-t-lg border-t border-x border-gray-200">
                    <div className="flex overflow-x-auto border-b border-gray-200 scrollbar-hide">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.id
                                    ? 'border-blue-600 text-blue-600'
                                    : 'border-transparent text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-b-lg border-x border-b border-gray-200 p-4 sm:p-6 mb-6 sm:mb-8">
                    {activeTab === 'presentation' && (
                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">À propos</h2>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                                Le CHU Saint-Louis est un établissement de santé publique de premier plan situé au cœur de Paris. Spécialisé en hématologie, oncologie et maladies infectieuses, il dispose également d'un service de cardiologie réputé et d'un bloc opératoire de pointe. Notre établissement accueille plus de 50 000 patients par an et compte 350 lits répartis sur différents services.
                            </p>

                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Spécialités</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                                {['Cardiologie', 'Chirurgie cardiaque', 'Oncologie', 'Hématologie', 'Maladies infectieuses', 'Dermatologie'].map((spec, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                                        <span className="text-sm sm:text-base text-gray-700">{spec}</span>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Informations pratiques</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="text-sm sm:text-base font-medium text-gray-900 mb-1">Horaires</div>
                                            <div className="text-xs sm:text-sm text-gray-600">
                                                Urgences 24/7<br />
                                                Consultations 8h-18h
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Car className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="text-sm sm:text-base font-medium text-gray-900 mb-1">Parking</div>
                                            <div className="text-xs sm:text-sm text-gray-600">
                                                200 places<br />
                                                5€ / heure<br />
                                                Tarif nuit réduit
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Info className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="text-sm sm:text-base font-medium text-gray-900 mb-1">Accessibilité</div>
                                            <div className="text-xs sm:text-sm text-gray-600">
                                                PMR<br />
                                                Ascenseurs<br />
                                                Interprètes
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Globe className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="text-sm sm:text-base font-medium text-gray-900 mb-1">Site web</div>
                                            <a href="#" className="text-xs sm:text-sm text-blue-600 hover:underline break-all">
                                                www.chu-stlouis.fr
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab !== 'presentation' && (
                        <div className="text-center py-8 sm:py-12 text-gray-500 text-sm sm:text-base">
                            Contenu de l'onglet {tabs.find(t => t.id === activeTab)?.label}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}