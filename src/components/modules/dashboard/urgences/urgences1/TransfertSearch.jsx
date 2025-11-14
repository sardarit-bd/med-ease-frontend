"use client";

export default function TransfertSearch() {
    return (
        <section className="bg-white rounded-xl shadow p-6 mt-8">

            <h2 className="text-gray-800 font-semibold mb-4">Transfert</h2>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* DISCIPLINE */}
                <div>
                    <h3 className="text-[#2A6EBB] font-semibold mb-3">Discipline</h3>

                    <Field label="Secteur" />
                    <Field label="Service" />
                </div>

                {/* ÉTABLISSEMENT */}
                <div>
                    <h3 className="text-[#2A6EBB] font-semibold mb-3">Établissement</h3>

                    <Field label="Statut Juridique" />
                    <Field label="Chambre" />
                </div>

                {/* TRANSFER */}
                <div>
                    <h3 className="text-[#2A6EBB] font-semibold mb-3">Transfer</h3>

                    <Field label="Date" />
                    <Field label="Horaire" />
                    <Field label="Prise en charge" />
                    <Field label="Mode de transport" />
                    <Field label="Consigne(s)" />
                </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex justify-center mt-10">
                <button className="px-10 py-2 rounded-full text-white font-medium bg-gradient-to-r from-[#2A6EBB] to-[#61D0BF] shadow-md hover:scale-[1.03] transition">
                    Recherche
                </button>
            </div>
        </section>
    );
}

/* REUSABLE SMALL FIELD */
function Field({ label }) {
    return (
        <div className="mb-3">
            <p className="text-gray-600 text-sm mb-1">{label}</p>
            <div className="h-6 w-32 rounded-md bg-[#EEF9FB]" />
        </div>
    );
}
