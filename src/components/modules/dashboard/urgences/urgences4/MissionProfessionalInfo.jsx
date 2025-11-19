export default function MissionProfessionalInfo() {
    return (
        <div className="w-full bg-[#61D0BF0F] px-6 py-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* LEFT: Mission Info */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Mission info</h3>

                    {/* Row 1 */}
                    <div className="flex flex-wrap gap-3 mb-5">
                        <LabelItem label="Date :" value="21 avril 2025" />
                        <LabelItem label="Période :" value="Nuit" />
                        <LabelItem label="Secteur :" value="Médecine" />
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap gap-3 mb-5">
                        <LabelItem label="Horaire :" value="19h00–7h00" />
                        <LabelItem label="Service :" value="Urgences–Zones" />
                        <LabelItem label="" value="Médecine polyvalente" />
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-wrap gap-3">
                        <LabelItem label="Métier :" value="IDE" />
                        <LabelItem label="Établissement :" value="Hôpital La Genneviève" />
                    </div>
                </div>

                {/* RIGHT: Professionnel */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Professionnel</h3>

                    {/* Row 1 */}
                    <div className="flex flex-wrap gap-3 mb-5">
                        <LabelItem label="Profil :" value="(vide)" />
                        <LabelItem label="Compétences :" value="(vide)" />
                        <LabelItem label="Missions :" value="(vide)" />
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap gap-3 mb-5">
                        <LabelItem label="Expérience :" value="3-5 ans" />
                        <LabelItem label="Taux horaire :" value="standard" />
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-wrap gap-3">
                        <LabelItem label="Type de contrat :" value="Intérim" />
                        <LabelItem label="" value="Vacation" />
                    </div>
                </div>

            </div>
        </div>
    );
}

function LabelItem({ label, value }) {
    return (
        <div className="flex items-center gap-1">
            {label && <span className="text-gray-500 text-sm">{label}</span>}
            <span className="px-3 py-1 rounded-full bg-white text-sm text-gray-700 border border-gray-200">
                {value}
            </span>
        </div>
    );
}
