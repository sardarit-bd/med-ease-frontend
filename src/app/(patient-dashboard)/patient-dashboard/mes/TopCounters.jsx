"use client";
export default function TopCounters() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

            {/* Actives */}
            <div className="bg-white p-4 rounded-xl shadow border text-center">
                <p className="text-sm font-medium text-blue-600">Actives</p>
                <h2 className="text-3xl font-bold text-blue-600 mt-2">3</h2>
            </div>

            {/* Médicaments */}
            <div className="bg-white p-4 rounded-xl shadow border text-center">
                <p className="text-sm font-medium text-green-600">Médicaments</p>
                <h2 className="text-3xl font-bold text-green-600 mt-2">6</h2>
            </div>

            {/* À renouveler */}
            <div className="bg-white p-4 rounded-xl shadow border text-center">
                <p className="text-sm font-medium text-orange-600">À renouveler</p>
                <h2 className="text-3xl font-bold text-orange-600 mt-2">1</h2>
            </div>

            {/* Prescripteurs */}
            <div className="bg-white p-4 rounded-xl shadow border text-center">
                <p className="text-sm font-medium text-purple-600">Prescripteurs</p>
                <h2 className="text-3xl font-bold text-purple-600 mt-2">3</h2>
            </div>

        </div>
    )
}
