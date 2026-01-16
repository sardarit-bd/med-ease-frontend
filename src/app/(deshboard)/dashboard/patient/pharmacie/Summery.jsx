import { usePrescriptions } from '@/hooks';
import { AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Summery() {
    const { fetchDashboardSummary } = usePrescriptions();
    const [summary, setSummary] = useState(null);

    useEffect(() => {
        const loadSummary = async () => {
            const data = await fetchDashboardSummary();
            setSummary(data);
        };
        loadSummary();
    }, []);

    if (!summary) {
        return <span>Loading...</span>
    }
    console.log("summary", summary);
    return (

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6" >
            {/* Perimés */}
            <div className="bg-white p-4 rounded-xl shadow border border-red-100 text-center" >
                <p className="text-sm text-red-500 font-medium flex items-center justify-center gap-1">
                    <AlertCircle size={14} /> Médicaments périmés
                </p>
                <h2 className="text-2xl font-bold text-red-500 mt-1">{summary?.expiringMedicinesCount || 0}</h2>
            </div>

            {/* Stock bas */}
            <div className="bg-white p-4 rounded-xl shadow border border-orange-100 text-center" >
                <p className="text-sm text-orange-500 font-medium">Stock bas</p>
                <h2 className="text-2xl font-bold text-orange-500 mt-1">{summary?.lowStockMedicinesCount || 0}</h2>
            </div>

            {/* Expire bientôt */}
            <div className="bg-white p-4 rounded-xl shadow border border-blue-100 text-center" >
                <p className="text-sm text-blue-500 font-medium">Expire bientôt</p>
                <h2 className="text-2xl font-bold text-blue-500 mt-1">1</h2>
            </div>
        </div>
    )
}
