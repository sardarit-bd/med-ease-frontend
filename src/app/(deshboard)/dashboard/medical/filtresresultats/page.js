'use client';

import { FaAmbulance, FaBed, FaHospital } from 'react-icons/fa';
import { FaEarthAmericas } from 'react-icons/fa6';
import { FiFilter, FiLayers, FiMapPin, FiSearch, FiSliders, FiStar, FiX } from 'react-icons/fi';

const establishments = [
    {
        id: 1,
        name: 'CHU Saint-Louis',
        type: 'CHU',
        beds: '22 lits',
        or: 'Bloc',
        rating: 4.7,
        distance: '0.5 km',
    },
    {
        id: 2,
        name: 'Hôpital Lariboisière',
        type: 'Hôpital',
        beds: '28 lits',
        or: 'Bloc',
        rating: 4.6,
        distance: '0.8 km',
    },
    {
        id: 3,
        name: 'Clinique du Val',
        type: 'Clinique',
        beds: '15 lits',
        or: 'Bloc',
        rating: 4.8,
        distance: '1.2 km',
    },
    {
        id: 4,
        name: 'Centre Rééducation',
        type: 'SMR',
        beds: '12 lits',
        or: 'Bloc',
        rating: 4.3,
        distance: '1.9 km',
    },
    {
        id: 5,
        name: 'Hôpital Européen',
        type: 'Hôpital',
        beds: '31 lits',
        or: 'Bloc',
        rating: 4.6,
        distance: '2.3 km',
    },
];

const filtresresultats = () => {
    return (
        <main className="min-h-screen bg-[#F5F7FB] shadow-sm rounded-md">
            {/* Top bar (optional) */}
            <div className="border-b border-gray-200 bg-white rounded-t-md px-4 py-3 md:px-6 lg:px-8">
                <h1 className="text-sm font-semibold text-gray-800 md:text-base">
                    Carte des établissements
                </h1>
                <p className="text-xs text-gray-500">
                    Visualisez les lits disponibles, blocs opératoires et transports.
                </p>
            </div>

            {/* Content: sidebar + map */}
            <div className="flex min-h-[calc(100vh-64px)] flex-col md:flex-row">
                {/* LEFT SIDEBAR */}
                <aside className="w-full bg-white px-3 py-3 shadow-md md:w-80 lg:w-96 md:px-4 md:py-4">
                    {/* Header */}
                    <div className="mb-3 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold text-gray-800">Filtres & Résultats</p>
                        </div>
                        <button className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50">
                            <FiX className="text-sm" />
                        </button>
                    </div>

                    {/* Search */}
                    <div className="mb-4 flex items-center gap-2 rounded-lg border border-gray-200 bg-[#F8FAFF] px-3 py-2">
                        <FiSearch className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="w-full bg-transparent text-xs outline-none placeholder:text-gray-400"
                        />
                    </div>

                    {/* Layers */}
                    <div className="mb-4">
                        <div className="mb-2 flex items-center justify-between text-xs font-semibold text-gray-700">
                            <span className="flex items-center gap-1">
                                <FiLayers className="text-gray-500" />
                                Couches à afficher
                            </span>
                        </div>

                        <div className="space-y-2 text-xs text-gray-700">
                            <button className="flex w-full items-center justify-between rounded-lg border border-[var(--primary)] bg-[var(--secondary-transparent)] px-3 py-2 text-[11px] font-medium text-[var(--primary)]">
                                <span className="flex items-center gap-2">
                                    <FaEarthAmericas className='w-4 h-4' />
                                    Tout afficher
                                </span>
                            </button>

                            <button className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-[11px]">
                                <span className="flex items-center gap-2">
                                    <FaBed className='w-4 h-4' />
                                    Lits disponibles
                                </span>
                            </button>

                            <button className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-[11px]">
                                <span className="flex items-center gap-2">
                                    <FaHospital className='w-4 h-4' />
                                    Bloc opératoire
                                </span>
                            </button>

                            <button className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-[11px]">
                                <span className="flex items-center gap-2">
                                    <FaAmbulance className='w-4 h-4' />
                                    Transports
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Advanced filters */}
                    <div className="mb-4 border-t border-gray-100 pt-3">
                        <div className="mb-2 flex items-center gap-1 text-xs font-semibold text-gray-700">
                            <FiSliders className="text-gray-500" />
                            Filtres avancés
                        </div>

                        {/* Type */}
                        <div className="mb-3">
                            <label className="mb-1 block text-[11px] text-gray-500">
                                Type d’établissement
                            </label>
                            <button className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-[#F8FAFF] px-3 py-2 text-[11px] text-gray-700">
                                Tous
                                <span className="text-gray-400">▼</span>
                            </button>
                        </div>

                        {/* Spécialité */}
                        <div className="mb-3">
                            <label className="mb-1 block text-[11px] text-gray-500">Spécialité</label>
                            <button className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-[#F8FAFF] px-3 py-2 text-[11px] text-gray-700">
                                Toutes
                                <span className="text-gray-400">▼</span>
                            </button>
                        </div>

                        {/* Distance slider */}
                        <div className="mb-1 flex items-center justify-between text-[11px] text-gray-500">
                            <span>Distance maximale</span>
                            <span>20 km</span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="20"
                            defaultValue="10"
                            className="w-full accent-[var(--primary)]"
                        />
                    </div>

                    {/* Establishment list */}
                    <div className="mt-2">
                        <p className="mb-2 text-xs font-semibold text-gray-700">
                            5 établissements
                        </p>

                        <div className="space-y-2">
                            {establishments.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`rounded-xl border bg-[#F8FAFF] px-3 py-2 text-xs shadow-sm ${index === 0 ? 'border-[var(--primary)]' : 'border-gray-100'
                                        }`}
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="text-[11px] font-semibold text-gray-800">
                                                {item.name}
                                            </p>
                                            <p className="text-[11px] text-gray-500">{item.type}</p>
                                        </div>
                                        <div className="flex flex-col items-end text-[11px] text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <FiStar className="text-amber-400" />
                                                <span className="text-[11px] font-semibold text-gray-800">
                                                    {item.rating.toFixed(1)}
                                                </span>
                                            </div>
                                            <span>{item.distance}</span>
                                        </div>
                                    </div>

                                    <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] text-gray-600">
                                        <span className="flex items-center gap-1">
                                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                            {item.beds}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <span className="h-2 w-2 rounded-full bg-sky-500" />
                                            {item.or}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* RIGHT MAP AREA */}
                <section className="relative flex-1">
                    {/* Map toolbar (top-right, optional) */}
                    <div className="pointer-events-none absolute right-3 top-3 z-10 flex gap-2">
                        <button className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md">
                            <FiSearch className="text-gray-500" />
                        </button>
                        <button className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md">
                            <FiFilter className="text-gray-500" />
                        </button>
                        <button className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md">
                            <FiMapPin className="text-gray-500" />
                        </button>
                    </div>

                    {/* Static Google Map iframe */}
                    <div className="h-[70vh] w-full md:h-full">
                        <iframe
                            title="Paris Hospital Map"
                            className="h-full w-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999204845814!2d2.292292615674017!3d48.8583730792877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc7e33f08b5%3A0x50b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1700000000000"
                        />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default filtresresultats;
