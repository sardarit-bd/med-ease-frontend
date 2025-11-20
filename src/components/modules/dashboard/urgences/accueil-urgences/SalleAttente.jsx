export default function SalleAttente() {
  return (
    <div className="w-full h-full rounded-xl p-3 border shadow bg-gradient-to-r from-[#4ac8c6] to-[#3477e1]">
      <div className="text-white font-semibold px-4 py-1 rounded-md bg-black bg-opacity-40 inline-block mb-3">
        Salle d’attente
      </div>

      <div className="grid grid-cols-4 gap-3">
        {[1,2,3,4].map(n => (
          <div key={n} className="border-dashed border-2 border-white rounded-lg h-24"></div>
        ))}
      </div>
    </div>
  );
}
