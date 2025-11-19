export default function PatientCard({ color }) {

    const bg = {
        background: color,
    }
    const border = {
        border: `1px solid ${color == "#EB5757" ? "#ae4b4bff" : color == "#F2994A" ? "#976437ff" : color == "#F2C94C" ? "#a68b3aff" : color == "#6FCF97" ? "#3b8259ff" : color == "#27AE60" ? "#247244ff" : "#236083ff"}`,
    }

    return (
        <div style={border} className={`bg-white shadow rounded-md p-3 mb-3 text-sm relative`}>
            <p className="font-semibold">TAVARES</p>
            <p>@ 40 A</p>
            <p>1Médec. 0h03m</p>
            <p>Convulsions</p>

            <div style={bg} className={`absolute right-0 top-0 rounded-md w-[22px] flex items- center justify-center h-[22px] text - white`}>
                2
            </div>
        </div >
    );
}
