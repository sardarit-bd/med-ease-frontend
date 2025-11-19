export default function LeftSidebar() {
  return (
    <div className="w-60 p-4 flex flex-col gap-4 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)]">

      <SectionCard title="Capacitaire en lits">
        <div className="text-sm text-gray-600">
          <p>Interne</p>
          <p>Lits() disponible(s) : 14</p>
          <p>Bloc opératoire</p>
          <p>Epscrit / Orthopédie</p>
        </div>
      </SectionCard>

      <SectionCard title="Médecine">
        <p className="text-sm text-gray-600">Lits disponibles : 2</p>
        <p className="text-sm text-gray-600">Chambre double : 2</p>
        <button className="mt-4 bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white px-5 py-2 rounded-full text-sm">
          Voir Plus
        </button>
      </SectionCard>

      <SectionCard title="Chirurgie / Orthopédie">
        <p className="text-sm text-gray-600">Lits Femmes : 6</p>
        <p className="text-sm text-gray-600">Lits Hommes : 6</p>
        <button className="mt-4 bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white px-5 py-2 rounded-full text-sm">
          Voir Plus
        </button>
      </SectionCard>

    </div>
  );
}

function SectionCard({ title, children }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <h3 className="font-semibold text-gray-800 text-sm mb-3">{title}</h3>
      {children}
    </div>
  );
}
