"use client";

export default function CarePathCard() {
    const requests = [
        "BORNE Charlotte, 67 ans, Lifting paupière",
        "DUSSO Benoit, 40 ans, pacemaker",
    ];

    const toFinalize = [
        "GUETTE Eva, 34 ans, césarienne",
        "Panot Jeanne, 45 ans, coloscopie",
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-5">
            {/* Title */}
            <h3 className="font-semibold text-gray-800 text-base md:text-lg mb-3">
                Care Path
            </h3>

            {/* Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* --- Left: Requests --- */}
                <div>
                    <h4 className="font-semibold text-[var(--primary)] text-sm mb-2">
                        Requests
                    </h4>
                    <div className="space-y-2">
                        {requests.map((item, i) => (
                            <div
                                key={i}
                                className="bg-[#F8FCFB] rounded-lg p-3 text-gray-700 text-sm"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- Right: To Finalize --- */}
                <div>
                    <h4 className="font-semibold text-[var(--primary)] text-sm mb-2">
                        To Finalize
                    </h4>
                    <div className="space-y-2">
                        {toFinalize.map((item, i) => (
                            <div
                                key={i}
                                className="bg-[#F8FCFB] rounded-lg p-3 text-gray-700 text-sm"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
