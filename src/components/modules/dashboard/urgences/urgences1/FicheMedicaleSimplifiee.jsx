"use client";

export default function FicheMedicaleSimplifiee() {
    return (
        <section className="bg-white rounded-xl shadow p-6 mt-6">
            <h2 className="text-gray-800 font-semibold mb-4">
                Fiche Médicale Simplifiée
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* IDENTITÉ */}
                <div>
                    <h3 className="text-[#2A6EBB] font-semibold mb-3">Identité</h3>

                    <Info label="INS" value="5000000" />
                    <Info label="IPP" value="235-457" />
                    <Info label="Sexe" value="Féminin" />
                    <Info label="Nom" value="Oui" />
                    <Info label="Prénom" value="Marie" />
                    <Info label="Date de naissance" value="04/03/1970" />
                </div>

                {/* CLINIQUE */}
                <div>
                    <h3 className="text-[#2A6EBB] font-semibold mb-3">Clinique</h3>

                    <Info label="Diagnostic" value="Cancer pulmonaire" />
                    <Info label="Intervention prévue" value="Lobectomie supérieure droite" />
                    <Info label="Niveau de surveillance requis" value="Renforcé" />
                    <Info label="Traitement en cours" value="aucun" />
                    <Info label="Dispositif" value="VVP" />
                    <Info label="Drain" value="Drain thoracique" />
                    <Info label="Autonomie" value="autonome" />
                    <Info label="Cognition" value="lucide" />
                    <Info label="Antécédents" value="HTA/BPCO" />
                </div>

                {/* HOSPITALISATION */}
                <div>
                    <h3 className="text-[#2A6EBB] font-semibold mb-3">Hospitalisation</h3>

                    <Info label="Durée de séjour" value="9h45min" />
                    <Info label="Événement lors de l’hospitalisation" value="pose drain thoracique" />
                    <Info label="Risque infectieux" value="non" />
                    <Info label="Nom" value="Oui" />
                    <Info label="Couverture sociale" value="SS + mutuelle" />
                </div>

                {/* TRANSFERT */}
                <div>
                    <h3 className="text-[#2A6EBB] font-semibold mb-3">Transfert</h3>

                    <Info label="Urgence transfert" value="<24h" />
                    <Info label="Mode de transport" value="ambulance médicalisée" />
                    <Info label="Date" value="aujourd’hui" />
                    <Info label="Horaire" value="dès que possible" />
                    <Info label="Partenaire prioritaire" value="oui" />
                </div>
            </div>
        </section>
    );
}

/* REUSABLE COMPONENT */
function Info({ label, value }) {
    return (
        <div className="mb-2 flex flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-center gap-1">
            <p className="text-gray-700 text-sm">{label}</p>
            <span className="inline-block mt-1 text-xs bg-[#EEF9FB] text-gray-700 px-2 py-2 rounded-md">
                {value}
            </span>
        </div>
    );
}
