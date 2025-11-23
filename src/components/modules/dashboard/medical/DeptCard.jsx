export default function DeptCard({ title, beds, percentage, color }) {
    return (
        <div style={{
            borderLeft: `4px solid ${color}`
        }} className="p-5 bg-white rounded-md shadow-sm">
            <div className="flex justify-between">
                <h3 className="text-[var(--textDark)] font-semibold">{title}</h3>
                <span style={{ color: color }} className="font-bold">{beds}</span>
            </div>

            <div className="w-full bg-[var(--brandColorLight)] h-2 rounded-full mt-4">
                <div
                    className="h-2 rounded-full"
                    style={{
                        width: `${percentage}%`,
                        backgroundColor: color,
                    }}
                ></div>
            </div>

            <p className="text-xs mt-2 text-[var(--textLight)]">
                {percentage}% occupation - <span style={{ color: color }}>{beds}</span>
            </p>
        </div >
    );
}
