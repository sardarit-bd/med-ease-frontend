"use client";

import { useDoses } from "@/hooks";
import {
    Camera,
    Clock
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
export const todayFormatted = `Today, ${new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
})}`;
export default function PilulierPage() {
    const { fetchTodayDoses, markAsTaken } = useDoses();
    const [todayDoses, setTodayDoses] = useState([]);

    async function loadTodayDoses() {
        const doses = await fetchTodayDoses();
        setTodayDoses(doses);
    }
    useEffect(() => {
        loadTodayDoses();
    }, [fetchTodayDoses]);


    const markTaken = async (doses) => {
        let successCount = 0;
        doses.forEach(async (dose) => {
            const result = await markAsTaken(dose._id);
            if (result.success) {
                successCount++;
            }
        });

        return successCount;
    }

    const markMorningDoseAsTaken = async () => {
        const morningDoses = todayDoses?.morning || [];
        if (morningDoses.length === 0) return;

        const successCount = await markTaken(morningDoses);
        toast.success(`${successCount} dose(s) marquée(s) comme prise(s).`);
        loadTodayDoses();
    }

    const markNoonDoseAsTaken = async () => {
        const noonDoses = todayDoses?.noon || [];
        if (noonDoses.length === 0) return;

        const successCount = await markTaken(noonDoses);
        toast.success(`${successCount} dose(s) marquée(s) comme prise(s).`);
        loadTodayDoses();
    }

    const markEveningDoseAsTaken = async () => {

        const eveningDoses = todayDoses?.evening || [];
        if (eveningDoses.length === 0) return;
        const successCount = await markTaken(eveningDoses);
        toast.success(`${successCount} dose(s) marquée(s) comme prise(s).`);
        loadTodayDoses();
    }

    const takenMornnig = todayDoses?.morning?.filter(dose => dose.status === 'taken')
    const takenNoon = todayDoses?.noon?.filter(dose => dose.status === 'taken')
    const takenEvenning = todayDoses?.evening?.filter(dose => dose.status === 'taken')


    const taken = (takenEvenning?.length || 0) + (takenMornnig?.length || 0) + (takenNoon?.length || 0)

    const totalDose = todayDoses?.morning?.length + todayDoses?.evening?.length + todayDoses?.noon?.length
    const progress = Math.ceil((taken / totalDose) * 100)
    return (
        <div className="min-h-screen p-4 md:p-6">

            {/* PAGE TITLE */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-[#0D1B2A]">Pilulier Virtuel</h1>
                    <p className="text-sm text-gray-500">
                        Suivez et gérez vos traitements quotidiens
                    </p>
                </div>

                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border text-sm rounded-xl shadow hover:bg-gray-50">
                        <Link href='/dashboard/patient/mes' className="flex items-center gap-2"><Camera size={16} /> Scanner</Link>
                    </button>

                    <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#6A5CFF] to-[#9C53FF] text-white shadow text-sm">
                        <Link href='/dashboard/patient/mes'>+ Ajouter</Link>
                    </button>
                </div>
            </div>

            {/* TABS */}
            <div className="flex gap-6 text-sm mb-6 font-medium">
                <button className="text-[#6A5CFF] border-b-2 border-[#6A5CFF] pb-2 cursor-pointer">
                    Pilulier Actif
                </button>
                <button className="text-gray-500 pb-2 cursor-pointer">Historique</button>
                <button className="text-gray-500 pb-2 cursor-pointer">Paramètres</button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT SIDE */}
                <div className="lg:col-span-2 space-y-6">

                    {/* ACTIVE DAY CARD */}
                    <div className="bg-gradient-to-r from-[#6A5CFF] via-[#A65BFF] to-[#4DA2FF] text-white p-5 rounded-xl shadow">
                        <p className="text-sm opacity-90">{todayFormatted}</p>
                        <h2 className="text-xl font-semibold mt-1">
                            Traitements à prendre aujourd’hui
                        </h2>
                    </div>

                    {/* ------------------  MIDI BLOCK ------------------ */}
                    <div className="bg-white rounded-xl shadow p-5 border border-gray-100">
                        <div className="flex items-center gap-2 mb-4">
                            <Clock size={18} className="text-yellow-600" />
                            <span className="font-semibold text-gray-700">Midi</span>
                        </div>

                        {/* Doliprane */}
                        {todayDoses?.noon && todayDoses.noon.map((dose) => (
                            <>
                                <div className="p-4 rounded-xl border bg-[#EAF7FF] border-[#D4EDFF] flex justify-between items-center mb-3">
                                    <div>
                                        <h4 className="font-semibold text-gray-700">{dose.medicine.name}</h4>
                                        <p className="text-xs text-gray-500">{dose.medicine.dosage.amount + " " + dose.medicine.dosage.unit + " " + dose.medicine.strength}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-blue-600">12:30</p>
                                        <p className="text-xs text-blue-500">{dose.status}</p>
                                    </div>
                                </div>
                            </>
                        ))}
                        {/* <div className="p-4 rounded-xl border bg-[#EAF7FF] border-[#D4EDFF] flex justify-between items-center mb-3">
                            <div>
                                <h4 className="font-semibold text-gray-700">Doliprane</h4>
                                <p className="text-xs text-gray-500">1 comprimé 1000mg</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-blue-600">12:30</p>
                                <p className="text-xs text-blue-500">À prendre</p>
                            </div>
                        </div> */}

                        {/* Action Buttons */}
                        {todayDoses?.noon?.length > 0 ? <div className="flex gap-2">
                            <button onClick={markNoonDoseAsTaken} className="cursor-pointer px-4 py-2 bg-green-600 text-white rounded-xl text-xs shadow">
                                Marquer comme pris
                            </button>
                            <button className="px-4 py-2 bg-white border rounded-xl text-xs shadow">
                                Rappel
                            </button>
                        </div> : <h2 className="text-center my-5 text-2xl opacity-70">Nothing to Take</h2>}
                    </div>

                    {/* ------------------  MATIN BLOCK ------------------ */}
                    <div className="bg-white rounded-xl shadow p-5 border border-gray-100">
                        <div className="flex items-center gap-2 mb-4">
                            <Clock size={18} className="text-orange-500" />
                            <span className="font-semibold text-gray-700">Matin</span>
                        </div>

                        {todayDoses?.morning && todayDoses.morning.map((dose) => (
                            <>
                                <div className="p-4 rounded-xl border bg-[#FFF7E6] border-[#FFE9B8] flex justify-between items-center mb-3">
                                    <div>
                                        <h4 className="font-semibold text-gray-700">{dose.medicine.name}</h4>
                                        <p className="text-xs text-gray-500">{dose.medicine.dosage.amount + " " + dose.medicine.dosage.unit + " " + dose.medicine.strength}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-yellow-600">09:00</p>
                                        <p className="text-xs text-green-600">{dose.status}</p>
                                    </div>
                                </div>
                            </>
                        ))}
                        {/* Helicidine */}
                        {/* <div className="p-4 rounded-xl border bg-[#FFF7E6] border-[#FFE9B8] flex justify-between items-center mb-3">
                            <div>
                                <h4 className="font-semibold text-gray-700">Helicidine</h4>
                                <p className="text-xs text-gray-500">1 cuillère(s) à soupe</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-yellow-600">09:00</p>
                                <p className="text-xs text-green-600">Pris</p>
                            </div>
                        </div> */}

                        {/* Asturgil */}
                        {/* <div className="p-4 rounded-xl border bg-[#FFF7E6] border-[#FFE9B8] flex justify-between items-center">
                            <div>
                                <h4 className="font-semibold text-gray-700">Asturgil</h4>
                                <p className="text-xs text-gray-500">2 pulvérisation(s)</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-yellow-600">09:00</p>
                                <p className="text-xs text-green-600">Pris</p>
                            </div>
                        </div> */}

                        {todayDoses?.morning?.length > 0 ? <div className="flex gap-2 mt-4">
                            <button onClick={markMorningDoseAsTaken} className="px-4 py-2 bg-green-600 text-white rounded-xl text-xs shadow">
                                Marquer comme pris
                            </button>
                            <button className="px-4 py-2 bg-white border rounded-xl text-xs shadow">
                                Rappel
                            </button>
                        </div> : <h2 className="text-center my-5 text-2xl opacity-70">Nothing to Take</h2>}
                    </div>

                    {/* ------------------  SOIR BLOCK ------------------ */}
                    <div className="bg-white rounded-xl shadow p-5 border border-gray-100">
                        <div className="flex items-center gap-2 mb-4">
                            <Clock size={18} className="text-purple-500" />
                            <span className="font-semibold text-gray-700">Soir</span>
                        </div>


                        {todayDoses?.evening && todayDoses.evening.map((dose) => (
                            <>
                                <div className="p-4 rounded-xl border bg-[#F5E8FF] border-[#E7D4FF] flex justify-between items-center mb-3">
                                    <div>
                                        <h4 className="font-semibold text-gray-700">{dose.medicine.name}</h4>
                                        <p className="text-xs text-gray-500">{dose.medicine.dosage.amount + " " + dose.medicine.dosage.unit + " " + dose.medicine.strength}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-purple-600">19:00</p>
                                        <p className="text-xs text-gray-500">{dose.status}</p>
                                    </div>
                                </div>
                            </>
                        ))}
                        {/* Levothyrox */}
                        {/* <div className="p-4 rounded-xl border bg-[#F5E8FF] border-[#E7D4FF] flex justify-between items-center mb-3">
                            <div>
                                <h4 className="font-semibold text-gray-700">Levothyrox</h4>
                                <p className="text-xs text-gray-500">1 comprimé 75µg</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-purple-600">19:00</p>
                                <p className="text-xs text-gray-500">À venir</p>
                            </div>
                        </div> */}

                        {
                            todayDoses?.evening?.length > 0 ? <div className="flex gap-2 mt-4">
                                <button onClick={markEveningDoseAsTaken} className="px-4 py-2 bg-green-600 text-white rounded-xl text-xs shadow">
                                    Marquer comme pris
                                </button>
                                <button className="px-4 py-2 bg-white border rounded-xl text-xs shadow">
                                    Rappel
                                </button>
                            </div> : <h2 className="text-center my-5 text-2xl opacity-70">Nothing to Take</h2>
                        }
                    </div>

                    {/* PROGRESS BAR */}
                    {progress ? <div className="mt-5">
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div style={{ width: `${progress}%` }} className={`h-full bg-green-500`}></div>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Observance du jour <span className="text-green-600 font-medium">{progress}%</span></p>
                    </div> : ""}
                </div>

                {/* ------------------ RIGHT SIDEBAR ------------------ */}
                <div className="space-y-6">

                    {/* CALENDAR CARD */}
                    <div className="bg-white rounded-xl shadow p-5 border">
                        <h3 className="font-semibold text-gray-700">Calendrier des prises</h3>
                        <p className="text-xs text-gray-500 mt-1">
                            {`Pilulier actif jusqu'au 15 nov 2025`}
                        </p>

                        {/* Custom Small Calendar */}
                        <div className="mt-4 text-center">
                            <div className="grid grid-cols-7 gap-2 text-xs text-gray-600">
                                {"SMTWTFS".split("").map((d, i) => (
                                    <span key={i}>{d}</span>
                                ))}
                            </div>

                            <div className="grid grid-cols-7 gap-2 mt-2 tracking-tight">
                                {[
                                    "", "", "", "1", "2", "3", "4",
                                    "5", "6", "7", "8", "9", "10", "11",
                                    "12", "13", "14", "15",
                                ].map((d, i) => (
                                    <div
                                        key={i}
                                        className={`p-2 rounded-lg text-xs ${["3", "4", "5", "6", "7", "8"].includes(d)
                                            ? "bg-green-200 text-green-900 font-semibold"
                                            : d
                                                ? "text-gray-700"
                                                : ""
                                            }`}
                                    >
                                        {d}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* PRESCRIPTIONS */}
                    <div className="bg-white rounded-xl shadow p-5 border">
                        <h3 className="font-semibold text-gray-700">Mes prescriptions</h3>
                        <p className="text-xs text-gray-500">3 ordonnances actives</p>

                        <div className="mt-4 space-y-3">
                            <div className="p-3 bg-gray-50 rounded-xl">
                                <p className="text-xs font-medium text-gray-700">Dr. Martin</p>
                                <p className="text-xs text-gray-500">Expire le 15 novembre</p>
                            </div>

                            <div className="p-3 bg-gray-50 rounded-xl">
                                <p className="text-xs font-medium text-gray-700">Dr. Dubois</p>
                                <p className="text-xs text-gray-500">Expire le 28 novembre</p>
                            </div>
                        </div>

                        <button className="mt-4 w-full flex items-center justify-center gap-2 bg-white border rounded-xl py-2 text-sm shadow">
                            <Camera size={16} /> Scanner ordonnance
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
