import { usePrescriptions } from "@/hooks";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function RightColumn() {
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
    <>
      {/* Pillulier Virtuel */}
      <div className="rounded-xl p-5 text-white bg-gradient-to-br from-[#5146F5] via-[#9A57F1] to-[#4AC7F9] shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">Pilulier Virtuel</h3>
          <ChevronRight size={20} className="opacity-80" />
        </div>
        <p className="text-sm opacity-90 mt-1">
          Gérez vos traitements quotidiens avec rappels intelligents
        </p>
        <p className="mt-4 text-xs opacity-90">{`• ${summary?.todayDosesCount} prises confirmées aujourd’hui`}</p>
      </div>

      {/* Pharmacie Virtuelle */}
      <div className="rounded-xl p-5 text-white bg-gradient-to-br from-[#1BB8AA] to-[#0567D9] shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">Pharmacie Virtuelle</h3>
          <ChevronRight size={20} className="opacity-80" />
        </div>
        <p className="text-sm opacity-90 mt-1">
          Consultez votre stock et trouvez des pharmacies
        </p>
        <p className="mt-4 text-xs opacity-90">{`• ${summary?.expiringMedicinesCount} médicaments périmés`}</p>
      </div>
    </>
  );
}
