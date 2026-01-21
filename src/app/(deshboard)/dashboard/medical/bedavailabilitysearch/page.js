'use client'


import { Bed, ChevronRight, Clock, Filter, MapPin, Search, Star } from 'lucide-react';
import { useState } from 'react';

export default function BedAvailabilitySearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [bedCount, setBedCount] = useState('');
    const [viewMode, setViewMode] = useState('distance');

    const facilities = [
        {
            name: "CHU Saint-Louis",
            tag: "CHU",
            rating: 4.7,
            distance: "2.3 km",
            available: "Immédiat",
            beds: 22,
            services: ["Médecine", "Chirurgie", "Réanimation"],
            bedTypes: ["Standard", "Double", "Isolement"],
            sector: "Secteur 1",
            price: null
        },
        {
            name: "Clinique du Val d'Or",
            tag: "Hôpital Privé",
            rating: 4.3,
            distance: "3.8 km",
            available: "Immédiat",
            beds: 15,
            services: ["Chirurgie", "Maternité"],
            bedTypes: ["Standard", "Chambre individuelle"],
            sector: null,
            price: "À partir de 100€/jour"
        },
        {
            name: "Hôpital Européen Georges Pompidou",
            tag: "CHU",
            rating: 4.6,
            distance: "4.2 km",
            available: "Immédiat",
            beds: 31,
            services: ["Cardiologie", "Chirurgie cardiaque", "Néphrologie"],
            bedTypes: ["Standard", "USI", "Réanimation"],
            sector: "Secteur 1",
            price: null
        },
        {
            name: "Centre de Rééducation La Source",
            tag: "SSR",
            rating: 4.3,
            distance: "7.4 km",
            available: "Dans 2h",
            beds: 42,
            services: ["Rééducation", "Gériatrie"],
            bedTypes: ["Standard", "Double"],
            sector: null,
            price: "À partir de 95€/jour"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white text-gray-900 px-4 py-6 rounded-lg border border-gray-200">
                <div className="w-full">
                    <h1 className="text-2xl font-semibold mb-6">Recherche de lits disponibles</h1>

                    {/* Search Form */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Spécialité / Service"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full border border-gray-200 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-300"
                            />
                        </div>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Localisation (ville, code postal...)"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full border border-gray-200 pl-10 pr-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-300"
                            />
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Nombre de lits"
                                value={bedCount}
                                onChange={(e) => setBedCount(e.target.value)}
                                className="flex-1 border border-gray-200 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-300"
                            />
                            <button className="px-6 py-3 bg-sky-600 text-white rounded-md font-medium transition-colors flex items-center gap-2">
                                <Search className="w-5 h-5" />
                                Rechercher
                            </button>
                        </div>
                    </div>

                    {/* Filters */}
                    <button className="mt-4 text-sm flex items-center gap-2 text-sky-600 hover:text-white transition-colors">
                        <Filter className="w-4 h-4" />
                        Filtres avancés
                    </button>
                </div>
            </div>

            {/* Results */}
            <div className="w-full py-6">
                {/* Results Header */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
                    <div className="text-gray-700">
                        <span className="font-semibold">{facilities.length} établissements</span> avec lits disponibles
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setViewMode('distance')}
                            className={`px-4 py-2 text-sm rounded-md transition-colors ${viewMode === 'distance'
                                ? 'bg-sky-600 text-white'
                                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                        >
                            Tri: Distance
                        </button>
                        <button
                            onClick={() => setViewMode('map')}
                            className={`px-4 py-2 text-sm rounded-md transition-colors ${viewMode === 'map'
                                ? 'bg-sky-600 text-white'
                                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                        >
                            Vue carte
                        </button>
                    </div>
                </div>

                {/* Facility Cards */}
                <div className="space-y-4">
                    {facilities.map((facility, index) => (
                        <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                            {/* Header */}
                            <div className="flex flex-col md:flex-row gap-3 items-start justify-between mb-4">
                                <div className="flex-1 w-full">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {facility.name}
                                        </h3>
                                        <span className="px-2 py-1 bg-sky-200 text-teal-700 text-xs font-medium rounded">
                                            {facility.tag}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-gray-600 w-full">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                            <span className="font-medium">{facility.rating}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            <span>{facility.distance}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>Disponible {facility.available}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-2 text-teal-600 font-semibold text-2xl">
                                        <Bed className="w-6 h-6" />
                                        {facility.beds}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">lits disponibles</div>
                                </div>
                            </div>

                            {/* Services */}
                            <div className="mb-3">
                                <div className="text-xs font-medium text-gray-700 mb-2">Services disponibles:</div>
                                <div className="flex flex-wrap gap-2">
                                    {facility.services.map((service, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bed Types */}
                            <div className="mb-4">
                                <div className="text-xs font-medium text-gray-700 mb-2">Types de chambres:</div>
                                <div className="flex flex-wrap gap-2">
                                    {facility.bedTypes.map((type, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-teal-50 text-teal-700 text-xs rounded-full border border-teal-200"
                                        >
                                            {type}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                <div className="text-sm text-gray-700">
                                    {facility.sector && (
                                        <span className="flex items-center gap-1">
                                            <span className="text-teal-600">€</span>
                                            {facility.sector}
                                        </span>
                                    )}
                                    {facility.price && (
                                        <span className="flex items-center gap-1 text-gray-600">
                                            <span className="text-teal-600">€</span>
                                            {facility.price}
                                        </span>
                                    )}
                                </div>
                                <button className="px-6 py-2 text-sm font-medium text-teal-600 border border-teal-600 rounded-md hover:bg-teal-50 transition-colors flex items-center gap-2">
                                    Voir détails
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}