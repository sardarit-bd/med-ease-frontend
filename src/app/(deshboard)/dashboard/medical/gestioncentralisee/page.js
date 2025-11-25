'use client';

import { CiLocationOn } from 'react-icons/ci';
import {
    FiChevronRight,
    FiClock,
    FiPhone,
    FiTruck,
    FiUsers
} from 'react-icons/fi';
import { IoFlashOutline } from 'react-icons/io5';
import { MdDone } from 'react-icons/md';

export default function TransportDashboard() {
    return (
        <main className="min-h-screen bg-[#F5F7FB] px-4 py-4 md:px-6 lg:px-8">
            <div className="">

                {/* --------------------- TOP HEADER ------------------------- */}
                <h1 className="text-xl font-semibold text-gray-900 mb-4">
                    Transport sanitaire - Gestion centralisée
                </h1>

                {/* --------------------- TOP STATS ------------------------- */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {[
                        {
                            title: 'Transports actifs',
                            value: '12',
                            subtitle: 'En cours',
                            icon: <FiTruck className="text-green-600 text-xl" />,
                        },
                        {
                            title: 'Demandes en attente',
                            value: '8',
                            subtitle: 'À assigner',
                            icon: <FiUsers className="text-blue-600 text-xl" />,
                        },
                        {
                            title: 'Équipages disponibles',
                            value: '18',
                            subtitle: '',
                            icon: <FiUsers className="text-orange-500 text-xl" />,
                        },
                        {
                            title: 'Temps moyen',
                            value: '15min',
                            subtitle: 'Prise en charge',
                            icon: <FiClock className="text-indigo-600 text-xl" />,
                        },
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between"
                        >
                            <div>
                                <p className="text-xs text-gray-400">{stat.title}</p>
                                <p className="text-xl font-bold">{stat.value}</p>
                                <p className="text-[11px] text-gray-400">{stat.subtitle}</p>
                            </div>
                            <div className="p-3 rounded-full bg-gray-50">{stat.icon}</div>
                        </div>
                    ))}
                </section>

                {/* --------------------- TRANSPORTS EN COURS ------------------------- */}
                <section className="bg-white rounded-xl shadow-sm mb-6 p-4">
                    <div className="flex justify-between mb-4">
                        <h2 className="text-sm font-semibold text-gray-900">
                            Transports en cours
                        </h2>
                        <button className="text-xs text-[var(--primary)] flex items-center gap-1">
                            Voir toutes les demandes <FiChevronRight />
                        </button>
                    </div>

                    {/* TRANSPORT CARD */}
                    {[1, 2, 3].map((x) => (
                        <div
                            key={x}
                            className="rounded-xl border border-gray-100  p-4 mb-4"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-xs font-medium text-gray-800">
                                    T-{x + 2500} • 🚑 Ambulance
                                </p>

                                <span className="text-xs rounded-full px-2 py-0.5 bg-amber-50 text-amber-700">
                                    {x === 1 ? 'Patient à bord' : x === 3 ? 'Arrivé à destination' : 'Prise en charge'}
                                </span>
                            </div>

                            {/* Patient info */}
                            <p className="font-semibold text-sm text-gray-800">
                                {x === 1 ? 'DUPONT Jean, 67 ans' : x === 2 ? 'MARTIN Sophie, 45 ans' : 'BERNARD Paul, 82 ans'}
                            </p>

                            <p className="text-[11px] text-gray-500">Équipage • 2 pers</p>

                            <div className="mt-3 text-[11px] text-gray-600 flex flex-col gap-1">
                                <p>● Adresse départ : 13 Rue du Parc, Paris 2e</p>
                                <p>● Destination : CHU Saint-Louis</p>
                            </div>

                            {/* Buttons */}
                            <div className="mt-3 grid grid-cols-3 gap-3">
                                <button className="flex justify-center items-center gap-2 rounded-md border border-gray-200 text-xs py-2 bg-white text-gray-600">
                                    <span><CiLocationOn className='w-4 h-4' /></span> Trajet
                                </button>
                                <button className="rounded-md border border-gray-200 text-xs py-2 bg-white text-gray-600 flex items-center justify-center gap-1">
                                    <FiPhone /> Appeler
                                </button>
                                <button className="rounded-md text-xs py-2 bg-[var(--primary)] text-white">
                                    Détails
                                </button>
                            </div>
                        </div>
                    ))}
                </section>

                {/* --------------------- VEHICLE FLEET ------------------------- */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* FLEET */}
                    <div className="bg-white rounded-xl shadow-sm p-4">
                        <h2 className="text-sm font-semibold text-gray-900 mb-3">
                            Flotte de véhicules
                        </h2>

                        <div className="space-y-3">
                            {[
                                ['Ambulances', '3 disponibles', '5 en service', '8 véhicules'],
                                ['VSL', '4 disponibles', '2 en service', '6 véhicules'],
                                ['TPMR', '2 disponibles', '2 en service', '4 véhicules'],
                            ].map(([title, d1, d2, d3], idx) => (
                                <div
                                    key={idx}
                                    className="border border-gray-200 p-3 rounded-lg bg-[#F9FAFB] text-xs text-gray-700"
                                >
                                    <p className=" text-gray-800">{title}</p>
                                    <div className='flex justify-evenly items-center mt-4'>
                                        <p className='text-green-300 flex justify-center items-center gap-2'><MdDone />{d1}</p>
                                        <p className='flex justify-center items-center gap-2 text-[#155DFC]'><IoFlashOutline />{d2}</p>
                                        <p className="text-gray-500">{d3}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-3 border rounded-md py-2 text-xs text-[var(--primary)]">
                            Gérer la flotte
                        </button>
                    </div>

                    {/* PARTNERS */}
                    <div className="bg-white rounded-xl shadow-sm p-4">
                        <h2 className="text-sm font-semibold text-gray-900 mb-3">
                            Transports partenaires
                        </h2>

                        <div className="space-y-3">
                            {[
                                ['Ambulances Paris Nord', '2.5 km', '4.8', '12 disponibles'],
                                ['Transport Santé Plus', '4.1 km', '4.6', '8 disponibles'],
                                ['VSL Express', '9.8 km', '4.7', '15 disponibles'],
                            ].map(([name, dist, rating, dispo], idx) => (
                                <div
                                    key={idx}
                                    className="rounded-lg border border-gray-200 p-3 bg-[#F8FAFF] flex flex-col text-xs"
                                >
                                    {/* TOP ROW */}
                                    <div className="flex items-center justify-between">
                                        <p className="font-semibold text-gray-800">{name}</p>
                                        <p className="text-green-600 font-semibold whitespace-nowrap">
                                            {dispo}
                                        </p>
                                    </div>

                                    {/* DISTANCE */}
                                    <p className="text-gray-500 mt-1">{dist}</p>

                                    {/* DIVIDER */}
                                    <div className="border-t border-gray-300 my-2"></div>

                                    {/* BOTTOM ROW */}
                                    <div className="flex items-center justify-between">
                                        <p className="text-yellow-500 font-medium">⭐ {rating}</p>
                                        <button className="text-[var(--primary)] text-[11px] font-medium">
                                            Contacter
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </section>

                {/* --------------------- DAILY STATS ------------------------- */}
                <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 pt-3 pb-6">
                    {[
                        ['Transports effectués', '47'],
                        ['Distance parcourue', '523 km'],
                        ['Temps moyen', '12 min'],
                        ['Taux de ponctualité', '96%'],
                        ['Satisfaction moyenne', '4.8'],
                    ].map(([title, value], idx) => (
                        <div
                            key={idx}
                            className="text-center bg-white rounded-lg p-4 shadow-sm"
                        >
                            <p className="text-xl font-bold text-gray-900">{value}</p>
                            <p className="text-xs text-gray-500">{title}</p>
                        </div>
                    ))}
                </section>
            </div>
        </main>
    );
}
