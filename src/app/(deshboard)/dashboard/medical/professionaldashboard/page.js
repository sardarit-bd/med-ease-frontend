import { Activity, AlertCircle, AlertTriangle, Bed, Bell, CheckCircle, Clock, FileText, TrendingUp, Users } from 'lucide-react';

export default function ProfessionalDashboard() {
    const patients = [
        {
            name: "DUPONT Jean, 67 ans",
            condition: "Post-infarctus",
            lastVisit: "Dernière visite: 10/11/2025",
            observation: "95%",
            status: "Stable",
            statusColor: "emerald"
        },
        {
            name: "MARTIN Sophie, 54 ans",
            condition: "HTA",
            lastVisit: "Dernière visite: 08/11/2025",
            observation: "34%",
            status: "Stable",
            statusColor: "emerald"
        },
        {
            name: "GARCIA Pedro, 71 ans",
            condition: "Insuffisance cardiaque",
            lastVisit: "Dernière visite: 05/11/2025",
            observation: "12%",
            status: "À surveiller",
            statusColor: "orange"
        },
        {
            name: "CHEN Li, 62 ans",
            condition: "Arythmie",
            lastVisit: "Dernière visite: 10/11/2025",
            observation: "50%",
            status: "Stable",
            statusColor: "emerald"
        }
    ];

    const activities = [
        { time: "09:30", type: "Consultation", patient: "DUPONT Jean", status: "Terminé", statusColor: "emerald" },
        { time: "11:15", type: "ECG", patient: "MARTIN Sophie", status: "Terminé", statusColor: "emerald" },
        { time: "14:00", type: "Échographie cardiaque", patient: "GARCIA Pedro", status: "En cours", statusColor: "blue" },
        { time: "15:30", type: "Consultation", patient: "CHEN Li", status: "Programmé", statusColor: "orange" }
    ];

    const alerts = [
        {
            type: "Intervention",
            title: "DUPONT Jean",
            description: "Intervention cardiaque planifiée",
            icon: AlertTriangle,
            color: "red"
        },
        {
            type: "Allergie",
            title: "MARTIN Sophie",
            description: "Allergie à la pénicilline",
            icon: AlertCircle,
            color: "amber"
        },
        {
            type: "Observance",
            title: "GARCIA Pedro",
            description: "Observance Faible (sous 70%)",
            icon: Activity,
            color: "orange"
        },
        {
            type: "Renouvellement",
            title: "CHEN Li",
            description: "Ordonnance à renouveler",
            icon: FileText,
            color: "blue"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-3">
            <div className="w-full">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                        Tableau de bord Professionnel
                    </h1>
                    <p className="text-sm text-gray-600">Dr. Martin - Cardiologue</p>
                </div>

                {/* Stats Cards */}
                <div className="mb-6">
                    <h2 className="text-sm font-semibold text-gray-700 mb-3">Mes capacités & Activité</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white rounded-lg border border-gray-200 p-5">
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <div className="text-xs text-gray-600 mb-1">Lits disponibles</div>
                                    <div className="text-3xl font-bold text-gray-900">8</div>
                                    <div className="text-xs text-gray-500 mt-1">Cardiologie</div>
                                </div>
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <Bed className="w-5 h-5 text-blue-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 p-5">
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <div className="text-xs text-gray-600 mb-1">Prochain intervention</div>
                                    <div className="text-3xl font-bold text-gray-900">14:30</div>
                                    <div className="text-xs text-gray-500 mt-1">Angioplastie</div>
                                </div>
                                <div className="p-2 bg-emerald-100 rounded-lg">
                                    <Clock className="w-5 h-5 text-emerald-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 p-5">
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <div className="text-xs text-gray-600 mb-1">Demandes bloc</div>
                                    <div className="text-3xl font-bold text-gray-900">3</div>
                                    <div className="text-xs text-gray-500 mt-1">Disponibilités aujourd'hui</div>
                                </div>
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <FileText className="w-5 h-5 text-blue-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 p-5">
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <div className="text-xs text-gray-600 mb-1">Demandes</div>
                                    <div className="text-3xl font-bold text-gray-900">5</div>
                                    <div className="text-xs text-gray-500 mt-1">Demandes associées</div>
                                </div>
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <Users className="w-5 h-5 text-blue-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {/* Patients Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg border border-gray-200">
                            <div className="p-5 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Users className="w-5 h-5 text-gray-600" />
                                        <h2 className="text-lg font-semibold text-gray-900">
                                            Patients en cours de suivi
                                        </h2>
                                    </div>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                                        24 patients
                                    </span>
                                </div>
                            </div>

                            <div className="divide-y divide-gray-200">
                                {patients.map((patient, index) => (
                                    <div key={index} className="p-5 hover:bg-gray-50 transition-colors">
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900 mb-1">{patient.name}</h3>
                                                <p className="text-sm text-gray-600 mb-1">{patient.condition}</p>
                                                <p className="text-xs text-gray-500">{patient.lastVisit}</p>
                                            </div>
                                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${patient.statusColor === 'emerald'
                                                ? 'bg-emerald-100 text-emerald-700'
                                                : 'bg-orange-100 text-orange-700'
                                                }`}>
                                                {patient.status}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-600">Observance</span>
                                            <div className="flex items-center gap-2 flex-1 max-w-xs ml-4">
                                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className={`h-2 rounded-full ${parseInt(patient.observation) > 70
                                                            ? 'bg-emerald-500'
                                                            : parseInt(patient.observation) > 40
                                                                ? 'bg-orange-500'
                                                                : 'bg-red-500'
                                                            }`}
                                                        style={{ width: patient.observation }}
                                                    ></div>
                                                </div>
                                                <span className="text-sm font-semibold text-gray-700 min-w-[3rem] text-right">
                                                    {patient.observation}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 border-t border-gray-200 text-center">
                                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                                    Voir tous mes patients →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Alerts Section */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg border border-gray-200">
                            <div className="p-5 border-b border-gray-200">
                                <div className="flex items-center gap-2">
                                    <Bell className="w-5 h-5 text-gray-600" />
                                    <h2 className="text-lg font-semibold text-gray-900">Alertes Remédium</h2>
                                </div>
                            </div>

                            <div className="divide-y divide-gray-200">
                                {alerts.map((alert, index) => {
                                    const Icon = alert.icon;
                                    const bgColors = {
                                        red: 'bg-red-50 border-red-200',
                                        amber: 'bg-amber-50 border-amber-200',
                                        orange: 'bg-orange-50 border-orange-200',
                                        blue: 'bg-blue-50 border-blue-200'
                                    };
                                    const iconColors = {
                                        red: 'text-red-600',
                                        amber: 'text-amber-600',
                                        orange: 'text-orange-600',
                                        blue: 'text-blue-600'
                                    };

                                    return (
                                        <div key={index} className={`p-4 border-l-4 ${bgColors[alert.color]}`}>
                                            <div className="flex items-start gap-3">
                                                <Icon className={`w-5 h-5 ${iconColors[alert.color]} flex-shrink-0 mt-0.5`} />
                                                <div className="flex-1">
                                                    <div className="text-xs font-semibold text-gray-900 mb-1">
                                                        {alert.type}
                                                    </div>
                                                    <div className="text-sm font-medium text-gray-900 mb-1">
                                                        {alert.title}
                                                    </div>
                                                    <div className="text-xs text-gray-600">
                                                        {alert.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quality & Activity Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Quality Indicators */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-6">Qualité & Indicateurs</h2>

                        <div className="grid grid-cols-2 gap-6 mb-6">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <TrendingUp className="w-5 h-5 text-amber-500" />
                                    <h3 className="text-sm font-semibold text-gray-700">Satisfaction patient</h3>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-gray-900 mb-2">4.8/5</div>
                                    <div className="flex justify-center gap-1 mb-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <div key={star} className={`w-5 h-5 ${star <= 4 ? 'text-amber-400' : 'text-gray-300'}`}>
                                                ★
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-xs text-gray-500">123 avis</div>
                                    <div className="mt-4 space-y-2 text-left">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-600">Accueil</span>
                                            <span className="font-semibold">4.9</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-600">Écoute</span>
                                            <span className="font-semibold">4.8</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-600">Explications</span>
                                            <span className="font-semibold">4.7</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Activity className="w-5 h-5 text-emerald-500" />
                                    <h3 className="text-sm font-semibold text-gray-700">Score E-Santé</h3>
                                </div>
                                <div className="flex items-center justify-center mb-4">
                                    <div className="relative w-32 h-32">
                                        <svg className="w-32 h-32 transform -rotate-90">
                                            <circle
                                                cx="64"
                                                cy="64"
                                                r="56"
                                                stroke="#e5e7eb"
                                                strokeWidth="8"
                                                fill="none"
                                            />
                                            <circle
                                                cx="64"
                                                cy="64"
                                                r="56"
                                                stroke="#10b981"
                                                strokeWidth="8"
                                                fill="none"
                                                strokeDasharray={`${85 * 3.51} ${100 * 3.51}`}
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-3xl font-bold text-gray-900">85%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center text-xs text-gray-600 mb-2">Dernier trimestre</div>
                                <div className="text-center">
                                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                                        +5% vs période précédente
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-3">
                                <div className="flex items-start gap-2">
                                    <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900 mb-1">
                                            Taux de réhospitalisation
                                        </div>
                                        <div className="text-xs text-gray-700">
                                            Légèrement au-dessus de la moyenne (+3% vs 18%)
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900 mb-1">
                                            Documentation dossiers
                                        </div>
                                        <div className="text-xs text-gray-700">
                                            Complète et à jour<br />
                                            3 dossiers à compléter
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                Ouvrir module Qualité
                            </button>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-lg border border-gray-200">
                        <div className="p-5 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900">Activité récente</h2>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {activities.map((activity, index) => (
                                <div key={index} className="p-5 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start gap-4">
                                            <div className="text-sm font-medium text-gray-500 min-w-[3rem]">
                                                {activity.time}
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold text-gray-900 mb-1">
                                                    {activity.type}
                                                </div>
                                                <div className="text-sm text-gray-600">{activity.patient}</div>
                                            </div>
                                        </div>
                                        <span className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${activity.statusColor === 'emerald'
                                            ? 'bg-emerald-100 text-emerald-700'
                                            : activity.statusColor === 'blue'
                                                ? 'bg-blue-100 text-blue-700'
                                                : 'bg-orange-100 text-orange-700'
                                            }`}>
                                            {activity.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}