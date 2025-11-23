'use client'


import { AlertCircle, Bed, Clock, DoorOpen, Grid, LayoutGrid, List, UserCheck } from 'lucide-react';
import { useState } from 'react';

export default function BedManagementDashboard() {
    const [serviceFilter, setServiceFilter] = useState('all');
    const [typeFilter, setTypeFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');
    const [viewMode, setViewMode] = useState('list');

    const stats = [
        {
            label: "Taux d'occupation",
            value: "88%",
            change: "+2%",
            icon: Bed,
            color: "purple"
        },
        {
            label: "Lits disponibles",
            value: "42",
            subtitle: "sur 328 lits",
            icon: DoorOpen,
            color: "amber"
        },
        {
            label: "Lits fermés",
            value: "8",
            subtitle: "Maintenance",
            icon: AlertCircle,
            color: "emerald"
        },
        {
            label: "Admissions prévues",
            value: "23",
            subtitle: "Prochaines 24h",
            icon: UserCheck,
            color: "red"
        },
        {
            label: "Durée moy. séjour",
            value: "4.2j",
            subtitle: "",
            icon: Clock,
            color: "orange"
        }
    ];

    const beds = [
        { id: "L-101", service: "Médecine", status: "Disponible", statusColor: "emerald", patient: "-", lastUpdate: "10:30", admission: "-" },
        { id: "L-102", service: "Médecine", status: "Occupé", statusColor: "red", patient: "DUPONT Jean", lastUpdate: "09:15", admission: "-" },
        { id: "L-103", service: "Médecine", status: "Réservé", statusColor: "amber", patient: "-", lastUpdate: "11:00", admission: "14:00 - MARTIN Marie" },
        { id: "L-104", service: "Médecine", status: "Nettoyage", statusColor: "blue", patient: "-", lastUpdate: "11:30", admission: "15:00 - BERNARD Paul" },
        { id: "C-201", service: "Chirurgie", status: "Disponible", statusColor: "emerald", patient: "-", lastUpdate: "10:00", admission: "-" },
        { id: "C-202", service: "Chirurgie", status: "Occupé", statusColor: "red", patient: "GARCIA Ana", lastUpdate: "08:00", admission: "-" },
        { id: "C-203", service: "Chirurgie", status: "Occupé", statusColor: "red", patient: "LEMOINE Pierre", lastUpdate: "07:30", admission: "-" },
        { id: "R-301", service: "Réanimation", status: "Occupé", statusColor: "red", patient: "SMITH John", lastUpdate: "00:00", admission: "-" },
        { id: "R-302", service: "Réanimation", status: "Occupé", statusColor: "red", patient: "CHEN Li", lastUpdate: "02:00", admission: "-" },
        { id: "R-303", service: "Réanimation", status: "Disponible", statusColor: "emerald", patient: "-", lastUpdate: "11:45", admission: "-" }
    ];

    const facilities = [
        { name: "Hôpital Lariboisière", beds: 28, available: 8, distance: "2.1 km" },
        { name: "Clinique du Val", beds: 15, available: 4, distance: "3.8 km" },
        { name: "CHU Bichat", beds: 42, available: 12, distance: "4.5 km" },
        { name: "Hôpital Européen", beds: 31, available: 6, distance: "5.1 km" }
    ];

    const getColorClasses = (color) => {
        const colors = {
            purple: "bg-purple-500",
            amber: "bg-amber-500",
            emerald: "bg-emerald-500",
            red: "bg-red-500",
            orange: "bg-orange-500",
            blue: "bg-blue-500"
        };
        return colors[color] || "bg-gray-500";
    };

    const getStatusBgColor = (color) => {
        const colors = {
            emerald: "bg-emerald-100 text-emerald-700",
            red: "bg-red-100 text-red-700",
            amber: "bg-amber-100 text-amber-700",
            blue: "bg-blue-100 text-blue-700"
        };
        return colors[color] || "bg-gray-100 text-gray-700";
    };

    return (
        <div className="min-h-screen bg-gray-50 p-2">
            <div className="w-full">
                {/* Header */}
                <h1 className="text-2xl font-semibold text-gray-900 mb-6">Gestion des lits</h1>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="bg-white rounded-lg border border-gray-200 p-5">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="text-xs text-gray-600 mb-2">{stat.label}</div>
                                        <div className="text-2xl font-bold text-gray-900 mb-1">
                                            {stat.value}
                                            {stat.change && (
                                                <span className="text-sm font-normal text-emerald-600 ml-2">
                                                    {stat.change}
                                                </span>
                                            )}
                                        </div>
                                        {stat.subtitle && (
                                            <div className="text-xs text-gray-500">{stat.subtitle}</div>
                                        )}
                                    </div>
                                    <div className={`${getColorClasses(stat.color)} p-2.5 rounded-lg`}>
                                        <Icon className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Filters and View Toggle */}
                <div className="bg-white rounded-lg border border-gray-200 mb-4">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                                <List className="w-4 h-4" />
                                Tous les services
                            </button>
                            <button className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                                Type: Tous
                            </button>
                            <button className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                                Statut: Tous
                            </button>
                        </div>
                        <div className="flex gap-1 bg-gray-100 p-1 rounded-md">
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                            >
                                <List className="w-4 h-4 text-gray-700" />
                            </button>
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                            >
                                <Grid className="w-4 h-4 text-gray-700" />
                            </button>
                            <button
                                onClick={() => setViewMode('layout')}
                                className={`p-2 rounded ${viewMode === 'layout' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                            >
                                <LayoutGrid className="w-4 h-4 text-gray-700" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Beds Table */}
                <div className="bg-white rounded-lg border border-gray-200 mb-6 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                        Lit n°
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                        Service
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                        Statut
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                        Patient
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                        Dernière MAJ
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                        Admission prévue
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {beds.map((bed, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {bed.id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {bed.service}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusBgColor(bed.statusColor)}`}>
                                                {bed.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {bed.patient}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {bed.lastUpdate}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {bed.admission}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <button className="text-blue-600 hover:text-blue-800 font-medium">
                                                Gérer
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Territorial Capacities */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">Capacités territoriales</h2>
                        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                            Voir toutes les capacités →
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {facilities.map((facility, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-4">
                                <h3 className="font-semibold text-gray-900 mb-3">{facility.name}</h3>
                                <div className="text-3xl font-bold text-emerald-600 mb-1">
                                    {facility.beds}
                                </div>
                                <div className="text-xs text-gray-600 mb-3">
                                    lits disponibles<br />
                                    sur {facility.available} lits
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}