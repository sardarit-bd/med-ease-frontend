"use client";

import { Calendar, Globe, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ConciergeriePage() {
    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* ================= LEFT CONTENT ================= */}
                <div className="md:col-span-2 space-y-6">

                    {/* Header */}
                    <h1 className="text-2xl font-semibold text-gray-800">Med’ease Conciergerie Médicale</h1>

                    {/* Icons */}
                    <div className="flex justify-between items-center gap-4">
                        <div className="flex items-center justiufy-center gap-2">
                            <IconCircle icon={<Phone size={18} />} />
                            <IconCircle icon={<MessageCircle size={18} />} />
                            <IconCircle icon={<Globe size={18} />} />
                            <IconCircle icon={<Share2 size={18} />} />
                            <IconCircle icon={<MapPin size={18} />} />
                        </div>
                        <div className="text-sm text-gray-600 flex items-center gap-2">
                            <IoLocationOutline className="text-2xl text-[#1B76BA]" />
                            <span>Av. des Champs Elysées<br />75008 Paris</span>
                        </div>
                    </div>

                    {/* Motif Section */}
                    <div className="py-4 border-y-2 border-gray-200">
                        <p className="flex items-center gap-2 text-gray-700">
                            <Image src="/icons/Stetoscope.png" alt="Exprimez" width={20} height={20} />
                            <span className="font-medium">Motif :</span> Retour à domicile (Post Hospitalisation)
                        </p>
                    </div>

                    {/* Patient Info */}
                    <div className="py-4 border-b-2 border-gray-200">
                        <h2 className="font-semibold text-gray-900 text-lg mb-3">Patient</h2>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://i.pravatar.cc/60"
                                    alt="User"
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div className="text-sm text-gray-700">
                                    <p className="font-medium">Monique LACOSTE</p>
                                    <p>Sexe : F</p>
                                </div>
                            </div>

                            <div className="text-sm text-gray-700">
                                <p>Date de naissance :</p>
                                <p className="font-medium">08/02/1957 (68 ans)</p>
                            </div>
                        </div>
                    </div>

                    {/* Informations Details */}
                    <div>
                        <h2 className="font-semibold text-gray-900 text-lg mb-3">Informations – Détails</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Suivi médical */}
                            <div>
                                <h3 className="font-semibold text-[#1B76BA]">Suivi médical</h3>
                                <ul className="list-disc ml-5 mt-2 text-gray-700 text-sm space-y-1">
                                    <li>Cs Cardiologue dans les deux mois</li>
                                    <li>Téléconsultation Post-op avec le chirurgien cardiaque dans les 6 semaines</li>
                                </ul>

                                <h3 className="font-semibold text-[#1B76BA] mt-4">Logistique</h3>
                                <ul className="list-disc ml-5 mt-2 text-gray-700 text-sm space-y-1">
                                    <li>Installation Lit médicalisé</li>
                                    <li>Installation Barres d’appui</li>
                                </ul>
                            </div>

                            {/* Sortie d’hospitalisation */}
                            <div>
                                <h3 className="font-semibold text-gray-900">Sortie d’hospitalisation le 30 avril (matin)</h3>

                                <h4 className="font-semibold text-[#1B76BA] mt-3">Soins</h4>
                                <ul className="list-disc ml-5 mt-2 text-gray-700 text-sm space-y-1">
                                    <li>Infirmier(e) 2x/jr pendant 15 jours</li>
                                    <li>Cs Diététicienne au moins une fois</li>
                                    <li>Cs Psychologue au moins à deux reprises</li>
                                </ul>

                                <h4 className="font-semibold text-[#1B76BA] mt-4">Consignes</h4>
                                <ul className="list-disc ml-5 mt-2 text-gray-700 text-sm space-y-1">
                                    <li>Surveillance accrue</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* Compte rendu */}
                    <div className="py-4 flex items-center gap-2 border-y-2 border-gray-200">
                        <Calendar size={18} className="text-[#1B76BA]" />
                        <span className="font-medium text-gray-800">Compte Rendu Hospitalisation</span>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3 mt-6">
                        <GradientBtn text="Ajout d’une Prestation" />
                        <GradientBtn text="Modification Date de RDV" />
                        <GradientBtn text="Assistance" />
                    </div>
                </div>

                {/* ================= RIGHT SIDEBAR ================= */}
                <div className="md:col-span-1 bg-[var(--secondary)] text-white">

                    <div className="w-full bg-[#6BDAC9] p-4 rounded-xl space-y-6">

                        {/* ======== CALENDAR CARD ======== */}
                        <div className="bg-white rounded-xl shadow p-5">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-3 text-gray-800">
                                <h2 className="font-semibold">Calendrier</h2>
                                <div className="flex items-center gap-1">
                                    <ChevronLeft size={16} className="cursor-pointer" />
                                    <span className="font-medium text-[#3b89cc]">March 2024</span>
                                    <ChevronRight size={16} className="cursor-pointer" />
                                </div>
                            </div>

                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-700">
                                {[
                                    "", "", "27", "28", "29", "1", "2", "3", "4",
                                    "5", "6", "7", "8", "9", "10",
                                    "11", "12", "13", "14", "15", "16",
                                    "17", "18", "19", "20", "21", "22",
                                    "23", "24", "25", "26", "27", "28",
                                    "29", "30", "31"
                                ].map((day, i) => (
                                    <div
                                        key={i}
                                        className={`
                h-8 w-8 flex items-center justify-center rounded-full
                ${day === "19" ? "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-white font-semibold" : "hover:bg-gray-100"}
              `}
                                    >
                                        {day}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ======== RDV CARD ======== */}
                        <div className="bg-white rounded-xl shadow p-5">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="font-semibold text-gray-800">RDV</h2>

                                <button className="flex items-center gap-1 text-sm border rounded-2xl px-2 py-1 text-gray-600 hover:bg-gray-100">
                                    <Calendar size={15} /> Date
                                </button>
                            </div>

                            {/* RDV List */}
                            <div className="space-y-3">
                                <RdvItem />
                                <RdvItem />
                                <RdvItem />
                                <RdvItem />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

/* ================== COMPONENTS ================== */

function IconCircle({ icon }) {
    return (
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[#1B76BA] bg-green-50 border border-gray-100">
            {icon}
        </div>
    );
}

function GradientBtn({ text }) {
    return (
        <button className="px-5 py-2 rounded-full text-white font-medium bg-gradient-to-r from-[#1B76BA] to-[#63E0C3] shadow hover:opacity-90 transition">
            {text}
        </button>
    );
}

function RdvItem() {
    return (
        <div className="bg-green-50 rounded-lg p-3 cursor-pointer hover:bg-gray-200 transition">
            <h3 className="font-semibold text-gray-800 text-sm">Title</h3>
            <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet</p>
        </div>
    );
}
