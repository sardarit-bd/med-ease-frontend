'use client';

import {
    FiActivity,
    FiAlertTriangle,
    FiCalendar,
    FiChevronDown,
    FiClock,
    FiHeart,
    FiTrendingUp,
} from 'react-icons/fi';

const DAY_START = 8 * 60;
const DAY_END = 18 * 60;
const TOTAL_MINUTES = DAY_END - DAY_START;

// ছোট helper – শুধুই UI position এর জন্য
const timeToMinutes = (t) => {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
};

const getBlockStyle = (start, end) => {
    const startMin = timeToMinutes(start);
    const endMin = timeToMinutes(end);
    const leftPercent = ((startMin - DAY_START) / TOTAL_MINUTES) * 100;
    const widthPercent = ((endMin - startMin) / TOTAL_MINUTES) * 100;

    return {
        left: `${leftPercent}%`,
        width: `${widthPercent}%`,
    };
};

const rooms = [
    {
        id: 1,
        name: 'Salle 1',
        speciality: 'Chirurgie générale',
        interventions: [
            {
                patient: 'DUPONT Jean',
                label: 'Appendicectomie',
                surgeon: 'Dr. Martin',
                time: '08:00-10:00',
                start: '08:00',
                end: '10:00',
                color: 'bg-emerald-100 text-emerald-900 border-emerald-200',
            },
            {
                patient: 'GARCIA Ana',
                label: 'Cholécystectomie',
                surgeon: 'Dr. Dubois',
                time: '10:30-13:00',
                start: '10:30',
                end: '13:00',
                color: 'bg-sky-100 text-sky-900 border-sky-200',
            },
        ],
    },
    {
        id: 2,
        name: 'Salle 2',
        speciality: 'Orthopédie',
        interventions: [
            {
                patient: 'MARTIN Sophie',
                label: 'Prothèse de hanche',
                surgeon: 'Dr. Petit',
                time: '08:30-11:00',
                start: '08:30',
                end: '11:00',
                color: 'bg-emerald-100 text-emerald-900 border-emerald-200',
            },
            {
                patient: 'LEMOINE Pierre',
                label: 'LCA genou',
                surgeon: 'Dr. Petit',
                time: '11:30-14:00',
                start: '11:30',
                end: '14:00',
                color: 'bg-rose-100 text-rose-900 border-rose-200',
            },
        ],
    },
    {
        id: 3,
        name: 'Salle 3',
        speciality: 'Cardiologie',
        interventions: [
            {
                patient: 'SMITH John',
                label: 'Pontage coronarien',
                surgeon: 'Dr. Laurent',
                time: '09:00-12:00',
                start: '09:00',
                end: '12:00',
                color: 'bg-sky-100 text-sky-900 border-sky-200',
            },
            {
                patient: 'WILLIAMS Mary',
                label: 'Angioplastie',
                surgeon: 'Dr. Laurent',
                time: '13:30-16:00',
                start: '13:30',
                end: '16:00',
                color: 'bg-slate-100 text-slate-900 border-slate-200',
            },
        ],
    },
    {
        id: 4,
        name: 'Salle 4',
        speciality: 'Chirurgie générale',
        interventions: [
            {
                patient: 'CHEN Li',
                label: 'Arthroscopie',
                surgeon: 'Dr. Roux',
                time: '15:00-17:00',
                start: '15:00',
                end: '17:00',
                color: 'bg-slate-100 text-slate-900 border-slate-200',
            },
        ],
    },
];

const BlocOperatoirePage = () => {
    return (
        <main className="min-h-screen">
            <div className="">
                {/* Header */}
                <header className="mb-4">
                    <h1 className="text-lg font-semibold text-gray-900 md:text-2xl">
                        Bloc opératoire
                    </h1>
                </header>

                {/* Top stats */}
                <section className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
                    <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm">
                        <div>
                            <p className="text-xs text-gray-500">Salles ouvertes</p>
                            <p className="mt-1 text-xl font-semibold text-gray-900">8/12</p>
                        </div>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                            <FiActivity />
                        </div>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm">
                        <div>
                            <p className="text-xs text-gray-500">Taux d’occupation</p>
                            <div className="mt-1 flex items-baseline gap-2">
                                <p className="text-xl font-semibold text-gray-900">92%</p>
                                <span className="text-[11px] font-medium text-emerald-500">
                                    +5%
                                </span>
                            </div>
                        </div>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-500">
                            <FiTrendingUp />
                        </div>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm">
                        <div>
                            <p className="text-xs text-gray-500">Interventions</p>
                            <p className="mt-1 text-xl font-semibold text-gray-900">23</p>
                            <p className="text-[11px] text-gray-400">Aujourd’hui</p>
                        </div>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                            <FiHeart />
                        </div>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm">
                        <div>
                            <p className="text-xs text-gray-500">Retards</p>
                            <p className="mt-1 text-xl font-semibold text-gray-900">2</p>
                            <p className="text-[11px] text-gray-400">En cours</p>
                        </div>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-50 text-teal-500">
                            <FiAlertTriangle />
                        </div>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm">
                        <div>
                            <p className="text-xs text-gray-500">Annulations</p>
                            <p className="mt-1 text-xl font-semibold text-gray-900">1</p>
                            <p className="text-[11px] text-gray-400">Aujourd’hui</p>
                        </div>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                            <FiAlertTriangle />
                        </div>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm">
                        <div>
                            <p className="text-xs text-gray-500">Durée moyenne</p>
                            <p className="mt-1 text-xl font-semibold text-gray-900">2.3h</p>
                        </div>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-500">
                            <FiClock />
                        </div>
                    </div>
                </section>

                {/* Filters */}
                <section className="mb-5 rounded-xl bg-white px-4 py-3 shadow-sm">
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                        {/* Date */}
                        <div>
                            <label className="mb-1 block text-xs text-gray-500">Date</label>
                            <button className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-[#F8FAFF] px-3 py-2 text-xs text-gray-700">
                                <span>11/12/2025</span>
                                <FiCalendar className="text-gray-400" />
                            </button>
                        </div>

                        {/* Service */}
                        <div>
                            <label className="mb-1 block text-xs text-gray-500">Service</label>
                            <button className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-[#F8FAFF] px-3 py-2 text-xs text-gray-700">
                                <span>Tous les services</span>
                                <FiChevronDown className="text-gray-400" />
                            </button>
                        </div>

                        {/* Chirurgien */}
                        <div>
                            <label className="mb-1 block text-xs text-gray-500">
                                Chirurgien
                            </label>
                            <button className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-[#F8FAFF] px-3 py-2 text-xs text-gray-700">
                                <span>Tous</span>
                                <FiChevronDown className="text-gray-400" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Planning */}
                <section className="mb-5 rounded-xl bg-white shadow-sm">
                    {/* Header */}
                    <div className="border-b border-gray-100 px-4 py-3">
                        <p className="text-sm font-semibold text-gray-800">
                            Planning du mercredi 12 novembre 2025
                        </p>
                    </div>

                    {/* Time grid */}
                    <div className="overflow-x-auto">
                        <div className="min-w-[900px]">
                            {/* Time header row */}
                            <div className="grid grid-cols-[140px,1fr] border-b border-gray-100 bg-[#F8FAFF] px-4 py-2 text-[11px] text-gray-500">

                                {/* Left column — Salle */}
                                {/* <div className="font-medium text-gray-600">
                                    Salle
                                </div> */}

                                {/* Right column — hours */}
                                <div className="relative">
                                    <div className="grid grid-cols-11 text-center">
                                        {['Salle', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'].map((h) => (
                                            <div key={h} className="border-l border-gray-200 first:border-l-0">
                                                {h}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>


                            {/* Rows */}
                            <div className="px-4 py-3">
                                {rooms.map((room, idx) => (
                                    <div
                                        key={room.id}
                                        className={`grid grid-cols-[140px,1fr] border-b border-gray-100 py-4 last:border-b-0`}
                                    >
                                        {/* Room label */}
                                        <div className="pr-4">
                                            <p className="text-xs font-semibold text-gray-800">
                                                {room.name}
                                            </p>
                                            <p className="text-[11px] text-gray-400">
                                                {room.speciality}
                                            </p>
                                        </div>

                                        {/* Timeline row */}
                                        <div className="relative h-28">
                                            {/* vertical grid lines */}
                                            <div className="absolute inset-0">
                                                <div className="grid h-full grid-cols-10">
                                                    {Array.from({ length: 10 }).map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className="border-l border-dashed border-gray-100 last:border-r"
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Interventions blocks */}
                                            <div className="relative h-full">
                                                {room.interventions.map((iv, i) => (
                                                    <div
                                                        key={i}
                                                        className={`absolute top-3 rounded-lg border px-3 py-2 text-[11px] shadow-sm ${iv.color}`}
                                                        style={getBlockStyle(iv.start, iv.end)}
                                                    >
                                                        <p className="text-[11px] font-semibold">
                                                            {iv.patient}
                                                        </p>
                                                        <p className="text-[11px]">{iv.label}</p>
                                                        <p className="mt-1 text-[10px] opacity-80">
                                                            {iv.surgeon} • {iv.time}
                                                        </p>
                                                    </div>
                                                ))}

                                                {/* Example "Salle disponible" label for empty time */}
                                                {idx === 2 && (
                                                    <div className="absolute bottom-2 left-[62%] rounded-md bg-white px-2 py-1 text-[10px] text-gray-400 shadow">
                                                        Salle disponible
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom actions */}
                <section className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                    <button className="flex h-20 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-gray-300 bg-white text-xs font-medium text-gray-700 hover:bg-[#F8FAFF]">
                        <span className="text-2xl text-[var(--primary)]">+</span>
                        Ajouter une intervention
                    </button>

                    <button className="flex h-20 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-gray-300 bg-white text-xs font-medium text-gray-700 hover:bg-[#F8FAFF]">
                        <span className="text-[var(--primary)]">
                            <FiActivity className="text-xl" />
                        </span>
                        Voir disponibilité salles
                    </button>

                    <button className="flex h-20 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-gray-300 bg-white text-xs font-medium text-gray-700 hover:bg-[#F8FAFF]">
                        <span className="text-[var(--primary)]">
                            <FiClock className="text-xl" />
                        </span>
                        Gérer les retards
                    </button>
                </section>
            </div>
        </main>
    );
};

export default BlocOperatoirePage;
