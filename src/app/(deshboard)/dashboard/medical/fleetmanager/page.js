'use client';

import { Ambulance, Clock4, MapPin, Phone } from 'lucide-react';
import { FiActivity, FiAlertCircle, FiClock, FiMapPin, FiPhone, FiTruck } from 'react-icons/fi';

const FleetManagerPage = () => {
    const stats = [
        {
            label: 'Trajets du jour',
            value: '47',
            unit: '+ 12%',
            icon: <FiTruck className="text-xl" />,
        },
        {
            label: 'Demandes en attente',
            value: '15',
            unit: 'à traiter',
            icon: <FiAlertCircle className="text-xl" />,
        },
        {
            label: 'Véhicules disponibles',
            value: '8/12',
            unit: 'Ambulances',
            icon: <FiActivity className="text-xl" />,
        },
        {
            label: 'Équipages actifs',
            value: '18',
            unit: 'En service',
            icon: <FiActivity className="text-xl" />,
        },
        {
            label: 'Temps moyen',
            value: '12min',
            unit: 'Temps d’arrivée',
            icon: <FiClock className="text-xl" />,
        },
    ];

    const requests = [
        {
            id: 1,
            patient: 'DUPONT Jean, 67 ans',
            priority: 'Urgent',
            priorityColor: 'bg-red-100 text-red-600',
            from: 'Domicile – 14 Rue des Lilas 2e',
            to: 'Hôpital Saint-Louis',
            time: 'Dans 25 min',
            progress: 60,
            status: 'À affecter',
        },
        {
            id: 2,
            patient: 'MARTIN Sophie, 45 ans',
            priority: 'Standard',
            priorityColor: 'bg-yellow-50 text-yellow-700',
            from: 'EHPAD – 32 Avenue des Champs',
            to: 'Clinique du Parc',
            time: 'Prévu à 10h45',
            progress: 30,
            status: 'Non affecté',
        },
        {
            id: 3,
            patient: 'BERNARD Paul, 82 ans',
            priority: 'Programmé',
            priorityColor: 'bg-emerald-50 text-emerald-700',
            from: 'EHPAD – 18 Rue Bossuet, Neuilly',
            to: 'Centre de rééducation',
            time: 'Prévu à 14h15',
            progress: 10,
            status: 'Non affecté',
        },
    ];

    const planning = [
        {
            id: 1,
            time: '08:30-09:20',
            title: 'Transport CHU → Hôpital',
            subtitle: 'Véhicule: AMB-01',
            status: 'Terminé',
            statusColor: 'bg-emerald-50 text-emerald-700',
        },
        {
            id: 2,
            time: '10:00-11:15',
            title: 'Consultation → Domicile',
            subtitle: 'Véhicule: VSL-03',
            status: 'Terminé',
            statusColor: 'bg-emerald-50 text-emerald-700',
        },
        {
            id: 3,
            time: '14:40-15:30',
            title: 'Dialyse programmée',
            subtitle: 'Véhicule: AMB-02',
            status: 'En cours',
            statusColor: 'bg-sky-50 text-sky-700',
        },
        {
            id: 4,
            time: '16:00-17:00',
            title: 'Retour domicile',
            subtitle: 'Véhicule: VSL-01',
            status: 'Programmé',
            statusColor: 'bg-gray-100 text-gray-700',
        },
    ];

    const quickActions = [
        {
            label: 'Ouvrir GPS',
            icon: <FiMapPin className="text-2xl" />,
        },
        {
            label: 'Contacter établissement',
            icon: <FiPhone className="text-2xl" />,
        },
        {
            label: 'Gérer la flotte',
            icon: <Ambulance className="text-2xl" />,
        },
        {
            label: 'Voir planning',
            icon: <Clock4 className="text-2xl" />,
        },
    ];

    return (
        <div className="min-h-screen bg-[#F5F7FB] px-4 py-4 md:px-6 lg:px-8">
            {/* Header */}
            <header className="mb-5 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-lg font-semibold text-[var(--text-dark)] md:text-2xl">
                        Tableau de bord Transport - Fleet Manager
                    </h1>
                </div>
            </header>

            {/* Stats */}
            <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="relative rounded-2xl bg-white p-5 h-[150px] shadow-customboxshadow border border-gray-100"
                    >
                        {stat.badge && (
                            <div className="absolute -top-2 -left-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                {stat.badge}
                            </div>
                        )}

                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-gray-700 mb-2">{stat.label}</p>
                                <div className="flex flex-col items-baseline gap-2">
                                    <span className="text-2xl font-bold text-gray-900">
                                        {stat.value}
                                    </span>
                                    <span className="text-xs text-gray-500 font-medium">
                                        {stat.unit}
                                    </span>
                                </div>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 shadow-sm">
                                {stat.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Availability status */}
            <section className="mb-5 rounded-xl bg-white px-4 py-3 shadow-sm">
                <div className="mb-3 flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-gray-700">
                        Statut de disponibilité
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <button className="rounded-md border-2 border-gray-200 py-4 text-sm font-medium text-emerald-700 hover:bg-emerald-50 w-full">
                        🟢 Disponible
                    </button>

                    <button className="rounded-md border-2 border-gray-200 py-4 text-sm font-medium text-amber-600 hover:bg-amber-50 w-full">
                        🟡 En pause
                    </button>

                    <button className="rounded-md border-2 border-gray-200 py-4 text-sm font-medium text-red-600 hover:bg-red-50 w-full">
                        🔴 Indisponible
                    </button>
                </div>
            </section>


            {/* Map */}
            <section className="mb-5 rounded-xl bg-white shadow-sm">
                <div className="flex items-center justify-between border-b px-4 py-3">
                    <div className="flex justify-center items-center gap-2">
                        <MapPin />
                        <p className="text-sm font-semibold text-gray-700">
                            Carte de localisation des véhicules
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button className="rounded-md border border-gray-200 px-5 py-1 text-xs text-gray-600">
                            Mes véhicules
                        </button>
                        <button className="rounded-md border border-gray-200 px-5 py-1 text-xs text-gray-600">
                            Zones de demande
                        </button>
                    </div>
                </div>
                <div className="h-72 w-full overflow-hidden rounded-b-xl">
                    <iframe
                        title="Paris Map"
                        className="h-full w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999204845814!2d2.292292615674017!3d48.8583730792877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc7e33f08b5%3A0x50b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1700000000000"
                    />
                </div>
            </section>

            {/* Requests + Planning */}
            <section className="mb-6 grid grid-cols-1 gap-4 xl:grid-cols-4">
                {/* Requests */}
                <div className="xl:col-span-2 rounded-xl bg-white p-4 shadow-sm">
                    <div className="mb-3 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold text-gray-700">
                                Demandes à traiter
                            </p>
                        </div>
                        <button className="text-xs text-[var(--primary)] underline underline-offset-2">
                            Voir toutes
                        </button>
                    </div>

                    <div className="space-y-3">
                        {requests.map((req) => (
                            <div
                                key={req.id}
                                className="rounded-xl border border-gray-100 bg-[#F8FAFF] p-3"
                            >
                                <div className="mb-1 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold text-gray-800">
                                            {req.patient}
                                        </span>
                                        <span className="text-[11px] text-gray-400">
                                            {req.time}
                                        </span>
                                    </div>
                                    <span
                                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${req.priorityColor}`}
                                    >
                                        {req.priority}
                                    </span>
                                </div>

                                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-gray-500">
                                    <span>Départ : {req.from}</span>
                                    <span>Arrivée : {req.to}</span>
                                </div>

                                <div className="mt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                                    {/* LEFT : Accept button full width */}
                                    <div className="w-full md:flex-1">
                                        <button className="bg-[var(--primary)] rounded-md text-white py-2 w-full">
                                            Accepte
                                        </button>
                                    </div>

                                    {/* RIGHT : Trajet + Phone */}
                                    <div className="flex items-center gap-2 justify-end w-full md:w-auto">

                                        <button className="rounded-md border border-gray-200 px-4 py-2 text-[11px] text-gray-600 flex items-center gap-1">
                                            <FiMapPin className="text-sm" />
                                            Trajet
                                        </button>

                                        <button className="rounded-md bg-[var(--primary)] px-4 py-2 text-[11px] font-medium text-white">
                                            <Phone className="w-4 h-4" />
                                        </button>

                                    </div>

                                </div>


                            </div>
                        ))}
                    </div>
                </div>

                {/* Planning */}
                <div className="xl:col-span-2 rounded-xl bg-white p-4 shadow-sm w-full">
                    <div className="mb-3 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold text-gray-700">
                                Planning du jour
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {planning.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-xl border border-gray-100 bg-[#F8FAFF] p-3"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-semibold text-gray-700">
                                            {item.time}
                                        </p>
                                        <p className="mt-4 text-[9px] text-gray-500">{item.title}</p>
                                        <p className="text-[9px] text-gray-500">{item.subtitle}</p>
                                    </div>
                                    <span
                                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${item.statusColor}`}
                                    >
                                        {item.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick actions */}
            <section className="mb-4 rounded-xl bg-white p-4 shadow-sm">
                <p className="mb-3 text-sm font-semibold text-gray-700">
                    Actions rapides
                </p>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {quickActions.map((action, idx) => (
                        <button
                            key={idx}
                            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-gray-300 bg-[#F8FAFF] px-3 py-4 text-center text-xs font-medium text-gray-700 transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--light-background)] text-[var(--primary)]">
                                {action.icon}
                            </div>
                            <span>{action.label}</span>
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FleetManagerPage;
