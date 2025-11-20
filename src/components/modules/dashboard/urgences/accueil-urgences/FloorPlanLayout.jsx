
export default function FloorPlanLayout() {
    const Room = ({ title, color, children, className = "" }) => (
        <div className={`${color} rounded-lg p-3 ${className}`}>
            <div className="font-semibold text-sm mb-2">{title}</div>
            {children}
        </div>
    );

    const RoomBox = ({ label, number, hasIcon = false }) => (
        <div className="bg-white/30 border-2 border-white border-dashed rounded p-2 mb-2">
            <div className="flex items-center justify-between">
                <span className="text-xs font-medium">{label}</span>
                {hasIcon && <span className="text-yellow-400">⚠️</span>}
            </div>
            <div className="text-xs mt-1">{number}</div>
            <div className="text-xs">Medecin: 0h/Sm</div>
            <div className="text-xs">Consultant</div>
        </div>
    );

    const SimpleRoom = ({ label, number, color = "bg-yellow-100" }) => (
        <div className={`${color} rounded-lg p-3 border border-gray-300`}>
            <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold">{label}</span>
                <span className="text-yellow-400">⚠️</span>
            </div>
            <div className="text-xs">{number}</div>
            <div className="text-xs">Medecin: 0h/Sm</div>
            <div className="text-xs">Consultant</div>
        </div>
    );

    return (
        <div className="w-full min-h-screen bg-gray-100 p-4">
            {/* Top Row */}
            <div className="grid grid-cols-12 gap-3 mb-3">
                {/* Atomis IAO */}
                <div className="col-span-2">
                    <Room title="Atomis IAO" color="bg-teal-400">
                        <RoomBox label="TAVARES" number="➊" hasIcon />
                        <div className="bg-white rounded p-2 text-xs text-center">Section</div>
                    </Room>
                </div>

                {/* Salle d'attente */}
                <div className="col-span-4">
                    <Room title="Salle d'attente" color="bg-teal-400">
                        <div className="grid grid-cols-3 gap-2">
                            <RoomBox label="TAVARES" number="➋" hasIcon />
                            <RoomBox label="TAVARES" number="➌" hasIcon />
                            <RoomBox label="TAVARES" number="➍" />
                        </div>
                    </Room>
                </div>

                {/* Regulation Scolaire */}
                <div className="col-span-2">
                    <Room title="Regulation Scolaire" color="bg-pink-200">
                        <RoomBox label="TAVARES" number="➊" hasIcon />
                        <div className="text-xs">Medecin: 0h/Sm</div>
                        <div className="text-xs">Consultant</div>
                    </Room>
                </div>

                {/* Attente PSY */}
                <div className="col-span-2">
                    <Room title="Attente PSY" color="bg-green-200">
                        <RoomBox label="TAVARES" number="➊" hasIcon />
                        <div className="text-xs">Medecin: 0h/Sm</div>
                        <div className="text-xs">Consultant</div>
                    </Room>
                </div>

                {/* BOX PSY Rooms */}
                <div className="col-span-2">
                    <div className="grid grid-cols-2 gap-2">
                        <SimpleRoom label="BOX PSY 1" number="" color="bg-yellow-200" />
                        <SimpleRoom label="BOX PSY 2" number="" color="bg-white" />
                        <SimpleRoom label="BOX PSY 3" number="" color="bg-yellow-200" />
                        <SimpleRoom label="BOX PSY 4" number="" color="bg-white" />
                    </div>
                </div>
            </div>

            {/* IOA Rooms Row */}
            <div className="grid grid-cols-12 gap-3 mb-3">
                <div className="col-span-10">
                    <div className="grid grid-cols-8 gap-2">
                        {['IOA 01', 'IOA 02', 'IOA 03', 'IOA 04'].map((room, idx) => (
                            <div key={idx} className="col-span-2 bg-gray-200 rounded-lg p-3 text-center text-sm font-medium">
                                {room}
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-8 gap-2 mt-2">
                        {['IOA 10', 'IOA 05', 'IOA 06', 'IOA 04'].map((room, idx) => (
                            <div key={idx} className="col-span-2 bg-gray-200 rounded-lg p-3 text-center text-sm font-medium">
                                {room}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-span-2">
                    <Room title="Regulation RAD" color="bg-blue-300">
                        <RoomBox label="TAVARES" number="➊" hasIcon />
                        <div className="text-xs">Medecin: 0h/Sm</div>
                        <div className="text-xs">Consultant</div>
                    </Room>
                </div>
            </div>

            {/* Main Area - DECHOC, SAMU, Radio Section */}
            <div className="grid grid-cols-12 gap-3 mb-3">
                {/* DECHOC */}
                <div className="col-span-2">
                    <Room title="DECHOC" color="bg-red-500 text-white">
                        <div className="space-y-2">
                            <RoomBox label="TAVARES" number="➊" />
                            <div className="bg-white/20 border-2 border-white border-dashed rounded p-2">
                                <div className="text-xs">DECHOC2</div>
                            </div>
                            <div className="bg-white/20 border-2 border-white border-dashed rounded p-2">
                                <div className="text-xs">DECHOC3</div>
                            </div>
                            <div className="bg-white/20 border-2 border-white border-dashed rounded p-2">
                                <div className="text-xs">DECHOC4</div>
                            </div>
                        </div>
                    </Room>
                </div>

                {/* SAMU */}
                <div className="col-span-5">
                    <Room title="SAMU" color="bg-orange-400">
                        <div className="grid grid-cols-3 gap-2">
                            <div className="space-y-2">
                                <RoomBox label="TAVARES" number="➋" />
                                <RoomBox label="TAVARES" number="➌" />
                            </div>
                            <div className="col-span-2 grid grid-cols-2 gap-2">
                                <div className="bg-orange-300 rounded p-2 text-xs">SAMU 02</div>
                                <div className="bg-orange-300 rounded p-2 text-xs">SAMU 03</div>
                                <div className="bg-orange-200 rounded p-2 text-xs">SAMU 04</div>
                                <div className="bg-orange-200 rounded p-2 text-xs flex items-center justify-center">
                                    <span className="text-white font-bold">TAVARES</span>
                                </div>
                            </div>
                        </div>
                    </Room>
                </div>

                {/* Radio / Scanner / Echo */}
                <div className="col-span-2">
                    <Room title="Radio / Scanner / Echo" color="bg-gray-600 text-white">
                        <RoomBox label="TAVARES" number="➊" hasIcon />
                        <div className="text-xs">Medecin: 0h/Sm</div>
                        <div className="text-xs">Consultant</div>
                    </Room>
                </div>

                {/* Projet */}
                <div className="col-span-3">
                    <Room title="Projet" color="bg-orange-300">
                        <div className="h-40 bg-orange-200 rounded"></div>
                    </Room>
                </div>
            </div>

            {/* Zone D'attente Couchée */}
            <div className="grid grid-cols-12 gap-3 mb-3">
                <div className="col-span-9">
                    <Room title="Zone D'attente Couchée" color="bg-teal-400">
                        <div className="grid grid-cols-7 gap-2">
                            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                                <SimpleRoom key={num} label={`BOX ${num}`} number="" />
                            ))}
                        </div>
                    </Room>
                </div>

                {/* Attente Debout */}
                <div className="col-span-2">
                    <Room title="Attente Debout" color="bg-yellow-100">
                        <RoomBox label="TAVARES" number="➊" hasIcon />
                    </Room>
                </div>

                {/* Sortie */}
                <div className="col-span-1">
                    <Room title="Sortie" color="bg-teal-300">
                        <div className="h-32 flex items-center justify-center">
                            <RoomBox label="TAVARES" number="➊" />
                        </div>
                    </Room>
                </div>
            </div>

            {/* Zone D'attente Assis */}
            <div className="grid grid-cols-12 gap-3 mb-3">
                <div className="col-span-9">
                    <Room title="Zone D'attente Assis" color="bg-teal-400">
                        <div className="h-24"></div>
                    </Room>
                </div>

                <div className="col-span-2">
                    <Room title="Regulation Ord" color="bg-yellow-100">
                        <RoomBox label="TAVARES" number="➊" hasIcon />
                    </Room>
                </div>

                <div className="col-span-1"></div>
            </div>

            {/* Bottom BOX Row */}
            <div className="grid grid-cols-9 gap-2">
                {Array.from({ length: 9 }, (_, i) => (
                    <SimpleRoom key={i} label={`BOX ${i + 6}`} number="" />
                ))}
            </div>
        </div>
    );
}