"use client";

export default function RegionDepartmentStats() {
    return (
        <div className="w-full bg-white py-10">
            <div className="mx-auto px-6">

                {/* -------------------- REGION SECTION -------------------- */}
                <div className="bg-white border border-gray-200 shadow-md rounded-xl p-6 mb-8">
                    <h3 className="font-semibold text-gray-800 mb-4">Région - IDF</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        {/* ---- LITS DISPONIBLES ---- */}
                        <div>
                            <h4 className="text-[#1E7BB5] font-semibold mb-3">Lits (disponibles)</h4>
                            {[
                                ["Médecine", 60],
                                ["Chirurgie", 60],
                                ["Oncologie", 35],
                                ["Gynécologie", 25],
                                ["Pédiatrie", 30],
                                ["Personnes Âgées", 40],
                            ].map(([label, value]) => (
                                <div key={label} className="flex justify-between items-center mb-2">
                                    <span className="text-gray-700">{label}</span>
                                    <span className="bg-[#E8F5F2] text-gray-700 px-3 py-1 rounded-md text-sm">{value}</span>
                                </div>
                            ))}
                        </div>

                        {/* ---- SECTEUR ---- */}
                        <div>
                            <h4 className="text-[#1E7BB5] font-semibold mb-3">Secteur</h4>
                            {[
                                ["Public", 115],
                                ["Privé", 80],
                                ["ESPIC", 56],
                            ].map(([label, value]) => (
                                <div key={label} className="flex justify-between items-center mb-2">
                                    <span className="text-gray-700">{label}</span>
                                    <span className="bg-[#E8F5F2] text-gray-700 px-3 py-1 rounded-md text-sm">{value}</span>
                                </div>
                            ))}
                        </div>

                        {/* ---- BLOC OPÉRATOIRE ---- */}
                        <div>
                            <h4 className="text-[#1E7BB5] font-semibold mb-3">Bloc opératoire</h4>
                            {[
                                ["Disponible(s)", 20],
                                ["Public", 10],
                                ["Privé", 6],
                                ["ESPIC", 4],
                            ].map(([label, value]) => (
                                <div key={label} className="flex justify-between items-center mb-2">
                                    <span className="text-gray-700">{label}</span>
                                    <span className="bg-[#E8F5F2] text-gray-700 px-3 py-1 rounded-md text-sm">{value}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* -------------------- DÉPARTEMENT SECTION -------------------- */}
                <div className="bg-white border border-gray-200 shadow-md rounded-xl p-6 mb-12">
                    <div className="flex items-center justify-between mb-5">
                        <h3 className="font-semibold text-gray-800">Liste Département</h3>

                        <select className="rounded-md px-2 py-1 text-sm text-gray-600 bg-green-50">
                            <option>75 - Paris</option>
                            <option>77 - Seine-et-Marne</option>
                            <option>78 - Yvelines</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        {/* ---- LITS DISPONIBLES ---- */}
                        <div>
                            <h4 className="text-[#1E7BB5] font-semibold mb-3">Lits (disponibles)</h4>
                            {[
                                ["Médecine", 12],
                                ["Chirurgie", 12],
                                ["Oncologie", 7],
                                ["Gynécologie", 5],
                                ["Pédiatrie", 6],
                                ["Personnes Âgées", 8],
                            ].map(([label, value]) => (
                                <div key={label} className="flex justify-between items-center mb-2">
                                    <span className="text-gray-700">{label}</span>
                                    <span className="bg-[#E8F5F2] text-gray-700 px-3 py-1 rounded-md text-sm">{value}</span>
                                </div>
                            ))}
                        </div>

                        {/* ---- SECTEUR ---- */}
                        <div>
                            <h4 className="text-[#1E7BB5] font-semibold mb-3">Secteur</h4>
                            {[
                                ["Public", 23],
                                ["Privé", 16],
                                ["ESPIC", 11],
                            ].map(([label, value]) => (
                                <div key={label} className="flex justify-between items-center mb-2">
                                    <span className="text-gray-700">{label}</span>
                                    <span className="bg-[#E8F5F2] text-gray-700 px-3 py-1 rounded-md text-sm">{value}</span>
                                </div>
                            ))}
                        </div>

                        {/* ---- BLOC OPÉRATOIRE ---- */}
                        <div>
                            <h4 className="text-[#1E7BB5] font-semibold mb-3">Bloc opératoire</h4>
                            {[
                                ["Disponible(s)", 4],
                                ["Public", 2],
                                ["Privé", 2],
                                ["ESPIC", 0],
                            ].map(([label, value]) => (
                                <div key={label} className="flex justify-between items-center mb-2">
                                    <span className="text-gray-700">{label}</span>
                                    <span className="bg-[#E8F5F2] text-gray-700 px-3 py-1 rounded-md text-sm">{value}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* -------------------- GRADIENT BUTTON -------------------- */}
                <div className="w-full flex justify-center">
                    <button className="bg-gradient-to-r from-[#1E67B5] to-[#57D0BF] text-white font-medium px-10 py-3 rounded-full shadow-lg hover:opacity-90 transition">
                        Demande <br /> Conciergerie Médicale
                    </button>
                </div>
            </div>
        </div>
    );
}
