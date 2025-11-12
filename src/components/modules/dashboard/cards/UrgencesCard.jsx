"use client";

export default function UrgencesCard() {
    const data = [
        { value: "120", label: "Services d’Urgences" },
        { value: "4h23", label: "Temps d’attente moyen" },
        { value: "98%", label: "Taux d’occupation" },
        { value: "10 000", label: "Activité Patient" },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-5">
            {/* Title */}
            <h3 className="font-semibold text-gray-800 text-base md:text-lg mb-3">
                Urgences
            </h3>

            {/* Data blocks */}
            <div className="space-y-2">
                {data.map((item, i) => (
                    <div
                        key={i}
                        className="bg-[#F8FCFB] rounded-lg p-3 md:p-4"
                    >
                        <p className="text-[18px] font-bold text-gray-800 leading-tight">
                            {item.value}
                        </p>
                        <p className="text-sm text-gray-500">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
