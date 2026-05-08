import { AlertCircle, Clock, Pill } from "lucide-react";
import { useEffect, useState } from "react";

export default function Summery() {
  // const { fetchDashboardSummary } = usePrescriptions();
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const loadSummary = async () => {
      const data = await fetchDashboardSummary();
      setSummary(data);
    };
    loadSummary();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {/* Card 1 */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2">
          <Pill className="text-red-500" size={20} />
          <span className="text-red-500 text-sm font-medium">Alerte</span>
        </div>
        <h1 className="text-4xl font-bold mt-3 text-red-500">
          {summary?.lowStockMedicinesCount}
        </h1>
        <p className="text-gray-600 mt-1 text-sm">Stock bas à renouveler</p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2">
          <AlertCircle className="text-blue-500" size={20} />
          <span className="text-blue-500 text-sm font-medium">Info</span>
        </div>
        <h1 className="text-4xl font-bold mt-3 text-blue-500">
          {summary?.expiringMedicinesCount}
        </h1>
        <p className="text-gray-600 mt-1 text-sm">Médicaments périmés</p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2">
          <Clock className="text-purple-500" size={20} />
          <span className="text-purple-500 text-sm font-medium">
            Aujourd’hui
          </span>
        </div>
        <h1 className="text-4xl font-bold mt-3 text-purple-500">
          {summary?.todayDosesCount}
        </h1>
        <p className="text-gray-600 mt-1 text-sm">Traitements à prendre</p>
      </div>
    </div>
  );
}
