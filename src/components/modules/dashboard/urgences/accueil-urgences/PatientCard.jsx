export default function PatientCard({ name, age, time, note, color }) {
    return (
        <div className="bg-white shadow rounded-lg border p-2 w-full text-xs">
            <div className="flex items-center justify-between mb-1">
                <span className={`w-3 h-3 rounded-full`} style={{ background: color }}></span>
                <span className="font-semibold">{name}</span>
            </div>

            <p className="text-gray-700 text-[11px]">⏱ {time}</p>
            <p className="text-gray-700 text-[11px]">👤 {age} ans</p>
            <p className="text-[11px]">{note}</p>
        </div>
    );
}
