import { useDoses } from "@/hooks"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function DoseList() {
    const { fetchTodayDoses } = useDoses()
    const [doses, setDoses] = useState([])


    useEffect(() => {
        async function loadDoses() {
            const result = await fetchTodayDoses()
            setDoses(result)
        }
        loadDoses()
    }, [])

    if (doses.length == 0) {
        return <span>Loading...</span>
    }

    const takenMornnig = doses?.morning?.filter(dose => dose.status === 'taken')
    const takenNoon = doses?.noon?.filter(dose => dose.status === 'taken')
    const takenEvenning = doses?.evening?.filter(dose => dose.status === 'taken')


    const taken = (takenEvenning?.length || 0) + (takenMornnig?.length || 0) + (takenNoon?.length || 0)

    const totalDose = doses?.morning?.length + doses?.evening?.length + doses?.noon?.length
    const progress = Math.ceil((taken / totalDose) * 100)

    return (
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-lg">Mes traitements du jour</h2>
                <button className="text-blue-600 text-sm font-medium cursor-pointer"><Link href='/dashboard/patient/pilulier'>Voir tout</Link></button>
            </div>
            <p className="text-gray-500 text-sm">{totalDose} prises prévues</p>

            {/* List */}
            <div className="space-y-3 mt-5">
                {
                    doses && doses?.morning?.map((dose, i) => (
                        <div key={i} className="flex justify-between items-center p-3 border border-gray-200 rounded-xl" >
                            <div>
                                <h4 className="font-medium">{dose.medicine.name}</h4>
                                <p className="text-xs text-gray-500">Morning · {dose.medicine.dosage.amount + " " + dose.medicine.dosage.unit}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold text-gray-700">09:00</p>
                                <p className="text-xs text-gray-500">{dose.status}</p>
                            </div>
                        </div>
                    ))}

                {
                    doses && doses?.noon?.map((dose, i) => (
                        <div key={i} className="flex justify-between items-center p-3 border border-gray-200 rounded-xl" >
                            <div>
                                <h4 className="font-medium">{dose.medicine.name}</h4>
                                <p className="text-xs text-gray-500">Noon · {dose.medicine.dosage.amount + " " + dose.medicine.dosage.unit}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold text-gray-700">12:30</p>
                                <p className="text-xs text-gray-500">{dose.status}</p>
                            </div>
                        </div>
                    ))}

                {
                    doses && doses?.evening?.map((dose, i) => (
                        <div key={i} className="flex justify-between items-center p-3 border border-gray-200 rounded-xl" >
                            <div>
                                <h4 className="font-medium">{dose.medicine.name}</h4>
                                <p className="text-xs text-gray-500">Evening · {dose.medicine.dosage.amount + " " + dose.medicine.dosage.unit}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold text-gray-700">19:00</p>
                                <p className="text-xs text-gray-500">{dose.status}</p>
                            </div>
                        </div>
                    ))}

            </div>

            {/* Progress Bar */}
            {progress ? <div className="mt-5">
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div style={{ width: `${progress}%` }} className={`h-full bg-green-500`}></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">Observance du jour <span className="text-green-600 font-medium">{progress}%</span></p>
            </div> : ""}
        </div >
    )
}
