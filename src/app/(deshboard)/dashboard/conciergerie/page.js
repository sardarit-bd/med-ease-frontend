"use client";

import { Calendar, Clock, Heart } from "lucide-react";

export default function ConciergeriePage() {
    return (
        <div className="min-h-screen bg-[#F7F9FB] flex gap-4">

            {/* LEFT SIDE MAIN */}
            <div className="flex-1">

                {/* PAGE TITLE */}
                <h1 className="text-[#2A6EBB] text-xl font-semibold mb-6">
                    Conciergerie Médicale
                </h1>

                {/* TOP PROGRAM CARD */}
                <div className="bg-white shadow rounded-xl p-6">
                    <h2 className="text-center text-gray-700 font-medium mb-6 w-full py-3 bg-green-50 rounded-md border border-gray-200">
                        Programmation Retour à domicile (Post Hospitalisation)
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        {/* COLUMN 1 – Rendez-vous */}
                        <div>
                            <h3 className="text-gray-800 font-semibold mb-3">Rendez-vous</h3>

                            <div className="flex items-start gap-2 text-sm text-gray-600">
                                <Calendar size={16} className="mt-[2px] text-green-300" />
                                <div>
                                    <p>Mercredi 30 avril</p>
                                    <p>16h</p>
                                </div>
                            </div>
                        </div>

                        {/* COLUMN 2 – Informations */}
                        <div>
                            <h3 className="text-gray-800 font-semibold mb-3">Informations</h3>

                            <SimpleField label="Motif" value="RAD : Post Hospitalisation" />
                            <SimpleField label="Document" value="Cst Hosp et d" />
                            <SimpleField label="Opérateur" value="SAMBA Sylverie" />
                        </div>

                        {/* COLUMN 3 – Informations complémentaires */}
                        <div>
                            <h3 className="text-gray-800 font-semibold mb-3">
                                Informations complémentaire
                            </h3>

                            <SimpleField label="Présence" value="Patient(e)" />
                            <SimpleField label="Accompagnant" value="Fille" />
                            <SimpleField label="Couverture social" value="SS + Mutuelle" />
                        </div>
                    </div>
                </div>

                {/* TITLE: Prise en charge */}
                <h2 className="text-xl text-gray-800 font-semibold mt-10 mb-4">
                    Prise en charge
                </h2>

                {/* CARE GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Suivi médical */}
                    <CareCard title="Suivi médical">
                        <CareItem
                            title="Cs Cardio"
                            date="Mercredi 7 mai"
                            time="10h30"
                            doctor="Dr Lefevre"
                        />

                        <CareItem
                            title="Téléconsultation Cardio"
                            date="Lundi 28 mai"
                            time="18h30"
                            doctor="Dr Donald"
                            icon={<Heart size={14} className="text-red-500" />}
                        />
                    </CareCard>

                    {/* Soins */}
                    <CareCard title="Soins">
                        <CareItem
                            title="Infirmier(e)"
                            date="1 mai au 15 mai"
                            time="8h00 et 20h00"
                            doctor="Cabinet Care Ange"
                            motif="Programmation suivi (Post / ATB / Ablation agrafes / Prise de sang / Suivi cste)"
                        />

                        <CareItem
                            title="Diététicien(ne)"
                            date="Lundi 5 mai"
                            time="14h00"
                            doctor="Mme Vince"
                            motif="Fiche Educative alimentation cardio"
                        />

                        <CareItem
                            title="Psychologue"
                            date="Lundi 12 mai"
                            time="14h00"
                            doctor="Mme Lesure"
                        />
                    </CareCard>

                    {/* Logistique */}
                    <CareCard title="Logistique">
                        <CareItem
                            title="Lit Médicalisé"
                            date="samedi 3 mai"
                            time="le matin"
                            doctor="Distribmed"
                            motif="Installation"
                        />

                        <CareItem
                            title="Barres d’appui"
                            date="Mardi 6 mai"
                            time="l'après-midi"
                            doctor="Eolis Santé"
                            motif="Installation"
                        />
                    </CareCard>

                    {/* Consignes */}
                    <CareCard title="Consignes">
                        <div className="text-sm text-gray-700">
                            <p className="font-semibold">Surveillance</p>
                            <p className="mt-2">
                                Tâche : Activation télésurveillance + Alerte CM
                            </p>
                            <p className="mt-2">
                                Team : Sortie Hospitalisation Cardio
                            </p>
                        </div>
                    </CareCard>
                </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <RightSidebar />
        </div>
    );
}

/* ---------------- REUSABLE COMPONENTS ---------------- */

function SimpleField({ label, value }) {
    return (
        <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">{label} :</span> {value}
        </p>
    );
}

function CareCard({ title, children }) {
    return (
        <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-gray-800 font-semibold mb-3">{title}</h3>
            <div className="space-y-4">{children}</div>
        </div>
    );
}

function CareItem({ title, date, time, doctor, motif, icon }) {
    return (
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">


            <p className="font-semibold text-gray-800 flex items-center gap-1">
                {title} {icon}
            </p>


            <div className="flex items-center justify-between my-4">
                {/* Date */}
                <div className="flex items-center gap-2  text-gray-600 text-md">
                    <Calendar size={20} className="text-green-300" /> {date}
                </div>

                {/* Time */}
                <div className="flex items-center gap-2 text-gray-600 text-md">
                    <Clock size={20} className="text-green-300" /> {time}
                </div>
            </div>


            <div className="flex items-center justify-between my-3">

                <p classname="text-sm text-gray-800 mt-1">{doctor}</p>

                <button className="px-3 py-3 bg-gradient-to-r from-[#2A6EBB] to-[#61D0BF] text-white text-xs rounded-full">
                    Aperçu profil
                </button>
            </div>

            {/* Doctor */}

            {/* Motif */}
            {motif && (
                <p className="text-xs text-gray-600 mt-6">
                    <span className="font-semibold">Motif :</span> {motif}
                </p>
            )}
        </div>
    );
}

/* ---------------- SIDEBAR ---------------- */

function RightSidebar() {
    return (
        <div className="w-[300px] min-w-[300px] rounded-xl bg-gradient-to-b from-[#2A6EBB] to-[#61D0BF] p-4 text-white shadow-lg">

            {/* Agenda Title */}
            <h3 className="text-white font-semibold text-lg mb-4">Agenda</h3>

            <SidebarCard
                title="Cabinet Care Ange"
                subtitle="Jeudi 1 mai"
                t1="8h00"
                t2="20h00"
            />

            <SidebarCard
                title="Dr Lefevre"
                subtitle="Mercredi 7 mai"
                t1="10h30"
            />

            {/* Team */}
            <h3 className="text-white font-semibold text-lg mt-6 mb-3">Team</h3>

            <div className="bg-white rounded-sm p-3 text-gray-800 text-sm">
                <p className="font-semibold">Médecin Traitant</p>
                <p className="text-[#7B7B7B] py-2 border-b border-gray-200">Dr Doue</p>

                <div className="mt-3 text-[#7B7B7B]">
                    <p className="font-semibold mb-1 text-[#2B2B2B]">Sortie d’hospitalisation Cardio</p>
                    <p>Chirurgien : Dr Donald</p>
                    <p>Cardiologue : Dr Lefevre</p>
                    <p>Paramed : Cabinet Care Ange</p>
                    <p>Diététicien(ne) : Mme Vinci</p>
                    <p>Psychologue : Mme Lesure</p>
                </div>
            </div>

            {/* ACTIVE BUTTON */}
            <div className="flex justify-center mt-6">
                <button className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold px-10 py-2 rounded-3xl shadow">
                    Active ✓
                </button>
            </div>
        </div>
    );
}

function SidebarCard({ title, subtitle, t1, t2 }) {
    return (
        <div className="bg-white rounded-sm p-3 mb-3 text-gray-800 text-sm text-center">
            <p className="text-[#3074B5]">{title}</p>
            <p className="text-[#7B7B7B]">{subtitle}</p>

            <div className="flex items-center justify-center gap-3 my-4">
                <span className="bg-[#61D0BF0F] rounded px-2 py-1">{t1}</span>
                {t2 && <span className="bg-[#61D0BF0F] rounded px-2 py-1">{t2}</span>}
            </div>
        </div>
    );
}
