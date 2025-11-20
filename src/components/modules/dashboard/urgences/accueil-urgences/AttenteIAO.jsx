export default function AttenteIAO() {
  return (
    <div className="w-full h-full bg-[#d2e7ff] rounded-xl p-3 border shadow">
      <div className="bg-[#4bb4ff] text-white font-semibold px-4 py-1 rounded-md inline-block mb-2">
        Attente IAO
      </div>
      <div className="bg-white border rounded-xl p-3 shadow text-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 bg-red-600 rounded-full"></div>
          <p className="font-semibold text-red-600">T1B</p>
        </div>
        <p className="text-xs">P. 28 ans</p>
        <p className="text-xs">0h20m</p>
      </div>
    </div>
  );
}
