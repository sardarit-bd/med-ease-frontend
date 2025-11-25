'use client';

import { Bed, CalendarDays } from 'lucide-react';
import Image from 'next/image';
import {
    FiChevronDown,
    FiFilter,
    FiMap,
    FiMapPin,
    FiSearch,
    FiStar
} from 'react-icons/fi';

// ⭐ JS এ type বা interface থাকে না → এগুলো সরানো হয়েছে

const specialtyChips = [
    'Consultations',
    'Chirurgie',
    'Maternité',
    'Cardiologie',
    'Pédiatrie',
    'Gériatrie',
    'Dermatologie',
    'Radiologie',
];

const categoryFilters = ['Établissements', 'Professionnels', 'Cabinets'];

const results = [
    {
        id: 1,
        name: 'CHU Saint-Louis',
        type: 'etablissement',
        typeLabel: 'Établissement',
        speciality: 'Cardiologie',
        image: '/images/offredesoins-1.png',
        tags: ['Urgences 24h/24', 'Bloc opératoire', 'Réanimation'],
        nextSlotLabel: '15 lits disponibles',
        nextSlotColor: 'red',
        priceLabel: 'À partir de 95€',
        rating: 4.7,
        reviews: 1526,
        distance: '0.52 km',
        icon: <Bed className='w-4 h-4 text-red-500' />,
    },
    {
        id: 2,
        name: 'Dr. Sophie MARTIN',
        type: 'professionnel',
        typeLabel: 'Professionnel',
        speciality: 'Consultation cardiologique + ECG',
        image: '/images/offredesoins-2.png',
        tags: ['Consultation', 'ECG', 'Téléconsultation'],
        nextSlotLabel: '12 créneaux rendez-vous',
        nextSlotColor: 'green',
        priceLabel: 'À partir de 50€',
        rating: 4.8,
        reviews: 1189,
        distance: '0.81 km',
        icon: <CalendarDays className='w-4 h-4 text-green-500' />,
    },
    {
        id: 3,
        name: 'Cabinet Médical Paris Centre',
        type: 'cabinet',
        typeLabel: 'Cabinet',
        speciality: 'Médecine Générale & Soins',
        image: '/images/offredesoins-3.png',
        tags: ['Injections', 'Pansements', 'Suivi diabète'],
        nextSlotLabel: '8 créneaux rendez-vous',
        nextSlotColor: 'green',
        priceLabel: 'À partir de 25€',
        rating: 4.6,
        reviews: 973,
        distance: '1.32 km',
        icon: <CalendarDays className='w-4 h-4 text-green-500' />,
    },
    {
        id: 4,
        name: "Clinique du Val d'Or",
        type: 'etablissement',
        typeLabel: 'Établissement',
        speciality: 'Chirurgie - Esthétique',
        image: '/images/offredesoins-4.png',
        tags: ['Chirurgie', 'Hospitalisation', 'Suivi post-op'],
        nextSlotLabel: '11 lits disponibles',
        nextSlotColor: 'red',
        priceLabel: 'À partir de 120€',
        rating: 4.3,
        reviews: 742,
        distance: '1.54 km',
        icon: <Bed className='w-4 h-4 text-red-500' />,
    },
    {
        id: 5,
        name: 'Dr. Pierre DUBOIS',
        type: 'professionnel',
        typeLabel: 'Professionnel',
        speciality: 'Dermatologue',
        image: '/images/offredesoins-5.png',
        tags: ['Consultation dermatologique'],
        nextSlotLabel: '10 créneaux rendez-vous',
        nextSlotColor: 'green',
        priceLabel: 'À partir de 60€',
        rating: 4.9,
        reviews: 850,
        distance: '2.05 km',
        icon: <CalendarDays className='w-4 h-4 text-green-500' />,
    },
    {
        id: 6,
        name: 'Infirmières à Domicile Paris',
        type: 'cabinet',
        typeLabel: 'Cabinet',
        speciality: 'Soins infirmiers',
        image: '/images/offredesoins-6.png',
        tags: ['Soins à domicile', 'Pansements complexes'],
        nextSlotLabel: '6 créneaux rendez-vous',
        nextSlotColor: 'green',
        priceLabel: 'À partir de 30€',
        rating: 4.5,
        reviews: 430,
        distance: '2.34 km',
        icon: <CalendarDays className='w-4 h-4 text-green-500' />,
    },
];

// ⭐ JS compatible object (Record type removed)
const typeBadgeClasses = {
    etablissement: 'bg-sky-50 text-sky-700',
    professionnel: 'bg-purple-50 text-purple-700',
    cabinet: 'bg-emerald-50 text-emerald-700',
};

const offredesoins = () => {
    return (
        <main className="min-h-screen bg-[#F5F7FB] px-4 py-4 md:px-6 lg:px-8">
            <div className="mx-auto">

                {/* Top search bar */}
                <section className="mb-4 rounded-xl bg-white p-3 shadow-sm md:p-4">
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-center">

                        {/* Search */}
                        <div className="flex flex-1 items-center gap-2 rounded-full border border-gray-200 bg-[#F8FAFF] px-3 py-2">
                            <FiSearch className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Soin, acte, spécialité..."
                                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                            />
                        </div>

                        {/* Location */}
                        <div className="flex w-full items-center gap-2 rounded-full border border-gray-200 bg-[#F8FAFF] px-3 py-2 lg:w-72">
                            <FiMapPin className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Localisation"
                                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                            />
                        </div>

                        {/* Filters + Map */}
                        <div className="flex w-full items-center justify-between gap-2 lg:w-auto">
                            <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gray-200 bg-[#F8FAFF] px-3 py-2 text-xs font-medium text-gray-700">
                                <FiFilter /> Filtres
                            </button>
                            <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700">
                                <FiMap /> Carte
                            </button>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {specialtyChips.map((chip) => (
                            <button
                                key={chip}
                                className="rounded-full border border-gray-200 bg-[#F8FAFF] px-3 py-1 text-xs text-gray-700 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                            >
                                {chip}
                            </button>
                        ))}
                    </div>

                    {/* Category */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {categoryFilters.map((cat, idx) => (
                            <button
                                key={cat}
                                className={`rounded-full border px-3 py-1 text-xs ${idx === 0
                                    ? 'border-[var(--primary)] bg-[var(--secondary-transparent)] text-[var(--primary)]'
                                    : 'border-gray-200 bg-white text-gray-700'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Header */}
                <section className="mb-3 flex flex-col items-start justify-between gap-2 text-sm text-gray-600 md:flex-row md:items-center">
                    <p>
                        <span className="font-semibold">2 établissements</span> •{' '}
                        <span className="font-semibold">2 professionnels</span> •{' '}
                        <span className="font-semibold">2 cabinets</span>
                    </p>

                    <button className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600">
                        Tri: Pertinence <FiChevronDown />
                    </button>
                </section>

                {/* Results */}
                <section className="space-y-3">
                    {results.map((item) => (
                        <article
                            key={item.id}
                            className="flex flex-col gap-3 rounded-xl bg-white p-3 shadow-sm md:flex-row md:p-4"
                        >
                            {/* Thumbnail */}
                            <div className="relative h-32 w-full overflow-hidden rounded-lg md:h-auto md:w-44 lg:w-52">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Middle */}
                            <div className="flex flex-1 flex-col justify-between gap-2">
                                <div>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h2 className="text-sm font-semibold text-gray-800 md:text-base">
                                            {item.name}
                                        </h2>
                                        <span
                                            className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${typeBadgeClasses[item.type]}`}
                                        >
                                            {item.typeLabel}
                                        </span>
                                    </div>

                                    <p className="text-xs text-gray-500 mt-2">{item.speciality}</p>

                                    <div className="mt-3 mb-2 flex flex-wrap gap-2 border-b border-gray-200 pb-2">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full bg-[#F5F7FB] px-2 py-0.5 text-[10px] text-gray-600"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-1 flex flex-wrap items-center gap-3 text-[11px]">
                                    <div className='flex justify-center items-center gap-2'>
                                        <span >{item.icon}</span>
                                        <span
                                            className={`flex items-center gap-1 font-medium ${item.nextSlotColor === 'green'
                                                ? 'text-emerald-600'
                                                : 'text-red-500'
                                                }`}
                                        >
                                            {/* {item.nextSlotColor === 'green' ? '🟢' : '🟥'}{' '} */}
                                            {item.nextSlotLabel}
                                        </span></div>
                                    <span className="text-gray-500">{item.priceLabel}</span>
                                </div>
                            </div>

                            {/* Right */}
                            <div className="flex flex-col items-end justify-between gap-2 md:min-w-[170px]">
                                <div className="flex flex-col items-end gap-1 text-xs text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <FiStar className="text-amber-400" />
                                        <span className="text-sm font-semibold text-gray-800">
                                            {item.rating.toFixed(1)}
                                        </span>
                                        <span className="text-[11px] text-gray-400">
                                            ({item.reviews.toLocaleString('fr-FR')} avis)
                                        </span>
                                    </div>
                                    <span>{item.distance}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button className="flex items-center justify-center rounded-full border border-gray-200 bg-white p-2 text-gray-400 hover:text-[var(--primary)]">
                                        <CalendarDays className="w-4 h-4" />
                                    </button>
                                    <button className="rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-medium text-white">
                                        Voir détails
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>

            </div>
        </main>
    );
};

export default offredesoins;
